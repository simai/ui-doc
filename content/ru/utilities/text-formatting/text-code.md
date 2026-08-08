---
title: "Оформление кода"
description: "Оформление кода"
---

# Оформление кода

!rtags[text-overflow]


Для коротки
 вставок используйте тег `&lt;code&gt;`. Для длинны
 строк применяйте утилиты обрезки текста:
- `.truncate` для одной строки,
- `.line-clamp-*` для нескольки
 строк.

## Пример

```html
<p>Use <code>line-clamp-2</code> and <code>truncate</code> utilities.</p>
<p class="truncate">Very long single-line text...</p>
```
## Playground

&lt;div class="sf-playground overflow-hidden"&gt;
&lt;iframe title="Пример в Playground" loading="lazy" src="https://play.simai.io/embed.html?component=text-formatting&group=text-code"&gt;&lt;/iframe&gt;
&lt;/div&gt;
