---
title: "Загрузка файлов"
description: "Принимает файлы через системное окно или перетаскиванием и показывает ход их передачи."
profile: reference
---

# Загрузка файлов

Загрузка файлов принимает один или несколько файлов через системное окно или
перетаскиванием и показывает список выбранных файлов с ходом передачи. Сами
файлы компонент не отправляет: это делает приложение своим запросом.

## Пример

:::example {id="components/file-upload/overview" label="Зона загрузки изображений"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-file-upload` → значок `sf-featured-icon` и `sf-file-upload-bottom` →
`sf-file-upload-block` → `sf-file-upload-block-text` со ссылкой
`sf-file-upload-link`, подсказка `sf-file-upload-text`. Сразу за зоной идёт
пустой список `sf-file-upload-files`.

- Зона — `<div class="sf-file-upload">` с классом размера. Скрипт компонента
  находит зоны по `.sf-file-upload`, ставит им `role="button"` и
  `tabindex="0"` и добавляет скрытый `<input type="file">`: нажатие на зону
  открывает системное окно.
- `accept` и `multiple` на зоне (или `data-accept` и `data-multiple`)
  передаются в системное окно. `accept` только подсказывает окну типы файлов и
  не заменяет проверку.
- Текст зоны становится её доступным именем; зоне без текста нужен
  `aria-label`.
- Список `sf-file-upload-files` скрипт заполняет пунктами `sf-upload-progress`
  с прогрессом передачи. Он лежит сразу за зоной или внутри неё; список в
  другом месте страницы задаёт селектор в `data-target`.

## Варианты

### Размер

Три ступени — `sf-file-upload--size-1/2`, `sf-file-upload--size-1` и
`sf-file-upload--size-2`. Пункты списка берут размер зоны:
`sf-upload-progress--size-*`. Берите ступень полей той же формы.

:::example {id="components/file-upload/sizes" label="Размеры зоны и пункта списка"}
:::

### Состав зоны

Полная зона — значок, ссылка с пояснением «или перетащите их сюда» и подсказка
о допустимых файлах — подходит для главного действия формы. В тесной форме
достаточно одной ссылки `sf-file-upload-link`: перетаскивание на зону работает
и так.

:::example {id="components/file-upload/composition" label="Полная и компактная зона"}
:::

### Один или несколько файлов

Без `multiple` окно выбирает один файл, а перетаскивание берёт первый из
брошенных. С `multiple` компонент принимает весь набор. Новый выбор заменяет
прежний список, отмена системного окна его не меняет; один и тот же файл можно
выбрать повторно.

:::example {id="components/file-upload/selection" label="Зона на один файл и на несколько"}
:::

## Состояния

Состояние пункта списка задаёт приложение полем `state` (см. JavaScript), зоны
— нативный атрибут `disabled` или класс. Наведение компонент показывает сам.

### Передача

`sf-upload-progress--process` — файл передаётся: под именем полоса прогресса,
справа кнопка удаления.

:::example {id="components/file-upload/state-process" label="Файл в процессе передачи"}
:::

### Передан

`sf-upload-progress--done` — передача завершена, вместо кнопки удаления стоит
отметка. Значение 100 само по себе не означает успех: состояние `done`
приложение ставит после ответа сервера.

:::example {id="components/file-upload/state-done" label="Переданный файл"}
:::

### Ошибка

`sf-upload-progress--error` — передача не удалась: значок окрашен цветом
ошибки, под именем кнопка повтора `sf-upload-progress-repeat`. Причину ошибки
пишите в строку размера или в текст кнопки.

:::example {id="components/file-upload/state-error" label="Ошибка передачи"}
:::

### Недоступна

Атрибут `disabled` или класс `disabled` на зоне приглушает её и отключает
выбор и перетаскивание; скрипт убирает зону из порядка фокуса и отключает
кнопки списка. Уже выбранные файлы приложение не теряет.

:::example {id="components/file-upload/state-disabled" label="Недоступная зона"}
:::

### Фокус

При переходе клавишей Tab зона получает кольцо фокуса по `:focus-visible`. В
примере фокус показан классом `focus-visible` на зоне.

:::example {id="components/file-upload/state-focus" label="Зона в фокусе"}
:::

## Доступность

- Зона — кнопка: Enter и пробел открывают системное окно. Текст зоны называет
  действие; зоне без текста задайте `aria-label`.
- Перетаскивание — дополнительный способ: всё доступно и через окно выбора.
- Кнопка удаления получает имя «Удалить» с именем файла, полоса прогресса — имя
  с именем файла, если их не задал автор: экранный диктор отличает файлы друг
  от друга.
- Допустимые типы и размер файла называйте в подсказке зоны; результат
  проверки сообщайте текстом в пункте списка.
- Сообщение о выборе или ошибке можно продублировать в области с
  `aria-live="polite"`, как в примерах.

## JavaScript

Компонент сообщает о выборе и действиях событиями на зоне; все события
всплывают:

| Событие | Когда | `detail` |
|:---|:---|:---|
| `sf-file-upload:select` | выбраны или брошены файлы | `files` — пункты списка, `source` (`input` или `drop`), `multiple` |
| `sf-file-upload:file-add` | для каждого выбранного файла | `item`, `index`, `items`, `source`, `multiple` |
| `sf-file-upload:remove` | нажата кнопка удаления | `item`, `index`, `items` |
| `sf-file-upload:retry` | нажата кнопка повтора | `item`, `index`, `items` |
| `sf-file-upload:file-error` | пункт перешёл в `error` | `item`, `index`, `items` |
| `sf-file-upload:file-complete` | пункт перешёл в `done` | `item`, `index`, `items` |
| `sf-file-upload:complete` | все пункты в `done` | `items` |

Пункт списка — объект с полями `name`, `fileSize` (текст размера), `progress`
(от 0 до 100), `state` (`process`, `done`, `error`), `errorMessage` (текст
кнопки повтора) и `file` — выбранный `File`. Удаление убирает пункт из
списка, повтор возвращает его в `process` с нулевым прогрессом; запрос
отменяет или повторяет приложение.

:::example {id="components/file-upload/actions" label="Удаление и повтор"}
:::

`SF.FileUpload` управляет списком; `target` — зона или элемент внутри неё:

| Функция | Что делает |
|:---|:---|
| `SF.FileUpload.getItems(target)` | возвращает пункты списка |
| `SF.FileUpload.setItems(target, items)` | заменяет пункты и перерисовывает список |
| `SF.FileUpload.removeItem(target, index)` | удаляет пункт и создаёт `sf-file-upload:remove` |
| `SF.FileUpload.clear(target)` | очищает список |

Компонент не добавляет выбранные файлы в нативный `FormData` формы: после
выбора скрытое поле файла очищается, поэтому обычная отправка формы файлов не
несёт. Файлы передаёт приложение: берёт `File` из поля `file` пунктов — из
`detail` событий `sf-file-upload:select` и `sf-file-upload:file-add` или через
`SF.FileUpload.getItems(target)` — отправляет своим запросом и обновляет
пункты через `setItems`:

```js
const upload = document.querySelector('.sf-file-upload');

upload.addEventListener('sf-file-upload:select', async (event) => {
  const items = event.detail.files;
  for (const [index, item] of items.entries()) {
    const response = await fetch('/upload', {method: 'POST', body: item.file});
    items[index] = {...item, progress: 100, state: response.ok ? 'done' : 'error', errorMessage: 'Повторить'};
    SF.FileUpload.setItems(upload, items);
  }
});
```

## Классы

**`sf-file-upload`**

| Что | Классы |
|:---|:---|
| Блок | `sf-file-upload` |
| Части | `sf-file-upload-block`, `sf-file-upload-block-text`, `sf-file-upload-bottom`, `sf-file-upload-link`, `sf-file-upload-text` |
| Размеры | `sf-file-upload--size-1`, `sf-file-upload--size-1/2`, `sf-file-upload--size-2` |

**`sf-upload-progress`**

| Что | Классы |
|:---|:---|
| Блок | `sf-upload-progress` |
| Части | `sf-upload-progress-content`, `sf-upload-progress-left`, `sf-upload-progress-name`, `sf-upload-progress-repeat`, `sf-upload-progress-text`, `sf-upload-progress-top` |
| Модификаторы | `sf-upload-progress--done`, `sf-upload-progress--error`, `sf-upload-progress--process` |
| Размеры | `sf-upload-progress--size-1`, `sf-upload-progress--size-1/2`, `sf-upload-progress--size-2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-file-upload`, `.sf-upload-progress`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-file-upload--background-color` | `var(--sf-surface-0)` | `background-color` |
| `--sf-file-upload--border-color` | `var(--sf-outline)` | `border-color` |
| `--sf-file-upload--gap` | не задана; задают модификаторы, например `.sf-file-upload--size-1`: `var(--sf-space-1/3)` | `gap` |
| `--sf-file-upload--padding-bottom` | не задана; задают модификаторы, например `.sf-file-upload--size-1`: `var(--sf-space-1)` | `padding-bottom` |
| `--sf-file-upload--padding-inline-end` | не задана; задают модификаторы, например `.sf-file-upload--size-1`: `var(--sf-space-3)` | `padding-inline-end` |
| `--sf-file-upload--padding-inline-start` | не задана; задают модификаторы, например `.sf-file-upload--size-1`: `var(--sf-space-3)` | `padding-inline-start` |
| `--sf-file-upload--padding-top` | не задана; задают модификаторы, например `.sf-file-upload--size-1`: `var(--sf-space-1)` | `padding-top` |
| `--sf-file-upload-block--background-color` | не задана; задают модификаторы, например `.sf-file-upload .sf-file-upload-block`: `transparent` | `background-color` |
| `--sf-file-upload-block--gap` | не задана; задают модификаторы, например `.sf-file-upload .sf-file-upload-block`: `var(--sf-space-1/4)` | `gap` |
| `--sf-file-upload-block-text--color` | не задана; задают модификаторы, например `.sf-file-upload .sf-file-upload-block-text`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-file-upload-block-text--font-family` | не задана; задают модификаторы, например `.sf-file-upload .sf-file-upload-block-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-file-upload-block-text--font-size` | не задана; задают модификаторы, например `.sf-file-upload--size-1 .sf-file-upload-block-text`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-file-upload-block-text--font-weight` | не задана; задают модификаторы, например `.sf-file-upload .sf-file-upload-block-text`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-file-upload-block-text--line-height` | не задана; задают модификаторы, например `.sf-file-upload--size-1 .sf-file-upload-block-text`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-file-upload-bottom--background-color` | не задана; задают модификаторы, например `.sf-file-upload .sf-file-upload-bottom`: `transparent` | `background-color` |
| `--sf-file-upload-bottom--gap` | не задана; задают модификаторы, например `.sf-file-upload .sf-file-upload-bottom`: `var(--sf-space-1/4)` | `gap` |
| `--sf-file-upload-link--color` | не задана; задают модификаторы, например `.sf-file-upload .sf-file-upload-link`: `var(--sf-primary)` | `color` |
| `--sf-file-upload-link--font-family` | не задана; задают модификаторы, например `.sf-file-upload .sf-file-upload-link`: `var(--sf-text--family)` | `font-family` |
| `--sf-file-upload-link--font-size` | не задана; задают модификаторы, например `.sf-file-upload--size-1 .sf-file-upload-link`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-file-upload-link--font-weight` | не задана; задают модификаторы, например `.sf-file-upload .sf-file-upload-link`: `var(--sf-font-weight-medium)` | `font-weight` |
| `--sf-file-upload-link--line-height` | не задана; задают модификаторы, например `.sf-file-upload--size-1 .sf-file-upload-link`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-file-upload-link--margin-bottom` | не задана; задают модификаторы, например `.sf-file-upload .sf-file-upload-link`: `var(--sf-text--margin)` | `margin-bottom` |
| `--sf-file-upload-text--color` | не задана; задают модификаторы, например `.sf-file-upload .sf-file-upload-text`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-file-upload-text--font-family` | не задана; задают модификаторы, например `.sf-file-upload .sf-file-upload-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-file-upload-text--font-size` | не задана; задают модификаторы, например `.sf-file-upload--size-1 .sf-file-upload-text`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-file-upload-text--font-weight` | не задана; задают модификаторы, например `.sf-file-upload .sf-file-upload-text`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-file-upload-text--line-height` | не задана; задают модификаторы, например `.sf-file-upload--size-1 .sf-file-upload-text`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-upload-progress--gap` | не задана; задают модификаторы, например `.sf-upload-progress--size-1`: `var(--sf-space-1/2)` | `gap`, `--sf-upload-progress-top--gap` |
| `--sf-upload-progress-content--background-color` | не задана; задают модификаторы, например `.sf-upload-progress .sf-upload-progress-content`: `transparent` | `background-color` |
| `--sf-upload-progress-content--gap` | не задана; задают модификаторы, например `.sf-upload-progress--size-1 .sf-upload-progress-content`: `var(--sf-space-1/4)` | `gap` |
| `--sf-upload-progress-left--background-color` | не задана; задают модификаторы, например `.sf-upload-progress .sf-upload-progress-left`: `transparent` | `background-color` |
| `--sf-upload-progress-name--color` | не задана; задают модификаторы, например `.sf-upload-progress .sf-upload-progress-name`: `var(--sf-on-surface)` | `color` |
| `--sf-upload-progress-name--font-family` | не задана; задают модификаторы, например `.sf-upload-progress .sf-upload-progress-name`: `var(--sf-text--family)` | `font-family` |
| `--sf-upload-progress-name--font-size` | не задана; задают модификаторы, например `.sf-upload-progress--size-1 .sf-upload-progress-name`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-upload-progress-name--font-weight` | не задана; задают модификаторы, например `.sf-upload-progress .sf-upload-progress-name`: `var(--sf-font-weight-medium)` | `font-weight` |
| `--sf-upload-progress-name--line-height` | не задана; задают модификаторы, например `.sf-upload-progress--size-1 .sf-upload-progress-name`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-upload-progress-repeat--color` | не задана; задают модификаторы, например `.sf-upload-progress--error .sf-upload-progress-repeat`: `var(--sf-on-surface)` | `color` |
| `--sf-upload-progress-repeat--font-family` | не задана; задают модификаторы, например `.sf-upload-progress--error .sf-upload-progress-repeat`: `var(--sf-text--family)` | `font-family` |
| `--sf-upload-progress-repeat--font-size` | не задана; задают модификаторы, например `.sf-upload-progress.sf-upload-progress--error.sf-upload-progress--size-1 .sf-upload-progress-repeat`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-upload-progress-repeat--font-weight` | не задана; задают модификаторы, например `.sf-upload-progress--error .sf-upload-progress-repeat`: `var(--sf-font-weight-bold)` | `font-weight` |
| `--sf-upload-progress-repeat--line-height` | не задана; задают модификаторы, например `.sf-upload-progress.sf-upload-progress--error.sf-upload-progress--size-1 .sf-upload-progress-repeat`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-upload-progress-repeat--padding-block` | не задана; задают модификаторы, например `.sf-upload-progress.sf-upload-progress--error.sf-upload-progress--size-1 .sf-upload-progress-repeat`: `var(--sf-ui-1--space-y-tightness-default)` | `padding-top`, `padding-bottom`, `padding-block` |
| `--sf-upload-progress-repeat--padding-inline` | не задана; задают модификаторы, например `.sf-upload-progress.sf-upload-progress--error.sf-upload-progress--size-1 .sf-upload-progress-repeat`: `var(--sf-ui-1--space-x)` | `padding-left`, `padding-right`, `padding-inline` |
| `--sf-upload-progress-repeat--radius` | не задана; задают модификаторы, например `.sf-upload-progress .sf-upload-progress-repeat`: `var(--sf-radius--ui)` | `border-radius` |
| `--sf-upload-progress-text--color` | не задана; задают модификаторы, например `.sf-upload-progress--process .sf-upload-progress-text`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-upload-progress-text--font-family` | не задана; задают модификаторы, например `.sf-upload-progress .sf-upload-progress-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-upload-progress-text--font-size` | не задана; задают модификаторы, например `.sf-upload-progress.sf-upload-progress--size-1 .sf-upload-progress-text`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-upload-progress-text--font-weight` | не задана; задают модификаторы, например `.sf-upload-progress .sf-upload-progress-text`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-upload-progress-text--line-height` | не задана; задают модификаторы, например `.sf-upload-progress.sf-upload-progress--size-1 .sf-upload-progress-text`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-upload-progress-top--background-color` | не задана; задают модификаторы, например `.sf-upload-progress .sf-upload-progress-top`: `transparent` | `background-color` |
| `--sf-upload-progress-top--gap` | не задана; задают модификаторы, например `.sf-upload-progress.sf-upload-progress--process.sf-upload-progress--size-1/2 .sf-upload-progress-top`: `var(--sf-space-1/3)` | `gap` |

## См. также

- [Прогресс](/ru/components/feedback/progress-bar/)
- [File Upload — Smart-компонент](/ru/smart-components/forms/file-upload/)
