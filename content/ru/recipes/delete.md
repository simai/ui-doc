---
title: "Удаление"
description: "Как удалять по-разному в зависимости от того, кто потеряет и можно ли вернуть: сразу с «Вернуть», вопросом в строке или окном с вводом названия."
---

# Удаление

Как спросить перед удалением, зависит от двух вопросов: потеряет ли
удалённое кто-то ещё и можно ли его вернуть. Своё и обратимое удаляется
сразу, а уведомление даёт «Вернуть». Общее спрашивают в той же строке. То,
что нельзя вернуть и что задевает многих, спрашивают окном: последствия,
решающая фраза и название, которое нужно ввести.

## Пример

### Своё — без вопроса

Удалите фильтр через «⋯»: он пропадёт сразу, а в углу появится
уведомление с «Вернуть».

:::example {id="recipes/delete/own" label="Свой фильтр" preview=sandbox log="sf-list-apply sf-toast-action" log_console=true log_open=false}
:::

### Общее — вопрос в строке

Нажмите корзину: строка превратится в вопрос. «Отмена» вернёт строку и
поставит фокус на корзину.

:::example {id="recipes/delete/shared" label="Файл проекта" preview=sandbox log="sf-confirm-answer" log_console=true log_open=false}
:::

### Нельзя вернуть — окно

Нажмите «Удалить сайт», затем красную кнопку, не вводя название: курсор
встанет в поле, и под ним появится объяснение.

:::example {id="recipes/delete/final" label="Удаление сайта" preview=sandbox log="sf-modal-open sf-modal-closed" log_console=true log_open=false}
:::

## Когда брать

| Что удаляют | Как спросить |
|:---|:---|
| Своё и обратимое: свой фильтр, черновик, свой вид таблицы | Не спрашивать. Удалить сразу, уведомление с «Вернуть» |
| Общее: файл проекта, комментарий, участник | Вопрос в строке, где нажали «Удалить» |
| Нельзя вернуть или задевает многих: сайт, база, все данные | Окно: последствия, «Вернуть будет нельзя», ввод названия |

Опасное действие, которое не удаляет, — остановить сайт, сбросить настройки
— спрашивают так же, по тем же двум вопросам.

## Из чего собрано

| Часть | Компонент | Как задано |
|:---|:---|:---|
| «Удалить» в меню строки | [Список](/ru/smart/content/list/) | действие `{id: 'delete', destructive: true}` в `actions` |
| «Вернуть» | [Уведомление](/ru/smart/feedback/toast/) | `title` называет удалённое, `action-text="Вернуть"`, `duration="8000"` |
| Корзина в строке | [Кнопка с иконкой](/ru/smart/actions/icon-buttons/) | `icon="delete"` `appearance="ghost"` `scheme="on-surface-variant"`, `aria-label` с названием |
| Вопрос в строке | [Подтверждение](/ru/smart/actions/confirm/) | `question` называет, что удалится и у кого; `status="danger"`, `accept-text="Удалить"` |
| Кнопка, открывающая окно | [Кнопка](/ru/smart/actions/buttons/) | `status="danger"` `appearance="outline"`, `data-sf-modal-open` |
| Окно | [Окно](/ru/smart/overlays/modal/) | `heading` — вопрос с названием; форма в `slot="content"`, `show-footer="false"` |
| Последствия | плашка | `bg-surface-container radius-surface p-1`; решающая фраза — отдельной строкой `weight-5` |
| Ввод названия | [Текстовое поле](/ru/smart/forms/inputs/) | подпись «Чтобы подтвердить, введите …», `error-message` объясняет раннее нажатие |
| Ответы окна | [Кнопка](/ru/smart/actions/buttons/) | красная залитая `status="danger"` первой, затем «Отмена» `appearance="ghost"` `scheme="on-surface"` |

## Как делать

:::example {id="recipes/delete/do-dont" label="Как делать"}
:::

- **Вопрос называет, что удалится.** «Удалить «Смета на декабрь.xlsx»?» —
  человек видит, о чём его спрашивают. «Вы уверены?» с кнопкой
  «Подтвердить» подтверждают не читая.
- **Удаление — красное, ошибка — тоже красная, но это разные слова.** У
  кнопок и пунктов меню опасное — `status="danger"`; у поля, сообщения и
  уведомления — `error`.
- **Своё не спрашивают.** Вопрос там, где удалённое можно просто вернуть,
  приучает нажимать «Удалить» не глядя — и тогда вопрос не спасает там, где
  он нужен.
- **Красная кнопка окна всегда залита.** Она не выключается, пока название
  не введено: нажатая раньше, она ставит курсор в поле и объясняет, что
  нужно.

## Копия для ИИ

```html
<!-- Рецепт SIMAI Framework «Удаление», выпуск ui-b4a77681f0a7.
Правила:
1. Выберите ступень по двум вопросам: потеряет ли кто-то ещё и можно ли вернуть.
2. Своё и обратимое — без вопроса: удалить сразу и показать sf-toast с title «… удалён», action-text="Вернуть", duration="8000"; sf-toast-action возвращает запись.
3. Общее — sf-confirm на месте строки: question называет объект и кого заденет, status="danger", accept-text="Удалить"; «Отмена» возвращает строку и фокус на корзину.
4. Нельзя вернуть — sf-modal: heading — вопрос с названием; форма в slot="content", show-footer="false"; последствия на плашке bg-surface-container radius-surface p-1; «Вернуть будет нельзя» отдельной строкой weight-5; поле «Чтобы подтвердить, введите <название>».
5. Красная кнопка окна — sf-button native-type="submit" status="danger", залитая, первой; затем «Отмена» appearance="ghost" scheme="on-surface" data-sf-modal-close. Раньше времени — invalid у поля и фокус в него.
6. Окно показывает копию своей формы: слушатели submit и input ставьте на document.
7. Кнопки и пункты меню — status="danger"; поля и сообщения — error. Никогда «Вы уверены?». -->
<div data-sf-overlay-container data-sf-density="compact">
  <sf-button status="danger" appearance="outline" icon-start="delete" text="Удалить сайт" data-sf-modal-open="delete-site"></sf-button>
  <sf-modal modal-id="delete-site" heading="Удалить сайт shop-example?" show-footer="false" width="var(--sf-g4)">
    <form slot="content" data-delete-form class="flex flex-col" novalidate>
      <div class="bg-surface-container radius-surface p-1 flex flex-col gap-1/2">
        <p class="m-0">Удалятся сайт, 3 базы данных, 1,2 ГБ файлов и 14 резервных копий.</p>
        <p class="m-0 weight-5">Вернуть будет нельзя.</p>
      </div>
      <div class="m-top-2"><sf-input name="confirm" label="Чтобы подтвердить, введите shop-example" autocomplete="off" error-message="Введите shop-example — так вы подтверждаете удаление"></sf-input></div>
      <div class="m-top-3 flex flex-wrap gap-2">
        <sf-button native-type="submit" status="danger" text="Удалить сайт"></sf-button>
        <sf-button appearance="ghost" scheme="on-surface" text="Отмена" data-sf-modal-close="delete-site"></sf-button>
      </div>
    </form>
  </sf-modal>
</div>
<script type="module">
  document.addEventListener('submit', async (event) => {
    const form = event.target;
    if (!form.matches?.('[data-delete-form]')) return;
    event.preventDefault();
    const field = form.querySelector('sf-input[name="confirm"]');
    if (String(field.value ?? '').trim() !== 'shop-example') { field.setAttribute('invalid', ''); field.focus(); return; }
    await fetch('/sites/shop-example/', {method: 'DELETE'});
    document.querySelector('sf-modal[modal-id="delete-site"]').close();
  });
</script>
```

> **Что ещё в пути.** Окно опасного вопроса в своём размере (28rem, в
> компактной плотности 26rem), с полем окна и промежутками, которые растут к
> ответам, с крестиком на поле окна и выездом снизу на телефоне; вопрос
> `sf-confirm` с плашкой последствий и обязательным вводом названия — всё
> это приходит с ближайшими выпусками Framework. Пока ширину окна задаёт
> `width`, а плашку собирает страница. Как это будет выглядеть, показывает
> [прототип окна опасного вопроса](/proto/modal-look.html).

## См. также

- [Список записей](/ru/recipes/resource-list/)
- [Карточка записи](/ru/recipes/record-card/) — «Удалить» в меню «⋯»
