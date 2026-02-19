---
extends: _core._layouts.documentation
section: content
title: Тип заливки
description: Тип заливки
---

# Тип заливки

!rtags[svg-fill-type]


Классы задают `fill-rule` у SVG-пути.

| Класс | Значение |
|:--|:--|
| `.fill-nonzero` | `fill-rule: nonzero;` |
| `.fill-evenodd` | `fill-rule: evenodd;` |
{.table}

## Синтаксис

`fill-{nonzero|evenodd}`

## Пример

```html
<svg class="fill-nonzero"></svg>
<svg class="fill-evenodd"></svg>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=svg&group=svg-fill-type"></iframe>
</div>
