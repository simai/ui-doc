---
extends: _core._layouts.documentation
section: content
title: Цвет тени элемента (box-shadow-color)
description: Цвет тени для default / hover / active
---

# Цвет тени элемента (box-shadow-color)

!rtags[element-color]



Утилиты задают цвет тени в состояниях `default`, `hover`, `active`.

## Таблица классов

| Класс | Значение |
|:--|:--|
| `.shadow-{color}` | цвет тени в базовом состоянии |
| `.hover:shadow-{color}` | цвет тени в `:hover` |
| `.active:shadow-{color}` | цвет тени в `:active` |
{.table}

Поддерживаемые `color`: `on-surface`, `primary`, `secondary`, `tertiary`, `error`, `success`, `warning`.

## Синтаксис

- `shadow-{color}`
- `hover:shadow-{color}`
- `active:shadow-{color}`

## Пример

```html
<button class="shadow-2 shadow-primary hover:shadow-warning active:shadow-error p-2 radius-2 border border-outline-variant">
  Shadow color states
</button>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=shadows&group=element-color"></iframe>
</div>
