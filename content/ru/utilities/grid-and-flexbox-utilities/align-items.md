---
title: "Выравнивание каждого элемента в ячейках по поперечной оси"
description: "Выравнивает все элементы флекс-контейнера или сетки по поперечной оси: к началу, центру, концу, по базовой линии или на всю высоту."
---

# Выравнивание каждого элемента в ячейках по поперечной оси

Классы `items-cross-*` задают `align-items`: как элементы стоят поперёк
основной оси — в строке флекс-контейнера по вертикали, а в ячейках сетки по
вертикали ячейки. Берите их, чтобы выровнять по центру иконку и подпись или
не растягивать карточки на высоту соседей.

## Пример

### Значения

Флекс-контейнер заданной высоты, во втором элементе две строки текста.
Подпись над образцом — класс контейнера.

:::example {id="utilities/grid-and-flexbox-utilities/align-items" label="items-cross-start, center, end, stretch"}
:::

### Базовая линия

Текст разного размера. По центру выравниваются середины элементов, по базовой
линии — строки текста в них.

:::example {id="utilities/grid-and-flexbox-utilities/align-items-baseline" label="items-cross-center и items-cross-baseline"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `items-cross-start` | `align-items: start` | — |
| `items-cross-end` | `align-items: end` | — |
| `items-cross-center` | `align-items: center` | — |
| `items-cross-baseline` | `align-items: baseline` | — |
| `items-cross-stretch` | `align-items: stretch` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:items-cross-start`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `items-cross-stretch` — элементы растягиваются на всю высоту строки; значение
  по умолчанию. Класс нужен, чтобы вернуть его на другой ширине экрана.
- `items-cross-start`, `items-cross-center`, `items-cross-end` — элементы
  своей высоты у начала, в центре или у конца.
- `items-cross-baseline` — строки текста на одной линии: подпись рядом с
  крупным числом, поля формы с подписями разного размера.

### Иконка и подпись

```html
<a class="flex items-cross-center gap-1" href="/profile">
  <img class="w-c0 h-c0" src="profile.svg" alt="">
  Профиль
</a>
```

Отдельный элемент выравнивают классы
[`self-cross-*`](/ru/utilities/grid-and-flexbox-utilities/align-self/).
Выравнивание по обеим осям сразу задают классы
[`items-*`](/ru/utilities/grid-and-flexbox-utilities/place-items/).

## Ограничения

- При [`flex-col`](/ru/utilities/flex/flex-direction/) поперечная ось
  горизонтальна: классы выравнивают по ширине.
- `items-cross-stretch` не растягивает элемент, у которого задана высота.

## См. также

- [Выравнивание отдельного элемента по поперечной оси](/ru/utilities/grid-and-flexbox-utilities/align-self/)
- [Выравнивание содержимого по основной оси](/ru/utilities/grid-and-flexbox-utilities/justify-content/)
- [Размещение элементов по обеим осям](/ru/utilities/grid-and-flexbox-utilities/place-items/)
