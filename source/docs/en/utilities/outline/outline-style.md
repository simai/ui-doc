---
extends: _core._layouts.documentation
section: content
title: Стиль внешней границы
description: Стиль внешней границы
---

# Стиль внешней границы


С помощью модификаторов стиля внешней границы (`outline`) вы можете определять, как будет выглядеть внешняя рамка вокруг
элемента.

## Таблица классов

| Класс           | Значение               |
|:----------------|:-----------------------|
| .outline-dotted | outline-style: dotted; |
| .outline-dashed | outline-style: dashed; |
| .outline-solid  | outline-style: solid;  |
| .outline-double | outline-style: double; |
| .outline-hidden | outline-style: hidden; |
| .outline-none   | outline-style: none;   |
{.table}

*(Обратите внимание: `outline-hidden` ведёт себя так же, как и `outline-none`.)*

## Описание

Адаптивный модификатор `outline-style` позволяет задать стиль внешней границы элемента в зависимости от размера области
просмотра.

- `outline-dotted` — внешняя граница точками.
- `outline-dashed` — внешняя граница пунктиром.
- `outline-solid` — сплошная внешняя граница.
- `outline-double` — двойная внешняя граница.
- `outline-none` или `outline-hidden` — внешняя граница скрывается.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определенного размера области просмотра (sm, md, lg, xl).

- Модификатор *(обязательный параметр)*:  
  `outline-{dotted|dashed|solid|double|none|hidden}`

## Пример использования

```html
<!-- Пример разных стилей внешней границы -->

<button class="outline-2 outline-solid outline-danger-default outline-offset-2 ...">Кнопка 1 (solid)</button>
<button class="outline-2 outline-dashed outline-danger-default outline-offset-2 ...">Кнопка 2 (dashed)</button>
<button class="outline-2 outline-dotted outline-danger-default outline-offset-2 ...">Кнопка 3 (dotted)</button>
<button class="outline-4 outline-double outline-danger-default outline-offset-2 ...">Кнопка 4 (double)</button>
```

## Адаптивность

Для изменения стиля внешней границы на разных размерах экрана можно использовать префикс контрольной точки:

```html
<!-- На экранах от Medium и больше внешний стиль границы будет dotted -->
<button class="md:outline-dotted outline-2 outline-solid outline-danger-default outline-offset-2 ...">Адаптивная кнопка</button>
```
