---
extends: _core._layouts.documentation
section: content
title: "Перенос строк (word-break)"
description: "Перенос строк (word-break)"
---

# Перенос строк (word-break)


С помощью модификаторов можно управлять переносом строк, когда слова не помещаются в отведённую ширину.

## Таблица классов

| Класс              | Значение                                        |
|:-------------------|:------------------------------------------------|
| .text-break-normal | overflow-wrap: normal;<br/> word-break: normal; |
| .text-break-word   | overflow-wrap: break-word;                      |
| .text-break-all    | word-break: break-all;                          |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `text-break-normal` – перенос строк происходит по обычным правилам переноса.
    - `text-break-word` – слова могут быть разбиты в произвольных точках, если они не помещаются полностью.
    - `text-break-all` – слова переносятся, чтобы поместиться в заданную ширину блока.

## Примеры использования

### **Обычный перенос**  

Модификатор `text-break-normal` отображает текст, как обычно, не перенося слова внутри себя, кроме обычных правил
переноса (например, пробелов):

```html
<p class="text-break-normal ...">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```

### **Перенос в словах**  

Модификатор `text-break-word` позволяет переносить слишком длинные слова, разрывая их на части:

```html
<p class="text-break-word ...">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```

### **Общий перенос**  

Модификатор `text-break-all` делает перенос слов в любом месте, чтобы текст полностью заполнял по ширине родительский
элемент:

```html
<p class="text-break-all ...">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```
