---
title: "Прозрачность фона элемента (backdrop-opacity)"
description: "Прозрачность фона элемента (backdrop-opacity)"
---

# Прозрачность фона элемента (backdrop-opacity)


!rtags[backdrop-filter-opacity hover]






Данный модификатор позволяет управлять прозрачностью фона элемента.

## Классы и их значения:

| Класс                  | Значение                      |
|:-----------------------|:------------------------------|
| .backdrop-opacity-0    | backdrop-filter: opacity(0)   |
| .backdrop-opacity-1    | backdrop-filter: opacity(0.1) |
| .backdrop-opacity-2    | backdrop-filter: opacity(0.2) |
| .backdrop-opacity-3    | backdrop-filter: opacity(0.3) |
| .backdrop-opacity-4    | backdrop-filter: opacity(0.4) |
| .backdrop-opacity-5    | backdrop-filter: opacity(0.5) |
| .backdrop-opacity-6    | backdrop-filter: opacity(0.6) |
| .backdrop-opacity-7    | backdrop-filter: opacity(0.7) |
| .backdrop-opacity-8    | backdrop-filter: opacity(0.8) |
| .backdrop-opacity-9    | backdrop-filter: opacity(0.9) |
| .backdrop-opacity-full | backdrop-filter: opacity(1)   |

## Описание

- `backdrop-opacity-0` — полностью прозрачный фон,
- `backdrop-opacity-full` — фон без прозрачности (полностью непрозрачен),
- Промежуточные значения (`1` ... `9`) соответствуют увеличению непрозрачности с шагом 0.1.

Можно использовать `hover:` префикс, чтобы применять изменение прозрачности фона при наведении. Например:
`hover:backdrop-opacity-5`.

## Синтаксис

- Без адаптивности, только `hover` при необходимости.
- `backdrop-opacity-{0|1|2|...|9|full}` для установки нужного уровня прозрачности фона.

## Пример использования

:::example {id="utilities/backdrop-filter/backdrop-opacity" label="Результат"}
:::

