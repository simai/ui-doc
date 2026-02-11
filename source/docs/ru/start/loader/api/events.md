# События загрузчика

`SFLoaderPlugin` отправляет DOM-события, на которые можно подписаться в приложении.

## Список событий

| Событие | Когда отправляется | detail |
|:--|:--|:--|
| `sf-loader-init` | Сразу после создания `window.SF.Loader` | `{ loader, timestamp }` |
| `sf-loader-ready` | Когда загрузчик завершил первичную подготовку/подключение | `{ message, timestamp }` |
| `sf-shortcodes-ready` | После обработки шорткодов (`findShortCodes`) | `{ loader, timestamp }` |

## Подписка

```js
document.addEventListener('sf-loader-init', (e) => {
  console.log('[loader:init]', e.detail);
});

document.addEventListener('sf-loader-ready', (e) => {
  console.log('[loader:ready]', e.detail);
});

document.addEventListener('sf-shortcodes-ready', (e) => {
  console.log('[loader:shortcodes]', e.detail);
});
```

## Примечания

- События отправляются через `CustomEvent`.
- Для `sf-loader-ready` возможны разные точки отправки (обычная загрузка/предзагрузка), поэтому обработчик лучше делать идемпотентным.
