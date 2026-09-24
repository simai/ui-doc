---
title: "Tree Item"
description: "Атрибуты, события и примеры Smart-компонента tree-item."
---

# Tree Item

Идентификатор: `smart.tree-item`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-tree-item>`.

Loader-статус: `registered`. Loader-правило: `cl-tree-item`.

Поставляемые ассеты:
- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/tree-item/js/tree-item.js`
- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/tree-item/template/default.js`

## Зависимости

- `component.icon-buttons`
- `component.tree-item`
- `smart.icons`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `label` | `label` | `String` | `''` | `—` |
| `text` | `text` | `String` | `''` | `—` |
| `href` | `href` | `String` | `''` | `—` |
| `target` | `target` | `String` | `''` | `—` |
| `rel` | `rel` | `String` | `''` | `—` |
| `type` | `type` | `String` | `'folder'` | `['folder', 'file']` |
| `value` | `value` | `String` | `''` | `—` |
| `open` | `open` | `Boolean` | `false` | `—` |
| `selected` | `selected` | `Boolean` | `false` | `—` |
| `active` | `active` | `Boolean` | `false` | `—` |
| `disabled` | `disabled` | `Boolean` | `false` | `—` |
| `items-data` | `itemsData` | `Array` | `[]` | `—` |
| `open-icon` | `openIcon` | `String` | `'folder_open'` | `—` |
| `closed-icon` | `closedIcon` | `String` | `'folder'` | `—` |
| `icon` | `icon` | `Boolean` | `true` | `—` |
| `chevron-open-icon` | `chevronOpenIcon` | `String` | `'keyboard_arrow_down'` | `—` |
| `chevron-closed-icon` | `chevronClosedIcon` | `String` | `'chevron_right'` | `—` |
| `open-label` | `openLabel` | `String` | `'Open item'` | `—` |
| `close-label` | `closeLabel` | `String` | `'Close item'` | `—` |
| `root-class` | `rootClass` | `String` | `''` | `—` |
| `item-class` | `itemClass` | `String` | `''` | `—` |
| `container-class` | `containerClass` | `String` | `''` | `—` |
| `name-class` | `nameClass` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`captureInitialContent()`, `captureInitialItems()`, `captureSourceData()`, `close()`, `connectedCallback()`, `disconnectItemObserver()`, `disconnectedCallback()`, `get childItems()`, `get content()`, `get hasChildren()`, `get isFile()`, `get label()`, `get type()`, `isContentNode()`, `observeChildItems()`, `onToggle()`, `open()`, `setOpen()`, `toTreeItemData()`, `toggle()`.

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
| `sf-tree-item-click` | Компонент-специфичное событие из source-класса |
| `sf-tree-item-toggle` | Компонент-специфичное событие из source-класса |

## Минимальная разметка

```html
<sf-tree-item></sf-tree-item>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/tree-item`
- `simai/ui@cb1cda3016487e6b2be8c36b60bba0eea062d6a1:distr/rule/rule.json#name=cl-tree-item`
