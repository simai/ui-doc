---
extends: _core._layouts.documentation
section: content
title: 1.2 Динамическая загрузка JS и CSS
description: 1.2 Динамическая загрузка JS и CSS
---

# 1.2 Динамическая загрузка JS и CSS

**SFLoaderPlugin** поддерживает **ленивую (динамическую) загрузку ресурсов**, чтобы не загружать весь JavaScript и CSS
заранее. Это позволяет оптимизировать время первой отрисовки страницы и загружать только те компоненты, которые реально
используются.

## Как работает загрузка

После того как плагин найден (например, через sf-asset="modal"), загрузчик:

1. Определяет, какие файлы нужны (js,css):
2. Проверяет, есть ли у него локальные пути или CDN\-ссылки.
3. Создаёт динамически элементы \<script\> и \<link\> и вставляет их в \<head\>.

## Форматы загрузки

**SFLoaderPlugin** может загрузить файл:

- из CDN (если указан полный URL):

```json
{
  "modal": {
    "js": "https://cdn.site.com/modal.min.js",
    "css": "https://cdn.site.com/modal.min.css"
  }
}
```

- из локальной сборки:

```json
{
  "modal": {
    "js": "simai/asset/simai.framework/sf5.master/component/modal/js/modal.js",
    "css": "simai/asset/simai.framework/sf5.master/component/modal/css/modal.css"
  }
}
```

## Динамическая вставка в DOM

**SFLoaderPlugin** сам следит за тем, чтобы один и тот же файл не загружался повторно.

```js
const script = document.createElement('script');
script.src = plugin.js;
script.async = true;
document.head.appendChild(script);
const link = document.createElement('link');
link.href = plugin.css;
link.rel = 'stylesheet';
document.head.appendChild(link);
```

## Асинхронность

* Загрузка JS и CSS происходит **асинхронно**;
* После загрузки выполняется инициализация компонента;
* Загрузка нескольких компонентов происходит **параллельно**, но зависимости могут влиять на порядок инициализации (см.
  пункт 1.3).

## Особенности

* Учитывает поддержку gzip;
* Использует версионирование (hash-файлы) для кэширования;
* Загрузка работает как с обычными компонентами, так и с фреймворками (core, smart, и т.д.);
* В случае ошибки загрузки — выводится предупреждение в консоль.

## Пример работы

```html

<!-- Компонент "tooltip" будет загружен динамически -->
<div sf-asset="tooltip"></div>

```

На основании конфигурации загрузчик сформирует пути и подгрузит:

```json
{
  "tooltip": {
    "js": "simai/asset/simai.framework/sf5.master/component/tooltip/js/tooltip.js",
    "css": "simai/asset/simai.framework/sf5.master/component/tooltip/css/tooltip.css"
  }
}
```
