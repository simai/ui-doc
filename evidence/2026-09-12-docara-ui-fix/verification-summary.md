# Проверка интеграции Docara UI fix

Статус: **PASS**.

## Граница изменения

- В `composer.lock` сохранена опубликованная Docara `v2.9.0` с исходной ревизией
  `6eaccb10c8550e877e391f8d441e811bfcb693ac`.
- Project-owned patch воспроизводит семь runtime-файлов принятого кандидата
  `00032adc74fb490083b86fad89ab654bd56da0af`.
- Применение идемпотентно; несовпадение версии, source reference или хешей
  vendor-файлов завершает команду ошибкой.
- `composer.lock`, `simai-framework.lock.json` и шестиступенчатая страница
  архитектуры не изменены.

## Проверки

- Fresh `composer install --prefer-source`: патч применён, проверено 7 файлов.
- Повторные `composer install` и `composer docara:compatibility:check`: PASS,
  `already_applied`.
- `composer validate --no-check-publish`: PASS.
- `docara doctor --json`: SUCCESS, без diagnostics.
- Materialization Framework pair: PASS, owner sources не изменены.
- Полная сборка: 918 страниц.
- Static verification: 1 806 HTML-страниц, 376 878 ссылок, 0 broken.
- Foundation audit: PASS, 6 архитектурных уровней.
- Example-quality audit: PASS, 0 blockers.
- Component documentation audit: 0 missing и 0 missing examples.

## Браузер

- Disclosure расположен после подписи в DOM и визуально trailing в desktop
  LTR и mobile RTL; горизонтального overflow нет.
- Enter переключает `aria-expanded` с `false` на `true` и обновляет иконку.
- Заголовки Code и Example имеют одинаковую высоту: 57 px desktop и 53 px
  mobile; отклонение центра контента от центра шапки — 0,5 px.
- Эталонная страница «Кнопки» содержит 7 исполняемых примеров, 7 code headers,
  не имеет битых изображений и горизонтального overflow.
