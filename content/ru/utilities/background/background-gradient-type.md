---
title: "Вид градиента"
description: "Утилиты выбора типа фонового градиента (linear, radial, conic) и количества цветов."
tags: [gradient-type, sm, md, lg, xl]
---

# Вид градиента

:badge[gradient-type]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1}

Утилиты `gr-*` задают тип градиента и то, сколько цветовых точек используется. Сами цвета и угол задаются через отдельные утилиты:

## Наглядный пример

:::example {id="utilities/background/background-gradient-type" label="Вид градиента"}
:::

- Цвета: `gr1-*`, `gr2-*`, `gr3-*` из **gradient-color** или `from-*`, `via-*`, `to-*` из **gradient-stops** (оба варианта записывают значения в `--sf-gradient--color-1/2/3`).
- Угол (для `gr-line-*`): через CSS‑переменную `--sf-gradient--angle` (по умолчанию 90deg), при необходимости переопределяется инлайном или кастомным классом.

## Таблица классов

| Класс        | Значение                                                                                                         |
|:-------------|:-----------------------------------------------------------------------------------------------------------------|
| `gr-line-2` | `background-image: linear-gradient(var(--sf-gradient--angle), var(--sf-gradient--color-1), var(--sf-gradient--color-2));` |
| `gr-line-3` | `background-image: linear-gradient(var(--sf-gradient--angle), var(--sf-gradient--color-1), var(--sf-gradient--color-2), var(--sf-gradient--color-3));` |
| `gr-radial-2` | `background-image: radial-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-2));` |
| `gr-radial-3` | `background-image: radial-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-2), var(--sf-gradient--color-3));` |
| `gr-conic-2` | `background-image: conic-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-2));` |
| `gr-conic-3` | `background-image: conic-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-2), var(--sf-gradient--color-3));` |

## Примеры

**Важно:** без указания цветов (`gr1-/gr2-/gr3-` или `from-/via-/to-`) градиент будет прозрачным, так как в переменных `--sf-gradient--color-*` нет значений.
