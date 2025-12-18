---
extends: _core._layouts.documentation
section: content
title: Фокус
description: Фокус
---

# Фокус

Для отображения состояния фокуса (например, при переходе к элементу по клавиатуре) используются следующие переменные:

| Переменная           | Значение  |
|:---------------------|:----------|
| `--sf-focus--offset` | `--sf-a0` |
| `--sf-focus--style`  | solid     |
| `--sf-focus--width`  | `--sf-a4` |
{.table}

Пример реализации фокуса в CSS:

```css
*:focus {
  outline-color: var(--sf-focus-color);
  outline-offset: var(--sf-focus--offset);
  outline-style: var(--sf-focus--style);
  outline-width: var(--sf-focus--width);
}
```
