---
extends: _core._layouts.documentation
section: content
title: "Вращение оттенка элемента (filter-hue-rotate)"
description: "Вращение оттенка элемента (filter-hue-rotate)"
---

# Вращение оттенка элемента (filter-hue-rotate)

!rtags[filter-hue-rotate]



Данный модификатор позволяет управлять вращением оттенка (цветового тона) элемента.

## Классы и их значения

| Класс           | Значение                   |
|:----------------|:---------------------------|
| .hue-rotate-0   | filter: hue-rotate(0deg)   |
| .hue-rotate-15  | filter: hue-rotate(15deg)  |
| .hue-rotate-30  | filter: hue-rotate(30deg)  |
| .hue-rotate-60  | filter: hue-rotate(60deg)  |
| .hue-rotate-90  | filter: hue-rotate(90deg)  |
| .hue-rotate-180 | filter: hue-rotate(180deg) |
| .-hue-rotate-15 | filter: hue-rotate(-15deg) |
| .-hue-rotate-30 | filter: hue-rotate(-30deg) |
| .-hue-rotate-60 | filter: hue-rotate(-60deg) |
| .-hue-rotate-90 | filter: hue-rotate(-90deg) |
{.table}

## Описание

Модификатор `hue-rotate-{градусы}` изменяет оттенок всего элемента на заданное количество градусов. Положительные
значения вращают цветовой тон по часовой стрелке, отрицательные — против.

Можно использовать `hover:hue-rotate-15` или любой другой класс, чтобы изменение оттенка происходило при наведении
курсора.

## Синтаксис

- `hue-rotate-{число}` — вращение оттенка на указанный угол в градусах.
- Можно использовать `hover:hue-rotate-{число}` для изменения оттенка при наведении.

## Пример использования

```html
<!-- Элемент без изменения оттенка -->
<div class="hue-rotate-0 p-4 bg-primary color-on-surface-inverse">Исходный цвет</div>
```

```html
<!-- Изменение оттенка при наведении -->
<div class="hue-rotate-0 hover:hue-rotate-90 p-4 bg-secondary transition">
  Наведи, чтобы оттенок изменился
</div>
```

## Замена старых классов на новые

| Старый класс  | Новый класс     |
|:--------------|:----------------|
| .hue-rotate-1 | .hue-rotate-15  |
| .hue-rotate-2 | .hue-rotate-30  |
| .hue-rotate-3 | .hue-rotate-60  |
| .hue-rotate-4 | .hue-rotate-90  |
| .hue-rotate-5 | .hue-rotate-180 |
{.table}
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=filters&group=filter-hue-rotate"></iframe>
</div>
