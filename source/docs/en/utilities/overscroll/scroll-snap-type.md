---
extends: _core._layouts.documentation
section: content
title: "Тип привязки прокрутки (scroll-snap-type)"
description: "Тип привязки прокрутки (scroll-snap-type)"
---

# Тип привязки прокрутки (scroll-snap-type)

[https://dev.ru.simai.io/ru/ui/utility/scroll/scroll-snap-type.php](https://dev.ru.simai.io/ru/ui/utility/scroll/scroll-snap-type.php)

Данные модификаторы позволяют определять, как именно точки привязки прокрутки будут влиять на поведение контейнера. Вы
можете указать направление привязки (горизонтальное, вертикальное или обе оси) и степень строгости, с которой контейнер
будет "цепляться" за эти точки (mandatory или proximity).

## Краткое описание

С помощью данного пакета модификаторов вы можете настроить, будет ли контейнер всегда останавливать прокрутку в точках
привязки или же это произойдет только при приближении к ним. Также можно указать ось, по которой будет работать
привязка (x, y или both).

## Классы и их значения

| Класс           | Значение                            |
|:----------------|:--------------------------------------------------------|
| .snap-none      | scroll-snap-type: none;                                 |
| .snap-x         | scroll-snap-type: x var(`--sf-scroll-snap-strictness`); |
| .snap-y         | scroll-snap-type: y var(`--sf-scroll-snap-strictness`); |
| .snap-both      | scroll-snap-type: both mandatory;                       |
| .snap-example   | scroll-snap-type: Array; *(пример, не использовать)*    |
| .snap-mandatory | `--sf-scroll-snap-strictness`: mandatory;               |
| .snap-proximity | `--sf-scroll-snap-strictness`: proximity;               |
{.table}

## Описание

- **snap-none**: Отключает привязку прокрутки.
- **snap-x**: Привязка по горизонтальной оси (x).
- **snap-y**: Привязка по вертикальной оси (y).
- **snap-both**: Привязка одновременно по обеим осям (both) с обязательной остановкой (mandatory).
- **snap-mandatory**: Заставляет контейнер останавливаться ровно на точках привязки.
- **snap-proximity**: Позволяет контейнеру останавливаться на точках привязки, только когда они находятся достаточно
  близко (поведение по умолчанию).

## Синтаксис

Использование модификаторов: `{snap-модификатор}`

Например:

```html
<div class="snap-x snap-mandatory overflow-auto w-full ...">
  <div class="snap-center inline-block ...">
    <!-- Элемент для привязки -->
  </div>
  <div class="snap-center inline-block ...">
    <!-- Элемент для привязки -->
  </div>
</div>
```

## Пример использования

```html
<!-- Привязка по оси X, обязательная остановка и выравнивание по центру -->
<div class="snap-x snap-mandatory overflow-auto w-full h-d5 bg-surface-1 ...">
  <div class="snap-center inline-block w-b2 h-b2 bg-primary m-1 ..."></div>
  <div class="snap-center inline-block w-b2 h-b2 bg-secondary m-1 ..."></div>
  <div class="snap-center inline-block w-b2 h-b2 bg-tertiary m-1 ..."></div>
</div>
```
