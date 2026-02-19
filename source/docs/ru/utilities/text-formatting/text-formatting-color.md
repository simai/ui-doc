---
extends: _core._layouts.documentation
section: content
title: Цвет оформления текста
description: Цвет оформления текста
---

# Цвет оформления текста

!rtags[text-formatting-color]


## Таблица классов

| Класс | Значение |
|:--|:--|
| `.decoration-primary` | `text-decoration-color: var(--sf-outline-primary);` |
| `.decoration-secondary` | `text-decoration-color: var(--sf-outline-secondary);` |
| `.decoration-tertiary` | `text-decoration-color: var(--sf-outline-tertiary);` |
| `.decoration-error` | `text-decoration-color: var(--sf-outline-error);` |
| `.decoration-warning` | `text-decoration-color: var(--sf-outline-warning);` |
| `.decoration-success` | `text-decoration-color: var(--sf-outline-success);` |
{.table}

## Пример

```html
<p class="underline decoration-primary">Primary underline</p>
<p class="underline decoration-warning">Warning underline</p>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=text-formatting&group=text-formatting-color"></iframe>
</div>
