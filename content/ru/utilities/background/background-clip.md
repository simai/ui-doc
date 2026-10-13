---
title: "Обрезка фона"
description: "Ограничивает фон элемента областью рамки, внутренних отступов, содержимого или формой букв текста."
---

# Обрезка фона

Классы `bg-clip-*` задают `background-clip`: докуда рисуется фон — под
рамкой, до внутренних отступов, только под содержимым или только внутри букв.
Берите их, когда фон не должен заходить под полупрозрачную или прерывистую
рамку, или для текста, залитого градиентом.

## Пример

### Рамка, отступы, содержимое

У всех трёх образцов прерывистая рамка и внутренние отступы. Цвет фона виден
в промежутках рамки только у `bg-clip-border`; у `bg-clip-content` поля
внутренних отступов остаются пустыми.

:::example {id="utilities/background/background-clip" label="bg-clip-border, bg-clip-padding и bg-clip-content"}
:::

### Фон в буквах

`bg-clip-text` оставляет фон только под буквами; цвет текста делают
прозрачным, чтобы фон стал виден.

:::example {id="utilities/background/background-clip-text" label="bg-clip-text с градиентом"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `bg-clip-border` | `background-clip: border-box` | — |
| `bg-clip-padding` | `background-clip: padding-box` | — |
| `bg-clip-content` | `background-clip: content-box` | — |
| `bg-clip-text` | `background-clip: text` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:bg-clip-border`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

| Класс | Где виден фон |
| :--- | :--- |
| `bg-clip-border` | до внешнего края рамки — значение браузера по умолчанию |
| `bg-clip-padding` | до внутреннего края рамки, под рамкой фона нет |
| `bg-clip-content` | только под содержимым, без внутренних отступов |
| `bg-clip-text` | только внутри букв текста |

### Текст с градиентом

`bg-clip-text` работает в паре с прозрачным цветом текста и фоновым
изображением — градиентом или картинкой.

```html
<h2 class="bg-clip-text color-transparent gr-line-2 gr1-primary gr2-tertiary">
  Заголовок с градиентом
</h2>
```

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире, например
`md:bg-clip-padding`.

## Ограничения

- При `bg-clip-text` вместе с `color-transparent` текст без фонового
  изображения не виден. Проверьте контраст градиента с фоном страницы в
  светлой и тёмной теме.
- У семейства нет префиксов состояния.

## См. также

- [Исходная область фона](/ru/utilities/background/background-origin/)
- [Вид градиента](/ru/utilities/background/background-gradient-type/)
- [Цвет текста](/ru/utilities/text-formatting/text-color/)
