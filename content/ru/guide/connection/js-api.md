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
- **основа смарт-компонентов** — с первым смарт-элементом на странице или
  после `await SF.loadSmartBase()`;
- **компонент** — только когда Loader загрузил этот компонент по разметке
  страницы: `SF.Input` есть на странице с полем `sf-input`, `SF.ThemePalette` —
  на странице с `<sf-theme-generator>`.

Внутренние имена среды выполнения — шина сообщений, состояние реестра
модулей, объявление основы смарт-компонентов и `litHtml` — лежат в
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

Раздел собран из контракта выпуска `ui-e7b79c3a9e05` (`core/contracts/public-js-api.json`, формат `simai.framework.public-js-api`) и обновляется вместе с выпуском.

Публичные имена (74) сохраняют смысл; переименовать или убрать такое имя можно только через журнал изменений, как атрибут. Когда имя появляется на странице, говорит столбец «Откуда»: имя компонента приходит вместе с его кодом.

| Имя | Вид | Откуда | Что это | Члены |
|:---|:---|:---|:---|:---|
| `SF.AdminMenu` | объект | компонент `admin-menu` | Скриптовый API компонента AdminMenu; приходит вместе с компонентом (`component/admin-menu`), его методы описаны на странице компонента. | — |
| `SF.aliases` | объект | ядро, сразу после `core.js` | Псевдонимы элемента с датой (стандарт simai.smart-component 1.3.8 §16.20): `install(element, table)` сохраняет работающими прежние имена событий, настроек, атрибутов, действий и значений компонента до `remove_after` и отмечает каждое использование в `SF.deprecations` с его датами; `strict = true` не принимает истёкшие имена. | `version`, `strict`, `install`, `uninstall`, `dispatch`, `of`, `read`, `expired` |
| `SF.AnchoredBadge` | объект | компонент `badges` | Счётчики и точки компонента component/badges, которые ведутся по разметке: .sf-badge с data-count или data-dot рисуется, ограничивается порогом, прячется при 0 и получает имя, как только оказывается на странице. init(scope) обрабатывает поддерево сразу, update(badge) — один бейдж, state({count, dot, cap, label}, node) отвечает, что бейдж покажет и скажет, не трогая страницу. | `init`, `update`, `state` |
| `SF.Assembly` | объект | ядро, сразу после `core.js` | Среда выполнения сборок стандарта simai.smart-component 1.3.8 (решение владельца 2026-10-27): `define(manifest, {layouts, lang})` определяет тег сборки только по её манифесту; её детали — любые пользовательские элементы с объявленным интерфейсом (`interfaces.register`). Журнал записывает каждый шаг в режиме разработки (`?sf-debug`). Пока нет: отменяемых шагов и слотов в среде выполнения. | `define`, `defined`, `interfaces`, `journal`, `debug`, `activity`, `whenIdle`, `instance`, `instances`, `PART_LINK`, `adaptElement`, `createLink`, `compile`, `AssemblyCore`, `headlessView` |
| `SF.breakpoints` | объект | ядро, сразу после `core.js` | Шкала контрольных точек SIMAI Framework для скриптов, те же шаги, на которых переключаются таблицы стилей (xs 0, sm 32rem, md 44rem, lg 60rem, xl 72rem, xxl 80rem): `ladder`; `query(name, {below})` — медиазапрос; `media(name, {below})` — его MediaQueryList; `matches(name, {below})` — такой ли ширины страница сейчас. docs/developer/format.md. | `ladder`, `query`, `media`, `matches` |
| `SF.ButtonGroup` | объект | компонент `button-group` | Скриптовый API компонента ButtonGroup; приходит вместе с компонентом (`component/button-group`), его методы описаны на странице компонента. | — |
| `SF.Carousel` | объект | компонент `carousel` | Скриптовый API компонента Carousel; приходит вместе с компонентом (`component/carousel`), его методы описаны на странице компонента. | — |
| `SF.Checkbox` | объект | компонент `checkbox` | Скриптовый API компонента Checkbox; приходит вместе с компонентом (`component/checkbox`), его методы описаны на странице компонента. | — |
| `SF.Clipboard` | объект | компонент `clipboard` | Скриптовый API компонента Clipboard; приходит вместе с компонентом (`component/clipboard`), его методы описаны на странице компонента. | — |
| `SF.Composition` | объект | ядро, сразу после `core.js` | Помощники композиции: описания фрагментов, выходы хоста страницы, реестры типов компонентов и портов, виды полей и слова встроенных манифестов редактора (`editorFieldMessages`; владелец `sf-composition` в `SF.language`); с `core.runtime` 1.23.0 — контракты единого редактора блоков: каталог и варианты, параметры раскладки как утилиты, собственные модификаторы, блоки сайта, именованные места и порт источника данных (docs/developer/block-author-guide.md); с `core.runtime` 1.26.0 — группы каталога с их значками и словами (`CATALOGUE_GROUP_TABLE`; «Элементы» и «Раскладка» заменяют «Структуру», псевдоним с датой до 2027-01-01), значок каждого встроенного типа и значения параметров, которые тип выводит без настройки (`effectiveProps`); с `core.runtime` 1.27.0 — тип в нескольких разделах каталога (`catalogue.also_in`, `BUILTIN_CATALOGUE_ALSO_IN`, `entryGroups`; `catalogue()` отдаёт разделы), встроенные типы форм и акцентный фон. | `checkFragmentDescriptor`, `publishEffects`, `checkPortValue`, `createPortRegistry`, `defineCompositionScope`, `createRegistry`, `extendRegistry`, `describeRegions`, `resolveFieldKind`, `validateFieldValue`, `applyFieldValue`, `parseFieldSubmission`, `editorFieldMessages`, `catalogue`, `catalogueEntry`, `instantiateVariant`, `slotAccepts`, `slotPlaces`, `utilityClasses`, `checkModifiers`, `defineComposedType`, `composedEditorFields`, `composedInstance`, `expandComposed`, `upgradeComposed`, `validateTypeManifest`, `createSourcePort`, `checkSourceAnswer`, `bindingSettings`, `demoData`, `PARAMETER_SETS`, `expandParameterSets`, `parameterSetFields`, `withParameterSetFields`, `utilityPartClasses`, `PRINTED_ELEMENTS`, `printElement`, `checkPrintedElements`, `elementInputs`, `CATALOGUE_GROUP_TABLE`, `BUILTIN_CATALOGUE_ICONS`, `CATALOGUE_GROUP_ALIASES`, `effectiveProps`, `BUILTIN_CATALOGUE_ALSO_IN`, `entryGroups` |
| `SF.CompositionOverlay` | объект | смарт-компонент `sf-composition-overlay` | Скриптовый API компонента CompositionOverlay; приходит вместе с компонентом (`smart/composition-overlay`), его методы описаны на странице компонента. | — |
| `SF.copyText` | функция | ядро, сразу после `core.js` | Копирует текст: `SF.copyText(text, {document})` завершается значением `'native'` (Clipboard API) или `'legacy'` (execCommand через скрытое поле, где API нет или он отказал) либо отклоняется (`copy_unsupported` или `NotAllowedError` платформы). Так копируют `sf-copy-button` и класс clipboard. docs/developer/format.md. | — |
| `SF.CountryCode` | объект | компонент `country-code` | Скриптовый API компонента CountryCode; приходит вместе с компонентом (`component/country-code`), его методы описаны на странице компонента. | — |
| `SF.create` | функция | Loader, после `sf-loader-init` | Создаёт элемент компонента по имени с атрибутами. | — |
| `SF.createAsync` | функция | Loader, после `sf-loader-init` | `SF.create`, который ждёт определения элемента. | — |
| `SF.deprecations` | объект | ядро, сразу после `core.js` | Прежние имена, которые ещё принимаются, и что их заменило — как их объявляет журнал изменений. | — |
| `SF.DownloadFile` | объект | компонент `download-file` | Скриптовый API компонента DownloadFile; приходит вместе с компонентом (`component/download-file`), его методы описаны на странице компонента. | — |
| `SF.EarlyPort` | объект | ядро, сразу после `core.js` | Порты, объявленные в элементах (JSON-остров `<script type="application/json" data-sf-port>`: port, version, url, capabilities, first `{intent, payload}`): ядро отправляет первый вызов, как только выполняется, раньше кода любого компонента, и передаёт элементу порт через `connect-port`, когда элемент определён; первый совпавший вызов порта забирает этот ответ (один запрос). `register(id, adapter)` — реестр портов страницы для острова без url; `start` и `take` — договор подхвата для собственного адаптера продукта (один ранний ответ на порт, забирается один раз, совпадение по порту, версии, намерению и каноническому payload, не старше 10 с). docs/developer/early-port.md. | `start`, `take`, `register`, `scan`, `declareIn`, `waiting`, `firstTags`, `preferTags`, `adapterOf`, `canonical`, `callKey`, `log` |
| `SF.Effects` | объект | ядро, сразу после `core.js` | Фоновые эффекты (`simai.effect`): проверить манифест, прочитать сохранённые настройки, выбрать тему размещения, подключить эффект или группу окон по правилам, загрузить эффект из закреплённого каталога с проверкой целостности, запустить чужой эффект только в изолированном фрейме. С `core.runtime` 1.25.0 — псевдоним набора `effects` с датой: движок живёт в `simai/ui-effects`, `SF.package('effects')` отвечает теми же функциями, а каждое обращение к `SF.Effects` отмечается в `SF.deprecations` (запись журнала `global-sf-effects-to-package`, `remove_after` 2027-01-01). | `checkEffectManifest`, `checkSetting`, `effectSettings`, `effectSchemes`, `pairIsForeign`, `foreignMode`, `allowedModes`, `resolveTheme`, `pageScheme`, `mountEffect`, `mountWindows`, `loadEffect`, `placeEffect`, `EFFECT_FORMAT`, `EFFECT_SCHEMA`, `SANDBOX_RUNNER_SHA256` |
| `SF.fieldRenderers` | объект | смарт-компонент `sf-field-renderers` | Набор отрисовщиков полей: значение в ячейке, в просмотре записи, в элементе правки и в фильтре. | `renderCellField`, `renderEditField`, `renderViewField`, `renderFilterField`, `dateTime` |
| `SF.FileUpload` | объект | компонент `file-upload` | Скриптовый API компонента FileUpload; приходит вместе с компонентом (`component/file-upload`), его методы описаны на странице компонента. | — |
| `SF.Flag` | объект | компонент `flag` | Скриптовый API компонента Flag; приходит вместе с компонентом (`component/flag`), его методы описаны на странице компонента. | — |
| `SF.format` | объект | ядро, сразу после `core.js` | Даты, дни, числа и размеры файлов на языке страницы (на названной локали, иначе на языке страницы узла) через Intl. `date(value, {date, time, intl, locale, node})`; `relativeDay(value, {now, today, yesterday, tomorrow, weekday, capital})` говорит «сегодня», «вчера», день недели последней недели или дату, а `msUntilNextDay(now)` — когда это изменится; `relativeTime(value, {now})`; `dayOffset(value, {now})` считает календарные дни; `number(value, format, {step, grouping, gap})` по слову формата (`number`, `integer`, `decimal-<n>`, `percent`, `compact`, `currency-<CODE>`, `unit-<unit>`); `fileSize(size, {units})` в Б, КБ, МБ, ГБ. docs/developer/format.md. | `locale`, `date`, `relativeDay`, `relativeTime`, `dayOffset`, `msUntilNextDay`, `number`, `numberOptions`, `fileSize` |
| `SF.Highlight` | объект | компонент `highlight` | Скриптовый API компонента Highlight; приходит вместе с компонентом (`component/highlight`), его методы описаны на странице компонента. | — |
| `SF.html` | функция | основа смарт-компонентов | Тег `html` библиотеки Lit — тот, которым рисуют смарт-элементы. | — |
| `SF.icons` | объект | ядро, сразу после `core.js` | Помощники значков, общие для всех наборов. `SF.icons.choices` — неизменяемый список из ста двадцати имён значков, из которых выбирает человек (раздел записи, пункт меню); рисуется вариантами `sf-dropdown` вида icon; поднят из `sf-view-properties` (аудит дублирования 2026-11-03, A-1). | `choices` |
| `SF.InlineEditor` | объект | смарт-компонент `sf-inline-editor` | Скриптовый API компонента InlineEditor; приходит вместе с компонентом (`smart/inline-editor`), его методы описаны на странице компонента. | — |
| `SF.Input` | объект | компонент `inputs` | Скриптовый API компонента Input; приходит вместе с компонентом (`component/inputs`), его методы описаны на странице компонента. | — |
| `SF.language` | объект | ядро, сразу после `core.js` | Язык страницы и слова, зарегистрированные для компонентов. | `current`, `use`, `register`, `registerAll`, `known`, `components`, `onChange`, `forget` |
| `SF.Loader` | объект | Loader, после `sf-loader-init` | Загрузчик: по требованию загружает то, что использует страница, — компоненты и утилиты — и тему. `ensure(tags, {timeout})` запрашивает элементы и завершается значением `{ready, missing}`, никогда не отклоняясь; `watch(root)` отмечает блок, в который элемент рисует содержимое, как портал, который Loader читает как страницу (`unwatch` снимает отметку). Когда тема задана (`setTheme`, `changeTheme`), её читают `SF.Loader.theme` и `SF.Loader.themePreference`. | `ready`, `ensure`, `ensurePlugin`, `ensureSmartElementLoaded`, `watch`, `unwatch`, `registerComponent`, `setTheme`, `changeTheme`, `theme`, `preloadIcons`, `clearCache`, `smartPath`, `minified` |
| `SF.loadRuntime` | функция | ядро, сразу после `core.js` | Загружает общую среду смарт-компонентов (`core/js/smart-base.js`) и выполняется с её модулями. | — |
| `SF.loadSmartBase` | функция | Loader, после `sf-loader-init` | Загружает основу смарт-компонентов, когда на странице ещё нет смарт-элемента; выполняется с `SF.smart`. Собственный смарт-компонент проекта ждёт её. | — |
| `SF.Mask` | объект | ядро, сразу после `core.js` | Маски ввода: загрузить библиотеку масок и подключить маску к полю. | `load`, `create`, `pipe`, `destroy` |
| `SF.nothing` | значение | основа смарт-компонентов | `nothing` библиотеки Lit. | — |
| `SF.notifications` | объект | ядро, сразу после `core.js` | Область уведомлений: её настройки, закрытие сообщения и показанные сообщения. | `configure`, `close`, `history` |
| `SF.notify` | функция | ядро, сразу после `core.js` | Показывает сообщение в единственной области уведомлений страницы: строка — это его текст, объект несёт `status`, `title`, `text` и остальное. | — |
| `SF.package` | функция | ядро, сразу после `core.js` | Программный интерфейс набора компонентов: `SF.package('<набор>')` — Promise с тем, что бандл набора зарегистрировал как свои exports (`SF.RuleLoader.registerPackage(name, {exports})`); если api-элемент набора ещё не загружен, он запрашивается. Promise отклоняется, если страница не назвала набор, и называет строку, которую нужно добавить (`data-sf-sets` на скрипте ядра или `SF_BOOT_CONFIG.packages.<набор>`). Вызывать можно сразу после `core.js`: функция дожидается Loader (с `core.runtime` 1.25.0). | — |
| `SF.pageLanguage` | функция | ядро, сразу после `core.js` | Язык, который действует для узла: ближайший `lang`. | — |
| `SF.pageText` | функция | ядро, сразу после `core.js` | Слово компонента на языке узла; сначала — слова, зарегистрированные страницей. | — |
| `SF.Position` | объект | ядро, сразу после `core.js` | Расположение всплывающей поверхности рядом с её якорем с переворотом у края. | `anchor`, `logicalSide`, `physicalPlacement`, `resolveLength` |
| `SF.Preferences` | объект | ядро, сразу после `core.js` | Персональный вид человека: хранится в этом браузере, а если хост его хранит, — и у человека (`simai.interaction-rules`). | `read`, `readMerged`, `write`, `remove`, `subscribe`, `preload`, `useHost`, `load`, `hosted`, `flush` |
| `SF.ProgressBar` | объект | компонент `progress-bar` | Скриптовый API компонента ProgressBar; приходит вместе с компонентом (`component/progress-bar`), его методы описаны на странице компонента. | — |
| `SF.ProgressScale` | объект | компонент `progress-scale` | Скриптовый API компонента ProgressScale; приходит вместе с компонентом (`component/progress-scale`), его методы описаны на странице компонента. | — |
| `SF.Radio` | объект | компонент `radio` | Скриптовый API компонента Radio; приходит вместе с компонентом (`component/radio`), его методы описаны на странице компонента. | — |
| `SF.RangeSlider` | объект | компонент `range-slider` | Скриптовый API компонента RangeSlider; приходит вместе с компонентом (`component/range-slider`), его методы описаны на странице компонента. | — |
| `SF.readingPosition` | объект | ядро, сразу после `core.js` | Положение чтения прокручиваемой колонки — единое правило, по которому `sf-list-feed` и `sf-list` сохраняют место человека: `create(scroller, {nearEnd, nearStart, onStart})` возвращает контроллер с `atEnd()`, `atStart()`, `keep(mutate)` (содержимое над читаемым меняется, не сдвигая его), `toEnd({instant, settle, then})` (плавно, если не уменьшено движение), `hold()`, `release()` и `check()` (вызывайте при прокрутке: `onStart` срабатывает, когда начало близко); `watchEdge(sentinel, callback, {root, margin})` сообщает, что метка у края стала близко, и возвращает способ остановить наблюдение; `scrollerOf(node)` — блок, который прокручивает узел (`null` для страницы), корень для наблюдения внутри прокручиваемого блока. `NEAR_END` 96, `NEAR_START` 240, `EDGE_MARGIN` 200px. docs/developer/reading-position.md. | `create`, `watchEdge`, `scrollerOf`, `NEAR_END`, `NEAR_START`, `EDGE_MARGIN` |
| `SF.ready` | функция | ядро, сразу после `core.js` | Готовность Loader — в window.SF сразу после выполнения core.js. Это thenable: await SF.ready (или SF.ready.then) выполняется со значением window.SF ровно тогда, когда Loader отправляет sf-loader-init, — к этому моменту SF.Loader, SF.loadSmartBase и остальные имена ядра Loader уже на месте; скрипт, который спрашивает позже, получает уже выполненное обещание; отклонения не бывает. Один на страницу: создаётся один раз на общем глобальном объекте, все последующие сборки (в том числе второй core.js) сохраняют его и не заменяют. Вызов SF.ready(fn) запускает fn, когда Loader готов и документ разобран, — синхронно, если оба условия уже выполнены. Скрипт, который выполняется до core.js, ставит функцию в очередь: (window.SF_ON_READY = window.SF_ON_READY \|\| []).push(fn); fn вызывается с window.SF в тот же момент. | `then`, `catch`, `finally` |
| `SF.RegionNavigation` | объект | ядро, сразу после `core.js` | Переходы между страницами заменой области содержимого, а не страницы (`simai.interface-fragment`). | `enable`, `disable`, `navigate`, `enabled` |
| `SF.render` | функция | основа смарт-компонентов | `render` библиотеки Lit. | — |
| `SF.Resizer` | объект | смарт-компонент `sf-resizer` | Скриптовый API компонента Resizer; приходит вместе с компонентом (`smart/resizer`), его методы описаны на странице компонента. | — |
| `SF.RuleLoader` | объект | ядро, сразу после `core.js` | Правила загрузки по имени: что нужно классу, тегу или компоненту. Набор компонентов добавляет сюда свои правила (свой rule.js) через `SF.RuleLoader.registerPackage(name, {rules, api, aliases, exports, base})`; `SF.RuleLoader.packageOf(name)` отвечает, откуда подаётся набор (`{name, base, declared, registered, version, release, api, exported}`, неизменяемый объект). Обе — функции, а не правила, и при переборе не видны (с `core.runtime` 1.25.0). | — |
| `SF.runtimeModule` | функция | ядро, сразу после `core.js` | Обещание одного модуля общей среды смарт-компонентов по его id (`lit`, `smart-base`, `page-language` и другие); через него импортирует собранный смарт-бандл. | — |
| `SF.safeHref` | функция | ядро, сразу после `core.js` | Адрес, который оставляет `SF.sanitizeHtml`, или null: адреса http, https и mailto и пути от корня, но никогда `//host` или `/\host`. | — |
| `SF.sanitizeHtml` | функция | ядро, сразу после `core.js` | Очищает непроверенный HTML в DocumentFragment по разрешённому списку: `SF.sanitizeHtml(html, {elements?, codeLanguage?, document?})`. Скрипты и чужое содержимое выбрасываются вместе с содержимым, другие неизвестные элементы разворачиваются, остаются только безопасные ссылки и объединения ячеек таблицы. | — |
| `SF.Scrollbar` | объект | компонент `scrollbar` | Скриптовый API компонента Scrollbar; приходит вместе с компонентом (`component/scrollbar`), его методы описаны на странице компонента. | — |
| `SF.SfBaseElement` | класс | основа смарт-компонентов | Базовый класс каждого смарт-элемента; собственные смарт-компоненты продукта наследуют его. | — |
| `SF.Slider` | объект | компонент `slider` | Скриптовый API компонента Slider; приходит вместе с компонентом (`component/slider`), его методы описаны на странице компонента. | — |
| `SF.smart` | объект | основа смарт-компонентов | Основа смарт-компонентов: `SfBaseElement` и помощники, на которых строится собственный смарт-компонент проекта. | — |
| `SF.smartBaseReady` | объект | Loader, после `sf-loader-init` | Обещание основы смарт-компонентов, как бы она ни пришла (со смарт-элементом или через `SF.loadSmartBase()`). | — |
| `SF.Sortable` | объект | смарт-компонент `sf-sortable` | Скриптовый API компонента Sortable; приходит вместе с компонентом (`smart/sortable`), его методы описаны на странице компонента. | — |
| `SF.Spinner` | объект | компонент `spinner` | Скриптовый API компонента Spinner; приходит вместе с компонентом (`component/spinner`), его методы описаны на странице компонента. | — |
| `SF.Switch` | объект | компонент `switch` | Скриптовый API компонента Switch; приходит вместе с компонентом (`component/switch`), его методы описаны на странице компонента. | — |
| `SF.Tab` | объект | компонент `tab` | Скриптовый API компонента Tab; приходит вместе с компонентом (`component/tab`), его методы описаны на странице компонента. | — |
| `SF.Tabs` | объект | компонент `tabs` | Скриптовый API компонента Tabs; приходит вместе с компонентом (`component/tabs`), его методы описаны на странице компонента. | — |
| `SF.tags` | объект | ядро, сразу после `core.js` | Псевдонимы тегов с датой: Smart-компонент, получивший новый тег, сохраняет старый до `remove_after`. `names(tag)` перечисляет тег и его действующие прежние имена, `selector(tag)` — селектор, который находит их все, `is(element, tag)` проверяет элемент, `canonical(tag)` даёт текущее имя для прежнего, `list()` — все действующие псевдонимы. | `names`, `selector`, `is`, `canonical`, `list` |
| `SF.Textarea` | объект | компонент `textarea` | Скриптовый API компонента Textarea; приходит вместе с компонентом (`component/textarea`), его методы описаны на странице компонента. | — |
| `SF.ThemePalette` | объект | компонент `theme-palette` (`SF.Loader.ensurePlugin('theme-palette')` или `data-sf-theme-palette`) и смарт-компонент `sf-theme-generator` | Тема из одного цвета: восемь тональных палитр — 128 примитивов `--sf-<палитра>-<тон>` и 98 полупрозрачных ступеней, которые ядро определяет на них (`--sf-<палитра>-<тон>--alfa-<n>`, список — в `THEME_ALPHA`), всего 226 переменных. | `themeFromColor`, `themeFromHct`, `colorToHct`, `themeToCss`, `themeVariables`, `applyTheme`, `isThemeColor`, `THEME_TONES`, `THEME_PALETTES`, `THEME_ALPHA`, `DEFAULT_THEME_COLOR` |
| `SF.Toast` | объект | компонент `toast` | Скриптовый API компонента Toast; приходит вместе с компонентом (`component/toast`), его методы описаны на странице компонента. | — |
| `SF.Tree` | объект | компонент `tree` | Скриптовый API компонента Tree; приходит вместе с компонентом (`component/tree`), его методы описаны на странице компонента. | — |
| `SF.Verification` | объект | компонент `verification` | Скриптовый API компонента Verification; приходит вместе с компонентом (`component/verification`), его методы описаны на странице компонента. | — |
| `SF.whenDefine` | функция | Loader, после `sf-loader-init` | Прежнее имя `SF.whenDefined`, сохранено. | — |
| `SF.whenDefined` | функция | Loader, после `sf-loader-init` | Обещание определения смарт-элемента; загружает его, если страница ещё не загрузила. | — |
| `SF.whenFieldRenderers` | функция | Loader, после `sf-loader-init` | Обещание набора отрисовщиков полей (`SF.fieldRenderers`); загружает его по требованию. | — |
| `SF.workspace` | функция | ядро, сразу после `core.js` | Управление раскладкой рабочей области для элемента `.sf-workspace`: `show('list' \| 'main')` задаёт вид на узком экране, `panel(open)` открывает или закрывает панель (колонка на широком, боковая панель на узком); `view`, `panelOpen` и `layout` читают состояние. События `sf-workspace-view {view}` и `sf-workspace-panel {open}` приходят на элемент (docs/developer/workspace-layout.md). | — |

Внутренние имена (28) принадлежат среде выполнения и могут измениться в любом выпуске; страница их не вызывает: `SF.__internal`, `SF.Ajax`, `SF.Blocks`, `SF.cloneDeep`, `SF.ComponentRegistry`, `SF.Controller`, `SF.curpos`, `SF.Events`, `SF.extend`, `SF.flag`, `SF.Gallery`, `SF.litHtml`, `SF.Methods`, `SF.Overbox`, `SF.Param`, `SF.Parameters`, `SF.Provider`, `SF.quickkey`, `SF.receive`, `SF.runtimeArrived`, `SF.runtimeLoading`, `SF.runtimeModules`, `SF.runtimeSettled`, `SF.Search`, `SF.send`, `SF.smartBaseAnnounced`, `SF.Special`, `SF.topZIndex`.

## Положение чтения и форматирование

Ядро публикует помощники, на которых построены компоненты, — ими пользуется
и страница со своими списками и подписями. Оба появляются сразу после
выполнения `core.js`.

### Положение чтения: `SF.readingPosition`

`SF.readingPosition` — правило, по которому прокручиваемая колонка
сохраняет место человека, пока содержимое меняется: на нём построены
[Лента](/ru/smart/content/list-feed/) и [Список](/ru/smart/content/list/).
Помощник ничего не загружает и не хранит: он измеряет одну прокручиваемую
область и говорит, когда край близко. Каждой колонке — свой контроллер.

```js
const {create, watchEdge, scrollerOf} = window.SF.readingPosition;

const position = create(scroller, {onStart: () => askForEarlier()});
scroller.addEventListener('scroll', () => position.check());

// Ранняя история сверху: читаемое не сдвигается.
position.keep(() => column.prepend(fragment));

// Новая запись в конце: идти за ней, только если читатель был внизу.
const follow = position.atEnd();
column.append(node);
if (follow) position.toEnd();

// Колонка заменена: открыть её конец; кадр в начале не просит раннюю страницу.
position.toEnd({instant: true, settle: true});
```

- `atEnd()` — конец ближе `nearEnd` (96 px); ещё не нарисованная колонка
  считается стоящей в конце. `atStart()` — начало ближе `nearStart` (240 px).
- `keep(mutate)` — запоминает расстояние до конца, выполняет `mutate` и
  восстанавливает его.
- `toEnd({instant, settle, then})` — к концу в следующем кадре, плавно, если
  не задано `instant` и не включено `prefers-reduced-motion: reduce`; `then`
  выполняется после перехода; `settle` придерживает сообщения о начале до
  следующего кадра. `hold()` и `release()` придерживают их вручную.
- `check()` вызывайте при прокрутке: `onStart` срабатывает, когда начало
  близко. Ушёл ли уже запрос, решает вызывающий код.

`watchEdge(sentinel, callback, {root, margin})` следит за меткой у края через
`IntersectionObserver`, а не через обработчик прокрутки, и возвращает функцию,
которая останавливает наблюдение. `root` — прокручиваемая область:
`scrollerOf(node)` возвращает ближайшего предка с прокруткой по блочной оси
(`null` для страницы). Метка, которая уже у края, сообщает об этом сразу; без
`IntersectionObserver` наблюдение ничего не делает, и остаётся кнопка
«Показать ещё» самого списка. Постоянные: `NEAR_END` 96, `NEAR_START` 240,
`EDGE_MARGIN` `'200px'`.

### Форматирование: `SF.format`

`SF.format` выводит даты, дни, числа и размеры файлов на языке страницы
через Intl. Каждая функция принимает `{locale, node}`: язык — `locale`, если
он задан, иначе язык страницы для `node` (ближайший `[lang]` выше узла).
Компонент передаёт `{node: this}`.

```js
const {format} = window.SF;

format.date(at, {node});                        // 3 нояб. 2026 г.
format.date(at, {node, date: 'long', time: 'short'}); // 3 ноября 2026 г. в 14:05
format.relativeDay(at, {node});                 // сегодня, вчера, пятница, 27 октября
format.relativeTime(at, {node});                // 5 минут назад
format.number(1234.5, 'decimal-2', {node});     // 1 234,50
format.number(1234.5, 'currency-RUB', {node});  // 1 234,50 ₽
format.fileSize(1468006, {node});               // 1,4 МБ
```

Компонент, который собирается вместе с SIMAI Framework, импортирует только
нужные функции из модулей без побочных действий при загрузке — сборка
несёт то, что вызывает, и ничего больше:

| Модуль | Что экспортирует |
|:---|:---|
| `core/js/format-number.js` | `formatNumber`, `numberOptions` |
| `core/js/format-date.js` | `formatDate`, `calendarDayOffset`, `msUntilNextDay`, `toDate` |
| `core/js/format-relative.js` | `formatRelativeDay`, `formatRelativeTime` |
| `core/js/format-file-size.js` | `formatFileSize`, `fileSizeUnits`, `FILE_SIZE_UNITS` |
| `core/js/format-intl.js` | `formatLocale`, `toDate`, `intlFormatter` (общая часть остальных) |

`SF.format` публикует только само ядро; импорт этих модулей ничего не меняет
на странице. Объекты Intl хранятся на одном общем глобальном объекте, поэтому
копии модулей в разных сборках не расходятся.

## Смотрите также

- [Как работает Loader](/ru/guide/connection/loader/) — когда появляется каждый `SF.*` и как его дождаться.
- [Жизненный цикл изменений](/ru/guide/connection/change-lifecycle/) — как переименовываются и убираются публичные имена.
