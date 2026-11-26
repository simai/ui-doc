---
title: "Устройство: раскладка и указатель"
description: "SF.device — два слова о месте компонента и вводе: раскладка phone или desktop по ширине места и указатель coarse или fine; отбор пунктов по отметке devices."
---

# Устройство: раскладка и указатель

`SF.device` отвечает скрипту на два разных вопроса правил
[«Сенсорные экраны»](/ru/guide/size-and-type/touch-screens/): в какой
**раскладке** нарисован компонент — `phone` или `desktop` — и какой у
страницы **указатель** — `coarse` (сенсорный, без мыши) или `fine`. Тем же
объектом компонент отбирает пункты, отмеченные `devices`.

## Вызов

```js
SF.device.layoutOf(element);          // 'phone' уже 600 px места элемента, иначе 'desktop'
SF.device.pointer();                  // 'coarse' или 'fine'
const stop = SF.device.watchLayout(element, (layout) => redraw(layout));
SF.device.watchPointer((pointer) => redraw(pointer));

SF.device.itemsInLayout(items, 'phone');                   // пункты, которые видны на телефоне
SF.device.markDevices(items, {nowrap: ['desktop']});       // свои отметки компонента
```

| Член | Что делает |
|:---|:---|
| `PHONE_BELOW` | `600`: уже этой ширины места (px) компонент рисует раскладку `phone`. |
| `LAYOUTS` | `['phone', 'desktop']` — слова раскладки. |
| `COARSE_QUERY` | Медиазапрос грубого указателя: `(pointer: coarse) and (not (any-pointer: fine))`. |
| `layoutOf(target)` | Раскладка: у элемента — по ширине его места, у числа — по этой ширине, слово `phone` или `desktop` возвращается как есть. |
| `layoutOfWidth(width)` | Раскладка ширины; `0` и отсутствие ширины (элемент ещё не разложен) — `desktop`. |
| `layoutPlace(element)` | Место элемента: он сам или ближайший предок с `container-type` (в том числе через теневой корень), иначе `null` — страница. |
| `watchLayout(element, callback)` | Вызывает `callback(layout)`, когда раскладка меняется (не сразу). Возвращает функцию `stop()`. |
| `pointer()` | `'coarse'`, когда выполняется `COARSE_QUERY`, иначе `'fine'`. |
| `watchPointer(callback)` | Вызывает `callback(pointer)` при смене указателя. Возвращает `stop()`. |
| `devicesOf(item)` | Раскладки, к которым привязан пункт (`devices` — массив или строка через пробел; незнакомые слова отбрасываются), или `null` — пункт виден везде. |
| `inLayout(item, layout)` | Виден ли пункт в этой раскладке. |
| `itemsInLayout(items, layout, {options})` | Пункты, видимые в раскладке; вложенные `items` отбираются так же, а с `options: true` — и `options`. Исходные пункты не меняются. |
| `markDevices(items, marks)` | Ставит отметки компонента `{id: ['desktop']}` (объект или `Map`) пунктам без своего `devices`, вложенным тоже. Отметка автора сильнее. Возвращает новые пункты. |

## Когда доступно

Ядро: сразу после выполнения `core.js`, ждать не нужно. В выпусках до
`core.runtime` 1.69.0 объекта нет; код, который должен работать и со старым
выпуском, проверяет `window.SF?.device`.

## Пример

Рамка ниже — контейнер размеров. Перетащите её правый нижний угол: слово
раскладки меняется на 600 px ширины рамки, а не окна. Строка «Указатель»
показывает `coarse` на телефоне и планшете без мыши.

:::example {id="guide/functions/device" label="Раскладка и указатель" preview=sandbox log_console=true}
:::

## Особые случаи

- Раскладка меряется по месту компонента: компонент в узкой боковой колонке
  широкой страницы рисует раскладку `phone`.
- Хост, который сам знает свою раскладку, передаёт её словом; так делает
  атрибут `device` у [Настроек](/ru/smart/navigation/settings/#телефон-и-компьютер).
- Модуль не хранит состояния: копия в сборке набора отвечает так же, как ядро.

## См. также

- [Сенсорные экраны](/ru/guide/size-and-type/touch-screens/) — правила, которые стоят за этими словами.
- [Долгое нажатие](/ru/guide/functions/screen/long-press/) — `SF.longPress`.
- [Контрольные точки](/ru/guide/functions/screen/breakpoints/) — шаги ширины окна для скрипта.
