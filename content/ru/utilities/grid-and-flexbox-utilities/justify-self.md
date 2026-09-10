---
title: "Выравнивание отдельного элемента в ячейке по основной оси"
description: "Выравнивание отдельного элемента в ячейке по основной оси (justify-self)"
tags: [justify-self, sm, md, lg, xl]
---

# Выравнивание отдельного элемента в ячейке по основной оси

:badge[justify-self]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1}

Данные модификаторы определяют, как отдельный элемент будет выравниваться по основной оси внутри своей ячейки сетки или
флекс-контейнера.

## Наглядный пример

:::example {id="utilities/grid-and-flexbox-utilities/justify-self" label="Выравнивание отдельного элемента в ячейке по основной оси"}
:::

## Таблица классов

| Класс              | Значение               |
|:-------------------|:-----------------------|
| `self-main-auto` | `justify-self: auto;` |
| `self-main-start` | `justify-self: start;` |
| `self-main-end` | `justify-self: end;` |
| `self-main-center` | `justify-self: center;` |
| `self-main-stretch` | `justify-self: stretch;` |

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `self-main-auto` – элемент будет выравниваться на основе общей настройки justify-items;
    - `self-main-start` – элемент прижимается к началу ячейки по основной оси;
    - `self-main-end` – элемент прижимается к концу ячейки по основной оси;
    - `self-main-center` – элемент выравнивается по центру ячейки по основной оси;
    - `self-main-stretch` – элемент растягивается на всю доступную длину ячейки по основной оси.

## Пример использования
