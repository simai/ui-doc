---
extends: _core._layouts.documentation
section: content
title: 2.5 LoaderRequest.php — Обработка запроса
description: 2.5 LoaderRequest.php — Обработка запроса
---

# 2.5 LoaderRequest.php — Обработка запроса

## Назначение

Класс **`LoaderRequest`** — это **универсальный адаптер запроса**, который обеспечивает:

* безопасный доступ к параметрам запроса;
* работу с разными окружениями (в т.ч. Bitrix и обычный PHP);
* единый интерфейс для получения GET, POST, заголовков и т.д.

Используется в `Loader.php` для получения всех параметров, включая `a`, `b`, `clear_cache`, `relations`, `url`,
`checkFake`.


## Основная структура

```php
 class LoaderRequest
 {
    protected string $method;
    protected string $uri;
    protected array $get;
    protected array $post;
    protected array $server;
    protected array $cookies;
 }
```

Все суперглобальные переменные копируются и сохраняются в объект, чтобы избежать прямого обращения к `$_GET`, `$_POST` и
т.д.

## Конструктор

```php
 public function __construct(array $get = [], array $post = [], array $server = [], array $cookies = [])
```

Позволяет задать входные данные вручную (например, из симуляции запроса), либо по умолчанию использует суперглобалы.

## Ключевые методы

### **`getQuery(string $key = null): mixed`**

Возвращает значение из GET-параметров. Если ключ не передан — возвращает весь массив `$_GET`.

### **`getPost(string $key = null): mixed`**

Аналогично — для POST-параметров.

### **`getCookies(): array`**

Возвращает массив cookie.

### **`getServerParams(): array`**

Возвращает `$_SERVER`.

### **`getMethod(): string`**

HTTP-метод запроса (`GET`, `POST`, и т.д.).

### **`getUri(): string`**

URI без query string. Пример: `/page/item`.

### **`getRequestUri(): string`**

Полный URI, включая query string. Пример: `/page/item?a=modal`.

### **`getHeader($name): string|null`**

Позволяет получить значение заголовка по имени. Использует `getallheaders()` при наличии.

### **`getRequestedPageDirectory(): string`**

Возвращает директорию страницы без query-параметров и без последнего сегмента.

#### Пример

* URI: `/catalog/item/123`
* Вернёт: `/catalog/item`

Используется при формировании `pageHash`.

## **Особенности**

* Универсален — работает как в Bitrix (через **`Application::getContext()`**), так и в обычном PHP;
* Не зависит от глобальных переменных;
* Упрощает тестирование и расширение загрузчика;
* Все параметры можно получить централизованно через объект **`Loader::$request`**.
