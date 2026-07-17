---
extends: _core._layouts.documentation
section: content
title: 1.5 Прелоадер (индикатор загрузки)
description: 1.5 Прелоадер (индикатор загрузки)
---

# 1.5 Прелоадер (индикатор загрузки)

В SF5 прелоадер работает в два этапа. Ранний boot-слой создаётся в `src/core/js/index.js`, ещё до загрузки основного
`loader.js`. После инициализации `SFLoaderPlugin` runtime-слой может переиспользовать уже созданный `.sf-loader` и скрыть
его после завершения загрузки.

Такая схема уменьшает мигание незагруженной страницы: тело документа скрывается до события готовности loader, а
визуальный индикатор может появиться с небольшой задержкой.

## Задачи прелоадера

- скрыть неполностью подготовленный интерфейс;
- показать индикатор, если загрузка занимает заметное время;
- не мешать сканированию DOM loader-ом;
- корректно завершиться после `sf-loader-ready`;
- не включаться, если страница уже предзагружена через `SF_PRELOADED`.

## Boot-этап

На раннем этапе `index.js` подготавливает `window.SF_BOOT_CONFIG.preloader`:

```js
window.SF_BOOT_CONFIG.preloader = {
  wrap: null,
  preloaderActive: false,
};
```

Затем выполняются две независимые операции:

1. **`hideBodyUntilReady()`** скрывает `body` через `opacity = 0`.
2. **`mountPreloader()`** создаёт DOM-блок `.sf-loader`, если он разрешён настройками.

`body` возвращается к `opacity = 1` после события:

```js
window.addEventListener('sf-loader-ready', () => {
  document.body.style.opacity = '1';
});
```

Если на странице уже есть `window.SF_PRELOADED.modules`, body не скрывается: loader считает, что основные модули уже
подготовлены.

## Настройка через `SF_BOOT_CONFIG`

Ранний preloader настраивается до подключения core:

```html
<script>
  window.SF_BOOT_CONFIG = window.SF_BOOT_CONFIG || {};
  window.SF_BOOT_CONFIG.preloader = {
    enabled: true,
    delay: 300,
    width: 66,
    height: 100,
    color: 'var(--sf-error-60, #E81123)',
    background: 'var(--sf-color--surface-highest, var(--sf-surface-0, #fff))',
    modifier: 'loader-default',
  };
</script>
```

Доступные параметры:

- **`enabled`** — включает или отключает создание boot-preloader;
- **`delay`** — задержка перед созданием DOM-блока, по умолчанию `300`;
- **`width`**, **`height`** — размеры SVG;
- **`color`** — цвет SVG;
- **`background`** — фон overlay;
- **`modifier`** — дополнительный класс модификатора для `.sf-loader`;
- **`content`** — собственная SVG/HTML-разметка вместо стандартной;
- **`tempStyles`** — inline-стили overlay.

Чтобы отключить ранний визуальный preloader:

```js
window.SF_BOOT_CONFIG = window.SF_BOOT_CONFIG || {};
window.SF_BOOT_CONFIG.preloader = {
  enabled: false,
};
```

## DOM-разметка

Boot-preloader создаёт структуру:

```html
<div class="sf-loader loader-default" data-sf-observer="ignore">
  <div class="sf-loader-block sf-loader-boot">
    <!-- SVG -->
  </div>
</div>
```

Атрибут **`data-sf-observer="ignore"`** важен: он исключает preloader из DOM-сканирования и MutationObserver, чтобы
служебная разметка не запускала поиск модулей.

## Runtime-этап

После загрузки `loader.js` создаётся `SF.Loader`. Он получает ссылку на boot-preloader через
`window.SF_BOOT_CONFIG.preloader.wrap` и состояние `preloaderActive`.

Если runtime вызывает **`runPreloader()`**, метод сначала ищет уже существующий `.sf-loader`:

- если boot-preloader есть, он переиспользуется;
- если его нет и `usePreloader` разрешён, runtime создаёт новый `.sf-loader`;
- если `usePreloader` выключен, метод ничего не показывает.

`usePreloader` зависит от наличия кэша `SF_PLUGIN_LIST-*`: если такой кэш найден, runtime обычно не запускает новый
preloader. Это не отменяет ранний boot-слой, который управляется отдельно через `SF_BOOT_CONFIG.preloader`.

## События

Прелоадер завязан на два события:

### `sf-loader-init`

Отправляется после создания `SF.Loader`.

Boot-preloader слушает это событие и останавливает boot-анимацию, если она была запущена. Это передаёт управление
runtime-слою loader-а.

### `sf-loader-ready`

Отправляется после обработки текущей очереди загрузки.

По этому событию:

- body возвращается к `opacity = 1`;
- отложенное создание preloader отменяется, если он ещё не появился;
- анимация останавливается;
- `.sf-loader` получает класс `hidden`.

Если после этого в DOM появятся новые компоненты, `MutationObserver` может запустить дополнительную загрузку модулей, но
страница уже не скрывается boot-слоем повторно.

## Методы runtime

Основные внутренние методы `SFLoaderPlugin`:

- **`runPreloader()`** — переиспользует boot-preloader или создаёт runtime-preloader;
- **`rotatePreloader()`** — запускает SVG-анимацию;
- **`stopAnimation()`** — останавливает таймер и сбрасывает трансформации;
- **`stopPreloader()`** — скрывает `.sf-loader` и возвращает `body.style.opacity = '1'`.

Эти методы нужны runtime-у loader-а. Для обычной настройки страницы предпочтительнее использовать
`window.SF_BOOT_CONFIG.preloader`.

## Когда preloader не показывается

Boot-preloader не создаётся, если:

- задано `window.SF_BOOT_CONFIG.preloader.enabled = false`;
- `.sf-loader` уже есть в DOM;
- событие `sf-loader-ready` произошло раньше окончания `delay`;
- страница предзагружена через `window.SF_PRELOADED.modules`.

Runtime-preloader не создаётся, если:

- `usePreloader` выключен;
- найден кэш `SF_PLUGIN_LIST-*`;
- уже существует boot-preloader, который можно переиспользовать;
- загрузка завершилась до необходимости показывать индикатор.

## Пример отключения

```html
<script>
  window.SF_BOOT_CONFIG = window.SF_BOOT_CONFIG || {};
  window.SF_BOOT_CONFIG.preloader = {
    enabled: false,
  };
</script>
```

Этот код нужно выполнить до подключения core-скрипта SF5.
