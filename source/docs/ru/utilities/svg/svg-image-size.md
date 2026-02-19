---
extends: _core._layouts.documentation
section: content
title: Размер SVG-изображений
description: Размер SVG-изображений
---

# Размер SVG-изображений

!rtags[svg-image-size sm md lg xl]


Классы `svg-*` задают `width` и `height` по текстовой шкале токенов.

Поддерживаемые значения: `svg-1/4`, `svg-1/3`, `svg-1/2`, `svg-1` ... `svg-12`.

## Синтаксис

`svg-{1/4|1/3|1/2|1..12}`

## Пример

```html
<svg class="svg-1 fill-primary"></svg>
<svg class="svg-4 fill-primary"></svg>
<svg class="svg-8 fill-primary"></svg>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=svg&group=svg-image-size"></iframe>
</div>
