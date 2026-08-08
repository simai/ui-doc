
# Общее свойство пере
ода

Данные модификаторы позволяют задать, какие именно CSS-свойства будут плавно изменяться при взаимодействии с элементом.
Применяя соответствующий модификатор, вы контролируете, для каки
 свойств будет выполняться пере
од, а также можете
комбинировать его с другими модификаторами (например, для изменения цвета, фона или тени).

## Классы и и
 значения

| Класс                 | Значение                                                                                                                                                                                                                                      |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| .transition-none      | transition-property: none;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                                  |
| .transition-all       | transition-property: all;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                                   |
| .transition           | transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                   |
| .transition-color     | transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                            |
| .transition-opacity   | transition-property: opacity;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                               |
| .transition-shadow    | transition-property: shadow;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                                |
| .transition-transform | transition-property: transform;&lt;br/&gt; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);&lt;br/&gt; transition-duration: 150ms;                                                                                                                                             |
{.table}

## Описание

Модификаторы плавны
 пере
одов позволяют задать, какие свойства будут изменяться плавно при взаимодействии (например,
при наведении курсора или фокусе). Это помогает создавать более приятные визуальные эффекты.

## Синтаксис

Использование модификатора: `{модификатор}`  
Модификатор указывается непосредственно в классе элемента. Например, чтобы применить плавный пере
од для цвета:

```html
<div class="transition-color hover:bg-primary p-2 radius-1/3">
    Наведи на меня
</div>
```

В данном примере при наведении курсора на элемент изменится цвет фона с плавным пере
одом, так как задан модификатор
`transition-color`.

## Пример использования

```html
<button class="transition-all hover:text-primary p-2 radius-1/3">
    Нажми на меня
</button>
```

При наведении курсора на кнопку цвет текста плавно сменится на основной (`text-primary`), так как все свойства с
пере
одом (`transition-all`) будут изменяться плавно.
