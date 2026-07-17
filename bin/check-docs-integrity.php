<?php

declare(strict_types=1);

/**
 * Read-only integrity check for publishable Docara Markdown.
 *
 * It deliberately checks source paths, not generated HTML: the production
 * build remains the authority for rendering, while this command keeps common
 * defects out of the source tree before a build begins.
 */

$options = getopt('', ['docs-root::', 'core-layout::', 'json']);
$repositoryRoot = dirname(__DIR__);
$docsRoot = $options['docs-root'] ?? $repositoryRoot . '/source/docs/ru';
$coreLayout = $options['core-layout'] ?? $repositoryRoot . '/source/_core/_layouts/core.blade.php';

$docsRootPath = realpath($docsRoot);
if ($docsRootPath === false || !is_dir($docsRootPath)) {
    fwrite(STDERR, "Docs root does not exist: {$docsRoot}\n");
    exit(2);
}

$findings = [];
$counts = [
    'markdown_files' => 0,
    'bom' => 0,
    'noncanonical_markdown_links' => 0,
    'broken_relative_links' => 0,
    'unsafe_iframes' => 0,
    'trusted_playground_embeds' => 0,
    'unpinned_runtime_refs' => 0,
];

$addFinding = static function (string $kind, string $path, string $detail) use (&$findings): void {
    $findings[] = [
        'kind' => $kind,
        'path' => $path,
        'detail' => $detail,
    ];
};

$normalizeTarget = static function (string $target): string {
    $target = trim($target);
    if (str_starts_with($target, '<') && str_ends_with($target, '>')) {
        $target = substr($target, 1, -1);
    }

    return preg_split('/[?#]/', $target, 2)[0] ?? '';
};

$isExternalTarget = static function (string $target): bool {
    return $target === ''
        || str_starts_with($target, '#')
        || preg_match('#^(?:https?:|mailto:|tel:|data:)#i', $target) === 1;
};

$hasSourceTarget = static function (string $target, string $sourcePath) use ($docsRootPath): bool {
    if (preg_match('#^/ru(?:/|$)#', $target) === 1) {
        $candidate = $docsRootPath . '/' . ltrim(substr($target, 3), '/');
    } elseif (str_starts_with($target, '/')) {
        // Other site-root paths may be generated routes or static assets outside
        // this locale. They are validated by the rendered-site link check.
        return true;
    } else {
        $candidate = dirname($sourcePath) . '/' . $target;
    }

    $candidate = rtrim($candidate, '/');

    if (is_file($candidate) || is_dir($candidate)) {
        return true;
    }

    if (str_ends_with($target, '.md')) {
        return false;
    }

    return is_file($candidate . '.md') || is_file($candidate . '/index.md');
};

$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($docsRootPath, FilesystemIterator::SKIP_DOTS)
);

foreach ($iterator as $file) {
    if (!$file instanceof SplFileInfo || $file->getExtension() !== 'md') {
        continue;
    }

    $counts['markdown_files']++;
    $path = $file->getPathname();
    $relativePath = ltrim(str_replace($docsRootPath, '', $path), '/');
    $contents = file_get_contents($path);
    if ($contents === false) {
        $addFinding('unreadable_file', $relativePath, 'Cannot read Markdown source.');
        continue;
    }

    if (str_starts_with($contents, "\xEF\xBB\xBF")) {
        $counts['bom']++;
        $addFinding('bom', $relativePath, 'UTF-8 BOM must be removed.');
    }

    preg_match_all('/!?\[[^\]]*\]\(([^)]+)\)/u', $contents, $links);
    foreach ($links[1] as $rawTarget) {
        $target = trim((string) preg_split('/\s+/', trim($rawTarget), 2)[0]);
        if ($isExternalTarget($target)) {
            continue;
        }

        $pathTarget = $normalizeTarget($target);
        if (str_ends_with(strtolower($pathTarget), '.md')) {
            $counts['noncanonical_markdown_links']++;
            $addFinding(
                'noncanonical_markdown_link',
                $relativePath,
                'Use the generated pretty URL instead of a local .md target: ' . $target
            );
            continue;
        }

        if ($pathTarget === '' || $hasSourceTarget($pathTarget, $path)) {
            continue;
        }

        $counts['broken_relative_links']++;
        $addFinding('broken_relative_link', $relativePath, $target);
    }

    preg_match_all('/<iframe\b[^>]*>/iu', $contents, $iframes);
    foreach ($iframes[0] as $iframe) {
        $hasTitle = preg_match('/\btitle\s*=\s*(["\']).+?\1/iu', $iframe) === 1;
        $hasLazyLoading = preg_match('/\bloading\s*=\s*(["\'])lazy\1/iu', $iframe) === 1;
        $hasSandbox = preg_match('/\bsandbox(?:\s*=|\s|>)/iu', $iframe) === 1;
        $isTrustedPlaygroundEmbed = preg_match('#\bsrc\s*=\s*(["\'])https://play\.simai\.io/embed\.html(?:\?[^"\']*)?\1#iu', $iframe) === 1;

        // The public Playground embed is intentionally unsandboxed: it runs
        // framework examples and reports its content height to the parent via
        // postMessage. Treat only its dedicated embed endpoint as trusted;
        // all other iframes must retain the stricter sandbox contract below.
        if ($isTrustedPlaygroundEmbed && $hasTitle && $hasLazyLoading) {
            $counts['trusted_playground_embeds']++;
            continue;
        }

        if ($hasTitle && $hasLazyLoading && $hasSandbox) {
            continue;
        }

        $counts['unsafe_iframes']++;
        $missing = [];
        if (!$hasTitle) {
            $missing[] = 'title';
        }
        if (!$hasLazyLoading) {
            $missing[] = 'loading=lazy';
        }
        if (!$hasSandbox) {
            $missing[] = 'sandbox';
        }
        $addFinding('unsafe_iframe', $relativePath, implode(', ', $missing));
    }
}

$runtimeFiles = array_filter([$coreLayout], 'is_file');
foreach ($runtimeFiles as $runtimeFile) {
    $contents = file_get_contents($runtimeFile);
    if (
        $contents === false
        || preg_match('/@(?:latest|main)\b|\?\?\s*[\'\"](?:latest|main)[\'\"]/i', $contents) !== 1
    ) {
        continue;
    }

    $counts['unpinned_runtime_refs']++;
    $addFinding(
        'unpinned_runtime_ref',
        ltrim(str_replace($repositoryRoot, '', $runtimeFile), '/'),
        'Runtime must be sourced from an approved immutable compatibility lock.'
    );
}

$report = [
    'docs_root' => $docsRootPath,
    'counts' => $counts,
    'findings' => $findings,
    'status' => $findings === [] ? 'pass' : 'fail',
];

if (array_key_exists('json', $options)) {
    echo json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . PHP_EOL;
} else {
    foreach ($findings as $finding) {
        echo sprintf("%s: %s — %s\n", $finding['kind'], $finding['path'], $finding['detail']);
    }
    echo sprintf(
        "Markdown: %d; BOM: %d; noncanonical .md links: %d; broken links: %d; unsafe iframes: %d; trusted Playground embeds: %d; unpinned runtime refs: %d\n",
        $counts['markdown_files'],
        $counts['bom'],
        $counts['noncanonical_markdown_links'],
        $counts['broken_relative_links'],
        $counts['unsafe_iframes'],
        $counts['trusted_playground_embeds'],
        $counts['unpinned_runtime_refs']
    );
}

exit($findings === [] ? 0 : 1);
