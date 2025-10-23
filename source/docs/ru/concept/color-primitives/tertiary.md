---
extends: _core._layouts.documentation
section: content
title: Tertiary
description: Tertiary
---

# Tertiary

![][image10]

Роль **Tertiary** используется для выделения отдельных элементов среди уже существующих акцентов, созданных с помощью
Primary и Secondary. Применение Tertiary позволяет добавить третий уровень акцентирования, делая интерфейс более
выразительным и гибким в расстановке приоритетов.

Вариации роли Tertiary:

* **Tertiary** — заливка, текст и иконки с повышенным акцентом, применяемые для выделения важных, но не основных
  элементов интерфейса.
* **On Tertiary** — цвет текста и иконок на фоне Tertiary.
* **Tertiary Container** — приглушённый цвет для поверхностей, подходящий для навигационных элементов и тональных
  кнопок, не конкурирующий с Primary или Secondary.
* **On Tertiary Container** — текст и иконки на фоне Tertiary Container.
* **On Tertiary Container Graphic** — заливка крупных графических объектов на фоне Tertiary Container.
* **Tertiary Transparent** — полупрозрачный цвет для выделения прозрачных элементов на поверхности, например, для
  outline-кнопок при наведении.
* **Outline Tertiary** — цвет контуров, границ и разделителей, применяемый в сочетании с ролью Tertiary.

Пример использования цвета Tertiary:

![][image11]

![][image12]

Для работы с ролью Tertiary используются следующие переменные:

| Переменная                           | Значение (light)            | Значение (dark)             |
|:-------------------------------------|:----------------------------|:----------------------------|
| `--sf-tertiary`                      | `--sf-tertiary-40`          | `--sf-tertiary-80`          |
| `--sf-tertiary-hover`                | `--sf-tertiary-35`          | `--sf-tertiary-85`          |
| `--sf-tertiary-active`               | `--sf-tertiary-30`          | `--sf-tertiary-90`          |
| `--sf-tertiary-container`            | `--sf-tertiary-90`          | `--sf-tertiary-30`          |
| `--sf-tertiary-container-hover`      | `--sf-tertiary-85`          | `--sf-tertiary-35`          |
| `--sf-tertiary-container-active`     | `--sf-tertiary-80`          | `--sf-tertiary-40`          |
| `--sf-tertiary-transparent-hover`    | `--sf-tertiary-50--alfa-4`  | `--sf-tertiary-90--alfa-4`  |
| `--sf-tertiary-transparent-select`   | `--sf-tertiary-50--alfa-8`  | `--sf-tertiary-90--alfa-8`  |
| `--sf-tertiary-transparent-active`   | `--sf-tertiary-50--alfa-12` | `--sf-tertiary-90--alfa-12` |
| `--sf-tertiary-transparent-overlay`  | `--sf-tertiary-50--alfa-24` | `--sf-tertiary-90--alfa-24` |
| `--sf-on-tertiary`                   | `--sf-white`                | `--sf-tertiary-20`          |
| `--sf-on-tertiary-container`         | `--sf-tertiary-10`          | `--sf-tertiary-90`          |
| `--sf-on-tertiary-container-graphic` | `--sf-tertiary-50`          | `--sf-tertiary-60`          |
| `--sf-outline-tertiary`              | `--sf-tertiary-50`          | `--sf-tertiary-60`          |
{.table}

[image10]: /assets/build/img/b64/52f9cf90be5f330a.png
[image11]: /assets/build/img/b64/5502f1e0f394cba9.png
[image12]: /assets/build/img/b64/aaf234c5fa43a458.png
