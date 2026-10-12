---
title: "Уведомления"
description: "Выделяет внутри страницы подсказку, предупреждение, ошибку или подтверждение результата."
profile: reference
---

# Уведомления

Уведомление выделяет важную информацию в потоке страницы: подсказку,
предупреждение, ошибку или подтверждение результата. Для краткого сообщения
поверх интерфейса берите [всплывающее сообщение](/ru/components/feedback/toast/).

## Пример

:::example {id="components/alerts/basic" label="Результат"}
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

`sf-alert--neutral`, `sf-alert--info`, `sf-alert--success`,
`sf-alert--warning`, `sf-alert--error` — общий словарь статусов Framework.
Для обычной подсказки берите `neutral`; остальные выбирайте по смыслу
сообщения, а не по желаемому цвету. Классы `sf-alert--clear` и
`sf-alert--danger` — другие имена `neutral` и `error`.

:::example {id="components/alerts/overview" label="Результат"}
:::

### Вид

| Класс | Когда применять |
|:---|:---|
| `sf-alert--default` | заполненное самостоятельное заметное сообщение |
| `sf-alert--outlined` | контурное, спокойнее на фоне страницы |
| `sf-alert--flat` | плоское, внутри поверхности, границы которой задаёт окружающий контейнер |

В одном сценарии держите один способ отделения уведомлений от окружения.

:::example {id="components/alerts/appearance" label="Результат"}
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
не вызывает. Удаление проходит с анимацией на токенах движения; при системной
настройке уменьшения движения блок удаляется сразу. `data-alert-action`,
`data-alert-close` и класс `sf-alert--close` — другие имена тех же атрибутов.

:::example {id="components/alerts/actions" label="Результат"}
:::

Подписка на действие:

```js
document.addEventListener('sf-alert-action', (event) => {
  if (event.detail.action === 'download') startDownload();
});
```

## Классы

Раздел собран из CSS выпуска и обновляется вместе с выпуском.

| Что | Классы |
|:---|:---|
| Блок | `sf-alert` |
| Части | `sf-alert-buttons`, `sf-alert-content`, `sf-alert-supporting-text`, `sf-alert-text`, `sf-alert-wrap` |
| Модификаторы | `sf-alert--default`, `sf-alert--error`, `sf-alert--flat`, `sf-alert--info`, `sf-alert--neutral`, `sf-alert--outlined`, `sf-alert--success`, `sf-alert--warning` |
| Устаревшие | `sf-alert--clear` → `sf-alert--neutral`, `sf-alert--danger` → `sf-alert--error` |

## См. также

- [Всплывающие сообщения](/ru/components/feedback/toast/)
- [Alert — Smart-компонент](/ru/smart-components/feedback/alert/)
