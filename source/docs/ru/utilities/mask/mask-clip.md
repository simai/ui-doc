---
extends: _core._layouts.documentation
section: content
title: Область маски
description: Область маски
---

# Область маски

!rtags[mask-clip]



`mask-clip` ограничивает область, в которой маска влияет на содержимое.

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

## Примеры

```html
<div class="mask-content">...</div>
<div class="mask-border">...</div>
<div class="mask-viewbox">...</div>
<div class="mask-text">Hello</div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=mask&group=mask-clip"></iframe>
</div>
