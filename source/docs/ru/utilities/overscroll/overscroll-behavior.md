---
extends: _core._layouts.documentation
section: content
title: Поведение при прокрутке
description: Поведение при прокрутке
---

# Поведение при прокрутке

!rtags[overscroll-behavior]



С помощью модификаторов из пакета `overscroll-behavior` вы можете управлять поведением браузера при достижении границы
области прокрутки элемента. Это позволяет контролировать возможность «прокрутки за пределы» контейнера и включать или
отключать эффекты «отскока».

## Классы и их значения

| Класс                  | Значение                        |
|:-----------------------|:--------------------------------|
| .scroll-over-auto      | overscroll-behavior: auto;      |
| .scroll-over-contain   | overscroll-behavior: contain;   |
| .scroll-over-none      | overscroll-behavior: none;      |
| .scroll-over-x-auto    | overscroll-behavior-x: auto;    |
| .scroll-over-y-auto    | overscroll-behavior-y: auto;    |
| .scroll-over-x-contain | overscroll-behavior-x: contain; |
| .scroll-over-y-contain | overscroll-behavior-y: contain; |
| .scroll-over-x-none    | overscroll-behavior-x: none;    |
| .scroll-over-y-none    | overscroll-behavior-y: none;    |
{.table}

## Описание

Модификаторы позволяют контролировать поведение при попытке прокрутить содержимое за его пределы. Вы можете разрешить
«пролистывание» содержимого родительского контейнера, ограничить его или полностью отключить.

## Синтаксис

Использование модификатора: `{overscroll-behavior}` или `{overscroll-behavior}-{ось}-{значение}`

Например:

```html
<div class="scroll-over-auto overflow-auto ...">
    <!-- содержимое -->
</div>
```

## Пример использования

```html
<!-- Разрешает продолжение прокрутки в родительской области при достижении границы -->
<div class="scroll-over-auto h-d5 overflow-auto">
    <!-- Длинный текст или контент -->
</div>

<!-- Сохраняет эффект «отскока», но не запускает прокрутку родительского элемента -->
<div class="scroll-over-contain h-d5 overflow-auto">
    <!-- Длинный текст или контент -->
</div>

<!-- Запрещает любую прокрутку за пределы контейнера -->
<div class="scroll-over-none h-d5 overflow-auto">
    <!-- Длинный текст или контент -->
</div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=overscroll&group=overscroll-behavior"></iframe>
</div>
