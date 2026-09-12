---
title: "Длина строки"
description: "Длина строки (text-max-width)"
tags: [text-max-width, sm, md, lg, xl, xxl]
---

# Длина строки

:badge[text-max-width]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1} :badge[xxl]{type=tonal scheme=neutral size=1}

С помощью модификаторов можно задать максимальную длину строки текста.

## Наглядный пример

:::example {id="utilities/typography/text-max-width" label="Длина строки"}
:::

## Таблица классов

| Класс           | Значение                                     |
|:----------------|:---------------------------------------------|
| `measure` | `max-width: var(--sf-text--measure);` |
| `measure-wide` | `max-width: var(--sf-text--measure-wide);` |
| `measure-narrow` | `max-width: var(--sf-text--measure-narrow);` |

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:
  Применяет модификатор начиная с определенного размера экрана (`sm`, `md`, `lg`, `xl`, `xxl`).
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `measure` – длина строки равна примерно 65 символам.
    - `measure-wide` – длина строки равна примерно 80 символам.
    - `measure-narrow` – длина строки равна примерно 45 символам.

## Пример использования

```html
<p class="measure">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>

<p class="measure-wide">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>

<p class="measure-narrow">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```

## Адаптивность

Для изменения длины строки, начиная с определённого размера экрана, добавьте префикс контрольной точки (`sm:`, `md:`,
`lg:`, `xl:`):

```html
<p class="md:measure">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```

## Переменные

| Переменная                  | Значение |
|:----------------------------|:---------|
| `--sf-text--measure`        | 65ch;    |
| `--sf-text--measure-wide`   | 80ch;    |
| `--sf-text--measure-narrow` | 45ch;    |
