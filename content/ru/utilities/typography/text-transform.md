---
title: "Трансформация текста (text-transform)"
description: "Трансформация текста (text-transform)"
---

# Трансформация текста (text-transform)

!rtags[font-transform]



С помощью модификаторов трансформации текста можно управлять регистром символов текста.

## Таблица классов

| Класс       | Значение                    |
|:------------|:----------------------------|
| .uppercase  | text-transform: uppercase;  |
| .lowercase  | text-transform: lowercase;  |
| .capitalize | text-transform: capitalize; |
| .normalcase | text-transform: none;       |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:
  Применяет модификатор начиная с определенного размера экрана (`sm`, `md`, `lg`, `xl`).
  Если не указана, модификатор применяется для все
 размеров.

- Модификатор *(обязательный параметр)*:

    - `uppercase` — все символы преобразуются в вер
ний регистр
    - `lowercase` — все символы преобразуются в нижний регистр
    - `capitalize` — первая буква каждого слова преобразуется в вер
ний регистр
    - `normalcase` — регистр символов не меняется

## Пример использования

```html
<p class="uppercase">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>

<p class="lowercase">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>

<p class="capitalize">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>

<p class="normalcase">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```
## Playground

&lt;div class="sf-playground overflow-hidden"&gt;
&lt;iframe title="Пример в Playground" loading="lazy" src="https://play.simai.io/embed.html?component=typography&group=text-transform"&gt;&lt;/iframe&gt;
&lt;/div&gt;
