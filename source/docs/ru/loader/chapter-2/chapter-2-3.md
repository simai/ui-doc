---
extends: _core._layouts.documentation
section: content
title: 2.3 AssetManager.php — Генерация и сборка асетов
description: 2.3 AssetManager.php — Генерация и сборка асетов
---

# 2.3 AssetManager.php — Генерация и сборка асетов

## Назначение

**`AssetManager`** — это **ядро логики генерации, подключения и кэширования JS и CSS файлов** в SFLoader.  
Он собирает ассеты из фреймворков и компонентов, объединяет их в бандлы, создаёт `.gz` версии, и подключает их к
страницам.

## Основная структура

| class AssetManager{    public array $components \= \[\];    public array $frameworksFiles \= \[\];    public array $frameworkHash \= \[\];    public array $frameworks \= \[\];    public array $gzipSupport \= \[\];    public array $contentPerPages \= \[\];    public bool $isTemp \= false;    ...} |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

`$components` — обычные плагины;

`$frameworksFiles` — ассеты фреймворков;

`$contentPerPages` — кастомные бандлы на основе страницы;

`$isTemp` — флаг временного режима (используется в **`vUseMergeConfigGenerate()`**).

## Методы добавления ассетов

### `addJs($path, $isFramework = false)`

### `addCss($path, $isFramework = false)`

### `addString($string, $isFramework = false)`

* Добавляют JS, CSS или строку (`<script>...</script>`, `<style>...</style>`);
* В зависимости от флага `$isFramework` — кладут в `$frameworksFiles` или `$components`.

## Метод renderAll($name = '', $onlyPaths = false)

* Главный метод генерации финального вывода;
* При `$name` — рендерит только указанный фреймворк;
* Иначе вызывает `renderAllBundles()` — сборку всех плагинов и компонент.

## Метод renderAllBundles($onlyPaths = false)

* Объединяет все JS и CSS из `$components`;
* Вызывает **`bundle()`** для создания файлов;
* Возвращает:
    * массив путей (если `$onlyPaths = true`);
    * или HTML-теги `<script>`, `<link>`.

## Метод bundle($onlyPaths = false)

* Генерирует хеш по контенту (`md5()`);
* Проверяет, существуют ли уже такие файлы:
    * `bundle-<hash>.js`
    * `bundle-<hash>.css`
* Если нет — создаёт файлы, записывает контент;
* Создаёт GZIP-версии (`.gz`) при необходимости;
* Возвращает путь или HTML.

## Метод getGzip($filePath, $content)

* Создаёт `.gz` версию указанных файлов.

## Метод getIdenticalHashFiles($prefix, $extension)

* Проверяет, есть ли уже сгенерированные файлы с тем же хешем;
* Помогает избежать лишнего создания новых файлов.

## Метод unlinkFiles($files, $keep)

* Удаляет файлы, оставляя только `$keep`\-файлы;
* Используется при обновлении или сборке ассетов.

## Метод findPageBundles()

* Проверяет кэш по текущему `pageHash`;
* Если уже есть `.js`/`.css` бандлы — подключает их;
* Также вставляет:

```html
<script>
    window.BUNDLE_LOADED = true;
    window.BUNDLE_ID = '<hash>';
</script>
```


## Назначение переменных `window.BUNDLE_LOADED` и `window.BUNDLE_ID`

### **window.BUNDLE\_LOADED**

В методе **`init()`** плагина:

```js
 this.firstLoad = !window.BUNDLE_LOADED;
 if (this.firstLoad) {
     document.body.style.opacity = '0';
 }
```

Если `BUNDLE_LOADED === true`, значит:

* Бандл уже подключён сервером (`AssetManager::findPageBundles()`);
* Нет необходимости подгружать все ассеты через Ajax;
* Загрузчик просто берёт плагины из localStorage и отрисовывает.
* На бекенде генерируется только temp часть (если необходимо)

Если `BUNDLE_LOADED !== true`, то:

* Показывается прелоадер;
* Выполняется полный запрос к серверу (`loader.php?a=...`) для сборки.

### window.BUNDLE\_ID

Содержит уникальный хеш страницы (`pageHash`), сформированный на сервере.

Используется в `SFLoaderPlugin` для того, чтобы:

* Сопоставить текущую страницу с кэшом в **localStorage**;
* Подгрузить плагины, если хеш отличается;
* Позволить странице сравнить: соответствует ли кэш — текущей структуре страницы.

#### Пример

| let plugins \= localStorage.getItem(
\`SF\_PLUGIN\_LIST-${this.urlHash}\`) if (\!plugins || window.BUNDLE\_ID \!== this.urlHash) { plugins \= localStorage.getItem(\`SF\_PLUGIN\_LIST-$
{window.BUNDLE\_ID}\`) } |
| :---- |

#### Вывод

## Эти переменные позволяют:

*  **избежать повторной загрузки JS/CSS;**

* **не запускать прелоадер без необходимости;**

* **повысить производительность и стабильность загрузки;**

* **точно определить, какие плагины уже были подключены.**

## Поддержка GZIP

* Хранит информацию в `$gzipSupport[$path]`;
* Используется при генерации, если включено сжатие и сервер это поддерживает.

## Используется в

* **`LoaderAsset::renderAll()`** и **`render()`** — для вывода в HTML;
* **`Loader::vUseGenerate()`** и **`vUseMergeConfigGenerate()`** — как основа генерации;
* **`checkSmartCache()`** — подключение smart-кеша (`smart/<pageHash>/js.js`);

## Вывод

**`AssetManager`** — это:

* генератор финальных ассетов;
* оптимизатор и кэшер (через хеши и gzip);
* работает и в обычном (`/cache`) и временном (`/temp`) режимах;
* поддерживает разделение по компонентам и фреймворкам.
