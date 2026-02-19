---
extends: _core._layouts.documentation
section: content
title: "Размытие фона элемента (backdrop-blur)"
description: "Размытие фона элемента (backdrop-blur)"
---

# Размытие фона элемента (backdrop-blur)


Данный модификатор позволяет размывать задний фон элемента.

## Классы

| Класс                 | Значение                    |
|:----------------------|:------------------------------------------------|
| .backdrop-blur-none   | backdrop-filter: blur(0)                        |
| .backdrop-blur-small  | backdrop-filter: blur(var(`--sf-blur-small`));  |
| .backdrop-blur        | backdrop-filter: blur(var(`--sf-blur-medium`)); |
| .backdrop-blur-medium | backdrop-filter: blur(var(`--sf-blur-medium`)); |
| .backdrop-blur-large  | backdrop-filter: blur(var(`--sf-blur-large`));  |
{.table}

## Переменные для размытия

| Переменная         | Значение       |
|:-------------------|:---------------|
| `--sf-blur-small`  | var(`--sf-a2`) |
| `--sf-blur-medium` | var(`--sf-a4`) |
| `--sf-blur-large`  | var(`--sf-a8`) |
{.table}

## Описание

- `backdrop-blur-none` — без размытия,
- `backdrop-blur-small` — слабое размытие фона,
- `backdrop-blur` или `backdrop-blur-medium` — среднее размытие фона,
- `backdrop-blur-large` — сильное размытие фона.

Можно использовать `hover:backdrop-blur-small` (и другие варианты) для изменения эффекта при наведении курсора.

## Синтаксис

- `backdrop-blur-none` — без размытия,
- `backdrop-blur-small` — слабое размытие,
- `backdrop-blur` (или `backdrop-blur-medium`) — среднее размытие,
- `backdrop-blur-large` — сильное размытие,
- Можно использовать `hover:` префикс для применения эффекта при наведении.

## Пример использования

```html
<!-- Слабое размытие фона при наведении -->
<div class="backdrop-blur-none hover:backdrop-blur-small p-4 bg-primary color-on-surface-inverse transition">
  Наведи для слабого размытия фона
</div>
```

## Замена классов с предыдущей версии

| Старый класс                                       | Новый класс           |
|:-----------------------------------------------------------------------|:----------------------|
| .backdrop-blur-1, .backdrop-blur-2                                     | .backdrop-blur-small  |
| .backdrop-blur-3                                                       | .backdrop-blur-medium |
| .backdrop-blur-4, .backdrop-blur-5, .backdrop-blur-6, .backdrop-blur-7 | .backdrop-blur-large  |
{.table}
