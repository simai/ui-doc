---
title: "Трекинг текста"
description: "Сжимает или разрежает расстояние между буквами текста."
---

# Трекинг текста

Классы `tracking-*` задают межбуквенный интервал. Берите разреженный трекинг
для коротких подписей прописными, сжатый — для крупных заголовков, где
обычный интервал выглядит слишком свободным.

## Пример

Подпись над образцом — класс, который на нём стоит.

:::example {id="utilities/typography/letter-spacing" label="Шкала трекинга"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `tracking-tighter` | `letter-spacing: var(--sf-text--tracking-tighter)` | — |
| `tracking-tight` | `letter-spacing: var(--sf-text--tracking-tight)` | — |
| `tracking-wide` | `letter-spacing: var(--sf-text--tracking-wide)` | — |
| `tracking-wider` | `letter-spacing: var(--sf-text--tracking-wider)` | — |
| `tracking-widest` | `letter-spacing: var(--sf-text--tracking-widest)` | — |
| `tracking-no-tracking` | `letter-spacing: var(--sf-text--tracking-no-tracking)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-text--tracking-tighter` | `-0.05em` |
| `--sf-text--tracking-tight` | `-0.025em` |
| `--sf-text--tracking-wide` | `0.025em` |
| `--sf-text--tracking-wider` | `0.05em` |
| `--sf-text--tracking-widest` | `0.1em` |
| `--sf-text--tracking-no-tracking` | `0em` |

## Применение

Интервал задан в `em`, поэтому он растёт вместе с размером шрифта.

```html
<p class="uppercase tracking-wider text-1/2">Раздел</p>
<h1 class="text-12 tracking-tight">Крупный заголовок</h1>
```

`tracking-no-tracking` задаёт нулевой интервал — например, чтобы отменить
трекинг, унаследованный от родителя.

## Ограничения

- Разреженный трекинг в длинном тексте мешает читать слова целиком:
  оставьте его для подписей.
- У семейства нет префиксов ширины экрана и состояний.

## См. также

- [Оформление текста](/ru/utilities/text-formatting/text-formatting-text/)
- [Размер текста](/ru/utilities/typography/text-size/)
