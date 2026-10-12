---
title: "Выравнивание каждого элемента по основной оси внутри ячейки"
description: "Выравнивает все элементы сетки по горизонтали внутри их ячеек."
---

# Выравнивание каждого элемента по основной оси внутри ячейки

Классы `items-main-*` задают `justify-items`: где элемент сетки стоит в своей
ячейке по горизонтали — у начала, в центре, у конца или на всю ширину. Берите
их, когда элементы сетки уже своих колонок и не должны растягиваться.

## Пример

### Значения

Сетка из трёх колонок, элементы шириной по своему тексту. Подпись над
образцом — класс контейнера.

:::example {id="utilities/grid-and-flexbox-utilities/justify-items" label="items-main-start, center, end, stretch"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `items-main-start` | `justify-items: start` | — |
| `items-main-end` | `justify-items: end` | — |
| `items-main-center` | `justify-items: center` | — |
| `items-main-stretch` | `justify-items: stretch` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:items-main-start`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `items-main-stretch` — элементы на всю ширину ячейки; значение по умолчанию.
  Класс нужен, чтобы вернуть его на другой ширине экрана.
- `items-main-start`, `items-main-center`, `items-main-end` — элементы своей
  ширины у начала, в центре или у конца ячейки.

### Кнопки по центру колонок

```html
<div class="grid grid-col-3 items-main-center gap-2">
  <button type="button">Один</button>
  <button type="button">Два</button>
  <button type="button">Три</button>
</div>
```

Отдельный элемент выравнивают классы
[`self-main-*`](/ru/utilities/grid-and-flexbox-utilities/justify-self/), обе
оси сразу — [`items-*`](/ru/utilities/grid-and-flexbox-utilities/place-items/).

## Ограничения

- Классы работают только в сетке. Во флекс-контейнере `justify-items` не
  действует; элементы по основной оси там располагают классы
  [`justify-*`](/ru/utilities/grid-and-flexbox-utilities/justify-content/).
- Начало ячейки следует направлению письма: при `dir="rtl"` `items-main-start`
  прижимает к правому краю.

## См. также

- [Выравнивание отдельного элемента в ячейке по основной оси](/ru/utilities/grid-and-flexbox-utilities/justify-self/)
- [Выравнивание каждого элемента в ячейках по поперечной оси](/ru/utilities/grid-and-flexbox-utilities/align-items/)
- [Размещение элементов по обеим осям](/ru/utilities/grid-and-flexbox-utilities/place-items/)
