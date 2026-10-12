---
title: "Автоматическая ширина столбцов сетки"
description: "Задаёт ширину колонок, которые сетка создаёт сама, без шаблона."
---

# Автоматическая ширина столбцов сетки

Классы `auto-cols-*` задают `grid-auto-columns` — ширину колонок, которых нет
в шаблоне и которые сетка создаёт сама. Берите их вместе с `grid-flow-col`,
когда число колонок зависит от числа элементов: панель кнопок, ряд вкладок,
лента карточек.

## Пример

### Ширина колонок

Сетка с `grid-flow-col` без шаблона колонок: каждый элемент получает свою
колонку. Подпись над образцом — класс контейнера.

:::example {id="utilities/grid/grid-auto-columns" label="auto-cols, auto-cols-min, auto-cols-max, auto-cols-fr"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `auto-cols` | `grid-auto-columns: auto` | — |
| `auto-cols-min` | `grid-auto-columns: -webkit-min-content; grid-auto-columns: min-content` | — |
| `auto-cols-max` | `grid-auto-columns: -webkit-max-content; grid-auto-columns: max-content` | — |
| `auto-cols-fr` | `grid-auto-columns: minmax(0, 1fr)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:auto-cols`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `auto-cols` — по содержимому, а свободное место делится между колонками.
  Это значение по умолчанию.
- `auto-cols-min` — по самому длинному слову: текст переносится, колонки
  самые узкие.
- `auto-cols-max` — по тексту без переносов; свободное место остаётся.
- `auto-cols-fr` — колонки равной ширины, сколько бы их ни было.

### Кнопки равной ширины

```html
<div class="grid grid-flow-col auto-cols-fr gap-1">
  <button type="button">Назад</button>
  <button type="button">Сохранить черновик</button>
  <button type="button">Далее</button>
</div>
```

## Ограничения

- Классы действуют только на колонки вне шаблона: при `grid-col-*` они
  касаются колонок, которые элементы добавили справа от шаблона.

## См. также

- [Автоматическое формирование сетки](/ru/utilities/grid/grid-auto-flow/)
- [Автоматический размер строк сетки](/ru/utilities/grid/grid-auto-rows/)
- [Шаблон колонок сетки](/ru/utilities/grid/grid-template-columns/)
