---
extends: _core._layouts.documentation
section: content
title: Цвет полос
description: Цвет полос
---

# Цвет полос

!rtags[stripes-color]



С помощью модификаторов `stripe-{color}` можно задать цвет полос паттерна фона.

## Таблица классов

| Класс | Значение |
|:------|:---------|
| `.stripe-transparent` | `--sf-stripe--color: var(--sf-transparent)` |
| `.stripe-current` | `--sf-stripe--color: currentColor` |
| `.stripe-surface` | `--sf-stripe--color: var(--sf-surface)` |
| `.stripe-on-surface` | `--sf-stripe--color: var(--sf-on-surface)` |
| `.stripe-primary` | `--sf-stripe--color: var(--sf-primary)` |
| `.stripe-secondary` | `--sf-stripe--color: var(--sf-secondary)` |
| `.stripe-tertiary` | `--sf-stripe--color: var(--sf-tertiary)` |
{.table}

## Описание

Модификаторы `stripe-{color}` устанавливают переменную `--sf-stripe--color`,
которая используется в узорах `stripe-1...stripe-4`.

## Синтаксис

- `stripe-{color}` — задать цвет полос.

## Пример использования

```html
<div class="stripe-1 stripe-primary p-3">Полоски primary в стиле stripe-1</div>
<div class="stripe-2 stripe-on-surface p-3">Полоски on-surface в стиле stripe-2</div>
<div class="stripe-3 stripe-tertiary p-3">Полоски tertiary в стиле stripe-3</div>
<div class="stripe-4 stripe-current p-3">Полоски currentColor в стиле stripe-4</div>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=stripes&group=stripes-color"></iframe>
</div>
