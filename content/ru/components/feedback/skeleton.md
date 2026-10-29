---
title: "Скелетон"
description: "Занимает место загружаемого содержимого его будущей формой."
profile: reference
---

# Скелетон

Скелетон заранее занимает место загружаемого содержимого и повторяет его
форму: строки текста, аватар, изображение. При замене интерфейс не смещается.
Для короткой операции без известной геометрии берите
[спиннер](/ru/components/feedback/spinner/), для отсутствия данных —
[заполнитель](/ru/components/feedback/placeholder/).

## Пример

:::example {id="components/skeleton/basic" label="Загрузка профиля"}
:::

## Разметка

Минимальную разметку показывает пример выше: контейнер `sf-skeleton` и
внутри него фигуры `sf-skeleton-text`.

- `sf-skeleton` выстраивает фигуры столбцом без промежутков и несёт класс
  движения. Без класса движения фигуры статичны.
- `sf-skeleton-text` — одна фигура. Её высоту задаёт размер
  `sf-skeleton-text--size-*`, ширину — утилиты ширины (`w-full`, `w-1/2`) или
  размеры Framework.
- Форму меняют классы на самой фигуре: `sf-skeleton-circle`,
  `sf-skeleton-square`, `sf-skeleton-rounded`, `sf-skeleton-icon`.
- Контейнер скрыт от экранного диктора (`aria-hidden="true"`); область
  будущего содержимого получает `aria-busy="true"`.

## Варианты

### Форма

Без класса формы фигура — строка со скруглением элемента интерфейса.
`sf-skeleton-circle` даёт круг для аватара или иконки, `sf-skeleton-square`
убирает скругление, `sf-skeleton-rounded` задаёт то же скругление, что и по
умолчанию. `sf-skeleton-icon` делает ширину равной высоте — для квадратной
иконки или круглого аватара вместе с `sf-skeleton-circle`.

:::example {id="components/skeleton/overview" label="Формы скелетона"}
:::

### Размер

Классы `sf-skeleton-text--size-1/7` … `sf-skeleton-text--size-7` задают высоту
фигуры по шкале кегля Framework. Для строки берите размер будущего текста.
Строка-фигура высотой с кегль стоит посередине высоты строки того же размера,
и строки идут одна за другой, как строки текста. Поэтому загружающийся блок
занимает ровно столько места, сколько займёт текст, и страница не прыгает,
когда приходят данные. Круг, квадрат, иконка и фигура с заданной высотой
занимают ровно свою высоту. Переменные `--sf-skeleton-text--height` (фигура)
и `--sf-skeleton-text--line` (её строка) задаются отдельно.
Ступени `1/7`, `1/6` и `1/5` тоньше любого текста — ими рисуют разделитель или
черту под заголовком.

:::example {id="components/skeleton/sizes" label="Размеры фигуры"}
:::

### Движение

Класс на контейнере задаёт движение всех его фигур:
`sf-skeleton--animation-pulse` мягко меняет прозрачность,
`sf-skeleton--animation-wave` проводит по фигуре блик,
`sf-skeleton--animation-none` оставляет фигуры статичными. При системной
настройке уменьшения движения pulse и wave отключаются.

:::example {id="components/skeleton/motion" label="Движение скелетона"}
:::

## Доступность

- Фигуры скрыты от экранного диктора через `aria-hidden="true"` и не получают
  фокус.
- Область будущего содержимого на время загрузки получает `aria-busy="true"`,
  а после замены — `aria-busy="false"`. Если загрузка заметно долгая, сообщите
  о ней текстом в `sr-only` или областью с `role="status"`.
- Ошибка загрузки заменяет скелетон понятным сообщением и действием
  восстановления.
- В режиме принудительных цветов фигуры рисуются системным цветом текста, а
  блик отключается.

## JavaScript

Компонент регистрирует класс `Skeleton`, который собирает контейнер с
фигурами из параметров. `SF.Loader` появляется к событию `sf-loader-init` на
`window`; `SF.Loader.ready('Skeleton', callback)` передаёт класс, когда он
зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Skeleton', (Skeleton) => {
  const skeleton = new Skeleton({param: {count: 3, size: '1', width: '100%, 80%, 60%', animation: 'wave'}});
  document.querySelector('#comments').append(skeleton.render());
}));
```

Параметры: `count` (от 1 до 20 фигур), `size` (ступень высоты), `width` и
`height` (список через запятую, по фигуре на значение: проценты или размеры
Framework вроде `d2`), `animation` (`pulse` — по умолчанию, `wave`, `none`),
`variant` (`text`, `circle`, `square`, `rounded`), `type: 'icon'` для
квадратной фигуры. Контейнер получает `aria-hidden="true"` сам. Событий
компонент не отправляет.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-skeleton` |
| Части | `sf-skeleton-circle`, `sf-skeleton-icon`, `sf-skeleton-rounded`, `sf-skeleton-square`, `sf-skeleton-text`, `sf-skeleton-text--size-1`, `sf-skeleton-text--size-1/2`, `sf-skeleton-text--size-1/3`, `sf-skeleton-text--size-1/4`, `sf-skeleton-text--size-1/5`, `sf-skeleton-text--size-1/6`, `sf-skeleton-text--size-1/7`, `sf-skeleton-text--size-2`, `sf-skeleton-text--size-3`, `sf-skeleton-text--size-4`, `sf-skeleton-text--size-5`, `sf-skeleton-text--size-6`, `sf-skeleton-text--size-7` |
| Модификаторы | `sf-skeleton--animation-none`, `sf-skeleton--animation-pulse`, `sf-skeleton--animation-wave` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-skeleton`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-skeleton-background-color` | Полоски и фигуры-заполнители. | `var(--sf-ui-skeleton)` |
| `--sf-skeleton-highlight-color` | Свет, который пробегает по полоске в анимации волны. | `var(--sf-surface-container-active)`; зависит от animation |
| `--sf-skeleton-radius` | Углы полоски; круг остаётся круглым. | `var(--sf-radius--ui)` |
| `--sf-skeleton-gap` | Расстояние между повторяющимися полосками (строки идут одна за другой без него). | `0` |
| `--sf-skeleton-animation-duration` | Один импульс или одна волна. | `calc(var(--sf-duration-slow) * 3)`; зависит от animation |

```css
.sf-skeleton {
  --sf-skeleton-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-skeleton`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-skeleton-base` | `var(--sf-ui-skeleton)` | `background` |
| `--sf-skeleton-duration` | `calc(var(--sf-duration-slow) * 3)` | `animation` |
| `--sf-skeleton-highlight` | `var(--sf-surface-container-active)` | `background-image` |
| `--sf-skeleton-text--height` | не задана; задают модификаторы, например `.sf-skeleton-text--size-1`: `var(--sf-text-size-1)` | `height`, `block-size`, `margin-top`, `margin-bottom`, `margin-block`, `width`, `inline-size` |
| `--sf-skeleton-text--line` | не задана; задают модификаторы, например `.sf-skeleton-text--size-1`: `var(--sf-text-height-1)` | `margin-top`, `margin-bottom`, `margin-block` |

## См. также

- [Спиннер](/ru/components/feedback/spinner/)
- [Заполнитель](/ru/components/feedback/placeholder/)
- [Скелетон — Smart-компонент](/ru/smart-components/feedback/skeleton/)
