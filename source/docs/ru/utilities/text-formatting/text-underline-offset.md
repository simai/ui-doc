---
extends: _core._layouts.documentation
section: content
title: Смещение подчеркивания текста
description: Смещение подчеркивания текста
---

# Смещение подчеркивания текста

!rtags[text-underline-offset]


## Таблица классов

| Класс | Значение |
|:--|:--|
| `.decoration-offset-auto` | Автоматическое смещение |
| `.decoration-offset-0` ... `.decoration-offset-4` | Смещение по токенам `--sf-a0..--sf-a4` |
{.table}

## Пример

```html
<p class="underline decoration-offset-1">Offset 1</p>
<p class="underline decoration-offset-4">Offset 4</p>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=text-formatting&group=text-underline-offset"></iframe>
</div>
