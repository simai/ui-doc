---
title: "Цвет каретки"
description: "Задаёт цвет мигающего курсора ввода в поле и текстовой области по роли темы."
---

# Цвет каретки

Классы `caret-*` задают свойство `caret-color` — цвет мигающего курсора, который
показывает место ввода. Берите их, когда каретка должна совпасть с акцентом
поля или выделить поле с ошибкой.

## Пример

Щёлкните в поле: каретка мигает цветом класса. С `caret-transparent` она не
видна.

:::example {id="utilities/forms/caret-color" label="Цвет каретки"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `caret-transparent` | `caret-color: var(--sf-transparent)` | — |
| `caret-current` | `caret-color: var(--sf-current)` | — |
| `caret-on-surface` | `caret-color: var(--sf-on-surface)` | — |
| `caret-primary` | `caret-color: var(--sf-primary)` | — |
| `caret-secondary` | `caret-color: var(--sf-secondary)` | — |
| `caret-tertiary` | `caret-color: var(--sf-tertiary)` | — |
| `caret-error` | `caret-color: var(--sf-error)` | — |
| `caret-warning` | `caret-color: var(--sf-warning)` | — |
| `caret-success` | `caret-color: var(--sf-success)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-current` | `currentColor` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-primary` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-secondary` | `light-dark(var(--sf-secondary-40), var(--sf-secondary-80))` |
| `--sf-tertiary` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-error` | `light-dark(var(--sf-error-40), var(--sf-error-80))` |
| `--sf-warning` | `light-dark(var(--sf-warning-40), var(--sf-warning-80))` |
| `--sf-success` | `light-dark(var(--sf-success-40), var(--sf-success-80))` |

## Применение

Каретку обычно красят в цвет рамки фокуса или статуса поля:

```html
<input class="border border-error caret-error" aria-invalid="true">
```

Без класса каретка берёт цвет текста поля. `caret-current` задаёт то же явно —
например, чтобы вернуть цвет текста внутри блока, где каретка перекрашена.

## Ограничения

- Префиксов ширины экрана и состояния у семейства нет: каретка видна только
  в поле с фокусом, поэтому `focus:` не нужен.
- `caret-transparent` скрывает место ввода. Оставляйте его только там, где
  позицию показывает что-то другое, — например, в поле с собственным курсором.

## См. также

- [Акцентный цвет](/ru/utilities/forms/accent-color/)
- [Цвет placeholder](/ru/utilities/forms/placeholder-color/)
- [Поля ввода](/ru/components/forms/inputs/)
