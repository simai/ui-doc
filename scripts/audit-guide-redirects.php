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
// Every route a reader may hold: the routes of the trees before the guide,
// and every page of the guide before it moved into its tree of parts
// (config/guide-structure.json), each straight to the page that holds it now.
$required = [
    'ru/start' => 'ru/guide/introduction/quick-start',
    'ru/start/vision' => 'ru/guide/introduction/what-is',
    'ru/start/installation' => 'ru/guide/connection/project-setup',
    'ru/start/compatibility' => 'ru/guide/connection/versions',
    'ru/start/ai' => 'ru/guide/standards/ai',
    'ru/guide/practical/ai' => 'ru/guide/standards/ai',
    'ru/fundamentals' => 'ru/guide',
    'ru/fundamentals/architecture' => 'ru/guide/introduction/levels',
    'ru/fundamentals/modifiers' => 'ru/guide/utilities/what-is',
    'ru/fundamentals/conditions' => 'ru/guide/utilities/conditions',
    'ru/fundamentals/values-and-scales' => 'ru/guide/size-and-type/scales',
    'ru/fundamentals/sizes' => 'ru/guide/size-and-type/scales',
    'ru/fundamentals/sizes/sizes' => 'ru/guide/size-and-type/size-ladder',
    'ru/fundamentals/sizes/size-scale' => 'ru/guide/size-and-type/scales',
    'ru/fundamentals/content-spacing' => 'ru/guide/size-and-type/spacing',
    'ru/fundamentals/colors-and-themes' => 'ru/guide/colour/palettes',
    'ru/fundamentals/design-tokens' => 'ru/guide/colour/design-tokens',
    'ru/fundamentals/typography-system' => 'ru/guide/size-and-type/typography',
    'ru/fundamentals/adaptive-sizing-system' => 'ru/guide/size-and-type/adaptive-sizing',
    'ru/layout' => 'ru/guide/layouts',
    'ru/layout/introduction/what-is-layout' => 'ru/guide/layouts/introduction/what-is-layout',
    'ru/layout/reference/studio-inspector' => 'ru/guide/layouts/reference/studio-inspector',
    'ru/smart-components/introduction' => 'ru/smart-components',
    'ru/smart-components/connection' => 'ru/guide/smart-components/connection',
    'ru/smart-components/lifecycle' => 'ru/guide/smart-components/lifecycle',
    'ru/smart-components/catalog' => 'ru/guide/smart-components/connection',
    'ru/smart-components/templates-and-assets' => 'ru/guide/smart-components/templates',
    'ru/smart-components/examples' => 'ru/guide/smart-components/connection',
    'ru/guide/ai' => 'ru/guide/standards/ai',
    'ru/guide/architecture' => 'ru/guide/introduction/levels',
    'ru/guide/architecture/blocks' => 'ru/guide/introduction/levels',
    'ru/guide/architecture/component-setting-names' => 'ru/guide/components/settings',
    'ru/guide/architecture/components' => 'ru/guide/introduction/levels',
    'ru/guide/architecture/composite-smart-components' => 'ru/guide/introduction/levels',
    'ru/guide/architecture/core' => 'ru/guide/introduction/levels',
    'ru/guide/architecture/framework-and-project' => 'ru/guide/introduction/framework-and-project',
    'ru/guide/architecture/layouts' => 'ru/guide/introduction/levels',
    'ru/guide/architecture/overview' => 'ru/guide/introduction/levels',
    'ru/guide/architecture/smart-components' => 'ru/guide/introduction/levels',
    'ru/guide/architecture/standards' => 'ru/guide/standards/what-is',
    'ru/guide/architecture/standards/composite-component' => 'ru/guide/standards/map',
    'ru/guide/architecture/standards/composite-host-port' => 'ru/guide/standards/map',
    'ru/guide/architecture/standards/composition-recipe' => 'ru/guide/standards/map',
    'ru/guide/architecture/standards/dynamic-composite-component' => 'ru/guide/standards/map',
    'ru/guide/architecture/standards/smart-component-manifest' => 'ru/guide/standards/map',
    'ru/guide/architecture/standards/standard-contract' => 'ru/guide/standards/what-is',
    'ru/guide/architecture/utilities' => 'ru/guide/introduction/levels',
    'ru/guide/components/examples' => 'ru/guide/components/examples-and-project',
    'ru/guide/components/form-elements' => 'ru/guide/components/form-fields',
    'ru/guide/connection/versions-and-updates' => 'ru/guide/connection/versions',
    'ru/guide/connection/versions-and-updates/adaptive-sizing-v1' => 'ru/guide/connection/updating',
    'ru/guide/connection/versions-and-updates/change-event' => 'ru/guide/connection/updating',
    'ru/guide/connection/versions-and-updates/change-history' => 'ru/guide/connection/versions',
    'ru/guide/connection/versions-and-updates/framework-updates' => 'ru/guide/connection/change-lifecycle',
    'ru/guide/fundamentals' => 'ru/guide/colour',
    'ru/guide/fundamentals/adaptive-sizing' => 'ru/guide/size-and-type/adaptive-sizing',
    'ru/guide/fundamentals/adaptive-sizing/vertical-sizing' => 'ru/guide/size-and-type/vertical-sizing',
    'ru/guide/fundamentals/borders' => 'ru/guide/size-and-type/borders-and-radii',
    'ru/guide/fundamentals/cascade-layers' => 'ru/guide/colour/cascade-layers',
    'ru/guide/fundamentals/colors-and-themes' => 'ru/guide/colour/palettes',
    'ru/guide/fundamentals/colors-and-themes/naming-rules' => 'ru/guide/colour/design-tokens',
    'ru/guide/fundamentals/colors-and-themes/themes' => 'ru/guide/colour/themes',
    'ru/guide/fundamentals/colour-palettes' => 'ru/guide/colour/palettes',
    'ru/guide/fundamentals/colour-palettes/error' => 'ru/guide/colour/palettes',
    'ru/guide/fundamentals/colour-palettes/neutral' => 'ru/guide/colour/palettes',
    'ru/guide/fundamentals/colour-palettes/primary' => 'ru/guide/colour/palettes',
    'ru/guide/fundamentals/colour-palettes/secondary' => 'ru/guide/colour/palettes',
    'ru/guide/fundamentals/colour-palettes/success' => 'ru/guide/colour/palettes',
    'ru/guide/fundamentals/colour-palettes/tertiary' => 'ru/guide/colour/palettes',
    'ru/guide/fundamentals/colour-palettes/transparent-white-black' => 'ru/guide/colour/palettes',
    'ru/guide/fundamentals/colour-palettes/warning' => 'ru/guide/colour/palettes',
    'ru/guide/fundamentals/colour-roles' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/colour-roles/disable' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/colour-roles/error' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/colour-roles/focus' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/colour-roles/interactive' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/colour-roles/link' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/colour-roles/main' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/colour-roles/mark' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/colour-roles/outline' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/colour-roles/primary' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/colour-roles/secondary' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/colour-roles/special' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/colour-roles/success' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/colour-roles/supporting' => 'ru/guide/colour/design-tokens',
    'ru/guide/fundamentals/colour-roles/surface' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/colour-roles/tertiary' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/colour-roles/warning' => 'ru/guide/colour/colour-roles',
    'ru/guide/fundamentals/conditions' => 'ru/guide/utilities/conditions',
    'ru/guide/fundamentals/design-tokens' => 'ru/guide/colour/design-tokens',
    'ru/guide/fundamentals/design-tokens/all-tokens' => 'ru/guide/colour/all-tokens',
    'ru/guide/fundamentals/directions' => 'ru/guide/size-and-type/directions',
    'ru/guide/fundamentals/focus' => 'ru/guide/size-and-type/focus',
    'ru/guide/fundamentals/language' => 'ru/guide/size-and-type/language',
    'ru/guide/fundamentals/layout-classes' => 'ru/guide/utilities/layout',
    'ru/guide/fundamentals/modifiers' => 'ru/guide/utilities/what-is',
    'ru/guide/fundamentals/size-scale' => 'ru/guide/size-and-type/scales',
    'ru/guide/fundamentals/size-scale/pixels' => 'ru/guide/size-and-type/scales',
    'ru/guide/fundamentals/sizes' => 'ru/guide/size-and-type/size-ladder',
    'ru/guide/fundamentals/spacing' => 'ru/guide/size-and-type/spacing',
    'ru/guide/fundamentals/spacing/scale' => 'ru/guide/size-and-type/spacing-scale',
    'ru/guide/fundamentals/transparency' => 'ru/guide/colour/transparency',
    'ru/guide/fundamentals/typography' => 'ru/guide/size-and-type/typography',
    'ru/guide/fundamentals/values-and-scales' => 'ru/guide/size-and-type/scales',
    'ru/guide/introduction/what-is-simai-framework' => 'ru/guide/introduction/what-is',
    'ru/guide/layouts/reference/document' => 'ru/guide/layouts/introduction/recipe-document-html',
    'ru/guide/smart-components/catalog-and-readiness' => 'ru/guide/smart-components/connection',
    'ru/guide/smart-components/cleanup' => 'ru/guide/smart-components/lifecycle',
    'ru/guide/smart-components/creating' => 'ru/guide/smart-components/structure',
    'ru/guide/smart-components/examples' => 'ru/guide/smart-components/connection',
    'ru/guide/smart-components/local-components' => 'ru/guide/smart-components/structure',
    'ru/guide/smart-components/nesting' => 'ru/guide/smart-components/composite',
    'ru/guide/smart-components/templates-and-assets' => 'ru/guide/smart-components/templates',
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
