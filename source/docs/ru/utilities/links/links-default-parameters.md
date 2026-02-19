---
extends: _core._layouts.documentation
section: content
title: Параметры по умолчанию
description: Параметры по умолчанию
---

# Параметры по умолчанию

!rtags[links-default-parameters]


Ссылки по умолчанию используют токены темы и меняют цвет в состояниях `:hover`, `:active`, `:visited`.

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

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=links&group=links-default-parameters"></iframe>
</div>
