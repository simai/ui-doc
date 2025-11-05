---
extends: _core._layouts.documentation
section: content
title: Surface
description: Surface
---

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

![][image20]

![][image21]

Для работы с ролью Surface используются следующие переменные:

| Переменная                         | Значение (light)           | Значение (dark)            |
|:-----------------------------------|:---------------------------|:---------------------------|
| `--sf-surface-0`                   | `--sf-white`               | `--sf-neutral-5`           |
| `--sf-surface-1`                   | `--sf-neutral-98`          | `--sf-neutral-10`          |
| `--sf-surface-2`                   | `--sf-neutral-95`          | `--sf-neutral-15`          |
| `--sf-surface-3`                   | `--sf-neutral-90`          | `--sf-neutral-20`          |
| `--sf-surface-4`                   | `--sf-neutral-85`          | `--sf-neutral-25`          |
| `--sf-surface-inverse`             | `--sf-neutral-20`          | `--sf-neutral-90`          |
| `--sf-surface-inverse-fixed`       | `--sf-neutral-20`          | `--sf-neutral-20`          |
| `--sf-surface-container`           | `--sf-neutral-90`          | `--sf-neutral-30`          |
| `--sf-surface-container-hover`     | `--sf-neutral-85`          | `--sf-neutral-35`          |
| `--sf-surface-container-active`    | `--sf-neutral-80`          | `--sf-neutral-40`          |
| `--sf-on-surface`                  | `--sf-neutral-10`          | `--sf-neutral-90`          |
| `--sf-on-surface-fixed`            | `--sf-neutral-10`          | `--sf-neutral-10`          |
| `--sf-on-surface-hover`            | `--sf-neutral-15`          | `--sf-neutral-85`          |
| `--sf-on-surface-active`           | `--sf-neutral-20`          | `--sf-neutral-80`          |
| `--sf-on-surface-variant`          | `--sf-neutral-40`          | `--sf-neutral-60`          |
| `--sf-on-surface-inverse`          | `--sf-neutral-90`          | `--sf-neutral-10`          |
| `--sf-on-surface-inverse-fixed`    | `--sf-neutral-90`          | `--sf-neutral-90`          |
| `--sf-surface-transparent-hover`   | `--sf-neutral-50--alfa-4`  | `--sf-neutral-90--alfa-4`  |
| `--sf-surface-transparent-select`  | `--sf-neutral-50--alfa-8`  | `--sf-neutral-90--alfa-8`  |
| `--sf-surface-transparent-active`  | `--sf-neutral-50--alfa-12` | `--sf-neutral-90--alfa-12` |
| `--sf-surface-transparent-overlay` | `--sf-neutral-50--alfa-24` | `--sf-neutral-90--alfa-24` |
{.table}

[image20]: /assets/build/img/b64/92dbbe6d114d1066.png
[image21]: /assets/build/img/b64/d09425ddfe2b38ac.png
