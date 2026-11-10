---
title: "JavaScript API"
description: "Оглавление window.SF: публичные функции и объекты Framework по уровням, со ссылкой на страницу каждого."
---

# JavaScript API

Framework кладёт свои функции и объекты в `window.SF`. Эта страница —
оглавление: публичные имена сгруппированы по тому, что их приносит на
страницу, и каждое ведёт на свою страницу в разделе
[Функции](/ru/guide/functions/) или на страницу, где оно описано. Скриптовый
API компонента (`SF.Input`, `SF.Tabs` и другие) описан на странице этого
компонента.

Публичное имя сохраняет смысл: переименовать или убрать его можно только
через журнал изменений, как атрибут (см.
[Жизненный цикл изменений](/ru/guide/connection/change-lifecycle/)). Внутренние
имена среды выполнения лежат в `SF.__internal` и могут измениться в любом
выпуске; страница их не вызывает. Прежние имена прямо на `SF` (`SF.send`,
`SF.litHtml` и подобные) работают до даты из журнала изменений и отмечаются в
`SF.deprecations`.

Наборы компонентов (pro, view, chat, mail, editor, effects, chart) отдают
свои функции через `SF.package('<набор>')`, а описывает их документация
набора (см. [API набора](/ru/guide/functions/loading/package/)).

## Имена по уровням

Раздел собран из контракта выпуска `ui-b4a77681f0a7` (`core/contracts/public-js-api.json`) и обновляется вместе с выпуском.

### Ядро

Есть сразу после выполнения `core.js`, ждать не нужно.

| Имя | Что делает | Где описано |
|:---|:---|:---|
| `SF.aliases` | Прежние имена событий, настроек и атрибутов у элемента. | [Имена и общие слова](/ru/guide/smart-components/names/) |
| `SF.Assembly` | Среда выполнения сборок. | [Сборки](/ru/guide/smart-components/assemblies/) |
| `SF.breakpoints` | Контрольные точки ширины для скрипта. | [Контрольные точки](/ru/guide/functions/screen/breakpoints/) |
| `SF.codeCopy` | Код в тексте копируется по нажатию. | [Копирование кода в тексте](/ru/guide/functions/actions/code-copy/) |
| `SF.Composition` | Помощники композиции и редактора блоков. | [API композиции](/ru/guide/layouts/reference/api/) |
| `SF.copyText` | Кладёт текст в буфер обмена. | [Копирование текста](/ru/guide/functions/actions/copy-text/) |
| `SF.deprecations` | Прежние имена, которые ещё принимаются, и чем их заменить. | [Жизненный цикл изменений](/ru/guide/connection/change-lifecycle/) |
| `SF.EarlyPort` | Порты, объявленные в разметке: первый запрос до кода компонента. | [Данные с сервера](/ru/guide/smart-components/data/) |
| `SF.Effects` | Прежнее имя движка фоновых эффектов; новое — `SF.package('effects')`. | [Фоновые эффекты](/ru/guide/layouts/building/background-effects/) |
| `SF.format` | Даты, дни, числа и размеры файлов на языке страницы. | [Даты, числа и размеры](/ru/guide/functions/text/format/) |
| `SF.icons` | Список значков, из которых выбирает человек. | [Значки на выбор](/ru/guide/functions/person/icons/) |
| `SF.language` | Язык всей страницы и слова, добавленные для компонентов. | [Язык страницы](/ru/guide/functions/text/language/) |
| `SF.loadRuntime` | Загружает общую среду смарт-компонентов; её вызывает Loader. | [Загрузка и общая среда](/ru/guide/smart-components/runtime/) |
| `SF.Mask` | Маска ввода у поля и форматирование значения по маске. | [Маска поля](/ru/guide/functions/text/mask/) |
| `SF.notifications` | Настройки области уведомлений и показанные сообщения. | [Уведомления](/ru/guide/functions/actions/notify/) |
| `SF.notify` | Показывает сообщение в области уведомлений страницы. | [Уведомления](/ru/guide/functions/actions/notify/) |
| `SF.package` | Отдаёт API набора компонентов: функции, которые набор зарегистрировал. | [API набора](/ru/guide/functions/loading/package/) |
| `SF.pageLanguage` | Язык, который действует для узла страницы. | [Слово компонента](/ru/guide/functions/text/page-text/) |
| `SF.pageText` | Слово компонента на языке узла. | [Слово компонента](/ru/guide/functions/text/page-text/) |
| `SF.Position` | Держит всплывающую панель у её якоря. | [Привязка к якорю](/ru/guide/functions/screen/position/) |
| `SF.Preferences` | Хранит вид, который выбрал человек: порядок, ширину, сортировку. | [Настройки вида](/ru/guide/functions/person/preferences/) |
| `SF.readingPosition` | Сохраняет место читателя в прокручиваемой колонке. | [Положение чтения](/ru/guide/functions/screen/reading-position/) |
| `SF.ready` | Ждёт запуска Loader: обещание или вызов функцией. | [Готовность Loader](/ru/guide/functions/loading/ready/) |
| `SF.RegionNavigation` | Переходы между страницами заменой области содержимого. | [Навигация по областям страницы](/ru/guide/layouts/building/region-navigation/) |
| `SF.RuleLoader` | Правила загрузки и регистрация пакета компонентов. | [Пакеты компонентов](/ru/guide/connection/loader/#пакеты-компонентов) |
| `SF.runtimeModule` | Модуль общей среды для собранного смарт-компонента. | [Загрузка и общая среда](/ru/guide/smart-components/runtime/) |
| `SF.safeHref` | Отвечает, можно ли оставить адрес ссылки. | [Чужой HTML](/ru/guide/functions/text/sanitize-html/) |
| `SF.sanitizeHtml` | Очищает HTML из чужого источника перед вставкой на страницу. | [Чужой HTML](/ru/guide/functions/text/sanitize-html/) |
| `SF.tags` | Прежние теги переименованных смарт-компонентов. | [Имена и общие слова](/ru/guide/smart-components/names/) |
| `SF.workspace` | Управляет рабочей областью: список, основная часть, панель. | [Рабочая область](/ru/guide/layouts/building/workspace/) |

### Loader

Появляются вместе, когда запустился Loader: после события `sf-loader-init` или `await SF.ready`.

| Имя | Что делает | Где описано |
|:---|:---|:---|
| `SF.create` | Создаёт элемент компонента по имени. | [Создание элемента](/ru/guide/functions/loading/create/) |
| `SF.createAsync` | Создаёт элемент и ждёт, когда его тег будет определён. | [Создание элемента](/ru/guide/functions/loading/create/) |
| `SF.Loader` | Загружает компоненты по требованию и следит за новыми частями страницы. | [Загрузка по требованию](/ru/guide/functions/loading/loader/) |
| `SF.loadSmartBase` | Загружает основу смарт-компонентов. | [Загрузка основы смарт-компонентов](/ru/guide/functions/loading/smart-base/) |
| `SF.smartBaseReady` | Обещание основы смарт-компонентов, как бы она ни пришла. | [Загрузка основы смарт-компонентов](/ru/guide/functions/loading/smart-base/) |
| `SF.whenDefine` | Прежнее имя `SF.whenDefined`. | [Ожидание элемента](/ru/guide/functions/loading/when-defined/) |
| `SF.whenDefined` | Ждёт, когда смарт-элемент будет определён. | [Ожидание элемента](/ru/guide/functions/loading/when-defined/) |
| `SF.whenFieldRenderers` | Загружает набор отрисовщиков полей. | [Поля по типу свойства](/ru/guide/smart-components/field-renderers/) |

### Основа смарт-компонентов

Появляются с первым смарт-элементом на странице или после `await SF.loadSmartBase()`.

| Имя | Что делает | Где описано |
|:---|:---|:---|
| `SF.html` | Тег шаблона, которым рисуют смарт-элементы. | [Свой смарт-компонент](/ru/guide/functions/loading/smart/) |
| `SF.nothing` | Пустое место в шаблоне. | [Свой смарт-компонент](/ru/guide/functions/loading/smart/) |
| `SF.render` | Рисует шаблон в узел. | [Свой смарт-компонент](/ru/guide/functions/loading/smart/) |
| `SF.SfBaseElement` | Базовый класс смарт-элемента. | [Свой смарт-компонент](/ru/guide/functions/loading/smart/) |
| `SF.smart` | Базовый класс и помощники для своего смарт-компонента. | [Свой смарт-компонент](/ru/guide/functions/loading/smart/) |

### Скрипт компонентов

Объект компонента появляется, только когда Loader загрузил этот компонент по разметке страницы; его методы описаны на странице компонента.

| Имя | Где описан |
|:---|:---|
| `SF.AdminMenu` | [Основа Admin Menu](/ru/components/internal/admin-menu/#javascript) |
| `SF.AnchoredBadge` | [Бейджи](/ru/components/feedback/badges/#бейдж-на-якоре) |
| `SF.ButtonGroup` | [Группа кнопок](/ru/components/actions/button-group/#javascript) |
| `SF.Carousel` | [Карусель](/ru/components/overlays-media/carousel/#javascript) |
| `SF.Checkbox` | [Флажок](/ru/components/forms/checkbox/#javascript) |
| `SF.Clipboard` | [Копирование](/ru/components/actions/clipboard/#javascript) |
| `SF.CompositionOverlay` | [Оверлей редактора](/ru/smart/editor/composition-overlay/#методы) |
| `SF.CountryCode` | [Код страны](/ru/components/forms/country-code/#javascript) |
| `SF.DownloadFile` | [Скачивание файла](/ru/components/actions/download-file/#javascript) |
| `SF.fieldRenderers` | [Поля по типу свойства](/ru/guide/smart-components/field-renderers/) |
| `SF.FileUpload` | [Загрузка файлов](/ru/components/forms/file-upload/#javascript) |
| `SF.Flag` | [Флаг](/ru/components/content/flag/#javascript) |
| `SF.Highlight` | [Подсветка кода](/ru/components/content/highlight/#javascript) |
| `SF.InlineEditor` | [Inline-редактор](/ru/smart/editor/inline-editor/#методы) |
| `SF.Input` | [Текстовые поля](/ru/components/forms/inputs/#javascript) |
| `SF.ProgressBar` | [Прогресс](/ru/components/feedback/progress-bar/#javascript) |
| `SF.ProgressScale` | [Шкала прогресса](/ru/components/feedback/progress-scale/#javascript) |
| `SF.Radio` | [Радиокнопки](/ru/components/forms/radio/#javascript) |
| `SF.RangeSlider` | [Слайдер диапазона](/ru/components/forms/range-slider/#javascript) |
| `SF.Resizer` | [Изменение ширины](/ru/smart/overlays/resizer/#методы) |
| `SF.Scrollbar` | [Полоса прокрутки](/ru/components/tools/scrollbar/#javascript) |
| `SF.Slider` | [Слайдер контента](/ru/components/overlays-media/slider/#javascript) |
| `SF.Sortable` | [Перетаскивание](/ru/smart/editor/sortable/#методы) |
| `SF.Spinner` | [Спиннер](/ru/components/feedback/spinner/#javascript) |
| `SF.Switch` | [Переключатель](/ru/components/forms/switch/#javascript) |
| `SF.Tab` | [Вкладка (совместимость)](/ru/components/navigation/tab/#javascript) |
| `SF.Tabs` | [Вкладки](/ru/components/navigation/tabs/#javascript) |
| `SF.Textarea` | [Многострочное поле](/ru/components/forms/textarea/#javascript) |
| `SF.ThemePalette` | [Генератор темы](/ru/smart/forms/theme-generator/) |
| `SF.Toast` | [Всплывающие сообщения](/ru/components/feedback/toast/#javascript) |
| `SF.Tree` | [Дерево](/ru/components/navigation/tree/#javascript) |
| `SF.Verification` | [Код подтверждения](/ru/components/forms/verification/#javascript) |

## Смотрите также

- [Функции](/ru/guide/functions/) — страницы функций с примерами, по задачам.
- [Как работает Loader](/ru/guide/connection/loader/) — что происходит при открытии страницы и в каком порядке появляются имена.
- [Жизненный цикл изменений](/ru/guide/connection/change-lifecycle/) — как переименовываются и убираются публичные имена.
