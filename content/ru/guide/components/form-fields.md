---
title: "Поля формы"
description: "Поля формы — самое большое семейство компонентов с общей структурой и общими правилами."
---

# Поля формы

Поля формы — самое большое семейство компонентов с общей структурой и общими
правилами. Эта глава описывает части поля, связи подписи и сообщения, ошибку,
вид, размер и группы.

## Из чего состоит поле

Поле — не один `<input>`, а несколько частей с разными задачами:

| Часть | Класс | Задача |
|:---|:---|:---|
| Оболочка | `label.sf-input` | Связывает подпись с контролом и показывает состояние всего поля |
| Подпись | `sf-input-label` > `sf-input-text` | Видимое название поля |
| Отметка обязательности | `sf-input-required` | Звёздочка; в доступное имя не входит (имя берётся из `sf-input-text`), обязательность сообщает `required` |
| Область ввода | `sf-input-field` | Граница, заливка, кольцо фокуса; внутри — иконка, контрол, текст справа |
| Контрол | нативный `<input>` | Имя, значение, тип, фокус, проверка, отправка, сброс |
| Сообщение | `sf-input-hint-text-wrap` | Подсказка или сообщение об ошибке |

Те же части с тем же смыслом есть у многострочного поля, выпадающего списка,
поля телефона и счётчика; флажок, переключатель и радиокнопка состоят из
отметки, подписи и необязательного описания. У флажка это `sf-checkbox-box`,
`sf-checkbox-label` и `sf-checkbox-description`; у радиокнопки и переключателя
те же части называются от своего корня (`sf-radio-button-box`,
`sf-radio-button-description`, `sf-switch-description`).

**Нативный контрол владеет значением.** Значение, проверку, отправку и сброс
формы делает браузер. Компонент отвечает только за представление.

## Имя, подпись, подсказка

Три разные вещи, которые не заменяют друг друга:

- `name` — машинное имя для отправки данных;
- подпись — то, как поле называется для человека и вспомогательных технологий;
- подсказка — формат или последствия ввода.

Placeholder годится только как короткий пример формата и **не заменяет
подпись**: он исчезает при вводе. В компактной панели подпись можно скрыть
визуально, но она должна остаться в дереве доступности.

JavaScript поля делает связи сам: выдаёт контролу идентификатор, связывает
подпись через `aria-labelledby` (если автор не задал своё доступное имя),
сообщение — через `aria-describedby`, а в состоянии ошибки ставит
`aria-invalid` и `aria-errormessage`. Автору достаточно правильной структуры.

## Ошибка

Ошибка задаётся классом `error` на оболочке и контроле. Сообщение кладётся в
ту же часть, что и подсказка, с пометкой, что это ошибка; `aria-invalid`,
`aria-describedby` и `aria-errormessage` скрипт поля поставит сам:

```html
<label class="sf-input sf-input--size-1 sf-input--bordered error flex flex-col">
  <span class="sf-input-label flex"><span class="sf-input-text">Код проекта</span></span>
  <span class="sf-input-field items-cross-center transition flex">
    <input class="error" type="text" value="demo space">
  </span>
  <span class="sf-input-hint-text-wrap" data-field-message="error">Используйте латинские буквы без пробелов</span>
</label>
```

Из кода состояние меняют через
`SF.Input.setState(элемент, {invalid: true, errorMessage: '…'})` (вместо `invalid` можно писать `error`); функция сама обновит классы и связи. Чтобы снять ошибку,
передайте `{invalid: false, errorMessage: 'текст подсказки'}` или пустую строку,
если подсказки нет: одно `invalid: false` снимает классы и
`aria-invalid`, но оставляет текст сообщения.

## Вид и размер полей

У полей два вида: `bordered` (граница) и `filled` (тональная заливка). Пока
фокус внутри поля с заливкой, оно выглядит как поле с границей — так понятно,
что в него можно писать. Поле с ошибкой, недоступное и только для чтения
сохраняют свой вид.

Все поля формы используют одни ступени (`1/2`, `1`, `2`) и одну геометрию:
текстовое поле, многострочное, выпадающий список и поле телефона одного размера
стоят в одной колонке с совпадающими краями, а раскрытый список выровнен по
своему полю ([Размер: одна лестница для всех компонентов](/ru/guide/components/settings/#размер-одна-лестница-для-всех-компонентов), [Отступ внутри контрола и общие оси](/ru/guide/size-and-type/spacing/#отступ-внутри-контрола-и-общие-оси)). Отметка флажка, радиокнопки и переключателя
стоит на линии текста и на середине первой строки подписи.

## Группы и событие изменения

Связанные флажки и радиокнопки собирают в `<fieldset>` с `<legend>`: у группы
должно быть общее доступное имя. Об изменении значения обычный контрол сообщает
нативным событием `change`, которое всплывает от `<input>`. Смарт-компоненты
сообщают тем же событием `change`: у флажка, радиокнопки, переключателя и полей
ввода оно всплывает от внутреннего нативного контрола, а у выпадающего списка,
поля выбора даты и группы кнопок отправляется на самом теге. Значение,
заданное из кода, событием `change` не считается.

## Форма целиком

Пример ниже — форма регистрации: три поля, флажок и кнопка отправки одной
ступени `1`, поэтому поля и кнопка одной высоты и с общими краями; индикатор
флажка начинается у того же края, что поля и кнопка.
Промежуток между частями формы — `gap-2`: это та же ступень `--sf-space-2`,
что у токена связанных частей `--sf-content--space-related`. Ширину
одноколоночной формы ограничивает мера строки: класс `measure` (около 65
знаков) не даёт полям растянуться на весь широкий экран
([Длина строки](/ru/utilities/typography/text-max-width/)).

```html
<form class="signup-form measure flex flex-col gap-2" action="/signup" method="post" novalidate>
  <label class="sf-input sf-input--size-1 sf-input--bordered flex flex-col">
    <span class="sf-input-label flex"><span class="sf-input-text">Имя</span><span class="sf-input-required" aria-hidden="true">*</span></span>
    <span class="sf-input-field items-cross-center transition flex">
      <input type="text" name="name" autocomplete="name" required>
    </span>
    <span class="sf-input-hint-text-wrap">Как к вам обращаться</span>
  </label>

  <label class="sf-input sf-input--size-1 sf-input--bordered flex flex-col">
    <span class="sf-input-label flex"><span class="sf-input-text">Электронная почта</span><span class="sf-input-required" aria-hidden="true">*</span></span>
    <span class="sf-input-field items-cross-center transition flex">
      <i class="sf-icon" aria-hidden="true">mail</i>
      <input type="email" name="email" autocomplete="email" placeholder="name@example.com" required>
    </span>
    <span class="sf-input-hint-text-wrap">Пришлём на этот адрес подтверждение</span>
  </label>

  <label class="sf-input sf-input--size-1 sf-input--bordered flex flex-col">
    <span class="sf-input-label flex"><span class="sf-input-text">Пароль</span><span class="sf-input-required" aria-hidden="true">*</span></span>
    <span class="sf-input-field items-cross-center transition flex">
      <input type="password" name="password" autocomplete="new-password" minlength="8" required>
    </span>
    <span class="sf-input-hint-text-wrap">Не короче восьми символов</span>
  </label>

  <label class="sf-checkbox sf-checkbox--size-1 flex">
    <span class="sf-checkbox-box transition flex"><input type="checkbox" name="news" value="yes"><span class="sf-icon" aria-hidden="true"></span></span>
    <span class="sf-checkbox-container flex flex-col"><span class="sf-checkbox-top flex"><span class="sf-checkbox-label">Получать новости</span></span></span>
  </label>

  <button type="submit" class="sf-button sf-button--default sf-button--primary sf-button--size-1 w-full sm:w-fit">
    <span class="sf-button-text-container">Зарегистрироваться</span>
  </button>
</form>
```

Атрибут `novalidate` выключает всплывающие сообщения браузера, но не саму
проверку: верно ли значение, решают `required`, `type`, `minlength` и
`pattern`, а скрипт спрашивает об этом `checkValidity()`. Сообщения показывает поле — в своей части
`sf-input-hint-text-wrap`, рядом с подсказкой:

```js
const form = document.querySelector('.signup-form');
const messages = {
  name: 'Укажите имя',
  email: 'Укажите адрес целиком, например ivan@example.com',
  password: 'Пароль должен быть не короче восьми символов',
};

const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Inputs', () => {
  const fields = [...form.querySelectorAll('.sf-input input')];
  const hintOf = (input) => {
    const field = input.closest('.sf-input');
    return field.dataset.hint ?? field.querySelector('.sf-input-hint-text-wrap')?.textContent ?? '';
  };
  const hints = new Map(fields.map((input) => [input, hintOf(input)]));

  const check = (input) => {
    const valid = input.checkValidity();
    SF.Input.setState(input, valid
      ? {invalid: false, errorMessage: hints.get(input)}
      : {invalid: true, errorMessage: messages[input.name]});
    return valid;
  };

  fields.forEach((input) => input.addEventListener('blur', () => check(input)));

  form.addEventListener('submit', (event) => {
    const invalid = fields.filter((input) => !check(input));
    if (invalid.length) {
      event.preventDefault();
      invalid[0].focus();
    }
  });
}));
```

Порядок работы такой:

1. Пока человек не ушёл из поля, ошибок нет. Проверка срабатывает при уходе
   из поля (`blur`) и при отправке.
2. При отправке проверяются все поля сразу. Если есть ошибки, отправка
   отменяется, а фокус переходит на **первое поле с ошибкой**: экранный диктор
   прочитает его подпись и сообщение, а человек с клавиатуры окажется там, где
   нужно исправлять.
3. Исправленное поле возвращает свою подсказку: её текст сохранён до первой
   ошибки и передаётся в `errorMessage`.
4. Серверная проверка остаётся задачей приложения: ответ сервера показывают
   тем же `SF.Input.setState` у нужного поля. Если сервер отдаёт страницу, где
   поле уже в ошибке, в части `sf-input-hint-text-wrap` лежит текст ошибки, а
   не подсказка. Такому полю приложение кладёт текст подсказки в атрибут
   `data-hint` на оболочке `sf-input`: скрипт выше берёт подсказку оттуда и
   вернёт её, когда поле исправят. `aria-invalid` и `aria-errormessage`
   скрипт поля ставит при загрузке сам; писать `aria-invalid` в разметке
   сервера нужно, только если страница должна работать без JavaScript.
5. Звёздочка у подписи скрыта от экранного диктора (`aria-hidden`), а
   обязательность ему сообщает `required`. Зрячему человеку значок объясняют
   одной строкой перед первым полем:
   `<p class="text-1/2 color-on-surface-variant">Поля со * обязательны</p>`.
6. Обязательный флажок согласия получает `required` на `input`. `SF.Input` и
   `SF.Checkbox.setState` текст ошибки флажку не ставят, поэтому скрипт
   формы делает это сам: класс `error` на `sf-checkbox`, `aria-invalid="true"`
   на `input` и текст в части `sf-checkbox-description`, на которую указывает
   `aria-describedby`. Когда флажок отметили, скрипт убирает всё это. Как
   выглядит флажок в ошибке — в примере
   [Флажок → Ошибка](/ru/components/forms/checkbox/#ошибка).
7. В форме внутри `sf-modal` поля — копии, которые повторная отрисовка может
   заменить (см. [Слоты показываются копиями](/ru/smart-components/overlays/modal/#слоты-показываются-копиями)).
   Там храните подсказки по `name` поля, а не по самому элементу, и ищите
   поля заново при каждой проверке.

**Смотрите также:** [Размер: одна лестница для всех компонентов](/ru/guide/components/settings/#размер-одна-лестница-для-всех-компонентов) — размер; [Состояния](/ru/guide/components/states/) — состояния; [Доступность: что компонент даёт и что остаётся за автором](/ru/guide/components/surfaces-and-accessibility/#доступность-что-компонент-даёт-и-что-остаётся-за-автором) — доступность;
[Отступ внутри контрола и общие оси](/ru/guide/size-and-type/spacing/#отступ-внутри-контрола-и-общие-оси) — выравнивание связанных частей.
