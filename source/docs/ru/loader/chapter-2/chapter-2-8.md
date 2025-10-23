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
