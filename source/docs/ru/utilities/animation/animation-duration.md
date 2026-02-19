---
extends: _core._layouts.documentation
section: content
title: Продолжительность анимации
description: Классы animation-duration-fast, animation-duration-normal и animation-duration-slow
---

# Продолжительность анимации

!rtags[animation-duration]


Утилиты задают длительность CSS-анимации через токены времени SIMAI Framework.

## Классы и значения

| Класс                      | Значение |
|:---------------------------|:---------|
| `.animation-duration-fast` | `animation-duration: var(--sf-duration-fast);` |
| `.animation-duration-normal` | `animation-duration: var(--sf-duration-normal);` |
| `.animation-duration-slow` | `animation-duration: var(--sf-duration-slow);` |
{.table}

## Синтаксис

```html
<div class="animation animation-duration-fast">...</div>
<div class="animation animation-duration-normal">...</div>
<div class="animation animation-duration-slow">...</div>
```

## Пример

```html
<div class="animation animation-duration-fast">Fast animation</div>
<div class="animation animation-duration-normal">Normal animation</div>
<div class="animation animation-duration-slow">Slow animation</div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=animation&group=animation-duration"></iframe>
</div>
