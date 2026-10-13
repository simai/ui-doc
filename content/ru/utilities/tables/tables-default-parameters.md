---
title: "Параметры по умолчанию для таблиц"
description: "Оформляет таблицу классом table: ширина, отступы ячеек, линии под строками и переменные цвета; table-sm делает её плотнее."
---

# Параметры по умолчанию для таблиц

Класс `table` задаёт таблице оформление Framework: полная ширина, отступы в
ячейках, линия под каждой строкой, цвета по ролям темы. На нём держатся
остальные классы таблиц — полосы, подсветка, рамки. `table-sm` уменьшает
отступы ячеек вдвое.

## Пример

### Таблица с классом и без

Слева таблица без класса, справа — с `table`.

:::example {id="utilities/tables/tables-default-parameters" label="Таблица без класса и с table"}
:::

### Компактная таблица

`table-sm` уменьшает отступы ячеек с 8px до 4px.

:::example {id="utilities/tables/tables-default-parameters-small" label="table и table table-sm"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `table` | `--sf-table-color: var(--sf-on-surface); --sf-table-border-color: var(--sf-outline-variant); --sf-table-accent-bg: rgba(0, 0, 0, 0); --sf-table-stripe-color: var(--sf-on-surface); --sf-table-stripe-bg: var(--sf-surface-transparent-select); --sf-table-active-color: var(--sf-on-surface); --sf-table-active-bg: var(--sf-surface-transparent-select); --sf-table-hover-color: var(--sf-on-surface); --sf-table-hover-bg: var(--sf-surface-transparent-hover); width: 100%; margin-bottom: var(--sf-b6); color: var(--sf-table-color); vertical-align: top; border-color: var(--sf-table-border-color); text-align: start; .table > :not(caption) > * > * { padding: 0.5rem 0.5rem; border-bottom-width: var(--sf-px); background-image: linear-gradient(var(--sf-table-accent-bg), var(--sf-table-accent-bg)) }; .table > tbody { vertical-align: inherit }; .table > thead { vertical-align: bottom }` | — |
| `table-sm` (`.table-sm > :not(caption) > * > *`) | `padding: 0.25rem 0.25rem` | — |
| `table-small` (`.table-small > :not(caption) > * > *`) | `padding: 0.25rem 0.25rem` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-outline-variant` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` |
| `--sf-surface-transparent-select` | `light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8))` |
| `--sf-surface-transparent-hover` | `light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4))` |
| `--sf-b6` | `1rem` |
| `--sf-px` | `1px` |

## Применение

```html
<table class="table">
  <thead>
    <tr><th>Город</th><th>Страна</th></tr>
  </thead>
  <tbody>
    <tr><td>Москва</td><td>Россия</td></tr>
  </tbody>
</table>
```

Что задаёт `table`:

- ширину `100%` и отступ `1rem` под таблицей;
- отступ `0.5rem` в каждой ячейке и линию `1px` под ней;
- выравнивание текста к началу строки, в ячейках — по верху, в шапке — по низу;
- переменные цвета, которые читают остальные классы таблиц.

| Переменная | По умолчанию | Что красит |
| :--- | :--- | :--- |
| `--sf-table-color` | `var(--sf-on-surface)` | текст |
| `--sf-table-border-color` | `var(--sf-outline-variant)` | линии |
| `--sf-table-accent-bg` | прозрачный | фон ячейки; его меняют полосы и подсветка |
| `--sf-table-stripe-bg`, `--sf-table-stripe-color` | `var(--sf-surface-transparent-select)`, `var(--sf-on-surface)` | полосы `table-stripe` |
| `--sf-table-active-bg`, `--sf-table-active-color` | `var(--sf-surface-transparent-select)`, `var(--sf-on-surface)` | `table-active` |
| `--sf-table-hover-bg`, `--sf-table-hover-color` | `var(--sf-surface-transparent-hover)`, `var(--sf-on-surface)` | `table-hover` |

Переменную задают на таблице, чтобы перекрасить её одну, или в теме проекта —
для всех таблиц.

`table-small` — второе имя `table-sm`; в разметке пишите `table-sm`. Отступ под
таблицей убирает `m-bottom-0`.

## Ограничения

- Вместе с классом подключаются правила для всех элементов `table` на
  странице: `border-collapse: collapse` и подпись `caption` под таблицей.
- Ячейки шапки `th` браузер выравнивает по центру: `table` задаёт
  выравнивание таблице, но `th` его не наследует. Чтобы шапка стояла над
  данными, поставьте ячейкам `th` класс `text-start`.
- Префиксов ширины экрана и состояния нет.

## См. также

- [Чередование строк и столбцов](/ru/utilities/tables/tables-alternating-rows-and-columns/)
- [Активные строки и ячейки](/ru/utilities/tables/tables-active-rows-and-cells/)
- [Границы таблицы](/ru/utilities/tables/table-border/)
- [Макет таблицы](/ru/utilities/tables/table-layout/)
- [Границы и интервалы таблицы](/ru/utilities/tables/table-border-spacing/)
