---
extends: _core._layouts.documentation
section: content
title: Оформление текста
description: Оформление текста
---

# Оформление текста

!rtags[text-formatting-text]


## Таблица классов

| Класс | Значение |
|:--|:--|
| `.text-start` | `text-align: start;` |
| `.text-center` | `text-align: center;` |
| `.text-end` | `text-align: end;` |
| `.uppercase` | `text-transform: uppercase;` |
| `.lowercase` | `text-transform: lowercase;` |
| `.capitalize` | `text-transform: capitalize;` |
| `.truncate` | Обрезка строки с многоточием |
| `.line-clamp-2` | Ограничение текста до 2 строк |
{.table}

## Пример

```html
<p class="text-center uppercase">Sample text</p>
<p class="truncate">Very long single-line text...</p>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=text-formatting&group=text-formatting-text"></iframe>
</div>
