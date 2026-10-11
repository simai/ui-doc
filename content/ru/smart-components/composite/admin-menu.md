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

Раздел собран из манифеста компонента выпуска `ui-9fb0297bb5c2` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

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

| Атрибут | Тип | По умолчанию | Значения | Назначение |
|:---|:---|:---|:---|:---|
| `template` | `string` | `default` | `default` | — |
| `brand` | `string` | пусто | — | — |
| `logo` | `string` | пусто | — | — |
| `logo-href` | `string` | `#` | — | — |
| `aria-label` | `string` | `Admin menu` | не короче 1 | — |
| `searchable` | `boolean` | `false` | — | — |
| `collapsible` | `boolean` | `false` | — | — |
| `settings` | `boolean` | `true` | — | — |
| `settings-title` | `string` | `Menu settings` | — | — |
| `compact` | `boolean` | `false` | — | — |
| `persistence-mode` | `string` | `local` | `local`, `external` | — |
| `settings-mode` | `string` | `user` | `user`, `system` | — |
| `settings-revision` | `integer` | `0` | от 0 | — |
| `system-settings-revision` | `integer` | `0` | от 0 | — |
| `allow-system-settings` | `boolean` | `false` | — | — |
| `search-placeholder` | `string` | `Search sections` | — | — |
| `toggle-label` | `string` | `Menu` | — | — |
| `panel-class` | `string` | пусто | — | — |
| `root-class` | `string` | пусто | — | — |
| `search-mode` | `string` | `row` | `row`, `panel` | Расположение поиска: строка под шапкой или панель, открываемая значком лупы в шапке. |
| `search-label` | `string` | `Search the admin (Ctrl+K)` | — | Доступное имя и подсказка лупы, открывающей панель поиска. |
| `search-shortcut` | `string` | `mod+k` | — | Клавиша, которая открывает поиск из любого места страницы; пустое значение отключает её. |
| `search-hint` | `string` | пусто | — | Короткая строка под пустым запросом, если она есть у хоста. |
| `search-keys-hint` | `string` | `↑↓ select · Enter open · Esc close` | — | Строка подсказок по клавишам внизу панели поиска. |
| `search-title` | `string` | пусто | — | Заголовок над полем поиска в панели навигации. |

### Методы

| Метод | Аргументы | Возвращает | Назначение |
|:---|:---|:---|:---|
| `applyExternalSettingsState()` | `state: object, target: any` | `null` | Применяет состояние и дерево, вычисленные бэкендом. |
| `applySettingsResult()` | `result: object` | `null` | Фиксирует успешный ответ внешнего сохранения. |
| `applySettingsError()` | `error: object` | `null` | Сохраняет черновик и показывает состояние ошибки или конфликта. |
| `setCompact()` | `compact: boolean` | `boolean` | Включает компактный режим навигации. |
| `toggleMenuSettings()` | — | `null` | Входит в редактор настроек или выходит из него. |
| `refresh()` | — | `object` | Повторно читает меню навигации у хоста после того, как что-то вне меню изменило его содержимое (звёздочка в заголовке страницы). На меню элементов не влияет. |

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

| Событие | `detail` | Когда |
|:---|:---|:---|
| `sf-admin-menu-compact-change` | `{ compact: boolean, source: string }` | Уведомляет оболочку хоста о режиме ширины. |
| `sf-admin-menu-search` | не описан | — |
| `sf-admin-menu-settings-cancel` | `{ target?: any }` | Отбрасывает локальный черновик. |
| `sf-admin-menu-settings-mode-change` | `{ target: any }` | Запрашивает состояние для другого уровня настроек. |
| `sf-admin-menu-settings-refresh` | `{ target: any, base_revision: integer, profile: object }` | Запрашивает актуальное состояние бэкенда после конфликта. |
| `sf-admin-menu-settings-reset` | `{ target: any, base_revision: integer }` | Запрашивает сброс выбранного уровня настроек. |
| `sf-admin-menu-settings-save` | `{ target: any, base_revision: integer, profile: object }` | Запрашивает сохранение текущих изменений. |
| `sf-host-port-request` | `{ component: object, context: object }` | Запрашивает у страницы порт хоста при подключении. Страница, ответившая `simai.admin-navigation-port`, получает навигационную оболочку; если страница не отвечает, отображается меню элементов без изменений. |
| `sf-admin-menu-navigate` | `{ key: string, href: string\|null }` | Хост подтвердил применение item.open: страница теперь принадлежит этой строке. Для хоста, который выполняет переход в собственном маршрутизаторе, а не по адресу из ответа. |

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

- `simai/larena-ui@98ad1a012a1750300a05cecef67ed2cbb91aa462:components/src/smart/admin-menu`
- `simai/larena-ui@98ad1a012a1750300a05cecef67ed2cbb91aa462:components/src/smart/admin-menu/rule.js#name=cl-admin-menu`
