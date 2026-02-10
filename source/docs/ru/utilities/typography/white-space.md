---
extends: _core._layouts.documentation
section: content
title: "Обработка пробелов (white-space)"
description: "Обработка пробелов (white-space)"
---

# Обработка пробелов (white-space)

[https://dev.ru.simai.io/ru/ui/utility/typography/white-space.php](https://dev.ru.simai.io/ru/ui/utility/typography/white-space.php)

С помощью модификаторов можно управлять тем, как обрабатываются пробельные символы при отображении текста.

## Таблица классов

| Класс              | Значение               |
|:-------------------|:-----------------------|
| .wrap-none         | white-space: nowrap;   |
| .pre               | white-space: pre;      |
| .pre-line          | white-space: pre-line; |
| .pre-wrap          | white-space: pre-wrap; |
| .whitespace-normal | white-space: normal;   |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `wrap-none` – отображает текст в одну строку без переноса, последовательность пробелов сводится к одному пробелу.
    - `pre` – сохраняет все пробелы и переводы строк, как в исходном тексте.
    - `pre-line` – последовательные пробелы сводятся к одному, строки переносятся по символам новой строки и при
      необходимости.
    - `pre-wrap` – сохраняет пробелы и переводы строк, строки могут переноситься при необходимости для заполнения
      области.
    - `whitespace-normal` – последовательные пробелы сводятся к одному, переносы строк интерпретируются как пробелы, при
      необходимости текст переносится.

## Примеры использования

### **wrap-none**  

Модификатор `wrap-none` сохраняет текст в одной строке без переноса, пробелы сжимаются до одного:

```html
<p class="wrap-none ...">
	Lorem Ipsum is simply dummy text of the printing and typesetting 
			industry. Lorem Ipsum has been the industry's standard dummy 
					text ever since the 1500s, when an unknown printer took 
							a galley of type and scrambled it to make a type specimen book.
</p>
```

### **pre**  

Модификатор `pre` сохраняет все пробелы и переводы строк как есть:

```html
<p class="pre ...">
	Lorem Ipsum is simply dummy text of the printing and typesetting 
			industry. Lorem Ipsum has been the industry's standard dummy 
					text ever since the 1500s, when an unknown printer took 
							a galley of type and scrambled it to make a type specimen book.
</p>
```

### **pre-line**  

Модификатор `pre-line` объединяет последовательные пробелы в один, но учитывает переводы строк, разбивая текст:

```html
<p class="pre-line ...">
	Lorem Ipsum is simply dummy text of the printing and typesetting 
			industry. Lorem Ipsum has been the industry's standard dummy 
					text ever since the 1500s, when an unknown printer took 
							a galley of type and scrambled it to make a type specimen book.
</p>
```

### **pre-wrap**  

Модификатор `pre-wrap` сохраняет пробелы и переводы строк, текст может переноситься при необходимости:

```html
<p class="pre-wrap ...">
	Lorem Ipsum is simply dummy text of the printing and typesetting 
			industry. Lorem Ipsum has been the industry's standard dummy 
					text ever since the 1500s, when an unknown printer took 
							a galley of type and scrambled it to make a type specimen book.
</p>
```

### **whitespace-normal**  

Модификатор `whitespace-normal` сводит пробелы к одному и позволяет переносить текст для заполнения области:

```html
<p class="whitespace-normal ...">
	Lorem Ipsum is simply dummy text of the printing and typesetting 
			industry. Lorem Ipsum has been the industry's standard dummy 
					text ever since the 1500s, when an unknown printer took 
							a galley of type and scrambled it to make a type specimen book.
</p>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=typography&group=white-space"></iframe>
</div>