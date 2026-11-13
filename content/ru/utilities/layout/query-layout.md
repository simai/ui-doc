---
title: "Адаптация по размеру контейнера"
description: "Меняет отображение, направление, колонки, выравнивание и промежутки по ширине ближайшего контейнера запросов."
---

# Адаптация по размеру контейнера

Префиксы `cq-sm:`, `cq-md:`, `cq-lg:` и `cq-xl:` включают класс раскладки,
когда ближайший [`query-container`](/ru/utilities/layout/query-container/)
становится не уже указанной ширины. Берите их для блоков, которые встраивают
в колонки разной ширины: блок перестраивается по своему месту, а не по окну.

## Пример

### Направление и колонки

Потяните за правый нижний угол пунктирного контейнера и сузьте его. От ширины
контейнера `sm` элементы первой строки встают в ряд, а сетка получает две
колонки; от ширины `md` — четыре.

:::example {id="utilities/layout/query-layout" label="cq-sm:flex-row, cq-sm:grid-col-2 и cq-md:grid-col-4"}
:::

### Выравнивание, промежутки и скрытие

Сузьте контейнер: в узком заголовок и действие стоят столбиком; от ширины
`sm` они расходятся по краям, выравниваются по центру по высоте, а
промежуток растёт. Во второй строке от ширины `sm` один образец скрывается,
другой появляется. В разметке стоит `cq-sm:content-main-between`; таблица ниже
называет тот же класс именем из таблицы стилей, `cq-sm:content-main-between`,
— в него Loader переводит запись из разметки.

:::example {id="utilities/layout/query-layout-align" label="cq-sm:content-main-between, cq-sm:gap-3 и cq-sm:hidden"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `cq-sm:block` (`.cq-sm:block.cq-sm:block`) | `display: block` | — |
| `cq-sm:inline-block` (`.cq-sm:inline-block.cq-sm:inline-block`) | `display: inline-block` | — |
| `cq-sm:flex` (`.cq-sm:flex.cq-sm:flex`) | `display: flex` | — |
| `cq-sm:inline-flex` (`.cq-sm:inline-flex.cq-sm:inline-flex`) | `display: inline-flex` | — |
| `cq-sm:grid` (`.cq-sm:grid.cq-sm:grid`) | `display: grid` | — |
| `cq-sm:hidden` (`.cq-sm:hidden.cq-sm:hidden`) | `display: none` | — |
| `cq-sm:flex-row` (`.cq-sm:flex-row.cq-sm:flex-row`) | `flex-direction: row` | — |
| `cq-sm:flex-col` (`.cq-sm:flex-col.cq-sm:flex-col`) | `flex-direction: column` | — |
| `cq-sm:flex-row-reverse` (`.cq-sm:flex-row-reverse.cq-sm:flex-row-reverse`) | `flex-direction: row-reverse` | — |
| `cq-sm:flex-col-reverse` (`.cq-sm:flex-col-reverse.cq-sm:flex-col-reverse`) | `flex-direction: column-reverse` | — |
| `cq-sm:flex-wrap` (`.cq-sm:flex-wrap.cq-sm:flex-wrap`) | `flex-wrap: wrap` | — |
| `cq-sm:flex-wrap-reverse` (`.cq-sm:flex-wrap-reverse.cq-sm:flex-wrap-reverse`) | `flex-wrap: wrap-reverse` | — |
| `cq-sm:flex-nowrap` (`.cq-sm:flex-nowrap.cq-sm:flex-nowrap`) | `flex-wrap: nowrap` | — |
| `cq-sm:grid-col-1` (`.cq-sm:grid-col-1.cq-sm:grid-col-1`) | `grid-template-columns: repeat(1, minmax(0, 1fr))` | — |
| `cq-sm:grid-col-{значение}` (`.cq-sm:grid-col-{значение}.cq-sm:grid-col-{значение}`) | `grid-template-columns: repeat({значение}, minmax(0, 1fr))` | `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-sm:grid-col-none` (`.cq-sm:grid-col-none.cq-sm:grid-col-none`) | `grid-template-columns: none` | — |
| `cq-sm:grid-col-subgrid` (`.cq-sm:grid-col-subgrid.cq-sm:grid-col-subgrid`) | `grid-template-columns: subgrid` | — |
| `cq-sm:col-span-{значение}` (`.cq-sm:col-span-{значение}.cq-sm:col-span-{значение}`) | `grid-column: span {значение} / span {значение}` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-sm:col-span-full` (`.cq-sm:col-span-full.cq-sm:col-span-full`) | `grid-column: 1 / -1` | — |
| `cq-sm:col-auto` (`.cq-sm:col-auto.cq-sm:col-auto`) | `grid-column: auto` | — |
| `cq-sm:content-main-start` (`.cq-sm:content-main-start.cq-sm:content-main-start`) | `justify-content: flex-start` | — |
| `cq-sm:content-main-end` (`.cq-sm:content-main-end.cq-sm:content-main-end`) | `justify-content: flex-end` | — |
| `cq-sm:content-main-center` (`.cq-sm:content-main-center.cq-sm:content-main-center`) | `justify-content: center` | — |
| `cq-sm:content-main-{значение}` (`.cq-sm:content-main-{значение}.cq-sm:content-main-{значение}`) | `justify-content: space-{значение}` | `between`, `around`, `evenly` |
| `cq-sm:items-cross-{значение}` (`.cq-sm:items-cross-{значение}.cq-sm:items-cross-{значение}`) | `align-items: {значение}` | `start`, `end`, `center`, `baseline`, `stretch` |
| `cq-sm:gap-{значение}` (`.cq-sm:gap-{значение}.cq-sm:gap-{значение}`) | `gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-sm:row-gap-{значение}` (`.cq-sm:row-gap-{значение}.cq-sm:row-gap-{значение}`) | `row-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-sm:col-gap-{значение}` (`.cq-sm:col-gap-{значение}.cq-sm:col-gap-{значение}`) | `column-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-sm/sidebar:block` (`.cq-sm/sidebar:block.cq-sm/sidebar:block`) | `display: block` | — |
| `cq-sm/sidebar:inline-block` (`.cq-sm/sidebar:inline-block.cq-sm/sidebar:inline-block`) | `display: inline-block` | — |
| `cq-sm/sidebar:flex` (`.cq-sm/sidebar:flex.cq-sm/sidebar:flex`) | `display: flex` | — |
| `cq-sm/sidebar:inline-flex` (`.cq-sm/sidebar:inline-flex.cq-sm/sidebar:inline-flex`) | `display: inline-flex` | — |
| `cq-sm/sidebar:grid` (`.cq-sm/sidebar:grid.cq-sm/sidebar:grid`) | `display: grid` | — |
| `cq-sm/sidebar:hidden` (`.cq-sm/sidebar:hidden.cq-sm/sidebar:hidden`) | `display: none` | — |
| `cq-sm/sidebar:flex-row` (`.cq-sm/sidebar:flex-row.cq-sm/sidebar:flex-row`) | `flex-direction: row` | — |
| `cq-sm/sidebar:flex-col` (`.cq-sm/sidebar:flex-col.cq-sm/sidebar:flex-col`) | `flex-direction: column` | — |
| `cq-sm/sidebar:flex-row-reverse` (`.cq-sm/sidebar:flex-row-reverse.cq-sm/sidebar:flex-row-reverse`) | `flex-direction: row-reverse` | — |
| `cq-sm/sidebar:flex-col-reverse` (`.cq-sm/sidebar:flex-col-reverse.cq-sm/sidebar:flex-col-reverse`) | `flex-direction: column-reverse` | — |
| `cq-sm/sidebar:flex-wrap` (`.cq-sm/sidebar:flex-wrap.cq-sm/sidebar:flex-wrap`) | `flex-wrap: wrap` | — |
| `cq-sm/sidebar:flex-wrap-reverse` (`.cq-sm/sidebar:flex-wrap-reverse.cq-sm/sidebar:flex-wrap-reverse`) | `flex-wrap: wrap-reverse` | — |
| `cq-sm/sidebar:flex-nowrap` (`.cq-sm/sidebar:flex-nowrap.cq-sm/sidebar:flex-nowrap`) | `flex-wrap: nowrap` | — |
| `cq-sm/sidebar:grid-col-1` (`.cq-sm/sidebar:grid-col-1.cq-sm/sidebar:grid-col-1`) | `grid-template-columns: repeat(1, minmax(0, 1fr))` | — |
| `cq-sm/sidebar:grid-col-{значение}` (`.cq-sm/sidebar:grid-col-{значение}.cq-sm/sidebar:grid-col-{значение}`) | `grid-template-columns: repeat({значение}, minmax(0, 1fr))` | `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-sm/sidebar:grid-col-none` (`.cq-sm/sidebar:grid-col-none.cq-sm/sidebar:grid-col-none`) | `grid-template-columns: none` | — |
| `cq-sm/sidebar:grid-col-subgrid` (`.cq-sm/sidebar:grid-col-subgrid.cq-sm/sidebar:grid-col-subgrid`) | `grid-template-columns: subgrid` | — |
| `cq-sm/sidebar:col-span-{значение}` (`.cq-sm/sidebar:col-span-{значение}.cq-sm/sidebar:col-span-{значение}`) | `grid-column: span {значение} / span {значение}` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-sm/sidebar:col-span-full` (`.cq-sm/sidebar:col-span-full.cq-sm/sidebar:col-span-full`) | `grid-column: 1 / -1` | — |
| `cq-sm/sidebar:col-auto` (`.cq-sm/sidebar:col-auto.cq-sm/sidebar:col-auto`) | `grid-column: auto` | — |
| `cq-sm/sidebar:content-main-start` (`.cq-sm/sidebar:content-main-start.cq-sm/sidebar:content-main-start`) | `justify-content: flex-start` | — |
| `cq-sm/sidebar:content-main-end` (`.cq-sm/sidebar:content-main-end.cq-sm/sidebar:content-main-end`) | `justify-content: flex-end` | — |
| `cq-sm/sidebar:content-main-center` (`.cq-sm/sidebar:content-main-center.cq-sm/sidebar:content-main-center`) | `justify-content: center` | — |
| `cq-sm/sidebar:content-main-{значение}` (`.cq-sm/sidebar:content-main-{значение}.cq-sm/sidebar:content-main-{значение}`) | `justify-content: space-{значение}` | `between`, `around`, `evenly` |
| `cq-sm/sidebar:items-cross-{значение}` (`.cq-sm/sidebar:items-cross-{значение}.cq-sm/sidebar:items-cross-{значение}`) | `align-items: {значение}` | `start`, `end`, `center`, `baseline`, `stretch` |
| `cq-sm/sidebar:gap-{значение}` (`.cq-sm/sidebar:gap-{значение}.cq-sm/sidebar:gap-{значение}`) | `gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-sm/sidebar:row-gap-{значение}` (`.cq-sm/sidebar:row-gap-{значение}.cq-sm/sidebar:row-gap-{значение}`) | `row-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-sm/sidebar:col-gap-{значение}` (`.cq-sm/sidebar:col-gap-{значение}.cq-sm/sidebar:col-gap-{значение}`) | `column-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-md:block` (`.cq-md:block.cq-md:block`) | `display: block` | — |
| `cq-md:inline-block` (`.cq-md:inline-block.cq-md:inline-block`) | `display: inline-block` | — |
| `cq-md:flex` (`.cq-md:flex.cq-md:flex`) | `display: flex` | — |
| `cq-md:inline-flex` (`.cq-md:inline-flex.cq-md:inline-flex`) | `display: inline-flex` | — |
| `cq-md:grid` (`.cq-md:grid.cq-md:grid`) | `display: grid` | — |
| `cq-md:hidden` (`.cq-md:hidden.cq-md:hidden`) | `display: none` | — |
| `cq-md:flex-row` (`.cq-md:flex-row.cq-md:flex-row`) | `flex-direction: row` | — |
| `cq-md:flex-col` (`.cq-md:flex-col.cq-md:flex-col`) | `flex-direction: column` | — |
| `cq-md:flex-row-reverse` (`.cq-md:flex-row-reverse.cq-md:flex-row-reverse`) | `flex-direction: row-reverse` | — |
| `cq-md:flex-col-reverse` (`.cq-md:flex-col-reverse.cq-md:flex-col-reverse`) | `flex-direction: column-reverse` | — |
| `cq-md:flex-wrap` (`.cq-md:flex-wrap.cq-md:flex-wrap`) | `flex-wrap: wrap` | — |
| `cq-md:flex-wrap-reverse` (`.cq-md:flex-wrap-reverse.cq-md:flex-wrap-reverse`) | `flex-wrap: wrap-reverse` | — |
| `cq-md:flex-nowrap` (`.cq-md:flex-nowrap.cq-md:flex-nowrap`) | `flex-wrap: nowrap` | — |
| `cq-md:grid-col-1` (`.cq-md:grid-col-1.cq-md:grid-col-1`) | `grid-template-columns: repeat(1, minmax(0, 1fr))` | — |
| `cq-md:grid-col-{значение}` (`.cq-md:grid-col-{значение}.cq-md:grid-col-{значение}`) | `grid-template-columns: repeat({значение}, minmax(0, 1fr))` | `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-md:grid-col-none` (`.cq-md:grid-col-none.cq-md:grid-col-none`) | `grid-template-columns: none` | — |
| `cq-md:grid-col-subgrid` (`.cq-md:grid-col-subgrid.cq-md:grid-col-subgrid`) | `grid-template-columns: subgrid` | — |
| `cq-md:col-span-{значение}` (`.cq-md:col-span-{значение}.cq-md:col-span-{значение}`) | `grid-column: span {значение} / span {значение}` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-md:col-span-full` (`.cq-md:col-span-full.cq-md:col-span-full`) | `grid-column: 1 / -1` | — |
| `cq-md:col-auto` (`.cq-md:col-auto.cq-md:col-auto`) | `grid-column: auto` | — |
| `cq-md:content-main-start` (`.cq-md:content-main-start.cq-md:content-main-start`) | `justify-content: flex-start` | — |
| `cq-md:content-main-end` (`.cq-md:content-main-end.cq-md:content-main-end`) | `justify-content: flex-end` | — |
| `cq-md:content-main-center` (`.cq-md:content-main-center.cq-md:content-main-center`) | `justify-content: center` | — |
| `cq-md:content-main-{значение}` (`.cq-md:content-main-{значение}.cq-md:content-main-{значение}`) | `justify-content: space-{значение}` | `between`, `around`, `evenly` |
| `cq-md:items-cross-{значение}` (`.cq-md:items-cross-{значение}.cq-md:items-cross-{значение}`) | `align-items: {значение}` | `start`, `end`, `center`, `baseline`, `stretch` |
| `cq-md:gap-{значение}` (`.cq-md:gap-{значение}.cq-md:gap-{значение}`) | `gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-md:row-gap-{значение}` (`.cq-md:row-gap-{значение}.cq-md:row-gap-{значение}`) | `row-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-md:col-gap-{значение}` (`.cq-md:col-gap-{значение}.cq-md:col-gap-{значение}`) | `column-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-md/sidebar:block` (`.cq-md/sidebar:block.cq-md/sidebar:block`) | `display: block` | — |
| `cq-md/sidebar:inline-block` (`.cq-md/sidebar:inline-block.cq-md/sidebar:inline-block`) | `display: inline-block` | — |
| `cq-md/sidebar:flex` (`.cq-md/sidebar:flex.cq-md/sidebar:flex`) | `display: flex` | — |
| `cq-md/sidebar:inline-flex` (`.cq-md/sidebar:inline-flex.cq-md/sidebar:inline-flex`) | `display: inline-flex` | — |
| `cq-md/sidebar:grid` (`.cq-md/sidebar:grid.cq-md/sidebar:grid`) | `display: grid` | — |
| `cq-md/sidebar:hidden` (`.cq-md/sidebar:hidden.cq-md/sidebar:hidden`) | `display: none` | — |
| `cq-md/sidebar:flex-row` (`.cq-md/sidebar:flex-row.cq-md/sidebar:flex-row`) | `flex-direction: row` | — |
| `cq-md/sidebar:flex-col` (`.cq-md/sidebar:flex-col.cq-md/sidebar:flex-col`) | `flex-direction: column` | — |
| `cq-md/sidebar:flex-row-reverse` (`.cq-md/sidebar:flex-row-reverse.cq-md/sidebar:flex-row-reverse`) | `flex-direction: row-reverse` | — |
| `cq-md/sidebar:flex-col-reverse` (`.cq-md/sidebar:flex-col-reverse.cq-md/sidebar:flex-col-reverse`) | `flex-direction: column-reverse` | — |
| `cq-md/sidebar:flex-wrap` (`.cq-md/sidebar:flex-wrap.cq-md/sidebar:flex-wrap`) | `flex-wrap: wrap` | — |
| `cq-md/sidebar:flex-wrap-reverse` (`.cq-md/sidebar:flex-wrap-reverse.cq-md/sidebar:flex-wrap-reverse`) | `flex-wrap: wrap-reverse` | — |
| `cq-md/sidebar:flex-nowrap` (`.cq-md/sidebar:flex-nowrap.cq-md/sidebar:flex-nowrap`) | `flex-wrap: nowrap` | — |
| `cq-md/sidebar:grid-col-1` (`.cq-md/sidebar:grid-col-1.cq-md/sidebar:grid-col-1`) | `grid-template-columns: repeat(1, minmax(0, 1fr))` | — |
| `cq-md/sidebar:grid-col-{значение}` (`.cq-md/sidebar:grid-col-{значение}.cq-md/sidebar:grid-col-{значение}`) | `grid-template-columns: repeat({значение}, minmax(0, 1fr))` | `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-md/sidebar:grid-col-none` (`.cq-md/sidebar:grid-col-none.cq-md/sidebar:grid-col-none`) | `grid-template-columns: none` | — |
| `cq-md/sidebar:grid-col-subgrid` (`.cq-md/sidebar:grid-col-subgrid.cq-md/sidebar:grid-col-subgrid`) | `grid-template-columns: subgrid` | — |
| `cq-md/sidebar:col-span-{значение}` (`.cq-md/sidebar:col-span-{значение}.cq-md/sidebar:col-span-{значение}`) | `grid-column: span {значение} / span {значение}` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-md/sidebar:col-span-full` (`.cq-md/sidebar:col-span-full.cq-md/sidebar:col-span-full`) | `grid-column: 1 / -1` | — |
| `cq-md/sidebar:col-auto` (`.cq-md/sidebar:col-auto.cq-md/sidebar:col-auto`) | `grid-column: auto` | — |
| `cq-md/sidebar:content-main-start` (`.cq-md/sidebar:content-main-start.cq-md/sidebar:content-main-start`) | `justify-content: flex-start` | — |
| `cq-md/sidebar:content-main-end` (`.cq-md/sidebar:content-main-end.cq-md/sidebar:content-main-end`) | `justify-content: flex-end` | — |
| `cq-md/sidebar:content-main-center` (`.cq-md/sidebar:content-main-center.cq-md/sidebar:content-main-center`) | `justify-content: center` | — |
| `cq-md/sidebar:content-main-{значение}` (`.cq-md/sidebar:content-main-{значение}.cq-md/sidebar:content-main-{значение}`) | `justify-content: space-{значение}` | `between`, `around`, `evenly` |
| `cq-md/sidebar:items-cross-{значение}` (`.cq-md/sidebar:items-cross-{значение}.cq-md/sidebar:items-cross-{значение}`) | `align-items: {значение}` | `start`, `end`, `center`, `baseline`, `stretch` |
| `cq-md/sidebar:gap-{значение}` (`.cq-md/sidebar:gap-{значение}.cq-md/sidebar:gap-{значение}`) | `gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-md/sidebar:row-gap-{значение}` (`.cq-md/sidebar:row-gap-{значение}.cq-md/sidebar:row-gap-{значение}`) | `row-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-md/sidebar:col-gap-{значение}` (`.cq-md/sidebar:col-gap-{значение}.cq-md/sidebar:col-gap-{значение}`) | `column-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-lg:block` (`.cq-lg:block.cq-lg:block`) | `display: block` | — |
| `cq-lg:inline-block` (`.cq-lg:inline-block.cq-lg:inline-block`) | `display: inline-block` | — |
| `cq-lg:flex` (`.cq-lg:flex.cq-lg:flex`) | `display: flex` | — |
| `cq-lg:inline-flex` (`.cq-lg:inline-flex.cq-lg:inline-flex`) | `display: inline-flex` | — |
| `cq-lg:grid` (`.cq-lg:grid.cq-lg:grid`) | `display: grid` | — |
| `cq-lg:hidden` (`.cq-lg:hidden.cq-lg:hidden`) | `display: none` | — |
| `cq-lg:flex-row` (`.cq-lg:flex-row.cq-lg:flex-row`) | `flex-direction: row` | — |
| `cq-lg:flex-col` (`.cq-lg:flex-col.cq-lg:flex-col`) | `flex-direction: column` | — |
| `cq-lg:flex-row-reverse` (`.cq-lg:flex-row-reverse.cq-lg:flex-row-reverse`) | `flex-direction: row-reverse` | — |
| `cq-lg:flex-col-reverse` (`.cq-lg:flex-col-reverse.cq-lg:flex-col-reverse`) | `flex-direction: column-reverse` | — |
| `cq-lg:flex-wrap` (`.cq-lg:flex-wrap.cq-lg:flex-wrap`) | `flex-wrap: wrap` | — |
| `cq-lg:flex-wrap-reverse` (`.cq-lg:flex-wrap-reverse.cq-lg:flex-wrap-reverse`) | `flex-wrap: wrap-reverse` | — |
| `cq-lg:flex-nowrap` (`.cq-lg:flex-nowrap.cq-lg:flex-nowrap`) | `flex-wrap: nowrap` | — |
| `cq-lg:grid-col-1` (`.cq-lg:grid-col-1.cq-lg:grid-col-1`) | `grid-template-columns: repeat(1, minmax(0, 1fr))` | — |
| `cq-lg:grid-col-{значение}` (`.cq-lg:grid-col-{значение}.cq-lg:grid-col-{значение}`) | `grid-template-columns: repeat({значение}, minmax(0, 1fr))` | `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-lg:grid-col-none` (`.cq-lg:grid-col-none.cq-lg:grid-col-none`) | `grid-template-columns: none` | — |
| `cq-lg:grid-col-subgrid` (`.cq-lg:grid-col-subgrid.cq-lg:grid-col-subgrid`) | `grid-template-columns: subgrid` | — |
| `cq-lg:col-span-{значение}` (`.cq-lg:col-span-{значение}.cq-lg:col-span-{значение}`) | `grid-column: span {значение} / span {значение}` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-lg:col-span-full` (`.cq-lg:col-span-full.cq-lg:col-span-full`) | `grid-column: 1 / -1` | — |
| `cq-lg:col-auto` (`.cq-lg:col-auto.cq-lg:col-auto`) | `grid-column: auto` | — |
| `cq-lg:content-main-start` (`.cq-lg:content-main-start.cq-lg:content-main-start`) | `justify-content: flex-start` | — |
| `cq-lg:content-main-end` (`.cq-lg:content-main-end.cq-lg:content-main-end`) | `justify-content: flex-end` | — |
| `cq-lg:content-main-center` (`.cq-lg:content-main-center.cq-lg:content-main-center`) | `justify-content: center` | — |
| `cq-lg:content-main-{значение}` (`.cq-lg:content-main-{значение}.cq-lg:content-main-{значение}`) | `justify-content: space-{значение}` | `between`, `around`, `evenly` |
| `cq-lg:items-cross-{значение}` (`.cq-lg:items-cross-{значение}.cq-lg:items-cross-{значение}`) | `align-items: {значение}` | `start`, `end`, `center`, `baseline`, `stretch` |
| `cq-lg:gap-{значение}` (`.cq-lg:gap-{значение}.cq-lg:gap-{значение}`) | `gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-lg:row-gap-{значение}` (`.cq-lg:row-gap-{значение}.cq-lg:row-gap-{значение}`) | `row-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-lg:col-gap-{значение}` (`.cq-lg:col-gap-{значение}.cq-lg:col-gap-{значение}`) | `column-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-lg/sidebar:block` (`.cq-lg/sidebar:block.cq-lg/sidebar:block`) | `display: block` | — |
| `cq-lg/sidebar:inline-block` (`.cq-lg/sidebar:inline-block.cq-lg/sidebar:inline-block`) | `display: inline-block` | — |
| `cq-lg/sidebar:flex` (`.cq-lg/sidebar:flex.cq-lg/sidebar:flex`) | `display: flex` | — |
| `cq-lg/sidebar:inline-flex` (`.cq-lg/sidebar:inline-flex.cq-lg/sidebar:inline-flex`) | `display: inline-flex` | — |
| `cq-lg/sidebar:grid` (`.cq-lg/sidebar:grid.cq-lg/sidebar:grid`) | `display: grid` | — |
| `cq-lg/sidebar:hidden` (`.cq-lg/sidebar:hidden.cq-lg/sidebar:hidden`) | `display: none` | — |
| `cq-lg/sidebar:flex-row` (`.cq-lg/sidebar:flex-row.cq-lg/sidebar:flex-row`) | `flex-direction: row` | — |
| `cq-lg/sidebar:flex-col` (`.cq-lg/sidebar:flex-col.cq-lg/sidebar:flex-col`) | `flex-direction: column` | — |
| `cq-lg/sidebar:flex-row-reverse` (`.cq-lg/sidebar:flex-row-reverse.cq-lg/sidebar:flex-row-reverse`) | `flex-direction: row-reverse` | — |
| `cq-lg/sidebar:flex-col-reverse` (`.cq-lg/sidebar:flex-col-reverse.cq-lg/sidebar:flex-col-reverse`) | `flex-direction: column-reverse` | — |
| `cq-lg/sidebar:flex-wrap` (`.cq-lg/sidebar:flex-wrap.cq-lg/sidebar:flex-wrap`) | `flex-wrap: wrap` | — |
| `cq-lg/sidebar:flex-wrap-reverse` (`.cq-lg/sidebar:flex-wrap-reverse.cq-lg/sidebar:flex-wrap-reverse`) | `flex-wrap: wrap-reverse` | — |
| `cq-lg/sidebar:flex-nowrap` (`.cq-lg/sidebar:flex-nowrap.cq-lg/sidebar:flex-nowrap`) | `flex-wrap: nowrap` | — |
| `cq-lg/sidebar:grid-col-1` (`.cq-lg/sidebar:grid-col-1.cq-lg/sidebar:grid-col-1`) | `grid-template-columns: repeat(1, minmax(0, 1fr))` | — |
| `cq-lg/sidebar:grid-col-{значение}` (`.cq-lg/sidebar:grid-col-{значение}.cq-lg/sidebar:grid-col-{значение}`) | `grid-template-columns: repeat({значение}, minmax(0, 1fr))` | `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-lg/sidebar:grid-col-none` (`.cq-lg/sidebar:grid-col-none.cq-lg/sidebar:grid-col-none`) | `grid-template-columns: none` | — |
| `cq-lg/sidebar:grid-col-subgrid` (`.cq-lg/sidebar:grid-col-subgrid.cq-lg/sidebar:grid-col-subgrid`) | `grid-template-columns: subgrid` | — |
| `cq-lg/sidebar:col-span-{значение}` (`.cq-lg/sidebar:col-span-{значение}.cq-lg/sidebar:col-span-{значение}`) | `grid-column: span {значение} / span {значение}` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-lg/sidebar:col-span-full` (`.cq-lg/sidebar:col-span-full.cq-lg/sidebar:col-span-full`) | `grid-column: 1 / -1` | — |
| `cq-lg/sidebar:col-auto` (`.cq-lg/sidebar:col-auto.cq-lg/sidebar:col-auto`) | `grid-column: auto` | — |
| `cq-lg/sidebar:content-main-start` (`.cq-lg/sidebar:content-main-start.cq-lg/sidebar:content-main-start`) | `justify-content: flex-start` | — |
| `cq-lg/sidebar:content-main-end` (`.cq-lg/sidebar:content-main-end.cq-lg/sidebar:content-main-end`) | `justify-content: flex-end` | — |
| `cq-lg/sidebar:content-main-center` (`.cq-lg/sidebar:content-main-center.cq-lg/sidebar:content-main-center`) | `justify-content: center` | — |
| `cq-lg/sidebar:content-main-{значение}` (`.cq-lg/sidebar:content-main-{значение}.cq-lg/sidebar:content-main-{значение}`) | `justify-content: space-{значение}` | `between`, `around`, `evenly` |
| `cq-lg/sidebar:items-cross-{значение}` (`.cq-lg/sidebar:items-cross-{значение}.cq-lg/sidebar:items-cross-{значение}`) | `align-items: {значение}` | `start`, `end`, `center`, `baseline`, `stretch` |
| `cq-lg/sidebar:gap-{значение}` (`.cq-lg/sidebar:gap-{значение}.cq-lg/sidebar:gap-{значение}`) | `gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-lg/sidebar:row-gap-{значение}` (`.cq-lg/sidebar:row-gap-{значение}.cq-lg/sidebar:row-gap-{значение}`) | `row-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-lg/sidebar:col-gap-{значение}` (`.cq-lg/sidebar:col-gap-{значение}.cq-lg/sidebar:col-gap-{значение}`) | `column-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-xl:block` (`.cq-xl:block.cq-xl:block`) | `display: block` | — |
| `cq-xl:inline-block` (`.cq-xl:inline-block.cq-xl:inline-block`) | `display: inline-block` | — |
| `cq-xl:flex` (`.cq-xl:flex.cq-xl:flex`) | `display: flex` | — |
| `cq-xl:inline-flex` (`.cq-xl:inline-flex.cq-xl:inline-flex`) | `display: inline-flex` | — |
| `cq-xl:grid` (`.cq-xl:grid.cq-xl:grid`) | `display: grid` | — |
| `cq-xl:hidden` (`.cq-xl:hidden.cq-xl:hidden`) | `display: none` | — |
| `cq-xl:flex-row` (`.cq-xl:flex-row.cq-xl:flex-row`) | `flex-direction: row` | — |
| `cq-xl:flex-col` (`.cq-xl:flex-col.cq-xl:flex-col`) | `flex-direction: column` | — |
| `cq-xl:flex-row-reverse` (`.cq-xl:flex-row-reverse.cq-xl:flex-row-reverse`) | `flex-direction: row-reverse` | — |
| `cq-xl:flex-col-reverse` (`.cq-xl:flex-col-reverse.cq-xl:flex-col-reverse`) | `flex-direction: column-reverse` | — |
| `cq-xl:flex-wrap` (`.cq-xl:flex-wrap.cq-xl:flex-wrap`) | `flex-wrap: wrap` | — |
| `cq-xl:flex-wrap-reverse` (`.cq-xl:flex-wrap-reverse.cq-xl:flex-wrap-reverse`) | `flex-wrap: wrap-reverse` | — |
| `cq-xl:flex-nowrap` (`.cq-xl:flex-nowrap.cq-xl:flex-nowrap`) | `flex-wrap: nowrap` | — |
| `cq-xl:grid-col-1` (`.cq-xl:grid-col-1.cq-xl:grid-col-1`) | `grid-template-columns: repeat(1, minmax(0, 1fr))` | — |
| `cq-xl:grid-col-{значение}` (`.cq-xl:grid-col-{значение}.cq-xl:grid-col-{значение}`) | `grid-template-columns: repeat({значение}, minmax(0, 1fr))` | `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-xl:grid-col-none` (`.cq-xl:grid-col-none.cq-xl:grid-col-none`) | `grid-template-columns: none` | — |
| `cq-xl:grid-col-subgrid` (`.cq-xl:grid-col-subgrid.cq-xl:grid-col-subgrid`) | `grid-template-columns: subgrid` | — |
| `cq-xl:col-span-{значение}` (`.cq-xl:col-span-{значение}.cq-xl:col-span-{значение}`) | `grid-column: span {значение} / span {значение}` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-xl:col-span-full` (`.cq-xl:col-span-full.cq-xl:col-span-full`) | `grid-column: 1 / -1` | — |
| `cq-xl:col-auto` (`.cq-xl:col-auto.cq-xl:col-auto`) | `grid-column: auto` | — |
| `cq-xl:content-main-start` (`.cq-xl:content-main-start.cq-xl:content-main-start`) | `justify-content: flex-start` | — |
| `cq-xl:content-main-end` (`.cq-xl:content-main-end.cq-xl:content-main-end`) | `justify-content: flex-end` | — |
| `cq-xl:content-main-center` (`.cq-xl:content-main-center.cq-xl:content-main-center`) | `justify-content: center` | — |
| `cq-xl:content-main-{значение}` (`.cq-xl:content-main-{значение}.cq-xl:content-main-{значение}`) | `justify-content: space-{значение}` | `between`, `around`, `evenly` |
| `cq-xl:items-cross-{значение}` (`.cq-xl:items-cross-{значение}.cq-xl:items-cross-{значение}`) | `align-items: {значение}` | `start`, `end`, `center`, `baseline`, `stretch` |
| `cq-xl:gap-{значение}` (`.cq-xl:gap-{значение}.cq-xl:gap-{значение}`) | `gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-xl:row-gap-{значение}` (`.cq-xl:row-gap-{значение}.cq-xl:row-gap-{значение}`) | `row-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-xl:col-gap-{значение}` (`.cq-xl:col-gap-{значение}.cq-xl:col-gap-{значение}`) | `column-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-xl/sidebar:block` (`.cq-xl/sidebar:block.cq-xl/sidebar:block`) | `display: block` | — |
| `cq-xl/sidebar:inline-block` (`.cq-xl/sidebar:inline-block.cq-xl/sidebar:inline-block`) | `display: inline-block` | — |
| `cq-xl/sidebar:flex` (`.cq-xl/sidebar:flex.cq-xl/sidebar:flex`) | `display: flex` | — |
| `cq-xl/sidebar:inline-flex` (`.cq-xl/sidebar:inline-flex.cq-xl/sidebar:inline-flex`) | `display: inline-flex` | — |
| `cq-xl/sidebar:grid` (`.cq-xl/sidebar:grid.cq-xl/sidebar:grid`) | `display: grid` | — |
| `cq-xl/sidebar:hidden` (`.cq-xl/sidebar:hidden.cq-xl/sidebar:hidden`) | `display: none` | — |
| `cq-xl/sidebar:flex-row` (`.cq-xl/sidebar:flex-row.cq-xl/sidebar:flex-row`) | `flex-direction: row` | — |
| `cq-xl/sidebar:flex-col` (`.cq-xl/sidebar:flex-col.cq-xl/sidebar:flex-col`) | `flex-direction: column` | — |
| `cq-xl/sidebar:flex-row-reverse` (`.cq-xl/sidebar:flex-row-reverse.cq-xl/sidebar:flex-row-reverse`) | `flex-direction: row-reverse` | — |
| `cq-xl/sidebar:flex-col-reverse` (`.cq-xl/sidebar:flex-col-reverse.cq-xl/sidebar:flex-col-reverse`) | `flex-direction: column-reverse` | — |
| `cq-xl/sidebar:flex-wrap` (`.cq-xl/sidebar:flex-wrap.cq-xl/sidebar:flex-wrap`) | `flex-wrap: wrap` | — |
| `cq-xl/sidebar:flex-wrap-reverse` (`.cq-xl/sidebar:flex-wrap-reverse.cq-xl/sidebar:flex-wrap-reverse`) | `flex-wrap: wrap-reverse` | — |
| `cq-xl/sidebar:flex-nowrap` (`.cq-xl/sidebar:flex-nowrap.cq-xl/sidebar:flex-nowrap`) | `flex-wrap: nowrap` | — |
| `cq-xl/sidebar:grid-col-1` (`.cq-xl/sidebar:grid-col-1.cq-xl/sidebar:grid-col-1`) | `grid-template-columns: repeat(1, minmax(0, 1fr))` | — |
| `cq-xl/sidebar:grid-col-{значение}` (`.cq-xl/sidebar:grid-col-{значение}.cq-xl/sidebar:grid-col-{значение}`) | `grid-template-columns: repeat({значение}, minmax(0, 1fr))` | `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-xl/sidebar:grid-col-none` (`.cq-xl/sidebar:grid-col-none.cq-xl/sidebar:grid-col-none`) | `grid-template-columns: none` | — |
| `cq-xl/sidebar:grid-col-subgrid` (`.cq-xl/sidebar:grid-col-subgrid.cq-xl/sidebar:grid-col-subgrid`) | `grid-template-columns: subgrid` | — |
| `cq-xl/sidebar:col-span-{значение}` (`.cq-xl/sidebar:col-span-{значение}.cq-xl/sidebar:col-span-{значение}`) | `grid-column: span {значение} / span {значение}` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `cq-xl/sidebar:col-span-full` (`.cq-xl/sidebar:col-span-full.cq-xl/sidebar:col-span-full`) | `grid-column: 1 / -1` | — |
| `cq-xl/sidebar:col-auto` (`.cq-xl/sidebar:col-auto.cq-xl/sidebar:col-auto`) | `grid-column: auto` | — |
| `cq-xl/sidebar:content-main-start` (`.cq-xl/sidebar:content-main-start.cq-xl/sidebar:content-main-start`) | `justify-content: flex-start` | — |
| `cq-xl/sidebar:content-main-end` (`.cq-xl/sidebar:content-main-end.cq-xl/sidebar:content-main-end`) | `justify-content: flex-end` | — |
| `cq-xl/sidebar:content-main-center` (`.cq-xl/sidebar:content-main-center.cq-xl/sidebar:content-main-center`) | `justify-content: center` | — |
| `cq-xl/sidebar:content-main-{значение}` (`.cq-xl/sidebar:content-main-{значение}.cq-xl/sidebar:content-main-{значение}`) | `justify-content: space-{значение}` | `between`, `around`, `evenly` |
| `cq-xl/sidebar:items-cross-{значение}` (`.cq-xl/sidebar:items-cross-{значение}.cq-xl/sidebar:items-cross-{значение}`) | `align-items: {значение}` | `start`, `end`, `center`, `baseline`, `stretch` |
| `cq-xl/sidebar:gap-{значение}` (`.cq-xl/sidebar:gap-{значение}.cq-xl/sidebar:gap-{значение}`) | `gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-xl/sidebar:row-gap-{значение}` (`.cq-xl/sidebar:row-gap-{значение}.cq-xl/sidebar:row-gap-{значение}`) | `row-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `cq-xl/sidebar:col-gap-{значение}` (`.cq-xl/sidebar:col-gap-{значение}.cq-xl/sidebar:col-gap-{значение}`) | `column-gap: var(--sf-space-{значение})` | `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; ширина контейнера — `cq-sm:`, `cq-sm/sidebar:`, `cq-md:`, `cq-md/sidebar:`, `cq-lg:`, `cq-lg/sidebar:`, `cq-xl:`, `cq-xl/sidebar:`; состояния — нет. Например: `cq-sm:block`.

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

### Пороги

`cq-sm:` … `cq-xl:` срабатывают с тех же именованных порогов, что и префиксы
ширины экрана `sm:` … `xl:`, но меряют ширину контейнера. Префикса `cq-xxl:`
нет. Как и префиксы ширины экрана, `cq-*` действует от порога и шире, поэтому
классы собирают от узкого к широкому:

```html
<section class="query-container">
  <div class="grid grid-col-1 cq-sm:grid-col-2 cq-lg:grid-col-3 gap-1 cq-sm:gap-2">
    …
  </div>
</section>
```

### Какие классы принимают префикс

Префикс есть только у классов раскладки:

- отображение: `block`, `inline-block`, `flex`, `inline-flex`, `grid`, `hidden`;
- направление и перенос флекса: `flex-row`, `flex-col`, их варианты
  `-reverse`, `flex-wrap`, `flex-wrap-reverse`, `flex-nowrap`;
- колонки сетки: `grid-col-1` … `grid-col-12`, `grid-col-none`,
  `grid-col-subgrid`;
- выравнивание: `justify-*` и `items-cross-*`;
- промежутки: `gap-*`, `row-gap-*`, `col-gap-*` от `0` до `8`, а также `1/4`,
  `1/3`, `1/2`.

Полный список — в таблице выше.

### Именованный контейнер

Префикс с именем, например `cq-sm/sidebar:`, меряет ближайший контейнер
`query-container/sidebar`, даже если между ними есть безымянный контейнер.

```html
<aside class="query-container/sidebar">
  <nav class="flex flex-col cq-sm/sidebar:flex-row gap-2">…</nav>
</aside>
```

## Ограничения

- Без предка с `query-container` классы с префиксом `cq-*` не срабатывают.
- `cq-*` не соединяется с префиксом ширины экрана или состояния в одном
  классе: `md:cq-sm:flex` не существует.
- Размеры, внутренние и внешние отступы, позиция и цвет не принимают префикс
  `cq-*`.

## См. также

- [Контейнерные запросы](/ru/utilities/layout/query-container/)
- [Метод отображения элемента](/ru/utilities/layout/display/)
- [Направление размещения](/ru/utilities/flex/flex-direction/)
- [Шаблон колонок сетки](/ru/utilities/grid/grid-template-columns/)
- [Условия](/ru/guide/utilities/conditions/)
