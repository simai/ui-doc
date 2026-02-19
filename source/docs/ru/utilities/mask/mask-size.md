---
extends: _core._layouts.documentation
section: content
title: Размер маски
description: Размер маски
---

# Размер маски

!rtags[mask-size]



Утилиты `mask-size` управляют масштабом изображения маски внутри элемента.

## Таблица классов

| Класс         | Значение              |
|:--------------|:----------------------|
| .mask-auto    | mask-size: auto;      |
| .mask-cover   | mask-size: cover;     |
| .mask-contain | mask-size: contain;   |
| .mask-full    | mask-size: 100% 100%; |
{.table}

## Описание

- `mask-auto` — маска в исходном размере.
- `mask-cover` — маска покрывает весь блок, может обрезаться.
- `mask-contain` — маска целиком помещается в блок без обрезки.
- `mask-full` — маска растягивается ровно на ширину и высоту блока.

## Примеры

```html
<div class="mask-auto"></div>
<div class="mask-cover"></div>
<div class="mask-contain"></div>
<div class="mask-full"></div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=mask&group=mask-size"></iframe>
</div>
