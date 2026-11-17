---
title: "Рисунок"
description: "Картинка, видео или иллюстрация с подписью; пропорция рамки и заполнение или вписывание."
profile: reference
---

# Рисунок

:badge[sf-figure]{variant=outline scheme=on-surface size=1/2} :badge[1.5.0]{variant=outline scheme=on-surface size=1/2}

Рисунок показывает картинку, видео или иллюстрацию в заданной пропорции и
подпись под ней. Берите его, когда изображению нужна подпись или ровная рамка
одной пропорции в статье и галерее. Компонент построен на родных `figure` и
`figcaption`, своего JavaScript у него нет.

## Пример

:::example {id="components/figure/overview" label="Рисунок 16:9 с подписью"}
:::

## Разметка

Минимальную разметку показывает пример выше: `<figure class="sf-figure">`, в нём `<div class="sf-figure-media">` с картинкой и необязательная `<figcaption class="sf-figure-caption">`.

- `.sf-figure` — колонка: медиа, под ним подпись, между ними небольшой
  промежуток.
- `.sf-figure-media` — рамка медиа. Она обрезает содержимое по скруглению
  поверхности. `img`, `video`, `svg`, `canvas`, `iframe` или `picture` внутри
  занимают всю её ширину.
- `.sf-figure-caption` — подпись мелким текстом страницы в роли
  `--sf-on-surface-variant`. Она необязательна.

Задавайте картинке `width` и `height`, чтобы страница заранее оставила ей
место. У картинки, которая только украшает, пустой `alt`.

Блок содержимого `content.figure` рисуется этим компонентом (`props.ratio`:
`auto`, `1/1`, `4/3`, `3/2`, `16/9`, `21/9`; `props.fit`: `cover` или
`contain`), им же рисует свою картинку `content.media`. См.
[Блоки содержимого](/ru/guide/layouts/content-and-data/content-types/).

## Варианты

### Пропорция и вписывание

`sf-figure--ratio-1x1`, `sf-figure--contain` • [справочник](#классы)

Без пропорции рамка повторяет пропорции самого медиа. Именованная пропорция —
`sf-figure--ratio-1x1`, `-4x3`, `-3x2`, `-16x9` или `-21x9` — задаёт рамке
эту пропорцию, и медиа заполняет её, обрезаясь по краям. С
`sf-figure--contain` медиа встаёт в рамку целиком, а остальную часть рамки
занимает заливка (`--sf-surface-container`): логотип или схема никогда не
обрезаются.

:::example {id="components/figure/ratios" label="Одна картинка в пяти пропорциях"}
:::

:::example {id="components/figure/contain" label="Заполнение и вписывание"}
:::

### Подпись поверх картинки

`sf-figure--caption-over`, `sf-figure--caption-plate` • [справочник](#классы)

По умолчанию подпись стоит под картинкой, и на снимке ничего не лежит.
Чтобы положить подпись на картинку, есть два вида.
`sf-figure--caption-over` — белый текст у нижнего края на мягком затемнении,
которое плавно сходит на нет кверху. `sf-figure--caption-plate` — ровная
тёмная полоса под текстом, для длинной подписи и пёстрого снимка. Оба вида
держат контраст 4.5:1 на светлых и тёмных снимках в обеих темах. Подпись выше
картинки растягивает рисунок, а не вылезает на страницу.

:::example {id="components/figure/caption-over" label="Подпись поверх картинки"}
:::

## Доступность

Подпись связана с картинкой родной разметкой `figure` и `figcaption`. В
режиме принудительных цветов граница рамки рисуется цветом `CanvasText`.
## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-figure` |
| Части | `sf-figure-caption`, `sf-figure-grid`, `sf-figure-grid--l`, `sf-figure-grid--masonry`, `sf-figure-grid--s`, `sf-figure-grid--selecting`, `sf-figure-media`, `sf-figure-pick` |
| Модификаторы | `sf-figure--caption-over`, `sf-figure--caption-plate`, `sf-figure--contain`, `sf-figure--expressive`, `sf-figure--ratio-16x9`, `sf-figure--ratio-1x1`, `sf-figure--ratio-21x9`, `sf-figure--ratio-3x2`, `sf-figure--ratio-4x3`, `sf-figure--ratio-auto`, `sf-figure--selected`, `sf-figure--tile` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-figure`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-figure-background-color` | Заливка блока медиа; видна вокруг вписанного изображения или видео. | `var(--sf-surface-container)` |
| `--sf-figure-border-color` | Цвет границы рамки медиа. | `var(--sf-outline-variant)` |
| `--sf-figure-border-width` | Толщина границы рамки медиа; пока не задана, границы нет. | `var(--sf-0)` |
| `--sf-figure-radius` | Скругление углов рамки медиа. | `var(--sf-radius--surface)` |
| `--sf-figure-caption-color` | Цвет подписи. | `var(--sf-on-surface-variant)` |
| `--sf-figure-gap` | Расстояние между медиа и подписью: 8 при любой ширине, 4 при компактной плотности (решение владельца C188 (5)). | `var(--sf-space-1\/3)` |

```css
.sf-figure {
  --sf-figure-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-figure`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-figure--on` | не задана; задают модификаторы, например `.sf-figure-media:not(:has(> img))`: `var(--sf-style--expressive, 0)` | `background-size` |
| `--sf-figure--ramp` | не задана; задают модификаторы, например `.sf-figure.sf-figure--caption-over > .sf-figure-caption`: `calc(var(--sf-space-4) * 4)` | `padding-top`, `padding-block-start`, `background-image` |
| `--sf-figure--ratio` | не задана; задают модификаторы, например `.sf-figure--ratio-1x1`: `1 / 1` | `aspect-ratio` |
| `--sf-figure-grid--columns` | не задана; задают модификаторы, например `.sf-figure-grid`: `2` | `grid-template-columns` |
| `--sf-figure-grid--gap` | не задана; задают модификаторы, например `.sf-figure-grid`: `var(--sf-space-1/3)` | `grid-template-columns`, `grid-gap`, `gap` |
| `--sf-figure-grid--tile` | не задана; задают модификаторы, например `.sf-figure-grid`: `var(--sf-f0)` | `grid-template-columns` |
