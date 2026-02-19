---
extends: _core._layouts.documentation
section: content
title: Оформление кода
description: Оформление кода
---

# Оформление кода

!rtags[text-code]


Для коротких вставок используйте тег `<code>`. Для длинных строк применяйте утилиты обрезки текста:
- `.truncate` для одной строки,
- `.line-clamp-*` для нескольких строк.

## Пример

```html
<p>Use <code>line-clamp-2</code> and <code>truncate</code> utilities.</p>
<p class="truncate">Very long single-line text...</p>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=text-formatting&group=text-code"></iframe>
</div>
