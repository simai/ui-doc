---
extends: _core._layouts.documentation
section: content
title: Тень элемента (box-shadow)
description: Глубина тени элемента и состояния hover
---

# Тень элемента (box-shadow)

!rtags[element-shadow]



Утилиты `shadow-*` задают уровень тени через `--sf-shadow--level-ratio`.

## Таблица классов

| Класс | Значение |
|:--|:--|
| `.shadow-0` | тень отключена |
| `.shadow-1` | `--sf-shadow--level-ratio: 1` |
| `.shadow-2` | `--sf-shadow--level-ratio: 2` |
| `.shadow-3` | `--sf-shadow--level-ratio: 4` |
| `.shadow-4` | `--sf-shadow--level-ratio: 8` |
| `.shadow-5` | `--sf-shadow--level-ratio: 16` |
| `.hover:shadow-0 ... .hover:shadow-5` | уровень тени в `:hover` |
{.table}

## Синтаксис

- `shadow-{0...5}`
- `hover:shadow-{0...5}`

## Пример

```html
<div class="shadow-1 hover:shadow-3 p-2 radius-2 border border-outline-variant">
  Hover to increase depth
</div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=shadows&group=element-shadow"></iframe>
</div>
