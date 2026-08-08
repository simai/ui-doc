<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$config = file_get_contents($root . '/config.php');

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

fwrite(STDOUT, json_encode([
    'status' => 'pass',
    'code' => 'UI_DOC_CLEAN_INIT_BOOTSTRAP_SAFE',
    'path' => 'config.php',
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . PHP_EOL);
