---
extends: _core._layouts.documentation
section: content
title: Оформление ссылок
description: Оформление ссылок
---

# Оформление ссылок

!rtags[text-decoration-style]


Утилиты задают стиль подчеркивания ссылки.

## Таблица классов

| Класс | Значение |
|:--|:--|
| `.link-dotted` | `text-decoration-style: dotted` |
| `.link-dashed` | `text-decoration-style: dashed` |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или `{модификатор}`.

- Контрольные точки: `sm`, `md`, `lg`, `xl`.
- Модификаторы: `link-dotted`, `link-dashed`.

## Пример

```html
<p><a href="#" class="link-dotted">Dotted underline link</a></p>
<p><a href="#" class="link-dashed">Dashed underline link</a></p>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=links&group=links-formatting"></iframe>
</div>
