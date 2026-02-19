---
extends: _core._layouts.documentation
section: content
title: Визуально скрытый контент (sr-only)
description: Скрытие и возврат контента для screen reader
---

# Визуально скрытый контент (sr-only)

!rtags[sr-only]


`sr-only` скрывает элемент визуально, но оставляет его доступным для скринридера.
`not-sr-only` возвращает обычное отображение.

## Классы

| Класс | Значение |
|:--|:--|
| `.sr-only` | Визуально скрыть, оставить в accessibility tree |
| `.not-sr-only` | Отменить `sr-only` |
{.table}
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=interactivity&group=sr-only"></iframe>
</div>
