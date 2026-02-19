---
extends: _core._layouts.documentation
section: content
title: Промежутки (space)
description: Промежутки (space)
---

# Промежутки (space)


Модификаторы для промежутков (`space`) позволяют автоматически расставлять отступы между последовательными дочерними
элементами, не изменяя отступы крайних элементов.

В обновлённой системе отступов SIMAI Framework базовый размер (1) равен размеру шрифта (1rem). Отступы могут быть
дробными (например, `1/4`, `1/3`, `1/2`) или целочисленными, что обеспечивает более гибкое управление промежутками в
макете.

## Таблица классов

| Класс                        | Значение                                                                                                                                                                          |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| .space-x-0 \> \* \+ \*       | `--sf-space--reverse-x`: 0;<br/> margin-right: calc(var(`--sf-space-0`) \* var(`--sf-space--reverse-x`)); <br/>margin-left: calc(var(`--sf-space-0`) \* calc(1 \- var(`--sf-space--reverse-x`)));     |
| .space-x-1/4 \> \* \+ \*     | `--sf-space--reverse-x`: 0;<br/> margin-right: calc(var(`--sf-space-1/4`) \* var(`--sf-space--reverse-x`));<br/> margin-left: calc(var(`--sf-space-1/4`) \* calc(1 \- var(`--sf-space--reverse-x`))); |
| .space-x-1/3 \> \* \+ \*     | `--sf-space--reverse-x`: 0;<br/> margin-right: calc(var(`--sf-space-1/3`) \* var(`--sf-space--reverse-x`));<br/> margin-left: calc(var(`--sf-space-1/3`) \* calc(1 \- var(`--sf-space--reverse-x`))); |
| .space-x-1/2 \> \* \+ \*     | `--sf-space--reverse-x`: 0;<br/> margin-right: calc(var(`--sf-space-1/2`) \* var(`--sf-space--reverse-x`));<br/> margin-left: calc(var(`--sf-space-1/2`) \* calc(1 \- var(`--sf-space--reverse-x`))); |
| .space-x-1 \> \* \+ \*       | `--sf-space--reverse-x`: 0;<br/> margin-right: calc(var(`--sf-space-1`) \* var(`--sf-space--reverse-x`));<br/> margin-left: calc(var(`--sf-space-1`) \* calc(1 \- var(`--sf-space--reverse-x`)));     |
| .space-x-2 \> \* \+ \*       | `--sf-space--reverse-x`: 0;<br/> margin-right: calc(var(`--sf-space-2`) \* var(`--sf-space--reverse-x`));<br/> margin-left: calc(var(`--sf-space-2`) \* calc(1 \- var(`--sf-space--reverse-x`)));     |
| .space-x-3 \> \* \+ \*       | `--sf-space--reverse-x`: 0;<br/> margin-right: calc(var(`--sf-space-3`) \* var(`--sf-space--reverse-x`));<br/> margin-left: calc(var(`--sf-space-3`) \* calc(1 \- var(`--sf-space--reverse-x`)));     |
| .space-x-4 \> \* \+ \*       | `--sf-space--reverse-x`: 0;<br/> margin-right: calc(var(`--sf-space-4`) \* var(`--sf-space--reverse-x`));<br/> margin-left: calc(var(`--sf-space-4`) \* calc(1 \- var(`--sf-space--reverse-x`)));     |
| .space-x-5 \> \* \+ \*       | `--sf-space--reverse-x`: 0;<br/> margin-right: calc(var(`--sf-space-5`) \* var(`--sf-space--reverse-x`));<br/> margin-left: calc(var(`--sf-space-5`) \* calc(1 \- var(`--sf-space--reverse-x`)));     |
| .space-x-6 \> \* \+ \*       | `--sf-space--reverse-x`: 0;<br/> margin-right: calc(var(`--sf-space-6`) \* var(`--sf-space--reverse-x`));<br/> margin-left: calc(var(`--sf-space-6`) \* calc(1 \- var(`--sf-space--reverse-x`)));     |
| .space-x-7 \> \* \+ \*       | `--sf-space--reverse-x`: 0;<br/> margin-right: calc(var(`--sf-space-7`) \* var(`--sf-space--reverse-x`));<br/> margin-left: calc(var(`--sf-space-7`) \* calc(1 \- var(`--sf-space--reverse-x`)));     |
| .space-x-8 \> \* \+ \*       | `--sf-space--reverse-x`: 0;<br/> margin-right: calc(var(`--sf-space-8`) \* var(`--sf-space--reverse-x`));<br/> margin-left: calc(var(`--sf-space-8`) \* calc(1 \- var(`--sf-space--reverse-x`)));     |
| .space-y-0 \> \* \+ \*       | `--sf-space--reverse-y`: 0;<br/> margin-top: calc(var(`--sf-space-0`) \* calc(1 \- var(`--sf-space--reverse-y`)));<br/> margin-bottom: calc(var(`--sf-space-0`) \* var(`--sf-space--reverse-y`));     |
| .space-y-1/4 \> \* \+ \*     | `--sf-space--reverse-y`: 0;<br/> margin-top: calc(var(`--sf-space-1/4`) \* calc(1 \- var(`--sf-space--reverse-y`)));<br/> margin-bottom: calc(var(`--sf-space-1/4`) \* var(`--sf-space--reverse-y`)); |
| .space-y-1/3 \> \* \+ \*     | `--sf-space--reverse-y`: 0;<br/> margin-top: calc(var(`--sf-space-1/3`) \* calc(1 \- var(`--sf-space--reverse-y`)));<br/> margin-bottom: calc(var(`--sf-space-1/3`) \* var(`--sf-space--reverse-y`)); |
| .space-y-1/2 \> \* \+ \*     | `--sf-space--reverse-y`: 0;<br/> margin-top: calc(var(`--sf-space-1/2`) \* calc(1 \- var(`--sf-space--reverse-y`)));<br/> margin-bottom: calc(var(`--sf-space-1/2`) \* var(`--sf-space--reverse-y`)); |
| .space-y-1 \> \* \+ \*       | `--sf-space--reverse-y`: 0;<br/> margin-top: calc(var(`--sf-space-1`) \* calc(1 \- var(`--sf-space--reverse-y`)));<br/> margin-bottom: calc(var(`--sf-space-1`) \* var(`--sf-space--reverse-y`));     |
| .space-y-2 \> \* \+ \*       | `--sf-space--reverse-y`: 0;<br/> margin-top: calc(var(`--sf-space-2`) \* calc(1 \- var(`--sf-space--reverse-y`)));<br/> margin-bottom: calc(var(`--sf-space-2`) \* var(`--sf-space--reverse-y`));     |
| .space-y-3 \> \* \+ \*       | `--sf-space--reverse-y`: 0;<br/> margin-top: calc(var(`--sf-space-3`) \* calc(1 \- var(`--sf-space--reverse-y`)));<br/> margin-bottom: calc(var(`--sf-space-3`) \* var(`--sf-space--reverse-y`));     |
| .space-y-4 \> \* \+ \*       | `--sf-space--reverse-y`: 0;<br/> margin-top: calc(var(`--sf-space-4`) \* calc(1 \- var(`--sf-space--reverse-y`)));<br/> margin-bottom: calc(var(`--sf-space-4`) \* var(`--sf-space--reverse-y`));     |
| .space-y-5 \> \* \+ \*       | `--sf-space--reverse-y`: 0;<br/> margin-top: calc(var(`--sf-space-5`) \* calc(1 \- var(`--sf-space--reverse-y`)));<br/> margin-bottom: calc(var(`--sf-space-5`) \* var(`--sf-space--reverse-y`));     |
| .space-y-6 \> \* \+ \*       | `--sf-space--reverse-y`: 0;<br/> margin-top: calc(var(`--sf-space-6`) \* calc(1 \- var(`--sf-space--reverse-y`)));<br/> margin-bottom: calc(var(`--sf-space-6`) \* var(`--sf-space--reverse-y`));     |
| .space-y-7 \> \* \+ \*       | `--sf-space--reverse-y`: 0;<br/> margin-top: calc(var(`--sf-space-7`) \* calc(1 \- var(`--sf-space--reverse-y`)));<br/> margin-bottom: calc(var(`--sf-space-7`) \* var(`--sf-space--reverse-y`));     |
| .space-y-8 \> \* \+ \*       | `--sf-space--reverse-y`: 0;<br/> margin-top: calc(var(`--sf-space-8`) \* calc(1 \- var(`--sf-space--reverse-y`)));<br/> margin-bottom: calc(var(`--sf-space-8`) \* var(`--sf-space--reverse-y`));     |
| .space-x-reverse \> \* \+ \* | `--sf-space--reverse-x`: 1;                                                                                                                                                                           |
| .space-y-reverse \> \* \+ \* | `--sf-space--reverse-y`: 1;                                                                                                                                                                           |
{.table}

Аналогичные классы действуют для вертикальных промежутков, заменяя `x` на `y`:

- `space-y-1/2` — вертикальный промежуток var(`--sf-space-1/2`)

Также доступны классы `space-x-reverse` и `space-y-reverse`, они меняют направление, в котором применяются
промежутки.

## Синтаксис

Использование:  
`{контрольная точка}:{модификатор}` или `{модификатор}`

- **Контрольная точка** *(опционально)*:  
  Применяет модификатор, начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`). Если не указана, модификатор
  применяется для всех размеров.

- **Модификатор** *(обязательный)*:

    - `space-x-{размер}` — горизонтальные промежутки
    - `space-y-{размер}` — вертикальные промежутки
    - `space-x-reverse` или `space-y-reverse` — изменяют направление применения промежутков

Где `{размер}`: `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`.

## Примеры использования

```html
<div class="flex space-x-1">
    <!-- Горизонтальный промежуток var(--sf-space-1) между дочерними элементами -->
    <div>Элемент 1</div>
    <div>Элемент 2</div>
    <div>Элемент 3</div>
</div>

<div class="space-y-2">
    <!-- Вертикальный промежуток var(`--sf-space-2`) между дочерними элементами -->
    <div>Элемент A</div>
    <div>Элемент B</div>
    <div>Элемент C</div>
</div>
```

## Обратный порядок

При использовании обратного порядка элементов (например, с классом `flex-row-reverse`), для корректного отображения
промежутков необходимо добавить `space-x-reverse` или `space-y-reverse`.

```html
<div class="flex flex-row-reverse space-x-1 space-x-reverse">
    <!-- Промежутки будут учтены при обратном порядке элементов -->
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```

## Переход со старой системы

Старые численные значения аналогично заменяются, как и для внутреннего/внешнего отступа. Например:

| Старое значение | Новое значение |
|:----------------|:---------------|
| .space-x-1      | .space-x-1/3   |
| .space-x-2      | .space-x-1/2   |
| .space-x-3      | .space-x-1     |
| .space-x-4      | .space-x-1     |
| .space-x-5      | .space-x-2     |
| .space-x-6      | .space-x-3     |
| .space-x-7      | .space-x-4     |
| .space-x-8      | .space-x-4     |
| .space-x-9      | .space-x-5     |
{.table}

Аналогично заменяются и вертикальные промежутки `space-y-{значение}`.

## Адаптивность

Для изменения промежутков, начиная с определённого размера экрана, добавьте префикс контрольной точки:

```html
<div class="md:space-x-4">
    <!-- Начиная с размера экрана md промежуток будет var(`--sf-space-4`) -->
    <div>Первый</div>
    <div>Второй</div>
</div>
```
