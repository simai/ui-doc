---
extends: _core._layouts.documentation
section: content
title: Подчеркивание ссылок
description: Подчеркивание ссылок
---

# Подчеркивание ссылок

!rtags[links-underlining]


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

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=links&group=links-underlining"></iframe>
</div>
