---
extends: _core._layouts.documentation
section: content
title: Тени
description: Тени
---

# Тени

В текущей версии фреймворка SIMAI реализация теней стала более гибкой и настраиваемой. Вместо фиксированных пресетов
теперь используется единый шаблон тени, который можно адаптировать под разные нужды с помощью переменных. Это
экспериментальный подход, который в дальнейшем может измениться или упроститься.

[Демонстрация примера](https://codepen.io/simai/full/xxNORpN)

## Структура тени (все что ниже - один блок ####)

Тень состоит из трёх слоёв:

1. **Fill (наполняющий)** — основной слой, создающий базовую тень.
2. **Outline (контурный)** — подчёркивает границы тени, делая её более чёткой.
3. **Shade (размывающий)** — размывает края тени, придавая ей более мягкий вид.

Для регулировки прозрачности слоёв и интенсивности тени используются следующие переменные:

| Переменная                  | Значение |
|:----------------------------|:---------|
| `--sf-shadow--alfa-fill`    | 24%      |
| `--sf-shadow--alfa-outline` | 12%      |
| `--sf-shadow--alfa-shade`   | 8%       |
{.table}

Базовый цвет задаётся в переменной --sf-shadow--color:

| Переменная         | Значение |
|:-------------------|:---------|
| `--sf-shadow--color` | black    |
{.table}

На основе этих данных вычисляются итоговые цвета для каждого слоя тени:

| Переменная                   | Значение                                                                             |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------|
| `--sf-shadow--color-fill`    | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-shadow--color`) var(`--sf-shadow--alfa-fill`));    |
| `--sf-shadow--color-outline` | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-shadow--color`) var(`--sf-shadow--alfa-outline`)); |
| `--sf-shadow--color-shade`   | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-shadow--color`) var(`--sf-shadow--alfa-shade`));   |
{.table}

**Коэффициент уровня тени**

Переменная `--sf-shadow--level-ratio` регулирует интенсивность и масштаб тени. По умолчанию её значение равно `1`.

| Переменная                 | Значение |
|:---------------------------|:---------|
| `--sf-shadow--level-ratio` | 1        |
{.table}

```css
:root * {
  --sf-shadow--level-ratio: 1;
  --sf-shadow--alfa-fill: 24%;
  --sf-shadow--alfa-outline: 12%;
  --sf-shadow--alfa-shade: 8%;
  
  --sf-shadow--color: black;
  --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-shadow--color) var(--sf-shadow--alfa-fill));
  --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-shadow--color) var(--sf-shadow--alfa-outline));
  --sf-shadow--color-shade: color-mix(in srgb, var(--sf-transparent), var(--sf-shadow--color) var(--sf-shadow--alfa-shade));
}
```

### Шаблон тени

Для классов, содержащих shadow, применяется следующий шаблон теней:

```css
[class*="shadow"] {
  box-shadow: 
    0px calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(-1 * var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-fill),
    0px calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) calc(var(--sf-a3) * var(--sf-shadow--level-ratio)) 0px var(--sf-shadow--color-outline),
    0px calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a4) * var(--sf-shadow--level-ratio)) calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-shade);
}
```

Если необходимо использовать падающую тень (drop-shadow), которая отличается от box-shadow отсутствием параметра spread,
можно применить класс drop-shadow, отключив стандартную тень:

```css
[class*="drop-shadow"] {
  box-shadow: none;
  filter: 
    drop-shadow(
      0px 
      calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) 
      calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) 
      var(--sf-shadow--color-fill)
    ) 
    drop-shadow(
      0px 
      calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) 
      calc(var(--sf-a3) * var(--sf-shadow--level-ratio)) 
      var(--sf-shadow--color-outline)
    ) 
    drop-shadow(
      0px 
      calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) 
      calc(var(--sf-a4) * var(--sf-shadow--level-ratio)) 
      var(--sf-shadow--color-shade)
    );
}
```

### Применение теней

* **shadow-1** — базовая тень для элементов, слегка приподнимающих их над поверхностью (например, карточки).
* **shadow-2** — тень, возникающая при наведении на элемент с shadow-1 или границей, добавляя дополнительный объём при
  ховер-состоянии.
* **shadow-3** — тень для элементов типа FAB (Floating Action Button).
* **shadow-4** — тень для FAB при наведении.
* **shadow-5** — тень для модальных окон, создающая впечатление слоя над всем контентом.

Такой подход к теням обеспечивает высокую гибкость и настраиваемость, упрощает создание единообразных стилей теней, а
также упрощает дальнейшую масштабируемость и адаптацию под различные проекты.

---
