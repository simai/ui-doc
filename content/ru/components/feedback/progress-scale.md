---
title: "Шкала прогресса"
description: "Показывает ход операции десятью участками, по одному на каждые десять процентов."
profile: reference
---

# Шкала прогресса

Шкала делит ход операции на десять участков, по одному на каждые десять
процентов. Она наглядна там, где обычная полоса выглядит слишком абстрактно:
заполнение профиля, шаги настройки. Если значение меняется плавно, берите
[индикатор прогресса](/ru/components/feedback/progress-bar/).

## Пример

:::example {id="components/progress-scale/basic" label="Шкала на 60 процентах"}
:::

## Разметка

Минимальная разметка — один пустой блок `sf-progress-scale` с атрибутами;
части скрипт компонента достраивает сам: контейнер
`sf-progress-scale-container` с десятью участками `sf-progress-scale-block` и
подпись `sf-progress-scale-text` с числом процентов.

- Значение задаёт `data-value` от 0 до 100. Участки заполняются с округлением
  вверх до десятка: 31 % заполняет четыре участка.
- Размер задаёт `data-size`, статус — `data-tone`. Скрипт ставит по ним классы
  `sf-progress-scale--size-*`, `sf-progress-scale--<статус>` и
  `sf-progress-scale--<десяток>` и снимает остальные, поэтому эти классы руками
  не пишут.
- `data-show-text="false"` скрывает подпись с числом.
- Имя шкалы задаёт `data-label`, текст для экранного диктора вместо числа —
  `data-value-text`.

## Варианты

### Статус

Статус задаёт цвет заполненных участков. `data-tone` принимает `primary`
(по умолчанию), `success`, `warning` и `error`. Информационный цвет даёт класс
`sf-progress-scale--info` — атрибут его не принимает.

:::example {id="components/progress-scale/status" label="Статусы шкалы"}
:::

### Размер

Пять ступеней `data-size` — `1/3`, `1/2`, `1`, `2` и `3` — меняют высоту
участков и кегль подписи, но не число участков. По умолчанию — `1`.

:::example {id="components/progress-scale/sizes" label="Размеры шкалы"}
:::

### В строке текста

Классы `sf-progress-scale--line-1/2`, `sf-progress-scale--line-1` и
`sf-progress-scale--line-2` ставят шкалу в строку текста той же ступени: блок
получает высоту строки, а подпись встаёт справа от участков. Так шкала
помещается в строку таблицы или списка, не меняя её высоты.

:::example {id="components/progress-scale/line" label="Шкала в строке текста"}
:::

## Доступность

- Скрипт ставит на блок `role="progressbar"`, `aria-valuemin="0"`,
  `aria-valuemax="100"` и `aria-valuenow`, а контейнер участков скрывает через
  `aria-hidden="true"`.
- Имя задайте через `data-label` или `aria-labelledby` на видимую подпись: без
  него экранный диктор объявит только число.
- Когда процент мало что говорит («3 шага из 10»), задайте `data-value-text` —
  он становится `aria-valuetext`.

## JavaScript

Скрипт компонента находит блоки `.sf-progress-scale` при загрузке страницы и
в добавленной позже разметке. Чтобы изменить уже нарисованную шкалу, вызовите
`SF.ProgressScale.setState(element, state)`: поля `value`, `size`, `status`,
`showText`, `label` и `valueText` меняют то же, что и атрибуты.
`SF.ProgressScale.getState(element)` возвращает текущие значения.

:::example {id="components/progress-scale/update" label="Изменение значения из скрипта"}
:::

```js
const scale = document.querySelector('#profile-progress');
SF.ProgressScale.setState(scale, {value: 80});
```

Компонент регистрирует класс `ProgressScale`. `SF.Loader` появляется к событию
`sf-loader-init` на `window`; `SF.Loader.ready('ProgressScale', callback)`
передаёт класс, когда он зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('ProgressScale', (ProgressScale) => {
  const scale = new ProgressScale({param: {value: 30, size: '1', label: 'Заполнение профиля'}});
  document.querySelector('#profile').append(scale.render());
}));
```

Параметры: `value`, `size`, `status`, `showText`, `label`, `valueText`.
Событий компонент не отправляет.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-progress-scale` |
| Части | `sf-progress-scale-block`, `sf-progress-scale-container`, `sf-progress-scale-text` |
| Модификаторы | `sf-progress-scale--10`, `sf-progress-scale--100`, `sf-progress-scale--20`, `sf-progress-scale--30`, `sf-progress-scale--40`, `sf-progress-scale--50`, `sf-progress-scale--60`, `sf-progress-scale--70`, `sf-progress-scale--80`, `sf-progress-scale--90`, `sf-progress-scale--error`, `sf-progress-scale--info`, `sf-progress-scale--line-1`, `sf-progress-scale--line-1/2`, `sf-progress-scale--line-2`, `sf-progress-scale--success`, `sf-progress-scale--warning` |
| Размеры | `sf-progress-scale--size-1`, `sf-progress-scale--size-1/2`, `sf-progress-scale--size-1/3`, `sf-progress-scale--size-2`, `sf-progress-scale--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-progress-scale`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-progress-scale--font-size` | не задана; задают модификаторы, например `.sf-progress-scale--size-1/3`: `var(--sf-text-size-1/4)` | `font-size` |
| `--sf-progress-scale--gap` | не задана; задают модификаторы, например `.sf-progress-scale--size-1/3`: `var(--sf-space-1/4)` | `gap` |
| `--sf-progress-scale--line-height` | не задана; задают модификаторы, например `.sf-progress-scale--size-1/3`: `var(--sf-text-height-1/4)` | `line-height` |
| `--sf-progress-scale-container--height` | не задана; задают модификаторы, например `.sf-progress-scale--size-1/3 .sf-progress-scale-container`: `var(--sf-text-size-1/7)` | `height` |
| `--sf-progress-scale-fill-color` | `var(--sf-primary)` | `background-color` |

## См. также

- [Прогресс](/ru/components/feedback/progress-bar/)
- [Progress Scale — Smart-компонент](/ru/smart-components/feedback/progress-scale/)
