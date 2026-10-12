---
title: "Активные строки и ячейки"
description: "Подсвечивает выбранную строку или ячейку таблицы и строку под указателем."
---

# Активные строки и ячейки

Класс `table-active` подсвечивает строку или ячейку фоном выбора, а
`table-hover` подсвечивает строку под указателем. Берите их для таблиц, где
строку выбирают или открывают щелчком.

## Пример

### Выбранная строка и ячейка

`table-active` на элементе `tr` подсвечивает строку, на элементе `td` — одну
ячейку.

:::example {id="utilities/tables/tables-active-rows-and-cells" label="table-active на строке и на ячейке"}
:::

### Строка под указателем

Наведите указатель на строку таблицы с классом `table-hover`.

:::example {id="utilities/tables/tables-active-rows-and-cells-hover" label="table-hover"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `table-active` | `--sf-table-accent-bg: var(--sf-table-active-bg); color: var(--sf-table-active-color)` | — |
| `table-hover` (`.table-hover > tbody > tr:hover > *`) | `--sf-table-accent-bg: var(--sf-table-hover-bg); color: var(--sf-table-hover-color)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-table-active-bg` | задаётся темой |
| `--sf-table-active-color` | задаётся темой |
| `--sf-table-hover-bg` | задаётся темой |
| `--sf-table-hover-color` | задаётся темой |

## Применение

Оба класса работают внутри таблицы с классом `table`: фон ячейки рисует
`table`, а классы только меняют его переменную `--sf-table-accent-bg`.

```html
<table class="table table-hover">
  <tbody>
    <tr class="table-active" aria-selected="true">…</tr>
    <tr>…</tr>
  </tbody>
</table>
```

`table-hover` ставят на таблицу; подсвечиваются строки `tbody`, шапка — нет.
`table-active` ставят на строку или ячейку, которая выбрана сейчас.

Цвета задают переменные таблицы:

| Переменная | Значение в классе `table` |
| :--- | :--- |
| `--sf-table-active-bg` | `var(--sf-surface-transparent-select)` |
| `--sf-table-active-color` | `var(--sf-on-surface)` |
| `--sf-table-hover-bg` | `var(--sf-surface-transparent-hover)` |
| `--sf-table-hover-color` | `var(--sf-on-surface)` |

## Ограничения

- Фон выбора совпадает с фоном полос
  [`table-stripe`](/ru/utilities/tables/tables-alternating-rows-and-columns/):
  в таблице с полосами выбранная строка не отличается от полосы. Кроме того,
  полосы и подсветка под указателем задают фон на ячейках и перекрывают
  `table-active` на строке; в такой таблице ставьте `table-active` на ячейки.
- Подсветка — только цвет. Выбранной строке нужен и признак для
  скринридера, например `aria-selected="true"` в таблице с ролью `grid`.
- Префиксов ширины экрана и состояния нет: `table-hover` сам реагирует на
  указатель.

## См. также

- [Чередование строк и столбцов](/ru/utilities/tables/tables-alternating-rows-and-columns/)
- [Параметры по умолчанию для таблиц](/ru/utilities/tables/tables-default-parameters/)
