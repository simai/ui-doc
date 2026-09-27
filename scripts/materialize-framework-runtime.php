#!/usr/bin/env php
<?php

declare(strict_types=1);

/**
 * Materialize the exact bounded SIMAI Framework pair accepted for this site.
 *
 * Docara keeps its Framework projection inside the Composer package.
 * This project command replaces only that ignored installed projection from
 * immutable Git objects, then copies the resulting wrapper lock to ui-doc.
 */

const UI_METADATA_REVISION = '2d5ebda33d4ed3c1a57c9bea5bf345bc43ed2f1d';
const UI_RUNTIME_REVISION = '56cd91e1d7a3dc19b32a2acfdaa1389744e174a7';
const SMART_METADATA_REVISION = 'd8aa0f2b37b8929aae392a7983ee5fb2690c502d';
const SMART_RUNTIME_REVISION = '903ad66c4f4fd7b9674a537ddd315652b9c375c4';
const SOURCE_REVISION = '58150ae0499a4160c78abb61204738f707bbdf22';
const BUILDER_REVISION = 'c7947ee623384a301ab10ab184079361a7dfd925';
const RELEASE_LOCK = 'contracts/releases/ui-56cd91e1d7a3-smart-903ad66c4f4f.lock.json';

$projectRoot = dirname(__DIR__);
$uiRoot = $argv[1] ?? null;
$smartRoot = $argv[2] ?? null;
$packageRoot = $argv[3] ?? $projectRoot . '/vendor/simai/docara';

if (! is_string($uiRoot) || ! is_string($smartRoot)) {
    fwrite(STDERR, "Usage: php scripts/materialize-framework-runtime.php /absolute/ui /absolute/ui-smart [/absolute/docara-package]\n");
    exit(2);
}

$uiRoot = realpath($uiRoot);
$smartRoot = realpath($smartRoot);
$packageRoot = is_string($packageRoot) ? realpath($packageRoot) : false;
if ($uiRoot === false || $smartRoot === false || $packageRoot === false || ! is_dir($packageRoot)) {
    throw new RuntimeException('FRAMEWORK_MATERIALIZATION_INPUT_MISSING');
}

$git = static function (string $root, array $arguments): string {
    $pipes = [];
    $process = proc_open(['git', '-C', $root, ...$arguments], [
        1 => ['pipe', 'w'],
        2 => ['pipe', 'w'],
    ], $pipes);
    if (! is_resource($process)) {
        throw new RuntimeException('FRAMEWORK_GIT_PROCESS_FAILED');
    }
    $stdout = stream_get_contents($pipes[1]);
    $stderr = stream_get_contents($pipes[2]);
    fclose($pipes[1]);
    fclose($pipes[2]);
    $status = proc_close($process);
    if ($status !== 0 || ! is_string($stdout)) {
        throw new RuntimeException('FRAMEWORK_GIT_COMMAND_FAILED: ' . trim((string) $stderr));
    }

    return $stdout;
};

$writeJson = static function (string $path, array $value): void {
    $bytes = json_encode($value, JSON_THROW_ON_ERROR | JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n";
    if (file_put_contents($path, $bytes, LOCK_EX) === false) {
        throw new RuntimeException('FRAMEWORK_MATERIALIZATION_WRITE_FAILED: ' . $path);
    }
};

$copyBytes = static function (string $bytes, array $paths): void {
    foreach ($paths as $path) {
        if (file_put_contents($path, $bytes, LOCK_EX) === false) {
            throw new RuntimeException('FRAMEWORK_MATERIALIZATION_WRITE_FAILED: ' . $path);
        }
    }
};

foreach ([
    [$uiRoot, UI_METADATA_REVISION],
    [$uiRoot, UI_RUNTIME_REVISION],
    [$smartRoot, SMART_METADATA_REVISION],
    [$smartRoot, SMART_RUNTIME_REVISION],
] as [$root, $revision]) {
    $actual = trim($git($root, ['rev-parse', $revision . '^{commit}']));
    if ($actual !== $revision) {
        throw new RuntimeException('FRAMEWORK_REVISION_MISMATCH: ' . $revision);
    }
}

$release = json_decode(
    $git($uiRoot, ['show', UI_METADATA_REVISION . ':' . RELEASE_LOCK]),
    true,
    512,
    JSON_THROW_ON_ERROR,
);
$expected = [
    'compatibility_id' => 'ui-56cd91e1d7a3-smart-903ad66c4f4f',
    'ui' => UI_RUNTIME_REVISION,
    'smart' => SMART_RUNTIME_REVISION,
    'source' => SOURCE_REVISION,
    'builder' => BUILDER_REVISION,
];
$actual = [
    'compatibility_id' => $release['compatibility_id'] ?? null,
    'ui' => $release['runtime_sources']['ui']['commit'] ?? null,
    'smart' => $release['runtime_sources']['ui-smart']['commit'] ?? null,
    'source' => $release['build_inputs']['source']['commit'] ?? null,
    'builder' => $release['build_inputs']['builder']['commit'] ?? null,
];
if ($actual !== $expected || ($release['status'] ?? null) !== 'bounded') {
    throw new RuntimeException('FRAMEWORK_RELEASE_LOCK_MISMATCH');
}

$registryBytes = $git(
    $uiRoot,
    ['show', UI_METADATA_REVISION . ':contracts/generated/framework-contract-registry.json'],
);
$documentationBytes = $git(
    $uiRoot,
    ['show', UI_METADATA_REVISION . ':contracts/generated/documentation-source.json'],
);
$registry = json_decode($registryBytes, true, 512, JSON_THROW_ON_ERROR);
if (($registry['compatibility']['id'] ?? null) !== $expected['compatibility_id']) {
    throw new RuntimeException('FRAMEWORK_REGISTRY_COMPATIBILITY_MISMATCH');
}
$docaraPair = $expected['compatibility_id'];

$projectLockPath = $projectRoot . '/simai-framework.lock.json';
$packageLockPath = $packageRoot . '/docs/site/simai-framework.lock.json';
$stubLockPath = $packageRoot . '/stubs/portable/simai-framework.lock.json';
$lock = json_decode(
    $git($projectRoot, ['show', 'HEAD:simai-framework.lock.json']),
    true,
    512,
    JSON_THROW_ON_ERROR,
);
if (($lock['runtime']['framework_registry']['source']['commit'] ?? null) !== UI_METADATA_REVISION
    || preg_match('/\A[a-f0-9]{64}\z/D', (string) ($lock['runtime']['framework_registry']['source']['sha256'] ?? '')) !== 1
) {
    throw new RuntimeException('FRAMEWORK_REGISTRY_SOURCE_PIN_MISMATCH');
}
$contractArchiveHash = $lock['runtime']['framework_registry']['source']['sha256'];

$uiSource = $release['runtime_sources']['ui'];
$smartSource = $release['runtime_sources']['ui-smart'];
$registryHash = hash('sha256', $registryBytes);
$lock['runtime']['pair_id'] = $docaraPair;
$lock['runtime']['bundle_id'] = $docaraPair
    . '-registry-' . substr($registryHash, 0, 8) . '-verified-commit-candidate-v1';
$lock['runtime']['publication_profile'] = 'verified-commit-candidate-v1';
$lock['runtime']['tag'] = null;
$lock['runtime']['ui'] = [
    'tag' => null,
    'commit' => UI_RUNTIME_REVISION,
    'tree' => 'distr',
    'mount' => 'ui',
    'sha256' => $uiSource['archive_sha256'],
    'files' => count(array_filter(
        preg_split('/\R/', trim($git($uiRoot, ['ls-tree', '-r', '--name-only', UI_RUNTIME_REVISION, 'distr']))) ?: [],
    )),
];
$lock['runtime']['ui_smart'] = [
    'tag' => null,
    'commit' => SMART_RUNTIME_REVISION,
    'tree' => 'smart',
    'mount' => 'smart',
    'sha256' => $smartSource['archive_sha256'],
    'files' => count(array_filter(
        preg_split('/\R/', trim($git($smartRoot, ['ls-tree', '-r', '--name-only', SMART_RUNTIME_REVISION, 'smart']))) ?: [],
    )),
];
$lock['runtime']['framework_registry'] = [
    'schema_id' => 'simai.framework.contract-registry',
    'compatibility_id' => $docaraPair,
    'profile' => 'plain-assets-v1',
    'relative_path' => 'contracts/generated/framework-contract-registry.json',
    'file_sha256' => $registryHash,
    'source' => [
        'commit' => UI_METADATA_REVISION,
        'tree' => 'contracts/generated',
        'tree_oid' => trim($git($uiRoot, ['rev-parse', UI_METADATA_REVISION . ':contracts/generated'])),
        'mount' => 'contract',
        'sha256' => $contractArchiveHash,
        'files' => 2,
    ],
    'documentation_source' => [
        'schema' => 'docara.documentation_source.v1',
        'relative_path' => 'contracts/generated/documentation-source.json',
        'file_sha256' => hash('sha256', $documentationBytes),
    ],
];
$lock['asset_projection']['source']['revision'] = SMART_RUNTIME_REVISION;
$lock['dynamic_asset_projection']['source']['revision'] = SMART_RUNTIME_REVISION;
$smartRuntimePaths = array_values(array_filter(
    preg_split('/\R/', trim($git(
        $smartRoot,
        ['ls-tree', '-r', '--name-only', SMART_RUNTIME_REVISION, 'smart'],
    ))) ?: [],
    static fn (string $path): bool => preg_match('~/((?:css|js)/[^/]+\.(?:css|js))$~', $path) === 1
        && ! str_contains($path, '.min.'),
));
$smartRuntimeFiles = [];
foreach ($smartRuntimePaths as $path) {
    $smartRuntimeFiles[$path] = [
        'sha256' => hash('sha256', $git($smartRoot, ['show', SMART_RUNTIME_REVISION . ':' . $path])),
    ];
}
$lock['dynamic_asset_projection']['files'] = $smartRuntimeFiles;
$lock['asset_projection']['files'] = array_intersect_key($smartRuntimeFiles, array_flip([
    'smart/alert/js/alert.js',
    'smart/buttons/js/buttons.js',
    'smart/icons/js/icons.js',
    'smart/modal/js/modal.js',
]));
$lock['runtime']['components']['sf-alert']['css'] = null;
$lock['runtime_projection']['mount'] = '_docara/vendor/simai-framework/runtime/' . UI_RUNTIME_REVISION . '/distr';
$lock['runtime_projection']['source'] = [
    'provider' => 'simai/ui',
    'revision' => UI_RUNTIME_REVISION,
    'tree_sha256' => $uiSource['archive_sha256'],
];
$lock['runtime_projection']['manifest']['path'] = 'portable/vendor/simai-framework/runtime/'
    . UI_RUNTIME_REVISION . '/runtime-manifest.json';
$lock['runtime_projection']['manifest']['public'] = '_docara/vendor/simai-framework/runtime/'
    . UI_RUNTIME_REVISION . '/runtime-manifest.json';

foreach (['ui-alert.json', 'ui-button.json'] as $manifestName) {
    $manifestPath = $packageRoot . '/resources/framework/manifests/' . $manifestName;
    $manifest = json_decode((string) file_get_contents($manifestPath), true, 512, JSON_THROW_ON_ERROR);
    $manifest['provenance']['upstream_revision'] = SMART_RUNTIME_REVISION;
    $writeJson($manifestPath, $manifest);
    $key = $manifestName === 'ui-alert.json' ? 'ui.alert' : 'ui.button';
    $lock['manifests'][$key]['sha256'] = hash_file('sha256', $manifestPath);
}

$copyBytes($registryBytes, [
    $projectRoot . '/contracts/generated/framework-contract-registry.json',
    $projectRoot . '/contract/contracts/generated/framework-contract-registry.json',
    $packageRoot . '/docs/site/contracts/generated/framework-contract-registry.json',
    $packageRoot . '/stubs/portable/contracts/generated/framework-contract-registry.json',
]);
$copyBytes($documentationBytes, [
    $projectRoot . '/contracts/generated/documentation-source.json',
    $projectRoot . '/contract/contracts/generated/documentation-source.json',
    $packageRoot . '/docs/site/contracts/generated/documentation-source.json',
    $packageRoot . '/stubs/portable/contracts/generated/documentation-source.json',
]);

$writeJson($projectLockPath, $lock);
$writeJson($packageLockPath, $lock);
$writeJson($stubLockPath, $lock);

$runtimeBase = $packageRoot . '/resources/portable/vendor/simai-framework/runtime/' . UI_RUNTIME_REVISION;
if (! is_dir($runtimeBase) && ! mkdir($runtimeBase, 0755, true) && ! is_dir($runtimeBase)) {
    throw new RuntimeException('FRAMEWORK_RUNTIME_DIRECTORY_FAILED');
}
$writeJson($runtimeBase . '/runtime-manifest.json', [
    'schema' => 'docara.framework_runtime_assets.v1',
    'root' => 'distr',
    'source' => $lock['runtime_projection']['source'],
    'files' => [],
    'packet_sha256' => hash('sha256', ''),
]);

$runPhp = static function (array $arguments) use ($packageRoot): array {
    $pipes = [];
    $process = proc_open([PHP_BINARY, ...$arguments], [
        1 => ['pipe', 'w'],
        2 => ['pipe', 'w'],
    ], $pipes, $packageRoot);
    if (! is_resource($process)) {
        throw new RuntimeException('FRAMEWORK_SYNC_PROCESS_FAILED');
    }
    $stdout = stream_get_contents($pipes[1]);
    $stderr = stream_get_contents($pipes[2]);
    fclose($pipes[1]);
    fclose($pipes[2]);
    $status = proc_close($process);
    if ($status !== 0) {
        throw new RuntimeException('FRAMEWORK_SYNC_FAILED: ' . trim((string) $stderr));
    }

    return json_decode((string) $stdout, true, 512, JSON_THROW_ON_ERROR);
};

$coreReceipt = $runPhp([$packageRoot . '/scripts/sync-framework-rule-registry.php', $uiRoot]);
$smartReceipt = $runPhp([$packageRoot . '/scripts/sync-framework-smart-runtime.php', $smartRoot]);
$viewUtilitiesPath = $packageRoot . '/resources/framework/view-utilities.json';
$viewUtilities = json_decode((string) file_get_contents($viewUtilitiesPath), true, 512, JSON_THROW_ON_ERROR);
$viewUtilities['compatibility_id'] = $docaraPair;
$viewUtilities['registry_sha256'] = $registryHash;
$writeJson($viewUtilitiesPath, $viewUtilities);
copy($packageLockPath, $projectLockPath);

fwrite(STDOUT, json_encode([
    'schema' => 'ui-doc.framework_materialization.v1',
    'status' => 'pass',
    'release_lock' => UI_METADATA_REVISION . ':' . RELEASE_LOCK,
    'candidate' => [
        'ui_metadata' => UI_METADATA_REVISION,
        'ui_runtime' => UI_RUNTIME_REVISION,
        'smart_metadata' => SMART_METADATA_REVISION,
        'smart_runtime' => SMART_RUNTIME_REVISION,
        'source' => SOURCE_REVISION,
        'builder' => BUILDER_REVISION,
    ],
    'core_projection' => $coreReceipt,
    'smart_projection' => $smartReceipt,
    'project_lock_sha256' => hash_file('sha256', $projectLockPath),
    'owner_source_modified' => false,
], JSON_THROW_ON_ERROR | JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n");
