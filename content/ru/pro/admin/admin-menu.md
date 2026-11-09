---
title: "Меню администратора"
description: "Даёт административному приложению боковую навигацию с вложенными разделами, поиском, компактным режимом и настройкой пунктов."
---

# Меню администратора

:badge[sf-admin-menu]{variant=tonal scheme=primary size=1/2} :badge[1.7.5]{variant=outline scheme=on-surface size=1/2}

`<sf-admin-menu>` — боковая навигация административного приложения: вложенные
разделы, поиск, компактный режим и настройка порядка и видимости пунктов.
Берите его целиком, а не собирайте меню из классов
[Admin Menu](/ru/components/internal/admin-menu/): состояние, поиск и
настройки принадлежат этому компоненту. Заголовок, число записей и действия
страницы показывает [Шапка страницы](/ru/smart/composite/page-header/).

**Компонент Pro.** Входит в [SIMAI Pro](/ru/pro/), а не в выпуск SIMAI
Framework: поставляется пакетом `pro` из репозитория `simai/ui-pro`.
Лицензия и подключение — на странице [Pro](/ru/pro/#лицензия).

## Пример

:::example {id="smart-components/admin-menu/overview" label="Навигация с четырьмя уровнями"}
:::

## Применение

### Подключение пакета

Элемент загружается, только если пакет `pro` объявлен до подключения Core:
`window.SF_BOOT_CONFIG = {packages: {pro: {base: '/assets/pro/<коммит пакета>/smart'}}}`.
Сборка пакета публикуется выпуском репозитория `simai/ui-pro`
(см. [Готовая сборка пакета `pro`](/ru/guide/introduction/structure/#готовая-сборка-пакета-pro)). Подробнее — в разделе
[Подключение смарт-компонентов](/ru/guide/smart-components/page/#подключение-к-странице).

### Два способа задать меню

Меню берёт пункты из разметки или у приложения через навигационный порт.

- Пункты в разметке — дочерние `sf-admin-menu-item`. Так меню работает без
  сервера; порядок и видимость пунктов человек настраивает сам.
- Навигационный порт `simai.admin-navigation-port` — приложение отдаёт меню
  целиком: сайты, дерево разделов, избранное, профили меню и данные
  пользователя. Меню ничего не хранит и обо всём, что делает человек,
  спрашивает приложение.

Порт передаётся методом `connectPort(port)`; прежний `setHostPort` — его
псевдоним. С портом рисуется навигация порта, без него — меню из пунктов
разметки. Прежний запрос `sf-host-port-request`, на который страница отвечала
портом, меню отправляет при подключении до 2026-12-01.

### Пункты меню

Каждый `sf-admin-menu-item` — один пункт. Вложенные пункты открываются
отдельной панелью с кнопкой «Назад»; в примере их четыре уровня.

- `item-id` — постоянный ключ пункта. Сохранённые настройки ссылаются на него,
  поэтому не меняйте его при переименовании.
- `label` — подпись, `href` — адрес, `left-icon` — значок перед подписью
  (имя из набора иконок Framework; атрибут `icon` у пункта не читается),
  `badge` — значок с числом справа.
- `current` отмечает пункт текущей страницы, `disabled` выключает пункт,
  `hidden` скрывает его.
- `divider` превращает пункт в разделитель.
- `slot="bottom"` переносит пункт в нижнюю часть меню — для настроек и
  профиля.
- `order` задаёт порядок числом, если он отличается от порядка в разметке.

Шапку меню задают `brand`, `logo` и `logo-href`.

### Поиск

`searchable` включает поиск по подписям пунктов: регистр не важен, «ё» равна
«е», окончание слова отбрасывается, поэтому «роль» находит «Роли».
`search-mode="panel"` убирает строку поиска под шапкой и открывает поиск
отдельной панелью по значку лупы. `search-shortcut` — клавиша, которая открывает
поиск из любого места страницы (`mod+k`: `Cmd+K` на Mac, `Ctrl+K` в остальных
системах); пустое значение её отключает.

Чтобы искать не только по разделам, но и по записям приложения, слушайте
`sf-admin-menu-query`. Событие приходит после паузы в наборе с
`event.detail` `{kind, query, requestId}`, где `kind` — `menu`; ответ передаётся методом
`setSearchResults(requestId, groups)`. Ответ на запрос, который человек уже
сменил, отбрасывается. Настройка `recent-results` (свойство `recentResults`) задаёт,
что показывать при пустом поле, например недавно открытое. Прежние
`sf-admin-menu-search` и `setRecentResults(groups)` работают до 2026-12-01.

Группа результатов — `{key, label, items, more}`, результат —
`{text, subtext, icon, href}`, `more` — `{text, href}`. Результаты с адресом на
другом сайте меню не показывает.

### Компактный режим

`collapsible` добавляет кнопку, которая сворачивает меню до узкой колонки
значков; `compact` задаёт это состояние, метод `setCompact(compact)` меняет его
из кода. Каждое переключение отправляет `sf-admin-menu-compact-change` с
`event.detail` `{compact, source}`: по нему оболочка приложения меняет ширину
своей колонки.

Счётчик пункта (`badge`) окрашен ролью ошибки в обоих режимах. В компактном
режиме значок пункта стоит на шаге `1/2`, поэтому счётчик переходит на его
верхний угол точкой размером 8px, а число остаётся в имени пункта. Как точка и
число ведут себя на якоре, описано в разделе
[Бейдж на якоре](/ru/components/feedback/badges/#бейдж-на-якоре).

### Меню в колонке с ручкой ширины

Ширину колонки меню меняет [ручка ширины](/ru/smart/overlays/resizer/)
`<sf-resizer>`, которая стоит в той же колонке рядом с меню. Меню занимает
колонку по высоте и прокручивает свои пункты само, поэтому колонке
прокрутка не нужна.

```html
<nav class="app-menu" style="--menu-width: 288px">
  <sf-admin-menu brand="Larena" searchable collapsible>…</sf-admin-menu>
  <sf-resizer min="13rem" max="24rem" property="--menu-width"
              storage-key="admin-menu" label="Ширина меню"></sf-resizer>
</nav>
```

```css
@layer project {
  .app-menu { position: sticky; inset-block-start: 0; block-size: 100vh; }
  @media (width >= 44rem) {
    .app-menu { inline-size: var(--menu-width, 16rem); }
  }
}
```

Что важно заметить:

- у колонки нет `overflow`: ручка наполовину выходит за её край, и
  прокрутка колонки обрезала бы эту половину;
- ручка стоит над меню сама: её слой — седьмая ступень, а корня
  `<sf-admin-menu>` — шестая, поэтому своего `z-index` в CSS проекта не нужно;
- ширину колонки хранит ручка под `sf-resizer/<storage-key>`
  ([персональный вид](/ru/guide/smart-components/view-preferences/)), а
  ширину в первом кадре пишет сервер в `style` колонки (см. [Где хранится ширина](/ru/smart/overlays/resizer/#где-хранится-ширина)).

Свой персональный вид у меню отдельный: свёрнутость и открытый раздел оно
хранит под ключом `sf-admin-menu/main`, и с шириной колонки он не
пересекается. В компактном
режиме ширину колонки задаёт оболочка, и ручку на это время выключают:

```js
menu.addEventListener('sf-admin-menu-compact-change', ({detail}) => {
  handle.toggleAttribute('disabled', detail.compact);
});
```

### Настройки пунктов

Пока `settings` включён, человек может скрывать и показывать пункты и менять
их порядок. Где хранятся настройки, решает `persistence-mode`:

- `local` — в `localStorage` браузера под ключом, который строится из `id`
  меню. Задайте меню `id`, если на сайте их несколько.
- `external` — у приложения. Меню хранит черновик и отправляет события, а
  записывает приложение.

В режиме `external` сохранение отправляет `sf-admin-menu-settings-save` с
`{target, baseRevision, profile}`; сброс — `sf-admin-menu-reset` с
`{kind: 'settings', target, baseRevision}`, отмена — `sf-admin-menu-settings-cancel`.
Прежнее поле `base_revision` и прежнее имя `sf-admin-menu-settings-reset`
приходят до 2026-12-01. `target` — уровень настроек: `user`
для своих, `system` для общих; общие доступны при `allow-system-settings`, а
переключение уровня отправляет `sf-admin-menu-settings-mode-change`.
`settings-revision` и `system-settings-revision` — ревизии, против которых
пишется изменение.

Ответ сервера передаётся методами: `applySettingsResult({target, revision,
profile})` фиксирует сохранение, `applySettingsError(error)` оставляет
черновик и показывает ошибку. Ошибка со статусом `409` или кодом
`revision_conflict` показывается как конфликт; по кнопке обновления меню
отправляет `sf-admin-menu-settings-refresh`, и приложение отвечает
`applyExternalSettingsState(state, target)` с актуальным состоянием.

### Навигационный порт

Порт — объект с полями `port`, `version`, `capabilities` и методом
`raise(intent, payload)`, который возвращает ответ приложения. Меню принимает
порт `simai.admin-navigation-port` версии `1.0.0`; другой порт метод
`connectPort` отклоняет с ошибкой.

`capabilities` перечисляет, что приложение умеет. Управление, за которым
нет возможности, меню не рисует.

| Возможность | Что появляется | Намерения |
|:---|:---|:---|
| — | меню и переход по строкам | `navigation.load`, `item.open` |
| `site-switch` | выбор сайта, если сайтов больше одного | `site.switch`, `sites.search` |
| `search` | поиск по `Cmd+K` или `Ctrl+K` | `search.query`, `search.choose` |
| `favourites` | звезда у строк и блок избранного | `favourite.toggle` |
| `menu-profiles` | профили меню и режим правки | `view.profile`, `view.create`, `view.rename`, `view.delete`, `view.save`, `view.reset` |
| `preferences` | тема, язык и свёрнутое меню как настройки человека | `preference.theme`, `preference.language`, `preference.compact` |
| `sign-out` | выход в меню профиля | `session.sign-out` |

Ответ на намерение — объект с полем `answer`: `applied`, `refused` или
`unavailable`. Исключение в `raise` меню считает ответом `unavailable`.
Ответ `applied` на `navigation.load` несёт всё меню: `revision`, `echo`,
`site`, `current`, `items`, `favourites`, `profiles`, `rights` и `person`.
Строка в `items` — `{key, kind, level, label, icon, href, children}`; `icon`
строки становится значком перед подписью, как `left-icon` у пункта
разметки; `kind`
принимает значения `root`, `section`, `page`, `divider`, `heading`, `link`, а
`level="install"` выделяет строки, общие для всех сайтов. Счётчики в строках —
только непрочитанное и ожидающее; число записей показывает
[Шапка страницы](/ru/smart/composite/page-header/). Если в ответе есть
`notifications`, меню рисует строку уведомлений с числом непрочитанных.

Переход по строке меню не выполняет: оно поднимает `item.open`, и после ответа
`applied` отмечает строку текущей и отправляет `sf-admin-menu-navigate` с
`{key, href}`. Приложение со своим маршрутизатором переходит по этому событию.
Открытая вторая колонка следует за текущей страницей: при первом ответе порта
и при каждой смене адреса она показывает корень, в котором лежит страница.
Колонку, которую человек закрыл, меню само не открывает.
Каждое намерение дублируется событием по своему глаголу — `sf-admin-menu-open`,
`-toggle`, `-save`, `-query` и другими (список — в справочнике ниже) — с
`{kind, intent, payload}` и полями намерения: по нему страница видит, что
человек попросил, но отвечает только порт. Прежнее `sf-admin-menu-intent`
приходит до 2026-12-01.

Если избранное или разделы изменились вне меню — например, звездой в шапке
страницы, — вызовите `refresh()`: меню заново запросит `navigation.load`.

```js
const menu = document.querySelector('sf-admin-menu');
await customElements.whenDefined('sf-admin-menu');
menu.connectPort({
  port: 'simai.admin-navigation-port',
  version: '1.0.0',
  capabilities: ['search', 'favourites', 'preferences'],
  raise: (intent, payload) => api.adminNavigation(intent, payload),
});

document.addEventListener('sf-admin-menu-navigate', (event) => {
  if (event.detail.href) router.push(event.detail.href);
});
```

### Подписи

Подписи кнопок, поиска и настроек меню берёт на языке страницы (русском или
английском). Атрибуты `search-placeholder`, `search-label`, `settings-title`,
`toggle-label` и `search-keys-hint` заменяют их своими. Исключение —
`aria-label`: его значение по умолчанию английское.

## Доступность

- Меню — область `navigation`. Задайте ей имя на языке страницы через
  `aria-label`, например «Разделы администрирования»: значение по умолчанию
  английское.
- Пункты — ссылки и кнопки в обычном порядке `Tab`; `Enter` и `Space`
  открывают пункт или вложенную панель.
- Открытая вложенная панель получает фокус на кнопке «Назад»; «Назад»
  возвращает фокус на пункт, который её открыл. Неактивные панели недоступны
  для фокуса.
- Меню настроек пункта открывается с фокусом на первом пункте; `Escape`
  закрывает его и возвращает фокус на кнопку, которая его открыла.
- Клавиша поиска (`search-shortcut`) переносит фокус в поле поиска; в панели
  поиска стрелки выбирают результат, `Enter` открывает, `Escape` закрывает.
- В навигации порта `Cmd+K` или `Ctrl+K` открывает поиск поверх страницы, а
  `Escape` по очереди закрывает поиск, выбор сайта и меню профиля.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-d6f01121baca` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-admin-menu>` |
| Назначение | Вложенная навигация администратора с поиском, компактным режимом и редактируемыми личными или системными настройками. |
| Контракт | `smart.admin-menu`, версия `1.7.5` |
| Поставка | пакет `pro` (`SF_BOOT_CONFIG.packages.pro`) |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | `host-required` |
| Заготовка до прихода кода | сервер пишет `data-sf-skeleton="menu"`; своего скелетона при загрузке данных нет ([Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`. Имя шаблона отрисовки; `default` — встроенный.
- `root-class` — `string`, по умолчанию пусто. Свои CSS-классы для нарисованного элемента.
- `root-style` — `string`, по умолчанию пусто. Свои стили для нарисованного элемента, например `max-width: 20rem`.
- `brand` — `string`, по умолчанию пусто.
- `logo` — `string`, по умолчанию пусто.
- `logo-href` — `string`, по умолчанию `#`.
- `searchable` — `boolean`, по умолчанию `false`.
- `collapsible` — `boolean`, по умолчанию `false`.
- `settings` — `boolean`, по умолчанию `true`.
- `settings-title` — `string`.
- `persistence-mode` — `string`, по умолчанию `local`, значения: `local`, `external`.
- `settings-mode` — `string`, по умолчанию `user`, значения: `user`, `system`.
- `settings-revision` — `integer`, по умолчанию `0`, значения: от 0.
- `system-settings-revision` — `integer`, по умолчанию `0`, значения: от 0.
- `allow-system-settings` — `boolean`, по умолчанию `false`.
- `search-placeholder` — `string`.
- `toggle-label` — `string`.
- `panel-class` — `string`, по умолчанию пусто.
- `search-mode` — `string`, по умолчанию `row`, значения: `row`, `panel`. Расположение поиска: строка под шапкой или панель, открываемая значком лупы в шапке.
- `search-label` — `string`. Доступное имя и подсказка лупы, открывающей панель поиска.
- `search-shortcut` — `string`, по умолчанию `mod+k`. Клавиша, которая открывает поиск из любого места страницы; пустое значение отключает её.
- `search-hint` — `string`. Короткая строка под пустым запросом, если она есть у приложения.
- `search-keys-hint` — `string`. Строка подсказок по клавишам внизу панели поиска.
- `search-title` — `string`. Заголовок над полем поиска в панели навигации.
- `current` — `string`, по умолчанию пусто. Строка, на которой находится страница, по её ключу; пусто — строка, по адресу которой открыта страница.
- `source` — `string`, по умолчанию `items`, значения: `items`, `port`. Откуда берутся записи: items (настройка и дети) или port (`simai.admin-navigation-port`, подключает приложение). С port меню остаётся скелетоном навигации, пока приложение не ответит.
- `expected-columns` — `integer`, по умолчанию `2`, значения: от 1; до 2. Сколько колонок у заготовки меню на широком экране, пока приложение не ответило: `1` — на странице без открытого раздела (например, панель управления), `2` — с открытым. С верным числом меню не меняет ширину после ответа; это не предел.
- `open` — `boolean`, по умолчанию `false`. Записывает страница, которая открывает меню своей кнопкой: на узком экране меню свёрнуто, пока false (`data-open`). Не записано — ничего не меняется.
- `compact` — `boolean`, по умолчанию `false`.
- `aria-label` — `string`, по умолчанию `Admin menu`, значения: не короче 1.
- `recent-results` — `array`, по умолчанию `[]`.
- `first-answer` — `object`. Первый ответ приложения на `navigation.load`, напечатанный сервером прямо в странице: меню сразу рисуется из него, без заготовки, а порт отвечает следом.

### Свойства в документе макета

Узел типа `smart.admin-menu` в [документе макета](/ru/guide/layouts/building/smart-component/) (`simai.composition.document.v1`) принимает:

- свойства: `template`, `brand`, `logo`, `logo-href`, `searchable`, `collapsible`, `settings`, `settings-title`, `persistence-mode`, `settings-mode`, `settings-revision`, `system-settings-revision`, `allow-system-settings`, `search-placeholder`, `toggle-label`, `panel-class`, `search-mode`, `search-label`, `search-shortcut`, `search-hint`, `search-keys-hint`, `search-title`, `current`, `source`, `expected-columns`, `open`, `compact`, `aria-label`.

Значения свойств те же, что у одноимённых атрибутов, и того же типа, что в списке атрибутов: строковое значение пишется строкой (`"size": "1"`, а не `1` — число отклоняется с диагностикой `schema_enum` или `schema_type`), логическое — `true` или `false`.

### Методы

- `applyExternalSettingsState(state: object, target: any)` — возвращает `null`. Применяет состояние и дерево, вычисленные бэкендом.
- `applySettingsResult(result: object)` — возвращает `null`. Фиксирует успешный ответ внешнего сохранения.
- `applySettingsError(error: object)` — возвращает `null`. Сохраняет черновик и показывает состояние ошибки или конфликта.
- `toggleMenuSettings()` — возвращает `null`. Входит в редактор настроек или выходит из него.
- `refresh()` — возвращает `object`. Повторно читает меню навигации у приложения после того, как что-то вне меню изменило его содержимое (звёздочка в заголовке страницы). На меню элементов не влияет.
- `setSearchResults(requestId: string, groups: array)` — возвращает `boolean`. Приложение отвечает на один поисковый запрос своими группами результатов. Ответ на запрос, который пользователь уже сменил, отбрасывается.
- `toggle(id: any, on: boolean)` — возвращает `object`. Добавить строку в избранное человека или убрать из него (`favourite.toggle`). Меню элементов отказывает.
- `setCompact(compact: boolean)` — возвращает `boolean`. Включает компактный режим навигации.
- `setHostPort(host: object)` — возвращает `object`. Подключает приложение, которое отвечает по порту `simai.admin-navigation-port`; меню рисует оболочку навигации вместо меню из пунктов.
- `setRecentResults(groups?: array)` — возвращает `boolean`. Что приложение предлагает пустому полю поиска: недавний список, пока приложение не задаст другой.
- `connectPort(port: object)` — возвращает `object`. Базовое действие SIMAI Framework `connect-port {port}`: передаёт порт навигации, он хранится как `sfPort`; отвечает исходом (`refused other-port` — для другого порта, `port-unsupported` — для версии, которую меню не принимает). То же делает `setHostPort`.

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components/names/). Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `sf-admin-menu-compact-change` — `detail`: `{ compact: boolean, source: "toggle" | "api" }`. Уведомляет оболочку приложения о режиме ширины.
- `sf-admin-menu-query` — `detail`: `{ kind: "menu" | "site" | "search", query: string, requestId?: string, intent?: string, payload?: object }`. Запрос: kind menu (меню элементов), site или search.
- `sf-admin-menu-settings-cancel` — `detail`: `{ target: "user" | "system", baseRevision: integer }`. Отбрасывает локальный черновик.
- `sf-admin-menu-settings-mode-change` — `detail`: `{ target: "user" | "system" }`. Запрашивает состояние для другого уровня настроек.
- `sf-admin-menu-settings-refresh` — `detail`: `{ target: "user" | "system", baseRevision: integer, profile: object }`. Запрашивает актуальное состояние бэкенда после конфликта.
- `sf-admin-menu-settings-save` — `detail`: `{ target: "user" | "system", baseRevision: integer, profile: object }`. Запрашивает сохранение текущих изменений.
- `sf-admin-menu-reset` — `detail`: `{ kind: "settings" | "view", target?: string, baseRevision?: number, id?: any, intent?: string, payload?: object }`. kind settings (меню элементов) или view.
- `sf-admin-menu-navigate` — `detail`: `{ id: any, key: string, href: string|null, region?: boolean }`. Приложение подтвердило применение item.open: страница теперь принадлежит этой строке. Для приложения, которое выполняет переход в собственном маршрутизаторе, а не по адресу из ответа.
- `sf-admin-menu-refresh` — `detail`: `{ kind: string, intent: string, payload: object, reason?: string|null, site?: any }`. У приложения запрошено `navigation.load` или `notifications.load`.
- `sf-admin-menu-open` — `detail`: `{ kind: string, intent: string, payload: object, id: any, href?: string|null, group?: string|null }`. Запрошено `item.open`, `site.switch`, `view.profile` или `search.choose`.
- `sf-admin-menu-toggle` — `detail`: `{ kind: string, intent: string, payload: object, id: any, on: boolean }`. Запрошено `favourite.toggle`.
- `sf-admin-menu-save` — `detail`: `{ kind: string, intent: string, payload: object, values?: object, id?: any, revision?: number|null }`. Запрошено сохранение предпочтения или `view.save`.
- `sf-admin-menu-create` — `detail`: `{ kind: string, intent: string, payload: object }`. Запрошено `view.create`.
- `sf-admin-menu-rename` — `detail`: `{ kind: string, intent: string, payload: object, id: any, title: string }`. Запрошено `view.rename`.
- `sf-admin-menu-delete` — `detail`: `{ kind: string, intent: string, payload: object, ids: array }`. Запрошено `view.delete`.
- `sf-admin-menu-read` — `detail`: `{ kind: string, intent: string, payload: object, ids: array }`. Запрошено `notifications.read`.
- `sf-admin-menu-sign-out` — `detail`: `{ kind: string, intent: string, payload: object }`. Запрошено `session.sign-out`.
- `sf-host-port-request` — `detail`: `{ component: object, context: object }`. При подключении спросить у страницы порт приложения. Страница, ответившая портом `simai.admin-navigation-port`, получает оболочку навигации; не ответившая ничем — меню из пунктов без изменений. Страница может и сама передать порт через `connectPort({port})`.

### Доступность

- Роль: навигация (`navigation`).
- Доступное имя: обязательно.
- Клавиши: `Tab`, `Enter`, `Space`, `Escape`.
- Фокус: Открытое меню ставит фокус на первый доступный пункт. Escape возвращает фокус на кнопку, открывшую меню; Tab и Shift+Tab закрывают меню и идут дальше от неё. Если кнопка исчезла после сохранения или отмены, фокус переходит на кнопку настроек или другую кнопку меню. Меню держится рядом со своей кнопкой при прокрутке внутри, смене размера окна, шрифта и направления письма; прокрутка страницы закрывает его. Во вложенном уровне фокус встаёт на кнопку «Назад», а «Назад» возвращает к пункту, который этот уровень открыл. Компактный поиск ставит фокус в поле поиска.

### Минимальная разметка

```html
<sf-admin-menu aria-label="Admin menu" searchable collapsible persistence-mode="external"></sf-admin-menu>
```

### Источник

- `simai/ui-pro@a046f296acd004487ae65015524a6231b006fdbc:components/src/smart/admin-menu`
- `simai/ui-pro@a046f296acd004487ae65015524a6231b006fdbc:components/src/smart/admin-menu/rule.js#name=cl-admin-menu`

## См. также

- [Шапка страницы](/ru/smart/composite/page-header/) — шапка страницы рядом с меню.
- [Представление свойств](/ru/pro/admin/property-view/) — карточка записи из того же пакета `pro`.
- [Admin Menu](/ru/components/internal/admin-menu/) — классы, на которых построено меню.
