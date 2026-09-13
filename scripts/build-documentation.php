#!/usr/bin/env php
<?php
declare(strict_types=1);
chdir(dirname(__DIR__));
foreach ([['vendor/bin/docara','build','production'], ['scripts/export-live-demonstrations.php'], ['scripts/export-ai-documentation.php'], ['scripts/export-ai-documentation.php','--check']] as $args) {
    $process = proc_open([PHP_BINARY, '-d', 'memory_limit=2G', ...$args], [STDIN, STDOUT, STDERR], $pipes);
    if (!is_resource($process)) exit(2);
    $status = proc_close($process);
    if ($status !== 0) exit($status);
}
