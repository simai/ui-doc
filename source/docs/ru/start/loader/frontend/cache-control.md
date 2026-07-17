---
extends: _core._layouts.documentation
section: content
title: 1.8 Очистка и контроль кэша
description: 1.8 Очистка и контроль кэша
---

# 1.8 Очистка и контроль кэша

Этот раздел описывает практическое управление frontend-кэшем loader-а: ручную очистку, автоматическую инвалидацию по
версиям и обновление URL ассетов. Подробная структура кэша описана в разделе [«Кэширование и ускорение загрузки»](/ru/start/loader/frontend/caching/).

## Что можно очистить

`SFLoaderPlugin` работает с несколькими группами данных в `localStorage`:

- **`SF_PLUGIN_LIST-*`** — списки модулей, найденных для страниц;
- **`SF_SMART_LIST-*`** — данные Smart-компонентов;
- **`SF_MISSING_PLUGINS`** — информация о JS/CSS файлах, которые не удалось загрузить;
- **`SF_CACHE_VERSION`** — версия общего SF-кэша;
- **`SF_PLUGIN_LIST_VERSION`** — версия кэша списков модулей.

Есть два уровня очистки:

- **`clearCache()`** — удаляет loader cache, Smart cache и missing files;
- **`clearAllSfCache()`** — удаляет все ключи `localStorage`, которые начинаются с `SF_`.

## Ручная очистка через URL

Для сброса loader-кэша можно добавить к URL параметр:

```text
?loader_clear=Y
```

Пример:

```text
https://site.com/page?loader_clear=Y
```

При инициализации loader проверяет этот параметр. Если значение равно `Y`, вызывается:

```js
SF.Loader.clearCache();
```

В серверном режиме значение `loader_clear` также передаётся в запрос `/simai/loader/loader.php` как `clear_cache`, чтобы
серверная часть могла учесть принудительное обновление.

## Ручная очистка из JS

Очистить основной frontend-кэш loader-а:

```js
SF.Loader.clearCache();
```

Этот метод удаляет:

- `SF_PLUGIN_LIST-*`;
- `SF_SMART_LIST-*`;
- `SF_MISSING_PLUGINS`.

Полностью удалить все SF-ключи:

```js
SF.Loader.clearAllSfCache();
```

Этот метод удаляет все записи `localStorage`, у которых ключ начинается с `SF_`, включая версии кэша.

## Очистка через DevTools

Для ручной проверки в браузере:

1. Откройте DevTools.
2. Перейдите в **Application → Local Storage**.
3. Удалите нужные ключи:
   - `SF_PLUGIN_LIST-*`;
   - `SF_SMART_LIST-*`;
   - `SF_MISSING_PLUGINS`;
   - `SF_CACHE_VERSION`;
   - `SF_PLUGIN_LIST_VERSION`.

Очищать cookies обычно не требуется для loader-кэша. Текущий основной механизм frontend-кэша — `localStorage`.

## Автоматическая инвалидация через версии

Для production-обновлений лучше использовать версии, а не ручную очистку.

### `cacheVersion`

`cacheVersion` управляет общим SF-кэшем. Если текущая версия отличается от сохранённой в `SF_CACHE_VERSION`, loader
вызывает:

```js
SF.Loader.clearAllSfCache();
```

После этого сохраняется новая версия.

Если `cacheVersion` не задан, loader также очищает все `SF_*` ключи, чтобы не использовать потенциально устаревшее
состояние.

### `pluginListVersion`

`pluginListVersion` управляет кэшем списков модулей, Smart-данных и missing files. Если версия изменилась, loader
вызывает:

```js
SF.Loader.clearCache();
```

После этого сохраняется новая версия в `SF_PLUGIN_LIST_VERSION`.

## Где задаются версии

Версии могут быть переданы через boot config до подключения core:

```html
<script>
  window.SF_BOOT_CONFIG = window.SF_BOOT_CONFIG || {};
  window.SF_BOOT_CONFIG.cacheVersion = '2026-04-28.1';
  window.SF_BOOT_CONFIG.pluginListVersion = 'plugins-2026-04-28.1';
</script>
```

Также loader читает глобальные значения:

```js
window.SF_CACHE_VERSION = '2026-04-28.1';
window.SF_PLUGIN_LIST_VERSION = 'plugins-2026-04-28.1';
```

В сборке версии могут приходить из build-констант `__SF_CACHE_VERSION__` и `__SF_PLUGIN_LIST_VERSION__`.

## Обновление URL ассетов

Очистка `localStorage` не управляет HTTP-кэшем браузера напрямую. Для JS/CSS loader добавляет к URL параметр версии:

```text
/component/dropdown/js/dropdown.js?sf_v=2026-04-28.1
```

Значение берётся из:

1. `cacheVersion`;
2. если его нет — из `pluginListVersion`;
3. если нет обеих версий — параметр `sf_v` не добавляется.

Если в URL уже есть `sf_v`, loader заменяет значение на актуальное.

## Когда что использовать

Используйте **`loader_clear=Y`**:

- во время локальной разработки;
- когда нужно быстро проверить страницу без старого loader-кэша;
- при ручной диагностике missing files.

Используйте **`pluginListVersion`**:

- когда изменились правила `SF.RuleLoader`;
- когда изменились relations;
- когда изменился набор модулей, который должен находиться на страницах.

Используйте **`cacheVersion`**:

- при обновлении всей сборки SF;
- при изменениях, которые требуют сбросить все `SF_*` данные;
- когда нужно обновить query-версию JS/CSS ассетов.

Используйте **`clearAllSfCache()`** только для полной диагностики или при намеренном сбросе всех SF-состояний.

## Что очистка не делает

- Не удаляет уже вставленные в текущий DOM `<script>` и `<link>` элементы.
- Не очищает HTTP-кэш браузера напрямую.
- Не отменяет уже выполняющиеся загрузки.
- Не влияет на данные других доменов.
- Не заменяет версионирование ассетов через `sf_v`.
