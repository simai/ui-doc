<?php

declare(strict_types=1);

$root = sys_get_temp_dir().'/ui-doc-migration-'.bin2hex(random_bytes(8));
$content = $root.'/content/ru';
$redirects = $root.'/redirects.json';

$remove = static function (string $path) use (&$remove): void {
    if (is_dir($path) && ! is_link($path)) {
        foreach (scandir($path) ?: [] as $entry) {
            if ($entry !== '.' && $entry !== '..') {
                $remove($path.DIRECTORY_SEPARATOR.$entry);
            }
        }
        rmdir($path);

        return;
    }

    if (file_exists($path) || is_link($path)) {
        unlink($path);
    }
};

try {
    if (! mkdir($content, 0777, true) && ! is_dir($content)) {
        throw new RuntimeException('Cannot create migration fixture.');
    }

    $fixture = <<<'MARKDOWN'
---
extends: _core._layouts.documentation
title: Проверка хода
description: Синхронизация разных потоков
---

# Проверка

Синхронизация сохраняет кириллическую букву х внутри разных потоков.

Custom Element: `<sf-button>`. Нативный элемент: `<button>`.

![Проверочная иллюстрация](/ru/assets/reference/image-02.png){ratio=auto fit=contain}
MARKDOWN;
    file_put_contents($content.'/index.md', $fixture."\n");

    $command = sprintf(
        '%s %s %s %s',
        escapeshellarg(PHP_BINARY),
        escapeshellarg(__DIR__.'/migrate-legacy-content.php'),
        escapeshellarg($root.'/content'),
        escapeshellarg($redirects),
    );

    exec($command, $firstOutput, $firstStatus);
    $first = json_decode(implode("\n", $firstOutput), true, 512, JSON_THROW_ON_ERROR);
    $migrated = (string) file_get_contents($content.'/index.md');

    if ($firstStatus !== 0 || ($first['changed_markdown_files'] ?? null) !== 1) {
        throw new RuntimeException('First migration pass did not report one changed file.');
    }
    foreach (['Проверка хода', 'Синхронизация', 'разных потоков', 'букву х'] as $needle) {
        if (! str_contains($migrated, $needle)) {
            throw new RuntimeException("UTF-8 migration regression: missing [$needle].");
        }
    }
    foreach ([
        '`<sf-button>`',
        '`<button>`',
        '![Проверочная иллюстрация](/ru/assets/reference/image-02.png){ratio=auto fit=contain}',
    ] as $needle) {
        if (! str_contains($migrated, $needle)) {
            throw new RuntimeException("Modern Markdown migration regression: missing [$needle].");
        }
    }

    exec($command, $secondOutput, $secondStatus);
    $second = json_decode(implode("\n", $secondOutput), true, 512, JSON_THROW_ON_ERROR);
    if ($secondStatus !== 0 || ($second['changed_markdown_files'] ?? null) !== 0) {
        throw new RuntimeException('Second migration pass is not idempotent.');
    }

    fwrite(STDOUT, "UI_DOC_MIGRATION_UTF8_AND_MARKDOWN_PASS\n");
} finally {
    $remove($root);
}
