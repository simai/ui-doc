# Рекомендации по развитию SIMAI Framework

Дата аудита: 2026-07-15

Статус: предложения готовы к owner review

Область: Core/Loader, Utilities, ordinary Components, Smart Components,
reference admin и интеграция с веб-проектами

## Короткий вывод

Сейчас SIMAI Framework важнее сначала укрепить как продуктовую платформу, а уже
затем массово добавлять новые компоненты. Основные ограничения повторного
использования в Larena и других проектах — фрагментированные источники,
неопределённая совместимость Core/Smart, отсутствие стабильных API-схем,
generated types и системных acceptance tests.

Рекомендуемый порядок развития:

1. воспроизводимая сборка и единый contract registry;
2. атомарный compatibility lock и исправление runtime blockers;
3. typed API, accessibility, browser и lifecycle contracts;
4. platform-neutral data adapters и capability model;
5. только после этого — новые primitives на основе повторяющихся сценариев.

`ui-admin` уже даёт ценный reference-сценарий, но пока остаётся demo/acceptance
application, а не production admin framework.

## Название продукта и модель версий

- Публичное название: **SIMAI Framework**.
- `SF5` используется только как внутренний маркер текущего архитектурного
  поколения, когда его нужно отличить от SF4, SF2 или других прежних линий.
- Текущая архитектура считается стабилизированной основой продукта. Возможные
  версии 6.x, 7.x и последующие развивают ту же архитектуру SIMAI Framework и
  не образуют новые продуктовые бренды.
- Версия остаётся обязательной технической характеристикой release artifacts,
  compatibility lock, migration и changelog, но не частью постоянного имени
  продукта.
- Точные идентификаторы `SF.Loader`, `sf-*`, `sf-v5…`, `sf5.webpack`, package,
  repository и skill names сохраняются без редакционного переименования.

## Версионная baseline и порядок релизов

Решение владельца для текущего контура: **`5.4.0`** — baseline SIMAI Framework
до реализации рекомендаций из этого документа.

- Инвентаризация `5.3.x` ниже сохраняется как historical audit evidence, а не
  как версия, которую должна описывать новая документация.
- Для `5.4.0` нужен собственный approved Core/Smart compatibility lock, tags,
  release notes, asset hashes и consumer locks; proposal с парой `5.3.x` надо
  rebase/reconcile, а не выдавать за `5.4.0`.
- Рекомендации P0–P2 формируют следующий релиз: `5.5.0` или более высокий
  номер, который владелец выбирает по API/compatibility diff и объёму migration
  работы.
- Версия служит границей поставки и совместимости, а не новым именем продукта.

## Как читать рекомендации

| Метка | Значение |
| --- | --- |
| FACT | подтверждено tagged runtime, manifest, source или test evidence |
| DEFECT | выпущенное поведение или метаданные внутренне противоречат друг другу |
| GAP | контракт или capability отсутствует либо не доказан |
| UNMERGED PROPOSAL | описание, metadata или изменение существует в незамерженной ветке; runtime-реализация может отсутствовать |
| CANDIDATE | идея требует проверки спроса и owner decision |

Ни одна рекомендация ниже не считается принятым roadmap без решения владельца
соответствующего слоя.

## Историческая карта технического состояния

| Контур | Released/проверенный факт | Основное ограничение |
| --- | --- | --- |
| `ui` | `v5.3.2 @ 7e836d8a…`, 2 596 файлов dist | только собранные assets, source build отсутствует |
| Utilities | 224 реальных family dirs, 639 rules, 27 755 classes | registry/classes/variants не имеют полного canonical metadata |
| Ordinary Components | 74 physical dirs, 60 component + 3 attribute rules | `ui-components` пуст, stable-public tier неизвестен |
| `ui-smart` | `v5.3.1 @ dd786bba…`, 45 smart components | нет owner API schema/types/tests для полной поверхности |
| `ui-play` | 90 items, 297 groups, 346 refs, catalog validation PASS | покрывает не весь release и не проверяет всё поведение |
| `ui-admin` | exact-revision packaging и admin/Larena smoke доказаны ранее | demo, dirty/unreleased, нет production access/data contracts |
| Registry proposal | 331 IDs: 225 utility, 60 component, 45 smart, 1 recipe | unmerged, bounded, 2 blocked, explicit nonclaims |

### Важные расхождения версий

- `ui/VERSION` говорит `5.3.2`, README — `5.3.1`, статистика README — от
  `5.3.0`.
- release note Core `5.3.2` заявляет совместимость со Smart `5.3.0`, тогда как
  proposed lock объединяет Core `5.3.2` со Smart `5.3.1`.
- `ui-smart v5.3.1` README показывает Core `v5.3.0`, а один вычисленный URL
  ошибочно ведёт к Smart `v5.3.0`.
- текущий `ui-smart/drawer` основан на `v5.0.0` и содержит 35 компонентов;
  release `v5.3.1` содержит 45, untagged main — 47.
- `ui-play` закрепляет Core `7e836d8a…` и Smart `ee004cc1…` из старой drawer
  line, а proposed registry — Smart `dd786bba…`.
- `ui-admin` закрепляет raw commits `26e64274…` и `4bf4460d…`, а не tagged pair.
- локальный и публичный `ui-doc` загружают разные старые Core commits.

До появления approved lock `5.4.0` эти комбинации нельзя описывать как одну
версию продукта или как baseline новой документации.

## Уже существующие незамерженные proposals

Их следует ревьюить и развивать, а не создавать параллельные реестры.

### Framework Contract Registry v1

Worktrees:

```text
/Users/rim/Documents/GitHub/.worktrees/ui-framework-contract-registry-v1
/Users/rim/Documents/GitHub/.worktrees/ui-smart-framework-contract-registry-v1
```

Сильные стороны:

- стабильные IDs и owner manifests;
- lifecycle/readiness/safe-to-suggest;
- provenance и exact release lock;
- зависимости, docs/example refs и consumer validators;
- явные `production_ready=false`, `full_compatible=false`.

Что нужно до принятия:

- owner review и нормальный merge/rebase;
- полный API schema вместо только inventory/assets;
- реальные page-level docs и example refs;
- определённый public/internal/vendor tier ordinary Components;
- проверка consumers на текущих ветках;
- исправление phantom/blocked entries и relation closure.

### `smart.table.read-only`

Proposal уже формулирует полезный native input:

- скрыть mutation toolbar;
- отключить selection, settings и row actions;
- не эмитить mutation intents.

В proposal явно записано `implemented=false`. Это правильное направление, но не
готовая возможность.

## Подтверждённые defects и release gaps, которые надо закрыть первыми

| ID | Finding | Риск | Acceptance |
| --- | --- | --- | --- |
| D-01 | `filer-hue-rotate/hover` ведёт в отсутствующий utility path | класс обнаруживается, asset не загружается | rule и asset совпадают; regression test проходит; старое имя имеет migration policy |
| D-02 | `gradient-type/default` требует отсутствующий `gradient-color-ext/default` | broken relation closure | каждая relation разрешается или удалена с release note |
| D-03 | `smart.file-upload` объявляет CSS, отсутствующий в `v5.3.1` | declared asset path не разрешается; readiness заблокирован | asset добавлен или `css:false`; smoke + manifest green |
| D-04 | plain/gzip пары расходятся | сервер может отдать устаревший asset | gzip либо исключён из support profile, либо deterministic parity = 100% |
| D-05 | Core runtime без `sfPath` использует `@main`; docs layout имеет `@latest` fallback | непредсказуемая production-версия | production build fail-closed без approved lock |
| D-06 | `smart-component-meta.json` знает 2 tags при 45 smart rules | autocomplete/docs/loader metadata неполны | generated metadata покрывает каждый approved tag |
| G-07 | `admin-menu.utility.json` имеет нулевой размер | файл не является valid JSON metadata; intended absence или build defect не определены | valid schema либо явное отсутствие metadata |
| G-08 | 13 из 64 component CSS не содержат `@layer` | layer ownership не классифицирован: `sf.components`, другой слой, vendor exception или legacy; unlayered CSS имеет более высокий priority | все native styles классифицированы; vendor exceptions документированы |
| D-09 | logical utilities используют физические left/right properties | `dir=rtl` не зеркалит layout | logical properties + RTL fixtures |
| D-10 | README/release examples расходятся с VERSION/tag | потребитель выбирает неверную пару | release consistency gate блокирует tag |

## Целевая контрактная цепочка

```text
canonical authoring source
  -> owner schemas/manifests
  -> reproducible build + behavior/a11y tests
  -> immutable Core/Smart release lock
  -> generated rules, metadata, types and examples
  -> ui-doc / ui-play / ui-admin / Larena / Bitrix
  -> consumer-drift gate
```

Любой ручной список между этими звеньями со временем станет источником drift.

## Foundation и release engineering

### FND-01 — Восстановить canonical authoring source — P0

FACT: `ui` и `ui-smart` содержат собранные артефакты; `ui-components` и remote
пусты; `ui` ссылается на недоступный в исследованном контуре `sf5.webpack`.

Предложение:

- определить owner repo или monorepo для Utilities/Components/Smart sources;
- хранить package/build config, schema и tests рядом с исходниками;
- release dist генерировать, а не редактировать вручную;
- сохранять source commit, toolchain и build profile в provenance.

Acceptance:

- clean checkout тега воспроизводит plain assets либо документированный
  deterministic delta;
- каждый dist-файл трассируется до source и build command;
- build не использует незакреплённые network dependencies;
- правила и metadata генерируются той же сборкой.

### FND-02 — Принять единый расширяемый Contract Registry — P0

Расширить текущий proposal следующими owner-owned полями:

- stable ID, owner, tier, lifecycle, since/deprecated;
- selector/tag и assets/relations;
- classes/parts/public tokens;
- attributes/properties/slots/methods;
- events с payload/bubbles/composed/cancelable;
- states, form semantics, a11y/keyboard/RTL/responsive;
- browser requirements;
- examples/tests/docs refs;
- compatibility/readiness/blockers.

Acceptance:

- каждый loader rule разрешается ровно в одну запись или explicit exclusion;
- schema versioning и migration rules заданы;
- generated registry не теряет nonclaims;
- docs/types/examples получаются из той же версии owner schema;
- breaking schema/API diff блокирует release без migration note.

### FND-03 — Выпускать Core и Smart через атомарный BOM — P0

Предложение:

- отдельный immutable compatibility ID для каждой проверенной пары;
- tags, commits, trees, archives, hashes и delivery profile;
- список известных exclusions/blockers;
- consumer lock files с одним форматом;
- запрет `main/latest` в production и documentation snippets.

Acceptance:

- каждый release consumer пинит один approved compatibility ID; staged
  migration может временно поддерживать несколько approved IDs;
- CI обнаруживает любой commit/hash drift;
- обновление имеет smoke, rollback и changelog;
- untagged main может быть только `experimental/unreleased`.

### FND-04 — Ввести supply-chain и browser contract — P0/P1

Нужны:

- LICENSE/NOTICE или SBOM для jQuery, Swiper, Fancybox, Monaco, Highlight и
  других поставляемых vendor assets;
- security audit и dependency provenance;
- source maps policy;
- браузерный baseline по фактическим `:has()`, optional chaining и Web
  Components API;
- CSP/nonce/SRI, cache и no-external-network profiles.

Acceptance:

- каждый vendor asset имеет name/version/license/source;
- released runtime проходит security/license gate;
- documented browser matrix подтверждён smoke;
- строгий CSP profile работает без скрытого Google Fonts/CDN запроса.

## Utilities

### UTL-01 — Исправить rule graph и ввести alias/deprecation policy — P0

Помимо D-01/D-02, runtime одновременно содержит старые и новые формы:
`table-sm/table-small`, старые `gr*` и новые `from/via/to`, а также опечатку
`backdrop-filer-hue-rotate`.

Предложение:

- canonical name + aliases + introduced/deprecated/removed version;
- generated migration lint;
- relation-to-asset closure test;
- удаление только через минимум один migration cycle.

Acceptance:

- 0 phantom family/asset/relation;
- старые имена либо работают как alias, либо имеют documented breaking change;
- consumer scan находит deprecated classes и предлагает замену.

### UTL-02 — Спроектировать variant profiles, а не раздувать CSS вслепую — P1

FACT: реально доступны default, `sm/md/lg/xl`, `hover`, `focus`, `active`.
Отсутствуют `focus-visible`, form states, motion, direction и composed variants.
`xxl` token существует, а `xxl:*` classes — нет.

Рекомендуемые профили для owner discovery:

| Profile | Кандидаты | Зачем |
| --- | --- | --- |
| interaction | `focus-visible`, `disabled`, `checked`, `invalid`, `read-only`, `open` | формы и keyboard UX |
| environment | `motion-reduce`, `forced-colors`, `print` | accessibility и документы |
| direction | `rtl/ltr` при невозможности решить logical properties | международные интерфейсы |
| composition | `md:hover:*`, `lg:focus-visible:*` | реальные responsive interactions |
| layout | `xxl` или явное удаление его из публичного responsive contract | согласовать token и classes |

Acceptance:

- сначала use-case matrix и size budget;
- generator/registry знает допустимые combinations;
- docs helper получает variants из manifest, а не hardcode;
- profile tests проверяют selector, cascade и browser behavior;
- utility full bundle не растёт без зафиксированного budget.

### UTL-03 — Перейти на CSS logical properties и доказать RTL — P1

Сейчас `m-inline-start`, `p-inline-start`, inline position, float и text
alignment используют физические свойства.

Acceptance:

- public `inline/block/start/end` utilities используют logical properties;
- compatibility aliases сохраняются;
- RTL fixtures охватывают spacing, position, float, text, drawer и navigation;
- browser smoke подтверждает LTR/RTL на 390 px и desktop.

### UTL-04 — Добавить build profiles и selective packaging — P1

`utility.full.css` около 1.8 MB plain, а некоторые `*-ext` family содержат
тысячи classes. Для Vite/Laravel/SSR-проектов нужен не только raw full bundle.

Предложение:

- `plain-full` для совместимости;
- manifest-selected profile по используемым contract IDs;
- npm/ESM package или CLI integration для Vite;
- deterministic extraction без regex guessing;
- CSS layers order как часть profile contract.

Acceptance:

- два build одинакового input дают одинаковый output/hash;
- dynamic content safelist задаётся manifest;
- missing class обнаруживается до deploy;
- size report и budget публикуются с release;
- full profile остаётся backward compatible.

### UTL-05 — Сделать настоящий searchable utility metadata — P1

`monaco-css-vars.json` не является полным registry: 9 934 metadata entries против
27 755 runtime utility classes, variants не покрыты.

Acceptance:

- family/modules/selectors/declarations/tokens/variants/aliases доступны в
  versioned schema;
- из неё генерируются docs tables, search, Monaco/VS Code autocomplete и lint;
- каждый metadata selector существует в tagged CSS;
- huge enumerations загружаются лениво и не утяжеляют основную документацию.

## Ordinary Components

### CMP-01 — Определить support tiers и владельца — P0

Нельзя считать все 74 physical dirs публичными компонентами. Часть — vendor или
infra (`jquery`, `swiper`, `fancybox`, `monaco`, loaders и др.).

Предложенные tiers:

- `public-stable`;
- `public-experimental`;
- `internal-runtime`;
- `vendor-adapter`;
- `legacy/deprecated`.

Acceptance:

- все 74 dirs, 60 component rules и 3 attribute rules классифицированы;
- у каждого public record есть owner;
- site и autocomplete предлагают stable по умолчанию;
- internal/vendor не маскируются под public API.

### CMP-02 — Нормализовать JS API, events и lifecycle — P1

FACT: существуют `SF.FileUpload`, `SF.Toast.show`, modal lifecycle, tree/range
events, но naming grammar неоднороден и типизированных payload schemas нет.

Предложение:

- один namespace и event grammar `sf-<component>:<action>`;
- documented init/destroy/refresh/idempotence;
- typed payload, cancelability, bubbling/composed;
- legacy aliases с deprecation window;
- dynamic DOM и cleanup contract для SPA/Turbo.

Acceptance:

- API/events генерируются в `.d.ts` и docs;
- contract tests защищают payload shape;
- повторная инициализация не создаёт duplicate listeners;
- component корректно уничтожается при navigation/unmount.

### CMP-03 — Сделать accessibility/cascade/browser baseline — P1

Подтверждены хорошие частные реализации accordion/modal/dropdown/tabs, но нет
системного доказательства. Toast не объявляет live region, error examples не
связывают сообщения с полями, RTL/reduced-motion почти не покрыты.

Acceptance для каждого public interactive component:

- keyboard matrix, focus order/restore/trap;
- accessible name, roles, states и error relationships;
- dark, forced-colors, reduced-motion, RTL и 390 px;
- axe или эквивалент без critical/serious violations;
- CSS находится в согласованном cascade layer;
- browser baseline подтверждён тестом, а не только документацией.

### CMP-04 — Полное runnable и behavior coverage — P1

Playground имеет 31 ordinary family / 43 variants, а loader — 60 component
rules плюс attribute integrations. Catalog tests сейчас проверяют в основном
schema/paths.

Acceptance:

- каждый `public-stable` component имеет минимальный fixture;
- интерактивные компоненты имеют behavior tests для states/events/cleanup;
- high-use components имеют disabled/loading/error/empty fixtures;
- example закреплён тем же compatibility ID;
- ui-doc embed ссылается на fixture ID, а не вручную собранный URL.

## Smart Components

### SMT-01 — Owner API schema и generated developer surface — P0/P1

Сейчас наиболее полный `.d.ts` находится в `ui-admin`, покрывает не все tags и
использует `any` для методов таблицы. Consumer-local types не должны определять
framework contract.

Предложение:

- owner schema на каждый `sf-*`;
- генерация `custom-elements.json`, `.d.ts`, docs, Playground controls и
  compatibility diff;
- stability annotation отдельно для attrs/properties/methods/events/CSS.

Acceptance:

- 100% approved Smart IDs присутствуют в generated schema, а все объявленные
  custom-element tags — в generated tag map;
- consumer code не дописывает framework methods через `any`;
- runtime и types contract tests совпадают;
- breaking diff требует major/migration decision.

### SMT-02 — Native capabilities и read-only contract — P0

`read-only` у таблицы — частный случай более общей capability model.

Предложение:

- capabilities на collection, row, field и action;
- `allowed`, `disabled`, `reason`, optional policy metadata;
- UI скрывает/блокирует controls, но backend остаётся authority;
- mutation intent не создаётся при read-only;
- capability changes могут обновляться без пересоздания всей таблицы.

Acceptance:

- proposal `smart.table.read-only` реализован и протестирован;
- keyboard/screen-reader не находят скрытые mutation controls;
- Smart не создаёт mutation intent в read-only/capability mode;
- companion integration gate отдельно подтверждает, что backend отклоняет
  запрещённый прямой request;
- Larena interim adapter удаляется после перехода на tagged native contract.

### SMT-03 — Декомпозировать `sf-table`, сохранив facade — P1

Compiled inventory показывает очень большую поверхность таблицы. Один element
смешивает grid, data fetching, filters, detail/editor, schema и settings.

Предложение:

- сохранить текущий facade для backward compatibility;
- выделить presentation grid;
- collection controller/adapter;
- filters/query model;
- detail/editor;
- schema/settings modules.

Acceptance:

- доказанный `ui-admin` reference scenario остаётся рабочим; до BC-gate для
  публичного API добавлен канонический `sf-table` fixture в `ui-play`;
- каждый module тестируется отдельно;
- read-only grid не загружает mutation/editor logic;
- bundle/profile report показывает измеримый эффект;
- lifecycle и events остаются совместимыми либо имеют migration guide.

### SMT-04 — Стандартный form-associated contract — P1

Для inputs, dropdown, datepicker, checkbox, radio, switch, textarea и похожих
controls нужен единый contract вокруг native form semantics.

Предложение:

- `ElementInternals`/`formAssociated` там, где browser baseline позволяет;
- value/name/disabled/required/readonly;
- constraint validation и error linking;
- reset/restore/autofill;
- fallback для неподдерживаемых окружений.

Acceptance:

- `FormData`, submit, reset и browser validation работают без hidden-input
  hacks на уровне приложения;
- errors имеют `aria-invalid` и `aria-describedby/errormessage`;
- progressive enhancement smoke проходит для plain-assets profile; SSR-upgrade
  и hydration проверяются только в отдельно заявленном delivery profile;
- поведение едино между controls.

### SMT-05 — Единый async-state и injected networking contract — P1

Smart-компоненты не должны самостоятельно закреплять auth, origin, cache и
error semantics. Нужны состояния `loading/empty/error/permission/offline/retry`
и адаптер, переданный потребителем.

Acceptance:

- network side effects проходят через injectable interface;
- request отменяется при unmount/navigation;
- errors нормализуются и объявляются через live region;
- retry/idempotency определены;
- CSP, sanitization и allowed origins проверяются централизованно;
- события пригодны для tracing без отправки private data.

### SMT-06 — Довести responsive Drawer до релиза — P1

Drawer нужен мобильным админ-интерфейсам, но сейчас существует только в ветке
на базе `v5.0.0`: без полноценного focus trap/inert, logical start/end, RTL и
reduced-motion.

Acceptance:

- rebase/port на текущий source main;
- focus trap, Escape, focus restore и inert background;
- start/end + RTL;
- reduced-motion;
- schema/types/example/docs/tests/registry/readiness;
- отдельный tag и включение в approved compatibility lock.

## Reference admin и интеграции

### INT-01 — Platform-neutral `AdminResourceAdapter` v1

Это не внутреннее API `ui-smart`. Предпочтительная граница — отдельный
integration SDK или совместно утверждённый port: Smart владеет frontend
capability/input contract, Larena/Bitrix/backend adapters — authorization,
enforcement, persistence и platform mapping.

`ui-admin` уже показывает общий use case, но использует прямые fetch-functions,
JSON filter в query string и generic errors.

Минимальный port/schema:

- `list`, `detail`, `schema`, `options`, `settings`, `command`, `batch`;
- `AbortSignal`, locale/tenant/site/resource context и opaque auth context;
- versioned filter/sort DSL;
- page и cursor pagination;
- standardized problem/validation envelope;
- collection/row/field/action capabilities;
- `version`/ETag optimistic concurrency и idempotency keys;
- upload references/progress;
- async job progress/cancel/retry;
- actor/tenant/site/resource-scoped view settings;
- allowlisted renderer/component IDs.

Acceptance:

- один frontend flow работает с demo, Larena и Bitrix adapters;
- `ui-smart` не знает platform routes/headers и не исполняет backend policy;
- auth tokens не хранятся в component state;
- backend adapters отдельно доказывают authorization/concurrency/enforcement;
- cancellation, retry, offline и observability hooks протестированы;
- schema имеет версию и compatibility tests.

### ADM-01 — Зафиксировать роль `ui-admin`

Рекомендуемая роль: reference implementation + acceptance harness для SIMAI Framework,
AdminResourceAdapter и backend integrations.

Не называть production admin package до появления:

- production auth/session/CSRF/CORS contract;
- ACL/capabilities;
- validation/problem details;
- audit trail;
- optimistic concurrency/idempotency;
- automated unit/API/browser/a11y tests;
- release tags и support policy.

Acceptance reference app:

- exact lock и reproducible build;
- demo adapter и минимум два platform adapters;
- scripted scenarios list/search/filter/pagination/detail/create/edit/settings;
- read-only/permission/error/offline/concurrency cases;
- clean console/network на 390 px и desktop.

### ADM-02 — Platform adapters держать вне core

Larena/Bitrix packages должны реализовывать общий adapter interface и mapping,
но не добавлять platform-specific routes, actors или policies в runtime
SIMAI Framework.

Acceptance:

- замена adapter не меняет component markup/API;
- production credentials и access policy принадлежат backend;
- fixtures используют anonymized data;
- adapter version совместим с contract schema и release lock.

### ADM-03 — Отдельные delivery/lifecycle profiles

Базовый profile поставки остаётся `plain-assets`. Дополнительные требования надо
принимать раздельно, чтобы неподдерживаемая hydration не блокировала обычный
static-browser release:

- `plain-assets`;
- `SPA/Turbo`;
- `SSR-upgrade`;
- `strict-CSP`.

Для заявленного profile нужны соответствующие integration hooks:

- mount/refresh/destroy;
- navigation cancellation;
- duplicated listener prevention;
- server-rendered markup upgrade;
- CSP nonce/SRI;
- local immutable asset paths и cache busting.

Acceptance:

- `plain-assets` не делает claims про SSR/hydration;
- в `SPA/Turbo` repeated navigation не оставляет observers/listeners и
  components обновляются после partial DOM replacement;
- `strict-CSP` проходит отдельный smoke;
- в `SSR-upgrade` HTML остаётся читаемым до JS upgrade;
- неприменимый профиль явно отмечен `N/A`, а не блокирует общий release.

## Кандидаты новых primitives

Это discovery backlog, а не обещанный roadmap. Каждый кандидат должен сначала
пройти scenario matrix: повторяемость минимум в двух проектах, отсутствие
достаточной композиции существующих контрактов, a11y contract и owner.

### Высокая практическая ценность

| Candidate | Предпочтительный слой | Use case | Обязательные условия до реализации |
| --- | --- | --- | --- |
| Responsive Drawer / Side Sheet | Smart + ordinary styles | мобильное меню, фильтры, detail | port текущей ветки, focus/RTL/motion |
| Async Combobox/Autocomplete | Smart | remote dictionaries, пользователи, организации | adapter, debounce/abort, keyboard/ARIA |
| Schema-driven Resource Form | Smart/recipe | Larena/Bitrix CRUD | form contract, validation, capabilities |
| Error Summary + Unsaved Changes Guard | Component/recipe | сложные формы | accessible linking, navigation lifecycle |
| Confirm Dialog | Smart/recipe поверх Modal | destructive actions | focus, clear action semantics, async result |
| Async State Boundary | Component/Smart base | loading/empty/error/offline/permission | live region, retry, adapter errors |
| Toolbar/Filter/Bulk Actions | Component + recipe | коллекции и админка | capability model, responsive overflow |
| Virtualized Grid/Tree | optional Smart package | большие таблицы/иерархии | performance budget, keyboard/ARIA, SSR fallback |

### Следующий discovery tier

| Candidate | Use case | Комментарий |
| --- | --- | --- |
| Command Palette / Global Search | админ-навигация и быстрые действия | требует permissions и async search adapter |
| Notification Manager | toast inbox, persistent status | не дублировать простой Toast; определить lifecycle |
| Bulk Job Progress | импорт/экспорт/массовые операции | нужен async job contract |
| Audit Timeline | история сущности | вероятнее recipe/Smart, данные принадлежат backend |
| Media/File Picker | библиотека файлов | поверх исправленного file upload + permissions |
| Date-time/Timezone Picker | распределённые проекты | отдельно от простого Datepicker |
| Empty/No-results/Error State | reusable ordinary component | проверить композицию icon/text/buttons сначала |
| Card/Surface | ordinary component | `sf-card` встречается в examples без явного rule/assets |
| Popover | ordinary/Smart base | anchoring/focus/dismissal для меню и подсказок |
| Segmented Control | ordinary/Smart form control | режимы/фильтры, нужна form semantics |

Charts, page builder, domain-specific editors и тяжёлый reporting не следует
помещать в Core по умолчанию. Для них лучше optional packages после проверки
реального повторного спроса.

## Quality contract и матрица применимости

Для любого нового public capability обязательны owner/stable ID, source и
reproducible build, schema/manifest, compatibility entry, relation closure,
русская документация, release tag и consumer-drift check. Остальные gates
включаются по профилю; неприменимость должна быть записана как `N/A` с причиной.

| Profile capability | Дополнительные обязательные gates |
| --- | --- |
| pure CSS Utility | selector/declaration/cascade test; RTL только если direction-sensitive |
| static visual Component | visual/responsive/browser fixtures; semantic a11y по назначению |
| interactive Component/Smart | behavior, keyboard, focus, ARIA, 390 px |
| form-associated | FormData, validation, reset/restore, error relationships |
| animated | reduced-motion |
| networked | abort/retry/errors/origin/cache/CSP policy |
| direction-sensitive | LTR/RTL |
| SPA/Turbo | mount/destroy/navigation cleanup |
| SSR-upgrade | readable pre-upgrade HTML и upgrade/hydration policy |
| changed/deprecated | migration/deprecation rule и compatibility diff |

Types/API/events обязательны только при наличии соответствующего JS surface;
minimal runnable fixture нужен каждому `ready` capability, но тестируемое
поведение выбирается по его профилю.

Каталог без этих доказательств должен иметь `discoverable` или `experimental`,
а не `ready`.

## Приоритетный roadmap

### P0 — Release integrity и блокеры

1. Утвердить canonical source ownership.
2. Принять/доработать contract registry и support tiers.
3. Выпустить и утвердить exact Core/Smart compatibility lock `5.4.0`.
4. Исправить D-01, D-02 и D-03.
5. Официально ограничить профиль `plain-assets-v1` либо починить gzip parity.
6. Удалить production fallbacks `@main/@latest`.
7. Добавить provenance, rule closure, release consistency и consumer-drift CI.
8. Реализовать native table read-only/capability contract.

### P1 — Удобство промышленного применения

1. Полный API schema + generated types/docs/examples.
2. Accessibility/browser/RTL/motion regression matrix.
3. Logical properties и осознанные utility variants.
4. Standard component lifecycle/events.
5. Отдельный integration port/SDK `AdminResourceAdapter` и standardized
   errors/filter/pagination/concurrency.
6. Form-associated controls и uniform async states.
7. Build profiles/npm/Vite/SSR/CSP integrations.
8. Довести Drawer до tagged release.
9. Декомпозировать table, сохранив backward-compatible facade.

### P2 — Расширение библиотеки по проверенному спросу

1. Schema Form, Async Combobox, Confirm, Error Summary.
2. Toolbar/Filter/Bulk Actions и async jobs.
3. Media Picker, Audit Timeline, Command Palette.
4. Virtualized Grid/Tree как optional package.
5. Deprecation lint, telemetry и performance budgets.

## Метрики результата

| Метрика | Целевое значение |
| --- | ---: |
| orphan loader rules/assets/relations | 0 |
| production refs на `main/latest` | 0 |
| approved records с owner/tier/version | 100% |
| `ready` records с docs/example/test | 100% |
| generated ID/tag/type coverage | 100% approved Smart IDs и объявленных tags |
| public interactive components с keyboard/a11y evidence | 100% |
| plain/gzip parity | 100% либо gzip вне support contract |
| release consumers с явно pinned approved ID | 100% |
| approved Core/Smart lock для `5.4.0` | 1 для каждой опубликованной profile |
| critical/serious a11y violations в acceptance flows | 0 |
| unreleased capabilities, показанные как stable | 0 |

## Чего не следует делать

- Не создавать второй независимый registry рядом с уже подготовленным proposal.
- Не строить документацию из current checkout `ui-smart/drawer`.
- Не считать `dist`-каталог автоматически публичным API.
- Не переносить Larena routes/auth/test actor в общий runtime SIMAI Framework.
- Не использовать `SF5` как публичное название продукта или постоянный префикс
  пользовательской документации.
- Не генерировать `.d.ts` из consumer-local `any` без owner review.
- Не добавлять все возможные variants в full CSS без profile и size budget.
- Не исправлять опечатки публичных names молча, без alias/migration.
- Не объявлять `ui-admin` production-ready по одному успешному demo smoke.
- Не расширять Core domain-specific widgets, если достаточно recipe или optional
  package.
- Не выпускать docs, Playground и runtime разными независимыми commits без BOM.

## Решения для owner review

1. Где будет canonical source Utilities и ordinary Components?
2. Принимается ли proposed registry v1 как основа общей схемы?
3. Какая Core/Smart pair становится официальной bounded release pair `5.4.0`?
4. Какие ordinary Components получают `public-stable` tier?
5. Какой variant profile нужен большинству проектов без чрезмерного CSS?
6. `AdminResourceAdapter` принадлежит `ui-smart`, отдельному package или
   integration SDK?
7. Какие два внешних потребителя, кроме demo, подтверждают спрос на каждый новый
   primitive?

## Итоговая рекомендация

Первый продуктовый milestone — выпустить baseline `5.4.0`: доказуемо
совместимый, типизированный и документированный пакет контрактов SIMAI
Framework. После реализации рекомендаций следующий release `5.5.0+` выбирается
по фактическому объёму изменений; новые primitives станут дешевле внедрять и
безопаснее переиспользовать в Larena, Bitrix и любых других веб-проектах.
