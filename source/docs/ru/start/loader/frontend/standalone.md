---
extends: _core._layouts.documentation
section: content
title: 1.9 Режим standAlone
description: 1.9 Режим standAlone
---

# 1.9 Режим standAlone

**standAlone** — основной режим работы frontend-loader в текущей сборке SF5. В этом режиме loader не запрашивает у
`/simai/loader/loader.php` готовый список JS/CSS, а сам строит пути к ассетам на клиенте по правилам `SF.RuleLoader`.

По умолчанию в core используется:

```js
const props = {
  standAlone: true,
  findPlugins: SF.RuleLoader,
  // ...
};
```

Это значит, что типовой сценарий загрузки теперь полностью опирается на frontend discovery, `RuleLoader`, relations и
предсказуемую структуру файлов в `component`, `smart` и `utility`.

## Зачем нужен standAlone

Режим нужен, когда ассеты уже лежат в ожидаемой структуре и их можно подключать напрямую:

- без серверной генерации bundle-ответа на каждый запрос;
- без ожидания `/simai/loader/loader.php` для обычного подключения компонентов;
- с одинаковым поведением в документации, embed, preview и локальной разработке;
- с более прозрачной отладкой: видно, какой именно JS/CSS файл подключается.

standAlone не означает «без сети вообще». JS/CSS файлы всё равно загружаются браузером по URL. Разница в том, что
frontend-loader сам формирует эти URL, а не получает их от backend-loader.

## Как включается

В стандартной инициализации SF5 включать ничего не нужно: `standAlone: true` уже задан в core.

Если используется ручная инициализация loader-а, параметр выглядит так:

```js
new SFLoaderPlugin({
  standAlone: true,
  findPlugins: SF.RuleLoader,
});
```

Для возврата к серверному режиму нужно явно передать:

```js
new SFLoaderPlugin({
  standAlone: false,
  findPlugins: SF.RuleLoader,
});
```

В обычной сборке `SF.Loader` создаётся самим `loader.js`, поэтому настройки чаще передаются через boot config и глобальные
пути, а не через ручной `new SFLoaderPlugin()`.

## Как работает загрузка

После discovery loader получает список модулей и вызывает `getLoader()`.

В режиме `standAlone`:

1. Список модулей нормализуется и очищается от уже загруженных элементов.
2. Приоритетные модули перемещаются ближе к началу списка.
3. Тяжёлые модули могут быть отложены на отдельный проход.
4. Список сохраняется в `SF_PLUGIN_LIST-<pageHash>`.
5. `vUseMergeConfigGenerate()` группирует модули по типам.
6. Для каждого модуля строятся пути JS/CSS.
7. Файлы подключаются через `addScript()` и `addStyle()`.
8. После завершения текущей пачки отправляется `sf-loader-ready`.

## Группировка модулей

Перед построением путей loader раскладывает модули по группам:

- **`component`** — обычные компоненты из `src/component/*`;
- **`smart`** — Smart-компоненты из `src/smart/*`, обычно с ключом `cl-*`;
- **`utility`** — utility-модули из `src/utility/*`;
- **`base`** — часть базовых utility-слоёв, например `headers` и `container`.

Пример:

```js
['dropdown', 'cl-tooltip', 'display/default']
```

будет разложен как:

- `dropdown` → component;
- `cl-tooltip` → smart;
- `display/default` → utility `display` в точке `default`.

## Построение путей

Базовые пути задаются из `sfPath` и `sfSmartPath`:

```js
this.componentPath = `${this.url}/component`;
this.utilyPath = `${this.url}/utility`;
this.smartPath = `${this.smartUrl}/smart`;
```

Для component:

```text
<sfPath>/component/dropdown/js/dropdown.js
<sfPath>/component/dropdown/css/dropdown.css
```

Для utility:

```text
<sfPath>/utility/display/js/default.js
<sfPath>/utility/display/css/default.css
```

Для smart:

```text
<sfSmartPath>/smart/tooltip/js/tooltip.js
```

У smart-ключей loader убирает префикс `cl-` при построении пути. Например `cl-tooltip` превращается в `smart/tooltip`.

## JS и CSS

Нужные ресурсы определяются по правилу `SF.RuleLoader`:

```js
SF.RuleLoader['dropdown'] = {
  regex: /sf-dropdown|sf-list-item/,
  type: 'component',
  js: true,
  css: true,
};
```

- если `js` отсутствует или равен `false`, JS не подключается;
- если `css: false`, CSS не подключается;
- для component CSS строится как `<name>/css/<name>.css`;
- для utility CSS строится по breakpoint/state, например `display/css/default.css`;
- для smart отдельный CSS-файл по smart-пути не подключается, обычно стили приходят через `relation` с component-модулем.

Если CSS-файл не найден, loader пробует `.min.css` и фиксирует неудачу в `SF_MISSING_PLUGINS`.

## Relations

`standAlone` учитывает зависимости из `relation` так же, как и общий loader:

```js
SF.RuleLoader['cl-tooltip'] = {
  tags: ['sf-tooltip'],
  type: 'smart',
  mode: 'smart',
  js: true,
  relation: [{ name: 'tooltip' }],
};
```

Если найден `<sf-tooltip>`, loader загрузит smart-модуль `cl-tooltip` и связанную зависимость `tooltip`. JS основного
модуля удерживается до готовности зависимостей.

## Приоритетные и тяжёлые модули

В standAlone-ветке используется общий список **priorityModules**. Такие модули перемещаются в начало загрузки, чтобы
раньше подключить базовые utility-слои:

```js
[
  'container',
  'display',
  'flex',
  'grid',
  'gap',
  'width',
  'height',
  // ...
]
```

Также есть список **heavyModules**. По умолчанию туда входит `monaco`. Такие модули могут быть отложены и загружены
отдельным проходом, чтобы не задерживать основную пачку.

## Кэш и повторные проходы

standAlone использует frontend-кэш:

- сохраняет `this.module` в `SF_PLUGIN_LIST-<pageHash>`;
- пропускает уже загруженные модули из `loadedPlugins`;
- учитывает `SF_PRELOADED`, если модули уже подготовлены страницей;
- не повторяет загрузку модулей, которые уже находятся в `pendingLoadPlugins`;
- использует `SF_MISSING_PLUGINS`, чтобы не повторять заведомо неудачные запросы.

Если после первичной загрузки в DOM появляются новые `sf-*` теги или классы, `MutationObserver` может расширить список и
запустить новую standAlone-загрузку.

## Отличие от серверного режима

При `standAlone: false` loader отправляет список модулей и relations на:

```text
/simai/loader/loader.php
```

Сервер возвращает подготовленные JS/CSS пути и Smart-данные. Этот режим может быть полезен, если проект зависит от
backend-сборки, серверного кэша или генерации fake-content.

В текущей frontend-сборке основной путь — `standAlone: true`. Серверный режим следует рассматривать как альтернативный
сценарий.

## Ограничения

- Файлы должны существовать по ожидаемым путям.
- Правила `SF.RuleLoader` должны корректно описывать `type`, `js`, `css`, `tags` и `relation`.
- Нельзя рассчитывать на серверную пересборку списка ассетов в обычном standAlone-проходе.
- Missing files будут запомнены в `SF_MISSING_PLUGINS`, поэтому после появления файла может потребоваться очистка кэша.
- Для Smart-компонентов важно, чтобы `relation` подключал нужные component-стили и зависимости.

## Когда использовать

Используйте standAlone как режим по умолчанию для:

- документации и playground/embed-страниц;
- проектов с предсказуемой структурой ассетов;
- локальной разработки;
- страниц, где discovery и `RuleLoader` полностью описывают нужные модули;
- Smart-компонентов на `sf-*` custom elements.
