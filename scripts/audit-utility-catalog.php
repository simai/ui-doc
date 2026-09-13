<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$registryPath = $root . '/contracts/generated/framework-contract-registry.json';
$mapPath = $root . '/scripts/utility-documentation-map.json';
$contentRoot = $root . '/content/ru/utilities';

$registry = json_decode((string) file_get_contents($registryPath), true, 512, JSON_THROW_ON_ERROR);
$map = json_decode((string) file_get_contents($mapPath), true, 512, JSON_THROW_ON_ERROR);
$aliases = $map['page_aliases'] ?? [];
$nonVisual = $map['non_visual_families'] ?? [];
$blockers = [];
$pagesByStem = [];

$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($contentRoot, FilesystemIterator::SKIP_DOTS));
foreach ($iterator as $file) {
    if (! $file->isFile() || strtolower($file->getExtension()) !== 'md' || $file->getFilename() === 'index.md') {
        continue;
    }
    $stem = $file->getBasename('.md');
    $pagesByStem[$stem][] = $file->getPathname();
}

$families = [];
foreach ($registry['entries'] ?? [] as $entry) {
    if (($entry['kind'] ?? null) !== 'utility') {
        continue;
    }
    $family = (string) ($entry['name'] ?? '');
    if ($family === '') {
        $blockers[] = ['code' => 'utility_family_name_missing', 'id' => $entry['id'] ?? null];
        continue;
    }
    $families[] = $family;
}
sort($families, SORT_STRING);

$resolved = [];
foreach ($families as $family) {
    if (isset($nonVisual[$family])) {
        $page = $root . '/' . ltrim((string) ($nonVisual[$family]['page'] ?? ''), '/');
        if (! is_file($page)) {
            $blockers[] = ['code' => 'non_visual_family_page_missing', 'family' => $family];
        }
        $resolved[$family] = ['kind' => 'guide', 'page' => str_replace($root . '/', '', $page)];
        continue;
    }

    $stem = isset($pagesByStem[$family]) ? $family : ($aliases[$family] ?? null);
    $candidates = is_string($stem) ? ($pagesByStem[$stem] ?? []) : [];
    if (count($candidates) !== 1) {
        $blockers[] = [
            'code' => $candidates === [] ? 'utility_page_missing' : 'utility_page_ambiguous',
            'family' => $family,
            'stem' => $stem,
        ];
        continue;
    }

    $page = $candidates[0];
    $markdown = (string) file_get_contents($page);
    if (! preg_match('/^:::example\s*\{[^}\n]*\bid=["\']([^"\']+)["\']/mu', $markdown, $match)) {
        $blockers[] = ['code' => 'utility_example_missing', 'family' => $family, 'page' => $page];
        continue;
    }
    $example = $root . '/examples/' . $match[1] . '/index.html';
    if (! is_file($example)) {
        $blockers[] = ['code' => 'utility_example_file_missing', 'family' => $family, 'example' => $match[1]];
        continue;
    }
    $resolved[$family] = [
        'kind' => 'catalog',
        'page' => str_replace($root . '/', '', $page),
        'example' => str_replace($root . '/', '', $example),
    ];
}

$requiredRedirects = ['ru/utilities/reference' => 'ru/utilities'];
foreach ($map['legacy_reference_families'] ?? [] as $family) {
    if ($family === 'theme') {
        $requiredRedirects['ru/utilities/reference/theme'] = 'ru/guide/fundamentals/colors-and-themes';
        continue;
    }
    if (isset($resolved[$family]) && $resolved[$family]['kind'] === 'catalog') {
        $relative = preg_replace('#^content/ru/#', 'ru/', preg_replace('/\.md$/', '', $resolved[$family]['page']));
        $requiredRedirects['ru/utilities/reference/' . $family] = (string) $relative;
    }
}
$redirectDocument = json_decode((string) file_get_contents($root . '/redirects.json'), true, 512, JSON_THROW_ON_ERROR);
$redirects = [];
foreach ($redirectDocument['redirects'] ?? [] as $redirect) {
    $redirects[$redirect['from']] = $redirect['to'];
}
foreach ($requiredRedirects as $from => $to) {
    if (($redirects[$from] ?? null) !== $to) {
        $blockers[] = ['code' => 'legacy_utility_redirect_missing', 'from' => $from, 'expected' => $to];
    }
}

$report = [
    'schema' => 'ui-doc.utility_catalog_audit.v1',
    'status' => $blockers === [] ? 'pass' : 'needs_revision',
    'families' => count($families),
    'catalog_families' => count(array_filter($resolved, static fn (array $item): bool => $item['kind'] === 'catalog')),
    'guide_families' => count(array_filter($resolved, static fn (array $item): bool => $item['kind'] === 'guide')),
    'unique_catalog_pages' => count(array_unique(array_map(
        static fn (array $item): string => $item['page'],
        array_filter($resolved, static fn (array $item): bool => $item['kind'] === 'catalog')
    ))),
    'blocker_count' => count($blockers),
    'blockers' => $blockers,
];

echo json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n";
exit($blockers === [] ? 0 : 1);
