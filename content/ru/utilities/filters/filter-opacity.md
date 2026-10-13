---
title: "Прозрачность элемента"
description: "Делает элемент полупрозрачным через функцию opacity() свойства filter."
---

# Прозрачность элемента

Классы `filter-opacity-*` задают прозрачность элемента функцией `opacity()`
свойства `filter`. Видимый результат тот же, что у
[`opacity-*`](/ru/utilities/filters/opacity/); берите эти классы, только когда
нужна именно функция фильтра.

## Пример

### Шкала

Номер ступени — десятки процентов непрозрачности: `filter-opacity-3` — 30%, `filter-opacity-full` — 100%.

:::example {id="utilities/filters/filter-opacity" label="Ступени прозрачности"}
:::

### При наведении

Наведите указатель на изображение: оно становится непрозрачным.

:::example {id="utilities/filters/filter-opacity-hover" label="hover:filter-opacity-full"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `filter-opacity-1` | `filter: opacity(0.1)` | — |
| `filter-opacity-2` | `filter: opacity(0.2)` | — |
| `filter-opacity-3` | `filter: opacity(0.3)` | — |
| `filter-opacity-4` | `filter: opacity(0.4)` | — |
| `filter-opacity-5` | `filter: opacity(0.5)` | — |
| `filter-opacity-6` | `filter: opacity(0.6)` | — |
| `filter-opacity-7` | `filter: opacity(0.7)` | — |
| `filter-opacity-8` | `filter: opacity(0.8)` | — |
| `filter-opacity-9` | `filter: opacity(0.9)` | — |
| `filter-opacity-full` | `filter: opacity(1)` | — |
| `filter-opacity-0` | `filter: opacity(0)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:filter-opacity-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Шкала

| Класс | Непрозрачность |
| :--- | ---: |
| `filter-opacity-0` | 0 |
| `filter-opacity-1` … `filter-opacity-9` | 0.1 … 0.9 |
| `filter-opacity-full` | 1 |

### filter-opacity или opacity

Для интерфейса берите [`opacity-*`](/ru/utilities/filters/opacity/): у этих
классов те же ступени, они не занимают свойство `filter` и не мешают другим
фильтрам. `filter-opacity-*` подходит, когда прозрачность должна меняться
вместе с другими функциями фильтра в собственном CSS проекта.

```html
<img class="filter-opacity-3 hover:filter-opacity-full transition" src="photo.jpg" alt="Фотография">
```

## Ограничения

- Класс задаёт свойство `filter` целиком: с классом другого фильтра на том же
  элементе действует тот, чьё правило стоит в CSS позже.
- Прозрачный элемент занимает место и принимает щелчки. Чтобы он их не
  принимал, добавьте [`pointer-events-none`](/ru/utilities/forms/pointer-events/).
- Любое значение, в том числе `filter-opacity-full`, создаёт у элемента новый
  контекст наложения и содержащий блок для потомков с `position: fixed`.

## См. также

- [Прозрачность](/ru/utilities/filters/opacity/)
- [Прозрачность фона элемента](/ru/utilities/backdrop-filter/backdrop-opacity/)
