---
title: "Наклон"
description: "Скашивает элемент вдоль горизонтальной или вертикальной оси на угол от 1° до 15°."
---

# Наклон

Классы `skew-x-*` и `skew-y-*` скашивают элемент: `x` наклоняет
вертикальные стороны, `y` — горизонтальные. Берите их для декоративных
плашек, лент и динамичных акцентов.

## Пример

### По горизонтали

Пунктир — элемент без наклона. Подпись — класс.

:::example {id="utilities/transform/transform-skew" label="Наклон по оси x"}
:::

### По вертикали

:::example {id="utilities/transform/transform-skew-y" label="Наклон по оси y"}
:::

### При наведении

Префикс `hover:` наклоняет элемент, пока над ним указатель. Наведите
указатель на образцы; плавность даёт класс `transition-transform`.

:::example {id="utilities/transform/transform-skew-hover" label="Наклон при наведении"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `skew-x-0` | `transform: skewX(0deg)` | — |
| `skew-y-0` | `transform: skewY(0deg)` | — |
| `skew-x-1` | `transform: skewX(1deg)` | — |
| `skew-y-1` | `transform: skewY(1deg)` | — |
| `skew-x-2` | `transform: skewX(2deg)` | — |
| `skew-y-2` | `transform: skewY(2deg)` | — |
| `skew-x-3` | `transform: skewX(3deg)` | — |
| `skew-y-3` | `transform: skewY(3deg)` | — |
| `skew-x-5` | `transform: skewX(5deg)` | — |
| `skew-y-5` | `transform: skewY(5deg)` | — |
| `skew-x-15` | `transform: skewX(15deg)` | — |
| `skew-y-15` | `transform: skewY(15deg)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:skew-x-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Выбор угла

Число в имени класса — угол в градусах: `0`, `1`, `2`, `3`, `5`, `15`.
Мелкие углы дают едва заметную динамику, `15` — выраженный скос.

### Скошенная плашка с прямым текстом

Наклон действует и на содержимое. Чтобы текст остался прямым, скашивают
только фон — отдельный элемент под текстом:

```html
<span class="relative inline-block p-1">
  <span class="absolute inset-0 bg-primary skew-x-15"></span>
  <span class="relative color-on-primary">Новинка</span>
</span>
```

## Ограничения

- Классы поворота, масштаба, наклона и смещения задают одно свойство
  `transform` целиком, поэтому на одном элементе действует только один из
  них: `rotate-45 scale-2` не повернёт и не увеличит элемент одновременно.
  Сочетаются только смещения по `x` и `y` между собой.
- Трансформация не меняет раскладку: соседние элементы остаются на местах, а
  увеличенный или повёрнутый элемент может перекрыть их.
- Отрицательных углов нет.
- Из префиксов есть только `hover:`; префиксов ширины экрана нет.

## См. также

- [Вращение](/ru/utilities/transform/transform-rotate/)
- [Точка трансформации](/ru/utilities/transform/transform-origin/)
