---
title: "Правка текста на месте"
description: "Inline-редактор меняет текст заголовков и абзацев и возвращает модель content вместо HTML."
---

# Правка текста на месте

Заголовки и абзацы хранят текст не строкой HTML, а моделью content: отрезки текста с отметками жирного, курсива и кода и ссылки. Inline-редактор работает с этой же моделью. Человек правит текст прямо на странице, а приложение получает в событии `sf-inline-edit-commit` готовый массив content, который можно сразу записать в свойство узла.

## Когда применять

Используйте правку на месте для коротких текстов, которые удобнее исправить, глядя на страницу: заголовок секции, подпись, абзац условий. Для длинных материалов со списками и таблицами нужен отдельный редактор содержимого — в модели content заголовков и абзацев списков нет.

## Пример

```js
await customElements.whenDefined('sf-inline-editor');
canvas.addEventListener('dblclick', (event) => {
  const element = event.target.closest('[data-sf-composition-id]');
  const node = findNode(element.dataset.sfCompositionId);
  SF.Composition.startInlineEdit(element, {content: node.data.content, nodeId: node.id, label: 'Абзац'});
});
canvas.addEventListener('sf-inline-edit-commit', (event) => {
  saveProperty(event.detail.node_id, 'content', event.detail.content);
});
```

На странице редактора должен стоять `<sf-inline-editor>`: по этому тегу загрузчик подключает код правки. Enter сохраняет, Escape отменяет, уход фокуса тоже сохраняет. Ссылки принимаются только с безопасными адресами, а вставка из Word оставляет лишь разрешённое оформление.

Далее: [боковые панели редактора](/ru/guide/layouts/editor/panels/).
