---
title: "Начальное положение строки сетки"
description: "Ставит элемент сетки в строку с заданным номером."
---

# Начальное положение строки сетки

Классы `row-start-*` задают `grid-row-start` — линию сетки, с которой
начинается элемент по вертикали. Берите их, чтобы поставить элемент в нужную
строку независимо от порядка разметки.

## Пример

### Номер линии

Сетка из трёх колонок. Линия `1` — верхний край первой строки, поэтому
`row-start-2` ставит элемент во вторую строку, а остальные элементы
обходят его.

:::example {id="utilities/grid/grid-row-start" label="row-start-2 и row-start-3 col-start-2"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `row-start-1` | `grid-row-start: 1` | — |
| `grid-row-start-1` | `grid-row-start: 1` | — |
| `row-start-2` | `grid-row-start: 2` | — |
| `grid-row-start-2` | `grid-row-start: 2` | — |
| `row-start-3` | `grid-row-start: 3` | — |
| `grid-row-start-3` | `grid-row-start: 3` | — |
| `row-start-4` | `grid-row-start: 4` | — |
| `grid-row-start-4` | `grid-row-start: 4` | — |
| `row-start-5` | `grid-row-start: 5` | — |
| `grid-row-start-5` | `grid-row-start: 5` | — |
| `row-start-6` | `grid-row-start: 6` | — |
| `grid-row-start-6` | `grid-row-start: 6` | — |
| `row-start-7` | `grid-row-start: 7` | — |
| `grid-row-start-7` | `grid-row-start: 7` | — |
| `row-start-auto` | `grid-row-start: auto` | — |
| `grid-row-start-auto` | `grid-row-start: auto` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:row-start-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `row-start-1` … `row-start-7` — номер линии, с которой начинается элемент.
- `row-start-auto` — место выбирает раскладка; класс нужен, чтобы отменить
  `row-start-*` на другой ширине экрана.

С `row-span-*` класс задаёт начало и высоту; с
[`row-end-*`](/ru/utilities/grid/grid-row-end/) — начало и конец. Вместе с
[`col-start-*`](/ru/utilities/grid/grid-column-start/) он ставит элемент в
конкретную ячейку.

### Ячейка по номерам

```html
<div class="grid grid-col-3 gap-2">
  <div class="row-start-2 col-start-3">Вторая строка, третья колонка</div>
</div>
```

### Второе имя

У каждого класса есть второе имя с приставкой `grid-`: `grid-row-start-2`,
`grid-row-start-auto`. Значения те же. В разметке пишите короткие имена — они
соответствуют колоночным `col-start-*`.

## Ограничения

- Номер больше числа строк добавляет пустые строки до нужной линии.
- Элемент с заданной строкой раскладка ставит раньше остальных, поэтому
  видимый порядок может разойтись с порядком разметки, по которому идут фокус
  клавиатуры и программы экранного доступа.

## См. также

- [Конечное положение строки сетки](/ru/utilities/grid/grid-row-end/)
- [Размер строки сетки](/ru/utilities/grid/grid-row/)
- [Начальное положение колонки сетки](/ru/utilities/grid/grid-column-start/)
