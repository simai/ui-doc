#!/usr/bin/env php
<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$apply = in_array('--apply', $argv, true);
$manifestPath = $root . '/patches/docara/61964e928b281ae9e86cab6cf7bc613da303b559.json';
$manifest = json_decode((string) file_get_contents($manifestPath), true, 512, JSON_THROW_ON_ERROR);
$lock = json_decode((string) file_get_contents($root . '/composer.lock'), true, 512, JSON_THROW_ON_ERROR);
$package = null;
foreach ($lock['packages'] ?? [] as $candidate) {
    if (($candidate['name'] ?? null) === $manifest['package']) {
        $package = $candidate;
        break;
    }
}

$fail = static function (string $code, array $details = []): never {
    fwrite(STDERR, json_encode([
        'schema' => 'ui-doc.docara_compatibility_patch_result.v1',
        'status' => 'fail',
        'code' => $code,
        ...$details,
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n");
    exit(1);
};

if (! is_array($package)) {
    $fail('locked_package_missing');
}
if (($package['version'] ?? null) !== $manifest['locked_version']) {
    $fail('locked_version_drift', ['actual' => $package['version'] ?? null]);
}
if (($package['source']['reference'] ?? null) !== $manifest['locked_reference']) {
    $fail('locked_reference_drift', ['actual' => $package['source']['reference'] ?? null]);
}

$vendorRoot = $root . '/vendor/simai/docara';
if (! is_dir($vendorRoot)) {
    $fail('vendor_package_missing', ['hint' => 'Run composer install first.']);
}

$states = [];
foreach ($manifest['files'] as $file) {
    $absolute = $vendorRoot . '/' . $file['path'];
    $actual = is_file($absolute) ? hash_file('sha256', $absolute) : null;
    $state = match ($actual) {
        $file['base_sha256'] => 'base',
        $file['target_sha256'] => 'target',
        default => 'drift',
    };
    $states[] = ['path' => $file['path'], 'state' => $state, 'actual_sha256' => $actual];
}

$drifted = array_values(array_filter(
    $states,
    static fn (array $state): bool => $state['state'] === 'drift',
));
if ($drifted !== []) {
    $fail('vendor_source_drift', ['files' => $drifted]);
}
$baseFiles = array_values(array_filter(
    $states,
    static fn (array $state): bool => $state['state'] === 'base',
));
if ($baseFiles === []) {
    echo json_encode([
        'schema' => 'ui-doc.docara_compatibility_patch_result.v1',
        'status' => 'pass',
        'result' => 'already_applied',
        'candidate_reference' => $manifest['candidate_reference'],
        'files_verified' => count($states),
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n";
    exit(0);
}
if (! $apply) {
    $fail('patch_not_applied', ['hint' => 'Run composer docara:compatibility:apply.']);
}

$patchPath = dirname($manifestPath) . '/' . $manifest['patch'];
$run = static function (array $command) use ($root): array {
    $pipes = [];
    $process = proc_open(
        $command,
        [1 => ['pipe', 'w'], 2 => ['pipe', 'w']],
        $pipes,
        $root,
    );
    if (! is_resource($process)) {
        return [2, '', 'Unable to start git apply.'];
    }
    $stdout = stream_get_contents($pipes[1]);
    $stderr = stream_get_contents($pipes[2]);
    fclose($pipes[1]);
    fclose($pipes[2]);

    return [proc_close($process), (string) $stdout, (string) $stderr];
};

foreach ($baseFiles as $file) {
    $baseCommand = [
        'git',
        'apply',
        '--whitespace=nowarn',
        '--directory=vendor/simai/docara',
        '--include=vendor/simai/docara/' . $file['path'],
    ];
    [$checkCode, , $checkError] = $run([...$baseCommand, '--check', $patchPath]);
    if ($checkCode !== 0) {
        $fail('patch_check_failed', [
            'path' => $file['path'],
            'error' => trim($checkError),
        ]);
    }
    [$applyCode, , $applyError] = $run([...$baseCommand, $patchPath]);
    if ($applyCode !== 0) {
        $fail('patch_apply_failed', [
            'path' => $file['path'],
            'error' => trim($applyError),
        ]);
    }
}

foreach ($manifest['files'] as $file) {
    $actual = hash_file('sha256', $vendorRoot . '/' . $file['path']);
    if ($actual !== $file['target_sha256']) {
        $fail('target_verification_failed', ['path' => $file['path'], 'actual_sha256' => $actual]);
    }
}

echo json_encode([
    'schema' => 'ui-doc.docara_compatibility_patch_result.v1',
    'status' => 'pass',
    'result' => 'applied',
    'locked_reference' => $manifest['locked_reference'],
    'candidate_reference' => $manifest['candidate_reference'],
    'files_verified' => count($manifest['files']),
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n";
