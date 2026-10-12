---
title: "Стиль границы"
description: "Задаёт вид линии рамки — сплошная, пунктир, точки, двойная — для всего элемента, оси или одной стороны."
---

# Стиль границы

Классы `border-{стиль}` задают `border-style`: сплошную, пунктирную,
точечную, двойную или вдавленную линию рамки — для всех сторон, для оси или
для одной стороны. Берите их, когда рамка должна отличаться от сплошной:
зона перетаскивания, черновик, место для вставки.

## Пример

### Стили

Под каждым образцом — класс стиля; толщину и цвет задают `border-4` и
`border-outline`.

:::example {id="utilities/border/border-style" label="Стили линии"}
:::

### Стороны и оси

Класс стороны меняет стиль только своей стороны, остальные остаются
сплошными.

:::example {id="utilities/border/border-style-sides" label="Стиль стороны и оси"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `border-{значение}` | `border-style: {значение}` | `dotted`, `dashed`, `solid`, `double`, `hidden`, `inset`, `none` |
| `border-inline-start-{значение}` | `border-inline-start-style: {значение}` | `dotted`, `dashed`, `solid`, `double`, `hidden`, `inset`, `none` |
| `border-inline-end-{значение}` | `border-inline-end-style: {значение}` | `dotted`, `dashed`, `solid`, `double`, `hidden`, `inset`, `none` |
| `border-top-{значение}` | `border-top-style: {значение}` | `dotted`, `dashed`, `solid`, `double`, `hidden`, `inset`, `none` |
| `border-bottom-{значение}` | `border-bottom-style: {значение}` | `dotted`, `dashed`, `solid`, `double`, `hidden`, `inset`, `none` |
| `border-x-{значение}` | `border-inline-start-style: {значение}; border-inline-end-style: {значение}` | `dotted`, `dashed`, `solid`, `double`, `hidden`, `inset`, `none` |
| `border-y-{значение}` | `border-top-style: {значение}; border-bottom-style: {значение}` | `dotted`, `dashed`, `solid`, `double`, `hidden`, `inset`, `none` |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

| Класс | Линия |
| :--- | :--- |
| `border-solid` | сплошная — стиль по умолчанию для всех элементов |
| `border-dashed` | штрихи |
| `border-dotted` | точки |
| `border-double` | две линии; заметна от толщины `border-3` |
| `border-inset` | вдавленная рамка: верх и левая сторона темнее |
| `border-hidden`, `border-none` | рамки нет |

Ядро ставит всем элементам `border-style: solid`, поэтому для сплошной рамки
хватает класса толщины. Класс стиля нужен для другой линии или чтобы вернуть
сплошную после другого стиля.

```html
<div class="border-2 border-dashed border-outline radius-surface p-4">
  Перетащите файлы сюда
</div>
```

### Стороны

| Шаблон | Что меняет |
| :--- | :--- |
| `border-top-{стиль}`, `border-bottom-{стиль}` | верхнюю или нижнюю сторону |
| `border-inline-start-{стиль}`, `border-inline-end-{стиль}` | сторону в начале или в конце строки |
| `border-x-{стиль}` | обе стороны по горизонтали |
| `border-y-{стиль}` | верхнюю и нижнюю стороны |

## Ограничения

- Стороны по горизонтали названы логически: при письме справа налево
  `inline-start` и `inline-end` меняются местами.
- У `border-hidden` и `border-none` одна разница — в таблицах со слиянием
  рамок `hidden` убирает и рамку соседней ячейки.
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [Толщина границы](/ru/utilities/border/border-width/)
- [Цвет границы](/ru/utilities/border/border-color/)
- [Стиль разделителя](/ru/utilities/divider/divider-style/)
