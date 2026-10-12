---
title: "Начертание цифр"
description: "Включает особые начертания цифр шрифта: моноширинные цифры, дроби, перечёркнутый ноль и другие."
---

# Начертание цифр

Классы `num-*` включают OpenType-возможности шрифта для цифр. Берите
`num-tabular` для чисел в таблицах и счётчиках, чтобы разряды стояли друг
под другом, а остальные — для дробей, порядковых числительных и кода.

## Пример

### Начертания

Подпись над образцом — класс, который на нём стоит. Образец меняется, только
если шрифт поддерживает эту возможность.

:::example {id="utilities/typography/font-variant-numeric" label="Начертания цифр"}
:::

### Пропорциональные и моноширинные цифры

У `num-tabular` все цифры одной ширины, и разряды в столбце совпадают.

:::example {id="utilities/typography/font-variant-numeric-tabular" label="num-proportional и num-tabular"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `num-ordinal` | `font-feature-settings: var(--sf-text-num-ordinal); font-variant-numeric: var(--sf-text-num-ordinal)` | — |
| `num-slashed-zero` | `font-feature-settings: var(--sf-text-num-slashed-zero); font-variant-numeric: var(--sf-text-num-slashed-zero)` | — |
| `num-lining` | `font-feature-settings: var(--sf-text-num-lining); font-variant-numeric: var(--sf-text-num-lining)` | — |
| `num-oldstyle` | `font-feature-settings: var(--sf-text-num-oldstyle); font-variant-numeric: var(--sf-text-num-oldstyle)` | — |
| `num-proportional` | `font-feature-settings: var(--sf-text-num-proportional); font-variant-numeric: var(--sf-text-num-proportional)` | — |
| `num-tabular` | `font-feature-settings: var(--sf-text-num-tabular); font-variant-numeric: var(--sf-text-num-tabular)` | — |
| `num-diagonal` | `font-feature-settings: var(--sf-text-num-diagonal); font-variant-numeric: var(--sf-text-num-diagonal)` | — |
| `num-stacked-fractions` | `font-feature-settings: var(--sf-text-num-stacked-fractions); font-variant-numeric: var(--sf-text-num-stacked-fractions)` | — |
| `num-normal` | `font-feature-settings: var(--sf-text-num-normal); font-variant-numeric: var(--sf-text-num-normal)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

| Класс | Что включает |
|:---|:---|
| `num-tabular` | цифры одной ширины — для таблиц, цен, таймеров |
| `num-proportional` | цифры своей ширины — для текста |
| `num-lining` | цифры высотой с прописные буквы |
| `num-oldstyle` | цифры высотой со строчные, с выносными элементами |
| `num-slashed-zero` | ноль с чертой, отличимый от буквы O |
| `num-ordinal` | надстрочные окончания порядковых числительных (1st) |
| `num-diagonal` | дроби с косой чертой |
| `num-stacked-fractions` | дроби с горизонтальной чертой |
| `num-normal` | отключает особые начертания |

```html
<td class="text-end num-tabular">1 204,50</td>
```

## Ограничения

- Классы не складываются: каждый задаёт `font-variant-numeric` целиком, и
  действует последний по каскаду. Для сочетания, например моноширинных цифр с
  перечёркнутым нулём, объявите свой класс:

  ```css
  .num-code {
    font-variant-numeric: tabular-nums slashed-zero;
  }
  ```

- Начертание есть, только если оно есть в шрифте. Шрифт без нужной
  возможности показывает обычные цифры.
- У семейства нет префиксов ширины экрана и состояний.

## См. также

- [Семейство шрифтов](/ru/utilities/typography/font-family/)
- [Выравнивание текста](/ru/utilities/typography/text-align/)
