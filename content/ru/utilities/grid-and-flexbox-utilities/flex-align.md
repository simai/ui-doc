---
title: "Одновременное выравнивание по двум осям"
description: "Одним классом выравнивает элементы флекс-контейнера по основной и поперечной оси."
---

# Одновременное выравнивание по двум осям

Классы вида `{основная}-{поперечная}` — от `start-start` до `end-end` — задают
сразу `justify-content` и `align-items` флекс-контейнера. Первая часть имени —
положение вдоль основной оси, вторая — поперёк неё. Берите их вместо пары
`justify-*` и `items-cross-*`, когда элементы нужно просто прижать к углу,
краю или центру.

## Пример

### Девять положений

Флекс-контейнер заданной высоты с двумя элементами. Подпись над образцом —
класс контейнера.

:::example {id="utilities/grid-and-flexbox-utilities/flex-align" label="start-start … end-end"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `start-start` | `justify-content: flex-start; align-items: flex-start` | — |
| `start-center` | `justify-content: flex-start; align-items: center` | — |
| `start-end` | `justify-content: flex-start; align-items: flex-end` | — |
| `center-start` | `justify-content: center; align-items: flex-start` | — |
| `center-center` | `justify-content: center; align-items: center` | — |
| `center-end` | `justify-content: center; align-items: flex-end` | — |
| `end-start` | `justify-content: flex-end; align-items: flex-start` | — |
| `end-center` | `justify-content: flex-end; align-items: center` | — |
| `end-end` | `justify-content: flex-end; align-items: flex-end` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:start-start`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

| Класс | Основная ось (`justify-content`) | Поперечная ось (`align-items`) |
| :--- | :--- | :--- |
| `start-start`, `start-center`, `start-end` | у начала | у начала, в центре, у конца |
| `center-start`, `center-center`, `center-end` | в центре | у начала, в центре, у конца |
| `end-start`, `end-center`, `end-end` | у конца | у начала, в центре, у конца |

### Содержимое в центре

```html
<div class="flex center-center h-f0">
  <p>По центру блока</p>
</div>
```

Распределение места между элементами (`between`, `around`, `evenly`) задают
классы [`justify-*`](/ru/utilities/grid-and-flexbox-utilities/justify-content/).

## Ограничения

- Оси следуют направлению: при [`flex-col`](/ru/utilities/flex/flex-direction/)
  первая часть имени выравнивает по вертикали, вторая — по горизонтали.
- Начало строки следует направлению письма: при `dir="rtl"` `start-start`
  прижимает элементы к правому верхнему углу.
- Классы рассчитаны на флекс-контейнер. В сетке та же пара свойств
  располагает колонки и элементы в ячейках, и результат другой; для сетки
  берите [`items-*`](/ru/utilities/grid-and-flexbox-utilities/place-items/) и
  [`content-*`](/ru/utilities/grid-and-flexbox-utilities/place-content/).

## См. также

- [Выравнивание содержимого по основной оси](/ru/utilities/grid-and-flexbox-utilities/justify-content/)
- [Выравнивание каждого элемента в ячейках по поперечной оси](/ru/utilities/grid-and-flexbox-utilities/align-items/)
- [Направление размещения](/ru/utilities/flex/flex-direction/)
