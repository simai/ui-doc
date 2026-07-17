# План развития русской документации SIMAI Framework

Дата аудита: 2026-07-15

Статус документа: готов к ревью

Статус самой документации: не готова считаться полной и релизно достоверной

Process state: evidence_recorded

## Короткий вывод

В `ui-doc` уже накоплен большой объём русскоязычного материала, особенно по
Utilities, но сайт пока нельзя считать документацией конкретного релиза
SIMAI Framework.
Главная проблема не в количестве страниц, а в отсутствии единого контракта
между релизами `ui` и `ui-smart`, loader rules, примерами `ui-play`, сайтом и
потребителями вроде Larena.

Работу следует вести в таком порядке:

1. утвердить точную совместимую пару Core + Smart и машинный реестр контрактов;
2. устранить ошибки ссылок, навигации, кодировки и ложные runtime-утверждения;
3. переписать «Старт» и «Основы» против зафиксированного релиза;
4. связать Utilities, Components и Smart Components с реестром и исполняемыми
   примерами;
5. добавить сценарии интеграции, release notes и автоматические quality gates.

Просто перенести на сайт предоставленный Markdown-файл нельзя: он содержит
материал, помеченный `5.4.0`, но также устаревшие CDN-пути, непроверяемые
backend-утверждения и строку с credential-like данными.

## Название продукта и модель версий

- Публичное название продукта: **SIMAI Framework**.
- `SF5` — только внутренний технический маркер текущего архитектурного
  поколения, полезный при сравнении с SF4, SF2 и другими прежними поколениями.
  Это не публичное название продукта.
- Архитектура текущего поколения считается стабилизированной основой дальнейшего
  развития. Версии 6.x, 7.x и последующие остаются версиями единого
  SIMAI Framework, а не новыми продуктовыми брендами или отдельными
  архитектурными семействами.
- Номер версии указывается там, где он действительно определяет совместимость:
  в release notes, changelog, migration guides, tags и compatibility lock.
- Точные технические литералы не переименовываются: `SF.Loader`, `sf-*`,
  `sf-v5…`, `sf5.webpack`, имена репозиториев и owner skill `sf5`.

## Версионная baseline текущей программы

Решение владельца для этого плана: текущая продуктовая и документационная
baseline — **`5.4.0`**.

- Исследованные tags `ui v5.3.2` и `ui-smart v5.3.1` остаются историческим
  техническим evidence аудита; они не определяют версию новой документации.
- До публикации документации `5.4.0` владельцы должны выпустить или утвердить
  точную пару Core + Smart, immutable compatibility lock, release notes и
  version banner именно для `5.4.0`.
- Рекомендации из второго файла не включаются в baseline `5.4.0`. После их
  реализации следующий релиз получает `5.5.0` или более высокий номер — по
  фактическому объёму API, compatibility и migration изменений.
- Номер версии не меняет название продукта: это всегда SIMAI Framework.

## Цель программы

Превратить русский контур `ui-doc` в версионированную, проверяемую по исходным
артефактам документацию SIMAI Framework: от первого подключения до Utilities,
ordinary Components, Smart Components и повторяемых интеграционных сценариев.

## Done When для всей программы

- каждая опубликованная возможность привязана к contract ID, release tag,
  commit и compatibility ID;
- русская документация текущего контура закреплена на approved release lock
  `5.4.0`;
- на сайте нет подключения `@main`, `@latest` или незафиксированной пары
  Core/Smart;
- все поддерживаемые публичные Utilities, Components и Smart Components
  представлены в реестре и имеют документированное состояние;
- каждый `ready`-контракт имеет страницу, рабочий пример и автоматическую
  проверку;
- внутренние ссылки, front matter, кодировка, меню и сборка проверяются в CI;
- примеры проходят browser/a11y smoke на десктопе и ширине 390 px;
- документация не публикует секреты, внутренние чаты и неподтверждённые планы
  как выпущенные возможности;
- релиз SIMAI Framework нельзя выпустить, если реестр, сайт и Playground
  расходятся.

## Границы текущего плана

- Приоритетный язык: русский. Английский контур не переписывается в этом треке,
  но новая структура должна оставаться пригодной для последующего перевода.
- Исследованы локальные репозитории `ui-doc`, `ui`, `ui-components`, `ui-smart`,
  `ui-admin`, а также `ui-play` как источник исполняемых примеров.
- Предоставленный файл
  `/Users/rim/Downloads/SIMA Framework UI Utilities v5.3 (полное описание).docx (1).md`
  используется как редакционный инвентарь, а не source of truth.
- Этот документ планирует работу. Он не утверждает незамерженные proposals и не
  меняет API фреймворка.

## Routing note и graph gap

Федеративный route resolver назначил `larena` primary owner всей задачи из-за
упоминания Larena как примера потребителя. Реальная граница — `docs + sf5`, где
`sf5` — внутреннее имя технического owner skill; Larena консультирует по
integration/acceptance scenarios, но не определяет общий API и структуру
документации SIMAI Framework. Этот routing mismatch следует исправить в
federation graph, не меняя owner boundary задачи.

## Термины и границы слоёв

| Слой | Что это | Основной владелец |
| --- | --- | --- |
| Core/Loader | базовый CSS/JS runtime, правила обнаружения и загрузки | `simai/ui` |
| Utilities | utility-классы и их variants | `simai/ui` |
| Ordinary Components | class-based CSS/JS компоненты и enhancers | сейчас поставляются в `ui/distr/component` |
| Smart Components | custom elements `sf-*`, state/lifecycle/API | `simai/ui-smart` |
| Recipes | проверенные комбинации контрактов для результата | потребитель + владельцы SIMAI Framework |
| Admin reference app | acceptance/demo-приложение, а не сам фреймворк | `ui-admin` |

Ordinary Component и Smart Component не должны описываться как одно и то же.
Larena, Bitrix и другие backend-платформы являются потребителями общего
frontend-контракта, а не владельцами базового API SIMAI Framework.

## Проверенная исходная база

| Источник | Проверенный срез | Что установлено | Роль в документации |
| --- | --- | --- | --- |
| `ui` | `v5.3.2`, `7e836d8a…` | historical released static dist; `VERSION` и README расходятся | evidence для подготовки `5.4.0` |
| remote `ui/main` | `26e64274…`, без тега | содержит более новые изменения | только unreleased, не документировать как release |
| `ui-components` | unborn, без refs и commits | локальный и удалённый репозиторий пусты | подтверждённый source ownership gap |
| `ui-smart` | `v5.3.1`, `dd786bba…` | historical released 45 smart components | evidence для Smart inventory `5.4.0` |
| текущий checkout `ui-smart` | `drawer`, `ee004cc1…`, от `v5.0.0` | 35 компонентов, не релизная база | не использовать для актуального каталога |
| remote `ui-smart/main` | `4bf4460d…`, без тега | 47 каталогов, добавлены `fab` и `rating` | только unreleased |
| `ui-play` | текущий `master` | 90 catalog items, 297 groups, 346 file refs; catalog validator проходит | runnable examples и secondary evidence |
| `ui-admin` | dirty working reference app | доказаны packaging и admin/Larena smoke, но нет release tag | consumer/acceptance scenarios |
| `ui-doc` | `main`, `6ecb05f1…` | 455 русских Markdown-файлов; Components и Smart — заглушки | публикующий контур |
| contract registry worktrees | незамерженные ветки | 331 entry и bounded release lock | proposal, требующий owner review |

### Версионная политика и исходные evidence

Публичная документация должна описывать baseline `5.4.0`. Показанная ниже пара
`5.3.x` — только техническое evidence для подготовки нового lock, а не
рекомендованная версия для подключения пользователями.

Незамерженный release lock предлагает bounded-пару:

```text
ui        v5.3.2 @ 7e836d8a9414d5da553fb1ab0404721e5b48769a
ui-smart  v5.3.1 @ dd786bbae98391fb21df9b4e1e6cd402ead0614c
compatibility id: sf-v5.3.2-7e836d8a-dd786bba
profile: plain-assets-v1
```

Она подтверждена в proposal-реестре только как ограниченная совместимость:
`production_ready=false`, `full_compatible=false`. До решения владельца её
можно использовать для подготовки и тестов, но нельзя объявлять официальной
полной совместимостью.

При этом официальные тексты текущих релизов расходятся и с proposal: release
note Core `5.3.2` заявляет совместимость со Smart `5.3.0`, а README Smart
`5.3.1` показывает Core `5.3.0`. Это отдельный P0 owner gap. До его решения ни
одна из трёх формулировок не должна автоматически становиться публичной
compatibility matrix.

## Что обнаружено в текущей документации

### Общие проблемы публикации

- Локальная сборка `ui-doc.test` 15 июля загружала Core с commit `7dffa005…`,
  публичный `ui.simai.io` — с `c3058126…`, а последний проверенный historical
  release ref — `7e836d8a…`.
  В layout при отсутствии значения остаётся fallback `@latest`. Версия сайта
  не управляется единым release lock.
- В области «Старт» есть `quickstart.md`, `project-setup.md` и `playground.md`,
  но они не включены в меню `start/.settings.php`.
- Страница установки фактически является TODO из двух пунктов.
- На проверенном scope найдено 346 неразрешимых content-ссылок; часть ссылок
  ведёт на исходные `.md`, а не на конечные URL.
- 218 из 246 Markdown-файлов Utilities имеют UTF-8 BOM; это осложняет единый
  front matter и автоматическую обработку.
- Все 217 проверенных iframe-примеров не задают полный минимум `title`,
  `loading` и `sandbox`.
- В `.lang.php` Utilities ошибочно переведены как «Коммунальные услуги».
- Deploy workflow собирает и публикует сайт без link, registry, example и
  browser quality gates.

### «Старт»

Нужно заменить текущий набор разрозненных страниц одним доказуемым маршрутом:

- реальное подключение pinned CDN и локальных plain assets;
- выбор только Core/Utilities, Core + Components или Core + Smart;
- `window.sfPath` и `window.sfSmartPath` с точной парой версий;
- минимальный smoke и проверка Network/Console;
- безопасное обновление и rollback;
- Loader API, отделённое от внутренних реализаций;
- типовые варианты Vite/Laravel/Larena/Bitrix как отдельные integrations.

Текущий loader-раздел вызывает `new SFLoaderPlugin(...)`, но released bundle не
экспортирует такой global. Runtime сам создаёт `window.SF.Loader`. Документация
также описывает PHP backend loader, которого нет ни в `ui`, ни в `ui-smart`;
такой материал нельзя сохранять без отдельного owner source.

### «Основы»

В `fundamentals` имеется 116 Markdown-файлов, но одновременно существуют старое
глубокое дерево и новые сводные страницы. Меню показывает только часть одного
варианта структуры. Нужна консолидация без дублирования по принципу:

- модель слоёв и progressive enhancement;
- синтаксис utility-класса;
- реальные breakpoints и variants;
- значения, шкалы, токены и public variables;
- цвет, темы, типографика, размеры и cascade layers;
- состояния, доступность, RTL и motion;
- правила совместного использования Utilities и Components.

Runtime подтверждает breakpoints `sm/md/lg/xl`; токен `xxl` существует, но
классов `xxl:*` нет. Реальные state variants ограничены `hover`, `focus` и
`active`, причём не для всех семейств. Helper `ResponsiveTags.php` сейчас
показывает также `xs`, `xxl`, `focus-visible`, form states, motion, direction и
другие неподдерживаемые варианты. Это ложный контракт, который надо удалить из
публикации до реализации runtime.

### Utilities

| Измерение | Текущее значение |
| --- | ---: |
| Loader utility rules | 639 |
| Уникальных loader family IDs | 225 |
| Реальных family directories | 224 |
| Уникальных utility CSS-классов | 27 755 |
| Русских utility Markdown-файлов | 246 |
| Русских leaf-страниц | 217 |
| Playground utility groups | 218 |
| Прямо связанных через `!rtags` runtime families | 196 из 224 |

Числа нельзя сравнивать как «одна family = одна страница»: некоторые страницы
группируют несколько семейств. Нужна явная many-to-many coverage matrix.

Подтверждённые проблемы:

- правило `filer-hue-rotate/hover` указывает на несуществующий asset path;
- `gradient-type/default` зависит от отсутствующего
  `gradient-color-ext/default`;
- runtime одновременно содержит старые и новые алиасы без lifecycle policy;
- `backdrop-filer-hue-rotate` поставляется с опечаткой в публичном пути;
- utilities с именами `inline-start/end` для margin, padding, position, float и
  text alignment используют физические `left/right`; наличие `dir="rtl"` не
  делает released runtime RTL-safe;
- `monaco-css-vars.json` содержит 9 934 записи `all-classes`, но runtime имеет
  27 755 классов и variants в этом metadata не представлены полностью;
- предоставленный текст говорит об удалении `success`/`warning`, хотя в
  released runtime они остаются;
- крупные `*-ext` family почти невозможно качественно поддерживать вручную без
  generated reference/search.

### Ordinary Components

- `ui-components` и его remote пусты; source/build/test owner для ordinary
  layer не установлен.
- В released `ui/distr/component` физически 74 каталога.
- В `rule.json` есть 60 правил `type: component` и 3 правила
  `type: attribute`; незамерженный registry курирует 60 component IDs.
- До введения support tiers нельзя называть все физические каталоги или все
  loader rules стабильным публичным API.
- Playground содержит 31 component family и 43 runnable variants; поведение
  компонентов он системно не тестирует.
- Русский раздел `components` состоит из одной страницы-заглушки.
- Нет owner manifest, `.d.ts`, public token allowlist, browser matrix,
  lifecycle/event convention и общего regression/a11y suite.

Положительные реализации доступности в отдельных runtime-компонентах есть
(accordion, modal, dropdown, tabs), но это не оформлено как общий и проверяемый
контракт.

### Smart Components

- Released `v5.3.1` содержит 45 smart components.
- Незамерженный manifest классифицирует их как 9 `ready`, 35 `discoverable` и
  1 `blocked`; это proposal, а не опубликованный статус.
- `smart.file-upload` заблокирован: loader объявляет CSS, которого в релизе нет.
- `ui-play` содержит 31 smart-family / 36 groups и имеет mapped examples для 32
  из 45 released component IDs; 13 component IDs не имеют примера.
- Русский раздел `smart-components` — одна страница-заглушка.
- `ui/distr/smart-component-meta.json` описывает только два tag names при 45
  smart rules.
- Наиболее полезные TypeScript declarations сейчас находятся локально в
  `ui-admin`, покрывают не все tags и не являются owner contract.
- Нет канонической схемы props/attributes/methods/events/slots/CSS/a11y и
  generated compatibility diff.

### Recipes и интеграции

`ui-admin` доказывает полезный сквозной сценарий: список, поиск, фильтры,
пагинация, detail, CRUD и view settings. Larena smoke пока read-only и использует
локальный adapter; тестовый actor не является production auth contract.

Поэтому `ui-admin` следует использовать как reference/acceptance application и
источник recipe-требований, но не описывать как готовый production admin package.
Незамерженный registry содержит только один recipe — `recipe.admin.collection`.

## Как обращаться с предоставленным полным описанием Utilities

Файл полезен как тематический backlog: в нём хорошо собраны концепция,
терминология, цвета, шкалы, типографика, Utilities и Loader. Перед переносом
каждый фрагмент должен пройти triage:

| Класс материала | Действие |
| --- | --- |
| совпадает с tagged runtime | нормализовать и связать с contract IDs |
| противоречит tagged runtime | исправить по артефактам, старый текст не переносить |
| описывает `5.4.0` | проверить против артефактов и lock `5.4.0`; отсутствующую возможность вынести в roadmap `5.5.0+` |
| содержит «нужно добавить» | вынести в roadmap следующего релиза `5.5.0+`, не в baseline `5.4.0` |
| содержит внутреннюю ссылку/credential-like данные | удалить и провести secret review |
| описывает PHP/backend без owner source | отложить до появления проверяемого источника |

Название файла говорит `v5.3`, тело — `5.4.0`; это ещё одна причина не считать
его версионным источником истины.

## Целевая иерархия источников истины

1. Утверждённый immutable compatibility lock с точными tag/commit/tree/hash.
2. Owner manifests/schema для Utilities, Components, Smart и Recipes.
3. Tagged plain runtime artifacts и loader rules.
4. Исполняемые fixtures `ui-play`, закреплённые тем же compatibility ID.
5. Сгенерированные reference-таблицы и TypeScript/custom-elements metadata.
6. Ручной объясняющий текст `ui-doc`.
7. Исторические файлы, чаты и прототипы — только редакционный input.

Если уровни расходятся, публикация блокируется. Документация не должна
угадывать контракт по имени каталога или скомпилированному bundle.

## Проект metadata каждой страницы

Ниже показана целевая форма, а не заполненный release record. Значения в угловых
скобках должны генерироваться только после утверждения owner schema; поле
`since` допустимо лишь тогда, когда его источником станет owner manifest.

```yaml
title: Кнопки
description: Назначение и варианты ordinary-компонента кнопки
contract_ids:
  - component.buttons
compatibility_id: <approved-compatibility-id>
source_refs:
  - <repository>@<full-commit>:<path>
status: <from-owner-manifest>
since: <from-owner-manifest-if-defined>
last_verified: <yyyy-mm-dd>
example_refs:
  - <catalog-fixture-id>
```

Значения `status`, `since` и совместимость должны поступать из утверждённого
manifest, а не вводиться автором страницы вручную.

## Целевая информационная архитектура

```text
Старт
  Обзор SIMAI Framework и границы слоёв
  Быстрый старт
  Выбор способа подключения
  CDN с pinned release
  Локальные assets
  Vite/Laravel/Bitrix integration entry points
  Loader: стабильное API и события
  Compatibility и обновление
  Диагностика
  Глоссарий

Основы
  Utilities, ordinary и smart: когда что использовать
  Cascade layers и progressive enhancement
  Модификаторы и синтаксис
  Реальные conditions/variants
  Breakpoints и responsive model
  Значения, размеры и шкалы
  Design tokens и public variables
  Цвета и темы
  Типографика
  Accessibility, focus, motion и RTL

Utilities
  Обзор и поиск
  Каталог по категориям
  Aliases/deprecations
  Generated class/variant reference

Components
  Обзор ordinary layer
  Support tiers
  Каталог
  Страницы публичных компонентов
  JS API и события
  Theming и public tokens

Smart Components
  Архитектура и lifecycle
  Base API, state, templates и slots
  Loader/dependencies/assets
  Каталог
  Страницы публичных smart components
  Backend/data adapter contract

Recipes и интеграции
  Admin collection
  Form и validation
  Modal detail/editor
  File upload
  Navigation tree/menu
  Larena adapter
  Bitrix adapter

Справочник
  Compatibility lock
  Contract registry
  Loader rules
  Public tokens
  Browser/a11y matrix

Миграции и релизы
  Changelog
  Upgrade guides
  Deprecations
  Known issues
```

## Читательские маршруты

| Читатель | Первый результат | Маршрут |
| --- | --- | --- |
| новичок | подключить SIMAI Framework и увидеть рабочую кнопку | Старт → Быстрый старт → Основы |
| верстальщик | собрать responsive layout | Основы → Utilities → Playground |
| frontend developer | подключить ordinary component и события | Components → JS API → example |
| fullstack developer | связать smart component с данными | Smart → Adapter → recipe |
| Larena/Bitrix developer | повторить проверенную интеграцию | Recipes → platform adapter |
| maintainer | проверить совместимость и выпустить docs | Registry → Release → QA gates |

## Шаблоны страниц

### Utility

1. Назначение и `utility.*` IDs.
2. Release/readiness и поддерживаемые profiles.
3. Синтаксис классов и generated таблица declarations.
4. Только реально существующие breakpoint/state variants.
5. Минимальный и прикладной примеры.
6. Responsive, RTL, accessibility и browser caveats.
7. Aliases, deprecated names и migration.
8. Связанные Utilities/Components и Playground fixture.

### Ordinary Component

1. Назначение, граница слоя и случаи, когда нужен Smart.
2. Support tier, version, assets и loader relation.
3. Минимальная разметка и anatomy/required parts.
4. Variants, sizes, states и data attributes.
5. Public CSS variables/parts/classes.
6. Stable JS API, lifecycle и events с payload.
7. Keyboard, focus, ARIA, RTL, motion и responsive behavior.
8. Runnable examples, ограничения и migration.

### Smart Component

1. Tag, lifecycle/status, version и compatibility.
2. Assets, dependencies и loader rule.
3. Attributes/properties: type, default, enum, reflection.
4. Methods, events: detail, bubbles, composed, cancelable.
5. Slots/templates, state и public CSS surface.
6. Form semantics и data/backend contract.
7. Loading/empty/error/permission/offline states.
8. Accessibility/keyboard/focus/RTL/responsive.
9. Minimal, interactive и platform-integration examples.
10. Known blockers, migration и related recipe.

### Recipe

1. Пользовательский результат и граница ответственности.
2. Точный compatibility ID и список contract IDs.
3. Data/auth/permission/error/concurrency contract.
4. Пошаговая реализация без привязки core API к Larena или Bitrix.
5. Platform adapter variations.
6. Browser/API acceptance и rollback.

## Программа работ

### B0. Утвердить контракт и безопасную исходную базу — P0

Результат:

- owner review незамерженного framework contract registry;
- решение о каноническом source repo ordinary components;
- утверждённая pair Core + Smart и профиль поставки для `5.4.0`;
- отдельная классификация `released`, `unreleased`, `proposal`, `blocked`;
- sanitization предоставленного Markdown-файла без публикации его raw-копии.

Критерии приёмки:

- один compatibility lock `5.4.0` и соответствующие release refs приняты
  владельцами Core и Smart;
- все release assets имеют provenance и hash;
- 60 component rules, 3 attribute integrations, 45 smart rules и 225 utility
  IDs либо описаны, либо явно исключены с причиной;
- `production_ready=false` не теряется при генерации;
- секрет-скан не находит credential-like строки в publishable sources.

Зависимость: все последующие generated каталоги.

### B1. Исправить publication integrity — P0

Результат:

- единая версия runtime для local, preview и production build;
- нормализованные UTF-8 without BOM и front matter;
- рабочее меню, breadcrumbs и URL без `.md`;
- consolidated Fundamentals без дублей;
- безопасные Playground embeds;
- pre-deploy validators.

Критерии приёмки:

- 0 неразрешимых внутренних ссылок;
- 0 BOM в publishable Markdown;
- 0 страниц вне меню/карты без явного `hidden: true`;
- все iframe имеют `title`, `loading="lazy"`, согласованный `sandbox` и
  проверенный accessible name;
- site build использует утверждённый compatibility ID и не содержит
  `@main`/`@latest`;
- local preview и production дают одинаковые asset hashes.

### B2. Переписать «Старт» и «Основы» — P0

Результат:

- настоящий installation guide для pinned CDN и local assets;
- quickstart с проверяемым HTML;
- понятная схема слоёв;
- актуальный Loader API;
- сокращённая, последовательная система Fundamentals;
- compatibility/upgrade/troubleshooting pages.

Критерии приёмки:

- новый пользователь достигает первого рабочего примера только по инструкции;
- CDN и local smoke проходят на чистом профиле браузера;
- на страницах нет неподдерживаемых variants;
- Known Issues явно предупреждает, что текущие logical-named utilities не
  обеспечивают RTL из-за физических `left/right` declarations;
- все Loader symbols и events подтверждены tagged bundle или public schema;
- PHP/backend материал имеет отдельный owner source либо исключён.

### B3. Сделать Utilities реестровым справочником — P1

Результат:

- many-to-many matrix `utility ID ↔ docs page ↔ assets ↔ example`;
- generated class/declaration/variant tables;
- ручные объяснения use cases и ограничений;
- aliases/deprecations/migration;
- поиск по family, CSS property, token и class.

Первая очередь ревью:

- 28 runtime families без прямой `!rtags`-связи;
- `*-ext` family с тысячами классов;
- дублирующие/неоднозначные страницы вроде text selecting/code formatting;
- breakpoints, state variants, gradient, filters, logical spacing;
- blocked/typo rules до их исправления.

Критерии приёмки:

- 100% утверждённых utility IDs имеют страницу или явную групповую привязку;
- каждая опубликованная class family существует в tagged assets;
- таблицы не расходятся с rules и selectors;
- каждый `ready` utility имеет runnable fixture;
- blocked utilities не предлагаются пользователю как рабочие.

### B4. Открыть полноценный раздел Components — P1

Результат:

- overview границ ordinary layer;
- support tiers для 74 physical dirs / 60 component rules / 3 attribute
  integrations / vendor adapters;
- generated catalog;
- базовые страницы по утверждённому шаблону;
- JS/events/a11y/browser/theming references.

Порядок публикации:

1. сначала компоненты, имеющие approved public tier, assets и runnable example;
2. затем discoverable компоненты после API/a11y review;
3. internal/vendor/legacy показывать отдельно и не рекомендовать по умолчанию.

Критерии приёмки:

- заглушка удалена;
- каждый public component имеет manifest, docs, example и behavior smoke;
- public token allowlist отделён от полного набора 1 674 обнаруженных
  `--sf-*` names, а status каждого определён schema;
- интерактивные компоненты проверены keyboard/focus/ARIA;
- события имеют единый documented grammar или migration aliases.

### B5. Открыть полноценный раздел Smart Components — P1

Результат:

- concepts: custom element, lifecycle, state, templates, slots, events;
- generated API из owner schema;
- каталог по approved release;
- tutorial собственного Smart Component;
- data/backend adapter contract;
- per-component страницы и executable examples.

Порядок публикации:

1. 9 `ready` из reviewed manifest;
2. 35 `discoverable` после подтверждения surface и smoke;
3. `smart.file-upload` только с blocker banner до исправления;
4. `fab`, `rating` и `drawer` — только после merge/tag/readiness, не из веток.

Критерии приёмки:

- 45 released component IDs/rules отражены в каталоге с честным status;
- `ready` tag имеет schema, generated `.d.ts`, docs и runnable fixture;
- props/events/methods из docs проходят contract tests;
- form, async, error, permission и accessibility states определены;
- loader dependencies разрешаются в той же release pair.

### B6. Добавить Recipes и platform integrations — P1/P2

Первая очередь:

- `admin.collection` read-only;
- list/search/filter/pagination/detail;
- form + validation + unsaved changes;
- modal editor;
- file upload/progress;
- tree/menu navigation;
- Larena read-model adapter;
- Bitrix adapter с тем же frontend contract.

Критерии приёмки:

- базовый recipe остаётся platform-neutral;
- platform examples меняют adapter, а не API SIMAI Framework;
- backend остаётся authority для permissions;
- auth/test headers явно отделены от production contract;
- recipe имеет browser + API smoke и pinned compatibility ID.

### B7. Встроить documentation-as-code в релиз — P1

Результат:

- version/compatibility banner `5.4.0`, known issues и release notes;
- upgrade/deprecation guides;
- generated registry indexes;
- release diff API/classes/tokens/events;
- CI и nightly consumer-drift report.

Критерии приёмки:

- изменение owner manifest требует обновления docs/example или explicit waiver;
- release `5.4.0` blocked при orphan rule/asset/doc/example;
- breaking diff требует migration note;
- каждый release consumer публикует свой approved compatibility ID; docs и
  встроенные в неё examples используют одну pair, а staged migration может
  временно поддерживать несколько approved pairs;
- опубликованный changelog сохраняет точную хронологию изменений.

## Исполнительная матрица

| Batch | Primary owner | Companions | Зависит от | Evidence |
| --- | --- | --- | --- | --- |
| B0 contract | владельцы SIMAI Framework | docs, release engineer | owner decision | registry validators + release lock |
| B1 integrity | ui-doc developer | tester | B0 lock | link/build/browser reports |
| B2 start/fundamentals | docs | владельцы SIMAI Framework, tester | B0, B1 | clean-user smoke |
| B3 utilities | docs + Utilities owner | ui-play, tester | B0, B1 | coverage matrix |
| B4 components | Component owner | docs, a11y, tester | source ownership + tiers | registry/example/behavior reports |
| B5 smart | Smart owner | docs, a11y, tester | API schema | types/docs/browser reports |
| B6 recipes | consumer owner | владельцы SIMAI Framework, Larena/Bitrix | stable B4/B5 contracts | API + browser smoke |
| B7 release | release engineer | all owners | B0–B6 | consumer-drift dashboard |

## Обязательные автоматические проверки

1. `release-lock`: tags, commits, trees, archives, plain asset hashes.
2. `registry-schema`: уникальные IDs, lifecycle/readiness и owner refs.
3. `rule-closure`: rule → assets → relations; никаких phantom paths.
4. `docs-coverage`: каждый approved ID связан со страницей.
5. `example-coverage`: каждый `ready` ID связан с catalog fixture.
6. `frontmatter`: обязательные поля, допустимые status/version.
7. `encoding`: UTF-8 without BOM.
8. `links-assets`: 0 broken internal links/images/embeds.
9. `snippet-contract`: classes/tags/props/events существуют в approved schema.
10. `secret-scan`: credentials, private chat links и private raw data запрещены.
11. `build`: clean checkout reproduces local and production output.
12. `browser`: Chromium + Firefox + WebKit where practical, 390 px, dark,
    keyboard, focus, reduced motion и RTL.
13. `a11y`: accessible names для embeds, landmarks, headings, contrast и
    отсутствие critical/serious violations в ключевых flows.
14. `consumer-drift`: каждый consumer использует approved ID; отчёт отличает
    допустимую staged migration от случайного commit/hash drift.
15. `terminology`: публичные заголовки и объясняющий текст используют
    `SIMAI Framework`; `SF5` разрешён только в техническом whitelist или при
    явном сравнении архитектурных поколений.

## Решения владельцев, необходимые до массового написания страниц

1. Какая exact pair Core + Smart будет tagged и approved как release `5.4.0`?
2. Где находится canonical authoring source ordinary Components и Utilities?
3. Какие из 60 component rules относятся к stable public API?
4. Какие поля contract registry обязательны до merge v1, а какие можно
   добавить в v2 без потери совместимости?
5. Считать ли gzip sidecars частью поддерживаемой поставки или пока официально
   поддерживать только `plain-assets-v1`?
6. Какие положения `5.4.0` из исходного файла входят в baseline, а какие
   остаются заметками автора или переносятся в roadmap `5.5.0+`?

## Первая исполнимая очередь

1. Провести owner review двух registry worktrees и подготовить release lock
   `5.4.0`.
2. Исправить `filer-hue-rotate` и `gradient-color-ext` rule graph defects.
3. Выбрать/восстановить authoring source для ordinary Components.
4. Привязать `ui-doc` к approved compatibility lock вместо cache/fallback.
5. Удалить credential-like и internal-link данные из редакционного source.
6. Добавить link/frontmatter/BOM/secret/build gates.
7. Исправить меню «Старт» и заменить страницу установки.
8. Свернуть дубли Fundamentals в одну каноническую структуру.
9. Построить utility coverage matrix и начать с 28 несвязанных families.
10. Сгенерировать каталоги Components/Smart со статусами, но не публиковать
    discoverable/blocked как рекомендованные.
11. Связать каталоги с текущими 297 Playground groups.
12. Добавить `admin.collection` как первый platform-neutral recipe.

## Риски и stop conditions

- Не начинать массовую генерацию component pages до решения support tiers.
- Не документировать текущую ветку `ui-smart/drawer` как released.
- Не принимать наличие каталога в dist за доказательство стабильного API.
- Не публиковать AST-inventory compiled bundle как owner schema.
- Не копировать предоставленный Markdown целиком в `source/docs`.
- Не объявлять registry production-ready, пока он незамержен и содержит
  explicit nonclaims/blockers.
- Не обходить consumer-drift gate ручным изменением только одного репозитория.

## Проверка этого планового batch

- Исходные репозитории исследованы read-only; существующие dirty changes не
  изменялись.
- Релизные факты брались из tags/commits, а не из текущих diverged branches.
- `ui-play` catalog validator: PASS, 3 sections, 90 items, 297 groups,
  346 references. Этот PASS подтверждает только собственную пару Playground
  `ui@7e836d8a… + ui-smart@ee004cc1…`, а не proposed Smart `dd786bba…`.
- Локальные и публичные ключевые страницы отвечают HTTP 200, но используют
  разные Core commits; это зафиксировано как release drift.
- Рекомендации по продукту вынесены в отдельный файл и не смешаны с чистыми
  documentation gaps.

## Kaizen

Документация должна стать потребителем того же машинного контракта, что Loader,
Playground, типы и интеграционные приложения. Тогда новый класс, компонент или
breaking event нельзя будет «забыть задокументировать»: расхождение остановит
сборку до публикации.
