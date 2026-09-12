---
title: "Параметры по умолчанию (для границ)"
description: "Параметры по умолчанию (для границ)"
tags: [border-width, sm, md, lg, xl, xxl]
---

# Параметры по умолчанию (для границ)

:badge[border-width]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1} :badge[xxl]{type=tonal scheme=neutral size=1}

## Наглядный пример

:::example {id="utilities/border/border-default-parameters" label="Параметры по умолчанию (для границ)"}
:::

Базовые утилиты для быстрого включения/отключения рамки с дефолтными параметрами.

## Классы

| Класс | Значение |
|:---|:---|
| `border` | `border: var(--sf-a1) var(--sf-outline-variant) solid` |
| `border-none` | `border: var(--sf-a1) var(--sf-transparent) solid` |

## Синтаксис

- `{модификатор}` — для всех размеров экрана.
- `{контрольная точка}:{модификатор}` — адаптивно (`sm`, `md`, `lg`, `xl`, `xxl`).
- `hover:{модификатор}` — применение при наведении.

## Примеры

