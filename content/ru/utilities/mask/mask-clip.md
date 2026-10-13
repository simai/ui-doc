---
title: "Область маски"
description: "Задаёт, по какой области элемента обрезается маска: по рамке, отступам, содержимому или по тексту."
---

# Область маски

Классы `mask-*` этой группы задают `mask-clip` — область, за пределами которой
элемент скрыт, даже если маска там непрозрачна. Берите их, чтобы оставить
видимым только содержимое без отступов или показать фон сквозь буквы.

## Пример

### Области

Сплошная маска на элементе с прозрачной рамкой и внутренним отступом. Пунктирная рамка показывает границы элемента с маской.

:::example {id="utilities/mask/mask-clip" label="Области обрезки маски"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `mask-content` | `mask-clip: content-box` | — |
| `mask-padding` | `mask-clip: padding-box` | — |
| `mask-margin` | `mask-clip: margin-box` | — |
| `mask-border` | `mask-clip: border-box` | — |
| `mask-fill` | `mask-clip: fill-box` | — |
| `mask-stroke` | `mask-clip: stroke-box` | — |
| `mask-viewbox` | `mask-clip: view-box` | — |
| `mask-text` | `mask-clip: text; -webkit-text-fill-color: transparent` | — |
| `mask-none` | `mask-clip: no-clip` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

Классы маски не задают саму маску: изображение маски (`mask-image`) задаётся
в CSS проекта, как в примерах на этой странице.

### Какую область выбрать

| Класс | Элемент виден в пределах |
| :--- | :--- |
| `mask-border` | рамки — значение по умолчанию |
| `mask-padding` | внутреннего отступа, без рамки |
| `mask-content` | содержимого, без отступа и рамки |
| `mask-none` | маски без обрезки |
| `mask-text` | букв текста элемента |
| `mask-fill`, `mask-stroke`, `mask-viewbox` | области заливки, обводки или `viewBox` элемента SVG |

### Фон сквозь текст

`mask-text` обрезает маску по буквам и делает их заливку прозрачной: сквозь
текст виден фон элемента.

```css
.gradient-title {
  background-image: linear-gradient(90deg, var(--sf-primary), var(--sf-tertiary));
  -webkit-mask-image: linear-gradient(#000, #000);
  mask-image: linear-gradient(#000, #000);
}
```

```html
<h2 class="gradient-title mask-text">Заголовок</h2>
```

## Ограничения

- `mask-margin` задаёт значение `margin-box`, которого нет у свойства
  `mask-clip`: браузер отбрасывает объявление, и маска обрезается по рамке, как
  с `mask-border`.
- Значение `text` есть только у свойства с префиксом `-webkit-mask-clip`. В
  браузере без него маска не обрезается по буквам, а текст всё равно остаётся
  прозрачным — проверьте `mask-text` в нужных браузерах.
- `mask-fill`, `mask-stroke` и `mask-viewbox` относятся к элементам SVG; у
  элемента HTML они действуют как `mask-border`.
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Вложение маски](/ru/utilities/mask/mask-origin/)
- [Положение маски](/ru/utilities/mask/mask-position/)
- [Повтор маски](/ru/utilities/mask/mask-repeat/)
- [Размер маски](/ru/utilities/mask/mask-size/)
- [Композиция маски](/ru/utilities/mask/mask-composite/)
- [Режим маски](/ru/utilities/mask/mask-mode/)
- [Тип маски](/ru/utilities/mask/mask-type/)
- [Область фона](/ru/utilities/background/background-clip/)
