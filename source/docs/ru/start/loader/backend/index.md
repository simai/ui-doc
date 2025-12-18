---
extends: _core._layouts.documentation
section: content
title: 2.1 Loader.php — Главный контроллер загрузки
description: 2.1 Loader.php — Главный контроллер загрузки
---

# 2.1 Loader.php — Главный контроллер загрузки

## Навигация по бэкенду

- [Серверное взаимодействие](server-interaction.md)
- [Кэширование и ассеты](caching.md)
- [Интеграция](integration.md)

## Инициализация ядра (`init()`)

### Назначение

Метод `init()` в классе `Loader` является **основной точкой инициализации серверной части загрузчика**. Он должен быть
вызван при обращении к `loader.php` — чаще всего это происходит при подключении ассетов в шапке сайта.

Этот метод готовит всё необходимое для корректной работы загрузчика: модули, пути, конфигурации и среду выполнения.

## Подключение

Если используется Composer, подключение `Loader` должно выполняться через автозагрузку:

```php
require_once $_SERVER["DOCUMENT_ROOT"] . "/simai/vendor/autoload.php";
use SIMAI\Main\Loader\Loader;
$loader = new Loader();
$loader->init();
```

## Подробная структура

### 1. Загрузка конфигурации

```php
 $this->getConfig();
```

Подгружает .config.php, содержащий кеш-состояние, update-флаги, список плагинов.

### 2. Обработка флага loader_clear

```php
$clear = $this->request->getQuery('loader_clear');
if ($clear \=== 'Y') {
    $this->clearCacheAnConfig(...);
}
```

Если в запросе есть ?loader\_clear=Y, вызывается clearCacheAnConfig(), которая:

* удаляет все файлы из /simai/cache/;
* сбрасывает .config.php.

### 3. Загрузка core-фреймворка

```php
LoaderAsset::getInstance()->load(framework: "simai.framework");
```

Загружает основную библиотеку (core.js, core.css), указанную как "simai.framework" из asset.config.php.

### 4. Подключение contentPerPages

```php
 LoaderAsset::getInstance()->assetManager->contentPerPages = $this->listConfig['contentPerPages'] ?? [];
```

Если в `.config.php` сохранён список контента по страницам — передаётся в AssetManager.

### 5. Bitrix vs обычное окружение

```php
if (class_exists('\Bitrix\Main\Application')) {
  ...
  } else {
    ...
  }
```

Определяет среду:

* если это проект на Bitrix — использует $APPLICATION и $request;
* иначе — создает симулированный request-массив на основе $\_SERVER, $\_GET, $\_POST.

Это позволяет использовать один и тот же загрузчик в разных системах.

### 6. Загрузка и проверка .config.php

```php
 if (file_exists($fileConfig)) {
     $arProperty = require $fileConfig;
     }
```

Подгружает конфигурационный массив.

### 7. Проверка наличия core-бандла


```php
$frameWorkHash = LoaderAsset::getInstance()->getCoreHash("simai.framework", $cache_path);
...
if (file_exists(js) && file_exists(css)) { ... }
```

Если core-фреймворк уже собран (JS и CSS в кэше) — он подключается:

```php
addJs(..., true);
addCss(..., true);
```

И отправляется клиенту:

```html
<script> window.need_preload = false; window.update_need = true|false; </script>
```

### 8. Подключение бандлов страницы

```php
LoaderAsset::getInstance()->assetManager->findPageBundles();
```

Если ранее уже была собрана страничная сборка (bundle-xxx.js/css), она подключается сейчас.

### 9. Проверка CSS темы

```php
if (file_exists(...sf-color.css)) {
  // может быть активировано при необходимости
  }
}
```

Проверка наличия кастомных тем (например, цветовых схем).

### Вывод

Метод init():

* запускается первым;
* обрабатывает кэш, окружение, конфиги;
* подключает core и шаблоны;
* готовит страницу к быстрой сборке или полной генерации.

## Метод initLoader()

### Назначение

Метод **`initLoader`**`()` запускает **основную загрузочную логику**, но **вызывается не в `init()`, а отдельно — только
при Ajax-запросе от клиента**, когда необходимо сгенерировать список плагинов, шаблонов и ассетов.

### Когда вызывается

**`initLoader`**`()` **не вызывается автоматически внутри `init()`**. Его нужно вызывать вручную после инициализации
ядра, например:

**simai/loader/loader.php**

```php
require_once __DIR__ . '/../vendor/autoload.php';
use SIMAI\Main\Loader\Loader;
Loader::getInstance()->initLoader();
```

Это нужно, когда:

* фронтенд (**`sfLoader`**) отправляет запрос для генерации сборки;
* требуется загрузить smart-шаблоны, зависимости и пути;
* идёт формирование ответа с fake-шаблонами или bundle-путями.

**Почему так**

Метод **`init()`** сам по себе может использоваться:

* для простой подготовки окружения (например, в `header.php`, вставленном в шаблон сайта);  
  для рендеринга core-фреймворка;
* в Bitrix или других CMS, где нет прямого Ajax-запроса к `loader.php`.

Поэтому полная загрузочная логика (в т.ч. **`vUseGenerate`**, **`vUseMergeConfigGenerate`**) вызывается **только при
необходимости**.

### Вывод

* **`init()`** инициализирует окружение;
* **`initLoader()`** — запускается **только при Ajax-запросе от фронтенда**, когда действительно нужно выполнить
  генерацию ассетов и шаблонов.

## Остальные ключевые методы

### `getPlugin()`

Формирует финальный список плагинов, объединяя:

* `a` (из запроса),
* `global_plugin` (из конфига).

### `clearCacheAnConfig($path)`

Удаляет/чистит:

* кэш ассетов (`/cache`);
* `.config.php`;
* `.lock`\-файл.

### `updateModule()`

Добавляет в `.config.php`:

* новые плагины;
* `update_last_stamp`;
* `update_last_date`.

### `vUseGenerate()` deprecated

* Генерация ассетов (режим `v_use = 2`);
* Результат — готовые `.js` и `.css` файлы в `/cache/loader`.

### `vUseMergeConfigGenerate()`

* Основной режим;
* Поддержка шаблонов Smart-компонентов;
* Поддержка временного режима (`/temp`);
* Формирует JSON-ответ для клиента.

## Вывод

* Используется **`init()`** для подготовки и подключения базовых ассетов;
* Используется **`initLoader()`** **только при необходимости сгенерировать ассеты и шаблоны**;
* Разделение этих методов даёт гибкость в разных сценариях — от вставки в шапку сайта до Ajax-запроса.
