---
extends: _core._layouts.documentation
section: content
title: "Начальное положение строки сетки (grid-row-start)"
description: "Начальное положение строки сетки (grid-row-start)"
---

# Начальное положение строки сетки (grid-row-start)

!rtags[grid-row-start sm md lg xl]


В SIMAI Framework с помощью модификаторов можно управлять тем, с какой строки начинается элемент в сетке, задавая его
положение относительно строк.

## Таблица классов

| Класс                | Значение              |
|:---------------------|:----------------------|
| .grid-row-start-1    | grid-row-start: 1;    |
| .grid-row-start-2    | grid-row-start: 2;    |
| .grid-row-start-3    | grid-row-start: 3;    |
| .grid-row-start-4    | grid-row-start: 4;    |
| .grid-row-start-5    | grid-row-start: 5;    |
| .grid-row-start-6    | grid-row-start: 6;    |
| .grid-row-start-7    | grid-row-start: 7;    |
| .grid-row-start-auto | grid-row-start: auto; |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор, начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `grid-row-start-{n}` (где n от 1 до 7) — элемент начинается с указанной строки.
    - `grid-row-start-auto` — начало строки определяется автоматически.

## Пример использования

```html
<div class="grid grid-col-6 gap-1">
    <div class="grid-row-start-2 col-span-4">1</div>
    <div class="col-start-1 col-end-3">2</div>
    <div class="col-end-7 col-span-2">3</div>
    <div class="col-start-1 col-end-7">4</div>
</div>
```

В этом примере элемент с классом `grid-row-start-2` начнётся со второй строки сетки.

## Адаптивность

Для изменения начального положения элемента по строкам, начиная с определённого размера экрана, добавьте контрольную
точку:

```html
<div class="md:grid-row-start-2">
    <!-- Начиная с md элемент будет начинаться со 2-й строки -->
</div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=grid&group=grid-row-start"></iframe>
</div>
