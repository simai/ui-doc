---
extends: _core._layouts.documentation
section: content
title: "Параметры по умолчанию (text-default)"
description: "Параметры по умолчанию (text-default)"
---

# Параметры по умолчанию (text-default)

!rtags[text-default]



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
| h1, h2, h3, h4, h5, h6, .sf-h-1, .sf-h-2, .sf-h-3, .sf-h-4, .sf-h-5, .sf-h-6                                                  | font-family: var(`--sf-heading--family`);<br/> font-weight: var(`--sf-heading--weight`);                                                                                                                                                                          |
| .sf-display-1..6, .d1..6, .display1..6                                                                                       | font-family: var(`--sf-display--family`);<br/> font-weight: var(`--sf-display--weight`);                                                                                                                                                                          |
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
.sf-h-1, .sf-h-2, .sf-h-3, .sf-h-4, .sf-h-5, .sf-h-6 {
  font-family: var(--sf-heading--family);
  font-weight: var(--sf-heading--weight);
}

.sf-display-1, .sf-display-2, .sf-display-3, .sf-display-4, .sf-display-5, .sf-display-6,
.d1, .d2, .d3, .d4, .d5, .d6,
.display1, .display2, .display3, .display4, .display5, .display6 {
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
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=typography&group=text-default"></iframe>
</div>
