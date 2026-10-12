---
title: "Уведомления"
description: "Выделяет внутри страницы подсказку, предупреждение, ошибку или подтверждение результата."
profile: reference
---

# Уведомления

Уведомление выделяет важную информацию в потоке страницы: подсказку,
предупреждение, ошибку или подтверждение результата. Для краткого сообщения
поверх интерфейса берите [всплывающее сообщение](/ru/components/feedback/toast/).

## Сводка

- **Модуль:** `alerts`. Loader подгружает его сам, когда встречает на странице класс `sf-alert`.
- **Поставка:** выпуск Framework, `distr/component/alerts`.
- **Переменные:** 20, см. «Переменные».

Сводка, классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Пример

:::example {id="components/alerts/basic" label="Информационное уведомление"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-alert` → иконка `sf-icon` и `sf-alert-wrap` → `sf-alert-content` →
`sf-alert-text` и `sf-alert-supporting-text`.

- На блоке `sf-alert` — один класс статуса и один класс вида.
- `sf-alert-text` — заголовок, `sf-alert-supporting-text` — пояснение. Оба
  набраны одним размером; заголовок выделен средним начертанием.
- Иконка необязательна; она декоративна и получает `aria-hidden="true"`.
- Кнопки действий кладутся в `sf-alert-buttons` внутри `sf-alert-wrap`, кнопка
  закрытия — последним потомком блока.

## Варианты

### Статус

Статус задаёт цвет заливки, границы, текста и иконки:
`sf-alert--neutral`, `sf-alert--info`, `sf-alert--success`,
`sf-alert--warning`, `sf-alert--error` — общий словарь статусов Framework.
Для обычной подсказки берите `neutral`; остальные выбирайте по смыслу
сообщения, а не по желаемому цвету. Классы `sf-alert--clear` и
`sf-alert--danger` — другие имена `neutral` и `error`.

:::example {id="components/alerts/overview" label="Статусы уведомления"}
:::

### Вид

Вид задаёт, чем уведомление отделено от окружения: `sf-alert--default` —
заливкой и границей, для самостоятельного заметного сообщения;
`sf-alert--outlined` — только границей, спокойнее на фоне страницы;
`sf-alert--flat` — только заливкой, внутри поверхности, границы которой задаёт
окружающий контейнер. В одном сценарии держите один вид.

:::example {id="components/alerts/appearance" label="Виды уведомления в каждом статусе"}
:::

### Состав

Обязателен только заголовок. Пояснение, иконка, кнопки действий и кнопка
закрытия добавляются по задаче; иконка сама берёт цвет статуса, у `neutral` —
вспомогательный цвет текста. Размеров у уведомления нет: текст набран основным
размером.

:::example {id="components/alerts/composition" label="Части уведомления"}
:::

## Доступность

- Уведомлению, которое появляется динамически, задайте `role="status"` для
  спокойного сообщения и `role="alert"` для срочной ошибки. Сообщению, которое
  есть на странице с первой загрузки, живая роль не нужна.
- Смысл передаёт текст; цвет и иконка его только поддерживают.
- Кнопке закрытия нужно доступное имя: `aria-label="Закрыть уведомление"`.
- Если при закрытии фокус был внутри уведомления, приложение переносит его на
  следующий осмысленный элемент: компонент удаляет блок вместе с фокусом.

## JavaScript

Скрипт компонента обрабатывает нажатия внутри `.sf-alert`:

| Атрибут на кнопке | Что происходит |
|:---|:---|
| `data-action="значение"` | на блоке возникает событие `sf-alert-action`; уведомление остаётся |
| `data-close` | на блоке возникает событие `sf-alert-close`, затем блок удаляется |

Кнопка «Скачать» в примере сообщает о выборе и оставляет уведомление на месте,
кнопка с крестиком удаляет его; после закрытия пример позволяет вернуть
уведомление.

Оба события всплывают. `sf-alert-action` несёт в `detail` поля `action`
(значение атрибута), `alert` и `trigger`; `sf-alert-close` — `alert` и
`trigger`. Недоступная кнопка (`disabled` или `aria-disabled="true"`) событий
не вызывает. На время удаления блок получает класс `closing` и плавно гаснет на
токенах движения; при системной настройке уменьшения движения блок удаляется
сразу. `data-alert-action`, `data-alert-close` и класс `sf-alert--close` —
другие имена тех же атрибутов.

:::example {id="components/alerts/actions" label="Действие и закрытие"}
:::

Подписка на действие:

```js
document.addEventListener('sf-alert-action', (event) => {
  if (event.detail.action === 'download') startDownload();
});
```

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-alert` |
| Части | `sf-alert-buttons`, `sf-alert-content`, `sf-alert-supporting-text`, `sf-alert-text`, `sf-alert-wrap` |
| Модификаторы | `sf-alert--default`, `sf-alert--error`, `sf-alert--flat`, `sf-alert--info`, `sf-alert--neutral`, `sf-alert--outlined`, `sf-alert--success`, `sf-alert--warning` |
| Устаревшие | `sf-alert--clear` → `sf-alert--neutral`, `sf-alert--danger` → `sf-alert--error` |

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила `.sf-alert`; переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-alert--background-color` | не задана; задают модификаторы, например `.sf-alert.sf-alert--neutral.sf-alert--default`: `var(--sf-surface-container)` | `background-color` |
| `--sf-alert--border-color` | не задана; задают модификаторы, например `.sf-alert.sf-alert--neutral.sf-alert--default`: `var(--sf-outline)` | `border-color` |
| `--sf-alert--color` | `var(--sf-on-surface)` | `color`, `--sf-alert-supporting-text--color`, `--sf-alert-text--color` |
| `--sf-alert--opacity` | не задана; задают модификаторы, например `.sf-alert.closing`: `0` | `opacity` |
| `--sf-alert-buttons--background-color` | не задана; задают модификаторы, например `.sf-alert .sf-alert-buttons`: `transparent` | `background-color` |
| `--sf-alert-buttons--gap` | не задана; задают модификаторы, например `.sf-alert .sf-alert-buttons`: `var(--sf-space-1/3)` | `gap` |
| `--sf-alert-content--background-color` | не задана; задают модификаторы, например `.sf-alert .sf-alert-content`: `transparent` | `background-color` |
| `--sf-alert-content--gap` | не задана; задают модификаторы, например `.sf-alert .sf-alert-content`: `var(--sf-space-1/2)` | `gap` |
| `--sf-alert-supporting-text--color` | не задана; задают модификаторы, например `.sf-alert .sf-alert-supporting-text`: `var(--sf-alert--color)` | `color` |
| `--sf-alert-supporting-text--font-family` | не задана; задают модификаторы, например `.sf-alert .sf-alert-supporting-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-alert-supporting-text--font-size` | не задана; задают модификаторы, например `.sf-alert .sf-alert-supporting-text`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-alert-supporting-text--font-weight` | не задана; задают модификаторы, например `.sf-alert .sf-alert-supporting-text`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-alert-supporting-text--line-height` | не задана; задают модификаторы, например `.sf-alert .sf-alert-supporting-text`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-alert-text--color` | не задана; задают модификаторы, например `.sf-alert .sf-alert-text`: `var(--sf-alert--color)` | `color` |
| `--sf-alert-text--font-family` | не задана; задают модификаторы, например `.sf-alert .sf-alert-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-alert-text--font-size` | не задана; задают модификаторы, например `.sf-alert .sf-alert-text`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-alert-text--font-weight` | не задана; задают модификаторы, например `.sf-alert .sf-alert-text`: `var(--sf-font-weight-medium)` | `font-weight` |
| `--sf-alert-text--line-height` | не задана; задают модификаторы, например `.sf-alert .sf-alert-text`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-alert-wrap--background-color` | не задана; задают модификаторы, например `.sf-alert .sf-alert-wrap`: `transparent` | `background-color` |
| `--sf-alert-wrap--gap` | не задана; задают модификаторы, например `.sf-alert .sf-alert-wrap`: `var(--sf-space-1)` | `gap` |

## См. также

- [Всплывающие сообщения](/ru/components/feedback/toast/)
- [Alert — Smart-компонент](/ru/smart-components/feedback/alert/)
