---
extends: _core._layouts.documentation
section: content
title: Анимация элемента
description: Классы animation и infinite
---

# Анимация элемента

[https://dev.ru.simai.io/ru/ui/utility/animation/animation.php](https://dev.ru.simai.io/ru/ui/utility/animation/animation.php)

Утилита добавляет CSS-анимацию элементу.

## Классы и значения

| Класс      | Значение |
|:-----------|:---------|
| `.animation` | Базовая анимация появления (`fade`) с `--sf-duration-normal` и `--sf-animation`. |
| `.infinite`  | Бесконечный повтор анимации (`animation-iteration-count: infinite`). |
{.table}

## Синтаксис

```html
<div class="animation">...</div>
<div class="animation infinite">...</div>
```

## Важно про появление в viewport

Класс `.animation` запускает обычную CSS-анимацию элемента (при его рендере/появлении в DOM).

Если нужен запуск именно при входе в область видимости (scroll appear), используйте компонент `wow` и его атрибуты (`data-wow-*`).

## Пример

```html
<div class="animation p-2 radius-1/3 bg-primary color-on-primary">
  Появление по fade-анимации
</div>

<div class="animation infinite p-2 radius-1/3 bg-secondary color-on-secondary">
  Бесконечное повторение анимации
</div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=animation&group=animation-transition-appearing"></iframe>
</div>