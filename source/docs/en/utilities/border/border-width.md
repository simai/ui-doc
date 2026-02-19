---
extends: _core._layouts.documentation
section: content
title: Толщина границы
description: Толщина границы
---

# Толщина границы


С помощью модификаторов толщины границы в SIMAI Framework вы можете контролировать толщину границ со всех сторон
элемента, по горизонтали или вертикали, а также с конкретных сторон. Это позволяет точно управлять отображением границ и
подстраивать их под дизайн вашего интерфейса.

## Таблица классов

| Класс            | Значение                                                |
|:-----------------|:----------------------------------------------------------------------------|
| .border-0        | border-width: var(`--sf-0`);                                                |
| .border-x-0      | border-left-width: var(`--sf-0`);<br/> border-right-width: var(`--sf-0`);   |
| .border-y-0      | border-top-width: var(`--sf-0`);<br/> border-bottom-width: var(`--sf-0`);   |
| .border-left-0   | border-left-width: var(`--sf-0`);                                           |
| .border-right-0  | border-right-width: var(`--sf-0`);                                          |
| .border-top-0    | border-top-width: var(`--sf-0`);                                            |
| .border-bottom-0 | border-bottom-width: var(`--sf-0`);                                         |
| .border-1        | border-width: var(`--sf-a1`);                                               |
| .border-x-1      | border-left-width: var(`--sf-a1`);<br/> border-right-width: var(`--sf-a1`); |
| .border-y-1      | border-top-width: var(`--sf-a1`);<br/> border-bottom-width: var(`--sf-a1`); |
| .border-left-1   | border-left-width: var(`--sf-a1`);                                          |
| .border-right-1  | border-right-width: var(`--sf-a1`);                                         |
| .border-top-1    | border-top-width: var(`--sf-a1`);                                           |
| .border-bottom-1 | border-bottom-width: var(`--sf-a1`);                                        |
| .border-2        | border-width: var(`--sf-a2`);                                               |
| ...              | ...                                                                         |
| .border-4        | border-width: var(`--sf-a4`);                                               |
| ...              | ...                                                                         |
{.table}

*(Полный список смотрите в исходных данных. Вы можете использовать значения от 0 до 4.)*

## Описание

Модификаторы толщины границы позволяют быстро изменять толщину обводки элемента:

- `border-{число}` задаёт толщину границы со всех сторон.
- `border-x-{число}` и `border-y-{число}` управляют толщиной границы по горизонтали  
  или вертикали.
- `border-{left|right|top|bottom}-{число}` позволяет задать толщину границы для  
  конкретной стороны.

## Синтаксис

Использование:

- `{модификатор}` — применить модификатор для всех размеров экрана.
- `{контрольная точка}:{модификатор}` — адаптивное применение модификатора, начиная  
  с заданного размера экрана (например, `md:border-2`).

Адаптивность позволяет изменять толщину границ на разных размерах экрана, а добавление  
`hover:` перед модификатором позволит изменять толщину границ при наведении курсора.

## Пример использования

```html
<!-- Толщина границ со всех сторон -->
<div class="border-2">border-2</div>

<!-- Толщина границ по горизонтали -->
<div class="border-x-2">border-x-2</div>

<!-- Толщина границ по вертикали -->
<div class="border-y-2">border-y-2</div>

<!-- Толщина границы только слева -->
<div class="border-left-2">border-left-2</div>

<!-- Увеличение толщины границы при наведении -->
<div class="hover:border-3">Наведи на меня</div>

<!-- Адаптивное применение: начиная с размера экрана md толщина границы будет 2 -->
<div class="md:border-2">Толщина 2 при md и больше</div>
```
