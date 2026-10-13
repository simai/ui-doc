---
title: "Конечное положение колонки сетки"
description: "Задаёт линию сетки, на которой заканчивается элемент."
---

# Конечное положение колонки сетки

Классы `col-end-*` задают `grid-column-end` — линию сетки, на которой
заканчивается элемент. Берите их вместе с
[`col-start-*`](/ru/utilities/grid/grid-column-start/), когда удобнее назвать
начало и конец элемента, чем его ширину.

## Пример

### Номер линии

Сетка из шести колонок; верхний ряд пронумерован. Линия `7` — правый край
шестой колонки, поэтому `col-start-1 col-end-7` занимает всю строку.

:::example {id="utilities/grid/grid-column-end" label="col-end-4, col-start-2 col-end-6, col-start-1 col-end-7"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `col-end-1` | `grid-column-end: 1` | — |
| `col-end-2` | `grid-column-end: 2` | — |
| `col-end-3` | `grid-column-end: 3` | — |
| `col-end-4` | `grid-column-end: 4` | — |
| `col-end-5` | `grid-column-end: 5` | — |
| `col-end-6` | `grid-column-end: 6` | — |
| `col-end-7` | `grid-column-end: 7` | — |
| `col-end-8` | `grid-column-end: 8` | — |
| `col-end-9` | `grid-column-end: 9` | — |
| `col-end-10` | `grid-column-end: 10` | — |
| `col-end-11` | `grid-column-end: 11` | — |
| `col-end-12` | `grid-column-end: 12` | — |
| `col-end-13` | `grid-column-end: 13` | — |
| `col-end-auto` | `grid-column-end: auto` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:col-end-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `col-end-1` … `col-end-13` — номер линии, на которой заканчивается элемент.
  Без `col-start-*` элемент занимает одну колонку перед этой линией.
- `col-end-auto` — конец выбирает раскладка; класс нужен, чтобы отменить
  `col-end-*` на другой ширине экрана.

### Начало и конец

```html
<div class="grid grid-col-6 gap-2">
  <div class="col-start-2 col-end-6">Колонки со второй по пятую</div>
</div>
```

## Ограничения

- Номер больше числа линий шаблона добавляет колонки справа от шаблона.
- Линии считаются по направлению письма: при `dir="rtl"` последняя линия —
  левый край сетки.

## См. также

- [Начальное положение колонки сетки](/ru/utilities/grid/grid-column-start/)
- [Размер колонки сетки](/ru/utilities/grid/grid-column/)
- [Конечное положение строки сетки](/ru/utilities/grid/grid-row-end/)
