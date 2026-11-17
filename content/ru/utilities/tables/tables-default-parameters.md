---
title: "Параметры по умолчанию для таблиц"
description: "Оформляет таблицу классом table: ширина, отступы ячеек, линии под строками и переменные цвета; table-sm уменьшает отступы ячеек."
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

### Меньшие отступы в ячейках

`table-sm` уменьшает отступы ячеек с 8px до 4px. Это не плотность
интерфейса: компактную плотность задаёт область страницы
([Плотность](/ru/guide/size-and-type/density/)), а `table-sm` меняет только
отступы этой таблицы.

:::example {id="utilities/tables/tables-default-parameters-small" label="table и table table-sm"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `table` | `--sf-table-color: var(--sf-on-surface); --sf-table-border-color: var(--sf-outline-variant); --sf-table-accent-bg: var(--sf-transparent); --sf-table-stripe-color: var(--sf-on-surface); --sf-table-stripe-bg: var(--sf-surface-state-hover); --sf-table-active-color: var(--sf-on-surface); --sf-table-active-bg: var(--sf-surface-state-select); --sf-table-hover-color: var(--sf-on-surface); --sf-table-hover-bg: var(--sf-surface-state-select); width: 100%; inline-size: 100%; margin-bottom: var(--sf-b6); -webkit-margin-after: var(--sf-b6); margin-block-end: var(--sf-b6); color: var(--sf-table-color); vertical-align: top; border-color: var(--sf-table-border-color); text-align: start; .table > :not(caption) > * > * { height: var(--sf-ui-1--control-height); block-size: var(--sf-ui-1--control-height); padding: calc(calc(var(--sf-ui-2--control-height) - 2 * var(--sf-text-height-1) - var(--sf-px)) / 2) calc(var(--sf-space-1) / 2); border-bottom-width: var(--sf-px); border-block-end-width: var(--sf-px); background-image: linear-gradient(var(--sf-table-accent-bg), var(--sf-table-accent-bg)) }; .table > :not(caption) > * > :where(:first-child) { padding-inline-start: var(--sf-space-1) }; .table > :not(caption) > * > :where(:last-child) { padding-inline-end: var(--sf-space-1) }; .table > thead { vertical-align: middle }; .table > tbody { vertical-align: middle }; .table > tfoot { vertical-align: middle }; .table > thead > tr > th { text-align: start }; .table > tbody > tr > th[scope=row] { text-align: start }; .table > thead > tr > th { color: var(--sf-on-surface-variant); font-weight: var(--sf-weight--medium) }; .table > tbody > tr > th[scope=row] { font-weight: var(--sf-font-weight-bold) }; .table > tbody > tr:where(:hover) > * { --sf-table-accent-bg: var(--sf-table-hover-bg); color: var(--sf-table-hover-color); --sf-surface-underlay: var(--sf-surface-place-solid); --sf-surface-place-fill: var(--sf-table-accent-bg) }; .table > tbody > tr[aria-selected=true] > * { --sf-table-accent-bg: var(--sf-table-active-bg); color: var(--sf-table-active-color); --sf-surface-underlay: var(--sf-surface-place-solid); --sf-surface-place-fill: var(--sf-table-accent-bg) }; .table > tbody > tr[aria-selected=true] > :first-child { box-shadow: inset calc(var(--sf-px) * 2) 0 0 var(--sf-primary) }; .table > :not(caption) > * > :where(:has(> sf-checkbox:not(.does-not-exist):only-child)) { width: 0; inline-size: 0; white-space: nowrap }; .table > :not(caption) > * > :where(:has(> sf-button-icon:not(.does-not-exist):only-child)) { width: 0; inline-size: 0; white-space: nowrap }; .table > :not(caption) > * > :where(:has(> sf-icon-button:not(.does-not-exist):only-child)) { width: 0; inline-size: 0; white-space: nowrap }; .table > :not(caption) > * > :where(:has(> input[type=checkbox]:only-child)) { width: 0; inline-size: 0; white-space: nowrap }; .table > tbody > tr > * > a:where([href]:not(.sf-button)) { color: var(--sf-link); text-decoration-color: currentColor; text-underline-offset: var(--sf-a3) }; .table > tbody > tr > * > a:where([href]:not(.sf-button)):hover { text-decoration-line: underline }; .table > tbody > tr > * > a:where([href]:not(.sf-button)).focus-visible { text-decoration-line: underline }; .table > tbody > tr > * > a:where([href]:not(.sf-button)):focus-visible { text-decoration-line: underline }; .table > :not(caption) > * > * > .line-clamp-2 { margin-bottom: clamp(-1 * var(--sf-px), calc(var(--sf-ui-2--control-height) - 2 * var(--sf-text-height-1) - var(--sf-px)), 0px); -webkit-margin-after: clamp(-1 * var(--sf-px), calc(var(--sf-ui-2--control-height) - 2 * var(--sf-text-height-1) - var(--sf-px)), 0px); margin-block-end: clamp(-1 * var(--sf-px), calc(var(--sf-ui-2--control-height) - 2 * var(--sf-text-height-1) - var(--sf-px)), 0px) }; .table > caption { padding-top: var(--sf-space-1/2); padding-bottom: var(--sf-space-1/2); padding-block: var(--sf-space-1/2); color: var(--sf-on-surface-variant); font-size: var(--sf-text-size-1/2); line-height: var(--sf-text-height-1/2); text-align: start }; .table > caption.sr-only { padding: 0 }; .table .table-numeric { font-feature-settings: "tnum"; font-variant-numeric: tabular-nums; text-align: end; white-space: nowrap }` | — |
| `table-sm` | `.table-sm > :not(caption) > * > * { height: var(--sf-ui-1/2--control-height); block-size: var(--sf-ui-1/2--control-height); padding: calc(calc(var(--sf-ui-1--control-height) - 2 * var(--sf-text-height-1) - var(--sf-px)) / 2) calc(var(--sf-space-1/2) / 2) }; .table-sm > :not(caption) > * > * > .line-clamp-2 { margin-bottom: clamp(-1 * var(--sf-px), calc(var(--sf-ui-1--control-height) - 2 * var(--sf-text-height-1) - var(--sf-px)), 0px); -webkit-margin-after: clamp(-1 * var(--sf-px), calc(var(--sf-ui-1--control-height) - 2 * var(--sf-text-height-1) - var(--sf-px)), 0px); margin-block-end: clamp(-1 * var(--sf-px), calc(var(--sf-ui-1--control-height) - 2 * var(--sf-text-height-1) - var(--sf-px)), 0px) }; .table-sm > :not(caption) > * > :where(:first-child) { padding-inline-start: max(var(--sf-space-1/2), var(--sf-b2)) }; .table-sm > :not(caption) > * > :where(:last-child) { padding-inline-end: max(var(--sf-space-1/2), var(--sf-b2)) }` | — |
| `table-small` | `.table-small > :not(caption) > * > * { height: var(--sf-ui-1/2--control-height); block-size: var(--sf-ui-1/2--control-height); padding: calc(calc(var(--sf-ui-1--control-height) - 2 * var(--sf-text-height-1) - var(--sf-px)) / 2) calc(var(--sf-space-1/2) / 2) }; .table-small > :not(caption) > * > * > .line-clamp-2 { margin-bottom: clamp(-1 * var(--sf-px), calc(var(--sf-ui-1--control-height) - 2 * var(--sf-text-height-1) - var(--sf-px)), 0px); -webkit-margin-after: clamp(-1 * var(--sf-px), calc(var(--sf-ui-1--control-height) - 2 * var(--sf-text-height-1) - var(--sf-px)), 0px); margin-block-end: clamp(-1 * var(--sf-px), calc(var(--sf-ui-1--control-height) - 2 * var(--sf-text-height-1) - var(--sf-px)), 0px) }; .table-small > :not(caption) > * > :where(:first-child) { padding-inline-start: max(var(--sf-space-1/2), var(--sf-b2)) }; .table-small > :not(caption) > * > :where(:last-child) { padding-inline-end: max(var(--sf-space-1/2), var(--sf-b2)) }` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-outline-variant` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` |
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-surface-state-hover` | `light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4))` |
| `--sf-surface-state-select` | `light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8))` |
| `--sf-b6` | `1rem` |
| `--sf-ui-1--control-height` | `calc(var(--sf-text--height-1) + 2 * var(--sf-ui-1--space-y-tightness-default))` |
| `--sf-ui-2--control-height` | `calc(var(--sf-text--height-2) + 2 * var(--sf-ui-2--space-y-tightness-default))` |
| `--sf-text-height-1` | `var(--sf-text--height-1)` |
| `--sf-px` | `1px` |
| `--sf-space-1` | `var(--sf-b2); от ширины lg: var(--sf-b6)` |
| `--sf-on-surface-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-weight--medium` | `500` |
| `--sf-font-weight-bold` | `var(--sf-weight--bold)` |
| `--sf-surface-place-solid` | `var(--sf-surface-page)` |
| `--sf-primary` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-link` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-a3` | `0.1875rem` |
| `--sf-space-1/2` | `0.5rem; от ширины lg: 0.75rem` |
| `--sf-text-size-1/2` | `var(--sf-text--size-1\/2)` |
| `--sf-text-height-1/2` | `var(--sf-text--height-1\/2)` |
| `--sf-ui-1/2--control-height` | `calc(var(--sf-text--height-1\/2) + 2 * var(--sf-ui-1\/2--space-y-tightness-default))` |
| `--sf-b2` | `0.75rem` |

В CSS косую черту в имени экранируют: `var(--sf-space-1\/2)`.

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
| `--sf-table-stripe-bg`, `--sf-table-stripe-color` | `var(--sf-surface-state-hover)`, `var(--sf-on-surface)` | полосы `table-stripe` |
| `--sf-table-active-bg`, `--sf-table-active-color` | `var(--sf-surface-state-select)`, `var(--sf-on-surface)` | `table-active` |
| `--sf-table-hover-bg`, `--sf-table-hover-color` | `var(--sf-surface-state-hover)`, `var(--sf-on-surface)` | `table-hover` |

Переменную задают на таблице, чтобы перекрасить её одну, или в теме проекта —
для всех таблиц.

Отступ под таблицей убирает `m-bottom-0`.

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
