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
foreach ([$candidateFramework, $candidateCore, $candidateSmart] as $tag) {
    if (preg_match('/^v\d+\.\d+\.\d+$/', $tag) !== 1) {
        throw new RuntimeException('FRAMEWORK_CANDIDATE_TAG_INVALID');
    }
}

$versionPage = <<<MARKDOWN
---
title: "Версии и обновление"
description: "Как выбрать фиксированную версию SIMAI Framework и безопасно её обновить."
---

# Версии и обновление

SIMAI Framework состоит из нескольких пакетов. У Core и Smart Components могут
быть разные номера, поэтому одного максимального тега недостаточно. Совместимой
считается только пара, которую собрали и проверили вместе.

## Когда применять

Проверяйте версии перед первым подключением, обновлением Framework и переносом
проекта между окружениями. Не подключайте `main` или `latest`: их содержимое
может измениться без изменения адреса.

## Пример

| Назначение | Версия | Что это значит |
|:---|:---|:---|
| Быстрое знакомство с Core | `{$publicCoreTag}` | Опубликованный неизменяемый тег, который используется в примерах подключения |
| Сборка этой документации | Framework `{$candidateFramework}`: Core `{$candidateCore}`, Smart `{$candidateSmart}` | Проверяемая пара `{$candidatePair}`; соответствующие публичные теги ещё не опубликованы |
| Публичная стабильная пара Framework | Пока не назначена | Нужен отдельный релиз совместимой пары Core и Smart Components |

Версия в примере быстрого старта относится только к Core. Она позволяет
познакомиться со стилями, утилитами и обычными компонентами. Для Smart
Components берите Core и Smart-ассеты только из одного опубликованного контракта
совместимости.

## Как обновить проект

1. Найдите опубликованную совместимую пару Core и Smart Components.
2. Подготовьте её в тестовом окружении.
3. Полностью замените каталоги поставки, не смешивая файлы разных версий.
4. Проверьте основные страницы, мобильную ширину, темы, Network и Console.
5. Только после проверки перенесите ту же пару в рабочее окружение.

Если проект использует только Core, всё равно фиксируйте точный тег. При
добавлении Smart Components отдельно проверьте, с какой версией Core они были
выпущены.

## Что дальше

Перейдите к [общей схеме Framework](/ru/guide/architecture/overview/) или
посмотрите [подключение Smart Components](/ru/guide/smart-components/connection/).
История опубликованных Core-релизов находится в
[репозитории simai/ui](https://github.com/simai/ui/releases).
MARKDOWN;

$targets = [
    'content/ru/guide/connection/versions-and-updates.md' => static fn (string $current): string => $versionPage . "\n",
    'content/ru/guide/introduction/quick-start.md' => static function (string $current) use ($publicCoreTag): string {
        $current = preg_replace('/simai\/ui@v\d+\.\d+\.\d+/', 'simai/ui@' . $publicCoreTag, $current);
        $current = preg_replace('/версии `v\d+\.\d+\.\d+`/', 'версии `' . $publicCoreTag . '`', (string) $current);
        $current = preg_replace('/версия `v\d+\.\d+\.\d+`/', 'версия `' . $publicCoreTag . '`', (string) $current);
        return (string) $current;
    },
    'content/ru/guide/connection/project-setup.md' => static function (string $current) use ($publicCoreTag): string {
        $current = preg_replace('/simai\/ui@v\d+\.\d+\.\d+/', 'simai/ui@' . $publicCoreTag, $current);
        return (string) preg_replace('/версии `v\d+\.\d+\.\d+`/', 'версии `' . $publicCoreTag . '`', (string) $current);
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

echo json_encode([
    'schema' => 'ui-doc.framework_documentation_version_sync.v1',
    'status' => $changed === [] ? 'synchronized' : ($checkOnly ? 'drift' : 'updated'),
    'public_core_tag' => $publicCoreTag,
    'candidate_pair' => $candidatePair,
    'changed' => $changed,
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n";

exit($checkOnly && $changed !== [] ? 1 : 0);
