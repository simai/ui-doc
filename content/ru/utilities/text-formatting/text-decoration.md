---
title: "Линии оформления текста"
description: "Подчёркивает, надчёркивает или зачёркивает текст и убирает линию, например у ссылки."
---

# Линии оформления текста

Классы задают линию оформления текста: подчёркивание, линию над текстом,
зачёркивание или её отсутствие. Берите их, чтобы убрать подчёркивание у
ссылки, показать его только при наведении или отметить неактуальное значение.

## Пример

### Виды линий

Подпись над образцом — класс, который на нём стоит.

:::example {id="utilities/text-formatting/text-decoration" label="underline, overline, line-through, decoration-none"}
:::

### Состояния

Префикс применяет линию только в состоянии. Наведите указатель на первую
ссылку, переведите фокус на вторую клавишей Tab, нажмите и удерживайте третью.

:::example {id="utilities/text-formatting/text-decoration-states" label="hover:, focus: и active:"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `underline` | `text-decoration-line: underline` | — |
| `overline` | `text-decoration-line: overline` | — |
| `line-through` | `text-decoration-line: line-through` | — |
| `decoration-none` | `text-decoration-line: none` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `active:`, `focus:`, `hover:`. Например: `active:underline`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

Класс задаёт только вид линии. Цвет, стиль, толщину и смещение линии задают
отдельные классы — их добавляют к элементу, у которого линия уже есть:

```html
<a class="decoration-none hover:underline" href="/ru/">Документация</a>
<p class="underline decoration-wavy decoration-error decoration-2">Слово с ошибкой</p>
<span class="line-through color-on-surface-variant">1 990 ₽</span>
```

`decoration-none` убирает линию с самого элемента. Линию, которую нарисовал
предок, класс у потомка не убирает: снимите её на предке.

## Ограничения

- Классы `underline`, `overline` и `line-through` не складываются: каждый
  задаёт `text-decoration-line` целиком, и действует последний по каскаду.
- Подчёркивание — привычный признак ссылки. Убирая его у ссылки в тексте,
  оставьте другой заметный признак: цвет и подчёркивание при наведении и
  фокусе.

## См. также

- [Цвет линий оформления](/ru/utilities/text-formatting/text-decoration-color/)
- [Стиль линий оформления](/ru/utilities/text-formatting/text-decoration-style/)
- [Толщина оформления текста](/ru/utilities/text-formatting/text-formatting-thickness/)
- [Смещение линий оформления](/ru/utilities/text-formatting/text-decoration-offset/)
- [Ссылки](/ru/utilities/links/links-formatting/)
