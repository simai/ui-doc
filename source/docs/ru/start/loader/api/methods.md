# Методы API

В SF5 публичный frontend API разделён на две части:

- глобальные методы **`window.SF`** для создания и ожидания Smart-компонентов;
- методы **`window.SF.Loader`** для управления загрузчиком, кэшем, темой и регистрацией компонентов.

Большинство методов `SF.Loader` являются runtime-инструментами loader-а. Для прикладного кода чаще всего нужны
`SF.create()`, `SF.createAsync()`, `SF.whenDefined()`, `SF.Loader.clearCache()` и `SF.Loader.ready()`.

## Глобальные методы `SF`

| Метод                           | Назначение                                                         | Параметры            | Возвращает                |
|:--------------------------------|:-------------------------------------------------------------------|:---------------------|:--------------------------|
| `SF.create(name, params?)`      | Создать `sf-*` элемент без ожидания регистрации custom element     | `string`, `object`   | `HTMLElement`             |
| `SF.createAsync(name, params?)` | Создать `sf-*` элемент и дождаться `customElements.whenDefined()`  | `string`, `object`   | `Promise<HTMLElement>`    |
| `SF.whenDefined(names)`         | Дождаться регистрации одного или нескольких `sf-*` custom elements | `string \| string[]` | `Promise<string[]>`       |
| `SF.whenDefine(names)`          | Алиас `SF.whenDefined()`                                           | `string \| string[]` | `Promise<string[]>`       |
| `SF.loadSmartBase()`            | Принудительно загрузить базовый Smart runtime `SfBaseElement`      | —                    | `Promise<object \| null>` |
| `SF.smartBaseReady`             | Promise готовности базового Smart runtime                          | —                    | `Promise<object \| null>` |
{.table}

### `SF.create()`

```js
const button = SF.create('button', {
  text: 'Сохранить',
  scheme: 'primary',
  rootClass: 'w-full',
});

document.body.append(button);
```

`button` и `sf-button` считаются эквивалентными именами. Обычные параметры превращаются в атрибуты, camelCase
преобразуется в kebab-case:

```js
SF.create('icon-button', {
  icon: 'delete',
  ariaLabel: 'Удалить',
});
```

создаст:

```html
<sf-icon-button icon="delete" aria-label="Удалить"></sf-icon-button>
```

Специальные ключи:

| Ключ | Назначение |
|:--|:--|
| `attrs` / `attributes` | Дополнительные атрибуты |
| `dataset` | `data-*` атрибуты |
| `children` | Дочерние DOM-узлы или текст |
| `html` | HTML-содержимое |
| `textContent` | Текстовое содержимое |
{.table}

Функции в параметрах вида `onSomething` становятся обработчиками событий:

```js
const modal = SF.create('modal', {
  modalId: 'demo',
  onAfterOpen: () => console.log('opened'),
  onAfterClose: () => console.log('closed'),
});
```

### `SF.createAsync()`

Используйте, если сразу после создания нужно вызвать методы custom element:

```js
const modal = await SF.createAsync('modal', {
  modalId: 'demo-modal',
  title: 'Демо',
});

document.body.append(modal);
modal.open();
```

### `SF.whenDefined()`

```js
await SF.whenDefined(['sf-button', 'sf-modal']);
```

Метод нормализует имена: `button` будет ожидаться как `sf-button`.

## Основные методы `SF.Loader`

| Метод | Назначение | Параметры | Возвращает |
|:--|:--|:--|:--|
| `prepare(observer?)` | Запустить discovery и загрузку модулей | `MutationObserver?` | `void` |
| `clearCache()` | Очистить loader cache, Smart cache и missing files | — | `void` |
| `clearAllSfCache()` | Удалить все `localStorage` ключи, начинающиеся с `SF_` | — | `void` |
| `checkToCacheClean()` | Проверить `?loader_clear=Y` и вызвать `clearCache()` | — | `void` |
| `ensureCacheVersion()` | Проверить `cacheVersion` и при изменении очистить весь SF-кэш | — | `void` |
| `ensurePluginListVersion()` | Проверить `pluginListVersion` и при изменении очистить loader cache | — | `void` |
| `revalidateMissingPlugins()` | Перепроверить `SF_MISSING_PLUGINS` и удалить устаревшие записи | — | `void` |
| `getAssetVersion()` | Получить текущую версию ассетов | — | `string` |
| `versionAssetUrl(url)` | Добавить или обновить `sf_v` в URL ассета | `string` | `string` |
| `checkTheme(body?)` | Применить светлую/тёмную тему | `HTMLElement?` | `void \| false` |
| `changeTheme()` | Переключить тему, если тема включена | — | `void \| false` |
| `sendThemeToPlayground(iframe?, theme?)` | Отправить тему в playground iframe | `HTMLIFrameElement?`, `string?` | `void \| false` |
| `ready(name, callback)` | Вызвать callback, когда component-класс зарегистрирован | `string`, `Function` | `void` |
| `registerComponent(name, className)` | Зарегистрировать component-класс в runtime registry | `string`, `Function` | `void` |
| `loadSmartBase()` | Загрузить `SfBaseElement` runtime | — | `Promise<object \| null>` |
{.table}

## Методы discovery и загрузки

Эти методы являются частью runtime loader-а. Их можно использовать для диагностики, но в обычном прикладном коде лучше
полагаться на автоматический discovery и `MutationObserver`.

| Метод | Назначение | Параметры | Возвращает |
|:--|:--|:--|:--|
| `findShortCodes(node)` | Найти и обработать shortcodes в DOM-узле | `Node` | `void` |
| `scanCustomElements(root?, autoLoad?)` | Найти `sf-*` теги по `RuleLoader.tags` | `Node?`, `boolean?` | `{ keys, count, iconCount? }` |
| `scanAttributes(root?)` | Проверить атрибуты элементов по regex-правилам | `Node?` | `{ keys, count }` |
| `searchAttr()` | Обработать явные `[sf-asset]` | — | `void` |
| `searchRegexp(event?, html?)` | Выполнить общий regex-поиск по HTML | `any`, `string \| Node?` | `void` |
| `search()` | Подключить MutationObserver для динамических изменений | — | `void` |
| `getCustomElementRules()` | Построить карту `sf-* tag -> module name` | — | `object` |
| `setRelation(relation, name, output?)` | Добавить зависимости модуля | `Array`, `string`, `object?` | `void` |
{.table}

## Методы preloader

| Метод | Назначение |
|:--|:--|
| `runPreloader()` | Переиспользовать boot-preloader или создать runtime-preloader |
| `stopPreloader()` | Скрыть preloader и вернуть `body.style.opacity = '1'` |
| `stopAnimation()` | Остановить анимацию preloader |
| `rotatePreloader()` | Запустить SVG-анимацию preloader |
{.table}

Обычно эти методы не нужно вызывать напрямую. Настройка preloader выполняется через `SF_BOOT_CONFIG.preloader`.

## Примеры

Очистить loader cache:

```js
SF.Loader.clearCache();
```

Очистить все SF-ключи:

```js
SF.Loader.clearAllSfCache();
```

Дождаться регистрации component-класса:

```js
SF.Loader.ready('dropdown', (Dropdown) => {
  console.log('Dropdown class ready', Dropdown);
});
```

Принудительно обработать новый DOM-фрагмент:

```js
const fragment = document.querySelector('#dynamic-content');

SF.Loader.scanCustomElements(fragment);
SF.Loader.scanAttributes(fragment);
```

## Boot config

Часть поведения loader-а задаётся до подключения core через `window.SF_BOOT_CONFIG`:

```js
window.SF_BOOT_CONFIG = {
  theme: true,
  cacheVersion: '2026-04-29.1',
  pluginListVersion: 'plugins-2026-04-29.1',
  preloader: {
    enabled: true,
    delay: 300,
  },
  smart: {
    base: true,
  },
};
```

Важные поля:

- **`theme`** — включает или отключает автоматическую тему;
- **`cacheVersion`** — версия общего SF-кэша;
- **`pluginListVersion`** — версия loader cache;
- **`preloader`** — настройки boot-preloader;
- **`smart.base`** — ранняя загрузка `SfBaseElement`.

## Примечания

- `SF.create()` создаёт элемент, но не ждёт его upgrade. Для немедленного вызова методов используйте `SF.createAsync()`.
- `SF.whenDefined()` ждёт browser custom element registry, а не завершение всех loader-задач.
- `prepare()`, `search()` и scan-методы обычно запускаются самим loader-ом.
- Для событий готовности см. раздел [«События загрузчика»](/ru/start/loader/api/events/).
