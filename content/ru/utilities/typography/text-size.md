---
title: "Размер текста"
description: "Задаёт размер шрифта вместе с высотой строки по шкале текста."
---

# Размер текста

Классы `text-*` задают размер шрифта и высоту строки одним классом по шкале
текста `text-1/4` … `text-12`: `text-1` равен размеру обычного текста.

## Пример

### Шкала текста

Подпись слева — класс образца.

:::example {id="utilities/typography/text-size" label="text-1/4 … text-12"}
:::

### Заголовок

Класс `heading` вместе с `text-1` … `text-12` заменяет высоту строки на более
плотную высоту заголовка той же ступени.

:::example {id="utilities/typography/text-size-heading" label="text-6 и text-6 heading"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `text-1/4` | `font-size: var(--sf-text--size-1/4); line-height: var(--sf-text--height-1/4)` | — |
| `text-1/3` | `font-size: var(--sf-text--size-1/3); line-height: var(--sf-text--height-1/3)` | — |
| `text-1/2` | `font-size: var(--sf-text--size-1/2); line-height: var(--sf-text--height-1/2)` | — |
| `text-1` | `font-size: var(--sf-text--size-1); line-height: var(--sf-text--height-1); .text-1.heading { line-height: var(--sf-title--height-1) }` | — |
| `text-2` | `font-size: var(--sf-text--size-2); line-height: var(--sf-text--height-2); .text-2.heading { line-height: var(--sf-title--height-2) }` | — |
| `text-3` | `font-size: var(--sf-text--size-3); line-height: var(--sf-text--height-3); .text-3.heading { line-height: var(--sf-title--height-3) }` | — |
| `text-4` | `font-size: var(--sf-text--size-4); line-height: var(--sf-text--height-4); .text-4.heading { line-height: var(--sf-title--height-4) }` | — |
| `text-5` | `font-size: var(--sf-text--size-5); line-height: var(--sf-text--height-5); .text-5.heading { line-height: var(--sf-title--height-5) }` | — |
| `text-6` | `font-size: var(--sf-text--size-6); line-height: var(--sf-text--height-6); .text-6.heading { line-height: var(--sf-title--height-6) }` | — |
| `text-7` | `font-size: var(--sf-text--size-7); line-height: var(--sf-text--height-7); .text-7.heading { line-height: var(--sf-title--height-7) }` | — |
| `text-8` | `font-size: var(--sf-text--size-8); line-height: var(--sf-text--height-8); .text-8.heading { line-height: var(--sf-title--height-8) }` | — |
| `text-9` | `font-size: var(--sf-text--size-9); line-height: var(--sf-text--height-9); .text-9.heading { line-height: var(--sf-title--height-9) }` | — |
| `text-10` | `font-size: var(--sf-text--size-10); line-height: var(--sf-text--height-10); .text-10.heading { line-height: var(--sf-title--height-10) }` | — |
| `text-11` | `font-size: var(--sf-text--size-11); line-height: var(--sf-text--height-11); .text-11.heading { line-height: var(--sf-title--height-11) }` | — |
| `text-12` | `font-size: var(--sf-text--size-12); line-height: var(--sf-text--height-12); .text-12.heading { line-height: var(--sf-title--height-12) }` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

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

В CSS косую черту в имени экранируют: `var(--sf-text--size-1\/4)`.

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

- У `text-*` нет префиксов ширины экрана: `md:text-6` не существует.
- `text-1/3` и `text-1/2` дают одинаковый размер и высоту строки.
- `text-*` и `line-*` задают `line-height` в одном слое каскада: при
  сочетании побеждает правило, подключённое позже.

## См. также

- [Размер заголовков](/ru/utilities/typography/title-size/)
- [Высота строки](/ru/utilities/typography/line-height/)
- [Типографика](/ru/guide/size-and-type/typography/)
- [Шкала размеров](/ru/guide/size-and-type/scales/#базовая-единица-и-шкала-примитивов)
