---
extends: _core._layouts.documentation
section: content
title: "Цвет подложки прокрутки (scroll-backdrop-color)"
description: "Цвет подложки прокрутки (scroll-backdrop-color)"
---

# Цвет подложки прокрутки (scroll-backdrop-color)

[https://dev.ru.simai.io/ru/ui/utility/scroll/scroll-backdrop-color.php](https://dev.ru.simai.io/ru/ui/utility/scroll/scroll-backdrop-color.php)

Используя данные модификаторы, вы можете изменить цвет фоновой подложки ползунка прокрутки.

## Классы и их значения

| Класс                  | Значение переменной (`--sf-scroll-bg-track`)  |
|:-----------------------|:------------------------------------------------------------------|
| .scroll-bg-transparent | var(`--sf-transparent`)                                           |
| .scroll-bg-current     | currentColor                                                      |
| .scroll-bg-surface     | var(`--sf-surface-transparent-overlay`)                           |
| .scroll-bg-primary     | var(`--sf-primary-transparent-overlay`)                           |
| .scroll-bg-secondary   | var(`--sf-secondary-transparent-overlay`)                         |
| .scroll-bg-tertiary    | var(`--sf-tertiary-transparent-overlay`)                          |
{.table}

## Описание

По умолчанию цвет устанавливается переменными --sf-scroll-bg-thumb и --sf-scroll-bg-track из ядра фреймворка. Эти
переменные задают цвет ползунка и фона трека соответственно.

- **scroll-bg-transparent**: Прозрачная подложка полосы прокрутки.
- **scroll-bg-current**: Подложка полосы прокрутки в текущем цвете текста (currentColor).
- **scroll-bg-surface**: Подложка полосы прокрутки с поверхностным прозрачным оверлеем.
- **scroll-bg-primary**: Подложка с прозрачным оверлеем основного цвета.
- **scroll-bg-secondary**: Подложка с прозрачным оверлеем второстепенного цвета.
- **scroll-bg-tertiary**: Подложка с прозрачным оверлеем третьего цвета.

## Синтаксис

Использование модификатора: `scroll-bg-{color}`

Например:

```html
<html class="scroll-bg-primary ...">
  <!-- ... -->
</html>
```

Где для `scroll-bg-primary` будет установлено `--sf-scroll-bg-track: var(--sf-primary-transparent-overlay);`.

## Пример использования

Ниже пример с длинным текстом, который продемонстрирует прокрутку. В качестве длинного текста используем
последовательность букв алфавита повторённую многократно, например:

abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz

(Длина набрана повторением алфавита несколько раз.)

```html
<html class="scroll-bg-surface h-d5 overflow-auto ...">
  <div class="p-1">
    abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
  </div>
</html>
```

Обратите внимание, что этот стиль может не работать во всех браузерах. Поддержку можно проверить
здесь: [MDN scrollbar-color](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color).
