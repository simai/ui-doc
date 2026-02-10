---
extends: _core._layouts.documentation
section: content
title: Функция времени перехода
description: Функция времени перехода
---

# Функция времени перехода

[https://dev.ru.simai.io/ru/ui/utility/animation/transition-timing-function.php](https://dev.ru.simai.io/ru/ui/utility/animation/transition-timing-function.php)

Для настройки плавности переходов в SIMAI Framework доступны модификаторы, позволяющие изменять функцию времени. Это
определяет, с какой скоростью будут происходить изменения CSS-свойств в ходе анимации.

## Классы и их значения:

| Класс        | Значение                                                |
|:-------------|:----------------------------------------------------------------------------|
| .ease-linear | transition-timing-function: linear;                                         |
| .ease-in     | transition-timing-function: cubic-bezier(0.4, 0, 1, 1);                     |
| .ease-out    | transition-timing-function: cubic-bezier(0, 0, 0.2, 1);                     |
| .ease-in-out | transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);                   |
{.table}

## Описание:

Используя данные модификаторы, вы можете контролировать, как быстро элементы начнут, будут продолжать и закончат
изменение своих CSS-свойств. Например, `ease-in` замедлит начало анимации, тогда как `ease-out` замедлит её окончание.
Без необходимости указывать адаптивность или условия показа, вы просто добавляете нужный класс к элементу.

## Синтаксис:

Использование модификатора: `{модификатор}`

Примените один из модификаторов `ease-linear`, `ease-in`, `ease-out` или `ease-in-out` к элементу вместе с классом
`transition` (и при необходимости `duration-{...}`) чтобы настроить плавность перехода.

```html
<button class="transition duration-normal ease-in p-2 radius-1/3">
    Кнопка с плавным началом анимации
</button>
```

## Пример использования:

```html
<div class="transition duration-normal ease-in bg-primary color-on-surface-inverse p-2 radius-1/3">
    Эта карточка изменяет свои свойства плавно, начиная медленно (ease-in).
</div>

<div class="transition duration-normal ease-out bg-secondary color-on-surface-inverse p-2 radius-1/3">
    Эта карточка изменяет свои свойства плавно, заканчивая медленно (ease-out).
</div>

<div class="transition duration-normal ease-in-out bg-tertiary color-on-surface-inverse p-2 radius-1/3">
    Эта карточка изменяет свои свойства плавно, начиная и заканчивая медленно (ease-in-out).
</div>
```

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=animation&group=animation-transition-timing-function"></iframe>
</div>
