---
title: "Размер фона"
description: "Управление размером фонового изображения"
tags: [background-size, background-size-ext, sm, md, lg, xl, xxl]
---

# Размер фона

:badge[background-size]{type=main scheme=on-surface size=1} :badge[background-size-ext]{type=tonal scheme=neutral size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1} :badge[xxl]{type=tonal scheme=neutral size=1}

Утилиты `background-size` управляют масштабированием фонового изображения внутри элемента.

## Наглядный пример

:::example {id="utilities/background/background-size" label="Размер фона"}
:::

## Таблица классов (базовые)

| Класс        | Значение                  |
|:-------------|:--------------------------|
| `bg-auto` | `background-size: auto;` |
| `bg-cover` | `background-size: cover;` |
| `bg-contain` | `background-size: contain;` |

## Таблица классов (расширенные)

| Класс                | Значение                                  |
|:---------------------|:------------------------------------------|
| `bg-size-0...bg-size-100` | `background-size: 0%...100%;` |
| `bg-size-a0...bg-size-i9` | `background-size: var(--sf-a0)...var(--sf-i9);` |

## Описание

- `bg-auto` — фон в исходном размере.
- `bg-cover` — фон покрывает весь блок (с возможной обрезкой).
- `bg-contain` — фон полностью помещается в блок.
- `bg-size-*` — расширенные размеры: проценты и токены size-scale.

## Синтаксис

Использование: `{контрольная_точка}:{модификатор}` или `{модификатор}`

- Контрольная точка *(необязательный параметр)*: `sm`, `md`, `lg`, `xl`, `xxl`.
- Модификатор *(обязательный параметр)*: один из классов из таблиц выше.

## Примеры использования
