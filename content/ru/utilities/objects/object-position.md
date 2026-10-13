---
title: "Позиционирование объекта"
description: "Выбирает, какая часть изображения или видео видна, когда оно не совпадает с областью элемента."
---

# Позиционирование объекта

Классы `object-*` задают свойство `object-position` — точку, к которой
изображение или видео прижимается внутри своей области. Берите их вместе с
`object-cover` или `object-none`, чтобы при обрезке осталась нужная часть
кадра.

## Пример

### Точки привязки

Одно и то же изображение в исходном размере (`object-none`) стоит в
одинаковых областях; класс позиции выбирает видимую часть. Подпись над
образцом — класс позиции.

:::example {id="utilities/objects/object-position" label="Девять точек привязки"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `object-bottom` | `object-position: bottom` | — |
| `object-center` | `object-position: center` | — |
| `object-inline-start` | `object-position: left` | — |
| `object-inline-start-bottom` | `object-position: left bottom` | — |
| `object-inline-start-top` | `object-position: left top` | — |
| `object-inline-end` | `object-position: right` | — |
| `object-inline-end-bottom` | `object-position: right bottom` | — |
| `object-inline-end-top` | `object-position: right top` | — |
| `object-top` | `object-position: top` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:object-bottom`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

По умолчанию изображение стоит по центру области — это `object-center`.
Позиция заметна, только когда изображение больше области хотя бы по одной
оси: с `object-cover` она выбирает, какой край обрезать, с `object-none` —
какой фрагмент показать.

```html
<img class="w-full h-e6 object-cover object-top" src="portrait.jpg" alt="Портрет">
<img class="w-e6 h-e6 object-none object-inline-start-bottom" src="map.png" alt="Карта">
```

С префиксом ширины позиция меняется от указанной ширины и шире:
`object-center md:object-top`.

## Ограничения

- Несмотря на названия, `inline-start` и `inline-end` здесь — физические
  стороны: классы задают `left` и `right` и не меняются при `dir="rtl"`.
  `object-inline-start` всегда прижимает изображение к левому краю.
- Классы действуют на заменяемые элементы (`<img>`, `<video>` и подобные).
  С `object-fill` позиция ничего не меняет: изображение занимает всю
  область.
- У семейства нет префиксов состояния.

## См. также

- [Заполнение объектом](/ru/utilities/objects/object-fit/)
