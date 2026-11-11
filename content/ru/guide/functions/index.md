---
title: "Функции"
description: "Общие функции SIMAI Framework для скрипта страницы: загрузка, текст и язык, действия, экран и выбор человека — по странице на функцию, с примером."
---

# Функции

Функции, которые SIMAI Framework даёт скрипту страницы: дождаться загрузки,
создать элемент, вывести дату на языке страницы, скопировать текст, показать
уведомление, удержать место читателя в ленте. Каждой функции — своя
страница: что она делает, как вызвать, когда она появляется и пример, который
можно нажать. Полный список имён `window.SF` по уровням — в оглавлении
[JavaScript API](/ru/guide/connection/js-api/).

## Загрузка и готовность

Дождаться Loader, загрузить компонент, создать элемент и написать свой
смарт-компонент.

- [Готовность Loader](/ru/guide/functions/loading/ready/) — `SF.ready`
- [Загрузка по требованию](/ru/guide/functions/loading/loader/) — `SF.Loader`
- [Ожидание элемента](/ru/guide/functions/loading/when-defined/) — `SF.whenDefined`
- [Создание элемента](/ru/guide/functions/loading/create/) — `SF.create`, `SF.createAsync`
- [Загрузка основы смарт-компонентов](/ru/guide/functions/loading/smart-base/) — `SF.loadSmartBase`, `SF.smartBaseReady`
- [Свой смарт-компонент](/ru/guide/functions/loading/smart/) — `SF.smart`
- [API набора](/ru/guide/functions/loading/package/) — `SF.package`

## Текст, язык и значения

Вывести значение на языке страницы, взять слово компонента, вставить чужой
HTML и надеть маску на поле.

- [Даты, числа и размеры](/ru/guide/functions/text/format/) — `SF.format`
- [Язык страницы](/ru/guide/functions/text/language/) — `SF.language`
- [Слово компонента](/ru/guide/functions/text/page-text/) — `SF.pageLanguage`, `SF.pageText`
- [Чужой HTML](/ru/guide/functions/text/sanitize-html/) — `SF.sanitizeHtml`, `SF.safeHref`
- [Маска поля](/ru/guide/functions/text/mask/) — `SF.Mask`

## Действия на странице

Скопировать текст, сообщить о результате и сменить тему.

- [Копирование текста](/ru/guide/functions/actions/copy-text/) — `SF.copyText`
- [Копирование кода в тексте](/ru/guide/functions/actions/code-copy/) — `SF.codeCopy`
- [Уведомления](/ru/guide/functions/actions/notify/) — `SF.notify`, `SF.notifications`
- [Тема](/ru/guide/functions/actions/theme/) — `SF.Loader.setTheme`, `SF.Loader.changeTheme`

## Экран и прокрутка

Узнать ширину страницы, удержать место в ленте и поставить панель у якоря.

- [Контрольные точки](/ru/guide/functions/screen/breakpoints/) — `SF.breakpoints`
- [Положение чтения](/ru/guide/functions/screen/reading-position/) — `SF.readingPosition`
- [Привязка к якорю](/ru/guide/functions/screen/position/) — `SF.Position`

## Выбор человека

Запомнить вид, который выбрал человек, и дать ему выбрать значок.

- [Настройки вида](/ru/guide/functions/person/preferences/) — `SF.Preferences`
- [Значки на выбор](/ru/guide/functions/person/icons/) — `SF.icons`

## Функции наборов

Набор компонентов (pro, view, chat, mail, editor, effects, chart) отдаёт свои
функции через [`SF.package('<набор>')`](/ru/guide/functions/loading/package/).
Что в них, описывает документация набора.
