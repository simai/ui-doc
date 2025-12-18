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

## 2.2 LoaderAsset.php — Менеджер асетов

## Назначение

**`LoaderAsset`** — это **прокси-класс между системой загрузки и низкоуровневым менеджером ассетов (`AssetManager`)**.  
Он управляет подключением фреймворков, загрузкой их JS/CSS, проверкой кэша Smart-компонентов и предоставляет доступ к *
*`AssetManager`**.

## Основная структура

```php
 class LoaderAsset
 {
     protected static $instance;
     public AssetManager $assetManager;
     public const ASSET_DIR = SF_MAIN . '/asset';
     public const ASSET_CONFIG_FILE = '/config/.asset.config.php';
 }
```

* Реализован как `Singleton (getInstance())`.
* Хранит экземпляр AssetManager в `$this->assetManager`.


## Метод getInstance()

Возвращает один и тот же экземпляр **`LoaderAsset`**:

```php
 LoaderAsset::getInstance()
```

Позволяет централизованно использовать менеджер ассетов по всей системе.

## Метод load($framework, $types = null, $version = 'default')

Загружает указанный фреймворк по имени:

* Обращается к файлу конфигурации /simai/config/.asset.config.php;
* Ищет в нём структуру по $framework → version → file[];
* Передаёт каждый файл в AssetManager->addJs(), addCss() или addString() в зависимости от типа (script, style, string);
* Может применять префикс /simai к путям;
* Возвращает массив подключённых путей.

### **Метод fetchComponents()**

Непубличный (protected), вызывается из load():

* Обходит структуру конфигурации ассетов;
* Проверяет расширение файлов;
* Добавляет файлы в AssetManager;
* Поддерживает стили, скрипты, строки.

## Метод getCoreHash($name, $cache_path)

* Получает хеш-файл для указанного фреймворка:
    * `core-<hash>.js`
    * `core-<hash>.css`
* Проверяет существование этих файлов в `/cache/loader/`;
* Если файлы есть — возвращает пути к ним;
* Используется, например, в **`Loader::init()`** для вставки core-бандла без необходимости пересобирать.


## Метод checkSmartCache()

Проверяет, существует ли готовый кэш Smart-компонентов:

* Путь: `/simai/cache/smart/<pageHash>/`;
* Если найдены `js.js` и/или `css.css`, они подключаются как ассеты:

```php
 $this->assetManager->addJs(...);
 $this->assetManager->addCss(...);
```

Позволяет избежать повторной генерации шаблонов и ускорить загрузку.

## Метод render(string|array $path)

Принимает строку пути или массив путей и:

* генерирует HTML `<script>` или `<link>` тег;
* выводит их напрямую в HTML-ответе.

## Используется в

* **`Loader::init()`** — для загрузки фреймворка и подключения готовых кэшей;
* **`Loader::vUseGenerate()`** и **`vUseMergeConfigGenerate()`** — для генерации финального вывода;
* Шаблоны, темы, динамическая загрузка.

## Вывод

**`LoaderAsset`** — это:

* прослойка между логикой и **`AssetManager`**;
* инструмент для подключения фреймворков, кэша, core-бандлов;
* хранилище и делегатор всех JS/CSS ресурсов;
* основная точка доступа к **`AssetManager`** в проекте.

## 2.4 TemplateLoader.php — Работа с шаблонами Smart-компонентов

## Назначение

Класс **`TemplateLoader`** отвечает за:

* загрузку и сохранение шаблонов Smart-компонентов;
* генерацию файлов `js.js` и `css.css` из шаблонов;
* формирование fake-шаблонов для вставки в DOM;
* обновление кэша шаблонов, если они изменились.

Этот класс используется при генерации ответа клиенту, в частности, в режиме **`vUseMergeConfigGenerate()`**.

## Ключевые методы

### **buildObject($hash): array**

Основной публичный метод.

* Принимает хеш страницы (`pageHash`);
* Собирает шаблоны из кэша и/или временного контента;
* Возвращает массив:

```php
[
    'status' => true,
    'hasHash' => true|false,
    'templates' => [...],
    'fakeTemplates' => [...] 
]
```

### **getTemplates($path) и getFakeTemplates($path)**

* Загружают шаблоны из файлов templates.txt и fake.txt, находящихся в папке /simai/cache/.

### **setTemplates($data, $path) и setFakeTemplates(...)**

* Сохраняют сериализованные массивы шаблонов в .txt файлы.

### **processTemplateData() / processCacheData()**

* Обновляют шаблоны, если есть отличия;
* Используют метод searchDiff() для определения изменений;
* При необходимости — сливают старые и новые шаблоны.

### **getTemplateFiles($data, $hashDir)**

* **Формирует массив путей к CSS и JS-файлам, полученным из шаблонов Smart-компонентов;**

* **Используется при генерации единого js.js и css.css.**

## **setCachedFiles($hashDir, $data)**

* Сохраняет шаблоны в папке /simai/cache/smart/<hash>/
* Минифицирует и объединяет файлы;
* Создает:
    * js.js
    * css.css

## Минификация

Используется библиотека **`MatthiasMullie\Minify`**:

```php
use MatthiasMullie\Minify\CSS;
use MatthiasMullie\Minify\JS;
```

Минификация выполняется в методе **`setFileData($data, $path, $type)`**.

## Кэширование по pageHash

* Шаблоны кэшируются в поддиректории /cache/smart/<hash>/;
* При повторной загрузке — шаблоны берутся оттуда;
* Если хеш совпадает — повторная генерация не выполняется.

## Очистка

#### **clear()**

* Удаляет templates.txt.

#### **removeDirectory($dir)**

* Удаляет директорию smart/<hash> (в т.ч. если она устарела).
 

## **Безопасность**

### **`checkData($data)`**

* Проверяет, является ли файл валидным сериализованным массивом.

## **Используется**

* `Loader::vUseMergeConfigGenerate()` → генерация шаблонов;
* Серверной логике Smart-компонентов;
* Для хранения шаблонов `fakeTemplates` → вставляются в DOM на клиенте.

## 2.7 LoaderFile.php — Поиск и фильтрация файлов

## Назначение

**`LoaderFile`** — это **вспомогательный класс**, который предоставляет метод для получения списка файлов из директории
с возможностью фильтрации.  
Он используется для поиска JS/CSS-файлов при сборке ассетов в `Loader.php` и **`AssetManager`**.

## Основной метод

**getList($dir, $arSearchFileType = false, $arIgnoreFile = false, $sortFlag = true): array**

### Аргументы

| Параметр              | Описание                                             |
|:----------------------|:-------------------------------------------------------------------------|
| **$dir**              | Абсолютный или относительный путь к директории                           |
| **$arSearchFileType** | Список нужных расширений, например: `['js', 'css']`                      |
| **$arIgnoreFile**     | Список подстрок, по которым нужно исключать файлы (например, `['.map']`) |
| **$sortFlag**         | Сортировать результат или нет (по умолчанию `true`)                      |
{.table}

## Поведение

1. Если путь не абсолютный — дополняется `$_SERVER["DOCUMENT_ROOT"]`;
2. Выполняется **`opendir($dir)`** и перебор всех файлов;
3. Пропускаются `.` и `..`;
4. Применяется фильтрация по расширениям;
5. Применяется фильтрация по подстрокам в имени файла;
6. Возвращается массив вида:

## Используется в:

* **`Loader::getMinFile()`** — для поиска `.js`;
* **`Loader::getMinFileCss()`** — для поиска `.css`;
* Других частях, где нужно получить список файлов определённого типа из папки компонента.

```text
 \"/abs/path/to/file1.js\" => \"file1.js\",
 \"/abs/path/to/file2.js\" => \"file2.js\"
```


## Пример вызова

```php
 $jsFiles = LoaderFile::getList('/simai/asset/simai.framework/component/modal/js/', ['js'], ['.map']);
```

## Особенности

* Универсальный механизм обхода и фильтрации;
* Позволяет игнорировать нежелательные файлы (например, `.map`, `.bak`, `.DS_Store`);
* Автоматически дополняет путь до корня проекта при необходимости.
