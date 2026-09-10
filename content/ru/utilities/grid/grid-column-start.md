---
title: "Начальное положение колонки сетки"
description: "Начальное положение колонки сетки (grid-column-start)"
tags: [grid-column-start, sm, md, lg, xl]
---

# Начальное положение колонки сетки

:badge[grid-column-start]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1}

В SIMAI Framework с помощью модификаторов можно управлять начальным положением столбцов в сетке, задавая от какой линии
сетки элемент должен начинаться.

## Наглядный пример

:::example {id="utilities/grid/grid-column-start" label="Начальное положение колонки сетки"}
:::

## Таблица классов

| Класс           | Значение                 |
|:----------------|:-------------------------|
| `col-start-1` | `grid-column-start: 1;` |
| `col-start-2` | `grid-column-start: 2;` |
| `col-start-3` | `grid-column-start: 3;` |
| `col-start-4` | `grid-column-start: 4;` |
| `col-start-5` | `grid-column-start: 5;` |
| `col-start-6` | `grid-column-start: 6;` |
| `col-start-7` | `grid-column-start: 7;` |
| `col-start-8` | `grid-column-start: 8;` |
| `col-start-9` | `grid-column-start: 9;` |
| `col-start-10` | `grid-column-start: 10;` |
| `col-start-11` | `grid-column-start: 11;` |
| `col-start-12` | `grid-column-start: 12;` |
| `col-start-13` | `grid-column-start: 13;` |
| `col-start-auto` | `grid-column-start: auto;` |

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:
  Применяет модификатор начиная с определенного размера экрана (`sm`, `md`, `lg`, `xl`).
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `col-start-{1...12}` — элемент начинается с указанного столбца сетки;
    - `col-start-auto` — начало столбца определяется автоматически.

## Пример использования

```html
<div class="grid grid-col-6 gap-1">
    <div></div>
    <div class="col-span-4 col-start-2">1</div>
    <div></div>
</div>
```

В данном примере элемент с классом `col-span-4 col-start-2` начинается со второй линии сетки и занимает 4 столбца.

Обратите внимание, что линии сетки CSS начинаются с 1\. Например, в сетке из 6 столбцов:

- Полная ширина элемента будет начинаться с 1 и заканчиваться на 7 (так как линии считаются по границам столбцов).

## Адаптивность

Для изменения начального положения столбца начиная с определённого размера экрана используйте префикс контрольной точки.
Например:

```html
<div class="md:col-start-4">
    <!-- Начиная с размера экрана md и больше элемент будет начинаться с 4-й линии сетки -->
</div>
```
