---
extends: _core._layouts.documentation
section: content
title: Выделение текста
description: Выделение текста
---

# Выделение текста

!rtags[text-selecting]


## Таблица классов

| Класс | Значение |
|:--|:--|
| `.select-none` | Запрет выделения |
| `.select-text` | Обычное выделение текста |
| `.select-all` | Выделение всего содержимого при клике |
| `.select-auto` | Поведение по умолчанию браузера |
{.table}

## Пример

```html
<p class="select-none">Selection disabled</p>
<p class="select-all">Click to select all</p>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=text-formatting&group=text-selecting"></iframe>
</div>
