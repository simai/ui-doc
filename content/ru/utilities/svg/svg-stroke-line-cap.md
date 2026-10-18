---
title: "Концы обводки"
description: "Задаёт форму концов незамкнутой линии SVG: срезанную, круглую или квадратную."
---

# Концы обводки

Классы `linecap-*` задают `stroke-linecap` — форму концов незамкнутых линий
SVG. Берите `linecap-round` для мягких линейных значков.

## Пример

### Формы

Красные линии отмечают, где заканчивается путь.

:::example {id="utilities/svg/svg-stroke-line-cap" label="Формы концов обводки"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `linecap-butt` | `stroke-linecap: butt` | — |
| `linecap-round` | `stroke-linecap: round` | — |
| `linecap-square` | `stroke-linecap: square` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Какую форму выбрать

| Класс | Конец линии |
| :--- | :--- |
| `linecap-butt` | срезан точно по концу пути — значение по умолчанию |
| `linecap-round` | скруглён и выступает на половину толщины |
| `linecap-square` | квадратный и выступает на половину толщины |

```html
<svg class="svg-3 fill-transparent stroke-current stroke-2 linecap-round linejoin-round" viewBox="0 0 24 24" aria-hidden="true">…</svg>
```

Свойство наследуется: класс на `<svg>` действует на все линии внутри.

## Ограничения

- Форма концов видна только у незамкнутых линий; у замкнутого контура
  концов нет.
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Углы обводки](/ru/utilities/svg/svg-stroke-line-join/)
- [Толщина обводки](/ru/utilities/svg/svg-stroke-width/)
