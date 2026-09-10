---
title: "Вращение оттенка элемента"
description: "Вращение оттенка элемента (filter-hue-rotate)"
tags: [filter-hue-rotate, hover]
---

# Вращение оттенка элемента

:badge[filter-hue-rotate]{type=main scheme=on-surface size=1}

Данный модификатор позволяет управлять вращением оттенка (цветового тона) элемента.

## Наглядный пример

:::example {id="utilities/filters/filter-hue-rotate" label="Вращение оттенка элемента"}
:::

## Классы и их значения

| Класс           | Значение                   |
|:----------------|:---------------------------|
| `hue-rotate-0` | filter: hue-rotate(0deg)   |
| `hue-rotate-15` | filter: hue-rotate(15deg)  |
| `hue-rotate-30` | filter: hue-rotate(30deg)  |
| `hue-rotate-60` | filter: hue-rotate(60deg)  |
| `hue-rotate-90` | filter: hue-rotate(90deg)  |
| `hue-rotate-180` | filter: hue-rotate(180deg) |
| `-hue-rotate-15` | filter: hue-rotate(-15deg) |
| `-hue-rotate-30` | filter: hue-rotate(-30deg) |
| `-hue-rotate-60` | filter: hue-rotate(-60deg) |
| `-hue-rotate-90` | filter: hue-rotate(-90deg) |

## Описание

Модификатор `hue-rotate-{градусы}` изменяет оттенок всего элемента на заданное количество градусов. Положительные
значения вращают цветовой тон по часовой стрелке, отрицательные — против.

Можно использовать `hover:hue-rotate-15` или любой другой класс, чтобы изменение оттенка происходило при наведении
курсора.

## Синтаксис

- `hue-rotate-{число}` — вращение оттенка на указанный угол в градусах.
- Можно использовать `hover:hue-rotate-{число}` для изменения оттенка при наведении.

## Пример использования
