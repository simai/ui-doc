---
extends: _core._layouts.documentation
section: content
title: Цвет обводки
description: Цвет обводки
---

# Цвет обводки


С помощью модификаторов цвета обводки можно задать цвет линии у SVG-элементов.

## Таблица классов

| Класс                   | Значение          |
|:------------------------|:--------------------------------------|
| .stroke-transparent     | stroke: var(`--sf-transparent`)       |
| .stroke-current         | stroke: currentColor                  |
| .stroke                 | stroke: var(`--sf-outline-variant`)   |
| .stroke-outline         | stroke: var(`--sf-outline`)           |
| .stroke-outline-variant | stroke: var(`--sf-outline-variant`)   |
| .stroke-primary         | stroke: var(`--sf-outline-primary`)   |
| .stroke-secondary       | stroke: var(`--sf-outline-secondary`) |
| .stroke-tertiary        | stroke: var(`--sf-outline-tertiary`)  |
| .stroke-error           | stroke: var(`--sf-outline-error`)     |
| .stroke-warning         | stroke: var(`--sf-outline-warning`)   |
| .stroke-success         | stroke: var(`--sf-outline-success`)   |
{.table}

## Описание

Модификаторы цвета обводки определяют цвет линии (штриха) для SVG-элементов.  
Используя данные модификаторы, вы можете легко изменить цвет обводки,  
подстраивая графику под стиль и цветовую гамму интерфейса.

## Синтаксис

Использование: `{модификатор}`

- `stroke-{роль}` — задаёт цвет обводки согласно выбранной роли (например, `stroke-primary`).

## Пример использования

```html
<svg class="stroke-primary" width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="none" stroke-width="4" />
</svg>
```

В данном примере обводка круга будет иметь цвет, определённый переменной `--sf-outline-primary`.

## Переход от старых классов

Если в предыдущей версии использовались классы вида `stroke-main`, `stroke-danger-default` и т.п.,  
в новой версии применяются роли и outline-переменные.  
Пример замены:

- Было: `stroke-danger-default`  
  Стало: `stroke-error`

- Было: `stroke-info-default`  
  Стало: `stroke-primary` (или другой подходящий цвет, в зависимости от цели)

Используйте таблицу выше и соответствующие роли для перехода со старых классов к новым.
