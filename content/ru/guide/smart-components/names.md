---
title: "Имена и общие слова"
description: "Как называются смарт-компоненты, их семьи и реестр имён; общий словарь simai.smart-vocabulary: роли экрана записей, ключи, глаголы с русскими словами, слова данных, шаблон имён событий и псевдонимы старых имён с датами."
---

# Имена и общие слова

Имена компонентов и событий подчиняются общим правилам, а глаголы, ключи и
слова данных берутся из общего словаря `simai.smart-vocabulary` 1.1.5. Так
одно и то же действие во всех компонентах называется одинаково, а Студия и
порты хоста опираются на одну карту.

## Имя тега говорит, что это

- Тег идёт от общего к частному: `sf-[набор]-<семья>[-<вариант>]`.
  **Семья — в начале**, вариант — за ней: `sf-button-icon`,
  `sf-input-date`, `sf-menu-context`, `sf-header-page`, `sf-view-table`.
- **Семья** — что это за деталь: `button`, `input`, `menu`, `header`,
  `view`, `slider`. Главный член семьи носит одно её имя: `sf-button`,
  `sf-input`, `sf-menu`, `sf-view`. Остальные добавляют вариант:
  `sf-button`, `sf-button-icon`, `sf-button-copy`, `sf-button-close`.
- **Набор** ставится впереди, только если компонент живёт лишь внутри
  своего набора: `sf-admin-menu`, `sf-chat-threads`, `sf-chat-composer`.
  Общая деталь имени набора не носит.
- Деталь без родни — одна семья из одного слова: `sf-modal`, `sf-tabs`.
  Детали, похожие только ролью (хлебные крошки, шаги, страницы), — разные
  семьи, а не одна.
- Вид одной детали — её настройки, а не новое имя: таблица, которая
  выглядит иначе, остаётся `sf-view-table`.
- После приставки — не больше трёх слов.

## Чего в имени нет

| Нельзя | Почему | Вместо этого |
|:---|:---|:---|
| вид или расположение: compact, horizontal, dark, big | это настройки и шаблоны | `sf-admin-menu` с `compact`, а не `sf-admin-menu-compact` |
| место или продукт: `larena`, `bitrix`, `simai`, имена экранов | компонент переходит между экранами и продуктами | имя по назначению |
| `--`, `__`, `.` | так в классовой разметке пишутся модификаторы и элементы (`.sf-menu--compact`) | одно слово через дефис |
| версия | версия живёт в манифесте | поле `version` |

## Семья, приставка и реестр

- Манифест называет семью компонента: `"family": "menu"`. Каталог,
  документация и Студия группируют по семье, поэтому все меню видны вместе,
  как бы они ни назывались.
- **Одна приставка `sf-`** — для SIMAI Framework и всех
  [наборов компонентов](/ru/guide/sets/) SIMAI.
- **Семьёй владеет кто-то один.** Паспорт набора перечисляет семьи, которые
  ему принадлежат (`admin`, `chat`, `mail`, `view`…); общий реестр не
  пропускает семью, которую заявили два набора, и имя, которое уже занято.
  Подробнее — [Имена в наборах](/ru/guide/sets/names/).
- **Общее — в SIMAI Framework.** Деталь, нужная больше чем одному набору,
  уходит из набора в SIMAI Framework и становится общим смарт-компонентом;
  набор собирает свои экраны из неё.
- Компонент, который сделал продукт, переезжает в набор или в
  SIMAI Framework с именем `sf-` и сохраняет старое как псевдоним с датой:
  `sf-chat-composer` сделан в UI Chat и переехал в набор `chat`.
- **Пакет партнёра или проекта** берёт свою приставку, никогда не `sf-` —
  см. [Пакеты партнёров и проектов](/ru/guide/smart-components/packages/).
- Слова продукта, места и вида, которых нет в именах, проверка берёт из
  списка `naming-words.json`, который поставляется со стандартом.
- Внутри сборки части называются **ролями** (`search`, `list`, `source`).
  Имена ролей живут только внутри своей сборки и с тегами не пересекаются.

## Роли экрана записей

Экран записей — раздел админки Larena, окно чата, почтовый ящик — собирается
из этих ролей; продукт берёт нужные.

| Роль | Что делает | Где сейчас |
|:---|:---|:---|
| `source` | спрашивает данные у хоста через порт по `collection`, `query`, `filters`, `sort` и `page`; применяет только новейший ответ (`concurrency: latest`); вычисляет состояние данных; сообщает о присланном без запроса и о потоках фактами | порты представления данных и свойств, порт чата |
| `search` | текстовый запрос | поиск таблицы и админ-меню |
| `filter` | условия на записи | фильтры таблицы |
| `list` | показывает записи; открывает одну, выбирает несколько | `sf-view-table`, `sf-view`, `sf-chat-threads` |
| `pagination` | страница, размер страницы, полоса массовых действий | `sf-pagination` |
| `feed` | лента, новое внизу, раннее по запросу | `sf-message-log` (станет общим `sf-view-feed`) |
| `record` | показывает и правит одну запись | `sf-view-properties` |
| `actions` | команды для выбранного или записи | панель инструментов, действия строки |
| `composer` | пишет новую запись | поле ввода UI Chat |
| `confirm` | спрашивает перед изменением, отвечает отпечатком | `sf-confirm-change` |
| `navigation` | где человек; переход между разделами | `sf-admin-menu` |

## Ключи экрана

| Ключ | Тип | Слово | Обычный хозяин |
|:---|:---|:---|:---|
| `query` | string | текст поиска | search |
| `filters` | object | фильтр | filter |
| `sort` | список `[{key, direction}]`, `direction` — `asc` или `desc`; первым идёт главный столбец | порядок | list; изменение человеком — просьба, порядок пишет хост |
| `sort-hint` | object | подсказка порядка | source |
| `page` | number, с 1 | страница | pagination; новый запрос сам страницу не сдвигает — на первую её возвращает правило на `data.query`; навигация по продолжению читает ключ записи `cursor` |
| `page-size` | number | записей на странице | pagination |
| `items` | list | записи | source |
| `total` | number или null | число записей | source |
| `total-exact` | boolean | точное число | source |
| `has-more` | boolean | есть ещё | source |
| `state` | state | состояние | source |
| `capabilities` | list | возможности | source; элемент управления появляется, только если хост заявил возможность |
| `selected` | string | код записи | list |
| `selection` | list of string | коды записей | list |
| `record` | object | запись | source |
| `address` | string | адрес | source |
| `saved-view` | `{id, layer, target}` | сохранённый вид | list; слои `package`, `shared`, `personal`; имя `view` зарезервировано стандартом |
| `settings` | `{layer, …}` | настройки | list |
| `draft` | object | черновик | composer или record |
| `unread` | number | непрочитано | source |
| `caption` | string | подпись | source |
| `message` | string | сообщение сервера | source |
| `reason` | string | причина | source |

Ключи одной записи — на странице [Записи: строки и узлы](/ru/guide/smart-components/entries/).

## Имена событий

- Просьба: `sf-<тег>-<глагол>`; факт: `sf-<тег>-<глагол>ed`. В имени —
  **тег компонента**: `sf-view-properties-close`, `sf-view-table-apply`,
  `sf-chat-threads-open`, `sf-view-properties-saved`. Когда тег
  переименован, его события переименованы вместе с ним, а старые имена
  событий приходят следом до той же даты, что и старый тег. Компонент пакета партнёра
  подставляет свой тег: `acme-map-pick`.
- Манифест объявляет событие глаголом (`close`, `saved`), а DOM-имя выводит
  построение.
- Факты потока сохраняют свои имена: `chunk` — факт, хотя это не прошедшая
  форма (`sf-message-log-chunk`).
- Имена ролей (`list`, `record`) живут в манифесте и Студии и никогда не
  попадают в имя DOM-события: хост должен найти компонент поиском по коду.
- Нет суффикса `-intent` и двоеточий.
- Событие, которое черта приносит нескольким компонентам, названо по черте:
  `sf-field-reset` с `tag` в `detail`.
- Факты для компонентов, которые говорят через порт хоста, необязательны:
  результат приходит ответом хоста. Факт отправляют, только где он нужен
  скрипту страницы.

## Глаголы

Глагол — это **просьба** («удалить»). Факт, что она выполнена, несёт
результат и стоит в прошедшей форме (`deleted`, `saved`). Компонент
отправляет просьбу; работу делает источник или хост.

| Глагол | Содержимое | Слово | Намерение порта |
|:---|:---|:---|:---|
| `open` | `{id}` | открыть | `record.open`, `conversation.open`, `view.open` |
| `open-full` | `{id}` | открыть целиком | `list.open`; без порта — по `address` |
| `close` | `{reason, unsaved}`, отклоняемая | закрыть | — |
| `cancel` | — или `{id}` для потока | отменить | — ; в панели — `close {reason: cancelled}`; у потока — просьба к хосту перестать писать (`reply-cancel` порта чата) |
| `toggle` | `{id?}` | переключить | — |
| `expand` | `{id}` | раскрыть | `tree.expand` |
| `select` | `{ids}` | выбрать | — |
| `refresh` | — | обновить | `query.change` |
| `count` | — | посчитать | `query.count` |
| `load-more` | `{direction: after или before, parent?}` | показать ещё | `query.change`, `tree.expand {cursor}`, `history.older` |
| `save` | `{id?, values, revision}` | сохранить | `record.mutate {action_id: edit}`, `group.save`, `record.save` и другие |
| `delete` | `{ids, revisions}` | удалить | `record.mutate {action_id: delete}`, `record.delete` и другие |
| `targets` | `{id}` | куда можно переместить | `node.targets` |
| `create` | `{kind?, parent?}` | создать | `view.create_record`, `record.create`, `conversation.create` |
| `rename` | `{id, title}` | переименовать | `conversation.rename` |
| `archive` | `{ids}` | в архив | `conversation.archive` |
| `restore` | `{ids}` | вернуть | `conversation.archive` (выключить) |
| `move` | `{ids, parent, before, revisions}` | переместить | `tree.move_targets` |
| `apply` | `{action, scope: entry, selection или filter, ids?, revisions?}` | применить | `bulk.apply_selected`, `bulk.apply_under_filter` |
| `reset` | — | сбросить | — |
| `query` | `{query}` — весь запрос: фильтр, поиск, порядок, страница | изменить запрос | `query.change` |
| `navigate` | `{id, href}` | перейти | навигация `admin-navigation-port` |
| `download` | `{id}` | скачать | скачивание файла |
| `rejected` (факт) | `{files, reason}` | отклонено | — ; компонент отверг файл до записи |
| `submit` | `{values, client-key}` | отправить | `message.send` |
| `retry` | `{key}` | повторить | `message.retry`, `file.retry` |
| `read` | `{id}` | прочитано | `message.read` |
| `rate` | `{id, value, reason?}` | оценить | `message.rate` |
| `attach` | `{files}` | прикрепить | загрузка файла |
| `detach` | `{id или key}` | открепить | удаление файла |
| `answer` | `{accepted, digest?}` | ответить | `proposal.decide` |
| `settle` | `{id, answer, record?}` | завершить запись | — ; ответ хоста на изменение записи |
| `minimize` | — | свернуть | — |
| `reset` у поля | `{tag, value, inherited-value, name}`, событие `sf-field-reset`, отклоняемое | сбросить к наследуемому | — |

`refresh` перечитывает, а `retry` повторяет одно изменение с тем же ключом.
Какие глаголы меняют данные хоста и что несёт такое изменение, описано на
странице [Данные с сервера](/ru/guide/smart-components/data/#изменения-и-конфликты).

Факты потока — `begun` (начато), `chunk` (часть), `completed`
(завершено), `failed` (не удалось), `cancelled` (отменено) — общие у ответа
ИИ, загрузки файла и долгой задачи; их порядок показан на той же странице в
разделе [Потоки](/ru/guide/smart-components/data/#потоки).

## Свой глагол компонента

Компонент может назвать событие глаголом не из словаря, если ни один глагол
словаря этого не значит. Глагол объявляется в манифесте со своим словом, а
проверка не пропускает синоним глагола словаря. Факт — в прошедшей форме
(`-ed`), просьба — голым глаголом. Копии этапов отрисовки (`ready`,
`update`) событиями интерфейса не являются.

| Старое имя | Новое имя |
|:---|:---|
| `sf-table-query-intent` | `sf-table-query` |
| `sf-table-tree-toggle`, `sf-table-tree-more` | `sf-table-expand`, `sf-table-load-more` |
| `sf-table-tree-intent` | `sf-data-view-tree` |
| `sf-table:column-settings-change` | `sf-table-save {kind: columns}` |
| `sf-sortable-intent` | `sf-sortable-move` |
| `sf-tree:activate`, `sf-tree:selection-change` | `sf-tree-open`, `sf-tree-select` |
| `sf-menu:navigate` | `sf-menu-navigate` |
| `sf-download-file:click` | `sf-download-file-download` |
| `sf-file-upload:select`, `:remove`, `:reject` | `sf-file-upload-attach`, `-detach`, `-rejected` |
| `sf-file-upload:file-complete`, `:file-error`, `:complete` | `sf-file-upload-completed {id}` (конец потока), `-failed {id, reason}`, `-finished` |
| `sf-image-field:reject`, `:remove` | `sf-image-field-rejected`, `-detach` |
| `sf-code-input:complete` | `sf-code-input-completed` |
| `sf-hide-show:change`, `sf-theme-change` | `change` |
| `drawer:snap` | `sf-drawer-snapped {point}` |
| `drawer:ready`, `drawer:update` | уходят без замены |
| `sf-admin-menu-intent` | `sf-admin-menu-<глагол>` по `detail.intent` |
| `sf-chat-send`, `sf-chat-stop` | `sf-chat-composer-submit`, `sf-chat-composer-stop` — по тегу поля ввода |

У чата свои слова, не из общего словаря: `check`, `stop` и поле записи
`wait`. Они следуют порту `simai.chat-port` 1.0.0: `stop {conversation,
id?}` значит «перестать ждать», а `wait` принимает `delayed`, `stopped`,
`network` или `none`.

## Слова данных

Переносимые поля и параметры подписываются словами глоссария, и Студия
сопоставляет их по этим словам:

текст, текст поиска, число, число записей, точное число, да/нет, дата,
значение, код записи, коды записей, запись, записи, состояние, страница,
порядок, подсказка порядка, фильтр, вид, настройки, возможности, адрес,
сообщение, сообщения, сообщение сервера, причина, разговор, разговоры, файл,
файлы, пользователь, черновик, ключ записи, версия, отправка, удалено,
непрочитано, подпись, родитель, место, есть вложенные, раскрыто, есть ещё,
включено, имя в форме, наследуемое значение, наследуется, чем изменено,
недоступно, только чтение, ошибка поля, текущая запись, выбранные,
разрешённые действия, можно менять, уровень, путь, продолжение, завершить
запись, причина закрытия, несохранённое, ответ человека, сохранённый вид,
код слова, направление, записей на странице.

## Псевдонимы старых имён

**Теги.** Волна переименований тегов ноября 2026 (`sf-table` →
`sf-view-table`, `sf-datepicker` → `sf-input-date` и ещё 24 имени) — в
таблице на странице [Обновление](/ru/guide/connection/updating/). Старый тег
работает до **2027-01-01** и пишет в консоль, каким тегом его заменить.
Подсказки `sf-tooltip` и `sf-help-mark` станут одним `sf-popover` (с
`mark="help|info"` для знака «?» и «i»), когда этот выпуск выйдет.

**События и ключи** первой волны (октябрь 2026):

Когда семья компонентов переходит на эти имена, каждое старое имя работает
как псевдоним с датой. Прослойка отправляет сначала новое имя, затем старые,
с одним `detail` и одной отменой, и записывает у каждого `since` и
`remove_after`; после этой даты старое имя считается `expired`.

| Что | Значение |
|:---|:---|
| Переименований всего | 72: 52 решены, 10 уже в SIMAI Framework, 8 не стояли ни в одном плане и решены словарём, 2 уходят без замены |
| Тот же `detail` | 61; ещё 8 добавляют поля, 3 делят одно старое имя на несколько |
| Отклоняемых | 12; старое и новое имя делят одну отмену |
| `since` | 2026-10-26 |
| `remove_after` | 2026-12-01: не меньше 30 дней, уборка первого числа месяца |

Старые имена в коде хостов слушают ui-admin, bx-simai.main, bx-simai.property
и Larena — всего шестнадцать имён; хостов предупреждают до того, как
псевдоним истечёт. `populated` остаётся псевдонимом `ready`.

У ключей и фактов тоже есть псевдонимы с датами (`since` 2026-10-27,
`remove_after` 2026-12-01). Источник и таблица читают обе формы, а манифест
объявляет только новые:

| Старая форма | Новая |
|:---|:---|
| ключ `view` | `saved-view` |
| запись порядка `{field, dir}` | `{key, direction}` |
| `page` объектом `{number, size}` | числа `page` и `page-size` |
| `page` объектом `{cursor}` | ключ записи `cursor` |
| факт потока `started` | `begun` |

Имена, которые
не являются глаголами экрана записей, остаются вне словаря: `sf-updated`,
`sf-after-render`, `sf-region-load`, `sf-props-change`, `sf-notification`.
Зарезервированы на будущее набор текста, присутствие, отметки о прочтении
другой стороной и реакции. Ход долгой задачи — это `chunk {id, done, total}`
её потока, а имя `progress` не используется.

### Прежние имена по компонентам

Раздел собран из манифестов выпуска `ui-98143c0a0728` и пакетов и обновляется вместе с ними. Старое имя работает до даты в последнем столбце и отмечается в `SF.deprecations`; в новой разметке пишите имя из первого столбца.

#### `<sf-accordion>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-accordion-toggle` | `sf-accordion:toggle` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-admin-menu>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-admin-menu-query` | `sf-admin-menu-search` | работает как псевдоним | — |
| событие `sf-admin-menu-reset` | `sf-admin-menu-settings-reset` | работает как псевдоним | — |
| событие `sf-admin-menu-refresh` | `sf-admin-menu-intent` | работает как псевдоним | — |

#### `<sf-alert>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `appearance` | `variant` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status` | `type` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="danger"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="critical"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="neutral"` | `status="clear"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-avatar>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `status="error"` | `status="danger"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="critical"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-badge>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `appearance` | `type` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status` | `scheme` — только значения `info`, `success`, `warning`, `error` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `icon-start` | `icon-left` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `icon-end` | `icon-right` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="danger"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="critical"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-breadcrumbs>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-breadcrumbs-press` | `sf-breadcrumb-click` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-button>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `appearance` | `type` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `icon-start` | `icon-left` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `icon-end` | `icon-right` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `spacing` | `tightness` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `spacing="compact"` | `tightness="low"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `spacing="comfortable"` | `tightness="high"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `spacing="spacious"` | `tightness="highest"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="danger"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="critical"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `appearance="link"` | `appearance="ghost"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-button-copy>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-button-copy-copied` | `sf-copy` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-button-copy-copy-failed` | `sf-copy-error` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-button-copy-copied` | `sf-copy-button-copied` | работает как псевдоним | — |
| событие `sf-button-copy-copy-failed` | `sf-copy-button-copy-failed` | работает как псевдоним | — |

#### `<sf-button-group>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `spacing` | `tightness` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `spacing="compact"` | `tightness="low"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `spacing="comfortable"` | `tightness="high"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `spacing="spacious"` | `tightness="highest"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `change` | `sf-button-group-change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-button-icon>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `status="error"` | `status="danger"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="critical"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status`, `appearance`, `kind` | `type` | принимается для совместимости | — |
| `status`, `appearance`, `kind` | `variant` | принимается для совместимости | — |

#### `<sf-chat-composer>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-chat-composer-submit` | `sf-chat-send` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-composer-stop` | `sf-chat-stop` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-composer-attach` | `sf-chat-files` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-composer-detach` | `sf-chat-action` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-chat-interlocutor>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-chat-interlocutor-select` | `sf-chat-interlocutor` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-chat-message>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-chat-message-retry` | `sf-chat-action` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-chat-threads>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `status="error"` | `status="danger"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="critical"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-threads-open` | `sf-thread-list-select` | работает как псевдоним | — |
| событие `sf-chat-threads-restore` | `sf-thread-list-unarchive` | работает как псевдоним | — |
| событие `sf-chat-threads-apply` | `sf-thread-list-action` | работает как псевдоним | — |
| событие `sf-chat-threads-toggle` | `sf-thread-list-view` | работает как псевдоним | — |
| событие `sf-chat-threads-create` | `sf-thread-list-create` | работает как псевдоним | — |
| событие `sf-chat-threads-open` | `sf-thread-list-open` | работает как псевдоним | — |
| событие `sf-chat-threads-rename` | `sf-thread-list-rename` | работает как псевдоним | — |
| событие `sf-chat-threads-archive` | `sf-thread-list-archive` | работает как псевдоним | — |
| событие `sf-chat-threads-restore` | `sf-thread-list-restore` | работает как псевдоним | — |
| событие `sf-chat-threads-apply` | `sf-thread-list-apply` | работает как псевдоним | — |
| событие `sf-chat-threads-load-more` | `sf-thread-list-load-more` | работает как псевдоним | — |
| событие `sf-chat-threads-toggle` | `sf-thread-list-toggle` | работает как псевдоним | — |

#### `<sf-chat-window>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-chat-window-open` | `chat-port:open` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-load-more` | `chat-port:older` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-submit` | `chat-port:send` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-retry` | `chat-port:retry` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-save` | `chat-port:edit` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-delete` | `chat-port:delete` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-read` | `chat-port:read` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-rate` | `chat-port:rate` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-retry` | `chat-port:file-retry` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-answer` | `chat-port:decide` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-check` | `chat-port:check` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-stop` | `chat-port:stop` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-create` | `chat-port:create` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-rename` | `chat-port:rename` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-archive` | `chat-port:archive` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-select` | `chat-port:interlocutor` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-open` | `chat-window:view` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-load-more` | `chat-window:more` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-query` | `chat-window:search` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-pin` | `chat-window:pin` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-attach` | `chat-window:attach` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-detach` | `chat-window:detach` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-open` | `chat-window:files` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-chat-window-delete` | `chat-window:file-remove` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-confirm-change>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-confirm-change-answer` | `sf-change-confirm-accept` | работает как псевдоним | — |
| событие `sf-confirm-change-answer` | `sf-change-confirm-decline` | работает как псевдоним | — |
| событие `sf-confirm-change-expired` | `sf-change-confirm-expire` | работает как псевдоним | — |
| событие `sf-confirm-change-answer` | `sf-change-confirm-answer` | работает как псевдоним | — |
| событие `sf-confirm-change-expired` | `sf-change-confirm-expired` | работает как псевдоним | — |

#### `<sf-drawer>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `size="1/2"` | `size="small"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `size="1"` | `size="medium"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `size="2"` | `size="large"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `placement="inline-start"` | `placement="left"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `placement="inline-end"` | `placement="right"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-drawer-open` | `drawer:before-open` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-drawer-opened` | `drawer:after-open` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-drawer-close` | `drawer:before-close` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-drawer-closed` | `drawer:after-close` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-drawer-snapped` | `drawer:snap` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-dropdown>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `appearance` | `type` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `size="1/2"` | `size="1/3"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `size="2"` | `size="3"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `change` | `sf-dropdown:change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-field-reset` | `sf-field:reset` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-editor-content>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-editor-content-select` | `sf-content-editor-select` | работает как псевдоним | — |
| событие `sf-editor-content-leave` | `sf-content-editor-leave` | работает как псевдоним | — |
| событие `sf-editor-content-params` | `sf-content-editor-params` | работает как псевдоним | — |
| событие `sf-editor-content-file` | `sf-content-editor-file` | работает как псевдоним | — |

#### `<sf-editor-inline>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-editor-inline-input` | `sf-inline-edit-input` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-editor-inline-change` | `sf-inline-edit-commit` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-editor-inline-cancel` | `sf-inline-edit-cancel` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-editor-inline-input` | `sf-inline-editor-input` | работает как псевдоним | — |
| событие `sf-editor-inline-change` | `sf-inline-editor-change` | работает как псевдоним | — |
| событие `sf-editor-inline-cancel` | `sf-inline-editor-cancel` | работает как псевдоним | — |

#### `<sf-editor-overlay>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-editor-overlay-apply` | `sf-composition-overlay-action` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-editor-overlay-change` | `sf-composition-overlay-edit` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-editor-overlay-select` | `sf-composition-overlay-select` | работает как псевдоним | — |
| событие `sf-editor-overlay-apply` | `sf-composition-overlay-apply` | работает как псевдоним | — |
| событие `sf-editor-overlay-insert` | `sf-composition-overlay-insert` | работает как псевдоним | — |
| событие `sf-editor-overlay-move` | `sf-composition-overlay-move` | работает как псевдоним | — |
| событие `sf-editor-overlay-change` | `sf-composition-overlay-change` | работает как псевдоним | — |
| событие `sf-editor-overlay-open` | `sf-composition-overlay-open` | работает как псевдоним | — |

#### `<sf-file-download>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-file-download-download` | `sf-download-file:click` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-file-download-download` | `sf-download-file-download` | работает как псевдоним | — |

#### `<sf-file-preview>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `kind` | `type` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `file-size` | `size` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `kind="auto"` | `kind="default"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-file-preview-download` | `sf-file-preview:download` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-file-preview-detach` | `sf-file-preview:remove` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-file-upload>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `size="1/2"` | `size="1/3"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `size="2"` | `size="3"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-file-upload-finished` | `sf-file-upload:complete` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-file-upload-attached` | `sf-file-upload:file-add` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-file-upload-completed` | `sf-file-upload:file-complete` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-file-upload-failed` | `sf-file-upload:file-error` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-file-upload-rejected` | `sf-file-upload:reject` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-file-upload-detach` | `sf-file-upload:remove` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-file-upload-retry` | `sf-file-upload:retry` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-file-upload-attach` | `sf-file-upload:select` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-gallery>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `lightbox-class` | `root-class` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `change` | `sf-change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-gallery-closed` | `sf-close` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-gallery-opened` | `sf-open` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-header-page>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-header-page-toggle` | `sf-page-header-star` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-header-page-toggle` | `sf-page-header-toggle` | работает как псевдоним | — |

#### `<sf-header-site>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-header-site-open` | `sf-site-header-open` | работает как псевдоним | — |
| событие `sf-header-site-opened` | `sf-site-header-opened` | работает как псевдоним | — |
| событие `sf-header-site-close` | `sf-site-header-close` | работает как псевдоним | — |
| событие `sf-header-site-closed` | `sf-site-header-closed` | работает как псевдоним | — |

#### `<sf-help-mark>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-help-mark-opened` | `sf-help-mark-open` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-help-mark-closed` | `sf-help-mark-close` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-input>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `appearance` | `type` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `size="1/2"` | `size="1/3"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `size="2"` | `size="3"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-field-reset` | `sf-field:reset` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-input-code>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-input-code-completed` | `sf-code-input:complete` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-input-code-completed` | `sf-code-input-completed` | работает как псевдоним | — |

#### `<sf-input-color>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `appearance` | `variant` | принимается для совместимости | — |
| событие `sf-field-reset` | `sf-field:reset` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-input-date>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `change` | `sf-datepicker-change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `change` | `sf-change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-input-image>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-input-image-attach` | `sf-image-field:select` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-input-image-detach` | `sf-image-field:remove` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-input-image-rejected` | `sf-image-field:reject` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-input-image-attach` | `sf-image-field-attach` | работает как псевдоним | — |
| событие `sf-input-image-detach` | `sf-image-field-detach` | работает как псевдоним | — |
| событие `sf-input-image-rejected` | `sf-image-field-rejected` | работает как псевдоним | — |

#### `<sf-input-quantity>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-field-reset` | `sf-field:reset` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-input-textarea>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `appearance` | `type` | принимается для совместимости | — |
| событие `sf-field-reset` | `sf-field:reset` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-list-item>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `kind` | `type` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-list-item-open` | `sf-list-item-activate` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-menu>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-menu-navigate` | `sf-menu:navigate` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-menu-toggle` | `sf-menu:toggle` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-menu-context>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-menu-context-select` | `sf-context-menu-select` | работает как псевдоним | — |
| событие `sf-menu-context-change` | `sf-context-menu-change` | работает как псевдоним | — |
| событие `sf-menu-context-changed` | `sf-context-menu-changed` | работает как псевдоним | — |
| событие `sf-menu-context-reset` | `sf-context-menu-reset` | работает как псевдоним | — |
| событие `sf-menu-context-open` | `sf-context-menu-open` | работает как псевдоним | — |
| событие `sf-menu-context-opened` | `sf-context-menu-opened` | работает как псевдоним | — |
| событие `sf-menu-context-close` | `sf-context-menu-close` | работает как псевдоним | — |
| событие `sf-menu-context-closed` | `sf-context-menu-closed` | работает как псевдоним | — |
| событие `sf-menu-context-search` | `sf-context-menu-search` | работает как псевдоним | — |
| событие `sf-menu-context-tab` | `sf-context-menu-tab` | работает как псевдоним | — |

#### `<sf-modal>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-modal-closed` | `modal:after-close` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-modal-minimized` | `modal:after-hide` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-modal-opened` | `modal:after-open` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-modal-expanded` | `modal:after-show` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-modal-close` | `modal:before-close` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-modal-minimize` | `modal:before-hide` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-modal-open` | `modal:before-open` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-modal-expand` | `modal:before-show` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-modal-content-upload` | `modal:before-content-upload` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-modal-content-uploaded` | `modal:after-content-upload` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-pagination>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-pagination-apply` | `sf-action-apply` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-pagination-action-change` | `sf-action-change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-pagination-action-for-all-change` | `sf-action-for-all-change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-pagination-count` | `sf-count-request` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-pagination-change` | `sf-page-change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-pagination-size-change` | `sf-page-size-change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-pagination-selection-clear` | `sf-selection-clear` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-pagination-load-more` | `sf-show-more` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-popover>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `surface-role` | `role` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-profile-picker>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-profile-picker-select` | `sf-profile-select` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-profile-picker-create` | `sf-profile-create` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-profile-picker-rename` | `sf-profile-rename` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-profile-picker-delete` | `sf-profile-delete` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-profile-picker-reset` | `sf-profile-reset` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-progress-bar>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `status` | `tone` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="danger"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="critical"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="neutral"` | `status="primary"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-progress-ring>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `status="error"` | `status="danger"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="critical"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-progress-scale>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `status` | `tone` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="danger"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="critical"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="neutral"` | `status="primary"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-resizer>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-resizer-resize` | `sf-resize` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-skeleton>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `kind` | `variant` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `kind` | `type` | принимается для совместимости | — |

#### `<sf-slider>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `change` | `sf-slide-change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-slider-range>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `change` | `sf-range-slider-change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `change` | `onSliderChange` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-sortable>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-sortable-move` | `sf-sortable-intent` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-spinner>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `kind` | `variant` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `size` | `width` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `size` | `height` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `size` | `stroke-width` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `size` | `dot-radius` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-steps>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-steps-change` | `sf-step-change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-switch>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-field-reset` | `sf-field:reset` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-tabs>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-tabs-change` | `sf-tab-change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-tag>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `kind` | `type` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status` | `type` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="danger"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="critical"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `kind="default"` | `kind="quantity"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-tag-close` | `close` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-theme-generator>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `change` | `sf-theme-generator-change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-theme-generator-committed` | `sf-theme-generator-apply` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `change` | `sf-theme-change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-theme-generator-committed` | `sf-theme-apply` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-toast>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `status` | `type` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="danger"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="critical"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="neutral"` | `status="default"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="info"` | `status="primary"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-tooltip>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `appearance` | `type` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-tree>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `selection="one"` | `selection="single"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `selection="many"` | `selection="multiple"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-tree-select` | `sf-tree-selection-change` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-tree-move` | `sf-tree-records-drop` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-tree-attach` | `sf-tree-files-drop` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-tree-open` | `sf-tree-item-click` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-tree-toggle` | `sf-tree-item-toggle` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-tree-item>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `kind` | `type` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| событие `sf-tree-item-open` | `sf-tree-item-click` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

#### `<sf-view>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-view-tree` | `sf-table-tree-intent` | работает как псевдоним | — |
| событие `sf-view-open` | `sf-data-view-open` | работает как псевдоним | — |
| событие `sf-view-deleted` | `sf-data-view-deleted` | работает как псевдоним | — |
| событие `sf-view-answer` | `sf-data-view-answer` | работает как псевдоним | — |
| событие `sf-view-state` | `sf-data-view-state` | работает как псевдоним | — |
| событие `sf-view-tree` | `sf-data-view-tree` | работает как псевдоним | — |
| событие `sf-view-files-drop` | `sf-data-view-files-drop` | работает как псевдоним | — |
| событие `sf-view-saved-view-intent` | `sf-data-view-saved-view-intent` | работает как псевдоним | — |
| событие `sf-view-list-open` | `sf-data-view-list-open` | работает как псевдоним | — |

#### `<sf-view-properties>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-view-properties-delete` | `sf-property-view-delete-record` | работает как псевдоним | — |
| событие `sf-view-properties-open` | `sf-property-view-open-record` | работает как псевдоним | — |
| событие `sf-view-properties-close` | `sf-property-view-close` | работает как псевдоним | — |
| событие `sf-view-properties-open-full` | `sf-property-view-open-full` | работает как псевдоним | — |
| событие `sf-view-properties-saved` | `sf-property-view-saved` | работает как псевдоним | — |
| событие `sf-view-properties-failed` | `sf-property-view-failed` | работает как псевдоним | — |
| событие `sf-view-properties-open` | `sf-property-view-open` | работает как псевдоним | — |
| событие `sf-view-properties-delete` | `sf-property-view-delete` | работает как псевдоним | — |
| событие `sf-view-properties-created` | `sf-property-view-created` | работает как псевдоним | — |
| событие `sf-view-properties-cancel` | `sf-property-view-cancel` | работает как псевдоним | — |
| событие `sf-view-properties-state` | `sf-property-view-state` | работает как псевдоним | — |
| событие `sf-view-properties-address-copy` | `sf-property-view-address-copy` | работает как псевдоним | — |
| событие `sf-view-properties-favourite` | `sf-property-view-favourite` | работает как псевдоним | — |

#### `<sf-view-table>`

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| событие `sf-view-table-select` | `sf-port-output` | работает как псевдоним | — |
| событие `sf-view-table-apply` | `sf-table-action-intent` | работает как псевдоним | — |
| событие `sf-view-table-save` | `sf-table-column-settings-change` | работает как псевдоним | — |
| событие `sf-view-table-create` | `sf-table-create-intent` | работает как псевдоним | — |
| событие `sf-view-table-query` | `sf-table-query-intent` | работает как псевдоним | — |
| событие `sf-view-table-refresh` | `sf-table-retry` | работает как псевдоним | — |
| событие `sf-view-table-expand` | `sf-table-tree-toggle` | работает как псевдоним | — |
| событие `sf-view-table-load-more` | `sf-table-tree-more` | работает как псевдоним | — |
| событие `sf-view-table-move` | `sf-table-rows-reorder` | работает как псевдоним | — |
| событие `sf-view-table-save` | `sf-table:column-settings-change` | работает как псевдоним | — |
| событие `sf-view-table-save` | `onColumnSettingsChange` | работает как псевдоним | — |
| событие `sf-view-table-search-change` | `onSearchEnd` | работает как псевдоним | — |
| событие `sf-view-table-template-save` | `onTemplateSave` | работает как псевдоним | — |
| событие `sf-view-table-filter-change` | `onFilterUpdate` | работает как псевдоним | — |
| событие `sf-view-table-select` | `sf-table-select` | работает как псевдоним | — |
| событие `sf-view-table-apply` | `sf-table-apply` | работает как псевдоним | — |
| событие `sf-view-table-save` | `sf-table-save` | работает как псевдоним | — |
| событие `sf-view-table-column-settings-reset` | `sf-table-column-settings-reset` | работает как псевдоним | — |
| событие `sf-view-table-create` | `sf-table-create` | работает как псевдоним | — |
| событие `sf-view-table-filter-change` | `sf-table-filter-change` | работает как псевдоним | — |
| событие `sf-view-table-query` | `sf-table-query` | работает как псевдоним | — |
| событие `sf-view-table-refresh` | `sf-table-refresh` | работает как псевдоним | — |
| событие `sf-view-table-search-change` | `sf-table-search-change` | работает как псевдоним | — |
| событие `sf-view-table-sort-change` | `sf-table-sort-change` | работает как псевдоним | — |
| событие `sf-view-table-template-delete` | `sf-table-template-delete` | работает как псевдоним | — |
| событие `sf-view-table-template-save` | `sf-table-template-save` | работает как псевдоним | — |
| событие `sf-view-table-template-select` | `sf-table-template-select` | работает как псевдоним | — |
| событие `sf-view-table-toolbar-action` | `sf-table-toolbar-action` | работает как псевдоним | — |
| событие `sf-view-table-reference-open` | `sf-table-reference-open` | работает как псевдоним | — |
| событие `sf-view-table-expand` | `sf-table-expand` | работает как псевдоним | — |
| событие `sf-view-table-load-more` | `sf-table-load-more` | работает как псевдоним | — |
| событие `sf-view-table-rows-drag` | `sf-table-rows-drag` | работает как псевдоним | — |
| событие `sf-view-table-move` | `sf-table-move` | работает как псевдоним | — |
| событие `sf-view-table-cell-set` | `sf-table-cell-set` | работает как псевдоним | — |
| событие `sf-view-table-view-change` | `sf-table-view-change` | работает как псевдоним | — |
| событие `sf-view-table-window` | `sf-table-window` | работает как псевдоним | — |

## Смотрите также

- [На странице](/ru/guide/smart-components/page/) — как события выглядят на элементе.
- [Данные с сервера](/ru/guide/smart-components/data/) — ответы хоста и состояния.
- [Проверки](/ru/guide/smart-components/quality/) — проверка имён.
