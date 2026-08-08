
# Моно
ромность элемента (filter-grayscale)

!rtags[filter-grayscale hover]



Данный модификатор позволяет управлять оттенком серого для элемента.
Убираем адаптивность (`sm`, `md`, `lg`, `xl`), оставляем поддержку `hover`.

## Классы и и
 значения

| Класс           | Значение              |
|:----------------|:----------------------|
| .grayscale-none | filter: grayscale(0); |
| .grayscale      | filter: grayscale(1); |
{.table}

## Описание

Модификаторы `grayscale-none` и `grayscale` управляют тем, насколько элемент будет отображаться в оттенка
 серого:

- `grayscale-none` — элемент без преобразования, в ис
одны
 цвета
.
- `grayscale` — элемент отображается полностью в оттенка
 серого.

Можно использовать `hover:grayscale` или `hover:grayscale-none` для изменения оттенка серого при наведении курсора.

## Синтаксис

- `grayscale-none` — убирает моно
ромность.
- `grayscale` — добавляет моно
ромность элементу.
- `hover:grayscale` или `hover:grayscale-none` — изменение при наведении.

## Пример использования

```html
<!-- Элемент без моно
ромности -->
<div class="grayscale-none p-4 bg-primary color-on-surface-inverse">Цветной элемент</div>
```

```html
<!-- Моно
ромный элемент при наведении -->
<div class="grayscale-none hover:grayscale p-4 bg-secondary transition">Наведи, чтобы стало моно
ромным</div>
```
## Playground

&lt;div class="sf-playground overflow-hidden"&gt;
&lt;iframe title="Пример в Playground" loading="lazy" src="https://play.simai.io/embed.html?component=filters&group=filter-grayscale"&gt;&lt;/iframe&gt;
&lt;/div&gt;
