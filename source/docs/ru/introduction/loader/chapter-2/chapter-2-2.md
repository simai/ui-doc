---
extends: _core._layouts.documentation
section: content
title: 2.2 LoaderAsset.php — Менеджер асетов
description: 2.2 LoaderAsset.php — Менеджер асетов
---

# 2.2 LoaderAsset.php — Менеджер асетов

## Назначение

**`LoaderAsset`** — это **прокси-класс между системой загрузки и низкоуровневым менеджером ассетов (`AssetManager`)**.  
Он управляет подключением фреймворков, загрузкой их JS/CSS, проверкой кэша Smart-компонентов и предоставляет доступ к *
*`AssetManager`**.

## Основная структура

```php
 class LoaderAsset
 {
     protected static $instance;
     public AssetManager $assetManager;
     public const ASSET_DIR = SF_MAIN . '/asset';
     public const ASSET_CONFIG_FILE = '/config/.asset.config.php';
 }
```

* Реализован как `Singleton (getInstance())`.
* Хранит экземпляр AssetManager в `$this->assetManager`.


## Метод getInstance()

Возвращает один и тот же экземпляр **`LoaderAsset`**:

```php
 LoaderAsset::getInstance()
```

Позволяет централизованно использовать менеджер ассетов по всей системе.

## Метод load($framework, $types = null, $version = 'default')

Загружает указанный фреймворк по имени:

* Обращается к файлу конфигурации /simai/config/.asset.config.php;
* Ищет в нём структуру по $framework → version → file[];
* Передаёт каждый файл в AssetManager->addJs(), addCss() или addString() в зависимости от типа (script, style, string);
* Может применять префикс /simai к путям;
* Возвращает массив подключённых путей.

### **Метод fetchComponents()**

Непубличный (protected), вызывается из load():

* Обходит структуру конфигурации ассетов;
* Проверяет расширение файлов;
* Добавляет файлы в AssetManager;
* Поддерживает стили, скрипты, строки.

## Метод getCoreHash($name, $cache_path)

* Получает хеш-файл для указанного фреймворка:
    * `core-<hash>.js`
    * `core-<hash>.css`
* Проверяет существование этих файлов в `/cache/loader/`;
* Если файлы есть — возвращает пути к ним;
* Используется, например, в **`Loader::init()`** для вставки core-бандла без необходимости пересобирать.


## Метод checkSmartCache()

Проверяет, существует ли готовый кэш Smart-компонентов:

* Путь: `/simai/cache/smart/<pageHash>/`;
* Если найдены `js.js` и/или `css.css`, они подключаются как ассеты:

```php
 $this->assetManager->addJs(...);
 $this->assetManager->addCss(...);
```

Позволяет избежать повторной генерации шаблонов и ускорить загрузку.

## Метод render(string|array $path)

Принимает строку пути или массив путей и:

* генерирует HTML `<script>` или `<link>` тег;
* выводит их напрямую в HTML-ответе.

## Используется в

* **`Loader::init()`** — для загрузки фреймворка и подключения готовых кэшей;
* **`Loader::vUseGenerate()`** и **`vUseMergeConfigGenerate()`** — для генерации финального вывода;
* Шаблоны, темы, динамическая загрузка.

## Вывод

**`LoaderAsset`** — это:

* прослойка между логикой и **`AssetManager`**;
* инструмент для подключения фреймворков, кэша, core-бандлов;
* хранилище и делегатор всех JS/CSS ресурсов;
* основная точка доступа к **`AssetManager`** в проекте.
