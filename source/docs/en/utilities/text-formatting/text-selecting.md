---
extends: _core._layouts.documentation
section: content
title: Выделение текста
description: Выделение текста
---

# Выделение текста

[https://dev.ru.simai.io/ru/ui/utility/text-decoration/mark.php](https://dev.ru.simai.io/ru/ui/utility/text-decoration/mark.php)

Для выделения фрагментов текста можно использовать HTML-тег `<mark>`.

## Таблица стилей

| Тег   | Значение                                                                                                                    |
|:------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| .mark | position: relative;<br/> white-space: pre-wrap;<br/> background-color: var(`--sf-mark--color`);<br/> font-weight: inherit; font-style: inherit; |
{.table}

## Описание

HTML элемент `<mark>` обозначает фрагмент текста, выделенный из\-за особой  
актуальности в контексте. Например, его можно использовать на странице  
результатов поиска для подсветки всех вхождений искомого слова.

## Пример использования

```html
<p>Lorem ipsum dolor sit amet, <mark>consectetur adipiscing elit</mark>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```

## Переменные

| Старая переменная          | Новая переменная   |
|:---------------------------|:-------------------|
| `--sf-color--bg-text-mark` | `--sf-mark--color` |
{.table}

Значение новой переменной:

| Переменная         | Значение            |
|:-------------------|:----------------------------------------|
| `--sf-mark--color` | var(`--sf-warning-transparent-overlay`) |
{.table}
