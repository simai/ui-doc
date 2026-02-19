---
extends: _core._layouts.documentation
section: content
title: "Сепия подложки (backdrop-sepia)"
description: "Сепия подложки (backdrop-sepia)"
---

# Сепия подложки (backdrop-sepia)

!rtags[backdrop-sepia]



Данный модификатор позволяет управлять отображением фона элемента как сепия.

## Классы и их значения

| Класс                | Значение                  |
|:---------------------|:--------------------------|
| .backdrop-sepia-none | backdrop-filter: sepia(0) |
| .backdrop-sepia      | backdrop-filter: sepia(1) |
{.table}

## Описание

- `backdrop-sepia-none` — фон отображается без сепии.
- `backdrop-sepia` — фон отображается в стиле сепии.

Убираем адаптивность, но оставляем возможность использовать `hover:` для изменения состояния при наведении, например:  
`hover:backdrop-sepia` для применения сепии при наведении курсора.

## Синтаксис

- `{модификатор}`: backdrop-sepia-{none|sepia}
- Без адаптивности, поддержка `hover:` доступна.

## Пример использования

```html
<!-- При наведении фон элемента станет сепийным -->
<div class="backdrop-sepia-none hover:backdrop-sepia p-4 bg-primary color-on-surface-inverse transition">
  Наведи, чтобы применить сепию к фону
</div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=backdrop-filter&group=backdrop-sepia"></iframe>
</div>
