---
extends: _core._layouts.documentation
section: content
title: "Видимость элемента при печати (print-visibility)"
description: "Видимость элемента при печати (print-visibility)"
---

# Видимость элемента при печати (print-visibility)

!rtags[display-visibility]


Утилиты `print-visible` и `print-hidden` управляют `visibility` только внутри `@media print`.

## Классы и значения

| Класс | Значение в режиме печати |
|:--|:--|
| `.print-visible` | `visibility: visible;` |
| `.print-hidden` | `visibility: hidden;` |
| `.print-visible-none` | alias для `print-hidden` |
{.table}

## Описание

- На экране эти классы не меняют поведение элемента.
- При печати можно скрывать или показывать элементы, не ломая поток разметки.

## Синтаксис

`print-visible` | `print-hidden` | `print-visible-none`

## Пример

```html
<div class="print-hidden">Hidden in print</div>
<div class="print-visible">Visible in print</div>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=print&group=display-visibility"></iframe>
</div>
