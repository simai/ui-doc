---
extends: _core._layouts.documentation
section: content
title: "Метод расчёта размера элемента (box-sizing)"
description: "Метод расчёта размера элемента (box-sizing)"
---

# Метод расчёта размера элемента (box-sizing)

[https://dev.ru.simai.io/ru/ui/utility/layout/box-sizing.php](https://dev.ru.simai.io/ru/ui/utility/layout/box-sizing.php)

Модификаторы `box-border` и `box-content` позволяют контролировать метод расчёта размера элемента с учётом его
внутренних отступов (padding) и границ (border).

В **текущей версии** фреймворка адаптивности для данных модификаторов нет — они всегда будут применяться независимо от
размеров области просмотра.

## Классы и значения

| Класс        | Значение                 |
|:-------------|:-------------------------|
| .box-border  | box-sizing: border-box;  |
| .box-content | box-sizing: content-box; |
{.table}

### **box-border**  
При использовании класса `box-border` размеры элемента (width, height) включают в себя не только контент, но и
внутренние отступы (padding), а также границы (border). Это упрощает работу с размерами элементов, поскольку указанные
размеры становятся итоговыми габаритами элемента.

Пример:

```html
<div class="box-border h-d9 w-d9 p-1 border-4 border-primary bg-surface-0 radius-1/2">
    <div class="h-full w-full bg-primary-container radius-1/3"> ... </div>
</div>
```

### **box-content**  
При использовании класса `box-content` поведение соответствует стандартному свойству `box-sizing: content-box`. В этом
случае, указанные размеры относятся к контенту элемента, а внутренние отступы и границы расширяют итоговый размер.

Пример:

```html
<div class="box-content h-d9 w-d9 p-1 border-4 border-primary bg-surface-0 radius-1/2">
    <div class="h-full w-full bg-primary-container radius-1/3"> ... </div>
</div>
```

Использование модификаторов `box-border` или `box-content` зависит от предпочтений в организации размеров элементов. По
умолчанию во фреймворке нередко используется `box-border` (border-box), чтобы заданные размеры элементов были итоговыми
габаритами, упрощая верстку.
