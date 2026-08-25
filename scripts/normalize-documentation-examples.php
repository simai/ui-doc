<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$apply = in_array('--apply', $argv, true);
$contentRoot = $root . '/content';
$paths = [];
$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($contentRoot, FilesystemIterator::SKIP_DOTS),
);
foreach ($iterator as $file) {
    if ($file->isFile() && strtolower($file->getExtension()) === 'md') {
        $paths[] = $file->getPathname();
    }
}
sort($paths, SORT_STRING);

$summary = [
    'schema' => 'ui-doc.example_normalization.v1',
    'mode' => $apply ? 'apply' : 'dry-run',
    'files_scanned' => count($paths),
    'files_changed' => 0,
    'table_markers_removed' => 0,
    'example_pages_normalized' => 0,
    'demonstration_fences_removed' => 0,
    'duplicate_headings_removed' => 0,
    'changed_files' => [],
];

foreach ($paths as $path) {
    $source = (string) file_get_contents($path);
    $normalized = preg_replace_callback(
        '/^\h*\{\.table\}\h*\R?/m',
        static function () use (&$summary): string {
            $summary['table_markers_removed']++;

            return '';
        },
        $source,
    );
    if (! is_string($normalized)) {
        throw new RuntimeException("Cannot normalize table markers in [$path].");
    }

    if (preg_match(
        '/^:::example\s+\{[^}]*\bid="[^"]+"[^}]*}\s*$.*?^:::\s*$/ms',
        $normalized,
        $example,
        PREG_OFFSET_CAPTURE,
    ) === 1) {
        $exampleOffset = (int) $example[0][1];
        $before = substr($normalized, 0, $exampleOffset);
        preg_match_all(
            '/^(#{2,6})\s+([^\n]*(?:Пример|пример|Example|example|Usage Example)[^\n]*)\s*$/mu',
            $before,
            $headings,
            PREG_SET_ORDER | PREG_OFFSET_CAPTURE,
        );
        if ($headings !== []) {
            $run = [$headings[count($headings) - 1]];
            for ($index = count($headings) - 2; $index >= 0; $index--) {
                $later = $run[count($run) - 1];
                $afterCurrent = (int) $headings[$index][0][1] + strlen((string) $headings[$index][0][0]);
                $beforeLater = (int) $later[0][1];
                $between = substr($before, $afterCurrent, $beforeLater - $afterCurrent);
                if (preg_match('/^#{2,6}\s+/m', $between) === 1) {
                    break;
                }
                $run[] = $headings[$index];
            }
            $run = array_reverse($run);
            $regionOffset = (int) $run[0][0][1];
            $region = substr($before, $regionOffset);
            $fenceCount = 0;
            $region = preg_replace(
                '/^(`{3,}|~{3,})[^\n]*\R.*?^\1\h*\R?/ms',
                '',
                $region,
                -1,
                $fenceCount,
            );
            if (! is_string($region)) {
                throw new RuntimeException("Cannot normalize Example fences in [$path].");
            }
            $headingCount = 0;
            $firstHeadingEnd = strpos($region, "\n");
            if ($firstHeadingEnd !== false) {
                $firstHeading = substr($region, 0, $firstHeadingEnd + 1);
                $regionBody = substr($region, $firstHeadingEnd + 1);
                $regionBody = preg_replace(
                    '/^(#{2,6})\s+([^\n]*(?:Пример|пример|Example|example|Usage Example)[^\n]*)\s*\R?/mu',
                    '',
                    $regionBody,
                    -1,
                    $headingCount,
                );
                if (! is_string($regionBody)) {
                    throw new RuntimeException("Cannot normalize Example headings in [$path].");
                }
                $region = $firstHeading . $regionBody;
            }
            if ($fenceCount > 0 || $headingCount > 0) {
                $region = preg_replace('/\n{3,}/', "\n\n", trim($region)) . "\n\n";
                $normalized = substr($normalized, 0, $regionOffset)
                    . $region
                    . substr($normalized, $exampleOffset);
                $summary['example_pages_normalized']++;
                $summary['demonstration_fences_removed'] += $fenceCount;
                $summary['duplicate_headings_removed'] += $headingCount;
            }
        }
    }

    if ($normalized === $source) {
        continue;
    }
    $relative = str_replace('\\', '/', substr($path, strlen($root) + 1));
    $summary['files_changed']++;
    $summary['changed_files'][] = $relative;
    if ($apply) {
        file_put_contents($path, $normalized);
    }
}

echo json_encode($summary, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n";
