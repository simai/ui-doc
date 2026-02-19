---
extends: _core._layouts.documentation
section: content
title: Стиль разделителя
description: Стиль разделителя
---

# Стиль разделителя


В SIMAI Framework с помощью модификаторов можно задать стиль отображения разделителя между элементами. Разделитель может
быть сплошным, пунктирным, точечным, двойным, скрытым или отсутствовать вовсе.

## Таблица классов

| Класс           | Значение                                |
|:----------------|:------------------------------------------------------------|
| .divider-dotted | > :not([hidden]) ~ :not([hidden]) { border-style: dotted; } |
| .divider-dashed | > :not([hidden]) ~ :not([hidden]) { border-style: dashed; } |
| .divider-solid  | > :not([hidden]) ~ :not([hidden]) { border-style: solid; }  |
| .divider-double | > :not([hidden]) ~ :not([hidden]) { border-style: double; } |
| .divider-hidden | > :not([hidden]) ~ :not([hidden]) { border-style: hidden; } |
| .divider-none   | > :not([hidden]) ~ :not([hidden]) { border-style: none; }   |
{.table}

## Описание

Модификаторы стиля разделителя задают, как именно будет выглядеть черта между элементами. Можно выбрать один из
доступных стилей:

- `divider-dotted` — точечный разделитель.
- `divider-dashed` — пунктирный разделитель.
- `divider-solid` — сплошной разделитель (значение по умолчанию в большинстве случаев).
- `divider-double` — двойная линия разделителя.
- `divider-none` — разделитель не отображается, толщина устанавливается в ноль.
- `divider-hidden` — аналогично `divider-none`, но учитывает особенности отображения в таблицах с
  `border-collapse: collapse;`.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Позволяет применить модификатор, начиная с определённого размера экрана (sm, md, lg, xl).

- Модификатор *(обязательный параметр)*:

    - `divider-{dotted|dashed|solid|double|none|hidden}` — стиль разделителя.

## Пример использования

```html
<div class="grid grid-col-3 divider-dashed divider-y-1 ...">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```

В данном примере используется `divider-dashed` для пунктирной линии между элементами по вертикали (`divider-y-1` задаёт
её толщину).

## Адаптивность

Для изменения стиля разделителя на разных размерах экрана добавьте префикс контрольной точки:

```html
<div class="md:divider-solid divider-y-1 ...">
    <!-- На экранах Medium и больше разделитель станет сплошным -->
</div>
```
