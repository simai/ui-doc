---
extends: _core._layouts.documentation
section: content
title: "Внутренний отступ прокрутки (scroll-padding)"
description: "Внутренний отступ прокрутки (scroll-padding)"
---

# Внутренний отступ прокрутки (scroll-padding)

[https://dev.ru.simai.io/ru/ui/utility/scroll/scroll-padding.php](https://dev.ru.simai.io/ru/ui/utility/scroll/scroll-padding.php)

Модификаторы из пакета `scroll-padding` позволяют задать внутренние отступы при прокрутке, чтобы элементы при переходе к
ним оказывались с заданным отступом от края области просмотра.

## Классы и их значения

| Класс        | Значение                                                                          |
|:-------------|:------------------------------------------------------------------------------------------------------|
| .scroll-p-0  | scroll-padding: var(`--sf-space--size-0`);                                                            |
| .scroll-pt-0 | scroll-padding-top: var(`--sf-space--size-0`);                                                        |
| .scroll-pr-0 | scroll-padding-right: var(`--sf-space--size-0`);                                                      |
| .scroll-pb-0 | scroll-padding-bottom: var(`--sf-space--size-0`);                                                     |
| .scroll-pl-0 | scroll-padding-left: var(`--sf-space--size-0`);                                                       |
| .scroll-px-0 | scroll-padding-left: var(`--sf-space--size-0`);<br/> scroll-padding-right: var(`--sf-space--size-0`); |
| .scroll-py-0 | scroll-padding-top: var(`--sf-space--size-0`);<br/> scroll-padding-bottom: var(`--sf-space--size-0`); |
| .scroll-p-1  | scroll-padding: var(`--sf-space--size-1`);                                                            |
| .scroll-pt-1 | scroll-padding-top: var(`--sf-space--size-1`);                                                        |
| .scroll-pr-1 | scroll-padding-right: var(`--sf-space--size-1`);                                                      |
| .scroll-pb-1 | scroll-padding-bottom: var(`--sf-space--size-1`);                                                     |
| .scroll-pl-1 | scroll-padding-left: var(`--sf-space--size-1`);                                                       |
| .scroll-px-1 | scroll-padding-left: var(`--sf-space--size-1`);<br/> scroll-padding-right: var(`--sf-space--size-1`); |
| .scroll-py-1 | scroll-padding-top: var(`--sf-space--size-1`);<br/> scroll-padding-bottom: var(`--sf-space--size-1`); |
| .scroll-p-2  | scroll-padding: var(`--sf-space--size-2`);                                                            |
| .scroll-pt-2 | scroll-padding-top: var(`--sf-space--size-2`);                                                        |
| .scroll-pr-2 | scroll-padding-right: var(`--sf-space--size-2`);                                                      |
| .scroll-pb-2 | scroll-padding-bottom: var(`--sf-space--size-2`);                                                     |
| .scroll-pl-2 | scroll-padding-left: var(`--sf-space--size-2`);                                                       |
| .scroll-px-2 | scroll-padding-left: var(`--sf-space--size-2`);<br/> scroll-padding-right: var(`--sf-space--size-2`); |
| .scroll-py-2 | scroll-padding-top: var(`--sf-space--size-2`);<br/> scroll-padding-bottom: var(`--sf-space--size-2`); |
| .scroll-p-3  | scroll-padding: var(`--sf-space--size-3`);                                                            |
| .scroll-pt-3 | scroll-padding-top: var(`--sf-space--size-3`);                                                        |
| .scroll-pr-3 | scroll-padding-right: var(`--sf-space--size-3`);                                                      |
| .scroll-pb-3 | scroll-padding-bottom: var(`--sf-space--size-3`);                                                     |
| .scroll-pl-3 | scroll-padding-left: var(`--sf-space--size-3`);                                                       |
| .scroll-px-3 | scroll-padding-left: var(`--sf-space--size-3`);<br/> scroll-padding-right: var(`--sf-space--size-3`); |
| .scroll-py-3 | scroll-padding-top: var(`--sf-space--size-3`);<br/> scroll-padding-bottom: var(`--sf-space--size-3`); |
| .scroll-p-4  | scroll-padding: var(`--sf-space--size-4`);                                                            |
| .scroll-pt-4 | scroll-padding-top: var(`--sf-space--size-4`);                                                        |
| .scroll-pr-4 | scroll-padding-right: var(`--sf-space--size-4`);                                                      |
| .scroll-pb-4 | scroll-padding-bottom: var(`--sf-space--size-4`);                                                     |
| .scroll-pl-4 | scroll-padding-left: var(`--sf-space--size-4`);                                                       |
| .scroll-px-4 | scroll-padding-left: var(`--sf-space--size-4`);<br/> scroll-padding-right: var(`--sf-space--size-4`); |
| .scroll-py-4 | scroll-padding-top: var(`--sf-space--size-4`);<br/> scroll-padding-bottom: var(`--sf-space--size-4`); |
| .scroll-p-5  | scroll-padding: var(`--sf-space--size-5`);                                                            |
| .scroll-pt-5 | scroll-padding-top: var(`--sf-space--size-5`);                                                        |
| .scroll-pr-5 | scroll-padding-right: var(`--sf-space--size-5`);                                                      |
| .scroll-pb-5 | scroll-padding-bottom: var(`--sf-space--size-5`);                                                     |
| .scroll-pl-5 | scroll-padding-left: var(`--sf-space--size-5`);                                                       |
| .scroll-px-5 | scroll-padding-left: var(`--sf-space--size-5`);<br/> scroll-padding-right: var(`--sf-space--size-5`); |
| .scroll-py-5 | scroll-padding-top: var(`--sf-space--size-5`);<br/> scroll-padding-bottom: var(`--sf-space--size-5`); |
| .scroll-p-6  | scroll-padding: var(`--sf-space--size-6`);                                                            |
| .scroll-pt-6 | scroll-padding-top: var(`--sf-space--size-6`);                                                        |
| .scroll-pr-6 | scroll-padding-right: var(`--sf-space--size-6`);                                                      |
| .scroll-pb-6 | scroll-padding-bottom: var(`--sf-space--size-6`);                                                     |
| .scroll-pl-6 | scroll-padding-left: var(`--sf-space--size-6`);                                                       |
| .scroll-px-6 | scroll-padding-left: var(`--sf-space--size-6`);<br/> scroll-padding-right: var(`--sf-space--size-6`); |
| .scroll-py-6 | scroll-padding-top: var(`--sf-space--size-6`);<br/> scroll-padding-bottom: var(`--sf-space--size-6`); |
| .scroll-p-7  | scroll-padding: var(`--sf-space--size-7`);                                                            |
| .scroll-pt-7 | scroll-padding-top: var(`--sf-space--size-7`);                                                        |
| .scroll-pr-7 | scroll-padding-right: var(`--sf-space--size-7`);                                                      |
| .scroll-pb-7 | scroll-padding-bottom: var(`--sf-space--size-7`);                                                     |
| .scroll-pl-7 | scroll-padding-left: var(`--sf-space--size-7`);                                                       |
| .scroll-px-7 | scroll-padding-left: var(`--sf-space--size-7`);<br/> scroll-padding-right: var(`--sf-space--size-7`); |
| .scroll-py-7 | scroll-padding-top: var(`--sf-space--size-7`);<br/> scroll-padding-bottom: var(`--sf-space--size-7`); |
| .scroll-p-8  | scroll-padding: var(`--sf-space--size-8`);                                                            |
| .scroll-pt-8 | scroll-padding-top: var(`--sf-space--size-8`);                                                        |
| .scroll-pr-8 | scroll-padding-right: var(`--sf-space--size-8`);                                                      |
| .scroll-pb-8 | scroll-padding-bottom: var(`--sf-space--size-8`);                                                     |
| .scroll-pl-8 | scroll-padding-left: var(`--sf-space--size-8`);                                                       |
| .scroll-px-8 | scroll-padding-left: var(`--sf-space--size-8`);<br/> scroll-padding-right: var(`--sf-space--size-8`); |
| .scroll-py-8 | scroll-padding-top: var(`--sf-space--size-8`);<br/> scroll-padding-bottom: var(`--sf-space--size-8`); |
| .scroll-p-9  | scroll-padding: var(`--sf-space--size-9`);                                                            |
| .scroll-pt-9 | scroll-padding-top: var(`--sf-space--size-9`);                                                        |
| .scroll-pr-9 | scroll-padding-right: var(`--sf-space--size-9`);                                                      |
| .scroll-pb-9 | scroll-padding-bottom: var(`--sf-space--size-9`);                                                     |
| .scroll-pl-9 | scroll-padding-left: var(`--sf-space--size-9`);                                                       |
| .scroll-px-9 | scroll-padding-left: var(`--sf-space--size-9`);<br/> scroll-padding-right: var(`--sf-space--size-9`); |
| .scroll-py-9 | scroll-padding-top: var(`--sf-space--size-9`);<br/> scroll-padding-bottom: var(`--sf-space--size-9`); |
{.table}

## Описание

Модификаторы `scroll-padding` определяют внутренние отступы, которые применяются к содержимому при прокрутке. Это
помогает при переходе к элементу, чтобы он не был прижат к самому краю области просмотра, обеспечивая лучший обзор
содержимого.

## Синтаксис

Использование модификаторов: `{scroll-модификатор}`

Например:

```html
<div class="snap-x overflow-auto ...">
  <div class="scroll-px-3 snap-start ...">
    <img src="./picture.svg" />
  </div>
  <div class="scroll-px-3 snap-start ...">
    <img src="./picture.svg" />
  </div>
</div>
```

## Пример использования

```html
<div class="snap-x overflow-auto w-full ...">
  <div class="scroll-pl-4 snap-start inline-block bg-surface-1 p-2 ...">Элемент 1</div>
  <div class="scroll-pl-4 snap-start inline-block bg-surface-1 p-2 ...">Элемент 2</div>
  <div class="scroll-pl-4 snap-start inline-block bg-surface-1 p-2 ...">Элемент 3</div>
</div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=overscroll&group=scroll-padding"></iframe>
</div>