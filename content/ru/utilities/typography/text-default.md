---
title: "Параметры по умолчанию"
description: "Параметры по умолчанию (text-default)"
tags: [title]
---

# Параметры по умолчанию

:badge[title]{type=main scheme=on-surface size=1}

Базовые параметры текста — размер шрифта, высота строки и семейство — задаются переменными `--sf-text--*`.

## Наглядный пример

:::example {id="utilities/typography/text-default" label="Параметры по умолчанию"}
:::

## Значения по умолчанию

| Переменная             | Значение                        |
|:-----------------------|:--------------------------------|
| `--sf-text--size`      | var(`--sf-text--size-1`)        |
| `--sf-text--height`    | var(`--sf-text--height-1`)      |
| `--sf-text--family`    | `"Inter Variable", "Inter Fallback", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Segoe UI", sans-serif` |
| `--sf-heading--family` | то же, что `--sf-text--family`  |
| `--sf-display--family` | то же, что `--sf-text--family`  |
| `--sf-text--weight`    | 400                             |
| `--sf-heading--weight` | 700                             |
| `--sf-display--weight` | 300                             |
| `--sf-text--style`     | inherit                         |
| `--sf-text--tracking`  | inherit                         |

Данные переменные рекомендуется задавать на селекторе `:root`, чтобы их можно было переопределить при необходимости.

## Отступы для текста

Настройка отступов для параграфов, списков, цитат и заголовков:

| Селектор                                | Значение                                       |
|:----------------------------------------|:-----------------------------------------------|
| p, table, ol, ul, q, blockquote (и др.) | margin-bottom: var(`--sf-text--space-bottom`)    |
| h1, h2, h3, h4, h5, h6                  | margin-bottom: var(`--sf-heading--space-bottom`) |
| h2, h3, h4, h5, h6                      | margin-top: var(`--sf-heading--space-top`)       |

## Шрифт

| Селектор                                                                                                                     | Значение                                                                                                                                                                                                                                                          |
|:-----------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `root` | `font-style: var(--sf-text--style);` `font-size: var(--sf-text--size);` `line-height: var(--sf-text--height);` `font-weight: var(--sf-text--weight);` `font-family: var(--sf-text--family);` `letter-spacing: var(--sf-text--tracking);` |
| `h1, h2, h3, h4, h5, h6, sf-h-1, sf-h-2, sf-h-3, sf-h-4, sf-h-5, sf-h-6` | `font-family: var(--sf-heading--family);` `font-weight: var(--sf-heading--weight);` |
| `sf-display-1..6, d1..6, display1..6` | `font-family: var(--sf-display--family);` `font-weight: var(--sf-display--weight);` |

## Пример применённых стилей
