---
extends: _core._layouts.documentation
section: content
title: Стиль границы
description: Стиль границы
---

# Стиль границы

!rtags[border-style]


С помощью модификаторов стиля границы в SIMAI Framework вы можете задавать стиль для всех сторон, по осям или для отдельных сторон.

## Поддерживаемые стили

- `dotted`
- `dashed`
- `solid`
- `double`
- `hidden`
- `inset`
- `none`

## Классы

| Класс | Значение |
|:--|:--|
| `.border-{style}` | `border-style: {style}` |
| `.border-x-{style}` | `border-inline-start-style` + `border-inline-end-style` |
| `.border-y-{style}` | `border-top-style` + `border-bottom-style` |
| `.border-inline-start-{style}` | `border-inline-start-style` |
| `.border-inline-end-{style}` | `border-inline-end-style` |
| `.border-top-{style}` | `border-top-style` |
| `.border-bottom-{style}` | `border-bottom-style` |

{.table}

## Синтаксис

- `{модификатор}` — для всех размеров экрана.
- `{контрольная точка}:{модификатор}` — адаптивно (`sm`, `md`, `lg`, `xl`), например `lg:border-dashed`.

> В текущей версии используются логические стороны (`inline-start` / `inline-end`) вместо `left` / `right`.

## Примеры

```html
<div class="border-2 border-dotted">border-dotted</div>
<div class="border-2 border-x-dashed">border-x-dashed</div>
<div class="border-2 border-y-solid">border-y-solid</div>
<div class="border-2 border-inline-start-double">border-inline-start-double</div>
<div class="border-2 border-inline-end-hidden">border-inline-end-hidden</div>
<div class="border-2 border-top-inset">border-top-inset</div>
<div class="border-2 border-bottom-none">border-bottom-none</div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=border&group=border-style"></iframe>
</div>
