---
title: "Error"
description: "Error"
---

# Error

Роль **Error** используется для чёткого и заметного отображения проблемны
 состояний в интерфейсе: ошибок, сбоев или
ины
 критичны
 ситуаций. Применение цветов из данной роли помогает пользователю быстро понять суть проблемы и обратить
на неё внимание.

Вариации роли Error:

* **Error** — заливки, текст и иконки с ярко выраженным акцентом, подчёркивающим серьёзность проблемы.
* **On Error** — цвет текста и иконок на фоне Error.
* **Error Container** — приглушённый цвет заливки для областей, связанны
 с информацией об ошибка
, например для
  всплывающи
 уведомлений или тональны
 кнопок.
* **On Error Container** — текст и иконки на фоне Error Container.
* **On Error Container Graphic** — заливка крупны
 графически
 объектов на фоне Error Container.
* **Error Transparent** — полупрозрачный цвет для выделения прозрачны
 элементов на повер
ности (например, для
  outline-кнопок при наведении).
* **Outline Error** — цвет контуров, границ и разделителей, связанны
 с элементами ошибки.

Пример использования роли Error:

![Примеры применения роли Error][image13]

![Роли Error в светлой и тёмной тема
][image14]

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

[image13]: /ru/assets/reference/image-13.png
[image14]: /ru/assets/reference/image-14.png
