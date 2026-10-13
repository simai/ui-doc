---
title: "Композиция маски"
description: "Задаёт, как складываются несколько изображений маски на одном элементе."
---

# Композиция маски

Классы этой группы задают `mask-composite` — способ, которым слои маски
накладываются друг на друга: сложение, вычитание, пересечение или исключение.
Берите их, когда маска собирается из нескольких фигур.

## Пример

### Способы наложения

Маска из двух пересекающихся кругов — два слоя `mask-image`. Пунктирная рамка показывает границы элемента с маской.

:::example {id="utilities/mask/mask-composite" label="Способы наложения масок"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `mask-add` | `mask-composite: add` | — |
| `mask-subtract` | `mask-composite: subtract` | — |
| `mask-intersect` | `mask-composite: intersect` | — |
| `mask-exclude` | `mask-composite: exclude` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

Классы маски не задают саму маску: изображение маски (`mask-image`) задаётся
в CSS проекта, как в примерах на этой странице. Слои перечисляются в `mask-image` через запятую; наложение действует,
только когда слоёв больше одного.

### Способы

| Класс | Элемент виден |
| :--- | :--- |
| `mask-add` | там, где есть хотя бы один слой — значение по умолчанию |
| `mask-subtract` | там, где есть верхний слой, но нет нижнего |
| `mask-intersect` | только там, где слои пересекаются |
| `mask-exclude` | там, где есть ровно один слой |

```css
.two-circles {
  -webkit-mask-image: radial-gradient(circle at 38% 50%, #000 30%, transparent 31%),
    radial-gradient(circle at 62% 50%, #000 30%, transparent 31%);
  mask-image: radial-gradient(circle at 38% 50%, #000 30%, transparent 31%),
    radial-gradient(circle at 62% 50%, #000 30%, transparent 31%);
}
```

```html
<div class="two-circles mask-exclude">…</div>
```

## Ограничения

- Вместе с `mask-composite` классы задают `-webkit-mask-composite` со
  значениями WebKit для браузеров, которые знают маску только с префиксом.
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Область маски](/ru/utilities/mask/mask-clip/)
- [Вложение маски](/ru/utilities/mask/mask-origin/)
- [Положение маски](/ru/utilities/mask/mask-position/)
- [Повтор маски](/ru/utilities/mask/mask-repeat/)
- [Размер маски](/ru/utilities/mask/mask-size/)
- [Режим маски](/ru/utilities/mask/mask-mode/)
- [Тип маски](/ru/utilities/mask/mask-type/)
