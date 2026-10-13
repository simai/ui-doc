---
title: "Паттерн фона"
description: "Заполняет фон элемента мелким узором из встроенного изображения — без отдельных файлов."
---

# Паттерн фона

Классы `pattern-1` … `pattern-9` заполняют фон элемента мелким узором:
полосками, клеткой или точками. Узор встроен в CSS и не требует файлов. Берите
эти классы для фактуры подложки, заглушки или декоративной полосы.

## Пример

### Узоры

Девять узоров на светлой подложке. Под каждым образцом — класс узора.

:::example {id="utilities/background/background-pattern" label="pattern-1 … pattern-9"}
:::

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте ширину
окна просмотра: узор меняется с ширины `md` и с ширины `xl`.

:::example {id="utilities/background/background-pattern-responsive" label="Узор по ширине экрана"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `pattern-1` | `background: url("data:image/svg+xml; utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%272%27 height=%272%27><rect x=%270%27 y=%270%27 width=%271%27 height=%272%27/></svg>")` | — |
| `pattern-2` | `background: url("data:image/svg+xml; utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%272%27 height=%272%27><rect x=%270%27 y=%270%27 width=%272%27 height=%271%27/></svg>")` | — |
| `pattern-3` | `background: url("data:image/svg+xml; utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%272%27 height=%272%27><rect x=%270%27 y=%270%27 width=%271%27 height=%271%27/></svg>")` | — |
| `pattern-4` | `background: url("data:image/svg+xml; utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%272%27 height=%272%27><rect x=%270%27 y=%271%27 width=%271%27 height=%271%27 /><rect x=%271%27 y=%270%27 width=%271%27 height=%271%27/></svg>")` | — |
| `pattern-5` | `background: url("data:image/svg+xml; utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%274%27><rect x=%270%27 y=%270%27 width=%271%27 height=%271%27 /><rect x=%271%27 y=%271%27 width=%271%27 height=%271%27 /><rect x=%272%27 y=%272%27 width=%271%27 height=%271%27 /><rect x=%273%27 y=%271%27 width=%271%27 height=%271%27 /><rect x=%271%27 y=%273%27 width=%271%27 height=%271%27 /><rect x=%273%27 y=%273%27 width=%271%27 height=%271%27 /></svg>")` | — |
| `pattern-6` | `background: url("data:image/svg+xml; utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%274%27><rect x=%270%27 y=%270%27 width=%271%27 height=%271%27 /></svg>")` | — |
| `pattern-7` | `background: url("data:image/svg+xml; utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%274%27><rect x=%270%27 y=%270%27 width=%272%27 height=%272%27 /></svg>")` | — |
| `pattern-8` | `background: url("data:image/svg+xml; utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%274%27><rect x=%270%27 y=%270%27 width=%273%27 height=%271%27/><rect x=%270%27 y=%272%27 width=%273%27 height=%271%27/><rect x=%270%27 y=%270%27 width=%271%27 height=%273%27/>><rect x=%272%27 y=%270%27 width=%271%27 height=%273%27/>><rect x=%272%27 y=%270%27 width=%271%27 height=%271%27/></svg>")` | — |
| `pattern-9` | `background: url("data:image/svg+xml; utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%274%27><rect x=%270%27 y=%270%27 width=%273%27 height=%273%27 /></svg>")` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:pattern-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

| Класс | Узор |
| :--- | :--- |
| `pattern-1` | вертикальные полоски через пиксель |
| `pattern-2` | горизонтальные полоски через пиксель |
| `pattern-3` | точки с шагом 2 пикселя |
| `pattern-4` | шахматная клетка в пиксель |
| `pattern-5` | шесть точек в плитке 4×4 пикселя |
| `pattern-6` | редкие точки с шагом 4 пикселя |
| `pattern-7` | квадраты 2×2 с шагом 4 пикселя |
| `pattern-8` | фигуры 3×3 из линий с шагом 4 пикселя |
| `pattern-9` | квадраты 3×3 с шагом 4 пикселя |

Узор рисуется чёрным поверх того, что лежит под элементом. Подложку задавайте
на родителе: класс узора сбрасывает цвет фона своего элемента.

```html
<div class="bg-white radius-1 overflow-hidden">
  <div class="pattern-4 h-e0"></div>
</div>
```

## Ограничения

- Цвет узора не настраивается и не меняется с темой; на тёмной подложке узор
  не виден.
- Класс задаёт свойство `background` целиком, поэтому цвет фона того же
  элемента не виден.
- У семейства нет префиксов состояния.

## См. также

- [Полосы](/ru/utilities/stripes/stripes/)
- [Повтор фона](/ru/utilities/background/background-repeat/)
