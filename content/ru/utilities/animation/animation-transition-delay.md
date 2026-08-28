---
title: "Задержка перехода"
description: "Задержка перехода"
tags: [transition-delay, sm, md, lg, xl]
---

# Задержка перехода

В SIMAI Framework с помощью модификаторов можно задавать задержку при выполнении переходов CSS.
Управление задержкой позволяет более точно настроить моменты начала анимации, делая интерфейс более отзывчивым или
выразительным.

## Классы и их значения

| Класс    | Значение                 |
|:---------|:-------------------------|
| .delay-0 | transition-delay: 0s;    |
| .delay-1 | transition-delay: 75ms;  |
| .delay-2 | transition-delay: 100ms; |
| .delay-3 | transition-delay: 150ms; |
| .delay-4 | transition-delay: 200ms; |
| .delay-5 | transition-delay: 300ms; |
| .delay-6 | transition-delay: 500ms; |
| .delay-7 | transition-delay: 700ms; |
| .delay-8 | transition-delay: 1s;    |
| .delay-9 | transition-delay: 2s;    |

## Описание

Используя данные модификаторы, вы можете управлять задержкой анимации без адаптивных условий или состояний. Добавьте
нужный класс к элементу, чтобы задать время ожидания перед началом перехода.

## Синтаксис

Использование модификатора: `{модификатор}`

Просто добавьте класс `delay-{номер}` к элементу с переходом, чтобы установить задержку начала перехода.

```html
<button class="transition duration-normal ease-in-out delay-3 p-2 radius-1/3">
    Кнопка с задержкой 150ms
</button>
```

## Пример использования

:::example {id="utilities/animation/animation-transition-delay" label="Результат"}
:::

