---
extends: _core._layouts.documentation
section: content
title: Толщина ползунка прокрутки (scroll / scroll-thumb-size)
description: Управление минимальным размером ползунка прокрутки
---

# Толщина ползунка прокрутки (scroll / scroll-thumb-size)

!rtags[scroll-slider-width]



## Классы и значения

| Класс | Значение переменной |
|:--|:--|
| `.scroll-1` / `.scroll-thumb-1` | `--sf-scroll-thumb-size: var(--sf-a4);` |
| `.scroll-2` / `.scroll-thumb-2` | `--sf-scroll-thumb-size: var(--sf-a3);` |
| `.scroll-3` / `.scroll-thumb-3` | `--sf-scroll-thumb-size: var(--sf-a2);` |
| `.scroll-4` / `.scroll-thumb-4` | `--sf-scroll-thumb-size: var(--sf-a1);` |
{.table}

## Описание

Эти модификаторы задают минимальный видимый размер ползунка (`thumb`) через переменную `--sf-scroll-thumb-size`.

- `scroll-*` — историческое имя.
- `scroll-thumb-*` — предпочтительное имя для новых примеров и документации.

## Синтаксис

- `scroll-{1...4}`
- `scroll-thumb-{1...4}`

## Пример

```html
<html class="scroll-thumb-4 h-d5 overflow-auto">
  <div class="p-1">
    abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
  </div>
</html>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=overscroll&group=scroll"></iframe>
</div>
