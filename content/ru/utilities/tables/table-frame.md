---
title: "Таблица в рамке"
description: "Ставит таблицу в скруглённую рамку с прокруткой вбок, линиями между ячейками и залитой шапкой."
---

# Таблица в рамке

Класс `table-frame` ставят на обёртку таблицы. Обёртка становится рамкой со
скруглёнными углами: таблица внутри получает линии между ячейками и залитую
шапку, а если колонки не помещаются по ширине, рамка прокручивается вбок.
Берите его для справочных таблиц в тексте — параметров, свойств, сравнений, —
вместо собственных правил для `.table`.

## Пример

:::example {id="utilities/tables/table-frame" label="table-frame вокруг table"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `table-frame` | `--sf-table-frame-border-color: var(--sf-outline-variant); --sf-table-frame-radius: var(--sf-radius--surface); --sf-table-frame-background: var(--sf-surface-0); --sf-table-frame-head-color: var(--sf-on-surface); --sf-table-frame-head-padding-block: var(--sf-space-1); --sf-table-frame-cell-padding-block: var(--sf-space-1/2); --sf-table-frame-cell-padding-inline: var(--sf-space-1); --sf-table-frame-cell-min-inline-size: var(--sf-e0); width: 100%; inline-size: 100%; overflow: auto; border: var(--sf-px) solid var(--sf-table-frame-border-color); border-radius: var(--sf-table-frame-radius); background-color: var(--sf-table-frame-background); .table-frame > .table { width: 100%; inline-size: 100%; margin: 0; border: 0; border-radius: 0; border-collapse: separate; border-spacing: 0; word-break: normal; word-wrap: normal }; .table-frame > .table > :not(caption) > * > * { min-width: var(--sf-table-frame-cell-min-inline-size); min-inline-size: var(--sf-table-frame-cell-min-inline-size); padding-top: var(--sf-table-frame-cell-padding-block); padding-bottom: var(--sf-table-frame-cell-padding-block); padding-block: var(--sf-table-frame-cell-padding-block); padding-left: var(--sf-table-frame-cell-padding-inline); padding-right: var(--sf-table-frame-cell-padding-inline); padding-inline: var(--sf-table-frame-cell-padding-inline); border-width: var(--sf-0); border-inline-end: var(--sf-px) solid var(--sf-table-frame-border-color); border-bottom: var(--sf-px) solid var(--sf-table-frame-border-color); -webkit-border-after: var(--sf-px) solid var(--sf-table-frame-border-color); border-block-end: var(--sf-px) solid var(--sf-table-frame-border-color); text-align: start; vertical-align: top }; .table-frame > .table > :not(caption) > * > *:last-child { border-inline-end-width: var(--sf-0) }; .table-frame > .table > :last-child > tr:last-child > * { border-bottom-width: var(--sf-0); border-block-end-width: var(--sf-0) }; .table-frame > .table > thead > tr > * { --sf-on-surface-variant: var(--sf-on-surface-container--variant); padding-top: var(--sf-table-frame-head-padding-block); padding-bottom: var(--sf-table-frame-head-padding-block); padding-block: var(--sf-table-frame-head-padding-block); background-color: var(--sf-surface-container); background-color: var(--sf-table-frame-head-background, var(--sf-surface-container)); color: var(--sf-table-frame-head-color); font-weight: var(--sf-font-weight-bold); vertical-align: bottom }` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-outline-variant` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` |
| `--sf-radius--surface` | `var(--sf-radius-1)` |
| `--sf-surface-0` | `light-dark(var(--sf-white), var(--sf-neutral-5))` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-space-1` | `var(--sf-b2); от ширины lg: var(--sf-b6)` |
| `--sf-space-1/2` | `0.5rem; от ширины lg: 0.75rem` |
| `--sf-e0` | `5rem` |
| `--sf-px` | `1px` |
| `--sf-0` | `0` |
| `--sf-on-surface-container--variant` | `light-dark(var(--sf-neutral-35), var(--sf-neutral-80))` |
| `--sf-surface-container` | `light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16))` |
| `--sf-table-frame-head-background` | задаётся темой |
| `--sf-font-weight-bold` | `700` |

В CSS косую черту в имени экранируют: `var(--sf-space-1\/2)`.

## Применение

Оберните таблицу с классом `table` в элемент с классом `table-frame`:

```html
<div class="table-frame">
  <table class="table">
    <thead>…</thead>
    <tbody>…</tbody>
  </table>
</div>
```

Числа рамки задают открытые переменные класса. Чтобы изменить одну рамку,
задайте переменную на обёртке; чтобы изменить все — в теме проекта:

| Переменная | По умолчанию | Что задаёт |
|:---|:---|:---|
| `--sf-table-frame-border-color` | `var(--sf-outline-variant)` | Цвет рамки и линий между ячейками |
| `--sf-table-frame-radius` | `var(--sf-radius--surface)` | Скругление углов рамки |
| `--sf-table-frame-background` | `var(--sf-surface-0)` | Фон рамки и ячеек |
| `--sf-table-frame-head-background` | `var(--sf-surface-container)` | Заливка шапки |
| `--sf-table-frame-head-color` | `var(--sf-on-surface)` | Цвет текста шапки |
| `--sf-table-frame-head-padding-block` | `var(--sf-space-1)` | Отступ сверху и снизу в шапке |
| `--sf-table-frame-cell-padding-block` | `var(--sf-space-1/2)` | Отступ сверху и снизу в ячейке |
| `--sf-table-frame-cell-padding-inline` | `var(--sf-space-1)` | Отступ слева и справа в ячейке |
| `--sf-table-frame-cell-min-inline-size` | `var(--sf-e0)` | Наименьшая ширина ячейки |

## Ограничения

- Рамка рисуется обёрткой, а таблица внутри получает раздельные границы:
  при объединённых границах внешняя линия таблицы ложится поверх рамки, и углы
  выходят прямыми.
- Класс действует на таблицу — прямого потомка обёртки. Вложенные таблицы
  оформление не получают.
- Последняя колонка и последняя строка не рисуют свою линию: край рисует
  рамка.
- Префиксов ширины экрана и состояния нет.

## См. также

- [Параметры по умолчанию для таблиц](/ru/utilities/tables/tables-default-parameters/)
- [Границы таблицы](/ru/utilities/tables/table-border/)
