---
extends: _core._layouts.documentation
section: content
title: Вид градиента
description: Вид градиента
---

# Вид градиента


С помощью модификаторов вида градиента можно задать тип градиентной заливки для фона элемента.

## Таблица классов

| Класс        | Значение                                                                                                                           |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| .gr-line-2   | background: linear-gradient(var(`--sf-gradient--angle`), var(`--sf-gradient--color-1`), var(`--sf-gradient--color-2`));                                |
| .gr-line-3   | background: linear-gradient(var(`--sf-gradient--angle`), var(`--sf-gradient--color-1`), var(`--sf-gradient--color-2`), var(`--sf-gradient--color-3`)); |
| .gr-radial-2 | background: radial-gradient(var(`--sf-gradient--color-1`), var(`--sf-gradient--color-2`));                                                             |
| .gr-radial-3 | background: radial-gradient(var(`--sf-gradient--color-1`), var(`--sf-gradient--color-2`), var(`--sf-gradient--color-3`));                              |
| .gr-conic-2  | background: conic-gradient(var(`--sf-gradient--color-1`), var(`--sf-gradient--color-2`));                                                              |
| .gr-conic-3  | background: conic-gradient(var(`--sf-gradient--color-1`), var(`--sf-gradient--color-2`), var(`--sf-gradient--color-3`));                               |
{.table}

## Описание

Модификаторы вида градиента позволяют выбрать тип градиента: линейный, радиальный или конический, а также количество
цветов (2 или 3). Для задания конкретных цветов используются дополнительные модификаторы вида `gr1-{color}`,
`gr2-{color}`, `gr3-{color}`.

## Примеры использования

```html
<!-- Линейный градиент с двумя цветами -->
<div class="gr-line-2 gr1-primary-default gr2-danger-default ..."></div>
```

```html
<!-- Линейный градиент с тремя цветами -->
<div class="gr-line-3 gr1-primary-default gr2-danger-default gr3-info-default ..."></div>
```

```html
<!-- Радиальный градиент с двумя цветами -->
<div class="gr-radial-2 gr1-primary-default gr2-danger-default ..."></div>
```

```html
<!-- Радиальный градиент с тремя цветами -->
<div class="gr-radial-3 gr1-primary-default gr2-danger-default gr3-info-default ..."></div>
```

```html
<!-- Конический градиент с двумя цветами -->
<div class="gr-conic-2 gr1-primary-default gr2-danger-default ..."></div>
```

```html
<!-- Конический градиент с тремя цветами -->
<div class="gr-conic-3 gr1-primary-default gr2-danger-default gr3-info-default ..."></div>
```
