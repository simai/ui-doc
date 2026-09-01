---
title: "Вкладки"
description: "Переключение между связанными разделами содержимого."
profile: reference
---

# Вкладки

Вкладки показывают один из нескольких связанных разделов без перехода на новую
страницу.

## Пример

:::example {id="components/tabs/overview" label="Результат"}
:::

## Особенности применения

Пункты вкладок должны быть короткими и относиться к одному объекту. Loader
синхронизирует `selected`, `aria-selected`, `tabindex` и видимость панелей.
Начальную вкладку можно задать атрибутом `data-active-index`.

## Подчёркивание

`sf-tabs--underline` выделяет активную вкладку нижней линией.

:::example {id="components/tabs/underline" label="Результат"}
:::

## Капсулы

`sf-tabs--pills` оформляет пункты как отдельные округлые кнопки.

:::example {id="components/tabs/pills" label="Результат"}
:::

## На всю ширину

`sf-tabs--full` равномерно распределяет вкладки по ширине контейнера.

:::example {id="components/tabs/full" label="Результат"}
:::

## Вертикальное расположение

`sf-tabs--vertical` размещает список вкладок рядом с содержимым.

:::example {id="components/tabs/vertical" label="Результат"}
:::
