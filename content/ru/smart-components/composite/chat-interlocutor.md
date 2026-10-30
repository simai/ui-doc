---
title: "Выбор собеседника"
description: "Кнопка с именем текущего собеседника чата и меню, в котором выбирают другого: выбор начинает новый разговор."
---

# Выбор собеседника

`<sf-chat-interlocutor>` показывает, с кем разговор, и даёт выбрать другого
собеседника. Список собеседников — серверный: элемент только показывает его и
сообщает о выборе. Разговор принадлежит одному собеседнику, поэтому выбор
другого — просьба о новом разговоре, которую выполняет хост.

Компонент поставляется пакетом `larena` из репозитория `simai/ui-pro`, а не
выпуском SIMAI Framework. Как подключить пакет — в разделе
[Подключение смарт-компонентов](/ru/guide/smart-components/page/#подключение-к-странице).

## Пример

:::example {id="smart-components/chat-interlocutor/overview" label="Свои помощники и базы знаний"}
:::

## Разметка

В разметке — тег с текущим собеседником: `<sf-chat-interlocutor value="…">`.
Список передаёт хост свойством `options` или сервер — островом настроек
внутри элемента (см. [Выбор и новый разговор](#выбор-и-новый-разговор)).

- `options` — собеседники `[{id, title, kind?}]`; `kind: "knowledge"` —
  помощник базы знаний. `title` — текст, не разметка.
- `value` — id текущего собеседника. Значение управляемое: элемент сам его не
  меняет, его назначает хост, когда новый разговор готов.

## Варианты

### Помощники и базы знаний

Свои помощники идут первыми, помощники баз знаний — под своим заголовком,
когда есть и те и другие. От восьми собеседников в меню появляется поиск.

:::example {id="smart-components/chat-interlocutor/knowledge" label="Меню с двумя группами"}
:::

## Состояния

### Один собеседник

Один собеседник — это имя, а не выбор: кнопка неактивна, без
`aria-haspopup` и `aria-expanded`, стрелка скрыта, а действие `open` отвечает
отказом с причиной `single`.

:::example {id="smart-components/chat-interlocutor/single" label="Собеседник один"}
:::

## Применение

### Выбор и новый разговор

Повторный выбор текущего собеседника ничего не сообщает. После
`sf-chat-interlocutor-select` хост начинает разговор и сам задаёт `value`.

```html
<sf-chat-interlocutor value="personal">
  <script type="application/json" data-sf-settings>
    {"options": [{"id": "personal", "title": "Мой помощник"},
                 {"id": "shop", "title": "Поддержка магазина", "kind": "knowledge"}]}
  </script>
</sf-chat-interlocutor>
```

```js
const picker = document.querySelector('sf-chat-interlocutor');
picker.options = bootstrap.interlocutors; // [{id, title, kind}]
picker.addEventListener('sf-chat-interlocutor-select', async (event) => {
  await startConversation(event.detail.id);
  picker.value = event.detail.id;
});
```

Разговор с собеседником, которого сервер больше не перечисляет, называется
словом «Помощник», а не пустой строкой. Действие `setOptions(options)` делает
то же, что свойство `options`, `open()` — то же, что нажатие.

### Внешний вид

Открытые переменные: `--sf-chat-interlocutor-color`,
`--sf-chat-interlocutor-icon-color`,
`--sf-chat-interlocutor-hover-background-color`,
`--sf-chat-interlocutor-radius` и `--sf-chat-interlocutor-height`.

## Доступность

- Кнопка несёт `aria-haspopup="menu"` и `aria-expanded` с самого начала; её
  имя — «Помощник: <название>», а скрытое описание говорит, что выбор начнёт
  новый разговор.
- Пункты меню — радиокнопки, текущий отмечен; клавиатура — меню
  [Контекстное меню](/ru/smart-components/navigation/context-menu/): стрелки,
  Home, End, буквы, Escape возвращает фокус на кнопку.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-4b07c619f88b` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-chat-interlocutor>` |
| Назначение | С кем разговор: собеседники сервера в контекстном меню SIMAI Framework, текущий отмечен, а выбор другого сообщается хосту, чтобы тот начал новый разговор. Один собеседник — это имя, а не выбор. |
| Контракт | `smart.chat-interlocutor`, версия `1.0.2` |
| Поставка | пакет `larena` (`SF_BOOT_CONFIG.packages.larena`) |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | `host-required` |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`. Имя варианта шаблона для внешних шаблонов SfBaseElement.
- `root-class` — `string`, по умолчанию пусто.
- `root-style` — `string`, по умолчанию пусто.
- `value` — `string`, по умолчанию пусто. текущий собеседник; выбор просит другого через `select {id}`, и хост записывает его обратно, когда новый разговор готов
- `options` — `array` из `object`, по умолчанию `[]`. Собеседники (`bootstrap.interlocutors`): свойство или JSON-остров; от восьми в меню появляется поиск.

### Методы

- `setOptions(options: array)` — возвращает `object`. Собеседники, как свойство `options` (действие `set-options`); `kind: knowledge` идёт под своим заголовком, от восьми в меню появляется поиск.
- `open()` — возвращает `object`. Открывает меню, как нажатие; отказ `single`, если собеседников меньше двух.

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components/names/). Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `sf-chat-interlocutor-select` — `detail`: `{ id: any }`. Выбран другой собеседник (словарь select). Имя 0.3 `sf-chat-interlocutor` отправляется после него до 2026-12-01.
- `sf-chat-interlocutor` — устаревший псевдоним события `sf-chat-interlocutor-select`: приходит с тем же `detail`, подписывайтесь на `sf-chat-interlocutor-select`.

### Доступность

- Роль: кнопка (`button`).
- Доступное имя: внутренний.
- Клавиши: `Tab`, `Enter`, `Space`.
- Фокус: Обычная кнопка с `aria-haspopup=menu` и `aria-expanded=false` с самого начала, с именем «Помощник: <название>» и скрытым описанием того, к чему ведёт смена, ещё до открытия меню. Меню — `sf-context-menu` SIMAI Framework с пунктами-радиокнопками, текущий отмечен, со своей клавиатурой. При одном собеседнике кнопка неактивна, без `aria-haspopup`, `aria-expanded` и описания.

### Минимальная разметка

```html
<sf-chat-interlocutor value="personal"></sf-chat-interlocutor>
```

### Источник

- `simai/ui-pro@d1b0a1cf83c98e9225e0cc78afbdea27ad214bfd:components/src/smart/chat-interlocutor`
- `simai/ui-pro@d1b0a1cf83c98e9225e0cc78afbdea27ad214bfd:components/src/smart/chat-interlocutor/rule.js#name=cl-chat-interlocutor`

## См. также

- [Окно чата](/ru/smart-components/composite/chat-window/) — где стоит выбор собеседника.
- [Список разговоров](/ru/smart-components/composite/thread-list/) — разговоры человека.
- [Контекстное меню](/ru/smart-components/navigation/context-menu/) — меню, которым открывается список.
