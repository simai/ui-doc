---
title: "Вложение маски"
description: "Задаёт область элемента, от которой отсчитываются положение и размер маски."
---

# Вложение маски

Классы `mask-origin-*` задают `mask-origin` — область, в которую вписывается
изображение маски: рамка, внутренний отступ или содержимое. Берите их, когда
маска должна начинаться у края содержимого, а не у внешнего края рамки.

## Пример

### Области

Круглая маска прижата к началу и верху области (`mask-inline-start-top`, `mask-repeat-none`). Элемент с прозрачной рамкой и внутренним отступом. Пунктирная рамка показывает границы элемента с маской.

:::example {id="utilities/mask/mask-origin" label="Области начала маски"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `mask-origin-content` | `mask-origin: content-box` | — |
| `mask-origin-padding` | `mask-origin: padding-box` | — |
| `mask-origin-margin` | `mask-origin: margin-box` | — |
| `mask-origin-border` | `mask-origin: border-box` | — |
| `mask-origin-fill` | `mask-origin: fill-box` | — |
| `mask-origin-stroke` | `mask-origin: stroke-box` | — |
| `mask-origin-viewbox` | `mask-origin: view-box` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

Классы маски не задают саму маску: изображение маски (`mask-image`) задаётся
в CSS проекта, как в примерах на этой странице.

### Какую область выбрать

| Класс | Маска отсчитывается от |
| :--- | :--- |
| `mask-origin-border` | внешнего края рамки — значение по умолчанию |
| `mask-origin-padding` | края внутреннего отступа |
| `mask-origin-content` | края содержимого |
| `mask-origin-fill`, `mask-origin-stroke`, `mask-origin-viewbox` | области заливки, обводки или `viewBox` элемента SVG |

Начало маски работает вместе с [положением](/ru/utilities/mask/mask-position/)
и [размером](/ru/utilities/mask/mask-size/) маски:

```html
<div class="mask-origin-content mask-repeat-none mask-center mask-contain">…</div>
```

## Ограничения

- `mask-origin-margin` задаёт значение `margin-box`, которого нет у свойства
  `mask-origin`: браузер отбрасывает объявление, и маска отсчитывается от
  рамки.
- `mask-origin-fill`, `mask-origin-stroke` и `mask-origin-viewbox` относятся к
  элементам SVG; у элемента HTML они действуют как `mask-origin-border`.
- Начало маски не обрезает её: область, где элемент виден, задаёт
  [обрезка маски](/ru/utilities/mask/mask-clip/).
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Область маски](/ru/utilities/mask/mask-clip/)
- [Положение маски](/ru/utilities/mask/mask-position/)
- [Повтор маски](/ru/utilities/mask/mask-repeat/)
- [Размер маски](/ru/utilities/mask/mask-size/)
- [Композиция маски](/ru/utilities/mask/mask-composite/)
- [Режим маски](/ru/utilities/mask/mask-mode/)
- [Тип маски](/ru/utilities/mask/mask-type/)
- [Начало фона](/ru/utilities/background/background-origin/)
