---
extends: _core._layouts.documentation
section: content
title: Начало работы
description: Подключение SIMAI Framework через CDN или локальные статические файлы.
---

# Установка

Для базовой работы подключите CSS ядра, задайте путь к каталогу `distr` и
подключите JavaScript ядра. `window.sfPath` нужно объявить до `core.js`.

## Подключение через CDN

Вместо `<version>` укажите используемый тег SIMAI Framework, например версию
вашей поставки.

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/simai/ui@<version>/distr/core/css/core.css">

<script>
  window.sfPath = 'https://cdn.jsdelivr.net/gh/simai/ui@<version>/distr';
</script>
<script src="https://cdn.jsdelivr.net/gh/simai/ui@<version>/distr/core/js/core.js"></script>
```

Не используйте плавающую ветку в рабочем проекте: фиксированный тег позволяет
обновлять Framework осознанно и воспроизводить сборку.

## Локальные статические файлы

Скопируйте каталог `distr` из выбранной версии в публичную директорию проекта:

```html
<link rel="stylesheet" href="/assets/simai-framework/distr/core/css/core.css">

<script>
  window.sfPath = '/assets/simai-framework/distr';
</script>
<script src="/assets/simai-framework/distr/core/js/core.js"></script>
```

Папки `core`, `utility` и `component` внутри `distr` должны сохранять исходную
структуру. Не копируйте отдельные файлы из разных версий.

## Проверка подключения

После загрузки страницы проверьте:

- `window.SF` и `window.SF.Loader` доступны в консоли;
- запросы к `core.css`, `core.js` и используемым модулям завершились без 404;
- в консоли браузера нет ошибок загрузки;
- стили из [быстрого старта](/ru/start/quickstart/) применились.

Подробнее об автоматическом подключении модулей — в разделе
[«Загрузчик»](/ru/start/loader/).
