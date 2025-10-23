---
extends: _core._layouts.documentation
section: content
title: Толщина внешней границы
description: Толщина внешней границы
---

# Толщина внешней границы

[https://dev.ru.simai.io/ru/ui/utility/outline/outline-width.php](https://dev.ru.simai.io/ru/ui/utility/outline/outline-width.php)

С помощью модификаторов толщины внешней границы вы можете гибко управлять её размерами, подстраивая внешний вид
элементов под различные размеры экранов.

## Таблица классов

| Класс      | Значение                       |
|:-----------|:-------------------------------|
| .outline-0 | outline-width: var(`--sf-0`);  |
| .outline-1 | outline-width: var(`--sf-a1`); |
| .outline-2 | outline-width: var(`--sf-a2`); |
| .outline-3 | outline-width: var(`--sf-a3`); |
| .outline-4 | outline-width: var(`--sf-a4`); |
{.table}

## Описание

Адаптивный модификатор `outline-width` задаёт толщину внешней границы (`outline`) в зависимости от размера области
просмотра.

- `outline-0` — убирает толщину внешней границы, делая её невидимой.
- `outline-1` ... `outline-4` — устанавливают различные уровни толщины внешней границы.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Позволяет применять модификатор с определённого размера экрана (sm, md, lg, xl).

- Модификатор *(обязательный параметр)*:

    - `outline-{0...4}` — толщина внешней границы.

## Пример использования

```html
<!-- Внешняя граница толщиной в 1 единицу -->
<button class="outline-1 outline-solid outline-danger-default outline-offset-2 ...">Кнопка 1</button>

<!-- Внешняя граница толщиной в 2 единицы -->
<button class="outline-2 outline-solid outline-danger-default outline-offset-2 ...">Кнопка 2</button>

<!-- Внешняя граница толщиной в 4 единицы -->
<button class="outline-4 outline-solid outline-danger-default outline-offset-2 ...">Кнопка 3</button>
```

## Адаптивность

Для изменения толщины внешней границы на разных размерах экрана, добавьте префикс контрольной точки:

```html
<!-- На экранах от Medium и больше толщина внешней границы будет 2 -->
<button class="md:outline-2 outline-solid outline-danger-default outline-offset-2 ...">Адаптивная кнопка</button>
```
