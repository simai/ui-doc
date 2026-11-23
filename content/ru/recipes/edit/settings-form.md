---
title: "Форма настроек"
description: "Страница настроек записи или приложения: разделы карточками, поля с подписями, флажки, одна кнопка «Сохранить» и уведомление о результате."
---

# Форма настроек

Страница, на которой человек меняет настройки сайта, проекта или своего
профиля. Настройки разложены по разделам — у каждого своя карточка с
заголовком, — ответы стоят под последним разделом: «Сохранить» и «Отмена».
Ошибку видно у самого поля, удачное сохранение подтверждает уведомление в
углу.

## Пример

Сотрите название и нажмите «Сохранить»: поле покажет, что не так, и курсор
встанет в него. С названием форма сохранится, а в углу появится
уведомление. «Отмена» возвращает начальные значения.

:::example {id="recipes/settings-form/overview" label="Настройки сайта" preview=sandbox log="change" log_console=true log_open=false}
:::

## Когда брать

- Настроек больше пяти-шести, и они делятся на разделы по смыслу.
- Изменения применяются вместе, одной кнопкой.

Одну-две настройки, которые применяются сразу, ставьте переключателями
прямо на странице, без кнопки «Сохранить». Настройки вида — плотность,
колонки, сортировку — открывайте [Меню настроек](/ru/smart/navigation/settings/),
а короткую форму из двух-трёх полей — в окне.
Настройки сайта в админке, где значение берётся с уровня «Все сайты», —
в рецепте [Страница настроек админки](/ru/recipes/edit/admin-settings/).

## Состояния

Ошибка поля появляется после «Сохранить» и говорит, что исправить. Пока
форма сохраняется, кнопка занята и повторно не нажимается. После
сохранения — короткое подтверждение; если сохранить не удалось, правки
остаются в форме, а уведомление предлагает «Повторить».

:::example {id="recipes/settings-form/states" label="Состояния" preview=sandbox}
:::

## На телефоне

На телефоне разделы идут один под другим, поля — во всю ширину, подписи
над полями. «Сохранить» и «Отмена» стоят под формой в одну строку.
Откройте пример во весь экран и выберите ширину телефона.

:::example {id="recipes/settings-form/phone" label="Телефон" preview=sandbox}
:::

## Плотность

Настройки в админке — в компактной плотности: `data-sf-density="compact"`
на корне экрана опускает поля, флажки и кнопки на ступень.

:::example {id="recipes/settings-form/density" label="Плотность" preview=sandbox}
:::

## Из чего собрано

| Часть | Компонент | Как задано |
|:---|:---|:---|
| Заголовок и путь | [Заголовок страницы](/ru/smart/composite/page-header/) | `heading`; путь через запись, к которой относятся настройки |
| Раздел | [Карточка](/ru/components/content/card/) | `section.sf-card` с заголовком `h2`; между карточками `gap-3`, внутри — отступы самой карточки; колонка формы не шире `max-w-h0` |
| Текстовые поля | [Текстовое поле](/ru/smart/forms/inputs/), [Многострочное поле](/ru/smart/forms/textarea/) | `label` над полем; `hint` — пояснение; `required` и `error-message` — у обязательного |
| Выбор одного | [Радиокнопки](/ru/smart/forms/radio/) | в `fieldset` с `legend`; у вариантов `description` |
| Включить и выключить | [Флажок](/ru/smart/forms/checkbox/) | `label` и `description`; в форме с кнопкой «Сохранить» — флажок, а не переключатель: переключатель действует сразу |
| Части одного ответа | [Текстовое поле](/ru/smart/forms/inputs/) | город и индекс в одной строке `flex flex-wrap gap-1`; ширина по ответу задаёт обёртка поля: индекс `w-e6`, город `flex-auto w-f6` |
| Ответы | [Кнопка](/ru/smart/actions/buttons/) | «Сохранить» — `native-type="submit"`, вид по умолчанию; «Отмена» — `native-type="reset"` `appearance="ghost"` `scheme="on-surface"` |
| Результат | [Уведомление](/ru/smart/feedback/toast/) | `status="success"`, `duration="5000"`, в контейнере с `role="status"` в углу |

## Доступность

- У каждого поля видимая подпись; подсказка и ошибка связаны с полем, и
  диктор читает их вместе с ним.
- После «Сохранить» с ошибками фокус переходит на первое поле с ошибкой.
- Группа радиокнопок «Кто видит сайт» — `fieldset` с `legend`.
- Результат сохранения объявляется: «Настройки сохранены».
- Путь клавиатуры: поля по порядку разделов → «Сохранить» → «Отмена».

## Как делать

:::example {id="recipes/settings-form/do-dont" label="Как делать"}
:::

- **«Отмена» — тихая.** Красный цвет говорит «удалит или не вернётся»;
  «Отмена» ничего не ломает, поэтому она без заливки.
- **Ошибка — у поля.** Сообщение стоит под полем и говорит, что сделать.
  Общая плашка «Форма заполнена с ошибками» над формой не показывает, где
  ошибка, и человек ищет её сам.
- **Подпись — над полем.** Подпись видна всегда; в самом поле — только
  образец формата. Подпись внутри поля пропадает, как только человек
  начинает печатать.
- **Одна кнопка «Сохранить» на форму.** Не по кнопке в каждой карточке:
  человек не понимает, что сохранилось, а что нет.
- **Поля с рамкой, вид не меняем.** Заливка — только для поиска и фильтров
  над таблицей. На серую область поля не ставят: сначала карточка раздела.
  Почему — в руководстве [Формы: фон и группировка](/ru/guide/colour/forms/).

Те же настройки в шторке — без карточек внутри: группы делят заголовок и
линия, как в рецепте [Фильтры в шторке](/ru/recipes/find/filter-drawer/). На
телефоне форма — одна колонка: город и индекс складываются в столбик, кнопки
стоят в конце формы.

## Копия для ИИ

```html
<!-- Рецепт SIMAI Framework «Форма настроек», выпуск ui-1ed6b6c9a040.
Правила:
1. Корень экрана админки — data-sf-density="compact"; заголовок — sf-header-page с путём через запись.
2. Форма — колонка max-w-h0; каждый раздел — section.sf-card с h2 class="m-0 text-1 weight-medium".
3. Каждое поле с label над полем; placeholder — только образец формата; пояснение — hint. Поля с рамкой (вид по умолчанию), appearance="filled" не берём. Части одного ответа (город и индекс) — в одной строке flex flex-wrap gap-1; ширина по ответу задаёт обёртка поля: индекс в div class="w-e6", город в div class="flex-auto w-f6".
4. Обязательное поле — required и error-message; при ошибке страница ставит invalid и фокус в поле. Общей плашки ошибок над формой нет.
5. Выбор одного — sf-radio в fieldset с legend; включить и выключить — sf-checkbox с label и description (в форме с «Сохранить» не sf-switch: он действует сразу).
6. Одни ответы на форму, под последним разделом: sf-button native-type="submit" text="Сохранить" (вид по умолчанию) и sf-button native-type="reset" appearance="ghost" scheme="on-surface" text="Отмена". Не status="danger".
7. Сохранено — sf-toast status="success" icon="check_circle" duration="5000" в контейнере role="status" в углу. -->
<div data-sf-density="compact">
  <sf-header-page heading="Настройки сайта">
    <sf-breadcrumbs slot="path" aria-label="Путь к странице" items='[{"label":"Сайты","href":"/sites/"},{"label":"Магазин «Северный ветер»","href":"/sites/s1/"},{"label":"Настройки"}]'></sf-breadcrumbs>
  </sf-header-page>
  <form id="settings-form" class="flex flex-col gap-3 max-w-h0" novalidate>
    <section class="sf-card" aria-labelledby="settings-main">
      <h2 id="settings-main" class="m-0 text-1 weight-medium">Основное</h2>
      <sf-input id="settings-name" name="name" label="Название сайта" required error-message="Введите название"></sf-input>
      <sf-input name="domain" label="Адрес" input-type="url" placeholder="https://example.ru" hint="С этого адреса сайт открывается у посетителей"></sf-input>
    </section>
    <section class="sf-card" aria-labelledby="settings-access">
      <h2 id="settings-access" class="m-0 text-1 weight-medium">Доступ</h2>
      <fieldset class="border-0 p-0 m-0 flex flex-col gap-2">
        <legend class="p-0 m-bottom-1 text-1/2 color-on-surface-variant">Кто видит сайт</legend>
        <sf-radio name="access" value="all" label="Все посетители" checked></sf-radio>
        <sf-radio name="access" value="link" label="Только по ссылке" description="Сайт не попадает в поиск"></sf-radio>
      </fieldset>
      <sf-checkbox name="index" label="Показывать в поисковых системах" checked></sf-checkbox>
    </section>
    <section class="sf-card" aria-labelledby="settings-address">
      <h2 id="settings-address" class="m-0 text-1 weight-medium">Адрес для писем</h2>
      <sf-input name="street" label="Улица, дом"></sf-input>
      <div class="flex flex-wrap gap-1">
        <div class="flex-auto w-f6"><sf-input name="city" label="Город"></sf-input></div>
        <div class="w-e6"><sf-input name="postcode" label="Индекс" inputmode="numeric"></sf-input></div>
      </div>
    </section>
    <div class="flex flex-wrap gap-2">
      <sf-button native-type="submit" text="Сохранить"></sf-button>
      <sf-button native-type="reset" appearance="ghost" scheme="on-surface" text="Отмена"></sf-button>
    </div>
  </form>
  <div id="settings-toasts" class="fixed block-end-b6 inline-end-b6 z-9 flex flex-col gap-2" role="status"></div>
</div>
<script type="module">
  const form = document.querySelector('#settings-form');
  const name = document.querySelector('#settings-name');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!String(name.value ?? '').trim()) { name.setAttribute('invalid', ''); name.focus(); return; }
    await fetch(form.action || location.href, {method: 'POST', body: new FormData(form)});
    const toast = document.createElement('sf-toast');
    toast.setAttribute('status', 'success');
    toast.setAttribute('icon', 'check_circle');
    toast.setAttribute('title', 'Настройки сохранены');
    toast.setAttribute('duration', '5000');
    document.querySelector('#settings-toasts').append(toast);
  });
</script>
```

## См. также

- [Карточка записи](/ru/recipes/edit/record-card/) — откуда открываются настройки
- [Удаление](/ru/recipes/remove/delete/) — опасные настройки: удалить сайт, сбросить данные
