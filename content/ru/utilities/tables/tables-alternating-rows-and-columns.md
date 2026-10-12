---
title: "Чередование строк и столбцов"
description: "Закрашивает каждую вторую строку или каждый второй столбец таблицы, чтобы глаз не терял ряд."
---

# Чередование строк и столбцов

Класс `table-stripe` закрашивает нечётные строки тела таблицы, `table-stripe-col` —
чётные столбцы. Берите их для длинных и широких таблиц, где взгляд легко
перескакивает на соседний ряд.

## Пример

Слева полосы по строкам, справа — по столбцам.

:::example {id="utilities/tables/tables-alternating-rows-and-columns" label="table-stripe и table-stripe-col"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `table-stripe` (`.table-stripe > tbody > tr:nth-of-type(odd) > *`) | `--sf-table-accent-bg: var(--sf-table-stripe-bg); color: var(--sf-table-stripe-color)` | — |
| `table-stripe-col` (`.table-stripe-col > :not(caption) > tr > :nth-child(2n)`) | `--sf-table-accent-bg: var(--sf-table-stripe-bg); color: var(--sf-table-stripe-color)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-table-stripe-bg` | задаётся темой |
| `--sf-table-stripe-color` | задаётся темой |

## Применение

Классы ставят на таблицу вместе с `table`: фон ячейки рисует `table`, а
полосы меняют его переменную.

```html
<table class="table table-stripe">…</table>
```

| Класс | Что закрашено |
| :--- | :--- |
| `table-stripe` | 1-я, 3-я, 5-я … строки `tbody`; шапка — нет |
| `table-stripe-col` | 2-й, 4-й … столбцы во всех строках, включая шапку |

Цвет полосы — переменная `--sf-table-stripe-bg`, по умолчанию
`var(--sf-surface-transparent-select)`; цвет текста в полосе —
`--sf-table-stripe-color`. Полупрозрачный фон читается на любой поверхности и
в обеих темах.

## Ограничения

- Полосы перекрывают `table-active` на строке и совпадают с ним по цвету; см.
  [Активные строки и ячейки](/ru/utilities/tables/tables-active-rows-and-cells/).
- Счёт строк идёт внутри каждого `tbody` заново.
- Префиксов ширины экрана и состояния нет.

## См. также

- [Активные строки и ячейки](/ru/utilities/tables/tables-active-rows-and-cells/)
- [Параметры по умолчанию для таблиц](/ru/utilities/tables/tables-default-parameters/)
