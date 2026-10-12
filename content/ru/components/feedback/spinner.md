---
title: "Спиннер"
description: "Показывает, что операция выполняется, когда её длительность и процент неизвестны."
profile: reference
---

# Спиннер

Спиннер показывает, что операция выполняется, когда процент завершения
неизвестен. Если процент известен, берите
[индикатор прогресса](/ru/components/feedback/progress-bar/); для формы или
карточки с предсказуемой геометрией лучше подходит
[скелетон](/ru/components/feedback/skeleton/).

## Пример

:::example {id="components/spinner/basic" label="Спиннер с подписью"}
:::

## Разметка

Минимальная разметка — один пустой блок `sf-loader-container` с атрибутами.
Изображение и подпись скрипт компонента достраивает сам: часть
`sf-loader--loading-indicator` или `sf-loader--circles` с SVG и подпись
`sf-loader--text`.

- `data-infinite="true"` повторяет анимацию, пока спиннер на странице. Без
  него анимация проходит один цикл и останавливается, поэтому для ожидания
  неизвестной длительности атрибут обязателен.
- `data-label` — видимая подпись под изображением. Пустой `data-label` или его
  отсутствие скрывает спиннер от экранного диктора.
- Блок выравнивает содержимое по центру своей ширины.
- Тонкая настройка: `data-dots` (число точек, от 3 до 32), `data-filled`
  (число ярких точек), `data-direction` (`clockwise` или `counterclockwise`),
  `data-width`, `data-height`, `data-stroke-width` и `data-dot-radius` в
  пикселях. Цвет задаёт переменная `--sf-loader--color`.

## Варианты

### Вид

`data-variant="arc"` рисует дугу, которая бежит по кольцу, — вид по
умолчанию. `data-variant="dots"` рисует кольцо точек, по которому бежит
волна яркости. Держите один вид во всём интерфейсе.

:::example {id="components/spinner/variant" label="Виды спиннера"}
:::

### Размер

Четыре ступени — `sf-loader--size-1/2`, `sf-loader--size-1`,
`sf-loader--size-2` и `sf-loader--size-3` — меняют диаметр, толщину линии и
кегль подписи. Берите наименьший размер, который остаётся заметным: `1/2` —
внутри кнопки или поля, `2` и `3` — для целой области.

:::example {id="components/spinner/sizes" label="Размеры спиннера"}
:::

## Доступность

- Область, которая ждёт данных, получает `aria-busy="true"` до окончания
  загрузки.
- Спиннер с подписью читается как обычный текст. Чтобы подпись объявлялась
  при появлении, задайте `data-announce="true"`: скрипт поставит
  `role="status"` и `aria-live="polite"`.
- Спиннер без подписи скрыт от экранного диктора; тогда о загрузке сообщает
  соседний текст или `aria-busy`.
- При системной настройке уменьшения движения анимация останавливается, а
  дуга остаётся видимой неподвижной.

## JavaScript

Скрипт компонента находит блоки `.sf-loader-container` при загрузке страницы
и в добавленной позже разметке. После изменения атрибутов перерисуйте
спиннер через `SF.Spinner.render(element)`.

Компонент регистрирует класс `Spinner`. `SF.Loader` появляется к событию
`sf-loader-init` на `window`; `SF.Loader.ready('Spinner', callback)` передаёт
класс, когда он зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Spinner', (Spinner) => {
  const spinner = new Spinner({param: {variant: 'dots', label: 'Загрузка', infinite: true}});
  document.querySelector('#results').append(spinner.render());
}));
```

Параметры повторяют атрибуты: `variant`, `label`, `infinite`, `announce`,
`dots`, `filled`, `direction`, `width`, `height`, `strokeWidth`, `dotRadius`.
Подпись по умолчанию — `Loading...`; задайте свою. Класс всегда пишет
`data-width` и `data-height` (по умолчанию 58 пикселей), поэтому диаметр
собранного спиннера задают параметры `width` и `height`, а не класс размера.
Событий компонент не отправляет.

## Классы

| Что | Классы |
|:---|:---|
| Части | `sf-loader-container`, `sf-loader-dot`, `sf-loader-dot--active`, `sf-loader-ring-accent`, `sf-loader-ring-filled`, `sf-loader-svg` |
| Модификаторы | `sf-loader--circles`, `sf-loader--infinite`, `sf-loader--loading-indicator`, `sf-loader--text` |
| Размеры | `sf-loader--size-1`, `sf-loader--size-1/2`, `sf-loader--size-2`, `sf-loader--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-loader`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-loader--color` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-primary)` | `color` |
| `--sf-loader-cycle-duration` | не задана; задают модификаторы, например `.sf-loader-container`: `calc(var(--sf-duration-slow) * 6)` | `animation` |
| `--sf-loader-dot-duration` | не задана; задают модификаторы, например `.sf-loader-container`: `calc(var(--sf-duration-slow) * 3)` | `animation`, `animation-delay` |
| `--sf-loader-stroke-width` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-a6)` | `stroke-width` |
| `--sf-loader-svg-height` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-d2)` | `height` |
| `--sf-loader-svg-width` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-d2)` | `width` |
| `--sf-loader-text-gap` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-space-1/2)` | `gap` |
| `--sf-loader-text-size` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-loader-track-color` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-surface-container)` | `stroke` |

## См. также

- [Прогресс](/ru/components/feedback/progress-bar/)
- [Скелетон](/ru/components/feedback/skeleton/)
- [Spinner — Smart-компонент](/ru/smart-components/feedback/spinner/)
