---
title: "Вид курсора"
description: "Задаёт вид указателя мыши над элементом: рука, запрет, ожидание, перетаскивание, изменение размера."
---

# Вид курсора

Классы `cursor-*` задают свойство `cursor` — вид указателя мыши над элементом.
Берите их, когда элемент ведёт себя не так, как подсказывает его тег:
щёлкается, перетаскивается, растягивается или временно недоступен.

## Пример

### Действия и состояния

Наведите указатель на плитку: курсор принимает вид из её класса.

:::example {id="utilities/interactivity/cursor" label="Курсоры действий и состояний"}
:::

### Изменение размера

Курсоры для границ и углов, за которые тянут, и для разделителей колонок и
строк.

:::example {id="utilities/interactivity/cursor-resize" label="Курсоры изменения размера"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `cursor-{значение}` | `cursor: {значение}` | `auto`, `default`, `pointer`, `wait`, `text`, `move`, `help`, `progress`, `crosshair`, `cell`, `alias`, `copy` |
| `cursor-grab` | `cursor: -webkit-grab; cursor: grab` | — |
| `cursor-grabbing` | `cursor: -webkit-grabbing; cursor: grabbing` | — |
| `cursor-not-allowed` | `cursor: not-allowed` | — |
| `cursor-no-drop` | `cursor: no-drop` | — |
| `cursor-context-menu` | `cursor: context-menu` | — |
| `cursor-zoom-in` | `cursor: -webkit-zoom-in; cursor: zoom-in` | — |
| `cursor-zoom-out` | `cursor: -webkit-zoom-out; cursor: zoom-out` | — |
| `cursor-all-scroll` | `cursor: all-scroll` | — |
| `cursor-{значение}-resize` | `cursor: {значение}-resize` | `w`, `n`, `ew`, `ns`, `ne`, `nw`, `se`, `sw`, `nesw`, `nwse`, `col`, `row` |
| `cursor-e-resize` | `cursor: e-resize` | — |
| `cursor-s-resize` | `cursor: s-resize` | — |
| `cursor-vertical-text` | `cursor: vertical-text` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

| Класс | Когда |
| :--- | :--- |
| `cursor-pointer` | элемент без ссылки или кнопки, который реагирует на щелчок |
| `cursor-not-allowed` | действие сейчас недоступно |
| `cursor-wait`, `cursor-progress` | идёт загрузка; с `progress` интерфейс остаётся рабочим |
| `cursor-grab`, `cursor-grabbing` | элемент можно перетащить; второй — во время перетаскивания |
| `cursor-move` | элемент перемещается в любую сторону |
| `cursor-text` | текст можно выделить или отредактировать |
| `cursor-help` | у элемента есть подсказка |
| `cursor-zoom-in`, `cursor-zoom-out` | щелчок увеличивает или уменьшает изображение |
| `cursor-col-resize`, `cursor-row-resize` | разделитель колонок или строк |
| `cursor-{сторона}-resize` | граница или угол, за который тянут: `n`, `e`, `s`, `w`, `ne`, `nw`, `se`, `sw`, `ew`, `ns`, `nesw`, `nwse` |

```html
<div role="button" tabindex="0" class="cursor-pointer">Открыть карточку</div>
<img src="photo.jpg" alt="Фото товара" class="cursor-zoom-in">
```

Ссылке с `href` и доступной кнопке курсор-руку задаёт базовый слой
Framework, класс им не нужен. Кнопка, у которой есть класс `cursor-*`, берёт
вид из класса.

## Ограничения

- Курсор есть только у мыши и стилуса; на сенсорном экране класс ничего не
  показывает. Не передавайте через курсор смысл, который нужен всем.
- `cursor-not-allowed` не запрещает щелчок: элементу нужен атрибут
  `disabled` или обработчик, который ничего не делает.
- У элемента с [`pointer-event-none`](/ru/utilities/forms/pointer-events/)
  свой курсор не показывается.
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [События указателя](/ru/utilities/forms/pointer-events/)
- [Выделение текста](/ru/utilities/interactivity/user-select/)
- [Изменение размера](/ru/utilities/forms/resize/)
