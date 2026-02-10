---
extends: _core._layouts.documentation
section: content
title: Размер фона
description: Управление размером фонового изображения
---

# Размер фона

[https://dev.ru.simai.io/ru/ui/utility/background-image/background-size.php](https://dev.ru.simai.io/ru/ui/utility/background-image/background-size.php)

Утилиты `background-size` управляют масштабированием фонового изображения внутри элемента.

## Таблица классов (базовые)

| Класс        | Значение                  |
|:-------------|:--------------------------|
| `.bg-auto`   | `background-size: auto;`  |
| `.bg-cover`  | `background-size: cover;` |
| `.bg-contain`| `background-size: contain;` |
{.table}

## Таблица классов (расширенные)

| Класс                | Значение                                  |
|:---------------------|:------------------------------------------|
| `.bg-size-0`...`.bg-size-100` | `background-size: 0%...100%;` |
| `.bg-size-a0`...`.bg-size-i9` | `background-size: var(--sf-a0)...var(--sf-i9);` |
{.table}

## Описание

- `bg-auto` — фон в исходном размере.
- `bg-cover` — фон покрывает весь блок (с возможной обрезкой).
- `bg-contain` — фон полностью помещается в блок.
- `bg-size-*` — расширенные размеры: проценты и токены size-scale.

## Синтаксис

Использование: `{контрольная_точка}:{модификатор}` или `{модификатор}`

- Контрольная точка *(необязательный параметр)*: `sm`, `md`, `lg`, `xl`.
- Модификатор *(обязательный параметр)*: один из классов из таблиц выше.

## Примеры использования

```html
<div class="bg-cover h-e8" style="background-image:url('/assets/img/simai.svg');"></div>
<div class="bg-size-50 h-e8" style="background-image:url('/assets/img/simai.svg');"></div>
<div class="bg-size-a8 h-e8" style="background-image:url('/assets/img/simai.svg');"></div>
```

## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=background&group=background-size"></iframe>
</div>
