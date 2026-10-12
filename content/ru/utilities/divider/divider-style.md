---
title: "Стиль разделителя"
description: "Задаёт вид линий между соседними элементами контейнера: сплошные, штрихи, точки, двойные."
---

# Стиль разделителя

Классы `divider-{стиль}` ставятся на контейнер и задают вид линий, которые
проводят классы [толщины разделителя](/ru/utilities/divider/divider-width/).
Берите их, когда линия между пунктами должна быть пунктирной, точечной или
двойной, и `divider-none` — чтобы убрать линии.

## Пример

Списки с `divider-y-3 divider-outline`; под каждым — класс стиля.

:::example {id="utilities/divider/divider-style" label="Стили разделителя"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `divider-solid` (`.divider-solid > :not([hidden]) ~ :not([hidden])`) | `border-style: solid` | — |
| `divide-solid` (`.divide-solid > :not([hidden]) ~ :not([hidden])`) | `border-style: solid` | — |
| `divider-dashed` (`.divider-dashed > :not([hidden]) ~ :not([hidden])`) | `border-style: dashed` | — |
| `divide-dashed` (`.divide-dashed > :not([hidden]) ~ :not([hidden])`) | `border-style: dashed` | — |
| `divider-dotted` (`.divider-dotted > :not([hidden]) ~ :not([hidden])`) | `border-style: dotted` | — |
| `divide-dotted` (`.divide-dotted > :not([hidden]) ~ :not([hidden])`) | `border-style: dotted` | — |
| `divider-double` (`.divider-double > :not([hidden]) ~ :not([hidden])`) | `border-style: double` | — |
| `divide-double` (`.divide-double > :not([hidden]) ~ :not([hidden])`) | `border-style: double` | — |
| `divider-none` (`.divider-none > :not([hidden]) ~ :not([hidden])`) | `border-style: none` | — |
| `divide-none` (`.divide-none > :not([hidden]) ~ :not([hidden])`) | `border-style: none` | — |
| `divider-hidden` (`.divider-hidden > :not([hidden]) ~ :not([hidden])`) | `border-style: hidden !important` | — |
| `divide-hidden` (`.divide-hidden > :not([hidden]) ~ :not([hidden])`) | `border-style: hidden !important` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

| Класс | Линия |
| :--- | :--- |
| `divider-solid` | сплошная — стиль по умолчанию |
| `divider-dashed` | штрихи |
| `divider-dotted` | точки |
| `divider-double` | две линии; заметна от толщины `divider-y-3` |
| `divider-none`, `divider-hidden` | линий нет |

`divider-none` убирает линии, например во вложенном списке, который получил
классы разделителя от общего шаблона:

```html
<ul class="flex flex-col divider-y-1 divider-outline-variant divider-none">…</ul>
```

У каждого класса есть второе имя с `divide-` вместо `divider-`. В разметке
пишите `divider-`.

## Ограничения

- `divider-hidden` задан с `!important` и перекрывает любой другой стиль
  линий.
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [Толщина разделителя](/ru/utilities/divider/divider-width/)
- [Цвет разделителя](/ru/utilities/divider/divider-color/)
- [Стиль границы](/ru/utilities/border/border-style/)
