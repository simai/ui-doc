---
extends: _core._layouts.documentation
section: content
title: Утилиты
description: Каталог CSS-утилит SIMAI Framework и правила их безопасного применения.
---

# Утилиты

Утилиты — CSS-модификаторы для типовых задач интерфейса: макета, размеров,
отступов, сеток, типографики, фонов и интерактивности. Страница конкретной
утилиты должна быть прочитана вместе с её ограничениями, условиями и статусом
в approved release catalog.

Для baseline `5.4.0` этот сайт не подменяет release catalog историческими
списками или плавающими CDN-refs. До утверждения immutable compatibility lock
сверяйте применяемые правила с фактическим артефактом поставки.

## Направление (LTR/RTL)

Логические имена свойств сами по себе не являются гарантией RTL-поддержки.
Пока release lock и browser smoke не подтвердят конкретное правило, проверяйте
LTR и RTL отдельно: значение `dir` на документе, generated CSS и визуальный
результат. Не заявляйте RTL-совместимость для собственного шаблона только по
наличию класса.

## Категории
- [Макет](/ru/utilities/layout/) — базовое позиционирование и отображение.
- [Разрыв макета](/ru/utilities/layout-break/) — управление колонками и переносами.
- [Объекты](/ru/utilities/objects/) — выравнивание и подгонка медиа.
- [Размеры](/ru/utilities/sizes/) — ширина, высота и ограничения.
- [Отступы](/ru/utilities/indents/) — margin, padding и пространство.
- [Сетка](/ru/utilities/grid/) — grid-шаблоны и ячейки.
- [Флексбоксы](/ru/utilities/flex/) — направление, рост, сжатие и wrap.
- [Утилиты сетки и флексбоксов](/ru/utilities/grid-and-flexbox-utilities/) — выравнивание и порядок.
- [Типографика](/ru/utilities/typography/) — роли текста, размеры и насыщенность.
- [Оформление текста](/ru/utilities/text-formatting/) — цвет, толщина и подчёркивание.
- [Ссылки](/ru/utilities/links/) — состояния и форматирование ссылок.
- [Таблицы](/ru/utilities/tables/) — оформление таблиц и ячеек.
- [SVG](/ru/utilities/svg/) — заливки, обводки и размеры SVG.
- [Граница](/ru/utilities/border/) — ширина, стиль и радиусы.
- [Разделитель](/ru/utilities/divider/) — горизонтальные и вертикальные линии.
- [Внешняя граница](/ru/utilities/outline/) — outline для фокуса и акцента.
- [Фоны](/ru/utilities/background/) — цвет, изображение, градиент и позиционирование.
- [Маска](/ru/utilities/mask/) — clip, repeat и позиционирование масок.
- [Тени](/ru/utilities/shadows/) — тени элементов и капельные тени.
- [Фильтры элемента](/ru/utilities/filters/) — blur, hue-rotate и другие CSS-фильтры.
- [Фильтры подложки](/ru/utilities/backdrop-filter/) — blur и корректировка фона.
- [Анимация](/ru/utilities/animation/) — transition и типы анимаций.
- [Прокрутка](/ru/utilities/overscroll/) — scroll snap и связанные свойства.
- [Преобразования](/ru/utilities/transform/) — rotate, scale, skew и translate.
- [Формы](/ru/utilities/forms/) — состояния полей и вспомогательные свойства.
- [Интерактивность](/ru/utilities/interactivity/) — cursor, user-select и touch-action.
- [Печать](/ru/utilities/print/) — отображение для печати.
- [Полосы](/ru/utilities/stripes/) — штриховка и фоновые полосы.

## Часто используемые
- [Макет](/ru/utilities/layout/)
- [Сетка](/ru/utilities/grid/)
- [Флексбоксы](/ru/utilities/flex/)
- [Отступы](/ru/utilities/indents/)
- [Размеры](/ru/utilities/sizes/)
- [Типографика](/ru/utilities/typography/)
- [Оформление текста](/ru/utilities/text-formatting/)
- [Фоны](/ru/utilities/background/)
- [Граница](/ru/utilities/border/)
- [Тени](/ru/utilities/shadows/)
- [Преобразования](/ru/utilities/transform/)
- [Интерактивность](/ru/utilities/interactivity/)
