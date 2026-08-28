---
title: "Dropdown"
description: "API и runtime-контракт Smart-компонента dropdown в SIMAI Framework 5.4.0."
---

# Dropdown

Идентификатор: `smart.dropdown`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-dropdown>`.

Loader-статус: `registered`. Loader-правило: `cl-dropdown`.

Поставляемые ассеты:
- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/dropdown/js/dropdown.js`
- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/dropdown/template/default.js`

## Зависимости

- `component.dropdown`
- `component.icon-buttons`
- `component.inputs`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `size` | `size` | `String` | `'1'` | `—` |
| `type` | `type` | `String` | `'outlined'` | `['filled', 'outlined']` |
| `mode` | `mode` | `String` | `'select'` | `['tag', 'select']` |
| `multiple` | `multiple` | `Boolean` | `false` | `—` |
| `portal` | `portal` | `Boolean` | `false` | `—` |
| `value` | `value` | `String` | `''` | `—` |
| `name` | `name` | `String` | `''` | `—` |
| `label` | `label` | `String` | `''` | `—` |
| `required` | `required` | `Boolean` | `false` | `—` |
| `placeholder` | `placeholder` | `String` | `''` | `—` |
| `search-placeholder` | `searchPlaceholder` | `String` | `'Placeholder'` | `—` |
| `search` | `search` | `Boolean` | `true` | `—` |
| `disabled` | `disabled` | `Boolean` | `false` | `—` |
| `aria-label` | `ariaLabel` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`beforeRender()`, `captureOptions()`, `closeDropdown()`, `connectedCallback()`, `dispatchDropdownChange()`, `get ariaLabel()`, `get componentName()`, `get disabled()`, `get hiddenValue()`, `get label()`, `get mode()`, `get multiple()`, `get name()`, `get options()`, `get placeholder()`, `get portal()`, `get required()`, `get search()`, `get searchPlaceholder()`, `get selectedOptions()`, `get selectedValue()`, `get selectedValues()`, `get size()`, `get templateName()`, `get triggerText()`, `get type()`, `get value()`, `get visibleOptions()`, `handleDocumentClick()`, `handleOptionClick()`, `handleOptionKeydown()`, `handleSearchInput()`, `handleTriggerClick()`, `openDropdown()`, `positionPortalList()`, `removeDocumentListeners()`, `removePortalListeners()`, `removeSelectedValue()`, `selectValue()`, `set value()`, `syncDocumentListeners()`, `syncPortalListeners()`, `toggleDropdown()`.

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
<sf-dropdown></sf-dropdown>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/dropdown`
- `simai/ui@2742ed22730b3f37cd26ab72c03621637a464ee0:distr/rule/rule.json#name=cl-dropdown`
