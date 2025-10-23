---
extends: _core._layouts.documentation
section: content
title: "Сглаживание шрифтов (font-smoothing)"
description: "Сглаживание шрифтов (font-smoothing)"
---

# Сглаживание шрифтов (font-smoothing)

[https://dev.ru.simai.io/ru/ui/utility/typography/font-smoothing.php](https://dev.ru.simai.io/ru/ui/utility/typography/font-smoothing.php)

Модификаторы для управления сглаживанием шрифта позволяют выбрать между субпиксельным сглаживанием и сглаживанием
оттенков серого.

## Таблица классов

| Класс        | Значение                                                 |
|:-------------|:-----------------------------------------------------------------------------|
| .antialiased | -webkit-font-smoothing: antialiased;<br/>-moz-osx-font-smoothing: grayscale; |
| .smoothing   | -webkit-font-smoothing: auto;<br/>-moz-osx-font-smoothing: auto;             |
{.table}

## Пример использования

```html
<p class="antialiased">
  Этот текст будет отрисован с использованием сглаживания оттенков серого.
</p>

<p class="smoothing">
  Этот текст будет отрисован с субпиксельным сглаживанием.
</p>
```

## Адаптивность

Для изменения сглаживания шрифта начиная с определённой контрольной точки (например, `md`) добавьте префикс контрольной
точки:

```html
<p class="md:antialiased">На экранах md и больше текст будет отображаться с сглаживанием оттенков серого.</p>
```
