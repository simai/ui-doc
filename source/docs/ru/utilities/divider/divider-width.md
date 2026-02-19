---
extends: _core._layouts.documentation
section: content
title: Толщина разделителя
description: Толщина разделителя
---

# Толщина разделителя

!rtags[divider-width]


Утилиты толщины задают ширину линии между соседними элементами по оси `x` или `y`.

## Таблица классов

| Класс | Значение |
|:--|:--|
| `.divider-x-{0..4}` / `.divide-x-{0..4}` | Толщина разделителя по горизонтали |
| `.divider-y-{0..4}` / `.divide-y-{0..4}` | Толщина разделителя по вертикали |
| `.divider-x-reverse` / `.divide-x-reverse` | Реверс распределения линии по оси `x` |
| `.divider-y-reverse` / `.divide-y-reverse` | Реверс распределения линии по оси `y` |
{.table}

Значения толщины: `0`, `1`, `2`, `3`, `4`.

## Пример

```html
<div class="grid grid-col-3 divider-x-1">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<div class="flex flex-col-reverse divider-y-2 divider-y-reverse">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=divider&group=divider-width"></iframe>
</div>
