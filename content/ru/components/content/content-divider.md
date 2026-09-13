---
title: "Разделитель"
description: "Смысловая граница между соседними частями содержимого."
profile: reference
---

# Разделитель

Разделитель визуально отделяет соседние группы содержимого или действий.

## Пример

:::example {id="components/content-divider/overview" label="Результат"}
:::

## Особенности применения

Используйте обычный `hr` для чисто семантической границы. Компонент нужен,
когда на линии требуется подпись или действие.

## Содержимое

`sf-divider-content` размещает текст поверх горизонтальной линии. Доступны
обычный, жирный, компактный и контурный варианты.

:::example {id="components/content-divider/content" label="Результат"}
:::

## Действия

`sf-divider-buttons` объединяет одну или несколько кнопок на линии.

:::example {id="components/content-divider/buttons" label="Результат"}
:::

## Вертикальная граница

`sf-divider-vertical` разделяет соседние элементы по вертикали. Для явной
семантики укажите `role="separator"` и `aria-orientation="vertical"`.

:::example {id="components/content-divider/vertical" label="Результат"}
:::
