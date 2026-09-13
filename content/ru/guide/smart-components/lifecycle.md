---
title: "Загрузка и готовность"
description: "Что происходит после появления Smart-компонента на странице и как понять, что он готов."
---

# Загрузка и готовность

После появления Smart-компонента на странице Loader подключает его зависимости, а сам элемент создаёт внутреннее содержимое. Компонент сообщает событиями, когда он подключён, показан или обновлён.

## Когда применять

Дождитесь регистрации тега и первого отображения, если проект должен обращаться к компоненту сразу после добавления на страницу. Проверяйте собственные события на странице конкретного компонента: общий набор описывает только основные этапы.

## Ожидание готовности

```js
const button = document.querySelector('sf-button');

await customElements.whenDefined('sf-button');
await button.whenRendered();
console.log('Кнопка готова');
```

Общие события включают `sf-connected`, `sf-disconnected`, `sf-before-render`, `sf-after-render`, `sf-updated` и `sf-props-change`.

`whenRendered()` работает и после первого отображения: вы не пропустите событие, которое уже произошло. Для последующих изменений можно слушать `sf-after-render`. В составном компоненте проверяйте `event.target`: события вложенных элементов тоже поднимаются к родителю.

## Пример готового элемента

:::internal_preview {size="tall" title="Работающий пример"}
[Открыть демонстрацию](/demos/guide/smart-counter/)
:::

:::code {src="../../../../examples/guide/smart-counter/index.html" lang="html" title="index.html"}
:::

:::code {src="../../../../examples/guide/smart-counter/index.js" lang="javascript" title="index.js"}
:::

