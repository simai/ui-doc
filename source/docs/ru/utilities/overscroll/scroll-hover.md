---
extends: _core._layouts.documentation
section: content
title: "Полоса прокрутки при наведении (scroll-hover)"
description: "Полоса прокрутки при наведении (scroll-hover)"
---

# Полоса прокрутки при наведении (scroll-hover)

Перед вами пример решения, при котором полоса прокрутки по умолчанию скрыта или сведена к минимальному отображению, а
при наведении курсора на контейнер с классом `.scroll-hover` — полоса плавно появляется.

## Классы и их значения

| Класс         | Значение                                                                                 |
|:--------------|:-------------------------------------------------------------------------------------------------------------|
| .scroll-hover | По умолчанию скрывает (минимизирует) полосу прокрутки. При наведении курсора делает полосу прокрутки видимой |

{.table}

## Описание

Используя класс `.scroll-hover`, вы можете по умолчанию скрыть полосу прокрутки и показывать её только при наведении
курсора на контейнер. Это удобно для улучшения эстетики страницы, когда полоса прокрутки не нужна постоянно на виду. При
наведении появляется тонкая и аккуратная полоса, что повышает юзабилити при работе с контентом большого размера.

Для стилизации используются следующие переменные, заданные в ядре фреймворка:

- `--sf-scroll-bg-width` – толщина полосы прокрутки
- `--sf-scroll-bg-thumb` – цвет ползунка
- `--sf-scroll-bg-track` – цвет подложки полосы прокрутки
- `--sf-scroll-radius` – радиус скругления полосы прокрутки
- `--sf-duration-normal` и `--sf-animation` – параметры анимации для плавного появления полосы

## Синтаксис

- `.scroll-hover` – по умолчанию скрывает полосу прокрутки
- `.scroll-hover:hover` – при наведении отображает полосу прокрутки, используя заданные переменные

## Пример использования

```html

<div class="scroll-hover overflow-auto" style="height: 200px;">
    <!-- Поместите здесь длинный контент, например, последовательность букв английского алфавита: -->
    ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ
</div>
```

## Пример стилей

```css
.scroll-hover {
    /* Для Firefox: скрываем полосу прокрутки по умолчанию */
    scrollbar-width: none;
}

/* Для WebKit-браузеров (Chrome, Safari, Edge Chromium): скрываем полосу прокрутки */
.scroll-hover::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}

/* При наведении: делаем полосу прокрутки видимой */
.scroll-hover:hover {
    scrollbar-width: thin; /* Firefox: тонкая полоса прокрутки */
}

/* WebKit-браузеры: при наведении задаём толщину полосы */
.scroll-hover:hover::-webkit-scrollbar {
    width: var(--sf-scroll-bg-width);
    height: var(--sf-scroll-bg-width);
}

.scroll-hover:hover::-webkit-scrollbar-thumb {
    background-color: var(--sf-scroll-bg-thumb);
    border-radius: var(--sf-scroll-radius);
}

.scroll-hover:hover::-webkit-scrollbar-track {
    background-color: var(--sf-scroll-bg-track);
}

/* Плавный переход при наведении */
.scroll-hover, .scroll-hover:hover::-webkit-scrollbar,
.scroll-hover:hover::-webkit-scrollbar-thumb,
.scroll-hover:hover::-webkit-scrollbar-track {
    transition: var(--sf-duration-normal) var(--sf-animation);
}
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=overscroll&group=scroll-hover"></iframe>
</div>