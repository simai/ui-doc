---
extends: _core._layouts.documentation
section: content
title: "Параметры по умолчанию (text-default)"
description: "Параметры по умолчанию (text-default)"
---

# Параметры по умолчанию (text-default)


В новой версии настройки типографики упрощены и используют обновлённые переменные. Базовые параметры (размер шрифта,
высота строки и т.д.) теперь управляются через более понятные и краткие наименования переменных.

## Таблица соответствия старых и новых переменных

| Старая переменная                | Новая переменная      |
|:---------------------------------|:----------------------|
| `--sf-text--font-size-default`   | `--sf-text--size`     |
| `--sf-text--line-height-default` | `--sf-text--height`   |
| `--sf-text--font-family-default` | `--sf-text--family`   |
| `--sf-text--font-weight-default` | `--sf-text--weight`   |
| `--sf-text--font-style-default`  | `--sf-text--style`    |
| `--sf-text--tracking-default`    | `--sf-text--tracking` |
{.table}

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
{.table}

Данные переменные рекомендуется задавать на селекторе `:root`, чтобы их можно было переопределить при необходимости.

## Отступы для текста

Настройка отступов для параграфов, списков, цитат и заголовков:

| Селектор                                | Значение                                       |
|:----------------------------------------|:-----------------------------------------------|
| p, table, ol, ul, q, blockquote (и др.) | margin-bottom: var(`--sf-text--space-bottom`)    |
| h1, h2, h3, h4, h5, h6                  | margin-bottom: var(`--sf-heading--space-bottom`) |
| h2, h3, h4, h5, h6                      | margin-top: var(`--sf-heading--space-top`)       |
{.table}

## Шрифт

| Селектор                                                                                                                     | Значение                                                                                                                                                                                                                                                          |
|:-----------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| root                                                                                                                         | font-style: var(`--sf-text--style`);<br/> font-size: var(`--sf-text--size`);<br/> line-height: var(`--sf-text--height`);<br/> font-weight: var(`--sf-text--weight`);<br/> font-family: var(`--sf-text--family`);<br/> letter-spacing: var(`--sf-text--tracking`); |
| h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, .heading-1, .heading-2, .heading-3, .heading-4, .heading-5, .heading-6 | font-family: var(`--sf-heading--family`);<br/> font-weight: var(`--sf-heading--weight`);                                                                                                                                                                          |
| .d1, .d2, .d3, .d4, .d5, .d6, display-1, display-2, display-3, display-4, display-5, display-6                               | font-family: var(`--sf-display--family`);<br/> font-weight: var(`--sf-display--weight`);                                                                                                                                                                          |
{.table}

## Пример применённых стилей

```css
:root {
  font-style: var(--sf-text--style);
  font-size: var(--sf-text--size);
  line-height: var(--sf-text--height);
  font-weight: var(--sf-text--weight);
  font-family: var(--sf-text--family);
  letter-spacing: var(--sf-text--tracking);
}

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6,
.heading-1, .heading-2, .heading-3, .heading-4, .heading-5, .heading-6 {
  font-family: var(--sf-heading--family);
  font-weight: var(--sf-heading--weight);
}

.d1, .d2, .d3, .d4, .d5, .d6,
.display-1, .display-2, .display-3, .display-4, .display-5, .display-6 {
  font-family: var(--sf-display--family);
  font-weight: var(--sf-display--weight);
}

p, table, ol, ul, q, blockquote {
  margin-bottom: var(--sf-text--space-bottom);
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: var(--sf-heading--space-bottom);
}

h2, h3, h4, h5, h6 {
  margin-top: var(--sf-heading--space-top);
}
```
