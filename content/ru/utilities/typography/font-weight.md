---
title: "Толщина шрифта"
description: "Задаёт толщину начертания текста по шкале от 100 до 900 или относительно родителя."
---

# Толщина шрифта

Классы задают толщину начертания: `weight-1` … `weight-9` по шкале от 100 до
900, `regular` и `bold` — обычное и жирное, `lighter` и `bolder` — на шаг
тоньше или жирнее родителя. Берите их для заголовков, акцентов и подписей.

## Пример

### Шкала

Подпись над образцом — класс, который на нём стоит. Начертание видно, если
шрифт его поддерживает.

:::example {id="utilities/typography/font-weight" label="weight-1 … weight-9"}
:::

### Именованные и относительные

`bolder` и `lighter` меняют толщину относительно родителя.

:::example {id="utilities/typography/font-weight-relative" label="regular, bold, bolder, lighter"}
:::

### Ширина экрана и наведение

Меняйте ширину окна просмотра: начиная с ширины `md` первый образец
становится жирным. Наведите указатель на второй.

:::example {id="utilities/typography/font-weight-conditions" label="md: и hover:"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `regular` | `font-weight: normal` | — |
| `bold` | `font-weight: bold` | — |
| `lighter` | `font-weight: lighter` | — |
| `bolder` | `font-weight: bolder` | — |
| `weight-1` | `font-weight: 100` | — |
| `weight-2` | `font-weight: 200` | — |
| `weight-3` | `font-weight: 300` | — |
| `weight-4` | `font-weight: 400` | — |
| `weight-5` | `font-weight: 500` | — |
| `weight-6` | `font-weight: 600` | — |
| `weight-7` | `font-weight: 700` | — |
| `weight-8` | `font-weight: 800` | — |
| `weight-9` | `font-weight: 900` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — `hover:`. Например: `sm:regular`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

| Класс | Толщина |
|:---|:---|
| `weight-3` | 300, тонкий — крупные цифры и заголовки |
| `weight-4`, `regular` | 400, обычный текст |
| `weight-5` | 500, средний — подписи, кнопки |
| `weight-6` | 600, полужирный — подзаголовки |
| `weight-7`, `bold` | 700, жирный — заголовки, акцент |

```html
<h2 class="weight-6">Подзаголовок</h2>
<p>Итого: <span class="weight-7">12 400 ₽</span></p>
```

Для одной и той же роли держите одну ступень по всему интерфейсу:
сочетание толщины и размера задаёт иерархию.

## Ограничения

- Браузер показывает только начертания, которые есть у шрифта. Промежуточная
  ступень, которой у шрифта нет, совпадает с ближайшей.
- `hover:` меняет толщину и вместе с ней ширину текста: соседние элементы
  могут сдвинуться.

## См. также

- [Типографика](/ru/guide/fundamentals/typography/)
- [Размер текста](/ru/utilities/typography/text-size/)
