---
extends: _core._layouts.documentation
section: content
title: Отступ внешней границы
description: Отступ внешней границы
---

# Отступ внешней границы


С помощью модификаторов отступа внешней границы вы можете контролировать расстояние между внешней границей (`outline`) и
элементом.

## Таблица классов

| Класс             | Значение                        |
|:------------------|:--------------------------------|
| .outline-offset-0 | outline-offset: var(`--sf-0`);  |
| .outline-offset-1 | outline-offset: var(`--sf-a1`); |
| .outline-offset-2 | outline-offset: var(`--sf-a2`); |
| .outline-offset-3 | outline-offset: var(`--sf-a3`); |
| .outline-offset-4 | outline-offset: var(`--sf-a4`); |
{.table}

*(Числа от 1 до 4 здесь показаны как пример, фактический диапазон значений может быть уточнён в документации.)*

## Описание

Адаптивный модификатор `outline-offset` задаёт отступ внешней границы элемента в зависимости от размера области
просмотра.

- `outline-offset-0` — внешний отступ равен нулю.
- `outline-offset-{1...4}` — устанавливают отступ в соответствии со шкалой адаптивных величин фреймворка.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера области просмотра (sm, md, lg, xl).

- Модификатор *(обязательный параметр)*:

    - `outline-offset-{0...4}` — отступ внешней границы.

## Пример использования

```html
<!-- Отступ внешней границы в 1 единицу -->
<button class="outline-2 outline-solid outline-danger-default outline-offset-1 ...">Кнопка 1</button>

<!-- Отступ внешней границы в 2 единицы -->
<button class="outline-2 outline-solid outline-danger-default outline-offset-2 ...">Кнопка 2</button>

<!-- Отступ внешней границы в 4 единицы -->
<button class="outline-2 outline-solid outline-danger-default outline-offset-4 ...">Кнопка 3</button>
```

## Адаптивность

Для изменения отступа внешней границы на разных размерах экрана используйте префикс контрольной точки:

```html
<!-- На экранах от Medium и больше отступ внешней границы будет 2 -->
<button class="md:outline-offset-2 outline-2 outline-solid outline-danger-default ...">Адаптивная кнопка</button>
```
