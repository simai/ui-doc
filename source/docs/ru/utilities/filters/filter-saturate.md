---
extends: _core._layouts.documentation
section: content
title: "Насыщенность элемента (filter-saturate)"
description: "Насыщенность элемента (filter-saturate)"
---

# Насыщенность элемента (filter-saturate)

!rtags[filter-saturate]



Данный модификатор позволяет управлять насыщенностью элемента, делая цвета более или менее интенсивными.

## Классы и их значения

| Класс         | Значение               |
|:--------------|:-----------------------|
| .saturate-0   | filter: saturate(0)    |
| .saturate-1/4 | filter: saturate(0.25) |
| .saturate-1/3 | filter: saturate(0.5)  |
| .saturate-1/2 | filter: saturate(0.75) |
| .saturate-1   | filter: saturate(1)    |
| .saturate-2   | filter: saturate(1.25) |
| .saturate-3   | filter: saturate(1.5)  |
| .saturate-4   | filter: saturate(1.75) |
{.table}

## Описание

Модификатор `saturate` управляет насыщенностью цвета:

- Значение `0` полностью убирает насыщенность (картинка станет чёрно-белой),
- Значение `1` — нормальная насыщенность,
- Значения больше 1 делают цвета ярче, меньше 1 — бледнее.

Можно использовать `hover:saturate-x` для изменения насыщенности при наведении.

## Синтаксис

- `saturate-0` — нулевая насыщенность.
- `saturate-1/4`, `saturate-1/3`, `saturate-1/2` — пониженная насыщенность.
- `saturate-1` — нормальная насыщенность.
- `saturate-2`, `saturate-3`, `saturate-4` — повышенная насыщенность.
- Можно использовать `hover:saturate-...` для изменения насыщенности при наведении.

## Пример использования

```html
<!-- Нормальная насыщенность -->
<div class="saturate-1 p-4 bg-primary color-on-surface-inverse">
  Нормальная насыщенность
</div>
```

```html
<!-- Повышенная насыщенность при наведении -->
<div class="saturate-1 hover:saturate-2 p-4 bg-secondary transition">
  Наведи для увеличения насыщенности
</div>
```

## Замена с предыдущей версии

| Старый класс | Новый класс   |
|:-------------|:--------------|
| .saturate-1  | .saturate-1/3 |
| .saturate-2  | .saturate-1   |
| .saturate-3  | .saturate-2   |
| .saturate-4  | .saturate-4   |
{.table}
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=filters&group=filter-saturate"></iframe>
</div>
