---
extends: _core._layouts.documentation
section: content
title: "Смещение (transform-translate)"
description: "Классы смещения transform-translate"
---

# Смещение (transform-translate)

!rtags[transform-translate hover]


`transform-translate` сдвигает элемент по оси `x` и/или `y`.

## Классы

| Класс | Значение |
|:--|:--|
| `.translate-x-0 ... .translate-x-9` | сдвиг по оси X |
| `.translate-y-0 ... .translate-y-9` | сдвиг по оси Y |
| `.-translate-x-0 ... .-translate-x-9` | отрицательный сдвиг по X |
| `.-translate-y-0 ... .-translate-y-9` | отрицательный сдвиг по Y |
| `.translate-x-half` | `translateX(-50%)` |
| `.translate-y-half` | `translateY(-50%)` |
| `.translate-x-a0 ... .translate-x-i9` | расширенный диапазон токенов X |
| `.translate-y-a0 ... .translate-y-i9` | расширенный диапазон токенов Y |

{.table}

## Синтаксис

- `translate-x-{value}`, `translate-y-{value}`
- `-translate-x-{value}`, `-translate-y-{value}`
- `translate-x-half`, `translate-y-half`

Для `value` доступны базовые (`0...9`) и расширенные (`a0...i9`) токены.
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=transform&group=transform-translate"></iframe>
</div>
