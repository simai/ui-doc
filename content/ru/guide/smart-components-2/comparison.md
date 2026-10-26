---
title: "Сравнение с текущим устройством"
description: "Таблица соответствия: понятие из раздела «Smart-компоненты», описывающего текущую поставку SIMAI Framework, и его место в стандарте смарт-компонентов 2.0 — со ссылками на страницы обоих разделов."
---

# Сравнение с текущим устройством

Раздел [Smart-компоненты](/ru/guide/smart-components/) описывает, как
компоненты работают в текущей поставке SIMAI Framework, а этот раздел —
стандарт, к которому их переводят. Таблицы ниже показывают, куда переходит
каждое знакомое понятие. Компоненты переходят по одной семье на выпуск пары
SIMAI Framework, а старые имена событий и методов продолжают работать как
псевдонимы с датой.

Новые компоненты следуют стандарту с первого выпуска. Компоненту, у которого
ещё нет манифеста, интерфейс на время перехода даёт адаптер; других задач у
адаптеров нет.

## Устройство и интерфейс

| Текущее понятие | Где описано сейчас | Место в 2.0 | Где описано в 2.0 |
|:---|:---|:---|:---|
| Атрибуты и свойства (`static props`, `inputs`) | [Атрибуты, свойства и состояние](/ru/guide/smart-components/properties/) | **настройки** (`settings`) и **значения** (`values`); значение, которое меняет человек, указано один раз в `values` | [Модель компонента](/ru/guide/smart-components-2/model/) |
| Состояние компонента | [Атрибуты, свойства и состояние](/ru/guide/smart-components/properties/#граница-состояния) | значения наружу; видимые состояния — атрибуты хоста `host-states` | [Разметка и шаблоны](/ru/guide/smart-components-2/markup/#состояние-видно-из-разметки) |
| Публичные методы (`methods`) | [Жизненный цикл](/ru/guide/smart-components/lifecycle/) | **действия** (`actions`) с исходом `applied` или `refused`; методы генерируются; методов-читателей нет | [Модель компонента](/ru/guide/smart-components-2/model/#действия-и-их-исход) |
| Класс на `SfBaseElement`, `index.js`, `rule.js`, `meta.mjs` | [Устройство компонента](/ru/guide/smart-components/structure/) | одна папка: `component.json`, `template.html`, `behaviour.js`; код элемента, правило загрузчика и реестр генерируются | [Папка компонента и манифест](/ru/guide/smart-components-2/folder/) |
| Методы для переопределения (`onConnected`, `beforeRender`…) | [Жизненный цикл](/ru/guide/smart-components/lifecycle/#методы-для-переопределения) | `behaviour.js` с вычисляемыми значениями и кодом действий; события отрисовки — только базовые | [Модель компонента](/ru/guide/smart-components-2/model/#базовый-интерфейс) |
| Шаблон Lit и `templateContext()` | [Шаблоны](/ru/guide/smart-components/templates/) | **HTML-шаблоны** с `{{…}}`, `:attr`, `@event`, `if`, `each … key`; Lit — переходная форма | [Разметка и шаблоны](/ru/guide/smart-components-2/markup/) |
| Внешний шаблон (`template="compact"`) | [Шаблоны](/ru/guide/smart-components/templates/#встроенный-и-внешний-шаблон) | `template.<имя>.html` в папке компонента; шаблоны называются по расположению | [Внешний вид](/ru/guide/smart-components-2/look/) |
| Публичные `refresh(reason)`, `set()` и `state` базового элемента | [Жизненный цикл](/ru/guide/smart-components/lifecycle/) | переименованы в `rerender`, `assign` и закрытое `#state` с псевдонимами, чтобы имя `refresh` осталось действию из словаря | [Модель компонента](/ru/guide/smart-components-2/model/#базовый-интерфейс) |
| Слоты, забранные из детей тега | [Содержимое и слоты](/ru/guide/smart-components/slots/) | содержимое ставится и не копируется; слоты с `accepts` и `each` | [Слоты](/ru/guide/smart-components-2/slots/) |
| Заготовка до прихода кода, скелетоны | [Состояния и загрузка данных](/ru/guide/smart-components/states-and-loading/#загрузка-данных-и-скелетоны) | статическая разметка каждого примера и её подхват за один кадр | [Разметка и шаблоны](/ru/guide/smart-components-2/markup/#статическая-разметка) |

## События

| Текущее понятие | Где описано сейчас | Место в 2.0 | Где описано в 2.0 |
|:---|:---|:---|:---|
| События с двоеточием (`sf-menu:navigate`, `modal:after-close`) | [События](/ru/guide/smart-components/events/) | `sf-<тег>-<глагол>` и `sf-<тег>-<глагол>ed`; старые имена — псевдонимы с датой | [Имена и общие слова](/ru/guide/smart-components-2/names/#имена-событий) |
| Суффикс `-intent` (`sf-table-query-intent`) | [Порты хоста и намерения](/ru/guide/smart-components/host-ports/) | глагол словаря: `sf-table-query`, `sf-table-apply` | [Имена и общие слова](/ru/guide/smart-components-2/names/#свой-глагол-компонента) |
| Соглашение `change` | [События](/ru/guide/smart-components/events/#соглашение-change) | `change` сообщает только об изменении человеком; изменение снаружи слушают через `data.<ключ>` | [На странице](/ru/guide/smart-components-2/page/#событие-change) |
| `modal:before-close` и подобные «перед» | [События](/ru/guide/smart-components/events/) | отклоняемая просьба `sf-<тег>-close {reason, unsaved}` | [Окна и панели](/ru/guide/smart-components-2/layers/#закрытие-с-причиной) |
| Этапы `sf-connected`, `sf-before-render`, `sf-disconnected` | [Жизненный цикл](/ru/guide/smart-components/lifecycle/#этапы) | базовые события `sf-props-change`, `sf-updated`, `sf-after-render`, `sf-component-error`; свои копии этапов не заводятся | [Модель компонента](/ru/guide/smart-components-2/model/#базовый-интерфейс) |
| `data-sf-modal-*`, `data-sf-drawer-*` | [Подключение и использование](/ru/guide/smart-components/connection/) | одна кнопка `data-sf-action="<id>.<действие>"` | [На странице](/ru/guide/smart-components-2/page/#кнопка-data-sf-action) |

## Составные компоненты и данные

| Текущее понятие | Где описано сейчас | Место в 2.0 | Где описано в 2.0 |
|:---|:---|:---|:---|
| Составной компонент (`kind: "composite"`) | [Составные компоненты](/ru/guide/smart-components/composite/) | **сборка** (`kind: "assembly"`): детали по ролям, данные с одним хозяином, правила | [Сборки](/ru/guide/smart-components-2/assemblies/) |
| Связь компонентов без кода проекта, `composition` | [Составные компоненты](/ru/guide/smart-components/composite/#связь-компонентов-без-кода-проекта) | `roles` и `bind`; моменты — `rules` «Когда → Только если → Сделать» | [Правила](/ru/guide/smart-components-2/rules/) |
| Всплытие событий вложенных элементов | [Жизненный цикл](/ru/guide/smart-components/lifecycle/#этапы) | события частей останавливаются на рамке сборки; наружу — только `emit` | [Сборки](/ru/guide/smart-components-2/assemblies/#рамка-ничего-не-выходит-само) |
| Пакеты компонентов продуктов (приставка владельца) | [Составные компоненты](/ru/guide/smart-components/composite/) | компоненты делают только в SIMAI Framework и ui-pro, приставка одна — `sf-`; экраны продукта — сборки | [Папка компонента и манифест](/ru/guide/smart-components-2/folder/#где-делают-компоненты) |
| Порт хоста и намерения | [Порты хоста и намерения](/ru/guide/smart-components/host-ports/) | `port` в манифесте и сгенерированный адаптер; данные приносит **источник** `sf-source`; **четыре ответа** хоста | [Данные с сервера](/ru/guide/smart-components-2/data/) |
| Состояния данных (`populated` и другие) | [Состояния и загрузка данных](/ru/guide/smart-components/states-and-loading/) | семь состояний словаря; `ready` вместо `populated` | [Данные с сервера](/ru/guide/smart-components-2/data/#семь-состояний-данных) |
| Персональный вид (`persistence.view_preference`) | [Персональный вид](/ru/guide/smart-components/view-preferences/) | флаг ключа `"persist": "local"` или `"host"` | [Сборки](/ru/guide/smart-components-2/assemblies/#история-и-сохранение) |
| Поля по типу свойства, ячейки таблицы | [Поля по типу свойства](/ru/guide/smart-components/field-renderers/) | ячейка, которая показывает значение, — разметка на классах; смарт-элемент — только при правке; запись в ячейке ждёт `settle` | [Записи: строки и узлы](/ru/guide/smart-components-2/entries/) |

## Манифест `smart.manifest.json` → `component.json`

| Сейчас | В 2.0 |
|:---|:---|
| `inputs` (схема JSON) | `settings` и `values` |
| `events` | `events` с именами по словарю |
| `methods` | `actions`; читатели уходят |
| `state.machines` | у компонента данных — состояние данных `state`; у поля — видимые состояния (`at-min`, `inherited`) как атрибуты хоста |
| `persistence` | `persist` у ключа |
| `composition` | `roles` и `bind`; `uses` выводит построение; `declarative.slots` → `slots`; `declarative.host_port` → `port` |
| `capabilities`, `tags`, `reuse_mode`, `lifecycle` | каталог `catalogue.json` |
| `provenance`, `runtime_pair` | файл блокировки построения |
| данные для Студии | `examples.json` |
| `readiness` | проверки стандарта |
| `contracts.*` (свободный текст) | `docs.md` или пример |
| `accessibility.keyboard`, `accessible_name` | `accessibility.keys` с действиями и `accessibility.name.from` |
| `security`, `ownership`, `presentation`, `ai_guidance` | остаются как есть до следующей версии стандарта |

Манифест текущего вида переводит скрипт; всё, что он не смог разместить,
перечисляется по компоненту и проходит проверку переведённых манифестов.
Подробно о текущем манифесте — [Манифест](/ru/guide/smart-components/manifest/);
о новом — [Папка компонента и манифест](/ru/guide/smart-components-2/folder/).

## Известные расхождения текущей поставки

Стандарт перечисляет места, где компоненты текущей поставки ему ещё не
соответствуют. Каждое исправляется вместе с переходом своей семьи:

| Что | Задача |
|:---|:---|
| Ядро прячет всю страницу до готовности загрузчика; элемент рисуется рядом со статическими детьми | simai/ui-source#39, #40 |
| `sf-modal` копирует содержимое слота через `outerHTML`, обработчики страницы теряются | simai/ui-source#42 |
| Идентификаторы из счётчика совпадают у классового и смарт-поля | simai/ui-source#41 |
| Три списка слоёв и две основы z-index | simai/ui-source#36, #37 |
| `sf-table` рисует около 108 узлов на строку и не имеет окна; `sf-tree` перерисовывается целиком | simai/ui-pro#2, simai/ui-source#43 |
| Описание `sf-switch` попадает в имя; `Escape` у `sf-menu` объявлен для всех раскладок | simai/ui-source#44 |
| `SF.language.use` побеждает `[lang]`; нет множественного числа; пара не поставляет файлы слов | simai/ui-source#45 |
| `sf-modal` в `body` теряет язык, тему и переменные хоста; цвет включённого `sf-switch` — только токен роли | simai/ui-source#46 |
| Включённый `sf-switch` без `value` отправляет в форму пустую строку, а не `on` | simai/ui-source#38 |
| Ошибка поля, заданная действием, только красит его, а форма отправляется | сценарий A2 стандарта |

## Открытые вопросы стандарта

Эти вопросы стандарт 1.3.5 не решает; ответы на них в него не входят:

- старшая версия ui-pro относительно пар SIMAI Framework;
- как типы ключей соотносятся с типами значений документа композиции;
- компоненты поведения после `sf-source`: `sf-form-state` (ключ «форма
  изменена», который читает `unsaved` у слоя) и горячие клавиши;
- оптимистичные изменения отдельных ключей в строках и их откат в полосе
  проверки Студии.

## Смотрите также

- [Смарт-компоненты 2.0](/ru/guide/smart-components-2/) — начало раздела.
- [Smart-компоненты](/ru/guide/smart-components/) — раздел о текущей поставке.
