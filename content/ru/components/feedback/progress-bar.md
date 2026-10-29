---
title: "Прогресс"
description: "Показывает ход операции, когда долю выполненного можно выразить в процентах."
profile: reference
---

# Прогресс

Индикатор прогресса показывает ход операции, когда долю выполненного можно
выразить от 0 до 100 процентов. Для операции без известного процента берите
[спиннер](/ru/components/feedback/spinner/), для деления на этапы —
[шкалу прогресса](/ru/components/feedback/progress-scale/).

## Пример

:::example {id="components/progress-bar/basic" label="Прогресс со значением справа"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-progress-bar` → дорожка `sf-progress-bar-main` → заполнение
`sf-progress-bar-progress`.

- Значение задаёт атрибут `data-value` от 0 до 100. Скрипт компонента ставит
  ширину заполнения и атрибуты доступности; без скрипта полоса пуста.
- Блок и дорожка занимают всю ширину строки; число справа сжимает дорожку
  ровно на свою ширину.
- Число процентов скрипт выводит сам в `sf-progress-bar-text`, если задано
  положение значения. Писать его в разметке не нужно.
- Имя полосы задаёт `data-label`; `data-value-text` заменяет число в
  объявлении экранного диктора, например «3 файла из 5».

## Варианты

### Статус

Статус задаёт цвет заполнения. Атрибут `data-tone` принимает `info`,
`success`, `warning` и `error`; без него или с `primary` заполнение остаётся
цвета по умолчанию. Скрипт ставит по атрибуту класс `sf-progress-bar--<статус>`
и снимает остальные, поэтому статус задают атрибутом, а не классом.

:::example {id="components/progress-bar/status" label="Статусы прогресса"}
:::

### Размер

Пять ступеней — `sf-progress-bar--size-1/3`, `sf-progress-bar--size-1/2`,
`sf-progress-bar--size-1`, `sf-progress-bar--size-2` и
`sf-progress-bar--size-3` — меняют толщину дорожки и кегль числа. Без класса
скрипт ставит ступень `1`.

:::example {id="components/progress-bar/sizes" label="Размеры прогресса"}
:::

### Положение значения

Атрибут `data-position` задаёт, где стоит число процентов: `none` — только
полоса, `right` — справа от полосы (`inline-end` — то же самое), `bottom` —
под полосой у её конца. Число показывайте, когда точное значение важно
пользователю.

:::example {id="components/progress-bar/position" label="Положение значения"}
:::

## Доступность

- Скрипт ставит на блок `role="progressbar"`, `aria-valuemin="0"`,
  `aria-valuemax="100"` и `aria-valuenow` и обновляет их вместе со значением.
- Имя — ваша часть: задайте `data-label` («Загрузка отчёта») или свяжите
  блок с видимой подписью через `aria-labelledby`. Без имени экранный диктор
  объявит только число, и две полосы на странице не отличить.
- Когда процент мало что говорит, задайте `data-value-text` — он становится
  `aria-valuetext`.
- Область, которая ждёт окончания операции, получает `aria-busy="true"` до её
  завершения.

## JavaScript

Скрипт компонента находит блоки `.sf-progress-bar` при загрузке страницы и
рисует их по атрибутам. Чтобы изменить уже нарисованную полосу, вызовите
`SF.ProgressBar.setState(element, state)`: поля `value`, `status`,
`textPosition`, `size`, `label` и `valueText` меняют то же, что и атрибуты.
`SF.ProgressBar.getState(element)` возвращает текущие значения этих полей.
Обе функции принимают блок или любой элемент внутри него.

:::example {id="components/progress-bar/update" label="Изменение значения из скрипта"}
:::

```js
const bar = document.querySelector('#upload-progress');
SF.ProgressBar.setState(bar, {value: 100, status: 'success'});
```

Компонент регистрирует класс `ProgressBar`, который собирает полосу из
параметров. `SF.Loader` появляется к событию `sf-loader-init` на `window`;
`SF.Loader.ready('ProgressBar', callback)` передаёт класс, когда он
зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('ProgressBar', (ProgressBar) => {
  const bar = new ProgressBar({
    param: {value: 40, size: '1', textPosition: 'right', label: 'Загрузка отчёта'},
  });
  document.querySelector('#report').append(bar.render());
}));
```

Параметры: `value`, `size` (`1/3`, `1/2`, `1`, `2`, `3`), `textPosition`,
`status`, `label`, `valueText`. Событий компонент не отправляет.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-progress-bar` |
| Части | `sf-progress-bar-main`, `sf-progress-bar-progress` |
| Модификаторы | `sf-progress-bar--error`, `sf-progress-bar--info`, `sf-progress-bar--success`, `sf-progress-bar--warning` |
| Размеры | `sf-progress-bar--size-1`, `sf-progress-bar--size-1/2`, `sf-progress-bar--size-1/3`, `sf-progress-bar--size-2`, `sf-progress-bar--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-progress-bar`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-progress-bar-fill-color` | Заполненная часть; статус задаёт свой цвет, если эта переменная не задана. | `var(--sf-primary)`; зависит от статуса |
| `--sf-progress-bar-track-color` | Дорожка под заполненной частью. | `var(--sf-surface-container)` |
| `--sf-progress-bar-height` | Толщина дорожки. | `var(--sf-text-size-1/5)`; зависит от размера |
| `--sf-progress-bar-radius` | Углы дорожки и заполненной части. | `var(--sf-radius--ui)` |
| `--sf-progress-bar-color` | Видимый процент. | `var(--sf-on-surface)` |
| `--sf-progress-bar-gap` | Расстояние между дорожкой и процентом. | `var(--sf-space-1/3)`; зависит от размера |

```css
.sf-progress-bar {
  --sf-progress-bar-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-progress-bar`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-progress-bar--font-size` | не задана; задают модификаторы, например `.sf-progress-bar.sf-progress-bar--size-1`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-progress-bar--gap` | не задана; задают модификаторы, например `.sf-progress-bar--size-1`: `var(--sf-progress-bar-gap, var(--sf-space-1/3))` | `gap` |
| `--sf-progress-bar--line-height` | не задана; задают модификаторы, например `.sf-progress-bar.sf-progress-bar--size-1`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-progress-bar-main--background-color` | не задана; задают модификаторы, например `.sf-progress-bar .sf-progress-bar-main`: `var(--sf-progress-bar-track-color, var(--sf-surface-container))` | `background-color` |
| `--sf-progress-bar-main--border-radius` | не задана; задают модификаторы, например `.sf-progress-bar .sf-progress-bar-main`: `var(--sf-progress-bar-radius, var(--sf-radius--ui))` | `border-radius` |
| `--sf-progress-bar-main--height` | не задана; задают модификаторы, например `.sf-progress-bar--size-1 .sf-progress-bar-main`: `var(--sf-text-size-1/5)` | `height` |
| `--sf-progress-bar-progress--background-color` | не задана; задают модификаторы, например `.sf-progress-bar .sf-progress-bar-progress`: `var(--sf-progress-bar-fill-color, var(--sf-primary))` | `background-color` |
| `--sf-progress-bar-progress--border-radius` | не задана; задают модификаторы, например `.sf-progress-bar .sf-progress-bar-progress`: `var(--sf-progress-bar-radius, var(--sf-radius--ui))` | `border-radius` |

## См. также

- [Шкала прогресса](/ru/components/feedback/progress-scale/)
- [Спиннер](/ru/components/feedback/spinner/)
- [Прогресс — смарт-компонент](/ru/smart-components/feedback/progress-bar/)
