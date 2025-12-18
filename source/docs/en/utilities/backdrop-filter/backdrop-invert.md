---
extends: _core._layouts.documentation
section: content
title: "Инвертирование цвета фона элемента (backdrop-invert)"
description: "Инвертирование цвета фона элемента (backdrop-invert)"
---

# Инвертирование цвета фона элемента (backdrop-invert)

[https://dev.ru.simai.io/ru/ui/utility/backdrop-filter/backdrop-filter-invert.php](https://dev.ru.simai.io/ru/ui/utility/backdrop-filter/backdrop-filter-invert.php)

Данный модификатор позволяет управлять инвертированием цвета фона элемента.

## Классы и их значения

| Класс                 | Значение                   |
|:----------------------|:---------------------------|
| .backdrop-invert-none | backdrop-filter: invert(0) |
| .backdrop-invert      | backdrop-filter: invert(1) |
{.table}

## Описание

- `backdrop-invert-none` — фон элемента без инвертирования цвета.
- `backdrop-invert` — фон элемента становится инвертированным.

Можно использовать `hover:` для изменения при наведении, например:  
`hover:backdrop-invert` для инвертирования цвета фона при наведении.

## Синтаксис

- `{модификатор}`: `backdrop-invert-none` или `backdrop-invert`
- Без адаптивности, поддержка `hover:` доступна.

## Пример использования

```html
<!-- При наведении фон станет инвертированным -->
<div class="backdrop-invert-none hover:backdrop-invert p-4 bg-primary color-on-surface-inverse transition">
  Наведи, чтобы инвертировать цвет фона
</div>
```
