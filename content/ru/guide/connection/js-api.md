---
title: "JavaScript API"
description: "Какие объекты и функции Framework кладёт в window.SF, какие из них публичные и когда каждый появляется на странице."
---

# JavaScript API

Framework кладёт свои объекты и функции в `window.SF`. Часть из них —
публичный API, на который страница может опираться; остальное — внутреннее
устройство среды выполнения. Список имён, их статус, вид и то, что их
приносит, выпуск объявляет в контракте `core/contracts/public-js-api.json`;
раздел ниже собран из него.

Когда имя доступно, зависит от того, что его приносит:

- **ядро** — сразу после выполнения `core.js`;
- **Loader** — после события `sf-loader-init` (см.
  [События загрузчика](/ru/guide/connection/loader/#события-загрузчика));
- **основа Smart-компонентов** — с первым Smart-элементом на странице или
  после `await SF.loadSmartBase()`;
- **компонент** — только когда Loader загрузил этот компонент по разметке
  страницы: `SF.Input` есть на странице с полем `sf-input`, `SF.ThemePalette` —
  на странице с `<sf-theme-generator>`.

Внутренние имена среды выполнения — шина сообщений, состояние реестра
модулей, объявление основы Smart-компонентов и `litHtml` — лежат в
`SF.__internal`. Прежние имена прямо на `SF` (`SF.send`, `SF.receive`,
`SF.runtimeModules`, `SF.runtimeArrived`, `SF.runtimeLoading`,
`SF.runtimeSettled`, `SF.smartBaseAnnounced`, `SF.litHtml`) читают и пишут
туда же и отмечены устаревшими до 2026-12-01 (запись журнала
`global-sf-internal`, вид `global`). `SF.loadSmartBase`, `SF.smart`,
`SF.smartBaseReady`, `SF.loadRuntime` и `SF.runtimeModule` — публичные.

`SF.Loader.theme` и `SF.Loader.themePreference` — значения состояния, а не
функции: тема на странице и выбор человека; первое значение появляется, когда
Loader выбрал тему при запуске.

## Глобальные объекты

Раздел собран из контракта выпуска `ui-bc1fb36ec8f1` (`core/contracts/public-js-api.json`, формат `simai.framework.public-js-api`) и обновляется вместе с выпуском.

Публичные имена (70) сохраняют смысл; переименовать или убрать такое имя можно только через журнал изменений, как атрибут. Когда имя появляется на странице, говорит столбец «Откуда»: имя компонента приходит вместе с его кодом.

| Имя | Вид | Откуда | Что это | Члены |
|:---|:---|:---|:---|:---|
| `SF.AdminMenu` | объект | компонент `admin-menu` | Скриптовый API компонента AdminMenu; приходит вместе с компонентом (`component/admin-menu`), его методы описаны на странице компонента. | — |
| `SF.AjaxLoad` | объект | компонент `ajaxload` | Скриптовый API компонента AjaxLoad; приходит вместе с компонентом (`component/ajaxload`), его методы описаны на странице компонента. | — |
| `SF.aliases` | объект | ядро, сразу после `core.js` | Псевдонимы элемента с датой (стандарт simai.smart-component 1.3.8 §16.20): `install(element, table)` сохраняет работающими прежние имена событий, настроек, атрибутов, действий и значений компонента до `remove_after` и отмечает каждое использование в `SF.deprecations` с его датами; `strict = true` не принимает истёкшие имена. | `version`, `strict`, `install`, `uninstall`, `dispatch`, `of`, `read`, `expired` |
| `SF.AnchoredBadge` | объект | компонент `badges` | Счётчики и точки компонента component/badges, которые ведутся по разметке: .sf-badge с data-count или data-dot рисуется, ограничивается порогом, прячется при 0 и получает имя, как только оказывается на странице. init(scope) обрабатывает поддерево сразу, update(badge) — один бейдж, state({count, dot, cap, label}, node) отвечает, что бейдж покажет и скажет, не трогая страницу. | `init`, `update`, `state` |
| `SF.Assembly` | объект | ядро, сразу после `core.js` | Среда выполнения сборок стандарта simai.smart-component 1.3.8 (решение владельца 2026-10-27): `define(manifest, {layouts, lang})` определяет тег сборки только по её манифесту; её детали — любые пользовательские элементы с объявленным интерфейсом (`interfaces.register`). Журнал записывает каждый шаг в режиме разработки (`?sf-debug`). Пока нет: отменяемых шагов и слотов в среде выполнения. | `define`, `defined`, `interfaces`, `journal`, `debug`, `activity`, `whenIdle`, `instance`, `instances`, `PART_LINK`, `adaptElement`, `createLink`, `compile`, `AssemblyCore`, `headlessView` |
| `SF.ButtonGroup` | объект | компонент `button-group` | Скриптовый API компонента ButtonGroup; приходит вместе с компонентом (`component/button-group`), его методы описаны на странице компонента. | — |
| `SF.Carousel` | объект | компонент `carousel` | Скриптовый API компонента Carousel; приходит вместе с компонентом (`component/carousel`), его методы описаны на странице компонента. | — |
| `SF.Checkbox` | объект | компонент `checkbox` | Скриптовый API компонента Checkbox; приходит вместе с компонентом (`component/checkbox`), его методы описаны на странице компонента. | — |
| `SF.Clipboard` | объект | компонент `clipboard` | Скриптовый API компонента Clipboard; приходит вместе с компонентом (`component/clipboard`), его методы описаны на странице компонента. | — |
| `SF.Composition` | объект | ядро, сразу после `core.js` | Помощники композиции: описатели фрагментов, выходы хоста страницы, реестры типов компонентов и портов, виды полей. | `checkFragmentDescriptor`, `publishEffects`, `checkPortValue`, `createPortRegistry`, `defineCompositionScope`, `createRegistry`, `extendRegistry`, `describeRegions`, `resolveFieldKind`, `validateFieldValue`, `applyFieldValue`, `parseFieldSubmission` |
| `SF.CompositionOverlay` | объект | Smart-компонент `sf-composition-overlay` | Скриптовый API компонента CompositionOverlay; приходит вместе с компонентом (`smart/composition-overlay`), его методы описаны на странице компонента. | — |
| `SF.CountryCode` | объект | компонент `country-code` | Скриптовый API компонента CountryCode; приходит вместе с компонентом (`component/country-code`), его методы описаны на странице компонента. | — |
| `SF.create` | функция | Loader, после `sf-loader-init` | Создаёт элемент компонента по имени с атрибутами. | — |
| `SF.createAsync` | функция | Loader, после `sf-loader-init` | `SF.create`, который ждёт определения элемента. | — |
| `SF.deprecations` | объект | ядро, сразу после `core.js` | Прежние имена, которые ещё принимаются, и что их заменило — как их объявляет журнал изменений. | — |
| `SF.DownloadFile` | объект | компонент `download-file` | Скриптовый API компонента DownloadFile; приходит вместе с компонентом (`component/download-file`), его методы описаны на странице компонента. | — |
| `SF.EarlyPort` | объект | ядро, сразу после `core.js` | Порты, объявленные в элементах (JSON-остров `<script type="application/json" data-sf-port>`: port, version, url, capabilities, first `{intent, payload}`): ядро отправляет первый вызов, как только выполняется, раньше кода любого компонента, и передаёт элементу порт через `connect-port`, когда элемент определён; первый совпавший вызов порта забирает этот ответ (один запрос). `register(id, adapter)` — реестр портов страницы для острова без url; `start` и `take` — договор подхвата для собственного адаптера продукта (один ранний ответ на порт, забирается один раз, совпадение по порту, версии, намерению и каноническому payload, не старше 10 с). docs/developer/early-port.md. | `start`, `take`, `register`, `scan`, `declareIn`, `waiting`, `firstTags`, `preferTags`, `adapterOf`, `canonical`, `callKey`, `log` |
| `SF.Effects` | объект | ядро, сразу после `core.js` | Фоновые эффекты (`simai.effect`): проверить манифест, прочитать сохранённые настройки, выбрать тему размещения, подключить эффект или группу окон по правилам, загрузить эффект из закреплённого каталога с проверкой целостности, запустить чужой эффект только в изолированном фрейме. | `checkEffectManifest`, `checkSetting`, `effectSettings`, `effectSchemes`, `pairIsForeign`, `foreignMode`, `allowedModes`, `resolveTheme`, `pageScheme`, `mountEffect`, `mountWindows`, `loadEffect`, `placeEffect`, `EFFECT_FORMAT`, `EFFECT_SCHEMA`, `SANDBOX_RUNNER_SHA256` |
| `SF.fieldRenderers` | объект | Smart-компонент `sf-field-renderers` | Набор отрисовщиков полей: значение в ячейке, в просмотре записи, в элементе правки и в фильтре. | `renderCellField`, `renderEditField`, `renderViewField`, `renderFilterField`, `dateTime` |
| `SF.FileUpload` | объект | компонент `file-upload` | Скриптовый API компонента FileUpload; приходит вместе с компонентом (`component/file-upload`), его методы описаны на странице компонента. | — |
| `SF.Flag` | объект | компонент `flag` | Скриптовый API компонента Flag; приходит вместе с компонентом (`component/flag`), его методы описаны на странице компонента. | — |
| `SF.Highlight` | объект | компонент `highlight` | Скриптовый API компонента Highlight; приходит вместе с компонентом (`component/highlight`), его методы описаны на странице компонента. | — |
| `SF.html` | функция | основа Smart-компонентов | Тег `html` библиотеки Lit — тот, которым рисуют Smart-элементы. | — |
| `SF.InlineEditor` | объект | Smart-компонент `sf-inline-editor` | Скриптовый API компонента InlineEditor; приходит вместе с компонентом (`smart/inline-editor`), его методы описаны на странице компонента. | — |
| `SF.Input` | объект | компонент `inputs` | Скриптовый API компонента Input; приходит вместе с компонентом (`component/inputs`), его методы описаны на странице компонента. | — |
| `SF.language` | объект | ядро, сразу после `core.js` | Язык страницы и слова, зарегистрированные для компонентов. | `current`, `use`, `register`, `registerAll`, `known`, `components`, `onChange`, `forget` |
| `SF.LazyLoad` | объект | компонент `lazy-load` | Скриптовый API компонента LazyLoad; приходит вместе с компонентом (`component/lazy-load`), его методы описаны на странице компонента. | — |
| `SF.Loader` | объект | Loader, после `sf-loader-init` | Загрузчик: по требованию загружает то, что использует страница, — компоненты и утилиты — и тему. Когда тема задана (`setTheme`, `changeTheme`), её читают `SF.Loader.theme` и `SF.Loader.themePreference`. | `ready`, `ensurePlugin`, `ensureSmartElementLoaded`, `registerComponent`, `setTheme`, `changeTheme`, `theme`, `preloadIcons`, `clearCache`, `smartPath`, `minified` |
| `SF.loadRuntime` | функция | ядро, сразу после `core.js` | Загружает общую среду Smart-компонентов (`core/js/smart-base.js`) и выполняется с её модулями. | — |
| `SF.loadSmartBase` | функция | Loader, после `sf-loader-init` | Загружает основу Smart-компонентов, когда на странице ещё нет Smart-элемента; выполняется с `SF.smart`. Собственный Smart-компонент проекта ждёт её. | — |
| `SF.Mask` | объект | ядро, сразу после `core.js` | Маски ввода: загрузить библиотеку масок и подключить маску к полю. | `load`, `create`, `pipe`, `destroy` |
| `SF.Modal` | объект | компонент `sf-system` | Скриптовый API модального окна `sf-system`; приходит с `component/sf-system`, его методы описаны на странице этого компонента. Это не класс компонента Modal: на странице, которая загружает только `component/modal` (`sf-modal`, примеры окна), `SF.Modal` нет, а класс лежит в `SF.Loader.ComponentRegistry.Modal` (`new Modal({id, param})`), как в примерах документации. | — |
| `SF.nothing` | значение | основа Smart-компонентов | `nothing` библиотеки Lit. | — |
| `SF.notifications` | объект | ядро, сразу после `core.js` | Область уведомлений: её настройки, закрытие сообщения и показанные сообщения. | `configure`, `close`, `history` |
| `SF.notify` | функция | ядро, сразу после `core.js` | Показывает сообщение в единственной области уведомлений страницы. | — |
| `SF.pageLanguage` | функция | ядро, сразу после `core.js` | Язык, который действует для узла: ближайший `lang`. | — |
| `SF.pageText` | функция | ядро, сразу после `core.js` | Слово компонента на языке узла; сначала — слова, зарегистрированные страницей. | — |
| `SF.Position` | объект | ядро, сразу после `core.js` | Расположение всплывающей поверхности рядом с её якорем с переворотом у края. | `anchor`, `logicalSide`, `physicalPlacement`, `resolveLength` |
| `SF.Preferences` | объект | ядро, сразу после `core.js` | Персональный вид человека: хранится в этом браузере, а если хост его хранит, — и у человека (`simai.interaction-rules`). | `read`, `readMerged`, `write`, `remove`, `subscribe`, `preload`, `useHost`, `load`, `hosted`, `flush` |
| `SF.ProgressBar` | объект | компонент `progress-bar` | Скриптовый API компонента ProgressBar; приходит вместе с компонентом (`component/progress-bar`), его методы описаны на странице компонента. | — |
| `SF.ProgressScale` | объект | компонент `progress-scale` | Скриптовый API компонента ProgressScale; приходит вместе с компонентом (`component/progress-scale`), его методы описаны на странице компонента. | — |
| `SF.Radio` | объект | компонент `radio` | Скриптовый API компонента Radio; приходит вместе с компонентом (`component/radio`), его методы описаны на странице компонента. | — |
| `SF.RangeSlider` | объект | компонент `range-slider` | Скриптовый API компонента RangeSlider; приходит вместе с компонентом (`component/range-slider`), его методы описаны на странице компонента. | — |
| `SF.ready` | функция | ядро, сразу после `core.js` | Готовность Loader — в window.SF сразу после выполнения core.js. Это thenable: await SF.ready (или SF.ready.then) выполняется со значением window.SF ровно тогда, когда Loader отправляет sf-loader-init, — к этому моменту SF.Loader, SF.loadSmartBase и остальные имена ядра Loader уже на месте; скрипт, который спрашивает позже, получает уже выполненное обещание; отклонения не бывает. Один на страницу: создаётся один раз на общем глобальном объекте, все последующие сборки (в том числе второй core.js) сохраняют его и не заменяют. Вызов SF.ready(fn) запускает fn, когда Loader готов и документ разобран, — синхронно, если оба условия уже выполнены. Скрипт, который выполняется до core.js, ставит функцию в очередь: (window.SF_ON_READY = window.SF_ON_READY \|\| []).push(fn); fn вызывается с window.SF в тот же момент. | `then`, `catch`, `finally` |
| `SF.RegionNavigation` | объект | ядро, сразу после `core.js` | Переходы между страницами заменой области содержимого, а не страницы (`simai.interface-fragment`). | `enable`, `disable`, `navigate`, `enabled` |
| `SF.render` | функция | основа Smart-компонентов | `render` библиотеки Lit. | — |
| `SF.Resizer` | объект | Smart-компонент `sf-resizer` | Скриптовый API компонента Resizer; приходит вместе с компонентом (`smart/resizer`), его методы описаны на странице компонента. | — |
| `SF.RuleLoader` | объект | ядро, сразу после `core.js` | Правила загрузки по имени: что нужно классу, тегу или компоненту. Пакет продукта добавляет сюда свои правила (свой `rule.js`). | — |
| `SF.runtimeModule` | функция | ядро, сразу после `core.js` | Обещание одного модуля общей среды Smart-компонентов по его id (`lit`, `smart-base`, `page-language` и другие); через него импортирует собранный Smart-бандл. | — |
| `SF.safeHref` | функция | ядро, сразу после `core.js` | Адрес, который оставляет `SF.sanitizeHtml`, или null: адреса http, https и mailto и пути от корня, но никогда `//host` или `/\host`. | — |
| `SF.sanitizeHtml` | функция | ядро, сразу после `core.js` | Очищает непроверенный HTML в DocumentFragment по разрешённому списку: `SF.sanitizeHtml(html, {elements?, codeLanguage?, document?})`. Скрипты и чужое содержимое выбрасываются вместе с содержимым, другие неизвестные элементы разворачиваются, остаются только безопасные ссылки и объединения ячеек таблицы. | — |
| `SF.Scrollbar` | объект | компонент `scrollbar` | Скриптовый API компонента Scrollbar; приходит вместе с компонентом (`component/scrollbar`), его методы описаны на странице компонента. | — |
| `SF.SfBaseElement` | класс | основа Smart-компонентов | Базовый класс каждого Smart-элемента; собственные Smart-компоненты продукта наследуют его. | — |
| `SF.Slider` | объект | компонент `slider` | Скриптовый API компонента Slider; приходит вместе с компонентом (`component/slider`), его методы описаны на странице компонента. | — |
| `SF.smart` | объект | основа Smart-компонентов | Основа Smart-компонентов: `SfBaseElement` и помощники, на которых строится собственный Smart-компонент проекта. | — |
| `SF.smartBaseReady` | объект | Loader, после `sf-loader-init` | Обещание основы Smart-компонентов, как бы она ни пришла (со Smart-элементом или через `SF.loadSmartBase()`). | — |
| `SF.Sortable` | объект | Smart-компонент `sf-sortable` | Скриптовый API компонента Sortable; приходит вместе с компонентом (`smart/sortable`), его методы описаны на странице компонента. | — |
| `SF.Spinner` | объект | компонент `spinner` | Скриптовый API компонента Spinner; приходит вместе с компонентом (`component/spinner`), его методы описаны на странице компонента. | — |
| `SF.Switch` | объект | компонент `switch` | Скриптовый API компонента Switch; приходит вместе с компонентом (`component/switch`), его методы описаны на странице компонента. | — |
| `SF.Tab` | объект | компонент `tab` | Скриптовый API компонента Tab; приходит вместе с компонентом (`component/tab`), его методы описаны на странице компонента. | — |
| `SF.Tabs` | объект | компонент `tabs` | Скриптовый API компонента Tabs; приходит вместе с компонентом (`component/tabs`), его методы описаны на странице компонента. | — |
| `SF.Textarea` | объект | компонент `textarea` | Скриптовый API компонента Textarea; приходит вместе с компонентом (`component/textarea`), его методы описаны на странице компонента. | — |
| `SF.ThemePalette` | объект | компонент `theme-palette (SF.Loader.ensurePlugin('theme-palette') or data-sf-theme-palette), and smart` | Тема из одного цвета: восемь тональных палитр — 128 примитивов `--sf-<палитра>-<тон>` и 98 полупрозрачных ступеней, которые ядро определяет на них (`--sf-<палитра>-<тон>--alfa-<n>`, список — в `THEME_ALPHA`), всего 226 переменных. | `themeFromColor`, `themeFromHct`, `colorToHct`, `themeToCss`, `themeVariables`, `applyTheme`, `isThemeColor`, `THEME_TONES`, `THEME_PALETTES`, `THEME_ALPHA`, `DEFAULT_THEME_COLOR` |
| `SF.Toast` | объект | компонент `toast` | Скриптовый API компонента Toast; приходит вместе с компонентом (`component/toast`), его методы описаны на странице компонента. | — |
| `SF.Toggle` | объект | компонент `toggle` | Скриптовый API компонента Toggle; приходит вместе с компонентом (`component/toggle`), его методы описаны на странице компонента. | — |
| `SF.Tree` | объект | компонент `tree` | Скриптовый API компонента Tree; приходит вместе с компонентом (`component/tree`), его методы описаны на странице компонента. | — |
| `SF.Verification` | объект | компонент `verification` | Скриптовый API компонента Verification; приходит вместе с компонентом (`component/verification`), его методы описаны на странице компонента. | — |
| `SF.whenDefine` | функция | Loader, после `sf-loader-init` | Прежнее имя `SF.whenDefined`, сохранено. | — |
| `SF.whenDefined` | функция | Loader, после `sf-loader-init` | Обещание определения Smart-элемента; загружает его, если страница ещё не загрузила. | — |
| `SF.whenFieldRenderers` | функция | Loader, после `sf-loader-init` | Обещание набора отрисовщиков полей (`SF.fieldRenderers`); загружает его по требованию. | — |

Внутренние имена (28) принадлежат среде выполнения и могут измениться в любом выпуске; страница их не вызывает: `SF.__internal`, `SF.Ajax`, `SF.Blocks`, `SF.cloneDeep`, `SF.ComponentRegistry`, `SF.Controller`, `SF.curpos`, `SF.Events`, `SF.extend`, `SF.flag`, `SF.Gallery`, `SF.litHtml`, `SF.Methods`, `SF.Overbox`, `SF.Param`, `SF.Parameters`, `SF.Provider`, `SF.quickkey`, `SF.receive`, `SF.runtimeArrived`, `SF.runtimeLoading`, `SF.runtimeModules`, `SF.runtimeSettled`, `SF.Search`, `SF.send`, `SF.smartBaseAnnounced`, `SF.Special`, `SF.topZIndex`.

## Смотрите также

- [Как работает Loader](/ru/guide/connection/loader/) — когда появляется каждый `SF.*` и как его дождаться.
- [Жизненный цикл изменений](/ru/guide/connection/change-lifecycle/) — как переименовываются и убираются публичные имена.
