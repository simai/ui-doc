---
extends: _core._layouts.documentation
section: content
title: "Вращение оттенка фона элемента (backdrop-hue-rotate)"
description: "Вращение оттенка фона элемента (backdrop-hue-rotate)"
---

# Вращение оттенка фона элемента (backdrop-hue-rotate)

[https://dev.ru.simai.io/ru/ui/utility/backdrop-filter/backdrop-filter-hue-rotate.php](https://dev.ru.simai.io/ru/ui/utility/backdrop-filter/backdrop-filter-hue-rotate.php)

Данный модификатор позволяет управлять вращением оттенка фона элемента.

## Классы и их значения

| Класс                    | Значение                          |
|:-------------------------|:------------------------------------------------------|
| .backdrop-hue-rotate-0   | backdrop-filter: hue-rotate(0deg)                     |
| .backdrop-hue-rotate-15  | backdrop-filter: hue-rotate(15deg)                    |
| .backdrop-hue-rotate-30  | backdrop-filter: hue-rotate(30deg)                    |
| .backdrop-hue-rotate-60  | backdrop-filter: hue-rotate(60deg)                    |
| .backdrop-hue-rotate-90  | backdrop-filter: hue-rotate(90deg)                    |
| .backdrop-hue-rotate-180 | backdrop-filter: hue-rotate(180deg)                   |
| .-backdrop-hue-rotate-15 | backdrop-filter: hue-rotate(-15deg)                   |
| .-backdrop-hue-rotate-30 | backdrop-filter: hue-rotate(-30deg)                   |
| .-backdrop-hue-rotate-60 | backdrop-filter: hue-rotate(-60deg)                   |
| .-backdrop-hue-rotate-90 | backdrop-filter: hue-rotate(-90deg)                   |
{.table}

## Описание

- `backdrop-hue-rotate-{угол}` — меняет оттенок фона на заданный угол (например, `backdrop-hue-rotate-30` повернет
  оттенки на 30 градусов).
- Можно использовать `hover:` для изменения при наведении, например: `hover:backdrop-hue-rotate-90`.

## Синтаксис

- `{модификатор}`: `backdrop-hue-rotate-{угол}` или `-backdrop-hue-rotate-{угол}`
- Без адаптивности, поддержка `hover:` доступна.

## Пример использования

```html
<!-- При наведении оттенок фона поворачивается на 90 градусов -->
<div class="backdrop-hue-rotate-0 hover:backdrop-hue-rotate-90 p-4 bg-primary color-on-surface-inverse transition">
  Наведи, чтобы оттенок фона изменился
</div>
```

## Замена классов с предыдущей версии

| Старый класс           | Новый класс              |
|:-----------------------|:-------------------------|
| .backdrop-hue-rotate-1 | .backdrop-hue-rotate-15  |
| .backdrop-hue-rotate-2 | .backdrop-hue-rotate-30  |
| .backdrop-hue-rotate-3 | .backdrop-hue-rotate-60  |
| .backdrop-hue-rotate-4 | .backdrop-hue-rotate-90  |
| .backdrop-hue-rotate-5 | .backdrop-hue-rotate-180 |
{.table}
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=backdrop-filter&group=backdrop-hue-rotate"></iframe>
</div>