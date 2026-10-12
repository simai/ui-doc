---
title: "Положение маски"
description: "Ставит изображение маски в угол, к стороне или в центр элемента."
---

# Положение маски

Классы этой группы задают `mask-position` — место изображения маски внутри
элемента. Берите их вместе с `mask-repeat-none`, когда маска меньше элемента.

## Пример

### Положения

Маска в форме листа без повтора в девяти положениях. Пунктирная рамка показывает границы элемента с маской.

:::example {id="utilities/mask/mask-position" label="Положения маски"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `mask-top` | `mask-position: top` | — |
| `mask-inline-end` | `mask-position: right` | — |
| `mask-bottom` | `mask-position: bottom` | — |
| `mask-inline-start` | `mask-position: left` | — |
| `mask-center` | `mask-position: center` | — |
| `mask-inline-start-top` | `mask-position: left top` | — |
| `mask-inline-start-bottom` | `mask-position: left bottom` | — |
| `mask-inline-end-top` | `mask-position: right top` | — |
| `mask-inline-end-bottom` | `mask-position: right bottom` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

Классы маски не задают саму маску: изображение маски (`mask-image`) задаётся
в CSS проекта, как в примерах на этой странице.

### Положения

| | Начало строки | Середина | Конец строки |
| :--- | :--- | :--- | :--- |
| Верх | `mask-inline-start-top` | `mask-top` | `mask-inline-end-top` |
| Середина | `mask-inline-start` | `mask-center` | `mask-inline-end` |
| Низ | `mask-inline-start-bottom` | `mask-bottom` | `mask-inline-end-bottom` |

Без класса маска стоит в левом верхнем углу.

```html
<div class="mask-repeat-none mask-center mask-contain">…</div>
```

## Ограничения

- Стороны названы `inline-start` и `inline-end`, но заданы физически: `left`
  и `right`. При письме справа налево маска не переходит на другую сторону.
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Область маски](/ru/utilities/mask/mask-clip/)
- [Вложение маски](/ru/utilities/mask/mask-origin/)
- [Повтор маски](/ru/utilities/mask/mask-repeat/)
- [Размер маски](/ru/utilities/mask/mask-size/)
- [Композиция маски](/ru/utilities/mask/mask-composite/)
- [Режим маски](/ru/utilities/mask/mask-mode/)
- [Тип маски](/ru/utilities/mask/mask-type/)
- [Положение фона](/ru/utilities/background/background-position/)
