<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$apply = in_array('--apply', $argv, true);
$contentRoot = $root . '/content/ru/utilities';
$paths = [];
$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($contentRoot, FilesystemIterator::SKIP_DOTS),
);
foreach ($iterator as $file) {
    if ($file->isFile() && strtolower($file->getExtension()) === 'md' && $file->getFilename() !== 'index.md') {
        $paths[] = $file->getPathname();
    }
}
sort($paths, SORT_STRING);

$report = [
    'schema' => 'ui-doc.utility_page_presentation_normalization.v1',
    'mode' => $apply ? 'apply' : 'dry-run',
    'files_scanned' => count($paths),
    'files_changed' => 0,
    'titles_localized' => 0,
    'badges_added' => 0,
    'class_cells_normalized' => 0,
    'css_cells_normalized' => 0,
    'changed_files' => [],
    'diagnostics' => [],
];

foreach ($paths as $path) {
    $source = (string) file_get_contents($path);
    $normalized = $source;
    $relative = str_replace('\\', '/', substr($path, strlen($root) + 1));

    if (preg_match('/\A---\R(.*?)\R---\R/s', $normalized, $frontMatterMatch) !== 1) {
        $report['diagnostics'][] = ['code' => 'front_matter_missing', 'path' => $relative];
        continue;
    }

    $frontMatter = $frontMatterMatch[1];
    if (preg_match('/^title:\s*(["\'])(.*?)\1\s*$/m', $frontMatter, $titleMatch) !== 1) {
        $report['diagnostics'][] = ['code' => 'title_missing', 'path' => $relative];
        continue;
    }

    $oldTitle = $titleMatch[2];
    $newTitle = preg_replace('/\s+\([a-z][a-z0-9_.:\/ -]*\)\s*$/i', '', $oldTitle) ?? $oldTitle;
    if ($newTitle !== $oldTitle) {
        $quotedOld = $titleMatch[0];
        $quotedNew = 'title: ' . $titleMatch[1] . $newTitle . $titleMatch[1];
        $normalized = preg_replace('/^' . preg_quote($quotedOld, '/') . '$/m', $quotedNew, $normalized, 1) ?? $normalized;
        $normalized = preg_replace('/^#\s+' . preg_quote($oldTitle, '/') . '\s*$/m', '# ' . $newTitle, $normalized, 1) ?? $normalized;
        $report['titles_localized']++;
    }

    if (! str_contains($normalized, ':badge[')) {
        $tags = [];
        if (preg_match('/^tags:\s*\[([^\]]*)\]\s*$/m', $frontMatter, $tagsMatch) === 1) {
            $tags = array_values(array_filter(array_map(
                static fn (string $tag): string => trim($tag, " \t\n\r\0\x0B\"'"),
                explode(',', $tagsMatch[1]),
            )));
        }
        if ($tags !== []) {
            $package = $tags[0];
            $conditions = array_values(array_intersect(['sm', 'md', 'lg', 'xl', 'xxl'], $tags));
            $badges = [':badge[' . $package . ']{type=main scheme=on-surface size=1}'];
            foreach ($conditions as $condition) {
                $badges[] = ':badge[' . $condition . ']{type=tonal scheme=neutral size=1}';
            }
            $h1 = '# ' . $newTitle;
            $normalized = preg_replace(
                '/^' . preg_quote($h1, '/') . '[ \t]*\R/m',
                $h1 . "\n\n" . implode(' ', $badges) . "\n\n",
                $normalized,
                1,
            ) ?? $normalized;
            $report['badges_added']++;
        } else {
            $report['diagnostics'][] = ['code' => 'tags_missing', 'path' => $relative];
        }
    }

    $normalized = preg_replace(
        '/(^:badge\[[^\r\n]+(?:\r\n|\n|\r))(?!\r\n|\n|\r)/m',
        "$1\n",
        $normalized,
    ) ?? $normalized;

    // Do not use PCRE `\R` without Unicode mode here: byte 0x85 is the
    // second byte of the Cyrillic letter "х" in UTF-8 and may be treated as
    // a next-line separator. Split only on the three actual newline forms.
    $hadTrailingNewline = preg_match('/(?:\r\n|\n|\r)\z/', $normalized) === 1;
    $lines = preg_split('/\r\n|\n|\r/', rtrim($normalized, "\r\n")) ?: [];
    foreach ($lines as &$line) {
        if (! str_starts_with(ltrim($line), '|') || preg_match('/^\s*\|?\s*:?-{3,}/', $line) === 1) {
            continue;
        }
        $cells = explode('|', $line);
        if (count($cells) < 3) {
            continue;
        }

        $first = trim($cells[1]);
        if (preg_match('/^`\.([a-z0-9][a-z0-9_:\/{}.*-]*)`$/i', $first, $classMatch) === 1) {
            $cells[1] = ' `' . $classMatch[1] . '` ';
            $report['class_cells_normalized']++;
        } elseif (preg_match('/^\.?([a-z][a-z0-9_:\/{}.*-]*)$/i', $first, $classMatch) === 1) {
            $cells[1] = ' `' . $classMatch[1] . '` ';
            $report['class_cells_normalized']++;
        } else {
            $unquoted = trim($first, '`');
            $unquoted = preg_replace('/\s*>\s*\*\s*\+\s*\*\s*$/', '', $unquoted) ?? $unquoted;
            if (preg_match('/(?<![a-z0-9_.-])\.(?=-?[a-z])/i', $unquoted) === 1) {
                $classList = preg_replace('/(?<![a-z0-9_.-])\.(?=-?[a-z])/i', '', $unquoted) ?? $unquoted;
                $classList = str_replace('`', '', $classList);
                $cells[1] = ' `' . trim($classList) . '` ';
                $report['class_cells_normalized']++;
            }
        }

        $second = trim($cells[2]);
        if ($second !== '' && preg_match('/^[a-z-]+\s*:\s*[^|]+;$/i', trim($second, '`')) === 1) {
            $replacement = ' `' . str_replace('`', '', $second) . '` ';
            if ($cells[2] !== $replacement) {
                $cells[2] = $replacement;
                $report['css_cells_normalized']++;
            }
        }

        $line = implode('|', $cells);
    }
    unset($line);
    $normalized = implode("\n", $lines);
    if ($hadTrailingNewline) {
        $normalized .= "\n";
    }

    if ($normalized === $source) {
        continue;
    }

    $report['files_changed']++;
    $report['changed_files'][] = $relative;
    if ($apply) {
        file_put_contents($path, $normalized);
    }
}

echo json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n";
