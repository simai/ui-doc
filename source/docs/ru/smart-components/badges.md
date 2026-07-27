# Badge

`sf-badge` — компактная метка для статуса, версии, категории, счётчика или короткого признака. Компонент соответствует вариантам Badge из SIMAI UI Kit и автоматически подключается загрузчиком SIMAI Framework.

## Быстрый пример

```html
<sf-badge type="main" scheme="primary" size="1/2" text="Новая версия"></sf-badge>
```

## Параметры

| Атрибут | Значения | По умолчанию |
|---|---|---|
| `type` | `main`, `tonal`, `outline` | `main` |
| `scheme` | `neutral`, `primary`, `secondary`, `tertiary`, `on-surface` | `neutral` |
| `size` | `1/3`, `1/2`, `1` | `1/3` |
| `text` | Короткий текст | Пустая строка |
| `icon` | Имя иконки | Нет |
| `icon-left`, `icon-right` | Иконка с заданной стороны | Нет |
| `icon-position` | `start`, `end`, `left`, `right` | `start` |
| `aria-label` | Доступное название | Нет |

Размеры имеют высоту 20, 24 и 28 пикселей соответственно. В коде используйте системные имена `1/3`, `1/2` и `1`, а не жёсткие пиксельные значения.

## Контракт вариантов

SIMAI UI Kit определяет 42 допустимых сочетания:

- схемы `neutral`, `primary`, `secondary` и `tertiary` поддерживают все три типа и размера;
- схема `on-surface` поддерживает `main` и `outline` во всех трёх размерах;
- сочетание `tonal + on-surface` отсутствует в макете и нормализуется в `main + on-surface`.

Неизвестные значения безопасно заменяются на `main`, `neutral` и `1/3`.

## Тёмная метка

Отдельная схема `inverse` не нужна. Официальный тёмный вариант использует `main + on-surface`:

```html
<sf-badge type="main" scheme="on-surface" size="1/2" text="PHP 8.2"></sf-badge>
```

## Иконки

```html
<sf-badge type="tonal" scheme="primary" size="1" icon="check" text="Готово"></sf-badge>
```

Для метки только с иконкой укажите доступное название. Пустой контейнер текста при этом не создаётся:

```html
<sf-badge type="outline" scheme="neutral" icon="info" aria-label="Информация"></sf-badge>
```

## Слоты

Для пользовательской разметки доступны слоты `icon-left`, `icon-right` и `text`.

```html
<sf-badge type="main" scheme="primary">
    <span slot="icon-left"><i class="sf-icon">arrow_upward</i></span>
    <span slot="text">99+</span>
</sf-badge>
```

Исходный контракт находится в `ui-loader/src/component/badges` и `ui-loader/src/smart/badges`. Репозитории `ui` и `ui-smart` содержат только воспроизводимо сгенерированный результат.
