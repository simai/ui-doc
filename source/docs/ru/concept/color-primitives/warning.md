---
extends: _core._layouts.documentation
section: content
title: Warning
description: Warning
---

# Warning

Роль **Warning** используется для привлечения внимания к потенциально опасным или критичным, но ещё не возникшим
проблемам. Цветовая гамма этой роли поможет пользователю вовремя заметить предостережение и отреагировать на него до
появления ошибок.

Вариации роли Warning:

* **Warning** — заливки, текст и иконки с ярким акцентом, указывающим на необходимость проявить внимание.
* **On Warning** — текст и иконки, оптимально заметные на фоне цвета Warning.
* **Warning Container** — приглушённая заливка, используемая для подсветки областей с предупреждениями или тональных
  элементов интерфейса.
* **On Warning Container** — текст и иконки на фоне Warning Container.
* **On Warning Container Graphic** — заливка крупных графических объектов на фоне Warning Container.
* **Warning Transparent** — полупрозрачный цвет для выделения интерактивных элементов с прозрачным фоном при наведении (
  например, для outline-кнопок).
* **Outline Warning** — цвет для контуров, границ или разделителей, связанных с предупреждающими элементами.  
  Пример использования роли Warning:

![][image15]

![][image16]

Для работы с ролью warning используются следующие переменные:

| Переменная                          | Значение (light)           | Значение (dark)            |
|:------------------------------------|:---------------------------|:---------------------------|
| `--sf-warning`                      | `--sf-warning-40`          | `--sf-warning-80`          |
| `--sf-warning-hover`                | `--sf-warning-35`          | `--sf-warning-85`          |
| `--sf-warning-active`               | `--sf-warning-30`          | `--sf-warning-90`          |
| `--sf-warning-container`            | `--sf-warning-90`          | `--sf-warning-30`          |
| `--sf-warning-container-hover`      | `--sf-warning-85`          | `--sf-warning-35`          |
| `--sf-warning-container-active`     | `--sf-warning-80`          | `--sf-warning-40`          |
| `--sf-warning-transparent-hover`    | `--sf-warning-50--alfa-4`  | `--sf-warning-90--alfa-4`  |
| `--sf-warning-transparent-select`   | `--sf-warning-50--alfa-8`  | `--sf-warning-90--alfa-8`  |
| `--sf-warning-transparent-active`   | `--sf-warning-50--alfa-12` | `--sf-warning-90--alfa-12` |
| `--sf-warning-transparent-overlay`  | `--sf-warning-50--alfa-24` | `--sf-warning-90--alfa-24` |
| `--sf-on-warning`                   | `--sf-white`               | `--sf-warning-20`          |
| `--sf-on-warning-container`         | `--sf-warning-10`          | `--sf-warning-90`          |
| `--sf-on-warning-container-graphic` | `--sf-warning-50`          | `--sf-warning-60`          |
| `--sf-outline-warning`              | `--sf-warning-50`          | `--sf-warning-60`          |
{.table}

[image15]: /assets/build/img/b64/faa5487eac403f05.png
[image16]: /assets/build/img/b64/75051c00915713c5.png
