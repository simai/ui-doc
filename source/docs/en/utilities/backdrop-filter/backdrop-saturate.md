---
extends: _core._layouts.documentation
section: content
title: "Насыщенность подложки (backdrop-saturate)"
description: "Насыщенность подложки (backdrop-saturate)"
---

# Насыщенность подложки (backdrop-saturate)

[https://dev.ru.simai.io/ru/ui/utility/backdrop-filter/backdrop-filter-saturate.php](https://dev.ru.simai.io/ru/ui/utility/backdrop-filter/backdrop-filter-saturate.php)

Данный модификатор позволяет управлять насыщенностью фона элемента.

## Классы и их значения

| Класс                  | Значение                        |
|:-----------------------|:--------------------------------|
| .backdrop-saturate-0   | backdrop-filter: saturate(0)    |
| .backdrop-saturate-1/4 | backdrop-filter: saturate(0.25) |
| .backdrop-saturate-1/3 | backdrop-filter: saturate(0.5)  |
| .backdrop-saturate-1/2 | backdrop-filter: saturate(0.75) |
| .backdrop-saturate-1   | backdrop-filter: saturate(1)    |
| .backdrop-saturate-2   | backdrop-filter: saturate(1.25) |
| .backdrop-saturate-3   | backdrop-filter: saturate(1.5)  |
| .backdrop-saturate-4   | backdrop-filter: saturate(1.75) |
{.table}

## Описание

- `backdrop-saturate-0` — фон полностью обесцвечен по насыщенности.
- `backdrop-saturate-1` — нормальная насыщенность фона.
- `backdrop-saturate-2`, `backdrop-saturate-3`, `backdrop-saturate-4` — увеличенная насыщенность.
- `backdrop-saturate-1/4`, `backdrop-saturate-1/3`, `backdrop-saturate-1/2` — промежуточные ступени для более точного
  контроля насыщенности.

Можно использовать `hover:` для изменения при наведении, например:  
`hover:backdrop-saturate-2` для увеличения насыщенности при наведении.

## Синтаксис

- `{модификатор}`: backdrop-saturate-{значение}, где {значение} может быть 0, 1/4, 1/3, 1/2, 1, 2, 3, 4\.
- Без адаптивности, поддержка `hover:` доступна.

## Пример использования

```html
<!-- При наведении насыщенность фона станет выше -->
<div class="backdrop-saturate-1 hover:backdrop-saturate-3 p-4 bg-primary color-on-surface-inverse transition">
  Наведи, чтобы увеличить насыщенность фона
</div>
```

## Замена классов с предыдущей версии

| Старый класс         | Новый класс            |
|:---------------------|:-----------------------|
| .backdrop-saturate-1 | .backdrop-saturate-1/3 |
| .backdrop-saturate-2 | .backdrop-saturate-1   |
| .backdrop-saturate-3 | .backdrop-saturate-2   |
| .backdrop-saturate-4 | .backdrop-saturate-4   |
{.table}
