---
title: "Позиционирование объекта (object-position)"
description: "Утилиты object-position управляют тем, какую часть заменяемого элемента (img/video) показывать внутри контейнера."
tags: [object-position, sm, md, lg, xl]
---

# Позиционирование объекта (object-position)

Модификаторы `object-*` задают точку привязки содержимого внутри контейнера. Утилиты используют логические направления (`inline-start/end`, `top/bottom`) — поэтому корректно работают в LTR/RTL.

## Таблица классов

| Класс                    | Значение                      |
|:-------------------------|:------------------------------|
| .object-bottom           | object-position: bottom;      |
| .object-center           | object-position: center;      |
| .object-inline-start     | object-position: left;        |
| .object-inline-start-top | object-position: left top;    |
| .object-inline-start-bottom | object-position: left bottom; |
| .object-inline-end       | object-position: right;       |
| .object-inline-end-top   | object-position: right top;   |
| .object-inline-end-bottom| object-position: right bottom;|
| .object-top              | object-position: top;         |

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`.

- **Контрольная точка** *(опционально)*: `sm`, `md`, `lg`, `xl` — применяет модификатор, начиная с указанного брейкпоинта.
- **Модификатор** *(обязательно)*: один из классов таблицы выше.

Пример с брейкпоинтом: `md:object-inline-end-bottom`.

## Примеры

:::example {id="utilities/objects/object-position" label="Результат"}
:::

