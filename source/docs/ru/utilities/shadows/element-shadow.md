---
extends: _core._layouts.documentation
section: content
title: Тень элемента
description: Тень элемента
---

# Тень элемента

[https://dev.ru.simai.io/ru/ui/utility/shadow/box-shadow.php](https://dev.ru.simai.io/ru/ui/utility/shadow/box-shadow.php)

В **SIMAI Framework** с помощью модификаторов можно задать тень элемента.  
Модификаторы позволяют изменять глубину тени, а также задавать тень при наведении курсора (`hover`).

## Классы

| Класс     | Значение                       |
|:----------|:-------------------------------|
| .shadow-0 | `--sf-shadow--level-ratio`: 0  |
| .shadow-1 | `--sf-shadow--level-ratio`: 1  |
| .shadow-2 | `--sf-shadow--level-ratio`: 2  |
| .shadow-3 | `--sf-shadow--level-ratio`: 4  |
| .shadow-4 | `--sf-shadow--level-ratio`: 8  |
| .shadow-5 | `--sf-shadow--level-ratio`: 16 |
{.table}

**hover:** для изменения уровня тени при наведении используйте `hover:shadow-{0...5}`.

## Описание

Модификаторы тени (`shadow-{0...5}`) в **SIMAI Framework** устанавливают глубину тени для элементов, задавая переменную
`--sf-shadow--level-ratio`. Чем выше число, тем более выражена тень. С помощью состояния `hover` можно задать более
глубокую тень при наведении курсора, что создает визуальный эффект приподнятости или интерактивности элемента.

## Синтаксис

- `shadow-{0...5}` – задать уровень тени.
- `hover:shadow-{0...5}` – задать уровень тени при наведении.

## Примеры использования

### Карточки и другие интерактивные элементы

- Вариант 1: `border hover:shadow-2`  
      Элемент изначально с рамкой, при наведении появляется тень.
- Вариант 2: `shadow-1 hover:shadow-2`  
  Элемент изначально с лёгкой тенью, при наведении тень становится глубже.

### FAB элементы 

`shadow-3 hover:shadow-4` – плавающая кнопка с глубокими тенями.

### Всплывающие окна:

`shadow-5` – для глубоких теней и чёткого выделения всплывающего окна.

```html
<div class="border hover:shadow-2 p-2 radius-1/2">
    Карточка с тенью при наведении
</div>

<button class="shadow-1 hover:shadow-2 p-2 radius-1/2">
    Кнопка с увеличением тени при наведении
</button>

<div class="shadow-3 hover:shadow-4 w-8 h-8 radius-full flex items-cross-center content-main-center">
    FAB
</div>

<div class="shadow-5 p-4 radius-1/3">
    Всплывающее окно с глубокой тенью
</div>
```
