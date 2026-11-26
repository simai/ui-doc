---
title: "Длина строки"
description: "Ограничивает ширину текстового блока числом символов, удобным для чтения."
---

# Длина строки

Классы `measure-*` ограничивают наибольшую ширину блока ступенью лестницы
ширин в знаках: 52, 80 или 96. Берите их для абзацев статей, описаний и форм,
чтобы строка не растягивалась на всю ширину широкого экрана.

## Пример

### Значения

Фон показывает ширину блока.

:::example {id="utilities/typography/text-max-width" label="measure-narrow, measure, measure-wide"}
:::

### Ширина экрана

Меняйте ширину окна просмотра: начиная с ширины `lg` строка становится
длиннее.

:::example {id="utilities/typography/text-max-width-responsive" label="measure-narrow lg:measure-wide"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `measure` | `max-width: var(--sf-measure-80)` | — |
| `measure-wide` | `max-width: var(--sf-measure-96)` | — |
| `measure-narrow` | `max-width: var(--sf-measure-52)` | — |
| `measure-20` | `max-width: var(--sf-measure-20)` | — |
| `measure-28` | `max-width: var(--sf-measure-28)` | — |
| `measure-36` | `max-width: var(--sf-measure-36)` | — |
| `measure-44` | `max-width: var(--sf-measure-44)` | — |
| `measure-52` | `max-width: var(--sf-measure-52)` | — |
| `measure-64` | `max-width: var(--sf-measure-64)` | — |
| `measure-80` | `max-width: var(--sf-measure-80)` | — |
| `measure-96` | `max-width: var(--sf-measure-96)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:measure`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-measure-80` | `calc(80 * var(--sf-measure--char))` |
| `--sf-measure-96` | `calc(96 * var(--sf-measure--char))` |
| `--sf-measure-52` | `calc(52 * var(--sf-measure--char))` |
| `--sf-measure-20` | `calc(20 * var(--sf-measure--char))` |
| `--sf-measure-28` | `calc(28 * var(--sf-measure--char))` |
| `--sf-measure-36` | `calc(36 * var(--sf-measure--char))` |
| `--sf-measure-44` | `calc(44 * var(--sf-measure--char))` |
| `--sf-measure-64` | `calc(64 * var(--sf-measure--char))` |

## Применение

Ширина — ступень лестницы ширин `--sf-measure-*`: знак равен половине размера
основного текста (`--sf-measure--char`), ступень — N знаков. Поэтому
ограничение растёт вместе с размером текста, плотностью и размером шрифта
браузера, и в строке остаётся то же число знаков.

| Класс | Ширина | При тексте 16 | Где |
|:---|:---|:---|:---|
| `measure-narrow` | `--sf-measure-52` | 416 px | узкие колонки, подписи, текст рядом с изображением |
| `measure` | `--sf-measure-80` | 640 px | основной текст |
| `measure-wide` | `--sf-measure-96` | 768 px | справочный текст, таблицы в тексте |

Остальные ступени — 20, 28, 36, 44 и 64 знака — задают ширину блоку классами
[`w-measure-*`, `max-w-measure-*` и `min-w-measure-*`](/ru/utilities/sizes/width/).

```html
<article class="measure">
  <p>Абзац статьи…</p>
</article>
```

## Ограничения

- Класс задаёт только `max-width`: блок не центрируется. Для центрирования
  добавьте внешние отступы `m-inline-auto` или раскладку родителя.
- В тексте с широкими буквами и в моноширинном шрифте в строку входит
  меньше или больше символов, чем указано.

## См. также

- [Размер текста](/ru/utilities/typography/text-size/)
- [Максимальная ширина](/ru/utilities/sizes/max-width/)
