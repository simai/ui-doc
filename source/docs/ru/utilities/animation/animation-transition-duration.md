---
extends: _core._layouts.documentation
section: content
title: Продолжительность перехода
description: Продолжительность перехода
---

# Продолжительность перехода

!rtags[animation-transition-duration]



С помощью данных модификаторов можно задать длительность переходов CSS-свойств. Это позволяет контролировать, насколько
быстро или медленно будут воспроизводиться анимации при взаимодействии с элементом.

## Классы и их значения

| Класс            | Значение                                             |
|:-----------------|:-------------------------------------------------------------------------|
| .duration-fast            | transition-duration: var(`--sf-duration-fast`); *(по умолчанию 100ms)*   |
| .duration-normal | transition-duration: var(`--sf-duration-normal`); *(по умолчанию 300ms)* |
| .duration-slow            | transition-duration: var(`--sf-duration-slow`); *(по умолчанию 500ms)*   |
{.table}

## Описание

Данные модификаторы позволяют выбрать одну из трех скоростей анимации (быстрая, нормальная и медленная) без
необходимости указывать конкретное время вручную. При этом можно переопределить значения переменных
`--sf-duration-fast`, `--sf-duration-normal` и `--sf-duration-slow` в вашей конфигурации.

## Синтаксис

Использование модификатора: `{модификатор}`

Примените один из модификаторов `duration-fast`, `duration-normal` или `duration-slow` к элементу, которому хотите задать конкретную
длительность перехода. Например:

```html
<button class="transition duration-normal ease-in-out p-2 radius-1/3">
    Нажми на меня
</button>
```

В данном примере при наведении или фокусе переходы будут длиться 300ms.

## Пример использования

```html
<div class="transition duration-fast hover:bg-primary p-2 radius-1/3">
    Наведи на меня, анимация будет быстрой (100ms).
</div>

<div class="transition duration-normal hover:bg-secondary p-2 radius-1/3">
    Наведи на меня, анимация будет нормальной (300ms).
</div>

<div class="transition duration-slow hover:bg-tertiary p-2 radius-1/3">
    Наведи на меня, анимация будет медленной (500ms).
</div>
```

## Замена прежних классов на новые

| Старый класс                   | Новый класс      |
|:---------------------------------------------------|:-----------------|
| .duration-1, .duration-2, .duration-3              | .duration-fast   |
| .duration-4, .duration-5                           | .duration-normal |
| .duration-6, .duration-7, .duration-8, .duration-9 | .duration-slow   |
{.table}



<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=animation&group=animation-transition-duration"></iframe>
</div>
