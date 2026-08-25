---
title: "Типографика"
description: "Семейства, веса, адаптивные размеры, высоты строк и типографические роли SIMAI Framework."
---

# Типографика

Типографическая система отделяет роль текста от конкретного размера. В проекте
предпочтительно использовать роли заголовков, основного и служебного текста, а
числовые шкалы — для точной настройки.

## Семейства и веса

По умолчанию для `--sf-heading--family`, `--sf-display--family` и
`--sf-text--family` используется `"Inter Variable", sans-serif`.

| Токен веса | Значение |
|:---|---:|
| `--sf-weight--thin` | 100 |
| `--sf-weight--extra-light` | 200 |
| `--sf-weight--light` | 300 |
| `--sf-weight--regular` | 400 |
| `--sf-weight--medium` | 500 |
| `--sf-weight--semi-bold` | 600 |
| `--sf-weight--bold` | 700 |
| `--sf-weight--extra-bold` | 800 |
| `--sf-weight--black` | 900 |

Для утилит и базовых элементов также определены краткие роли:
`--sf-font-weight-light` (300), `regular` (400), `medium` (500) и `bold` (700).

## Адаптивная шкала размеров текста

Основная шкала меняется на границе `960px`.

| Токен | До 960px | От 960px | Токен | До 960px | От 960px |
|:---|---:|---:|:---|---:|---:|
| `--sf-text-size-1/7` | 4px | 4px | `--sf-text-size-1` | 14px | 16px |
| `--sf-text-size-1/6` | 6px | 6px | `--sf-text-size-2` | 16px | 20px |
| `--sf-text-size-1/5` | 8px | 8px | `--sf-text-size-3` | 18px | 24px |
| `--sf-text-size-1/4` | 10px | 10px | `--sf-text-size-4` | 20px | 28px |
| `--sf-text-size-1/3` | 12px | 12px | `--sf-text-size-5` | 22px | 32px |
| `--sf-text-size-1/2` | 12px | 14px | `--sf-text-size-6` | 24px | 36px |
| | | | `--sf-text-size-7` | 28px | 40px |
| | | | `--sf-text-size-8` | 32px | 48px |
| | | | `--sf-text-size-9` | 36px | 56px |
| | | | `--sf-text-size-10` | 40px | 64px |
| | | | `--sf-text-size-11` | 44px | 72px |
| | | | `--sf-text-size-12` | 48px | 80px |

## Высота строки

| Токен | До 960px | От 960px | Токен | До 960px | От 960px |
|:---|---:|---:|:---|---:|---:|
| `--sf-text-height-1/4` | 12px | 12px | `--sf-text-height-1` | 20px | 24px |
| `--sf-text-height-1/3` | 16px | 16px | `--sf-text-height-2` | 24px | 28px |
| `--sf-text-height-1/2` | 16px | 20px | `--sf-text-height-3` | 24px | 36px |
| | | | `--sf-text-height-4` | 28px | 40px |
| | | | `--sf-text-height-5` | 32px | 48px |
| | | | `--sf-text-height-6` | 36px | 52px |
| | | | `--sf-text-height-7` | 40px | 60px |
| | | | `--sf-text-height-8` | 48px | 72px |
| | | | `--sf-text-height-9` | 52px | 80px |
| | | | `--sf-text-height-10` | 60px | 96px |
| | | | `--sf-text-height-11` | 64px | 104px |
| | | | `--sf-text-height-12` | 72px | 120px |

Дополнительно утилиты высоты строки поддерживают относительные варианты:
`line-none` (1), `line-tight` (1.25), `line-snug` (1.375), `line-normal`
(1.5), `line-relaxed` (1.625) и `line-loose` (2).

## Роли текста

Готовые классы связывают семейство, размер, высоту строки и вес:

- `.sf-display-1` — `.sf-display-6` — крупные акцентные надписи;
- `.sf-h-1` — `.sf-h-6` — заголовки, те же роли применяются к `h1`–`h6`;
- `.sf-body-large`, `.sf-body-medium`, `.sf-body-small` — основной текст;
- `.sf-label-large`, `.sf-label-medium`, `.sf-label-small` — подписи элементов;
- `.sf-text-1/4` — `.sf-text-12` — точные роли числовой шкалы.

```html
<h2 class="sf-h-2">Заголовок раздела</h2>
<p class="sf-body-medium">Основной текст интерфейса.</p>
<span class="sf-label-small">Служебная подпись</span>
```

Если проект меняет шрифт, переопределяйте семейства и веса токенами. Это
сохраняет роли и адаптивную шкалу во всех местах использования.

Отступы между заголовками, текстом и самостоятельными блоками описаны отдельно
в разделе [«Вертикальный ритм контента»](/ru/fundamentals/content-spacing/).
