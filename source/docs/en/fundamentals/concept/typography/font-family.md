````markdown
---
extends: _core._layouts.documentation
section: content
title: Font family
description: Font family
---

# Font family

To configure fonts in the framework, variables are used that define the font family for text, headings and display:

| Variable               | Value               |
|:-----------------------|:--------------------|
| `--sf-text--family`    | "Inter", sans-serif; |
| `--sf-heading--family` | "Inter", sans-serif; |
| `--sf-display--family` | "Inter", sans-serif; |
{.table}

By default, the `--sf-body-text--family` variable is used on the root element (`:root`) to set the font for the entire
document:

```css
:root {
  font-family: var(--sf-body-text--family);
}
```

The Inter font is connected via Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
```

Additionally, we need font type variables:

| Variable   | Value                                                                                                                                                                                      |
|:-----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--sf-sans`  | ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; |
| `--sf-serif` | ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;                                                                                                                            |
| `--sf-mono`  | ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;                                                                                   |
{.table}

````
