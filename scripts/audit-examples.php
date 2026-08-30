<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$output = null;
foreach ($argv as $argument) {
    if (str_starts_with($argument, '--output=')) {
        $output = substr($argument, strlen('--output='));
    }
}

$markdownPaths = [];
$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($root . '/content', FilesystemIterator::SKIP_DOTS),
);
foreach ($iterator as $file) {
    if ($file->isFile() && strtolower($file->getExtension()) === 'md') {
        $markdownPaths[] = $file->getPathname();
    }
}
sort($markdownPaths, SORT_STRING);

$consumers = [];
$blockers = [];
$advisories = [];
$tableMarkers = 0;
$redundantFences = 0;
$duplicateHeadings = 0;
$escapedAnchorLinks = 0;
foreach ($markdownPaths as $path) {
    $relative = str_replace('\\', '/', substr($path, strlen($root) + 1));
    $markdown = (string) file_get_contents($path);
    $tableMarkers += preg_match_all('/^\h*\{\.table\}\h*$/m', $markdown);
    $escapedAnchorLinks += preg_match_all('/^\h*-\h+&lt;a\h+href=/mi', $markdown);
    preg_match_all(
        '/^:::example\s+\{[^}]*\bid="([^"]+)"[^}]*}\s*$.*?^:::\s*$/ms',
        $markdown,
        $examples,
        PREG_SET_ORDER | PREG_OFFSET_CAPTURE,
    );
    foreach ($examples as $example) {
        $id = (string) $example[1][0];
        $consumers[$id][] = $relative;
        $before = substr($markdown, 0, (int) $example[0][1]);
        preg_match_all(
            '/^(#{2,6})\s+([^\n]*(?:Пример|пример|Example|example|Usage Example)[^\n]*)\s*$/mu',
            $before,
            $headings,
            PREG_SET_ORDER | PREG_OFFSET_CAPTURE,
        );
        if ($headings === []) {
            preg_match_all(
                '/^(#{2,6})\s+([^\n]+)\s*$/mu',
                $before,
                $fallbackHeadings,
                PREG_SET_ORDER | PREG_OFFSET_CAPTURE,
            );
            if ($fallbackHeadings === []) {
                $blockers[] = ['code' => 'example_heading_missing', 'path' => $relative, 'id' => $id];
                continue;
            }
            $headings = [$fallbackHeadings[count($fallbackHeadings) - 1]];
        }
        $run = [$headings[count($headings) - 1]];
        for ($index = count($headings) - 2; $index >= 0; $index--) {
            $later = $run[count($run) - 1];
            $afterCurrent = (int) $headings[$index][0][1] + strlen((string) $headings[$index][0][0]);
            $beforeLater = (int) $later[0][1];
            if (preg_match('/^#{2,6}\s+/m', substr($before, $afterCurrent, $beforeLater - $afterCurrent)) === 1) {
                break;
            }
            $run[] = $headings[$index];
        }
        $region = substr($before, (int) $run[count($run) - 1][0][1]);
        $redundantFences += preg_match_all('/^(`{3,}|~{3,})[^\n]*\R.*?^\1\h*$/ms', $region);
        $duplicateHeadings += max(0, count($run) - 1);
    }
}

$examplePaths = glob($root . '/examples/*/*/*/index.html') ?: [];
sort($examplePaths, SORT_STRING);
$hashes = [];
$exampleIds = [];
$metrics = [
    'with_javascript' => 0,
    'with_assets' => 0,
    'with_inline_style' => 0,
    'with_fixed_pixel_size' => 0,
    'with_interactive_controls' => 0,
    'multi_column_without_responsive_variant' => 0,
    'buttons_without_type' => 0,
    'images_without_alt' => 0,
    'known_class_typos' => 0,
    'duplicate_attributes' => 0,
];
foreach ($examplePaths as $path) {
    $id = str_replace('\\', '/', substr(dirname($path), strlen($root . '/examples') + 1));
    $exampleIds[$id] = true;
    $html = (string) file_get_contents($path);
    $normalizedHash = hash('sha256', preg_replace('/\s+/', ' ', trim($html)) ?? trim($html));
    $hashes[$normalizedHash][] = $id;
    $directory = dirname($path);
    $metrics['with_javascript'] += (int) is_file($directory . '/index.js');
    $metrics['with_assets'] += (int) is_dir($directory . '/assets');
    $metrics['with_inline_style'] += (int) (preg_match('/\sstyle\s*=/i', $html) === 1);
    $metrics['with_fixed_pixel_size'] += (int) (preg_match('/(?:width|height|min-width|min-height|max-width|max-height)\s*:\s*\d+px/i', $html) === 1);
    $metrics['with_interactive_controls'] += (int) (preg_match('/<(?:button|input|select|textarea|details)\b/i', $html) === 1);
    $openingTag = preg_match('/^\x{FEFF}?\s*<[^>]+>/u', $html, $opening) === 1 ? $opening[0] : '';
    if (preg_match('/\bgrid-col-[2-9]\b/', $openingTag) === 1
        && preg_match('/\b(?:sm|md|lg|xl):grid-col-/', $openingTag) !== 1
    ) {
        $metrics['multi_column_without_responsive_variant']++;
        $advisories[] = ['code' => 'responsive_grid_review', 'id' => $id];
    }
    $metrics['buttons_without_type'] += preg_match_all('/<button(?![^>]*\btype=)[^>]*>/i', $html);
    $metrics['images_without_alt'] += preg_match_all('/<img(?![^>]*\balt=)[^>]*>/i', $html);
    $metrics['known_class_typos'] += preg_match_all('/\b(?:transtion|trasition)\b/i', $html);
    $metrics['duplicate_attributes'] += preg_match_all('/<[^>]*\s(class|id|name|type|href|src)=(?:"[^"]*"|\'[^\']*\')[^>]*\s\1=/i', $html);
}

foreach ($consumers as $id => $paths) {
    if (! isset($exampleIds[$id])) {
        $blockers[] = ['code' => 'example_source_missing', 'id' => $id, 'consumers' => $paths];
    }
}
foreach (array_keys($exampleIds) as $id) {
    if (! isset($consumers[$id])) {
        $blockers[] = ['code' => 'example_orphan', 'id' => $id];
    }
}
foreach ($hashes as $ids) {
    if (count($ids) > 1) {
        $blockers[] = ['code' => 'duplicate_example_html', 'ids' => $ids];
    }
}
if ($tableMarkers > 0) {
    $blockers[] = ['code' => 'table_marker_visible', 'count' => $tableMarkers];
}
if ($redundantFences > 0) {
    $blockers[] = ['code' => 'redundant_demonstration_fence', 'count' => $redundantFences];
}
if ($duplicateHeadings > 0) {
    $blockers[] = ['code' => 'duplicate_example_heading', 'count' => $duplicateHeadings];
}
if ($escapedAnchorLinks > 0) {
    $blockers[] = ['code' => 'escaped_anchor_link_visible', 'count' => $escapedAnchorLinks];
}
foreach (['buttons_without_type', 'images_without_alt', 'known_class_typos', 'duplicate_attributes'] as $metric) {
    if ($metrics[$metric] > 0) {
        $blockers[] = ['code' => $metric, 'count' => $metrics[$metric]];
    }
}

$report = [
    'schema' => 'ui-doc.example_quality_audit.v1',
    'summary' => [
        'status' => $blockers === [] ? 'pass' : 'needs_revision',
        'markdown_pages' => count($markdownPaths),
        'shared_examples' => count($exampleIds),
        'shared_example_consumers' => array_sum(array_map('count', $consumers)),
        'table_markers' => $tableMarkers,
        'redundant_demonstration_fences' => $redundantFences,
        'duplicate_example_headings' => $duplicateHeadings,
        'escaped_anchor_links' => $escapedAnchorLinks,
        'blocker_count' => count($blockers),
        'advisory_count' => count($advisories),
    ],
    'metrics' => $metrics,
    'blockers' => $blockers,
    'advisories' => $advisories,
];
$json = json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n";
if (is_string($output) && $output !== '') {
    $absoluteOutput = str_starts_with($output, '/') ? $output : $root . '/' . $output;
    if (! is_dir(dirname($absoluteOutput))) {
        mkdir(dirname($absoluteOutput), 0755, true);
    }
    file_put_contents($absoluteOutput, $json);
}
echo $json;
exit($blockers === [] ? 0 : 1);
