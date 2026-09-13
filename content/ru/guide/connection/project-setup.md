---
title: "Подключение к проекту"
description: "Подключение SIMAI Framework через CDN или локальные статические файлы."
---

# Подключение к проекту

SIMAI Framework поставляется как готовый каталог `distr`. Его можно отдавать с
CDN или хранить вместе с проектом. Сборщик Framework для этого не нужен.

## Когда применять

CDN подходит для знакомства и прототипа. Локальную копию `distr` выбирайте для рабочего проекта, которому нужны собственный кеш и независимость от внешнего CDN.

| Способ | Когда подходит |
| --- | --- |
| CDN | знакомство, прототип и быстрый запуск |
| Локальные файлы | рабочий проект, собственный кеш и независимость от внешнего CDN |

В обоих случаях используйте одну фиксированную версию. Не подключайте `main`
или `latest`.

## Пример

### CDN

Для опубликованной версии `v5.6.4` добавьте в общий шаблон страницы:

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/simai/ui@v5.6.4/distr/core/css/core.css">

<script>
  window.sfPath = 'https://cdn.jsdelivr.net/gh/simai/ui@v5.6.4/distr/';
  window.SF_BOOT_CONFIG = {preloader: {enabled: false}};
</script>
<script src="https://cdn.jsdelivr.net/gh/simai/ui@v5.6.4/distr/core/js/core.js"></script>
```

`window.sfPath` задаётся до `core.js`. По этому адресу загрузчик находит
утилиты и компоненты.

### Локальные файлы

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

В статическом сайте эти теги размещаются в HTML, а в веб-приложении — в общем
шаблоне страниц. Серверная обёртка для Framework не требуется.

## Перед публикацией

1. Проверьте отсутствие `404` и ошибок Console.
2. Откройте основные страницы на мобильной и десктопной ширине.
3. Проверьте светлую и тёмную тему, если проект их поддерживает.
4. Зафиксируйте версию Framework рядом с другими зависимостями проекта.

Smart Components имеют отдельное подключение, описанное в
[их разделе](/ru/guide/smart-components/connection/). Core автоматически находит
используемые на странице утилиты и компоненты и загружает их из `window.sfPath`.
