---
extends: _core._layouts.documentation
section: content
title: "Исходные координаты (transform-origin)"
description: "Исходные координаты (transform-origin)"
---

# Исходные координаты (transform-origin)

[https://dev.ru.simai.io/ru/ui/utility/transform/transform-origin.php](https://dev.ru.simai.io/ru/ui/utility/transform/transform-origin.php)

С помощью модификаторов исходных координат `transform-origin` в SIMAI Framework вы можете определять точку, относительно
которой будет производиться трансформация элемента (например, поворот, масштабирование).

## Классы и их значения

| Класс                | Значение                        |
|:---------------------|:--------------------------------|
| .origin-center       | transform-origin: center;       |
| .origin-top          | transform-origin: top;          |
| .origin-top-right    | transform-origin: top right;    |
| .origin-right        | transform-origin: right;        |
| .origin-bottom-right | transform-origin: bottom right; |
| .origin-bottom       | transform-origin: bottom;       |
| .origin-bottom-left  | transform-origin: bottom left;  |
| .origin-left         | transform-origin: left;         |
| .origin-top-left     | transform-origin: top left;     |

{.table}

## Описание

Эти модификаторы задают исходную точку для преобразований элемента, определяя, относительно какой точки будет
происходить масштабирование, вращение или наклон. При использовании вместе с `hover:` можно изменять исходную точку при
наведении курсора, создавая динамичные и интересные эффекты.

## Синтаксис

- `origin-{позиция}` – установить исходную точку трансформации для элемента.
- `hover:origin-{позиция}` – изменить исходную точку трансформации при наведении.

## Пример использования

```html
<img class="origin-center rotate-3 transition ease-in-out ..." src="image.jpg" alt="Исходная точка по центру">
<img class="origin-top-left hover:rotate-4 transition ease-in-out ..." src="image.jpg"
     alt="Исходная точка в левом верхнем углу при наведении">
<img class="origin-bottom rotate-5 transition ease-in-out ..." src="image.jpg" alt="Исходная точка внизу">
```
