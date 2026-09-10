---
title: "Фон в оттенках серого элемента"
description: "Фон в оттенках серого элемента (backdrop-grayscale)"
tags: [backdrop-filter-grayscale, hover]
---

# Фон в оттенках серого элемента

:badge[backdrop-filter-grayscale]{type=main scheme=on-surface size=1}

Данный модификатор позволяет управлять отображением фона элемента в оттенках серого.

## Наглядный пример

:::example {id="utilities/backdrop-filter/backdrop-grayscale" label="Фон в оттенках серого элемента"}
:::

## Классы и их значения

| Класс                    | Значение                      |
|:-------------------------|:------------------------------|
| `backdrop-grayscale-none` | backdrop-filter: grayscale(0) |
| `backdrop-grayscale` | backdrop-filter: grayscale(1) |

## Описание

- `backdrop-grayscale-none` — нормальная цветопередача фона.
- `backdrop-grayscale` — переводит фон в оттенки серого.

Вы можете использовать `hover:` для изменения состояния при наведении, например: `hover:backdrop-grayscale`.

## Синтаксис

- `{модификатор}`: `backdrop-grayscale-{none| }`
- Без адаптивности, поддержка `hover:` доступна.

## Пример использования
