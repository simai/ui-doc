---
title: "Код подтверждения"
description: "Посимвольный ввод одноразового кода."
profile: reference
---

# Код подтверждения

Компонент распределяет код по отдельным полям и автоматически переводит фокус.

## Пример

:::example {id="components/verification/overview" label="Результат"}
:::

## Особенности применения

Все поля размещайте в одном `sf-verification-form`, задавайте `inputmode` и
понятную общую подпись. Вставка целого кода распределяется по полям; Backspace
возвращает фокус к предыдущему символу.

## Оформление

Доступны `bordered` и `filled`.

:::example {id="components/verification/styles" label="Результат"}
:::

## Размеры

Размеры `1/3`, `1/2`, `1`, `2` и `3` применяются одновременно к форме и полям.

:::example {id="components/verification/sizes" label="Результат"}
:::

## Состояния

Нативный `disabled` отключает поле, а класс `error` отмечает неверный код.

:::example {id="components/verification/states" label="Результат"}
:::
