---
title: "Конечное положение строки сетки"
description: "Задаёт линию сетки, на которой элемент заканчивается по вертикали."
---

# Конечное положение строки сетки

Классы `row-end-*` задают `grid-row-end` — линию сетки, на которой элемент
заканчивается по вертикали. Берите их вместе с
[`row-start-*`](/ru/utilities/grid/grid-row-start/), когда удобнее назвать
начало и конец элемента, чем его высоту.

## Пример

### Начало и конец

Сетка из трёх колонок. `row-start-1 row-end-3` занимает строки с первой по
вторую: линия `3` — нижний край второй строки.

:::example {id="utilities/grid/grid-row-end" label="row-start-1 row-end-3 и row-start-2 row-end-4"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `row-end-1` | `grid-row-end: 1` | — |
| `grid-row-end-1` | `grid-row-end: 1` | — |
| `row-end-2` | `grid-row-end: 2` | — |
| `grid-row-end-2` | `grid-row-end: 2` | — |
| `row-end-3` | `grid-row-end: 3` | — |
| `grid-row-end-3` | `grid-row-end: 3` | — |
| `row-end-4` | `grid-row-end: 4` | — |
| `grid-row-end-4` | `grid-row-end: 4` | — |
| `row-end-5` | `grid-row-end: 5` | — |
| `grid-row-end-5` | `grid-row-end: 5` | — |
| `row-end-6` | `grid-row-end: 6` | — |
| `grid-row-end-6` | `grid-row-end: 6` | — |
| `row-end-7` | `grid-row-end: 7` | — |
| `grid-row-end-7` | `grid-row-end: 7` | — |
| `row-end-auto` | `grid-row-end: auto` | — |
| `grid-row-end-auto` | `grid-row-end: auto` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:row-end-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `row-end-1` … `row-end-7` — номер линии, на которой заканчивается элемент.
  Без `row-start-*` элемент занимает одну строку перед этой линией.
- `row-end-auto` — конец выбирает раскладка; класс нужен, чтобы отменить
  `row-end-*` на другой ширине экрана.

### Боковой блок на три строки

```html
<div class="grid grid-col-3 gap-2">
  <aside class="row-start-1 row-end-4">Боковой блок</aside>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
```

### Второе имя

У каждого класса есть второе имя с приставкой `grid-`: `grid-row-end-3`,
`grid-row-end-auto`. Значения те же. В разметке пишите короткие имена — они
соответствуют колоночным `col-end-*`.

## Ограничения

- Номер больше числа строк добавляет пустые строки до нужной линии.

## См. также

- [Начальное положение строки сетки](/ru/utilities/grid/grid-row-start/)
- [Размер строки сетки](/ru/utilities/grid/grid-row/)
- [Конечное положение колонки сетки](/ru/utilities/grid/grid-column-end/)
