---
title: "Оглавление"
description: "Показывает разделы длинной страницы списком якорных ссылок с отметкой текущего."
profile: reference
---

# Оглавление

Оглавление показывает разделы длинной страницы списком якорных ссылок и
отмечает текущий раздел. Для навигации между страницами берите меню или
хлебные крошки.

## Пример

:::example {id="components/outline/overview" label="Оглавление страницы"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`nav.sf-outline` → список `ul.sf-outline__list` → `li` → ссылка
`sf-outline__link`; вложенный `ul.sf-outline__list` внутри `li` даёт следующий
уровень с отступом.

- Корень — `<nav>` с доступным именем: он отделяет оглавление от основной
  навигации сайта.
- Уровень списка повторяет уровень заголовка: `h2` — первый уровень, `h3` —
  вложенный. Не пропускайте уровни ради отступа.
- Ссылка ведёт на `id` заголовка (`href="#install"`).
- Компонент работает без JavaScript: текущий раздел отмечает приложение.

## Состояния

### Текущий раздел

Ссылка с `aria-current="location"` получает полосу основного цвета в начале
строки, заливку и среднее начертание. Ставьте его ровно одной ссылке — на
раздел, который сейчас на экране; атрибут `data-sf-outline-active` оформляет
ссылку так же, но экранный диктор его не объявляет.

:::example {id="components/outline/state-current" label="Обычная и текущая ссылка"}
:::

### Фокус

При переходе клавишей Tab ссылка получает кольцо фокуса по `:focus-visible`.
В примере фокус показан классом `focus-visible`, который CSS компонента читает
наравне с `:focus-visible`.

:::example {id="components/outline/state-focus" label="Ссылка в фокусе"}
:::

## Доступность

- `nav` с `aria-label` («Содержание страницы») отличает оглавление от других
  областей навигации.
- Текущий раздел отмечает `aria-current="location"`: экранный диктор объявляет
  его, а не только цвет.
- Порядок ссылок совпадает с порядком заголовков на странице.
- Полоса текущего раздела стоит в логическом начале строки и зеркалится при
  письме справа налево.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-outline` |
| Части | `sf-outline__link`, `sf-outline__list` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-outline`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-outline--color` | `var(--sf-on-surface-variant)` | `color` |
| `--sf-outline--current-background` | `var(--sf-surface-container-active)` | `background-color` |
| `--sf-outline--current-color` | `var(--sf-on-surface)` | `color` |
| `--sf-outline--current-indicator` | `var(--sf-primary)` | `border-inline-start-color` |
| `--sf-outline--gap` | `var(--sf-space-1/3)` | `gap` |
| `--sf-outline--hover-background` | `var(--sf-surface-container-hover)` | `background-color` |
| `--sf-outline--hover-color` | `var(--sf-on-surface)` | `color` |
| `--sf-outline--indent` | `var(--sf-space-2)` | `padding-inline-start` |
| `--sf-outline--indicator-width` | `var(--sf-a2)` | `border-inline-start` |
| `--sf-outline--link-padding-block` | `var(--sf-space-1/4)` | `padding-top`, `padding-bottom`, `padding-block` |
| `--sf-outline--link-padding-inline` | `var(--sf-space-1)` | `padding-left`, `padding-right`, `padding-inline` |

## См. также

- [Полоса прокрутки](/ru/components/tools/scrollbar/)
