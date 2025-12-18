---
extends: _core._layouts.documentation
section: content
title: Font family
description: Font family
---

# Font family

Font families are set via variables for text, headings, and displays:

| Variable               | Value                |
|:-----------------------|:---------------------|
| `--sf-text--family`    | "Inter", sans-serif; |
| `--sf-heading--family` | "Inter", sans-serif; |
| `--sf-display--family` | "Inter", sans-serif; |
{.table}

By default `--sf-body-text--family` is applied to the root to set the document font:

```css
:root {
  font-family: var(--sf-body-text--family);
}
```

Inter is loaded from Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
```

Additional font stack variables:

| Variable     | Value                                                                                                                                                                                         |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--sf-sans`  | ui-sans-serif, system-ui, \-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; |
| `--sf-serif` | ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;                                                                                                                                                      |
| `--sf-mono`  | ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;                                                                                                               |
{.table}
