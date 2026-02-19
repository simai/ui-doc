---
extends: _core._layouts.documentation
section: content
title: "Яркость фона элемента (backdrop-brightness)"
description: "Яркость фона элемента (backdrop-brightness)"
---

# Яркость фона элемента (backdrop-brightness)

!rtags[backdrop-brightness]



Утилита управляет яркостью фона за элементом через `backdrop-filter`.

## Классы и их значения

| Класс                    | Значение                          |
|:-------------------------|:----------------------------------|
| `.backdrop-brightness-0`   | `backdrop-filter: brightness(0)`    |
| `.backdrop-brightness-1/4` | `backdrop-filter: brightness(0.8)`  |
| `.backdrop-brightness-1/3` | `backdrop-filter: brightness(0.9)`  |
| `.backdrop-brightness-1/2` | `backdrop-filter: brightness(0.95)` |
| `.backdrop-brightness-1`   | `backdrop-filter: brightness(1)`    |
| `.backdrop-brightness-2`   | `backdrop-filter: brightness(1.05)` |
| `.backdrop-brightness-3`   | `backdrop-filter: brightness(1.1)`  |
| `.backdrop-brightness-4`   | `backdrop-filter: brightness(1.2)`  |
{.table}

## Описание

- `backdrop-brightness-0` — максимальное затемнение.
- `backdrop-brightness-1` — базовая яркость.
- Значения `1/4`, `1/3`, `1/2` — плавное уменьшение яркости.
- Значения `2`, `3`, `4` — повышение яркости.
- Поддерживается `hover:` префикс, например `hover:backdrop-brightness-2`.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:
  `backdrop-brightness-{0|1/4|1/3|1/2|1|2|3|4}`

## Пример использования

```html
<div class="backdrop-brightness-1 hover:backdrop-brightness-2 p-4 bg-primary color-on-surface-inverse transition">
  Наведи, чтобы увеличить яркость подложки
</div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=backdrop-filter&group=backdrop-brightness"></iframe>
</div>
