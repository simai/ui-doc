---
title: "Карточка записи"
description: "Страница одной записи: путь назад к списку, заголовок с действиями, сведения парами «подпись — значение» и история изменений."
---

# Карточка записи

Страница, которую открывает строка списка: всё об одной записи — сайте,
заказе, пользователе. Сверху путь обратно к списку и действия с записью,
ниже сведения парами «подпись — значение» в карточке с кнопкой «Изменить»
и история: что с записью происходило.

## Пример

Меню «⋯» в заголовке держит остальные действия, опасное — последним, за
линией. На узком экране история встаёт под сведения.

:::example {id="recipes/record-card/overview" label="Сайт" preview=sandbox log="sf-menu-context-select" log_console=true log_open=false}
:::

## Когда брать

- Человек пришёл посмотреть одну запись и, может быть, поправить её.
- Сведения короткие: адрес, тип, срок, ответственный, сумма.

Когда запись правят часто и по одному полю, берите
[Свойства записи](/ru/pro/admin/property-view/): там каждое значение
правится на месте. Сводку из двух-четырёх чисел без подписей в колонке
показывайте [Плитками сводки](/ru/recipes/notify/dashboard/).

## Состояния

Пока запись грузится, на месте раздела — его заготовка той же высоты.
Пустое значение пишется словами «Не указан». Проблема — статус у строки
сведений с коротким пояснением. Если записи нет или к ней нет доступа —
пустое состояние, которое говорит, что делать.

:::example {id="recipes/record-card/states" label="Состояния" preview=sandbox}
:::

## На телефоне

На телефоне разделы идут друг под другом в одну колонку, история — после
сведений. В заголовке остаётся меню «⋯», «Изменить» — значком у раздела.
Откройте пример во весь экран и выберите ширину телефона.

:::example {id="recipes/record-card/phone" label="Телефон" preview=sandbox}
:::

## Плотность

Карточка в админке — в компактной плотности: `data-sf-density="compact"`
на корне экрана опускает строки сведений и кнопки на ступень.

:::example {id="recipes/record-card/density" label="Плотность" preview=sandbox}
:::

## Из чего собрано

| Часть | Компонент | Как задано |
|:---|:---|:---|
| Путь и название | [Заголовок страницы](/ru/smart/composite/page-header/) | `heading` — название записи; путь — [Хлебные крошки](/ru/smart/navigation/breadcrumbs/) в слоте `path`, последний пункт без ссылки |
| Переход на сайт | [Кнопка](/ru/smart/actions/buttons/) | `appearance="outline"` `scheme="on-surface"`, `href` |
| Остальные действия | [Кнопка с иконкой](/ru/smart/actions/icon-buttons/) и [Контекстное меню](/ru/smart/navigation/context-menu/) | `icon="more_horiz"`, `aria-label`, `aria-haspopup="menu"`; опасный пункт — `danger: true`, последним |
| Раздел | [Карточка](/ru/components/content/card/) | `section.sf-card` с заголовком `h2` и кнопкой «Изменить» `appearance="ghost"` `scheme="on-surface"` |
| Сведения | [Список сведений](/ru/smart/content/list-description/) | `empty-text="Не указан"`; состояние — `status` у строки, путь — `mono` и `copy` |
| История | [Хронология](/ru/smart/content/list-timeline/) | `size="1/2"`, события новые сверху |

## Доступность

- Разделы — `section` с заголовком `h2`; карточка читается по заголовкам.
- Сведения — список «подпись — значение»: диктор читает пару целиком;
  статус строки звучит словами, а не цветом.
- Кнопка «⋯» называется «Ещё действия с сайтом» и сообщает, что открывает
  меню; опасный пункт — последним.
- Путь кнопкой копирования объявляет «Скопировано».
- Путь клавиатуры: путь страницы → «Открыть сайт» → «⋯» → «Изменить» →
  строки сведений с действиями.

## Как делать

:::example {id="recipes/record-card/do-dont" label="Как делать"}
:::

- **Пустое — словами.** Пустое значение пишется «Не указан»: прочерк
  читается как «не загрузилось».
- **Сведения — текстом.** Карточка записи показывает значения текстом;
  править их — по кнопке «Изменить» у раздела. Поля «только для чтения»
  выглядят как форма, которую нельзя заполнить.
- **Сведения не в таблицу с рамками.** Пары «подпись — значение» — это
  список сведений, а не таблица: рамки между ячейками делят то, что читается
  одной строкой.
- **Одна кнопка-ссылка, остальное в «⋯».** В заголовке — переход и меню;
  «Удалить» не стоит отдельной красной кнопкой рядом с «Изменить».

## Копия для ИИ

```html
<!-- Рецепт SIMAI Framework «Карточка записи», выпуск ui-994f9db407fa.
Правила:
1. Корень экрана админки — data-sf-density="compact".
2. sf-header-page: heading — название записи; sf-breadcrumbs в slot="path", последний пункт без href.
3. В slot="actions": переход — sf-button appearance="outline" scheme="on-surface" href; остальное — sf-button-icon icon="more_horiz" с aria-label и aria-haspopup="menu", открывает sf-menu-context popup; опасный пункт — danger: true, последним, после separator.
4. Раздел — section.sf-card: h2 class="m-0 text-1 weight-6" и sf-button appearance="ghost" scheme="on-surface" icon-start="edit" text="Изменить".
5. Сведения — sf-list-description empty-text="Не указан"; состояние — status у строки; путь и ключ — mono и copy. Не поля readonly и не таблица с рамками.
6. История — sf-list-timeline size="1/2" рядом со сведениями (md:grid-col-3, сведения md:col-span-2), на узком экране под ними. -->
<div data-sf-density="compact">
  <div class="flex flex-col gap-3">
    <sf-header-page heading="Магазин «Северный ветер»">
      <sf-breadcrumbs slot="path" aria-label="Путь к странице" items='[{"label":"Сайты","href":"/sites/"},{"label":"Магазин «Северный ветер»"}]'></sf-breadcrumbs>
      <sf-button slot="actions" appearance="outline" scheme="on-surface" icon-start="open_in_new" text="Открыть сайт" href="https://nord-wind.ru/"></sf-button>
      <sf-button-icon slot="actions" id="record-more" icon="more_horiz" appearance="outline" scheme="on-surface" aria-label="Ещё действия с сайтом" aria-haspopup="menu"></sf-button-icon>
    </sf-header-page>
    <sf-menu-context id="record-menu" popup aria-label="Действия с сайтом"></sf-menu-context>
    <div class="grid grid-col-1 md:grid-col-3 gap-3 items-cross-start">
      <section class="sf-card md:col-span-2" aria-labelledby="record-facts">
        <div class="flex items-cross-center gap-2">
          <h2 id="record-facts" class="flex-1 m-0 text-1 weight-6">Сведения</h2>
          <sf-button appearance="ghost" scheme="on-surface" icon-start="edit" text="Изменить"></sf-button>
        </div>
        <sf-list-description empty-text="Не указан">
          <script type="application/json" data-sf-settings>{"items": [
            {"label": "Адрес", "value": "nord-wind.ru", "href": "https://nord-wind.ru/"},
            {"label": "Сертификат", "value": "Действует до 14 декабря", "status": "success"},
            {"label": "Корень сайта", "value": "/var/www/nord-wind/public", "mono": true, "copy": true},
            {"label": "Ответственный", "value": ""}
          ]}</script>
        </sf-list-description>
      </section>
      <section class="sf-card" aria-labelledby="record-history">
        <h2 id="record-history" class="m-0 text-1 weight-6">История</h2>
        <sf-list-timeline size="1/2" label="История сайта">
          <script type="application/json" data-sf-settings>{"items": [
            {"id": "h1", "time": "2026-11-10T04:00:00+03:00", "status": "success", "title": "Резервная копия создана"}
          ]}</script>
        </sf-list-timeline>
      </section>
    </div>
  </div>
</div>
<script type="module">
  const anchor = document.querySelector('#record-more');
  const menu = document.querySelector('#record-menu');
  await customElements.whenDefined('sf-menu-context');
  menu.entries = [
    {id: 'stop', text: 'Остановить', icon: 'pause_circle'},
    {type: 'separator'},
    {id: 'delete', text: 'Удалить сайт', icon: 'delete', danger: true},
  ];
  anchor.addEventListener('click', () => menu.toggleFor({anchor}));
</script>
```

Каждый раздел — свой список сведений, и колонка подписей у каждого своя.

## См. также

- [Список записей](/ru/recipes/find/resource-list/) — откуда открывается карточка
- [Форма настроек](/ru/recipes/edit/settings-form/) — то, что открывает «Изменить»
- [Удаление](/ru/recipes/remove/delete/) — пункт «Удалить» в меню «⋯»
