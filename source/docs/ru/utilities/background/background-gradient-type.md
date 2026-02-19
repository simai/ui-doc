---
extends: _core._layouts.documentation
section: content
title: "Вид градиента"
description: "Утилиты выбора типа фонового градиента (linear, radial, conic) и количества цветов."
---

# Вид градиента

!rtags[background-gradient-type sm md lg xl]



Утилиты `gr-*` задают тип градиента и то, сколько цветовых точек используется. Сами цвета и угол задаются через отдельные утилиты:

- Цвета: `gr1-*`, `gr2-*`, `gr3-*` из **gradient-color** или `from-*`, `via-*`, `to-*` из **gradient-stops** (оба варианта записывают значения в `--sf-gradient--color-1/2/3`).
- Угол (для `gr-line-*`): через CSS‑переменную `--sf-gradient--angle` (по умолчанию 90deg), при необходимости переопределяется инлайном или кастомным классом.

## Таблица классов

| Класс        | Значение                                                                                                         |
|:-------------|:-----------------------------------------------------------------------------------------------------------------|
| .gr-line-2   | `background-image: linear-gradient(var(--sf-gradient--angle), var(--sf-gradient--color-1), var(--sf-gradient--color-2));` |
| .gr-line-3   | `background-image: linear-gradient(var(--sf-gradient--angle), var(--sf-gradient--color-1), var(--sf-gradient--color-2), var(--sf-gradient--color-3));` |
| .gr-radial-2 | `background-image: radial-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-2));`                  |
| .gr-radial-3 | `background-image: radial-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-2), var(--sf-gradient--color-3));` |
| .gr-conic-2  | `background-image: conic-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-2));`                   |
| .gr-conic-3  | `background-image: conic-gradient(var(--sf-gradient--color-1), var(--sf-gradient--color-2), var(--sf-gradient--color-3));` |
{.table}

## Примеры

```html
<!-- Линейный градиент с двумя цветами -->
<div class="gr-line-2 gr1-primary gr2-primary-container h-e5 radius-2"></div>
```

```html
<!-- Линейный градиент с тремя цветами и кастомным углом -->
<div class="gr-line-3 gr1-primary gr2-secondary gr3-tertiary h-e5 radius-2"
     style="--sf-gradient--angle: 45deg;"></div>
```

```html
<!-- Радиальный градиент: через from/via/to -->
<div class="gr-radial-3 from-tertiary via-primary to-secondary h-e5 radius-2"></div>
```

```html
<!-- Конический градиент -->
<div class="gr-conic-2 gr1-primary gr2-secondary h-e5 radius-2"></div>
```

**Важно:** без указания цветов (`gr1-/gr2-/gr3-` или `from-/via-/to-`) градиент будет прозрачным, так как в переменных `--sf-gradient--color-*` нет значений.
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=background&group=background-gradient-type"></iframe>
</div>
