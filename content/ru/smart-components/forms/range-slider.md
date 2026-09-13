---
title: "Range Slider"
description: "Атрибуты, события и примеры Smart-компонента range-slider."
---

# Range Slider

Идентификатор: `smart.range-slider`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-range-slider>`.

Loader-статус: `registered`. Loader-правило: `cl-range-slider`.

Поставляемые ассеты:
- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/range-slider/js/range-slider.js`
- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/range-slider/template/default.js`

## Зависимости

- `component.range-slider`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `min` | `min` | `String` | `'0'` | `—` |
| `max` | `max` | `String` | `'100'` | `—` |
| `start` | `start` | `String` | `''` | `—` |
| `value` | `value` | `String` | `''` | `—` |
| `multiple` | `multiple` | `Boolean` | `false` | `—` |
| `step` | `step` | `String` | `''` | `—` |
| `margin` | `margin` | `String` | `''` | `—` |
| `connect` | `connect` | `String` | `''` | `—` |
| `keyboard` | `keyboard` | `Boolean` | `true` | `—` |
| `label` | `label` | `String` | `'none'` | `—` |
| `prefix` | `prefix` | `String` | `''` | `—` |
| `suffix` | `suffix` | `String` | `''` | `—` |
| `decimals` | `decimals` | `String` | `''` | `—` |
| `tooltip-position` | `tooltipPosition` | `String` | `''` | `—` |
| `text-position` | `textPosition` | `String` | `''` | `—` |
| `label-position` | `labelPosition` | `String` | `''` | `—` |
| `disabled` | `disabled` | `Boolean` | `false` | `—` |
| `root-class` | `rootClass` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`addSliderListeners()`, `attributeChangedCallback()`, `get connect()`, `get decimals()`, `get disabled()`, `get hasExplicitMultiple()`, `get initialValue()`, `get keyboard()`, `get label()`, `get labelPosition()`, `get margin()`, `get max()`, `get min()`, `get multiple()`, `get prefix()`, `get start()`, `get state()`, `get step()`, `get suffix()`, `get textPosition()`, `get tooltipPosition()`, `get value()`, `getSliderRoot()`, `getValue()`, `lockLoaderObserver()`, `onChange()`, `onEnd()`, `onSet()`, `onSliderChange()`, `onSliderEnd()`, `onSliderSet()`, `onSliderStart()`, `onSliderUpdate()`, `onStart()`, `onUpdateValue()`, `removeSliderListeners()`, `set disabled()`, `set value()`, `setDisabled()`, `setState()`, `setValue()`, `shouldRebuildForValue()`, `syncAutoMultipleAttribute()`, `unlockLoaderObserver()`, `updateDom()`.

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
<sf-range-slider></sf-range-slider>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/range-slider`
- `simai/ui@1e886550a147bf63d7c3a4440af5e5855aaee485:distr/rule/rule.json#name=cl-range-slider`
