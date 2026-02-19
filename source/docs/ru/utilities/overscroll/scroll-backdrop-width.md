---
extends: _core._layouts.documentation
section: content
title: "Толщина подложки прокрутки (scroll-backdrop-width)"
description: "Толщина подложки прокрутки (scroll-backdrop-width)"
---

# Толщина подложки прокрутки (scroll-backdrop-width)

!rtags[scroll-backdrop-width]



С помощью данных модификаторов вы можете изменить ширину подложки полосы прокрутки, используя предопределённые размеры.

## Классы и их значения

| Класс        | Значение               |
|:-------------|:-----------------------|
| .scroll-bg-1 | width: var(`--sf-a1`); |
| .scroll-bg-2 | width: var(`--sf-a2`); |
| .scroll-bg-3 | width: var(`--sf-a4`); |
| .scroll-bg-4 | width: var(`--sf-a8`); |
{.table}

## Описание

Модификаторы `scroll-bg-{n}` настраивают толщину подложки полосы прокрутки, используя значения из стандартных размерных
переменных фреймворка.

- **scroll-bg-1**: Минимальная толщина подложки прокрутки.
- **scroll-bg-2**: Небольшая толщина подложки прокрутки.
- **scroll-bg-3**: Средняя толщина подложки прокрутки.
- **scroll-bg-4**: Увеличенная толщина подложки прокрутки.

## Синтаксис

Использование модификатора: `scroll-bg-{n}`

Где `scroll-bg-3` задаёт `width: var(--sf-a4);`

## Пример использования

Ниже пример с очень длинным текстом для демонстрации полосы прокрутки.

```html
<html class="scroll-bg-3 h-d5 overflow-auto ...">
  <div class="p-1">
    abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
  </div>
</html>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=overscroll&group=scroll-backdrop-width"></iframe>
</div>
