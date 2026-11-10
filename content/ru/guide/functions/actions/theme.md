---
title: "Тема"
description: "SF.Loader.setTheme, changeTheme, theme и themePreference — светлая, тёмная или как в системе из скрипта, и событие смены темы."
---

# Тема

Тему страницы — светлую, тёмную или как в системе — выбирает Loader и
запоминает выбор человека. Скрипт страницы меняет её теми же функциями, что
и готовые переключатели темы: задать выбор, переключить светлую и тёмную,
прочитать, что сейчас на странице, и узнать о каждой смене.

## Вызов

```js
SF.Loader.setTheme('dark');     // явный выбор, запоминается
SF.Loader.setTheme('system');   // снова как в системе
SF.Loader.changeTheme();        // светлая ↔ тёмная

SF.Loader.theme;                // 'light' или 'dark' — тема на странице
SF.Loader.themePreference;      // 'system', 'light' или 'dark' — выбор человека

window.addEventListener('sf-theme-change', (event) => {
  const {theme, preference} = event.detail;
});
```

| Член | Что делает |
|:---|:---|
| `setTheme(preference)` | `'light'` и `'dark'` запоминаются в cookie `sf-theme`, `'system'` стирает её, и тема снова следует настройке устройства. Возвращает `true`; `false` — если значение другое или Loader не управляет темой. |
| `changeTheme()` | Ставит тему, противоположную видимой; возвращает то же, что `setTheme`. |
| `theme` | Тема, которая сейчас на странице. |
| `themePreference` | Выбор человека; `system` — явного выбора нет. |

Событие `sf-theme-change` приходит на `window` один раз при запуске и потом
при каждой смене темы или выбора.

## Когда доступно

Loader: функции темы появляются вместе с `SF.Loader`, после события
`sf-loader-init`; значения `theme` и `themePreference` — когда Loader выбрал
тему при запуске. Дождитесь Loader через [`await SF.ready`](/ru/guide/functions/loading/ready/).

## Пример

Тему этой документации ведёт сам сайт, поэтому в примерах Loader темой не
управляет. Переключатель на классах, который работает на любой странице с
Loader:

```html
<button type="button" class="sf-theme-button" data-theme="system">Как в системе</button>
<button type="button" class="sf-theme-button" data-theme="light">Светлая</button>
<button type="button" class="sf-theme-button" data-theme="dark">Тёмная</button>
```

Живой переключатель — на странице [Темы](/ru/guide/colour/themes/) и в шапке
этой документации.

## Особые случаи

- `window.SF_BOOT_CONFIG = {theme: false}` выключает управление темой: функции
  возвращают `false`, а класс темы на `<html>` ставит сам проект.
- Без cookie (документ в изолированном фрейме) выбор держится до конца
  сессии страницы.
- При выборе `system` тема меняется вместе с настройкой устройства на лету.

## См. также

- [Темы](/ru/guide/colour/themes/) — как выбирается тема и участок другой темы.
- [Сегментный переключатель](/ru/smart/actions/segmented/) — готовый выбор темы.
