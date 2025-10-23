---
extends: _core._layouts.documentation
section: content
title: "2.4 TemplateLoader.php — Работа с шаблонами Smart-компонентов"
description: "2.4 TemplateLoader.php — Работа с шаблонами Smart-компонентов"
---

# 2.4 TemplateLoader.php — Работа с шаблонами Smart-компонентов

## Назначение

Класс **`TemplateLoader`** отвечает за:

* загрузку и сохранение шаблонов Smart-компонентов;
* генерацию файлов `js.js` и `css.css` из шаблонов;
* формирование fake-шаблонов для вставки в DOM;
* обновление кэша шаблонов, если они изменились.

Этот класс используется при генерации ответа клиенту, в частности, в режиме **`vUseMergeConfigGenerate()`**.

## Ключевые методы

### **buildObject($hash): array**

Основной публичный метод.

* Принимает хеш страницы (`pageHash`);
* Собирает шаблоны из кэша и/или временного контента;
* Возвращает массив:

```php
[
    'status' => true,
    'hasHash' => true|false,
    'templates' => [...],
    'fakeTemplates' => [...] 
]
```

### **getTemplates($path) и getFakeTemplates($path)**

* Загружают шаблоны из файлов templates.txt и fake.txt, находящихся в папке /simai/cache/.

### **setTemplates($data, $path) и setFakeTemplates(...)**

* Сохраняют сериализованные массивы шаблонов в .txt файлы.

### **processTemplateData() / processCacheData()**

* Обновляют шаблоны, если есть отличия;
* Используют метод searchDiff() для определения изменений;
* При необходимости — сливают старые и новые шаблоны.

### **getTemplateFiles($data, $hashDir)**

* **Формирует массив путей к CSS и JS-файлам, полученным из шаблонов Smart-компонентов;**

* **Используется при генерации единого js.js и css.css.**

## **setCachedFiles($hashDir, $data)**

* Сохраняет шаблоны в папке /simai/cache/smart/<hash>/
* Минифицирует и объединяет файлы;
* Создает:
    * js.js
    * css.css

## Минификация

Используется библиотека **`MatthiasMullie\Minify`**:

```php
use MatthiasMullie\Minify\CSS;
use MatthiasMullie\Minify\JS;
```

Минификация выполняется в методе **`setFileData($data, $path, $type)`**.

## Кэширование по pageHash

* Шаблоны кэшируются в поддиректории /cache/smart/\<hash\>/;
* При повторной загрузке — шаблоны берутся оттуда;
* Если хеш совпадает — повторная генерация не выполняется.

## Очистка

#### **clear()**

* Удаляет templates.txt.

#### **removeDirectory($dir)**

* Удаляет директорию smart/<hash> (в т.ч. если она устарела).
 

## **Безопасность**

### **`checkData($data)`**

* Проверяет, является ли файл валидным сериализованным массивом.

## **Используется**

* `Loader::vUseMergeConfigGenerate()` → генерация шаблонов;
* Серверной логике Smart-компонентов;
* Для хранения шаблонов `fakeTemplates` → вставляются в DOM на клиенте.
