---
extends: _core._layouts.documentation
section: content
title: "Начальное положение колонки сетки (grid-column-start)"
description: "Начальное положение колонки сетки (grid-column-start)"
---

# Начальное положение колонки сетки (grid-column-start)

!rtags[grid-column-start sm md lg xl]


В SIMAI Framework с помощью модификаторов можно управлять начальным положением столбцов в сетке, задавая от какой линии
сетки элемент должен начинаться.

## Таблица классов

| Класс           | Значение                 |
|:----------------|:-------------------------|
| .col-start-1    | grid-column-start: 1;    |
| .col-start-2    | grid-column-start: 2;    |
| .col-start-3    | grid-column-start: 3;    |
| .col-start-4    | grid-column-start: 4;    |
| .col-start-5    | grid-column-start: 5;    |
| .col-start-6    | grid-column-start: 6;    |
| .col-start-7    | grid-column-start: 7;    |
| .col-start-8    | grid-column-start: 8;    |
| .col-start-9    | grid-column-start: 9;    |
| .col-start-10   | grid-column-start: 10;   |
| .col-start-11   | grid-column-start: 11;   |
| .col-start-12   | grid-column-start: 12;   |
| .col-start-13   | grid-column-start: 13;   |
| .col-start-auto | grid-column-start: auto; |
{.table}

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
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=grid&group=grid-column-start"></iframe>
</div>
