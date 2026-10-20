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

Раздел собран из манифеста компонента выпуска `ui-132b0863e12b` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-inline-editor>` |
| Назначение | Редактор текста content.heading и content.paragraph на месте: strong, em, code и безопасные ссылки, собственная история, безопасная вставка; возвращает нормализованное содержимое, а не HTML. |
| Контракт | `smart.inline-editor`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-132b0863e12b` |
| [Жизненный цикл](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию) | работает в сценарии студии, продуктовой приёмки нет |
| Заготовка до прихода кода | сервер пишет `data-sf-skeleton="block"`; своего скелетона при загрузке данных нет ([Заготовка до прихода кода](/ru/guide/smart-components/states-and-loading/#заготовка-до-прихода-кода)) |

### Атрибуты

Атрибутов нет.

### Методы

- `edit(element: Element, options: object)` — возвращает `object`. Начинает редактирование отображённого заголовка или абзаца; возвращает {element, commit, cancel, value}.

### События

Все события приходят на сам элемент и всплывают. Общие события базового элемента перечислены в главе [Жизненный цикл → Этапы](/ru/guide/smart-components/lifecycle/#этапы).

- `sf-inline-edit-input` — `detail`: `{ node_id: string|null, content: array }`. Актуальное нормализованное содержимое после изменения. Отправляется на редактируемом элементе; всплывает до `document`.
- `sf-inline-edit-commit` — `detail`: `{ node_id: string|null, content: array }`. Редактирование завершено нажатием Enter или уходом фокуса; сохраняет хост. Отправляется на редактируемом элементе; всплывает до `document`.
- `sf-inline-edit-cancel` — `detail`: `{ node_id?: string|null }`. Редактирование отменено нажатием Escape; исходный HTML восстановлен. Отправляется на редактируемом элементе; всплывает до `document`.

### Доступность

- Доступное имя: внутренний.
- Клавиши: `Mod+B`, `Mod+I`, `Mod+E`, `Mod+K`, `Mod+Z`, `Mod+Shift+Z`, `Mod+Y`, `Enter`, `Escape`.
- Фокус: Носитель sf-inline-editor скрыт и не имеет роли. Во время редактирования редактируемый элемент становится подписанным role=textbox с видимым контуром; панель форматирования имеет состояния aria-pressed и aria-keyshortcuts. Enter фиксирует, Escape отменяет, потеря фокуса фиксирует; ввод через IME никогда не прерывается.

### Минимальная разметка

```html
<sf-inline-editor></sf-inline-editor><script>await customElements.whenDefined('sf-inline-editor'); SF.Composition.startInlineEdit(paragraph, {content, nodeId: 'p1', label: 'Paragraph'});</script>
```

### Источник

- `simai/ui@132b0863e12b9d5d9c9180d32b20c71f0584e7eb:distr/smart/inline-editor`
- `simai/ui@132b0863e12b9d5d9c9180d32b20c71f0584e7eb:distr/rule/rule.json#name=cl-inline-editor`

## См. также

- [Оверлей редактора](/ru/smart-components/editor/composition-overlay/) — выбор узла, текст которого правится.
- [Правка текста на месте](/ru/guide/layouts/editor/inline-text/) — как редактор страниц запускает правку и сохраняет результат.
