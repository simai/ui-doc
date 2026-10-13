---
title: "Progress Bar"
description: "Показывает известный ход процесса сплошной полосой от 0 до 100 процентов."
---

# Progress Bar

`<sf-progress-bar>` показывает ход процесса, у которого известна доля
выполненного: загрузка файла, импорт, проверка. Элемент строится на классах
компонента [Прогресс](/ru/components/feedback/progress-bar/). Когда доля
неизвестна, берите [Spinner](/ru/smart-components/feedback/spinner/); когда
ход удобнее читать крупными шагами —
[Progress Scale](/ru/smart-components/feedback/progress-scale/).

## Пример

:::example {id="smart-components/progress-bar/overview" label="Загрузка и завершение"}
:::

## Применение

### Значение

`value` — доля выполненного в процентах, от `0` до `100`; значения вне
диапазона приводятся к границе. `text-position` показывает число рядом с
полосой: `inline-end` — в конце строки, `bottom` — под полосой, `none` (по
умолчанию) — не показывает.

### Статус и размер

`status` сообщает смысл из общего словаря: `neutral` (по умолчанию), `info`,
`success`, `warning`, `error`. Компонент не выводит статус из процента:
ошибку или завершение задаёт приложение. `size` — толщина полосы, ступень
`1/3`, `1/2`, `1`, `2` или `3`.

### Обновление из скрипта

Меняйте `value` по мере хода процесса: компонент обновляет полосу и
`aria-valuenow` без перерисовки. `setProgress(n)` делает то же, а
`getProgress()` возвращает текущее значение числом.

```js
const progress = document.querySelector('sf-progress-bar');
upload.addEventListener('progress', (event) => {
  progress.setProgress(Math.round((event.loaded / event.total) * 100));
});
upload.addEventListener('load', () => {
  progress.setAttribute('status', 'success');
  progress.setAttribute('value-text', 'Файлы загружены');
});
```

## Доступность

- Полоса — `role="progressbar"` с `aria-valuemin="0"`, `aria-valuemax="100"`
  и текущим `aria-valuenow`. Задайте `label` — доступное имя: что именно
  выполняется. Без него экранный диктор прочитает одно число.
- `value-text` заменяет число словами: «Загружено 3 файла из 5»,
  «Проверка завершена».
- Полоса не получает фокус. Экранный диктор не объявляет каждое изменение
  значения; о завершении или ошибке сообщите отдельным текстом с
  `role="status"` или [Alert](/ru/smart-components/feedback/alert/).
- Область, которая ждёт результата, отметьте `aria-busy="true"` до конца
  процесса.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-82fc0ba882ba` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-progress-bar>` |
| Назначение | Непрерывный определённый прогресс с нормализованным значением, доступной семантикой диапазона и явным семантическим тоном. |
| Контракт | `smart.progress-bar`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-82fc0ba882ba` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

- `template` — `string`, по умолчанию `default`.
- `size` — `string`, по умолчанию `1`, значения: `1/3`, `1/2`, `1`, `2`, `3`.
- `value` — `string`, по умолчанию `0`, значения: шаблон `^(?:100|[1-9]?[0-9])(?:\.[0-9]+)?$`.
- `text-position` — `string`, по умолчанию `none`, значения: `none`, `inline-end`, `bottom`, `right`.
- `status` — `string`, по умолчанию `neutral`, значения: `neutral`, `info`, `success`, `warning`, `error`. О чём сообщает индикатор прогресса, в общем словаре статусов. Также принимается значение primary; оно означает neutral.
- `label` — `string`, по умолчанию пусто.
- `value-text` — `string`, по умолчанию пусто.

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `status` | `tone` | работает и предупреждает | 2026-12-01 |
| `status="error"` | `status="danger"` | работает и предупреждает | 2026-12-01 |
| `status="error"` | `status="critical"` | работает и предупреждает | 2026-12-01 |
| `status="neutral"` | `status="primary"` | работает и предупреждает | 2026-12-01 |

### Методы

- `getProgress()` — возвращает `number`. Возвращает атрибут value как число (0, если атрибута нет); значение не ограничивается.
- `setProgress(nextValue: number|string)` — возвращает `object`. Устанавливает атрибут value; null или undefined удаляет его.
- `setTextPosition(nextValue: string)` — возвращает `object`. Устанавливает text-position; null или undefined удаляет его.

### События

Своих событий нет; общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

### Доступность

- Роль: индикатор прогресса (`progressbar`).
- Доступное имя: обязательно.
- Фокус: Progress Bar не интерактивен и не входит в порядок фокуса.

### Минимальная разметка

```html
<sf-progress-bar label="Загрузка файлов" value="40"></sf-progress-bar>
```

### Источник

- `simai/ui@82fc0ba882baae72ae3d83d7370decbcebe366d7:distr/smart/progress-bar`
- `simai/ui@82fc0ba882baae72ae3d83d7370decbcebe366d7:distr/rule/rule.json#name=cl-progress-bar`

## См. также

- [Прогресс](/ru/components/feedback/progress-bar/) — полоса прогресса на классах.
- [Progress Scale](/ru/smart-components/feedback/progress-scale/) — ход процесса десятью шагами.
- [Spinner](/ru/smart-components/feedback/spinner/) — ожидание без известной доли.
