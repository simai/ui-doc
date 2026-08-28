---
title: "Контрастность фона элемента (backdrop-contrast)"
description: "Контрастность фона элемента (backdrop-contrast)"
tags: [backdrop-filter-contrast, hover]
---

# Контрастность фона элемента (backdrop-contrast)

Данный модификатор позволяет управлять контрастностью фона элемента.

## Классы и их значения:

| Класс                  | Значение                        |
|:-----------------------|:--------------------------------|
| .backdrop-contrast-0   | backdrop-filter: contrast(0)    |
| .backdrop-contrast-1/4 | backdrop-filter: contrast(0.8)  |
| .backdrop-contrast-1/3 | backdrop-filter: contrast(0.9)  |
| .backdrop-contrast-1/2 | backdrop-filter: contrast(0.95) |
| .backdrop-contrast-1   | backdrop-filter: contrast(1)    |
| .backdrop-contrast-2   | backdrop-filter: contrast(1.05) |
| .backdrop-contrast-3   | backdrop-filter: contrast(1.1)  |
| .backdrop-contrast-4   | backdrop-filter: contrast(1.2)  |

## Описание

- `backdrop-contrast-0` — минимальная контрастность (почти невидимо).
- `backdrop-contrast-1` — нормальная контрастность.
- Значения от 1/4 до 1/2 — немного уменьшают контраст.
- Значения выше 1 — слегка увеличивают контраст.

Вы можете использовать `hover:` для изменения контрастности при наведении, например: `hover:backdrop-contrast-1/2`.

## Синтаксис:

- `{модификатор}`: `backdrop-contrast-{0|1/4|1/3|1/2|1|2|3|4}`
- Нет адаптивности, но есть поддержка `hover:`.

## Пример использования:

:::example {id="utilities/backdrop-filter/backdrop-contrast" label="Результат"}
:::

