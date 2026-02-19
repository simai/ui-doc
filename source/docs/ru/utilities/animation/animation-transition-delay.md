---
extends: _core._layouts.documentation
section: content
title: Задержка перехода
description: Задержка перехода
---

# Задержка перехода

!rtags[transition-delay sm md lg xl]



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
{.table}

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

```html
<div class="transition duration-normal ease-in-out delay-5 bg-primary color-on-surface-inverse p-2 radius-1/3">
    Этот блок изменит цвет с задержкой 300ms перед началом анимации.
</div>

<div class="transition duration-normal ease-in-out delay-7 bg-secondary color-on-surface-inverse p-2 radius-1/3">
    Этот блок изменит цвет с задержкой 700ms перед началом анимации.
</div>
```

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=animation&group=animation-transition-delay"></iframe>
</div>
