#!/usr/bin/env php
<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$build = $argv[1] ?? $root . '/build_production';
$page = rtrim($build, '/') . '/ru/utilities/layout/query-container/index.html';
$blockers = [];

if (! is_file($page)) {
    $blockers[] = ['code' => 'viewer_control_page_missing', 'path' => $page];
} else {
    $html = (string) file_get_contents($page);
    foreach ([
        'data-docara-example-viewer' => 'viewer_button_missing',
        'data-docara-example-viewports' => 'viewport_group_missing',
        'data-docara-example-viewport="desktop"' => 'desktop_viewport_missing',
        'data-docara-example-viewport="tablet"' => 'tablet_viewport_missing',
        'data-docara-example-viewport="mobile"' => 'mobile_viewport_missing',
        '"examples.viewer":"Проверить адаптивность"' => 'viewer_translation_missing',
    ] as $needle => $code) {
        if (! str_contains($html, $needle)) {
            $blockers[] = ['code' => $code, 'path' => $page];
        }
    }
}

$runtimeFound = false;
$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($build, FilesystemIterator::SKIP_DOTS),
);
foreach ($iterator as $file) {
    if (! $file->isFile() || strtolower($file->getExtension()) !== 'js') {
        continue;
    }
    $javascript = (string) file_get_contents($file->getPathname());
    if (str_contains($javascript, 'exampleViewportWidths={desktop:1280,tablet:768,mobile:390}')) {
        $runtimeFound = true;
        break;
    }
}
if (! $runtimeFound) {
    $blockers[] = ['code' => 'viewer_runtime_missing', 'path' => $build];
}

$result = [
    'schema' => 'ui-doc.example_viewer_audit.v1',
    'status' => $blockers === [] ? 'pass' : 'fail',
    'control_page' => str_replace($root . '/', '', $page),
    'viewports' => ['desktop' => 1280, 'tablet' => 768, 'mobile' => 390],
    'blockers' => $blockers,
];
echo json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n";
exit($blockers === [] ? 0 : 1);
