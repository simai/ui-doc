---
title: "Цвет тени элемента"
description: "Окрашивает тень элемента цветовой ролью темы, в том числе при наведении и нажатии."
---

# Цвет тени элемента

Классы `shadow-{цвет}` окрашивают тень, которую рисуют классы
[тени элемента](/ru/utilities/shadows/element-shadow/). Берите их для цветного
свечения под акцентной кнопкой или карточкой статуса.

## Пример

### Роли

Под каждым образцом — класс цвета; ступень тени задаёт `shadow-3`.

:::example {id="utilities/shadows/element-color" label="Цвета тени"}
:::

### Состояния

Префикс меняет цвет тени только в состоянии. Наведите указатель на кнопку,
затем нажмите и удерживайте её.

:::example {id="utilities/shadows/element-color-states" label="hover: и active:"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `shadow-primary` | `--sf-shadow--color: var(--sf-primary); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-primary) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-primary) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-primary) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading); --sf-ui-shadow-1: 0 var(--sf-a2) var(--sf-a4) var(--sf-px) var(--sf-shadow--color-shading), 0 var(--sf-px) var(--sf-a3) 0 var(--sf-shadow--color-outline), 0 var(--sf-a2) var(--sf-a2) calc(-1 * var(--sf-px)) var(--sf-shadow--color-fill); --sf-ui-shadow-2: 0 var(--sf-a4) var(--sf-a8) var(--sf-a2) var(--sf-shadow--color-shading), 0 var(--sf-a2) var(--sf-a6) 0 var(--sf-shadow--color-outline), 0 var(--sf-a4) var(--sf-a4) calc(-1 * var(--sf-a2)) var(--sf-shadow--color-fill); --sf-ui-shadow-3: 0 var(--sf-a8) var(--sf-b6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a4) var(--sf-b2) 0 var(--sf-shadow--color-outline), 0 var(--sf-a8) var(--sf-a8) calc(-1 * var(--sf-a4)) var(--sf-shadow--color-fill); --sf-ui-shadow-4: 0 var(--sf-b6) var(--sf-c6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a8) var(--sf-c2) 0 var(--sf-shadow--color-outline), 0 var(--sf-b6) var(--sf-b6) calc(-1 * var(--sf-a8)) var(--sf-shadow--color-fill); --sf-ui-shadow-5: 0 var(--sf-c6) var(--sf-d6) var(--sf-a8) var(--sf-shadow--color-shading), 0 var(--sf-b6) var(--sf-d2) 0 var(--sf-shadow--color-outline), 0 var(--sf-c6) var(--sf-c6) calc(-1 * var(--sf-b6)) var(--sf-shadow--color-fill)` | — |
| `shadow-secondary` | `--sf-shadow--color: var(--sf-secondary); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-secondary) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-secondary) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-secondary) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading); --sf-ui-shadow-1: 0 var(--sf-a2) var(--sf-a4) var(--sf-px) var(--sf-shadow--color-shading), 0 var(--sf-px) var(--sf-a3) 0 var(--sf-shadow--color-outline), 0 var(--sf-a2) var(--sf-a2) calc(-1 * var(--sf-px)) var(--sf-shadow--color-fill); --sf-ui-shadow-2: 0 var(--sf-a4) var(--sf-a8) var(--sf-a2) var(--sf-shadow--color-shading), 0 var(--sf-a2) var(--sf-a6) 0 var(--sf-shadow--color-outline), 0 var(--sf-a4) var(--sf-a4) calc(-1 * var(--sf-a2)) var(--sf-shadow--color-fill); --sf-ui-shadow-3: 0 var(--sf-a8) var(--sf-b6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a4) var(--sf-b2) 0 var(--sf-shadow--color-outline), 0 var(--sf-a8) var(--sf-a8) calc(-1 * var(--sf-a4)) var(--sf-shadow--color-fill); --sf-ui-shadow-4: 0 var(--sf-b6) var(--sf-c6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a8) var(--sf-c2) 0 var(--sf-shadow--color-outline), 0 var(--sf-b6) var(--sf-b6) calc(-1 * var(--sf-a8)) var(--sf-shadow--color-fill); --sf-ui-shadow-5: 0 var(--sf-c6) var(--sf-d6) var(--sf-a8) var(--sf-shadow--color-shading), 0 var(--sf-b6) var(--sf-d2) 0 var(--sf-shadow--color-outline), 0 var(--sf-c6) var(--sf-c6) calc(-1 * var(--sf-b6)) var(--sf-shadow--color-fill)` | — |
| `shadow-tertiary` | `--sf-shadow--color: var(--sf-tertiary); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-tertiary) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-tertiary) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-tertiary) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading); --sf-ui-shadow-1: 0 var(--sf-a2) var(--sf-a4) var(--sf-px) var(--sf-shadow--color-shading), 0 var(--sf-px) var(--sf-a3) 0 var(--sf-shadow--color-outline), 0 var(--sf-a2) var(--sf-a2) calc(-1 * var(--sf-px)) var(--sf-shadow--color-fill); --sf-ui-shadow-2: 0 var(--sf-a4) var(--sf-a8) var(--sf-a2) var(--sf-shadow--color-shading), 0 var(--sf-a2) var(--sf-a6) 0 var(--sf-shadow--color-outline), 0 var(--sf-a4) var(--sf-a4) calc(-1 * var(--sf-a2)) var(--sf-shadow--color-fill); --sf-ui-shadow-3: 0 var(--sf-a8) var(--sf-b6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a4) var(--sf-b2) 0 var(--sf-shadow--color-outline), 0 var(--sf-a8) var(--sf-a8) calc(-1 * var(--sf-a4)) var(--sf-shadow--color-fill); --sf-ui-shadow-4: 0 var(--sf-b6) var(--sf-c6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a8) var(--sf-c2) 0 var(--sf-shadow--color-outline), 0 var(--sf-b6) var(--sf-b6) calc(-1 * var(--sf-a8)) var(--sf-shadow--color-fill); --sf-ui-shadow-5: 0 var(--sf-c6) var(--sf-d6) var(--sf-a8) var(--sf-shadow--color-shading), 0 var(--sf-b6) var(--sf-d2) 0 var(--sf-shadow--color-outline), 0 var(--sf-c6) var(--sf-c6) calc(-1 * var(--sf-b6)) var(--sf-shadow--color-fill)` | — |
| `shadow-error` | `--sf-shadow--color: var(--sf-error); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-error) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-error) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-error) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading); --sf-ui-shadow-1: 0 var(--sf-a2) var(--sf-a4) var(--sf-px) var(--sf-shadow--color-shading), 0 var(--sf-px) var(--sf-a3) 0 var(--sf-shadow--color-outline), 0 var(--sf-a2) var(--sf-a2) calc(-1 * var(--sf-px)) var(--sf-shadow--color-fill); --sf-ui-shadow-2: 0 var(--sf-a4) var(--sf-a8) var(--sf-a2) var(--sf-shadow--color-shading), 0 var(--sf-a2) var(--sf-a6) 0 var(--sf-shadow--color-outline), 0 var(--sf-a4) var(--sf-a4) calc(-1 * var(--sf-a2)) var(--sf-shadow--color-fill); --sf-ui-shadow-3: 0 var(--sf-a8) var(--sf-b6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a4) var(--sf-b2) 0 var(--sf-shadow--color-outline), 0 var(--sf-a8) var(--sf-a8) calc(-1 * var(--sf-a4)) var(--sf-shadow--color-fill); --sf-ui-shadow-4: 0 var(--sf-b6) var(--sf-c6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a8) var(--sf-c2) 0 var(--sf-shadow--color-outline), 0 var(--sf-b6) var(--sf-b6) calc(-1 * var(--sf-a8)) var(--sf-shadow--color-fill); --sf-ui-shadow-5: 0 var(--sf-c6) var(--sf-d6) var(--sf-a8) var(--sf-shadow--color-shading), 0 var(--sf-b6) var(--sf-d2) 0 var(--sf-shadow--color-outline), 0 var(--sf-c6) var(--sf-c6) calc(-1 * var(--sf-b6)) var(--sf-shadow--color-fill)` | — |
| `shadow-warning` | `--sf-shadow--color: var(--sf-warning); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-warning) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-warning) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-warning) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading); --sf-ui-shadow-1: 0 var(--sf-a2) var(--sf-a4) var(--sf-px) var(--sf-shadow--color-shading), 0 var(--sf-px) var(--sf-a3) 0 var(--sf-shadow--color-outline), 0 var(--sf-a2) var(--sf-a2) calc(-1 * var(--sf-px)) var(--sf-shadow--color-fill); --sf-ui-shadow-2: 0 var(--sf-a4) var(--sf-a8) var(--sf-a2) var(--sf-shadow--color-shading), 0 var(--sf-a2) var(--sf-a6) 0 var(--sf-shadow--color-outline), 0 var(--sf-a4) var(--sf-a4) calc(-1 * var(--sf-a2)) var(--sf-shadow--color-fill); --sf-ui-shadow-3: 0 var(--sf-a8) var(--sf-b6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a4) var(--sf-b2) 0 var(--sf-shadow--color-outline), 0 var(--sf-a8) var(--sf-a8) calc(-1 * var(--sf-a4)) var(--sf-shadow--color-fill); --sf-ui-shadow-4: 0 var(--sf-b6) var(--sf-c6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a8) var(--sf-c2) 0 var(--sf-shadow--color-outline), 0 var(--sf-b6) var(--sf-b6) calc(-1 * var(--sf-a8)) var(--sf-shadow--color-fill); --sf-ui-shadow-5: 0 var(--sf-c6) var(--sf-d6) var(--sf-a8) var(--sf-shadow--color-shading), 0 var(--sf-b6) var(--sf-d2) 0 var(--sf-shadow--color-outline), 0 var(--sf-c6) var(--sf-c6) calc(-1 * var(--sf-b6)) var(--sf-shadow--color-fill)` | — |
| `shadow-success` | `--sf-shadow--color: var(--sf-success); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-success) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-success) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-success) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading); --sf-ui-shadow-1: 0 var(--sf-a2) var(--sf-a4) var(--sf-px) var(--sf-shadow--color-shading), 0 var(--sf-px) var(--sf-a3) 0 var(--sf-shadow--color-outline), 0 var(--sf-a2) var(--sf-a2) calc(-1 * var(--sf-px)) var(--sf-shadow--color-fill); --sf-ui-shadow-2: 0 var(--sf-a4) var(--sf-a8) var(--sf-a2) var(--sf-shadow--color-shading), 0 var(--sf-a2) var(--sf-a6) 0 var(--sf-shadow--color-outline), 0 var(--sf-a4) var(--sf-a4) calc(-1 * var(--sf-a2)) var(--sf-shadow--color-fill); --sf-ui-shadow-3: 0 var(--sf-a8) var(--sf-b6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a4) var(--sf-b2) 0 var(--sf-shadow--color-outline), 0 var(--sf-a8) var(--sf-a8) calc(-1 * var(--sf-a4)) var(--sf-shadow--color-fill); --sf-ui-shadow-4: 0 var(--sf-b6) var(--sf-c6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a8) var(--sf-c2) 0 var(--sf-shadow--color-outline), 0 var(--sf-b6) var(--sf-b6) calc(-1 * var(--sf-a8)) var(--sf-shadow--color-fill); --sf-ui-shadow-5: 0 var(--sf-c6) var(--sf-d6) var(--sf-a8) var(--sf-shadow--color-shading), 0 var(--sf-b6) var(--sf-d2) 0 var(--sf-shadow--color-outline), 0 var(--sf-c6) var(--sf-c6) calc(-1 * var(--sf-b6)) var(--sf-shadow--color-fill)` | — |
| `shadow-on-surface` | `--sf-shadow--color: var(--sf-on-surface); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading); --sf-ui-shadow-1: 0 var(--sf-a2) var(--sf-a4) var(--sf-px) var(--sf-shadow--color-shading), 0 var(--sf-px) var(--sf-a3) 0 var(--sf-shadow--color-outline), 0 var(--sf-a2) var(--sf-a2) calc(-1 * var(--sf-px)) var(--sf-shadow--color-fill); --sf-ui-shadow-2: 0 var(--sf-a4) var(--sf-a8) var(--sf-a2) var(--sf-shadow--color-shading), 0 var(--sf-a2) var(--sf-a6) 0 var(--sf-shadow--color-outline), 0 var(--sf-a4) var(--sf-a4) calc(-1 * var(--sf-a2)) var(--sf-shadow--color-fill); --sf-ui-shadow-3: 0 var(--sf-a8) var(--sf-b6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a4) var(--sf-b2) 0 var(--sf-shadow--color-outline), 0 var(--sf-a8) var(--sf-a8) calc(-1 * var(--sf-a4)) var(--sf-shadow--color-fill); --sf-ui-shadow-4: 0 var(--sf-b6) var(--sf-c6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a8) var(--sf-c2) 0 var(--sf-shadow--color-outline), 0 var(--sf-b6) var(--sf-b6) calc(-1 * var(--sf-a8)) var(--sf-shadow--color-fill); --sf-ui-shadow-5: 0 var(--sf-c6) var(--sf-d6) var(--sf-a8) var(--sf-shadow--color-shading), 0 var(--sf-b6) var(--sf-d2) 0 var(--sf-shadow--color-outline), 0 var(--sf-c6) var(--sf-c6) calc(-1 * var(--sf-b6)) var(--sf-shadow--color-fill)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `active:`, `hover:`. Например: `active:shadow-primary`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-primary` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-shadow--alfa-fill` | `24%` |
| `--sf-shadow--alfa-outline` | `12%` |
| `--sf-shadow--alfa-shade` | `8%` |
| `--sf-a2` | `0.125rem` |
| `--sf-a4` | `0.25rem` |
| `--sf-px` | `1px` |
| `--sf-a3` | `0.1875rem` |
| `--sf-a8` | `0.5rem` |
| `--sf-a6` | `0.375rem` |
| `--sf-b6` | `1rem` |
| `--sf-b2` | `0.75rem` |
| `--sf-c6` | `2rem` |
| `--sf-c2` | `1.5rem` |
| `--sf-d6` | `4rem` |
| `--sf-d2` | `3rem` |
| `--sf-secondary` | `light-dark(var(--sf-secondary-40), var(--sf-secondary-80))` |
| `--sf-tertiary` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-error` | `light-dark(var(--sf-error-40), var(--sf-error-80))` |
| `--sf-warning` | `light-dark(var(--sf-warning-40), var(--sf-warning-80))` |
| `--sf-success` | `light-dark(var(--sf-success-40), var(--sf-success-80))` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |

## Применение

Цвета: `shadow-on-surface`, `shadow-primary`, `shadow-secondary`,
`shadow-tertiary`, `shadow-error`, `shadow-warning`, `shadow-success`. Класс
пересчитывает все слои тени из одного цвета с прозрачностью из токенов
`--sf-shadow--alfa-*`.

```html
<button class="bg-primary color-on-primary shadow-2 shadow-primary hover:shadow-3">Купить</button>
```

## Ограничения

- Класс цвета без класса ступени рисует тень первой ступени: ядро даёт её
  каждому элементу, в классе которого есть слово `shadow`.
- Цвет тени не действует на [падающую тень](/ru/utilities/shadows/drop-shadow/):
  у неё свои классы цвета.
- Префиксов ширины экрана у семейства нет; есть состояния `hover:` и `active:`.

## См. также

- [Тень элемента](/ru/utilities/shadows/element-shadow/)
- [Цвет падающей тени](/ru/utilities/shadows/drop-shadow-color/)
