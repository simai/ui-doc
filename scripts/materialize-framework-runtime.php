#!/usr/bin/env php
<?php

declare(strict_types=1);

/**
 * Materialize the exact SIMAI Framework release accepted for this site, and
 * the product component packages served beside it.
 *
 * A Framework release is one `ui` commit (release lock v2, `ui-<12>`): Core in
 * `distr/`, Smart in `distr/smart/`, the same revision. A product component
 * package lives in its product's own UI repository and is built by ui-builder
 * over a pinned ui-source revision (`sf-build package`); the build writes a
 * package receipt (`simai.framework.product-package-receipt` version 1) that
 * names the free release the package must be served beside. Larena's package
 * `larena` (simai/ui-pro, folder `components`; PolyForm Small Business 1.0.0
 * or PolyForm Noncommercial 1.0.0, or SIMAI Commercial) carries
 * the admin and conversation components (`sf-table`, `sf-data-view`,
 * `sf-property-view`, `sf-admin-menu`, `sf-thread-list`, `sf-message-log`,
 * `sf-change-confirm`); the site
 * serves it as the Loader package `larena`.
 *
 * Docara keeps its Framework projection inside the Composer package. This
 * project command replaces only that ignored installed projection from
 * immutable Git objects, then copies the resulting wrapper lock to ui-doc.
 * Package bytes land only in that ignored installed copy and in the built
 * site; this repository records the receipt's identity and the files' hashes,
 * never the files.
 *
 *   php scripts/materialize-framework-runtime.php /absolute/ui \
 *       --receipt=/absolute/larena-package/package-receipt.json [--package=/absolute/docara-package]
 *   php scripts/materialize-framework-runtime.php /absolute/ui --without-packages [--package=...]
 *
 * A receipt is written by `sf-build package --out <dir>` beside the package
 * output and its archive; it must name a package declared in PACKAGES below,
 * at the pinned source revision and with the pinned archive digest.
 * `--without-packages` materializes the free release alone (the package pages
 * then cannot load their components); it exists for bundling the free release
 * into a Docara checkout, which never carries package bytes.
 */

const UI_METADATA_REVISION = '2df0c24c9b700712cf36520b1cb14ac51b8a4ef0';
const UI_RUNTIME_REVISION = '4b07c619f88b7c4e94362c122ca45e48482aeb41';
const SOURCE_REVISION = 'd1328993ef33f08d98c6bc8582019c04d81a135f';
const BUILDER_REVISION = 'a89508ce28acf00ca5b987059a424bfe1039f187';
const RELEASE_LOCK = 'contracts/releases/ui-4b07c619f88b.lock.json';
// The release on npm, the form the guide's CDN snippets use
// (https://cdn.jsdelivr.net/npm/<package>@<version>/distr/...). The version is
// derived from the release commit, never chosen: 5.<yyyymmdd>.<hhmm> of its
// UTC commit time, the last part without leading zeros. The release id stays
// the commit. scripts/sync-framework-documentation-versions.php checks the
// version against UI_RUNTIME_REVISION and moves the snippets with it.
const NPM_PACKAGE = '@simai-studio/ui';
const NPM_VERSION = '5.20261029.2321';
// Product component packages, each taken by its package receipt. The build is
// reproducible, so the archive digest names the exact bytes. A package names
// the ui-builder commit that built it: it may be newer than the one the
// Framework release was built with (BUILDER_REVISION), and CI rebuilds the
// package with this one. The revision is the package lock's source revision
// (the package receipt's package_source.revision): the last commit that touched the
// package folder, not the repository's head.
const PACKAGES = [
    'larena' => [
        'repository' => 'simai/ui-pro',
        'revision' => 'd1b0a1cf83c98e9225e0cc78afbdea27ad214bfd',
        'path' => 'components',
        'archive_sha256' => '546f962939bc1343ca8ed3ffd6147eeae5ee066a113f8b20a77ae2572f5c0b89',
        'builder' => 'a89508ce28acf00ca5b987059a424bfe1039f187',
    ],
];

$projectRoot = dirname(__DIR__);
$uiRoot = null;
$receiptPaths = [];
$withoutPackages = false;
$packageRoot = $projectRoot . '/vendor/simai/docara';
foreach (array_slice($argv, 1) as $argument) {
    if (str_starts_with($argument, '--receipt=')) {
        $receiptPaths[] = substr($argument, strlen('--receipt='));
    } elseif (str_starts_with($argument, '--package=')) {
        $packageRoot = substr($argument, strlen('--package='));
    } elseif ($argument === '--without-packages') {
        $withoutPackages = true;
    } elseif (! str_starts_with($argument, '--') && $uiRoot === null) {
        $uiRoot = $argument;
    } else {
        $uiRoot = null;
        break;
    }
}

if (! is_string($uiRoot) || ($receiptPaths === []) === ! $withoutPackages) {
    fwrite(STDERR, "Usage: php scripts/materialize-framework-runtime.php /absolute/ui (--receipt=/absolute/package-receipt.json ... | --without-packages) [--package=/absolute/docara-package]\n");
    exit(2);
}

$uiRoot = realpath($uiRoot);
$receiptPaths = array_map(static fn (string $path): string|false => realpath($path), $receiptPaths);
$packageRoot = realpath($packageRoot);
if ($uiRoot === false || in_array(false, $receiptPaths, true) || $packageRoot === false || ! is_dir($packageRoot)) {
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

// Each receipt has to be the package this site pins, built from the pinned
// source revision into the pinned archive, beside this release. Docara checks
// the package files against the receipt when it lays them.
$receipts = [];
foreach ($receiptPaths as $receiptPath) {
    $receipt = json_decode((string) file_get_contents($receiptPath), true, 512, JSON_THROW_ON_ERROR);
    $name = is_array($receipt) ? ($receipt['package'] ?? null) : null;
    $pinned = is_string($name) ? (PACKAGES[$name] ?? null) : null;
    $actualPackage = [
        'repository' => $receipt['package_source']['repository'] ?? null,
        'revision' => $receipt['package_source']['revision'] ?? null,
        'path' => $receipt['package_source']['path'] ?? null,
        'archive_sha256' => $receipt['output']['archive_sha256'] ?? null,
        'builder' => $receipt['builder']['revision'] ?? null,
    ];
    if ($pinned === null || isset($receipts[$name])) {
        throw new RuntimeException('FRAMEWORK_PACKAGE_NOT_PINNED: ' . (string) $name);
    }
    if ($actualPackage !== $pinned) {
        throw new RuntimeException('FRAMEWORK_PACKAGE_RECEIPT_MISMATCH: ' . $name);
    }
    if (($receipt['framework']['release'] ?? null) !== $docaraPair
        || ($receipt['framework']['source']['revision'] ?? null) !== SOURCE_REVISION
    ) {
        throw new RuntimeException('FRAMEWORK_PACKAGE_RELEASE_MISMATCH: ' . $name . ' is built for '
            . (string) ($receipt['framework']['release'] ?? 'no release'));
    }
    $receipts[$name] = $receiptPath;
}
if (! $withoutPackages && array_diff(array_keys(PACKAGES), array_keys($receipts)) !== []) {
    throw new RuntimeException('FRAMEWORK_PACKAGE_RECEIPT_MISSING: ' . implode(', ', array_diff(array_keys(PACKAGES), array_keys($receipts))));
}

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
// Packages are recomputed below from their receipts, or left out.
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

// Product component packages, each from its receipt, recorded in this site's
// lock only. Their bytes go to the installed Docara copy (ignored here) and
// from there into the built site.
$packageReceipts = [];
foreach ($receipts as $name => $receiptPath) {
    $packageReceipts[$name] = $runPhp([
        $packageRoot . '/scripts/sync-framework-package-runtime.php',
        '--receipt', $receiptPath,
        '--lock', $projectLockPath,
    ]);
}

fwrite(STDOUT, json_encode([
    'schema' => 'ui-doc.framework_materialization.v1',
    'status' => 'pass',
    'release_lock' => UI_METADATA_REVISION . ':' . RELEASE_LOCK,
    'candidate' => [
        'ui_metadata' => UI_METADATA_REVISION,
        'ui_runtime' => UI_RUNTIME_REVISION,
        'source' => SOURCE_REVISION,
        'builder' => BUILDER_REVISION,
        'packages' => $withoutPackages ? [] : PACKAGES,
    ],
    'core_projection' => $coreReceipt,
    'smart_projection' => $smartReceipt,
    'package_projections' => $packageReceipts,
    'project_lock_sha256' => hash_file('sha256', $projectLockPath),
    'owner_source_modified' => false,
], JSON_THROW_ON_ERROR | JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n");
