---
title: "Цвет разделителя"
description: "Окрашивает линии между соседними элементами контейнера цветовой ролью темы."
---

# Цвет разделителя

Классы `divider-{цвет}` ставятся на контейнер и задают цвет линий, которые
проводят классы [толщины разделителя](/ru/utilities/divider/divider-width/).
Берите `divider-outline-variant` для тихих списков, `divider-outline` — для
заметных, акцентные и статусные роли — когда линия несёт смысл.

## Пример

### Роли

Списки с `divider-y-2`; под каждым — класс цвета.

:::example {id="utilities/divider/divider-color" label="Роли цвета разделителя"}
:::

### Наведение

С префиксом `hover:` цвет меняется при наведении на контейнер. Наведите
указатель на список.

:::example {id="utilities/divider/divider-color-hover" label="hover:divider-primary"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `divider-transparent` (`.divider-transparent > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-transparent) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-transparent) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divide-transparent` (`.divide-transparent > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-transparent) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-transparent) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divider-current` (`.divider-current > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-current) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-current) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divide-current` (`.divide-current > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-current) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-current) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divider-outline` (`.divider-outline > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divide-outline` (`.divide-outline > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divider-outline-variant` (`.divider-outline-variant > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline-variant) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline-variant) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divide-outline-variant` (`.divide-outline-variant > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline-variant) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline-variant) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divider-primary` (`.divider-primary > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline-primary) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline-primary) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divide-primary` (`.divide-primary > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline-primary) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline-primary) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divider-secondary` (`.divider-secondary > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline-secondary) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline-secondary) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divide-secondary` (`.divide-secondary > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline-secondary) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline-secondary) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divider-tertiary` (`.divider-tertiary > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline-tertiary) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline-tertiary) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divide-tertiary` (`.divide-tertiary > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline-tertiary) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline-tertiary) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divider-error` (`.divider-error > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline-error) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline-error) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divide-error` (`.divide-error > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline-error) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline-error) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divider-warning` (`.divider-warning > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline-warning) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline-warning) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divide-warning` (`.divide-warning > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline-warning) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline-warning) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divider-success` (`.divider-success > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline-success) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline-success) calc(var(--sf-divider--alfa, 1) * 100%))` | — |
| `divide-success` (`.divide-success > :not([hidden]) ~ :not([hidden])`) | `border-color: color-mix(in srgb, transparent, var(--sf-outline-success) calc(1 * 100%)); border-color: color-mix(in srgb, transparent, var(--sf-outline-success) calc(var(--sf-divider--alfa, 1) * 100%))` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:divider-transparent`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-divider--alfa` | `1` |
| `--sf-current` | `currentColor` |
| `--sf-outline` | `light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-60--alfa-64))` |
| `--sf-outline-variant` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` |
| `--sf-outline-primary` | `light-dark(var(--sf-primary-50), var(--sf-primary-60))` |
| `--sf-outline-secondary` | `light-dark(var(--sf-secondary-50), var(--sf-secondary-60))` |
| `--sf-outline-tertiary` | `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-60))` |
| `--sf-outline-error` | `light-dark(var(--sf-error-50), var(--sf-error-60))` |
| `--sf-outline-warning` | `light-dark(var(--sf-warning-50), var(--sf-warning-60))` |
| `--sf-outline-success` | `light-dark(var(--sf-success-50), var(--sf-success-60))` |

## Применение

| Задача | Класс |
| :--- | :--- |
| Тихие линии списка или меню | `divider-outline-variant` |
| Заметные линии | `divider-outline` |
| Акцент | `divider-primary`, `divider-secondary`, `divider-tertiary` |
| Статус | `divider-error`, `divider-warning`, `divider-success` |
| Цвет текста контейнера | `divider-current` |
| Линия есть, но не видна | `divider-transparent` |

Класс цвета не рисует линию сам: нужен класс толщины.

```html
<ul class="flex flex-col divider-y-1 divider-outline-variant">
  <li class="p-y-2">Входящие</li>
  <li class="p-y-2">Отправленные</li>
</ul>
```

У каждого класса есть второе имя с `divide-` вместо `divider-`:
`divide-primary` — то же, что `divider-primary`. В разметке пишите
`divider-`.

## Ограничения

- `hover:` срабатывает при наведении на контейнер, а не на отдельный пункт.
- Префиксов ширины экрана у семейства нет.

## См. также

- [Толщина разделителя](/ru/utilities/divider/divider-width/)
- [Прозрачность разделителя](/ru/utilities/divider/divider-opacity/)
- [Цвет границы](/ru/utilities/border/border-color/)
