---
title: "Выбор профиля"
description: "Выбирает, создаёт, переименовывает, удаляет и сбрасывает профиль в одной панели; профили и права хранит сайт."
---

# Выбор профиля

`<sf-profile-picker>` — один способ работать с профилями: профилями меню,
видами записи и всем, у чего есть профили. В свёрнутом виде это кнопка,
похожая на поле: «Профиль: Обычный». В открытой панели всё делается на месте.
Им пользуются меню администратора и представление свойств Larena.

## Пример

:::example {id="smart-components/profile-picker/overview" label="Профили"}
:::

## Разметка

В разметке задаются подпись и текущий профиль, список профилей и права
передаёт код сайта:

```html
<sf-profile-picker label="Профиль" current="regular" resettable></sf-profile-picker>
```

`label` — как здесь называется профиль («Профиль», «Вид»); без значения —
«Профиль» на языке страницы. `current` — идентификатор текущего профиля.
`resettable` показывает внизу «Сбросить к стандартному». `message` — текст
отказа сайта в последнем действии, он показывается в панели.

Свойства, которые задаются из кода:

- `profiles` — список `{id, label, shared, builtin, editable}`.
  `editable: false` — профиль можно выбрать, но нельзя менять; `builtin` —
  стандартный профиль, его не переименовывают и не удаляют.
- `rights.create` — `{personal, shared}`: какие профили человек может
  создать. Личный профиль у человека один: если он уже есть, сайт передаёт
  `personal: false`.

## Варианты

### Размер

`size` — `1/2` (по умолчанию) или `1`.

:::example {id="smart-components/profile-picker/sizes" label="Размеры выбора профиля"}
:::

## Состояния

### Недоступен

`disabled` отключает выбор профиля.

:::example {id="smart-components/profile-picker/state-disabled" label="Недоступный выбор профиля"}
:::

## Поведение

### Что в панели

- Строка на каждый профиль: значок (человек — личный, группа — общий),
  название и подпись «Личный» или «Для всех». Текущий отмечен галочкой.
- «Переименовать» и «Удалить» в самой строке; удаление переспрашивает прямо в
  строке. У профиля без прав стоит замок, у стандартного этих действий нет.
- «Новый профиль…» открывает форму в списке: название и «Личный / Для всех».
  Новый профиль — копия текущего.
- «Сбросить к стандартному» внизу, если задан `resettable`.

Методы `open()`, `close()` и `toggle()` открывают и закрывают панель из кода.

### Профили и права принадлежат сайту

Компонент не меняет свой список сам. Он сообщает, что попросил человек, а сайт
отвечает новым списком `profiles` и атрибутом `current` или текстом отказа в
`message`.

```js
const picker = document.querySelector('sf-profile-picker');
picker.profiles = [
  {id: 'regular', label: 'Обычный', shared: true, builtin: true},
  {id: 'editors', label: 'Редакторы', shared: true},
  {id: 'mine', label: 'Мой', shared: false},
];
picker.rights = {create: {personal: false, shared: true}};
picker.setAttribute('current', 'regular');
picker.addEventListener('sf-profile-picker-select', (event) => openProfile(event.detail.id));
```

| Событие | `detail` | Что просит человек |
|:---|:---|:---|
| `sf-profile-picker-select` | `{id}` | выбрать профиль |
| `sf-profile-picker-create` | `{label, shared, from}` | создать профиль — копию `from` |
| `sf-profile-picker-rename` | `{id, label}` | переименовать |
| `sf-profile-picker-delete` | `{id}` | удалить |
| `sf-profile-picker-reset` | `{id}` | сбросить к стандартному |

Прежние имена событий — `sf-profile-select`, `sf-profile-create`,
`sf-profile-rename`, `sf-profile-delete` и `sf-profile-reset` — приходят
следом с полями из таблицы.

## Доступность

- Стрелки, `Home` и `End` ходят по строкам, `Enter` выбирает, `F2`
  переименовывает, `Delete` удаляет.
- `Escape` закрывает форму, а затем панель.
- Подписи по умолчанию — на языке страницы.

## Справочник

Собран из манифеста компонента выпуска `ui-c3015f76bcc2` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Что делает |
|:---|:---|:---|:---|:---|
| `template` | строка | `default` | — | Имя варианта шаблона для внешних шаблонов SfBaseElement. |
| `root-class` | строка | пусто | — | Классы, которые добавляются корневому элементу, нарисованному компонентом. |
| `root-style` | строка | пусто | — | Объявления стиля, которые ставятся корневому элементу, нарисованному компонентом, в том числе пользовательские свойства. |
| `label` | строка | — | — | Как здесь называется профиль («Профиль», «Вид»); без значения — «Профиль» на языке страницы. |
| `size` | строка | `1/2` | `1/2`, `1` | — |
| `resettable` | да/нет | нет | — | Показывает внизу «Сбросить к стандартному». |
| `message` | строка | пусто | — | Почему хост отказал в последнем действии; показывается в панели. |
| `disabled` | да/нет | нет | — | — |
| `current` | строка | пусто | — | Идентификатор текущего профиля. |
| `profiles` | список | — | — | Профили, которые предлагает хост, `[{id, label, shared, builtin, editable}]`: `builtin` — стандартный, его не переименовывают и не удаляют; при `editable: false` профиль можно выбрать, но не изменить. Выбор свой список сам не меняет. |
| `rights` | объект | — | — | Что этот человек может создавать, `{create: {personal, shared}}`; если ни того, ни другого, новый профиль не предлагается. Сброс задаёт настройка `resettable`. |

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `icon-start` — `iconStart`. Свойство атрибута `template` называется `templateName`.

### Методы

| Метод | Возвращает | Что делает |
|:---|:---|:---|
| `open()` | объект | Действие open. |
| `close()` | объект | Действие close. |
| `toggle()` | объект | Действие toggle. |

### События

События приходят на сам элемент и всплывают; глаголы в именах — из [общего словаря](/ru/guide/smart-components/names/). Общие события базового элемента — в главе [Модель компонента](/ru/guide/smart-components/model/#базовый-интерфейс).

| Событие | `detail` | Когда приходит |
|:---|:---|:---|
| `sf-profile-picker-select` | `{ id: string, ids: array }` | — |
| `sf-profile-picker-create` | `{ label: string, shared: boolean, from: string, kind: any }` | — |
| `sf-profile-picker-rename` | `{ id: string, label: string, title: string }` | — |
| `sf-profile-picker-delete` | `{ id: string, ids: array }` | — |
| `sf-profile-picker-reset` | `{ id: string }` | — |
| `sf-profile-select` | `{ id: string, ids: array }` | устаревший псевдоним `sf-profile-picker-select`: подписывайтесь на `sf-profile-picker-select` |
| `sf-profile-create` | `{ label: string, shared: boolean, from: string, kind: any }` | устаревший псевдоним `sf-profile-picker-create`: подписывайтесь на `sf-profile-picker-create` |
| `sf-profile-rename` | `{ id: string, label: string, title: string }` | устаревший псевдоним `sf-profile-picker-rename`: подписывайтесь на `sf-profile-picker-rename` |
| `sf-profile-delete` | `{ id: string, ids: array }` | устаревший псевдоним `sf-profile-picker-delete`: подписывайтесь на `sf-profile-picker-delete` |
| `sf-profile-reset` | `{ id: string }` | устаревший псевдоним `sf-profile-picker-reset`: подписывайтесь на `sf-profile-picker-reset` |

### О компоненте

| | |
|:---|:---|
| Тег | `<sf-profile-picker>`, контракт `smart.profile-picker` версии `1.1.10` |
| Поставка | выпуск Framework `ui-c3015f76bcc2` |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками; работает в сценарии студии, продуктовой приёмки нет |
| До прихода кода | сервер пишет `data-sf-skeleton="block"`; своего скелетона при загрузке данных нет ([Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода)) |
| Доступность | роль меню (`menu`); доступное имя рекомендуется; клавиши `ArrowUp`, `ArrowDown`, `Home`, `End`, `Enter`, `Space`, `F2`, `Delete`, `Escape` |
| Источник | `simai/ui@c3015f76bcc20cd502d5fe7931495e35711d6a4d:distr/smart/profile-picker` |
| Правило классов | `simai/ui@c3015f76bcc20cd502d5fe7931495e35711d6a4d:distr/rule/rule.json#name=cl-profile-picker` |

## См. также

- [Представление свойств](/ru/pro/admin/property-view/)
- [Меню администратора](/ru/pro/admin/admin-menu/)
