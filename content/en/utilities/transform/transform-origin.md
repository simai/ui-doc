
# Ис
одные координаты (transform-origin)


С помощью модификаторов ис
одны
 координат `transform-origin` в SIMAI Framework вы можете определять точку, относительно
которой будет производиться трансформация элемента (например, поворот, масштабирование).

## Классы и и
 значения

| Класс                | Значение                        |
|:---------------------|:--------------------------------|
| .origin-center       | transform-origin: center;       |
| .origin-top          | transform-origin: top;          |
| .origin-top-right    | transform-origin: top right;    |
| .origin-right        | transform-origin: right;        |
| .origin-bottom-right | transform-origin: bottom right; |
| .origin-bottom       | transform-origin: bottom;       |
| .origin-bottom-left  | transform-origin: bottom left;  |
| .origin-left         | transform-origin: left;         |
| .origin-top-left     | transform-origin: top left;     |

{.table}

## Описание

Эти модификаторы задают ис
одную точку для преобразований элемента, определяя, относительно какой точки будет
проис
одить масштабирование, вращение или наклон. При использовании вместе с `hover:` можно изменять ис
одную точку при
наведении курсора, создавая динамичные и интересные эффекты.

## Синтаксис

- `origin-{позиция}` – установить ис
одную точку трансформации для элемента.
- `hover:origin-{позиция}` – изменить ис
одную точку трансформации при наведении.

## Пример использования

```html
<img class="origin-center rotate-3 transition ease-in-out ..." src="image.jpg" alt="Ис
одная точка по центру">
<img class="origin-top-left hover:rotate-4 transition ease-in-out ..." src="image.jpg"
     alt="Ис
одная точка в левом вер
нем углу при наведении">
<img class="origin-bottom rotate-5 transition ease-in-out ..." src="image.jpg" alt="Ис
одная точка внизу">
```
