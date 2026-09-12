---
title: "Соотношение сторон"
description: "Задаёт стабильные пропорции изображений, видео и других элементов."
tags: [aspect-ratio, sm, md, lg, xl, xxl]
---

# Соотношение сторон

:badge[aspect-ratio]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1} :badge[xxl]{type=tonal scheme=neutral size=1}

Утилиты `aspect-{width}x{height}` задают пропорции элемента. Они помогают сохранять форму изображений, видео,
карточек и других областей при изменении доступной ширины.

## Пример

Все фигуры ниже имеют одинаковую ширину, поэтому различие создаёт только выбранное соотношение сторон.

:::example {id="utilities/layout/aspect-ratio" label="Основные пропорции"}
:::

## Классы

| Класс          | Значение                  | Форма                         |
|:---------------|:--------------------------|:------------------------------|
| `aspect-1x1`   | `aspect-ratio: 1 / 1;` | Квадрат                       |
| `aspect-1x2`   | `aspect-ratio: 1 / 2;` | Высокий прямоугольник         |
| `aspect-2x1`   | `aspect-ratio: 2 / 1;` | Широкий прямоугольник         |
| `aspect-2x3`   | `aspect-ratio: 2 / 3;` | Книжная ориентация            |
| `aspect-3x1`   | `aspect-ratio: 3 / 1;` | Панорамная область            |
| `aspect-3x2`   | `aspect-ratio: 3 / 2;` | Альбомная фотография          |
| `aspect-3x4`   | `aspect-ratio: 3 / 4;` | Вертикальная фотография       |
| `aspect-4x1`   | `aspect-ratio: 4 / 1;` | Широкая панорамная область    |
| `aspect-4x3`   | `aspect-ratio: 4 / 3;` | Классический экран            |
| `aspect-16x9`  | `aspect-ratio: 16 / 9;` | Широкоформатное видео         |
| `aspect-9x16`  | `aspect-ratio: 9 / 16;` | Вертикальное видео            |

## Как использовать

Добавьте класс с подходящими пропорциями. Ширину или высоту задайте отдельно — второй размер браузер вычислит из
`aspect-ratio`.

```html
<img class="w-full aspect-1x1 object-cover" src="avatar.jpg" alt="">
<video class="w-full aspect-16x9" controls></video>
```

`aspect-ratio` задаёт предпочтительную пропорцию. Чтобы браузер мог рассчитать форму, хотя бы один размер элемента
должен оставаться автоматическим. Содержимое и ограничения минимального размера также могут повлиять на итоговую
геометрию.

## Адаптивность

Префиксы `sm:`, `md:`, `lg:`, `xl:` и `xxl:` изменяют пропорцию начиная с соответствующей контрольной точки. Например,
`aspect-1x1 sm:aspect-16x9` показывает квадрат на узком экране и широкоформатную область начиная с `sm`.

## Адаптивный пример

:::example {id="utilities/layout/aspect-ratio-responsive" label="Адаптивная пропорция"}
:::

```html
<div class="w-full aspect-1x1 sm:aspect-16x9"></div>
```
