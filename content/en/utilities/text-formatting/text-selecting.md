---
title: "Выделение текста"
description: "Выделение текста"
---

# Выделение текста


Для выделения фрагментов текста можно использовать HTML-тег `&lt;mark&gt;`.

## Таблица стилей

| Тег   | Значение                                                                                                                    |
|:------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| .mark | position: relative;&lt;br/&gt; white-space: pre-wrap;&lt;br/&gt; background-color: var(`--sf-mark--color`);&lt;br/&gt; font-weight: inherit; font-style: inherit; |
{.table}

## Описание

HTML элемент `&lt;mark&gt;` обозначает фрагмент текста, выделенный из\-за особой  
актуальности в контексте. Например, его можно использовать на странице  
результатов поиска для подсветки все
 в
ождений искомого слова.

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
