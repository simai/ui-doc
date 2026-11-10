---
title: "Список уведомлений"
description: "Уведомления под колокольчиком в шапке: число непрочитанных, список по дням, отметка «Новое», «Прочитать все» и отбор непрочитанных."
---

# Список уведомлений

То, что случилось без человека и ждёт его: новый заказ, отзыв, неудачная
копия. Колокольчик в шапке считает непрочитанные, по нажатию открывается
панель со списком по дням. Непрочитанное отмечено словом «Новое»; открытая
строка становится прочитанной, «Прочитать все» читает всё сразу.

## Пример

Откройте строку — отметка «Новое» уйдёт, число на колокольчике уменьшится.
«Непрочитанные» оставит только непрочитанное; панель закрывается нажатием
снаружи и снова открывается колокольчиком.

:::example {id="recipes/notifications/overview" label="Уведомления" preview=sandbox log="sf-list-open change" log_console=true log_open=false}
:::

## Когда брать

- События приходят без участия человека, и он должен узнать о них, даже если
  его не было на экране.
- Их нужно прочитать позже, а не только увидеть в момент прихода.

Результат того, что человек только что сделал сам, — «Сохранено»,
«Удалено», — это [Уведомление](/ru/smart/feedback/toast/) в углу, а не
строка списка. Проблема, которую надо чинить, — строка
[«Требует внимания»](/ru/recipes/dashboard/) на обзоре.

## Из чего собрано

| Часть | Компонент | Как задано |
|:---|:---|:---|
| Колокольчик | [Кнопка с иконкой](/ru/smart/actions/icon-buttons/) | `icon="notifications"` `appearance="ghost"` `scheme="on-surface"`; `badge-count` — непрочитанные, `badge-label` — то же словами |
| Панель | [Поповер](/ru/smart/overlays/popover/) | колокольчик в `slot="trigger"`, панель в `slot="content"`, `width="min(var(--sf-g4), calc(100vw - var(--sf-space-4)))"`, `placement="bottom-end"`; колокольчик — последний в строке: поповер не сдвигается к экрану сам, и панель, открытая от края, на телефоне помещается только так |
| Шапка панели | заголовок `h2` и [Кнопка](/ru/smart/actions/buttons/) | «Прочитать все» `appearance="ghost"` `scheme="on-surface"` `size="1/2"`, выключена, когда читать нечего |
| Отбор | [Сегментный переключатель](/ru/smart/actions/segmented/) | `size="1/2"` `full-width`, у «Непрочитанные» — `count` |
| Строки | [Список](/ru/smart/content/list/) | `group-by="day"` `size="1/2"`; у строки `text` — что случилось, `supporting` — с чем, `date`; непрочитанная — `badge: {text: 'Новое', tone: 'info'}` |
| Прокрутка | обёртка | `max-h-g4 overflow-auto`: шапка панели стоит, прокручиваются строки |

## Как делать

:::example {id="recipes/notifications/do-dont" label="Как делать"}
:::

- **Число — только непрочитанное.** Колокольчик с «128» за все дни
  перестают замечать; число падает до нуля, когда всё прочитано.
- **Строка говорит, что случилось.** Заголовок — событие («Новый заказ
  1042»), вторая строка — с чем оно связано. Не «Уведомление» и не
  «Системное сообщение».
- **Новое — словом, не только цветом.** Отметка «Новое» видна и в
  чёрно-белом, и экранному диктору.
- **Список, а не уведомления в углу.** Уведомление в углу уходит само, и
  то, что человек не успел прочитать, пропадает.

## Копия для ИИ

```html
<!-- Рецепт SIMAI Framework «Список уведомлений», выпуск ui-b4a77681f0a7.
Правила:
1. Колокольчик — sf-button-icon icon="notifications" appearance="ghost" scheme="on-surface" aria-label="Уведомления"; badge-count — число непрочитанных, badge-label — то же словами; 0 — значка нет.
2. Панель — sf-popover label="Уведомления" placement="bottom-end" width="min(var(--sf-g4), calc(100vw - var(--sf-space-4)))": колокольчик в slot="trigger", панель в slot="content". Колокольчик — последний элемент строки, у её конечного края: поповер не сдвигается в пределы экрана, и только так панель помещается на телефоне.
3. Шапка панели: h2 class="flex-1 m-0 text-1 weight-6" и sf-button appearance="ghost" scheme="on-surface" size="1/2" «Прочитать все» (disabled, когда нечего читать); под ней sf-segmented size="1/2" full-width «Все / Непрочитанные» с count.
4. Строки — sf-list group-by="day" size="1/2" в обёртке max-h-g4 overflow-auto: text — что случилось, supporting — с чем, date — ISO; непрочитанная — badge {text: 'Новое', tone: 'info'}.
5. sf-list-open: открыть событие и отметить прочитанным; пересчитать badge-count и count.
6. Результат действия самого человека — sf-toast, не строка этого списка. -->
<sf-popover label="Уведомления" placement="bottom-end" width="min(var(--sf-g4), calc(100vw - var(--sf-space-4)))">
  <sf-button-icon slot="trigger" icon="notifications" appearance="ghost" scheme="on-surface" badge-count="2" badge-label="2 непрочитанных" aria-label="Уведомления"></sf-button-icon>
  <div slot="content" class="flex flex-col">
    <div class="flex items-cross-center gap-2 p-x-2 p-top-2 p-bottom-1">
      <h2 class="flex-1 m-0 text-1 weight-6">Уведомления</h2>
      <sf-button appearance="ghost" scheme="on-surface" size="1/2" text="Прочитать все"></sf-button>
    </div>
    <div class="p-x-2 p-bottom-1">
      <sf-segmented size="1/2" full-width aria-label="Какие уведомления показать" value="all" items='[{"value":"all","label":"Все"},{"value":"unread","label":"Непрочитанные","count":2}]'></sf-segmented>
    </div>
    <div class="max-h-g4 overflow-auto p-x-1 p-bottom-1">
      <sf-list id="notifications" label="Уведомления" group-by="day" size="1/2" empty-text="Непрочитанных нет"></sf-list>
    </div>
  </div>
</sf-popover>
<script type="module">
  await customElements.whenDefined('sf-list');
  document.querySelector('#notifications').setItems({items: [
    {id: 'n1', text: 'Новый заказ 1042', supporting: 'Анна Белова · 3 490 ₽', icon: 'shopping_bag', date: '2026-11-10T09:41:00+03:00', badge: {text: 'Новое', tone: 'info'}},
    {id: 'n2', text: 'Оплачен заказ 1039', supporting: 'Олег Сафин · 6 750 ₽', icon: 'payments', date: '2026-11-09T11:30:00+03:00'},
  ], options: {hasMore: false}});
</script>
```

## См. также

- [Обзор с плитками](/ru/recipes/dashboard/) — проблемы, которые надо чинить
- [Удаление](/ru/recipes/delete/) — уведомление с «Вернуть»
