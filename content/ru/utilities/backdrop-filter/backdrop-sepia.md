---
title: "Сепия подложки (backdrop-sepia)"
description: "Сепия подложки (backdrop-sepia)"
tags: [backdrop-filter-sepia, hover]
---

# Сепия подложки (backdrop-sepia)

Данный модификатор позволяет управлять отображением фона элемента как сепия.

## Классы и их значения

| Класс                | Значение                  |
|:---------------------|:--------------------------|
| .backdrop-sepia-none | backdrop-filter: sepia(0) |
| .backdrop-sepia      | backdrop-filter: sepia(1) |

## Описание

- `backdrop-sepia-none` — фон отображается без сепии.
- `backdrop-sepia` — фон отображается в стиле сепии.

Убираем адаптивность, но оставляем возможность использовать `hover:` для изменения состояния при наведении, например:
`hover:backdrop-sepia` для применения сепии при наведении курсора.

## Синтаксис

- `{модификатор}`: backdrop-sepia-{none|sepia}
- Без адаптивности, поддержка `hover:` доступна.

## Пример использования

:::example {id="utilities/backdrop-filter/backdrop-sepia" label="Результат"}
:::

