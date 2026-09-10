<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$contentRoot = $root . '/content/ru/utilities';
$pages = [];
$referencePages = [];
$blockers = [];
$metrics = [
    'learning_pages' => 0,
    'reference_pages' => 0,
    'reusable_examples' => 0,
    'pages_with_example' => 0,
    'pages_with_badges' => 0,
    'examples_with_inline_setup_style' => 0,
];

$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($contentRoot, FilesystemIterator::SKIP_DOTS));
foreach ($iterator as $file) {
    if (!$file->isFile() || strtolower($file->getExtension()) !== 'md' || $file->getFilename() === 'index.md') {
        continue;
    }
    $path = $file->getPathname();
    $relative = str_replace('\\', '/', substr($path, strlen($root) + 1));
    if (str_contains($relative, '/reference/') || $relative === 'content/ru/utilities/reference.md') {
        $referencePages[] = $path;
    } else {
        $pages[] = $path;
    }
}
sort($pages, SORT_STRING);
sort($referencePages, SORT_STRING);
$metrics['learning_pages'] = count($pages);
$metrics['reference_pages'] = count($referencePages);

foreach ($pages as $path) {
    $markdown = (string) file_get_contents($path);
    $relative = str_replace('\\', '/', substr($path, strlen($root) + 1));
    if (preg_match('/^title:\s*["\']?[^\n]+\([a-z][a-z0-9_.:\/ -]*\)["\']?\s*$/mi', $markdown) === 1) {
        $blockers[] = ['code' => 'technical_suffix_in_title', 'path' => $relative];
    }
    if (str_contains($markdown, ':badge[')) {
        $metrics['pages_with_badges']++;
    } else {
        $blockers[] = ['code' => 'badge_missing', 'path' => $relative];
    }
    if (!preg_match('/^:::example\s*\{[^}\n]*\bid=["\'][^"\']+["\'][^}\n]*\}\s*$/mu', $markdown, $match, PREG_OFFSET_CAPTURE)) {
        $blockers[] = ['code' => 'reusable_example_missing', 'path' => $relative];
        continue;
    }
    $metrics['pages_with_example']++;
    if (str_contains($match[0][0], 'label="Результат"') || str_contains($match[0][0], "label='Результат'")) {
        $blockers[] = ['code' => 'generic_example_label', 'path' => $relative];
    }
    $before = substr($markdown, 0, $match[0][1]);
    if (preg_match_all('/^##\s+/m', $before) > 2) {
        $blockers[] = ['code' => 'example_buried_after_reference_sections', 'path' => $relative];
    }
    if (preg_match('/^\|\s*\.-?[a-z]/mi', $markdown) === 1) {
        $blockers[] = ['code' => 'class_cell_has_css_dot', 'path' => $relative];
    }
}

$examples = glob($root . '/examples/utilities/*/*/index.html') ?: [];
sort($examples, SORT_STRING);
$metrics['reusable_examples'] = count($examples);
foreach ($examples as $path) {
    $html = (string) file_get_contents($path);
    $relative = str_replace('\\', '/', substr($path, strlen($root) + 1));
    $firstLine = strtok($html, "\n") ?: '';
    if (preg_match('/\bmax-w-[a-z0-9_-]+\b/i', $firstLine) === 1) {
        $blockers[] = ['code' => 'root_example_grid_is_artificially_narrow', 'path' => $relative];
    }
    if (preg_match('/\b\d+(?:\.\d+)?(?:px|rem)\b/i', $html) === 1) {
        $blockers[] = ['code' => 'absolute_size_in_example', 'path' => $relative];
    }
    if (str_contains($html, 'style=')) {
        $metrics['examples_with_inline_setup_style']++;
    }
}

$report = [
    'schema' => 'ui-doc.utility_documentation_quality.v1',
    'status' => $blockers === [] ? 'pass' : 'needs_revision',
    'metrics' => $metrics,
    'blocker_count' => count($blockers),
    'blockers' => $blockers,
];

echo json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n";
exit($blockers === [] ? 0 : 1);
