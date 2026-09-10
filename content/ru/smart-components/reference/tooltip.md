---
title: "Tooltip"
description: "API и runtime-контракт Smart-компонента tooltip в SIMAI Framework 5.4.0."
---

# Tooltip

Идентификатор: `smart.tooltip`. Текущий source-кандидат прошёл сценарную
проверку; опубликованная ниже asset projection остаётся закреплённой за
выпущенной версией Framework до следующего совместимого релиза.

`<sf-tooltip>` создаёт поверхность подсказки. Самостоятельно она остаётся
видимой и не управляет триггером — это сохраняет совместимость с Range Slider и
другими владельцами позиционирования. Для обычного hover/focus-сценария
поместите Smart surface рядом с нативным триггером в
`.sf-tooltip-anchor` и свяжите коротким `data-tooltip`.

## Теги и подключение

Custom Elements: `<sf-tooltip>`.

Loader-статус: `registered`. Loader-правило: `cl-tooltip`.

Поставляемые ассеты:
- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/tooltip/js/tooltip.js`
- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/tooltip/template/default.js`

## Зависимости

- `component.tooltip`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `type` | `type` | `String` | `'light'` | `light`, `dark` |
| `size` | `size` | `String` | `'1'` | `1/3`, `1/2`, `1`, `2`, `3` |
| `arrow` | `arrow` | `String` | `'none'` | `none`, `top-center`, `bottom-center`, `inline-start`, `inline-end`, `bottom-inline-start`, `bottom-inline-end` |
| `text` | `text` | `String` | `''` | `—` |
| `supporting-text` | `supportingText` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

Отдельный публичный метод в source-классе не подтверждён; используйте атрибуты и DOM events.

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
<span class="sf-tooltip-anchor">
  <button type="button" data-tooltip="help-tooltip"
    aria-describedby="help-tooltip">Справка</button>
  <sf-tooltip id="help-tooltip" text="Короткое пояснение"
    type="dark" arrow="bottom-center" hidden></sf-tooltip>
</span>
```

## Доступность

Поверхность получает `role="tooltip"`, а Framework сохраняет и дополняет
`aria-describedby` триггера. Tooltip не получает фокус, не использует
`aria-expanded` или `aria-haspopup`, открывается при hover/focus и
закрывается по Escape без переноса фокуса. Интерактивное содержимое требует
диалога или popover.

## Источник

- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/tooltip`
- `simai/ui@2742ed22730b3f37cd26ab72c03621637a464ee0:distr/rule/rule.json#name=cl-tooltip`
