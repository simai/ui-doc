---
title: "Inline-редактор"
description: "Даёт править текст заголовков и абзацев прямо на странице и возвращает модель content, а не HTML."
---

# Inline-редактор

`<sf-editor-inline>` — часть редактора страниц: правка текста
`content.heading` и `content.paragraph` прямо на холсте. Доступно то, что есть
в модели content: полужирный, курсив, код, ссылки и встроенные компоненты
(`badge`, `kbd`, `icon`, `button`); списков нет, потому что их нет в модели. События несут нормализованную модель, а не HTML.

## Пример

:::example {id="smart-components/inline-editor/overview" label="Правка условий доставки"}
:::

## Разметка

Элемент ничего не показывает: достаточно поставить на странице
`<sf-editor-inline>`, и загрузчик SIMAI Framework подключит код редактора по
требованию.

```html
<sf-editor-inline></sf-editor-inline>
<p data-sf-composition-id="note">Доставка по городу — <strong>бесплатно</strong>.</p>
```

Атрибутов, без которых он не работает, нет: что править, говорит вызов из
кода. Правку запускает `SF.Composition.startInlineEdit(element, options)`
или метод `edit(element, options)` элемента. До загрузки вызов завершается
ошибкой `inline_editor_not_loaded`, поэтому сначала дождитесь
`customElements.whenDefined('sf-editor-inline')`. Повторный запуск на элементе,
который уже правится, завершается ошибкой `inline_edit_active`.

## Поведение

### Параметры правки

- `content` — текущая модель content; без неё редактор читает текст из
  элемента;
- `nodeId` — `id` узла Document, который придёт в событиях;
- `label` — доступное имя поля правки, например «Абзац»;
- `marks` — разрешённое оформление, подмножество `strong`, `em`, `code`;
- `links` — `false` отключает ссылки;
- `messages` — свои подписи панели форматирования.

Вызов возвращает `{element, commit, cancel, value}`: `commit()` и `cancel()`
завершают правку из кода, `value()` возвращает текущую модель.

### События

События отправляются на редактируемый элемент и всплывают до `document`:

- `sf-inline-editor-input` — `{id, content}` после каждого изменения;
- `sf-inline-editor-change` — `{id, content}` по `Enter` или при уходе
  фокуса;
- `sf-inline-editor-cancel` — `{id}` по `Escape`; исходный HTML элемента
  возвращается без изменений.

Прежние имена `sf-inline-edit-input`, `sf-inline-edit-commit` и
`sf-inline-edit-cancel` с `node_id` вместо `id` приходят следом до 2026-12-01.

Сохраняйте результат `commit` через свой контракт ревизий, проверяйте Document
и перерисовывайте страницу.

```js
await customElements.whenDefined('sf-editor-inline');
SF.Composition.startInlineEdit(element, {
  content: node.data.content,
  nodeId: node.id,
  label: 'Абзац',
});
canvas.addEventListener('sf-inline-editor-change', (event) => {
  save(event.detail.id, event.detail.content);
});
```

### Встроенные компоненты

Встроенный компонент в тексте — одна позиция курсора: внутри он не правится,
оформления не принимает и в ссылку не входит. Стрелки перешагивают его за
одно нажатие, `Backspace` и `Delete` удаляют целиком, выделение может его
захватывать. Копирование и вставка в inline-редактор возвращают тот же
компонент; вставленные `<kbd>`, `<sf-badge>`, `<sf-icon>` и `<sf-button>` с
объявленными атрибутами тоже становятся компонентами. Запись, которую
редактор не знает, сохраняется без изменений, а во время правки на её месте
стоит заглушка. Какие компоненты и настройки разрешены — в разделе
[Встроенные компоненты](/ru/guide/layouts/content-and-data/structured-text/#встроенные-компоненты).

### Безопасность

- Ссылки допускаются только относительные, якорные и с протоколами `http`,
  `https`, `mailto` и `tel`; другие адреса редактор отклоняет.
- Вставка из Word и веб-страниц оставляет только разрешённое оформление: всё,
  чего нет в модели content или в `marks`, отбрасывается.
- События несут модель, а не HTML, поэтому в Document не попадает разметка,
  которую не проверила модель.

## Доступность

- На время правки элемент становится полем `role="textbox"` с видимой рамкой
  и доступным именем из `label`; задавайте `label` на языке страницы.
- `Ctrl+B`, `Ctrl+I` и `Ctrl+E` (`Cmd` на Mac) переключают полужирный, курсив
  и код; `Ctrl+K` открывает поле адреса ссылки.
- `Ctrl+Z` отменяет шаг правки, `Ctrl+Shift+Z` и `Ctrl+Y` возвращают его.
- У кнопок панели форматирования есть `aria-pressed` и подсказка с
  сочетанием клавиш.
- `Enter` сохраняет, `Escape` отменяет, уход фокуса сохраняет. Ввод через IME
  не прерывается.
- Подписи панели берутся на языке страницы (русском или английском).

## Справочник

Собран из манифеста компонента выпуска `ui-e22fefb3c1f8` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Что делает |
|:---|:---|:---|:---|:---|
| `template` | строка | `default` | — | Имя варианта шаблона для внешних шаблонов SfBaseElement. |
| `root-class` | строка | пусто | — | Классы, которые добавляются корневому элементу, нарисованному компонентом. |
| `root-style` | строка | пусто | — | Объявления стиля, которые ставятся корневому элементу, нарисованному компонентом, в том числе пользовательские свойства. |

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `icon-start` — `iconStart`. Свойство атрибута `template` называется `templateName`.

### Методы

| Метод | Возвращает | Что делает |
|:---|:---|:---|
| `edit(element: object, options: object)` | объект | Начинает правку элемента холста (`SF.Composition.startInlineEdit`): параметры `content`, `nodeId`, `label`, `marks`, `links`, `messages`, `toolbar` (`session` — панель на всё время правки над элементом, по умолчанию; `selection` — только пока выделен текст, над выделением) |

### События

События приходят на сам элемент и всплывают; глаголы в именах — из [общего словаря](/ru/guide/smart-components/names/). Общие события базового элемента — в главе [Модель компонента](/ru/guide/smart-components/model/#базовый-интерфейс).

| Событие | `detail` | Когда приходит |
|:---|:---|:---|
| `sf-editor-inline-input` | `{ id: string\\|null, content: array }` | Текст изменился во время правки; отправляется на редактируемом элементе |
| `sf-editor-inline-change` | `{ id: string\\|null, content: array }` | Правка принята (Enter или уход фокуса): содержимое для сохранения; отправляется на редактируемом элементе |
| `sf-editor-inline-cancel` | `{ id: string\\|null }` | Правка отменена (Escape): элемент показывает свой прежний HTML; отправляется на редактируемом элементе |
| `sf-inline-edit-input` | `{ node_id: string\\|null, content: array }` | устаревший псевдоним `sf-editor-inline-input`: подписывайтесь на `sf-editor-inline-input` |
| `sf-inline-edit-commit` | `{ node_id: string\\|null, content: array }` | устаревший псевдоним `sf-editor-inline-change`: подписывайтесь на `sf-editor-inline-change` |
| `sf-inline-edit-cancel` | `{ node_id?: string\\|null }` | устаревший псевдоним `sf-editor-inline-cancel`: подписывайтесь на `sf-editor-inline-cancel` |
| `sf-inline-editor-input` | не описан | устаревший псевдоним `sf-editor-inline-input`: подписывайтесь на `sf-editor-inline-input` |
| `sf-inline-editor-change` | не описан | устаревший псевдоним `sf-editor-inline-change`: подписывайтесь на `sf-editor-inline-change` |
| `sf-inline-editor-cancel` | не описан | устаревший псевдоним `sf-editor-inline-cancel`: подписывайтесь на `sf-editor-inline-cancel` |

### О компоненте

| | |
|:---|:---|
| Тег | `<sf-editor-inline>`, контракт `smart.editor-inline` версии `1.4.0` |
| Поставка | выпуск Framework `ui-e22fefb3c1f8` |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками; работает в сценарии студии, продуктовой приёмки нет |
| До прихода кода | сервер пишет `data-sf-skeleton="block"`; своего скелетона при загрузке данных нет ([Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода)) |
| Доступность | роль нет (`none`); доступное имя внутренний; клавиши `Mod+B`, `Mod+I`, `Mod+E`, `Mod+K`, `Mod+Z`, `Mod+Shift+Z`, `Mod+Y`, `Enter`, `Escape` |
| Источник | `simai/ui@e22fefb3c1f8bed4c7ad8d8745a408ecedc5029f:distr/smart/editor-inline` |
| Правило классов | `simai/ui@e22fefb3c1f8bed4c7ad8d8745a408ecedc5029f:distr/rule/rule.json#name=cl-editor-inline` |

## См. также

- [Оверлей редактора](/ru/smart/editor/composition-overlay/) — выбор узла, текст которого правится.
- [Правка текста на месте](/ru/guide/layouts/editor/inline-text/) — как редактор страниц запускает правку и сохраняет результат.
