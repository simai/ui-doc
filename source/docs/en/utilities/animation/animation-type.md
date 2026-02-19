---
extends: _core._layouts.documentation
section: content
title: Тип анимации
description: Тип анимации
---

# Тип анимации


Тип анимации позволяет выбрать конкретный тип анимации (например, появление слева, справа или снизу). Эти классы
используются без адаптивных условий и состояний наведения. Они дополняют класс `animation`, задавая конкретный эффект.

## Классы и их значения

Ниже перечислены часто используемые типы анимаций:

| Класс                  | Значение                   |
|:-----------------------|:---------------------------|
| .animation-from-left   | Элемент появляется слева.  |
| .animation-from-right  | Элемент появляется справа. |
| .animation-from-bottom | Элемент появляется снизу.  |
{.table}

## Описание

Добавляя один из классов `animation-from-left`, `animation-from-right` или `animation-from-bottom` к элементу, которому
уже назначен класс `animation`, вы задаёте направление и тип анимации появления элемента.

## Синтаксис

Использование модификатора: `{animation-type}`

```html
<div class="animation animation-from-left p-2 radius-1/3 bg-success color-on-surface-inverse">
    Появляюсь слева!
</div>
```

## Пример использования

```html
<div class="animation animation-from-right p-2 radius-1/3 bg-tertiary color-on-surface-inverse">
    Появляюсь справа!
</div>

<div class="animation animation-from-bottom p-2 radius-1/3 bg-error color-on-surface-inverse">
    Появляюсь снизу!
</div>
```
