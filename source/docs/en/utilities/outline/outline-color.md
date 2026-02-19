---
extends: _core._layouts.documentation
section: content
title: Цвет внешней границы
description: Цвет внешней границы
---

# Цвет внешней границы


С помощью модификаторов цвета внешней границы (`outline`) вы можете изменять цвет внешней рамки элемента.

## Таблица классов

| Класс                    | Значение                 |
|:-------------------------|:---------------------------------------------|
| .outline-transparent     | outline-color: var(`--sf-transparent`)       |
| .outline-current         | outline-color: currentColor                  |
| .outline-outline         | outline-color: var(`--sf-outline`)           |
| .outline-outline-variant | outline-color: var(`--sf-outline-variant`)   |
| .outline-primary         | outline-color: var(`--sf-outline-primary`)   |
| .outline-secondary       | outline-color: var(`--sf-outline-secondary`) |
| .outline-tertiary        | outline-color: var(`--sf-outline-tertiary`)  |
| .outline-error           | outline-color: var(`--sf-outline-error`)     |
| .outline-warning         | outline-color: var(`--sf-outline-cation`)    |
| .outline-success         | outline-color: var(`--sf-outline-success`)   |
{.table}

## Описание

Адаптивный модификатор `outline-color` позволяет задать цвет внешней границы элемента в зависимости от размера области
просмотра. При использовании этих классов, внешний контур (`outline`) будет окрашен в указанный цвет.

- `outline-transparent` — делает внешнюю границу прозрачной.
- `outline-current` — использует текущий цвет текста, заданный свойством `color`.
- `outline-outline` | `outline-outline-variant` — применяют соответствующие цвета ролей фреймворка.
- `outline-primary` | `outline-secondary` | `outline-tertiary` | `outline-error` | `outline-warning` |
  `outline-success` — применяют системные цвета согласно их ролям (основной, вторичный, третичный, для ошибок,
  предупреждений или успехов).

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: Применяет модификатор начиная с определенного размера области
  просмотра (sm, md, lg, xl).

- Модификатор *(обязательный параметр)*:
  `outline-{transparent|current|outline|outline-variant|primary|secondary|tertiary|error|warning|success}`

## Пример использования

```html
<!-- Пример разных цветов внешней границы -->
<button class="outline-2 outline-solid outline-danger-default outline-offset-2 outline-primary ...">Кнопка 1</button>
<button class="outline-2 outline-solid outline-primary outline-offset-2 outline-secondary ...">Кнопка 2</button>
<button class="outline-2 outline-solid outline-warning outline-offset-2 outline-success ...">Кнопка 3</button>
```

## Адаптивность

Для изменения цвета внешней границы на разных размерах экрана можно использовать префикс контрольной точки:

```html
<!-- На экранах от Medium и больше цвет внешней границы будет tertiary -->
<button class="md:outline-tertiary outline-2 outline-solid outline-offset-2 outline-primary ...">Адаптивная кнопка</button>
```
