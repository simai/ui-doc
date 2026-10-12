---
title: "Исходная область фона"
description: "Задаёт, от какого края — рамки, внутренних отступов или содержимого — отсчитывается положение фонового изображения."
---

# Исходная область фона

Классы `bg-origin-*` задают `background-origin`: от какой области элемента
отсчитываются положение и размер фонового изображения. Берите их, когда
картинка должна начинаться под рамкой или, наоборот, отступать вместе с
содержимым.

## Пример

У всех трёх образцов прерывистая рамка, внутренние отступы и картинка без
повтора в левом верхнем углу. Меняется только точка отсчёта.

:::example {id="utilities/background/background-origin" label="bg-origin-border, bg-origin-padding и bg-origin-content"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `bg-origin-border` | `background-origin: border-box` | — |
| `bg-origin-padding` | `background-origin: padding-box` | — |
| `bg-origin-content` | `background-origin: content-box` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:bg-origin-border`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

| Класс | От чего отсчитывается фон |
| :--- | :--- |
| `bg-origin-border` | от внешнего края рамки |
| `bg-origin-padding` | от внутреннего края рамки — значение браузера по умолчанию |
| `bg-origin-content` | от края содержимого |

Класс влияет на фоновое изображение, а не на цвет фона. Заметен он, когда у
картинки нет повтора или задан размер в процентах: `bg-size-100` вместе с
`bg-origin-content` растягивает картинку на область содержимого.

```html
<div class="p-4 border-2 bg-origin-content bg-repeat-none bg-size-100"
     style="background-image: url(/images/pattern.svg)">…</div>
```

С префиксом ширины класс действует от указанной ширины и шире, например
`md:bg-origin-border`.

## Ограничения

- Под рамкой картинка видна, только если фон там не обрезан: при
  `bg-clip-padding` или `bg-clip-content` класс `bg-origin-border` сдвигает
  картинку, но часть её под рамкой не рисуется.
- У семейства нет префиксов состояния.

## См. также

- [Обрезка фона](/ru/utilities/background/background-clip/)
- [Положение фона](/ru/utilities/background/background-position/)
- [Размер фона](/ru/utilities/background/background-size/)
