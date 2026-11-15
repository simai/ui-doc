---
title: "Сохранение и ошибки в форме"
description: "Как ответить на «Сохранить»: кнопка занята, пока идёт сохранение, короткое «Сохранено», сводка ошибок над формой с переходом к первой, число ошибок на вкладках и чужая правка."
---

# Сохранение и ошибки в форме

Запись правят долго и в нескольких вкладках. После «Сохранить» человек
должен сразу понять: сохранилось или нет, где первая ошибка и не правил ли
запись кто-то ещё. Пока идёт сохранение, кнопка занята. Успех — короткое
«Сохранено» в углу. Ошибки — сводкой над формой, текстом у каждого поля и
числом на вкладке. Чужая правка — уведомлением с двумя ответами.

## Пример

Выберите, что ответит сервер, и нажмите «Сохранить». При трёх ошибках фокус
встанет на сводку, «К первой ошибке» откроет вкладку и поставит курсор в
поле.

:::example {id="recipes/save-and-errors/overview" label="Новость" preview=sandbox log="sf-alert-action sf-tabs-change sf-notification" log_console=true log_open=false}
:::

## Когда брать

| Если | Так |
|:---|:---|
| Запись сохраняется кнопкой «Сохранить», а не на лету | Этот рецепт |
| Полей много, они разложены по вкладкам | Этот рецепт с числом ошибок на вкладках |
| Запись могут править двое одновременно | Этот рецепт с чужой правкой |

Не берите, когда:

- настройка применяется сразу (переключатель, вид таблицы) — ответ
  «Сохранено» не нужен;
- форма в одно поле (поиск, подписка) — ошибка у поля, без сводки;
- шагов много и порядок важен — мастер по шагам ([Шаги](/ru/smart/navigation/steps/)).

## Из чего собрано

| Часть | Компонент | Как задано |
|:---|:---|:---|
| Сводка над формой «Не сохранено: N ошибок» с переходом к первой (от двух ошибок) | [Уведомление](/ru/smart/feedback/alert/) | `status="error"`, `action-text="К первой ошибке"`; фокус на сводку |
| Число ошибок на вкладке | [Вкладки](/ru/smart/navigation/tabs/) | `items[].errors`, переход — `goToError()` |
| Ошибка у поля — красная рамка и текст под полем | [Текстовое поле](/ru/smart/forms/inputs/) | `invalid`, `error-message` |
| «Сохранить» не выключается; пока идёт — занята | [Кнопка](/ru/smart/actions/buttons/) | `loading` |
| «Отмена» — тихая, через 8 | [Кнопка](/ru/smart/actions/buttons/) | `appearance="ghost"` `scheme="on-surface"` |
| «Есть несохранённые изменения» под кнопками | строка страницы | `text-1/2 color-on-surface-variant` |
| Ответ сервера: успех уходит сам, «не сохранено» — до крестика | [`SF.notify`](/ru/guide/functions/actions/notify/) | `status`, `title`, `action`; ошибка — `duration: 0` |
| Чужая правка — уведомление над формой с двумя ответами | [Уведомление](/ru/smart/feedback/alert/) | `status="warning"`, «Показать её версию» — `action-text`, «Сохранить мою» — `secondary-action-text` |

## Состояния

:::example {id="recipes/save-and-errors/states" label="Состояния" preview=sandbox}
:::

Новая запись открывается с пустыми полями; ошибки появляются только после
первого «Сохранить», а не во время ввода.

## На телефоне

Одна колонка; вкладки делят строку поровну; кнопки под формой в одну
строку. Откройте пример во весь экран и выберите ширину телефона.

:::example {id="recipes/save-and-errors/phone" label="Телефон" preview=sandbox}
:::

## Плотность

Форма записи в админке — в компактной плотности: `data-sf-density="compact"`
на корне экрана сдвигает поля, вкладки и кнопки на ступень вниз вместе.

:::example {id="recipes/save-and-errors/density" label="Плотность" preview=sandbox}
:::

## Тексты

| Случай | Так | Не так |
|:---|:---|:---|
| Успех | «Сохранено» | «Данные успешно сохранены!» |
| Сводка | «Не сохранено: 3 ошибки» · «К первой ошибке» | «Форма заполнена неверно» |
| Поле | «Только латинские буквы, цифры и дефис.» | «Неверный формат» |
| Чужая правка | «Запись изменила Анна Котова в 14:32» · «Показать её версию» · «Сохранить мою» | «Конфликт версий (409)» |
| Нет связи | «Не сохранено: нет связи. Изменения остались в форме.» · «Повторить» | «Network error» |

## Доступность

- После неудачного «Сохранить» фокус уходит на сводку (от двух ошибок) или
  в единственное поле с ошибкой.
- Поле с ошибкой отмечено как неверное, текст ошибки связан с полем и
  читается вместе с ним.
- Вкладка читается с числом: «Поиск, 2 ошибки».
- Занятая кнопка объявляет, что идёт работа; повторное нажатие ничего не
  отправляет.
- Путь клавиатуры: поля вкладки → «Сохранить» → «Отмена»; стрелки ← → —
  по вкладкам.

## Как делать

- **«Сохранить» не выключают.** Выключенная кнопка не объясняет, что не
  так; нажатие с ошибками показывает сводку и ведёт к первой.
- **Ошибки — у полей, а не всплывающим.** Всплывающее — только когда
  сохранение не дошло до сервера.
- **Чужую правку не перезаписывают молча.** Два ответа: посмотреть её
  версию или сохранить свою.

## Копия для ИИ

```html
<!-- Рецепт SIMAI Framework «Сохранение и ошибки в форме», выпуск ui-994f9db407fa.
Правила:
1. «Сохранить» — sf-button, никогда не disabled; на время запроса loading.
2. Успех — SF.notify({status: 'success', title: 'Сохранено'}); уходит сам.
3. Ошибки сервера: у полей invalid + error-message; на вкладках tabs.items[].errors; от двух ошибок — sf-alert status="error" над формой «Не сохранено: N ошибок», action-text="К первой ошибке" → tabs.goToError(); фокус на сводку. Одна ошибка — фокус сразу в поле.
4. Нет связи или прав — SF.notify({status: 'error', duration: 0, action: {label: 'Повторить'}}); правки остаются в форме, строка «Есть несохранённые изменения» под кнопками.
5. Чужая правка — sf-alert status="warning" над формой: «Запись изменила <кто> в <время>», action-text="Показать её версию", secondary-action-text="Сохранить мою".
6. «Отмена» — appearance="ghost" scheme="on-surface", через 8 после «Сохранить». -->
<div id="summary"></div>
<sf-tabs id="tabs" aria-label="Разделы записи" items='[{"id":"main","label":"Основное"},{"id":"seo","label":"Поиск"}]'>
  <div slot="panel-0"><sf-input id="slug" name="slug" label="Адрес страницы" required></sf-input></div>
  <div slot="panel-1"><sf-input id="seo-desc" name="seo-desc" label="Описание для поиска" required></sf-input></div>
</sf-tabs>
<div class="flex flex-wrap gap-1/3 m-top-2">
  <sf-button id="save" text="Сохранить"></sf-button>
  <sf-button appearance="ghost" scheme="on-surface" text="Отмена"></sf-button>
</div>
<script type="module">
  const save = document.querySelector('#save');
  const tabs = document.querySelector('#tabs');
  save.addEventListener('click', async () => {
    save.setAttribute('loading', '');
    try {
      const answer = await fetch('/api/news/1', {method: 'PUT', body: new FormData()});
      if (answer.ok) return SF.notify({status: 'success', title: 'Сохранено'});
      const {errors} = await answer.json(); // [{field, tab, message}]
      errors.forEach(({field, message}) => {
        const input = document.querySelector('#' + field);
        input.setAttribute('invalid', '');
        input.setAttribute('error-message', message);
      });
      tabs.items = tabs.items.map((tab) => ({...tab, errors: errors.filter((e) => e.tab === tab.id).length || undefined}));
      if (errors.length > 1) {
        const alert = document.createElement('sf-alert');
        alert.setAttribute('status', 'error');
        alert.setAttribute('heading', `Не сохранено: ${errors.length} ошибки`);
        alert.setAttribute('action-text', 'К первой ошибке');
        alert.addEventListener('sf-alert-action', () => tabs.goToError());
        document.querySelector('#summary').replaceChildren(alert);
        const focusBox = () => {
          const box = alert.querySelector('.sf-alert'); // хозяин рисует рамку не сразу
          if (!box) return requestAnimationFrame(focusBox);
          box.tabIndex = -1;
          box.focus();
        };
        focusBox();
      }
    } catch {
      SF.notify({status: 'error', title: 'Не сохранено: нет связи', text: 'Изменения остались в форме.', duration: 0});
    } finally {
      save.removeAttribute('loading');
    }
  });
</script>
```

## Где используется

- Форма записи Larena — новости, товары, страницы.
- Карточка записи SIMAI Pro.
- Письмо в почте — черновик и отправка.

## Что ещё в пути

> **Что ещё в пути.** Форма, которая сама ставит сводку ошибок, переводит
> фокус и пишет «Есть несохранённые изменения», появится в следующей
> версии SIMAI Framework. Тогда рецепт покажет оба способа; пока форму
> собирают из полей, вкладок и уведомления, как в примере.

## См. также

- [Какое сообщение выбрать](/ru/recipes/which-message/)
- [Карточка записи](/ru/recipes/record-card/)
- [Вкладки](/ru/smart/navigation/tabs/), [Текстовое поле](/ru/smart/forms/inputs/), [Уведомление](/ru/smart/feedback/alert/)
