---
title: "Spinner"
description: "Атрибуты, события и примеры Smart-компонента spinner."
---

# Spinner

Идентификатор: `smart.spinner`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-spinner>`.

Loader-статус: `registered`. Loader-правило: `cl-spinner`.

Поставляемые ассеты:
- `simai/ui-smart@6f2ee779feb8979d1eb3f7a19cec8263e8f18887:smart/spinner/js/spinner.js`
- `simai/ui-smart@6f2ee779feb8979d1eb3f7a19cec8263e8f18887:smart/spinner/template/default.js`

## Зависимости

- `component.spinner`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `size` | `size` | `String` | `'1'` | `1/2`, `1`, `2`, `3` |
| `width` | `width` | `String` | `''` | `—` |
| `height` | `height` | `String` | `''` | `—` |
| `label` | `label` | `String` | `'Loading...'` | `—` |
| `kind` | `kind` | `String` | `'arc'` | `arc`, `dots` |
| `dots` | `dots` | `String` | `'16'` | `—` |
| `filled` | `filled` | `String` | `'6'` | `—` |
| `stroke-width` | `strokeWidth` | `String` | `''` | `—` |
| `dot-radius` | `dotRadius` | `String` | `''` | `—` |
| `infinite` | `infinite` | `Boolean` | `false` | `—` |
| `direction` | `direction` | `String` | `'clockwise'` | `—` |
| `root-class` | `rootClass` | `String` | `''` | `—` |

Прежнее имя продолжает работать и считается устаревшим: `variant` — как `kind`. В новой разметке берите имена осей.

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`afterUpdate()`, `get direction()`, `get dotRadius()`, `get dots()`, `get filled()`, `get height()`, `get infinite()`, `get label()`, `get size()`, `get strokeWidth()`, `get variant()`, `get width()`, `getSpinnerRoot()`, `refreshSpinner()`.

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
<sf-spinner></sf-spinner>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@6f2ee779feb8979d1eb3f7a19cec8263e8f18887:smart/spinner`
- `simai/ui@f92c9c211bb45f8d4312b3c3c9db70afa34a0910:distr/rule/rule.json#name=cl-spinner`
