---
extends: _core._layouts.documentation
section: content
title: Внешний отступ прокрутки
description: Внешний отступ прокрутки
---

# Внешний отступ прокрутки

!rtags[scroll-margin]



Модификаторы из пакета `scroll-margin` позволяют задать дополнительные отступы вокруг элементов при прокрутке, улучшая
видимость и удобство навигации.

## Классы и их значения

| Класс              | Значение                                                            |
|:-------------------|:----------------------------------------------------------------------------------------|
| .scroll-m-0        | scroll-margin: var(`--sf-space-0`);                                                     |
| .scroll-mt-0       | scroll-margin-top: var(`--sf-space-0`);                                                 |
| .scroll-mr-0       | scroll-margin-right: var(`--sf-space-0`);                                               |
| .scroll-m-bottom-0 | scroll-margin-bottom: var(`--sf-space-0`);                                              |
| .scroll-ml-0       | scroll-margin-left: var(`--sf-space-0`);                                                |
| .scroll-mx-0       | scroll-margin-left: var(`--sf-space-0`);<br/> scroll-margin-right: var(`--sf-space-0`); |
| .scroll-my-0       | scroll-margin-top: var(`--sf-space-0`);<br/> scroll-margin-bottom: var(`--sf-space-0`); |
| .scroll-m-1        | scroll-margin: var(`--sf-space-1`);                                                     |
| .scroll-mt-1       | scroll-margin-top: var(`--sf-space-1`);                                                 |
| .scroll-mr-1       | scroll-margin-right: var(`--sf-space-1`);                                               |
| .scroll-m-bottom-1 | scroll-margin-bottom: var(`--sf-space-1`);                                              |
| .scroll-ml-1       | scroll-margin-left: var(`--sf-space-1`);                                                |
| .scroll-mx-1       | scroll-margin-left: var(`--sf-space-1`);<br/> scroll-margin-right: var(`--sf-space-1`); |
| .scroll-my-1       | scroll-margin-top: var(`--sf-space-1`);<br/> scroll-margin-bottom: var(`--sf-space-1`); |
| .scroll-m-2        | scroll-margin: var(`--sf-space-2`);                                                     |
| .scroll-mt-2       | scroll-margin-top: var(`--sf-space-2`);                                                 |
| .scroll-mr-2       | scroll-margin-right: var(`--sf-space-2`);                                               |
| .scroll-m-bottom-2 | scroll-margin-bottom: var(`--sf-space-2`);                                              |
| .scroll-ml-2       | scroll-margin-left: var(`--sf-space-2`);                                                |
| .scroll-mx-2       | scroll-margin-left: var(`--sf-space-2`);<br/> scroll-margin-right: var(`--sf-space-2`); |
| .scroll-my-2       | scroll-margin-top: var(`--sf-space-2`);<br/> scroll-margin-bottom: var(`--sf-space-2`); |
| .scroll-m-3        | scroll-margin: var(`--sf-space-3`);                                                     |
| .scroll-mt-3       | scroll-margin-top: var(`--sf-space-3`);                                                 |
| .scroll-mr-3       | scroll-margin-right: var(`--sf-space-3`);                                               |
| .scroll-m-bottom-3 | scroll-margin-bottom: var(`--sf-space-3`);                                              |
| .scroll-ml-3       | scroll-margin-left: var(`--sf-space-3`);                                                |
| .scroll-mx-3       | scroll-margin-left: var(`--sf-space-3`);<br/> scroll-margin-right: var(`--sf-space-3`); |
| .scroll-my-3       | scroll-margin-top: var(`--sf-space-3`);<br/> scroll-margin-bottom: var(`--sf-space-3`); |
| .scroll-m-4        | scroll-margin: var(`--sf-space-4`);                                                     |
| .scroll-mt-4       | scroll-margin-top: var(`--sf-space-4`);                                                 |
| .scroll-mr-4       | scroll-margin-right: var(`--sf-space-4`);                                               |
| .scroll-m-bottom-4 | scroll-margin-bottom: var(`--sf-space-4`);                                              |
| .scroll-ml-4       | scroll-margin-left: var(`--sf-space-4`);                                                |
| .scroll-mx-4       | scroll-margin-left: var(`--sf-space-4`);<br/> scroll-margin-right: var(`--sf-space-4`); |
| .scroll-my-4       | scroll-margin-top: var(`--sf-space-4`);<br/> scroll-margin-bottom: var(`--sf-space-4`); |
| .scroll-m-5        | scroll-margin: var(`--sf-space-5`);                                                     |
| .scroll-mt-5       | scroll-margin-top: var(`--sf-space-5`);                                                 |
| .scroll-mr-5       | scroll-margin-right: var(`--sf-space-5`);                                               |
| .scroll-m-bottom-5 | scroll-margin-bottom: var(`--sf-space-5`);                                              |
| .scroll-ml-5       | scroll-margin-left: var(`--sf-space-5`);                                                |
| .scroll-mx-5       | scroll-margin-left: var(`--sf-space-5`);<br/> scroll-margin-right: var(`--sf-space-5`); |
| .scroll-my-5       | scroll-margin-top: var(`--sf-space-5`);<br/> scroll-margin-bottom: var(`--sf-space-5`); |
| .scroll-m-6        | scroll-margin: var(`--sf-space-6`);                                                     |
| .scroll-mt-6       | scroll-margin-top: var(`--sf-space-6`);                                                 |
| .scroll-mr-6       | scroll-margin-right: var(`--sf-space-6`);                                               |
| .scroll-m-bottom-6 | scroll-margin-bottom: var(`--sf-space-6`);                                              |
| .scroll-ml-6       | scroll-margin-left: var(`--sf-space-6`);                                                |
| .scroll-mx-6       | scroll-margin-left: var(`--sf-space-6`);<br/> scroll-margin-right: var(`--sf-space-6`); |
| .scroll-my-6       | scroll-margin-top: var(`--sf-space-6`);<br/> scroll-margin-bottom: var(`--sf-space-6`); |
| .scroll-m-7        | scroll-margin: var(`--sf-space-7`);                                                     |
| .scroll-mt-7       | scroll-margin-top: var(`--sf-space-7`);                                                 |
| .scroll-mr-7       | scroll-margin-right: var(`--sf-space-7`);                                               |
| .scroll-m-bottom-7 | scroll-margin-bottom: var(`--sf-space-7`);                                              |
| .scroll-ml-7       | scroll-margin-left: var(`--sf-space-7`);                                                |
| .scroll-mx-7       | scroll-margin-left: var(`--sf-space-7`);<br/> scroll-margin-right: var(`--sf-space-7`); |
| .scroll-my-7       | scroll-margin-top: var(`--sf-space-7`);<br/> scroll-margin-bottom: var(`--sf-space-7`); |
| .scroll-m-8        | scroll-margin: var(`--sf-space-8`);                                                     |
| .scroll-mt-8       | scroll-margin-top: var(`--sf-space-8`);                                                 |
| .scroll-mr-8       | scroll-margin-right: var(`--sf-space-8`);                                               |
| .scroll-m-bottom-8 | scroll-margin-bottom: var(`--sf-space-8`);                                              |
| .scroll-ml-8       | scroll-margin-left: var(`--sf-space-8`);                                                |
| .scroll-mx-8       | scroll-margin-left: var(`--sf-space-8`);<br/> scroll-margin-right: var(`--sf-space-8`); |
| .scroll-my-8       | scroll-margin-top: var(`--sf-space-8`);<br/> scroll-margin-bottom: var(`--sf-space-8`); |
| .scroll-m-9        | scroll-margin: var(`--sf-space-9`);                                                     |
| .scroll-mt-9       | scroll-margin-top: var(`--sf-space-9`);                                                 |
| .scroll-mr-9       | scroll-margin-right: var(`--sf-space-9`);                                               |
| .scroll-m-bottom-9 | scroll-margin-bottom: var(`--sf-space-9`);                                              |
| .scroll-ml-9       | scroll-margin-left: var(`--sf-space-9`);                                                |
| .scroll-mx-9       | scroll-margin-left: var(`--sf-space-9`);<br/> scroll-margin-right: var(`--sf-space-9`); |
| .scroll-my-9       | scroll-margin-top: var(`--sf-space-9`);<br/> scroll-margin-bottom: var(`--sf-space-9`); |
{.table}

## Описание

Модификаторы `scroll-margin` определяют отступы, которые учитываются при прокрутке до элемента. Это позволяет обеспечить
более удобный просмотр контента, так как при переходе к элементу с помощью навигации или якорей он будет отображаться с
заданным отступом.

## Синтаксис

Использование модификаторов: `{scroll-модификатор}`

Например:

```html
<div class="snap-x overflow-auto ...">
  <div class="scroll-mx-3 snap-start ...">
    <img src="./picture.svg" />
  </div>
  <div class="scroll-mx-3 snap-start ...">
    <img src="./picture.svg" />
  </div>
</div>
```

## Пример использования

```html
<div class="snap-x overflow-auto w-full ...">
  <div class="scroll-m-left-3 snap-start inline-block bg-surface-1 p-2 ...">Элемент 1</div>
  <div class="scroll-m-left-3 snap-start inline-block bg-surface-1 p-2 ...">Элемент 2</div>
  <div class="scroll-m-left-3 snap-start inline-block bg-surface-1 p-2 ...">Элемент 3</div>
</div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=overscroll&group=scroll-margin"></iframe>
</div>
