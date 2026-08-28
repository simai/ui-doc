---
title: "Старт"
description: "Первая рабочая страница на SIMAI Framework за несколько минут."
---

# Старт

Подключите SIMAI Framework к обычной HTML-странице и сразу проверьте результат.
Для этого примера не нужны npm, сборщик или backend.

## Что понадобится

- браузер;
- редактор кода;
- Python 3 или другой локальный HTTP-сервер.

## 1. Создайте страницу

Создайте пустую папку и сохраните в ней файл `index.html`:

```html
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Первая страница на SIMAI Framework</title>
  <link rel="icon" href="data:,">
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/simai/ui@v5.4.0/distr/core/css/core.css">
</head>
<body>
  <main class="p-4">
    <article class="p-4 bg-surface-container radius-2">
      <h1 class="sf-h-2 m-bottom-2">SIMAI Framework подключён</h1>
      <p class="sf-body-medium color-on-surface">
        Стили, токены и утилиты работают.
      </p>
    </article>
  </main>

  <script>
    window.sfPath = 'https://cdn.jsdelivr.net/gh/simai/ui@v5.4.0/distr/';
    window.SF_BOOT_CONFIG = {preloader: {enabled: false}};
  </script>
  <script src="https://cdn.jsdelivr.net/gh/simai/ui@v5.4.0/distr/core/js/core.js"></script>
</body>
</html>
```

В примере используется опубликованная и неизменяемая версия `v5.4.0`.
Фиксированная версия защищает проект от неожиданных изменений.

## 2. Запустите локальный сервер

Откройте терминал в папке с файлом и выполните:

```bash
python3 -m http.server 8080
```

Затем откройте [http://localhost:8080](http://localhost:8080). Вы должны увидеть
карточку с отступами, фоном, скруглением и типографикой Framework.

## 3. Проверьте подключение

Откройте инструменты разработчика в браузере:

- на вкладке Network не должно быть ответов `404`;
- в Console не должно быть ошибок загрузки Framework;
- выражение `window.SF?.Loader` должно вернуть загрузчик, а не `undefined`.

Классы в примере меняют страницу прямо в разметке: `p-4` задаёт отступ,
`radius-2` — скругление, а `bg-surface-container` — цвет поверхности. Загрузчик
находит эти классы и подключает нужные модули автоматически.

## Попробуйте без проекта

В [SIMAI Playground](https://play.simai.io/) можно открыть готовый пример,
изменить классы и сразу увидеть результат в браузере. Это необязательный шаг:
для подключения Framework к проекту достаточно инструкции выше.

## Куда дальше

- [Подключение к реальному проекту](/ru/start/installation/) — локальные файлы,
  CDN и структура публичной папки.
- [Основы](/ru/fundamentals/) — условия, размеры, цвета и типографика.
- [Каталог утилит](/ru/utilities/) — доступные CSS-классы по задачам.
- [Компоненты](/ru/framework-components/) — готовые элементы интерфейса.
