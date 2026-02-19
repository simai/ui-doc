---
extends: _core._layouts.documentation
section: content
title: "Размер колонки сетки (grid-column)"
description: "Размер колонки сетки (grid-column)"
---

# Размер колонки сетки (grid-column)

!rtags[grid-column sm md lg xl]


Модификаторы `grid-column` позволяют задавать колонки и их интервалы в сетке, управляя шириной и расположением элементов по горизонтали.

## Таблица классов

| Класс              | Значение                  |
|:-------------------|:--------------------------|
| .col-span-{n}      | grid-column: span {n};    |
| .col-span-full     | grid-column: 1 / -1;      |
| .col-span-none     | grid-column: auto;        |
| .col-start-{n}     | grid-column-start: {n};   |
| .col-start-auto    | grid-column-start: auto;  |
| .col-end-{n}       | grid-column-end: {n};     |
| .col-end-auto      | grid-column-end: auto;    |
{.table}

Диапазон `n` соответствует объявленным утилитам в SCSS (`col-span` от 1 до 12, `col-start`/`col-end` от 1 до 13).

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: применяет модификатор начиная с указанного брейкпоинта (`sm`, `md`, `lg`, `xl`). Если не указана — действует для всех размеров.
- Модификатор *(обязательный параметр)*: указывает нужный `col-span`, `col-start` или `col-end`.

## Примеры

### Span
```html
<div class="grid grid-col-6 gap-2">
  <div class="sf-card bg-primary color-on-primary p-2 col-span-4">span 4</div>
  <div class="sf-card bg-secondary color-on-secondary p-2 col-span-2">span 2</div>
</div>
```

### Start / End
```html
<div class="grid grid-col-6 gap-2">
  <div class="sf-card bg-tertiary color-on-tertiary p-2 col-start-2 col-end-5">start 2 / end 5</div>
</div>
```

## Адаптивность

Чтобы менять расположение на определённых брейкпоинтах, добавьте контрольную точку:

```html
<div class="col-span-6 md:col-span-3 lg:col-span-2">
  <!-- элемент занимает разную ширину на разных экранах -->
</div>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=grid&group=grid-column"></iframe>
</div>
