---
title: "Подсветка кода"
description: "Автоматическое оформление исходного кода."
profile: reference
---

# Подсветка кода

Компонент распознаёт блоки `pre code`, подсвечивает синтаксис и добавляет
панель с языком и копированием.

## Пример

:::example {id="components/highlight/overview" label="Результат"}
:::

## Особенности применения

Указывайте класс языка на `code`, например `language-js`. Не используйте
подсветку для обычного текста; короткие идентификаторы оставляйте в `code`.

## Номера строк

Атрибут `data-line-numbers="true"` включает номера строк.

:::example {id="components/highlight/line-numbers" label="Результат"}
:::

## Тема

Классы `theme-light` и `theme-dark` выбирают светлую или тёмную схему блока.

:::example {id="components/highlight/themes" label="Результат"}
:::
