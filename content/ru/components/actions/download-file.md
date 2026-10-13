---
title: "Скачивание файла"
description: "Показывает файл для скачивания: иконку, название и размер в одной кликабельной строке."
profile: reference
---

# Скачивание файла

Компонент оформляет ссылку на файл как отдельное действие: иконка
скачивания, название и размер в одной строке. Берите его для вложений,
отчётов и документов, которые читатель сохраняет к себе.

## Пример

:::example {id="components/download-file/overview" label="Ссылка на файл"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`a.sf-download-file` → `sf-download-file-wrap` → `sf-download-file-container`
с иконкой `sf-icon` и названием `sf-download-file-file-name`, затем размер
`sf-download-file-file-size`.

- Готовый файл — ссылка `<a>` с настоящим `href`. Атрибут `download` задаёт
  имя сохраняемого файла.
- Если адреса ещё нет и файл готовит приложение, берите
  `<button type="button">`: скрипт отправляет событие, а приложение само
  запускает подготовку (см. «JavaScript»). Не подменяйте ссылку кнопкой,
  когда адрес уже есть.
- Размер указывайте сразу. Если `sf-download-file-file-size` пуст, скрипт
  запрашивает `content-length` запросом `HEAD` по `href`; для чужого домена
  это зависит от его настроек CORS.
- Иконка декоративная: `aria-hidden="true"`.
- Имена `sf-download-file__body`, `__main`, `__icon`, `__name` и `__size`
  работают так же, как части выше; в разметке пишите имена через дефис.
  Размер, который скрипт дописывает сам, он ищет только в
  `sf-download-file-file-size`.

## Варианты

### Размер

Размеры `1/3`, `1/2`, `1`, `2` и `3` согласованно меняют отступ, текст,
промежутки и иконку. Без класса размера компонент берёт ступень `1`.
Выбирайте размер по окружающему тексту: в плотном списке вложений — `1/2`, в
карточке документа — `1` или `2`.

:::example {id="components/download-file/sizes" label="Размеры строки скачивания"}
:::

## Состояния

Наведение и нажатие компонент показывает сам: фон и граница меняют цвет.

### Недоступен

Кнопка с нативным `disabled`, а ссылка — без `href` и с классом `disabled` и
`aria-disabled="true"`: строка серая, нажатие ничего не делает. Состояние
должно быть верным в разметке ещё до загрузки скрипта, поэтому не оставляйте
недоступной ссылке действующий `href`.

:::example {id="components/download-file/disabled" label="Недоступные строки скачивания"}
:::

### Фокус

При переходе клавишей Tab строка получает кольцо фокуса по `:focus-visible`.
В примере фокус показан классом `focus-visible`, который CSS читает наравне с
`:focus-visible`.

:::example {id="components/download-file/state-focus" label="Строка скачивания в фокусе"}
:::

## Доступность

- Доступное имя — видимое название файла; если его мало, добавьте
  `aria-label` с названием и форматом, например «Скачать отчёт, PDF, 2,4 МБ».
- Ссылка и кнопка остаются нативными элементами: ссылка открывается по
  Enter, кнопка — по Enter и пробелу.
- Недоступная ссылка без `href` выпадает из порядка Tab; чтобы сообщить,
  почему файл недоступен, поставьте пояснение рядом текстом.
- Когда приложение готовит файл по кнопке, сообщайте о ходе и результате в
  области статуса (`role="status"`).
- Выравнивание текста следует направлению письма.

## JavaScript

Скрипт подключает элементы `.sf-download-file`, которые есть на странице при
её загрузке; разметку, добавленную позже, он не подключает. При нажатии
строка отправляет всплывающее событие `sf-download-file:click` с `detail`:

| Поле | Значение |
|:---|:---|
| `href` | адрес файла или пустая строка |
| `fileName` | атрибут `download`, затем `data-file-name`, затем текст названия |
| `download` | есть ли атрибут `download` или `data-download="true"` |

У ссылки событие не мешает переходу. У кнопки с адресом в атрибуте `href`
скрипт сам запускает скачивание; у кнопки без адреса событие — единственное
действие, и файл готовит приложение. Недоступная строка события не
отправляет.

:::example {id="components/download-file/action" label="Кнопка подготовки файла"}
:::

```js
document.addEventListener('sf-download-file:click', (event) => {
  console.log('Запрошен файл', event.detail.fileName);
});
```

Компонент регистрирует класс `DownloadFile`, который собирает строку из
параметров: `fileName`, `fileSize`, `href`, `download`, `disabled`, `size`,
`icon`, `target`. С адресом он создаёт ссылку, без адреса или в недоступном
состоянии — кнопку. `SF.Loader` появляется к событию `sf-loader-init` на
`window`; `SF.Loader.ready('DownloadFile', callback)` передаёт класс, когда
он зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('DownloadFile', (DownloadFile) => {
  const file = new DownloadFile({
    param: {fileName: 'Отчёт.pdf', fileSize: '2.4MB', href: '/files/report.pdf', download: true},
  });
  document.querySelector('#attachments').append(file.render());
}));
```

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-download-file` |
| Части | `sf-download-file-container`, `sf-download-file-file-name`, `sf-download-file-file-size`, `sf-download-file-wrap`, `sf-download-file__body`, `sf-download-file__icon`, `sf-download-file__main`, `sf-download-file__name`, `sf-download-file__size` |
| Размеры | `sf-download-file--size-1/2`, `sf-download-file--size-1/3`, `sf-download-file--size-2`, `sf-download-file--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-download-file`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-download-file--background-color` | `transparent` | `background-color` |
| `--sf-download-file--border-color` | `var(--sf-outline-variant)` | `border` |
| `--sf-download-file--gap` | `var(--sf-space-1/3)` | `gap` |
| `--sf-download-file--icon-size` | `var(--sf-text-size-3)` | `height`, `block-size`, `width`, `inline-size`, `font-size` |
| `--sf-download-file--padding` | `var(--sf-space-1/3)` | `padding` |
| `--sf-download-file--text-height` | `var(--sf-text-height-1)` | `line-height` |
| `--sf-download-file--text-size` | `var(--sf-text-size-1)` | `font-size` |

## См. также

- [Просмотр файла](/ru/components/content/file-preview/)
- [Download File — Smart-компонент](/ru/smart-components/actions/download-file/)
