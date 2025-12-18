---
extends: _core._layouts.documentation
section: content
title: "Цвет падающей тени (drop-shadow-color)"
description: "Цвет падающей тени (drop-shadow-color)"
---

# Цвет падающей тени (drop-shadow-color)

[https://dev.ru.simai.io/ru/ui/utility/shadow/drop-shadow-color.php](https://dev.ru.simai.io/ru/ui/utility/shadow/drop-shadow-color.php)

Данные модификаторы позволяют задать цвет падающей тени элемента, используя роли (переменные), без адаптивности. Можно
также изменять цвет при наведении с помощью `hover:drop-shadow-{color}`.

## Классы

| Класс                   | Значение                 |
|:------------------------|:---------------------------------------------|
| .drop-shadow-primary    | `--sf-shadow--color`: var(`--sf-primary`)    |
| .drop-shadow-secondary  | `--sf-shadow--color`: var(`--sf-secondary`)  |
| .drop-shadow-tertiary   | `--sf-shadow--color`: var(`--sf-tertiary`)   |
| .drop-shadow-error      | `--sf-shadow--color`: var(`--sf-error`)      |
| .drop-shadow-warning    | `--sf-shadow--color`: var(`--sf-warning`)    |
| .drop-shadow-success    | `--sf-shadow--color`: var(`--sf-success`)    |
| .drop-shadow-on-surface | `--sf-shadow--color`: var(`--sf-on-surface`) |
{.table}

## Описание

Модификаторы `drop-shadow-{color}` задают цвет падающей тени. При необходимости можно использовать
`hover:drop-shadow-{color}` для изменения цвета тени при наведении курсора.

- Используйте `drop-shadow-primary` или `drop-shadow-secondary` и т.д. для установки цвета падающей тени.
- Комбинируйте с классами уровня тени, например `drop-shadow-2`, для достижения нужного эффекта.
- Применяйте `hover:drop-shadow-error` для изменения цвета тени при наведении.

## Синтаксис

- `drop-shadow-{color}` — задать цвет падающей тени.
- `hover:drop-shadow-{color}` — задать цвет падающей тени при наведении.

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
