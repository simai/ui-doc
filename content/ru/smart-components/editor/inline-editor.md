---
title: "Inline-редактор"
description: "Правка текста заголовков и абзацев прямо на странице с сохранением модели content, а не HTML."
profile: reference
---

# Inline-редактор

Inline-редактор меняет текст `content.heading` и `content.paragraph` прямо на
холсте. Поддерживаются жирный, курсив, код и ссылки — всё, что есть в модели
content. Списков нет, потому что их нет в модели. События несут нормализованную
модель, а не HTML.

Код загружается по требованию: достаточно поставить на странице
`<sf-inline-editor>`. Элемент ничего не показывает.

## Пример

:::example {id="smart-components/inline-editor/overview" label="Правка условий доставки"}
:::

## Особенности применения

После загрузки `SF.Composition.startInlineEdit` или метод `edit` элемента
`<sf-inline-editor>` запускает правку выбранного
элемента. До загрузки вызов завершается ошибкой `inline_editor_not_loaded`,
поэтому дождитесь `customElements.whenDefined('sf-inline-editor')`.

```js
await customElements.whenDefined('sf-inline-editor');
SF.Composition.startInlineEdit(element, {content: node.data.content, nodeId: node.id, label: 'Абзац'});
canvas.addEventListener('sf-inline-edit-commit', (event) => save(event.detail.node_id, event.detail.content));
```

Сохраняйте результат через свой контракт ревизий, проверяйте Document и
перерисовывайте страницу. Отмена возвращает исходный HTML элемента без
изменений.

## Параметры и события

| Параметр | Назначение |
|---|---|
| `content` | текущая модель content |
| `nodeId` | id узла для событий |
| `label` | доступное имя поля |
| `marks` | подмножество `strong`, `em`, `code` |
| `links` | `false` отключает ссылки |
| `messages` | свои тексты панели |

| Событие | Данные |
|---|---|
| `sf-inline-edit-input` | `{node_id, content}` после каждого изменения |
| `sf-inline-edit-commit` | `{node_id, content}` по Enter или уходу фокуса |
| `sf-inline-edit-cancel` | `{node_id}` по Escape |

События отправляются на редактируемый элемент и всплывают до `document`.

## Доступность и безопасность

Ctrl/Cmd+B, I и E переключают жирный, курсив и код; Ctrl/Cmd+K открывает поле
ссылки; Ctrl/Cmd+Z, Ctrl/Cmd+Shift+Z и Ctrl/Cmd+Y работают с историей правки.
Во время правки элемент — подписанное поле `role="textbox"` с видимой рамкой,
у кнопок панели есть `aria-pressed`. Ссылки допускаются только http, https,
mailto, tel, относительные и якорные. Вставка из Word и веб-страниц оставляет
только разрешённое оформление, ввод через IME не прерывается.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-6d2bf151e3c8` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-inline-editor>` |
| Назначение | Редактор текста content.heading и content.paragraph на месте: strong, em, code и безопасные ссылки, собственная история, безопасная вставка; возвращает нормализованное содержимое, а не HTML. |
| Контракт | `smart.inline-editor`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-6d2bf151e3c8` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | работает в сценарии студии, продуктовой приёмки нет |

### Атрибуты

Атрибутов нет.

### Методы

- `edit(element: Element, options: object)` — возвращает `object`. Начинает редактирование отображённого заголовка или абзаца; возвращает {element, commit, cancel, value}.

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

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

- `simai/ui@6d2bf151e3c8ba14d210e97227a8d0dd1b493170:distr/smart/inline-editor`
- `simai/ui@6d2bf151e3c8ba14d210e97227a8d0dd1b493170:distr/rule/rule.json#name=cl-inline-editor`
