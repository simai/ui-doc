---
title: "Повтор маски"
description: "Задаёт, повторяется ли изображение маски и по каким осям."
---

# Повтор маски

Классы `mask-repeat-*` задают `mask-repeat` — повтор изображения маски, если
оно меньше элемента. Берите их для узоров из маски и для одиночной маски без
повтора.

## Пример

### Варианты повтора

Маска-точка размером меньше элемента. Пунктирная рамка показывает границы элемента с маской.

:::example {id="utilities/mask/mask-repeat" label="Варианты повтора маски"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `mask-repeat` | `mask-repeat: repeat` | — |
| `mask-repeat-none` | `mask-repeat: no-repeat` | — |
| `mask-repeat-x` | `mask-repeat: repeat-x` | — |
| `mask-repeat-y` | `mask-repeat: repeat-y` | — |
| `mask-repeat-round` | `mask-repeat: round` | — |
| `mask-repeat-space` | `mask-repeat: space` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

Классы маски не задают саму маску: изображение маски (`mask-image`) задаётся
в CSS проекта, как в примерах на этой странице.

### Варианты

| Класс | Что делает |
| :--- | :--- |
| `mask-repeat` | повторяет по обеим осям — значение по умолчанию |
| `mask-repeat-x` | повторяет по горизонтали |
| `mask-repeat-y` | повторяет по вертикали |
| `mask-repeat-none` | показывает маску один раз |
| `mask-repeat-round` | повторяет и растягивает, чтобы уложить целое число копий |
| `mask-repeat-space` | повторяет целое число копий и распределяет между ними свободное место |

Одиночная маска по центру:

```html
<div class="mask-repeat-none mask-center mask-contain">…</div>
```

## Ограничения

- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Область маски](/ru/utilities/mask/mask-clip/)
- [Вложение маски](/ru/utilities/mask/mask-origin/)
- [Положение маски](/ru/utilities/mask/mask-position/)
- [Размер маски](/ru/utilities/mask/mask-size/)
- [Композиция маски](/ru/utilities/mask/mask-composite/)
- [Режим маски](/ru/utilities/mask/mask-mode/)
- [Тип маски](/ru/utilities/mask/mask-type/)
- [Повтор фона](/ru/utilities/background/background-repeat/)
