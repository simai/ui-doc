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

Идентификатор: `smart.admin-menu`. Компонент доступен для проверки, но ещё не
прошёл полную продуктовую приёмку; жизненный цикл source manifest —
экспериментальный.

## Пример

:::example {id="smart-components/admin-menu/overview" label="Навигация с четырьмя уровнями"}
:::

## Теги и подключение

Custom Elements: `<sf-admin-menu>`.

Loader-статус: `registered`. Loader-правило: `cl-admin-menu`.

Поставляемые ассеты:
- `simai/ui-smart@004424a4b2e92b9cf09347b205637b475e1d8ba3:smart/admin-menu/js/admin-menu.js`
- `simai/ui-smart@004424a4b2e92b9cf09347b205637b475e1d8ba3:smart/admin-menu/template/default.js`

## Зависимости

- `component.admin-menu`
- `component.badges`
- `component.icons`
- `component.inputs`
- `smart.context-menu`

`component.admin-menu` предоставляет визуальную основу. Состояние, поиск,
настройки и координация зависимостей принадлежат этому составному
Smart-компоненту.

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

- `simai/ui-smart@004424a4b2e92b9cf09347b205637b475e1d8ba3:smart/admin-menu`
- `simai/ui@d81ccde2bdd5230f20ca0811c0812d2eff1f6064:distr/rule/rule.json#name=cl-admin-menu`
