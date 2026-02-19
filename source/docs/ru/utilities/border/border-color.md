---
extends: _core._layouts.documentation
section: content
title: Цвет границы
description: Цвет границы
---

# Цвет границы

!rtags[border-color]


Утилиты цвета границы позволяют быстро назначать цвет рамки через токены SIMAI.

## Ролевые классы

| Класс | Значение |
|:--|:--|
| `.border-transparent` | `border-color: var(--sf-transparent)` |
| `.border-current` | `border-color: currentColor` |
| `.border-outline` | `border-color: var(--sf-outline)` |
| `.border-outline-variant` | `border-color: var(--sf-outline-variant)` |
| `.border-primary` | `border-color: var(--sf-outline-primary)` |
| `.border-secondary` | `border-color: var(--sf-outline-secondary)` |
| `.border-tertiary` | `border-color: var(--sf-outline-tertiary)` |
| `.border-error` | `border-color: var(--sf-outline-error)` |
| `.border-warning` | `border-color: var(--sf-outline-warning)` |
| `.border-success` | `border-color: var(--sf-outline-success)` |

{.table}

Также поддерживаются palette-классы вида `.border-red-500`, `.border-blue-700`, и т.д.

## Синтаксис

- `{модификатор}` — обычное применение.
- `hover:{модификатор}` — цвет на `:hover`.
- `active:{модификатор}` — цвет на `:active`.
- `{контрольная точка}:{модификатор}` — адаптивно (`sm`, `md`, `lg`, `xl`).

## Примеры

```html
<div class="border border-primary">border-primary</div>
<div class="border hover:border-warning">hover:border-warning</div>
<div class="border active:border-error">active:border-error</div>
<div class="border border-red-500">border-red-500</div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=border&group=border-color"></iframe>
</div>
