---
title: "Флажок"
description: "Включает независимый параметр или выбирает несколько значений из списка."
profile: reference
---

# Флажок

Флажок включает независимый параметр или выбирает несколько значений из
списка. Для одного выбора из взаимоисключающих вариантов берите
[радиокнопку](/ru/components/forms/radio/), для мгновенного включения
настройки — [переключатель](/ru/components/forms/switch/).

## Пример

:::example {id="components/checkbox/overview" label="Базовый флажок"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`label.sf-checkbox` → `sf-checkbox-box` с `<input type="checkbox">` и
`sf-icon` → `sf-checkbox-container` с подписью.

- Оболочка — `<label class="sf-checkbox">`: она даёт доступное имя и
  кликабельную область. Скрипт компонента находит флажки по `label.sf-checkbox`.
- Нативный `<input type="checkbox">` — источник `name`, `value`, `checked`,
  `disabled`, фокуса и отправки формы. Он лежит прямым потомком
  `sf-checkbox-box`: CSS скрывает только такой input, в другом месте он
  остаётся видимым браузерным флажком.
- `sf-icon` после input рисует отметку: скрипт пишет в него `check` для
  отмеченного и `remove` для смешанного состояния. Без него индикатор пуст.
- Текст — в `sf-checkbox-container`: подпись `sf-checkbox-label` внутри
  `sf-checkbox-top` или прямо в контейнере, пояснение —
  `sf-checkbox-description`.

## Варианты

### Размер

Три ступени — `sf-checkbox--size-1/2`, `sf-checkbox--size-1` и
`sf-checkbox--size-2`, как у полей форм, радиокнопки и переключателя. Ступень
нужна, чтобы совпадать с полями и кнопками той же формы; в списке флажок берёт
размер списка.

:::example {id="components/checkbox/sizes" label="Размеры флажка"}
:::

### Положение индикатора

Положение индикатора задаёт порядок двух частей внутри `<label>`. В начале
строки индикатор подходит обычным формам; в конце — строкам настроек, где
такая композиция едина для всего интерфейса.

:::example {id="components/checkbox/position" label="Положение индикатора"}
:::

## Состояния

| Состояние | Разметка |
|:---|:---|
| Отмечен | нативный `checked` |
| Недоступен | нативный `disabled` |
| Смешанный | свойство `input.indeterminate = true` или атрибут `data-indeterminate` |
| Ошибка | класс `error` на оболочке, `aria-invalid="true"` на input и текст ошибки |

Смешанное состояние означает, что выбрана часть дочерних вариантов. HTML-атрибута
с таким поведением нет, и третьего отправляемого значения оно не создаёт.
`data-indeterminate` скрипт компонента переносит в свойство `indeterminate`
один раз при подключении; дальше меняйте состояние через JavaScript.

:::example {id="components/checkbox/states" label="Состояния флажка"}
:::

## Доступность

- Видимая подпись лежит внутри того же `<label>`, что и input.
- Группу флажков оборачивайте в `<fieldset>` с `<legend>`: легенда называет
  общий вопрос и сообщает, что можно выбрать несколько вариантов. Каждый флажок
  группы отправляет собственное значение.
- Ошибку сообщайте текстом: одного цвета недостаточно.
- Не отмечайте варианты заранее без предметной причины.
- Флажок переключается пробелом; видимый фокус рисует компонент.
- Индикатор в начале строки стоит на логическом начале и зеркалится при
  письме справа налево.

:::example {id="components/checkbox/group" label="Группа флажков"}
:::

## JavaScript

`SF.Checkbox.setState(input, state)` меняет состояние нативного флажка и
перерисовывает индикатор:

```js
const input = document.querySelector('input[name="mixed"]');
SF.Checkbox.setState(input, {checked: false, indeterminate: true, disabled: false});
```

Функция принимает только `<input type="checkbox">` и поля `checked`,
`indeterminate`, `disabled`; для другого элемента она возвращает `false`.
Событие `change` она не создаёт: после изменения значения приложение само
отправляет нужное событие и обновляет свою модель данных.

Компонент регистрирует класс `Checkbox`, который собирает флажок из
параметров. `SF.Loader` появляется к событию `sf-loader-init` на `window`;
`SF.Loader.ready('Checkbox', callback)` передаёт класс, когда он
зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Checkbox', (Checkbox) => {
  const checkbox = new Checkbox({
    param: {name: 'updates', value: 'yes', title: 'Получать обновления', size: '1'},
  });
  document.querySelector('#settings').append(checkbox.render());
}));
```

Параметры: `title`, `description`, `size` (`1/2`, `1`, `2`), `name`, `value`,
`checked`, `disabled`, `indeterminate`. `attrs` переносятся на input, класс из
`attrs.class` — на оболочку.

## Классы

Раздел собран из CSS выпуска и обновляется вместе с выпуском.

| Что | Классы |
|:---|:---|
| Блок | `sf-checkbox` |
| Части | `sf-checkbox-box`, `sf-checkbox-container`, `sf-checkbox-description`, `sf-checkbox-label`, `sf-checkbox-top` |
| Размеры | `sf-checkbox--size-1`, `sf-checkbox--size-1/2`, `sf-checkbox--size-2` |

## См. также

- [Радиокнопки](/ru/components/forms/radio/)
- [Переключатель](/ru/components/forms/switch/)
- [Checkbox — Smart-компонент](/ru/smart-components/forms/checkbox/)
