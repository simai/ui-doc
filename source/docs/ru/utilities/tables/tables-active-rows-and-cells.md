---
extends: _core._layouts.documentation
section: content
title: Активные строки и ячейки
description: Активные строки и ячейки
---

# Активные строки и ячейки

!rtags[tables-active-rows-and-cells]


## Таблица классов

| Класс | Значение |
|:--|:--|
| `.table-active` | Активное состояние строки/ячейки |
| `.table-hover` | Подсветка строки по наведению |
{.table}

## Пример

```html
<table class="table table-hover">
  <tr class="table-active">...</tr>
  <tr><td class="table-active">...</td></tr>
</table>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=tables&group=tables-active-rows-and-cells"></iframe>
</div>
