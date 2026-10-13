---
title: "Размер текста"
description: "Задаёт размер шрифта вместе с высотой строки по шкале текста или по общей шкале размеров."
---

# Размер текста

Классы `text-*` задают размер шрифта и высоту строки одним классом. Шкала
текста `text-1/4` … `text-12` — основной выбор: `text-1` равен размеру
обычного текста. Классы общей шкалы `text-a0` … `text-i9` берите, когда
размер должен совпасть со ступенью размеров или меняться с шириной экрана.

## Пример

### Шкала текста

Подпись слева — класс образца.

:::example {id="utilities/typography/text-size" label="text-1/4 … text-12"}
:::

### Общая шкала размеров

У этих классов высота строки равна размеру шрифта — они рассчитаны на одну
строку.

:::example {id="utilities/typography/text-size-ext" label="text-b4 … text-d6"}
:::

### Ширина экрана

Меняйте ширину окна просмотра: заголовок увеличивается от ширины `md` и ещё
раз от ширины `lg`.

:::example {id="utilities/typography/text-size-responsive" label="text-c0 md:text-c8 lg:text-d6"}
:::

### Заголовок

Класс `heading` вместе с `text-1` … `text-12` заменяет высоту строки на более
плотную высоту заголовка той же ступени.

:::example {id="utilities/typography/text-size-heading" label="text-6 и text-6 heading"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `text-{значение}` | `font-size: var(--sf-text--size-{значение}); line-height: var(--sf-text--height-{значение})` | `1/4`, `1/3`, `1/2` |
| `text-{значение}` | `font-size: var(--sf-text--size-{значение}); line-height: var(--sf-text--height-{значение}); .text-{значение}.heading { line-height: var(--sf-title--height-{значение}) }` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `text-{значение}` | `font-size: var(--sf-{значение}); line-height: var(--sf-{значение})` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:text-a0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-text--size-1/4` | `0.625rem; от ширины lg: var(--sf-b0)` |
| `--sf-text--height-1/4` | `0.75rem; от ширины lg: var(--sf-b2)` |
| `--sf-text--size-1/3` | `0.75rem; от ширины lg: var(--sf-b2)` |
| `--sf-text--height-1/3` | `1rem; от ширины lg: var(--sf-b6)` |
| `--sf-text--size-1/2` | `0.75rem; от ширины lg: 0.875rem` |
| `--sf-text--height-1/2` | `1rem; от ширины lg: 1.25rem` |
| `--sf-text--size-1` | `var(--sf-b4); от ширины lg: var(--sf-b6)` |
| `--sf-text--height-1` | `var(--sf-c0); от ширины lg: var(--sf-c2)` |
| `--sf-text--size-2` | `var(--sf-b6); от ширины lg: var(--sf-c0)` |
| `--sf-text--height-2` | `var(--sf-c2); от ширины lg: var(--sf-c4)` |
| `--sf-text--size-3` | `var(--sf-b8); от ширины lg: var(--sf-c2)` |
| `--sf-text--height-3` | `var(--sf-c2); от ширины lg: var(--sf-c8)` |
| `--sf-text--size-4` | `var(--sf-c0); от ширины lg: var(--sf-c4)` |
| `--sf-text--height-4` | `var(--sf-c4); от ширины lg: var(--sf-d0)` |
| `--sf-text--size-5` | `var(--sf-c1); от ширины lg: var(--sf-c6)` |
| `--sf-text--height-5` | `var(--sf-c6); от ширины lg: var(--sf-d2)` |
| `--sf-text--size-6` | `var(--sf-c2); от ширины lg: var(--sf-c8)` |
| `--sf-text--height-6` | `var(--sf-c8); от ширины lg: var(--sf-d3)` |
| `--sf-text--size-7` | `var(--sf-c4); от ширины lg: var(--sf-d0)` |
| `--sf-text--height-7` | `var(--sf-d0); от ширины lg: var(--sf-d5)` |
| `--sf-text--size-8` | `var(--sf-c6); от ширины lg: var(--sf-d2)` |
| `--sf-text--height-8` | `var(--sf-d2); от ширины lg: var(--sf-d8)` |
| `--sf-text--size-9` | `var(--sf-c8); от ширины lg: var(--sf-d4)` |
| `--sf-text--height-9` | `var(--sf-d3); от ширины lg: var(--sf-e0)` |
| `--sf-text--size-10` | `var(--sf-d0); от ширины lg: var(--sf-d6)` |
| `--sf-text--height-10` | `var(--sf-d5); от ширины lg: var(--sf-e2)` |
| `--sf-text--size-11` | `var(--sf-d1); от ширины lg: var(--sf-d8)` |
| `--sf-text--height-11` | `var(--sf-d6); от ширины lg: var(--sf-e3)` |
| `--sf-text--size-12` | `var(--sf-d2); от ширины lg: var(--sf-e0)` |
| `--sf-text--height-12` | `var(--sf-d8); от ширины lg: var(--sf-e5)` |
| `--sf-title--height-1` | `var(--sf-b6); от ширины lg: var(--sf-b8)` |
| `--sf-title--height-2` | `var(--sf-b8); от ширины lg: var(--sf-c2)` |
| `--sf-title--height-3` | `var(--sf-c0); от ширины lg: var(--sf-c4)` |
| `--sf-title--height-4` | `var(--sf-c2); от ширины lg: var(--sf-c6)` |
| `--sf-title--height-5` | `var(--sf-c3); от ширины lg: var(--sf-c8)` |
| `--sf-title--height-6` | `var(--sf-c4); от ширины lg: var(--sf-d0)` |
| `--sf-title--height-7` | `var(--sf-c6); от ширины lg: var(--sf-d2)` |
| `--sf-title--height-8` | `var(--sf-c8); от ширины lg: var(--sf-d4)` |
| `--sf-title--height-9` | `var(--sf-d0); от ширины lg: var(--sf-d6)` |
| `--sf-title--height-10` | `var(--sf-d2); от ширины lg: var(--sf-d9)` |
| `--sf-title--height-11` | `var(--sf-d3); от ширины lg: var(--sf-e0)` |
| `--sf-title--height-12` | `var(--sf-d4); от ширины lg: var(--sf-e2)` |
| `--sf-a0` | `0rem` |
| `--sf-a1` | `0.0625rem` |
| `--sf-a2` | `0.125rem` |
| `--sf-a3` | `0.1875rem` |
| `--sf-a4` | `0.25rem` |
| `--sf-a5` | `0.3125rem` |
| `--sf-a6` | `0.375rem` |
| `--sf-a7` | `0.4375rem` |
| `--sf-a8` | `0.5rem` |
| `--sf-a9` | `0.5625rem` |
| `--sf-b0` | `0.625rem` |
| `--sf-b1` | `0.6875rem` |
| `--sf-b2` | `0.75rem` |
| `--sf-b3` | `0.8125rem` |
| `--sf-b4` | `0.875rem` |
| `--sf-b5` | `0.9375rem` |
| `--sf-b6` | `1rem` |
| `--sf-b7` | `1.0625rem` |
| `--sf-b8` | `1.125rem` |
| `--sf-b9` | `1.1875rem` |
| `--sf-c0` | `1.25rem` |
| `--sf-c1` | `1.375rem` |
| `--sf-c2` | `1.5rem` |
| `--sf-c3` | `1.625rem` |
| `--sf-c4` | `1.75rem` |
| `--sf-c5` | `1.875rem` |
| `--sf-c6` | `2rem` |
| `--sf-c7` | `2.125rem` |
| `--sf-c8` | `2.25rem` |
| `--sf-c9` | `2.375rem` |
| `--sf-d0` | `2.5rem` |
| `--sf-d1` | `2.75rem` |
| `--sf-d2` | `3rem` |
| `--sf-d3` | `3.25rem` |
| `--sf-d4` | `3.5rem` |
| `--sf-d5` | `3.75rem` |
| `--sf-d6` | `4rem` |
| `--sf-d7` | `4.25rem` |
| `--sf-d8` | `4.5rem` |
| `--sf-d9` | `4.75rem` |
| `--sf-e0` | `5rem` |
| `--sf-e1` | `5.5rem` |
| `--sf-e2` | `6rem` |
| `--sf-e3` | `6.5rem` |
| `--sf-e4` | `7rem` |
| `--sf-e5` | `7.5rem` |
| `--sf-e6` | `8rem` |
| `--sf-e7` | `8.5rem` |
| `--sf-e8` | `9rem` |
| `--sf-e9` | `9.5rem` |
| `--sf-f0` | `10rem` |
| `--sf-f1` | `11rem` |
| `--sf-f2` | `12rem` |
| `--sf-f3` | `13rem` |
| `--sf-f4` | `14rem` |
| `--sf-f5` | `15rem` |
| `--sf-f6` | `16rem` |
| `--sf-f7` | `17rem` |
| `--sf-f8` | `18rem` |
| `--sf-f9` | `19rem` |
| `--sf-g0` | `20rem` |
| `--sf-g1` | `22rem` |
| `--sf-g2` | `24rem` |
| `--sf-g3` | `26rem` |
| `--sf-g4` | `28rem` |
| `--sf-g5` | `30rem` |
| `--sf-g6` | `32rem` |
| `--sf-g7` | `34rem` |
| `--sf-g8` | `36rem` |
| `--sf-g9` | `38rem` |
| `--sf-h0` | `40rem` |
| `--sf-h1` | `44rem` |
| `--sf-h2` | `48rem` |
| `--sf-h3` | `52rem` |
| `--sf-h4` | `56rem` |
| `--sf-h5` | `60rem` |
| `--sf-h6` | `64rem` |
| `--sf-h7` | `68rem` |
| `--sf-h8` | `72rem` |
| `--sf-h9` | `76rem` |
| `--sf-i0` | `80rem` |
| `--sf-i1` | `88rem` |
| `--sf-i2` | `96rem` |
| `--sf-i3` | `104rem` |
| `--sf-i4` | `112rem` |
| `--sf-i5` | `120rem` |
| `--sf-i6` | `128rem` |
| `--sf-i7` | `136rem` |
| `--sf-i8` | `144rem` |
| `--sf-i9` | `152rem` |

## Применение

Ступени шкалы текста:

| Класс | Где |
|:---|:---|
| `text-1/4` … `text-1/2` | мелкие подписи, счётчики, сноски |
| `text-1` | обычный текст |
| `text-2` … `text-4` | крупный текст, подзаголовки |
| `text-5` … `text-8` | заголовки |
| `text-9` … `text-12` | крупные заголовки и числа на витринах |

Размер, высоту строки и толщину для заголовков удобнее задавать вместе:

```html
<h2 class="text-6 heading weight-7">Заголовок раздела</h2>
<p class="text-1">Обычный текст абзаца.</p>
<span class="text-1/2 color-on-surface-variant">Подпись</span>
```

Чтобы изменить размеры шкалы во всём проекте, переопределите токены
`--sf-text--size-*` и `--sf-text--height-*` в теме.

## Ограничения

- Префиксы ширины экрана есть только у классов общей шкалы `text-a0` …
  `text-i9`. У `text-1/4` … `text-12` их нет: `md:text-6` не существует.
- У классов общей шкалы высота строки равна размеру шрифта: текст в
  несколько строк получается слитным. Добавьте `line-*` или берите шкалу
  текста.
- `text-1/3` и `text-1/2` дают одинаковый размер и высоту строки.
- `text-*` и `line-*` задают `line-height` в одном слое каскада: при
  сочетании побеждает правило, подключённое позже.

## См. также

- [Размер заголовков](/ru/utilities/typography/title-size/)
- [Высота строки](/ru/utilities/typography/line-height/)
- [Типографика](/ru/guide/size-and-type/typography/)
- [Шкала размеров](/ru/guide/size-and-type/scales/#базовая-единица-и-шкала-примитивов)
