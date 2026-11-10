---
title: "Фильтры в шторке"
description: "Отбор списка по нескольким признакам: кнопка «Фильтры», боковая панель с флажками и вариантами, кнопка с числом найденного и выбранные фильтры тегами над списком."
---

# Фильтры в шторке

Когда список отбирают по нескольким признакам сразу — статус, доставка,
ответственный, — фильтры убирают в боковую панель. Список остаётся виден
рядом, кнопка панели заранее говорит, сколько записей покажет, а выбранные
фильтры стоят тегами над списком: каждый снимается одним нажатием.

## Пример

Нажмите «Фильтры», отметьте «Оплачен» и «Курьером»: кнопка панели
пересчитает заказы. «Показать» применит фильтры и закроет панель; теги над
списком снимают их по одному.

:::example {id="recipes/filter-drawer/overview" label="Заказы" preview=sandbox log="sf-tag-close sf-drawer-opened sf-drawer-closed" log_console=true log_open=false}
:::

## Когда брать

- Признаков для отбора три и больше, и их комбинируют.
- Список длинный, а фильтры меняют не каждую минуту.

Один признак с двумя-пятью значениями — это
[Сегментный переключатель](/ru/smart/actions/segmented/) над списком, как в
[Списке записей](/ru/recipes/resource-list/). Отбор, который человек
сохраняет и выбирает снова, — сохранённый вид в
[Представлении данных](/ru/pro/admin/table/).

## Из чего собрано

| Часть | Компонент | Как задано |
|:---|:---|:---|
| Поиск | [Текстовое поле](/ru/smart/forms/inputs/) | `input-type="search"`, `icon-start="search"`, `aria-label` |
| Кнопка «Фильтры» | [Кнопка](/ru/smart/actions/buttons/) | `appearance="outline"` `scheme="on-surface"` `icon-start="filter_list"`, `data-drawer="toggle"`, `aria-controls` — `id` панели |
| Панель | [Шторка](/ru/smart/overlays/drawer/) | `modal="false"` `placement="inline-end"` `size="1/2"`, `heading="Фильтры"` |
| Признак из нескольких | [Флажок](/ru/smart/forms/checkbox/) | в `fieldset` с `legend` |
| Признак из одного | [Радиокнопки](/ru/smart/forms/radio/) | в `fieldset`, первый вариант — «Любая» |
| Ответы панели | [Кнопка](/ru/smart/actions/buttons/) | «Показать N заказов» — вид по умолчанию, число пересчитывается при каждом выборе; «Сбросить» — `appearance="ghost"` `scheme="on-surface"` |
| Выбранные фильтры | [Тег](/ru/smart/content/tags/) | `kind="default"` `closable`, `close-label` с названием; за ними «Сбросить все» `appearance="ghost"` `size="1/2"` |
| Ничего не подошло | [Пустое состояние](/ru/smart/feedback/empty-state/) | в слоте `empty` списка, `kind="nothing-found"`, действие «Сбросить фильтры» |

## Как делать

:::example {id="recipes/filter-drawer/do-dont" label="Как делать"}
:::

- **Выбранное видно.** Фильтры, которые сейчас действуют, стоят тегами над
  списком. Без них человек не понимает, почему записей мало.
- **Кнопка считает заранее.** «Показать 3 заказа» говорит, что будет после
  нажатия, и «Заказов нет» — что нажимать незачем. «Применить» вслепую
  открывает пустой список.
- **Ответы не равны.** «Показать» — главная, «Сбросить» — тихая.
- **Панель не прячет список.** Панель немодальная (`modal="false"`): список
  виден рядом, а не под затемнением.

## Копия для ИИ

```html
<!-- Рецепт SIMAI Framework «Фильтры в шторке», выпуск ui-b4a77681f0a7.
Правила:
1. Панель — sf-drawer modal="false" placement="inline-end" size="1/2" heading="Фильтры"; кнопка — sf-button appearance="outline" scheme="on-surface" icon-start="filter_list" data-drawer="toggle" aria-controls="<id панели>".
2. Признак из нескольких значений — sf-checkbox в fieldset с legend; из одного — sf-radio в fieldset, первый вариант «Любой».
3. Ответы в конце панели: «Показать N <записей>» (вид по умолчанию, N пересчитывается при каждом выборе; при нуле — «<Записей> нет») и «Сбросить» appearance="ghost" scheme="on-surface". Не «Применить».
4. Применённые фильтры — над списком: sf-tag kind="default" closable с close-label, затем sf-button appearance="ghost" scheme="on-surface" size="1/2" «Сбросить все». Нет фильтров — ряда нет.
5. Ничего не подошло — sf-empty-state slot="empty" kind="nothing-found" с действием «Сбросить фильтры».
6. Панель может перенести своё содержимое: ищите поля в момент события, слушатели — на document. -->
<div data-sf-overlay-container data-sf-density="compact">
  <div class="flex flex-wrap gap-2 items-cross-center">
    <sf-input root-class="flex-1 min-w-0" input-type="search" icon-start="search" placeholder="Номер или покупатель" aria-label="Поиск по заказам"></sf-input>
    <sf-button appearance="outline" scheme="on-surface" icon-start="filter_list" text="Фильтры" data-drawer="toggle" aria-controls="orders-filters"></sf-button>
  </div>
  <div class="flex flex-wrap gap-1 items-cross-center" role="group" aria-label="Выбранные фильтры">
    <sf-tag kind="default" closable text="Оплачен" close-label="Убрать фильтр «Оплачен»"></sf-tag>
    <sf-button appearance="ghost" scheme="on-surface" size="1/2" text="Сбросить все"></sf-button>
  </div>
  <sf-list id="orders" label="Заказы">
    <sf-empty-state slot="empty" kind="nothing-found" size="1/2" text="По этим фильтрам заказов нет."></sf-empty-state>
  </sf-list>
  <sf-drawer id="orders-filters" modal="false" placement="inline-end" size="1/2" heading="Фильтры">
    <form id="filters-form" class="flex flex-col gap-3">
      <fieldset class="border-0 p-0 m-0 flex flex-col gap-1">
        <legend class="p-0 m-bottom-1 weight-6">Статус</legend>
        <sf-checkbox name="status" value="new" label="Новый"></sf-checkbox>
        <sf-checkbox name="status" value="paid" label="Оплачен" checked></sf-checkbox>
      </fieldset>
      <fieldset class="border-0 p-0 m-0 flex flex-col gap-1">
        <legend class="p-0 m-bottom-1 weight-6">Доставка</legend>
        <sf-radio name="delivery" value="any" label="Любая" checked></sf-radio>
        <sf-radio name="delivery" value="courier" label="Курьером"></sf-radio>
      </fieldset>
      <div class="flex flex-wrap gap-2">
        <sf-button id="filters-apply" text="Показать 3 заказа"></sf-button>
        <sf-button id="filters-clear" appearance="ghost" scheme="on-surface" text="Сбросить"></sf-button>
      </div>
    </form>
  </sf-drawer>
</div>
```

> **Что ещё в пути.** Сохранённые наборы фильтров — «Мои заказы за
> неделю», «Без ответа больше дня» — выбираются в одном блоке представлений,
> который приходит с набором компонентов `view`. Как он выглядит, показывает
> [прототип представлений](/proto/view-presets.html).

## См. также

- [Список записей](/ru/recipes/resource-list/) — отбор по одному признаку
- [Пустой раздел и первое действие](/ru/recipes/empty-state/)
