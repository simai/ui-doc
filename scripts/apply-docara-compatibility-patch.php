#!/usr/bin/env php
<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$apply = in_array('--apply', $argv, true);
$manifestPaths = [
    $root . '/patches/docara/1af9ff750a1ab3c479ec42f19860317c8c6917aa.json',
    $root . '/patches/docara/60b6d60378382708b447f433935f44d77df79bd2.json',
];
$manifests = array_map(
    static fn (string $path): array => json_decode((string) file_get_contents($path), true, 512, JSON_THROW_ON_ERROR),
    $manifestPaths,
);
$lock = json_decode((string) file_get_contents($root . '/composer.lock'), true, 512, JSON_THROW_ON_ERROR);
$package = null;
foreach ($lock['packages'] ?? [] as $candidate) {
    if (($candidate['name'] ?? null) === $manifests[0]['package']) {
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
foreach ($manifests as $manifest) {
    if (($package['version'] ?? null) !== $manifest['locked_version']) {
        $fail('locked_version_drift', [
            'candidate_reference' => $manifest['candidate_reference'],
            'actual' => $package['version'] ?? null,
        ]);
    }
    if (($package['source']['reference'] ?? null) !== $manifest['locked_reference']) {
        $fail('locked_reference_drift', [
            'candidate_reference' => $manifest['candidate_reference'],
            'actual' => $package['source']['reference'] ?? null,
        ]);
    }
}

$vendorRoot = $root . '/vendor/simai/docara';
if (! is_dir($vendorRoot)) {
    $fail('vendor_package_missing', ['hint' => 'Run composer install first.']);
}

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

$results = [];
foreach ($manifests as $index => $manifest) {
    $manifestPath = $manifestPaths[$index];
    $states = [];
    foreach ($manifest['files'] as $file) {
        $absolute = $vendorRoot . '/' . $file['path'];
        $actual = is_file($absolute) ? hash_file('sha256', $absolute) : null;
        $descendantHashes = [];
        foreach (array_slice($manifests, $index + 1) as $laterManifest) {
            foreach ($laterManifest['files'] as $laterFile) {
                if ($laterFile['path'] === $file['path']) {
                    $descendantHashes[] = $laterFile['target_sha256'];
                }
            }
        }
        if ($actual === $file['base_sha256']) {
            $state = 'base';
        } elseif ($actual === $file['target_sha256']) {
            $state = 'target';
        } elseif ($actual === ($file['upgrade_sha256'] ?? '__no_upgrade__')) {
            $state = 'upgrade';
        } elseif (in_array($actual, $descendantHashes, true)) {
            $state = 'descendant';
        } else {
            $state = 'drift';
        }
        $states[] = ['path' => $file['path'], 'state' => $state, 'actual_sha256' => $actual];
    }

    $drifted = array_values(array_filter(
        $states,
        static fn (array $state): bool => $state['state'] === 'drift',
    ));
    if ($drifted !== []) {
        $fail('vendor_source_drift', [
            'candidate_reference' => $manifest['candidate_reference'],
            'files' => $drifted,
        ]);
    }
    $baseFiles = array_values(array_filter(
        $states,
        static fn (array $state): bool => in_array($state['state'], ['base', 'upgrade'], true),
    ));
    if ($baseFiles === []) {
        $results[] = [
            'candidate_reference' => $manifest['candidate_reference'],
            'result' => 'already_applied',
            'files_verified' => count($states),
        ];
        continue;
    }
    if (! $apply) {
        $fail('patch_not_applied', [
            'candidate_reference' => $manifest['candidate_reference'],
            'hint' => 'Run composer docara:compatibility:apply.',
        ]);
    }

    $patchPath = dirname($manifestPath) . '/' . $manifest['patch'];
    foreach ($baseFiles as $file) {
        $selectedPatch = $file['state'] === 'upgrade'
            ? dirname($manifestPath) . '/' . $manifest['upgrade_patch']
            : $patchPath;
        $baseCommand = [
            'git',
            'apply',
            '--whitespace=nowarn',
            '--directory=vendor/simai/docara',
            '--include=vendor/simai/docara/' . $file['path'],
        ];
        [$checkCode, , $checkError] = $run([...$baseCommand, '--check', $selectedPatch]);
        if ($checkCode !== 0) {
            $fail('patch_check_failed', [
                'candidate_reference' => $manifest['candidate_reference'],
                'path' => $file['path'],
                'error' => trim($checkError),
            ]);
        }
        [$applyCode, , $applyError] = $run([...$baseCommand, $selectedPatch]);
        if ($applyCode !== 0) {
            $fail('patch_apply_failed', [
                'candidate_reference' => $manifest['candidate_reference'],
                'path' => $file['path'],
                'error' => trim($applyError),
            ]);
        }
    }

    foreach ($manifest['files'] as $file) {
        $actual = hash_file('sha256', $vendorRoot . '/' . $file['path']);
        if ($actual !== $file['target_sha256']) {
            $fail('target_verification_failed', [
                'candidate_reference' => $manifest['candidate_reference'],
                'path' => $file['path'],
                'actual_sha256' => $actual,
            ]);
        }
    }
    $results[] = [
        'candidate_reference' => $manifest['candidate_reference'],
        'result' => 'applied',
        'files_verified' => count($manifest['files']),
    ];
}

echo json_encode([
    'schema' => 'ui-doc.docara_compatibility_patch_result.v1',
    'status' => 'pass',
    'result' => count(array_filter($results, static fn (array $result): bool => $result['result'] === 'applied')) > 0
        ? 'applied'
        : 'already_applied',
    'locked_reference' => $manifests[0]['locked_reference'],
    'candidate_reference' => $manifests[array_key_last($manifests)]['candidate_reference'],
    'patches' => $results,
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n";
