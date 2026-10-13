---
title: "Перенос и вставка блоков"
description: "Перенос узлов на холсте и вставка блоков из библиотеки мышью, касанием и с клавиатуры."
---

# Перенос и вставка блоков

**Перенос.** Узел переносят за подпись выбранной рамки или с клавиатуры из
дерева: Пробел берёт, стрелки выбирают место, Enter кладёт, Escape отменяет.
Оверлей сообщает о переносе событием `sf-composition-overlay-move` с новым
родителем, слотом и позицией.

**Библиотека блоков** — это `<sf-sortable mode="copy">`: карточка остаётся в
библиотеке, а на холст приходит событие вставки с карточкой библиотеки в поле `item`.
Что вставить по этой карточке — узел или блок проекта (шаблон Recipe), —
решает приложение.
Оверлей с атрибутом `accepts="blocks"` принимает такие карточки на свои точки
вставки.

Пример ниже показывает, как приложение принимает перенос и вставку:

```js
overlay.addEventListener('sf-composition-overlay-move', (event) => {
  const {node_id, parent_id, slot, index} = event.detail;
  applyAndSave({type: 'move', node_id, parent_id, slot, index});
});
overlay.addEventListener('sf-composition-overlay-insert', (event) => {
  const {parent_id, slot, index, item} = event.detail; // item — карточка из библиотеки
  applyAndSave({type: 'insert', parent_id, slot, index, block: item});
});
overlay.setDropFilter((place) => place.slot !== 'header');
```

Обратите внимание: `applyAndSave` принадлежит приложению. `setDropFilter`
скрывает места, которые приложение всё равно отклонит (например, шапку
общего шаблона). Окончательное решение остаётся за проверкой Document и
сохранением с ожидаемой ревизией.
