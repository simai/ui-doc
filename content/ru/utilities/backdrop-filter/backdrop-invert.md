---
title: "Инвертирование цвета фона элемента (backdrop-invert)"
description: "Инвертирование цвета фона элемента (backdrop-invert)"
tags: [backdrop-filter-invert, hover]
---

# Инвертирование цвета фона элемента (backdrop-invert)

Данный модификатор позволяет управлять инвертированием цвета фона элемента.

## Классы и их значения

| Класс                 | Значение                   |
|:----------------------|:---------------------------|
| .backdrop-invert-none | backdrop-filter: invert(0) |
| .backdrop-invert      | backdrop-filter: invert(1) |

## Описание

- `backdrop-invert-none` — фон элемента без инвертирования цвета.
- `backdrop-invert` — фон элемента становится инвертированным.

Можно использовать `hover:` для изменения при наведении, например:
`hover:backdrop-invert` для инвертирования цвета фона при наведении.

## Синтаксис

- `{модификатор}`: `backdrop-invert-none` или `backdrop-invert`
- Без адаптивности, поддержка `hover:` доступна.

## Пример использования

:::example {id="utilities/backdrop-filter/backdrop-invert" label="Результат"}
:::

