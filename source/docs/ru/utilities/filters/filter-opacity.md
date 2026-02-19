---
extends: _core._layouts.documentation
section: content
title: "Прозрачность элемента (filter-opacity)"
description: "Прозрачность элемента (filter-opacity)"
---

# Прозрачность элемента (filter-opacity)

!rtags[filter-opacity]



Данные модификаторы позволяют задавать степень прозрачности элемента через CSS filter.

## Классы

| Класс | Значение |
|:------|:---------|
| `.filter-opacity-0` | `filter: opacity(0)` |
| `.filter-opacity-1` | `filter: opacity(0.1)` |
| `.filter-opacity-2` | `filter: opacity(0.2)` |
| `.filter-opacity-3` | `filter: opacity(0.3)` |
| `.filter-opacity-4` | `filter: opacity(0.4)` |
| `.filter-opacity-5` | `filter: opacity(0.5)` |
| `.filter-opacity-6` | `filter: opacity(0.6)` |
| `.filter-opacity-7` | `filter: opacity(0.7)` |
| `.filter-opacity-8` | `filter: opacity(0.8)` |
| `.filter-opacity-9` | `filter: opacity(0.9)` |
| `.filter-opacity-full` | `filter: opacity(1)` |
{.table}

## Описание

Модификаторы `filter-opacity-{0...9,full}` устанавливают прозрачность элемента.

- `filter-opacity-0` делает элемент полностью прозрачным.
- `filter-opacity-full` делает элемент полностью непрозрачным.
- `filter-opacity-1...9` задают промежуточные значения от 10% до 90%.

Также можно использовать `hover:filter-opacity-*` для изменения прозрачности при наведении.

## Синтаксис

- `filter-opacity-0 ... filter-opacity-9` и `filter-opacity-full` — задать степень прозрачности.
- `hover:filter-opacity-*` — изменить прозрачность при наведении.

## Пример использования

```html
<div class="filter-opacity-0 p-4 bg-primary color-on-surface-inverse">Невидимый элемент</div>
<div class="filter-opacity-5 p-4 bg-secondary m-top-2">50% прозрачности</div>
<div class="filter-opacity-5 hover:filter-opacity-full p-4 bg-tertiary m-top-2 transition">
  Наведи, чтобы сделать непрозрачным
</div>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=filters&group=filter-opacity"></iframe>
</div>
