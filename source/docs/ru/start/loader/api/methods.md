# Методы API

Ниже перечислены ключевые методы `window.SF.Loader`, которые реально используются в текущей реализации загрузчика.

## Основные методы

| Метод | Назначение | Параметры | Возвращает |
|:--|:--|:--|:--|
| `prepare(observer?)` | Основной запуск поиска/подключения плагинов | `MutationObserver` (опц.) | `void` |
| `clearCache()` | Очистка кэша загрузчика в `localStorage` | — | `void` |
| `checkTheme(body?)` | Применение светлой/тёмной темы | `HTMLElement` (опц.) | `void \| false` |
| `changeTheme()` | Переключение темы (если тема не отключена) | — | `void \| false` |
| `sendThemeToPlayground(iframe?, theme?)` | Отправка темы во встроенный playground через `postMessage` | `HTMLIFrameElement`, `'light' \| 'dark'` | `false \| void` |
| `findShortCodes(node)` | Поиск и рендер шорткодов в DOM | `Node` | `void` |
| `checkToCacheClean()` | Проверка `?loader_clear=Y` и очистка кэша | — | `void` |

## Примеры

```js
// Полная очистка кэша загрузчика
SF.Loader.clearCache();

// Принудительно переоценить тему для документа
SF.Loader.checkTheme(document.documentElement);

// Переключить тему (работает, если не отключено через theme: false)
SF.Loader.changeTheme();
```

## Важные параметры инициализации

```js
window.SF = window.SF || {};
window.SF_BOOT_CONFIG = {
  // false => загрузчик не будет автоматически выставлять theme-light/theme-dark
  theme: false,
  preloader: {
    preloaderActive: true,
    wrap: null
  }
};
```

- `theme: false` отключает автоматическую тему внутри загрузчика.
- Прелоадер конфигурируется через `SF_BOOT_CONFIG.preloader` и/или `params.preloader`.
