---
extends: _core._layouts.documentation
section: content
title: Толщина обводки
description: Толщина обводки
---

# Толщина обводки

!rtags[svg-stroke-width sm md lg xl]


Классы `stroke-N` задают `stroke-width`.

Поддерживаемые значения: `stroke-0` ... `stroke-10`.

## Синтаксис

`stroke-{0..10}`

## Пример

```html
<svg class="stroke-primary stroke-1 fill-transparent"></svg>
<svg class="stroke-primary stroke-4 fill-transparent"></svg>
<svg class="stroke-primary stroke-8 fill-transparent"></svg>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=svg&group=svg-stroke-width"></iframe>
</div>
