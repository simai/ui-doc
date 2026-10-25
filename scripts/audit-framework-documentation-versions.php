#!/usr/bin/env php
<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$checkRemote = in_array('--check-remote', $argv, true);
$versions = json_decode((string) file_get_contents($root . '/config/framework-documentation-versions.json'), true, 512, JSON_THROW_ON_ERROR);
$lock = json_decode((string) file_get_contents($root . '/simai-framework.lock.json'), true, 512, JSON_THROW_ON_ERROR);
$public = $versions['public_core'] ?? [];
$runtime = $lock['runtime'] ?? [];
$smartInsideUi = ($runtime['ui_smart']['tree'] ?? null) === 'distr/smart';
$failures = [];

$check = static function (bool $condition, string $code, array $details = []) use (&$failures): void {
    if (! $condition) {
        $failures[] = ['code' => $code, ...$details];
    }
};

$check(($versions['schema'] ?? null) === 'ui-doc.framework_documentation_versions.v1', 'version_source_schema_mismatch');
$check(($public['use'] ?? null) === 'core-only-cdn-examples', 'public_tag_scope_is_not_core_only');
$check(($runtime['publication_profile'] ?? null) === ($versions['documentation_candidate']['required_publication_profile'] ?? null), 'candidate_profile_mismatch');
$check(str_contains((string) ($runtime['publication_profile'] ?? ''), 'candidate'), 'documentation_runtime_is_not_marked_candidate');

$allowedReleasePages = [
    'content/ru/guide/introduction/quick-start.md',
];
$paths = [];
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root . '/content/ru', FilesystemIterator::SKIP_DOTS));
foreach ($iterator as $file) {
    if ($file->isFile() && strtolower($file->getExtension()) === 'md') {
        $paths[] = $file->getPathname();
    }
}
sort($paths, SORT_STRING);

// The CDN form: the release on npm, @simai-studio/ui at the version pinned in
// scripts/materialize-framework-runtime.php (NPM_VERSION, checked against the
// release commit by the version sync). The jsDelivr /gh/simai/ui@ form fails
// for readers (simai/ui-source#5): no page, example or AI source may name it.
$pin = (string) file_get_contents($root . '/scripts/materialize-framework-runtime.php');
$npmVersion = preg_match("/const NPM_VERSION = '(5\\.\\d{8}\\.\\d{1,4})'/", $pin, $npmMatch) === 1 ? $npmMatch[1] : null;
$check($npmVersion !== null, 'npm_version_pin_unreadable');
$scanned = $paths;
foreach (['examples', 'docs', 'assets'] as $directory) {
    if (! is_dir($root . '/' . $directory)) {
        continue;
    }
    $files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root . '/' . $directory, FilesystemIterator::SKIP_DOTS));
    foreach ($files as $file) {
        if ($file->isFile() && in_array(strtolower($file->getExtension()), ['md', 'html', 'js', 'mjs', 'json', 'php'], true)) {
            $scanned[] = $file->getPathname();
        }
    }
}
sort($scanned, SORT_STRING);
$githubCdnMentions = [];
$npmVersions = [];
foreach ($scanned as $path) {
    $relative = str_replace('\\', '/', substr($path, strlen($root) + 1));
    $text = (string) file_get_contents($path);
    if (preg_match('~(?:cdn\.jsdelivr\.net|fastly\.jsdelivr\.net)/gh/simai/ui(?:-smart)?@~', $text) === 1) {
        $githubCdnMentions[] = $relative;
    }
    preg_match_all('~(?:cdn\.jsdelivr\.net/npm|unpkg\.com)/@simai-studio/ui@([^/\s`"\'<>]+)~', $text, $npmMatches);
    foreach ($npmMatches[1] ?? [] as $version) {
        if ($version !== $npmVersion && ! str_starts_with($version, '<')) {
            $npmVersions[$relative][] = $version;
        }
    }
}
$hardcodedReleaseMentions = [];
$legacyMentions = [];
$staleSmartSourceReferences = [];
foreach ($paths as $path) {
    $relative = str_replace('\\', '/', substr($path, strlen($root) + 1));
    $markdown = (string) file_get_contents($path);
    if (preg_match('/(?<![\d.])v?5\.4(?:\.0)?(?![\d.])/', $markdown) === 1) {
        $legacyMentions[] = $relative;
    }
    if (! in_array($relative, $allowedReleasePages, true)
        && preg_match('/SIMAI Framework\s+v?\d+\.\d+(?:\.\d+)?|Framework UI\s+v?\d+\.\d+(?:\.\d+)?|Реестр\s+`?\d+\.\d+(?:\.\d+)?/iu', $markdown) === 1
    ) {
        $hardcodedReleaseMentions[] = $relative;
    }
    if (str_starts_with($relative, 'content/ru/smart-components/')) {
        preg_match_all('/simai\/ui-smart@([a-f0-9]{40})(?=:smart\/)/', $markdown, $smartMatches);
        preg_match_all('/simai\/ui@([a-f0-9]{40})(?=:distr\/(?:rule\/rule\.json|smart\/))/', $markdown, $coreMatches);
        // The old SIMAI Framework Pro line is retired: no page may cite it. Since
        // 2026-10-23 the public simai/ui-pro (SIMAI Pro) is a component package
        // source, so it is cited at its receipt's revision and checked below.
        $packageRepositories = array_map(
            static fn (array $package): string => (string) ($package['receipt']['package_source']['repository'] ?? ''),
            $lock['package_projections'] ?? [],
        );
        $droppedMatches = [[], []];
        if (! in_array('simai/ui-pro', $packageRepositories, true)) {
            preg_match_all('/simai\/ui-pro@([a-f0-9]{40})/', $markdown, $droppedMatches);
        }
        foreach ($smartMatches[1] ?? [] as $revision) {
            // Release lock v2 carries Smart in ui's distr/smart: no page may
            // still cite the separate ui-smart repository.
            if ($smartInsideUi || $revision !== ($runtime['ui_smart']['commit'] ?? null)) {
                $staleSmartSourceReferences[] = ['path' => $relative, 'repository' => 'simai/ui-smart', 'actual' => $revision];
            }
        }
        foreach ($droppedMatches[1] ?? [] as $revision) {
            $staleSmartSourceReferences[] = ['path' => $relative, 'repository' => 'simai/ui-pro', 'actual' => $revision];
        }
        // A product package's source is cited at the revision its receipt names.
        foreach ($lock['package_projections'] ?? [] as $package) {
            $source = $package['receipt']['package_source'] ?? [];
            $repository = (string) ($source['repository'] ?? '');
            preg_match_all('~' . preg_quote($repository, '~') . '@([a-f0-9]{40})~', $markdown, $packageMatches);
            foreach ($packageMatches[1] ?? [] as $revision) {
                if ($repository === '' || $revision !== ($source['revision'] ?? null)) {
                    $staleSmartSourceReferences[] = ['path' => $relative, 'repository' => $repository, 'actual' => $revision];
                }
            }
        }
        foreach ($coreMatches[1] ?? [] as $revision) {
            if ($revision !== ($runtime['ui']['commit'] ?? null)) {
                $staleSmartSourceReferences[] = ['path' => $relative, 'repository' => 'simai/ui', 'actual' => $revision];
            }
        }
    }
}

$check($legacyMentions === [], 'legacy_5_4_mentions_remain', ['paths' => $legacyMentions]);
$check($hardcodedReleaseMentions === [], 'release_numbers_in_durable_pages', ['paths' => $hardcodedReleaseMentions]);
$check($githubCdnMentions === [], 'cdn_github_form_remains', ['paths' => $githubCdnMentions]);
foreach ($npmVersions as $relative => $found) {
    $check(false, 'cdn_npm_version_mismatch', ['path' => $relative, 'expected' => $npmVersion, 'actual' => array_values(array_unique($found))]);
}
$check($staleSmartSourceReferences === [], 'stale_smart_source_references', ['references' => $staleSmartSourceReferences]);

if ($checkRemote) {
    $url = 'https://github.com/' . ($public['repository'] ?? '') . '.git';
    $tag = (string) ($public['tag'] ?? '');
    $command = ['git', 'ls-remote', '--tags', $url, 'refs/tags/' . $tag, 'refs/tags/' . $tag . '^{}'];
    $pipes = [];
    $process = proc_open($command, [1 => ['pipe', 'w'], 2 => ['pipe', 'w']], $pipes);
    if (! is_resource($process)) {
        throw new RuntimeException('REMOTE_TAG_CHECK_FAILED_TO_START');
    }
    $stdout = (string) stream_get_contents($pipes[1]);
    $stderr = (string) stream_get_contents($pipes[2]);
    fclose($pipes[1]);
    fclose($pipes[2]);
    $status = proc_close($process);
    $check($status === 0, 'remote_tag_check_failed', ['stderr' => trim($stderr)]);
    $check(str_contains($stdout, (string) ($public['tag_object'] ?? '') . "\trefs/tags/" . $tag), 'remote_tag_object_mismatch');
    $check(str_contains($stdout, (string) ($public['commit'] ?? '') . "\trefs/tags/" . $tag . '^{}'), 'remote_tag_commit_mismatch');
}

$report = [
    'schema' => 'ui-doc.framework_documentation_version_audit.v1',
    'status' => $failures === [] ? 'pass' : 'fail',
    'public_core' => $public,
    'documentation_candidate' => [
        'pair_id' => $runtime['pair_id'] ?? null,
        'framework' => $runtime['tag'] ?? null,
        'core' => $runtime['ui']['tag'] ?? null,
        'smart' => $runtime['ui_smart']['tag'] ?? null,
        'publication_profile' => $runtime['publication_profile'] ?? null,
    ],
    'checked_ru_pages' => count($paths),
    'npm_version' => $npmVersion,
    'remote_checked' => $checkRemote,
    'failure_count' => count($failures),
    'failures' => $failures,
];
echo json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n";
exit($failures === [] ? 0 : 1);
