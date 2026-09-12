---
title: "Промежутки"
description: "Промежутки (space)"
tags: [space, sm, md, lg, xl, xxl]
---

# Промежутки

:badge[space]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1} :badge[xxl]{type=tonal scheme=neutral size=1}

`space` добавляет равномерные отступы между соседними дочерними элементами, не затрагивая крайние.

## Наглядный пример

:::example {id="utilities/indents/space" label="Промежутки"}
:::

## Таблица классов

| Класс                | Значение                                                 |
|:---------------------|:---------------------------------------------------------|
| `space-x-{n}` | горизонтальный интервал var(`--sf-space-{n}`) между элементами |
| `space-y-{n}` | вертикальный интервал var(`--sf-space-{n}`) между элементами   |
| `space-x-reverse` | реверсирует направление горизонтальных отступов          |
| `space-y-reverse` | реверсирует направление вертикальных отступов            |

Где `{n}` ∈ `0, 1/4, 1/3, 1/2, 1, 2, 3, 4, 5, 6, 7, 8`.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: `sm`, `md`, `lg`, `xl`, `xxl` — применяет интервал с указанного брейкпоинта.
- Модификатор *(обязательный параметр)*: `space-x-{n}`, `space-y-{n}`, опционально с `space-*-reverse`.

## Пример использования
