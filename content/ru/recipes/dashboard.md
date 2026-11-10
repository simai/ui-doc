---
title: "Обзор с плитками"
description: "Первый экран админки: сначала то, что требует внимания, затем три-четыре главных числа плитками со сравнением и последние события."
---

# Обзор с плитками

Первый экран раздела или всей админки. Он отвечает на два вопроса по
порядку: «что-то сломалось?» и «как идут дела?». Сверху — список того, что
требует внимания; когда всё в порядке, его нет совсем. Ниже три-четыре
главных числа плитками, у каждого — сравнение с прошлым периодом; цвет у
плитки появляется, только когда перейдён порог. Внизу — последние события.

## Пример

Нажмите «Продлить» — проблема уйдёт из списка. Плитки и «Открыть копии»
ведут к своим отчётам: пример пишет переход в журнал.

:::example {id="recipes/dashboard/overview" label="Обзор магазина" preview=sandbox log="sf-list-attention-apply" log_console=true log_open=false}
:::

## Когда брать

- Раздел, в который заходят каждый день, чтобы проверить, всё ли в порядке.
- Чисел, за которыми следят, немного — до четырёх в ряд.

Если человеку нужно видеть, что проверка прошла, поставьте списку
`empty="line"`: без проблем он покажет одну тихую строку «Всё в порядке».

Отчёт, в котором сравнивают много чисел за период, — это таблица или
график, а не плитки. Сведения об одной записи — [Карточка записи](/ru/recipes/record-card/).

## Из чего собрано

| Часть | Компонент | Как задано |
|:---|:---|:---|
| Заголовок | [Заголовок страницы](/ru/smart/composite/page-header/) | `heading="Обзор"` и путь к тому, что обозревают |
| Проблемы | [Требует внимания](/ru/smart/feedback/list-attention/) | на странице как есть, не в карточке: пустой список места не занимает; у проблемы `status`, `title`, одно `action` |
| Числа | [Плитка показателя](/ru/smart/content/tile-metric/) | в `div.sf-tile-metric-grid`, ширина колонки — `--sf-tile-metric-min-width` (здесь `var(--sf-f6)`: четыре плитки встают по две, а не три и одна); `previous` и `period-text` — сравнение; `max`, `warning-at`, `error-at` — порог; `href` — отчёт |
| События | [Хронология](/ru/smart/content/list-timeline/) в [Карточке](/ru/components/content/card/) | `size="1/2"` `density="compact"` `group="none"` |

## Так и не так

:::example {id="recipes/dashboard/do-dont" label="Так и не так"}
:::

- **Цвет — сигнал.** Плитка окрашивается сама, когда число переходит порог
  (`warning-at`, `error-at`). Зелёная плитка с «Всё хорошо» на каждом числе
  приучает не смотреть на цвет.
- **Число со сравнением.** «214 заказов» ничего не говорит, «214, на 9 %
  меньше, чем на прошлой неделе» — говорит. Рост, который плох (нагрузка,
  ошибки, очередь), — `better="down"`.
- **Проблемы — одним списком.** Две-три проблемы — строки списка «Требует
  внимания», серьёзные первыми. Стопка цветных плашек над экраном сдвигает
  всё вниз, и каждая новая проблема двигает экран снова.
- **Не больше четырёх плиток в ряд.** Пятое число уже не главное — ему место
  в отчёте.

## Копия для ИИ

```html
<!-- Рецепт SIMAI Framework «Обзор с плитками», выпуск ui-b4a77681f0a7.
Правила:
1. Порядок: sf-header-page, sf-list-attention, ряд плиток, последние события.
2. sf-list-attention — на странице, не в карточке: без проблем он не рисуется. У проблемы status (error, warning, info), title, одно action: {label, href} или {label, event}.
3. Плитки — sf-tile-metric в div.sf-tile-metric-grid, до четырёх; --sf-tile-metric-min-width: var(--sf-f6), чтобы четыре плитки не вставали три и одна. У каждой previous и period-text; для лимитов — max, warning-at, error-at. Плохой рост — better="down". status вручную — только с hint о проблеме. href — отчёт.
4. События — sf-list-timeline size="1/2" density="compact" group="none" в section.sf-card с h2 class="m-0 text-1 weight-6".
5. Не стопка sf-alert над экраном и не зелёный статус на всех плитках. -->
<div data-sf-density="compact">
  <div class="flex flex-col gap-3">
    <sf-header-page heading="Обзор"></sf-header-page>
    <sf-list-attention label="Требует внимания">
      <script type="application/json" data-sf-settings>{"items": [
        {"id": "backup", "status": "error", "title": "Резервная копия не создана", "text": "Сегодня, 04:00 · нет места на диске", "action": {"label": "Открыть копии", "href": "/backups/"}}
      ]}</script>
    </sf-list-attention>
    <div class="sf-tile-metric-grid" style="--sf-tile-metric-min-width: var(--sf-f6)">
      <sf-tile-metric label="Посетители" value="12480" previous="11020" format="integer" period-text="к прошлой неделе" href="/reports/visitors/"></sf-tile-metric>
      <sf-tile-metric label="Заказы" value="214" previous="236" format="integer" period-text="к прошлой неделе" href="/reports/orders/"></sf-tile-metric>
      <sf-tile-metric label="Выручка" value="1284000" previous="1190000" format="currency-RUB" period-text="к прошлой неделе" href="/reports/revenue/"></sf-tile-metric>
      <sf-tile-metric label="Диск" value="91" max="100" format="integer" unit="ГБ" warning-at="80" error-at="95" hint="Копиям не хватает места" href="/disk/"></sf-tile-metric>
    </div>
    <section class="sf-card" aria-labelledby="overview-events">
      <h2 id="overview-events" class="m-0 text-1 weight-6">Последние события</h2>
      <sf-list-timeline size="1/2" density="compact" group="none" label="Последние события">
        <script type="application/json" data-sf-settings>{"items": [
          {"id": "e1", "time": "2026-11-10T11:42:00+03:00", "title": "Новый заказ 1042", "text": "3 490 ₽"}
        ]}</script>
      </sf-list-timeline>
    </section>
  </div>
</div>
```

> **Что ещё в пути.** У «Требует внимания» — бейджи серьёзности в шапке,
> строка «что · где · сколько длится», меню «⋯» с «Отложить» и «Не
> напоминать», строка «Проверено в …» и ссылка «Все проблемы (N)» —
> приходят с новой версией компонента. Как это будет выглядеть, показывает
> [прототип «Требует внимания»](/proto/list-attention.html).

## См. также

- [Карточка записи](/ru/recipes/record-card/)
- [Список уведомлений](/ru/recipes/notifications/) — события, адресованные человеку
