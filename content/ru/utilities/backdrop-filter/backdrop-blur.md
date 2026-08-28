---
title: "Размытие фона элемента (backdrop-blur)"
description: "Размытие фона элемента (backdrop-blur)"
tags: [backdrop-filter-blur, hover]
---

# Размытие фона элемента (backdrop-blur)

Данный модификатор позволяет размывать задний фон элемента.

## Классы

| Класс                 | Значение                    |
|:----------------------|:------------------------------------------------|
| .backdrop-blur-none   | backdrop-filter: blur(0)                        |
| .backdrop-blur-small  | backdrop-filter: blur(var(`--sf-blur-small`));  |
| .backdrop-blur        | backdrop-filter: blur(var(`--sf-blur-medium`)); |
| .backdrop-blur-medium | backdrop-filter: blur(var(`--sf-blur-medium`)); |
| .backdrop-blur-large  | backdrop-filter: blur(var(`--sf-blur-large`));  |

## Переменные для размытия

| Переменная         | Значение       |
|:-------------------|:---------------|
| `--sf-blur-small`  | var(`--sf-a2`) |
| `--sf-blur-medium` | var(`--sf-a4`) |
| `--sf-blur-large`  | var(`--sf-a8`) |

## Описание

- `backdrop-blur-none` — без размытия,
- `backdrop-blur-small` — слабое размытие фона,
- `backdrop-blur` или `backdrop-blur-medium` — среднее размытие фона,
- `backdrop-blur-large` — сильное размытие фона.

Можно использовать `hover:backdrop-blur-small` (и другие варианты) для изменения эффекта при наведении курсора.

## Синтаксис

- `backdrop-blur-none` — без размытия,
- `backdrop-blur-small` — слабое размытие,
- `backdrop-blur` (или `backdrop-blur-medium`) — среднее размытие,
- `backdrop-blur-large` — сильное размытие,
- Можно использовать `hover:` префикс для применения эффекта при наведении.

## Пример использования

:::example {id="utilities/backdrop-filter/backdrop-blur" label="Результат"}
:::

