---
extends: _core._layouts.documentation
section: content
title: "Цвет каретки (caret-color)"
description: "Цвет каретки (caret-color)"
---

# Цвет каретки (caret-color)

!rtags[caret-color]



С помощью модификаторов цвета каретки в SIMAI Framework вы можете задавать цвет курсора ввода текста. Это может быть
полезно для стилизации форм, полей ввода и текстовых областей, позволяя легко адаптировать интерфейс под визуальный
стиль вашего проекта.

## Классы и их значения

| Класс              | Значение                              |
|:-------------------|:--------------------------------------|
| .caret-transparent | caret-color: var(`--sf-transparent`); |
| .caret-current     | caret-color: currentColor;            |
| .caret-on-surface  | caret-color: var(`--sf-on-surface`);  |
| .caret-primary     | caret-color: var(`--sf-primary`);     |
| .caret-secondary   | caret-color: var(`--sf-secondary`);   |
| .caret-tertiary    | caret-color: var(`--sf-tertiary`);    |
| .caret-error       | caret-color: var(`--sf-error`);       |
| .caret-warning     | caret-color: var(`--sf-warning`);     |
| .caret-success     | caret-color: var(`--sf-success`);     |

{.table}

## Описание

Модификаторы для цвета каретки позволяют устанавливать стиль курсора ввода текста без использования адаптивности или
состояний наведения и фокуса. Каретка отображается только при активном вводе, поэтому дополнительные состояния не
требуются.

## Синтаксис

- `caret-{color}` – задать цвет каретки.

## Пример использования

```html
<textarea class="caret-primary ..."></textarea>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=forms&group=caret-color"></iframe>
</div>
