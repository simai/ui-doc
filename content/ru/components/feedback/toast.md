---
title: "Всплывающие сообщения"
description: "Коротко сообщает результат действия поверх интерфейса, не блокируя работу."
profile: reference
---

# Всплывающие сообщения

Всплывающее сообщение коротко сообщает результат действия поверх интерфейса
и не блокирует дальнейшую работу. Для постоянного текста внутри страницы
берите [уведомление](/ru/components/feedback/alerts/), для подтверждения с
обязательным выбором — [модальное окно](/ru/components/overlays-media/modal/).

## Пример

:::example {id="components/toast/basic" label="Сообщение об успехе"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-toast` → иконка `sf-icon` и `sf-toast-container` → `sf-toast-wrap` →
`sf-toast-text` и `sf-toast-supporting-text`; кнопки действий — в
`sf-toast-bottom` после `sf-toast-wrap`, кнопка закрытия — последним потомком
блока.

- На блоке `sf-toast` — один класс статуса.
- `sf-toast-text` — заголовок сообщения, `sf-toast-supporting-text` —
  пояснение. Обязателен только заголовок.
- Иконка необязательна; она декоративна и берёт цвет статуса.
- Компонент отвечает за одно сообщение. Положение на экране, порядок и число
  одновременно видимых сообщений задаёт контейнер приложения.

## Варианты

### Статус

Статус задаёт цвет заливки, границы, текста и иконки: `sf-toast--neutral`,
`sf-toast--info`, `sf-toast--success`, `sf-toast--warning`,
`sf-toast--error` — общий словарь статусов Framework. Выбирайте статус по
смыслу сообщения, а не по желаемому цвету. Классы `sf-toast--default` и
`sf-toast--primary` — другие имена `neutral` и `info`.

:::example {id="components/toast/overview" label="Статусы сообщения"}
:::

### Время жизни

Без атрибута `data-duration` сообщение остаётся, пока его не закроют.
`data-duration` задаёт время в миллисекундах, после которого сообщение
закрывается само; отсчёт останавливается, пока указатель или фокус внутри
сообщения. Сообщение с действием и сообщение об ошибке оставляйте
постоянными: их легко не успеть прочитать.

:::example {id="components/toast/lifetime" label="Постоянное и временное сообщение"}
:::

## Доступность

- Сообщению, которое появляется динамически, задайте `role="status"` для
  обычного результата и `role="alert"` для срочной ошибки. Сообщению, которое
  есть на странице с первой загрузки, живая роль не нужна.
- Смысл передаёт текст; цвет и иконка его только поддерживают.
- Кнопке закрытия нужно доступное имя: `aria-label="Закрыть сообщение"`.
- Не кладите во временное сообщение обязательный шаг или сведения, без которых
  нельзя продолжить.
- Если при закрытии фокус был внутри сообщения, приложение переносит его на
  следующий осмысленный элемент: компонент удаляет блок вместе с фокусом.

## JavaScript

Скрипт компонента находит блоки `.sf-toast` при загрузке страницы и в
добавленной позже разметке и обрабатывает нажатия внутри них:

| Атрибут на кнопке | Что происходит |
|:---|:---|
| `data-action="значение"` | на блоке возникает событие `sf-toast-action`; сообщение остаётся |
| `data-close` | на блоке возникает событие `sf-toast-close`, затем блок удаляется |

Оба события всплывают. `sf-toast-action` несёт в `detail` поля `action`
(значение атрибута), `toast` и `trigger`; `sf-toast-close` — `toast` и
`trigger` (при закрытии по времени `trigger` равен `null`). Недоступная кнопка
(`disabled` или `aria-disabled="true"`) событий не вызывает. На время
удаления блок получает класс `closing` и плавно гаснет; при системной
настройке уменьшения движения блок удаляется сразу. `data-toast-action` и
`data-toast-close` — другие имена тех же атрибутов. Само действие выполняет
приложение.

:::example {id="components/toast/actions" label="Действие и закрытие"}
:::

Функции `SF.Toast`:

| Функция | Что делает |
|:---|:---|
| `SF.Toast.show(target, options)` | собирает сообщение и добавляет его в конец `target` (элемент или селектор); возвращает блок |
| `SF.Toast.create(options)` | собирает сообщение и возвращает блок, не добавляя его на страницу |
| `SF.Toast.dismiss(toast)` | закрывает сообщение так же, как кнопка `data-close` |

```js
SF.Toast.show('#toasts', {
  status: 'success',
  title: 'Ссылка скопирована',
  duration: 5000,
  role: 'status',
  closeLabel: 'Закрыть сообщение',
});
```

Параметры: `status`, `icon` (имя значка), `title`, `supportingText`,
`actionText` и `action` (кнопка действия и её значение), `closable` (по
умолчанию `true`), `closeLabel`, `duration`, `role` (`status` или `alert`).
`status` принимает `success`, `warning`, `error`, `default` (нейтральный) и
`primary` (информационный); значения `neutral` и `info` функции не принимают
и собирают нейтральное сообщение. Компонент также регистрирует класс `Toast` с
теми же параметрами: `SF.Loader.ready('Toast', callback)` передаёт его после
события `sf-loader-init`.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-toast` |
| Части | `sf-toast-bottom`, `sf-toast-container`, `sf-toast-supporting-text`, `sf-toast-text`, `sf-toast-wrap` |
| Модификаторы | `sf-toast--error`, `sf-toast--info`, `sf-toast--neutral`, `sf-toast--success`, `sf-toast--warning` |
| Устаревшие | `sf-toast--default` → `sf-toast--neutral`, `sf-toast--primary` → `sf-toast--info` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-toast`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-toast--background-color` | не задана; задают модификаторы, например `.sf-toast--neutral`: `var(--sf-surface-container)` | `background-color` |
| `--sf-toast--content-color` | не задана; задают модификаторы, например `.sf-toast--neutral`: `var(--sf-on-surface)` | `color` |
| `--sf-toast-bottom--background-color` | не задана; задают модификаторы, например `.sf-toast .sf-toast-bottom`: `transparent` | `background-color` |
| `--sf-toast-container--background-color` | не задана; задают модификаторы, например `.sf-toast .sf-toast-container`: `transparent` | `background-color` |
| `--sf-toast-container--gap` | не задана; задают модификаторы, например `.sf-toast .sf-toast-container`: `var(--sf-space-1/2)` | `gap` |
| `--sf-toast-supporting-text--color` | не задана; задают модификаторы, например `.sf-toast.sf-toast--neutral .sf-toast-supporting-text`: `var(--sf-on-surface)` | `color` |
| `--sf-toast-supporting-text--font-family` | не задана; задают модификаторы, например `.sf-toast .sf-toast-supporting-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-toast-supporting-text--font-size` | не задана; задают модификаторы, например `.sf-toast .sf-toast-supporting-text`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-toast-supporting-text--font-weight` | не задана; задают модификаторы, например `.sf-toast .sf-toast-supporting-text`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-toast-supporting-text--line-height` | не задана; задают модификаторы, например `.sf-toast .sf-toast-supporting-text`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-toast-text--color` | не задана; задают модификаторы, например `.sf-toast.sf-toast--neutral .sf-toast-text`: `var(--sf-on-surface)` | `color` |
| `--sf-toast-text--font-family` | не задана; задают модификаторы, например `.sf-toast .sf-toast-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-toast-text--font-size` | не задана; задают модификаторы, например `.sf-toast .sf-toast-text`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-toast-text--font-weight` | не задана; задают модификаторы, например `.sf-toast .sf-toast-text`: `var(--sf-font-weight-medium)` | `font-weight` |
| `--sf-toast-text--line-height` | не задана; задают модификаторы, например `.sf-toast .sf-toast-text`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-toast-wrap--background-color` | не задана; задают модификаторы, например `.sf-toast .sf-toast-wrap`: `transparent` | `background-color` |
| `--sf-toast-wrap--gap` | не задана; задают модификаторы, например `.sf-toast .sf-toast-wrap`: `var(--sf-space-1/4)` | `gap` |

## См. также

- [Уведомления](/ru/components/feedback/alerts/)
- [Toast — Smart-компонент](/ru/smart-components/feedback/toast/)
