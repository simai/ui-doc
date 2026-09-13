#!/usr/bin/env php
<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$output = null;
foreach ($argv as $argument) {
    if (str_starts_with($argument, '--output=')) {
        $output = substr($argument, strlen('--output='));
    }
}
$required = [
    'ru/start' => 'ru/guide/introduction/quick-start',
    'ru/start/vision' => 'ru/guide/introduction/what-is-simai-framework',
    'ru/start/installation' => 'ru/guide/connection/project-setup',
    'ru/start/compatibility' => 'ru/guide/connection/versions-and-updates',
    'ru/start/ai' => 'ru/guide/practical/ai',
    'ru/fundamentals' => 'ru/guide/fundamentals',
    'ru/fundamentals/architecture' => 'ru/guide/architecture/overview',
    'ru/fundamentals/modifiers' => 'ru/guide/fundamentals/modifiers',
    'ru/fundamentals/conditions' => 'ru/guide/fundamentals/conditions',
    'ru/fundamentals/values-and-scales' => 'ru/guide/fundamentals/values-and-scales',
    'ru/fundamentals/sizes' => 'ru/guide/fundamentals/sizes',
    'ru/fundamentals/sizes/sizes' => 'ru/guide/fundamentals/sizes',
    'ru/fundamentals/sizes/size-scale' => 'ru/guide/fundamentals/size-scale',
    'ru/fundamentals/content-spacing' => 'ru/guide/fundamentals/spacing',
    'ru/fundamentals/colors-and-themes' => 'ru/guide/fundamentals/colors-and-themes',
    'ru/fundamentals/design-tokens' => 'ru/guide/fundamentals/design-tokens',
    'ru/fundamentals/typography-system' => 'ru/guide/fundamentals/typography',
    'ru/fundamentals/adaptive-sizing-system' => 'ru/guide/fundamentals/adaptive-sizing',
    'ru/layout' => 'ru/guide/layouts',
    'ru/layout/introduction/what-is-layout' => 'ru/guide/layouts/introduction/what-is-layout',
    'ru/layout/reference/studio-inspector' => 'ru/guide/layouts/reference/studio-inspector',
    'ru/smart-components/introduction' => 'ru/guide/smart-components/introduction',
    'ru/smart-components/connection' => 'ru/guide/smart-components/connection',
    'ru/smart-components/lifecycle' => 'ru/guide/smart-components/lifecycle',
    'ru/smart-components/catalog' => 'ru/guide/smart-components/catalog-and-readiness',
    'ru/smart-components/templates-and-assets' => 'ru/guide/smart-components/templates-and-assets',
    'ru/smart-components/examples' => 'ru/guide/smart-components/examples',
];
$data = json_decode((string) file_get_contents($root . '/redirects.json'), true, 512, JSON_THROW_ON_ERROR);
$blockers = [];
$map = [];
foreach ($data['redirects'] ?? [] as $row) {
    $from = $row['from'] ?? '';
    $to = $row['to'] ?? '';
    if (isset($map[$from])) {
        $blockers[] = ['code' => 'duplicate_source', 'from' => $from];
    }
    $map[$from] = $to;
    if (str_starts_with($to, 'ru/start') || str_starts_with($to, 'ru/fundamentals')) {
        $blockers[] = ['code' => 'removed_tree_target', 'from' => $from, 'to' => $to];
    }
}
foreach ($required as $from => $to) {
    if (($map[$from] ?? null) !== $to) {
        $blockers[] = ['code' => 'required_redirect_mismatch', 'from' => $from, 'expected' => $to, 'actual' => $map[$from] ?? null];
    }
}
foreach ($map as $from => $to) {
    if ($from === $to || isset($map[$to])) {
        $blockers[] = ['code' => 'chain_or_cycle', 'from' => $from, 'to' => $to];
    }
}
$report = [
    'schema' => 'ui-doc.guide_redirect_audit.v1',
    'status' => $blockers === [] ? 'pass' : 'fail',
    'verified' => ['required' => count($required), 'all_redirects' => count($map), 'direct_only' => true],
    'blocker_count' => count($blockers),
    'blockers' => $blockers,
];
$encoded = json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n";
if (is_string($output) && $output !== '') {
    $absolute = str_starts_with($output, '/') ? $output : $root . '/' . $output;
    if (! is_dir(dirname($absolute))) {
        mkdir(dirname($absolute), 0755, true);
    }
    file_put_contents($absolute, $encoded, LOCK_EX);
}
echo $encoded;
exit($blockers === [] ? 0 : 1);
