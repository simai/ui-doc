---
extends: _core._layouts.documentation
section: content
title: "Обрезка текста (text-overflow)"
description: "Обрезка текста (text-overflow)"
---

# Обрезка текста (text-overflow)

!rtags[text-overflow]



С помощью модификаторов можно обрезать текст, который не помещается в родительский элемент, добавляя многоточие или
полностью скрывая лишние символы.

## Таблица классов

| Класс       | Значение                                                                  |
|:------------|:--------------------------------------------------------------------------|
| .truncate   | overflow: hidden;<br/> white-space: nowrap;<br/> text-overflow: ellipsis; |
| .t-ellipsis | text-overflow: ellipsis;                                                  |
| .t-clip     | text-overflow: clip;                                                      |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `truncate` – текст в одну строку, лишний текст обрезается, в конце добавляется многоточие.
    - `t-ellipsis` – текст обрезается с многоточием, необходимо вручную указать `overflow-hidden` и
      `white-space: nowrap`.
    - `t-clip` – текст обрезается без многоточия, необходимо вручную указать `overflow-hidden` и `white-space: nowrap`.

## Пример использования

```html
<!-- Пример с truncate -->
<p class="truncate ...">Lorem ipsum dolor sit amet, consectetur adipiscing elit, taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

```

```html
<!-- Пример с t-ellipsis -->
<p class="overflow-hidden whitespace-nowrap t-ellipsis ...">Lorem ipsum dolor sit amet, consectetur adipiscing elit, taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

```

```html
<!-- Пример с t-clip -->
<p class="overflow-hidden whitespace-nowrap t-clip ...">Lorem ipsum dolor sit amet, consectetur adipiscing elit, taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=typography&group=text-overflow"></iframe>
</div>
