---
title: "Вид градиента"
description: "Рисует фоновый градиент: линейный по направлению или углу, радиальный или конический, на две или три точки."
---

# Вид градиента

Классы `bg-gradient-to-*` и `gr-*` рисуют фоновый градиент из цветов,
заданных классами `from-*`, `via-*`, `to-*` или `gr1-*`, `gr2-*`, `gr3-*`.
Берите `bg-gradient-to-*` для линейного перехода в заданную сторону, `gr-*` —
для линейного по углу, радиального и конического градиента. `bg-none`
убирает фоновое изображение.

## Пример

### Направление

Линейный градиент от `from-primary` к `to-tertiary` в восемь сторон.

:::example {id="utilities/background/background-gradient-type" label="bg-gradient-to-*"}
:::

### Вид и число точек

Цвета `gr1-primary gr2-tertiary gr3-warning`; классы с `-2` берут первые две
точки, с `-3` — все три.

:::example {id="utilities/background/background-gradient-type-kinds" label="gr-line, gr-radial и gr-conic"}
:::

### Угол

Линейный градиент `gr-line-*` идёт под углом из переменной
`--sf-gradient--angle`, по умолчанию `90deg` — слева направо.

:::example {id="utilities/background/background-gradient-type-angle" label="--sf-gradient--angle"}
:::

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте ширину
окна просмотра: градиент линейный, с ширины `md` — радиальный, с ширины `xl` —
конический.

:::example {id="utilities/background/background-gradient-type-responsive" label="Вид градиента по ширине экрана"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `bg-none` | `background-image: none` | — |
| `bg-gradient-to-t` | `background-image: linear-gradient(to top, var(--sf-gradient--color-1), var(--sf-gradient--color-1), var(--sf-gradient--color-1)); background-image: linear-gradient(to top, var(--sf-gradient--color-1), var(--sf-gradient--color-2, var(--sf-gradient--color-3, var(--sf-gradient--color-1))), var(--sf-gradient--color-3, var(--sf-gradient--color-2, var(--sf-gradient--color-1))))` | — |
| `bg-gradient-to-tr` | `background-image: linear-gradient(to top right, var(--sf-gradient--color-1), var(--sf-gradient--color-1), var(--sf-gradient--color-1)); background-image: linear-gradient(to top right, var(--sf-gradient--color-1), var(--sf-gradient--color-2, var(--sf-gradient--color-3, var(--sf-gradient--color-1))), var(--sf-gradient--color-3, var(--sf-gradient--color-2, var(--sf-gradient--color-1))))` | — |
| `bg-gradient-to-r` | `background-image: linear-gradient(to right, var(--sf-gradient--color-1), var(--sf-gradient--color-1), var(--sf-gradient--color-1)); background-image: linear-gradient(to right, var(--sf-gradient--color-1), var(--sf-gradient--color-2, var(--sf-gradient--color-3, var(--sf-gradient--color-1))), var(--sf-gradient--color-3, var(--sf-gradient--color-2, var(--sf-gradient--color-1))))` | — |
| `bg-gradient-to-br` | `background-image: linear-gradient(to bottom right, var(--sf-gradient--color-1), var(--sf-gradient--color-1), var(--sf-gradient--color-1)); background-image: linear-gradient(to bottom right, var(--sf-gradient--color-1), var(--sf-gradient--color-2, var(--sf-gradient--color-3, var(--sf-gradient--color-1))), var(--sf-gradient--color-3, var(--sf-gradient--color-2, var(--sf-gradient--color-1))))` | — |
| `bg-gradient-to-b` | `background-image: linear-gradient(to bottom, var(--sf-gradient--color-1), var(--sf-gradient--color-1), var(--sf-gradient--color-1)); background-image: linear-gradient(to bottom, var(--sf-gradient--color-1), var(--sf-gradient--color-2, var(--sf-gradient--color-3, var(--sf-gradient--color-1))), var(--sf-gradient--color-3, var(--sf-gradient--color-2, var(--sf-gradient--color-1))))` | — |
| `bg-gradient-to-bl` | `background-image: linear-gradient(to bottom left, var(--sf-gradient--color-1), var(--sf-gradient--color-1), var(--sf-gradient--color-1)); background-image: linear-gradient(to bottom left, var(--sf-gradient--color-1), var(--sf-gradient--color-2, var(--sf-gradient--color-3, var(--sf-gradient--color-1))), var(--sf-gradient--color-3, var(--sf-gradient--color-2, var(--sf-gradient--color-1))))` | — |
| `bg-gradient-to-l` | `background-image: linear-gradient(to left, var(--sf-gradient--color-1), var(--sf-gradient--color-1), var(--sf-gradient--color-1)); background-image: linear-gradient(to left, var(--sf-gradient--color-1), var(--sf-gradient--color-2, var(--sf-gradient--color-3, var(--sf-gradient--color-1))), var(--sf-gradient--color-3, var(--sf-gradient--color-2, var(--sf-gradient--color-1))))` | — |
| `bg-gradient-to-tl` | `background-image: linear-gradient(to top left, var(--sf-gradient--color-1), var(--sf-gradient--color-1), var(--sf-gradient--color-1)); background-image: linear-gradient(to top left, var(--sf-gradient--color-1), var(--sf-gradient--color-2, var(--sf-gradient--color-3, var(--sf-gradient--color-1))), var(--sf-gradient--color-3, var(--sf-gradient--color-2, var(--sf-gradient--color-1))))` | — |
| `gr-line-2` | `background-image: linear-gradient(var(--sf-gradient--angle), var(--sf-gradient--color-1), var(--sf-gradient--color-1)); background-image: linear-gradient(var(--sf-gradient--angle), var(--sf-gradient--color-1), var(--sf-gradient--color-2, var(--sf-gradient--color-3, var(--sf-gradient--color-1))))` | — |
| `gr-line-3` | `background-image: linear-gradient(var(--sf-gradient--angle), var(--sf-gradient--color-1), var(--sf-gradient--color-1), var(--sf-gradient--color-1)); background-image: linear-gradient(var(--sf-gradient--angle), var(--sf-gradient--color-1), var(--sf-gradient--color-2, var(--sf-gradient--color-1)), var(--sf-gradient--color-3, var(--sf-gradient--color-2, var(--sf-gradient--color-1))))` | — |
| `gr-radial-2` | `background-image: radial-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-1)); background-image: radial-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-2, var(--sf-gradient--color-3, var(--sf-gradient--color-1))))` | — |
| `gr-radial-3` | `background-image: radial-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-1), var(--sf-gradient--color-1)); background-image: radial-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-2, var(--sf-gradient--color-1)), var(--sf-gradient--color-3, var(--sf-gradient--color-2, var(--sf-gradient--color-1))))` | — |
| `gr-conic-2` | `background-image: conic-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-1)); background-image: conic-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-2, var(--sf-gradient--color-3, var(--sf-gradient--color-1))))` | — |
| `gr-conic-3` | `background-image: conic-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-1), var(--sf-gradient--color-1)); background-image: conic-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-2, var(--sf-gradient--color-1)), var(--sf-gradient--color-3, var(--sf-gradient--color-2, var(--sf-gradient--color-1))))` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:gr-line-2`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-gradient--color-1` | задаётся темой |
| `--sf-gradient--color-2` | задаётся темой |
| `--sf-gradient--color-3` | задаётся темой |
| `--sf-gradient--angle` | `90deg` |

## Применение

### Как выбрать

| Классы | Что рисует |
| :--- | :--- |
| `bg-gradient-to-t`, `-tr`, `-r`, `-br`, `-b`, `-bl`, `-l`, `-tl` | линейный переход в сторону или угол элемента |
| `gr-line-2`, `gr-line-3` | линейный переход под углом `--sf-gradient--angle` |
| `gr-radial-2`, `gr-radial-3` | переход от центра к краям |
| `gr-conic-2`, `gr-conic-3` | переход по кругу вокруг центра |
| `bg-none` | убирает фоновое изображение |

Классы `bg-gradient-to-*` подставляют недостающую точку, поэтому работают и с
двумя, и с тремя цветами. У `gr-*` число в имени — сколько точек берёт
градиент.

```html
<div class="bg-gradient-to-br from-primary via-tertiary to-warning h-f0"></div>
<div class="gr-radial-2 gr1-primary-container gr2-surface-0 h-f0"></div>
```

### Свой угол

Угол линейного градиента `gr-line-*` задают переменной в CSS проекта:

```css
.hero {
  --sf-gradient--angle: 135deg;
}
```

## Ограничения

- Без цвета начальной точки (`from-*` или `gr1-*`) градиент не рисуется.
- Префиксы ширины экрана есть у `gr-*`; у `bg-gradient-to-*` и `bg-none` их
  нет.
- Классы градиента задают `background-image` и заменяют фоновую картинку того
  же элемента.

## См. также

- [Точки градиента](/ru/utilities/background/background-gradient-stops/)
- [Градиент фона](/ru/utilities/background/background-gradient-background/)
- [Обрезка фона](/ru/utilities/background/background-clip/)
