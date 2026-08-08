---
title: "Цвет заливки"
description: "Цвет заливки"
---

# Цвет заливки

!rtags[fill]


Классы `fill-*` задают `fill` для SVG.

Примеры поддерживаемы
 модификаторов:
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

&lt;div class="sf-playground overflow-hidden"&gt;
&lt;iframe title="Пример в Playground" loading="lazy" src="https://play.simai.io/embed.html?component=svg&group=svg-fill-color"&gt;&lt;/iframe&gt;
&lt;/div&gt;
