<?php

declare(strict_types=1);

$repositoryRoot = dirname(__DIR__);
$checker = $repositoryRoot . '/bin/check-content-spacing-contract.php';
$sourceProjection = $repositoryRoot . '/contracts/sf5/content-spacing.docs.v1.json';
$sourceGuide = $repositoryRoot . '/source/docs/ru/fundamentals/content-spacing.md';
$sourceMenu = $repositoryRoot . '/source/docs/ru/fundamentals/.settings.php';
$assertions = 0;

$assert = static function (bool $condition, string $message) use (&$assertions): void {
    $assertions++;
    if (!$condition) {
        throw new RuntimeException($message);
    }
};

$fixture = static function () use ($sourceProjection, $sourceGuide, $sourceMenu): string {
    $root = sys_get_temp_dir() . '/sf-content-spacing-' . bin2hex(random_bytes(6));
    mkdir($root . '/contracts/sf5', 0777, true);
    mkdir($root . '/source/docs/ru/fundamentals', 0777, true);
    copy($sourceProjection, $root . '/contracts/sf5/content-spacing.docs.v1.json');
    copy($sourceGuide, $root . '/source/docs/ru/fundamentals/content-spacing.md');
    copy($sourceMenu, $root . '/source/docs/ru/fundamentals/.settings.php');
    return $root;
};

$removeFixture = static function (string $root) use (&$removeFixture): void {
    if (!is_dir($root)) {
        return;
    }
    foreach (array_diff(scandir($root) ?: [], ['.', '..']) as $entry) {
        $path = $root . '/' . $entry;
        if (is_dir($path) && !is_link($path)) {
            $removeFixture($path);
        } else {
            unlink($path);
        }
    }
    rmdir($root);
};

$run = static function (string $root) use ($checker): array {
    $command = [PHP_BINARY, $checker, '--root=' . $root];
    $pipes = [];
    $process = proc_open($command, [
        0 => ['pipe', 'r'],
        1 => ['pipe', 'w'],
        2 => ['pipe', 'w'],
    ], $pipes);
    if (!is_resource($process)) {
        throw new RuntimeException('Cannot start content-spacing checker.');
    }
    fclose($pipes[0]);
    $stdout = stream_get_contents($pipes[1]);
    $stderr = stream_get_contents($pipes[2]);
    fclose($pipes[1]);
    fclose($pipes[2]);
    $exit = proc_close($process);
    return [
        'exit' => $exit,
        'stdout' => $stdout,
        'stderr' => $stderr,
        'diagnostic' => $stderr === '' ? null : json_decode($stderr, true, 512, JSON_THROW_ON_ERROR),
    ];
};

$replaceGuide = static function (string $root, string $search, string $replace): void {
    $path = $root . '/source/docs/ru/fundamentals/content-spacing.md';
    $guide = (string) file_get_contents($path);
    file_put_contents($path, str_replace($search, $replace, $guide));
};

$cases = [];

$root = $fixture();
try {
    $result = $run($root);
    $assert($result['exit'] === 0, 'Exact fixture must pass.');
    $cases['exact'] = 'pass';
} finally {
    $removeFixture($root);
}

$negativeCases = [
    'missing' => static function (string $root) use ($replaceGuide): void {
        $replaceGuide(
            $root,
            '| `--sf-content--space-block` | `block` | Самостоятельные блоки внутри одного раздела | 16px | 24px |',
            ''
        );
    },
    'stale_hash' => static function (string $root) use ($replaceGuide): void {
        $replaceGuide(
            $root,
            'b70d02d6902345e17954eafb44f24052b7478439184286bed5a8df6c69c1fe45',
            str_repeat('0', 64)
        );
    },
    'stale_value' => static function (string $root) use ($replaceGuide): void {
        $replaceGuide($root, '| 12px | 16px |', '| 13px | 16px |');
    },
    'swapped_values' => static function (string $root) use ($replaceGuide): void {
        $replaceGuide($root, '| 16px | 20px |', '| 16px | TEMPpx |');
        $replaceGuide($root, '| 16px | 24px |', '| 16px | 20px |');
        $replaceGuide($root, '| 16px | TEMPpx |', '| 16px | 24px |');
    },
    'value_elsewhere' => static function (string $root) use ($replaceGuide): void {
        $replaceGuide($root, '| 16px | 20px |', '| 16px | 99px |');
        $path = $root . '/source/docs/ru/fundamentals/content-spacing.md';
        file_put_contents($path, (string) file_get_contents($path) . "\nElsewhere: | 16px | 20px |\n");
    },
];

foreach ($negativeCases as $name => $mutate) {
    $root = $fixture();
    try {
        $mutate($root);
        $result = $run($root);
        $assert($result['exit'] !== 0, $name . ' fixture must fail.');
        $code = $result['diagnostic']['diagnostic']['code'] ?? null;
        $assert(is_string($code) && $code !== '', $name . ' must return a stable diagnostic code.');
        $assert(
            array_key_exists('expected', $result['diagnostic']['diagnostic'] ?? []),
            $name . ' must report expected data.'
        );
        $assert(
            array_key_exists('actual', $result['diagnostic']['diagnostic'] ?? []),
            $name . ' must report actual data.'
        );
        $cases[$name] = $code;
    } finally {
        $removeFixture($root);
    }
}

echo json_encode([
    'status' => 'pass',
    'assertions' => $assertions,
    'cases' => $cases,
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . PHP_EOL;
