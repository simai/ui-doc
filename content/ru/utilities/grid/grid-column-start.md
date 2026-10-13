---
title: "Начальное положение колонки сетки"
description: "Ставит элемент сетки в колонку с заданным номером."
---

# Начальное положение колонки сетки

Классы `col-start-*` задают `grid-column-start` — линию сетки, с которой
начинается элемент. Берите их, чтобы сдвинуть элемент вправо, оставив пустые
колонки слева, или поставить его в нужную колонку независимо от порядка
разметки.

## Пример

### Номер линии

Сетка из шести колонок; верхний ряд пронумерован. Линия `1` — левый край
первой колонки, поэтому `col-start-3` ставит элемент в третью колонку.

:::example {id="utilities/grid/grid-column-start" label="col-start-3, col-start-2 col-span-4, col-start-5 col-span-2"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `col-start-1` | `grid-column-start: 1` | — |
| `col-start-2` | `grid-column-start: 2` | — |
| `col-start-3` | `grid-column-start: 3` | — |
| `col-start-4` | `grid-column-start: 4` | — |
| `col-start-5` | `grid-column-start: 5` | — |
| `col-start-6` | `grid-column-start: 6` | — |
| `col-start-7` | `grid-column-start: 7` | — |
| `col-start-8` | `grid-column-start: 8` | — |
| `col-start-9` | `grid-column-start: 9` | — |
| `col-start-10` | `grid-column-start: 10` | — |
| `col-start-11` | `grid-column-start: 11` | — |
| `col-start-12` | `grid-column-start: 12` | — |
| `col-start-13` | `grid-column-start: 13` | — |
| `col-start-auto` | `grid-column-start: auto` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:col-start-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `col-start-1` … `col-start-13` — номер линии, с которой начинается элемент.
  В сетке из двенадцати колонок линий тринадцать.
- `col-start-auto` — место выбирает раскладка; класс нужен, чтобы отменить
  `col-start-*` на другой ширине экрана.

С `col-span-*` класс задаёт начало и ширину; с
[`col-end-*`](/ru/utilities/grid/grid-column-end/) — начало и конец.

### Блок по центру сетки

```html
<div class="grid grid-col-12 gap-2">
  <article class="col-span-12 md:col-start-3 md:col-span-8">Текст статьи</article>
</div>
```

## Ограничения

- Номер больше числа линий шаблона добавляет колонки справа от шаблона.
- Линии считаются по направлению письма: при `dir="rtl"` линия `1` — правый
  край сетки.

## См. также

- [Конечное положение колонки сетки](/ru/utilities/grid/grid-column-end/)
- [Размер колонки сетки](/ru/utilities/grid/grid-column/)
- [Начальное положение строки сетки](/ru/utilities/grid/grid-row-start/)
