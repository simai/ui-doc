---
extends: _core._layouts.documentation
section: content
title: Углы обводки (Line Join)
description: Углы обводки (Line Join)
---

# Углы обводки (Line Join)

[https://dev.ru.simai.io/ru/ui/utility/svg/stroke-linejoin.php](https://dev.ru.simai.io/ru/ui/utility/svg/stroke-linejoin.php)

С помощью модификаторов угла обводки можно задать способ соединения линий в углах пути для SVG-графики. Различные
значения позволяют получить разные визуальные эффекты при соприкосновении линий под различными углами.

## Таблица классов

| Класс                | Значение                     |
|:---------------------|:-----------------------------|
| .linejoin-miter      | stroke-linejoin: miter;      |
| .linejoin-arcs       | stroke-linejoin: arcs;       |
| .linejoin-bevel      | stroke-linejoin: bevel;      |
| .linejoin-miter-clip | stroke-linejoin: miter-clip; |
| .linejoin-round      | stroke-linejoin: round;      |
{.table}

## Описание

Модификаторы угла обводки определяют форму соединений между линиями, образующими углы:

- `linejoin-miter`: Углы рисуются без скруглений и срезов, линии сходятся под острым углом,  
  образуя заострённый угол (по умолчанию).

- `linejoin-arcs`: Использует дуги (арки) для создания плавных переходов между линиями.  
  Это может быть похоже на скругление, но с более плавными переходами.

- `linejoin-bevel`: Углы срезаются, образуя плоскую грань, что может быть полезно,  
  когда необходимо избежать слишком острых углов.

- `linejoin-miter-clip`: Похоже на `miter`, но с обрезкой заострённой части под определённым  
  лимитом (miter limit), что помогает избежать слишком длинных заострённых углов.

- `linejoin-round`: Углы скругляются, создавая более плавный и мягкий переход между линиями,  
  что может быть эстетически привлекательным для некоторых стилей графики.

## Синтаксис

Использование: `{модификатор}`

- `linejoin-{miter|arcs|bevel|miter-clip|round}` — задаёт соответствующий тип соединения углов.

## Пример использования

```html
<svg class="linejoin-miter" width="100" height="100">
    <path d="M10,90 L50,10 L90,90 Z" fill="none" stroke="black" stroke-width="4"/>
</svg>

<svg class="linejoin-round" width="100" height="100">
    <path d="M10,90 L50,10 L90,90 Z" fill="none" stroke="black" stroke-width="4"/>
</svg>
```

В первом примере используется заострённый угол (`miter`), а во втором — скруглённый (`round`).
