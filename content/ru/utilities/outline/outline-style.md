---
title: "Стиль внешней границы"
description: "Задаёт вид линии внешнего контура: сплошная, штрихи, точки, двойная — или убирает контур."
---

# Стиль внешней границы

Классы `outline-{стиль}` задают `outline-style` — вид линии внешнего
контура. Берите их, чтобы включить контур нужного вида или убрать его.

## Пример

Под каждым образцом — класс стиля; цвет и отступ задают `outline-primary
outline-offset-2`.

:::example {id="utilities/outline/outline-style" label="Стили контура"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `outline-solid` | `outline-style: solid` | — |
| `outline-dashed` | `outline-style: dashed` | — |
| `outline-dotted` | `outline-style: dotted` | — |
| `outline-double` | `outline-style: double` | — |
| `outline-hidden` | `outline-style: hidden` | — |
| `outline-none` | `outline-style: none` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

| Класс | Линия |
| :--- | :--- |
| `outline-solid` | сплошная |
| `outline-dashed` | штрихи |
| `outline-dotted` | точки |
| `outline-double` | две линии; заметна от толщины `outline-3` |
| `outline-none` | контура нет |

По умолчанию стиль контура — `none`: без класса стиля или класса `outline`
из ядра контур не рисуется.

```html
<div class="outline-dashed outline-2 outline-outline outline-offset-4">Место для вставки</div>
```

## Ограничения

- `outline-hidden` в выпуске не действует: значение `hidden` не допускается
  для свойства `outline-style`, и браузер отбрасывает объявление. Чтобы убрать
  контур, берите `outline-none`.
- `outline-none` на элементе в фокусе убирает видимый фокус. Не снимайте
  фокус, не заменив его другим заметным выделением.
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [Толщина внешней границы](/ru/utilities/outline/outline-width/)
- [Цвет внешней границы](/ru/utilities/outline/outline-color/)
- [Фокус](/ru/guide/size-and-type/focus/)
