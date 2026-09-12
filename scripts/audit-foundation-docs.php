#!/usr/bin/env php
<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$output = null;
$uiRoot = null;
foreach ($argv as $argument) {
    if (str_starts_with($argument, '--output=')) {
        $output = substr($argument, strlen('--output='));
    } elseif ($argument !== $argv[0] && ! str_starts_with($argument, '--')) {
        $uiRoot = $argument;
    }
}
$uiRoot = is_string($uiRoot) ? realpath($uiRoot) : false;
if ($uiRoot === false || ! is_dir($uiRoot . '/.git')) {
    fwrite(STDERR, "Usage: php scripts/audit-foundation-docs.php /absolute/path/to/ui [--output=... ]\n");
    exit(2);
}

$read = static function (string $relative) use ($root): string {
    $path = $root . '/' . $relative;
    if (! is_file($path)) {
        throw new RuntimeException('Required file is missing: ' . $relative);
    }
    return (string) file_get_contents($path);
};
$json = static fn (string $relative): array => json_decode($read($relative), true, 512, JSON_THROW_ON_ERROR);
$lock = $json('simai-framework.lock.json');
$coreRevision = $lock['runtime']['ui']['commit'] ?? null;
$smartRevision = $lock['runtime']['ui_smart']['commit'] ?? null;

$gitShow = static function (string $relative) use ($uiRoot, $coreRevision): string {
    $pipes = [];
    $process = proc_open(
        ['git', '-C', $uiRoot, 'show', $coreRevision . ':distr/' . $relative],
        [1 => ['pipe', 'w'], 2 => ['pipe', 'w']],
        $pipes,
    );
    if (! is_resource($process)) {
        throw new RuntimeException('Unable to start Git');
    }
    $stdout = stream_get_contents($pipes[1]);
    $stderr = stream_get_contents($pipes[2]);
    fclose($pipes[1]);
    fclose($pipes[2]);
    $status = proc_close($process);
    if ($status !== 0 || ! is_string($stdout)) {
        throw new RuntimeException('Unable to read exact Core object: ' . trim((string) $stderr));
    }
    return $stdout;
};

$adaptive = json_decode($gitShow('core/contracts/adaptive-sizing.v1.json'), true, 512, JSON_THROW_ON_ERROR);
$dimensions = json_decode($gitShow('core/contracts/dimension-policy.v1.json'), true, 512, JSON_THROW_ON_ERROR);
$aliases = json_decode($gitShow('core/contracts/utility-module-aliases.v1.json'), true, 512, JSON_THROW_ON_ERROR);
$coreCss = $gitShow('core/css/core.css');
$smartBase = $gitShow('core/js/smart-base.js');
$registry = $json('contracts/generated/framework-contract-registry.json');
$blockers = [];
$check = static function (bool $condition, string $code, array $details = []) use (&$blockers): void {
    if (! $condition) {
        $blockers[] = ['code' => $code, ...$details];
    }
};

$check($coreRevision === 'f25621cdd37387c44a8d27ee425cec4c4d543c7d', 'core_revision_mismatch');
$check($smartRevision === '839ca74ae47e50b69ddde46b8995c48031303bae', 'smart_revision_mismatch');
$check(($adaptive['meta']['unit'] ?? null) === 'rem', 'adaptive_unit_is_not_rem');
$check(($adaptive['meta']['rootPolicy'] ?? null) === 'preserve-user-agent-default', 'root_policy_mismatch');
$roles = array_map('strval', array_keys($adaptive['controls']['sizeRoles'] ?? []));
$check($roles === ['1/3', '1/2', '1', '2', '3'], 'control_roles_mismatch', ['actual' => $roles]);
$primitivePx = static function (string $primitive) use ($adaptive): int {
    if ($primitive === 'zero') {
        return 0;
    }
    if (preg_match('/^([a-i])(\d)$/', $primitive, $match) !== 1) {
        throw new RuntimeException('Unknown primitive: ' . $primitive);
    }
    $group = $adaptive['primitives'][$match[1]] ?? null;
    if (! is_array($group)) {
        throw new RuntimeException('Unknown primitive group: ' . $match[1]);
    }
    return (int) $group['startPx'] + ((int) $match[2] * (int) $group['stepPx']);
};
$computedHeights = [];
foreach ($roles as $role) {
    $lineHeightRole = $adaptive['controls']['sizeRoles'][$role]['lineHeightRole'] ?? null;
    foreach (['mobile', 'desktop'] as $mode) {
        $linePrimitive = $adaptive['typography']['lineHeights'][$lineHeightRole][$mode] ?? '';
        $paddingPrimitive = $adaptive['controls']['tightness']['default'][$role][$mode] ?? '';
        $computedHeights[$role][$mode] = $primitivePx($linePrimitive) + 2 * $primitivePx($paddingPrimitive);
    }
}
$check($computedHeights === [
    '1/3' => ['mobile' => 24, 'desktop' => 28],
    '1/2' => ['mobile' => 28, 'desktop' => 32],
    '1' => ['mobile' => 36, 'desktop' => 40],
    '2' => ['mobile' => 44, 'desktop' => 48],
    '3' => ['mobile' => 52, 'desktop' => 56],
], 'control_height_values_mismatch', ['actual' => $computedHeights]);
$check(str_contains($coreCss, '--sf-px: 1px'), 'hairline_token_missing_from_core');
$check(($aliases['aliases']['column-gap/default'] ?? null) === 'gap/default', 'loader_alias_contract_mismatch');
$dimensionStatuses = array_values(array_unique(array_column($dimensions['rules'] ?? [], 'status')));
$check(in_array('accepted-system-definition', $dimensionStatuses, true), 'dimension_policy_missing_system_definition');
$check(in_array('accepted-runtime-geometry', $dimensionStatuses, true), 'dimension_policy_missing_runtime_geometry');
$check(str_contains($smartBase, 'class SfBaseElement extends HTMLElement'), 'smart_base_element_missing');
$check(str_contains($smartBase, 'customElements.define'), 'smart_custom_element_registration_missing');
$check(($registry['counts']['component'] ?? null) === 63, 'registry_component_count_mismatch');
$check(($registry['counts']['smart-component'] ?? null) === 43, 'registry_smart_count_mismatch');
$check(($registry['counts']['utility'] ?? null) === 228, 'registry_utility_count_mismatch');

$pages = [
    'overview' => $read('content/ru/guide/architecture/overview.md'),
    'boundary' => $read('content/ru/guide/architecture/framework-and-project.md'),
    'loader' => $read('content/ru/guide/connection/loader.md'),
    'adaptive' => $read('content/ru/guide/fundamentals/adaptive-sizing.md'),
    'values' => $read('content/ru/guide/fundamentals/values-and-scales.md'),
    'modifiers' => $read('content/ru/guide/fundamentals/modifiers.md'),
    'colors' => $read('content/ru/guide/fundamentals/colors-and-themes.md'),
    'sizes' => $read('content/ru/guide/fundamentals/size-scale.md'),
];
$check(str_contains($pages['overview'], 'Правило выбора:'), 'level_selection_rule_missing');
foreach (['Core', 'Утилиты', 'Компоненты', 'Smart-компоненты', 'Сложные Smart-компоненты', 'Блоки'] as $level) {
    $check(str_contains($pages['overview'], '| ' . $level . ' |'), 'architecture_level_missing', ['level' => $level]);
}
$check(str_contains($pages['boundary'], 'проверяет права'), 'project_rights_boundary_missing');
$check(str_contains($pages['boundary'], 'добавляет товар в корзину'), 'project_operation_boundary_missing');
$check(str_contains($pages['loader'], 'Core, утилиты и обычные компоненты'), 'loader_scope_missing');
$check(str_contains($pages['loader'], '/ru/guide/architecture/smart-components/'), 'loader_smart_link_missing');
$check(str_contains($pages['values'], '--sf-px'), 'hairline_rule_missing_from_docs');
$check(str_contains($pages['values'], 'Рабочая единица размерной системы — `rem`'), 'rem_rule_missing');
$check(str_contains($pages['modifiers'], 'column-gap/*'), 'loader_alias_not_explained');
$check(str_contains($pages['modifiers'], 'основные модули `gap/*`'), 'primary_name_rule_missing');
$check(str_contains($pages['colors'], 'color-on-surface-variant'), 'secondary_text_role_missing');
$check(str_contains($pages['colors'], '## Палитры'), 'palette_section_missing');
$check(str_contains($pages['sizes'], '| `--sf-a0`'), 'size_scale_start_missing');
$check(str_contains($pages['sizes'], '| `--sf-i9`'), 'size_scale_end_missing');
foreach (['1/5', '1/4', '4', '5'] as $unshipped) {
    $check(! str_contains($pages['adaptive'], '| `' . $unshipped . '` |'), 'unshipped_role_documented', ['role' => $unshipped]);
}

$report = [
    'schema' => 'ui-doc.foundation_documentation_audit.v2',
    'status' => $blockers === [] ? 'pass' : 'fail',
    'candidate' => ['core' => $coreRevision, 'smart' => $smartRevision],
    'verified' => [
        'architecture_levels' => 6,
        'current_control_roles' => $roles,
        'current_control_heights_px' => $computedHeights,
        'working_unit' => $adaptive['meta']['unit'] ?? null,
        'hairline_token' => '--sf-px',
        'loader_alias' => ['column-gap/default' => $aliases['aliases']['column-gap/default'] ?? null],
        'registry_counts' => $registry['counts'] ?? [],
        'guide_root' => '/ru/guide/',
    ],
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
