#!/usr/bin/env php
<?php

declare(strict_types=1);

/**
 * Materialize the exact SIMAI Framework release accepted for this site, and
 * the SIMAI Framework Pro release built against it.
 *
 * A Framework release is one `ui` commit (release lock v2, `ui-<12>`): Core in
 * `distr/`, Smart in `distr/smart/`, the same revision. Pro is its own release
 * (`pro-<12>`, simai/ui-pro, private) that names the `ui-<12>` it was built
 * and tested against; the site serves it as the Loader package `pro`.
 *
 * Docara keeps its Framework projection inside the Composer package. This
 * project command replaces only that ignored installed projection from
 * immutable Git objects, then copies the resulting wrapper lock to ui-doc.
 * Pro bytes land only in that ignored installed copy and in the built site;
 * this repository records their hashes, never the files.
 *
 *   php scripts/materialize-framework-runtime.php /absolute/ui --pro=/absolute/ui-pro
 *       [--package=/absolute/docara-package]
 *   php scripts/materialize-framework-runtime.php /absolute/ui --without-pro [--package=...]
 *
 * `--without-pro` materializes the free release alone (the Pro pages then
 * cannot load their components); it exists for bundling the free release
 * into a Docara checkout, which must never carry Pro bytes.
 */

const UI_METADATA_REVISION = 'a4210d7f8da00cc100fcce12a4be69bf38a84402';
const UI_RUNTIME_REVISION = '760be10c84f758235bfbecf2c07dfa098da083d6';
const SOURCE_REVISION = 'd96e8c8b8267a2e47313c97d5a40adf88886cc8d';
const BUILDER_REVISION = '875b800681e37e333266a1dbff5e955dbfb6046d';
const RELEASE_LOCK = 'contracts/releases/ui-760be10c84f7.lock.json';
const PRO_METADATA_REVISION = 'b1d3eda6397255ca7f0de5ef8a86cbc5aea942cf';
const PRO_RELEASE = 'pro-57f4aa1b9da1';

$projectRoot = dirname(__DIR__);
$uiRoot = null;
$proRoot = null;
$withoutPro = false;
$packageRoot = $projectRoot . '/vendor/simai/docara';
foreach (array_slice($argv, 1) as $argument) {
    if (str_starts_with($argument, '--pro=')) {
        $proRoot = substr($argument, strlen('--pro='));
    } elseif (str_starts_with($argument, '--package=')) {
        $packageRoot = substr($argument, strlen('--package='));
    } elseif ($argument === '--without-pro') {
        $withoutPro = true;
    } elseif (! str_starts_with($argument, '--') && $uiRoot === null) {
        $uiRoot = $argument;
    } else {
        $uiRoot = null;
        break;
    }
}

if (! is_string($uiRoot) || ($proRoot === null) === ! $withoutPro) {
    fwrite(STDERR, "Usage: php scripts/materialize-framework-runtime.php /absolute/ui (--pro=/absolute/ui-pro | --without-pro) [--package=/absolute/docara-package]\n");
    exit(2);
}

$uiRoot = realpath($uiRoot);
$proRoot = is_string($proRoot) ? realpath($proRoot) : null;
$packageRoot = realpath($packageRoot);
if ($uiRoot === false || $proRoot === false || $packageRoot === false || ! is_dir($packageRoot)) {
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
    ...($proRoot === null ? [] : [[$proRoot, PRO_METADATA_REVISION]]),
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
// The release is named once, by the lock this site is pinned to; the
// identifier inside that lock has to agree with its own file name, and both
// have to name the runtime revision pinned above. Release lock v2: Core and
// Smart are the same `ui` revision, Smart under `distr/smart`.
$expected = [
    'schema_version' => 2,
    'compatibility_id' => basename(RELEASE_LOCK, '.lock.json'),
    'core' => UI_RUNTIME_REVISION,
    'smart' => UI_RUNTIME_REVISION,
    'smart_path' => 'distr/smart',
    'source' => SOURCE_REVISION,
    'builder' => BUILDER_REVISION,
];
$actual = [
    'schema_version' => $release['schema_version'] ?? null,
    'compatibility_id' => $release['compatibility_id'] ?? null,
    'core' => $release['runtime_sources']['core']['commit'] ?? null,
    'smart' => $release['runtime_sources']['smart']['revision'] ?? null,
    'smart_path' => $release['runtime_sources']['smart']['runtime_path'] ?? null,
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
// The registry's source digest is the sha256 of `git archive --format=tar`
// of contracts/generated at the metadata revision, as for every earlier pin.
$contractArchiveHash = hash('sha256', $git($uiRoot, [
    'archive', '--format=tar', UI_METADATA_REVISION, 'contracts/generated',
]));
// Packages are recomputed below from the pinned package release, or left out.
unset($lock['package_projections']);

$uiSource = $release['runtime_sources']['core'];
$smartSource = $release['runtime_sources']['smart'];
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
// Smart is the same `ui` commit's distr/smart; Docara reads it from there.
$lock['runtime']['ui_smart'] = [
    'tag' => null,
    'commit' => UI_RUNTIME_REVISION,
    'tree' => 'distr/smart',
    'mount' => 'ui',
    'sha256' => $smartSource['archive_sha256'],
    'files' => count(array_filter(
        preg_split('/\R/', trim($git($uiRoot, ['ls-tree', '-r', '--name-only', UI_RUNTIME_REVISION, 'distr/smart']))) ?: [],
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
$lock['asset_projection']['source'] = ['provider' => 'simai/ui', 'revision' => UI_RUNTIME_REVISION];
$lock['dynamic_asset_projection']['source'] = ['provider' => 'simai/ui', 'revision' => UI_RUNTIME_REVISION];
// A first approximation the Smart sync below replaces; Docara names Smart
// files `smart/<component>/...` whichever repository carries them.
$smartRuntimePaths = array_values(array_filter(
    preg_split('/\R/', trim($git(
        $uiRoot,
        ['ls-tree', '-r', '--name-only', UI_RUNTIME_REVISION, 'distr/smart'],
    ))) ?: [],
    static fn (string $path): bool => preg_match('~/((?:css|js)/[^/]+\.(?:css|js))$~', $path) === 1
        && ! str_contains($path, '.min.'),
));
$smartRuntimeFiles = [];
foreach ($smartRuntimePaths as $path) {
    $smartRuntimeFiles[substr($path, strlen('distr/'))] = [
        'sha256' => hash('sha256', $git($uiRoot, ['show', UI_RUNTIME_REVISION . ':' . $path])),
    ];
}
$lock['dynamic_asset_projection']['files'] = $smartRuntimeFiles;
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
    $manifest['provenance']['upstream_revision'] = UI_RUNTIME_REVISION;
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

/* Docara projects a component as its css and js entrypoint plus whatever the
   stylesheet references. A component that ships data files -- the flag sets are
   fetched by the component at runtime, by a URL it builds itself -- has nothing
   pointing at them from CSS, so the projection leaves them behind and the site
   falls back to emoji while the pair itself carries the files.

   Until the projection learns about declared asset directories, this build
   carries them itself. The list is explicit on purpose: a directory appears here
   because a component was read and found to need it, not because a glob matched.
   Generalising this belongs in Docara, and is written up in the handoff. */
$componentAssetDirectories = ['component/flag/flags'];
$runtimeDistribution = $runtimeBase . '/distr';
$carried = 0;
foreach ($componentAssetDirectories as $directory) {
    $listing = trim($git($uiRoot, ['ls-tree', '-r', '--name-only', UI_RUNTIME_REVISION, 'distr/' . $directory]));
    foreach (preg_split('/\R/', $listing) ?: [] as $sourcePath) {
        if ($sourcePath === '' || str_ends_with($sourcePath, '.gz')) {
            continue;
        }
        $target = $runtimeDistribution . '/' . substr($sourcePath, strlen('distr/'));
        if (! is_dir(dirname($target)) && ! mkdir(dirname($target), 0755, true) && ! is_dir(dirname($target))) {
            throw new RuntimeException('FRAMEWORK_ASSET_DIRECTORY_FAILED: ' . $sourcePath);
        }
        file_put_contents($target, $git($uiRoot, ['show', UI_RUNTIME_REVISION . ':' . $sourcePath]), LOCK_EX);
        chmod($target, 0644);
        $carried += 1;
    }
}
/* The site serves the runtime to whoever opens it, so it redistributes the
   third-party code inside those files. Lit, Floating UI and the Material fonts
   ask for their notice to travel with them, and the pair carries that notice as
   a contract file; the projection takes css and js, so it has to be named. */
$runtimeNoticeFiles = ['core/contracts/third-party-notices.v1.json'];
foreach ($runtimeNoticeFiles as $noticePath) {
    $target = $runtimeDistribution . '/' . $noticePath;
    if (! is_dir(dirname($target)) && ! mkdir(dirname($target), 0755, true) && ! is_dir(dirname($target))) {
        throw new RuntimeException('FRAMEWORK_NOTICE_DIRECTORY_FAILED: ' . $noticePath);
    }
    file_put_contents($target, $git($uiRoot, ['show', UI_RUNTIME_REVISION . ':distr/' . $noticePath]), LOCK_EX);
    chmod($target, 0644);
    $carried += 1;
}

$smartReceipt = $runPhp([$packageRoot . '/scripts/sync-framework-smart-runtime.php', $uiRoot]);
$viewUtilitiesPath = $packageRoot . '/resources/framework/view-utilities.json';
$viewUtilities = json_decode((string) file_get_contents($viewUtilitiesPath), true, 512, JSON_THROW_ON_ERROR);
$viewUtilities['compatibility_id'] = $docaraPair;
$viewUtilities['registry_sha256'] = $registryHash;
$writeJson($viewUtilitiesPath, $viewUtilities);
copy($packageLockPath, $projectLockPath);

// SIMAI Framework Pro: the package release built against this Framework
// release, recorded in this site's lock only. Its bytes go to the installed
// Docara copy (ignored here) and from there into the built site.
$proReceipt = $proRoot === null ? null : $runPhp([
    $packageRoot . '/scripts/sync-framework-package-runtime.php',
    '--package', 'pro',
    '--source', $proRoot,
    '--metadata', PRO_METADATA_REVISION,
    '--release', PRO_RELEASE,
    '--lock', $projectLockPath,
]);

fwrite(STDOUT, json_encode([
    'schema' => 'ui-doc.framework_materialization.v1',
    'status' => 'pass',
    'release_lock' => UI_METADATA_REVISION . ':' . RELEASE_LOCK,
    'candidate' => [
        'ui_metadata' => UI_METADATA_REVISION,
        'ui_runtime' => UI_RUNTIME_REVISION,
        'source' => SOURCE_REVISION,
        'builder' => BUILDER_REVISION,
        'pro_metadata' => $proRoot === null ? null : PRO_METADATA_REVISION,
        'pro_release' => $proRoot === null ? null : PRO_RELEASE,
    ],
    'core_projection' => $coreReceipt,
    'smart_projection' => $smartReceipt,
    'pro_projection' => $proReceipt,
    'project_lock_sha256' => hash_file('sha256', $projectLockPath),
    'owner_source_modified' => false,
], JSON_THROW_ON_ERROR | JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n");
