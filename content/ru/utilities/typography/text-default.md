---
title: "Параметры по умолчанию (text-default)"
description: "Параметры по умолчанию (text-default)"
tags: [title]
---

# Параметры по умолчанию (text-default)

В новой версии настройки типографики упрощены и используют обновлённые переменные. Базовые параметры (размер шрифта,
высота строки и т.д.) теперь управляются через более понятные и краткие наименования переменных.

## Значения по умолчанию

| Переменная             | Значение                        |
|:-----------------------|:--------------------------------|
| `--sf-text--size`      | var(`--sf-text-medium--size`)   |
| `--sf-text--height`    | var(`--sf-text-medium--height`) |
| `--sf-text--family`    | "Inter", sans-serif             |
| `--sf-heading--family` | "Inter", sans-serif             |
| `--sf-display--family` | "Inter", sans-serif             |
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
| root                                                                                                                         | font-style: var(`--sf-text--style`);&lt;br/&gt; font-size: var(`--sf-text--size`);&lt;br/&gt; line-height: var(`--sf-text--height`);&lt;br/&gt; font-weight: var(`--sf-text--weight`);&lt;br/&gt; font-family: var(`--sf-text--family`);&lt;br/&gt; letter-spacing: var(`--sf-text--tracking`); |
| h1, h2, h3, h4, h5, h6, .sf-h-1, .sf-h-2, .sf-h-3, .sf-h-4, .sf-h-5, .sf-h-6                                                  | font-family: var(`--sf-heading--family`);&lt;br/&gt; font-weight: var(`--sf-heading--weight`);                                                                                                                                                                          |
| .sf-display-1..6, .d1..6, .display1..6                                                                                       | font-family: var(`--sf-display--family`);&lt;br/&gt; font-weight: var(`--sf-display--weight`);                                                                                                                                                                          |

## Пример применённых стилей

:::example {id="utilities/typography/text-default" label="Результат"}
:::

