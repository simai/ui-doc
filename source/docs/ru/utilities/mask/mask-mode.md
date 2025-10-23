---
extends: _core._layouts.documentation
section: content
title: Режим маски
description: Режим маски
---

# Режим маски

[https://dev.ru.simai.io/ru/ui/utility/mask/mask-mode.php](https://dev.ru.simai.io/ru/ui/utility/mask/mask-mode.php)

С помощью модификаторов режима маски можно указать, каким образом будет накладываться маска: через альфа-канал или по
яркости, либо автоматически соответствует источнику.

## Таблица классов

| Класс           | Значение                 |
|:----------------|:-------------------------|
| .mask-alpha     | mask-mode: alpha;        |
| .mask-luminance | mask-mode: luminance;    |
| .mask-source    | mask-mode: match-source; |
{.table}

## Описание

Модификаторы режима маски определяют, как анализируется пиксельный контент при маскировании:

- **mask-alpha** – используется альфа-канал изображения маски.
- **mask-luminance** – используется яркость пикселей для маскирования.
- **mask-source** – режим маски соответствует источнику (браузер сам определяет, какой использовать метод).

## Примеры использования

```html
<!-- Маскирование по альфа-каналу -->
<div class="mask-alpha">...</div>

<!-- Маскирование по яркости -->
<div class="mask-luminance">...</div>

<!-- Маскирование с использованием источника -->
<div class="mask-source">...</div>
```
