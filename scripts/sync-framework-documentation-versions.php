#!/usr/bin/env php
<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$checkOnly = in_array('--check', $argv, true);
$versions = json_decode(
    (string) file_get_contents($root . '/config/framework-documentation-versions.json'),
    true,
    512,
    JSON_THROW_ON_ERROR,
);
$lock = json_decode(
    (string) file_get_contents($root . '/simai-framework.lock.json'),
    true,
    512,
    JSON_THROW_ON_ERROR,
);

$publicCoreTag = $versions['public_core']['tag'] ?? null;
$requiredProfile = $versions['documentation_candidate']['required_publication_profile'] ?? null;
$runtime = $lock['runtime'] ?? [];
if (! is_string($publicCoreTag)
    || preg_match('/^v\d+\.\d+\.\d+$/', $publicCoreTag) !== 1
    || ($runtime['publication_profile'] ?? null) !== $requiredProfile
) {
    throw new RuntimeException('FRAMEWORK_DOCUMENTATION_VERSION_SOURCE_INVALID');
}

$candidateFramework = (string) ($runtime['tag'] ?? '');
$candidateCore = (string) ($runtime['ui']['tag'] ?? '');
$candidateSmart = (string) ($runtime['ui_smart']['tag'] ?? '');
$candidatePair = (string) ($runtime['pair_id'] ?? '');
$candidateCoreRevision = (string) ($runtime['ui']['commit'] ?? '');
$candidateSmartRevision = (string) ($runtime['ui_smart']['commit'] ?? '');
// Release lock v2 (`ui-<12>`): one ui commit, Smart in its distr/smart.
// Release lock v1 (`ui-<12>-smart-<12>`): Smart from the ui-smart repository.
$smartInsideUi = ($runtime['ui_smart']['tree'] ?? null) === 'distr/smart';
if ($smartInsideUi && $candidateSmartRevision !== $candidateCoreRevision) {
    throw new RuntimeException('FRAMEWORK_CANDIDATE_REVISION_INVALID');
}
$untaggedExactCandidate = $candidatePair === ($smartInsideUi
    ? sprintf('ui-%s', substr($candidateCoreRevision, 0, 12))
    : sprintf('ui-%s-smart-%s', substr($candidateCoreRevision, 0, 12), substr($candidateSmartRevision, 0, 12))
) && $candidateFramework === '' && $candidateCore === '' && $candidateSmart === '';
if (! $untaggedExactCandidate) {
    foreach ([$candidateFramework, $candidateCore, $candidateSmart] as $tag) {
        if (preg_match('/^v\d+\.\d+\.\d+$/', $tag) !== 1) {
            throw new RuntimeException('FRAMEWORK_CANDIDATE_TAG_INVALID');
        }
    }
}
foreach ([$candidateCoreRevision, $candidateSmartRevision] as $revision) {
    if (preg_match('/^[a-f0-9]{40}$/D', $revision) !== 1) {
        throw new RuntimeException('FRAMEWORK_CANDIDATE_REVISION_INVALID');
    }
}

// Product component packages: each component folder a package ships is cited
// from the package's source in its product repository, at the revision its
// receipt names (`<repository>@<revision>:<path>/src/smart/<folder>`); its
// rule is that folder's own rule.js.
$packages = [];
$packageFolders = [];
foreach ($lock['package_projections'] ?? [] as $name => $package) {
    $source = $package['receipt']['package_source'] ?? null;
    $repository = (string) ($source['repository'] ?? '');
    $revision = (string) ($source['revision'] ?? '');
    $sourcePath = trim((string) ($source['path'] ?? ''), '/');
    if (preg_match('~^[a-z0-9-]+/[a-z0-9._-]+$~D', $repository) !== 1
        || preg_match('/^[a-f0-9]{40}$/D', $revision) !== 1
        || preg_match('~^(?:[a-z0-9._-]+(?:/[a-z0-9._-]+)*)?$~D', $sourcePath) !== 1
    ) {
        throw new RuntimeException('FRAMEWORK_PACKAGE_SOURCE_INVALID: ' . (string) $name);
    }
    $packages[$name] = [
        'repository' => $repository,
        'revision' => $revision,
        'smart' => ($sourcePath === '' ? '' : $sourcePath . '/') . 'src/smart/',
    ];
    foreach (array_keys($package['files'] ?? []) as $path) {
        if (preg_match('~^smart/([a-z][a-z0-9-]*)/~', (string) $path, $match) === 1) {
            $packageFolders[$match[1]] = $name;
        }
    }
}
$packageSource = static function (string $folder) use ($packages, $packageFolders): ?string {
    if (! isset($packageFolders[$folder])) {
        return null;
    }
    $package = $packages[$packageFolders[$folder]];

    return $package['repository'] . '@' . $package['revision'] . ':' . $package['smart'] . $folder;
};
$smartCitation = static function (string $folder) use ($packageSource, $smartInsideUi, $candidateSmartRevision): string {
    return $packageSource($folder) ?? ($smartInsideUi
        ? 'simai/ui@' . $candidateSmartRevision . ':distr/smart/' . $folder
        : 'simai/ui-smart@' . $candidateSmartRevision . ':smart/' . $folder);
};

$targets = [
    'content/ru/guide/introduction/quick-start.md' => static function (string $current) use ($publicCoreTag): string {
        $current = preg_replace('/simai\/ui@v\d+\.\d+\.\d+/', 'simai/ui@' . $publicCoreTag, $current);
        $current = preg_replace('/версии `v\d+\.\d+\.\d+`/', 'версии `' . $publicCoreTag . '`', (string) $current);
        $current = preg_replace('/версия `v\d+\.\d+\.\d+`/', 'версия `' . $publicCoreTag . '`', (string) $current);
        return (string) $current;
    },
];

$changed = [];
foreach ($targets as $relative => $render) {
    $path = $root . '/' . $relative;
    $current = (string) file_get_contents($path);
    $expected = $render($current);
    if ($expected === $current) {
        continue;
    }
    $changed[] = $relative;
    if (! $checkOnly) {
        file_put_contents($path, $expected, LOCK_EX);
    }
}

$smartDocumentationRoot = $root . '/content/ru/smart-components';
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($smartDocumentationRoot, FilesystemIterator::SKIP_DOTS));
foreach ($iterator as $file) {
    if (! $file->isFile() || strtolower($file->getExtension()) !== 'md') {
        continue;
    }
    $path = $file->getPathname();
    $relative = str_replace('\\', '/', substr($path, strlen($root) + 1));
    $current = (string) file_get_contents($path);
    // A Smart source is cited where the pinned release carries it: the ui
    // release's distr/smart, or the source of the product package that ships
    // the component. Older citations of the separate ui-smart repository move
    // with it; a path inside the folder keeps its tail.
    $expected = preg_replace_callback(
        '~simai/(?:ui-smart@[a-f0-9]{40}:smart|ui@[a-f0-9]{40}:distr/smart|[a-z0-9._-]+@[a-f0-9]{40}:(?:[a-z0-9._-]+/)*src/smart)/([a-z][a-z0-9-]*)(?![a-z0-9.-])~',
        static fn (array $match): string => $smartCitation($match[1]),
        $current,
    );
    // A packaged component's rule is its folder's rule.js in the package
    // source, not an entry of the Framework's rule list.
    $expected = preg_replace_callback(
        '~simai/(?:ui@[a-f0-9]{40}:distr/rule/rule\.json|[a-z0-9._-]+@[a-f0-9]{40}:(?:[a-z0-9._-]+/)*src/smart/[a-z][a-z0-9-]*/rule\.js)#name=cl-([a-z][a-z0-9-]*)~',
        static fn (array $match): string => ($packageSource($match[1]) !== null
            ? $packageSource($match[1]) . '/rule.js'
            : 'simai/ui@' . $candidateCoreRevision . ':distr/rule/rule.json') . '#name=cl-' . $match[1],
        (string) $expected,
    );
    // Any other citation of a package's source moves to its pinned revision.
    foreach ($packages as $package) {
        $expected = preg_replace(
            '~' . preg_quote($package['repository'], '~') . '@[a-f0-9]{40}(?=:)~',
            $package['repository'] . '@' . $package['revision'],
            (string) $expected,
        );
    }
    $expected = preg_replace(
        '/simai\/ui@[a-f0-9]{40}(?=:distr\/rule\/rule\.json)/',
        'simai/ui@' . $candidateCoreRevision,
        (string) $expected,
    );
    if ($expected === $current) {
        continue;
    }
    $changed[] = $relative;
    if (! $checkOnly) {
        file_put_contents($path, $expected, LOCK_EX);
    }
}
// The guide names the pinned release in its examples and tables (the release
// id, the ui commits, the source, builder and package revisions). Each value is
// read from the pin in scripts/materialize-framework-runtime.php; a value last
// written for an earlier pin (config/guide-release-values.json) is replaced on
// every guide page.
$pin = (string) file_get_contents($root . '/scripts/materialize-framework-runtime.php');
$pinned = static function (string $pattern) use ($pin): string {
    if (preg_match($pattern, $pin, $match) !== 1) {
        throw new RuntimeException('FRAMEWORK_PIN_UNREADABLE: ' . $pattern);
    }
    return $match[1];
};
$current = [
    'ui_runtime' => $pinned("/const UI_RUNTIME_REVISION = '([0-9a-f]{40})'/"),
    'ui_record' => $pinned("/const UI_METADATA_REVISION = '([0-9a-f]{40})'/"),
    'source' => $pinned("/const SOURCE_REVISION = '([0-9a-f]{40})'/"),
    'builder' => $pinned("/const BUILDER_REVISION = '([0-9a-f]{40})'/"),
    'larena' => $pinned("/'larena' => \[\s*'repository' => '[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+',\s*'revision' => '([0-9a-f]{40})'/"),
    // The ui-builder commit that built the larena package (its receipt): it may
    // be newer than the one the Framework release was built with.
    'larena_builder' => $pinned("/'larena' => \[[^\]]*?'builder' => '([0-9a-f]{40})'/s"),
];
$current['release'] = 'ui-' . substr($current['ui_runtime'], 0, 12);
// The npm version the CDN snippets name. It is derived from the release
// commit (5.<yyyymmdd>.<hhmm> of its UTC commit time, the last part without
// leading zeros), so a pin that names another commit's version fails here. The
// commit time is read from the ui repository: DOCARA_SIMAI_UI_ROOT, SIMAI_UI_ROOT
// or ../ui beside this checkout.
if ($pinned("/const NPM_PACKAGE = '(@simai-studio\/ui)'/") !== '@simai-studio/ui') {
    throw new RuntimeException('FRAMEWORK_NPM_PACKAGE_INVALID');
}
$current['npm_version'] = $pinned("/const NPM_VERSION = '(5\.\d{8}\.\d{1,4})'/");
$uiRepository = null;
foreach ([getenv('DOCARA_SIMAI_UI_ROOT'), getenv('SIMAI_UI_ROOT'), dirname($root) . '/ui'] as $candidate) {
    if (is_string($candidate) && $candidate !== '' && is_dir($candidate)) {
        $uiRepository = $candidate;
        break;
    }
}
if ($uiRepository === null) {
    throw new RuntimeException('FRAMEWORK_NPM_VERSION_UNVERIFIABLE: no ui repository to read the release commit time from');
}
$commitTime = trim((string) shell_exec('git -C ' . escapeshellarg($uiRepository) . ' show -s --format=%ct ' . escapeshellarg($current['ui_runtime']) . ' 2>/dev/null'));
if (preg_match('/^\d+$/D', $commitTime) !== 1) {
    throw new RuntimeException('FRAMEWORK_NPM_VERSION_UNVERIFIABLE: ' . $uiRepository . ' does not hold ' . $current['ui_runtime']);
}
$expectedNpmVersion = '5.' . gmdate('Ymd', (int) $commitTime) . '.' . (int) gmdate('Hi', (int) $commitTime);
if ($current['npm_version'] !== $expectedNpmVersion) {
    throw new RuntimeException('FRAMEWORK_NPM_VERSION_MISMATCH: NPM_VERSION ' . $current['npm_version'] . ' is not ' . $expectedNpmVersion . ', the version of ' . $current['ui_runtime']);
}
$valuesPath = $root . '/config/guide-release-values.json';
$recorded = json_decode((string) file_get_contents($valuesPath), true, 512, JSON_THROW_ON_ERROR);
$replacements = [];
foreach ($recorded['values'] as $key => $old) {
    if (isset($current[$key]) && $old !== $current[$key]) {
        if (isset($replacements[$old]) && $replacements[$old] !== $current[$key]) {
            throw new RuntimeException('GUIDE_RELEASE_VALUE_AMBIGUOUS: ' . $old . ' was two values that now differ');
        }
        $replacements[$old] = $current[$key];
    }
}
// Text that names a release for what it was -- «open sources from release X on»
// -- is not the current release: config/guide-release-values.json `keep` lists
// those exact spans, page by page, and the sync leaves them as written.
$keep = [];
foreach ($recorded['keep'] ?? [] as $span) {
    $keep[(string) $span['page']][] = (string) $span['text'];
}
// Longer values first, so a full commit is replaced before the release id
// that is its prefix.
uksort($replacements, static fn (string $a, string $b): int => strlen($b) <=> strlen($a));
if ($replacements !== []) {
    // The home page names the release too: its connection lines and footer.
    $guide = new AppendIterator();
    $guide->append(new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root . '/content/ru/guide', FilesystemIterator::SKIP_DOTS)));
    $guide->append(new ArrayIterator([new SplFileInfo($root . '/content/ru/index.md')]));
    foreach ($guide as $file) {
        if (! $file->isFile() || $file->getExtension() !== 'md') {
            continue;
        }
        $page = (string) file_get_contents($file->getPathname());
        $relative = str_replace('\\', '/', substr($file->getPathname(), strlen($root) + 1));
        $held = [];
        foreach ($keep[$relative] ?? [] as $index => $span) {
            if (! str_contains($page, $span)) {
                throw new RuntimeException('GUIDE_RELEASE_KEEP_MISSING: ' . $relative . ': ' . $span);
            }
            $held["\u{E000}keep-{$index}\u{E000}"] = $span;
        }
        $next = strtr(strtr(strtr($page, array_flip($held)), $replacements), $held);
        if ($next !== $page) {
            $changed[] = str_replace('\\', '/', substr($file->getPathname(), strlen($root) + 1));
            if (! $checkOnly) {
                file_put_contents($file->getPathname(), $next, LOCK_EX);
            }
        }
    }
}
// A value the record does not hold yet (a new kind of release value) is
// recorded too; pages naming it are written by hand the first time.
if ($replacements !== [] || array_diff_key($current, $recorded['values']) !== []) {
    $changed[] = 'config/guide-release-values.json';
    if (! $checkOnly) {
        $recorded['values'] = $current;
        file_put_contents($valuesPath, json_encode($recorded, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n", LOCK_EX);
    }
}

$changed = array_values(array_unique($changed));
sort($changed, SORT_STRING);

echo json_encode([
    'schema' => 'ui-doc.framework_documentation_version_sync.v1',
    'status' => $changed === [] ? 'synchronized' : ($checkOnly ? 'drift' : 'updated'),
    'public_core_tag' => $publicCoreTag,
    'candidate_pair' => $candidatePair,
    'candidate_core_revision' => $candidateCoreRevision,
    'npm_version' => $current['npm_version'],
    'candidate_smart_revision' => $candidateSmartRevision,
    'packages' => $packages,
    'package_folders' => $packageFolders,
    'changed' => $changed,
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n";

exit($checkOnly && $changed !== [] ? 1 : 0);
