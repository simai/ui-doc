---
title: "Выравнивание привязки прокрутки"
description: "Задаёт, к какому краю или к центру контейнера прилипает элемент, когда прокрутка останавливается."
---

# Выравнивание привязки прокрутки

Классы `snap-start`, `snap-center`, `snap-end` и `snap-align-none` задают
`scroll-snap-align` — точку элемента, которую привязка прокрутки совмещает с
контейнером. Ставьте их на элементы контейнера с
[типом привязки](/ru/utilities/overscroll/scroll-snap-type/).

## Пример

Прокрутите ленты вбок и отпустите. Подпись — класс на карточках: карточка
останавливается у начала ленты, по её центру или у конца.

:::example {id="utilities/overscroll/scroll-snap-align" label="Начало, центр и конец"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `snap-start` | `scroll-snap-align: start` | — |
| `snap-end` | `scroll-snap-align: end` | — |
| `snap-center` | `scroll-snap-align: center` | — |
| `snap-align-none` | `scroll-snap-align: none` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Выбор выравнивания

| Класс | Карточка останавливается |
| :--- | :--- |
| `snap-start` | у начала контейнера — для лент, которые читают слева направо |
| `snap-center` | по центру — для каруселей с одной карточкой в фокусе |
| `snap-end` | у конца контейнера |
| `snap-align-none` | не привязывается — для отдельных элементов в ленте |

```html
<div class="flex gap-2 overflow-auto snap-x snap-mandatory">
  <figure class="snap-center shrink-none w-f6">…</figure>
  <figure class="snap-center shrink-none w-f6">…</figure>
</div>
```

Зазор между краем контейнера и карточкой задают
[внутренний](/ru/utilities/overscroll/scroll-padding/) и
[внешний](/ru/utilities/overscroll/scroll-margin/) отступы прокрутки.

## Ограничения

- Без типа привязки на контейнере классы ничего не делают.
- `start` и `end` — логические края: в горизонтальной ленте при письме справа
  налево начало находится справа.
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Тип привязки прокрутки](/ru/utilities/overscroll/scroll-snap-type/)
- [Ограничитель прокрутки](/ru/utilities/overscroll/scroll-snap-stop/)
