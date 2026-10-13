---
title: "Предпросмотр файла"
description: "Показывает прикреплённый файл: тип или миниатюру, имя, размер и действия."
profile: reference
---

# Предпросмотр файла

Предпросмотр показывает выбранный или прикреплённый файл одной строкой:
иконку типа или миниатюру, имя, размер и действия с файлом. Берите его для
списков вложений и для файла, выбранного перед отправкой формы; ход загрузки
и повторную отправку показывает [загрузка файлов](/ru/components/forms/file-upload/).

## Пример

:::example {id="components/file-preview/overview" label="Предпросмотр файла"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части `sf-file-preview` идут
в строку: держатель `sf-file-preview-holder` с иконкой `sf-icon`, основная
часть `sf-file-preview-main` с именем `sf-file-preview-name` и размером
`sf-file-preview-size`, затем действия `sf-file-preview-actions`.

- Имя файла — видимый текст; длинное имя не выходит за строку.
- Действия — нативные [кнопки с иконкой](/ru/components/actions/icon-buttons/)
  с доступным именем, в котором есть имя файла.
- Блок действий необязателен: без него остаются держатель и имя.
- У компонента нет своего JavaScript: удаление и скачивание выполняет
  приложение.
- Loader подключает CSS компонента вместе со Smart-компонентом
  `sf-file-preview`, но не находит его по разметке `sf-file-preview`: без
  Smart-компонента подключите `component/file-preview/css/file-preview.css`
  сами.

## Варианты

### Миниатюра

В держателе стоит иконка типа файла или, для изображений, миниатюра
`<img class="sf-file-preview-thumbnail">`: она заполняет держатель с
обрезкой по краям.

:::example {id="components/file-preview/thumbnail" label="Иконка типа и миниатюра"}
:::

### Поверхность

Без модификатора строка прозрачна и встраивается в список или поле.
`sf-file-preview--surface` даёт ей собственную заливку и внутренний
отступ — для отдельного файла на странице.

:::example {id="components/file-preview/surface" label="Строка без поверхности и с поверхностью"}
:::

## Состояния

### Недоступен

Класс `disabled` или `aria-disabled="true"` приглушают всю строку. Кнопкам
действий дополнительно ставьте нативный `disabled`: класс на строке их не
блокирует.

:::example {id="components/file-preview/disabled" label="Недоступный файл"}
:::

## Доступность

- Доступное имя каждой кнопки называет действие и файл: «Удалить:
  Отчёт.pdf».
- Иконку типа скрывайте (`aria-hidden="true"`); миниатюре рядом с видимым
  именем задайте `alt=""`.
- Список нескольких файлов размечайте списком `<ul>` с элементами `<li>`.
- После удаления файла переведите фокус на соседний файл или на кнопку
  выбора файлов и сообщите результат в области статуса.
- В режиме высокой контрастности держатель и поверхность получают рамку
  цвета текста.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-file-preview` |
| Части | `sf-file-preview-actions`, `sf-file-preview-extension`, `sf-file-preview-holder`, `sf-file-preview-main`, `sf-file-preview-name`, `sf-file-preview-size`, `sf-file-preview-thumbnail` |
| Модификаторы | `sf-file-preview--compact`, `sf-file-preview--surface` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-file-preview`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-file-preview--background-color` | `transparent` | `background-color` |
| `--sf-file-preview--gap` | `var(--sf-space-1/2)` | `grid-gap`, `gap` |
| `--sf-file-preview--padding` | `var(--sf-space-0)` | `padding-top`, `padding-block-start`, `padding-bottom`, `padding-block-end`, `padding-inline-start`, `padding-inline-end` |
| `--sf-file-preview--radius` | `var(--sf-radius--ui)` | `border-start-start-radius`, `border-start-end-radius`, `border-end-start-radius`, `border-end-end-radius` |
| `--sf-file-preview-holder--background-color` | не задана; задают модификаторы, например `.sf-file-preview .sf-file-preview-holder`: `var(--sf-surface-container)` | `background-color` |
| `--sf-file-preview-holder--color` | не задана; задают модификаторы, например `.sf-file-preview .sf-file-preview-holder`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-file-preview-holder--radius` | не задана; задают модификаторы, например `.sf-file-preview .sf-file-preview-holder`: `var(--sf-radius--ui)` | `border-radius` |
| `--sf-file-preview-holder--size` | не задана; задают модификаторы, например `.sf-file-preview .sf-file-preview-holder`: `var(--sf-ui-2--control-height)` | `width`, `inline-size`, `height`, `block-size` |
| `--sf-file-preview-name--color` | не задана; задают модификаторы, например `.sf-file-preview .sf-file-preview-name`: `var(--sf-on-surface)` | `color` |
| `--sf-file-preview-name--font-family` | не задана; задают модификаторы, например `.sf-file-preview .sf-file-preview-name`: `var(--sf-text--family)` | `font-family` |
| `--sf-file-preview-name--font-size` | не задана; задают модификаторы, например `.sf-file-preview .sf-file-preview-name`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-file-preview-name--font-weight` | не задана; задают модификаторы, например `.sf-file-preview .sf-file-preview-name`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-file-preview-name--line-height` | не задана; задают модификаторы, например `.sf-file-preview .sf-file-preview-name`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-file-preview-size--color` | не задана; задают модификаторы, например `.sf-file-preview .sf-file-preview-size`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-file-preview-size--font-family` | не задана; задают модификаторы, например `.sf-file-preview .sf-file-preview-size`: `var(--sf-text--family)` | `font-family` |
| `--sf-file-preview-size--font-size` | не задана; задают модификаторы, например `.sf-file-preview .sf-file-preview-size`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-file-preview-size--font-weight` | не задана; задают модификаторы, например `.sf-file-preview .sf-file-preview-size`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-file-preview-size--line-height` | не задана; задают модификаторы, например `.sf-file-preview .sf-file-preview-size`: `var(--sf-text-height-1/2)` | `line-height` |

## См. также

- [Скачивание файла](/ru/components/actions/download-file/)
- [Загрузка файлов](/ru/components/forms/file-upload/)
- [File Preview — Smart-компонент](/ru/smart-components/content/file-preview/)
