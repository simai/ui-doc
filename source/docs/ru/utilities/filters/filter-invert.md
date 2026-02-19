---
extends: _core._layouts.documentation
section: content
title: "Инвертирование цвета элемента (filter-invert)"
description: "Инвертирование цвета элемента (filter-invert)"
---

# Инвертирование цвета элемента (filter-invert)

!rtags[filter-invert]



Данный модификатор позволяет управлять инвертированием цвета элемента, превращая светлые тона в темные и наоборот.  
Убираем адаптивность (`sm`, `md`, `lg`, `xl`), оставляем поддержку `hover`.

## Классы и их значения

| Класс        | Значение          |
|:-------------|:------------------|
| .invert-none | filter: invert(0) |
| .invert      | filter: invert(1) |
{.table}

## Описание

Модификатор `invert` инвертирует цвета внутри элемента, делая светлые тона темными и наоборот.  
Можно использовать `hover:invert` или `hover:invert-none` для изменения инвертирования при наведении курсора.

## Синтаксис

- `invert-none` — без инвертирования (исходный цвет).
- `invert` — цвета инвертируются.
- Можно использовать `hover:invert` для инвертирования при наведении.

## Пример использования

```html
<!-- Элемент без инвертирования -->
<div class="invert-none p-4 bg-primary color-on-surface-inverse">Исходный цвет</div>
```

```html
<!-- Инвертирование цвета при наведении -->
<div class="invert-none hover:invert p-4 bg-secondary transition">
  Наведи, чтобы инвертировать цвета
</div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=filters&group=filter-invert"></iframe>
</div>
