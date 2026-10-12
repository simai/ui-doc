---
title: "Стиль линий оформления"
description: "Делает линию оформления текста сплошной, двойной, точечной, пунктирной или волнистой."
---

# Стиль линий оформления

Классы задают рисунок линии оформления текста. Берите их, чтобы отличить
особый вид подчёркивания: волнистую линию у ошибки, пунктир у термина с
подсказкой.

## Пример

Подчёркнутый текст с разным стилем линии. Подпись над образцом — класс,
который на нём стоит.

:::example {id="utilities/text-formatting/text-decoration-style" label="Стили линии"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `decoration-solid` | `text-decoration-style: solid` | — |
| `decoration-double` | `text-decoration-style: double` | — |
| `decoration-dotted` | `text-decoration-style: dotted` | — |
| `decoration-dashed` | `text-decoration-style: dashed` | — |
| `decoration-wavy` | `text-decoration-style: wavy` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

Стиль не рисует линию: добавьте класс к элементу с `underline`, `overline`,
`line-through` или к ссылке. По умолчанию линия сплошная, `decoration-solid`
возвращает этот стиль.

```html
<abbr class="underline decoration-dotted" title="Cascading Style Sheets">CSS</abbr>
<span class="underline decoration-wavy decoration-error">опечатка</span>
```

## Ограничения

- Тонкая точечная и пунктирная линии плохо видны: добавьте толщину
  `decoration-2` или больше.
- Рисунок линии не должен быть единственным признаком смысла.

## См. также

- [Линии оформления текста](/ru/utilities/text-formatting/text-decoration/)
- [Толщина оформления текста](/ru/utilities/text-formatting/text-formatting-thickness/)
- [Цвет линий оформления](/ru/utilities/text-formatting/text-decoration-color/)
