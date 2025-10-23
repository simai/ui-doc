---
extends: _core._layouts.documentation
section: content
title: Семейство шрифтов
description: Семейство шрифтов
---

# Семейство шрифтов

Для настройки шрифтов во фреймворке используются переменные, определяющие семейство шрифтов для текста, заголовков и
дисплеев:

| Переменная             | Значение             |
|:-----------------------|:---------------------|
| `--sf-text--family`    | "Inter", sans-serif; |
| `--sf-heading--family` | "Inter", sans-serif; |
| `--sf-display--family` | "Inter", sans-serif; |
{.table}

По умолчанию для корневого элемента (`:root`) используется переменная `--sf-body-text--family` для установки шрифта
всего документа:

```css
:root {
  font-family: var(--sf-body-text--family);
}
```

Подключение шрифта Inter осуществляется через Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
```

Дополнительно нам потребуются переменные типов шрифтов:

| Переменная   | Значение                                                                                                                                                                                      |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--sf-sans`  | ui-sans-serif, system-ui, \-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; |
| `--sf-serif` | ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;                                                                                                                                                      |
| `--sf-mono`  | ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;                                                                                                               |
{.table}
