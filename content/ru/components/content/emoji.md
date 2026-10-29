---
title: "Emoji"
description: "Выводит emoji в размер строки текста цветным системным шрифтом."
profile: reference
---

# Emoji

Компонент выводит emoji цветным системным шрифтом и согласует его размер с
типографической шкалой: символ стоит в строке текста ровно и не сдвигает
её высоту. Берите его для эмоциональных акцентов в тексте; статус и действия
передавайте [иконками](/ru/components/content/icons/) и словами.

## Пример

:::example {id="components/emoji/overview" label="Emoji в строке текста"}
:::

## Разметка

Минимальную разметку показывает пример выше: `<span class="sf-emoji">` с
символом внутри.

- Без класса размера emoji берёт ступень `1`, как обычный текст.
- Смысловому emoji задайте `role="img"` и `aria-label`, декоративному —
  `aria-hidden="true"` (см. «Доступность»).

## Варианты

### Размер

Размеры `1/3`, `1/2`, `1`, `2` и `3` совпадают со ступенями текста:
выбирайте ту же ступень, что у строки, где стоит символ, или крупнее для
отдельного акцента.

:::example {id="components/emoji/sizes" label="Размеры emoji"}
:::

## Доступность

- Смысловой символ получает `role="img"` и `aria-label` с его значением:
  иначе экранный диктор прочитает системное название символа или пропустит
  его.
- Декоративный символ скрывайте: `aria-hidden="true"`.
- Не сообщайте статус, ошибку или действие только emoji: рядом нужен текст.

:::example {id="components/emoji/semantics" label="Смысловой и декоративный emoji"}
:::

## JavaScript

Разметка `sf-emoji` работает без скрипта. Компонент регистрирует класс
`Emoji`, который собирает элемент из параметров: `emoji` — сам символ,
`name` — короткий код вместо символа, `label` или `title` — доступное имя,
`decorative` — скрыть символ от вспомогательных технологий, `size`.
Без `decorative` элемент получает `role="img"` и `aria-label`. Событий
компонент не отправляет.

`skin` задаёт оттенок кожи: `1`–`5` или `light`, `medium-light`, `medium`,
`medium-dark`, `dark`. Оттенок — это часть символа, а не стиль: класс
дописывает модификатор после эмодзи, который его принимает (руки, люди), и
оставляет остальные символы как есть.

`SF.Loader` появляется к событию `sf-loader-init` на `window`;
`SF.Loader.ready('Emoji', callback)` передаёт класс, когда он
зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Emoji', (Emoji) => {
  const emoji = new Emoji({param: {emoji: '🎉', label: 'Праздник', size: '2'}});
  const wave = new Emoji({param: {emoji: '👋', label: 'Привет', skin: 'medium'}});
  document.querySelector('#release-note').prepend(emoji.render(), wave.render());
}));
```

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-emoji` |
| Размеры | `sf-emoji--size-1`, `sf-emoji--size-1/2`, `sf-emoji--size-1/3`, `sf-emoji--size-2`, `sf-emoji--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид смарт-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-emoji`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-emoji--font-family` | `"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", emoji, sans-serif` | `font-family` |
| `--sf-emoji--font-size` | `var(--sf-text-size-1)` | `font-size` |
| `--sf-emoji--line-height` | `var(--sf-text-height-1)` | `height`, `block-size`, `width`, `inline-size`, `line-height` |

## См. также

- [Иконки](/ru/components/content/icons/)
