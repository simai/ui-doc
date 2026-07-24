---
extends: _core._layouts.documentation
section: content
title: Выравнивание
description: "Значения выравнивания текста, Flex и Grid в SIMAI Framework."
---

# Выравнивание

Набор значений зависит от CSS-свойства, но в утилитах регулярно встречаются:

| Значение | Назначение |
|:---|:---|
| `start`, `end` | начало или конец с учётом направления и оси |
| `center` | центр |
| `between` | свободное место между элементами |
| `around` | пространство вокруг элементов |
| `evenly` | равные интервалы |
| `stretch` | растяжение по доступной области |
| `baseline` | выравнивание по базовой линии текста |
| `left`, `right`, `justify` | физическое выравнивание или выравнивание текста |
| `top`, `bottom`, `middle` | вертикальная позиция в поддерживающих утилитах |
{.table}

Примеры:

```html
<div class="flex content-main-between items-center"></div>
<p class="text-center md:text-start"></p>
```

Для направления Flex и Grid термины `main` и `cross` описывают оси, а
`start`/`end` — положение на выбранной оси.
