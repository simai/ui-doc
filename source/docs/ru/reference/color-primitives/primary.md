---
extends: _core._layouts.documentation
section: content
title: Primary
description: Primary
---

# Primary

![Основной цветовой акцент Primary][image4]

Роль **Primary** используется для самых заметных и важных элементов интерфейса, таких как кнопки с высоким приоритетом
или состояния активных элементов. Применение этого цвета оправдано, когда необходимо привлечь внимание пользователя к
определённому объекту или действию.

Не рекомендуется использовать Primary для множества повторяющихся элементов. Для этого лучше применить Secondary.
Primary должен быть редким, но выразительным акцентом, помогающим пользователю легко обнаруживать ключевые объекты на
экране.

Вариации роли Primary:

* **Primary** — основной цвет заливки, текста и иконок с высоким акцентом на поверхности.
* **On Primary** — цвет текста и иконок на фоне Primary.
* **Primary Container** — яркий фоновый цвет для ключевых компонентов, например, для FAB (Floating Action Button).
* **On Primary Container** — цвет текста и иконок на фоне Primary Container.
* **On Primary Container Graphic** — заливка крупных графических элементов на фоне Primary Container.
* **Primary Transparent** — полупрозрачный цвет для акцентирования прозрачных элементов на поверхности (например, кнопки
  с обводкой).
* **Primary Surface** — светлый цвет для акцентирования прозрачных элементов на поверхности (например, кнопки с
  обводкой).
* **Outline Primary** — цвет для границ, контуров и линий в оттенках Primary.

Пример использования цвета Primary

![Примеры применения роли Primary в интерфейсе][image5]

![Роли Primary в светлой и тёмной темах][image6]

Для работы с ролью Primary используются следующие переменные:

| Переменная                          | Значение (light)           | Значение (dark)            |
|:------------------------------------|:---------------------------|:---------------------------|
| `--sf-primary`                      | `--sf-primary-40`          | `--sf-primary-80`          |
| `--sf-primary-hover`                | `--sf-primary-35`          | `--sf-primary-85`          |
| `--sf-primary-active`               | `--sf-primary-30`          | `--sf-primary-90`          |
| `--sf-primary-container`            | `--sf-primary-90`          | `--sf-primary-30`          |
| `--sf-primary-container-hover`      | `--sf-primary-85`          | `--sf-primary-35`          |
| `--sf-primary-container-active`     | `--sf-primary-80`          | `--sf-primary-40`          |
| `--sf-primary-transparent-hover`    | `--sf-primary-50--alfa-4`  | `--sf-primary-90--alfa-4`  |
| `--sf-primary-transparent-select`   | `--sf-primary-50--alfa-8`  | `--sf-primary-90--alfa-8`  |
| `--sf-primary-transparent-active`   | `--sf-primary-50--alfa-12` | `--sf-primary-90--alfa-12` |
| `--sf-primary-transparent-overlay`  | `--sf-primary-50--alfa-24` | `--sf-primary-90--alfa-24` |
| `--sf-on-primary`                   | `--sf-white`               | `--sf-primary-20`          |
| `--sf-on-primary-container`         | `--sf-primary-10`          | `--sf-primary-90`          |
| `--sf-on-primary-container-graphic` | `--sf-primary-50`          | `--sf-primary-60`          |
| `--sf-outline-primary`              | `--sf-primary-50`          | `--sf-primary-60`          |
{.table}

[image4]: /ru/assets/reference/image-04.png
[image5]: /ru/assets/reference/image-05.png
[image6]: /ru/assets/reference/image-06.png
