---
title: "Выбор профиля"
description: "Выбирает, создаёт, переименовывает, удаляет и сбрасывает профиль в одной панели; профили и права хранит сайт."
---

# Выбор профиля

`<sf-profile-picker>` — один способ работать с профилями: профилями меню,
видами записи и всем, у чего есть профили. В свёрнутом виде это кнопка,
похожая на поле: «Профиль: Обычный». В открытой панели всё делается на месте.

## Пример

:::example {id="smart-components/profile-picker/overview" label="Профили"}
:::

## Применение

### Что в панели

- Строка на каждый профиль: значок (человек — личный, группа — общий),
  название и подпись «Личный» или «Для всех». Текущий отмечен галочкой.
- «Переименовать» и «Удалить» в самой строке; удаление переспрашивает прямо в
  строке. У профиля без прав стоит замок, у стандартного этих действий нет.
- «Новый профиль…» открывает форму в списке: название и «Личный / Для всех».
  Новый профиль — копия текущего.
- «Сбросить к стандартному» внизу, если задан `resettable`.

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
picker.addEventListener('sf-profile-select', (event) => openProfile(event.detail.id));
```

| Событие | `detail` | Что просит человек |
|:---|:---|:---|
| `sf-profile-select` | `{id}` | выбрать профиль |
| `sf-profile-create` | `{label, shared, from}` | создать профиль — копию `from` |
| `sf-profile-rename` | `{id, label}` | переименовать |
| `sf-profile-delete` | `{id}` | удалить |
| `sf-profile-reset` | `{id}` | сбросить к стандартному |

- `profiles` — список `{id, label, shared, builtin, editable}`.
  `editable: false` — профиль можно выбрать, но нельзя менять; `builtin` —
  стандартный профиль, его не переименовывают и не удаляют.
- `rights.create` — `{personal, shared}`: какие профили человек может
  создать. Личный профиль у человека один: если он уже есть, сайт передаёт
  `personal: false`.
- `size` — `1/2` (по умолчанию) или `1`.

Им пользуются меню администратора и представление свойств Larena.

## Доступность

- Стрелки, `Home` и `End` ходят по строкам, `Enter` выбирает, `F2`
  переименовывает, `Delete` удаляет.
- `Escape` закрывает форму, а затем панель.
- Подписи по умолчанию — на языке страницы.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-7153f7a9c092` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-profile-picker>` |
| Назначение | Один способ выбрать, создать, переименовать, удалить и сбросить профиль: кнопка, похожая на поле, с названием текущего профиля, и панель, где всё делается на месте. Профили и права принадлежат хосту; компонент сообщает, что попросил человек. |
| Контракт | `smart.profile-picker`, версия `1.1.7` |
| Поставка | выпуск Framework `ui-7153f7a9c092` |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | работает в сценарии студии, продуктовой приёмки нет |
| Заготовка до прихода кода | сервер пишет `data-sf-skeleton="block"`; своего скелетона при загрузке данных нет ([Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`. Имя варианта шаблона для внешних шаблонов SfBaseElement.
- `root-class` — `string`, по умолчанию пусто.
- `root-style` — `string`, по умолчанию пусто.
- `label` — `string`. Как здесь называется профиль («Профиль», «Вид»); без значения — «Профиль» на языке страницы.
- `size` — `string`, по умолчанию `1/2`, значения: `1/2`, `1`.
- `resettable` — `boolean`, по умолчанию `false`. Показывает внизу «Сбросить к стандартному».
- `message` — `string`, по умолчанию пусто. Почему хост отказал в последнем действии; показывается в панели.
- `disabled` — `boolean`, по умолчанию `false`.
- `current` — `string`, по умолчанию пусто. Идентификатор текущего профиля.
- `profiles` — `array`.
- `rights` — `object`.

### Методы

- `open()` — возвращает `object`. Действие open.
- `close()` — возвращает `object`. Действие close.
- `toggle()` — возвращает `object`. Действие toggle.

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components/names/). Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `sf-profile-picker-select` — `detail`: `{ id: string, ids: array }`.
- `sf-profile-picker-create` — `detail`: `{ label: string, shared: boolean, from: string, kind: any }`.
- `sf-profile-picker-rename` — `detail`: `{ id: string, label: string, title: string }`.
- `sf-profile-picker-delete` — `detail`: `{ id: string, ids: array }`.
- `sf-profile-picker-reset` — `detail`: `{ id: string }`.
- `sf-profile-select` — устаревший псевдоним события `sf-profile-picker-select`: приходит с тем же `detail`, подписывайтесь на `sf-profile-picker-select`.
- `sf-profile-create` — устаревший псевдоним события `sf-profile-picker-create`: приходит с тем же `detail`, подписывайтесь на `sf-profile-picker-create`.
- `sf-profile-rename` — устаревший псевдоним события `sf-profile-picker-rename`: приходит с тем же `detail`, подписывайтесь на `sf-profile-picker-rename`.
- `sf-profile-delete` — устаревший псевдоним события `sf-profile-picker-delete`: приходит с тем же `detail`, подписывайтесь на `sf-profile-picker-delete`.
- `sf-profile-reset` — устаревший псевдоним события `sf-profile-picker-reset`: приходит с тем же `detail`, подписывайтесь на `sf-profile-picker-reset`.

### Доступность

- Роль: меню (`menu`).
- Доступное имя: рекомендуется.
- Клавиши: `ArrowUp`, `ArrowDown`, `Home`, `End`, `Enter`, `Space`, `F2`, `Delete`, `Escape`.
- Фокус: Кнопка открытия — с aria-haspopup=menu; строки панели — menuitemradio, текущая отмечена. Стрелки, Home и End ходят по строкам, Enter выбирает, F2 переименовывает, Delete спрашивает об удалении, Escape закрывает форму, а затем панель и возвращает фокус на кнопку.

### Минимальная разметка

```html
<sf-profile-picker label="Профиль" current="regular" resettable></sf-profile-picker>
```

### Источник

- `simai/ui@7153f7a9c0929a28d67f458e9d9a9f9351f7cf8f:distr/smart/profile-picker`
- `simai/ui@7153f7a9c0929a28d67f458e9d9a9f9351f7cf8f:distr/rule/rule.json#name=cl-profile-picker`

## См. также

- [Представление свойств](/ru/smart-components/composite/property-view/)
- [Меню администратора](/ru/smart-components/composite/admin-menu/)
