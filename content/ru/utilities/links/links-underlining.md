---
title: "Подчеркивание ссылок"
description: "Подчеркивание ссылок"
---

# Подчеркивание ссылок


!rtags[text-decoration hover focus active]





Утилита `link-underline-none` отключает подчеркивание у ссылки.

## Таблица классов

| Класс | Значение |
|:--|:--|
| `.link-underline-none` | `text-decoration-line: none` для ссылки и `:hover` |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или `{модификатор}`.

- Контрольные точки: `sm`, `md`, `lg`, `xl`.
- Модификатор: `link-underline-none`.

## Пример

```html
<p>Default <a href="#">underlined link</a></p>
<p><a href="#" class="link-underline-none">Link without underline</a></p>
```
## Playground

&lt;div class="sf-playground overflow-hidden"&gt;
&lt;iframe title="Пример в Playground" loading="lazy" src="https://play.simai.io/embed.html?component=links&group=links-underlining"&gt;&lt;/iframe&gt;
&lt;/div&gt;
