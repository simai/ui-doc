---
extends: _core._layouts.documentation
section: content
title: 2.8 Composer и автозагрузка
description: 2.8 Composer и автозагрузка
---

# 2.8 Composer и автозагрузка

## Назначение

SFLoader использует **Composer** для автозагрузки классов, что упрощает структуру проекта и избавляет от необходимости
вручную подключать каждый файл.  
Подключение происходит через стандартный файл `vendor/autoload.php`, сгенерированный Composer.

## Структура проекта

Файл `composer.json` и папка `vendor/` находятся в корне:

```text
 /simai/composer.json 
 /simai/vendor/
```

Классы загрузчика, например `SIMAI\Main\Loader\Loader`, расположены в:

```text
 /simai/loader/src 
```

```php
require_once $_SERVER["DOCUMENT_ROOT"] . "/simai/vendor/autoload.php";
use SIMAI\Main\Loader\Loader;
$loader = new Loader();
$loader->init();

// при необходимости ajax-запроса simai/loader/loader.php:
$loader->initLoader();
```
## Настройка composer.json

Пример `composer.json`:

```json
 {
   "name": "sf5/new",
   "autoload": {
     "psr-4": {
       "SIMAI\\Main\\Loader\\": "loader/src/"
     }
   },  
   "files": ["loader/src/Constants.php"],
   "require": {"teamtnt/tntsearch": "^4.4", 
   "ext-dom": "*", 
   "matthiasmullie/minify": "^1.3", 
   "ext-zlib": "*"    }
 }
```

После изменения необходимо выполнить:

```shell
composer dump-autoload
```


## Преимущества использования Composer

* Автоматическая загрузка всех классов;
* Совместимость с IDE (автокомплит, поиск по классу);
* Упрощённая структура и масштабируемость;
* Стандартизированный способ подключения во всех окружениях.

## Где используется

* В `loader.php` подключаемом с клиента;
* В `init.php`, тестовых и CLI-скриптах;
* Во всех точках, где необходимо использовать классы загрузчика.

## 2.6 Constants.php — Глобальные пути и окружение

## Назначение

Файл `Constants.php` содержит ключевые глобальные константы, которые используются по всей серверной части SFLoader.  
Эти значения определяют корневую директорию фреймворка и его физическое расположение на диске.

## Определяемые константы

| const SF_MAIN = '/simai';define(\"SF_PATH\", $_SERVER[\"DOCUMENT_ROOT\"] . SF_MAIN); |
|:------------------------------------------------------------------------------------------|

## Значения

* `SF_MAIN` — относительный путь до корня фреймворка внутри проекта (используется в URL);
* `SF_PATH` — абсолютный путь на диске (используется для чтения файлов).

## Используется в:

* `LoaderAsset.php` — путь к ассетам (`/asset/...`);
* `AssetManager.php` — кэш, временные файлы (`/cache/loader/...`);
* `TemplateLoader.php` — путь до шаблонов (`/cache/templates.txt`);
* `Loader.php` — **`clearCacheAnConfig()`**, **`getConfig()`**, **`getModule()`** и другие методы;
