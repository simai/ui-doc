---
title: "Повтор фона"
description: "Задаёт, повторяется ли фоновое изображение и по каким осям."
---

# Повтор фона

Классы `bg-repeat*` задают `background-repeat`: повторяется ли фоновое
изображение по горизонтали, по вертикали, по обеим осям или стоит одно. Берите
их для узоров из плитки и для одиночных картинок, которые не должны
размножаться.

## Пример

Одна и та же плитка с разными классами повтора. Ширина образца не кратна
плитке: `bg-repeat` обрезает крайние плитки, `bg-repeat-space` раздвигает
целые плитки, `bg-repeat-round` масштабирует их.

:::example {id="utilities/background/background-repeat" label="Классы повтора"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `bg-repeat` | `background-repeat: repeat` | — |
| `bg-repeat-none` | `background-repeat: no-repeat` | — |
| `bg-repeat-x` | `background-repeat: repeat-x` | — |
| `bg-repeat-y` | `background-repeat: repeat-y` | — |
| `bg-repeat-round` | `background-repeat: round` | — |
| `bg-repeat-space` | `background-repeat: space` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:bg-repeat`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

| Класс | Как ложится картинка |
| :--- | :--- |
| `bg-repeat` | по обеим осям, крайние плитки обрезаются — значение браузера по умолчанию |
| `bg-repeat-x` | одна строка по горизонтали |
| `bg-repeat-y` | один столбец по вертикали |
| `bg-repeat-none` | одна картинка без повтора |
| `bg-repeat-space` | целые плитки с равными промежутками между ними |
| `bg-repeat-round` | целые плитки, сжатые или растянутые, чтобы заполнить элемент |

### Одиночная картинка

Для иллюстрации или значка берите `bg-repeat-none` вместе с положением и
размером:

```html
<div class="bg-repeat-none bg-center bg-contain h-f0"
     style="background-image: url(/images/empty-state.svg)"></div>
```

С префиксом ширины класс действует от указанной ширины и шире, например
`md:bg-repeat-none`.

## Ограничения

- `bg-repeat` и `bg-repeat-space` для картинки больше элемента дают одну
  обрезанную плитку.
- У семейства нет префиксов состояния.

## См. также

- [Размер фона](/ru/utilities/background/background-size/)
- [Положение фона](/ru/utilities/background/background-position/)
- [Паттерн фона](/ru/utilities/background/background-pattern/)
