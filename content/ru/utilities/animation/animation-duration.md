---
title: "Продолжительность анимации"
description: "Задаёт, сколько длится анимация появления: быстро, обычно или медленно — по токенам времени темы."
---

# Продолжительность анимации

Классы `animation-duration-*` задают длительность CSS-анимации по одному из
трёх токенов времени. Берите их вместе с классом
[`animation`](/ru/utilities/animation/animation-type/), когда появление
должно быть заметно быстрее или медленнее обычного.

## Пример

Одинаковое появление слева повторяется с тремя длительностями. Подпись —
класс длительности; на образцах также стоят `animation`,
`animation-from-left` и `infinite`.

:::example {id="utilities/animation/animation-duration" label="Три длительности анимации"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `animation-duration-fast` | `animation-duration: var(--sf-duration-fast)` | — |
| `animation-duration-normal` | `animation-duration: var(--sf-duration-normal)` | — |
| `animation-duration-slow` | `animation-duration: var(--sf-duration-slow)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-duration-fast` | `0.1S` |
| `--sf-duration-normal` | `0.3S` |
| `--sf-duration-slow` | `0.5S` |

## Применение

### Выбор длительности

| Класс | Токен | Значение |
| :--- | :--- | :--- |
| `animation-duration-fast` | `--sf-duration-fast` | 0,1 с |
| `animation-duration-normal` | `--sf-duration-normal` | 0,3 с |
| `animation-duration-slow` | `--sf-duration-slow` | 0,5 с |

`animation` уже длится `--sf-duration-normal`, поэтому
`animation-duration-normal` нужен только чтобы вернуть обычную длительность,
если её изменили выше. Короткая длительность подходит мелким элементам —
подсказкам, значкам; длинная — крупным блокам, которые проходят заметный путь.

```html
<div class="animation animation-from-bottom animation-duration-slow">
  Крупный блок
</div>
```

### Длительность для всего проекта

Классы читают токены времени. Чтобы ускорить или замедлить все анимации и
переходы проекта сразу, измените токены в теме, а не классы на элементах.

## Ограничения

- Классы меняют только CSS-анимации (`animation-duration`). Длительность
  переходов при наведении и фокусе задают классы
  [продолжительности перехода](/ru/utilities/animation/animation-transition-duration/).
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Тип анимации](/ru/utilities/animation/animation-type/)
- [Продолжительность перехода](/ru/utilities/animation/animation-transition-duration/)
