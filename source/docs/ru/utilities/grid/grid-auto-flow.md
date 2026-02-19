---
extends: _core._layouts.documentation
section: content
title: "Автоматическое формирование сетки (grid-auto-flow)"
description: "Автоматическое формирование сетки (grid-auto-flow)"
---

# Автоматическое формирование сетки (grid-auto-flow)

!rtags[grid-auto-flow sm md lg xl]


В SIMAI Framework с помощью модификаторов можно управлять автоматическим размещением элементов в сетке. Это позволяет гибко адаптировать отображение контента, сохраняя порядок либо оптимизируя использование доступного пространства.

## Таблица классов

| Класс                | Значение                      |
|:---------------------|:------------------------------|
| .grid-flow-row       | grid-auto-flow: row;          |
| .grid-flow-col       | grid-auto-flow: column;       |
| .grid-flow-row-dense | grid-auto-flow: row dense;    |
| .grid-flow-col-dense | grid-auto-flow: column dense; |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`). Если не указана, модификатор действует для всех размеров.
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
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=grid&group=grid-auto-flow"></iframe>
</div>
