---
extends: _core._layouts.documentation
section: content
title: Success
description: Success
---

# Success

![][image17]

Роль **Success** предназначена для визуального оформления состояний, сигнализирующих об успешном завершении процесса или
достигнутой цели. Цветовая гамма роли Success помогает пользователям заметить позитивный результат и почувствовать
уверенность при взаимодействии с интерфейсом.

Вариации роли Success:

* **Success** — заливки, текст и иконки с ярким акцентом, указывающим на успешный результат.
* **On Success** — текст и иконки для оптимальной читаемости на фоне цвета Success.
* **Success Container** — приглушённая заливка, применяемая для навигационных элементов, тональных кнопок и других
  объектов, связанных с успешными состояниями.
* **On Success Container** — текст и иконки на фоне Success Container.
* **On Success Container Graphic** — заливка крупных графических объектов на фоне Success Container.
* **Success Transparent** — полупрозрачный цвет для выделения интерактивных элементов с прозрачным фоном при наведении (
  например, для outline-кнопок).
* **Outline Success** — цвет для контуров, границ или разделителей, связанных с успешными состояниями.

![][image18]

![][image19]

Для работы с ролью Success используются следующие переменные:

| Переменная                          | Значение (light)           | Значение (dark)            |
|:------------------------------------|:---------------------------|:---------------------------|
| `--sf-success`                      | `--sf-success-40`          | `--sf-success-80`          |
| `--sf-success-hover`                | `--sf-success-35`          | `--sf-success-85`          |
| `--sf-success-active`               | `--sf-success-30`          | `--sf-success-90`          |
| `--sf-success-container`            | `--sf-success-90`          | `--sf-success-30`          |
| `--sf-success-container-hover`      | `--sf-success-85`          | `--sf-success-35`          |
| `--sf-success-container-active`     | `--sf-success-80`          | `--sf-success-40`          |
| `--sf-success-transparent-hover`    | `--sf-success-50--alfa-4`  | `--sf-success-90--alfa-4`  |
| `--sf-success-transparent-select`   | `--sf-success-50--alfa-8`  | `--sf-success-90--alfa-8`  |
| `--sf-success-transparent-active`   | `--sf-success-50--alfa-12` | `--sf-success-90--alfa-12` |
| `--sf-success-transparent-overlay`  | `--sf-success-50--alfa-24` | `--sf-success-90--alfa-24` |
| `--sf-on-success`                   | `--sf-white`               | `--sf-success-20`          |
| `--sf-on-success-container`         | `--sf-success-10`          | `--sf-success-90`          |
| `--sf-on-success-container-graphic` | `--sf-success-50`          | `--sf-success-60`          |
| `--sf-outline-success`              | `--sf-success-50`          | `--sf-success-60`          |
{.table}

[image17]: /assets/build/img/b64/963cbfcfe6473fa1.png
[image18]: /assets/build/img/b64/118af2f57773428a.png
[image19]: /assets/build/img/b64/12d3d7bfba216e51.png
