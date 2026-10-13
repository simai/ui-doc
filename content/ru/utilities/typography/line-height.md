---
title: "Высота строки"
description: "Задаёт высоту строки текста множителем от размера шрифта или значением шкалы."
---

# Высота строки

Классы `line-*` задают высоту строки. Именованные значения (`line-tight`,
`line-relaxed` …) — множитель от размера шрифта, числовые (`line-1` …
`line-12`) — ступень шкалы текста. Берите их, чтобы сделать текст плотнее в
заголовках и свободнее в длинных абзацах.

## Пример

### Множитель

Множитель растёт вместе с размером шрифта. Фон показывает высоту строк.

:::example {id="utilities/typography/line-height" label="line-none … line-loose"}
:::

### Шкала

Ступень шкалы задаёт высоту строки, которая не зависит от размера шрифта.

:::example {id="utilities/typography/line-height-scale" label="line-1/2 … line-8"}
:::

### Ширина экрана

Меняйте ширину окна просмотра: начиная с ширины `md` строки становятся
свободнее.

:::example {id="utilities/typography/line-height-responsive" label="line-tight md:line-loose"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `line-{значение}` | `line-height: var(--sf-text--height-{значение})` | `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `line-tight` | `line-height: 1.25` | — |
| `line-snug` | `line-height: 1.375` | — |
| `line-relaxed` | `line-height: 1.625` | — |
| `line-loose` | `line-height: 2` | — |
| `line-none` | `line-height: 1` | — |
| `line-normal` | `line-height: 1.5` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:line-1/4`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-text--height-1/4` | `0.75rem; от ширины lg: var(--sf-b2)` |
| `--sf-text--height-1/3` | `1rem; от ширины lg: var(--sf-b6)` |
| `--sf-text--height-1/2` | `1rem; от ширины lg: 1.25rem` |
| `--sf-text--height-1` | `var(--sf-c0); от ширины lg: var(--sf-c2)` |
| `--sf-text--height-2` | `var(--sf-c2); от ширины lg: var(--sf-c4)` |
| `--sf-text--height-3` | `var(--sf-c2); от ширины lg: var(--sf-c8)` |
| `--sf-text--height-4` | `var(--sf-c4); от ширины lg: var(--sf-d0)` |
| `--sf-text--height-5` | `var(--sf-c6); от ширины lg: var(--sf-d2)` |
| `--sf-text--height-6` | `var(--sf-c8); от ширины lg: var(--sf-d3)` |
| `--sf-text--height-7` | `var(--sf-d0); от ширины lg: var(--sf-d5)` |
| `--sf-text--height-8` | `var(--sf-d2); от ширины lg: var(--sf-d8)` |
| `--sf-text--height-9` | `var(--sf-d3); от ширины lg: var(--sf-e0)` |
| `--sf-text--height-10` | `var(--sf-d5); от ширины lg: var(--sf-e2)` |
| `--sf-text--height-11` | `var(--sf-d6); от ширины lg: var(--sf-e3)` |
| `--sf-text--height-12` | `var(--sf-d8); от ширины lg: var(--sf-e5)` |
| `--sf-text-height-1/4` | `var(--sf-text--height-1/4)` |
| `--sf-text-height-1/3` | `var(--sf-text--height-1/3)` |
| `--sf-text-height-1/2` | `var(--sf-text--height-1/2)` |
| `--sf-text-height-1` | `var(--sf-text--height-1)` |
| `--sf-text-height-2` | `var(--sf-text--height-2)` |
| `--sf-text-height-3` | `var(--sf-text--height-3)` |
| `--sf-text-height-4` | `var(--sf-text--height-4)` |
| `--sf-text-height-5` | `var(--sf-text--height-5)` |
| `--sf-text-height-6` | `var(--sf-text--height-6)` |
| `--sf-text-height-7` | `var(--sf-text--height-7)` |
| `--sf-text-height-8` | `var(--sf-text--height-8)` |
| `--sf-text-height-9` | `var(--sf-text--height-9)` |
| `--sf-text-height-10` | `var(--sf-text--height-10)` |
| `--sf-text-height-11` | `var(--sf-text--height-11)` |
| `--sf-text-height-12` | `var(--sf-text--height-12)` |

В CSS косую черту в имени экранируют: `var(--sf-text--height-1\/4)`.

## Применение

| Класс | Множитель | Где |
|:---|:---|:---|
| `line-none` | 1 | одна строка: значки, цифры, кнопки |
| `line-tight` | 1,25 | крупные заголовки |
| `line-snug` | 1,375 | подзаголовки |
| `line-normal` | 1,5 | обычный текст |
| `line-relaxed` | 1,625 | длинные абзацы |
| `line-loose` | 2 | редкий текст, подписи с запасом |

Класс размера `text-*` задаёт высоту строки вместе с размером. Ступень
`line-*` с тем же номером даёт ту же высоту строки, что у `text-*`.

```html
<h1 class="text-10 line-tight">Заголовок в несколько строк</h1>
<p class="line-relaxed measure">Длинный абзац статьи…</p>
```

## Ограничения

- `text-*` и `line-*` задают `line-height` в одном слое каскада, и при
  равной специфичности побеждает правило, которое подключено позже. Для
  заголовков с плотной строкой надёжнее `title-*` или `text-* heading`.
- У шкалы есть совпадающие ступени: `line-1/3` и `line-1/2`, `line-2` и
  `line-3` дают одинаковую высоту строки.

## См. также

- [Размер текста](/ru/utilities/typography/text-size/)
- [Размер заголовков](/ru/utilities/typography/title-size/)
- [Типографика](/ru/guide/size-and-type/typography/)
