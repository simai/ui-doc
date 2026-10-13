---
title: "Границы и интервалы таблицы"
description: "Объединяет границы соседних ячеек таблицы или разделяет ячейки и задаёт интервал между ними."
---

# Границы и интервалы таблицы

Классы `border-collapse` и `border-separate` задают, сливаются ли границы
соседних ячеек в одну линию, а `border-spacing-*` — интервал между ячейками
по шкале отступов. Берите их, когда таблице нужна общая сетка линий или,
наоборот, ячейки-плашки с промежутками.

## Пример

### Объединённые и раздельные границы

У каждой ячейки своя рамка. С `border-collapse` рамки соседей сливаются в одну
линию, с `border-separate` у каждой ячейки остаётся своя.

:::example {id="utilities/tables/table-border-spacing" label="border-collapse и border-separate"}
:::

### Шкала интервалов

Интервал между ячейками по шкале. Под каждой таблицей — класс.

:::example {id="utilities/tables/table-border-spacing-scale" label="Шкала border-spacing"}
:::

### По одной оси

`border-spacing-x-*` раздвигает колонки, `border-spacing-y-*` — строки.

:::example {id="utilities/tables/table-border-spacing-axis" label="border-spacing-x и border-spacing-y"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `border-collapse` | `border-collapse: collapse` | — |
| `border-separate` | `border-collapse: separate` | — |
| `border-spacing-{значение}` | `border-spacing: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `border-spacing-x-0` | `border-spacing: var(--sf-space-0) 0` | — |
| `border-spacing-y-0` | `border-spacing: 0 var(--sf-space-0)` | — |
| `border-spacing-x-{значение}` | `border-spacing: var(--sf-space-{значение}) 0` | `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `border-spacing-y-{значение}` | `border-spacing: 0 var(--sf-space-{значение})` | `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-space-0` | `0` |
| `--sf-space-1/4` | `0.25rem; от ширины lg: var(--sf-a4)` |
| `--sf-space-1/3` | `0.5rem; от ширины lg: var(--sf-a8)` |
| `--sf-space-1/2` | `0.5rem; от ширины lg: 0.75rem` |
| `--sf-space-1` | `var(--sf-b2); от ширины lg: var(--sf-b6)` |
| `--sf-space-2` | `var(--sf-b6); от ширины lg: var(--sf-c0)` |
| `--sf-space-3` | `var(--sf-b6); от ширины lg: var(--sf-c2)` |
| `--sf-space-4` | `var(--sf-c2); от ширины lg: var(--sf-c6)` |
| `--sf-space-5` | `var(--sf-c6); от ширины lg: var(--sf-d0)` |
| `--sf-space-6` | `var(--sf-c6); от ширины lg: var(--sf-d2)` |
| `--sf-space-7` | `var(--sf-d0); от ширины lg: var(--sf-d6)` |
| `--sf-space-8` | `var(--sf-d2); от ширины lg: var(--sf-e0)` |

В CSS косую черту в имени экранируют: `var(--sf-space-1\/4)`.

## Применение

Интервал работает только в режиме раздельных границ, поэтому `border-spacing-*`
ставят вместе с `border-separate`:

```html
<table class="border-separate border-spacing-2">…</table>
```

Когда на странице есть таблица с классом
[`table`](/ru/utilities/tables/tables-default-parameters/), все элементы
`table` на ней получают `border-collapse: collapse`; `border-separate`
переключает таблицу в раздельный режим.

Шкала интервалов — та же, что у отступов, и на широком экране крупнее:

| Класс | До `lg` | От `lg` |
| :--- | ---: | ---: |
| `border-spacing-0` | 0 | 0 |
| `border-spacing-1/4` | 4px | 4px |
| `border-spacing-1/3` | 8px | 8px |
| `border-spacing-1/2` | 8px | 12px |
| `border-spacing-1` | 12px | 16px |
| `border-spacing-2` | 16px | 20px |
| `border-spacing-3` | 16px | 24px |
| `border-spacing-4` | 24px | 32px |
| `border-spacing-5` | 32px | 40px |
| `border-spacing-6` | 32px | 48px |
| `border-spacing-7` | 40px | 56px |
| `border-spacing-8` | 48px | 64px |

Значения приведены при `1rem = 16px`.

## Ограничения

- `border-spacing-x-*` задаёт интервал по горизонтали и обнуляет вертикальный,
  `border-spacing-y-*` — наоборот. Поэтому `border-spacing-x-4 border-spacing-y-2`
  не складываются: действует один класс. Для разных интервалов по осям задайте
  `border-spacing` своим правилом.
- До ширины `lg` соседние ступени `1/3` и `1/2`, `2` и `3`, `5` и `6` дают
  одинаковый интервал.
- Классы действуют только на таблицы и элементы с `display: table` и
  `inline-table`.
- Префиксов ширины экрана и состояния у семейств нет.

## См. также

- [Границы таблицы](/ru/utilities/tables/table-border/)
- [Параметры по умолчанию для таблиц](/ru/utilities/tables/tables-default-parameters/)
- [Макет таблицы](/ru/utilities/tables/table-layout/)
