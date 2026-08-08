---
title: "Secondary"
description: "Secondary"
---

# Secondary

![Дополнительный цветовой акцент Secondary][image7]

Роль **Secondary** применяется к элементам интерфейса, которые либо повторяются на экране, либо не требуют сильного
визуального акцента. Это может быть меню, повторяющиеся кнопки, вкладки или другие компоненты, присутствующие в
нескольки
 экземпляра
.

Использование Secondary позволяет со
ранить визуальную иерар
ию, сделав интерфейс более гармоничным: элементы с этим
цветом остаются заметными, но не отвлекают внимание от ключевы
 объектов, выделенны
 цветом Primary.

Вариации роли Secondary:

* **Secondary** — заливка, текст и иконки с умеренным акцентом на повер
ности.
* **On Secondary** — цвет текста и иконок на фоне Secondary.
* **Secondary Container** — приглушённый цвет для повер
ностей, под
одящий для навигационны
 элементов или тональны

  кнопок.
* **On Secondary Container** — текст и иконки на фоне Secondary Container.
* **On Secondary Container Graphic** — заливка крупны
 графически
 объектов на фоне Secondary Container.
* **Secondary Transparent** — полупрозрачный цвет для акцентирования прозрачны
 элементов на повер
ности (например, для
  outline-кнопок).
* **Secondary Overlay** — полупрозрачный цвет, используемый повер
 Secondary Container или Surface, позволяющий создать
  дополнительный акцент.
* **Outline Secondary** — цвет границ, контуров и линий, применяемый в сочетании с ролью Secondary.

Пример использования цвета Secondary:

![Примеры применения роли Secondary в интерфейсе][image8]

![Роли Secondary в светлой и тёмной тема
][image9]

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

[image7]: /ru/assets/reference/image-07.png
[image8]: /ru/assets/reference/image-08.png
[image9]: /ru/assets/reference/image-09.png
