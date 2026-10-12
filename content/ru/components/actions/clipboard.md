---
title: "Копирование"
description: "Копирует значение или текст элемента в буфер обмена и сообщает результат."
profile: reference
---

# Копирование

Кнопка копирования кладёт в буфер обмена готовое значение или текст другого
элемента: команду, ключ, код заказа. Ставьте её рядом с текстом, который
читатель переносит в другое место, и не прячьте этот текст: его должно быть
можно выделить и вручную.

## Пример

:::example {id="components/clipboard/overview" label="Копирование команды"}
:::

## Разметка

Минимальную разметку показывает пример выше: нативный
`<button type="button">` с классом `sf-clipboard`, иконкой `sf-icon` и
источником значения.

- Источник задаёт один из атрибутов: `data-copy` — само значение;
  `data-target` или `data-clipboard-target` — `#id` элемента, чей текст
  копируется (у `<input>` и `<textarea>` берётся `value`). Если заданы оба
  вида источника, копирование завершается ошибкой.
- Кнопке без видимого текста нужен `aria-label`, который называет, что
  копируется.
- Сообщения задают `data-success` и `data-error`. Скрипт выводит их в
  область статуса: в элемент из `data-status="#id"`, а без него — в
  созданный после кнопки `<span class="sf-clipboard-status">`.
- `data-duration` задаёт, через сколько миллисекунд сообщение и иконка
  возвращаются к исходным: от 1000 до 10000, по умолчанию 5000.
- Класс `sf-clipboard` — маркер для Loader: по нему подключается скрипт
  компонента.

## Варианты

### Оформление

`sf-clipboard-surface` даёт кнопке собственную спокойную поверхность — для
кода и полей. Если кнопка копирования стоит среди других действий, оформите
её как [кнопку с иконкой](/ru/components/actions/icon-buttons/) или
[кнопку](/ru/components/actions/buttons/) с подписью и добавьте
`sf-clipboard`: поведение то же.

:::example {id="components/clipboard/appearance" label="Оформление кнопки копирования"}
:::

### Размер

Размер кнопки с `sf-clipboard-surface` задают `sf-clipboard-1` (высота
контрола ступени `1/3`), `sf-clipboard-2` (ступень `1`, как без класса) и
`sf-clipboard-3` (ступень `2`). Кнопке, оформленной как `sf-icon-button` или
`sf-button`, размер задают классы этих компонентов.

:::example {id="components/clipboard/sizes" label="Размеры кнопки копирования"}
:::

### Положение

`sf-clipboard--overlay` прижимает кнопку к верхнему конечному углу блока с
текстом; блоку нужен `position: relative` (утилита `relative`). Без
модификатора кнопка стоит в потоке, например в строке рядом со значением.

:::example {id="components/clipboard/position" label="Кнопка поверх блока и в строке"}
:::

## Состояния

### Копирование

Пока идёт запись в буфер, скрипт ставит кнопке `aria-disabled="true"`:
кнопка приглушается и повторное нажатие ничего не делает. После записи
атрибут снимается.

:::example {id="components/clipboard/state-pending" label="Кнопка в ожидании и в процессе копирования"}
:::

### Результат

После успеха иконка меняется на `check`, после ошибки — на `error`, а в
область статуса выводится текст из `data-success` или `data-error`. Через
время из `data-duration` кнопка возвращается к исходному виду. Нажмите
кнопки в примере: у второй нет источника, и она показывает ошибку.

:::example {id="components/clipboard/state-result" label="Успешное и неудачное копирование"}
:::

## Доступность

- Используйте нативный `<button>`: он получает фокус и срабатывает по Enter
  и пробелу.
- Доступное имя называет объект: «Копировать команду», а не «Копировать».
- Область статуса получает `role="status"`, `aria-live="polite"` и
  `aria-atomic="true"`: экранный диктор зачитывает результат. Задайте
  `data-success` и `data-error`, иначе результат виден только по иконке.
- Скопированный текст остаётся видимым и выделяемым на странице.
- В режиме высокой контрастности у кнопки появляется рамка, кольцо фокуса
  берёт системный цвет.
- Кнопка поверх блока стоит в конечном углу и зеркалится при письме справа
  налево.

## JavaScript

Скрипт подключает кнопки `.sf-clipboard` при загрузке страницы и кнопки,
добавленные позже. Объект `SF.Clipboard` даёт три функции:

- `SF.Clipboard.bind(button)` — подключает кнопку вручную;
- `SF.Clipboard.copy(button)` — копирует значение кнопки, как при нажатии;
- `SF.Clipboard.unbind(button)` — отключает кнопку и удаляет созданную
  область статуса.

Копирование идёт через `navigator.clipboard` на защищённой странице, а если
оно недоступно или запрещено — через временное скрытое поле
(`sf-clipboard-fallback`).

Кнопка отправляет всплывающие события:

| Событие | Когда | `detail` |
|:---|:---|:---|
| `sf:copy-success` | значение записано в буфер | `method` — `native` или `legacy`; `text` — скопированный текст |
| `sf:copy-error` | значение не записано | `code` — `missing_source`, `missing_target`, `ambiguous_source`, `empty_source`, `copy_denied`, `copy_unsupported` или `copy_failed` |

```js
document.addEventListener('sf:copy-success', (event) => {
  console.log('Скопировано:', event.detail.text);
});
```

Компонент регистрирует класс `Copy`, который собирает кнопку из параметров
(`text`, `copy`, `done`, `error`, `label`, `size`, `type`, `scheme`).
`SF.Loader` появляется к событию `sf-loader-init` на `window`;
`SF.Loader.ready('Copy', callback)` передаёт класс, когда он
зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Copy', (Copy) => {
  const copy = new Copy({param: {copy: 'SF-2048', label: 'Копировать код заказа', done: 'Скопировано'}});
  document.querySelector('#order').append(copy.render());
}));
```

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-clipboard` |
| Части | `sf-clipboard-1`, `sf-clipboard-2`, `sf-clipboard-3`, `sf-clipboard-fallback`, `sf-clipboard-status`, `sf-clipboard-surface` |
| Модификаторы | `sf-clipboard--inline`, `sf-clipboard--overlay` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## См. также

- [Кнопки с иконкой](/ru/components/actions/icon-buttons/)
- [Подсветка кода](/ru/components/content/highlight/)
