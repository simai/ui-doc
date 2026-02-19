---
extends: _core._layouts.documentation
section: content
title: Цвет заливки
description: Цвет заливки
---

# Цвет заливки

!rtags[svg-fill-color]


Классы `fill-*` задают `fill` для SVG.

Примеры поддерживаемых модификаторов:
- `fill-transparent`, `fill-current`
- `fill-primary`, `fill-secondary`, `fill-tertiary`
- `fill-error`, `fill-warning`, `fill-success`
- `fill-surface-*`, `fill-*-container`, `fill-*-transparent-*`

Также поддерживается `hover:` для части модификаторов (`hover:fill-primary`, `hover:fill-success` и т.д.).

## Синтаксис

`fill-{modifier}`

`hover:fill-{modifier}`

## Пример

```html
<svg class="svg-6 fill-primary"></svg>
<svg class="svg-6 fill-warning"></svg>
<svg class="svg-6 fill-error hover:fill-success"></svg>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=svg&group=svg-fill-color"></iframe>
</div>
