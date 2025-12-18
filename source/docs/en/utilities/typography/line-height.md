---
extends: _core._layouts.documentation
section: content
title: "Высота строки (line-height)"
description: "Высота строки (line-height)"
---

# Высота строки (line-height)

С помощью модификаторов вы можете задать фиксированную или относительную высоту строки.

## Таблица классов

Фиксированная высота строки:

| Класс     | Значение               |
|:----------|:-------------------------------------------|
| .line-1/4 | line-height: var(`--sf-text--height-1/4`); |
| .line-1/3 | line-height: var(`--sf-text--height-1/3`); |
| .line-1/2 | line-height: var(`--sf-text--height-1/2`); |
| .line-1   | line-height: var(`--sf-text--height-1`);   |
| .line-2   | line-height: var(`--sf-text--height-2`);   |
| .line-3   | line-height: var(`--sf-text--height-3`);   |
| .line-4   | line-height: var(`--sf-text--height-4`);   |
| .line-5   | line-height: var(`--sf-text--height-5`);   |
| .line-6   | line-height: var(`--sf-text--height-6`);   |
| .line-7   | line-height: var(`--sf-text--height-7`);   |
| .line-8   | line-height: var(`--sf-text--height-8`);   |
| .line-9   | line-height: var(`--sf-text--height-9`);   |
| .line-10  | line-height: var(`--sf-text--height-10`);  |
| .line-11  | line-height: var(`--sf-text--height-11`);  |
| .line-12  | line-height: var(`--sf-text--height-12`);  |
{.table}

Относительная высота строки:

| Класс         | Значение            |
|:--------------|:--------------------|
| .line-none    | line-height: 1;     |
| .line-tight   | line-height: 1.25;  |
| .line-snug    | line-height: 1.375; |
| .line-normal  | line-height: 1.5;   |
| .line-relaxed | line-height: 1.625; |
| .line-loose   | line-height: 2;     |
{.table}


## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определенного размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - Фиксированные значения (`line-1/4`, `line-1/3`, `line-1/2`, `line-1` … `line-12`) используют предопределенные
      переменные.
    - Относительные значения (`line-none`, `line-tight`, `line-snug`, `line-normal`, `line-relaxed`, `line-loose`)
      используют коэффициенты от высоты шрифта.

## Пример использования

### Фиксированная высота строки

```html
<p class="line-1">Текст с базовой высотой строки</p>
<p class="line-2">Текст с увеличенной высотой строки</p>
<p class="line-1/2">Текст с уменьшенной высотой строки</p>
```

### Относительная высота строки

```html
<p class="line-none">Текст с высотой строки, равной размеру шрифта</p>
<p class="line-tight">Текст с высотой строки 1.25 от размера шрифта</p>
<p class="line-normal">Текст с высотой строки 1.5 (нормальная)</p>
<p class="line-loose">Текст с высотой строки, в 2 раза больше размера шрифта</p>
```

## Заметки

- Если в предыдущих версиях использовался класс `line-13`, замените его на `line-12`.
- При необходимости использовать адаптивность, например, увеличить высоту строки начиная со среднего размера экрана,
  добавьте префикс `md:`:

```html
<p class="md:line-2">Текст, который при ширине экрана medium и больше будет с высотой строки, соответствующей переменной line-2.</p>
```
