---
extends: _core._layouts.documentation
section: content
title: 'Конечное положение строки сетки (grid-row-end)'
description: 'Конечное положение строки сетки (grid-row-end)'
---

# Конечное положение строки сетки (grid-row-end)

[https://dev.ru.simai.io/ru/ui/utility/grid/grid-row-end.php](https://dev.ru.simai.io/ru/ui/utility/grid/grid-row-end.php)

В SIMAI Framework с помощью модификаторов можно управлять тем, на какой строке заканчивается элемент в сетке, определяя
его конечное положение относительно строк.

## Таблица классов

| Класс         | Значение    |
| :----------------- | :------------------ |
| .grid-row-end-1    | grid-row-end: 1;    |
| .grid-row-end-2    | grid-row-end: 2;    |
| .grid-row-end-3    | grid-row-end: 3;    |
| .grid-row-end-4    | grid-row-end: 4;    |
| .grid-row-end-5    | grid-row-end: 5;    |
| .grid-row-end-6    | grid-row-end: 6;    |
| .grid-row-end-7    | grid-row-end: 7;    |
| .grid-row-end-auto | grid-row-end: auto; |

{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка _(необязательный параметр)_:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор _(обязательный параметр)_:
  - `grid-row-end-{n}` (где n от 1 до 7) — элемент заканчивается на указанной строке.
  - `grid-row-end-auto` — конец строки определяется автоматически.

## Пример использования

```html
<div class="grid grid-col-6 gap-1">
  <!-- Элемент начнётся с первой строки и закончится на четвертой -->
  <div class="grid-row-start-1 grid-row-end-4 col-span-2">1</div>

  <!-- Элемент заканчивается на третьей строке -->
  <div class="col-start-1 col-end-3 grid-row-end-3">2</div>

  <!-- Элемент занимает все строки, если сетка, скажем, из 6 строк -->
  <div class="col-end-7 col-span-2 grid-row-end-auto">3</div>
</div>
```

Обратите внимание, что линии сетки в CSS начинаются с 1, а не с 0\. Например, в сетке из 6 строк последний элемент,
занимающий всю высоту, будет заканчиваться на линии 7\.

## Адаптивность

Для изменения конечного положения элемента по строкам, начиная с определённого размера экрана, добавьте контрольную
точку:

```html
<div class="md:grid-row-end-4">
  <!-- Начиная с md элемент будет заканчиваться на 4-й строке -->
</div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=grid&group=grid-row-end"></iframe>
</div>