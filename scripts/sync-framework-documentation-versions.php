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
// Release lock v2 (`ui-<12>`): one ui commit, Smart in its distr/smart.
// Release lock v1 (`ui-<12>-smart-<12>`): Smart from the ui-smart repository.
$smartInsideUi = ($runtime['ui_smart']['tree'] ?? null) === 'distr/smart';
if ($smartInsideUi && $candidateSmartRevision !== $candidateCoreRevision) {
    throw new RuntimeException('FRAMEWORK_CANDIDATE_REVISION_INVALID');
}
$untaggedExactCandidate = $candidatePair === ($smartInsideUi
    ? sprintf('ui-%s', substr($candidateCoreRevision, 0, 12))
    : sprintf('ui-%s-smart-%s', substr($candidateCoreRevision, 0, 12), substr($candidateSmartRevision, 0, 12))
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

// Component packages (SIMAI Framework Pro): each component folder a package
// ships is cited from that package's repository at its pinned revision.
$packageFolders = [];
foreach ($lock['package_projections'] ?? [] as $package) {
    $provider = (string) ($package['source']['provider'] ?? '');
    $revision = (string) ($package['source']['revision'] ?? '');
    if (preg_match('~^[a-z0-9-]+/[a-z0-9._-]+$~D', $provider) !== 1 || preg_match('/^[a-f0-9]{40}$/D', $revision) !== 1) {
        throw new RuntimeException('FRAMEWORK_PACKAGE_SOURCE_INVALID');
    }
    foreach (array_keys($package['files'] ?? []) as $path) {
        if (preg_match('~^smart/([a-z][a-z0-9-]*)/~', (string) $path, $match) === 1) {
            $packageFolders[$match[1]] = ['provider' => $provider, 'revision' => $revision];
        }
    }
}
$smartCitation = static function (string $folder) use ($packageFolders, $smartInsideUi, $candidateSmartRevision): string {
    if (isset($packageFolders[$folder])) {
        return $packageFolders[$folder]['provider'] . '@' . $packageFolders[$folder]['revision'] . ':smart/';
    }

    return $smartInsideUi
        ? 'simai/ui@' . $candidateSmartRevision . ':distr/smart/'
        : 'simai/ui-smart@' . $candidateSmartRevision . ':smart/';
};

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

У документации есть один машиночитаемый [файл сборки](/ai/framework-lock.json). Выпуск Framework — это одна ревизия репозитория `simai/ui`: Core лежит в `distr/`, Smart Components — в `distr/smart/` той же ревизии. Идентификатор выпуска — `ui-` и первые 12 знаков ревизии:

```json
{
  "pair_id": "ui-идентификатор-выпуска",
  "ui": {"commit": "точная-ревизия-ui", "tree": "distr"},
  "ui_smart": {"commit": "та-же-ревизия-ui", "tree": "distr/smart"}
}
```

SIMAI Framework Pro выпускается отдельно, в `simai/ui-pro`, с идентификатором `pro-` и 12 знаками ревизии. Каждый выпуск Pro называет выпуск Framework, с которым его собрали и проверили; подключайте их вместе.

Человеку достаточно идентификатора выпуска. Инструмент установки сверяет точные ревизии. Благодаря этому текущие номера не приходится повторять на каждой странице и исправлять после каждого выпуска.

## Как обновить проект

1. Выберите опубликованную совместимую сборку.
2. Полностью замените её файлы в тестовом окружении, не смешивая разные поставки.
3. Проверьте основные страницы, мобильную ширину, темы, Network и Console.
4. Зафиксируйте идентификатор сборки и точные ревизии рядом с другими зависимостями.
5. Перенесите в рабочее окружение те же проверенные файлы.

Если проект использует только Core, всё равно фиксируйте точный тег или ревизию. Smart Components приходят в том же выпуске `ui`, отдельный репозиторий для них не нужен.



## Переходы

- [Обновление и наследие](/ru/guide/connection/versions-and-updates/framework-updates/) —
  как старые имена уходят по календарю и как обновить продукт по журналу
  изменений, в том числе с помощью ИИ.
- [История версий](/ru/guide/connection/versions-and-updates/change-history/) —
  что менялось от версии к версии.
- [Единое событие change](/ru/guide/connection/versions-and-updates/change-event/) —
  переход на общее событие изменения.
- [Вертикальный sizing](/ru/guide/connection/versions-and-updates/adaptive-sizing-v1/) —
  переход на адаптивную пару размеров.
MARKDOWN;

$targets = [
    // The page became a section on 2026-10-09; its index carries the version text.
    'content/ru/guide/connection/versions-and-updates/index.md' => static fn (string $current): string => $versionPage . "\n",
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
    // A Smart source is cited where the pinned release carries it: the ui
    // release's distr/smart, or the package that ships the component. Older
    // citations of the separate ui-smart repository move with it.
    $expected = preg_replace_callback(
        '/simai\/(?:ui-smart@[a-f0-9]{40}:smart|ui@[a-f0-9]{40}:distr\/smart|ui-pro@[a-f0-9]{40}:smart)\/([a-z][a-z0-9-]*)(?![a-z0-9.-])/',
        static fn (array $match): string => $smartCitation($match[1]) . $match[1],
        $current,
    );
    // A packaged component's rule is in its package's rule file, not in the
    // Framework's rule list.
    $expected = preg_replace_callback(
        '/simai\/(?:ui@[a-f0-9]{40}:distr\/rule\/rule\.json|ui-pro@[a-f0-9]{40}:smart\/rule\.js)#name=cl-([a-z][a-z0-9-]*)/',
        static fn (array $match): string => (isset($packageFolders[$match[1]])
            ? $packageFolders[$match[1]]['provider'] . '@' . $packageFolders[$match[1]]['revision'] . ':smart/rule.js'
            : 'simai/ui@' . $candidateCoreRevision . ':distr/rule/rule.json') . '#name=cl-' . $match[1],
        (string) $expected,
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
    'package_folders' => $packageFolders,
    'changed' => $changed,
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n";

exit($checkOnly && $changed !== [] ? 1 : 0);
