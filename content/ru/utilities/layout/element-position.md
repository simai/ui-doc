---
title: "Позиция элемента"
description: "Задаёт способ позиционирования, координаты элемента по логическим сторонам и сдвиг в долях ширины."
---

# Позиция элемента

Классы позиции задают свойство `position` (`static`, `relative`, `absolute`,
`fixed`, `sticky`) и координаты от сторон: сверху, снизу, в начале и в конце
строки. Берите их для меток на карточке, слоёв поверх содержимого,
закреплённых заголовков, а `offset-*` — чтобы сдвинуть блок в строке на долю
ширины.

## Пример

### Способ позиционирования

Каждому образцу заданы одинаковые координаты `top-b6 inline-start-b6`.
У `static` они не действуют, `relative` сдвигает элемент и оставляет его место
в потоке, `absolute` вынимает элемент из потока и ставит его относительно
ближайшего позиционированного предка. Прокрутите последний образец:
заголовок с `sticky top-0` остаётся вверху.

:::example {id="utilities/layout/element-position-type" label="static, relative, absolute и sticky"}
:::

### Стороны и углы

Внутри каждой рамки с классом `relative` стоит элемент с классом `absolute`.
Подпись над рамкой — его координаты.

:::example {id="utilities/layout/element-position" label="inset-0, inset-x-0, inset-y-0, углы и inset-center"}
:::

### Доли и шкала размеров

Слева метки поставлены на долю ширины и высоты рамки. Справа счётчик выведен за
угол кнопки отрицательными координатами со шкалы размеров.

:::example {id="utilities/layout/element-position-scale" label="inline-start-1/4 … 3/4 и -top-b2 -inline-end-b2"}
:::

### Сдвиг offset и ширина экрана

`offset-*` добавляет внешний отступ в начале строки на долю ширины родителя.
Меняйте ширину окна просмотра: последний образец сдвигается только от
ширины `md`.

:::example {id="utilities/layout/element-position-offset" label="offset-2/12, offset-6/12 и md:offset-3/12"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `top-0` | `top: 0` | — |
| `inline-end-0` | `inset-inline-end: 0` | — |
| `bottom-0` | `bottom: 0` | — |
| `inline-start-0` | `inset-inline-start: 0` | — |
| `top-auto` | `top: auto` | — |
| `inline-end-auto` | `inset-inline-end: auto` | — |
| `bottom-auto` | `bottom: auto` | — |
| `inline-start-auto` | `inset-inline-start: auto` | — |
| `top-1/2` | `top: 50%` | — |
| `inline-end-1/2` | `inset-inline-end: 50%` | — |
| `bottom-1/2` | `bottom: 50%` | — |
| `inline-start-1/2` | `inset-inline-start: 50%` | — |
| `top-1/3` | `top: 33.333333%` | — |
| `inline-end-1/3` | `inset-inline-end: 33.333333%` | — |
| `bottom-1/3` | `bottom: 33.333333%` | — |
| `inline-start-1/3` | `inset-inline-start: 33.333333%` | — |
| `top-2/3` | `top: 66.666667%` | — |
| `inline-end-2/3` | `inset-inline-end: 66.666667%` | — |
| `bottom-2/3` | `bottom: 66.666667%` | — |
| `inline-start-2/3` | `inset-inline-start: 66.666667%` | — |
| `top-1/4` | `top: 25%` | — |
| `inline-end-1/4` | `inset-inline-end: 25%` | — |
| `bottom-1/4` | `bottom: 25%` | — |
| `inline-start-1/4` | `inset-inline-start: 25%` | — |
| `top-2/4` | `top: 50%` | — |
| `inline-end-2/4` | `inset-inline-end: 50%` | — |
| `bottom-2/4` | `bottom: 50%` | — |
| `inline-start-2/4` | `inset-inline-start: 50%` | — |
| `top-3/4` | `top: 75%` | — |
| `inline-end-3/4` | `inset-inline-end: 75%` | — |
| `bottom-3/4` | `bottom: 75%` | — |
| `inline-start-3/4` | `inset-inline-start: 75%` | — |
| `top-1/5` | `top: 20%` | — |
| `inline-end-1/5` | `inset-inline-end: 20%` | — |
| `bottom-1/5` | `bottom: 20%` | — |
| `inline-start-1/5` | `inset-inline-start: 20%` | — |
| `top-2/5` | `top: 40%` | — |
| `inline-end-2/5` | `inset-inline-end: 40%` | — |
| `bottom-2/5` | `bottom: 40%` | — |
| `inline-start-2/5` | `inset-inline-start: 40%` | — |
| `top-3/5` | `top: 60%` | — |
| `inline-end-3/5` | `inset-inline-end: 60%` | — |
| `bottom-3/5` | `bottom: 60%` | — |
| `inline-start-3/5` | `inset-inline-start: 60%` | — |
| `top-4/5` | `top: 80%` | — |
| `inline-end-4/5` | `inset-inline-end: 80%` | — |
| `bottom-4/5` | `bottom: 80%` | — |
| `inline-start-4/5` | `inset-inline-start: 80%` | — |
| `top-1/6` | `top: 16.666667%` | — |
| `inline-end-1/6` | `inset-inline-end: 16.666667%` | — |
| `bottom-1/6` | `bottom: 16.666667%` | — |
| `inline-start-1/6` | `inset-inline-start: 16.666667%` | — |
| `top-2/6` | `top: 33.333333%` | — |
| `inline-end-2/6` | `inset-inline-end: 33.333333%` | — |
| `bottom-2/6` | `bottom: 33.333333%` | — |
| `inline-start-2/6` | `inset-inline-start: 33.333333%` | — |
| `top-3/6` | `top: 50%` | — |
| `inline-end-3/6` | `inset-inline-end: 50%` | — |
| `bottom-3/6` | `bottom: 50%` | — |
| `inline-start-3/6` | `inset-inline-start: 50%` | — |
| `top-4/6` | `top: 66.666667%` | — |
| `inline-end-4/6` | `inset-inline-end: 66.666667%` | — |
| `bottom-4/6` | `bottom: 66.666667%` | — |
| `inline-start-4/6` | `inset-inline-start: 66.666667%` | — |
| `top-5/6` | `top: 83.333333%` | — |
| `inline-end-5/6` | `inset-inline-end: 83.333333%` | — |
| `bottom-5/6` | `bottom: 83.333333%` | — |
| `inline-start-5/6` | `inset-inline-start: 83.333333%` | — |
| `top-1/12` | `top: 8.333333%` | — |
| `inline-end-1/12` | `inset-inline-end: 8.333333%` | — |
| `bottom-1/12` | `bottom: 8.333333%` | — |
| `inline-start-1/12` | `inset-inline-start: 8.333333%` | — |
| `top-2/12` | `top: 16.666667%` | — |
| `inline-end-2/12` | `inset-inline-end: 16.666667%` | — |
| `bottom-2/12` | `bottom: 16.666667%` | — |
| `inline-start-2/12` | `inset-inline-start: 16.666667%` | — |
| `top-3/12` | `top: 25%` | — |
| `inline-end-3/12` | `inset-inline-end: 25%` | — |
| `bottom-3/12` | `bottom: 25%` | — |
| `inline-start-3/12` | `inset-inline-start: 25%` | — |
| `top-4/12` | `top: 33.333333%` | — |
| `inline-end-4/12` | `inset-inline-end: 33.333333%` | — |
| `bottom-4/12` | `bottom: 33.333333%` | — |
| `inline-start-4/12` | `inset-inline-start: 33.333333%` | — |
| `top-5/12` | `top: 41.666667%` | — |
| `inline-end-5/12` | `inset-inline-end: 41.666667%` | — |
| `bottom-5/12` | `bottom: 41.666667%` | — |
| `inline-start-5/12` | `inset-inline-start: 41.666667%` | — |
| `top-6/12` | `top: 50%` | — |
| `inline-end-6/12` | `inset-inline-end: 50%` | — |
| `bottom-6/12` | `bottom: 50%` | — |
| `inline-start-6/12` | `inset-inline-start: 50%` | — |
| `top-7/12` | `top: 58.333333%` | — |
| `inline-end-7/12` | `inset-inline-end: 58.333333%` | — |
| `bottom-7/12` | `bottom: 58.333333%` | — |
| `inline-start-7/12` | `inset-inline-start: 58.333333%` | — |
| `top-8/12` | `top: 66.666667%` | — |
| `inline-end-8/12` | `inset-inline-end: 66.666667%` | — |
| `bottom-8/12` | `bottom: 66.666667%` | — |
| `inline-start-8/12` | `inset-inline-start: 66.666667%` | — |
| `top-9/12` | `top: 75%` | — |
| `inline-end-9/12` | `inset-inline-end: 75%` | — |
| `bottom-9/12` | `bottom: 75%` | — |
| `inline-start-9/12` | `inset-inline-start: 75%` | — |
| `top-10/12` | `top: 83.333333%` | — |
| `inline-end-10/12` | `inset-inline-end: 83.333333%` | — |
| `bottom-10/12` | `bottom: 83.333333%` | — |
| `inline-start-10/12` | `inset-inline-start: 83.333333%` | — |
| `top-11/12` | `top: 91.666667%` | — |
| `inline-end-11/12` | `inset-inline-end: 91.666667%` | — |
| `bottom-11/12` | `bottom: 91.666667%` | — |
| `inline-start-11/12` | `inset-inline-start: 91.666667%` | — |
| `top-full` | `top: 100%` | — |
| `inline-end-full` | `inset-inline-end: 100%` | — |
| `bottom-full` | `bottom: 100%` | — |
| `inline-start-full` | `inset-inline-start: 100%` | — |
| `inset-0` | `top: 0; inset-inline-end: 0; bottom: 0; inset-inline-start: 0` | — |
| `inset-x-0` | `inset-inline-end: 0; inset-inline-start: 0` | — |
| `inset-y-0` | `top: 0; bottom: 0` | — |
| `inset-center` | `inset-inline-start: 50%; top: 50%` | — |
| `top-{значение}` | `top: var(--sf-{значение})` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |
| `-top-{значение}` | `top: calc(0rem - var(--sf-{значение}))` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |
| `inline-end-{значение}` | `inset-inline-end: var(--sf-{значение})` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |
| `-inline-end-{значение}` | `inset-inline-end: calc(0rem - var(--sf-{значение}))` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |
| `bottom-{значение}` | `bottom: var(--sf-{значение})` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |
| `-bottom-{значение}` | `bottom: calc(0rem - var(--sf-{значение}))` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |
| `inline-start-{значение}` | `inset-inline-start: var(--sf-{значение})` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |
| `-inline-start-{значение}` | `inset-inline-start: calc(0rem - var(--sf-{значение}))` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |
| `block-start-{значение}` | `top: var(--sf-{значение}); inset-block-start: var(--sf-{значение})` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |
| `-block-start-{значение}` | `top: calc(0rem - var(--sf-{значение})); inset-block-start: calc(0rem - var(--sf-{значение}))` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |
| `block-end-{значение}` | `bottom: var(--sf-{значение}); inset-block-end: var(--sf-{значение})` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |
| `-block-end-{значение}` | `bottom: calc(0rem - var(--sf-{значение})); inset-block-end: calc(0rem - var(--sf-{значение}))` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |
| `offset-1/12` | `margin-inline-start: 8.333333%` | — |
| `offset-2/12` | `margin-inline-start: 16.666667%` | — |
| `offset-3/12` | `margin-inline-start: 25%` | — |
| `offset-4/12` | `margin-inline-start: 33.333333%` | — |
| `offset-5/12` | `margin-inline-start: 41.666667%` | — |
| `offset-6/12` | `margin-inline-start: 50%` | — |
| `offset-7/12` | `margin-inline-start: 58.333333%` | — |
| `offset-8/12` | `margin-inline-start: 66.666667%` | — |
| `offset-9/12` | `margin-inline-start: 75%` | — |
| `offset-10/12` | `margin-inline-start: 83.333333%` | — |
| `offset-11/12` | `margin-inline-start: 91.666667%` | — |
| `static` | `position: static` | — |
| `fixed` | `position: fixed` | — |
| `absolute` | `position: absolute` | — |
| `relative` | `position: relative` | — |
| `sticky` | `position: sticky` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:top-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-a0` | `0rem` |
| `--sf-a1` | `0.0625rem` |
| `--sf-a2` | `0.125rem` |
| `--sf-a3` | `0.1875rem` |
| `--sf-a4` | `0.25rem` |
| `--sf-a5` | `0.3125rem` |
| `--sf-a6` | `0.375rem` |
| `--sf-a7` | `0.4375rem` |
| `--sf-a8` | `0.5rem` |
| `--sf-a9` | `0.5625rem` |
| `--sf-b0` | `0.625rem` |
| `--sf-b1` | `0.6875rem` |
| `--sf-b2` | `0.75rem` |
| `--sf-b3` | `0.8125rem` |
| `--sf-b4` | `0.875rem` |
| `--sf-b5` | `0.9375rem` |
| `--sf-b6` | `1rem` |
| `--sf-b7` | `1.0625rem` |
| `--sf-b8` | `1.125rem` |
| `--sf-b9` | `1.1875rem` |
| `--sf-c0` | `1.25rem` |
| `--sf-c1` | `1.375rem` |
| `--sf-c2` | `1.5rem` |
| `--sf-c3` | `1.625rem` |
| `--sf-c4` | `1.75rem` |
| `--sf-c5` | `1.875rem` |
| `--sf-c6` | `2rem` |
| `--sf-c7` | `2.125rem` |
| `--sf-c8` | `2.25rem` |
| `--sf-c9` | `2.375rem` |
| `--sf-d0` | `2.5rem` |
| `--sf-d1` | `2.75rem` |
| `--sf-d2` | `3rem` |
| `--sf-d3` | `3.25rem` |
| `--sf-d4` | `3.5rem` |
| `--sf-d5` | `3.75rem` |
| `--sf-d6` | `4rem` |
| `--sf-d7` | `4.25rem` |
| `--sf-d8` | `4.5rem` |
| `--sf-d9` | `4.75rem` |
| `--sf-e0` | `5rem` |
| `--sf-e1` | `5.5rem` |
| `--sf-e2` | `6rem` |
| `--sf-e3` | `6.5rem` |
| `--sf-e4` | `7rem` |
| `--sf-e5` | `7.5rem` |
| `--sf-e6` | `8rem` |
| `--sf-e7` | `8.5rem` |
| `--sf-e8` | `9rem` |
| `--sf-e9` | `9.5rem` |
| `--sf-f0` | `10rem` |
| `--sf-f1` | `11rem` |
| `--sf-f2` | `12rem` |
| `--sf-f3` | `13rem` |
| `--sf-f4` | `14rem` |
| `--sf-f5` | `15rem` |
| `--sf-f6` | `16rem` |
| `--sf-f7` | `17rem` |
| `--sf-f8` | `18rem` |
| `--sf-f9` | `19rem` |
| `--sf-g0` | `20rem` |
| `--sf-g1` | `22rem` |
| `--sf-g2` | `24rem` |
| `--sf-g3` | `26rem` |
| `--sf-g4` | `28rem` |
| `--sf-g5` | `30rem` |
| `--sf-g6` | `32rem` |
| `--sf-g7` | `34rem` |
| `--sf-g8` | `36rem` |
| `--sf-g9` | `38rem` |
| `--sf-h0` | `40rem` |
| `--sf-h1` | `44rem` |
| `--sf-h2` | `48rem` |
| `--sf-h3` | `52rem` |
| `--sf-h4` | `56rem` |
| `--sf-h5` | `60rem` |
| `--sf-h6` | `64rem` |
| `--sf-h7` | `68rem` |
| `--sf-h8` | `72rem` |
| `--sf-h9` | `76rem` |
| `--sf-i0` | `80rem` |
| `--sf-i1` | `88rem` |
| `--sf-i2` | `96rem` |
| `--sf-i3` | `104rem` |
| `--sf-i4` | `112rem` |
| `--sf-i5` | `120rem` |
| `--sf-i6` | `128rem` |
| `--sf-i7` | `136rem` |
| `--sf-i8` | `144rem` |
| `--sf-i9` | `152rem` |

## Применение

### Способ позиционирования

- `relative` — элемент остаётся в потоке, координаты сдвигают его от своего
  места. Чаще всего `relative` ставят на родителя, чтобы от него отсчитывались
  координаты вложенного `absolute`.
- `absolute` — элемент выходит из потока и встаёт по координатам относительно
  ближайшего предка с позицией, отличной от `static`.
- `fixed` — элемент встаёт относительно окна и не прокручивается вместе со
  страницей.
- `sticky` — элемент прокручивается вместе с содержимым, пока не дойдёт до
  координаты, и там останавливается внутри своего родителя.
- `static` — обычный поток, координаты не действуют. Нужен, чтобы отменить
  позицию с префиксом ширины: `absolute md:static`.

### Координаты

Стороны называются логически: `inline-start` — начало строки, `inline-end` —
конец строки; `top` и `bottom` — верх и низ. `block-start` и `block-end`
задают начало и конец блока и в горизонтальном письме совпадают с `top` и
`bottom`.

| Значение | Пример | Отступ |
|:---|:---|:---|
| `0`, `auto`, `full` | `top-0`, `inline-end-full` | ноль, авто, `100%` |
| доля | `top-1/2`, `inline-start-3/12` | доля размера позиционирующего предка |
| шкала размеров | `bottom-b2`, `block-start-c6` | токен `--sf-{значение}` |
| отрицательная шкала | `-top-b2`, `-inline-end-a8` | токен со знаком минус |

Сокращения: `inset-0` — все четыре стороны, `inset-x-0` — начало и конец
строки, `inset-y-0` — верх и низ.

```html
<div class="relative">
  <img src="photo.jpg" alt="">
  <span class="absolute top-b2 inline-end-b2">Новинка</span>
</div>
```

### Центрирование

`inset-center` ставит в середину рамки верхний угол элемента со стороны начала
строки. Чтобы по центру оказался сам элемент, сдвиньте его на половину своего
размера:

```html
<div class="absolute inset-center -translate-x-half -translate-y-half">…</div>
```

### Сдвиг offset

`offset-1/12` … `offset-11/12` задают `margin-inline-start` в двенадцатых долях
ширины родителя. Вместе с шириной `w-*/12` они ставят блок в сетке из
двенадцати колонок.

```html
<div class="flex">
  <div class="offset-3/12 w-6/12">По центру из двенадцати колонок</div>
</div>
```

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире: `md:absolute`,
`md:top-0`, `md:offset-3/12`. У отрицательных значений минус ставится перед
префиксом: `-md:top-b2`.

## Ограничения

- Координаты не действуют на элемент с `static`, а у `absolute` они
  отсчитываются от ближайшего позиционированного предка — без него от
  начального блока страницы.
- `sticky` закрепляется в ближайшем предке, у которого `overflow` отличается
  от `visible`. Если этот предок сам не прокручивается, элемент не
  закрепится.
- `inset-center` логический, а `-translate-x-half` — физический. В направлении
  справа налево для центрирования берите `translate-x-half`.
- Отрицательных долей нет: `-top-1/2` не существует.
- У классов нет префиксов состояния.

## См. также

- [Положение элемента по оси Z](/ru/utilities/layout/z-index/)
- [Смещение](/ru/utilities/transform/transform-translate/)
- [Ширина](/ru/utilities/sizes/width/)
- [Внешний отступ](/ru/utilities/indents/margin/)
