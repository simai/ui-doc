---
title: "Положение фона"
description: "Ставит фоновое изображение в угол, к стороне или в центр элемента."
---

# Положение фона

Классы положения задают `background-position`: в какой угол, к какой стороне
или в центр элемента встаёт фоновое изображение. Берите их для картинок без
повтора или с размером меньше элемента, а также чтобы выбрать, какая часть
картинки остаётся видна при `bg-cover`.

## Пример

### Углы, стороны, центр

Девять положений картинки без повтора. Под каждым образцом — класс, который
её ставит.

:::example {id="utilities/background/background-position" label="Девять положений"}
:::

### Другие имена

`bg-top` и `bg-bottom` ставят картинку по центру верхней или нижней стороны.
Классы с `inline-start` и `inline-end` дают те же положения, что `left` и
`right`.

:::example {id="utilities/background/background-position-names" label="bg-top, bg-bottom и классы inline-start, inline-end"}
:::

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте ширину
окна просмотра: картинка стоит в левом верхнем углу, с ширины `md` переходит в
центр, с ширины `xl` — в правый нижний угол.

:::example {id="utilities/background/background-position-responsive" label="Положение по ширине экрана"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `bg-bottom` | `background-position: bottom` | — |
| `bg-center` | `background-position: center` | — |
| `bg-center-top` | `background-position: center top` | — |
| `bg-center-bottom` | `background-position: center bottom` | — |
| `bg-left` | `background-position: left` | — |
| `bg-left-top` | `background-position: left top` | — |
| `bg-left-bottom` | `background-position: left bottom` | — |
| `bg-right` | `background-position: right` | — |
| `bg-right-top` | `background-position: right top` | — |
| `bg-right-bottom` | `background-position: right bottom` | — |
| `bg-inline-start` | `background-position: left` | — |
| `bg-inline-start-bottom` | `background-position: left bottom` | — |
| `bg-inline-start-top` | `background-position: left top` | — |
| `bg-inline-start-center` | `background-position: left center` | — |
| `bg-inline-end` | `background-position: right` | — |
| `bg-inline-end-bottom` | `background-position: right bottom` | — |
| `bg-inline-end-top` | `background-position: right top` | — |
| `bg-inline-end-center` | `background-position: right center` | — |
| `bg-top` | `background-position: top` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:bg-bottom`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

| Классы | Куда встаёт картинка |
| :--- | :--- |
| `bg-left-top`, `bg-center-top`, `bg-right-top` | к верхней стороне: слева, по центру, справа |
| `bg-left`, `bg-center`, `bg-right` | по высоте в центр: слева, по центру, справа |
| `bg-left-bottom`, `bg-center-bottom`, `bg-right-bottom` | к нижней стороне: слева, по центру, справа |
| `bg-top`, `bg-bottom` | по центру верхней или нижней стороны |
| `bg-inline-start…`, `bg-inline-end…` | то же, что `bg-left…` и `bg-right…` |

### Обложка с важной частью

При `bg-cover` картинка обрезается по краям. Положение выбирает, какая часть
останется: для портрета — верх, для горизонта — низ.

```html
<div class="bg-cover bg-center-top h-f0"
     style="background-image: url(/images/portrait.jpg)"></div>
```

### Значок в поле

Небольшая картинка без повтора у края поля ввода:

```html
<input class="bg-repeat-none bg-right bg-size-b6 p-x-2"
       style="background-image: url(/icons/search.svg)">
```

## Ограничения

- Классы `bg-inline-start…` и `bg-inline-end…` задают физические `left` и
  `right` и при письме справа налево не меняются местами.
- У семейства нет префиксов состояния.

## См. также

- [Размер фона](/ru/utilities/background/background-size/)
- [Повтор фона](/ru/utilities/background/background-repeat/)
- [Исходная область фона](/ru/utilities/background/background-origin/)
