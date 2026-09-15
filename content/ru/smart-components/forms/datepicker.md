---
title: "Datepicker"
description: "Атрибуты, события и примеры Smart-компонента datepicker."
---

# Datepicker

Идентификатор: `smart.datepicker`. Smart-компонент готов к использованию; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-datepicker>`.

Loader-статус: `registered`. Loader-правило: `cl-datepicker`.

Поставляемые ассеты:
- `simai/ui-smart@400d80e501ca5e6816ba8f96b0ca18f01c0626c9:smart/datepicker/js/datepicker.js`
- `simai/ui-smart@400d80e501ca5e6816ba8f96b0ca18f01c0626c9:smart/datepicker/template/default.js`

## Зависимости

- `component.datepicker`
- `smart.buttons`
- `smart.icon-buttons`
- `smart.inputs`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `value` | `value` | `String` | `''` | `—` |
| `date` | `date` | `String` | `''` | `—` |
| `start-value` | `startValue` | `String` | `''` | `—` |
| `end-value` | `endValue` | `String` | `''` | `—` |
| `max-date` | `maxDate` | `String` | `''` | `—` |
| `min-date` | `minDate` | `String` | `''` | `—` |
| `range` | `range` | `Boolean` | `false` | `—` |
| `month` | `month` | `Number` | `null` | `—` |
| `year` | `year` | `Number` | `null` | `—` |
| `context` | `context` | `String` | `''` | `—` |
| `week-start` | `weekStart` | `Number` | `1` | `—` |
| `locale` | `locale` | `String` | `''` | `—` |
| `format` | `format` | `String` | `'DD.MM.YYYY'` | `—` |
| `root-class` | `rootClass` | `String` | `''` | `—` |
| `close-on-select` | `closeOnSelect` | `Boolean` | `true` | `—` |
| `input` | `input` | `Boolean` | `true` | `—` |
| `open` | `open` | `Boolean` | `false` | `—` |
| `portal` | `portal` | `Boolean` | `true` | `—` |
| `input-type` | `inputType` | `String` | `'bordered'` | `—` |
| `input-size` | `inputSize` | `String` | `'1'` | `—` |
| `input-name` | `inputName` | `String` | `''` | `—` |
| `placeholder` | `placeholder` | `String` | `''` | `—` |
| `icon-start` | `iconStart` | `String` | `'calendar_today'` | `—` |
| `input-root-class` | `inputRootClass` | `String` | `''` | `—` |
| `mask` | `mask` | `Boolean` | `false` | `—` |
| `mask-pattern` | `maskPattern` | `String` | `''` | `—` |
| `mask-lazy` | `maskLazy` | `String` | `false` | `—` |
| `mask-placeholder-char` | `maskPlaceholderChar` | `String` | `'_'` | `—` |
| `mask-options` | `maskOptions` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`closePanel()`, `connectedCallback()`, `emitChange()`, `get componentName()`, `get contextMode()`, `get data()`, `get date()`, `get days()`, `get displayDate()`, `get displayValue()`, `get endDate()`, `get endValue()`, `get format()`, `get formattedEndValue()`, `get formattedStartValue()`, `get formattedValue()`, `get iconStart()`, `get input()`, `get inputName()`, `get inputRootClass()`, `get inputSize()`, `get inputType()`, `get locale()`, `get mask()`, `get maskLazy()`, `get maskOptions()`, `get maskPattern()`, `get maskPlaceholderChar()`, `get maxDate()`, `get minDate()`, `get month()`, `get months()`, `get normalizedRange()`, `get open()`, `get placeholder()`, `get portal()`, `get primaryDate()`, `get range()`, `get selectedDate()`, `get startDate()`, `get startValue()`, `get templateName()`, `get value()`, `get weekStart()`, `get year()`, `get yearPageEnd()`, `get yearPageStart()`, `get years()`, `getClosestEnabledMonth()`, `getYearPageStart()`, `handleDocumentClick()`, `handleDocumentKeydown()`, `handleInputClick()`, `handlePanelClick()`, `openPanel()`, `positionPanel()`, `removeOverlayListeners()`, `selectDate()`, `selectMonth()`, `selectRangeDate()`, `selectYear()`, `set date()`, `set endValue()`, `set month()`, `set startValue()`, `set value()`, `set year()`, `setContext()`, `setMaxDate()`, `setMinDate()`, `shiftYearPage()`, `syncOverlayListeners()`, `toggleContext()`, `togglePanel()`, `upgradeProperty()`.

`left-icon` поддерживается как прежнее имя. В новой разметке используйте
`icon-start`: положение календаря тогда остаётся правильным и в LTR, и в RTL.

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
| `sf-change` | Компонент-специфичное событие из source-класса |

## Минимальная разметка

```html
<sf-datepicker></sf-datepicker>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@400d80e501ca5e6816ba8f96b0ca18f01c0626c9:smart/datepicker`
- `simai/ui@8c22fe2b80bb3bb88ec40dd34bbcddffb65f27d2:distr/rule/rule.json#name=cl-datepicker`
