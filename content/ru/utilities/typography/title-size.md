---
title: "Размер заголовков"
description: "Задаёт размер заголовка с плотной высотой строки любому элементу."
---

# Размер заголовков

Классы `title-1` … `title-12` задают размер шрифта той же ступени, что и
`text-*`, но с более плотной высотой строки, рассчитанной на заголовки.
Берите их для заголовков в несколько строк и для элементов, которые выглядят
как заголовок, но не являются им по смыслу.

## Пример

### Шкала

Подпись слева — класс образца.

:::example {id="utilities/typography/title-size" label="title-1 … title-12"}
:::

### Сравнение с размером текста

Одинаковый размер шрифта; у `title-5` строки стоят плотнее.

:::example {id="utilities/typography/title-size-compare" label="text-5 и title-5"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `title-1` | `font-size: var(--sf-text--size-1); line-height: var(--sf-title--height-1)` | — |
| `title-2` | `font-size: var(--sf-text--size-2); line-height: var(--sf-title--height-2)` | — |
| `title-3` | `font-size: var(--sf-text--size-3); line-height: var(--sf-title--height-3)` | — |
| `title-4` | `font-size: var(--sf-text--size-4); line-height: var(--sf-title--height-4)` | — |
| `title-5` | `font-size: var(--sf-text--size-5); line-height: var(--sf-title--height-5)` | — |
| `title-6` | `font-size: var(--sf-text--size-6); line-height: var(--sf-title--height-6)` | — |
| `title-7` | `font-size: var(--sf-text--size-7); line-height: var(--sf-title--height-7)` | — |
| `title-8` | `font-size: var(--sf-text--size-8); line-height: var(--sf-title--height-8)` | — |
| `title-9` | `font-size: var(--sf-text--size-9); line-height: var(--sf-title--height-9)` | — |
| `title-10` | `font-size: var(--sf-text--size-10); line-height: var(--sf-title--height-10)` | — |
| `title-11` | `font-size: var(--sf-text--size-11); line-height: var(--sf-title--height-11)` | — |
| `title-12` | `font-size: var(--sf-text--size-12); line-height: var(--sf-title--height-12)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-text--size-1` | `var(--sf-b4); от ширины lg: var(--sf-b6)` |
| `--sf-title--height-1` | `var(--sf-b6); от ширины lg: var(--sf-b8)` |
| `--sf-text--size-2` | `var(--sf-b6); от ширины lg: var(--sf-c0)` |
| `--sf-title--height-2` | `var(--sf-b8); от ширины lg: var(--sf-c2)` |
| `--sf-text--size-3` | `var(--sf-b8); от ширины lg: var(--sf-c2)` |
| `--sf-title--height-3` | `var(--sf-c0); от ширины lg: var(--sf-c4)` |
| `--sf-text--size-4` | `var(--sf-c0); от ширины lg: var(--sf-c4)` |
| `--sf-title--height-4` | `var(--sf-c2); от ширины lg: var(--sf-c6)` |
| `--sf-text--size-5` | `var(--sf-c1); от ширины lg: var(--sf-c6)` |
| `--sf-title--height-5` | `var(--sf-c3); от ширины lg: var(--sf-c8)` |
| `--sf-text--size-6` | `var(--sf-c2); от ширины lg: var(--sf-c8)` |
| `--sf-title--height-6` | `var(--sf-c4); от ширины lg: var(--sf-d0)` |
| `--sf-text--size-7` | `var(--sf-c4); от ширины lg: var(--sf-d0)` |
| `--sf-title--height-7` | `var(--sf-c6); от ширины lg: var(--sf-d2)` |
| `--sf-text--size-8` | `var(--sf-c6); от ширины lg: var(--sf-d2)` |
| `--sf-title--height-8` | `var(--sf-c8); от ширины lg: var(--sf-d4)` |
| `--sf-text--size-9` | `var(--sf-c8); от ширины lg: var(--sf-d4)` |
| `--sf-title--height-9` | `var(--sf-d0); от ширины lg: var(--sf-d6)` |
| `--sf-text--size-10` | `var(--sf-d0); от ширины lg: var(--sf-d6)` |
| `--sf-title--height-10` | `var(--sf-d2); от ширины lg: var(--sf-d9)` |
| `--sf-text--size-11` | `var(--sf-d1); от ширины lg: var(--sf-d8)` |
| `--sf-title--height-11` | `var(--sf-d3); от ширины lg: var(--sf-e0)` |
| `--sf-text--size-12` | `var(--sf-d2); от ширины lg: var(--sf-e0)` |
| `--sf-title--height-12` | `var(--sf-d4); от ширины lg: var(--sf-e2)` |

## Применение

Элементы `h1` … `h6` уже получают размер по умолчанию: `h1` — как
`title-6`, `h2` — как `title-5` и так далее до `h6` — как `title-1`.
Уровень заголовка выбирайте по структуре документа, а размер меняйте классом:

```html
<h2 class="title-8 weight-7">Заголовок раздела на лендинге</h2>
<p class="title-3 weight-6">Подпись в виде заголовка</p>
```

Размер и высоту строки `h1` … `h6` задают токены `--sf-heading-{N}--size`
и `--sf-heading-{N}--height`; переопределите их в теме, чтобы изменить
заголовки во всём проекте. Классы `sf-h-1` … `sf-h-6` из базовых стилей
дают элементу вид заголовка соответствующего уровня целиком: размер,
шрифт, толщину и отступы.

## Ограничения

- Классы меняют только вид. Для программ чтения с экрана заголовок — это тег
  `h1` … `h6`, а не класс.
- У семейства нет префиксов ширины экрана и состояний.

## См. также

- [Размер текста](/ru/utilities/typography/text-size/)
- [Высота строки](/ru/utilities/typography/line-height/)
- [Типографика](/ru/guide/fundamentals/typography/)
