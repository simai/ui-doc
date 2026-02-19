---
extends: _core._layouts.documentation
section: content
title: Стиль оформления текста
description: Стиль оформления текста
---

# Стиль оформления текста

!rtags[text-formatting-style]


## Таблица классов

| Класс | Значение |
|:--|:--|
| `.underline` | Подчеркивание |
| `.overline` | Надчеркивание |
| `.line-through` | Зачеркивание |
| `.decoration-none` | Отключение линии |
| `.decoration-solid` | Сплошная линия |
| `.decoration-dotted` | Точечная линия |
| `.decoration-dashed` | Пунктир |
| `.decoration-double` | Двойная линия |
| `.decoration-wavy` | Волнистая линия |
{.table}

## Пример

```html
<p class="underline decoration-wavy">Wavy underline</p>
<p class="line-through decoration-dashed">Dashed line-through</p>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=text-formatting&group=text-formatting-style"></iframe>
</div>
