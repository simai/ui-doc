---
extends: _core._layouts.documentation
section: content
title: Цвет разделителя
description: Цвет разделителя
---

# Цвет разделителя

[https://dev.ru.simai.io/ru/ui/utility/divider/divider-color.php](https://dev.ru.simai.io/ru/ui/utility/divider/divider-color.php)

В SIMAI Framework с помощью модификаторов можно изменить цвет разделителя между элементами. Использование ролей цвета
позволяет легко адаптировать цвет разделителя в зависимости от необходимого дизайна.

## Таблица классов

| Класс                | Значение                                                       |
|:---------------------|:-----------------------------------------------------------------------------------|
| .divider-transparent | > :not([hidden]) ~ :not([hidden]) { border-color: var(`--sf-transparent`); }       |
| .divider-current     | > :not([hidden]) ~ :not([hidden]) { border-color: currentColor; }                  |
| .divider-outline     | > :not([hidden]) ~ :not([hidden]) { border-color: var(`--sf-outline`); }           |
| .divider-primary     | > :not([hidden]) ~ :not([hidden]) { border-color: var(`--sf-outline-primary`); }   |
| .divider-secondary   | > :not([hidden]) ~ :not([hidden]) { border-color: var(`--sf-outline-secondary`); } |
| .divider-tertiary    | > :not([hidden]) ~ :not([hidden]) { border-color: var(`--sf-outline-tertiary`); }  |
| .divider-error       | > :not([hidden]) ~ :not([hidden]) { border-color: var(`--sf-outline-error`); }     |
| .divider-warning     | > :not([hidden]) ~ :not([hidden]) { border-color: var(`--sf-outline-cation`); }    |
| .divider-success     | > :not([hidden]) ~ :not([hidden]) { border-color: var(`--sf-outline-success`); }   |
{.table}

## Описание

Модификаторы цвета разделителя задают, каким цветом будут отображаться линии между элементами. Цвета определяются
ролями, что упрощает смену тем и подстройку под фирменный стиль.

Доступные классы позволяют использовать прозрачный разделитель (`divider-transparent`), текущий цвет текста (
`divider-current`), а также различные ролевые цвета: `divider-outline`, `divider-primary`, `divider-secondary`,
`divider-tertiary`, `divider-error`, `divider-warning`, `divider-success`.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Позволяет применять модификатор с определённого размера экрана (sm, md, lg, xl).

- Модификатор *(обязательный параметр)*:

    - `divider-{transparent|current|outline|primary|secondary|tertiary|error|warning|success}`

## Пример использования

```html
<div class="grid grid-col-3 divider-y-1 divider-primary ...">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```

В данном примере используется `divider-primary`, чтобы применить цвет, соответствующий роли `primary`.

## Адаптивность

Для изменения цвета разделителя при разных размерах экрана добавьте префикс контрольной точки:

```html
<div class="sm:divider-error divider-y-1 ...">
    <!-- На экранах Small и больше разделитель будет цвета error -->
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```
