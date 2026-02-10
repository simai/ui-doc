---
extends: _core._layouts.documentation
section: content
title: Цвет внешней границы
description: Цвет внешней границы
---

# Цвет внешней границы

| Класс | Значение |
|:--|:--|
| `.outline-transparent` | `outline-color: var(--sf-transparent);` |
| `.outline-current` | `outline-color: currentColor;` |
| `.outline-outline` | `outline-color: var(--sf-outline);` |
| `.outline-outline-variant` | `outline-color: var(--sf-outline-variant);` |
| `.outline-primary` | `outline-color: var(--sf-outline-primary);` |
| `.outline-secondary` | `outline-color: var(--sf-outline-secondary);` |
| `.outline-tertiary` | `outline-color: var(--sf-outline-tertiary);` |
| `.outline-error` | `outline-color: var(--sf-outline-error);` |
| `.outline-warning` | `outline-color: var(--sf-outline-warning);` |
| `.outline-success` | `outline-color: var(--sf-outline-success);` |
{.table}

## Описание

Цвет контура задается через палитру `outline-*`.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или `{состояние}:{модификатор}`.

- Контрольные точки: `sm`, `md`, `lg`, `xl`.
- Состояния: `hover`, `focus`, `active`.
- Модификатор: `outline-{transparent|current|outline|outline-variant|primary|secondary|tertiary|error|warning|success}`.

## Пример

```html
<button class="outline outline-2 outline-solid outline-primary outline-offset-2">primary</button>
<button class="outline outline-2 outline-solid outline-warning outline-offset-2">warning</button>
<button class="outline outline-2 outline-solid outline-error outline-offset-2 hover:outline-success">hover:outline-success</button>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=outline&group=outline-color"></iframe>
</div>