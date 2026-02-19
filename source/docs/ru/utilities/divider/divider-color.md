---
extends: _core._layouts.documentation
section: content
title: Цвет разделителя
description: Цвет разделителя
---

# Цвет разделителя

!rtags[divider-color hover]


Утилиты цвета задают цвет линии разделителя между соседними элементами.

## Таблица классов

| Класс | Значение |
|:--|:--|
| `.divider-transparent` / `.divide-transparent` | `border-color: var(--sf-transparent)` |
| `.divider-current` / `.divide-current` | `border-color: currentColor` |
| `.divider-outline` / `.divide-outline` | `border-color: var(--sf-outline)` |
| `.divider-primary` / `.divide-primary` | `border-color: var(--sf-outline-primary)` |
| `.divider-secondary` / `.divide-secondary` | `border-color: var(--sf-outline-secondary)` |
| `.divider-tertiary` / `.divide-tertiary` | `border-color: var(--sf-outline-tertiary)` |
| `.divider-error` / `.divide-error` | `border-color: var(--sf-outline-error)` |
| `.divider-warning` / `.divide-warning` | `border-color: var(--sf-outline-warning)` |
| `.divider-success` / `.divide-success` | `border-color: var(--sf-outline-success)` |
| `.hover:divider-*` | Цвет разделителя при `:hover` |
{.table}

## Пример

```html
<div class="grid grid-col-3 divider-x-1 divider-primary hover:divider-error">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=divider&group=divider-color"></iframe>
</div>
