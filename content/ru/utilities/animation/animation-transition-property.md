---
title: "Общее свойство перехода"
description: "Общее свойство перехода"
---

# Общее свойство перехода

!rtags[transition-property sm md lg xl]


Данные модификаторы позволяют задать, какие именно CSS-свойства будут плавно изменяться при взаимодействии с элементом.
Применяя соответствующий модификатор, вы контролируете, для каких свойств будет выполняться переход, а также можете
комбинировать его с другими модификаторами (например, для изменения цвета, фона или тени).

## Классы и их значения

| Класс                 | Значение                                                                                                                                                                                                                                      |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| .transition-none      | transition-property: none;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                                  |
| .transition-all       | transition-property: all;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                                   |
| .transition           | transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                   |
| .transition-colors    | transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                            |
| .transition-opacity   | transition-property: opacity;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                               |
| .transition-shadow    | transition-property: box-shadow;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                             |
| .transition-transform | transition-property: transform;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                             |
| .transition-width     | transition-property: width;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                                 |
| .transition-height    | transition-property: height;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                                |
| .transition-size      | transition-property: width, height;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                         |
| .transition-max-width | transition-property: max-width;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                             |
| .transition-max-height | transition-property: max-height;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                            |
| .transition-max-size  | transition-property: max-width, max-height;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                 |
| .transition-flex      | transition-property: flex, flex-basis;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                      |
| .transition-flex-basis | transition-property: flex-basis;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                            |
| .transition-layout    | transition-property: flex-grow, flex-shrink, flex-basis, width, min-width, max-width;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                      |

## Описание

Модификаторы плавных переходов позволяют задать, какие свойства будут изменяться плавно при взаимодействии (например,
при наведении курсора или фокусе). Это помогает создавать более приятные визуальные эффекты.

## Синтаксис

Использование модификатора: `{модификатор}`
Модификатор указывается непосредственно в классе элемента. Например, чтобы применить плавный переход для цвета:

```html
<div class="transition-colors hover:bg-primary p-2 radius-1/3">
    Наведи на меня
</div>
```

В данном примере при наведении курсора на элемент изменится цвет фона с плавным переходом, так как задан модификатор
`transition-colors`.

Для изменения размеров используйте модификаторы под конкретное свойство:

- `transition-width` — если меняется `width`;
- `transition-height` — если меняется `height`;
- `transition-size` — если одновременно меняются `width` и `height`;
- `transition-max-width`, `transition-max-height`, `transition-max-size` — если используется ограничение через `max-*`;
- `transition-flex` или `transition-flex-basis` — если ширина элемента меняется через flex-свойства, например `flex-basis`.
- `transition-layout` — если элемент переключается между обычным состоянием и `flex-1`, либо одновременно меняются flex-свойства и ограничения ширины.

Для плавного перехода нужны числовые начальное и конечное значения. Переходы между `auto`, `fit-content`, `max-content` и `100%` могут отрабатывать скачком, потому что браузер не всегда может интерполировать такие значения.

## Пример использования

При наведении курсора на кнопку цвет текста плавно сменится на основной (`text-primary`), так как все свойства с
переходом (`transition-all`) будут изменяться плавно.

:::example {id="utilities/animation/animation-transition-property" label="Результат"}
:::

