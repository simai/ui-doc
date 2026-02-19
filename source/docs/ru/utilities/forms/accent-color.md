---
extends: _core._layouts.documentation
section: content
title: "Акцентный цвет (accent-color)"
description: "Акцентный цвет (accent-color)"
---

# Акцентный цвет (accent-color)

!rtags[accent-color]



Используя модификаторы акцентного цвета `accent-color` в SIMAI Framework, вы можете задавать цвет акцентирования для
элементов управления формы, таких как чекбоксы и радиокнопки. Это позволяет легко стилизовать акцентные элементы,
отражая выбранную цветовую палитру и улучшая визуальную согласованность интерфейса.

## Классы и их значения

| Класс               | Значение                               |
|:--------------------|:---------------------------------------|
| .accent-transparent | accent-color: var(`--sf-transparent`); |
| .accent-current     | accent-color: currentColor;            |
| .accent-on-surface  | accent-color: var(`--sf-on-surface`);  |
| .accent-primary     | accent-color: var(`--sf-primary`);     |
| .accent-secondary   | accent-color: var(`--sf-secondary`);   |
| .accent-tertiary    | accent-color: var(`--sf-tertiary`);    |
| .accent-error       | accent-color: var(`--sf-error`);       |
| .accent-warning     | accent-color: var(`--sf-warning`);     |
| .accent-success     | accent-color: var(`--sf-success`);     |

{.table}

## Описание

Эти модификаторы задают акцентный цвет для элементов управления формами, таких как чекбоксы или радиокнопки. С помощью
варианта `hover:` вы можете изменять акцентный цвет при наведении курсора, создавая интерактивное пользовательское
взаимодействие.

## Синтаксис

- `accent-{color}` – установить акцентный цвет.
- `hover:accent-{color}` – установить акцентный цвет при наведении.

## Пример использования

```html
<label>
    <input type="checkbox" class="accent-primary" checked> Акцент по умолчанию
</label>
<label>
    <input type="checkbox" class="hover:accent-error" checked> Акцент при наведении
</label>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=forms&group=accent-color"></iframe>
</div>
