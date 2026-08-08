---
title: "Параметры по умолчанию"
description: "Параметры по умолчанию"
---

# Параметры по умолчанию


!rtags[text-color hover focus active]





Ссылки по умолчанию используют токены темы и меняют цвет в состояния
 `:hover`, `:active`, `:visited`.

## Базовое поведение

| Селектор | Значение |
|:--|:--|
| `a` | `color: var(--sf-link)` |
| `a:hover` | `color: var(--sf-link-hover)` |
| `a:active` | `color: var(--sf-link-active)` |
| `a:visited` | `color: var(--sf-link-visited)` |
{.table}

## Пример

```html
<a href="#">Default link</a>
```
## Playground

&lt;div class="sf-playground overflow-hidden"&gt;
&lt;iframe title="Пример в Playground" loading="lazy" src="https://play.simai.io/embed.html?component=links&group=links-default-parameters"&gt;&lt;/iframe&gt;
&lt;/div&gt;
