---
extends: _core._layouts.documentation
section: content
title: Тип анимации
description: animation-from-left/right/bottom
---

# Тип анимации

!rtags[animation]



Классы типа задают направление анимации.

## Классы и значения

| Класс                    | Значение |
|:-------------------------|:---------|
| `.animation-from-left`   | Появление сдвигом слева. |
| `.animation-from-right`  | Появление сдвигом справа. |
| `.animation-from-bottom` | Появление сдвигом снизу. |
{.table}

## Как использовать

Рекомендуется использовать вместе с базовым классом `.animation`:

```html
<div class="animation animation-from-left">...</div>
<div class="animation animation-from-right">...</div>
<div class="animation animation-from-bottom">...</div>
```

## Пример

```html
<div class="animation animation-from-left p-2 radius-1/3 bg-success color-on-success">
  Появление слева
</div>

<div class="animation animation-from-right p-2 radius-1/3 bg-warning color-on-warning">
  Появление справа
</div>

<div class="animation animation-from-bottom p-2 radius-1/3 bg-error color-on-error">
  Появление снизу
</div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=animation&group=animation-type"></iframe>
</div>
