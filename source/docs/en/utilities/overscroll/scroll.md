---
extends: _core._layouts.documentation
section: content
title: Толщина ползунка прокрутки (scroll)
description: Толщина ползунка прокрутки (scroll)
---

# Толщина ползунка прокрутки (scroll)

[https://dev.ru.simai.io/ru/ui/utility/scroll/scroll-slider-width.php](https://dev.ru.simai.io/ru/ui/utility/scroll/scroll-slider-width.php)

## Классы и их значения

| Класс     | Значение переменной     |
|:----------|:------------------------|
| .scroll-1 | height: var(`--sf-a1`); |
| .scroll-2 | height: var(`--sf-a2`); |
| .scroll-3 | height: var(`--sf-a4`); |
| .scroll-4 | height: var(`--sf-a8`); |
{.table}

## Описание

Данные модификаторы позволяют задавать толщину (высоту) ползунка вертикальной прокрутки. Их применение изменяет значение
высоты ползунка. В ядре фреймворка эта настройка применяется к псевдоклассам scrollbar, чтобы задать размер
вертикального скроллбара. Используя классы scroll-1 ... scroll-4 вы можете регулировать толщину ползунка в соответствии
с дизайном.

## Синтаксис

- scroll-{1...4} – задать толщину ползунка прокрутки.

## Пример использования

```html
<html class="scroll-4 h-d5 overflow-auto ...">
  <div class="p-1">
    abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
  </div>
</html>
```
