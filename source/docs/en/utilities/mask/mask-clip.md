---
extends: _core._layouts.documentation
section: content
title: Область маски
description: Область маски
---

# Область маски


С помощью модификаторов области маски можно определить границы, в пределах которых будет отображаться содержимое блока.
Маска фактически ограничивает видимую часть содержимого в зависимости от выбранной области.

## Таблица классов

| Класс         | Значение                |
|:--------------|:------------------------|
| .mask-content | mask-clip: content-box; |
| .mask-padding | mask-clip: padding-box; |
| .mask-margin  | mask-clip: margin-box;  |
| .mask-border  | mask-clip: border-box;  |
| .mask-fill    | mask-clip: fill-box;    |
| .mask-stroke  | mask-clip: stroke-box;  |
| .mask-viewbox | mask-clip: view-box;    |
| .mask-text    | mask-clip: text;        |
| .mask-none    | mask-clip: no-clip;     |
{.table}

## Описание

Модификаторы области маски управляют тем, какая часть содержимого блока будет видна. При применении маски содержимое за
пределами заданной области будет скрыто.

- **mask-content** – обрезка по контенту блока, игнорируя margin, padding, border.
- **mask-padding** – обрезка по внутренним отступам (padding).
- **mask-margin** – обрезка по внешним отступам (margin).
- **mask-border** – обрезка по границам блока.
- **mask-fill** – обрезка по области fill-box для SVG.
- **mask-stroke** – обрезка по области stroke-box для SVG.
- **mask-viewbox** – обрезка по SVG viewport (view-box).
- **mask-text** – обрезка по контурам текста.
- **mask-none** – маска не применяется, обрезка не производится.

## Примеры использования

```html
<!-- Обрезка по контенту блока -->
<div class="mask-content">...</div>

<!-- Обрезка по padding -->
<div class="mask-padding">...</div>

<!-- Обрезка по margin -->
<div class="mask-margin">...</div>

<!-- Обрезка по границам блока -->
<div class="mask-border">...</div>

<!-- Обрезка по области fill-box (SVG) -->
<div class="mask-fill">...</div>

<!-- Обрезка по области stroke-box (SVG) -->
<div class="mask-stroke">...</div>

<!-- Обрезка по SVG viewport -->
<div class="mask-viewbox">...</div>

<!-- Обрезка по тексту -->
<div class="mask-text">Hello world</div>

<!-- Маска не применяется -->
<div class="mask-none">...</div>
```

Данные модификаторы помогают четко контролировать область отображения содержимого, что особенно полезно при работе со
сложными макетами или SVG-графикой.
