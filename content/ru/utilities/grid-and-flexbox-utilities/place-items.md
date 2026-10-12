---
title: "Размещение элементов по обеим осям"
description: "Одним классом выравнивает элементы сетки в ячейках сразу по горизонтали и по вертикали."
---

# Размещение элементов по обеим осям

Классы `items-*` задают `place-items` — `align-items` и `justify-items` одним
значением: где каждый элемент стоит в своей ячейке сетки. Берите
`items-center`, чтобы поставить содержимое ячеек в центр.

## Пример

### Значения

Сетка из трёх колонок заданной высоты. Подпись над образцом — класс
контейнера.

:::example {id="utilities/grid-and-flexbox-utilities/place-items" label="items-start, items-center, items-end, items-stretch"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `items-start` | `align-items: start; justify-items: start; place-items: start` | — |
| `items-end` | `align-items: end; justify-items: end; place-items: end` | — |
| `items-center` | `align-items: center; justify-items: center; place-items: center` | — |
| `items-stretch` | `align-items: stretch; justify-items: stretch; place-items: stretch` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:items-start`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `items-start`, `items-center`, `items-end` — элементы своего размера у начала,
  в центре или у конца ячейки по обеим осям.
- `items-stretch` — элементы на всю ячейку; значение по умолчанию у сетки.

### Значки в центре ячеек

```html
<div class="grid grid-col-4 auto-rows-fr items-center gap-1">
  <img src="1.svg" alt="Первый">
  <img src="2.svg" alt="Второй">
  <img src="3.svg" alt="Третий">
  <img src="4.svg" alt="Четвёртый">
</div>
```

По одной оси выравнивают классы
[`items-cross-*`](/ru/utilities/grid-and-flexbox-utilities/align-items/) и
[`items-main-*`](/ru/utilities/grid-and-flexbox-utilities/justify-items/).

## Ограничения

- Во флекс-контейнере действует только вертикальная часть: `flex items-center`
  выравнивает элементы по поперечной оси, как `items-cross-center`. По основной
  оси элементы располагают классы
  [`justify-*`](/ru/utilities/grid-and-flexbox-utilities/justify-content/).

## См. также

- [Выравнивание каждого элемента в ячейках по поперечной оси](/ru/utilities/grid-and-flexbox-utilities/align-items/)
- [Выравнивание каждого элемента по основной оси внутри ячейки](/ru/utilities/grid-and-flexbox-utilities/justify-items/)
- [Размещение отдельного элемента](/ru/utilities/grid-and-flexbox-utilities/place-self/)
