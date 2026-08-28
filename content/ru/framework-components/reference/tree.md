---
title: "Tree"
description: "Runtime-контракт компонента tree в SIMAI Framework 5.4.0."
---

# Tree

Идентификатор: `component.tree`. Компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Подключение

Loader-правило: `tree`.

Корень ассетов: `distr/component/tree`. Поставка объявляет CSS: **да**, JavaScript: **да**.

## Зависимости

- `component.icon-buttons`
- `component.icons`
- `component.tree-item`

## Подтверждённый DOM/CSS-контракт

Публично наблюдаемые селекторы в поставляемом CSS: `.sf-icon`, `.sf-icon-button`, `.sf-tree`, `.sf-tree-chevron`, `.sf-tree-item`.

Настраиваемые CSS-переменные, найденные в ассетах: `--sf-icon--font-size`, `--sf-icon--height`, `--sf-icon--width`, `--sf-icon-button--background-color`, `--sf-icon-button--padding-bottom`, `--sf-icon-button--padding-inline-end`, `--sf-icon-button--padding-inline-start`, `--sf-icon-button--padding-top`, `--sf-icon-size-3`, `--sf-space-1`, `--sf-space-3`, `--sf-transparent`, `--sf-tree--gap`, `--sf-tree--padding-bottom`, `--sf-tree--padding-inline-end`, `--sf-tree--padding-inline-start`, `--sf-tree--padding-top`, `--sf-tree-item--gap`, `--sf-tree-item--nested-padding-inline-start`.

## Пример и поведенческий API

Для этой ревизии в реестре ещё не закреплён проверенный пример. Не считайте внутренние функции JavaScript стабильным API без отдельного контракта и browser-теста.

## Доступность

Проверяйте семантику конкретной разметки, видимый `:focus`, управление клавиатурой и объявление состояния assistive technology. Наличие CSS/JS ассета само по себе не подтверждает доступность пользовательского сценария.

## Источник

- `simai/ui@2742ed22730b3f37cd26ab72c03621637a464ee0:distr/rule/rule.json#name=tree`
