<?php

declare(strict_types=1);

/**
 * Validate same-site links in generated Russian Docara output.
 *
 * External URLs are intentionally outside this check: their availability and
 * contract are verified separately. This command answers one narrow question:
 * does every rendered internal link point to a generated file in this build?
 */

$options = getopt('', ['site-root::', 'locale::', 'json']);
$repositoryRoot = dirname(__DIR__);
$siteRoot = $options['site-root'] ?? $repositoryRoot . '/build_production';
$locale = $options['locale'] ?? 'ru';
$siteRootPath = realpath($siteRoot);
$localeRoot = $siteRootPath === false ? false : $siteRootPath . '/' . $locale;

if ($localeRoot === false || !is_dir($localeRoot)) {
    fwrite(STDERR, "Generated locale directory does not exist: {$siteRoot}/{$locale}\n");
    exit(2);
}

$isExternalTarget = static function (string $target): bool {
    return $target === ''
        || str_starts_with($target, '#')
        || str_starts_with($target, '//')
        || preg_match('#^(?:https?:|mailto:|tel:|data:|javascript:)#i', $target) === 1;
};

$normalizePath = static function (string $path): string {
    $segments = [];
    foreach (explode('/', str_replace('\\', '/', $path)) as $segment) {
        if ($segment === '' || $segment === '.') {
            continue;
        }
        if ($segment === '..') {
            array_pop($segments);
            continue;
        }
        $segments[] = $segment;
    }

    return '/' . implode('/', $segments);
};

$targetExists = static function (string $target, string $sourceFile) use ($siteRootPath, $normalizePath): bool {
    $pathPart = html_entity_decode(preg_split('/[?#]/', $target, 2)[0] ?? '', ENT_QUOTES | ENT_HTML5, 'UTF-8');
    $candidate = str_starts_with($pathPart, '/')
        ? $siteRootPath . '/' . ltrim($pathPart, '/')
        : dirname($sourceFile) . '/' . $pathPart;
    $candidate = $normalizePath($candidate);

    if (!str_starts_with($candidate . '/', rtrim($siteRootPath, '/') . '/')) {
        return false;
    }

    if (is_file($candidate)) {
        return true;
    }
    if (is_dir($candidate) && is_file($candidate . '/index.html')) {
        return true;
    }

    return !pathinfo($candidate, PATHINFO_EXTENSION)
        && (is_file($candidate . '.html') || is_file($candidate . '/index.html'));
};

$findings = [];
$counts = ['html_files' => 0, 'internal_links' => 0, 'broken_links' => 0];
$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($localeRoot, FilesystemIterator::SKIP_DOTS)
);

foreach ($iterator as $file) {
    if (!$file instanceof SplFileInfo || $file->getExtension() !== 'html') {
        continue;
    }

    $counts['html_files']++;
    $sourcePath = $file->getPathname();
    $relativePath = ltrim(str_replace($siteRootPath, '', $sourcePath), '/');
    $contents = file_get_contents($sourcePath);
    if ($contents === false) {
        $findings[] = ['path' => $relativePath, 'target' => '(unreadable)'];
        $counts['broken_links']++;
        continue;
    }

    preg_match_all('/<a\b[^>]*\bhref\s*=\s*(["\'])(.*?)\1/isu', $contents, $matches);
    foreach ($matches[2] as $rawTarget) {
        $target = trim(html_entity_decode((string) $rawTarget, ENT_QUOTES | ENT_HTML5, 'UTF-8'));
        if ($isExternalTarget($target)) {
            continue;
        }

        $counts['internal_links']++;
        if ($targetExists($target, $sourcePath)) {
            continue;
        }

        $counts['broken_links']++;
        $findings[] = ['path' => $relativePath, 'target' => $target];
    }
}

$report = [
    'site_root' => $siteRootPath,
    'locale' => $locale,
    'counts' => $counts,
    'findings' => $findings,
    'status' => $findings === [] ? 'pass' : 'fail',
];

if (array_key_exists('json', $options)) {
    echo json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . PHP_EOL;
} else {
    foreach ($findings as $finding) {
        echo sprintf("broken_rendered_link: %s — %s\n", $finding['path'], $finding['target']);
    }
    echo sprintf(
        "HTML: %d; internal links: %d; broken rendered links: %d\n",
        $counts['html_files'],
        $counts['internal_links'],
        $counts['broken_links']
    );
}

exit($findings === [] ? 0 : 1);
