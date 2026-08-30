<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$php = PHP_BINARY;
$docara = dirname($root) . '/docara/docara';
if (! is_file($docara)) {
    $docara = $root . '/vendor/bin/docara';
}
if (! is_file($docara)) {
    fwrite(STDERR, "Docara CLI is unavailable. Install project dependencies or use the adjacent Docara checkout.\n");
    exit(2);
}

$arguments = [
    escapeshellarg($php),
    escapeshellarg($docara),
    'documentation',
    'status',
    '--source=simai-framework',
    '--kind=component',
];
if (in_array('--json', $argv, true)) {
    $arguments[] = '--json';
}

passthru('cd ' . escapeshellarg($root) . ' && ' . implode(' ', $arguments), $exitCode);
exit($exitCode);
