---
title: "Admin Menu"
description: "API и runtime-контракт Smart-компонента admin-menu в SIMAI Framework 5.4.0 candidate."
---

# Admin Menu

Идентификатор: `smart.admin-menu`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-admin-menu>`.

Loader-статус: `registered`. Loader-правило: `cl-admin-menu`.

Поставляемые ассеты:
- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/admin-menu/js/admin-menu.js`
- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/admin-menu/template/default.js`

## Зависимости

- `component.admin-menu`
- `component.badges`
- `component.icons`
- `component.inputs`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `"default"` | `—` |
| `brand` | `brand` | `String` | `""` | `—` |
| `logo` | `logo` | `String` | `""` | `—` |
| `logo-href` | `logoHref` | `String` | `"#"` | `—` |
| `aria-label` | `ariaLabel` | `String` | `"Admin menu"` | `—` |
| `searchable` | `searchable` | `Boolean` | `false` | `—` |
| `collapsible` | `collapsible` | `Boolean` | `false` | `—` |
| `settings` | `settings` | `Boolean` | `true` | `—` |
| `settings-title` | `settingsTitle` | `String` | `"Настройки меню"` | `—` |
| `compact` | `compact` | `Boolean` | `false` | `—` |
| `search-placeholder` | `searchPlaceholder` | `String` | `"Поиск по разделам"` | `—` |
| `count` | `count` | `Number` | `0` | `—` |
| `toggle-label` | `toggleLabel` | `String` | `"Меню"` | `—` |
| `panel-class` | `panelClass` | `String` | `""` | `—` |
| `root-class` | `rootClass` | `String` | `""` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`applyMenuItemSettings()`, `beforeRender()`, `bindContextEvent()`, `buildPanels()`, `captureInitialItems()`, `closeContextMenu()`, `connectedCallback()`, `contextEvent()`, `createDivider()`, `deleteItem()`, `disconnectItemObserver()`, `disconnectedCallback()`, `findItemByPanelId()`, `flattenMenuItems()`, `get bottomItems()`, `get items()`, `getDragAfterElement()`, `getItemRef()`, `getMainMenuSettings()`, `getMenuItemSettings()`, `getPortalContainer()`, `getSearchResults()`, `isContextMenuEvent()`, `isSameVisibleState()`, `itemNodeToData()`, `makeDraggable()`, `mapItems()`, `normalizeSearchText()`, `observeItemChildren()`, `observeMainResize()`, `openContextMenu()`, `openSearchResult()`, `patchMenuItemSettings()`, `persistMenuSettings()`, `pruneItemRefs()`, `removeMenuItemSettings()`, `renderContextMenu()`, `saveMenuSettings()`, `saveNewItemsData()`, `scheduleOverflowUpdate()`, `scoreSearchItem()`, `startSearch()`, `syncItemsOrderFromContainer()`, `toggleCompact()`, `toggleHidden()`, `toggleItemVisibility()`, `toggleMenuSettings()`, `toggleOpen()`, `togglePanel()`, `unbindContextEvent()`, `updateItemByPanelId()`, `updateMenuItemHeight()`, `updateOverflow()`.

## События

Все события всплывают (`bubbles`) и проходят границу Shadow DOM (`composed`).

| Событие | Когда возникает |
|:---|:---|
| `sf-connected` | Элемент подключён к DOM |
| `sf-disconnected` | Элемент отключён от DOM |
| `sf-before-render` | Начало цикла отрисовки |
| `sf-after-render` | Цикл отрисовки завершён |
| `sf-updated` | Свойства или разметка обновлены |
| `sf-props-change` | Изменились наблюдаемые свойства |

## Минимальная разметка

```html
<sf-admin-menu></sf-admin-menu>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/admin-menu`
- `simai/ui@2742ed22730b3f37cd26ab72c03621637a464ee0:distr/rule/rule.json#name=cl-admin-menu`
