---
title: "Прозрачность кольца"
description: "Прячет кольцо, сохраняя его толщину, или возвращает ему полный цвет — сразу или в состоянии."
---

# Прозрачность кольца

Классы `ring-opacity-*` задают непрозрачность цвета
[кольца](/ru/utilities/outline/ring/). Берите `ring-opacity-0`, чтобы
спрятать кольцо, и `ring-opacity-full` с префиксом состояния, чтобы показать
его при наведении или фокусе.

## Пример

Под каждым образцом — класс прозрачности; кольцо задают `ring-4
ring-primary`. Наведите указатель на кнопку.

:::example {id="utilities/outline/ring-opacity" label="ring-opacity-full, ring-opacity-0 и hover:"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `ring-opacity-1` | `--sf-ring--alfa: var(--sf-opacity-10, 0.1)` | — |
| `ring-opacity-2` | `--sf-ring--alfa: var(--sf-opacity-20, 0.2)` | — |
| `ring-opacity-3` | `--sf-ring--alfa: var(--sf-opacity-30, 0.3)` | — |
| `ring-opacity-4` | `--sf-ring--alfa: var(--sf-opacity-40, 0.4)` | — |
| `ring-opacity-5` | `--sf-ring--alfa: var(--sf-opacity-50, 0.5)` | — |
| `ring-opacity-6` | `--sf-ring--alfa: var(--sf-opacity-60, 0.6)` | — |
| `ring-opacity-7` | `--sf-ring--alfa: var(--sf-opacity-70, 0.7)` | — |
| `ring-opacity-8` | `--sf-ring--alfa: var(--sf-opacity-80, 0.8)` | — |
| `ring-opacity-9` | `--sf-ring--alfa: var(--sf-opacity-90, 0.9)` | — |
| `ring-opacity-full` | `--sf-ring--alfa: 1` | — |
| `ring-opacity-0` | `--sf-ring--alfa: 0` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `focus-visible:`, `focus:`, `hover:`. Например: `focus-visible:ring-opacity-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-opacity-10` | `10%` |
| `--sf-opacity-20` | `20%` |
| `--sf-opacity-30` | `30%` |
| `--sf-opacity-40` | `40%` |
| `--sf-opacity-50` | `50%` |
| `--sf-opacity-60` | `60%` |
| `--sf-opacity-70` | `70%` |
| `--sf-opacity-80` | `80%` |
| `--sf-opacity-90` | `90%` |

## Применение

| Класс | Непрозрачность кольца |
| :--- | :--- |
| `ring-opacity-full` | полная — значение по умолчанию |
| `ring-opacity-0` | кольцо прозрачно |

Класс меняет переменную `--sf-ring--alfa`, которую читают классы толщины
кольца.

```html
<button class="ring-2 ring-primary ring-opacity-0 focus-visible:ring-opacity-full">Далее</button>
```

## Ограничения

- `ring-opacity-1` … `ring-opacity-9` в выпуске убирают кольцо, а не
  делают его полупрозрачным: процент из токена умножается на процент, и
  браузер отбрасывает такой цвет. Для бледного кольца берите мягкий цвет,
  например `ring-primary-container`.
- Префиксов ширины экрана у семейства нет; есть состояния `hover:`, `focus:`
  и `focus-visible:`.

## См. также

- [Фокусное кольцо](/ru/utilities/outline/ring/)
- [Внутреннее кольцо](/ru/utilities/outline/ring-inset/)
