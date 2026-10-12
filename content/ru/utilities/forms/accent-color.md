---
title: "Акцентный цвет"
description: "Красит отмеченный флажок, выбранный переключатель и заполненную часть ползунка в цвет роли темы."
---

# Акцентный цвет

Классы `accent-*` задают свойство `accent-color` — цвет, которым браузер рисует
отмеченный флажок, выбранный переключатель, заполненную часть ползунка и
полосу прогресса. Берите их, когда стандартный элемент формы без собственного
оформления должен совпасть с цветом интерфейса.

## Пример

### Роли

Под каждой парой — класс на флажке и на переключателе. `accent-current` берёт
цвет текста самого элемента формы, поэтому рядом с ним стоит класс цвета.

:::example {id="utilities/forms/accent-color" label="Акцентный цвет по ролям"}
:::

### Наведение

Префикс `hover:` меняет цвет, пока указатель над элементом. Наведите указатель
на флажок и на ползунок.

:::example {id="utilities/forms/accent-color-states" label="hover:accent-*"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `accent-transparent` | `accent-color: var(--sf-transparent)` | — |
| `accent-current` | `accent-color: var(--sf-current)` | — |
| `accent-on-surface` | `accent-color: var(--sf-on-surface)` | — |
| `accent-primary` | `accent-color: var(--sf-primary)` | — |
| `accent-secondary` | `accent-color: var(--sf-secondary)` | — |
| `accent-tertiary` | `accent-color: var(--sf-tertiary)` | — |
| `accent-error` | `accent-color: var(--sf-error)` | — |
| `accent-warning` | `accent-color: var(--sf-warning)` | — |
| `accent-success` | `accent-color: var(--sf-success)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:accent-transparent`.

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

Свойство наследуется: класс на элементе формы красит только его, класс на
обёртке — все флажки и переключатели внутри. Цвет галочки браузер подбирает
сам, чтобы она читалась на выбранном акценте.

```html
<label class="flex gap-2 items-center">
  <input type="checkbox" class="accent-primary" checked>
  Получать уведомления
</label>
```

Статусные роли подходят для согласия с условиями (`accent-success`) или
опасного действия (`accent-error`); основной выбор оставляйте на
`accent-primary`. Роли переключаются вместе с темой, поэтому один класс
читается и в светлой, и в тёмной теме.

## Ограничения

- `accent-color` действует только на элементы, которые браузер рисует сам:
  `checkbox`, `radio`, `range`, `progress`. Элементу с `appearance-none` и
  компонентам Framework со своей разметкой нужен их собственный цвет.
- Форму значка, толщину рамки и размер класс не меняет — это решает браузер.
- `accent-transparent` делает отметку прозрачной, и состояние флажка перестаёт
  быть видно. Не используйте его без другого признака выбора.

## См. также

- [Сброс стиля](/ru/utilities/forms/appearance/)
- [Цвет каретки](/ru/utilities/forms/caret-color/)
- [Цвет текста](/ru/utilities/text-formatting/text-color/)
- [Флажок](/ru/components/forms/checkbox/)
