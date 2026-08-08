<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$config = file_get_contents($root . '/config.php');
$package = json_decode((string) file_get_contents($root . '/package.json'), true);
$initScript = file_get_contents($root . '/bin/init-project-update.sh');
$postinstall = file_get_contents($root . '/bin/verify-project-postinstall.mjs');
$composerRunner = file_get_contents($root . '/bin/run-composer.sh');
$composerTest = file_get_contents($root . '/bin/test-composer-resolution.sh');
$lifecycleTest = file_get_contents($root . '/bin/test-project-lifecycle.sh');
$validationWorkflow = file_get_contents($root . '/.github/workflows/validation.yml');
$deployWorkflow = file_get_contents($root . '/.github/workflows/deploy.yml');

if (!is_string($config)
    || !str_contains($config, "is_file('source/_core/collections.php')")
    || !str_contains($config, ": [],")) {
    fwrite(STDERR, json_encode([
        'status' => 'fail',
        'diagnostic' => [
            'code' => 'UI_DOC_CLEAN_INIT_BOOTSTRAP_UNSAFE',
            'path' => 'config.php',
            'expected' => 'missing generated collections returns an empty bootstrap collection',
            'actual' => 'unconditional or unrecognized generated collection load',
        ],
    ], JSON_UNESCAPED_SLASHES) . PHP_EOL);
    exit(1);
}

$failures = [];
if (($package['scripts']['postinstall'] ?? null) !== 'node bin/verify-project-postinstall.mjs') {
    $failures[] = 'package.json#/scripts/postinstall';
}
if (!is_string($initScript)
    || !str_contains($initScript, 'git -C "$repository_root" archive')
    || !str_contains($initScript, 'vendor/bin/docara init --update --force-core-files')
    || !str_contains($initScript, 'UI_DOC_PROJECT_SOURCE_NOT_PRESERVED')) {
    $failures[] = 'bin/init-project-update.sh';
}
if (!is_string($postinstall) || !str_contains($postinstall, 'UI_DOC_PROJECT_CONFIG_PRESERVED')) {
    $failures[] = 'bin/verify-project-postinstall.mjs';
}
if (!is_string($composerRunner)
    || !str_contains($composerRunner, 'command -v -- "$composer_candidate"')
    || !str_contains($composerRunner, 'exec "$composer_binary" "$@"')) {
    $failures[] = 'bin/run-composer.sh';
}
if (!is_string($composerTest)
    || !str_contains($composerTest, 'UI_DOC_COMPOSER_RESOLUTION_PASS')
    || !str_contains($composerTest, 'UI_DOC_COMPOSER_INCORRECTLY_INVOKED_THROUGH_PHP')) {
    $failures[] = 'bin/test-composer-resolution.sh';
}
if (!is_string($lifecycleTest)
    || str_contains($lifecycleTest, '"$php_binary" "$composer_binary"')
    || !str_contains($lifecycleTest, '"$source_root/bin/run-composer.sh"')) {
    $failures[] = 'bin/test-project-lifecycle.sh';
}
foreach ([
    '.github/workflows/validation.yml' => $validationWorkflow,
    '.github/workflows/deploy.yml' => $deployWorkflow,
] as $path => $workflow) {
    if (!is_string($workflow) || !str_contains($workflow, 'bin/validate-docs-project.sh')) {
        $failures[] = $path;
    }
}
if ($failures !== []) {
    fwrite(STDERR, json_encode([
        'status' => 'fail',
        'diagnostic' => [
            'code' => 'UI_DOC_CLEAN_LIFECYCLE_CONTRACT_MISSING',
            'path' => $failures,
            'expected' => 'project-owned init/postinstall preservation and one canonical validation entrypoint',
            'actual' => 'required marker missing',
        ],
    ], JSON_UNESCAPED_SLASHES) . PHP_EOL);
    exit(1);
}

fwrite(STDOUT, json_encode([
    'status' => 'pass',
    'code' => 'UI_DOC_CLEAN_INIT_BOOTSTRAP_SAFE',
    'path' => [
        'config.php',
        'package.json#/scripts/postinstall',
        'bin/init-project-update.sh',
        'bin/run-composer.sh',
        'bin/test-composer-resolution.sh',
        'bin/test-project-lifecycle.sh',
        '.github/workflows/validation.yml',
        '.github/workflows/deploy.yml',
    ],
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . PHP_EOL);
