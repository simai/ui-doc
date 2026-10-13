---
title: "Сенсорное действие"
description: "Задаёт, какие жесты на сенсорном экране браузер выполняет сам: прокрутку по осям, масштаб или ничего."
---

# Сенсорное действие

Классы `touch-*` задают свойство `touch-action`: какие жесты пальцем браузер
обрабатывает сам — прокрутку по горизонтали, по вертикали, масштаб двумя
пальцами. Остальные жесты получает скрипт страницы. Берите их для карт,
каруселей, полей рисования и ползунков.

## Пример

Проведите пальцем по полю в разные стороны на сенсорном экране или в режиме
эмуляции касаний в инструментах разработчика. Мышь класс не затрагивает.

:::example {id="utilities/interactivity/touch-action" label="touch-auto, touch-pan-x, touch-pan-y, touch-none"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `touch-auto` | `touch-action: auto` | — |
| `touch-none` | `touch-action: none` | — |
| `touch-pan-x` | `touch-action: pan-x` | — |
| `touch-pan-left` | `touch-action: pan-left` | — |
| `touch-pan-right` | `touch-action: pan-right` | — |
| `touch-pan-y` | `touch-action: pan-y` | — |
| `touch-pan-up` | `touch-action: pan-up` | — |
| `touch-pan-down` | `touch-action: pan-down` | — |
| `touch-pinch-zoom` | `touch-action: pinch-zoom` | — |
| `touch-manipulation` | `touch-action: manipulation` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

| Класс | Браузер сам выполняет |
| :--- | :--- |
| `touch-auto` | все жесты |
| `touch-none` | ничего; жесты получает скрипт |
| `touch-pan-x` | прокрутку по горизонтали |
| `touch-pan-y` | прокрутку по вертикали |
| `touch-pan-left`, `touch-pan-right` | прокрутку, начатую влево или вправо |
| `touch-pan-up`, `touch-pan-down` | прокрутку, начатую вверх или вниз |
| `touch-pinch-zoom` | масштаб двумя пальцами |
| `touch-manipulation` | прокрутку и масштаб, без масштаба двойным касанием |

Горизонтальная карусель с вертикальной прокруткой страницы:

```html
<div class="touch-pan-y">…слайды, которые листает скрипт…</div>
```

Карта или поле рисования, где все жесты обрабатывает скрипт:

```html
<canvas class="touch-none"></canvas>
```

`touch-manipulation` убирает задержку перед касанием, которую браузер держит,
чтобы распознать двойное касание.

## Ограничения

- `touch-none` на большом блоке лишает пользователя прокрутки и масштаба
  страницы, пока палец на блоке.
- Браузеры поддерживают `pan-left`, `pan-right`, `pan-up`, `pan-down` и
  `pinch-zoom` неодинаково; проверяйте на целевых устройствах.
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [События указателя](/ru/utilities/forms/pointer-events/)
- [Поведение при прокрутке](/ru/utilities/overscroll/overscroll-behavior/)
