---
extends: _core._layouts.documentation
section: content
title: "Масштабирование (transform-scale)"
description: "Масштабирование (transform-scale)"
---

# Масштабирование (transform-scale)

[https://dev.ru.simai.io/ru/ui/utility/transform/transform-scale.php](https://dev.ru.simai.io/ru/ui/utility/transform/transform-scale.php)

С помощью модификаторов масштабирования `transform-scale` в SIMAI Framework вы можете изменять размер (увеличение или
уменьшение) элементов. Это удобно для создания эффектов при наведении курсора (hover) или для адаптации размеров
элементов без ручного переопределения стилей.

## Классы и их значения

| Класс        | Значение                |
|:-------------|:------------------------|
| .scale-0     | transform: scale(0)     |
| .scale-x-0   | transform: scaleX(0)    |
| .scale-y-0   | transform: scaleY(0)    |
| .scale-1/4   | transform: scale(0.8)   |
| .scale-x-1/4 | transform: scaleX(0.8)  |
| .scale-y-1/4 | transform: scaleY(0.8)  |
| .scale-1/3   | transform: scale(0.9)   |
| .scale-x-1/3 | transform: scaleX(0.9)  |
| .scale-y-1/3 | transform: scaleY(0.9)  |
| .scale-1/2   | transform: scale(0.95)  |
| .scale-x-1/2 | transform: scaleX(0.95) |
| .scale-y-1/2 | transform: scaleY(0.95) |
| .scale-1     | transform: scale(1)     |
| .scale-x-1   | transform: scaleX(1)    |
| .scale-y-1   | transform: scaleY(1)    |
| .scale-2     | transform: scale(1.05)  |
| .scale-x-2   | transform: scaleX(1.05) |
| .scale-y-2   | transform: scaleY(1.05) |
| .scale-3     | transform: scale(1.1)   |
| .scale-x-3   | transform: scaleX(1.1)  |
| .scale-y-3   | transform: scaleY(1.1)  |
| .scale-4     | transform: scale(1.2)   |
| .scale-x-4   | transform: scaleX(1.2)  |
| .scale-y-4   | transform: scaleY(1.2)  |

{.table}

## Описание

Данные модификаторы задают степень масштабирования элемента. Нормальным размером считается `scale-1` (без изменений). Вы
можете как уменьшать, так и увеличивать элемент, используя дробные значения для более тонкой подстройки. При
использовании вместе с псевдоклассом `hover` вы можете создавать эффекты наведения, увеличивая или уменьшая элементы при
поднесении курсора.

## Синтаксис

- `scale-{числовое значение}` – задать степень масштабирования.
- `scale-x-{числовое значение}` – задать масштабирование только по оси X.
- `scale-y-{числовое значение}` – задать масштабирование только по оси Y.
- `hover:scale-{числовое значение}` – задать масштабирование при наведении курсора.

## Пример использования

```html
<img class="scale-1/4 hover:scale-1 transition ease-in-out ... " src="image.jpg" alt="Пример изображения">

<img class="scale-1 hover:scale-4 transition ease-in-out ... " src="image.jpg" alt="Пример изображения">

<img class="scale-3 hover:scale-2 transition ease-in-out ... " src="image.jpg" alt="Пример изображения">
```

## Замена с предыдущей версии

| Старый класс       | Новый класс |
|:-------------------|:------------|
| .scale-1, .scale-2 | .scale-1/4  |
| .scale-3           | .scale-1/3  |
| .scale-4           | .scale-1/2  |
| .scale-5           | .scale-1    |
| .scale-6           | .scale-2    |
| .scale-7           | .scale-3    |
| .scale-8, .scale-9 | .scale-4    |

{.table}
