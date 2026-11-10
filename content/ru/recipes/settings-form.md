---
title: "Форма настроек"
description: "Страница настроек записи или приложения: разделы карточками, поля с подписями, переключатели, одна кнопка «Сохранить» и уведомление о результате."
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

## Из чего собрано

| Часть | Компонент | Как задано |
|:---|:---|:---|
| Заголовок и путь | [Заголовок страницы](/ru/smart/composite/page-header/) | `heading`; путь через запись, к которой относятся настройки |
| Раздел | [Карточка](/ru/components/content/card/) | `section.sf-card` с заголовком `h2`; колонка формы не шире `max-w-h0` |
| Текстовые поля | [Текстовое поле](/ru/smart/forms/inputs/), [Многострочное поле](/ru/smart/forms/textarea/) | `label` над полем; `hint` — пояснение; `required` и `error-message` — у обязательного |
| Выбор одного | [Радиокнопки](/ru/smart/forms/radio/) | в `fieldset` с `legend`; у вариантов `description` |
| Включить и выключить | [Переключатель](/ru/smart/forms/switch/) | `label` и `description` |
| Ответы | [Кнопка](/ru/smart/actions/buttons/) | «Сохранить» — `native-type="submit"`, вид по умолчанию; «Отмена» — `native-type="reset"` `appearance="ghost"` `scheme="on-surface"` |
| Результат | [Уведомление](/ru/smart/feedback/toast/) | `status="success"`, `duration="5000"`, в контейнере с `role="status"` в углу |

## Так и не так

:::example {id="recipes/settings-form/do-dont" label="Так и не так"}
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

## Копия для ИИ

```html
<!-- Рецепт SIMAI Framework «Форма настроек», выпуск ui-b4a77681f0a7.
Правила:
1. Корень экрана админки — data-sf-density="compact"; заголовок — sf-header-page с путём через запись.
2. Форма — колонка max-w-h0; каждый раздел — section.sf-card с h2 class="m-0 text-1 weight-6".
3. Каждое поле с label над полем; placeholder — только образец формата; пояснение — hint.
4. Обязательное поле — required и error-message; при ошибке страница ставит invalid и фокус в поле. Общей плашки ошибок над формой нет.
5. Выбор одного — sf-radio в fieldset с legend; включить и выключить — sf-switch с label и description.
6. Одни ответы на форму, под последним разделом: sf-button native-type="submit" text="Сохранить" (вид по умолчанию) и sf-button native-type="reset" appearance="ghost" scheme="on-surface" text="Отмена". Не status="danger".
7. Сохранено — sf-toast status="success" icon="check_circle" duration="5000" в контейнере role="status" в углу. -->
<div data-sf-density="compact">
  <sf-header-page heading="Настройки сайта">
    <sf-breadcrumbs slot="path" aria-label="Путь к странице" items='[{"label":"Сайты","href":"/sites/"},{"label":"Магазин «Северный ветер»","href":"/sites/s1/"},{"label":"Настройки"}]'></sf-breadcrumbs>
  </sf-header-page>
  <form id="settings-form" class="flex flex-col gap-3 max-w-h0" novalidate>
    <section class="sf-card" aria-labelledby="settings-main">
      <h2 id="settings-main" class="m-0 text-1 weight-6">Основное</h2>
      <sf-input id="settings-name" name="name" label="Название сайта" required error-message="Введите название"></sf-input>
      <sf-input name="domain" label="Адрес" input-type="url" placeholder="https://example.ru" hint="С этого адреса сайт открывается у посетителей"></sf-input>
    </section>
    <section class="sf-card" aria-labelledby="settings-access">
      <h2 id="settings-access" class="m-0 text-1 weight-6">Доступ</h2>
      <fieldset class="border-0 p-0 m-0 flex flex-col gap-2">
        <legend class="p-0 m-bottom-1 text-1/2 color-on-surface-variant">Кто видит сайт</legend>
        <sf-radio name="access" value="all" label="Все посетители" checked></sf-radio>
        <sf-radio name="access" value="link" label="Только по ссылке" description="Сайт не попадает в поиск"></sf-radio>
      </fieldset>
      <sf-switch name="index" label="Показывать в поисковых системах" checked></sf-switch>
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

> **Что ещё в пути.** Группа связанных полей на подложке внутри карточки —
> на спокойной серой плашке в 8 % вместо нынешних 16 % — приходит с
> ближайшим выпуском Framework; до него разделы не делятся плашками внутри
> карточки. Как это выглядит, показывает
> [прототип фонов в компонентах](/proto/surfaces-in-components.html).

## См. также

- [Карточка записи](/ru/recipes/record-card/) — откуда открываются настройки
- [Удаление](/ru/recipes/delete/) — опасные настройки: удалить сайт, сбросить данные
