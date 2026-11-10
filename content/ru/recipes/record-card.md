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
показывайте [Плитками сводки](/ru/recipes/dashboard/).

## Из чего собрано

| Часть | Компонент | Как задано |
|:---|:---|:---|
| Путь и название | [Заголовок страницы](/ru/smart/composite/page-header/) | `heading` — название записи; путь — [Хлебные крошки](/ru/smart/navigation/breadcrumbs/) в слоте `path`, последний пункт без ссылки |
| Переход на сайт | [Кнопка](/ru/smart/actions/buttons/) | `appearance="outline"` `scheme="on-surface"`, `href` |
| Остальные действия | [Кнопка с иконкой](/ru/smart/actions/icon-buttons/) и [Контекстное меню](/ru/smart/navigation/context-menu/) | `icon="more_horiz"`, `aria-label`, `aria-haspopup="menu"`; опасный пункт — `danger: true`, последним |
| Раздел | [Карточка](/ru/components/content/card/) | `section.sf-card` с заголовком `h2` и кнопкой «Изменить» `appearance="ghost"` `scheme="on-surface"` |
| Сведения | [Список сведений](/ru/smart/content/list-description/) | `empty-text="Не указан"`; состояние — `status` у строки, путь — `mono` и `copy` |
| История | [Хронология](/ru/smart/content/list-timeline/) | `size="1/2"`, события новые сверху |

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
<!-- Рецепт SIMAI Framework «Карточка записи», выпуск ui-b4a77681f0a7.
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

> **Что ещё в пути.** Карточка записи с разделами в одной колонке подписей
> на всю страницу, значениями-бейджами, знаком справки у подписи,
> действием «Указать» у пустого значения и кнопкой «Копировать», видной
> всегда, приходит с новой версией списка сведений. Пока каждый раздел —
> свой список сведений, и колонка подписей у каждого своя. Как это будет
> выглядеть, показывает [прототип карточки записи](/proto/list-description.html).

## См. также

- [Список записей](/ru/recipes/resource-list/) — откуда открывается карточка
- [Форма настроек](/ru/recipes/settings-form/) — то, что открывает «Изменить»
- [Удаление](/ru/recipes/delete/) — пункт «Удалить» в меню «⋯»
