---
extends: _core._layouts.documentation
section: content
title: Толщина разделителя
description: Толщина разделителя
---

# Толщина разделителя

[https://dev.ru.simai.io/ru/ui/utility/divider/divider-width.php](https://dev.ru.simai.io/ru/ui/utility/divider/divider-width.php)

В SIMAI Framework с помощью модификаторов можно управлять толщиной разделителя между соседними элементами. Толщина
задаётся в условных единицах от 0 до 4.

## Таблица классов

| Класс                                        | Значение                                                                                                                                                              |
|:---------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| .divider-x-0 > :not([hidden]) ~ :not([hidden]) | border-right-width: calc(var(`--sf-0`) * var(``--sf-divider--reverse-x``));<br/> border-left-width: calc(var(`--sf-0`) * calc(1 - var(``--sf-divider--reverse-x``))); |
| .divider-y-0 > :not([hidden]) ~ :not([hidden]) | border-top-width: calc(var(`--sf-0`) * calc(1 - var(``--sf-divider--reverse-y``)));<br/> border-bottom-width: calc(var(`--sf-0`) * var(`--sf-divider--reverse-y`));   |
| .divider-x-1 > :not([hidden]) ~ :not([hidden]) | border-right-width: calc(var(`--sf-a1`) * var(`--sf-divider--reverse-x`));<br/> border-left-width: calc(var(`--sf-a1`) * calc(1 - var(`--sf-divider--reverse-x`)));   |
| .divider-y-1 > :not([hidden]) ~ :not([hidden]) | border-top-width: calc(var(`--sf-a1`) * calc(1 - var(`--sf-divider--reverse-y`)));<br/> border-bottom-width: calc(var(`--sf-a1`) * var(`--sf-divider--reverse-y`));   |
| .divider-x-2 > :not([hidden]) ~ :not([hidden]) | border-right-width: calc(var(`--sf-a2`) * var(`--sf-divider--reverse-x`));<br/> border-left-width: calc(var(`--sf-a2`) * calc(1 - var(`--sf-divider--reverse-x`)));   |
| .divider-y-2 > :not([hidden]) ~ :not([hidden]) | border-top-width: calc(var(`--sf-a2`) * calc(1 - var(`--sf-divider--reverse-y`)));<br/> border-bottom-width: calc(var(`--sf-a2`) * var(`--sf-divider--reverse-y`));   |
| .divider-x-3 > :not([hidden]) ~ :not([hidden]) | border-right-width: calc(var(`--sf-a3`) * var(`--sf-divider--reverse-x`));<br/> border-left-width: calc(var(`--sf-a3`) * calc(1 - var(`--sf-divider--reverse-x`)));   |
| .divider-y-3 > :not([hidden]) ~ :not([hidden]) | border-top-width: calc(var(`--sf-a3`) * calc(1 - var(`--sf-divider--reverse-y`)));<br/> border-bottom-width: calc(var(`--sf-a3`) * var(`--sf-divider--reverse-y`));   |
| .divider-x-4 > :not([hidden]) ~ :not([hidden]) | border-right-width: calc(var(`--sf-a4`) * var(`--sf-divider--reverse-x`));<br/> border-left-width: calc(var(`--sf-a4`) * calc(1 - var(`--sf-divider--reverse-x`)));   |
| .divider-y-4 > :not([hidden]) ~ :not([hidden]) | border-top-width: calc(var(`--sf-a4`) * calc(1 - var(`--sf-divider--reverse-y`)));<br/> border-bottom-width: calc(var(`--sf-a4`) * var(`--sf-divider--reverse-y`));   |
{.table}

## Описание

Модификаторы толщины разделителя (`divider-x-{0...4}` или `divider-y-{0...4}`) задают ширину линии разделителя по
горизонтали или вертикали между элементами в контейнере.

- `divider-x-{толщина}` — задаёт толщину разделителя между элементами по горизонтали.
- `divider-y-{толщина}` — задаёт толщину разделителя между элементами по вертикали.

Обратите внимание, что для корректной работы необходимо указать направление (`x` или `y`) и толщину. При необходимости
можно использовать модификатор `divider-reverse` для правильного отображения границ, если дочерние элементы расположены
в обратном порядке.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Позволяет применить модификатор, начиная с определённого размера экрана (sm, md, lg, xl).

- Модификатор *(обязательный параметр)*:

    - `divider-x-{0...4}` — толщина разделителя по горизонтали.
    - `divider-y-{0...4}` — толщина разделителя по вертикали.

## Пример использования

### Толщина разделителя по горизонтали:

```html
<div class="grid grid-col-3 divider-x-1 ...">
    <div class="p-1">1</div>
    <div class="p-1">2</div>
    <div class="p-1">3</div>
</div>
```

### Толщина разделителя по вертикали:

```html
<div class="grid grid-row-3 divider-y-1 ...">
    <div class="p-1">1</div>
    <div class="p-1">2</div>
    <div class="p-1">3</div>
</div>
```

### Обратный порядок элементов:

```html
<div class="flex flex-col-reverse divider-y-1 divider-y-reverse ...">
    <div class="p-1">1</div>
    <div class="p-1">2</div>
    <div class="p-1">3</div>
</div>
```

## Адаптивность

Для изменения толщины разделителя на разных размерах экрана добавьте префикс контрольной точки:

```html
<div class="md:divider-x-2 ..."></div>
<div class="lg:divider-y-3 ..."></div>
```
