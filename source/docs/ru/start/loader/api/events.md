# События загрузчика

`SFLoaderPlugin`, Smart runtime и отдельные подсистемы SF5 отправляют DOM-события через `CustomEvent`. У событий разные
targets: часть отправляется в `window`, часть в `document`, а события Smart-компонентов отправляются самим `<sf-*>`
элементом и всплывают вверх по DOM.

## События loader-а

| Событие | Target | Когда отправляется | detail |
|:--|:--|:--|:--|
| `sf-loader-init` | `window` | После создания `SF.Loader` | `{ loader, timestamp }` |
| `sf-loader-ready` | `window` | После обработки текущей очереди загрузки | `{ message, timestamp }` |
| `sf-shortcodes-ready` | `document` | После первичной обработки shortcodes | `{ loader, timestamp }` |
| `sf-smart-base-ready` | `window` | Когда загружен базовый Smart runtime `SfBaseElement` | `{ smart, loader, timestamp }` |
| `sf-icons-subset:ready` | `window` | Когда подготовлен subset иконок | `{ icons, weights, loader, fromCache? }` |

`sf-loader-ready` может отправляться не только при самой первой загрузке. Например, событие возможно при preloaded-state,
deferred-модулях или динамической подгрузке после изменения DOM. Обработчики должны быть идемпотентными.

## События регистрации компонентов

Когда класс компонента регистрируется в `SF.Loader.ComponentRegistry`, loader отправляет два события:

| Событие | Target | Когда отправляется | detail |
|:--|:--|:--|:--|
| `<name>:ready` | `window` | Зарегистрирован конкретный компонент | класс компонента |
| `component:ready` | `document` | Зарегистрирован любой компонент | `{ name }` |

Пример:

```js
window.addEventListener('dropdown:ready', (event) => {
  const DropdownClass = event.detail;
});

document.addEventListener('component:ready', (event) => {
  console.log('component ready:', event.detail.name);
});
```

## События Smart-компонентов

Компоненты на базе `SfBaseElement` отправляют события от host-элемента. События всплывают (`bubbles: true`) и проходят
через границы DOM (`composed: true`).

| Событие | Target | Когда отправляется | detail |
|:--|:--|:--|:--|
| `sf-connected` | `<sf-*>` | Компонент подключён к DOM | `{ component, tagName, template }` |
| `sf-disconnected` | `<sf-*>` | Компонент удалён из DOM | `{ component, tagName, template }` |
| `sf-before-render` | `<sf-*>` | Перед Lit-рендерингом | `{ component, tagName, template, changedAttributes }` |
| `sf-after-render` | `<sf-*>` | После Lit-рендеринга | `{ component, tagName, template, changedAttributes }` |
| `sf-updated` | `<sf-*>` | После обновления компонента | `{ component, tagName, template, changedAttributes, updateMode }` |
| `sf-props-change` | `<sf-*>` | После изменения props/атрибутов | `{ component, tagName, template, ... }` |

Пример делегированной подписки:

```js
document.addEventListener('sf-after-render', (event) => {
  console.log(event.detail.tagName, event.detail.changedAttributes);
});
```

## Подписка на loader events

```js
window.addEventListener('sf-loader-init', (event) => {
  console.log('[loader:init]', event.detail.loader);
});

window.addEventListener('sf-loader-ready', (event) => {
  console.log('[loader:ready]', event.detail);
});

document.addEventListener('sf-shortcodes-ready', (event) => {
  console.log('[loader:shortcodes]', event.detail.loader);
});

window.addEventListener('sf-smart-base-ready', (event) => {
  console.log('[smart:base]', event.detail.smart);
});
```

## Ожидание custom elements

Для Smart-компонентов часто удобнее ждать регистрацию custom element через browser API:

```js
await customElements.whenDefined('sf-button');
```

Или через SF-обёртку:

```js
await SF.whenDefined(['sf-button', 'sf-modal']);
```

Это не DOM-событие, но для кода, которому нужно дождаться готовности `<sf-*>`, такой вариант обычно точнее, чем
подписка на общий `sf-loader-ready`.

## Примечания

- Проверяйте target события: `sf-loader-init` и `sf-loader-ready` слушаются на `window`, а `sf-shortcodes-ready` на
  `document`.
- Для одноразовой инициализации используйте `{ once: true }`.
- Обработчики `sf-loader-ready` должны выдерживать повторный вызов.
- Smart-события всплывают, поэтому их можно слушать на конкретном `<sf-*>` элементе или делегировать на `document`.
