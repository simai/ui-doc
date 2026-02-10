---
extends: _core._layouts.documentation
section: content
title: "Цвет падающей тени (drop-shadow-color)"
description: "Цвет падающей тени (drop-shadow-color)"
---

# Цвет падающей тени (drop-shadow-color)

[https://dev.ru.simai.io/ru/ui/utility/shadow/drop-shadow-color.php](https://dev.ru.simai.io/ru/ui/utility/shadow/drop-shadow-color.php)

Данные модификаторы позволяют задать цвет падающей тени элемента, используя роли (переменные), без адаптивности.
Также можно изменять цвет при наведении с помощью `hover:drop-shadow-{color}`.

## Классы

| Класс | Значение |
|:------|:---------|
| `.drop-shadow-{color}` | `--sf-shadow--color: var(--sf-{token})` |
| `.hover:drop-shadow-{color}` | Аналогично, но только в состоянии `:hover` |
| Поддерживаемые `color` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `on-surface`, `on-surface-variant` |
| Также поддерживаются | `surface`, `surface-0`, `surface-1`, `surface-2`, `surface-3`, `surface-4`, `surface-container`, `surface-inverse`, `surface-inverse-fixed` |
| Дополнительно | `primary-container`, `secondary-container`, `tertiary-container`, `error-container`, `warning-container`, `success-container`, `transparent`, `current` |
| Прозрачные варианты | `primary-transparent-select`, `primary-transparent-overlay`, `secondary-transparent-select`, `secondary-transparent-overlay`, `tertiary-transparent-select`, `tertiary-transparent-overlay`, `error-transparent-select`, `error-transparent-overlay`, `warning-transparent-select`, `warning-transparent-overlay`, `success-transparent-select`, `success-transparent-overlay` |
{.table}

## Описание

Модификаторы `drop-shadow-{color}` задают цвет падающей тени через семантические токены.
Модификатор `hover:drop-shadow-{color}` задаёт цвет падающей тени при наведении.

- Используйте `drop-shadow-primary`, `drop-shadow-success`, `drop-shadow-surface-container` и другие семантические модификаторы.
- Комбинируйте с классами уровня тени, например `drop-shadow-2`, для достижения нужного эффекта.
- Применяйте `hover:drop-shadow-error`, `hover:drop-shadow-warning` и т.д. для изменения цвета при наведении.

## Синтаксис

- `drop-shadow-{color}` — базовый цвет падающей тени.
- `hover:drop-shadow-{color}` — цвет падающей тени в `:hover`.

## Пример использования

```html
<!-- Элемент с тенью и цветом тени -->
<div class="drop-shadow-2 drop-shadow-primary p-4 radius-1/3 bg-surface">
    Падающая тень с цветом primary
</div>

<!-- Элемент, при наведении цвет тени меняется на error -->
<button class="drop-shadow-2 drop-shadow-success hover:drop-shadow-error p-2 radius-1/2 bg-surface-inverse color-on-surface m-top-2">
    Наведи на меня
</button>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=shadows&group=drop-shadow-color"></iframe>
</div>