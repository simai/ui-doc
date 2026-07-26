# Рекомендации по развитию SIMAI Framework

Дата: 2026-07-26

Основание: сопоставление актуальных `main` Core, Utilities, Components,
Smart Components, reference admin, русской документации и исходного описания
утилит

Текущая продуктовая baseline: `5.4.0` после стабилизации и выпуска согласованных
тегов

## 1. Резюме

Архитектурное направление SIMAI Framework уже сформировано: есть Core,
классы-утилиты, обычные компоненты, Smart Components и загрузчик, который
подключает assets по используемой разметке. Главная проблема сейчас не в
недостатке новых сущностей, а в отсутствии одного проверяемого контракта между
исходниками, дистрибутивом, загрузчиком, типами, документацией и приложениями.

До присвоения версии `5.4.0` рекомендуется закрыть дефекты загрузчика,
зафиксировать совместимую пару Core + Smart, определить статус всех каталогов и
сгенерировать полный metadata-каталог. После этого развитие можно продолжать в
`5.5` или выше — в зависимости от объёма изменений. Номер `6.0` нужен только
при реальном breaking change, а не для обычного развития текущей архитектуры.

Статус реализации на 2026-07-26: для локальной приёмки сформирован кандидат
`simai-framework-5.4.0-candidate-2742ed22-b57afb30`. Исправлены проверенные
ошибки loader graph, опечатка семейства backdrop filter и путь динамических
модулей highlight; валидаторы проверяют assets, relations и gzip parity.
Кандидат остаётся `production_ready: false` до отдельного release-процесса.

## 2. P0: что исправить до стабильной baseline 5.4.0

### 2.1. Исправить проверенные ошибки loader graph

1. Исправить опечатку `filer-hue-rotate/hover` на
   `filter-hue-rotate/hover` и добавить тест существования каждого asset,
   вычисляемого из rule.
2. Исправить relation `gradient-type/default -> gradient-color-ext/default`:
   либо добавить отсутствующее правило, либо направить relation на фактический
   цветовой контракт.
3. Отдельно формализовать dependency relations вроде `fancybox -> jquery`,
   чтобы валидатор различал ссылки на rule и прямые ссылки на dependency asset.
4. Проверять CSS, JavaScript, templates и gzip-копии для каждого правила, а не
   только синтаксическую корректность `rule.json`.

### 2.2. Разобрать Smart assets без правил загрузчика

Для `drawer`, `editor`, `fab`, `file-preview`, `flags`, `form`, `link`, `list`,
`rating` нужно принять явное решение:

- включить в public Smart catalog и добавить loader rule;
- пометить internal/experimental dependency;
- перенести в обычные Components;
- удалить как orphaned distribution.

Оставлять поставляемый каталог без статуса нельзя: потребитель не понимает,
является ли это поддерживаемым API, а автоматическая документация не может
корректно определить покрытие.

### 2.3. Зафиксировать единый compatibility lock

Нужен машинный lock, содержащий как минимум:

```json
{
  "frameworkVersion": "5.4.0",
  "coreRevision": "<immutable tag or commit>",
  "smartRevision": "<immutable tag or commit>",
  "loaderSchemaVersion": "<version>",
  "metadataSchemaVersion": "<version>"
}
```

Этот lock должны использовать документация, Playground, `ui-admin` и
проверочные приложения. Значения `main` и `latest` не являются release lock.
Тег `5.4.0` следует выпускать только после green validation одной и той же пары
ревизий во всех четырёх контурах.

### 2.4. Устранить расхождение версий

- синхронизировать `VERSION`, README, release notes и tags в `ui`;
- синхронизировать версию и release notes в `ui-smart`;
- обновить lock `ui-admin` после проверки актуальной пары;
- убрать из deployment-примеров устаревшие ссылки на 5.2;
- публиковать один manifest с версией, commit и датой сборки.

## 3. Единый каталог контрактов

### 3.1. Registry utilities

Для каждого utility family нужен структурированный объект:

- canonical name и aliases;
- распознаваемые классы и шаблоны значений;
- responsive/state/direction variants;
- CSS variables и допустимые значения;
- relations/dependencies;
- путь к исходнику и поставляемым assets;
- public/internal/experimental/deprecated status;
- версия появления и удаления;
- ссылка на проверочный fixture.

Текущий `rule.json` можно сохранить как исполняемый loader input, но public
registry должен быть схемой более высокого уровня. Из него следует генерировать
loader rules, справочные таблицы и тестовые fixtures либо хотя бы проверять их
взаимную согласованность.

### 3.2. Registry обычных Components

Для 58 component rules и 77 каталогов assets нужен единый реестр со статусами:

- public component;
- public integration/plugin;
- internal dependency;
- experimental;
- deprecated;
- orphan/error.

Пока такой классификации нет, невозможно корректно решить, какие 58 страниц
нужны пользователю, а какие сущности должны оставаться внутренними.

### 3.3. Registry Smart Components

Metadata только для двух элементов недостаточна при 41 loader rule. Registry
должен охватывать каждый поддерживаемый custom element и содержать:

- tag name и JavaScript class;
- attributes/properties с типами и defaults;
- методы;
- события и JSON-схему `detail`;
- slots, parts и templates;
- styles/tokens;
- зависимости и assets;
- lifecycle и idempotent initialization;
- accessibility contract;
- browser support;
- maturity/deprecation/version.

Рекомендуемый формат — совместимый с Custom Elements Manifest плюс отдельные
поля SIMAI Framework для loader rules, templates и design tokens.

## 4. Типы и публичный API Smart Components

Типы custom elements должны находиться рядом с исходниками `ui-smart`, а не
восстанавливаться отдельно в `ui-admin`. Из registry следует генерировать:

- TypeScript union всех поддерживаемых tag names;
- maps `tag -> element class` и `tag -> create options`;
- типизированные events;
- JSX/TSX intrinsic element declarations;
- JSON Schema для server-side generators;
- Markdown/API reference.

Сейчас app-local create union покрывает только 27 из 41 runtime tags. После
генерации типов нужно сделать равенство множеств `loader tags = metadata tags =
TypeScript tags = documented public tags` обязательным CI-инвариантом с учётом
явно исключённых internal сущностей.

## 5. Поставка для Laravel, Larena и других web-проектов

### 5.1. Не зависеть от mutable CDN

Для production-проектов нужны версиированные способы установки:

- npm package с Core, loader, manifests и типами;
- immutable CDN URLs с tag/version и integrity hash;
- локальная поставка assets для проектов с CSP и закрытым контуром;
- manifest для bundlers и preload;
- понятная политика ESM, IIFE и legacy browser builds.

`main` и `latest` допустимы только для preview. Quickstart должен по умолчанию
использовать immutable версию.

### 5.2. Интеграция с Laravel и Larena

Полезен отдельный небольшой integration package, который предоставляет:

- Vite plugin или manifest resolver;
- Blade helpers/directives для подключения Core и loader;
- безопасную передачу loader config без inline-script при строгом CSP;
- SSR-safe регистрацию Smart Components;
- публикацию локальных assets через стандартный package workflow;
- генерацию preload/modulepreload;
- dev-mode diagnostics отсутствующих rules и компонентов;
- версионированный compatibility lock.

Package не должен дублировать компоненты: он является адаптером к общему
registry и release artifacts. Аналогичный тонкий adapter сможет использовать
любой PHP, Node или статический web-проект.

### 5.3. Серверный рендеринг и progressive enhancement

Для каждого Smart Component желательно определить:

- допустимый server-rendered fallback;
- поведение до загрузки JavaScript;
- момент upgrade custom element;
- защиту от повторной инициализации;
- форму без JavaScript для критических действий;
- правила hydration, если она применяется.

Это особенно важно для форм, таблиц, навигации, modal/dialog и админских
сценариев.

## 6. Design tokens и утилиты

### 6.1. Сохранить семантические роли Success и Warning

Предложение из старого файла убрать роли Success и Warning не рекомендуется
реализовывать автоматически. Эти роли выражают смысл состояния, полезны для
доступности и не должны заменяться произвольным Primary/Secondary. Если число
ролей нужно сократить, сначала требуется продуктовое решение и migration plan.

### 6.2. Довести роль Code до публичного контракта

Переменные цвета, фона, шрифта и radius для кода уже существуют. Следующий шаг
— определить semantic class/component для inline code и code block, проверить
контраст и документировать theme overrides.

### 6.3. Унифицировать UI radius

`--sf-radius--ui` существует, но компоненты используют разные tokens, например
кнопки всё ещё опираются на общий default radius. Нужно решить:

- `--sf-radius--ui` становится общим fallback интерактивных элементов; или
- каждый компонент получает собственный token с fallback на UI radius.

Второй вариант гибче и сохраняет единый системный default.

### 6.4. Формализовать default shadow

Шкала `shadow-0..5` есть, но понятия системной тени по умолчанию нет. Следует
добавить semantic token вроде `--sf-shadow--ui` только после определения
назначения: floating surface, dropdown, modal или generic elevation. Один
неразличимый default для всех случаев ухудшит визуальную иерархию.

### 6.5. Решить судьбу breakpoint `xxl`

Токен `xxl` присутствует, но loader rules/assets для `xxl:*` отсутствуют, тогда
как документация местами обещает этот вариант. Есть два корректных решения:

- реализовать `xxl` во всех заявленных utility families и тестовой матрице;
- удалить обещание responsive variant и оставить token только как design
  breakpoint, явно это указав.

### 6.6. Завершить переход на logical properties

RTL/LTR-направление должно использовать один канонический словарь:
`inline-start`, `inline-end`, `block-start`, `block-end`. Физические aliases
`left/right` допустимы только с deprecation policy. Loader, CSS, примеры и
автоматическая миграция должны использовать одинаковые названия.

### 6.7. Один контракт градиентов и цветов

Сейчас одновременно видны semantic gradient rules и старые примеры `gr-*`.
Нужно выбрать каноническую систему, дать migration aliases на ограниченный
срок и генерировать swatches из реальных tokens. То же относится к semantic
color roles: документация и utilities должны ссылаться на один registry, а не
копировать таблицы вручную.

## 7. Accessibility и качество компонентов

Для каждого публичного Component и Smart Component следует сделать обязательным:

- keyboard interaction table;
- focus-visible и focus restoration;
- ARIA roles/states/relationships;
- contrast в светлой и тёмной теме;
- reduced motion;
- RTL;
- zoom 200–400% и reflow;
- screen-reader smoke test для интерактивных паттернов;
- очистку listeners/observers при disconnect;
- тест повторной инициализации.

Для сложных паттернов (dialog, menu, tabs, tree, combobox/date picker,
carousel) контракт следует сверять с WAI-ARIA Authoring Practices, но API и
визуальный слой оставлять собственными.

## 8. CI и release pipeline

Минимальный обязательный pipeline:

1. JSON Schema validation registries и loader rules.
2. Проверка существования всех вычисляемых assets и gzip parity.
3. Проверка relations/dependencies и циклов.
4. Сборка полного множества utility classes из CSS и сравнение с registry.
5. Равенство Smart loader/metadata/types/docs с разрешённым exclusion list.
6. Компиляция всех копируемых HTML-примеров и запрет неизвестных классов.
7. Component unit tests и browser smoke tests.
8. Visual regression: light/dark, LTR/RTL, основные breakpoints.
9. Accessibility tests плюс ручная acceptance-матрица сложных компонентов.
10. Проверка reference app и документации на одной immutable compatibility
    pair.
11. Release manifest, changelog, migration guide и reproducible artifacts.
12. Dependency audit потребителей: локальная установка `ui-admin` сейчас
    сообщает о двух уязвимостях высокой важности в npm dependency tree; перед
    выпуском нужна отдельная проверка происхождения, достижимости и безопасного
    обновления без автоматического изменения lock-файла.

Green build отдельного репозитория недостаточен: release candidate должен
проверяться как связанная система Core + Smart + admin + docs.

## 9. Предлагаемая последовательность версий

| Этап | Содержание | Рекомендуемая версия |
| --- | --- | --- |
| Stabilization | loader defects, registry status, compatibility lock, version consistency, release QA | `5.4.0` |
| Contract completeness | полный Smart metadata, generated types, component registry, immutable docs/Playground | `5.5.x` |
| Integration | npm/package delivery, Laravel/Larena adapter, CSP/SSR contract | `5.5.x` или следующая minor |
| API refinement | aliases/deprecations, token unification, accessibility closure | последующие minor releases |
| Breaking redesign | несовместимое переименование классов, package split или lifecycle/API break | только тогда следующая major |

SIMAI Framework остаётся единым названием продукта на всех этапах. Номер
версии описывает конкретный release, а не отдельную архитектуру или отдельный
бренд.

## 10. Критерии готовности рекомендаций к реализации

Работу можно считать переведённой из аудита в управляемую разработку, когда:

- у каждого loader rule и каталога assets есть owner и status;
- опубликована схема registries;
- утверждён compatibility lock будущей `5.4.0`;
- P0 loader defects имеют tests-before-release;
- сформирован versioned backlog с владельцами Core, Smart, docs и integrations;
- каждое изменение имеет migration impact: none, additive, deprecated или
  breaking;
- release gate проверяет один и тот же набор revisions во всех потребителях;
- документация строится или проверяется из тех же контрактов, что и runtime.

Подробные доказательства и список пробелов документации находятся в
[аудите полноты документации](2026-07-26-simai-framework-documentation-gap-audit.md).
