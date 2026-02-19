---
extends: _core._layouts.documentation
section: content
title: "Контрастность элемента (filter-contrast)"
description: "Контрастность элемента (filter-contrast)"
---

# Контрастность элемента (filter-contrast)


Данный модификатор позволяет управлять контрастностью элемента.

## Классы и их значения

| Класс         | Значение                |
|:--------------|:------------------------|
| .contrast-0   | filter: contrast(0);    |
| .contrast-1/4 | filter: contrast(0.8);  |
| .contrast-1/3 | filter: contrast(0.9);  |
| .contrast-1/2 | filter: contrast(0.95); |
| .contrast-1   | filter: contrast(1);    |
| .contrast-2   | filter: contrast(1.05); |
| .contrast-3   | filter: contrast(1.1);  |
| .contrast-4   | filter: contrast(1.2);  |
{.table}

## Описание

Модификаторы `contrast-*` управляют контрастностью элемента:

- `contrast-1` соответствует нормальной контрастности (1).
- Значения меньше `1` снижают контрастность, а больше `1` — повышают.

Можно использовать `hover:contrast-*` для изменения контрастности при наведении курсора.

## Синтаксис

- `contrast-0`, `contrast-1/4`, `contrast-1/3`, `contrast-1/2`, `contrast-1`, `contrast-2`, `contrast-3`, `contrast-4` —
  основные классы для установки контрастности.
- `hover:contrast-*` — изменение контрастности при наведении.

## Пример использования

```html
<!-- Нормальная контрастность -->
<div class="contrast-1 p-4 bg-primary color-on-surface-inverse">Контрастность нормальная</div>
```

```html
<!-- Повышение контрастности при наведении -->
<div class="contrast-1 hover:contrast-3 p-4 bg-secondary m-top-2 transition">Наведи, чтобы повысить контрастность</div>
```

## Замена классов с предыдущей версии

| Старый класс             | Новый класс   |
|:-------------------------|:--------------|
| .contrast-1, .contrast-2 | .contrast-1/4 |
| .contrast-3              | .contrast-1/3 |
| .contrast-4              | .contrast-1/2 |
| .contrast-5              | .contrast-1   |
| .contrast-6              | .contrast-2   |
| .contrast-7              | .contrast-3   |
| .contrast-8, .contrast-9 | .contrast-4   |
{.table}
