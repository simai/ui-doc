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

Идентификатор: `smart.inline-editor`, жизненный цикл — экспериментальный.
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

## Теги и подключение

Custom Element: `<sf-inline-editor>`. Loader-правило: `cl-inline-editor`,
статус `registered`.

Поставляемые ассеты:

- `simai/ui-smart@121e8882d016263dfb455f5da103f618b0d4db65:smart/inline-editor/js/inline-editor.js`
- `simai/ui-smart@121e8882d016263dfb455f5da103f618b0d4db65:smart/inline-editor/css/inline-editor.css`

Правило загрузчика: `simai/ui@1f1c9d42d964321ba97c3bdfbea66048946886f7:distr/rule/rule.json`.
