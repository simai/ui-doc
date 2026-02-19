---
extends: _core._layouts.documentation
section: content
title: Отступ внешней границы
description: Отступ внешней границы
---

# Отступ внешней границы

!rtags[outline-offset]


| Класс | Значение |
|:--|:--|
| `.outline-offset-1` | `outline-offset: var(--sf-a1);` |
| `.outline-offset-2` | `outline-offset: var(--sf-a2);` |
| `.outline-offset-3` | `outline-offset: var(--sf-a3);` |
| `.outline-offset-4` | `outline-offset: var(--sf-a4);` |
{.table}

## Описание

`outline-offset-*` задает расстояние между контуром и границей элемента.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или `{модификатор}`.

- Контрольные точки: `sm`, `md`, `lg`, `xl`.
- Модификатор: `outline-offset-{1...4}`.

## Пример

```html
<button class="outline outline-2 outline-solid outline-primary outline-offset-1">offset-1</button>
<button class="outline outline-2 outline-solid outline-primary outline-offset-2">offset-2</button>
<button class="outline outline-2 outline-solid outline-primary outline-offset-4">offset-4</button>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=outline&group=outline-offset"></iframe>
</div>
