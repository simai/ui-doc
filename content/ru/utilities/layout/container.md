---
title: "Контейнер"
description: "Ограничивает ширину содержимого страницы шагом ширины экрана и добавляет горизонтальные отступы."
---

# Контейнер

Класс `container` растягивает элемент на доступную ширину, ограничивает её
шагом текущей ширины экрана и добавляет внутренние отступы по бокам. Берите
его для основной колонки страницы, шапки и подвала, чтобы содержимое не
растягивалось на широком экране и не прилипало к краям на узком.

## Пример

### Контейнер и центрирование

Пунктир — доступная ширина, светлая заливка — контейнер с его отступами,
тёмная — содержимое. Меняйте ширину окна просмотра: на каждом шаге ширины
экрана меняются ограничение и отступы. Сам контейнер не центрируется:
без `m-inline-auto` он прижат к началу строки.

:::example {id="utilities/layout/container" label="container и m-inline-auto"}
:::

### Контейнер от ширины экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте ширину
окна просмотра: до ширины `md` у элемента нет отступов и ограничения, от
`md` он становится контейнером.

:::example {id="utilities/layout/container-responsive" label="md:container"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `container` | `width: 100%; padding-inline-start: var(--sf-space-1); padding-inline-end: var(--sf-space-1); от ширины sm: width: 100%; max-width: var(--sf-breakpoint-sm); padding-inline-start: var(--sf-space-2); padding-inline-end: var(--sf-space-2); от ширины md: width: 100%; max-width: var(--sf-breakpoint-md); padding-inline-start: var(--sf-space-3); padding-inline-end: var(--sf-space-3); от ширины lg: width: 100%; max-width: var(--sf-breakpoint-lg); padding-inline-start: var(--sf-space-4); padding-inline-end: var(--sf-space-4); от ширины xl: width: 100%; max-width: var(--sf-breakpoint-xl); padding-inline-start: var(--sf-space-5); padding-inline-end: var(--sf-space-5); от ширины xxl: width: 100%; max-width: var(--sf-breakpoint-xxl); padding-inline-start: var(--sf-space-6); padding-inline-end: var(--sf-space-6)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:container`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-space-1` | `var(--sf-b2); от ширины lg: var(--sf-b6)` |
| `--sf-space-2` | `var(--sf-b6); от ширины lg: var(--sf-c0)` |
| `--sf-breakpoint-sm` | `от ширины sm: var(--sf-h1)` |
| `--sf-space-3` | `var(--sf-b6); от ширины lg: var(--sf-c2)` |
| `--sf-breakpoint-md` | `от ширины md: var(--sf-h2)` |
| `--sf-space-4` | `var(--sf-c2); от ширины lg: var(--sf-c6)` |
| `--sf-breakpoint-lg` | `от ширины lg: var(--sf-h5)` |
| `--sf-space-5` | `var(--sf-c6); от ширины lg: var(--sf-d0)` |
| `--sf-breakpoint-xl` | `от ширины xl: var(--sf-h8)` |
| `--sf-space-6` | `var(--sf-c6); от ширины lg: var(--sf-d2)` |
| `--sf-breakpoint-xxl` | `от ширины xxl: var(--sf-i2)` |

## Применение

### Шаги контейнера

`container` всегда занимает `width: 100%` и не бывает шире родителя. Остальное
задаёт шаг ширины экрана:

| Ширина экрана | Максимальная ширина | Отступ в начале и в конце строки |
|:---|:---|:---|
| меньше `sm` | нет | `--sf-space-1` |
| от `sm` | `--sf-breakpoint-sm` | `--sf-space-2` |
| от `md` | `--sf-breakpoint-md` | `--sf-space-3` |
| от `lg` | `--sf-breakpoint-lg` | `--sf-space-4` |
| от `xl` | `--sf-breakpoint-xl` | `--sf-space-5` |
| от `xxl` | `--sf-breakpoint-xxl` | `--sf-space-6` |

При размере шрифта браузера по умолчанию ограничение шага не уже ширины
экрана, с которой шаг начинается. Поэтому
сразу после перехода на шаг контейнер ещё занимает всю ширину и
останавливается, когда экран становится шире ограничения.

### Центрирование

Отступы снаружи контейнер не задаёт. Чтобы поставить его по центру, добавьте
`m-inline-auto`:

```html
<main class="container m-inline-auto">
  <!-- содержимое страницы -->
</main>
```

### Контейнер с префиксом ширины

`sm:container` … `xxl:container` включают контейнер только от указанной
ширины экрана и задают один шаг: ограничение и отступ этой ширины. Дальше
шаг не меняется: `md:container` на ширине `xl` остаётся с ограничением
`--sf-breakpoint-md`. Используйте префикс, когда на узком экране блок должен
идти от края до края, например у полноэкранной галереи.

```html
<section class="md:container m-inline-auto">
  <!-- от края до края до ширины md -->
</section>
```

### Другое ограничение ширины

Чтобы ограничить контейнер на широком экране другим значением, поставьте на
предка класс [`max-container-{1–8}`](/ru/utilities/layout/max-container/).

## Ограничения

- Отступы контейнера логические: в направлении справа налево они стоят так же
  в начале и в конце строки.
- `container` задаёт `max-width` и внутренние отступы. Класс ширины или
  внутренних отступов на том же элементе может их перебить.
- Шаги контейнера зависят от ширины окна, а не от ширины родителя. Чтобы блок
  менялся по ширине своего места на странице, используйте
  [контейнерные запросы](/ru/utilities/layout/query-container/).

## См. также

- [Максимальный размер контейнера](/ru/utilities/layout/max-container/)
- [Контейнерные запросы](/ru/utilities/layout/query-container/)
- [Внешний отступ](/ru/utilities/indents/margin/)
