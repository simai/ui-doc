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
$readJson = static function (string $relative) use ($read): array {
    return json_decode($read($relative), true, 512, JSON_THROW_ON_ERROR);
};

$lock = $readJson('simai-framework.lock.json');
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
$decode = static fn (string $json): array => json_decode($json, true, 512, JSON_THROW_ON_ERROR);
$adaptive = $decode($gitShow('core/contracts/adaptive-sizing.v1.json'));
$dimensions = $decode($gitShow('core/contracts/dimension-policy.v1.json'));
$aliases = $decode($gitShow('core/contracts/utility-module-aliases.v1.json'));
$coreCss = $gitShow('core/css/core.css');
$smartBase = $gitShow('core/js/smart-base.js');
$registry = $readJson('contracts/generated/framework-contract-registry.json');

$blockers = [];
$check = static function (bool $condition, string $code, array $details = []) use (&$blockers): void {
    if (! $condition) {
        $blockers[] = ['code' => $code, ...$details];
    }
};

$expectedCore = 'e2e5d0fec53dbd40d298299c8c3be0f038c3deb5';
$expectedSmart = '839ca74ae47e50b69ddde46b8995c48031303bae';
$check($coreRevision === $expectedCore, 'core_revision_mismatch', ['actual' => $coreRevision]);
$check($smartRevision === $expectedSmart, 'smart_revision_mismatch', ['actual' => $smartRevision]);
$check(($adaptive['meta']['unit'] ?? null) === 'rem', 'adaptive_unit_is_not_rem');
$check(
    ($adaptive['meta']['rootPolicy'] ?? null) === 'preserve-user-agent-default',
    'root_policy_mismatch',
);

$expectedRoles = ['1/3', '1/2', '1', '2', '3'];
$actualRoles = array_map('strval', array_keys($adaptive['controls']['sizeRoles'] ?? []));
$check($actualRoles === $expectedRoles, 'control_roles_mismatch', [
    'expected' => $expectedRoles,
    'actual' => $actualRoles,
]);

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
foreach ($expectedRoles as $role) {
    $lineHeightRole = $adaptive['controls']['sizeRoles'][$role]['lineHeightRole'] ?? null;
    foreach (['mobile', 'desktop'] as $mode) {
        $linePrimitive = $adaptive['typography']['lineHeights'][$lineHeightRole][$mode] ?? '';
        $paddingPrimitive = $adaptive['controls']['tightness']['default'][$role][$mode] ?? '';
        $computedHeights[$role][$mode] = $primitivePx($linePrimitive) + 2 * $primitivePx($paddingPrimitive);
    }
}
$expectedHeights = [
    '1/3' => ['mobile' => 24, 'desktop' => 28],
    '1/2' => ['mobile' => 28, 'desktop' => 32],
    '1' => ['mobile' => 36, 'desktop' => 40],
    '2' => ['mobile' => 44, 'desktop' => 48],
    '3' => ['mobile' => 52, 'desktop' => 56],
];
$check($computedHeights === $expectedHeights, 'control_height_values_mismatch', [
    'expected' => $expectedHeights,
    'actual' => $computedHeights,
]);

$architecture = $read('content/ru/fundamentals/architecture.md');
$architectureText = preg_replace('/\s+/u', ' ', $architecture) ?? $architecture;
$adaptivePage = $read('content/ru/fundamentals/adaptive-sizing-system.md');
$valuesPage = $read('content/ru/fundamentals/values-and-scales.md');
$modifiersPage = $read('content/ru/fundamentals/modifiers.md');
$aiPage = $read('content/ru/start/ai.md');
$visionPage = $read('content/ru/start/vision.md');
$fundamentalsIndex = $read('content/ru/fundamentals/index.md');

$check(str_contains($architecture, 'title: "Архитектура"'), 'architecture_title_mismatch');
$check(str_contains($architecture, '# Архитектура'), 'architecture_h1_mismatch');
$check(
    str_contains(
        $architecture,
        'description: "Уровни SIMAI Framework: от токенов и утилит до Smart-компонентов и блоков."',
    ),
    'architecture_description_mismatch',
);

foreach ([
    'Токены и Core',
    '→ утилиты',
    '→ компоненты',
    '→ Smart-компоненты',
    '→ сложные Smart-компоненты',
    '→ блоки',
] as $snippet) {
    $check(str_contains($architecture, $snippet), 'architecture_path_missing', ['snippet' => $snippet]);
}
foreach (['Docara', 'Larena', 'Bitrix', 'AI First', 'Секции и Layout', 'Backend →'] as $externalLevel) {
    $check(! str_contains($architecture, $externalLevel), 'external_level_leaked_into_architecture', [
        'value' => $externalLevel,
    ]);
}
$check(
    str_contains($architecture, '## Где заканчивается SIMAI Framework'),
    'framework_boundary_heading_missing',
);
$check(
    str_contains($architectureText, 'SIMAI Framework отвечает за внешний вид и поведение интерфейса'),
    'framework_responsibility_missing',
);
$check(
    str_contains($architectureText, 'Приложение отвечает за страницы, данные, права доступа и бизнес-операции'),
    'consumer_responsibility_missing',
);
$check(! str_contains($visionPage, 'Секции и Layout'), 'vision_external_levels_not_removed');
$check(! str_contains($visionPage, 'Backend или Larena'), 'vision_backend_chain_not_removed');
$check(! str_contains($aiPage, 'backend-адаптеру или Larena'), 'ai_backend_chain_not_removed');

$check(str_contains($coreCss, '--sf-px: 1px'), 'hairline_token_missing_from_core');
$check(str_contains($valuesPage, '--sf-px'), 'hairline_rule_missing_from_docs');
$check(str_contains($valuesPage, 'Рабочая единица размерной системы — `rem`'), 'rem_rule_missing');
$check(str_contains($adaptivePage, 'направление развития'), 'future_scale_not_separated');
foreach (['1/5', '1/4', '1/3', '1/2', '1', '2', '3', '4', '5'] as $role) {
    $check(str_contains($adaptivePage, '| `' . $role . '` |'), 'platform_role_missing', ['role' => $role]);
}
foreach (['1/5', '1/4', '4', '5'] as $role) {
    $check(
        ! str_contains($adaptivePage, '--sf-ui-' . $role . '--control-height'),
        'unshipped_control_token_documented',
        ['role' => $role],
    );
}

$check(
    ($aliases['aliases']['column-gap/default'] ?? null) === 'gap/default',
    'loader_alias_contract_mismatch',
);
$check(str_contains($modifiersPage, 'column-gap/*'), 'loader_alias_not_explained');
$check(str_contains($modifiersPage, 'Физические'), 'physical_direction_rule_missing');
$check(str_contains($modifiersPage, 'канонические модули `gap/*`'), 'canonical_name_rule_missing');
$check(str_contains($smartBase, 'class SfBaseElement extends HTMLElement'), 'smart_base_element_missing');
$check(str_contains($smartBase, 'customElements.define'), 'smart_custom_element_registration_missing');
$check(
    str_contains($architecture, '## Как работают Smart-компоненты'),
    'smart_component_heading_missing',
);
$check(
    str_contains($architectureText, 'Smart-компонент — готовый интерактивный элемент'),
    'smart_component_explanation_missing',
);
$check(
    str_contains($architectureText, 'Loader — встроенный загрузчик SIMAI Framework'),
    'loader_explanation_missing',
);
foreach (['smart-base.js', 'Custom Elements', 'React', 'Vue', 'manifest', 'runtime', 'registry'] as $internalTerm) {
    $check(! str_contains($architecture, $internalTerm), 'internal_term_leaked_into_architecture', [
        'value' => $internalTerm,
    ]);
}
$check(str_contains($aiPage, 'Кандидат ещё не является'), 'ai_first_candidate_boundary_missing');
$check(str_contains($fundamentalsIndex, '/ru/fundamentals/architecture/'), 'architecture_entrypoint_missing');

$visionNavigation = $readJson('content/ru/start/vision.page.json');
$aiNavigation = $readJson('content/ru/start/ai.page.json');
$architectureNavigation = $readJson('content/ru/fundamentals/architecture.page.json');
$check(($visionNavigation['navigation']['order'] ?? null) === 5, 'vision_navigation_order_mismatch');
$check(($aiNavigation['navigation']['order'] ?? null) === 30, 'ai_navigation_order_mismatch');
$check(($architectureNavigation['navigation']['order'] ?? null) === 5, 'architecture_navigation_order_mismatch');

$dimensionStatuses = array_values(array_unique(array_column($dimensions['rules'] ?? [], 'status')));
$check(in_array('accepted-system-definition', $dimensionStatuses, true), 'dimension_policy_missing_system_definition');
$check(in_array('accepted-runtime-geometry', $dimensionStatuses, true), 'dimension_policy_missing_runtime_geometry');
$check(($registry['counts']['component'] ?? null) === 63, 'registry_component_count_mismatch');
$check(($registry['counts']['smart-component'] ?? null) === 43, 'registry_smart_count_mismatch');
$check(($registry['counts']['utility'] ?? null) === 228, 'registry_utility_count_mismatch');

$report = [
    'schema' => 'ui-doc.foundation_documentation_audit.v1',
    'status' => $blockers === [] ? 'pass' : 'fail',
    'candidate' => [
        'pair_id' => $lock['runtime']['pair_id'] ?? null,
        'core' => $coreRevision,
        'smart' => $smartRevision,
        'adaptive_contract' => $adaptive['meta']['contractId'] ?? null,
        'adaptive_contract_version' => $adaptive['meta']['version'] ?? null,
    ],
    'verified' => [
        'architecture_levels' => 6,
        'current_control_roles' => $actualRoles,
        'current_control_heights_px' => $computedHeights,
        'platform_scale_roles_documented' => 9,
        'unshipped_roles_marked_as_development' => ['1/5', '1/4', '4', '5'],
        'working_unit' => $adaptive['meta']['unit'] ?? null,
        'hairline_token' => '--sf-px',
        'loader_alias' => ['column-gap/default' => $aliases['aliases']['column-gap/default'] ?? null],
        'smart_public_primitive' => 'Custom Elements',
        'registry_counts' => $registry['counts'] ?? [],
        'navigation_orders' => [
            'start.vision' => $visionNavigation['navigation']['order'] ?? null,
            'fundamentals.architecture' => $architectureNavigation['navigation']['order'] ?? null,
            'start.ai' => $aiNavigation['navigation']['order'] ?? null,
        ],
    ],
    'blocker_count' => count($blockers),
    'blockers' => $blockers,
];

$json = json_encode(
    $report,
    JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR,
) . "\n";
if (is_string($output) && $output !== '') {
    $absolute = str_starts_with($output, '/') ? $output : $root . '/' . $output;
    if (! is_dir(dirname($absolute))) {
        mkdir(dirname($absolute), 0755, true);
    }
    file_put_contents($absolute, $json, LOCK_EX);
}
echo $json;
exit($blockers === [] ? 0 : 1);
