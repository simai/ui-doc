---
title: "Цвет полос"
description: "Окрашивает линии полосатого фона цветовой ролью темы."
---

# Цвет полос

Классы `stripe-{цвет}` задают цвет линий, которые рисуют классы
[полос](/ru/utilities/stripes/stripes/). Берите мягкие цвета для фона-заглушки
и акцентные — для выделенной области.

## Пример

Под каждым образцом — класс цвета; узор и шаг задают `stripe-3 stripe-size-4`.

:::example {id="utilities/stripes/stripes-color" label="Цвета полос"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `stripe-transparent` | `--sf-stripe--color: var(--sf-transparent)` | — |
| `stripe-current` | `--sf-stripe--color: var(--sf-current)` | — |
| `stripe-inherit` | `--sf-stripe--color: var(--sf-inherit)` | — |
| `stripe-surface-transparent-overlay` | `--sf-stripe--color: var(--sf-surface-transparent-overlay)` | — |
| `stripe-on-surface` | `--sf-stripe--color: var(--sf-on-surface)` | — |
| `stripe-primary` | `--sf-stripe--color: var(--sf-primary)` | — |
| `stripe-primary-container` | `--sf-stripe--color: var(--sf-primary-container)` | — |
| `stripe-secondary` | `--sf-stripe--color: var(--sf-secondary)` | — |
| `stripe-secondary-container` | `--sf-stripe--color: var(--sf-secondary-container)` | — |
| `stripe-tertiary` | `--sf-stripe--color: var(--sf-tertiary)` | — |
| `stripe-tertiary-container` | `--sf-stripe--color: var(--sf-tertiary-container)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-current` | `currentColor` |
| `--sf-inherit` | `inherit` |
| `--sf-surface-transparent-overlay` | `light-dark(var(--sf-neutral-50--alfa-32), var(--sf-neutral-90--alfa-32))` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-primary` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-primary-container` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))` |
| `--sf-secondary` | `light-dark(var(--sf-secondary-40), var(--sf-secondary-80))` |
| `--sf-secondary-container` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-50--alfa-24))` |
| `--sf-tertiary` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-tertiary-container` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-50--alfa-24))` |

## Применение

| Задача | Классы |
| :--- | :--- |
| Заметные линии | `stripe-on-surface`, `stripe-primary`, `stripe-secondary`, `stripe-tertiary` |
| Тихие линии | `stripe-surface-transparent-overlay`, `stripe-primary-container`, `stripe-secondary-container`, `stripe-tertiary-container` |
| Цвет текста | `stripe-current` |
| Убрать линии, сохранив класс узора | `stripe-transparent` |

Класс меняет переменную `--sf-stripe--color`; без класса цвета линии берут
`surface-inverse`.

```html
<div class="stripe-4 stripe-size-4 stripe-primary-container h-e0"></div>
```

## Ограничения

- `stripe-inherit` берёт значение переменной у родителя — то же, что
  наследует элемент без класса цвета.
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [Полосы](/ru/utilities/stripes/stripes/)
- [Размер полос](/ru/utilities/stripes/stripes-size/)
