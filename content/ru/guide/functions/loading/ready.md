---
title: "Готовность Loader"
description: "SF.ready — обещание запуска Loader и вызов функции, когда Loader и документ готовы."
---

# Готовность Loader

`SF.ready` говорит скрипту страницы, что Loader запустился и всё, что он
приносит, уже на месте: `SF.Loader`, `SF.create`, `SF.whenDefined`,
`SF.loadSmartBase` и остальные имена уровня Loader. Его можно ждать как
обещание или передать ему функцию. Скрипту не нужно знать, запустился ли
Loader до него или после: ответ один и тот же.

## Вызов

```js
const SF = await window.SF.ready;      // window.SF с запущенным Loader
window.SF.ready((SF) => { /* … */ });  // вызвать функцию, когда всё готово
```

| Форма | Что делает |
|:---|:---|
| `await SF.ready`, `SF.ready.then(fn)` | Выполняется со значением `window.SF`, когда Loader отправил `sf-loader-init`. Обещание никогда не отклоняется. |
| `SF.ready(fn)` | Вызывает `fn(window.SF)` один раз, когда Loader запущен и документ разобран; если оба условия уже выполнены — сразу, в том же вызове. |
| `window.SF_ON_READY.push(fn)` | Для скрипта, который стоит выше `core.js`: функция ждёт в очереди и вызывается в тот же момент, что и `SF.ready`. |

## Когда доступно

Ядро: `SF.ready` есть в `window.SF` сразу после выполнения `core.js`, до
следующего скрипта страницы. Он один на страницу: второй `core.js` или
сборка компонента его не заменяют.

## Пример

Пример спрашивает готовность при загрузке и ещё раз по кнопке. Второй ответ
приходит сразу: Loader уже запущен.

:::example {id="guide/functions/ready" label="Готовность Loader" preview=sandbox log_console=true}
:::

Скрипт, который подключается выше `core.js`, ставит функцию в очередь:

```html
<script>
  (window.SF_ON_READY = window.SF_ON_READY || []).push((SF) => SF.loadSmartBase());
</script>
<script src=".../distr/core/js/core.js"></script>
```

## Особые случаи

- Обработчик события `sf-loader-init`, добавленный после события, не
  сработает никогда. `SF.ready` такой ошибки не допускает: ждите его, а не
  событие.
- `SF.ready` не ждёт компоненты и основу смарт-компонентов. Элемент
  дожидаются через [Ожидание элемента](/ru/guide/functions/loading/when-defined/),
  основу — через [`SF.loadSmartBase()`](/ru/guide/functions/loading/smart-base/).

## См. также

- [Как работает Loader](/ru/guide/connection/loader/#события-загрузчика) — события загрузчика и порядок, в котором появляются имена.
- [Загрузка по требованию](/ru/guide/functions/loading/loader/) — что умеет `SF.Loader`.
