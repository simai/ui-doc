---
extends: _core._layouts.documentation
section: content
title: Паттерн фона
description: Паттерн фона
---

# Паттерн фона

С помощью модификаторов паттернов фона (`pattern-{номер}`) вы можете задать повторяющийся узор в качестве фонового
изображения. Каждый паттерн задаётся встроенным (inline) SVG-кодом, который не требует дополнительных ресурсов.

## Таблица классов

| Класс      | Значение                                                                                                                                                                                                                                                                                                                            |
|:-----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| .pattern-1 | url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='2' height='2'><rect x='0' y='0' width='1' height='2'/></svg>);                                                                                                                                                                                                               |
| .pattern-2 | url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='2' height='2'><rect x='0' y='0' width='2' height='1'/></svg>);                                                                                                                                                                                                               |
| .pattern-3 | url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='2' height='2'><rect x='0' y='0' width='1' height='1'/></svg>);                                                                                                                                                                                                               |
| .pattern-4 | url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='2' height='2'><rect x='0' y='1' width='1' height='1' /><rect x='1' y='0' width='1' height='1'/></svg>);                                                                                                                                                                      |
| .pattern-5 | url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='4' height='4'><rect x='0' y='0' width='1' height='1' /><rect x='1' y='1' width='1' height='1' /><rect x='2' y='2' width='1' height='1' /><rect x='3' y='1' width='1' height='1' /><rect x='1' y='3' width='1' height='1' /><rect x='3' y='3' width='1' height='1' /></svg>); |
| .pattern-6 | url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='4' height='4'><rect x='0' y='0' width='1' height='1' /></svg>);                                                                                                                                                                                                              |
| .pattern-7 | url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='4' height='4'><rect x='0' y='0' width='2' height='2' /></svg>);                                                                                                                                                                                                              |
| .pattern-8 | url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='4' height='4'><rect x='0' y='0' width='3' height='1'/><rect x='0' y='2' width='3' height='1'/><rect x='0' y='0' width='1' height='3'/>><rect x='2' y='0' width='1' height='3'/>><rect x='2' y='0' width='1' height='1'/></svg>);                                             |
| .pattern-9 | url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='4' height='4'><rect x='0' y='0' width='3' height='3' /></svg>);                                                                                                                                                                                                              |
{.table}

## Описание

Адаптивный модификатор `pattern-{1...9}` задаёт определённый встроенный узор (паттерн) в качестве фонового изображения.
Это позволяет быстро добавлять декоративные узоры для фона элемента без необходимости подключать внешние изображения.

- `pattern-1`, `pattern-2`, `pattern-3` и т.д. — каждый из этих модификаторов устанавливает свой уникальный встроенный
  SVG-паттерн.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или `{модификатор}`

- Контрольная точка *(необязательный параметр)*: Применяет модификатор начиная с определенной ширины экрана (sm, md, lg,
  xl).
- Модификатор *(обязательный параметр)*: один из классов pattern-{1...9}, выбирающих конкретный паттерн.

## Пример использования

```html
<!-- Установить паттерн №1 в качестве фона -->
<div class="pattern-1 w-full h-e8 bg-repeat">
    <!-- Ваш контент -->
</div>
```

```html
<!-- Установить паттерн №2 при ширине экрана md и более -->
<div class="md:pattern-2 w-full h-e8 bg-repeat">
    <!-- Ваш контент -->
</div>
```

## Адаптивность

Для изменения паттерна фона, начиная с определенного размера экрана, добавьте префикс контрольной точки. Например,
`md:pattern-2` применит паттерн №2 только на экранах от размера Medium и больше.
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=background&group=background-pattern"></iframe>
</div>