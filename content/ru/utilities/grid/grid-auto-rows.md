---
title: "Автоматический размер строк сетки"
description: "Задаёт высоту строк, которые сетка создаёт сама, без шаблона."
---

# Автоматический размер строк сетки

Классы `auto-rows-*` задают `grid-auto-rows` — высоту строк, которых нет в
шаблоне и которые сетка создаёт по мере того, как добавляются элементы. Берите
их, когда строки сетки должны быть одной высоты или не растягиваться на
высоту контейнера.

## Пример

### Высота строк

Сетка из трёх колонок на блоке заданной высоты; во втором элементе две строки
текста. Подпись над образцом — класс контейнера.

:::example {id="utilities/grid/grid-auto-rows" label="auto-rows, auto-rows-min, auto-rows-max, auto-rows-fr"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `auto-rows` | `grid-auto-rows: auto` | — |
| `auto-rows-min` | `grid-auto-rows: -webkit-min-content; grid-auto-rows: min-content` | — |
| `auto-rows-max` | `grid-auto-rows: -webkit-max-content; grid-auto-rows: max-content` | — |
| `auto-rows-fr` | `grid-auto-rows: minmax(0, 1fr)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:auto-rows`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `auto-rows` — по содержимому, а свободная высота контейнера делится между
  строками. Это значение по умолчанию.
- `auto-rows-min` и `auto-rows-max` — по содержимому без растягивания;
  свободная высота остаётся внизу.
- `auto-rows-fr` — строки равной высоты: самая высокая задаёт высоту всем.

### Карточки равной высоты

```html
<div class="grid grid-col-1 md:grid-col-3 auto-rows-fr gap-2">
  <article>Короткая карточка</article>
  <article>Карточка с длинным описанием в несколько строк</article>
  <article>Карточка</article>
</div>
```

## Ограничения

- Классы действуют только на строки вне шаблона
  [`grid-row-*`](/ru/utilities/grid/grid-template-rows/).

## См. также

- [Автоматическая ширина столбцов сетки](/ru/utilities/grid/grid-auto-columns/)
- [Шаблон строк сетки](/ru/utilities/grid/grid-template-rows/)
- [Автоматическое формирование сетки](/ru/utilities/grid/grid-auto-flow/)
