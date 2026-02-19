---
extends: _core._layouts.documentation
section: content
title: Вложение маски
description: Вложение маски
---

# Вложение маски


С помощью модификаторов вложения маски можно указать, относительно какого элемента или области будет рассчитываться
позиция маски.

## Таблица классов

| Класс                | Значение                  |
|:---------------------|:--------------------------|
| .mask-origin-content | mask-origin: content-box; |
| .mask-origin-padding | mask-origin: padding-box; |
| .mask-origin-margin  | mask-origin: margin-box;  |
| .mask-origin-border  | mask-origin: border-box;  |
| .mask-origin-fill    | mask-origin: fill-box;    |
| .mask-origin-stroke  | mask-origin: stroke-box;  |
| .mask-origin-viewbox | mask-origin: view-box;    |
{.table}

## Описание

Модификаторы вложения маски определяют, относительно какого бокса или рамки будет позиционироваться маска:

- **mask-origin-content** – маска относительно области контента.
- **mask-origin-padding** – маска относительно области padding.
- **mask-origin-margin** – маска относительно внешних отступов margin.
- **mask-origin-border** – маска относительно границ (учитывает border-width).
- **mask-origin-fill** – маска относительно рамки объекта в SVG.
- **mask-origin-stroke** – маска относительно области, ограничивающей обводку (stroke) SVG-элемента.
- **mask-origin-viewbox** – маска относительно view-box SVG-элемента.

## Примеры использования

```html
<!-- Маска относительно контента -->
<div class="mask-origin-content">...</div>

<!-- Маска относительно padding -->
<div class="mask-origin-padding">...</div>

<!-- Маска относительно margin -->
<div class="mask-origin-margin">...</div>

<!-- Маска относительно border -->
<div class="mask-origin-border">...</div>

<!-- Маска относительно fill-box (SVG) -->
<div class="mask-origin-fill">...</div>

<!-- Маска относительно stroke-box (SVG) -->
<div class="mask-origin-stroke">...</div>

<!-- Маска относительно view-box (SVG) -->
<div class="mask-origin-viewbox">...</div>
```
