---
extends: _core._layouts.documentation
section: content
title: Error
description: Error
---

# Error

Роль **Error** используется для чёткого и заметного отображения проблемных состояний в интерфейсе: ошибок, сбоев или
иных критичных ситуаций. Применение цветов из данной роли помогает пользователю быстро понять суть проблемы и обратить
на неё внимание.

Вариации роли Error:

* **Error** — заливки, текст и иконки с ярко выраженным акцентом, подчёркивающим серьёзность проблемы.
* **On Error** — цвет текста и иконок на фоне Error.
* **Error Container** — приглушённый цвет заливки для областей, связанных с информацией об ошибках, например для
  всплывающих уведомлений или тональных кнопок.
* **On Error Container** — текст и иконки на фоне Error Container.
* **On Error Container Graphic** — заливка крупных графических объектов на фоне Error Container.
* **Error Transparent** — полупрозрачный цвет для выделения прозрачных элементов на поверхности (например, для
  outline-кнопок при наведении).
* **Outline Error** — цвет контуров, границ и разделителей, связанных с элементами ошибки.

Пример использования роли Error:

![][image13]

![][image14]

Для работы с ролью Error используются следующие переменные:

| Переменная                        | Значение (light)         | Значение (dark)          |
|:----------------------------------|:-------------------------|:-------------------------|
| `--sf-error`                      | `--sf-error-40`          | `--sf-error-80`          |
| `--sf-error-hover`                | `--sf-error-35`          | `--sf-error-85`          |
| `--sf-error-active`               | `--sf-error-30`          | `--sf-error-90`          |
| `--sf-error-container`            | `--sf-error-90`          | `--sf-error-30`          |
| `--sf-error-container-hover`      | `--sf-error-85`          | `--sf-error-35`          |
| `--sf-error-container-active`     | `--sf-error-80`          | `--sf-error-40`          |
| `--sf-error-transparent-hover`    | `--sf-error-50--alfa-4`  | `--sf-error-90--alfa-4`  |
| `--sf-error-transparent-select`   | `--sf-error-50--alfa-8`  | `--sf-error-90--alfa-8`  |
| `--sf-error-transparent-active`   | `--sf-error-50--alfa-12` | `--sf-error-90--alfa-12` |
| `--sf-error-transparent-overlay`  | `--sf-error-50--alfa-24` | `--sf-error-90--alfa-24` |
| `--sf-on-error`                   | `--sf-white`             | `--sf-error-20`          |
| `--sf-on-error-container`         | `--sf-error-10`          | `--sf-error-90`          |
| `--sf-on-error-container-graphic` | `--sf-error-50`          | `--sf-error-60`          |
| `--sf-outline-error`              | `--sf-error-50`          | `--sf-error-60`          |
{.table}

[image13]: /assets/build/img/b64/f686dd417f8a6496.png
[image14]: /assets/build/img/b64/2b6d33f495587919.png
