---
extends: _core._layouts.documentation
section: content
title: Параметры по умолчанию
description: Параметры по умолчанию
---

# Параметры по умолчанию

!rtags[divider-default-parameters]


Базовые классы включают или выключают разделители между соседними элементами контейнера.

`divider` задает общий `border` для всех соседних элементов (`> * + *`).
Если нужен классический "разделитель-линией" только по одной оси, используйте `divider-y-*` или `divider-x-*`.

## Таблица классов

| Класс | Значение |
|:--|:--|
| `.divider` | `> :not([hidden]) ~ :not([hidden]) { border: var(--sf-px) var(--sf-outline-variant) solid; }` |
| `.divider-none` | `> :not([hidden]) ~ :not([hidden]) { border-width: var(--sf-0); }` |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или `{модификатор}`.

- Контрольные точки: `sm`, `md`, `lg`, `xl`.
- Модификаторы: `divider`, `divider-none`.

## Пример

```html
<div class="divider-y-1 divider-outline">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div class="divider-y-1 divider-none">
  <div>Item A</div>
  <div>Item B</div>
</div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=divider&group=divider-default-parameters"></iframe>
</div>
