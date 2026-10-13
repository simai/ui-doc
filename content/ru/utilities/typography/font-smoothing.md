---
title: "Сглаживание шрифтов"
description: "Выбирает способ сглаживания шрифта в macOS: по оттенкам серого или как задаёт система."
---

# Сглаживание шрифтов

Классы задают сглаживание шрифта в браузерах macOS. Берите `antialiased`
для светлого текста на тёмном фоне: со сглаживанием по оттенкам серого
он выглядит тоньше и не расплывается.

## Пример

Один и тот же светлый текст на тёмном фоне. Разницу видно в браузерах macOS;
в других системах образцы одинаковы.

:::example {id="utilities/typography/font-smoothing" label="antialiased и smoothing"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `antialiased` | `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale` | — |
| `smoothing` | `-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

`antialiased` включает сглаживание по оттенкам серого, `smoothing` возвращает
способ, который выбирает браузер. Класс наследуется, поэтому его ставят на
контейнер — например, на тёмную панель:

```html
<aside class="bg-surface-inverse color-on-surface-inverse antialiased">…</aside>
```

## Ограничения

- Свойства `-webkit-font-smoothing` и `-moz-osx-font-smoothing` действуют
  только в macOS. В Windows, Linux, iOS и Android классы ничего не меняют.
- У семейства нет префиксов ширины экрана и состояний.

## См. также

- [Толщина шрифта](/ru/utilities/typography/font-weight/)
