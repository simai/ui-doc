---
title: "Breadcrumbs"
description: "Атрибуты, события и примеры Smart-компонента breadcrumbs."
---

# Breadcrumbs

Идентификатор: `smart.breadcrumbs`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-breadcrumbs>`.

Loader-статус: `registered`. Loader-правило: `cl-breadcrumbs`.

Поставляемые ассеты:
- `simai/ui-smart@f723cedb668ea5fd22b869766044833adbd649fb:smart/breadcrumbs/js/breadcrumbs.js`
- `simai/ui-smart@f723cedb668ea5fd22b869766044833adbd649fb:smart/breadcrumbs/template/default.js`

## Зависимости

- `component.breadcrumbs`
- `component.icons`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `items` | `items` | `String` | `[]` | `—` |
| `separator-icon` | `separatorIcon` | `String` | `'chevron_right'` | `—` |
| `home-icon` | `homeIcon` | `String` | `'home'` | `—` |
| `home-label` | `homeLabel` | `String` | `''` | `—` |
| `root-class` | `rootClass` | `String` | `''` | `—` |
| `item-class` | `itemClass` | `String` | `''` | `—` |
| `link-class` | `linkClass` | `String` | `''` | `—` |
| `current-class` | `currentClass` | `String` | `''` | `—` |
| `separator-class` | `separatorClass` | `String` | `''` | `—` |
| `container-class` | `containerClass` | `String` | `''` | `—` |
| `aria-label` | `ariaLabel` | `String` | `'Breadcrumb'` | `—` |
| `expand-on-ellipsis` | `expandOnEllipsis` | `Boolean` | `true` | `—` |
| `max-items` | `maxItems` | `Number` | `4` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`attributeChangedCallback()`, `cancelReadyCapture()`, `captureInitialItems()`, `connectedCallback()`, `disconnectItemObserver()`, `disconnectedCallback()`, `expandEllipsis()`, `get items()`, `get normalizedItems()`, `get sourceItems()`, `get state()`, `getCapturedItems()`, `getDisplayItems()`, `isItemNode()`, `mountComponent()`, `observeItemChildren()`, `onItemClick()`, `reindexItems()`, `scheduleReadyCapture()`, `setState()`.

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
<sf-breadcrumbs></sf-breadcrumbs>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@f723cedb668ea5fd22b869766044833adbd649fb:smart/breadcrumbs`
- `simai/ui@b130c2f5d1b4c710dba7c9230678e684a7eaad73:distr/rule/rule.json#name=cl-breadcrumbs`
