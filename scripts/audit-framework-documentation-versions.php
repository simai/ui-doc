#!/usr/bin/env php
<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$checkRemote = in_array('--check-remote', $argv, true);
$versions = json_decode((string) file_get_contents($root . '/config/framework-documentation-versions.json'), true, 512, JSON_THROW_ON_ERROR);
$lock = json_decode((string) file_get_contents($root . '/simai-framework.lock.json'), true, 512, JSON_THROW_ON_ERROR);
$public = $versions['public_core'] ?? [];
$runtime = $lock['runtime'] ?? [];
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
    'content/ru/migration/change-history.md',
];
$paths = [];
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root . '/content/ru', FilesystemIterator::SKIP_DOTS));
foreach ($iterator as $file) {
    if ($file->isFile() && strtolower($file->getExtension()) === 'md') {
        $paths[] = $file->getPathname();
    }
}
sort($paths, SORT_STRING);

$hardcodedReleaseMentions = [];
$legacyMentions = [];
$cdnTags = [];
foreach ($paths as $path) {
    $relative = str_replace('\\', '/', substr($path, strlen($root) + 1));
    $markdown = (string) file_get_contents($path);
    if ($relative !== 'content/ru/migration/change-history.md' && preg_match('/(?<![\d.])v?5\.4(?:\.0)?(?![\d.])/', $markdown) === 1) {
        $legacyMentions[] = $relative;
    }
    preg_match_all('/cdn\.jsdelivr\.net\/gh\/simai\/ui@(v\d+\.\d+\.\d+)\//', $markdown, $matches);
    foreach ($matches[1] ?? [] as $tag) {
        $cdnTags[$relative][] = $tag;
    }
    if (! in_array($relative, $allowedReleasePages, true)
        && preg_match('/SIMAI Framework\s+v?\d+\.\d+(?:\.\d+)?|Framework UI\s+v?\d+\.\d+(?:\.\d+)?|Реестр\s+`?\d+\.\d+(?:\.\d+)?/iu', $markdown) === 1
    ) {
        $hardcodedReleaseMentions[] = $relative;
    }
}

$check($legacyMentions === [], 'legacy_5_4_mentions_remain', ['paths' => $legacyMentions]);
$check($hardcodedReleaseMentions === [], 'release_numbers_in_durable_pages', ['paths' => $hardcodedReleaseMentions]);
foreach ($cdnTags as $relative => $tags) {
    foreach ($tags as $tag) {
        $check($tag === ($public['tag'] ?? null), 'cdn_tag_mismatch', ['path' => $relative, 'actual' => $tag]);
        $check($tag !== ($runtime['ui']['tag'] ?? null), 'candidate_tag_used_in_public_snippet', ['path' => $relative]);
    }
}
$check(count($cdnTags) === 1, 'unexpected_cdn_example_page_count', ['actual' => count($cdnTags)]);

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
    'cdn_example_pages' => array_keys($cdnTags),
    'remote_checked' => $checkRemote,
    'failure_count' => count($failures),
    'failures' => $failures,
];
echo json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n";
exit($failures === [] ? 0 : 1);
