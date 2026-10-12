---
title: "Точки градиента"
description: "Задаёт начальный, средний и конечный цвет фонового градиента классами from-, via- и to-."
---

# Точки градиента

Классы `from-*`, `via-*` и `to-*` задают начальный, средний и конечный цвет
фонового градиента. Сам градиент рисует класс вида — `bg-gradient-to-*` или
`gr-*`. Берите эту запись, когда удобнее думать «откуда — через что — куда».

## Пример

### С направлением

Линейный градиент `bg-gradient-to-r` с разными точками. Без `via-*` цвет идёт
прямо от начального к конечному.

:::example {id="utilities/background/background-gradient-stops" label="from-, via- и to- с bg-gradient-to-r"}
:::

### С видом градиента

Те же три точки в линейном, радиальном и коническом градиенте.

:::example {id="utilities/background/background-gradient-stops-types" label="from-, via- и to- с gr-line-3, gr-radial-3 и gr-conic-3"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `from-{значение}` | `--sf-gradient--color-1: var(--sf-{значение})` | `transparent`, `current`, `inherit`, `primary`, `secondary`, `tertiary`, `success`, `warning` |
| `via-{значение}` | `--sf-gradient--color-2: var(--sf-{значение})` | `transparent`, `current`, `inherit`, `primary`, `secondary`, `tertiary`, `success`, `warning` |
| `to-{значение}` | `--sf-gradient--color-3: var(--sf-{значение})` | `transparent`, `current`, `inherit`, `primary`, `secondary`, `tertiary`, `success`, `warning` |
| `from-surface-0` | `--sf-gradient--color-1: var(--sf-surface-0)` | — |
| `via-surface-0` | `--sf-gradient--color-2: var(--sf-surface-0)` | — |
| `to-surface-{значение}` | `--sf-gradient--color-3: var(--sf-surface-{значение})` | `0`, `1`, `2` |
| `from-surface-1` | `--sf-gradient--color-1: var(--sf-surface-1)` | — |
| `via-surface-1` | `--sf-gradient--color-2: var(--sf-surface-1)` | — |
| `from-surface-2` | `--sf-gradient--color-1: var(--sf-surface-2)` | — |
| `via-surface-2` | `--sf-gradient--color-2: var(--sf-surface-2)` | — |
| `from-on-surface` | `--sf-gradient--color-1: var(--sf-on-surface)` | — |
| `via-on-surface` | `--sf-gradient--color-2: var(--sf-on-surface)` | — |
| `to-on-surface` | `--sf-gradient--color-3: var(--sf-on-surface)` | — |
| `from-{значение}-container` | `--sf-gradient--color-1: var(--sf-{значение}-container)` | `primary`, `secondary`, `tertiary` |
| `via-{значение}-container` | `--sf-gradient--color-2: var(--sf-{значение}-container)` | `primary`, `secondary`, `tertiary` |
| `to-{значение}-container` | `--sf-gradient--color-3: var(--sf-{значение}-container)` | `primary`, `secondary`, `tertiary` |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-current` | `currentColor` |
| `--sf-inherit` | `inherit` |
| `--sf-surface-0` | `light-dark(var(--sf-white), var(--sf-neutral-5))` |
| `--sf-surface-1` | `light-dark(var(--sf-neutral-98), var(--sf-neutral-10))` |
| `--sf-surface-2` | `light-dark(var(--sf-neutral-95), var(--sf-neutral-15))` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-primary` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-primary-container` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))` |
| `--sf-secondary` | `light-dark(var(--sf-secondary-40), var(--sf-secondary-80))` |
| `--sf-secondary-container` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-50--alfa-24))` |
| `--sf-tertiary` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-tertiary-container` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-50--alfa-24))` |
| `--sf-success` | `light-dark(var(--sf-success-40), var(--sf-success-80))` |
| `--sf-warning` | `light-dark(var(--sf-warning-40), var(--sf-warning-80))` |

## Применение

### Как это работает

| Класс | Переменная |
| :--- | :--- |
| `from-*` | `--sf-gradient--color-1` |
| `via-*` | `--sf-gradient--color-2` |
| `to-*` | `--sf-gradient--color-3` |

Это те же переменные, что у классов `gr1-*`, `gr2-*` и `gr3-*`. Классы вида
подставляют недостающую точку: `bg-gradient-to-r from-primary to-tertiary`
рисует переход из двух цветов без `via-*`.

```html
<div class="bg-gradient-to-r from-primary to-tertiary h-d8"></div>
<div class="bg-gradient-to-b from-surface-0 to-primary-container h-f0"></div>
```

### Затухание

`to-transparent` растворяет цвет в фоне — для подложек под текстом поверх
картинки:

```html
<div class="bg-gradient-to-t from-on-surface to-transparent">…</div>
```

## Ограничения

- `from-*` нужен всегда: без начальной точки градиент не рисуется.
- Переменные наследуются: вложенный элемент с классом вида без своих точек
  берёт точки родителя.
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [Вид градиента](/ru/utilities/background/background-gradient-type/)
- [Градиент фона](/ru/utilities/background/background-gradient-background/)
