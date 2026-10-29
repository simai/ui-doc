---
title: "Пагинация"
description: "Переключает страницы длинного списка: поле номера между стрелками, размер страницы и догрузка."
---

# Пагинация

`<sf-pagination>` — подвал длинного списка или таблицы: сколько всего
записей, на какой странице читатель, как перейти на другую и сколько записей
показывать. Он собирает раскладку обычной
[пагинации](/ru/components/navigation/pagination/) с полем номера между
стрелками, как в табличном представлении. Данные компонент не загружает:
приложение передаёт числа и по событиям загружает нужную страницу.

## Пример

:::example {id="smart-components/pagination/overview" label="Результат"}
:::

## Применение

### Числа

`total` — сколько записей всего, `page-size` — сколько на странице,
`current` — номер текущей страницы, начиная с единицы. Число страниц
компонент считает сам и держит `current` в его пределах. При `total="0"`
переходы и выбор размера не показываются.

### Состав подвала

В начале строки — общее количество. В середине — подпись «Страницы:», стрелки «В
начало» и «Предыдущая страница», поле с номером текущей страницы и стрелки
«Следующая страница» и «Последняя». Стрелки назад видны со второй страницы,
стрелки вперёд — пока следующая страница есть. В поле можно набрать любой
номер и нажать `Enter`; номер за пределами списка приводится к первой или
последней странице.

В конце строки — кнопка «Показать ещё» и выбор размера страницы. Кнопку убирает
`top="false"`, выбор размера — `show-page-size="false"`; варианты размера
задаёт `page-sizes`, по умолчанию `10,20,30,40`. `show-more-busy` делает
кнопку «Показать ещё» занятой, пока приложение догружает записи.
`middle="false"` убирает всю строку подвала.

В узкой колонке части строки переносятся: подпись «Страницы:», стрелки,
«Показать ещё» и выбор размера начинают новую строку, сохраняя свой размер, и
не накрывают друг друга.

### Переход и события

Компонент сам меняет `current` и `page-size` и сообщает об изменении
всплывающим событием; приложение по нему загружает записи. В `event.detail`
каждого события есть также `component`.

| Событие | Когда | Поля `event.detail` |
|:---|:---|:---|
| `sf-pagination-change` | открыта другая страница | `previous`, `current`, `total`, `pageCount`, `pageSize` |
| `sf-pagination-size-change` | выбран другой размер страницы | `previous`, `pageSize`, `current`, `total`, `pageCount` |
| `sf-pagination-load-more` | нажата «Показать ещё» | `current`, `total`, `pageSize`, `pageCount`, `hasNext`, `item` |
| `sf-pagination-count` | запрошено общее количество | `reason`, `current`, `pageSize` |

Прежние имена этих событий — `sf-page-change`, `sf-page-size-change`,
`sf-show-more`, `sf-count-request`, `sf-action-change`,
`sf-action-for-all-change`, `sf-action-apply` и `sf-selection-clear` —
приходят с тем же `detail` до 2026-12-01; подписывайтесь на новые.

При смене размера `current` остаётся в пределах нового числа страниц.
`goToPage(n)`, `setPageSize(n)` и `showMore()` делают то же из кода,
`onPageChange(handler)` передаёт обработчику номер новой страницы первым
аргументом.

### Количество неизвестно

Список, который не считает записи на каждом запросе, задаёт
`count-known="false"` и сообщает `has-next`, есть ли следующая страница.
Тогда вместо числа в начале строки стоит ссылка «Показать количество» — если задан
`can-count`. Нажатие на неё, на стрелку «Последняя» и отметка «Для всех»
отправляют `sf-pagination-count` с причиной в `detail.reason`: `total`,
`last-page` или `action-for-all`. Пока приложение считает, компонент
показывает короткое ожидание; ответ приходит атрибутами `total`,
`count-known` и снятым `counting`. Спиннер ожидания берёт
[вид страницы](/ru/smart-components/feedback/spinner/#вид-страницы), заданный `data-sf-spinner`.

:::example {id="smart-components/pagination/unknown-count" label="Результат"}
:::

### Действия с отмеченными

`actions` и `selected-count` добавляют панель действий с отмеченными
строками: сколько отмечено, список действий, «Применить» и сброс
выделения. Панель видна, пока `selected-count` больше нуля. Действия задаются
строкой `значение:Подпись` через `|`, флаги `disabled` и `selected` идут
после `::`. Действие по умолчанию не выбрано, поэтому «Применить» недоступна,
пока пользователь не выберет его сам. `show-action-for-all` добавляет отметку
«Для всех» — применить действие ко всем записям под фильтром.

Компонент не хранит выделение: `selected-count` передаёт приложение, а
`sf-pagination-action-change` (`previous`, `action`),
`sf-pagination-action-for-all-change` (`previous`, `actionForAll`),
`sf-pagination-apply` (`action`, `actionForAll`, `current`, `total`,
`pageSize`, `pageCount`) и `sf-pagination-selection-clear` (`selectedCount`,
`total`) сообщают ему о выборе пользователя.
`bottom="false"` убирает панель, если действия показывает соседний компонент.

```html
<sf-pagination
  aria-label="Страницы заказов"
  current="1"
  total="240"
  page-size="20"
  selected-count="3"
  actions="archive:Архивировать|export:Выгрузить|delete:Удалить"
></sf-pagination>
```

```js
const pagination = document.querySelector('sf-pagination');

pagination.addEventListener('sf-pagination-change', async (event) => {
  const {current, pageSize} = event.detail;
  renderRows(await loadOrders({page: current, size: pageSize}));
});

pagination.addEventListener('sf-pagination-apply', async (event) => {
  await applyToSelected(event.detail.action);
  pagination.setAttribute('selected-count', '0');
});
```

### Подписи

Все подписи — «Всего:», «Страницы:», «Показать ещё», «На странице:» и
доступные имена стрелок — берутся из языка страницы: на русской странице они
русские. Атрибуты `total-label`, `pages-label`, `previous-label`,
`next-label`, `first-label`, `last-label`, `page-field-label` и другие из
справочника заменяют отдельные слова.

## Доступность

- Корень — ориентир `nav`. Имя по умолчанию — «Страницы результатов»; если на
  странице несколько списков, задайте каждому своё в `aria-label`.
- Стрелки — кнопки-иконки с доступными именами и подсказками. Поле номера
  подписано «Страница:» и переходит по `Enter`; стрелки и поле — обычные
  остановки `Tab`.
- Переход сам ничего не объявляет. Сообщите о загрузке новых записей в
  области с `role="status"`, если они появляются не рядом с подвалом.
- Панель действий с отмеченными — область с именем «Действия с отмеченными»;
  у кнопки сброса выделения есть имя «Снять выделение».

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-e2cff39223f1` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-pagination>` |
| Назначение | Навигация по коллекции, разбитой на пронумерованные страницы, на основе источника данных. |
| Контракт | `smart.pagination`, версия `1.3.3` |
| Поставка | выпуск Framework `ui-e2cff39223f1` |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | принят в продукт |
| Заготовка до прихода кода | сервер пишет `data-sf-skeleton="block"`; своего скелетона при загрузке данных нет ([Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`. Имя шаблона.
- `root-class` — `string`, по умолчанию пусто.
- `root-style` — `string`, по умолчанию пусто.
- `top` — `boolean`, по умолчанию `true`. Показывает совместимый блок «показать ещё».
- `middle` — `boolean`, по умолчанию `true`. Показывает навигацию по страницам и сводку по коллекции.
- `bottom` — `boolean`, по умолчанию `true`. Разрешает совместимый раздел пакетных действий.
- `top-class` — `string`, по умолчанию пусто. Утилитарные классы Framework для раздела «показать ещё».
- `main-class` — `string`, по умолчанию пусто. Утилитарные классы Framework для раздела навигации.
- `bottom-class` — `string`, по умолчанию пусто. Утилитарные классы Framework для раздела пакетных действий.
- `pages-label` — `string`. Видимая подпись перед элементами страниц. Пусто — текст на языке страницы (по-английски «Pages:»).
- `page-label` — `string`. Доступная приставка к номеру страницы. Пусто — текст на языке страницы (по-английски «Page»).
- `previous-label` — `string`. Доступное имя действия «предыдущая страница». Пусто — текст на языке страницы (по-английски «Previous page»).
- `next-label` — `string`. Доступное имя действия «следующая страница». Пусто — текст на языке страницы (по-английски «Next page»).
- `last-label` — `string`. Видимая подпись действия «последняя страница» для совместимости. Пусто — текст на языке страницы (по-английски «Last»).
- `total-label` — `string`. Видимая подпись общего числа записей. Пусто — текст на языке страницы (по-английски «Total:»).
- `selected-label` — `string`. Видимая подпись числа выбранных записей. Пусто — текст на языке страницы (по-английски «Selected:»).
- `selected-count` — `integer`, по умолчанию `0`, значения: от 0. Количество выбранных элементов, ограниченное диапазоном от нуля до общего количества.
- `show-more-text` — `string`. Подпись действия «показать ещё» для совместимости. Пусто — текст на языке страницы (по-английски «Show more»).
- `total` — `integer`, по умолчанию `10`, значения: от 0. Неотрицательное общее число элементов.
- `page-size` — `integer`, по умолчанию `10`, значения: от 1. Положительное число элементов на странице.
- `page-sizes` — `string`, по умолчанию `10,20,30,40`. Варианты размера страницы — положительные числа через запятую.
- `show-page-size` — `boolean`, по умолчанию `true`. Показывает выбор размера страницы для непустой коллекции.
- `page-size-label` — `string`. Видимая и доступная подпись выбора размера страницы. Пусто — текст на языке страницы (по-английски «Per page:»).
- `show-actions` — `boolean`, по умолчанию `true`. Показывает групповые действия, если они переданы.
- `actions` — `string`, по умолчанию пусто. Определения совместимых пакетных действий, разделённые вертикальной чертой.
- `action` — `string`, по умолчанию пусто. Значение выбранного группового действия.
- `action-apply-text` — `string`. Подпись кнопки, которая применяет действие к выбранному. Пусто — текст на языке страницы (по-английски «Apply»).
- `show-action-for-all` — `boolean`, по умолчанию `false`. Показывает совместимый переключатель «все элементы».
- `action-for-all` — `boolean`, по умолчанию `false`. Текущее значение переключателя «все элементы».
- `action-for-all-label` — `string`. Подпись переключателя «для всех». Пусто — текст на языке страницы (по-английски «For all»).
- `actions-label` — `string`. Доступное имя списка действий над выбранным. Пусто — текст на языке страницы (по-английски «Action for the selected records»).
- `action-choose-label` — `string`. Подсказка в списке действий над выбранным, пока действие не выбрано. Пусто — текст на языке страницы (по-английски «Choose an action»).
- `actions-region-label` — `string`. Доступное имя панели, которая появляется, пока строки отмечены. Пусто — текст на языке страницы (по-английски «Actions for the selected»).
- `clear-selection-label` — `string`. Доступное имя и подсказка элемента, который снимает выбор. Пусто — текст на языке страницы (по-английски «Clear the selection»).
- `count-known` — `boolean`, по умолчанию `true`. Известно ли количество записей. Хост, который не считает каждый ответ, задаёт false, и представление предлагает подсчитать количество вместо того, чтобы показывать его.
- `total-exact` — `boolean`, по умолчанию `true`. false, когда total — оценка: строка показывает «~N», последняя страница и число страниц не предлагаются как точные, а ссылка счётчика спрашивает число (словарь 1.1.5 total-exact; проверка 29)
- `can-count` — `boolean`, по умолчанию `false`. Может ли хост подсчитать количество по запросу. Без этого представление ничего не предлагает и ничего не запрашивает.
- `counting` — `boolean`, по умолчанию `false`. Счётчик загружается; вместо числа отображается короткое ожидание.
- `has-next` — `boolean`, по умолчанию `false`. Существует ли следующая страница. Определяет переход вперёд и «Показать ещё», когда общее количество не передано.
- `show-count-label` — `string`. Текст элемента, который просит хост посчитать записи. Пусто — текст на языке страницы (по-английски «Show the number»).
- `counting-label` — `string`. Доступное имя короткого ожидания, пока число записей в пути. Пусто — текст на языке страницы (по-английски «Counting»).
- `first-label` — `string`. Доступное имя и подсказка элемента, который переходит на первую страницу. Пусто — текст на языке страницы (по-английски «First»).
- `page-field-label` — `string`. Подпись поля, в которое вводят номер страницы. Пусто — текст на языке страницы (по-английски «Page:»).
- `show-more-busy` — `boolean`, по умолчанию `false`. Отмечает кнопку «Показать ещё» как занятую, пока хост загружает следующую порцию; она отключена и показывает индикатор загрузки.
- `size` — `string`, по умолчанию `1`, значения: `1/2`, `1`. Ступень лестницы размеров для полей, кнопок, подписей и номеров страниц: 1 или плотная 1/2, как в админке.
- `current` — `integer`, по умолчанию `1`, значения: от 1. Читаемая страница, с 1 (словарь 1.1.5 page)
- `aria-label` — `string`, по умолчанию пусто. Доступное имя области навигации. Пусто — текст на языке страницы (по-английски «Result pages»).

### Методы

- `goToPage(page: number)` — возвращает `object`. Переходит на страницу: номер разбирается как целое число и ограничивается диапазоном 1..pageCount, если количество известно (иначе только снизу значением 1). Отправляет sf-pagination-change, когда страница действительно меняется; ничего не делает, если известно, что всего страниц ноль.
- `showMore()` — возвращает `object`. Отправляет sf-pagination-load-more с текущими параметрами пагинации и переданным пунктом; не выполняет запрос и не меняет состояние.
- `getTopSection()` — возвращает `object` | `null`. Возвращает элемент верхней секции (.sf-pagination-top) или null, если она не отрисована.
- `getMainSection()` — возвращает `object` | `null`. Возвращает элемент основной секции (.sf-pagination-main) или null, если она не отрисована.
- `getBottomSection()` — возвращает `object` | `null`. Возвращает элемент нижней секции (.sf-pagination-bottom) или null, если она не отрисована.
- `setPageSize(size: number|string)` — возвращает `object`. Устанавливает положительный размер страницы, удерживает текущую страницу в пределах нового числа страниц и отправляет sf-pagination-size-change. Неположительный, нечисловой или неизменный размер игнорируется.
- `setAction(action: string)` — возвращает `object`. Выбирает групповое действие по значению (пустое значение сбрасывает выбор) и отправляет sf-pagination-action-change, если оно отличается от текущего.
- `setActionForAll(value: boolean)` — возвращает `object`. Задаёт, применяется ли групповое действие ко всем записям под фильтром, и отправляет sf-pagination-action-for-all-change. При включении также запрашивает количество (sf-pagination-count с reason action-for-all), если оно ещё неизвестно.
- `setState(nextState: object)` — возвращает `object`. Записывает каждый ключ как атрибут в kebab-case: false, null, undefined или пустая строка удаляет атрибут, true устанавливает его пустым, всё остальное приводится к строке.
- `onPageChange(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик sf-pagination-change; обработчик вызывается с (current, detail, event). Обработчик, не являющийся функцией, игнорируется.
- `onShowMore(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик sf-pagination-load-more; обработчик вызывается с (detail, event). Обработчик, не являющийся функцией, игнорируется.

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components/names/). Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `sf-pagination-change` — `detail`: `{ previous: number, current: number, total: number, pageCount: number|null, pageSize: number }`.
- `sf-pagination-size-change` — `detail`: `{ previous: number, pageSize: number, current: number, total: number, pageCount: number|null }`.
- `sf-pagination-count` — `detail`: `{ reason: any, current: number, pageSize: number }`.
- `sf-pagination-load-more` — `detail`: `{ direction: any, current: number, total: number, pageSize: number, pageCount: number|null, hasNext: boolean }`.
- `sf-pagination-selection-clear` — `detail`: `{ selectedCount: number, total: number }`.
- `sf-pagination-action-change` — `detail`: `{ previous: string, action: string }`.
- `sf-pagination-action-for-all-change` — `detail`: `{ previous: boolean, actionForAll: boolean }`.
- `sf-pagination-apply` — `detail`: `{ action: string, scope: any, current: number, total: number, pageSize: number, pageCount: number|null }`.
- `sf-action-apply` — устаревший псевдоним события `sf-pagination-apply`: приходит с тем же `detail`, подписывайтесь на `sf-pagination-apply`.
- `sf-action-change` — устаревший псевдоним события `sf-pagination-action-change`: приходит с тем же `detail`, подписывайтесь на `sf-pagination-action-change`.
- `sf-action-for-all-change` — устаревший псевдоним события `sf-pagination-action-for-all-change`: приходит с тем же `detail`, подписывайтесь на `sf-pagination-action-for-all-change`.
- `sf-count-request` — устаревший псевдоним события `sf-pagination-count`: приходит с тем же `detail`, подписывайтесь на `sf-pagination-count`.
- `sf-page-change` — устаревший псевдоним события `sf-pagination-change`: приходит с тем же `detail`, подписывайтесь на `sf-pagination-change`.
- `sf-page-size-change` — устаревший псевдоним события `sf-pagination-size-change`: приходит с тем же `detail`, подписывайтесь на `sf-pagination-size-change`.
- `sf-selection-clear` — устаревший псевдоним события `sf-pagination-selection-clear`: приходит с тем же `detail`, подписывайтесь на `sf-pagination-selection-clear`.
- `sf-show-more` — устаревший псевдоним события `sf-pagination-load-more`: приходит с тем же `detail`, подписывайтесь на `sf-pagination-load-more`.

### Доступность

- Роль: навигация (`navigation`).
- Доступное имя: обязательно.
- Клавиши: `Tab`.
- Фокус: Tab переходит только к включённым нативным действиям. Фокус использует общее оформление focus-visible только для клавиатуры и остаётся видимым в режиме forced colors; пропущенные страницы не получают фокус.

### Минимальная разметка

```html
<sf-pagination aria-label="Страницы результатов поиска" current="2" total="96" page-size="10" top="false" bottom="false" show-page-size="false"></sf-pagination>
```

### Источник

- `simai/ui@e2cff39223f1a4b004dafe332f081e5178fad2f3:distr/smart/pagination`
- `simai/ui@e2cff39223f1a4b004dafe332f081e5178fad2f3:distr/rule/rule.json#name=cl-pagination`

## См. также

- [Выпадающий список](/ru/smart-components/navigation/dropdown/) — выбор размера страницы устроен так же.
