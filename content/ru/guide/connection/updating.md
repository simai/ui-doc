---
title: "Как обновить проект"
description: "Обновление — это переход проекта с одного выпуска Framework на другой (вместе с пакетами продуктов, если они подключены)."
---

# Как обновить проект

Обновление проекта — переход на новый выпуск по журналу изменений: механические замены делает инструмент, остальное — человек. Здесь — порядок обновления и разбор записей журнала на примерах.

## Как обновить проект

Обновление — это переход проекта с одного выпуска Framework на другой (вместе
с пакетами продуктов, если они подключены). Страница описывает порядок перехода,
инструмент `sf-upgrade` и работу с ИИ.

### Порядок

1. Узнайте, на каком выпуске проект сейчас (см. ниже).
2. Выберите новый выпуск Framework и запишите его идентификатор и полный
   коммит, а для подключения с CDN — версию пакета npm `@simai-studio/ui`
   этого выпуска; до запроса с CDN убедитесь, что npm её уже показывает
   (см. [Пакет npm](/ru/guide/connection/delivery/#пакет-npm)). Если подключён пакет продукта, возьмите его сборку, квитанция
   которой называет этот выпуск Framework.
3. Прогоните `sf-upgrade` по проекту и исправьте всё, что он нашёл ([Инструмент `sf-upgrade`](#инструмент-sf-upgrade)).
   Исходники после `--apply` рассчитаны на новый выпуск, поэтому замены и
   новую поставку выкладывайте вместе.
4. Замените поставку целиком в тестовом окружении: свою копию `distr/` —
   каталогом нового выпуска, а при подключении с CDN — версию пакета во всех
   трёх адресах.
5. Проверьте основные страницы на мобильной и настольной ширине, в обеих темах,
   Network и Console; на страницах со смарт-компонентами — пустой
   `SF.deprecations.list()`.
6. Запишите новый идентификатор выпуска, его полный коммит, версию пакета
   npm (при подключении с CDN) и квитанции пакетов.
7. Перенесите в рабочее окружение те же проверенные файлы.

**Как узнать текущий выпуск проекта.** Страница не сообщает свой выпуск:
идентификатора выпуска в поставке нет. Выпуск определяют так:

- по файлу блокировки проекта (см. [Версии: как закрепить выпуск](/ru/guide/connection/versions/)), если он есть;
- по адресу поставки: при подключении с CDN в адресе стоит версия пакета
  npm, и `npm view @simai-studio/ui@<версия> simai` называет её выпуск и
  коммит; записи о выпусках (`contracts/releases/` в `ui`) называют коммит
  каждого выпуска в поле `runtime_sources.core.commit`;
- для своей копии без записи — сравнением файлов: копия `distr/` совпадает
  с каталогом `distr/` в коммите выпуска репозитория `ui`. Совпавший целиком
  выпуск — текущий. Сравнить копию с выпуском можно так; пустой вывод
  `diff` означает совпадение:

  ```bash
  mkdir -p /tmp/release
  git -C simai-ui archive <коммит выпуска> distr | tar -x -C /tmp/release
  diff -r /tmp/release/distr public/assets/simai-framework/ui/distr
  ```

Откат — тоже целиком: вернуть прежний выпуск Framework вместе с прежними
сборками пакетов, не смешивая файлы разных выпусков.

### Инструмент `sf-upgrade`

`scripts/sf-upgrade.mjs` в репозитории `ui-source` читает журнал и ищет
устаревшие имена в исходниках проекта: HTML, PHP и Blade, Twig, Vue,
JavaScript и TypeScript, CSS и SCSS, Markdown, JSON. Инструмент и журнал
лежат в открытом репозитории [`simai/ui-source`](https://github.com/simai/ui-source);
в поставке `ui` их нет. Ревизию
`ui-source`, из которой собран выпуск, называет поле
`build_inputs.source.commit` записи о выпуске (см. [Выпуск и запись о выпуске](/ru/guide/connection/delivery/#выпуск-и-запись-о-выпуске)).

Инструмент и журнал берут из ревизии `ui-source` **целевого** выпуска — того,
на который проект переходит: `git checkout <build_inputs.source.commit>`. Более
новый журнал может назвать каноническое имя, которого в целевом выпуске ещё
нет, и `--apply` записал бы в проект имя, которое этот выпуск не знает. Для
выпуска `ui-9ceecc24c988` это ревизия
`e7ea89e07a3a6494cd2e6d4b4dd2dfa3a4d560cf`.

Инструменту нужен только Node.js: зависимостей у него нет, устанавливать
ничего не нужно.

```bash
node scripts/sf-upgrade.mjs ../my-product                      # только отчёт
node scripts/sf-upgrade.mjs ../my-product --apply              # механические замены
node scripts/sf-upgrade.mjs ../my-product --json               # отчёт для ИИ и скриптов
node scripts/sf-upgrade.mjs ../my-product --since 2026-10-01   # только записи с этой даты
node scripts/sf-upgrade.mjs ../my-product --journal ./journal.json   # другой файл журнала
```

| Параметр | Что делает |
|:---|:---|
| `<папка проекта>` | Обязателен: каталог, который просматривается вместе со всеми вложенными |
| `--apply` | Выполняет механические замены и переписывает файлы |
| `--json` | Печатает отчёт одним JSON-документом; с `--apply` в нём `applied: true` |
| `--since ГГГГ-ММ-ДД` | Берёт только записи, устаревшие в этот день или позже (`deprecated_on`) |
| `--journal <путь>` | Читает журнал из указанного файла вместо `contracts/changes/journal.json` рядом с инструментом |

Параметры сочетаются: `--apply --json` делает замены и печатает отчёт.

Отчёт `--json` — один JSON-объект:

```json
{
  "summary": {"project": "/abs/my-product", "files": 214, "findings": 3,
              "mechanical": 2, "applied": false, "manual": 1},
  "findings": [
    {"file": "templates/cart.html", "line": 12, "record": "attribute-type-to-appearance",
     "stage": "compat", "from": "type", "to": "appearance", "mechanical": true}
  ],
  "manual": [
    {"id": "…", "summary": "…", "manual": "…", "examples": {"before": "…", "after": "…"},
     "places": ["templates/cart.html:40 …"]}
  ]
}
```

| Поле | Что в нём |
|:---|:---|
| `summary` | Просмотренный каталог, число файлов, число находок, из них механических, были ли замены (`applied`) и число записей с ручной работой (`manual`) |
| `findings` | Каждая находка: файл относительно каталога проекта, строка, запись журнала, её этап, устаревшее и каноническое имя (`to` равно `null`, если замены нет), механическая ли замена. С `--apply` выполненные замены остаются в списке, а `summary.applied` равно `true` |
| `manual` | Каждая запись с ручной работой: `id`, `summary`, инструкция `manual`, пример `examples` и места `places` в виде `файл:строка имя` |

Коды завершения: `0` — находок нет или с `--apply` остались только
выполненные механические замены, `1` — остались находки (без `--apply` —
любые, с `--apply` — ручные), `2` — не указана папка проекта.

Какие папки пропускаются: `node_modules`, `vendor`, `.git`, `dist`, `build`,
`build_production`, `storage`, `.artifacts`. **Папка `distr` не
пропускается.** Если проект хранит свою копию поставки внутри проверяемого
каталога (например, `public/assets/simai-framework/ui/distr/`), инструмент
находит устаревшие имена и в файлах самого Framework, а `--apply` их
переписывает. Запускайте инструмент на каталогах с исходниками проекта или
держите копию поставки вне проверяемого каталога.

- Без `--apply` инструмент только сообщает: файл, строку, устаревшее и
  каноническое имя, запись журнала. Пока находки остаются, он завершается с
  кодом 1, поэтому его можно ставить в проверки проекта.
- С `--apply` он сам делает механические замены: атрибут, значение, событие,
  класс, токен, утилиту. Если в теге уже есть каноническое имя, устаревшее
  просто удаляется — каноническое действует и во время работы страницы.
- Инструмент читает файлы `.html`, `.htm`, `.php` (в том числе `.blade.php`),
  `.twig`, `.vue`, `.js`, `.mjs`, `.ts`, `.jsx`, `.tsx`, `.css`, `.scss`, `.md`
  и `.json`. Прежнее имя события заменяется в любой строке в одинарных,
  двойных или обратных кавычках в любом из этих файлов, в том числе в
  JavaScript, Vue и Blade: `addEventListener('sf-range-slider-change', …)`
  становится `addEventListener('change', …)`.
- Где инструмент ищет каждое имя: атрибут компонента — только в открывающем
  теге этого компонента, значение — в открывающем теге `<sf-…>`, событие — в
  кавычках в любой строке, класс и токен — как отдельное слово в любом месте.
  Поэтому находки бывают и в `.json` и `.md`, например ключ `"type"`;
  проверьте их перед `--apply`.
- Остальное он выводит списком для ручной работы — с инструкцией и примером из
  записи.
- **Инструкцию `manual` механической записи инструмент не выводит.** Она
  печатается только для ручных мест. Если у механической записи есть поле
  `manual`, прочитайте его в журнале сами: оно описывает, чем замена меняет
  поведение (пример — в [Запись с механической заменой](#запись-с-механической-заменой)).
- `--since` ограничивает проверку записями, устаревшими в указанный день или
  позже. В записи о выпуске даты нет. Если неизвестно, на каком выпуске проект
  и когда он обновлялся, запускайте инструмент без `--since`: он проверит все
  записи журнала.
- Инструмент читает и удалённые записи, поэтому обновить можно проект,
  отставший на любое число выпусков.
- Компонент пакета приходит на страницу только из объявленного пакета. Если
  запись журнала переносит компонент в пакет (`to` равно
  `SF_BOOT_CONFIG.packages.<имя>`), в проекте есть его тег, а этот пакет
  нигде не объявлен (`packages: {<имя>: …}`, `packages.<имя> = …` или вызов
  `SF.RuleLoader.registerPackage('<имя>', …)`), инструмент сообщает об этом
  как о ручной работе и называет, что добавить: объявление пакета
  (см. [Пакеты компонентов](/ru/guide/connection/loader/#пакеты-компонентов)). Так перенесены в пакет продукта `pro` (исходник —
  `simai/ui-pro`) четыре элемента: `sf-table`, `sf-data-view`,
  `sf-property-view` и `sf-admin-menu`; запись журнала —
  `component-larena-package-move`. В поставке `ui` их нет; на странице они
  работают, только если она объявила пакет `pro`, например
  `SF_BOOT_CONFIG.packages.pro = {base: '/assets/pro/f6c43828e5f22e65bc377806473007f01a0a51b8/smart'}`
  (путь — по правилу из [Пакеты компонентов](/ru/guide/connection/loader/#пакеты-компонентов)), и
  подключила его сборку, квитанция которой называет выпуск Framework на
  странице. Проект без Larena берёт сборку из выпуска `simai/ui-pro` (см. [Готовая сборка пакета `pro`](/ru/guide/introduction/structure/#готовая-сборка-пакета-pro)).

После ручных правок инструмент запускают снова и повторяют, пока он ничего
не находит: ручная правка одного места может открыть следующую механическую
замену, например значение атрибута, который правили вручную.

Проект обновлён, когда выполнены три условия:

1. `sf-upgrade` ничего не находит;
2. проверки проекта проходят;
3. `SF.deprecations.list()` пуст на затронутых страницах.

### Обновление с помощью ИИ

Журнал устроен так, чтобы по нему мог работать ИИ, не угадывая соответствий.
ИИ получает три вещи:

1. отчёт `sf-upgrade --json` — найденные места и список ручной работы;
2. записи журнала, на которые этот отчёт ссылается;
3. проверки самого продукта.

Правила для ИИ:

- сначала выполняются механические замены через `--apply`, затем каждое
  ручное место — строго по инструкции и примеру из его записи;
- соответствие, которого нет в журнале, придумывать нельзя;
- работа закончена при тех же трёх условиях, что и у человека ([Инструмент `sf-upgrade`](#инструмент-sf-upgrade)).

Общие правила работы с ИИ — см. [Работа с ИИ](/ru/guide/standards/ai/#работа-с-ии).

## Пример: запись журнала и её применение

Этот раздел показывает на одном примере, как запись журнала превращается в
правку проекта. Записи бывают двух видов: с механической заменой и с ручной
работой.

### Запись с механической заменой

Возьмём запись `attribute-type-to-appearance` из [Журнал изменений](/ru/guide/connection/change-lifecycle/#журнал-изменений): `rewrite` равно
`rename-attribute`, у `sf-button` атрибут `type` заменяется на `appearance`.

Пусть в шаблоне проекта есть такая разметка:

```html
<sf-button type="outline" text="Отмена"></sf-button>
```

Что происходит на каждом шаге:

1. **На странице.** Пока запись на этапе совместимости, кнопка работает:
   смарт-компонент читает `type` как `appearance`. `SF.deprecations.list()`
   показывает строку с компонентом `sf-button`, устаревшим именем `type` и
   каноническим `appearance`.
2. **Отчёт.** `node scripts/sf-upgrade.mjs ../my-product` сообщает файл,
   строку, замену `type` → `appearance` и запись
   `attribute-type-to-appearance`, отмечая её как механическую.
3. **Замена.** С `--apply` инструмент сам переписывает разметку:

   ```html
   <sf-button appearance="outline" text="Отмена"></sf-button>
   ```

   Если в теге уже были оба атрибута, `type` удаляется, а `appearance`
   остаётся.
4. **Проверка.** Повторный запуск `sf-upgrade` ничего не находит, список
   `SF.deprecations.list()` на этой странице пуст.

Что важно заметить: ни человек, ни ИИ не выбирают новое имя сами — его даёт
поле `to` записи.

**Одна запись — несколько имён.** Запись `event-change-aliases` заменяет на
`change` все прежние имена события изменения: `sf-button-group-change` у
`sf-button-group`, `sf-datepicker-change` и `sf-change` у `sf-datepicker`,
`sf-dropdown:change` у `sf-dropdown`, `sf-range-slider-change` и
`onSliderChange` у `sf-range-slider`. У `sf-button-group` методы `select()` и
`clear()` тоже отправляют `change`, как и прежнее имя. Пока запись на этапе совместимости,
прежние имена приходят вместе с `change`, поэтому код на прежних именах
работает до замены. У `sf-datepicker` прежнее `sf-change` несёт другой
`detail`: все данные компонента, а не состав `change` (см. [На странице](/ru/guide/smart-components/page/)).

**Механическая замена может менять поведение.** Запись `event-change-aliases`
механически заменяет прежние имена события изменения на `change`, в том числе
`sf-range-slider-change` у `sf-range-slider`. Её поле `manual` предупреждает:
`sf-range-slider-change` приходит и при установке значения из кода, а `change`
— только при действии человека (см. [Событие `change`](/ru/guide/smart-components/page/#событие-change)). Код, которому нужно событие после
установки значения из кода, после замены вызывает свой обработчик сам.
`sf-upgrade --apply` это предупреждение не печатает (см. [Инструмент `sf-upgrade`](#инструмент-sf-upgrade)), поэтому поле `manual`
каждой применённой записи читают в журнале.

### Запись с ручной работой

Если в записи `rewrite` равно `manual`, механической замены нет: устаревшее
имя нельзя заменить одним каноническим без решения автора проекта.

1. **Отчёт.** `sf-upgrade` находит места с устаревшим именем, но не меняет их
   даже с `--apply`. Каждое такое место попадает в список ручной работы
   вместе с полем `manual` и примером `examples` из записи.
2. **Правка.** Человек или ИИ правит каждое место строго по инструкции из
   `manual`.
3. **Проверка.** Проект обновлён при тех же трёх условиях ([Инструмент `sf-upgrade`](#инструмент-sf-upgrade)).

Изменение поведения (запись с `kind` равным `behaviour`) и переименование
свойства JavaScript (`kind` равен `property`) `sf-upgrade` не ищет. Для таких
изменений запись журнала описывает в поле `manual`, что проверить и как
поправить; места находит человек или ИИ по полям `from` и `to`, а результат
подтверждают проверки проекта.

## Новые имена тегов

С выпуска `ui-9ceecc24c988` (`@simai-studio/ui` 5.20261121.928) часть
смарт-компонентов называется по-новому: сначала семейство, затем уточнение
(`sf-input-date`, а не `sf-datepicker`). Прежний тег работает до 2027-01-01:
Loader определяет его как псевдоним нового, поэтому страницы на прежних
именах не ломаются. Какие имена ещё открыты, говорит
`SF.tags.list()` (см. [JS API](/ru/guide/connection/js-api/)). Страницы этой документации пока показывают примеры
на прежних тегах; новое имя стоит в справочнике каждой страницы.

| Прежний тег | Новый тег |
|:---|:---|
| `sf-avatars` | `sf-avatar-group` |
| `sf-close` | `sf-button-close` |
| `sf-copy-button` | `sf-button-copy` |
| `sf-icon-button` | `sf-button-icon` |
| `sf-change-confirm` | `sf-confirm-change` |
| `sf-inline-editor` | `sf-editor-inline` |
| `sf-composition-overlay` | `sf-editor-overlay` |
| `sf-download-file` | `sf-file-download` |
| `sf-page-header` | `sf-header-page` |
| `sf-site-header` | `sf-header-site` |
| `sf-code-input` | `sf-input-code` |
| `sf-color` | `sf-input-color` |
| `sf-country-code` | `sf-input-country` |
| `sf-datepicker` | `sf-input-date` |
| `sf-image-field` | `sf-input-image` |
| `sf-lookup` | `sf-input-lookup` |
| `sf-quantity` | `sf-input-quantity` |
| `sf-rich-text` | `sf-input-rich` |
| `sf-textarea` | `sf-input-textarea` |
| `sf-context-menu` | `sf-menu-context` |
| `sf-range-slider` | `sf-slider-range` |

Компоненты пакета `pro` переименованы так же:

| Прежний тег | Новый тег |
|:---|:---|
| `sf-thread-list` | `sf-chat-threads` |
| `sf-content-editor` | `sf-editor-content` |
| `sf-property-view` | `sf-view-properties` |
| `sf-table` | `sf-view-table` |
| `sf-data-view` | `sf-view` |

`sf-change-confirm` при этом перешёл из пакета `pro` в выпуск SIMAI
Framework (см. [Подтверждение изменения](/ru/smart/actions/confirm-change/)).

## Новые имена теней

В выпуске с системой теней тень называется по месту, а не по номеру: на
странице, приподнятое, всплывающее, окно (см. [Поверхность и тень](/ru/guide/colour/elevation/)).
Прежнее имя работает до 2027-01-01 и показывает тень своего места, поэтому
страницы на прежних именах не ломаются; там, где тень места отличается от
прежнего уровня, она выглядит по-новому. Записи журнала —
`token-c20-shadow-places`, `utility-c20-shadow-places`,
`utility-c20-elevation-former` и `utility-c20-coloured-shadows`.
Переименования — механическая замена, `sf-upgrade` переписывает их сам; классы
высоты и цветные тени — ручная работа (см. ниже).

Классы:

| Прежний класс | Новый класс |
|:---|:---|
| `shadow-0` | `shadow-flat` |
| `shadow-1` | `shadow-raised` |
| `shadow-2`, `shadow-3` | `shadow-overlay` |
| `shadow-4`, `shadow-5` | `shadow-modal` |
| `drop-shadow-0` | `drop-shadow-flat` |
| `drop-shadow-1` | `drop-shadow-raised` |
| `drop-shadow-2`, `drop-shadow-3` | `drop-shadow-overlay` |
| `drop-shadow-4`, `drop-shadow-5` | `drop-shadow-modal` |

С префиксом `hover:` — так же (`hover:shadow-1` → `hover:shadow-raised`).
Классы `elevation-0` … `elevation-5` тоже прежние имена (до 2027-01-01): каждый
становится парой — фоном своего места и его тенью. `sf-upgrade` их находит, но
не переписывает: вместо одного класса — два.

| Прежний класс | Что писать |
|:---|:---|
| `elevation-0` | `bg-surface-page shadow-flat` |
| `elevation-1` | `bg-surface-card shadow-raised` |
| `elevation-2`, `elevation-3` | `bg-surface-popup shadow-overlay` |
| `elevation-4`, `elevation-5` | `bg-surface-popup-nested shadow-modal` |

Переменные:

| Прежняя переменная | Новая переменная |
|:---|:---|
| `--sf-ui-shadow-top` | `--sf-shadow-flat` |
| `--sf-ui-shadow-1`, `--sf-elevation-1--shadow`, `--sf-shadow-card` | `--sf-shadow-raised` |
| `--sf-ui-shadow-2`, `--sf-ui-shadow-3`, `--sf-elevation-2--shadow`, `--sf-elevation-3--shadow`, `--sf-shadow-popup`, `--sf-shadow-popup-nested` | `--sf-shadow-overlay` |
| `--sf-ui-shadow-4`, `--sf-ui-shadow-5`, `--sf-elevation-4--shadow`, `--sf-elevation-5--shadow` | `--sf-shadow-modal` |
| `--sf-shadow--color-fill`, `--sf-shadow--color-outline` | `--sf-shadow-key-color` |
| `--sf-shadow--color-shading`, `--sf-shadow--color-shade` | `--sf-shadow-ambient-color` |
| `--sf-elevation-1--surface` | `--sf-surface-card` |
| `--sf-elevation-2--surface`, `--sf-elevation-3--surface` | `--sf-surface-popup` |
| `--sf-elevation-4--surface`, `--sf-elevation-5--surface` | `--sf-surface-popup-nested` |
| `--sf-on-elevation-1--variant` | `--sf-on-surface-card-variant` |
| `--sf-on-elevation-2--variant`, `--sf-on-elevation-3--variant` | `--sf-on-surface-popup-variant` |
| `--sf-on-elevation-4--variant`, `--sf-on-elevation-5--variant` | `--sf-on-surface-popup-nested-variant` |

Без замены уходят:

- `--sf-shadow--rim` — последний, всегда выключенный слой каждой тени; до
  2027-01-01 сохраняет значение `0 0 0 0 transparent`;
- цветные тени `shadow-{цвет}`, `hover:shadow-{цвет}`, `active:shadow-{цвет}`,
  `drop-shadow-{цвет}`, `hover:drop-shadow-{цвет}`: тень не несёт цвета (см.
  [Цвет тени элемента](/ru/utilities/shadows/element-color/)); до этой даты
  класс окрашивает тень своего элемента;
- правило ядра, которое давало тень любому элементу со словом `shadow` или
  `drop-shadow` в классе: тень рисует только класс тени.

Затемнение под окном и шторкой — `--sf-scrim-color`, чёрный 64 из шкалы
прозрачности; `--sf-scrim-opacity` по умолчанию `1`. Страница, которая
задавала `--sf-scrim-opacity`, по-прежнему делает затемнение ещё прозрачнее.

## Прежние имена переменных

Переменные, которые ядро переименовало или убирает. Прежнее имя работает до даты в третьем столбце; в новом коде пишите имя из второго. Таблица собрана из журнала изменений выпуска (`node scripts/build-token-reference.mjs`).

| Прежнее имя | Новое имя | Работает до | Запись журнала |
| :--- | :--- | :--- | :--- |
| `--sf-text--size-1/7` | без замены | 2026-12-01 | `token-text-size-below-quarter` |
| `--sf-text--size-1/6` | без замены | 2026-12-01 | `token-text-size-below-quarter` |
| `--sf-text--size-1/5` | без замены | 2026-12-01 | `token-text-size-below-quarter` |
| `sf-skeleton-text--size-1/7` | `sf-skeleton-text--size-1/4` | 2026-12-01 | `token-text-size-below-quarter` |
| `sf-skeleton-text--size-1/6` | `sf-skeleton-text--size-1/4` | 2026-12-01 | `token-text-size-below-quarter` |
| `sf-skeleton-text--size-1/5` | `sf-skeleton-text--size-1/4` | 2026-12-01 | `token-text-size-below-quarter` |
| `--sf-heading--font-family` | `--sf-heading--family` | 2026-12-01 | `token-heading-font-unused` |
| `--sf-heading--font-weight` | `--sf-heading--weight` | 2026-12-01 | `token-heading-font-unused` |
| `--sf-heading--font-style` | без замены | 2026-12-01 | `token-heading-font-unused` |
| `--sf-button-loading-stripe` | без замены | 2026-12-01 | `token-button-loading-stripe` |
| `--sf-icon-button-loading-stripe` | без замены | 2026-12-01 | `token-button-loading-stripe` |
| `--sf-disable` | `--sf-surface-disabled` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-elevation-1--shadow` | `--sf-shadow-raised` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-elevation-1--surface` | `--sf-surface-card` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-elevation-3--shadow` | `--sf-shadow-overlay` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-elevation-3--surface` | `--sf-surface-popup` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-elevation-4--shadow` | `--sf-shadow-modal` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-elevation-4--surface` | `--sf-surface-popup-nested` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-error-transparent-active` | `--sf-error-state-active` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-error-transparent-hover` | `--sf-error-state-hover` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-error-transparent-overlay` | `--sf-error-container-strong` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-error-transparent-select` | `--sf-error-state-select` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-on-disable` | `--sf-on-surface-disabled` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-on-elevation-1--variant` | `--sf-on-surface-card-variant` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-on-elevation-3--variant` | `--sf-on-surface-popup-variant` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-on-elevation-4--variant` | `--sf-on-surface-popup-nested-variant` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-on-surface-container--variant` | `--sf-on-surface-container-variant` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-outline-disable` | `--sf-outline-disabled` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-outline-error` | `--sf-error-outline` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-outline-info` | `--sf-info-outline` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-outline-primary` | `--sf-primary-outline` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-outline-secondary` | `--sf-secondary-outline` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-outline-success` | `--sf-success-outline` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-outline-tertiary` | `--sf-tertiary-outline` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-outline-warning` | `--sf-warning-outline` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-primary-transparent-active` | `--sf-primary-state-active` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-primary-transparent-hover` | `--sf-primary-state-hover` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-primary-transparent-overlay` | `--sf-primary-container-strong` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-primary-transparent-select` | `--sf-primary-state-select` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-secondary-transparent-active` | `--sf-secondary-state-active` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-secondary-transparent-hover` | `--sf-secondary-state-hover` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-secondary-transparent-overlay` | `--sf-secondary-container-strong` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-secondary-transparent-select` | `--sf-secondary-state-select` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-success-transparent-active` | `--sf-success-state-active` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-success-transparent-hover` | `--sf-success-state-hover` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-success-transparent-overlay` | `--sf-success-container-strong` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-success-transparent-select` | `--sf-success-state-select` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-surface-0` | `--sf-surface-page` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-surface-1` | `--sf-surface-area` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-surface-overlay` | `--sf-surface-veil` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-surface-transparent-active` | `--sf-surface-state-active` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-surface-transparent-hover` | `--sf-surface-state-hover` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-surface-transparent-overlay` | `--sf-surface-container-strong` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-surface-transparent-select` | `--sf-surface-state-select` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-tertiary-transparent-active` | `--sf-tertiary-state-active` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-tertiary-transparent-hover` | `--sf-tertiary-state-hover` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-tertiary-transparent-overlay` | `--sf-tertiary-container-strong` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-tertiary-transparent-select` | `--sf-tertiary-state-select` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-warning-transparent-active` | `--sf-warning-state-active` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-warning-transparent-hover` | `--sf-warning-state-hover` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-warning-transparent-overlay` | `--sf-warning-container-strong` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-warning-transparent-select` | `--sf-warning-state-select` | 2027-01-01 | `token-c16-theme-role-names` |
| `--sf-alert-bar-danger-background` | `--sf-alert-bar-error-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-alert-bar-info-background` | `--sf-alert-bar-info-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-alert-bar-list-background` | `--sf-alert-bar-list-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-alert-bar-warning-background` | `--sf-alert-bar-warning-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-card-background` | `--sf-card-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-code-background` | `--sf-code-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-contents-background` | `--sf-contents-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-figure-background` | `--sf-figure-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-kbd-background` | `--sf-kbd-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-list-attention-background` | `--sf-list-attention-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-pager-card-background` | `--sf-pager-card-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-procedure-marker-background` | `--sf-procedure-marker-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-progress-run-background` | `--sf-progress-run-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-progress-run-output-background` | `--sf-progress-run-output-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-search-background` | `--sf-search-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-site-header-background` | `--sf-site-header-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-tile-metric-background` | `--sf-tile-metric-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-tile-metric-hover-background` | `--sf-tile-metric-hover-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-wizard-background` | `--sf-wizard-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-workspace-drawer-background` | `--sf-workspace-drawer-background-color` | 2027-01-01 | `token-component-background-color-names` |
| `--sf-shadow-card` | `--sf-shadow-raised` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-shadow-popup` | `--sf-shadow-overlay` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-shadow-popup-nested` | `--sf-shadow-overlay` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-elevation-2--shadow` | `--sf-shadow-overlay` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-elevation-5--shadow` | `--sf-shadow-modal` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-elevation-2--surface` | `--sf-surface-popup` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-elevation-5--surface` | `--sf-surface-popup-nested` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-on-elevation-2--variant` | `--sf-on-surface-popup-variant` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-on-elevation-5--variant` | `--sf-on-surface-popup-nested-variant` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-ui-shadow-1` | `--sf-shadow-raised` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-ui-shadow-2` | `--sf-shadow-overlay` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-ui-shadow-3` | `--sf-shadow-overlay` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-ui-shadow-4` | `--sf-shadow-modal` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-ui-shadow-5` | `--sf-shadow-modal` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-ui-shadow-top` | `--sf-shadow-flat` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-shadow--color-fill` | `--sf-shadow-key-color` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-shadow--color-outline` | `--sf-shadow-key-color` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-shadow--color-shading` | `--sf-shadow-ambient-color` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-shadow--color-shade` | `--sf-shadow-ambient-color` | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-shadow--rim` | без замены | 2027-01-01 | `token-c20-shadow-places` |
| `--sf-tone-rose-50--alfa-12` | `--sf-pink-50--alfa-12` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-rose-50--alfa-16` | `--sf-pink-50--alfa-16` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-rose-50--alfa-20` | `--sf-pink-50--alfa-20` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-rose-50--alfa-24` | `--sf-pink-50--alfa-24` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-rose-50--alfa-28` | `--sf-pink-50--alfa-28` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-rose-50--alfa-32` | `--sf-pink-50--alfa-32` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-rose-30` | `--sf-pink-30` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-rose-50` | `--sf-pink-50` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-rose-60` | `--sf-pink-60` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-rose-85` | `--sf-pink-85` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-amber-50--alfa-12` | `--sf-amber-50--alfa-12` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-amber-50--alfa-16` | `--sf-amber-50--alfa-16` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-amber-50--alfa-20` | `--sf-amber-50--alfa-20` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-amber-50--alfa-24` | `--sf-amber-50--alfa-24` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-amber-50--alfa-28` | `--sf-amber-50--alfa-28` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-amber-50--alfa-32` | `--sf-amber-50--alfa-32` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-amber-30` | `--sf-amber-30` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-amber-60` | `--sf-amber-60` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-amber-85` | `--sf-amber-85` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-lime-50--alfa-12` | `--sf-lime-50--alfa-12` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-lime-50--alfa-16` | `--sf-lime-50--alfa-16` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-lime-50--alfa-20` | `--sf-lime-50--alfa-20` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-lime-50--alfa-24` | `--sf-lime-50--alfa-24` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-lime-50--alfa-28` | `--sf-lime-50--alfa-28` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-lime-50--alfa-32` | `--sf-lime-50--alfa-32` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-lime-30` | `--sf-lime-30` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-lime-50` | `--sf-lime-50` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-lime-60` | `--sf-lime-60` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-lime-85` | `--sf-lime-85` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-green-50--alfa-12` | `--sf-green-50--alfa-12` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-green-50--alfa-16` | `--sf-green-50--alfa-16` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-green-50--alfa-20` | `--sf-green-50--alfa-20` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-green-50--alfa-24` | `--sf-green-50--alfa-24` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-green-50--alfa-28` | `--sf-green-50--alfa-28` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-green-50--alfa-32` | `--sf-green-50--alfa-32` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-green-30` | `--sf-green-30` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-green-85` | `--sf-green-85` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-teal-50--alfa-12` | `--sf-teal-50--alfa-12` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-teal-50--alfa-16` | `--sf-teal-50--alfa-16` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-teal-50--alfa-20` | `--sf-teal-50--alfa-20` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-teal-50--alfa-24` | `--sf-teal-50--alfa-24` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-teal-50--alfa-28` | `--sf-teal-50--alfa-28` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-teal-50--alfa-32` | `--sf-teal-50--alfa-32` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-teal-30` | `--sf-teal-30` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-teal-50` | `--sf-teal-50` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-teal-60` | `--sf-teal-60` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-teal-85` | `--sf-teal-85` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-sky-50--alfa-12` | `--sf-sky-50--alfa-12` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-sky-50--alfa-16` | `--sf-sky-50--alfa-16` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-sky-50--alfa-20` | `--sf-sky-50--alfa-20` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-sky-50--alfa-24` | `--sf-sky-50--alfa-24` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-sky-50--alfa-28` | `--sf-sky-50--alfa-28` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-sky-50--alfa-32` | `--sf-sky-50--alfa-32` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-sky-30` | `--sf-sky-30` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-sky-85` | `--sf-sky-85` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-indigo-50--alfa-20` | `--sf-indigo-50--alfa-20` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-indigo-50--alfa-32` | `--sf-indigo-50--alfa-32` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-indigo-30` | `--sf-indigo-30` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-indigo-85` | `--sf-indigo-85` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-violet-50--alfa-12` | `--sf-purple-50--alfa-12` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-violet-50--alfa-16` | `--sf-purple-50--alfa-16` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-violet-50--alfa-20` | `--sf-purple-50--alfa-20` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-violet-50--alfa-24` | `--sf-purple-50--alfa-24` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-violet-50--alfa-28` | `--sf-purple-50--alfa-28` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-violet-50--alfa-32` | `--sf-purple-50--alfa-32` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-violet-30` | `--sf-purple-30` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-violet-85` | `--sf-purple-85` | 2027-01-01 | `token-c17-tone-primitives-to-hues` |
| `--sf-tone-rose-container` | `--sf-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-on-tone-rose-container` | `--sf-on-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-tone-amber-container` | `--sf-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-on-tone-amber-container` | `--sf-on-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-tone-lime-container` | `--sf-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-on-tone-lime-container` | `--sf-on-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-tone-green-container` | `--sf-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-on-tone-green-container` | `--sf-on-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-tone-teal-container` | `--sf-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-on-tone-teal-container` | `--sf-on-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-tone-sky-container` | `--sf-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-on-tone-sky-container` | `--sf-on-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-tone-indigo-container` | `--sf-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-on-tone-indigo-container` | `--sf-on-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-tone-violet-container` | `--sf-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-on-tone-violet-container` | `--sf-on-hue-container` | 2027-01-01 | `token-c17-tone-roles-to-hue-roles` |
| `--sf-on-surface-muted` | `--sf-on-surface-disabled` | 2027-01-01 | `token-c43-muted-is-disabled` |
| `--sf-download-file-background-color` | `--sf-file-download-background-color` | 2027-01-01 | `token-file-download-variable-names` |
| `--sf-download-file-border-color` | `--sf-file-download-border-color` | 2027-01-01 | `token-file-download-variable-names` |
| `--sf-download-file-radius` | `--sf-file-download-radius` | 2027-01-01 | `token-file-download-variable-names` |
| `--sf-download-file-padding` | `--sf-file-download-padding` | 2027-01-01 | `token-file-download-variable-names` |
| `--sf-download-file-gap` | `--sf-file-download-gap` | 2027-01-01 | `token-file-download-variable-names` |
| `--sf-download-file-icon-size` | `--sf-file-download-icon-size` | 2027-01-01 | `token-file-download-variable-names` |
| `--sf-download-file-icon-color` | `--sf-file-download-icon-color` | 2027-01-01 | `token-file-download-variable-names` |
| `--sf-spinner-track-color` | `--sf-spinner-track-color` | 2027-01-01 | `token-spinner-track-carries-alpha` |
| `--sf-change-confirm-radius` | `--sf-confirm-change-radius` | 2027-01-01 | `token-confirm-change-variable-names` |
| `--sf-change-confirm-inset` | `--sf-confirm-change-inset` | 2027-01-01 | `token-confirm-change-variable-names` |
| `--sf-change-confirm-gap` | `--sf-confirm-change-gap` | 2027-01-01 | `token-confirm-change-variable-names` |
| `--sf-change-confirm-before-background-color` | `--sf-confirm-change-before-background-color` | 2027-01-01 | `token-confirm-change-variable-names` |
| `--sf-change-confirm-after-background-color` | `--sf-confirm-change-after-background-color` | 2027-01-01 | `token-confirm-change-variable-names` |
| `--sf-change-confirm-after-color` | `--sf-confirm-change-after-color` | 2027-01-01 | `token-confirm-change-variable-names` |
| `--sf-font-weight-light` | `--sf-weight--light` | 2027-01-01 | `token-c178-one-family-names` |
| `--sf-font-weight-regular` | `--sf-weight--regular` | 2027-01-01 | `token-c178-one-family-names` |
| `--sf-font-weight-medium` | `--sf-weight--medium` | 2027-01-01 | `token-c178-one-family-names` |
| `--sf-font-weight-bold` | `--sf-weight--bold` | 2027-01-01 | `token-c178-one-family-names` |
| `--sf-text--font-weight-1` | `--sf-weight--thin` | 2027-01-01 | `token-c178-one-family-names` |
| `--sf-text--font-weight-2` | `--sf-weight--extra-light` | 2027-01-01 | `token-c178-one-family-names` |
| `--sf-text--font-weight-3` | `--sf-weight--light` | 2027-01-01 | `token-c178-one-family-names` |
| `--sf-text--font-weight-4` | `--sf-weight--regular` | 2027-01-01 | `token-c178-one-family-names` |
| `--sf-text--font-weight-5` | `--sf-weight--medium` | 2027-01-01 | `token-c178-one-family-names` |
| `--sf-text--font-weight-6` | `--sf-weight--semi-bold` | 2027-01-01 | `token-c178-one-family-names` |
| `--sf-text--font-weight-7` | `--sf-weight--bold` | 2027-01-01 | `token-c178-one-family-names` |
| `--sf-text--font-weight-8` | `--sf-weight--extra-bold` | 2027-01-01 | `token-c178-one-family-names` |
| `--sf-text--font-weight-9` | `--sf-weight--black` | 2027-01-01 | `token-c178-one-family-names` |
| `--sf-focus-outline-width` | `--sf-focus--width` | 2027-01-01 | `token-c178-one-family-names` |
| `--sf-ui-blur-small` | `blur(var(--sf-blur-small))` | 2027-01-01 | `token-c178-blur-filter-values` |
| `--sf-ui-blur-medium` | `blur(var(--sf-blur-medium))` | 2027-01-01 | `token-c178-blur-filter-values` |
| `--sf-ui-blur-large` | `blur(var(--sf-blur-large))` | 2027-01-01 | `token-c178-blur-filter-values` |
| `--sf-ui-blur-surface-overlay` | `blur(var(--sf-surface-overlay--blur))` | 2027-01-01 | `token-c178-blur-filter-values` |
| `--sf-ring--alfa` | `--sf-ring--alpha` | 2027-01-01 | `token-ring-alpha-spelling` |
| `--sf-avatar-offline-background-color` | без замены | 2027-01-01 | `token-avatar-offline-variables-retired` |
| `--sf-avatar-offline-overlay` | без замены | 2027-01-01 | `token-avatar-offline-variables-retired` |
| `--sf-text--measure` | `--sf-measure-80` | 2027-01-01 | `token-c396-text-measure` |
| `--sf-text--measure-wide` | `--sf-measure-96` | 2027-01-01 | `token-c396-text-measure` |
| `--sf-text--measure-narrow` | `--sf-measure-52` | 2027-01-01 | `token-c396-text-measure` |

## Прежние имена классов

Классы, которые выпуск убирает. Прежний класс рисует то же, что рисовал, до 2027-01-01, а первое использование каждого имени на странице Loader записывает в `SF.deprecations`. В строке: прежнее имя, после стрелки — что писать в новой разметке, в скобках — решение. «Без замены» значит, что задача ушла из утилит (страница утилиты говорит, чем её решать). Под `md:`, `hover:` и другими условиями замена та же. Страницы утилит и компонентов прежних имён не описывают. Список собран из таблицы прежних классов выпуска (`node scripts/build-retired-class-reference.mjs`).

```text
table-sm                            →  data-sf-density="compact"  (C185 (2))
table-small                         →  data-sf-density="compact"  (C185 (2))
wrap-none                           →  text-nowrap  (C186 (8))
text-break-word                     →  text-break  (C186 (8))
text-break-all                      →  text-break  (C186 (8))
t-ellipsis                          →  truncate  (C186 (8))
t-clip                              →  truncate  (C186 (8))
max-w-prose                         →  measure  (C212 (3))
regular                             →  weight-regular  (C212 (3))
weight-4                            →  weight-regular  (C212 (3))
weight-5                            →  weight-medium  (C212 (3))
bold                                →  weight-bold  (C212 (3))
weight-7                            →  weight-bold  (C212 (3))
weight-1                            →  weight-regular  (C212 (3))
weight-2                            →  weight-regular  (C212 (3))
weight-3                            →  weight-regular  (C212 (3))
lighter                             →  weight-regular  (C212 (3))
weight-6                            →  weight-medium  (C212 (3))
weight-8                            →  weight-bold  (C212 (3))
weight-9                            →  weight-bold  (C212 (3))
bolder                              →  weight-bold  (C212 (3))
line-tight                          →  line-N  (C212 (3))
line-snug                           →  line-N  (C212 (3))
line-normal                         →  line-N  (C212 (3))
line-relaxed                        →  line-N  (C212 (3))
line-loose                          →  line-N  (C212 (3))
line-none                           →  line-N  (C212 (3))
все классы модуля margin-ext        →  без замены  (C187 (2))
все классы модуля padding-ext       →  без замены  (C187 (2))
все классы модуля scroll-margin-ext  →  без замены  (C187 (2))
все классы модуля scroll-padding-ext  →  без замены  (C187 (2))
все классы модуля background-size-ext  →  без замены  (C187 (2))
все классы модуля transform-translate-ext  →  без замены  (C187 (2))
w-1/1                               →  w-full  (C212 (4))
w-10/12                             →  w-5/6  (C212 (4))
w-2/12                              →  w-1/6  (C212 (4))
w-2/4                               →  w-1/2  (C212 (4))
w-2/6                               →  w-1/3  (C212 (4))
w-3/12                              →  w-1/4  (C212 (4))
w-3/6                               →  w-1/2  (C212 (4))
w-4/12                              →  w-1/3  (C212 (4))
w-4/6                               →  w-2/3  (C212 (4))
w-6/12                              →  w-1/2  (C212 (4))
w-8/12                              →  w-2/3  (C212 (4))
w-9/12                              →  w-3/4  (C212 (4))
basis-1/1                           →  basis-full  (C212 (4))
basis-10/12                         →  basis-5/6  (C212 (4))
basis-2/12                          →  basis-1/6  (C212 (4))
basis-2/4                           →  basis-1/2  (C212 (4))
basis-2/6                           →  basis-1/3  (C212 (4))
basis-3/12                          →  basis-1/4  (C212 (4))
basis-3/6                           →  basis-1/2  (C212 (4))
basis-4/12                          →  basis-1/3  (C212 (4))
basis-4/6                           →  basis-2/3  (C212 (4))
basis-6/12                          →  basis-1/2  (C212 (4))
basis-8/12                          →  basis-2/3  (C212 (4))
basis-9/12                          →  basis-3/4  (C212 (4))
h-2/4                               →  h-1/2  (C212 (4))
h-2/6                               →  h-1/3  (C212 (4))
h-3/6                               →  h-1/2  (C212 (4))
h-4/6                               →  h-2/3  (C212 (4))
h-screen-2/4                        →  h-screen-1/2  (C212 (4))
top-10/12                           →  top-5/6  (C212 (4))
top-2/12                            →  top-1/6  (C212 (4))
top-2/4                             →  top-1/2  (C212 (4))
top-2/6                             →  top-1/3  (C212 (4))
top-3/12                            →  top-1/4  (C212 (4))
top-3/6                             →  top-1/2  (C212 (4))
top-4/12                            →  top-1/3  (C212 (4))
top-4/6                             →  top-2/3  (C212 (4))
top-6/12                            →  top-1/2  (C212 (4))
top-8/12                            →  top-2/3  (C212 (4))
top-9/12                            →  top-3/4  (C212 (4))
bottom-10/12                        →  bottom-5/6  (C212 (4))
bottom-2/12                         →  bottom-1/6  (C212 (4))
bottom-2/4                          →  bottom-1/2  (C212 (4))
bottom-2/6                          →  bottom-1/3  (C212 (4))
bottom-3/12                         →  bottom-1/4  (C212 (4))
bottom-3/6                          →  bottom-1/2  (C212 (4))
bottom-4/12                         →  bottom-1/3  (C212 (4))
bottom-4/6                          →  bottom-2/3  (C212 (4))
bottom-6/12                         →  bottom-1/2  (C212 (4))
bottom-8/12                         →  bottom-2/3  (C212 (4))
bottom-9/12                         →  bottom-3/4  (C212 (4))
inline-start-10/12                  →  inline-start-5/6  (C212 (4))
inline-start-2/12                   →  inline-start-1/6  (C212 (4))
inline-start-2/4                    →  inline-start-1/2  (C212 (4))
inline-start-2/6                    →  inline-start-1/3  (C212 (4))
inline-start-3/12                   →  inline-start-1/4  (C212 (4))
inline-start-3/6                    →  inline-start-1/2  (C212 (4))
inline-start-4/12                   →  inline-start-1/3  (C212 (4))
inline-start-4/6                    →  inline-start-2/3  (C212 (4))
inline-start-6/12                   →  inline-start-1/2  (C212 (4))
inline-start-8/12                   →  inline-start-2/3  (C212 (4))
inline-start-9/12                   →  inline-start-3/4  (C212 (4))
inline-end-10/12                    →  inline-end-5/6  (C212 (4))
inline-end-2/12                     →  inline-end-1/6  (C212 (4))
inline-end-2/4                      →  inline-end-1/2  (C212 (4))
inline-end-2/6                      →  inline-end-1/3  (C212 (4))
inline-end-3/12                     →  inline-end-1/4  (C212 (4))
inline-end-3/6                      →  inline-end-1/2  (C212 (4))
inline-end-4/12                     →  inline-end-1/3  (C212 (4))
inline-end-4/6                      →  inline-end-2/3  (C212 (4))
inline-end-6/12                     →  inline-end-1/2  (C212 (4))
inline-end-8/12                     →  inline-end-2/3  (C212 (4))
inline-end-9/12                     →  inline-end-3/4  (C212 (4))
g-0                                 →  gap-0  (C212 (4))
g-1                                 →  gap-1  (C212 (4))
g-1/2                               →  gap-1/2  (C212 (4))
g-1/3                               →  gap-1/3  (C212 (4))
g-1/4                               →  gap-1/4  (C212 (4))
g-2                                 →  gap-2  (C212 (4))
g-3                                 →  gap-3  (C212 (4))
g-4                                 →  gap-4  (C212 (4))
g-5                                 →  gap-5  (C212 (4))
g-6                                 →  gap-6  (C212 (4))
g-7                                 →  gap-7  (C212 (4))
g-8                                 →  gap-8  (C212 (4))
g-x-0                               →  gap-x-0  (C212 (4))
g-x-1                               →  gap-x-1  (C212 (4))
g-x-1/2                             →  gap-x-1/2  (C212 (4))
g-x-1/3                             →  gap-x-1/3  (C212 (4))
g-x-1/4                             →  gap-x-1/4  (C212 (4))
g-x-2                               →  gap-x-2  (C212 (4))
g-x-3                               →  gap-x-3  (C212 (4))
g-x-4                               →  gap-x-4  (C212 (4))
g-x-5                               →  gap-x-5  (C212 (4))
g-x-6                               →  gap-x-6  (C212 (4))
g-x-7                               →  gap-x-7  (C212 (4))
g-x-8                               →  gap-x-8  (C212 (4))
g-y-0                               →  gap-y-0  (C212 (4))
g-y-1                               →  gap-y-1  (C212 (4))
g-y-1/2                             →  gap-y-1/2  (C212 (4))
g-y-1/3                             →  gap-y-1/3  (C212 (4))
g-y-1/4                             →  gap-y-1/4  (C212 (4))
g-y-2                               →  gap-y-2  (C212 (4))
g-y-3                               →  gap-y-3  (C212 (4))
g-y-4                               →  gap-y-4  (C212 (4))
g-y-5                               →  gap-y-5  (C212 (4))
g-y-6                               →  gap-y-6  (C212 (4))
g-y-7                               →  gap-y-7  (C212 (4))
g-y-8                               →  gap-y-8  (C212 (4))
w-20                                →  w-1/5  (C212 (4))
w-25                                →  w-1/4  (C212 (4))
w-40                                →  w-2/5  (C212 (4))
w-50                                →  w-1/2  (C212 (4))
w-60                                →  w-3/5  (C212 (4))
w-75                                →  w-3/4  (C212 (4))
w-80                                →  w-4/5  (C212 (4))
basis-20                            →  basis-1/5  (C212 (4))
basis-25                            →  basis-1/4  (C212 (4))
basis-40                            →  basis-2/5  (C212 (4))
basis-50                            →  basis-1/2  (C212 (4))
basis-60                            →  basis-3/5  (C212 (4))
basis-75                            →  basis-3/4  (C212 (4))
basis-80                            →  basis-4/5  (C212 (4))
basis-100                           →  basis-full  (C212 (4))
h-content-min                       →  h-min  (C212 (4))
h-content-max                       →  h-max  (C212 (4))
col-gap-* (семейство)               →  gap-x-… (той же ступени)  (C212 (4))
row-gap-* (семейство)               →  gap-y-… (той же ступени)  (C212 (4))
w-1                                 →  w-1/12  (C212 (4))
w-2                                 →  w-1/12  (C212 (4))
w-3                                 →  w-1/12  (C212 (4))
w-4                                 →  w-1/12  (C212 (4))
w-5                                 →  w-1/12  (C212 (4))
w-6                                 →  w-1/12  (C212 (4))
w-7                                 →  w-1/12  (C212 (4))
w-8                                 →  w-1/12  (C212 (4))
w-9                                 →  w-1/12  (C212 (4))
w-10                                →  w-1/12  (C212 (4))
w-11                                →  w-1/12  (C212 (4))
w-12                                →  w-1/12  (C212 (4))
w-13                                →  w-1/6  (C212 (4))
w-14                                →  w-1/6  (C212 (4))
w-15                                →  w-1/6  (C212 (4))
w-16                                →  w-1/6  (C212 (4))
w-17                                →  w-1/6  (C212 (4))
w-18                                →  w-1/6  (C212 (4))
w-19                                →  w-1/5  (C212 (4))
w-21                                →  w-1/5  (C212 (4))
w-22                                →  w-1/5  (C212 (4))
w-23                                →  w-1/4  (C212 (4))
w-24                                →  w-1/4  (C212 (4))
w-26                                →  w-1/4  (C212 (4))
w-27                                →  w-1/4  (C212 (4))
w-28                                →  w-1/4  (C212 (4))
w-29                                →  w-1/4  (C212 (4))
w-30                                →  w-1/3  (C212 (4))
w-31                                →  w-1/3  (C212 (4))
w-32                                →  w-1/3  (C212 (4))
w-33                                →  w-1/3  (C212 (4))
w-34                                →  w-1/3  (C212 (4))
w-35                                →  w-1/3  (C212 (4))
w-36                                →  w-1/3  (C212 (4))
w-37                                →  w-2/5  (C212 (4))
w-38                                →  w-2/5  (C212 (4))
w-39                                →  w-2/5  (C212 (4))
w-41                                →  w-5/12  (C212 (4))
w-42                                →  w-5/12  (C212 (4))
w-43                                →  w-5/12  (C212 (4))
w-44                                →  w-5/12  (C212 (4))
w-45                                →  w-5/12  (C212 (4))
w-46                                →  w-1/2  (C212 (4))
w-47                                →  w-1/2  (C212 (4))
w-48                                →  w-1/2  (C212 (4))
w-49                                →  w-1/2  (C212 (4))
w-51                                →  w-1/2  (C212 (4))
w-52                                →  w-1/2  (C212 (4))
w-53                                →  w-1/2  (C212 (4))
w-54                                →  w-1/2  (C212 (4))
w-55                                →  w-7/12  (C212 (4))
w-56                                →  w-7/12  (C212 (4))
w-57                                →  w-7/12  (C212 (4))
w-58                                →  w-7/12  (C212 (4))
w-59                                →  w-7/12  (C212 (4))
w-61                                →  w-3/5  (C212 (4))
w-62                                →  w-3/5  (C212 (4))
w-63                                →  w-3/5  (C212 (4))
w-64                                →  w-2/3  (C212 (4))
w-65                                →  w-2/3  (C212 (4))
w-66                                →  w-2/3  (C212 (4))
w-67                                →  w-2/3  (C212 (4))
w-68                                →  w-2/3  (C212 (4))
w-69                                →  w-2/3  (C212 (4))
w-70                                →  w-2/3  (C212 (4))
w-71                                →  w-3/4  (C212 (4))
w-72                                →  w-3/4  (C212 (4))
w-73                                →  w-3/4  (C212 (4))
w-74                                →  w-3/4  (C212 (4))
w-76                                →  w-3/4  (C212 (4))
w-77                                →  w-3/4  (C212 (4))
w-78                                →  w-4/5  (C212 (4))
w-79                                →  w-4/5  (C212 (4))
w-81                                →  w-4/5  (C212 (4))
w-82                                →  w-5/6  (C212 (4))
w-83                                →  w-5/6  (C212 (4))
w-84                                →  w-5/6  (C212 (4))
w-85                                →  w-5/6  (C212 (4))
w-86                                →  w-5/6  (C212 (4))
w-87                                →  w-5/6  (C212 (4))
w-88                                →  w-11/12  (C212 (4))
w-89                                →  w-11/12  (C212 (4))
w-90                                →  w-11/12  (C212 (4))
w-91                                →  w-11/12  (C212 (4))
w-92                                →  w-11/12  (C212 (4))
w-93                                →  w-11/12  (C212 (4))
w-94                                →  w-11/12  (C212 (4))
w-95                                →  w-11/12  (C212 (4))
w-96                                →  w-full  (C212 (4))
w-97                                →  w-full  (C212 (4))
w-98                                →  w-full  (C212 (4))
w-99                                →  w-full  (C212 (4))
space-x-reverse                     →  без замены  (C212 (4))
space-y-reverse                     →  без замены  (C212 (4))
basis-1                             →  basis-1/12  (C212 (4))
basis-2                             →  basis-1/12  (C212 (4))
basis-3                             →  basis-1/12  (C212 (4))
basis-4                             →  basis-1/12  (C212 (4))
basis-5                             →  basis-1/12  (C212 (4))
basis-6                             →  basis-1/12  (C212 (4))
basis-7                             →  basis-1/12  (C212 (4))
basis-8                             →  basis-1/12  (C212 (4))
basis-9                             →  basis-1/12  (C212 (4))
basis-10                            →  basis-1/12  (C212 (4))
basis-11                            →  basis-1/12  (C212 (4))
basis-12                            →  basis-1/12  (C212 (4))
basis-13                            →  basis-1/6  (C212 (4))
basis-14                            →  basis-1/6  (C212 (4))
basis-15                            →  basis-1/6  (C212 (4))
basis-16                            →  basis-1/6  (C212 (4))
basis-17                            →  basis-1/6  (C212 (4))
basis-18                            →  basis-1/6  (C212 (4))
basis-19                            →  basis-1/5  (C212 (4))
basis-21                            →  basis-1/5  (C212 (4))
basis-22                            →  basis-1/5  (C212 (4))
basis-23                            →  basis-1/4  (C212 (4))
basis-24                            →  basis-1/4  (C212 (4))
basis-26                            →  basis-1/4  (C212 (4))
basis-27                            →  basis-1/4  (C212 (4))
basis-28                            →  basis-1/4  (C212 (4))
basis-29                            →  basis-1/4  (C212 (4))
basis-30                            →  basis-1/3  (C212 (4))
basis-31                            →  basis-1/3  (C212 (4))
basis-32                            →  basis-1/3  (C212 (4))
basis-33                            →  basis-1/3  (C212 (4))
basis-34                            →  basis-1/3  (C212 (4))
basis-35                            →  basis-1/3  (C212 (4))
basis-36                            →  basis-1/3  (C212 (4))
basis-37                            →  basis-2/5  (C212 (4))
basis-38                            →  basis-2/5  (C212 (4))
basis-39                            →  basis-2/5  (C212 (4))
basis-41                            →  basis-5/12  (C212 (4))
basis-42                            →  basis-5/12  (C212 (4))
basis-43                            →  basis-5/12  (C212 (4))
basis-44                            →  basis-5/12  (C212 (4))
basis-45                            →  basis-5/12  (C212 (4))
basis-46                            →  basis-1/2  (C212 (4))
basis-47                            →  basis-1/2  (C212 (4))
basis-48                            →  basis-1/2  (C212 (4))
basis-49                            →  basis-1/2  (C212 (4))
basis-51                            →  basis-1/2  (C212 (4))
basis-52                            →  basis-1/2  (C212 (4))
basis-53                            →  basis-1/2  (C212 (4))
basis-54                            →  basis-1/2  (C212 (4))
basis-55                            →  basis-7/12  (C212 (4))
basis-56                            →  basis-7/12  (C212 (4))
basis-57                            →  basis-7/12  (C212 (4))
basis-58                            →  basis-7/12  (C212 (4))
basis-59                            →  basis-7/12  (C212 (4))
basis-61                            →  basis-3/5  (C212 (4))
basis-62                            →  basis-3/5  (C212 (4))
basis-63                            →  basis-3/5  (C212 (4))
basis-64                            →  basis-2/3  (C212 (4))
basis-65                            →  basis-2/3  (C212 (4))
basis-66                            →  basis-2/3  (C212 (4))
basis-67                            →  basis-2/3  (C212 (4))
basis-68                            →  basis-2/3  (C212 (4))
basis-69                            →  basis-2/3  (C212 (4))
basis-70                            →  basis-2/3  (C212 (4))
basis-71                            →  basis-3/4  (C212 (4))
basis-72                            →  basis-3/4  (C212 (4))
basis-73                            →  basis-3/4  (C212 (4))
basis-74                            →  basis-3/4  (C212 (4))
basis-76                            →  basis-3/4  (C212 (4))
basis-77                            →  basis-3/4  (C212 (4))
basis-78                            →  basis-4/5  (C212 (4))
basis-79                            →  basis-4/5  (C212 (4))
basis-81                            →  basis-4/5  (C212 (4))
basis-82                            →  basis-5/6  (C212 (4))
basis-83                            →  basis-5/6  (C212 (4))
basis-84                            →  basis-5/6  (C212 (4))
basis-85                            →  basis-5/6  (C212 (4))
basis-86                            →  basis-5/6  (C212 (4))
basis-87                            →  basis-5/6  (C212 (4))
basis-88                            →  basis-11/12  (C212 (4))
basis-89                            →  basis-11/12  (C212 (4))
basis-90                            →  basis-11/12  (C212 (4))
basis-91                            →  basis-11/12  (C212 (4))
basis-92                            →  basis-11/12  (C212 (4))
basis-93                            →  basis-11/12  (C212 (4))
basis-94                            →  basis-11/12  (C212 (4))
basis-95                            →  basis-11/12  (C212 (4))
basis-96                            →  basis-full  (C212 (4))
basis-97                            →  basis-full  (C212 (4))
basis-98                            →  basis-full  (C212 (4))
basis-99                            →  basis-full  (C212 (4))
space-x-* (семейство)               →  gap-x-… (той же ступени)  (C212 (4))
space-y-* (семейство)               →  gap-y-… (той же ступени)  (C212 (4))
m-, p-, scroll-m-, scroll-p- <a0-i9> (семейство)  →  …-… (той же ступени)  (C212 (4))
-scroll-m-, -scroll-p- <a0-i9> (семейство)  →  без замены  (C212 (4))
ring-3                              →  ring-2  (C187 (3))
ring-4                              →  ring-2  (C187 (3))
все классы модуля ring-opacity      →  без замены  (C187 (3))
divider-* (семейство)               →  divide-… (той же ступени)  (C187 (4))
все классы модуля divider-opacity   →  divide-outline-variant  (C187 (4))
bg-disable                          →  bg-surface-disabled  (C212 (5))
bg-error-transparent-overlay        →  bg-error-container-strong  (C212 (5))
bg-error-transparent-select         →  bg-error-state-select  (C212 (5))
bg-primary-transparent-overlay      →  bg-primary-container-strong  (C212 (5))
bg-primary-transparent-select       →  bg-primary-state-select  (C212 (5))
bg-secondary-transparent-overlay    →  bg-secondary-container-strong  (C212 (5))
bg-secondary-transparent-select     →  bg-secondary-state-select  (C212 (5))
bg-success-transparent-overlay      →  bg-success-container-strong  (C212 (5))
bg-success-transparent-select       →  bg-success-state-select  (C212 (5))
bg-surface-0                        →  bg-surface-page  (C212 (5))
bg-surface-1                        →  bg-surface-area  (C212 (5))
bg-surface-transparent-overlay      →  bg-surface-container-strong  (C212 (5))
bg-surface-transparent-select       →  bg-surface-state-select  (C212 (5))
bg-tertiary-transparent-overlay     →  bg-tertiary-container-strong  (C212 (5))
bg-tertiary-transparent-select      →  bg-tertiary-state-select  (C212 (5))
bg-warning-transparent-overlay      →  bg-warning-container-strong  (C212 (5))
bg-warning-transparent-select       →  bg-warning-state-select  (C212 (5))
border-error-transparent-overlay    →  border-error-container-strong  (C212 (5))
border-primary-transparent-overlay  →  border-primary-container-strong  (C212 (5))
border-secondary-transparent-overlay  →  border-secondary-container-strong  (C212 (5))
border-success-transparent-overlay  →  border-success-container-strong  (C212 (5))
border-surface-0                    →  border-surface-page  (C212 (5))
border-surface-1                    →  border-surface-area  (C212 (5))
border-surface-overlay              →  border-surface-veil  (C212 (5))
border-surface-transparent-overlay  →  border-surface-container-strong  (C212 (5))
border-tertiary-transparent-overlay  →  border-tertiary-container-strong  (C212 (5))
border-warning-transparent-overlay  →  border-warning-container-strong  (C212 (5))
color-on-disable                    →  color-on-surface-disabled  (C212 (5))
drop-shadow-error-transparent-overlay  →  drop-shadow-error-container-strong  (C212 (5))
drop-shadow-error-transparent-select  →  drop-shadow-error-state-select  (C212 (5))
drop-shadow-primary-transparent-overlay  →  drop-shadow-primary-container-strong  (C212 (5))
drop-shadow-primary-transparent-select  →  drop-shadow-primary-state-select  (C212 (5))
drop-shadow-secondary-transparent-overlay  →  drop-shadow-secondary-container-strong  (C212 (5))
drop-shadow-secondary-transparent-select  →  drop-shadow-secondary-state-select  (C212 (5))
drop-shadow-success-transparent-overlay  →  drop-shadow-success-container-strong  (C212 (5))
drop-shadow-success-transparent-select  →  drop-shadow-success-state-select  (C212 (5))
drop-shadow-surface-0               →  drop-shadow-surface-page  (C212 (5))
drop-shadow-surface-1               →  drop-shadow-surface-area  (C212 (5))
drop-shadow-tertiary-transparent-overlay  →  drop-shadow-tertiary-container-strong  (C212 (5))
drop-shadow-tertiary-transparent-select  →  drop-shadow-tertiary-state-select  (C212 (5))
drop-shadow-warning-transparent-overlay  →  drop-shadow-warning-container-strong  (C212 (5))
drop-shadow-warning-transparent-select  →  drop-shadow-warning-state-select  (C212 (5))
fill-disable                        →  fill-surface-disabled  (C212 (5))
fill-error-transparent-overlay      →  fill-error-container-strong  (C212 (5))
fill-error-transparent-select       →  fill-error-state-select  (C212 (5))
fill-primary-transparent-overlay    →  fill-primary-container-strong  (C212 (5))
fill-primary-transparent-select     →  fill-primary-state-select  (C212 (5))
fill-secondary-transparent-overlay  →  fill-secondary-container-strong  (C212 (5))
fill-secondary-transparent-select   →  fill-secondary-state-select  (C212 (5))
fill-success-transparent-overlay    →  fill-success-container-strong  (C212 (5))
fill-success-transparent-select     →  fill-success-state-select  (C212 (5))
fill-surface-0                      →  fill-surface-page  (C212 (5))
fill-surface-1                      →  fill-surface-area  (C212 (5))
fill-surface-transparent-overlay    →  fill-surface-container-strong  (C212 (5))
fill-surface-transparent-select     →  fill-surface-state-select  (C212 (5))
fill-tertiary-transparent-overlay   →  fill-tertiary-container-strong  (C212 (5))
fill-tertiary-transparent-select    →  fill-tertiary-state-select  (C212 (5))
fill-warning-transparent-overlay    →  fill-warning-container-strong  (C212 (5))
fill-warning-transparent-select     →  fill-warning-state-select  (C212 (5))
placeholder-on-disable              →  placeholder-on-surface-disabled  (C212 (5))
ring-error-transparent-overlay      →  ring-error-container-strong  (C212 (5))
ring-offset-error-transparent-overlay  →  ring-offset-error-container-strong  (C212 (5))
ring-offset-primary-transparent-overlay  →  ring-offset-primary-container-strong  (C212 (5))
ring-offset-secondary-transparent-overlay  →  ring-offset-secondary-container-strong  (C212 (5))
ring-offset-success-transparent-overlay  →  ring-offset-success-container-strong  (C212 (5))
ring-offset-surface-0               →  ring-offset-surface-page  (C212 (5))
ring-offset-surface-1               →  ring-offset-surface-area  (C212 (5))
ring-offset-surface-overlay         →  ring-offset-surface-veil  (C212 (5))
ring-offset-surface-transparent-overlay  →  ring-offset-surface-container-strong  (C212 (5))
ring-offset-tertiary-transparent-overlay  →  ring-offset-tertiary-container-strong  (C212 (5))
ring-offset-warning-transparent-overlay  →  ring-offset-warning-container-strong  (C212 (5))
ring-primary-transparent-overlay    →  ring-primary-container-strong  (C212 (5))
ring-secondary-transparent-overlay  →  ring-secondary-container-strong  (C212 (5))
ring-success-transparent-overlay    →  ring-success-container-strong  (C212 (5))
ring-surface-0                      →  ring-surface-page  (C212 (5))
ring-surface-1                      →  ring-surface-area  (C212 (5))
ring-surface-overlay                →  ring-surface-veil  (C212 (5))
ring-surface-transparent-overlay    →  ring-surface-container-strong  (C212 (5))
ring-tertiary-transparent-overlay   →  ring-tertiary-container-strong  (C212 (5))
ring-warning-transparent-overlay    →  ring-warning-container-strong  (C212 (5))
stripe-surface-transparent-overlay  →  stripe-surface-container-strong  (C212 (5))
bg-error-transparent                →  bg-error-state  (C212 (5))
bg-primary-transparent              →  bg-primary-state  (C212 (5))
bg-secondary-transparent            →  bg-secondary-state  (C212 (5))
bg-success-transparent              →  bg-success-state  (C212 (5))
bg-surface                          →  bg-surface-area  (C212 (5))
bg-surface-transparent              →  bg-surface-state  (C212 (5))
bg-tertiary-transparent             →  bg-tertiary-state  (C212 (5))
bg-warning-transparent              →  bg-warning-state  (C212 (5))
border-surface                      →  border-surface-area  (C212 (5))
drop-shadow-surface                 →  drop-shadow-surface-area  (C212 (5))
fill-error-transparent              →  fill-error-state  (C212 (5))
fill-primary-transparent            →  fill-primary-state  (C212 (5))
fill-secondary-transparent          →  fill-secondary-state  (C212 (5))
fill-success-transparent            →  fill-success-state  (C212 (5))
fill-surface                        →  fill-surface-area  (C212 (5))
fill-surface-transparent            →  fill-surface-state  (C212 (5))
fill-tertiary-transparent           →  fill-tertiary-state  (C212 (5))
fill-warning-transparent            →  fill-warning-state  (C212 (5))
ring-offset-surface                 →  ring-offset-surface-area  (C212 (5))
ring-surface                        →  ring-surface-area  (C212 (5))
color-white                         →  color-on-surface-inverse  (C212 (5))
color-black                         →  color-on-surface  (C212 (5))
color-gray                          →  color-on-surface-variant  (C212 (5))
color-gray-0                        →  color-on-surface-inverse  (C212 (5))
color-gray-1                        →  color-on-surface-inverse  (C212 (5))
color-gray-2                        →  color-on-surface-inverse  (C212 (5))
color-gray-3                        →  color-on-surface-inverse  (C212 (5))
color-gray-4                        →  color-on-surface-variant  (C212 (5))
color-gray-5                        →  color-on-surface-variant  (C212 (5))
color-gray-6                        →  color-on-surface-variant  (C212 (5))
color-gray-7                        →  color-on-surface-variant  (C212 (5))
color-gray-8                        →  color-on-surface  (C212 (5))
color-gray-9                        →  color-on-surface  (C212 (5))
color-red                           →  color-error  (C212 (5))
color-red-0                         →  color-on-error  (C212 (5))
color-red-1                         →  color-on-error  (C212 (5))
color-red-2                         →  color-on-error  (C212 (5))
color-red-3                         →  color-error  (C212 (5))
color-red-4                         →  color-error  (C212 (5))
color-red-5                         →  color-error  (C212 (5))
color-red-6                         →  color-error  (C212 (5))
color-red-7                         →  color-error  (C212 (5))
color-red-8                         →  color-error  (C212 (5))
color-red-9                         →  color-error  (C212 (5))
color-orange                        →  color-warning  (C212 (5))
color-orange-0                      →  color-on-warning  (C212 (5))
color-orange-1                      →  color-on-warning  (C212 (5))
color-orange-2                      →  color-on-warning  (C212 (5))
color-orange-3                      →  color-on-warning  (C212 (5))
color-orange-4                      →  color-warning  (C212 (5))
color-orange-5                      →  color-warning  (C212 (5))
color-orange-6                      →  color-warning  (C212 (5))
color-orange-7                      →  color-warning  (C212 (5))
color-orange-8                      →  color-warning  (C212 (5))
color-orange-9                      →  color-warning  (C212 (5))
color-yellow                        →  color-on-warning  (C212 (5))
color-yellow-0                      →  color-on-warning  (C212 (5))
color-yellow-1                      →  color-on-warning  (C212 (5))
color-yellow-2                      →  color-on-warning  (C212 (5))
color-yellow-3                      →  color-on-warning  (C212 (5))
color-yellow-4                      →  color-on-warning  (C212 (5))
color-yellow-5                      →  color-on-warning  (C212 (5))
color-yellow-6                      →  color-on-warning  (C212 (5))
color-yellow-7                      →  color-warning  (C212 (5))
color-yellow-8                      →  color-warning  (C212 (5))
color-yellow-9                      →  color-warning  (C212 (5))
color-green                         →  color-success  (C212 (5))
color-green-0                       →  color-on-success  (C212 (5))
color-green-1                       →  color-on-success  (C212 (5))
color-green-2                       →  color-on-success  (C212 (5))
color-green-3                       →  color-on-success  (C212 (5))
color-green-4                       →  color-success  (C212 (5))
color-green-5                       →  color-success  (C212 (5))
color-green-6                       →  color-success  (C212 (5))
color-green-7                       →  color-success  (C212 (5))
color-green-8                       →  color-success  (C212 (5))
color-green-9                       →  color-on-success-container  (C212 (5))
color-blue                          →  color-primary  (C212 (5))
color-blue-0                        →  color-on-primary  (C212 (5))
color-blue-1                        →  color-on-primary  (C212 (5))
color-blue-2                        →  color-on-primary  (C212 (5))
color-blue-3                        →  color-primary  (C212 (5))
color-blue-4                        →  color-primary  (C212 (5))
color-blue-5                        →  color-primary  (C212 (5))
color-blue-6                        →  color-primary  (C212 (5))
color-blue-7                        →  color-primary  (C212 (5))
color-blue-8                        →  color-on-primary-container  (C212 (5))
color-blue-9                        →  color-on-primary-container  (C212 (5))
color-purple                        →  color-tertiary  (C212 (5))
color-purple-0                      →  color-on-tertiary  (C212 (5))
color-purple-1                      →  color-on-tertiary  (C212 (5))
color-purple-2                      →  color-on-tertiary  (C212 (5))
color-purple-3                      →  color-tertiary  (C212 (5))
color-purple-4                      →  color-tertiary  (C212 (5))
color-purple-5                      →  color-tertiary  (C212 (5))
color-purple-6                      →  color-tertiary  (C212 (5))
color-purple-7                      →  color-tertiary  (C212 (5))
color-purple-8                      →  color-on-tertiary-container  (C212 (5))
color-purple-9                      →  color-on-tertiary-container  (C212 (5))
color-pink                          →  color-tertiary  (C212 (5))
color-pink-0                        →  color-on-tertiary  (C212 (5))
color-pink-1                        →  color-on-tertiary  (C212 (5))
color-pink-2                        →  color-on-tertiary  (C212 (5))
color-pink-3                        →  color-tertiary  (C212 (5))
color-pink-4                        →  color-tertiary  (C212 (5))
color-pink-5                        →  color-tertiary  (C212 (5))
color-pink-6                        →  color-tertiary  (C212 (5))
color-pink-7                        →  color-tertiary  (C212 (5))
color-pink-8                        →  color-tertiary  (C212 (5))
color-pink-9                        →  color-tertiary  (C212 (5))
bg-white                            →  bg-surface-page  (C212 (5))
bg-black                            →  bg-surface-inverse  (C212 (5))
bg-gray                             →  bg-surface-inverse  (C212 (5))
bg-gray-0                           →  bg-surface-area  (C212 (5))
bg-gray-1                           →  bg-surface-area  (C212 (5))
bg-gray-2                           →  bg-surface-container-strong  (C212 (5))
bg-gray-3                           →  bg-surface-container-strong  (C212 (5))
bg-gray-4                           →  bg-surface-container-strong  (C212 (5))
bg-gray-5                           →  bg-surface-inverse  (C212 (5))
bg-gray-6                           →  bg-surface-inverse  (C212 (5))
bg-gray-7                           →  bg-surface-inverse  (C212 (5))
bg-gray-8                           →  bg-surface-inverse  (C212 (5))
bg-gray-9                           →  bg-surface-inverse  (C212 (5))
bg-red                              →  bg-error  (C212 (5))
bg-red-0                            →  bg-error-container  (C212 (5))
bg-red-1                            →  bg-error-container-strong  (C212 (5))
bg-red-2                            →  bg-error-container-strong  (C212 (5))
bg-red-3                            →  bg-error-container-strong  (C212 (5))
bg-red-4                            →  bg-error  (C212 (5))
bg-red-5                            →  bg-error  (C212 (5))
bg-red-6                            →  bg-error  (C212 (5))
bg-red-7                            →  bg-error  (C212 (5))
bg-red-8                            →  bg-error  (C212 (5))
bg-red-9                            →  bg-error  (C212 (5))
bg-orange                           →  bg-warning  (C212 (5))
bg-orange-0                         →  bg-warning-container  (C212 (5))
bg-orange-1                         →  bg-warning-container  (C212 (5))
bg-orange-2                         →  bg-warning-container-strong  (C212 (5))
bg-orange-3                         →  bg-warning-container-strong  (C212 (5))
bg-orange-4                         →  bg-warning-container-strong  (C212 (5))
bg-orange-5                         →  bg-warning  (C212 (5))
bg-orange-6                         →  bg-warning  (C212 (5))
bg-orange-7                         →  bg-warning  (C212 (5))
bg-orange-8                         →  bg-warning  (C212 (5))
bg-orange-9                         →  bg-warning  (C212 (5))
bg-yellow                           →  bg-warning-container-strong  (C212 (5))
bg-yellow-0                         →  bg-warning-container  (C212 (5))
bg-yellow-1                         →  bg-warning-container  (C212 (5))
bg-yellow-2                         →  bg-warning-container  (C212 (5))
bg-yellow-3                         →  bg-warning-container-strong  (C212 (5))
bg-yellow-4                         →  bg-warning-container-strong  (C212 (5))
bg-yellow-5                         →  bg-warning-container-strong  (C212 (5))
bg-yellow-6                         →  bg-warning-container-strong  (C212 (5))
bg-yellow-7                         →  bg-warning-container-strong  (C212 (5))
bg-yellow-8                         →  bg-warning  (C212 (5))
bg-yellow-9                         →  bg-warning  (C212 (5))
bg-green                            →  bg-success  (C212 (5))
bg-green-0                          →  bg-success-container  (C212 (5))
bg-green-1                          →  bg-success-container  (C212 (5))
bg-green-2                          →  bg-success-container-strong  (C212 (5))
bg-green-3                          →  bg-success-container-strong  (C212 (5))
bg-green-4                          →  bg-success-container-strong  (C212 (5))
bg-green-5                          →  bg-success  (C212 (5))
bg-green-6                          →  bg-success  (C212 (5))
bg-green-7                          →  bg-success  (C212 (5))
bg-green-8                          →  bg-success  (C212 (5))
bg-green-9                          →  bg-success  (C212 (5))
bg-blue                             →  bg-primary  (C212 (5))
bg-blue-0                           →  bg-primary-container  (C212 (5))
bg-blue-1                           →  bg-primary-container  (C212 (5))
bg-blue-2                           →  bg-primary-container-strong  (C212 (5))
bg-blue-3                           →  bg-primary-container-strong  (C212 (5))
bg-blue-4                           →  bg-primary  (C212 (5))
bg-blue-5                           →  bg-primary  (C212 (5))
bg-blue-6                           →  bg-primary  (C212 (5))
bg-blue-7                           →  bg-primary  (C212 (5))
bg-blue-8                           →  bg-primary  (C212 (5))
bg-blue-9                           →  bg-primary  (C212 (5))
bg-purple                           →  bg-tertiary  (C212 (5))
bg-purple-0                         →  bg-tertiary-container  (C212 (5))
bg-purple-1                         →  bg-tertiary-container-strong  (C212 (5))
bg-purple-2                         →  bg-tertiary-container-strong  (C212 (5))
bg-purple-3                         →  bg-tertiary-container-strong  (C212 (5))
bg-purple-4                         →  bg-tertiary  (C212 (5))
bg-purple-5                         →  bg-tertiary  (C212 (5))
bg-purple-6                         →  bg-tertiary  (C212 (5))
bg-purple-7                         →  bg-tertiary  (C212 (5))
bg-purple-8                         →  bg-tertiary  (C212 (5))
bg-purple-9                         →  bg-tertiary  (C212 (5))
bg-pink                             →  bg-tertiary  (C212 (5))
bg-pink-0                           →  bg-tertiary-container  (C212 (5))
bg-pink-1                           →  bg-tertiary-container-strong  (C212 (5))
bg-pink-2                           →  bg-tertiary-container-strong  (C212 (5))
bg-pink-3                           →  bg-tertiary-container-strong  (C212 (5))
bg-pink-4                           →  bg-tertiary  (C212 (5))
bg-pink-5                           →  bg-tertiary  (C212 (5))
bg-pink-6                           →  bg-tertiary  (C212 (5))
bg-pink-7                           →  bg-tertiary  (C212 (5))
bg-pink-8                           →  bg-tertiary  (C212 (5))
bg-pink-9                           →  bg-tertiary  (C212 (5))
border-white                        →  border-surface-page  (C212 (5))
border-black                        →  border-on-surface  (C212 (5))
border-gray                         →  border-on-surface-variant  (C212 (5))
border-gray-0                       →  border-surface-page  (C212 (5))
border-gray-1                       →  border-surface-page  (C212 (5))
border-gray-2                       →  border-outline-variant  (C212 (5))
border-gray-3                       →  border-outline-variant  (C212 (5))
border-gray-4                       →  border-outline  (C212 (5))
border-gray-5                       →  border-on-surface-variant  (C212 (5))
border-gray-6                       →  border-on-surface-variant  (C212 (5))
border-gray-7                       →  border-on-surface-variant  (C212 (5))
border-gray-8                       →  border-on-surface  (C212 (5))
border-gray-9                       →  border-on-surface  (C212 (5))
border-red                          →  border-error  (C212 (5))
border-red-0                        →  border-error-container  (C212 (5))
border-red-1                        →  border-error-container-strong  (C212 (5))
border-red-2                        →  border-error-container-strong  (C212 (5))
border-red-3                        →  border-error-container-strong  (C212 (5))
border-red-4                        →  border-error  (C212 (5))
border-red-5                        →  border-error  (C212 (5))
border-red-6                        →  border-error  (C212 (5))
border-red-7                        →  border-error  (C212 (5))
border-red-8                        →  border-error  (C212 (5))
border-red-9                        →  border-error  (C212 (5))
border-orange                       →  border-warning  (C212 (5))
border-orange-0                     →  border-warning-container  (C212 (5))
border-orange-1                     →  border-warning-container  (C212 (5))
border-orange-2                     →  border-warning-container-strong  (C212 (5))
border-orange-3                     →  border-warning-container-strong  (C212 (5))
border-orange-4                     →  border-warning  (C212 (5))
border-orange-5                     →  border-warning  (C212 (5))
border-orange-6                     →  border-warning  (C212 (5))
border-orange-7                     →  border-warning  (C212 (5))
border-orange-8                     →  border-warning  (C212 (5))
border-orange-9                     →  border-warning  (C212 (5))
border-yellow                       →  border-warning-container-strong  (C212 (5))
border-yellow-0                     →  border-warning-container  (C212 (5))
border-yellow-1                     →  border-warning-container  (C212 (5))
border-yellow-2                     →  border-warning-container  (C212 (5))
border-yellow-3                     →  border-warning-container-strong  (C212 (5))
border-yellow-4                     →  border-warning-container-strong  (C212 (5))
border-yellow-5                     →  border-warning-container-strong  (C212 (5))
border-yellow-6                     →  border-warning-container-strong  (C212 (5))
border-yellow-7                     →  border-warning  (C212 (5))
border-yellow-8                     →  border-warning  (C212 (5))
border-yellow-9                     →  border-warning  (C212 (5))
border-green                        →  border-success  (C212 (5))
border-green-0                      →  border-success-container  (C212 (5))
border-green-1                      →  border-success-container  (C212 (5))
border-green-2                      →  border-success-container-strong  (C212 (5))
border-green-3                      →  border-success-container-strong  (C212 (5))
border-green-4                      →  border-success  (C212 (5))
border-green-5                      →  border-success  (C212 (5))
border-green-6                      →  border-success  (C212 (5))
border-green-7                      →  border-success  (C212 (5))
border-green-8                      →  border-success  (C212 (5))
border-green-9                      →  border-success  (C212 (5))
border-blue                         →  border-primary  (C212 (5))
border-blue-0                       →  border-primary-container  (C212 (5))
border-blue-1                       →  border-primary-container  (C212 (5))
border-blue-2                       →  border-primary-container-strong  (C212 (5))
border-blue-3                       →  border-primary-container-strong  (C212 (5))
border-blue-4                       →  border-primary  (C212 (5))
border-blue-5                       →  border-primary  (C212 (5))
border-blue-6                       →  border-primary  (C212 (5))
border-blue-7                       →  border-primary  (C212 (5))
border-blue-8                       →  border-primary  (C212 (5))
border-blue-9                       →  border-primary  (C212 (5))
border-purple                       →  border-tertiary  (C212 (5))
border-purple-0                     →  border-tertiary-container  (C212 (5))
border-purple-1                     →  border-tertiary-container-strong  (C212 (5))
border-purple-2                     →  border-tertiary-container-strong  (C212 (5))
border-purple-3                     →  border-tertiary  (C212 (5))
border-purple-4                     →  border-tertiary  (C212 (5))
border-purple-5                     →  border-tertiary  (C212 (5))
border-purple-6                     →  border-tertiary  (C212 (5))
border-purple-7                     →  border-tertiary  (C212 (5))
border-purple-8                     →  border-tertiary  (C212 (5))
border-purple-9                     →  border-tertiary  (C212 (5))
border-pink                         →  border-tertiary  (C212 (5))
border-pink-0                       →  border-tertiary-container  (C212 (5))
border-pink-1                       →  border-tertiary-container-strong  (C212 (5))
border-pink-2                       →  border-tertiary-container-strong  (C212 (5))
border-pink-3                       →  border-tertiary-container-strong  (C212 (5))
border-pink-4                       →  border-tertiary  (C212 (5))
border-pink-5                       →  border-tertiary  (C212 (5))
border-pink-6                       →  border-tertiary  (C212 (5))
border-pink-7                       →  border-tertiary  (C212 (5))
border-pink-8                       →  border-tertiary  (C212 (5))
border-pink-9                       →  border-tertiary  (C212 (5))
placeholder-disable                 →  placeholder-on-surface-disabled  (C212 (5))
color-disable                       →  color-on-surface-disabled  (C212 (5))
все классы модуля mix-blend-mode    →  без замены  (C187 (5))
все классы модуля filter-brightness  →  без замены  (C187 (5))
все классы модуля filter-contrast   →  без замены  (C187 (5))
все классы модуля filter-grayscale  →  без замены  (C187 (5))
все классы модуля filter-hue-rotate  →  без замены  (C187 (5))
все классы модуля filter-invert     →  без замены  (C187 (5))
все классы модуля filter-opacity    →  без замены  (C187 (5))
все классы модуля filter-saturate   →  без замены  (C187 (5))
все классы модуля filter-sepia      →  без замены  (C187 (5))
все классы модуля backdrop-filer-hue-rotate  →  без замены  (C187 (5))
все классы модуля backdrop-filter-brightness  →  без замены  (C187 (5))
все классы модуля backdrop-filter-contrast  →  без замены  (C187 (5))
все классы модуля backdrop-filter-grayscale  →  без замены  (C187 (5))
все классы модуля backdrop-filter-invert  →  без замены  (C187 (5))
все классы модуля backdrop-filter-opacity  →  без замены  (C187 (5))
все классы модуля backdrop-filter-saturate  →  без замены  (C187 (5))
все классы модуля backdrop-filter-sepia  →  без замены  (C187 (5))
все классы модуля mask-clip         →  без замены  (C187 (5))
все классы модуля mask-composite    →  без замены  (C187 (5))
все классы модуля mask-mode         →  без замены  (C187 (5))
все классы модуля mask-origin       →  без замены  (C187 (5))
все классы модуля mask-position     →  без замены  (C187 (5))
все классы модуля mask-repeat       →  без замены  (C187 (5))
все классы модуля mask-size         →  без замены  (C187 (5))
все классы модуля mask-type         →  без замены  (C187 (5))
gr1-transparent                     →  from-transparent  (C212 (1))
gr1-current                         →  from-current  (C212 (1))
gr1-inherit                         →  from-inherit  (C212 (1))
gr1-surface-0                       →  from-surface-page  (C212 (1))
gr1-surface-page                    →  from-surface-page  (C212 (1))
gr1-surface-1                       →  from-surface-area  (C212 (1))
gr1-surface-area                    →  from-surface-area  (C212 (1))
gr1-on-surface                      →  from-on-surface  (C212 (1))
gr1-primary                         →  from-primary  (C212 (1))
gr1-primary-container               →  from-primary-container  (C212 (1))
gr1-secondary                       →  from-secondary  (C212 (1))
gr1-secondary-container             →  from-secondary-container  (C212 (1))
gr1-tertiary                        →  from-tertiary  (C212 (1))
gr1-tertiary-container              →  from-tertiary-container  (C212 (1))
gr1-success                         →  from-success  (C212 (1))
gr1-warning                         →  from-warning  (C212 (1))
gr1-info                            →  from-info  (C212 (1))
gr2-transparent                     →  via-transparent  (C212 (1))
gr2-current                         →  via-current  (C212 (1))
gr2-inherit                         →  via-inherit  (C212 (1))
gr2-surface-0                       →  via-surface-page  (C212 (1))
gr2-surface-page                    →  via-surface-page  (C212 (1))
gr2-surface-1                       →  via-surface-area  (C212 (1))
gr2-surface-area                    →  via-surface-area  (C212 (1))
gr2-on-surface                      →  via-on-surface  (C212 (1))
gr2-primary                         →  via-primary  (C212 (1))
gr2-primary-container               →  via-primary-container  (C212 (1))
gr2-secondary                       →  via-secondary  (C212 (1))
gr2-secondary-container             →  via-secondary-container  (C212 (1))
gr2-tertiary                        →  via-tertiary  (C212 (1))
gr2-tertiary-container              →  via-tertiary-container  (C212 (1))
gr2-success                         →  via-success  (C212 (1))
gr2-warning                         →  via-warning  (C212 (1))
gr2-info                            →  via-info  (C212 (1))
gr3-transparent                     →  to-transparent  (C212 (1))
gr3-current                         →  to-current  (C212 (1))
gr3-inherit                         →  to-inherit  (C212 (1))
gr3-surface-0                       →  to-surface-page  (C212 (1))
gr3-surface-page                    →  to-surface-page  (C212 (1))
gr3-surface-1                       →  to-surface-area  (C212 (1))
gr3-surface-area                    →  to-surface-area  (C212 (1))
gr3-on-surface                      →  to-on-surface  (C212 (1))
gr3-primary                         →  to-primary  (C212 (1))
gr3-primary-container               →  to-primary-container  (C212 (1))
gr3-secondary                       →  to-secondary  (C212 (1))
gr3-secondary-container             →  to-secondary-container  (C212 (1))
gr3-tertiary                        →  to-tertiary  (C212 (1))
gr3-tertiary-container              →  to-tertiary-container  (C212 (1))
gr3-success                         →  to-success  (C212 (1))
gr3-warning                         →  to-warning  (C212 (1))
gr3-info                            →  to-info  (C212 (1))
from-surface-0                      →  from-surface-page  (C212 (1))
from-surface-1                      →  from-surface-area  (C212 (1))
via-surface-0                       →  via-surface-page  (C212 (1))
via-surface-1                       →  via-surface-area  (C212 (1))
to-surface-0                        →  to-surface-page  (C212 (1))
to-surface-1                        →  to-surface-area  (C212 (1))
gr1-surface-2                       →  from-surface-area  (C212 (1))
gr2-surface-2                       →  via-surface-area  (C212 (1))
gr3-surface-2                       →  to-surface-area  (C212 (1))
from-surface-2                      →  from-surface-area  (C212 (1))
via-surface-2                       →  via-surface-area  (C212 (1))
to-surface-2                        →  to-surface-area  (C212 (1))
gr-line-2                           →  bg-gradient-to-r  (C212 (1))
gr-line-3                           →  bg-gradient-to-r  (C212 (1))
gr-radial-2                         →  gradient-glow  (C212 (1))
gr-radial-3                         →  gradient-glow  (C212 (1))
gr-conic-2                          →  без замены  (C212 (1))
gr-conic-3                          →  без замены  (C212 (1))
from-, via-, to-<role>-<tone> (семейство)  →  …-… (той же ступени)  (C212 (1))
from-, via-<hue>-<tone> (семейство)  →  gradient-color-… (той же ступени)  (C212 (1))
to-<hue>-<tone> (семейство)         →  gradient-to-… (той же ступени)  (C212 (1))
from-, via-neutral-<tone> (семейство)  →  gradient-color-gray  (C212 (1))
to-neutral-<tone> (семейство)       →  gradient-to-gray  (C212 (1))
ease-in                             →  ease-exit  (C187 (6))
ease-out                            →  ease-enter  (C187 (6))
ease-in-out                         →  ease-move  (C187 (6))
animation-from-bottom               →  без замены  (C187 (6))
animation-from-left                 →  без замены  (C187 (6))
animation-from-right                →  без замены  (C187 (6))
все классы модуля transition-delay  →  без замены  (C187 (6))
все классы модуля will-change       →  без замены  (C187 (6))
sf-tab                              →  sf-tabs  (C187 (8))
sf-emoji                            →  без замены  (C187 (8))
sf-outline                          →  без замены  (C187 (8))
sf-hide-show                        →  без замены  (C187 (8))
justify-start                       →  content-main-start  (C212 (2))
justify-end                         →  content-main-end  (C212 (2))
justify-center                      →  content-main-center  (C212 (2))
justify-between                     →  content-main-between  (C212 (2))
justify-around                      →  content-main-around  (C212 (2))
justify-evenly                      →  content-main-evenly  (C212 (2))
start-start                         →  content-main-start items-cross-start  (C212 (2))
start-center                        →  content-main-start items-cross-center  (C212 (2))
start-end                           →  content-main-start items-cross-end  (C212 (2))
center-start                        →  content-main-center items-cross-start  (C212 (2))
center-center                       →  content-main-center items-cross-center  (C212 (2))
center-end                          →  content-main-center items-cross-end  (C212 (2))
end-start                           →  content-main-end items-cross-start  (C212 (2))
end-center                          →  content-main-end items-cross-center  (C212 (2))
end-end                             →  content-main-end items-cross-end  (C212 (2))
sf-doc-example                      →  без замены  (C187 (8))
sf-doc-pair                         →  без замены  (C187 (8))
sf-doc-source                       →  без замены  (C187 (8))
sf-doc-lead                         →  без замены  (C187 (8))
sf-doc-code                         →  без замены  (C187 (8))
sf-doc-checkerboard                 →  без замены  (C187 (8))
sf-doc-stripes                      →  без замены  (C187 (8))
editor--default                     →  sf-editor-overlay  (C170)
sf-tabs--full                       →  sf-tabs  (C96 (1))
sf-step--stage-default              →  sf-step--state-ahead  (C187 (1), C134, C101)
sf-step--stage-completed            →  sf-step--state-done  (C187 (1), C134, C101)
sf-step--stage-error                →  sf-step--state-error  (C187 (1), C134, C101)
sf-steps-separator--directional     →  без замены  (C187 (1), C134, C101)
sf-page-number--circle              →  sf-page-number--square  (C237)
sf-menu--framed                     →  sf-menu  (C238)
sf-online-indicator--offline        →  без замены  (C152 (5), C185 (8))
sf-avatar-group--size-1/4           →  sf-avatar-group  (C152 (6))
sf-avatar-group--size-1/3           →  sf-avatar-group  (C152 (6))
sf-avatar-group--size-1/2           →  sf-avatar-group  (C152 (6))
sf-avatar-card--portrait-9x16       →  sf-avatar-card--portrait  (C230)
print-block                         →  print-only  (C212 (6))
print-inline                        →  print-only  (C212 (6))
print-inline-block                  →  print-only  (C212 (6))
print-flex                          →  print-only  (C212 (6))
print-inline-flex                   →  print-only  (C212 (6))
print-table                         →  print-only  (C212 (6))
print-visible-none                  →  print-invisible  (C212 (6))
layout-col-auto                     →  без замены  (C212)
grid-row-auto                       →  row-auto  (C212)
grid-row-span-1                     →  row-span-1  (C212)
grid-row-span-2                     →  row-span-2  (C212)
grid-row-span-3                     →  row-span-3  (C212)
grid-row-span-4                     →  row-span-4  (C212)
grid-row-span-5                     →  row-span-5  (C212)
grid-row-span-6                     →  row-span-6  (C212)
grid-row-span-full                  →  row-span-full  (C212)
-m-auto                             →  без замены  (IN-4 (RG-UT-L))
-m-top-auto                         →  без замены  (IN-4 (RG-UT-L))
-m-bottom-auto                      →  без замены  (IN-4 (RG-UT-L))
-m-inline-start-auto                →  без замены  (IN-4 (RG-UT-L))
-m-inline-end-auto                  →  без замены  (IN-4 (RG-UT-L))
-m-inline-auto                      →  без замены  (IN-4 (RG-UT-L))
-m-block-auto                       →  без замены  (IN-4 (RG-UT-L))
bg-left                             →  bg-inline-start  (C212)
bg-left-top                         →  bg-inline-start-top  (C212)
bg-left-bottom                      →  bg-inline-start-bottom  (C212)
bg-right                            →  bg-inline-end  (C212)
bg-right-top                        →  bg-inline-end-top  (C212)
bg-right-bottom                     →  bg-inline-end-bottom  (C212)
blur                                →  blur-medium  (C212)
backdrop-blur                       →  backdrop-blur-medium  (C212)
radius-square                       →  radius-0  (C212)
radius-top-square                   →  radius-top-0  (C212)
radius-bottom-square                →  radius-bottom-0  (C212)
radius-inline-start-square          →  radius-inline-start-0  (C212)
radius-inline-end-square            →  radius-inline-end-0  (C212)
radius-top-inline-start-square      →  radius-top-inline-start-0  (C212)
radius-top-inline-end-square        →  radius-top-inline-end-0  (C212)
radius-bottom-inline-start-square   →  radius-bottom-inline-start-0  (C212)
radius-bottom-inline-end-square     →  radius-bottom-inline-end-0  (C212)
tracking-no-tracking                →  tracking-normal  (C212)
aspect-9x16                         →  aspect-3x4  (C264)
aspect-1x2                          →  aspect-3x4  (C264)
aspect-2x3                          →  aspect-3x4  (C264)
aspect-2x1                          →  aspect-16x9  (C264)
aspect-3x1                          →  aspect-21x9  (C264)
aspect-4x1                          →  aspect-21x9  (C264)
scroll-mt-* (семейство)             →  scroll-m-top-… (той же ступени)  (C266)
scroll-mb-* (семейство)             →  scroll-m-bottom-… (той же ступени)  (C266)
scroll-my-* (семейство)             →  scroll-m-block-… (той же ступени)  (C266)
scroll-pt-* (семейство)             →  scroll-p-top-… (той же ступени)  (C266)
scroll-pb-* (семейство)             →  scroll-p-bottom-… (той же ступени)  (C266)
scroll-pl-* (семейство)             →  scroll-p-inline-start-… (той же ступени)  (C266)
scroll-pr-* (семейство)             →  scroll-p-inline-end-… (той же ступени)  (C266)
scroll-px-* (семейство)             →  scroll-p-x-… (той же ступени)  (C266)
scroll-py-* (семейство)             →  scroll-p-y-… (той же ступени)  (C266)
pointer-event-* (семейство)         →  pointer-events-… (той же ступени)  (C268)
scale-1/4                           →  scale-80  (C271)
scale-1/3                           →  scale-90  (C271)
scale-1/2                           →  scale-95  (C271)
scale-1                             →  scale-100  (C271)
scale-2                             →  scale-105  (C271)
scale-3                             →  scale-110  (C271)
scale-4                             →  scale-120  (C271)
scale-x-1/4                         →  scale-x-80  (C271)
scale-x-1/3                         →  scale-x-90  (C271)
scale-x-1/2                         →  scale-x-95  (C271)
scale-x-1                           →  scale-x-100  (C271)
scale-x-2                           →  scale-x-105  (C271)
scale-x-3                           →  scale-x-110  (C271)
scale-x-4                           →  scale-x-120  (C271)
scale-y-1/4                         →  scale-y-80  (C271)
scale-y-1/3                         →  scale-y-90  (C271)
scale-y-1/2                         →  scale-y-95  (C271)
scale-y-1                           →  scale-y-100  (C271)
scale-y-2                           →  scale-y-105  (C271)
scale-y-3                           →  scale-y-110  (C271)
scale-y-4                           →  scale-y-120  (C271)
все классы модуля transform-skew    →  без замены  (C272)
d1                                  →  sf-display-1  (C274)
display1                            →  sf-display-1  (C274)
d2                                  →  sf-display-2  (C274)
display2                            →  sf-display-2  (C274)
d3                                  →  sf-display-3  (C274)
display3                            →  sf-display-3  (C274)
d4                                  →  sf-display-4  (C274)
display4                            →  sf-display-4  (C274)
d5                                  →  sf-display-5  (C274)
display5                            →  sf-display-5  (C274)
d6                                  →  sf-display-6  (C274)
display6                            →  sf-display-6  (C274)
text                                →  text-1  (C274)
text-medium                         →  text-1  (C274)
text-small                          →  text-1/2  (C274)
text-large                          →  text-2  (C274)
label                               →  text-1/3  (C274)
label-medium                        →  text-1/3  (C274)
label-small                         →  text-1/4  (C274)
label-large                         →  sf-label-large  (C274)
body-text                           →  text-1  (C274)
body-text-medium                    →  text-1  (C274)
body-text-small                     →  text-1/2  (C274)
body-text-large                     →  text-2  (C274)
все классы модуля scroll-slider-color  →  без замены  (C208 (2), (3))
все классы модуля scroll-slider-width  →  без замены  (C208 (2), (3))
все классы модуля scroll-backdrop-width  →  без замены  (C208 (2), (3))
все классы модуля scroll-hover      →  без замены  (C210 (5))
все классы модуля scroll-subtle     →  без замены  (C210 (5))
все классы модуля scroll-backdrop-color  →  без замены  (C210 (5))
все классы модуля scroll-backdrop-radius  →  без замены  (C210 (5))
все классы модуля scroll-slider-radius  →  без замены  (C210 (5))
scrollbar                           →  без замены  (C210 (5))
```

## Связь с другими частями

- Из чего состоит поставка по смыслу (ядро, утилиты, компоненты) — [Уровни Framework](/ru/guide/introduction/levels/#уровни-framework) и [Из чего состоит Framework](/ru/guide/introduction/structure/).
- Пакеты продуктов: где живут, как собираются и закрепляются, лицензия — [Пакеты компонентов продуктов](/ru/guide/introduction/structure/#пакеты-компонентов-продуктов).
- Тема на `<html>` — [Темы](/ru/guide/colour/themes/#темы); токены, которые приносит `core.css`, — [Дизайн-токены](/ru/guide/colour/design-tokens/).
- Лестница размеров и адаптивная типографика — [Адаптивные размеры](/ru/guide/size-and-type/adaptive-sizing/), [Одна лестница размеров](/ru/guide/size-and-type/size-ladder/) и [Типографика](/ru/guide/size-and-type/typography/).
- Классы и условия, по которым Loader выбирает модули, — [Как устроено имя утилиты](/ru/guide/utilities/naming/), [Условия действия](/ru/guide/utilities/conditions/) и [Как утилиты попадают на страницу](/ru/guide/utilities/loading/).
- Смарт-компоненты, их база, шаблоны и события — раздел [Смарт-компоненты](/ru/guide/smart-components/) ([Папка компонента и манифест](/ru/guide/smart-components/folder/), [Разметка и шаблоны](/ru/guide/smart-components/markup/), [На странице](/ru/guide/smart-components/page/)).
- Проверки качества и работа с ИИ — [Как Framework проверяет себя](/ru/guide/standards/framework-checks/)–[Работа с ИИ](/ru/guide/standards/ai/#работа-с-ии).
