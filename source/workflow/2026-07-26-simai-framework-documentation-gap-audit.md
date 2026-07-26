# Аудит полноты документации SIMAI Framework

Дата проверки: 2026-07-26

Язык документации: русский

Статус: завершённый source audit, требуется исправление документации и release lock

## 1. Итог в одном абзаце

Русская документация уже содержит большой раздел утилит, но пока не является
полным и надёжным справочником SIMAI Framework. В локально опубликованной
версии есть 217 детальных страниц утилит, однако 47 из них короче 100 слов, в
HTML-примерах найдено 57 уникальных классов, отсутствующих в текущем CSS, а
часть цветовых переменных и адаптивных возможностей описана не по фактическому
runtime. Для обычных компонентов детально описаны только кнопки при 58 правилах
загрузчика; для 41 загружаемого Smart Component нет ни одной индивидуальной
reference-страницы. Дополнительно обнаружены ошибки самого дистрибутива:
сломанный loader rule для `hover:hue-rotate-*`, отсутствующая relation градиента,
девять каталогов Smart Components без правил загрузчика и неполная metadata.

Главный вывод: следующий этап должен быть не «добавить ещё текста», а собрать
версионируемый каталог контрактов из исходников и только из него генерировать
или проверять reference-страницы, примеры, типы и release matrix.

## 2. Граница и источники проверки

Проверены:

- Core, loader, utilities и обычные компоненты:
  `/Users/rim/Documents/GitHub/ui`;
- отдельный репозиторий компонентов:
  `/Users/rim/Documents/GitHub/ui-components`;
- Smart Components:
  `/Users/rim/Documents/GitHub/ui-smart`;
- референсное приложение админки:
  `/Users/rim/Documents/GitHub/ui-admin`;
- исходники и локальная сборка документации:
  `/Users/rim/Documents/GitHub/ui-doc`;
- исходный большой файл:
  `/Users/rim/Downloads/SIMA Framework UI Utilities v5.3 (полное описание).docx (1).md`.

Компоненты и Smart Components проверялись по runtime-правилам и поставляемым
assets. Исходный большой файл использовался только как источник требований и
старого описания утилит: он не содержит полноценного каталога компонентов.

### 2.1. Зафиксированные ревизии

| Контур | Проверенная ревизия | Состояние версии |
| --- | --- | --- |
| `ui` | `origin/main` `ff47bd694b6c0ed61b7ad4824f986d99b150cbea` | `VERSION=5.3.2`; 13 коммитов после `v5.3.2`; README всё ещё называет 5.3.1 |
| `ui-smart` | `origin/main` `b57afb30c9b790212afcf451e16ae6e27a5ab6af` | `VERSION=5.3.1`; 4 коммита после `v5.3.1` |
| `ui-components` | нет коммитов | пустой репозиторий, `origin/main` отсутствует |
| `ui-admin` | `main` `2924266b9f4b1e34aeff6843ab6a810f519237d8` | lock на более раннюю пару `ui@ecd8e3af` + `ui-smart@e28eccc` |
| `ui-doc`, рабочая ветка | `84435d8009900f561bcc9f2f5193e7c8d561bebd` | ветка `codex/simai-framework-docs-ru-54`, есть несвязанные локальные изменения |
| `ui-doc`, remote main | `85148eb2c0ba0b21d497ecb912085337a37a7d88` | содержит более новые adaptive/RTL/scrollbar материалы, но также возвращает нежелательную страницу version matrix |
| исходник локальной публикации | `530b72a8effa866a9939018162c6aa68d53f144e` | 366 HTML-страниц в `build_production/ru` |

### 2.2. Важное ограничение по версии 5.4

По продуктовому решению текущую документационную baseline следует называть
`5.4.0`. При этом в проверенных source-репозиториях нет тегов `v5.4.0` и нет
единого immutable compatibility lock для Core + Smart + docs. Поэтому в тексте
можно указывать целевую baseline `5.4.0`, но нельзя выдавать текущие `main` или
`latest` за опубликованный релиз 5.4.0. Сначала нужно утвердить пару ревизий,
исправить P0-дефекты, выпустить теги и только затем сделать runnable quickstart.

## 3. Сводная матрица покрытия

| Слой | Фактически найдено | Детально описано | Основной разрыв |
| --- | ---: | ---: | --- |
| Loader rules | 742 | частично | документация не строится из rules и не проверяет assets |
| Utility rules | 640 правил / 226 семейств | 196 семейств связаны через `!rtags` | 30 семейств не связаны с reference; 57 недействительных классов в примерах |
| Обычные компоненты | 58 loader rules / 77 каталогов assets | 1 индивидуальная страница (`buttons`) | 57 контрактов без детальных страниц; 19 каталогов без component rule требуют классификации |
| Smart Components | 41 loader rules / 50 каталогов assets | 0 индивидуальных страниц | 41 контракт без reference; 9 каталогов без loader rule |
| Smart metadata | 41 загружаемый tag | metadata только для 2 tags | metadata непригодна как полный каталог API |
| Типы в `ui-admin` | 41 runtime tag | create-union покрывает 27 | 14 runtime tags отсутствуют в app-local create types |
| Локальная RU-публикация | 366 HTML-страниц | ссылки структурно целы | публикация отстаёт от `origin/main` и не имеет immutable runtime ref |

Полный машинный набор сформирован локально в
`source/output/framework-gap-audit/inventory.json` и `inventory.md`. Каталог
`source/output` является воспроизводимым ignored output, а все итоговые числа
и выводы, необходимые для решения, продублированы в этом отчёте.

## 4. Что есть в утилитах, но отсутствует или неполно описано

### 4.1. Полностью отсутствующие пользовательские reference-контракты

Эти runtime families имеют отдельные loader rules, но на сайте нет полноценной
страницы с точным синтаксисом, значениями, состояниями и примерами:

| Runtime family | Распознаваемые классы | Что добавить |
| --- | --- | --- |
| `background-fake` | `bg-fake` | назначение, создаваемый эффект, ограничения |
| `background-gradient` | `bg-none`, `bg-gradient-to-*` | не смешивать с отдельной legacy-системой `gr-*` |
| `offset` | `offset-<доля>` + breakpoints | сеточная семантика и границы значений |
| `opacity` | `opacity-0..9`, `opacity-full`, `hover:*` | прозрачность элемента, отличие от `filter-opacity-*` |
| `ring-color` | `ring-<role>` + hover/focus | таблица семантических цветов |
| `ring-width` | `ring-0..4` + hover/focus | толщина кольца |
| `ring-offset-color` | `ring-offset-<role>` | цвет подложки кольца |
| `ring-offset-width` | `ring-offset-0..4` | расстояние от элемента |
| `scroll-subtle` | `scroll-subtle` | назначение preset и совместимость браузеров |

### 4.2. Содержание частично есть, но оно не связано с loader rule

Ещё 20 families описаны внутри соседних страниц или раздела «Основы», однако
не указаны в `!rtags`. Из-за этого сайт не имеет машинного соответствия
«страница -> loader rule», а live-пример может не получить все необходимые
assets:

- `background-size-ext`;
- `border-collapse`, `border-spacing`;
- `element-position-ext`, `position`;
- `flex-basis-ext`;
- `font-size`, `headers`;
- `height-ext`, `width-ext`, `max-height-ext`, `max-width-ext`;
- `margin-ext`, `padding-ext`;
- `mix-blend-mode`;
- `scroll-margin-ext`, `scroll-padding-ext`;
- `table-hover`;
- `theme`;
- `transform-translate-ext`.

Для них не всегда нужна отдельная страница. Допустимо оставить материал на
существующей странице, но `!rtags`, таблица классов и проверка примера должны
охватывать все фактически используемые families.

### 4.3. Runtime family, которую нельзя документировать как рабочую

В `rule.json` есть опечатка `filer-hue-rotate/hover`. Loader ожидает asset:

```text
distr/utility/filer-hue-rotate/hover/css/hover.css
```

Такого файла нет. Реальный asset лежит в
`distr/utility/filter-hue-rotate/hover/css/hover.css`. До исправления rules
класс `hover:hue-rotate-*` нельзя считать подтверждённым контрактом.

### 4.4. Сломанная relation градиента

`gradient-type/default` ссылается на отсутствующее правило
`gradient-color-ext/default`. Это означает, что документация может правильно
показать класс типа градиента, но loader не гарантирует загрузку связанного
цветового asset. Relation `fancybox -> jquery` тоже не представлена отдельным
rule, однако там есть явно заданный component-mode и физический jquery asset;
её нужно формализовать валидатором, но не считать тем же дефектом без проверки
семантики loader.

### 4.5. Качество существующих страниц утилит

По локально опубликованному source:

- детальных страниц: 217;
- страниц менее 100 слов: 47;
- страниц без code fence: 19;
- страниц без таблицы: 27;
- каждая страница содержит Playground iframe, но совпадение версии Playground
  с проверяемой парой Core/Smart не зафиксировано;
- в атрибутах `class` найдено 756 уникальных классов, 57 из них не найдены ни
  в Core CSS, ни в utility CSS, ни в component/Smart CSS текущего `main`.

Наиболее показательные ошибки:

| В документации | Фактическое состояние |
| --- | --- |
| `sm-txt-center md-bg-primary lg-p-4` на главной | loader использует `sm:`, `md:`, `lg:`; все три класса отсутствуют |
| `text-left`, `text-right` | текущая система использует другие имена (`t-*`); примеры не работают |
| `left-0`, `right-0`, `float-right`, `clear-left` | после RTL-перехода нужны логические `inline-start` / `inline-end`; классов нет |
| `row-span-2`, `row-start-2`, `row-end-4` | runtime использует `grid-row-*`; примеры не совпадают с CSS |
| `bg-neutral-10/20/30` | соответствующих semantic utility classes нет |
| `bg-success-tonal`, `bg-warning-tonal`, `bg-surface-variant` | названия не соответствуют актуальным color roles |
| `border-red-500`, `border-danger-default` | классы из другой naming-системы |
| `gr-to-right`, `gr-to-top`, `gr1-red-5`, `gr2-purple-5` | legacy-примеры не совпадают с текущим semantic gradient contract |
| `md:italic`, `md:serif`, `md:text-2`, `md:title-2` | для этих families нет responsive rule/assets |
| `w-150` | runtime width ограничен фактически сгенерированным диапазоном |

Машинный список кандидатов сформирован локально в
`source/output/framework-gap-audit/documented-html-classes-missing-runtime.tsv`.
Его нужно разбирать постранично: `sf-card`, `surface` и `w-...` могут быть
демонстрационными placeholder-классами, но их тоже нельзя оставлять в копируемом
пользовательском примере без определения.

## 5. Что есть в обычных компонентах, но отсутствует в документации

`ui-components` пуст. Фактический источник обычных компонентов —
`ui/distr/component` и 58 component rules в `ui/distr/rule/rule.json`.

На сайте есть одна полноценная карточка `buttons`. Остальные 57 правил не имеют
индивидуальных reference-страниц:

```text
accordion, admin-menu, alerts, avatars, badges, breadcrumbs, carousel,
checkbox, clipboard, close, contentDivider, context-menu, country-code,
datepicker, doc, dot, download-file, dropdown, emoji, fab, featured-icon,
file-upload, hideShow, highlight, icon-buttons, icons, inputs, menu, modal,
monaco, pagination, placeholder, progress-bar, progress-scale, quantity,
radio, range-slider, reference-link, scrollbar, skeleton, slider, spinner,
step, swiper, switch, tab, tabs, tags, textarea, theme, theme-builder, toast,
toggle, tooltip, tree, tree-item, verification
```

Не все эти имена должны автоматически становиться публичными компонентами.
Например, `monaco`, `swiper`, `highlight`, `theme-builder` и часть служебных
элементов могут быть dependencies или внутренними подсистемами. Но сейчас сайт
не сообщает ни список, ни статус. Для каждого правила нужен один из статусов:

- public component;
- public integration/plugin;
- dependency/internal asset;
- legacy/deprecated;
- experimental;
- orphan/ошибка сборки.

### 5.1. Каталоги assets без component rule

Найдены 19 каталогов:

```text
ajax, ajaxload, fancybox, file-preview, flags, icon, jquery, lazy-load, link,
list, overbox, overcard, rating, sf-system, share, special, viewbox, waves, wow
```

`fancybox`, `sf-system`, `special` распознаются attribute rules. `jquery` и
часть остальных выглядят как dependencies. `file-preview`, `flags`, `link`,
`list`, `rating` одновременно присутствуют в Smart assets без Smart rule — это
уже интеграционный разрыв, а не только вопрос публичной классификации.

## 6. Что есть в Smart Components, но отсутствует в документации

### 6.1. Подтверждённые loader-контракты

В Core зафиксирован 41 Smart rule:

```text
admin-menu, alert, avatar, avatars, badges, breadcrumbs, buttons, checkbox,
close, context-menu, country-code, datepicker, download-file, dropdown,
file-upload, gallery, icon-buttons, icons, inputs, list-item, modal,
pagination, progress-bar, progress-scale, radio, range-slider, reference-link,
skeleton, slider, spinner, steps, switch, table, tabs, tags, textarea, toast,
toggle, tooltip, tree, tree-item
```

В документации есть только восемь общих методологических страниц: введение,
подключение, lifecycle, assets/templates, каталог без записей, примеры без
конкретных примеров и пустой reference index. Индивидуальных API-страниц нет.

Для каждого Smart Component отсутствуют как минимум:

- custom element tag;
- атрибуты и типы значений;
- default values;
- методы и свойства;
- события и структура `detail`;
- slots/templates;
- зависимости и загружаемые assets;
- минимальный пример;
- доступность и клавиатура;
- версия появления и deprecation status.

### 6.2. Девять Smart-каталогов без loader rule

```text
drawer, editor, fab, file-preview, flags, form, link, list, rating
```

Файлы физически поставляются в `ui-smart/main`, но Core не имеет правил,
которые гарантированно обнаружат и загрузят их. Их нельзя просто добавить в
публичный каталог. Сначала владелец framework должен решить для каждого:

1. добавить rule, tags, relations и tests;
2. пометить как direct-import only;
3. пометить как internal/experimental;
4. удалить orphan assets из публичного дистрибутива.

### 6.3. Metadata и TypeScript API неполны

`ui/distr/smart-component-meta.json` содержит metadata только для
`sf-button` и `sf-icon-button`, хотя loader знает 41 tag. Поэтому он не может
служить источником полного справочника.

В `ui-admin/types/smart-components.d.ts` описано 28 element interfaces, а
`SmartComponentCreateName` покрывает 27 из 41 runtime tags. В create-union нет:

```text
admin-menu, avatar, badge, breadcrumbs, close, country-code, datepicker,
download-file, icon, list-item, tag, tooltip, tree, tree-item
```

При этом `tag` имеет отдельный interface, но не включён в create-union. Типы
лежат в приложении-потребителе, а не рядом с Smart source, поэтому легко
расходятся с runtime.

## 7. Что из исходного большого файла не реализовано или реализовано иначе

Исходный файл нельзя считать спецификацией целиком. В нём смешаны:

- фактическое описание;
- будущие пожелания с прямой пометкой «нужно добавить»;
- устаревшие ссылки и синтаксис;
- внутренние ссылки;
- credential-like строка доступа;
- 30 встроенных изображений.

Credential-like данные и внутренние ссылки не должны попадать ни в отчёты, ни
в публичный репозиторий.

### 7.1. Явные пожелания 5.4.0 из начала файла

| Пожелание | Статус в `ui/main` | Рекомендация |
| --- | --- | --- |
| Удалить роли Success и Warning | не реализовано: обе роли, палитры и utilities присутствуют | не выполнять автоматически; для веб-приложений это полезные semantic roles, нужен отдельный design decision |
| Добавить роль Code | реализовано: `--sf-code--color`, `--background`, `--font-family`, `--radius` | оставить и документировать по факту |
| Добавить тень по умолчанию | не реализовано как отдельный default token/class; есть `shadow-0..5` | сначала определить контракт; в исходной таблице ошибочно повторена переменная Mark |
| Добавить `--sf-radius--ui` | token реализован | интеграция частичная: например buttons продолжают использовать `--sf-radius-default`, отдельного `--sf-button--radius` нет |

### 7.2. Подтверждённые ошибки и устаревшие утверждения файла

| Утверждение файла | Фактический runtime |
| --- | --- |
| подключение `simai/ui-core@main` и `simai/ui-utilities@main` | фактический дистрибутив находится в `simai/ui/distr`; production должен использовать immutable tag/commit |
| адаптивный синтаксис `sm-txt-center` | используется `sm:...` |
| `.heading-1..6`, `.display-1..6` | актуальны `.sf-h-1..6`, `.sf-display-1..6`, `.display1..6`, `.d1..6` |
| `--sf-body-text--family` | переменной нет; используется `--sf-text--family` |
| `--sf-color-primary` | переменной нет; используется `--sf-primary` |
| `--sf-padding--small`, `--sf-font-size--heading` | это иллюстративные, но не существующие runtime tokens |
| широкая поддержка `xxl:` | Core token `--sf-breakpoint-xxl` есть, но loader rules и utility assets `xxl` отсутствуют |
| `--sf-breakpoint-desktop` | отдельного runtime token нет; фактически используется `--sf-breakpoint-lg` |
| `--sf-tertiaty-40` | опечатка; runtime использует `--sf-tertiary-40` |
| `--sf-space--size-0..9` как актуальные значения scroll utilities | этих tokens нет в текущем runtime; страницы scroll-padding используют старую систему |
| `--sf-primary-50--alfa-4/8` и аналоги как универсальная палитра | для ряда ролей текущий Core начинается с alpha 12; таблицы сайта смешивают старую и новую схемы |
| `*-transparent-active` | runtime использует более конкретные `*-transparent-select-*` / `overlay-*` состояния |

### 7.3. Что перенесено из файла на сайт неправильно

В текущих Markdown-страницах найдено 65 literal CSS-variable candidates,
которых нет в проверенном runtime. Часть — placeholders или явно исторические
имена, но подтверждены реальные ошибки в разделах:

- переменные и значения по умолчанию;
- типографика и семейство шрифтов;
- breakpoints mobile/desktop;
- line-height и псевдо-переменные heading;
- цветовые palettes и roles;
- scroll margin/padding;
- background active states;
- links (`tertiaty` typo).

Это означает, что раздел «Основы» нужно проверять тем же source-driven
валидатором, что и утилиты, а не считать описательным текстом вне контракта.

## 8. Изображения и визуальная согласованность

В исходном файле находится 30 встроенных PNG. На сайт перенесены 28 Markdown
ссылок вида `/assets/build/img/b64/<hash>.png`, но в source и в
`build_production` нет ни одного соответствующего файла. Все 28 ссылок ведут на
отсутствующие assets — это причина пустых рамок, которые были видны на сайте.

Нужно:

1. извлечь изображения из data URI исходного файла в отдельный source asset
   directory;
2. дать им смысловые имена, alt-тексты и подписи;
3. проверить, что изображение всё ещё соответствует актуальным tokens;
4. устаревшие схемы не переносить, а заменить живыми swatches или новыми
   диаграммами;
5. добавить image existence check в CI до сборки.

Для цветовых таблиц предпочтительнее генерировать swatches из фактических CSS
variables: это одновременно демонстрация и автоматическая проверка кода цвета.

## 9. Структура документации и ветки

Локальный `ui-doc.test` собран из очищенной ветки и содержит 29 страниц
«Основ», тогда как рабочая ветка содержит 119, а `origin/main` — 117. В
репозитории одновременно присутствуют старые пути `fundamentals/concept/...`
и новые прямые пути. Это создаёт дублирование содержания и риск вернуть
архивный материал при слиянии.

Одновременно `origin/main` содержит более свежие полезные изменения:

- adaptive sizing contract и migration page;
- LTR/RTL corrections;
- scrollbar preset page;
- semantic gradient examples.

Их нельзя сливать вслепую: вместе с ними в `main` присутствует version matrix,
которую ранее решено удалить, а часть старой структуры конфликтует с
очищенной. Нужна содержательная интеграция отдельных изменений в чистую
структуру.

Также осталось восемь употреблений устаревшего технического сокращения для
пятой архитектуры. В публичной документации должно использоваться только имя
`SIMAI Framework`, а номер — только в версиях release/compatibility.

## 10. Проверки и ограничения текущей публикации

Выполнены:

- `php bin/check-docs-integrity.php`;
- `php bin/check-built-docs-links.php`;
- `npm run test:runtime` в `ui-admin`;
- машинная сверка loader rules с assets и gzip;
- сверка `!rtags`, HTML-классов, CSS variables и image references.

Результаты:

- Markdown links: PASS;
- rendered internal links: PASS, 60 992 ссылки, 0 broken;
- exact locked pair materialization в `ui-admin`: PASS;
- loader asset existence: FAIL, 1 utility asset отсутствует;
- loader relation consistency: FAIL/REVIEW, 1 подтверждённо отсутствующая
  utility relation и 1 special direct component relation;
- local docs runtime pin: FAIL — layout использует fallback `latest`;
- content/runtime consistency: FAIL — классы, variables, images и `xxl`
  расходятся с runtime;
- полнота Components/Smart: FAIL.

Итоговый verdict: **CORRECTION_REQUIRED**. Сайт пригоден как расширенный
черновик утилит, но пока не как авторитетная документация всей baseline 5.4.0.

## 11. План работ по документации

### P0. Зафиксировать источник истины и прекратить новые расхождения

1. Утвердить immutable Core/Smart pair для baseline 5.4.0.
2. Исправить loader asset/relation defects до публикации lock.
3. Убрать runtime fallback `latest` из layout документации.
4. Добавить CI-проверки rules/assets, `!rtags`, CSS classes, variables и images.
5. Зафиксировать одну чистую URL-структуру без дублей `fundamentals/concept`.

### P1. Исправить уже опубликованные фактические ошибки

1. Исправить 57 class candidates по machine report.
2. Удалить ложные `xxl:` утверждения либо реализовать `xxl` в runtime.
3. Пересобрать color roles/palette прямо из Core variables.
4. Исправить typography, default variables, scroll spacing и link typo.
5. Извлечь или заменить 28 отсутствующих изображений.
6. Заменить техническое обозначение версии на `SIMAI Framework`.

### P2. Довести каталог утилит

1. Добавить девять полностью отсутствующих utility contracts.
2. Связать ещё 20 embedded families через `!rtags`.
3. Для каждой страницы обеспечить: назначение, синтаксис, exact values,
   states, responsive matrix, RTL, пример, accessibility/browser notes.
4. Разделить current, legacy и deprecated naming.

### P3. Создать настоящий каталог обычных компонентов

1. Классифицировать 58 component rules и 19 нерегистрируемых asset dirs.
2. В первую очередь описать пользовательские controls и layout components:
   inputs, checkbox/radio/switch/toggle, dropdown, modal, tabs, table,
   pagination, file-upload, tree, toast, tooltip, menu.
3. Служебные integrations вынести в отдельную категорию, а не смешивать с UI.
4. Добавить generated component registry и проверенные примеры.

### P4. Создать каталог Smart Components

1. Сначала решить статус девяти orphan directories.
2. Расширить metadata с 2 до всех поддерживаемых tags.
3. Сгенерировать API/reference skeletons из metadata.
4. Добавить ручные sections: use cases, events, accessibility, errors,
   backend integration.
5. Перенести и генерировать TypeScript types в `ui-smart`, а `ui-admin` должен
   их потреблять.

### P5. Интеграция и публикация

1. Перенести полезные adaptive/RTL/scrollbar/gradient изменения из main в
   чистую структуру без возврата version matrix.
2. Собрать сайт на approved lock.
3. Выполнить browser smoke representative matrix.
4. После PASS выпустить baseline 5.4.0; рекомендации следующего этапа могут
   стать основанием для 5.5 или более крупной версии по объёму изменений.

## 12. Acceptance criteria для полноценной документации

Документацию можно считать полноценной, когда:

- у каждого public utility/component/Smart contract есть owner и reference;
- ни одна public запись не строится только из имени каталога;
- все копируемые классы присутствуют в approved CSS;
- все variables существуют в approved runtime или явно помечены legacy;
- все loader rules имеют требуемые assets и relations;
- Smart metadata и TypeScript types покрывают весь public catalog;
- все изображения существуют и имеют alt;
- все runnable examples используют immutable pair;
- `ui-admin` подтверждает ту же пару, что опубликована в docs;
- CI не пропускает drift между source, dist и docs.

## 13. Evidence

- [Workflow аудита](2026-07-26-simai-framework-source-doc-gap-audit.md)
- локальный воспроизводимый output:
  `source/output/framework-gap-audit/inventory.json`;
- локальный краткий машинный отчёт:
  `source/output/framework-gap-audit/inventory.md`;
- локальный список несовпадающих классов:
  `source/output/framework-gap-audit/documented-html-classes-missing-runtime.tsv`;
- [Рекомендации по развитию](2026-07-26-simai-framework-development-recommendations.md)
