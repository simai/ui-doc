---
title: "Admin Menu"
description: "Даёт административному приложению боковую навигацию с вложенными разделами, поиском, компактным режимом и настройкой пунктов."
---

# Admin Menu

`<sf-admin-menu>` — боковая навигация административного приложения: вложенные
разделы, поиск, компактный режим и настройка порядка и видимости пунктов.
Берите его целиком, а не собирайте меню из классов
[Admin Menu](/ru/components/internal/admin-menu/): состояние, поиск и
настройки принадлежат этому компоненту. Заголовок, число записей и действия
страницы показывает [Page Header](/ru/smart-components/composite/page-header/).

Компонент поставляется пакетом `larena` из репозитория `simai/ui-admin`
(папка `components/`), а не выпуском Framework. Лицензия пакета — PolyForm
Small Business 1.0.0 или PolyForm Noncommercial 1.0.0, по запросу —
коммерческая лицензия SIMAI; в составе Larena — лицензия Larena.

## Пример

:::example {id="smart-components/admin-menu/overview" label="Навигация с четырьмя уровнями"}
:::

## Применение

### Подключение пакета

Элемент загружается, только если пакет `larena` объявлен до подключения Core:
`window.SF_BOOT_CONFIG = {packages: {larena: {base: '/assets/larena/<коммит пакета>/smart'}}}`.
Сборка пакета публикуется выпуском репозитория `simai/larena-ui`
(см. [Пакет `larena` для проекта без Larena](/ru/guide/introduction/structure/#пакет-larena-для-проекта-без-larena)). Подробнее — в разделе
[Подключение Smart-компонентов](/ru/guide/smart-components/connection/#подключение-к-странице).

### Два способа задать меню

Меню берёт пункты из разметки или у приложения через навигационный порт.

- Пункты в разметке — дочерние `sf-admin-menu-item`. Так меню работает без
  сервера; порядок и видимость пунктов человек настраивает сам.
- Навигационный порт `simai.admin-navigation-port` — приложение отдаёт меню
  целиком: сайты, дерево разделов, избранное, профили меню и данные
  пользователя. Меню ничего не хранит и обо всём, что делает человек,
  спрашивает приложение.

При подключении меню отправляет событие `sf-host-port-request`. Если страница
ответила портом, рисуется навигация порта; если не ответила — меню из
пунктов разметки.

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
`sf-admin-menu-search`. Событие приходит после паузы в наборе с
`event.detail` `{query, requestId}`; ответ передаётся методом
`setSearchResults(requestId, groups)`. Ответ на запрос, который человек уже
сменил, отбрасывается. `setRecentResults(groups)` задаёт, что показывать при
пустом поле, например недавно открытое.

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

Ширину колонки меню меняет [ручка ширины](/ru/smart-components/overlays/resizer/)
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
  ширину в первом кадре пишет сервер в `style` колонки (см. [Где хранится ширина](/ru/smart-components/overlays/resizer/#где-хранится-ширина)).

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
`{target, base_revision, profile}`; сброс — `sf-admin-menu-settings-reset`,
отмена — `sf-admin-menu-settings-cancel`. `target` — уровень настроек: `user`
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
`setHostPort` отклоняет с ошибкой.

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
[Page Header](/ru/smart-components/composite/page-header/). Если в ответе есть
`notifications`, меню рисует строку уведомлений с числом непрочитанных.

Переход по строке меню не выполняет: оно поднимает `item.open`, и после ответа
`applied` отмечает строку текущей и отправляет `sf-admin-menu-navigate` с
`{key, href}`. Приложение со своим маршрутизатором переходит по этому событию.
Открытая вторая колонка следует за текущей страницей: при первом ответе порта
и при каждой смене адреса она показывает корень, в котором лежит страница.
Колонку, которую человек закрыл, меню само не открывает.
Каждое намерение дублируется событием `sf-admin-menu-intent` с
`{intent, payload}`: по нему страница видит, что человек попросил, но отвечает
только порт.

Если избранное или разделы изменились вне меню — например, звездой в шапке
страницы, — вызовите `refresh()`: меню заново запросит `navigation.load`.

```js
document.addEventListener('sf-host-port-request', (event) => {
  if (event.detail.context?.owner !== 'admin-menu') return;
  event.detail.component.setHostPort({
    port: 'simai.admin-navigation-port',
    version: '1.0.0',
    capabilities: ['search', 'favourites', 'preferences'],
    raise: (intent, payload) => api.adminNavigation(intent, payload),
  });
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

Раздел собран из манифеста компонента выпуска `ui-c408b1c544f9` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-admin-menu>` |
| Назначение | Вложенная навигация администратора с поиском, компактным режимом и редактируемыми личными или системными настройками. |
| Контракт | `smart.admin-menu`, версия `1.1.0` |
| Поставка | пакет `larena` (`SF_BOOT_CONFIG.packages.larena`) |
| [Жизненный цикл](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию) | `host-required` |
| Заготовка до прихода кода | сервер пишет `data-sf-skeleton="menu"`; своего скелетона при загрузке данных нет ([Заготовка до прихода кода](/ru/guide/smart-components/states-and-loading/#заготовка-до-прихода-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`.
- `brand` — `string`, по умолчанию пусто.
- `logo` — `string`, по умолчанию пусто.
- `logo-href` — `string`, по умолчанию `#`.
- `aria-label` — `string`, по умолчанию `Admin menu`, значения: не короче 1.
- `searchable` — `boolean`, по умолчанию `false`.
- `collapsible` — `boolean`, по умолчанию `false`.
- `settings` — `boolean`, по умолчанию `true`.
- `settings-title` — `string`, по умолчанию `Menu settings`.
- `compact` — `boolean`, по умолчанию `false`.
- `persistence-mode` — `string`, по умолчанию `local`, значения: `local`, `external`.
- `settings-mode` — `string`, по умолчанию `user`, значения: `user`, `system`.
- `settings-revision` — `integer`, по умолчанию `0`, значения: от 0.
- `system-settings-revision` — `integer`, по умолчанию `0`, значения: от 0.
- `allow-system-settings` — `boolean`, по умолчанию `false`.
- `search-placeholder` — `string`, по умолчанию `Search sections`.
- `toggle-label` — `string`, по умолчанию `Menu`.
- `panel-class` — `string`, по умолчанию пусто.
- `root-class` — `string`, по умолчанию пусто.
- `search-mode` — `string`, по умолчанию `row`, значения: `row`, `panel`. Расположение поиска: строка под шапкой или панель, открываемая значком лупы в шапке.
- `search-label` — `string`, по умолчанию `Search the admin (Ctrl+K)`. Доступное имя и подсказка лупы, открывающей панель поиска.
- `search-shortcut` — `string`, по умолчанию `mod+k`. Клавиша, которая открывает поиск из любого места страницы; пустое значение отключает её.
- `search-hint` — `string`, по умолчанию пусто. Короткая строка под пустым запросом, если она есть у хоста.
- `search-keys-hint` — `string`, по умолчанию `↑↓ select · Enter open · Esc close`. Строка подсказок по клавишам внизу панели поиска.
- `search-title` — `string`, по умолчанию пусто. Заголовок над полем поиска в панели навигации.

### Свойства в документе макета

Узел типа `smart.admin-menu` в [документе макета](/ru/guide/layouts/building/smart-component/) (`simai.composition.document.v1`) принимает:

- свойства: `allow-system-settings`, `aria-label`, `brand`, `collapsible`, `compact`, `logo`, `logo-href`, `panel-class`, `persistence-mode`, `root-class`, `search-hint`, `search-keys-hint`, `search-label`, `search-mode`, `search-placeholder`, `search-shortcut`, `search-title`, `searchable`, `settings`, `settings-mode`, `settings-revision`, `settings-title`, `system-settings-revision`, `template`, `toggle-label`.

Значения свойств те же, что у одноимённых атрибутов, и того же типа, что в списке атрибутов: строковое значение пишется строкой (`"size": "1"`, а не `1` — число отклоняется с диагностикой `schema_enum` или `schema_type`), логическое — `true` или `false`.

### Методы

- `applyExternalSettingsState(state: object, target: any)` — возвращает `null`. Применяет состояние и дерево, вычисленные бэкендом.
- `applySettingsResult(result: object)` — возвращает `null`. Фиксирует успешный ответ внешнего сохранения.
- `applySettingsError(error: object)` — возвращает `null`. Сохраняет черновик и показывает состояние ошибки или конфликта.
- `setCompact(compact: boolean)` — возвращает `boolean`. Включает компактный режим навигации.
- `toggleMenuSettings()` — возвращает `null`. Входит в редактор настроек или выходит из него.
- `refresh()` — возвращает `object`. Повторно читает меню навигации у хоста после того, как что-то вне меню изменило его содержимое (звёздочка в заголовке страницы). На меню элементов не влияет.
- `setHostPort(host: object)` — возвращает `object`. Подключает хост порта simai.admin-navigation-port; меню рисует оболочку навигации вместо меню из пунктов.
- `setSearchResults(requestId: string, groups?: array)` — возвращает `boolean`. Хост отвечает на один поисковый запрос своими группами результатов. Ответ на запрос, который пользователь уже сменил, отбрасывается.
- `setRecentResults(groups?: array)` — возвращает `boolean`. Что хост предлагает пустому полю поиска: список недавнего, который действует, пока хост не задаст другой.

### События

Все события приходят на сам элемент и всплывают. Общие события базового элемента перечислены в главе [Жизненный цикл → Этапы](/ru/guide/smart-components/lifecycle/#этапы).

- `sf-admin-menu-compact-change` — `detail`: `{ compact: boolean, source: string }`. Уведомляет оболочку хоста о режиме ширины.
- `sf-admin-menu-search` — `detail` не описан.
- `sf-admin-menu-settings-cancel` — `detail`: `{ target?: any }`. Отбрасывает локальный черновик.
- `sf-admin-menu-settings-mode-change` — `detail`: `{ target: any }`. Запрашивает состояние для другого уровня настроек.
- `sf-admin-menu-settings-refresh` — `detail`: `{ target: any, base_revision: integer, profile: object }`. Запрашивает актуальное состояние бэкенда после конфликта.
- `sf-admin-menu-settings-reset` — `detail`: `{ target: any, base_revision: integer }`. Запрашивает сброс выбранного уровня настроек.
- `sf-admin-menu-settings-save` — `detail`: `{ target: any, base_revision: integer, profile: object }`. Запрашивает сохранение текущих изменений.
- `sf-host-port-request` — `detail`: `{ component: object, context: object }`. Запрашивает у страницы порт хоста при подключении. Страница, ответившая `simai.admin-navigation-port`, получает навигационную оболочку; если страница не отвечает, отображается меню элементов без изменений.
- `sf-admin-menu-navigate` — `detail`: `{ key: string, href: string|null }`. Хост подтвердил применение item.open: страница теперь принадлежит этой строке. Для хоста, который выполняет переход в собственном маршрутизаторе, а не по адресу из ответа.
- `sf-admin-menu-intent` — `detail`: `{ intent: string, payload: object }`. Что пользователь запросил у хоста: событие приходит для каждого намерения порта simai.admin-navigation-port, когда меню его поднимает. Хост отвечает через порт, а не через это событие.

### Доступность

- Роль: навигация (`navigation`).
- Доступное имя: обязательно.
- Клавиши: `Tab`, `Enter`, `Space`, `Escape`.
- Фокус: Контекстные меню после отрисовки переносят фокус на первый доступный нативный пункт. Escape возвращает фокус на нативный элемент, открывший меню; Tab/Shift+Tab закрывают меню и продолжают от него. Фокус снаружи сохраняется. Если сохранение или отмена удаляет открывший элемент, потерянный фокус `body` возвращается на элемент управления настройками или другой доступный элемент управления в этом Admin Menu. Общее владение порталом и устаревшие колбэки защищены. Геометрия всплывающего окна следует за нативным открывающим элементом, включая Smart-элементы с `display: contents`, LTR/RTL, адаптивное перемещение, изменения содержимого, шрифта и окна просмотра; `--sf-context-menu-viewport-space` выводится из шкалы отступов. Внутренняя прокрутка сохраняет меню; прокрутка документа снаружи закрывает его. Слои поиска и вложенного перехода делают неактивные панели инертными. Открытие вложенного слоя переносит фокус на его локализованную кнопку «Назад»; «Назад» возвращает фокус на соответствующий триггер дерева. Компактный поиск переносит фокус на открывшееся поле ввода. Размещение поиска и направленные шевроны учитывают LTR или RTL.

### Минимальная разметка

```html
<sf-admin-menu aria-label="Admin menu" searchable collapsible persistence-mode="external"></sf-admin-menu>
```

### Источник

- `simai/ui-admin@9f3e80fb16e3d66d860ddea8828f6640a0ac5ca4:components/src/smart/admin-menu`
- `simai/ui-admin@9f3e80fb16e3d66d860ddea8828f6640a0ac5ca4:components/src/smart/admin-menu/rule.js#name=cl-admin-menu`

## См. также

- [Page Header](/ru/smart-components/composite/page-header/) — шапка страницы рядом с меню.
- [Представление свойств](/ru/smart-components/composite/property-view/) — карточка записи из того же пакета `larena`.
- [Admin Menu](/ru/components/internal/admin-menu/) — классы, на которых построено меню.
