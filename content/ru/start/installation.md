---
title: "Подключение к проекту"
description: "Подключение SIMAI Framework через CDN или локальные статические файлы."
---

# Подключение к проекту

SIMAI Framework поставляется как готовый каталог `distr`. Его можно отдавать с
CDN или хранить вместе с проектом. Сборщик Framework для этого не нужен.

## Выберите способ

| Способ | Когда подходит |
| --- | --- |
| CDN | знакомство, прототип и быстрый запуск |
| Локальные файлы | рабочий проект, собственный кеш и независимость от внешнего CDN |

В обоих случаях используйте одну фиксированную версию. Не подключайте `main`
или `latest`.

## CDN

Для опубликованной версии `v5.4.0` добавьте в общий шаблон страницы:

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/simai/ui@v5.4.0/distr/core/css/core.css">

<script>
  window.sfPath = 'https://cdn.jsdelivr.net/gh/simai/ui@v5.4.0/distr/';
  window.SF_BOOT_CONFIG = {preloader: {enabled: false}};
</script>
<script src="https://cdn.jsdelivr.net/gh/simai/ui@v5.4.0/distr/core/js/core.js"></script>
```

`window.sfPath` задаётся до `core.js`. По этому адресу загрузчик находит
утилиты и компоненты.

## Локальные файлы

Возьмите весь каталог `distr` из одного опубликованного релиза и скопируйте его
в публичную папку проекта. Не выбирайте из поставки отдельные файлы: загрузчику
нужна сохранённая внутренняя структура.

```text
public/
└── assets/
    └── simai-framework/
        └── distr/
            ├── core/
            ├── component/
            ├── utility/
            └── rule/
```

Подключение для этой структуры:

```html
<link rel="stylesheet" href="/assets/simai-framework/distr/core/css/core.css">
<script>
  window.sfPath = '/assets/simai-framework/distr/';
  window.SF_BOOT_CONFIG = {preloader: {enabled: false}};
</script>
<script src="/assets/simai-framework/distr/core/js/core.js"></script>
```

В статическом сайте эти теги размещаются в HTML. В Laravel или Larena — в
общем Blade-шаблоне, в 1С-Битрикс — в шаблоне сайта или менеджере ресурсов.
Backend-обёртка для Framework не требуется.

## Перед публикацией

1. Проверьте отсутствие `404` и ошибок Console.
2. Откройте основные страницы на мобильной и десктопной ширине.
3. Проверьте светлую и тёмную тему, если проект их поддерживает.
4. Зафиксируйте версию Framework рядом с другими зависимостями проекта.

Smart Components имеют отдельное подключение, описанное в
[их разделе](/ru/smart-components/connection/). Core автоматически находит
используемые на странице утилиты и компоненты и загружает их из `window.sfPath`.
