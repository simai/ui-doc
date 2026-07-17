---
extends: _core._layouts.documentation
section: content
title: 1.2 Динамическая загрузка JS и CSS
description: 1.2 Динамическая загрузка JS и CSS
---

# 1.2 Динамическая загрузка JS и CSS

**SFLoaderPlugin** загружает JS и CSS только для тех модулей, которые были найдены на странице. Поиск модулей описан в
разделе [«Автоматический поиск плагинов»](/ru/start/loader/frontend/plugin-discovery/): после него найденные имена попадают во внутренний список
`this.module`, а загрузкой ресурсов занимается **`getLoader()`**.

## Общая схема

После того как модуль найден через `tags`, `regex`, `sf-asset` или другой канал, loader:

1. Добавляет имя модуля в список загрузки.
2. Расширяет список зависимостями из **`relation`**.
3. Определяет тип модуля: `component`, `smart` или `utility`.
4. Решает, нужно ли грузить JS и CSS по флагам **`js`** и **`css`** в `SF.RuleLoader`.
5. Формирует URL ресурсов или запрашивает готовый bundle у сервера.
6. Вставляет `<script>` и `<link rel="stylesheet">` в `<head>`.
7. После завершения загрузки отправляет событие готовности loader.

Флаги `js` и `css` в правиле не являются путями. Они указывают, какие ресурсы нужны модулю:

```js
SF.RuleLoader['dropdown'] = {
  regex: /sf-dropdown|sf-list-item/,
  type: 'component',
  js: true,
  css: true,
  relation: [{ name: 'icon-buttons' }],
};
```

## Режим `standAlone`

В режиме **`standAlone`** loader строит пути на клиенте и сам подключает файлы. Базовый путь зависит от типа модуля:

- `component` — `${sfPath}/component/<name>`;
- `smart` — `${sfSmartPath или sfPath}/smart/<name>`;
- `utility` — `${sfPath}/utility/<name>`.

Для обычного component-модуля путь строится так:

```text
<sfPath>/component/dropdown/js/dropdown.js
<sfPath>/component/dropdown/css/dropdown.css
```

Для utility-модуля учитывается breakpoint или состояние правила:

```text
<sfPath>/utility/display/js/default.js
<sfPath>/utility/display/css/default.css
```

Для Smart-компонента с именем правила `cl-tooltip` loader убирает префикс `cl-` при построении пути:

```text
<sfSmartPath>/smart/tooltip/js/tooltip.js
```

CSS для Smart-компонентов в этом пути не подключается как отдельный `smart/<name>/css/<name>.css`; их стили обычно
приходят через связанные component-модули или собственную логику компонента.

## Серверный режим

Если **`standAlone`** выключен, loader не строит все итоговые пути сам. Он отправляет запрос:

```text
/simai/loader/loader.php
```

В запрос передаются:

- список найденных модулей;
- зависимости из `relation`;
- флаг поддержки gzip;
- состояние первой загрузки;
- текущий URL страницы;
- флаг проверки Smart-шаблонов.

Сервер возвращает подготовленные пути к JS и CSS. После этого frontend-loader подключает полученные файлы через
`addScript()` и `addStyle()`.

## Подключение файлов

Фактическая вставка ресурсов выполняется динамически:

```js
const script = document.createElement('script');
script.src = src;
script.async = true;
document.head.append(script);
```

```js
const style = document.createElement('link');
style.href = src;
style.type = 'text/css';
style.rel = 'stylesheet';
document.head.append(style);
```

Перед вставкой URL проходит через версионирование. Если задана версия кэша, loader добавляет или обновляет параметр
**`sf_v`**:

```text
/component/dropdown/js/dropdown.js?sf_v=<version>
```

Версия берётся из `cacheVersion`, `pluginListVersion`, `SF_BOOT_CONFIG`, `SF_CACHE_VERSION` или сборочных констант.

## Зависимости

Зависимости описываются в поле **`relation`**:

```js
SF.RuleLoader['fancybox'] = {
  regex: /data-fancybox/,
  type: 'attribute',
  mode: 'component',
  js: true,
  css: true,
  relation: [{ name: 'jquery', mode: 'component', js: true }],
};
```

Когда найден `fancybox`, loader добавляет `jquery` в список загрузки. Зависимости могут иметь свой тип или режим. Если
режим не указан явно, loader пытается определить его по правилу в `SF.RuleLoader`.

Зависимости учитываются до подключения основного JS, чтобы основной модуль не стартовал раньше нужных ресурсов.

## Повторная загрузка и ошибки

Loader хранит состояние уже загруженных модулей и файлов:

- повторно найденный модуль не загружается второй раз;
- текущие загрузки отмечаются как pending;
- отсутствующие файлы запоминаются в `SF_MISSING_PLUGINS`;
- если обычный CSS не найден, loader пробует `.min.css`;
- при ошибке загрузки выводится предупреждение в консоль.

## Отложенная загрузка тяжёлых модулей

Некоторые модули могут быть помечены как тяжёлые. По умолчанию к ним относится, например, `monaco`. Loader может
отложить их до отдельного вызова `getLoader()`, чтобы не блокировать первую пачку ресурсов.

Также существует список приоритетных utility-модулей. При загрузке они переставляются ближе к началу списка, чтобы
базовая раскладка и часто используемые стили подключались раньше остальных.

## События готовности

После завершения загрузки текущей пачки ресурсов loader отправляет событие:

```js
window.dispatchEvent(new CustomEvent('sf-loader-ready', { detail: { ... } }));
```

Это событие означает, что текущая очередь ресурсов обработана. Если позже в DOM появятся новые элементы, `MutationObserver`
может найти дополнительные модули и запустить новую загрузку.

## Пример

На странице есть dropdown:

```html
<div
  class="sf-dropdown sf-dropdown--size-1/3 sf-dropdown--text sf-dropdown--outlined flex flex-col">
  <span class="sf-dropdown-label flex">
    <span class="sf-dropdown-text">Label</span>
    <span class="sf-dropdown-required">*</span>
  </span>
  <label
    class="sf-dropdown-field cursor-pointer items-cross-center transition flex">
    <input
      placeholder="placeholder"
      type="text"
      name="dropdown_input_1_3" />
    <button
      type="button"
      class="sf-icon-button sf-icon-button--icon sf-icon-button--on-surface sf-icon-button--link sf-icon-button--size-1/3 radius-default">
      <i class="sf-icon">keyboard_arrow_down</i>
    </button>
  </label>
  <div class="sf-list flex flex-col">
    <label class="sf-input sf-input--size-1/3 sf-input--filled flex flex-col">
      <span class="sf-input-field items-cross-center transition flex">
        <input
          placeholder="Placeholder"
          type="text"
          name="list_input_1_3" />
        <i class="sf-icon sf-icon-hint">search</i>
      </span>
    </label>
    <div class="sf-list-container-wrap">
      <div class="sf-list-container flex flex-col">
        <div
          tabindex="0"
          role="button"
          class="sf-list-item transition cursor-pointer sf-list-item--text flex items-cross-center sf-list-item--size-1/3">
          <div class="sf-list-item-wrap flex flex-1">
            <div class="sf-list-item-container">Value 1</div>
          </div>
        </div>
        <div
          tabindex="0"
          role="button"
          class="sf-list-item transition cursor-pointer sf-list-item--text flex items-cross-center sf-list-item--size-1/3">
          <div class="sf-list-item-wrap flex flex-1">
            <div class="sf-list-item-container">Value 2</div>
          </div>
        </div>
        <div
          tabindex="0"
          role="button"
          class="sf-list-item transition cursor-pointer sf-list-item--text flex items-cross-center sf-list-item--size-1/3">
          <div class="sf-list-item-wrap flex flex-1">
            <div class="sf-list-item-container">Value 3</div>
          </div>
        </div>
        <div
          tabindex="0"
          role="button"
          class="sf-list-item cursor-pointer selected transition sf-list-item--text flex items-cross-center sf-list-item--size-1/3">
          <div class="sf-list-item-wrap flex flex-1">
            <div class="sf-list-item-container">Value 4</div>
          </div>
          <div class="sf-list-item-selected-item flex">
            <i class="sf-icon">check</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

Правило:

```js
SF.RuleLoader['dropdown'] = {
  regex: /sf-dropdown|sf-list-item/,
  type: 'component',
  js: true,
  css: true,
  relation: [{ name: 'icon-buttons' }],
};
```

Loader найдёт `dropdown`, добавит зависимость `icon-buttons`, сформирует пути для JS/CSS или запросит bundle у сервера, а
затем подключит ресурсы в `<head>`.
