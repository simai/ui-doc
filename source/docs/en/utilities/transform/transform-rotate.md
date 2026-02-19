---
extends: _core._layouts.documentation
section: content
title: "Вращение (transform-rotate)"
description: "Вращение (transform-rotate)"
---

# Вращение (transform-rotate)


С помощью модификаторов вращения `transform-rotate` в SIMAI Framework вы можете поворачивать элементы на заданный угол.
Это удобно для создания анимаций или эффектов при наведении курсора (hover) без ручного переопределения стилей.

## Классы и их значения

| Класс       | Значение                  |
|:------------|:--------------------------|
| .rotate-0   | transform: rotate(0deg)   |
| .rotate-1   | transform: rotate(1deg)   |
| .rotate-2   | transform: rotate(2deg)   |
| .rotate-3   | transform: rotate(3deg)   |
| .rotate-5   | transform: rotate(5deg)   |
| .rotate-15  | transform: rotate(15deg)  |
| .rotate-45  | transform: rotate(45deg)  |
| .rotate-90  | transform: rotate(90deg)  |
| .rotate-180 | transform: rotate(180deg) |

{.table}

## Описание

Данные модификаторы задают угол поворота элемента. Используя их вместе с `hover:` вы можете создавать эффекты наведения,
поворачивая элемент при поднесении курсора. Нормальным (без изменений) является `rotate-0`.

## Синтаксис

- `rotate-{числовое значение в deg}` – задать угол поворота.
- `hover:rotate-{числовое значение в deg}` – задать угол поворота при наведении курсора.

## Пример использования

```html
<img class="rotate-0 hover:rotate-45 transition ease-in-out ..." src="image.jpg" alt="Изображение без поворота">

<img class="rotate-15 hover:rotate-90 transition ease-in-out ..." src="image.jpg" alt="Изображение с поворотом">
```

## Замена с предыдущей версии

| Старый класс | Новый класс |
|:-------------|:------------|
| .rotate-4    | .rotate-5   |
| .rotate-5    | .rotate-15  |
| .rotate-6    | .rotate-45  |
| .rotate-7    | .rotate-90  |
| .rotate-8    | .rotate-180 |

{.table}
