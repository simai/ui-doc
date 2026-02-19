---
extends: _core._layouts.documentation
section: content
title: Стиль границы
description: Стиль границы
---

# Стиль границы


С помощью модификаторов стиля границы в SIMAI Framework вы можете задавать различные стили границ: точечные, пунктирные,
сплошные, двойные, скрытые или отсутствующие, а также применять их ко всем сторонам сразу или только к определённым
сторонам или осям.

## Таблица классов

| Класс                 | Значение                                |
|:----------------------|:------------------------------------------------------------|
| .border-dotted        | border-style: dotted;                                       |
| .border-x-dotted      | border-left-style: dotted;<br/> border-right-style: dotted; |
| .border-y-dotted      | border-top-style: dotted;<br/> border-bottom-style: dotted; |
| .border-left-dotted   | border-left-style: dotted;                                  |
| .border-right-dotted  | border-right-style: dotted;                                 |
| .border-top-dotted    | border-top-style: dotted;                                   |
| .border-bottom-dotted | border-bottom-style: dotted;                                |
| .border-dashed        | border-style: dashed;                                       |
| .border-x-dashed      | border-left-style: dashed;<br/> border-right-style: dashed; |
| .border-y-dashed      | border-top-style: dashed;<br/> border-bottom-style: dashed; |
| .border-left-dashed   | border-left-style: dashed;                                  |
| .border-right-dashed  | border-right-style: dashed;                                 |
| .border-top-dashed    | border-top-style: dashed;                                   |
| .border-bottom-dashed | border-bottom-style: dashed;                                |
| .border-solid         | border-style: solid;                                        |
| .border-x-solid       | border-left-style: solid;<br/> border-right-style: solid;   |
| .border-y-solid       | border-top-style: solid;<br/> border-bottom-style: solid;   |
| .border-left-solid    | border-left-style: solid;                                   |
| .border-right-solid   | border-right-style: solid;                                  |
| .border-top-solid     | border-top-style: solid;                                    |
| .border-bottom-solid  | border-bottom-style: solid;                                 |
| .border-double        | border-style: double;                                       |
| .border-x-double      | border-left-style: double;<br/> border-right-style: double; |
| .border-y-double      | border-top-style: double;<br/> border-bottom-style: double; |
| .border-left-double   | border-left-style: double;                                  |
| .border-right-double  | border-right-style: double;                                 |
| .border-top-double    | border-top-style: double;                                   |
| .border-bottom-double | border-bottom-style: double;                                |
| .border-hidden        | border-style: hidden;                                       |
| .border-x-hidden      | border-left-style: hidden;<br/> border-right-style: hidden; |
| .border-y-hidden      | border-top-style: hidden;<br/> border-bottom-style: hidden; |
| .border-left-hidden   | border-left-style: hidden;                                  |
| .border-right-hidden  | border-right-style: hidden;                                 |
| .border-top-hidden    | border-top-style: hidden;                                   |
| .border-bottom-hidden | border-bottom-style: hidden;                                |
| .border-none          | border-style: none;                                         |
| .border-x-none        | border-left-style: none;<br/> border-right-style: none;     |
| .border-y-none        | border-top-style: none;<br/> border-bottom-style: none;     |
| .border-left-none     | border-left-style: none;                                    |
| .border-right-none    | border-right-style: none;                                   |
| .border-top-none      | border-top-style: none;                                     |
| .border-bottom-none   | border-bottom-style: none;                                  |
{.table}

## Описание

Модификаторы позволяют управлять стилем границы элемента. Вы можете:

- Применить стиль ко всем сторонам сразу (например, `border-dotted`).
- Применить стиль к определённой оси, горизонтальной (`border-x-dashed`) или вертикальной (`border-y-solid`).
- Применить стиль к одной определённой стороне (`border-left-double`, `border-top-none` и т.д.).

Доступны следующие стили:

- `dotted` — граница отображается точками.
- `dashed` — граница отображается пунктирной линией.
- `solid` — граница отображается сплошной линией.
- `double` — граница отображается двойной линией.
- `hidden` — граница скрывается (похож на none, но влияет на таблицы с collapse).
- `none` — граница отсутствует.

## Синтаксис

Использование:

- `{модификатор}` — для всех размеров экрана.
- `{контрольная точка}:{модификатор}` — адаптивное применение стиля границы, начиная  
  с указанного размера экрана (например, `md:border-dashed`).

## Примеры использования

```html
<!-- Стиль границы для всех сторон -->
<div class="border-dotted">border-dotted</div>
<div class="border-dashed">border-dashed</div>
<div class="border-solid">border-solid</div>
<div class="border-double">border-double</div>
<div class="border-hidden">border-hidden</div>
<div class="border-none">border-none</div>

<!-- Стиль границ по горизонтали и вертикали -->
<div class="border-4 border-x-dashed">border-x-dashed</div>
<div class="border-4 border-y-dashed">border-y-dashed</div>

<!-- Стиль границы одной из сторон -->
<div class="border-4 border-left-dashed">border-left-dashed</div>
<div class="border-4 border-right-dashed">border-right-dashed</div>
<div class="border-4 border-top-dashed">border-top-dashed</div>
<div class="border-4 border-bottom-dashed">border-bottom-dashed</div>

```

## Адаптивность

Для изменения стиля границы, начиная с определённого размера экрана, добавьте префикс контрольной точки. Например:

```html
<div class="md:border-dashed">Cтиль границы dashed при md и больше</div>
```
