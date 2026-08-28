---
title: "Падающая тень (drop-shadow)"
description: "Падающая тень (drop-shadow)"
tags: [drop-shadow, hover]
---

# Падающая тень (drop-shadow)

Данные модификаторы позволяют задать уровень падающей тени для элемента, используя переменную
`--sf-shadow--level-ratio`. От традиционного `box-shadow` падающая тень отличается тем, что отбрасывается только от
элементов, имеющих контур или заливку. Поэтому во многих случаях удобнее использовать обычную тень (`box-shadow`).

## Классы

| Класс          | Значение                       |
|:---------------|:-------------------------------|
| .drop-shadow-0 | `--sf-shadow--level-ratio`: 0  |
| .drop-shadow-1 | `--sf-shadow--level-ratio`: 1  |
| .drop-shadow-2 | `--sf-shadow--level-ratio`: 2  |
| .drop-shadow-3 | `--sf-shadow--level-ratio`: 4  |
| .drop-shadow-4 | `--sf-shadow--level-ratio`: 8  |
| .drop-shadow-5 | `--sf-shadow--level-ratio`: 16 |

## Описание

Модификаторы `drop-shadow-{0...5}` задают уровень падающей тени. Чем выше число, тем более выразительна тень.

- Используйте `drop-shadow-0` для отключения падающей тени.
- `drop-shadow-1`, `drop-shadow-2`, ... `drop-shadow-5` для повышения глубины тени.

Также можно применять состояние `hover` для изменения тени при наведении курсора.

## Синтаксис

- `drop-shadow-{0...5}` — задать уровень падающей тени.
- `hover:drop-shadow-{0...5}` — задать уровень падающей тени при наведении.

## Пример использования

:::example {id="utilities/shadows/drop-shadow" label="Результат"}
:::

