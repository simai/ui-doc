#!/usr/bin/env php
<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$checkOnly = in_array('--check', $argv, true);
$versions = json_decode(
    (string) file_get_contents($root . '/config/framework-documentation-versions.json'),
    true,
    512,
    JSON_THROW_ON_ERROR,
);
$lock = json_decode(
    (string) file_get_contents($root . '/simai-framework.lock.json'),
    true,
    512,
    JSON_THROW_ON_ERROR,
);

$publicCoreTag = $versions['public_core']['tag'] ?? null;
$requiredProfile = $versions['documentation_candidate']['required_publication_profile'] ?? null;
$runtime = $lock['runtime'] ?? [];
if (! is_string($publicCoreTag)
    || preg_match('/^v\d+\.\d+\.\d+$/', $publicCoreTag) !== 1
    || ($runtime['publication_profile'] ?? null) !== $requiredProfile
) {
    throw new RuntimeException('FRAMEWORK_DOCUMENTATION_VERSION_SOURCE_INVALID');
}

$candidateFramework = (string) ($runtime['tag'] ?? '');
$candidateCore = (string) ($runtime['ui']['tag'] ?? '');
$candidateSmart = (string) ($runtime['ui_smart']['tag'] ?? '');
$candidatePair = (string) ($runtime['pair_id'] ?? '');
$candidateCoreRevision = (string) ($runtime['ui']['commit'] ?? '');
$candidateSmartRevision = (string) ($runtime['ui_smart']['commit'] ?? '');
$untaggedExactCandidate = $candidatePair === sprintf(
    'ui-%s-smart-%s',
    substr($candidateCoreRevision, 0, 12),
    substr($candidateSmartRevision, 0, 12),
) && $candidateFramework === '' && $candidateCore === '' && $candidateSmart === '';
if (! $untaggedExactCandidate) {
    foreach ([$candidateFramework, $candidateCore, $candidateSmart] as $tag) {
        if (preg_match('/^v\d+\.\d+\.\d+$/', $tag) !== 1) {
            throw new RuntimeException('FRAMEWORK_CANDIDATE_TAG_INVALID');
        }
    }
}
foreach ([$candidateCoreRevision, $candidateSmartRevision] as $revision) {
    if (preg_match('/^[a-f0-9]{40}$/D', $revision) !== 1) {
        throw new RuntimeException('FRAMEWORK_CANDIDATE_REVISION_INVALID');
    }
}

$versionPage = <<<'MARKDOWN'
---
title: "Версии и обновление"
description: "Как зафиксировать совместимую сборку SIMAI Framework и безопасно её обновить."
---

# Версии и обновление

Framework выпускается несколькими пакетами. Номера отдельных пакетов могут отличаться, поэтому проекту нужна зафиксированная совместимая сборка, а не попытка выбрать самый большой номер.

## Когда применять

Проверяйте сборку при первом подключении и перед обновлением. Не подключайте ветки `main` или адрес `latest`: содержимое по такому адресу может измениться без вашего решения.

## Пример

У документации есть один машиночитаемый [файл сборки](/ai/framework-lock.json). В нём записаны точные ревизии Core и Smart Components, которые проверялись вместе:

```json
{
  "pair_id": "идентификатор-проверенной-сборки",
  "ui": {"commit": "точная-ревизия-core"},
  "ui_smart": {"commit": "точная-ревизия-smart-components"}
}
```

Человеку достаточно идентификатора сборки. Инструмент установки сверяет точные ревизии пакетов. Благодаря этому текущие номера не приходится повторять на каждой странице и исправлять после каждого выпуска.

## Как обновить проект

1. Выберите опубликованную совместимую сборку.
2. Полностью замените её файлы в тестовом окружении, не смешивая разные поставки.
3. Проверьте основные страницы, мобильную ширину, темы, Network и Console.
4. Зафиксируйте идентификатор сборки и точные ревизии рядом с другими зависимостями.
5. Перенесите в рабочее окружение те же проверенные файлы.

Если проект использует только Core, всё равно фиксируйте точный тег или ревизию. Перед добавлением Smart Components переходите на опубликованную совместимую сборку целиком.


MARKDOWN;

$targets = [
    'content/ru/guide/connection/versions-and-updates.md' => static fn (string $current): string => $versionPage . "\n",
    'content/ru/guide/introduction/quick-start.md' => static function (string $current) use ($publicCoreTag): string {
        $current = preg_replace('/simai\/ui@v\d+\.\d+\.\d+/', 'simai/ui@' . $publicCoreTag, $current);
        $current = preg_replace('/версии `v\d+\.\d+\.\d+`/', 'версии `' . $publicCoreTag . '`', (string) $current);
        $current = preg_replace('/версия `v\d+\.\d+\.\d+`/', 'версия `' . $publicCoreTag . '`', (string) $current);
        return (string) $current;
    },
];

$changed = [];
foreach ($targets as $relative => $render) {
    $path = $root . '/' . $relative;
    $current = (string) file_get_contents($path);
    $expected = $render($current);
    if ($expected === $current) {
        continue;
    }
    $changed[] = $relative;
    if (! $checkOnly) {
        file_put_contents($path, $expected, LOCK_EX);
    }
}

$smartDocumentationRoot = $root . '/content/ru/smart-components';
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($smartDocumentationRoot, FilesystemIterator::SKIP_DOTS));
foreach ($iterator as $file) {
    if (! $file->isFile() || strtolower($file->getExtension()) !== 'md') {
        continue;
    }
    $path = $file->getPathname();
    $relative = str_replace('\\', '/', substr($path, strlen($root) + 1));
    $current = (string) file_get_contents($path);
    $expected = preg_replace(
        '/simai\/ui-smart@[a-f0-9]{40}(?=:smart\/)/',
        'simai/ui-smart@' . $candidateSmartRevision,
        $current,
    );
    $expected = preg_replace(
        '/simai\/ui@[a-f0-9]{40}(?=:distr\/rule\/rule\.json)/',
        'simai/ui@' . $candidateCoreRevision,
        (string) $expected,
    );
    if ($expected === $current) {
        continue;
    }
    $changed[] = $relative;
    if (! $checkOnly) {
        file_put_contents($path, $expected, LOCK_EX);
    }
}
$changed = array_values(array_unique($changed));
sort($changed, SORT_STRING);

echo json_encode([
    'schema' => 'ui-doc.framework_documentation_version_sync.v1',
    'status' => $changed === [] ? 'synchronized' : ($checkOnly ? 'drift' : 'updated'),
    'public_core_tag' => $publicCoreTag,
    'candidate_pair' => $candidatePair,
    'candidate_core_revision' => $candidateCoreRevision,
    'candidate_smart_revision' => $candidateSmartRevision,
    'changed' => $changed,
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n";

exit($checkOnly && $changed !== [] ? 1 : 0);
