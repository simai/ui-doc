---
title: "Анимация элемента"
description: "Классы animation и infinite"
tags: [animation]
---

# Анимация элемента

:badge[animation]{type=main scheme=on-surface size=1}

Утилита добавляет CSS-анимацию элементу.

## Наглядный пример

:::example {id="utilities/animation/animation-transition-appearing" label="Анимация элемента"}
:::

## Классы и значения

| Класс      | Значение |
|:-----------|:---------|
| `animation` | Базовая анимация появления (`fade`) с `--sf-duration-normal` и `--sf-animation`. |
| `infinite` | Бесконечный повтор анимации (`animation-iteration-count: infinite`). |

## Синтаксис

```html
<div class="animation">...</div>
<div class="animation infinite">...</div>
```

## Важно про появление в viewport

Класс `.animation` запускает обычную CSS-анимацию элемента (при его рендере/появлении в DOM).

Если нужен запуск именно при входе в область видимости (scroll appear), используйте компонент `wow` и его атрибуты (`data-wow-*`).

## Пример
