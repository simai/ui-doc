#!/usr/bin/env php
<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$errors = [];
$check = static function (bool $condition, string $code, array $details = []) use (&$errors): void {
    if (! $condition) {
        $errors[] = ['code' => $code, ...$details];
    }
};

$header = json_decode((string) file_get_contents($root . '/content/ru/section.json'), true, 512, JSON_THROW_ON_ERROR)['header_navigation']['items'] ?? [];
$actualHeader = array_map(static fn (array $item): array => [$item['label'] ?? null, $item['href'] ?? null], $header);
$check($actualHeader === [
    ['Руководство', '/ru/guide/'],
    ['Утилиты', '/ru/utilities/'],
    ['Компоненты', '/ru/components/'],
    ['Смарт-компоненты', '/ru/smart-components/'],
], 'header_is_not_guide_plus_references', ['actual' => $actualHeader]);

foreach (['content/ru/layout', 'content/ru/smart-components/introduction.md', 'content/ru/smart-components/connection.md', 'content/ru/smart-components/lifecycle.md', 'content/ru/smart-components/catalog.md', 'content/ru/smart-components/templates-and-assets.md', 'content/ru/smart-components/examples.md'] as $removedOwner) {
    $check(! file_exists($root . '/' . $removedOwner), 'theory_remains_in_reference_tree', ['path' => $removedOwner]);
}

$requiredGuideOwners = [
    'content/ru/guide/layouts/index.md',
    'content/ru/guide/fundamentals/directions.md',
    'content/ru/guide/components/form-elements.md',
    'content/ru/guide/components/examples.md',
    'content/ru/guide/smart-components/introduction.md',
    'content/ru/guide/smart-components/connection.md',
    'content/ru/guide/smart-components/lifecycle.md',
    'content/ru/guide/smart-components/catalog-and-readiness.md',
    'content/ru/guide/smart-components/templates-and-assets.md',
    'content/ru/guide/smart-components/examples.md',
];
foreach ($requiredGuideOwners as $owner) {
    $check(is_file($root . '/' . $owner), 'guide_theory_owner_missing', ['path' => $owner]);
}

$catalogRules = [
    'content/ru/utilities/index.md' => ['/ru/guide/fundamentals/', '## Направление (LTR/RTL)'],
    'content/ru/components/index.md' => ['/ru/guide/components/examples/', '## Как устроены примеры'],
    'content/ru/smart-components/index.md' => ['/ru/guide/smart-components/introduction/', '/ru/smart-components/introduction/'],
];
foreach ($catalogRules as $path => [$requiredLink, $forbiddenText]) {
    $contents = (string) file_get_contents($root . '/' . $path);
    $check(str_contains($contents, $requiredLink), 'catalog_missing_guide_link', ['path' => $path, 'link' => $requiredLink]);
    $check(! str_contains($contents, $forbiddenText), 'catalog_contains_moved_theory', ['path' => $path, 'text' => $forbiddenText]);
}

$staleLinks = [];
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root . '/content/ru'));
foreach ($iterator as $file) {
    if (! $file->isFile() || $file->getExtension() !== 'md') {
        continue;
    }
    $contents = (string) file_get_contents($file->getPathname());
    if (str_contains($contents, '/ru/layout/') || preg_match('#/ru/smart-components/(?:introduction|connection|lifecycle|catalog|templates-and-assets|examples)/#', $contents) === 1) {
        $staleLinks[] = str_replace($root . '/', '', $file->getPathname());
    }
    preg_match_all('/^# (.+)$/m', $contents, $headings);
    $check(count($headings[1]) === 1, 'page_must_have_one_h1', ['path' => str_replace($root . '/', '', $file->getPathname()), 'count' => count($headings[1])]);
}
$check($staleLinks === [], 'stale_canonical_links', ['files' => $staleLinks]);

$report = [
    'schema' => 'ui-doc.reference_separation_audit.v1',
    'status' => $errors === [] ? 'pass' : 'fail',
    'verified' => [
        'header_items' => count($actualHeader),
        'guide_theory_owners' => count($requiredGuideOwners),
        'catalog_roots' => count($catalogRules),
    ],
    'error_count' => count($errors),
    'errors' => $errors,
];
echo json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n";
exit($errors === [] ? 0 : 1);
