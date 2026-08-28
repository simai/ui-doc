---
title: "Вращение оттенка фона элемента (backdrop-hue-rotate)"
description: "Вращение оттенка фона элемента (backdrop-hue-rotate)"
tags: [backdrop-filter-hue-rotate, hover]
---

# Вращение оттенка фона элемента (backdrop-hue-rotate)

Данный модификатор позволяет управлять вращением оттенка фона элемента.

## Классы и их значения

| Класс                    | Значение                          |
|:-------------------------|:------------------------------------------------------|
| .backdrop-hue-rotate-0   | backdrop-filter: hue-rotate(0deg)                     |
| .backdrop-hue-rotate-15  | backdrop-filter: hue-rotate(15deg)                    |
| .backdrop-hue-rotate-30  | backdrop-filter: hue-rotate(30deg)                    |
| .backdrop-hue-rotate-60  | backdrop-filter: hue-rotate(60deg)                    |
| .backdrop-hue-rotate-90  | backdrop-filter: hue-rotate(90deg)                    |
| .backdrop-hue-rotate-180 | backdrop-filter: hue-rotate(180deg)                   |
| .-backdrop-hue-rotate-15 | backdrop-filter: hue-rotate(-15deg)                   |
| .-backdrop-hue-rotate-30 | backdrop-filter: hue-rotate(-30deg)                   |
| .-backdrop-hue-rotate-60 | backdrop-filter: hue-rotate(-60deg)                   |
| .-backdrop-hue-rotate-90 | backdrop-filter: hue-rotate(-90deg)                   |

## Описание

- `backdrop-hue-rotate-{угол}` — меняет оттенок фона на заданный угол (например, `backdrop-hue-rotate-30` повернет
  оттенки на 30 градусов).
- Можно использовать `hover:` для изменения при наведении, например: `hover:backdrop-hue-rotate-90`.

## Синтаксис

- `{модификатор}`: `backdrop-hue-rotate-{угол}` или `-backdrop-hue-rotate-{угол}`
- Без адаптивности, поддержка `hover:` доступна.

## Пример использования

:::example {id="utilities/backdrop-filter/backdrop-hue-rotate" label="Результат"}
:::

