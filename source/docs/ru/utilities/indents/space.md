---
extends: _core._layouts.documentation
section: content
title: Промежутки (space)
description: Промежутки (space)
---

# Промежутки (space)

[https://dev.ru.simai.io/ru/ui/utility/space/space.php](https://dev.ru.simai.io/ru/ui/utility/space/space.php)

`space` добавляет равномерные отступы между соседними дочерними элементами, не затрагивая крайние.

## Таблица классов

| Класс                | Значение                                                 |
|:---------------------|:---------------------------------------------------------|
| .space-x-{n} > * + * | горизонтальный интервал var(`--sf-space-{n}`) между элементами |
| .space-y-{n} > * + * | вертикальный интервал var(`--sf-space-{n}`) между элементами   |
| .space-x-reverse     | реверсирует направление горизонтальных отступов          |
| .space-y-reverse     | реверсирует направление вертикальных отступов            |
{.table}

Где `{n}` ∈ `0, 1/4, 1/3, 1/2, 1, 2, 3, 4, 5, 6, 7, 8`.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: `sm`, `md`, `lg`, `xl` — применяет интервал с указанного брейкпоинта.
- Модификатор *(обязательный параметр)*: `space-x-{n}`, `space-y-{n}`, опционально с `space-*-reverse`.

## Пример использования

```html
<div class="flex space-x-3">
  <div class="sf-card bg-primary color-on-primary p-2">A</div>
  <div class="sf-card bg-secondary color-on-secondary p-2">B</div>
  <div class="sf-card bg-tertiary color-on-tertiary p-2">C</div>
</div>

<div class="flex flex-col space-y-2 space-y-reverse">
  <div class="sf-card bg-primary color-on-primary p-2">1</div>
  <div class="sf-card bg-secondary color-on-secondary p-2">2</div>
  <div class="sf-card bg-tertiary color-on-tertiary p-2">3</div>
</div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=indents&group=space"></iframe>
</div>