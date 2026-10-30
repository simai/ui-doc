---
title: "Inline-редактор"
description: "Даёт править текст заголовков и абзацев прямо на странице и возвращает модель content, а не HTML."
---

# Inline-редактор

`<sf-inline-editor>` — часть редактора страниц: правка текста
`content.heading` и `content.paragraph` прямо на холсте. Доступно то, что есть
в модели content: полужирный, курсив, код и ссылки; списков нет, потому что
их нет в модели. События несут нормализованную модель, а не HTML.

## Пример

:::example {id="smart-components/inline-editor/overview" label="Правка условий доставки"}
:::

## Применение

### Подключение

Элемент ничего не показывает: достаточно поставить на странице
`<sf-inline-editor>`, и загрузчик Framework подключит код редактора по
требованию. Правку запускает `SF.Composition.startInlineEdit(element, options)`
или метод `edit(element, options)` элемента. До загрузки вызов завершается
ошибкой `inline_editor_not_loaded`, поэтому сначала дождитесь
`customElements.whenDefined('sf-inline-editor')`. Повторный запуск на элементе,
который уже правится, завершается ошибкой `inline_edit_active`.

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

- `sf-inline-edit-input` — `{node_id, content}` после каждого изменения;
- `sf-inline-edit-commit` — `{node_id, content}` по `Enter` или при уходе
  фокуса;
- `sf-inline-edit-cancel` — `{node_id}` по `Escape`; исходный HTML элемента
  возвращается без изменений.

Сохраняйте результат `commit` через свой контракт ревизий, проверяйте Document
и перерисовывайте страницу.

```js
await customElements.whenDefined('sf-inline-editor');
SF.Composition.startInlineEdit(element, {
  content: node.data.content,
  nodeId: node.id,
  label: 'Абзац',
});
canvas.addEventListener('sf-inline-edit-commit', (event) => {
  save(event.detail.node_id, event.detail.content);
});
```

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

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-d6292bd6fc34` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-inline-editor>` |
| Назначение | Правит `content.heading` или `content.paragraph` прямо на холсте — strong, em, code и ссылки — и отдаёт хосту нормализованную модель содержимого, а не HTML. |
| Контракт | `smart.inline-editor`, версия `1.1.3` |
| Поставка | выпуск Framework `ui-d6292bd6fc34` |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | работает в сценарии студии, продуктовой приёмки нет |
| Заготовка до прихода кода | сервер пишет `data-sf-skeleton="block"`; своего скелетона при загрузке данных нет ([Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`. Имя варианта шаблона для внешних шаблонов SfBaseElement.
- `root-class` — `string`, по умолчанию пусто.
- `root-style` — `string`, по умолчанию пусто.

### Методы

- `edit(element: object, options: object)` — возвращает `object`. Начинает правку элемента холста (`SF.Composition.startInlineEdit`): параметры content, nodeId, label, marks, links, messages

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components/names/). Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `sf-inline-editor-input` — `detail`: `{ id: string|null, content: array }`. Текст изменился во время правки; отправляется на редактируемом элементе
- `sf-inline-editor-change` — `detail`: `{ id: string|null, content: array }`. Правка принята (Enter или уход фокуса): содержимое для сохранения; отправляется на редактируемом элементе
- `sf-inline-editor-cancel` — `detail`: `{ id: string|null }`. Правка отменена (Escape): элемент показывает свой прежний HTML; отправляется на редактируемом элементе
- `sf-inline-edit-input` — устаревший псевдоним события `sf-inline-editor-input`: приходит с тем же `detail`, подписывайтесь на `sf-inline-editor-input`.
- `sf-inline-edit-commit` — устаревший псевдоним события `sf-inline-editor-change`: приходит с тем же `detail`, подписывайтесь на `sf-inline-editor-change`.
- `sf-inline-edit-cancel` — устаревший псевдоним события `sf-inline-editor-cancel`: приходит с тем же `detail`, подписывайтесь на `sf-inline-editor-cancel`.

### Доступность

- Роль: нет (`none`).
- Доступное имя: внутренний.
- Клавиши: `Mod+B`, `Mod+I`, `Mod+E`, `Mod+K`, `Mod+Z`, `Mod+Shift+Z`, `Mod+Y`, `Enter`, `Escape`.
- Фокус: Носитель sf-inline-editor скрыт и не имеет роли. Во время редактирования редактируемый элемент становится подписанным role=textbox с видимым контуром; панель форматирования имеет состояния aria-pressed и aria-keyshortcuts. Enter фиксирует, Escape отменяет, потеря фокуса фиксирует; ввод через IME никогда не прерывается.

### Минимальная разметка

```html
<sf-inline-editor></sf-inline-editor><script>await customElements.whenDefined('sf-inline-editor'); SF.Composition.startInlineEdit(paragraph, {content, nodeId: 'p1', label: 'Paragraph'});</script>
```

### Источник

- `simai/ui@d6292bd6fc34b6bab3cc2c21ee04ee321a7b5ee2:distr/smart/inline-editor`
- `simai/ui@d6292bd6fc34b6bab3cc2c21ee04ee321a7b5ee2:distr/rule/rule.json#name=cl-inline-editor`

## См. также

- [Оверлей редактора](/ru/smart-components/editor/composition-overlay/) — выбор узла, текст которого правится.
- [Правка текста на месте](/ru/guide/layouts/editor/inline-text/) — как редактор страниц запускает правку и сохраняет результат.
