---
title: "Быстрый старт"
description: "Первая страница не требует npm, сборщика и серверной части."
---

# Быстрый старт

Первая страница не требует npm, сборщика и серверной части. Нужны браузер,
редактор и любой локальный HTTP-сервер.

## Страница на Core

Этот пример показывает минимальную страницу, на которой работают стили,
токены, утилиты и компонент на классах.

Создайте пустую папку и сохраните в ней `index.html`. Пример закреплён на
выпуске `ui-945c2ef505cc`: во всех трёх адресах стоит полный коммит этого
выпуска `945c2ef505cca268e423f9d67bf0eae0bc9cb7d9`. Идентификатор выпуска —
не тег git, поэтому в адресе CDN пишется коммит. Чтобы взять другой выпуск,
замените коммит во всех трёх адресах (см. [Версии: как закрепить выпуск](/ru/guide/connection/versions/)):

```html
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Первая страница на SIMAI Framework</title>
  <link rel="icon" href="data:,">
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/simai/ui@945c2ef505cca268e423f9d67bf0eae0bc9cb7d9/distr/core/css/core.min.css">
</head>
<body>
  <main class="p-4">
    <article class="p-4 bg-surface-container radius-2">
      <h1 class="sf-h-2 m-bottom-2">SIMAI Framework подключён</h1>
      <p class="sf-body-medium color-on-surface">
        Стили, токены и утилиты работают.
      </p>
      <button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1">
        <span class="sf-button-text-container">Кнопка на классах</span>
      </button>
    </article>
  </main>

  <script>
    window.sfPath = 'https://cdn.jsdelivr.net/gh/simai/ui@945c2ef505cca268e423f9d67bf0eae0bc9cb7d9/distr/';
    window.SF_BOOT_CONFIG = {preloader: {enabled: false}};
  </script>
  <script src="https://cdn.jsdelivr.net/gh/simai/ui@945c2ef505cca268e423f9d67bf0eae0bc9cb7d9/distr/core/js/core.min.js"></script>
</body>
</html>
```

Запустите сервер в этой папке:

```bash
python3 -m http.server 8080
```

и откройте `http://localhost:8080`. Должна появиться карточка с отступами,
фоном, скруглением, типографикой Framework и кнопкой.

Классы в примере — это уровни из [Уровни Framework](/ru/guide/introduction/levels/#уровни-framework): `p-4`, `radius-2`,
`bg-surface-container` — утилиты, `sf-h-2` и `sf-body-medium` — типографика
Core, `sf-button` — компонент. У кнопки на классах обязательны четыре класса:
корень `sf-button`, вид (`sf-button--default`), **схема** (`sf-button--primary`)
и размер (`sf-button--size-1`), а подпись лежит в
`<span class="sf-button-text-container">`. Без класса схемы кнопка не получает
цветов. Типографика Core приходит вместе со стилем ядра; утилиты и компонент
вручную не подключены: Loader нашёл их классы на странице и загрузил нужные
модули.

Страница подключает сжатые файлы ядра, `core.min.css` и `core.min.js`, и
Loader тоже загружает сжатые модули. Читаемые файлы нужны при отладке: их
включает параметр `?sf-debug` в адресе страницы (см. [Сжатые файлы](/ru/guide/connection/loader/#сжатые-файлы)).
Строка `<link rel="icon" href="data:,">` только убирает из консоли ответ `404`
на запрос значка сайта.

Строка `window.SF_BOOT_CONFIG = {preloader: {enabled: false}}` выключает
индикатор загрузки только для этого примера: карточка видна сразу, без
индикатора между открытием страницы и `sf-loader-ready`. В рабочем проекте эту
настройку не пишут, и индикатор работает по умолчанию: он появляется, если
загрузка идёт дольше 300 мс (см. [Что происходит при открытии страницы](/ru/guide/connection/loader/#что-происходит-при-открытии-страницы)).

## Проверка подключения

В инструментах разработчика браузера:

- на вкладке Network нет ответов `404`;
- в Console нет ошибок загрузки и нет предупреждения о том, что
  `window.sfPath` не задан;
- выражение `window.SF?.Loader` возвращает загрузчик, а не `undefined`.

## Добавляем Smart-компоненты

Smart-компоненты лежат в той же поставке, в `distr/smart/`. Loader находит их
по `window.sfPath`, поэтому на странице из [Страница на Core](#страница-на-core) достаточно поставить тег:

```html
<sf-button text="Сохранить" scheme="primary" size="1"></sf-button>
```

Увидев `<sf-button>`, Loader загрузит Smart-кнопку, компонент кнопки, от
которого зависит её вид, и общую основу Smart-компонентов — один файл на всю
страницу (см. [Общая основа Smart-компонентов](/ru/guide/connection/loader/#общая-основа-smart-компонентов)). Полный порядок подключения своей копии поставки —
см. [Порядок подключения](/ru/guide/connection/project-setup/#порядок-подключения); CDN или свои файлы — [CDN или своя копия](/ru/guide/connection/project-setup/#cdn-или-своя-копия); подключение пакета компонентов —
[Пакеты компонентов](/ru/guide/connection/loader/#пакеты-компонентов); закрепление выпуска и обновление — [Версии: как закрепить выпуск](/ru/guide/connection/versions/) и [Как обновить проект](/ru/guide/connection/updating/#как-обновить-проект).

## Попробуйте без проекта

В [SIMAI Playground](https://play.simai.io/) можно открыть готовый пример,
изменить классы и сразу увидеть результат в браузере. Это необязательный шаг:
для подключения Framework к проекту достаточно страницы выше.
