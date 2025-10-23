---
extends: _core._layouts.documentation
section: content
title: Secondary
description: Secondary
---

# Secondary

![][image7]

Роль **Secondary** применяется к элементам интерфейса, которые либо повторяются на экране, либо не требуют сильного
визуального акцента. Это может быть меню, повторяющиеся кнопки, вкладки или другие компоненты, присутствующие в
нескольких экземплярах.

Использование Secondary позволяет сохранить визуальную иерархию, сделав интерфейс более гармоничным: элементы с этим
цветом остаются заметными, но не отвлекают внимание от ключевых объектов, выделенных цветом Primary.

Вариации роли Secondary:

* **Secondary** — заливка, текст и иконки с умеренным акцентом на поверхности.
* **On Secondary** — цвет текста и иконок на фоне Secondary.
* **Secondary Container** — приглушённый цвет для поверхностей, подходящий для навигационных элементов или тональных
  кнопок.
* **On Secondary Container** — текст и иконки на фоне Secondary Container.
* **On Secondary Container Graphic** — заливка крупных графических объектов на фоне Secondary Container.
* **Secondary Transparent** — полупрозрачный цвет для акцентирования прозрачных элементов на поверхности (например, для
  outline-кнопок).
* **Secondary Overlay** — полупрозрачный цвет, используемый поверх Secondary Container или Surface, позволяющий создать
  дополнительный акцент.
* **Outline Secondary** — цвет границ, контуров и линий, применяемый в сочетании с ролью Secondary.

Пример использования цвета Secondary:

![][image8]

![][image9]

Для работы с ролью Secondary используются следующие переменные:

| Переменная                            | Значение (light)             | Значение (dark)              |
|:--------------------------------------|:-----------------------------|:-----------------------------|
| `--sf-secondary`                      | `--sf-secondary-40`          | `--sf-secondary-80`          |
| `--sf-secondary-hover`                | `--sf-secondary-35`          | `--sf-secondary-85`          |
| `--sf-secondary-active`               | `--sf-secondary-30`          | `--sf-secondary-90`          |
| `--sf-secondary-container`            | `--sf-secondary-90`          | `--sf-secondary-30`          |
| `--sf-secondary-container-hover`      | `--sf-secondary-85`          | `--sf-secondary-35`          |
| `--sf-secondary-container-active`     | `--sf-secondary-80`          | `--sf-secondary-40`          |
| `--sf-secondary-transparent-hover`    | `--sf-secondary-50--alfa-4`  | `--sf-secondary-90--alfa-4`  |
| `--sf-secondary-transparent-select`   | `--sf-secondary-50--alfa-8`  | `--sf-secondary-90--alfa-8`  |
| `--sf-secondary-transparent-active`   | `--sf-secondary-50--alfa-12` | `--sf-secondary-90--alfa-12` |
| `--sf-secondary-transparent-overlay`  | `--sf-secondary-50--alfa-24` | `--sf-secondary-90--alfa-24` |
| `--sf-on-secondary`                   | `--sf-white`                 | `--sf-secondary-20`          |
| `--sf-on-secondary-container`         | `--sf-secondary-10`          | `--sf-secondary-90`          |
| `--sf-on-secondary-container-graphic` | `--sf-secondary-50`          | `--sf-secondary-60`          |
| `--sf-outline-secondary`              | `--sf-secondary-50`          | `--sf-secondary-60`          |
{.table}

[image7]: /assets/build/img/b64/59f5d584a028fa16.png
[image8]: /assets/build/img/b64/f18b0b73f1e62795.png
[image9]: /assets/build/img/b64/4fded5d66908782d.png
