---
title: "Admin Menu"
description: "составной смарт-компонент боковой навигации административного приложения."
---

# Admin Menu

**Тип:** составной смарт-компонент (`kind: composite`).

Admin Menu объединяет навигацию, поиск, вложенные панели, компактный режим и
пользовательские настройки в законченный сценарий административного приложения.
Его следует использовать целиком, а не собирать прикладное меню напрямую из
низкоуровневого `component.admin-menu`.

Компонент принадлежит Larena: он живёт в репозитории `simai/larena-ui` (папка
`components/`, лицензия Apache-2.0), а не в выпуске Framework, и подключается
как пакет компонентов Loader с именем `larena`. Чтобы элемент загрузился,
объявите пакет до подключения Core:
`window.SF_BOOT_CONFIG = {packages: {larena: {base: '<путь к собранному пакету>/smart'}}}`.
Подробнее — в разделе [Подключение Smart-компонентов](/ru/guide/smart-components/connection/).

## Пример

:::example {id="smart-components/admin-menu/overview" label="Навигация с четырьмя уровнями"}
:::

## Зависимости

- `component.admin-menu`
- `component.badges`
- `component.icons`
- `component.inputs`
- `smart.context-menu`

`component.admin-menu` предоставляет визуальную основу. Состояние, поиск,
настройки и координация зависимостей принадлежат этому составному
Smart-компоненту.

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-257f66def2b8` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-admin-menu>` |
| Назначение | Вложенная навигация администратора с поиском, компактным режимом и редактируемыми личными или системными настройками. |
| Контракт | `smart.admin-menu`, версия `1.1.0` |
| Поставка | пакет `larena` (`SF_BOOT_CONFIG.packages.larena`) |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | `host-required` |

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

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

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

- `simai/larena-ui@b66760820f984486942252a5571dbae5dff93774:components/src/smart/admin-menu`
- `simai/larena-ui@b66760820f984486942252a5571dbae5dff93774:components/src/smart/admin-menu/rule.js#name=cl-admin-menu`
