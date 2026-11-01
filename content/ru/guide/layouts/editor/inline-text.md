---
title: "Правка текста на месте"
description: "Заголовки и абзацы правятся прямо на странице."
---

# Правка текста на месте

Заголовки и абзацы правятся прямо на странице. Inline-редактор работает с той
же моделью структурированного текста ([Структурированный текст без HTML](/ru/guide/layouts/content-and-data/structured-text/)) и **возвращает не HTML, а готовый
массив `content`**, который можно сразу записать в узел.

```js
await customElements.whenDefined('sf-inline-editor');
canvas.addEventListener('dblclick', (event) => {
  const element = event.target.closest('[data-sf-composition-id]');
  const node = findNode(element.dataset.sfCompositionId); // модель приложения
  SF.Composition.startInlineEdit(element, {content: node.data.content, nodeId: node.id, label: 'Абзац'});
});
document.addEventListener('sf-inline-editor-change', (event) => {
  saveProperty(event.detail.id, 'content', event.detail.content);
});
```

Правила подключения:

- на странице редактора обязательно должен стоять `<sf-inline-editor>`: по
  этому тегу Loader подключает код правки;
- до загрузки `startInlineEdit` выбрасывает ошибку `inline_editor_not_loaded`.

Что умеет редактор:

- Ctrl/Cmd+B, I, E — жирный, курсив, код; Ctrl/Cmd+K — ссылка с проверкой
  адреса;
- встроенные компоненты (`badge`, `kbd`, `icon`, `button`) — одна позиция
  курсора: стрелки перешагивают их, Backspace и Delete удаляют целиком,
  копирование и вставка сохраняют (см. [Встроенные компоненты](/ru/guide/layouts/content-and-data/structured-text/#встроенные-компоненты));
- запись, которую редактор не знает, возвращается без изменений;
- собственная история отмены;
- Enter и уход фокуса сохраняют, Escape отменяет и возвращает исходную
  разметку;
- вставка из Word и веб-страниц оставляет только разрешённое оформление и
  безопасные ссылки.

После сохранения и отмены холст всегда возвращается к HTML, который отрисовало
приложение.
