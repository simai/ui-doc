---
title: "API сборки и отрисовки"
description: "Всё доступно как `SF.Composition` в браузере и как ESM-модуль в поставке `ui`."
---

# API сборки и отрисовки

Всё доступно как `SF.Composition` в браузере и как ESM-модуль в поставке
`ui` (`distr/core/js/composition/index.mjs`): модуль экспортирует те же имена,
что есть в `SF.Composition`, а по умолчанию — сам объект. Поэтому серверный
продукт не подключает исходный репозиторий Framework. Основные операции:

| Операция | Что делает | Что возвращает |
|:---|:---|:---|
| `resolveRecipe(recipe, context)` | раскрывает Recipe | обещание: `document`, `dependencyReceipt`, `trace`, `diagnostics` |
| `validate(document, registry, options)` | проверяет Document; синхронно | `valid`, `diagnostics` |
| `normalize(document, registry, options)` | проверяет и приводит к канонической форме | обещание: `document`, `digest`, `dependencies` (ресурсы и привязки), `diagnostics` |
| `render(document, context)` | проверяет, нормализует и отрисовывает | обещание: `html`, `assets`, `hydration`, `digest`, `diagnostics` |
| `extendRegistry(manifests, renderers)` | собирает реестр из встроенных типов и переданных | реестр |
| `createRegistry(manifests, renderers)` | собирает реестр только из переданных манифестов: список — это весь реестр | реестр |
| `BUILTIN_TYPE_MANIFESTS` | — | манифесты встроенных типов |
| `checkPortValue(type, value)` | проверяет значение порта по типу ([Типы значений маршрутов](/ru/guide/layouts/reference/value-types/)) | замороженная копия значения или `TypeError` |
| `VALUE_TYPES` | — | закрытый перечень типов значений: у каждого `summary`, `schema`, `check` |
| `checkFragmentDescriptor(descriptor)` | проверяет описание фрагмента ([Фрагменты интерфейса](/ru/guide/layouts/building/interface-fragments/#проверка-описания)) | список проблем; пустой — описание верно |
| `publishEffects(effects, {origin})` | публикует последствия ответа порта на выходах хоста страницы `<sf-page-host>` ([Хост страницы](/ru/guide/layouts/building/interface-fragments/#хост-страницы)) | `{published, refused}` |
| `compositionTypeFromSmartManifest(manifest)` | строит манифест типа из манифеста Smart-компонента ([Декларативный контракт](/ru/guide/layouts/building/smart-component/#декларативный-контракт)) | манифест типа |

В браузере модуль сам определяет элементы `sf-composition-scope`,
`sf-page-host` и `sf-fragment`. Модуль экспортирует и функции, которые их
определяют, — `defineCompositionScope()`, `definePageHost()` и
`defineFragmentBoundary()` (в `SF.Composition` из них есть только первая):
они принимают реестр элементов, по умолчанию `customElements`, и не
определяют элемент повторно.

Пример ниже показывает полный путь от Recipe к HTML:

```js
const assembled = await SF.Composition.resolveRecipe(recipe, {
  trustedContext: {scope: 'example-site-17'}, // область сайта от продукта
  inputs,            // снимок simai.composition.inputs
  ports,             // {readReference, readInput} — чтение источников, реализует продукт
  registry,          // реестр типов, если есть собственные типы
  executionContract  // {contractDigest, registryDigest, rendererDigest}
});
if (!assembled.document) return showDiagnostics(assembled.diagnostics);
const result = await SF.Composition.render(assembled.document, {registry});
```

Что важно понимать:

- `ports` — **порты чтения источников**: продукт реализует их, проверяя
  доступ. Это не порты хоста Smart-компонентов и не порты маршрутизации
  (те передаются отдельно, как `compositionPorts`).
- Без `registry` проверка знает только встроенные типы. Документ с
  собственным типом или Smart-узлом проверяют и отрисовывают с реестром из
  `extendRegistry([...])`: он содержит встроенные типы и добавленные.
  Реестр из `createRegistry(список)` содержит только этот список: если в нём
  нет встроенных типов, `layout.page` и остальные становятся неизвестными
  (`type_unknown`). Встроенные манифесты лежат в
  `SF.Composition.BUILTIN_TYPE_MANIFESTS`; `extendRegistry(список)` —
  то же, что `createRegistry([...BUILTIN_TYPE_MANIFESTS, ...список])`.
- `render()` сам вызывает проверку и нормализацию; если документ неверен,
  `html` пуст, а причина — в `diagnostics`. Отдельно вызывать `validate()` и
  `normalize()` перед ним не нужно.
- `render()` считает `digest` через `crypto.subtle`. В браузере он есть
  только в защищённом контексте — на странице по `https` или с `localhost`;
  на странице по обычному `http` с другим адресом `render()` выбрасывает
  ошибку `composition_crypto_unavailable`. Если для узла нет рендерера, узел
  пропускается с кодом `renderer_unavailable`; результат с любой диагностикой
  не публикуют.
- `assets` в результате `render()` перечисляет ресурсы, от которых зависит
  HTML: `smart/<имя>` для Smart-узлов и `composition/layout` для колонок.
  Если на странице работает Loader, ничего подключать вручную не нужно: он
  сам загружает Smart-компоненты по тегам. Без Loader `smart/<имя>`
  соответствует папке `distr/smart/<имя>/` поставки. Файла
  `composition/layout` в поставке нет: колонки оформляет CSS страницы
  (см. [Что выводят встроенные рендереры](/ru/guide/layouts/introduction/levels/#встроенные-типы)).
- `ports` в `resolveRecipe()` реализует продукт: он читает входы и точные
  версии шаблонов после проверки доступа. Рендерер данные повторно не
  получает.

## Контекст `render()`

Второй аргумент `render(document, context)` — объект с ключами:

| Ключ | Что передаёт |
|:---|:---|
| `registry` | реестр типов из `extendRegistry()` или `createRegistry()`; без него известны только встроенные типы |
| `options` | настройки проверки и нормализации: `limits` — свои пределы вместо стандартных, `supportedExtensions` — обязательные расширения, которые обработчик понимает, `ports` — манифесты портов маршрутизации для `layout.scope` |
| `resolveBinding` | необязательная функция `(binding, {document, node})`: её результат рендерер получает в `resolvedBindings` по полю `target` привязки |

Язык страницы для Smart-узлов в контексте не нужен: его определяет сам
компонент на странице. Те же `registry` и `options` принимают
`validate(document, registry, options)` и `normalize(document, registry, options)`.

## Можно ли вставлять `result.html`

Встроенные рендереры и рендерер Smart-узлов экранируют текст и значения
атрибутов, а проверка до отрисовки отклоняет опасные адреса ссылок
(`unsafe_url`) и поля вроде `html` и `script`. Поэтому `result.html` из
встроенных типов и Smart-узлов можно вставлять в страницу как разметку,
например через `innerHTML`. Скриптов в нём нет; Smart-элементы оживляет
Loader.

HTML собственного типа строит рендерер проекта: экранировать данные узла —
его обязанность ([Собственный тип](/ru/guide/layouts/reference/custom-type/)). Политика безопасности содержимого
(CSP) страницы остаётся задачей проекта.
