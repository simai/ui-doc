---
extends: _core._layouts.documentation
section: content
title: "Семейство шрифтов (font-family)"
description: "Семейство шрифтов (font-family)"
---

# Семейство шрифтов (font-family)

!rtags[font-family]



В текущей версии для изменения семейства шрифтов используется система переменных. Значения переменных задаются в ядре
фреймворка. Использование классов семейства шрифтов позволяет гибко переключать стили текста без необходимости
переопределять стили вручную.

## Таблица классов

| Класс  | Значение                        |
|:-------|:--------------------------------|
| .sans  | font-family: var(`--sf-sans`);  |
| .serif | font-family: var(`--sf-serif`); |
| .mono  | font-family: var(`--sf-mono`);  |
{.table}


## Пример использования

```html
<p class="sans">Этот текст будет отображаться шрифтом из переменной var(--sf-sans).</p>
<p class="serif">Этот текст будет отображаться шрифтом из переменной var(--sf-serif).</p>
<p class="mono">Этот текст будет отображаться шрифтом из переменной var(--sf-mono).</p>
```

## Адаптивность

Для изменения семейства шрифта начиная с определённой контрольной точки (например, `md`) просто добавьте префикс
контрольной точки:

```html
<p class="md:serif">На экранах md и больше текст будет шрифтом serif.</p>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=typography&group=font-family"></iframe>
</div>
