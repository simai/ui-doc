---
noindex: true
---

# История изменений

## Декабрь 2022

### yfm-docs

#### 2.0.0

- [Новый интерфейс инклюдеров](./project/toc.md#includers).
- [Generic инклюдер](./project/toc.md#includers-generic).
- [Open API инклюдер](./project/toc.md#includers-open-api).
- [Unarchive инклюдер](./project/toc.md#includers-unarchive).
- [Source Docs инклюдер](./project/toc.md#includers-source-docs).


## Ноябрь 2022

### yfm-docs

#### 1.31.0

- Добавлена поддержка [определений](./syntax/term.md).

### yfm-transform

#### 2.16.0

- Добавлена поддержка инлайновой разметки в [списках задач](./syntax/additional.md#tasks-list).

#### 2.15.0

- Добавлена опция `linkifyTlds`, которая позволяет настроить tld для плагина linkify.

## Сентябрь 2022

### yfm-docs

#### 1.26.0

- services/leading: добавлена поддержка [подстановок и условных операторов](./project/leading-page.md#subtitudes) в названии и описании разводящей страницы.
- services/tocs: добавлена поддержка [подстановок и условных операторов](./project/toc.md#subtitudes) в названии документа.

#### 1.24.0

- includers/openapi: добавлена возможность [автогенерации документации из Open API спецификации](./project/toc.md#open-api) и её включение в основную.

### yfm-transform

#### 2.14.0

- Добавлен санитайзинг сгенерированного HTML. Значение по-умолчанию - выключено. Параметр для включения - `needToSanitizeHtml: true`. Можно переопределить настройки по-умолчанию через параметр `sanitizeOptions`.

#### 2.13.0

- Добавлен синтаксис для [определений](./syntax/term.md).

#### 2.12.0

- Возможность [задать размер изображения](./syntax/media.md) включена по умолчанию.

## Август 2022

### yfm-transform

#### 2.11.0

- Поддержка инлайнового форматирования в заголовках катов и заметок.

#### 2.10.0

- Добавлен параметр `needFlatListHeadings?: boolean;`, который позволяет формировать плоский список всех заголовков документа в `transform().result.headings`. Значение по-умолчанию – `false`.

## Июль 2022

### yfm-docs

#### 1.23.0

- include/includers: возможность интеграции сторонних форматов в документацию.
- include/includers/sourcedocs: возможность интеграции sourcedocs документации в yfm-документацию.
  [Includers](./project/toc.md#includers)

## Июнь 2022

### yfm-transform

#### 2.9.0

- Добавлен плагин для [ссылок на файлы](./syntax/links.md#files).

#### 2.8.0

- Пробелы внутри инлайн условий не удаляются.

#### 2.7.0

- Удалена логика одностраничника из плагинов (изменение временно отменено в версии 2.8.2).

## Май 2022

### yfm-transform

#### 2.6.0

- Добавлен плагин для [синтаксиса списков задач](./syntax/additional.md#tasks-list).

## Апрель 2022

### yfm-docs

#### 1.22.0

- Поддержана фильтрация заголовка страницы и заголовка страницы в мета информации на разводящей странице (index.yaml).
- Поддержана фильтрация заголовка страницы в оглавлении (toc.yaml).

#### 1.21.0

- Поддержано использование symlinks с относительным путем.

## Март 2022

### yfm-docs

#### 1.20.0

- Поддержана фильтрация описания на разводящей странице (index.yaml).

#### 1.19.0

- Линтер запускается параллельно со сборкой.
- Поддержаны аргументы `--link-disabled`, `--build-disabled` и `--add-map-file`, по умолчанию имеют значение `false`.
  [Подробнее](tools/docs/settings.md).

### yfm-transform

#### 2.5.0

- Переписан на Typescript.

## Декабрь 2021

### yfm-docs

#### 1.18.0

Обновлена версия YFM до 2.4. Появилась поддержка [моноширинного шрифта](./syntax/base.md) и [многострочных таблиц](./syntax/tables/multiline.md).

#### 1.17.0

- После сборки документации в режиме препроцессинга (при output-format=md) не удаляем not_var у синтаксиса похожего на переменные.
  [Подстановки переменных](./syntax/vars.md#subtitudes).

#### 1.16.0

- Добавлены режимы включения оглавления: `root_merge`, `merge`, `link`. [Подробнее](./project/toc.md#include-mode).

- При включении оглавления в режимах `root_merge` и `merge`, будет добавлен оригинальный путь до исходников
в `sourcePath` поле мета информации.

### yfm-transform

#### 2.4.0

- Поддержка [многострочных таблиц](./syntax/tables/multiline.md) включена по-умолчанию.

#### 2.3.0

- Добавлена поддержка [моноширинного шрифта](./syntax/base.md).

## Ноябрь 2021

### yfm-docs

#### 1.15.0

- Добавлена возможность включать `toc.yaml` с добавлением его элементов на тот же уровень оглавления. [Подробнее](./project/toc.md#include-as-pages).

#### 1.14.0

- Добавлена возможность [настраивать линтер](./project/lint.md).

### yfm-transform

#### 2.2.0

- Добавлена возможность переопределить разделители в плагине [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs).

## Октябрь 2021

### yfm-transform

#### 2.1.0

- Добавлен экспериментальная поддержка многострочных таблиц.

## Сентябрь 2021

### yfm-docs

#### 1.13.0

- Используется YFM2.

### yfm-transform

#### 2.0

- YFM можно использовать на клиенте.
- Изменена схема подключения плагинов.
- Плагин [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs) всегда подключен.
- Пакет [highlight.js](https://www.npmjs.com/package/highlight.js) необходимо устанавливать самостоятельно.

## Июль 2021

### yfm-docs

#### 1.12.0

- Отключено использование экспериментального YFM-линтера.

### yfm-transform

#### 1.9.0

- Добавлена возможность включить поддержку якорей совместимых с GitHub (GFM).

## Июнь 2021

### yfm-docs

#### 1.11.0

- Включено использование экспериментального YFM-линтера.

#### 1.10.0

- Добавлена возможность настроить редиректы с помощью специального файла. Статическая сборка не поддерживает.

#### 1.9.0

- Добавлена поддержка разделов доступных только по прямой ссылке.

### yfm-transform

#### 1.8.0

- Добавлена экспериментальная поддержка линтера.

## Апрель 2021

### yfm-docs

#### 1.8.0

- Добавлена возможность собрать контрибьюторов файла в метаданных. Из коробки поддержан только GitHub. Визуально никак не отображается, но может быть использовано кастомным вьювером.

## Март 2021

### yfm-docs

#### 1.7.0

- Добавлено полное отключение переменных: условия не вычисляются, значения не подставляются.

### yfm-transform

#### 1.7.0

- Добавлено полное отключение переменных: условия не вычисляются, значения не подставляются.

## Январь 2021

### yfm-docs

#### 1.6.0

- Теперь можно собрать документ в виде одного HTML-файла.

#### 1.5.0

- Рефакторинг и починка багов.

#### 1.4.0

- Добавлено отключение вычисления условий с переменными.

### yfm-transform

#### 1.6.0

- Добавлена поддержка циклов, фильтров и функций.

#### 1.5.0

- Добавлена возможность использовать флаг `not_var` для переменных, которые не надо подменять значениями. Например, `not_var{{ variable_name }}`.

## Октябрь 2020

### yfm-docs

#### 1.3.0

- Добавлена возможность выкладки собранных файлов на S3.

## Август 2020

### yfm-docs

#### 1.2.0

- Для пользователя добавлены возможности менять в интерфейсе документации размер шрифта, включить темную тема, и прятать оглавления.

### yfm-transform

#### 1.4.0

- Добавлена возможность использовать '|' в переменных.

## Июль 2020

### yfm-transform

#### 1.3.0

- Обновлены стили базовых элементов.

#### 1.2.0

- Добавлена поддержка вставки видео.

#### 1.1.0

- Добавлена поддержка нескольких кастомных якорей на заголовок.

## Июнь 2020

### yfm-docs

#### 1.1.0

- Добавлен тихий режим без вывода логов сборки.