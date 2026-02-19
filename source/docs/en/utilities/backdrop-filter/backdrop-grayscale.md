---
extends: _core._layouts.documentation
section: content
title: "Фон в оттенках серого элемента (backdrop-grayscale)"
description: "Фон в оттенках серого элемента (backdrop-grayscale)"
---

# Фон в оттенках серого элемента (backdrop-grayscale)


Данный модификатор позволяет управлять отображением фона элемента в оттенках серого.

## Классы и их значения

| Класс                    | Значение                      |
|:-------------------------|:------------------------------|
| .backdrop-grayscale-none | backdrop-filter: grayscale(0) |
| .backdrop-grayscale      | backdrop-filter: grayscale(1) |
{.table}

## Описание

- `backdrop-grayscale-none` — нормальная цветопередача фона.
- `backdrop-grayscale` — переводит фон в оттенки серого.

Вы можете использовать `hover:` для изменения состояния при наведении, например: `hover:backdrop-grayscale`.

## Синтаксис

- `{модификатор}`: `backdrop-grayscale-{none| }`
- Без адаптивности, поддержка `hover:` доступна.

## Пример использования

```html
<!-- При наведении фон станет оттенком серого -->
<div class="backdrop-grayscale-none hover:backdrop-grayscale p-4 bg-primary color-on-surface-inverse transition">
  Наведи, чтобы фон стал серым
</div>
```
