---
title: "Автоматическое формирование сетки"
description: "Автоматическое формирование сетки (grid-auto-flow)"
tags: [grid-auto-flow, sm, md, lg, xl, xxl]
---

# Автоматическое формирование сетки

:badge[grid-auto-flow]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1} :badge[xxl]{type=tonal scheme=neutral size=1}

В SIMAI Framework с помощью модификаторов можно управлять автоматическим размещением элементов в сетке. Это позволяет гибко адаптировать отображение контента, сохраняя порядок либо оптимизируя использование доступного пространства.

## Наглядный пример

:::example {id="utilities/grid/grid-auto-flow" label="Автоматическое формирование сетки"}
:::

## Таблица классов

| Класс                | Значение                      |
|:---------------------|:------------------------------|
| `grid-flow-row` | `grid-auto-flow: row;` |
| `grid-flow-col` | `grid-auto-flow: column;` |
| `grid-flow-row-dense` | `grid-auto-flow: row dense;` |
| `grid-flow-col-dense` | `grid-auto-flow: column dense;` |

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`, `xxl`). Если не указана, модификатор действует для всех размеров.
- Модификатор *(обязательный параметр)*:
  - `grid-flow-row` — элементы заполняют строки последовательно.
  - `grid-flow-col` — элементы заполняют столбцы последовательно.
  - `grid-flow-row-dense` — элементы размещаются по строкам, пытаясь занять свободные ячейки, даже если это нарушает исходный порядок.
  - `grid-flow-col-dense` — элементы размещаются по столбцам с уплотнением аналогично row-dense.

## Пример использования

```html
<div class="grid grid-col-6 gap-1 grid-flow-row">
  <div class="col-span-4">1</div>
  <div class="col-span-3">2</div>
  <div class="col-span-2">3</div>
  <div class="col-span-3">4</div>
</div>
```

В этом примере элементы заполняют строки по порядку.

## Адаптивность

Чтобы менять поведение начиная с определённой ширины, добавьте контрольную точку:

```html
<div class="md:grid-flow-row-dense">
  <!-- Начиная с md элементы будут размещаться плотнее по строкам -->
</div>
```
