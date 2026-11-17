---
title: "Размер полосок"
description: "Задаёт шаг между линиями полосатого фона — от 2 до 5 пикселей."
---

# Размер полосок

Классы `stripe-size-{n}` задают шаг узора, который рисуют классы
[полос](/ru/utilities/stripes/stripes/): расстояние от линии до следующей
линии. Толщина линии остаётся 1px. Берите крупный шаг для заметной сетки и
мелкий — для плотной фактуры.

## Пример

### Шкала

Под каждым образцом — класс шага; узор и цвет задают `stripe-1 stripe-primary`.

:::example {id="utilities/stripes/stripes-size" label="stripe-size-1 … stripe-size-4"}
:::

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте ширину
окна просмотра: с ширины `md` шаг сетки становится крупнее.

:::example {id="utilities/stripes/stripes-size-responsive" label="Шаг по ширине экрана"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `stripe-size-1` | `--sf-stripe--size: var(--sf-space-1/4)` | — |
| `stripe-size-2` | `--sf-stripe--size: var(--sf-space-1/3)` | — |
| `stripe-size-3` | `--sf-stripe--size: var(--sf-space-1/2)` | — |
| `stripe-size-4` | `--sf-stripe--size: var(--sf-space-1)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:stripe-size-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-space-1/4` | `0.25rem; от ширины lg: var(--sf-a4)` |
| `--sf-space-1/3` | `0.5rem; от ширины lg: var(--sf-a8)` |
| `--sf-space-1/2` | `0.5rem; от ширины lg: 0.75rem` |
| `--sf-space-1` | `var(--sf-b2); от ширины lg: var(--sf-b6)` |

В CSS косую черту в имени экранируют: `var(--sf-space-1\/4)`.

## Применение

| Класс | Шаг при `1rem = 16px` |
| :--- | :--- |
| `stripe-size-1` | 2px |
| `stripe-size-2` | 3px |
| `stripe-size-3` | 4px |
| `stripe-size-4` | 5px |

Шаг задан в `rem` и растёт вместе с кеглем. Класс меняет переменную
`--sf-stripe--size`.

```html
<div class="stripe-3 stripe-size-4 stripe-surface-container-strong h-f0"></div>
```

## Ограничения

- Без класса шаг равен толщине линии (1px), и полосы сливаются в сплошную
  заливку.
- У семейства нет префиксов состояния.

## См. также

- [Полосы](/ru/utilities/stripes/stripes/)
- [Цвет полос](/ru/utilities/stripes/stripes-color/)
