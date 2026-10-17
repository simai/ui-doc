---
title: "Манифест"
description: "Манифест (`smart.manifest.json`) описывает компонент так, чтобы его можно было применить, не читая исходный код."
---

# Манифест

Манифест (`smart.manifest.json`) описывает компонент так, чтобы его можно было
применить, не читая исходный код. Глава перечисляет разделы манифеста, указания
для ИИ, уровни готовности и реестр компонентов.

## Для чего нужен манифест

Манифест нужен:

- человеку — как источник страницы справочника;
- ИИ — как точный контракт: что можно задать, что придёт в событии, что
  запрещено;
- гейту Framework — как то, с чем сверяется реализация.

Схема манифеста (стандарт `simai.smart-component-manifest`) закрытая: поле,
которого в ней нет, не принимается. Схема называет свою версию в поле
`x-simai-version`, манифест — старшую версию схемы в поле `schema_version`;
действующая версия — в карте стандартов (см. [Уровни стандартов](/ru/guide/standards/map/#уровни-стандартов)). Все библиотечные
Smart-компоненты описаны манифестом действующей старшей версии.

Файл схемы — `contracts/schema/smart-component-manifest.v2.schema.json` в
открытом репозитории [`simai/ui-source`](https://github.com/simai/ui-source). Образцы готовых манифестов открыты: это
`distr/smart/<папка>/smart.manifest.json` в поставке `ui`.

Кому манифест нужен:

- каждому компоненту Framework и каждому компоненту пакета (требование
  `manifest-conforms`, см. [Пакет компонентов (`simai.component-package`)](/ru/guide/standards/map/#пакет-компонентов-simai-component-package));
- локальному компоненту проекта (см. [Локальные компоненты проекта](/ru/guide/smart-components/structure/#локальные-компоненты-проекта)) — нет: Loader и базовый класс
  манифест не читают.

## Разделы манифеста

Все разделы таблицы, кроме `templates`, `exported_parts`, `item_contract` и
`contracts`, обязательны.

| Раздел | Что описывает |
|:---|:---|
| `schema_version` | Старшая версия схемы манифеста, целое число (см. [Имена и версии](/ru/guide/standards/map/#имена-и-версии)) |
| `id`, `version`, `title`, `summary` | Кто это. `id` начинается с `smart.`, `component.`, `utility.` или `template.`, дальше — строчные латинские буквы, цифры и дефис: `smart.shop-catalog`. Пространство имён проекта в `id` не ставится. У компонентов Framework `id` — `smart.` и имя папки компонента: `smart.buttons` у `sf-button` |
| `kind` | У Smart-компонентов — `smart` или `composite`; схема допускает также `primitive`, `component`, `template` |
| `reuse_mode` | Как компонент переиспользуется: целиком, частями или обоими способами (`whole`, `parts`, `both`) |
| `tags`, `capabilities` | Метки и возможности компонента |
| `custom_element` | Имя тега; у компонента пакета — с префиксом владельца |
| `lifecycle` | `experimental`, `released`, `deprecated`, `retired` |
| `inputs` | Входные свойства: объект схемы `{"type": "object", "properties": {…}, "additionalProperties": false}` со значениями по умолчанию и именами для совместимости |
| `methods` | Публичные методы: объект, ключ — имя метода |
| `events` | События: объект, ключ — имя события; у события `summary`, схема `detail` в поле `payload`, `canonical` и `alias_of` для `change` |
| `state` | Визуальные состояния и автоматы поведения |
| `templates`, `exported_parts` | Шаблоны и части, доступные снаружи |
| `composition`, `item_contract`, `contracts` | Состав, контракт элемента списка, порты |
| `persistence`, `ownership` | Что хранится и кто чем владеет; `persistence.view_preference` — персональный вид компонента (см. «Персональный вид в манифесте» ниже) |
| `security` | Кто владеет правами, какие входы недоверенные, политика сетевых запросов |
| `accessibility` | Ровно четыре поля: `role` (строка или `null`), `accessible_name` (`required`, `recommended` или `internal`), `keyboard` (список строк), `focus` (строка) |
| `presentation` | Темы, языки и адаптивные режимы, которые компонент поддерживает; `skeleton` — заготовка формы до прихода кода (`shape`) и свой скелетон при загрузке данных (`while_loading`); его объявляет каждый Smart-компонент, `none` — тоже ответ ([Заготовка до прихода кода](/ru/guide/smart-components/states-and-loading/#заготовка-до-прихода-кода)) |
| `readiness` | `level` — уровень готовности ([Уровни готовности](#уровни-готовности)) и `required_checks` — список обязательных проверок; оба поля обязательны |
| `adapter`, `artifacts` | Адаптер для среды проверки компонента; файлы образцов данных и сценариев |
| `compatibility` | Выпуск, на котором проверен; имена для совместимости; миграции |
| `provenance` | Происхождение, вплоть до хешей файлов исходника |
| `ai_guidance` | Указания для ИИ ([Указания для ИИ](#указания-для-ии)) |

**Происхождение (`provenance`).** `source_repository` и `source_revision` —
репозиторий и полный коммит исходника компонента. Пути в `source_artifacts`
отсчитываются от корня папки пакета (той, где лежит `framework.lock.json`):
`src/smart/<папка>/index.js`, а не путь от корня репозитория продукта. В
дереве `wave-1/overlay` сборки (см. [Пакеты компонентов продуктов](/ru/guide/introduction/structure/#пакеты-компонентов-продуктов)) папка пакета наложена на корень исходников
Framework, поэтому эти пути ведут к тем же файлам. `sha256` у каждого пути —
SHA-256 файла; проверка манифестов `node scripts/sf-contract.mjs build` в
`wave-1/overlay` сверяет его с файлом. Пока у исходника нет коммита,
`source_revision` может быть сорока нулями. `generated_runtime` может быть
пустым списком.

**Персональный вид в манифесте**

Компонент, который хранит [персональный вид](/ru/guide/smart-components/view-preferences/)
через `SF.Preferences`, объявляет его в `persistence.view_preference` (схема
2.5.0):

| Поле | Что в нём |
|:---|:---|
| `key` | Ключ значения; атрибут, из которого он строится, — в угловых скобках: `sf-table/<preferences-key>` |
| `general_key` | Ключ общего вида человека для всех элементов этого вида, который читается под значением экземпляра, например `sf-table/*`; или `null` |
| `v` | Версия формата значения — она же поле `v` в самом значении. Компонент читает известную ему более раннюю версию и не трогает незнакомую |
| `fields` | Поля значения: у каждого `type`, `description` и `seed`, а также необязательные `written_by` — какие элементы его пишут — и `schema` |

`seed: true` значит, что сервер может положить поле в страницу для первой
отрисовки — в блок `data-sf-preferences` или через `SF.Preferences.preload()`, —
и компонент нарисуется в виде человека до первого запроса. Объявленные поля
таблицы и ручки ширины перечислены в [Персональный вид → Поля значения](/ru/guide/smart-components/view-preferences/#поля-значения); они
же — в справочнике каждого компонента.

```json
"persistence": {
  "mode": "none", "source_of_truth": "host", "network_owner": "none", "revision_field": null,
  "view_preference": {
    "key": "sf-resizer/<storage-key>", "general_key": null, "v": 1,
    "fields": {"width": {"type": "integer", "description": "…", "seed": true, "written_by": ["sf-resizer"]}}
  }
}
```

**Выпуск (`compatibility.runtime_pair`).** Выпуск Framework — один коммит
`ui`, поэтому `ui_revision` и `ui_smart_revision` оба равны полному коммиту
выпуска, на котором компонент проверен.

## Полный пример

Минимальный манифест компонента пакета `acme`, который проходит схему
манифеста и `node scripts/sf-contract.mjs build`. В нём есть все обязательные
разделы; необязательные (`templates`, `exported_parts`, `item_contract`,
`contracts`, `backend`) опущены. Ключи `inputs.properties` — имена атрибутов
элемента. Значение `sha256` в `provenance` замените хешем своего файла
(`shasum -a 256 src/smart/acme-counter/index.js`).

```json
{
  "schema_version": 2,
  "id": "smart.acme-counter",
  "version": "1.0.0",
  "title": "Счётчик",
  "summary": "Показывает число и кнопку, которая увеличивает его на единицу.",
  "kind": "smart",
  "reuse_mode": "whole",
  "lifecycle": "experimental",
  "tags": ["counter"],
  "capabilities": ["render", "theme"],
  "custom_element": "acme-counter",
  "composition": {"uses": [], "public_parts": []},
  "inputs": {
    "type": "object",
    "properties": {
      "value": {"type": "integer", "default": 0, "description": "Текущее число."}
    },
    "additionalProperties": false
  },
  "methods": {},
  "events": {
    "change": {
      "summary": "Число изменилось по нажатию кнопки.",
      "payload": {
        "type": "object",
        "properties": {"value": {"type": "integer"}},
        "required": ["value"],
        "additionalProperties": false
      },
      "canonical": true
    }
  },
  "state": {"machines": {}, "visual_states": ["default", "disabled"]},
  "persistence": {"mode": "none", "source_of_truth": "component", "network_owner": "none", "revision_field": null},
  "ownership": {
    "source": "acme/acme-ui",
    "data": "component",
    "effects": "component",
    "forbidden_client_responsibilities": ["backend access decisions"]
  },
  "security": {"permissions_owner": "none", "untrusted_inputs": ["props"], "network_policy": "deny"},
  "accessibility": {
    "role": null,
    "accessible_name": "internal",
    "keyboard": ["Enter", "Space"],
    "focus": "Фокус получает кнопка внутри компонента."
  },
  "presentation": {"themes": ["light", "dark"], "locales": ["ru", "en"], "responsive": ["desktop", "mobile"], "skeleton": {"shape": "none", "while_loading": "none"}},
  "adapter": {"kind": "generic", "protocol": "simai.smart-studio-adapter.v1", "module": null},
  "artifacts": {"fixtures": [], "scenarios": []},
  "readiness": {"level": "runnable", "required_checks": ["manifest"]},
  "compatibility": {
    "contract_schema": {"id": "https://simai.io/contracts/smart-component-manifest.v2.schema.json", "version": 2},
    "runtime_pair": {
      "ui_revision": "1aa66c4385cf0128549d4ccfc8d6c82f22b50aa8",
      "ui_smart_revision": "1aa66c4385cf0128549d4ccfc8d6c82f22b50aa8"
    },
    "aliases": [],
    "deprecations": [],
    "replacement": null,
    "migrations": []
  },
  "provenance": {
    "source_repository": "acme/acme-ui",
    "source_revision": "0000000000000000000000000000000000000000",
    "source_artifacts": [
      {"path": "src/smart/acme-counter/index.js", "sha256": "a495cd1b22c5689ed40ab73c25faaa0dfde4b84a875061b179875a5a58e10541"}
    ],
    "generated_runtime": []
  },
  "ai_guidance": {
    "use_when": "Нужен счётчик с кнопкой увеличения.",
    "do_not": ["Не хранить число на сервере через компонент"],
    "required_reads": ["inputs", "events"],
    "minimal_example": "<acme-counter value=\"1\"></acme-counter>",
    "owner_commands": ["node --test tests/acme-*.test.mjs", "node scripts/sf-contract.mjs build"]
  }
}
```

## Указания для ИИ

Раздел `ai_guidance` есть у каждого компонента:

| Поле | Что содержит |
|:---|:---|
| `use_when` | Когда применять компонент |
| `do_not` | Чего не делать |
| `required_reads` | Какие разделы манифеста прочитать до применения |
| `minimal_example` | Минимальная рабочая разметка |
| `owner_commands` | Какие команды владельца подтверждают изменение |

## Уровни готовности

| Уровень | Что означает |
|:---|:---|
| `inventoried` | Компонент учтён |
| `described` | Описан манифестом |
| `runnable` | Загружается штатно и работает в образце |
| `composable` | Проверен внутри композиции |
| `exportable` | Пригоден для экспорта |
| `accepted` | Принят: основной сценарий проверен |
| `host-required` | Работает только с подключённым приложением (портом) |

Статус в каталоге (см. [Готовность компонента к использованию](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию)) — упрощённое отображение этих уровней для людей.

## Реестр

Из манифестов генерируется реестр компонентов
(`contracts/generated/smart-component-contract-registry.json`) — машинный
перечень всех манифестов с их хешами, по которому документация и инструменты
знают, какие компоненты существуют. Loader подключает компоненты по своим
правилам (`rule.js`), а не по реестру. Реестр не правят вручную;
проверка сверяет его с манифестами.

## Смотрите также

- [Готовность компонента к использованию](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию) — статус в каталоге.
- [Проверки](/ru/guide/smart-components/quality/#проверки) — проверки манифеста и реестра.
- [Стандарт разработки Smart-компонентов с ИИ](/ru/guide/smart-components/ai-development/) — стандарт разработки с ИИ.
