---
title: "Продолжительность анимации"
description: "Классы animation-duration-fast, animation-duration-normal и animation-duration-slow"
---

# Продолжительность анимации

Утилиты задают длительность CSS-анимации через токены времени SIMAI Framework.

## Классы и значения

| Класс                      | Значение |
|:---------------------------|:---------|
| `.animation-duration-fast` | `animation-duration: var(--sf-duration-fast);` |
| `.animation-duration-normal` | `animation-duration: var(--sf-duration-normal);` |
| `.animation-duration-slow` | `animation-duration: var(--sf-duration-slow);` |

## Синтаксис

```html
<div class="animation animation-duration-fast">...</div>
<div class="animation animation-duration-normal">...</div>
<div class="animation animation-duration-slow">...</div>
```

## Пример

Одинаковое движение повторяется с тремя значениями продолжительности. Сравните
карточки одновременно, а затем откройте вкладки `HTML` и `CSS`, чтобы увидеть
точный исходник демонстрации.

:::example {label="Результат"}
```html
<div class="duration-demo">
  <div class="duration-demo__item">
    <code>animation-duration-fast</code>
    <div class="duration-demo__card animation-duration-fast">Быстро</div>
  </div>
  <div class="duration-demo__item">
    <code>animation-duration-normal</code>
    <div class="duration-demo__card animation-duration-normal">Обычно</div>
  </div>
  <div class="duration-demo__item">
    <code>animation-duration-slow</code>
    <div class="duration-demo__card animation-duration-slow">Медленно</div>
  </div>
</div>
```
```css
:root {
  color-scheme: light dark;
  --sf-duration-fast: .1s;
  --sf-duration-normal: .3s;
  --sf-duration-slow: .5s;
}

body {
  margin: 0;
  padding: 1.5rem;
  color: CanvasText;
  background: Canvas;
  font-family: system-ui, sans-serif;
}

.duration-demo {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.duration-demo__item {
  display: grid;
  gap: .75rem;
}

.duration-demo__item code {
  overflow-wrap: anywhere;
  color: #075fce;
  font-size: .8rem;
}

.duration-demo__card {
  padding: 1.5rem;
  border: 1px solid color-mix(in srgb, CanvasText 22%, transparent);
  border-radius: 1rem;
  background: color-mix(in srgb, #075fce 12%, Canvas);
  font-weight: 700;
  animation: duration-demo-motion var(--sf-duration-normal) ease-in-out infinite alternate;
}

.animation-duration-fast { animation-duration: var(--sf-duration-fast); }
.animation-duration-normal { animation-duration: var(--sf-duration-normal); }
.animation-duration-slow { animation-duration: var(--sf-duration-slow); }

@keyframes duration-demo-motion {
  from { transform: translateX(0); }
  to { transform: translateX(1rem); }
}

@media (max-width: 24rem) {
  .duration-demo { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  .duration-demo__card { animation-play-state: paused; }
}
```
:::
