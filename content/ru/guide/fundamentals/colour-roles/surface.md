---
title: "Поверхности (Surface)"
description: "Семантические роли поверхностей и контрастного содержимого в светлой и тёмной темах."
---

# Поверхности (Surface)

Роль **Surface** предназначена для формирования нейтрального фона, используемого на поверхностях, карточках и элементах
интерфейса. Применение роли Surface помогает отделить контент от фона страницы, сохраняя при этом визуальную гармонию и
удобство восприятия.

Вариации роли Surface:

* **Surface** — нейтральная заливка для обширных областей или поверхностей.
* **On Surface** — текст и иконки, оптимизированные для контраста и читабельности на фоне Surface.
* **Surface Container** — слегка приглушённая заливка для навигационных элементов, тональных кнопок и других
  интерфейсных компонентов, позволяющая аккуратно выделять объекты без яркого цветового акцента.
* **Surface Transparent** — полупрозрачный цвет для подчёркивания элементов с прозрачным фоном. Применяется при
  взаимодействии, например, для создания эффектов наведения (hover) у outline-кнопок.

![Примеры применения ролей Surface][image20]

![Роли Surface в светлой и тёмной темах][image21]

Для работы с ролью Surface используются следующие переменные:

| Переменная                         | Значение (light)           | Значение (dark)            |
|:-----------------------------------|:---------------------------|:---------------------------|
| `--sf-surface-0`                   | `--sf-white`               | `--sf-neutral-5`           |
| `--sf-surface-1`                   | `--sf-neutral-98`          | `--sf-neutral-10`          |
| `--sf-surface-2`                   | `--sf-neutral-95`          | `--sf-neutral-15`          |
| `--sf-surface-3`                   | `--sf-neutral-90`          | `--sf-neutral-20`          |
| `--sf-surface-4`                   | `--sf-neutral-85`          | `--sf-neutral-25`          |
| `--sf-surface-5`                   | `--sf-neutral-80`          | `--sf-neutral-30`          |
| `--sf-surface-inverse`             | `--sf-neutral-20`          | `--sf-neutral-90`          |
| `--sf-surface-inverse-fixed`       | `--sf-neutral-20`          | `--sf-neutral-20`          |
| `--sf-surface-container`           | `--sf-neutral-50--alfa-16` | `--sf-neutral-90--alfa-16` |
| `--sf-surface-container-hover`     | `--sf-neutral-50--alfa-20` | `--sf-neutral-90--alfa-20` |
| `--sf-surface-container-active`    | `--sf-neutral-50--alfa-24` | `--sf-neutral-90--alfa-24` |
| `--sf-on-surface`                  | `--sf-neutral-10`          | `--sf-neutral-90`          |
| `--sf-on-surface-fixed`            | `--sf-neutral-10`          | `--sf-neutral-10`          |
| `--sf-on-surface-hover`            | `--sf-neutral-15`          | `--sf-neutral-85`          |
| `--sf-on-surface-active`           | `--sf-neutral-20`          | `--sf-neutral-80`          |
| `--sf-on-surface-variant`          | `--sf-neutral-40`          | `--sf-neutral-60`          |
| `--sf-on-surface-muted`            | `--sf-neutral-60`          | `--sf-neutral-40`          |
| `--sf-on-surface-inverse`          | `--sf-neutral-90`          | `--sf-neutral-10`          |
| `--sf-on-surface-inverse-fixed`    | `--sf-neutral-90`          | `--sf-neutral-90`          |
| `--sf-surface-transparent-hover`   | `--sf-neutral-50--alfa-4`  | `--sf-neutral-90--alfa-4`  |
| `--sf-surface-transparent-select`  | `--sf-neutral-50--alfa-8`  | `--sf-neutral-90--alfa-8`  |
| `--sf-surface-transparent-overlay` | `--sf-neutral-50--alfa-32` | `--sf-neutral-90--alfa-32` |
| `--sf-surface-overlay`             | `--sf-black--alfa-8`       | `--sf-white--alfa-8`       |

Плашка (`container`) и слой состояния (`transparent`) полупрозрачны и замешаны
из одного нейтрального тона: `neutral-50` в светлой теме, `neutral-90` в
тёмной. Поэтому ступени у них одинаковы в обеих темах. Исключение —
`--sf-surface-overlay`, вуаль под модальным окном: она замешана из чистого
чёрного и белого, потому что её работа — притушить сцену, а не подкрасить
поверхность.

До 8 октября 2026 года плашка была непрозрачной ступенью палитры, слой
состояния имел ещё и `--sf-surface-transparent-active`, а вуаль поверхности
стояла на 24 — там же, где нажатая плашка. Подробнее о шкале и о том, как
выбрать ступень, — в руководстве
[«Прозрачность»](/ru/guide/fundamentals/transparency/).

## Поверхность ступени высоты

Поднятый элемент стоит на своей поверхности. В светлой теме это обычная
поверхность страницы — там высоту несёт тень; в тёмной теме тень не работает, и
подъём показывает ступень, которая светлеет.

| Переменная                         | Значение (light)           | Значение (dark)            |
|:-----------------------------------|:---------------------------|:---------------------------|
| `--sf-elevation-1--surface`        | `--sf-surface-0`           | `--sf-surface-2`           |
| `--sf-elevation-2--surface`        | `--sf-surface-0`           | `--sf-surface-3`           |
| `--sf-elevation-3--surface`        | `--sf-surface-0`           | `--sf-surface-4`           |
| `--sf-elevation-4--surface`        | `--sf-surface-0`           | `--sf-surface-5`           |
| `--sf-elevation-5--surface`        | `--sf-surface-0`           | `--sf-surface-5`           |

Брать их поодиночке нужно редко: утилита
[`elevation-*`](/ru/utilities/shadows/elevation/) ставит поверхность и тень
одним классом.

## Приглушённый текст на ступени

Поверхность в тёмной теме светлеет со ступенью, поэтому приглушённый текст
светлеет вместе с ней: одно значение не проходит на всех ступенях.

| Переменная                         | Значение (light)           | Значение (dark)            |
|:-----------------------------------|:---------------------------|:---------------------------|
| `--sf-on-elevation-1--variant`     | `--sf-neutral-40`          | `--sf-neutral-60`          |
| `--sf-on-elevation-2--variant`     | `--sf-neutral-40`          | `--sf-neutral-70`          |
| `--sf-on-elevation-3--variant`     | `--sf-neutral-40`          | `--sf-neutral-70`          |
| `--sf-on-elevation-4--variant`     | `--sf-neutral-40`          | `--sf-neutral-80`          |
| `--sf-on-elevation-5--variant`     | `--sf-neutral-40`          | `--sf-neutral-80`          |

Класс `elevation-N` подставляет нужную пару сам, переопределяя
`--sf-on-surface-variant` у себя. Правило целиком —
[Границы и высота](/ru/guide/fundamentals/borders/).

[image20]: /ru/assets/reference/image-20.png
[image21]: /ru/assets/reference/image-21.png
