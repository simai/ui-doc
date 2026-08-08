---
title: "Установка"
description: "Подключение SIMAI Framework 5.4.0 из локальной неизменяемой поставки или по опубликованному тегу."
---

# Установка

Для работы нужны `core.css`, `core.js` и неизменённая структура каталога
`distr`. Базовый URL `window.sfPath` задайте до подключения `core.js`.

## Локальные статические файлы

Скопируйте весь `distr` из одной поставки в публичную директорию проекта:

```html
<link rel="stylesheet" href="/assets/simai-framework/ui/distr/core/css/core.css">

<script>
  window.sfPath = '/assets/simai-framework/ui/distr';
  window.SF_BOOT_CONFIG = {
    preloader: { enabled: false }
  };
</script>
<script src="/assets/simai-framework/ui/distr/core/js/core.js"></script>
```

Внутри `distr` должны сохраниться каталоги `core`, `utility` и `component`.
Загрузчик сам добавляет к `window.sfPath` нужные внутренние пути.

## Smart Components

Каталог `smart` публикуется отдельно. `window.sfSmartPath` должен указывать на
директорию, внутри которой находится `smart/`:

```html
<script>
  window.sfPath = '/assets/simai-framework/ui/distr';
  window.sfSmartPath = '/assets/simai-framework/ui-smart';
</script>
```

Например, файл `smart/modal/js/modal.js` будет доступен по адресу
`/assets/simai-framework/ui-smart/smart/modal/js/modal.js`.

## CDN

После публикации версии замените `{tag}` на точный неизменяемый тег. Не
используйте `main`, `latest` или другую плавающую ссылку:

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/simai/ui@{tag}/distr/core/css/core.css">
<script>
  window.sfPath = 'https://cdn.jsdelivr.net/gh/simai/ui@{tag}/distr';
</script>
<script src="https://cdn.jsdelivr.net/gh/simai/ui@{tag}/distr/core/js/core.js"></script>
```

Текущая документация собрана на закреплённой паре-кандидате `5.4.0`; её точные
ревизии и ограничения указаны на странице
[«Совместимость и обновление»](/ru/start/compatibility/). Кандидат не следует
подменять вымышленным CDN-тегом до официальной публикации.

## Проверка подключения

- `window.SF` и `window.SF.Loader` доступны в консоли;
- `core.css`, `core.js` и найденные модули загружаются без `404`;
- событие `sf-loader-ready` возникает один раз;
- пример из [быстрого старта](/ru/start/quickstart/) отображается со стилями.

Подробнее о поиске модулей — в разделе [«Загрузчик»](/ru/start/loader/).
