---
title: "Заполнитель"
description: "Объясняет пустое состояние: данных нет, поиск ничего не нашёл или раздел не заполнен."
profile: reference
---

# Заполнитель

Заполнитель объясняет пустое состояние: данных нет, поиск ничего не нашёл или
раздел не заполнен. Для ожидания данных берите
[скелетон](/ru/components/feedback/skeleton/), а не пустое состояние.

## Пример

:::example {id="components/placeholder/basic" label="Пустой раздел с действием"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-placeholder` → изображение `sf-placeholder__visual` и
`sf-placeholder__content` → `sf-placeholder__header` с
`sf-placeholder__title` и `sf-placeholder__description`, затем
`sf-placeholder__actions`.

- Обязательны блок, `sf-placeholder__content` и заголовок
  `sf-placeholder__title`: он называет состояние.
- `sf-placeholder__description` подсказывает причину или следующий шаг.
- `sf-placeholder__visual` — иллюстрация или крупная иконка; она лежит прямым
  потомком блока и не сжимается.
- `sf-placeholder__actions` держит одну понятную кнопку, если пользователь
  может исправить ситуацию.
- Компонент работает без JavaScript. Части `sf-placeholder-right`,
  `sf-placeholder-top` и `sf-placeholder-top-text` — другие имена
  `__content`, `__header` и заголовка с пояснением.

## Варианты

### Компоновка

`sf-placeholder--column` ставит изображение над текстом и выравнивает всё по
центру — для пустого состояния в центре раздела; это компоновка по
умолчанию. `sf-placeholder--row` ставит изображение и текст в строку и
выравнивает текст по началу строки — для широкой области, например над
таблицей.

:::example {id="components/placeholder/overview" label="Компоновки заполнителя"}
:::

## Доступность

- Заголовок заполнителя — настоящий заголовок (`h2`–`h4`) по уровню раздела,
  чтобы пустое состояние находилось в структуре страницы.
- Иллюстрация декоративна: `aria-hidden="true"` на иконке или пустой `alt` у
  изображения.
- Если пустое состояние появляется после действия пользователя (поиск,
  фильтр), сообщите о нём областью с `role="status"` вокруг заполнителя.
- Кнопка действия называет действие, а не состояние: «Создать проект», а не
  «Пусто».

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-placeholder` |
| Части | `sf-placeholder-right`, `sf-placeholder-top`, `sf-placeholder-top-text`, `sf-placeholder__actions`, `sf-placeholder__content`, `sf-placeholder__description`, `sf-placeholder__header`, `sf-placeholder__title`, `sf-placeholder__visual` |
| Модификаторы | `sf-placeholder--column`, `sf-placeholder--row` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-placeholder`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-placeholder--background-color` | `var(--sf-transparent)` | `background-color` |
| `--sf-placeholder--color` | `var(--sf-on-surface)` | `color` |
| `--sf-placeholder--gap` | `var(--sf-space-1)` | `gap` |
| `--sf-placeholder-actions--gap` | `var(--sf-space-1/2)` | `gap` |
| `--sf-placeholder-content--gap` | `var(--sf-placeholder-right--gap, var(--sf-space-1))` | `gap` |
| `--sf-placeholder-header--gap` | `var(--sf-placeholder-top--gap, var(--sf-space-1/3))` | `gap` |

## См. также

- [Скелетон](/ru/components/feedback/skeleton/)
- [Акцентная иконка](/ru/components/content/featured-icon/)
