---
title: "Толщина оформления текста"
description: "Толщина оформления текста"
---

# Толщина оформления текста

!rtags[text-decoration-thickness]


## Таблица классов

| Класс | Значение |
|:--|:--|
| `.decoration-auto` | Автоматическая толщина |
| `.decoration-font` | Толщина из шрифта |
| `.decoration-0` ... `.decoration-4` | Толщина по токенам `--sf-a0..--sf-a4` |
{.table}

## Пример

```html
<p class="underline decoration-1">Thin underline</p>
<p class="underline decoration-4">Thick underline</p>
```
## Playground

&lt;div class="sf-playground overflow-hidden"&gt;
&lt;iframe title="Пример в Playground" loading="lazy" src="https://play.simai.io/embed.html?component=text-formatting&group=text-formatting-thickness"&gt;&lt;/iframe&gt;
&lt;/div&gt;
