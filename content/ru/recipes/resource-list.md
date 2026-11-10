---
title: "Список записей"
description: "Страница админки со списком сайтов, заказов или пользователей: заголовок с числом и главным действием, поиск, отбор по состоянию и строки, которые открывают запись."
---

# Список записей

Самый частый экран админки: все записи одного вида на одной странице —
сайты, заказы, пользователи, письма. Сверху заголовок с числом записей и
одним главным действием, под ним поиск и отбор, ниже строки. Нажатие на
строку открывает запись, остальные действия — в меню строки.

## Пример

Наберите в поиске «блог» или выберите «С проблемами»; запрос без
результатов показывает пустое состояние с кнопкой «Показать все». Строка
открывается нажатием, меню «⋯» — на каждой строке.

:::example {id="recipes/resource-list/overview" label="Сайты" preview=sandbox log="sf-list-open sf-list-apply change" log_console=true log_open=false}
:::

## Когда брать

- Записей одного вида больше, чем помещается на экран, и человек ищет
  нужную, чтобы открыть её.
- У каждой записи есть название и одна короткая вторая строка: домен и тип,
  автор и дата, сумма и клиент.

Не берите список, когда записи сравнивают по многим колонкам — суммы,
даты, ответственные рядом друг с другом: это таблица
[Представления данных](/ru/pro/admin/table/). Список из трёх-пяти записей
без поиска — это [Список](/ru/smart/content/list/) в карточке, без заголовка
страницы.

## Из чего собрано

| Часть | Компонент | Как задано |
|:---|:---|:---|
| Заголовок, путь и число | [Заголовок страницы](/ru/smart/composite/page-header/) | `heading`, `count`; путь — [Хлебные крошки](/ru/smart/navigation/breadcrumbs/) в слоте `path` |
| Главное действие | [Кнопка](/ru/smart/actions/buttons/) | в слоте `actions`, вид по умолчанию: залитая основного цвета, одна на экран |
| Второе действие | [Кнопка](/ru/smart/actions/buttons/) | `appearance="outline"` `scheme="on-surface"` |
| Поиск | [Текстовое поле](/ru/smart/forms/inputs/) | `input-type="search"`, `icon-start="search"`, `aria-label` |
| Отбор | [Сегментный переключатель](/ru/smart/actions/segmented/) | дорожка с плашкой, два-три коротких варианта с `count`: на телефоне они должны поместиться в строку |
| Строки | [Список](/ru/smart/content/list/) | строки скриптом: `text`, `supporting`, `icon`, `badge` только у записей с проблемой; меню строки — `actions` |
| Ничего не найдено | [Пустое состояние](/ru/smart/feedback/empty-state/) | в слоте `empty` списка, `kind="nothing-found"`, одно действие «Показать все» |

Экран админки собирается в компактной плотности: `data-sf-density="compact"`
на корне экрана сдвигает все части на ступень вниз вместе
([Плотность](/ru/guide/size-and-type/density/)).

## Как делать

:::example {id="recipes/resource-list/do-dont" label="Как делать"}
:::

- **Одно залитое действие.** «Создать» — единственная залитая кнопка
  основного цвета; «Экспорт», «Импорт» — с рамкой. Две залитые кнопки рядом
  спорят, и главное действие теряется.
- **Бейдж — только у проблемы.** Запись, у которой всё в порядке, без
  бейджа; бейдж стоит у остановленной, у той, где истекает сертификат или
  нет копии. Зелёное «Работает» на каждой строке — шум, в котором не видно
  проблему.
- **Строка открывается сама.** Нажатие на строку открывает запись; кнопки
  «Открыть» в строке нет. Действия — в меню «⋯», в нём же опасные.

## Копия для ИИ

Скопируйте блок целиком: в нём разметка экрана и правила, по которым его
собирают.

```html
<!-- Рецепт SIMAI Framework «Список записей», выпуск ui-b4a77681f0a7.
Правила:
1. Корень экрана админки — data-sf-density="compact".
2. sf-header-page: heading — вид записей, count — их число; путь — sf-breadcrumbs в slot="path".
3. В slot="actions" одна залитая кнопка (вид по умолчанию) — главное действие; остальные appearance="outline" scheme="on-surface".
4. Поиск — sf-input input-type="search" icon-start="search" root-class="flex-1 min-w-0" с aria-label; отбор — sf-segmented, два-три коротких варианта с count (на телефоне — в одну строку).
5. Строки — sf-list: text — название, supporting — одна строка «домен · тип»; badge {text, tone} только у записей с проблемой, одно-два слова.
6. Нажатие на строку (sf-list-open) открывает запись; кнопки «Открыть» в строке нет; остальные действия — list.actions.
7. Пустой результат — sf-empty-state slot="empty" kind="nothing-found" с одним действием, которое возвращает все записи.
8. Удаление спрашивает подтверждение — рецепт «Удаление». -->
<div class="flex flex-col gap-3" data-sf-density="compact">
  <sf-header-page heading="Сайты" count="9">
    <sf-breadcrumbs slot="path" aria-label="Путь к странице" items='[{"label":"Хостинг","href":"/hosting/"},{"label":"Сайты"}]'></sf-breadcrumbs>
    <sf-button slot="actions" appearance="outline" scheme="on-surface" icon-start="download" text="Экспорт"></sf-button>
    <sf-button slot="actions" icon-start="add" text="Создать сайт"></sf-button>
  </sf-header-page>
  <div class="flex flex-col md:flex-row gap-2 md:items-cross-center">
    <sf-input root-class="flex-1 min-w-0" input-type="search" icon-start="search" placeholder="Название или домен" aria-label="Поиск по сайтам"></sf-input>
    <sf-segmented aria-label="Какие сайты показать" value="all" items='[{"value":"all","label":"Все","count":9},{"value":"problems","label":"С проблемами","count":4}]'></sf-segmented>
  </div>
  <sf-list id="sites" label="Сайты">
    <sf-empty-state slot="empty" kind="nothing-found" size="1/2" text="Измените запрос или покажите все сайты."></sf-empty-state>
  </sf-list>
</div>
<script type="module">
  const list = document.querySelector('#sites');
  await customElements.whenDefined('sf-list');
  list.actions = [{id: 'visit', text: 'Открыть сайт', icon: 'open_in_new'}];
  list.setItems({items: [
    {id: 's1', text: 'Магазин «Северный ветер»', supporting: 'nord-wind.ru · Магазин', icon: 'storefront'},
    {id: 's3', text: 'Блог о путешествиях', supporting: 'travel-notes.ru · Блог', icon: 'article', badge: {text: 'Сертификат', tone: 'warning'}},
  ], options: {hasMore: false}});
  list.addEventListener('sf-list-open', (event) => { location.href = `/sites/${event.detail.id}/`; });
</script>
```

> **Что ещё в пути.** Список ресурсов как вид таблицы представления — факты
> бейджами в ровных колонках, до трёх быстрых действий в строке и
> переключатель «список / таблица», который запоминается, — приходит с
> набором компонентов `view`. До него список собирается из частей на этой
> странице. Как он будет выглядеть, показывает
> [прототип списка ресурсов](/proto/view-resource-list.html).

## См. также

- [Карточка записи](/ru/recipes/record-card/) — то, что открывает строка
- [Пустой список](/ru/recipes/empty-state/) — первый экран, когда записей ещё нет
- [Фильтры в шторке](/ru/recipes/filter-drawer/) — когда отбора по одному признаку мало
- [Удаление](/ru/recipes/delete/)
