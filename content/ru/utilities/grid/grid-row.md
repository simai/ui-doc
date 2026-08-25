---
title: "Размер строки сетки (grid-row)"
description: "Размер строки сетки (grid-row)"
---

# Размер строки сетки (grid-row)

!rtags[grid-row sm md lg xl]


Модификаторы `grid-row` управляют высотой и позиционированием элементов по вертикали в grid-сетке.

## Таблица классов

| Класс            | Значение                 |
|:-----------------|:-------------------------|
| .row-span-{n}    | grid-row: span {n};      |
| .row-span-full   | grid-row: 1 / -1;        |
| .row-span-none   | grid-row: auto;          |
| .row-start-{n}   | grid-row-start: {n};     |
| .row-start-auto  | grid-row-start: auto;    |
| .row-end-{n}     | grid-row-end: {n};       |
| .row-end-auto    | grid-row-end: auto;      |

Диапазон `n` соответствует утилитам в SCSS (`row-span` от 1 до 6, `row-start`/`row-end` от 1 до 7).

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: применяет модификатор начиная с указанного брейкпоинта (`sm`, `md`, `lg`, `xl`). Без указания действует везде.
- Модификатор *(обязательный параметр)*: указывает нужный `row-span`, `row-start` или `row-end`.

## Примеры

### Span
```html
<div class="grid grid-col-3 gap-2">
  <div class="border radius-1 bg-primary color-on-primary p-2 grid-row-span-2">row span 2</div>
  <div class="border radius-1 bg-secondary color-on-secondary p-2">row span 1</div>
  <div class="border radius-1 bg-tertiary color-on-tertiary p-2">row span 1</div>
</div>
```

### Start / End
```html
<div class="grid grid-col-3 grid-row-4 gap-2">
  <div class="border radius-1 bg-success color-on-success p-2 grid-row-start-2 grid-row-end-4">start 2 / end 4</div>
</div>
```

## Адаптивность

```html
<div class="grid-row-span-2 md:grid-row-span-3">
  <!-- Высота строки увеличится на брейкпоинте md -->
</div>
```
## Пример
:::example {id="utilities/grid/grid-row" label="Результат"}
:::

