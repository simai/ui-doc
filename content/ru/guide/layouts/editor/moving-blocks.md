---
title: "Перенос блоков и секций"
description: "Перестановка узлов на холсте и перенос блоков из библиотеки мышью, касанием и клавиатурой."
---

# Перенос блоков и секций

Узлы на холсте переставляются за подпись выбранной рамки или с клавиатуры из дерева структуры: Пробел берёт узел, стрелки выбирают место, Enter кладёт, Escape отменяет. Оверлей сообщает о переносе событием `sf-composition-overlay-move` с новым родителем, областью и позицией. Библиотека блоков — это `sf-sortable` с `mode="copy"`: карточка остаётся в библиотеке, а на холст приходит событие вставки с типом блока в поле `item`.

## Когда применять

Перенос нужен, когда порядок секций и блоков меняет автор страницы. Разрешённые места задаёт приложение: `setDropFilter` скрывает области, которые оно всё равно отклонит, например шапку общего шаблона. Окончательное решение остаётся за проверкой Document и за сохранением с ожидаемой ревизией.

## Пример

```js
overlay.addEventListener('sf-composition-overlay-move', (event) => {
  const {node_id, parent_id, slot, index} = event.detail;
  applyAndSave({type: 'move', node_id, parent_id, slot, index});
});
overlay.addEventListener('sf-composition-overlay-insert', (event) => {
  const {parent_id, slot, index, item} = event.detail; // item — тип блока из библиотеки
  applyAndSave({type: 'insert', parent_id, slot, index, block: item});
});
overlay.setDropFilter((place) => place.slot !== 'header');
```

Функция `applyAndSave` принадлежит приложению: она меняет копию Document, вызывает проверку и отправляет изменение на сервер. Если сервер отказал, страница не меняется, а человек видит понятное сообщение.

Далее: [правка текста на месте](/ru/guide/layouts/editor/inline-text/).
