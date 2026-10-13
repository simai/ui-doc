---
title: "Смешивание цветов"
description: "Задаёт, как цвета элемента смешиваются с тем, что нарисовано под ним."
---

# Смешивание цветов

Классы `mix-blend-*` задают режим смешивания элемента с содержимым под ним.
Берите их для декоративных слоёв поверх изображений: тонирования, «прожига»,
цветных подложек под текстом.

## Пример

### Режимы

Один и тот же круг цвета `bg-primary` поверх одного изображения в каждом режиме.

:::example {id="utilities/filters/mix-blend-mode" label="Режимы смешивания"}
:::

### Граница смешивания

Элемент смешивается со всем, что лежит под ним, вплоть до ближайшего контекста наложения. `isolate` на родителе отрезает внешний фон: справа круг смешивается только с родителем, у которого нет фона.

:::example {id="utilities/filters/mix-blend-mode-isolate" label="isolate ограничивает смешивание"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `mix-blend-normal` | `mix-blend-mode: normal` | — |
| `mix-blend-multiply` | `mix-blend-mode: multiply` | — |
| `mix-blend-screen` | `mix-blend-mode: screen` | — |
| `mix-blend-overlay` | `mix-blend-mode: overlay` | — |
| `mix-blend-darken` | `mix-blend-mode: darken` | — |
| `mix-blend-lighten` | `mix-blend-mode: lighten` | — |
| `mix-blend-color-dodge` | `mix-blend-mode: color-dodge` | — |
| `mix-blend-color-burn` | `mix-blend-mode: color-burn` | — |
| `mix-blend-hard-light` | `mix-blend-mode: hard-light` | — |
| `mix-blend-soft-light` | `mix-blend-mode: soft-light` | — |
| `mix-blend-difference` | `mix-blend-mode: difference` | — |
| `mix-blend-exclusion` | `mix-blend-mode: exclusion` | — |
| `mix-blend-hue` | `mix-blend-mode: hue` | — |
| `mix-blend-saturation` | `mix-blend-mode: saturation` | — |
| `mix-blend-color` | `mix-blend-mode: color` | — |
| `mix-blend-luminosity` | `mix-blend-mode: luminosity` | — |
| `mix-blend-plus-darker` | `mix-blend-mode: plus-darker` | — |
| `mix-blend-plus-lighter` | `mix-blend-mode: plus-lighter` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Какой режим выбрать

| Класс | Что делает |
| :--- | :--- |
| `mix-blend-normal` | без смешивания, значение по умолчанию |
| `mix-blend-multiply`, `mix-blend-darken`, `mix-blend-color-burn`, `mix-blend-plus-darker` | затемняют; белые участки слоя подложку не меняют |
| `mix-blend-screen`, `mix-blend-lighten`, `mix-blend-color-dodge`, `mix-blend-plus-lighter` | осветляют; чёрные участки слоя подложку не меняют |
| `mix-blend-overlay`, `mix-blend-soft-light`, `mix-blend-hard-light` | усиливают контраст подложки |
| `mix-blend-difference`, `mix-blend-exclusion` | вычитают цвета: на светлом темнеет, на тёмном светлеет |
| `mix-blend-hue`, `mix-blend-saturation`, `mix-blend-color`, `mix-blend-luminosity` | переносят одну составляющую цвета: оттенок, насыщенность, цвет или яркость |

### Тонирование изображения

Слой цвета роли поверх изображения в режиме `color` окрашивает изображение,
сохраняя его светотень. `isolate` на обёртке не даёт слою смешаться с фоном
страницы.

```html
<div class="relative isolate">
  <img class="w-full" src="photo.jpg" alt="Фотография">
  <div class="absolute inset-0 bg-primary mix-blend-color"></div>
</div>
```

## Ограничения

- Результат зависит от цветов под элементом, поэтому в светлой и тёмной теме
  он разный. Текст в режиме смешивания может потерять контраст — проверьте
  его в обеих темах.
- `mix-blend-plus-darker` поддерживают не все браузеры; в Chromium режим не
  действует, и элемент рисуется как с `mix-blend-normal`.
- Значение, отличное от `mix-blend-normal`, создаёт у элемента новый контекст
  наложения.
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Изоляция](/ru/utilities/layout/isolation/)
- [Прозрачность](/ru/utilities/filters/opacity/)
- [Вращение оттенка элемента](/ru/utilities/filters/filter-hue-rotate/)
