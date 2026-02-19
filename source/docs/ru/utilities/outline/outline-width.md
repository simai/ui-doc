---
extends: _core._layouts.documentation
section: content
title: Толщина внешней границы
description: Толщина внешней границы
---

# Толщина внешней границы

!rtags[outline-width]


| Класс | Значение |
|:--|:--|
| `.outline-0` | `outline-width: var(--sf-0);` |
| `.outline-1` | `outline-width: var(--sf-a1);` |
| `.outline-2` | `outline-width: var(--sf-a2);` |
| `.outline-3` | `outline-width: var(--sf-a3);` |
| `.outline-4` | `outline-width: var(--sf-a4);` |
{.table}

## Описание

- `outline-0` скрывает контур по толщине.
- `outline-1..4` задают уровень толщины по шкале токенов.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или `{модификатор}`.

- Контрольные точки: `sm`, `md`, `lg`, `xl`.
- Модификатор: `outline-{0...4}`.

## Пример

```html
<button class="outline outline-1 outline-solid outline-primary outline-offset-2">outline-1</button>
<button class="outline outline-2 outline-solid outline-primary outline-offset-2">outline-2</button>
<button class="outline outline-4 outline-solid outline-primary outline-offset-2">outline-4</button>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=outline&group=outline-width"></iframe>
</div>
