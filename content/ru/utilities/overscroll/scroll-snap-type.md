---
title: "Тип привязки прокрутки"
description: "Включает привязку прокрутки у контейнера: по какой оси и насколько строго прокрутка останавливается на элементах."
---

# Тип привязки прокрутки

Классы `snap-x`, `snap-y`, `snap-both`, `snap-mandatory`, `snap-proximity` и
`snap-none` задают `scroll-snap-type` — привязку прокрутки контейнера к его
элементам. Берите их для каруселей, галерей и пошаговых лент, где прокрутка
должна останавливаться на целом элементе, а не посередине.

## Пример

### Строгость

Прокрутите ленты вбок и отпустите между карточками. С `snap-mandatory` лента
всегда доезжает до карточки, с `snap-proximity` — только если карточка
близко, с `snap-none` останавливается где угодно. У карточек стоит
`snap-start`.

:::example {id="utilities/overscroll/scroll-snap-type" label="Строгая, мягкая и выключенная привязка"}
:::

### Вертикальная ось

`snap-y` привязывает вертикальную прокрутку. Прокрутите список и отпустите
рядом с началом пункта.

:::example {id="utilities/overscroll/scroll-snap-type-axis" label="Привязка по вертикали"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `snap-x` | `scroll-snap-type: x` | — |
| `snap-y` | `scroll-snap-type: y` | — |
| `snap-both` | `scroll-snap-type: both` | — |
| `snap-mandatory` | `scroll-snap-type: x mandatory` | — |
| `snap-proximity` | `scroll-snap-type: x proximity` | — |
| `snap-none` | `scroll-snap-type: none` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Контейнер и элементы

Тип привязки ставят на прокручиваемый контейнер, а точку привязки — на его
элементы классами
[выравнивания привязки](/ru/utilities/overscroll/scroll-snap-align/). Без
класса выравнивания на элементах привязки нет.

```html
<div class="flex gap-2 overflow-auto snap-x snap-mandatory">
  <div class="snap-start shrink-none w-f4">…</div>
  <div class="snap-start shrink-none w-f4">…</div>
</div>
```

### Выбор оси и строгости

| Класс | Когда брать |
| :--- | :--- |
| `snap-x` | горизонтальная лента; строгость — по умолчанию браузера (мягкая) |
| `snap-y` | вертикальный список или полноэкранные слайды |
| `snap-both` | область, которая прокручивается в обе стороны |
| `snap-mandatory` | горизонтальная лента, которая всегда останавливается на элементе |
| `snap-proximity` | горизонтальная лента с привязкой только рядом с элементом |
| `snap-none` | отключить привязку |

## Ограничения

- `snap-mandatory` и `snap-proximity` задают ось сами — всегда `x`. С `snap-y`
  или `snap-both` их не сочетают: класс заменит ось на горизонтальную. Для
  вертикальной строгой привязки задайте `scroll-snap-type: y mandatory` в
  стилях проекта.
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Выравнивание привязки прокрутки](/ru/utilities/overscroll/scroll-snap-align/)
- [Ограничитель прокрутки](/ru/utilities/overscroll/scroll-snap-stop/)
- [Внутренний отступ прокрутки](/ru/utilities/overscroll/scroll-padding/)
