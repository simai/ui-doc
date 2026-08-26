---
title: "Buttons"
description: "Runtime-контракт компонента buttons в SIMAI Framework 5.4.0 candidate."
---

# Buttons

Идентификатор: `component.buttons`. Компонент готов к использованию; жизненный цикл — стабильный.

## Подключение

Loader-правило: `buttons`.

Корень ассетов: `distr/component/buttons`. Поставка объявляет CSS: **да**, JavaScript: **да**.

## Подтверждённый DOM/CSS-контракт

Публично наблюдаемые селекторы в поставляемом CSS: `.sf-button`, `.sf-button--default`, `.sf-button--link`, `.sf-button--loading`, `.sf-button--on-surface`, `.sf-button--outline`, `.sf-button--primary`, `.sf-button--secondary`, `.sf-button--size-1`, `.sf-button--size-2`, `.sf-button--size-3`, `.sf-button--tonal`, `.sf-button-state-loading`, `.sf-button-text-container`, `.sf-icon`, `.sf-icon-button`, `.sf-icon-button--outline`.

Настраиваемые CSS-переменные, найденные в ассетах: `--sf-button--background-color`, `--sf-button--border-bottom-left-radius`, `--sf-button--border-bottom-right-radius`, `--sf-button--border-bottom-width`, `--sf-button--border-color`, `--sf-button--border-inline-end-width`, `--sf-button--border-inline-start-width`, `--sf-button--border-style`, `--sf-button--border-top-left-radius`, `--sf-button--border-top-right-radius`, `--sf-button--border-top-width`, `--sf-button--border-width`, `--sf-button--box-shadow`, `--sf-button--padding-bottom`, `--sf-button--padding-inline-end`, `--sf-button--padding-inline-start`, `--sf-button--padding-top`, `--sf-button-loading-stripe-1`, `--sf-button-loading-stripe-2`, `--sf-button-text-container--background-color`, `--sf-button-text-container--color`, `--sf-button-text-container--font-family`, `--sf-button-text-container--font-size`, `--sf-button-text-container--font-weight`, `--sf-button-text-container--line-height`, `--sf-button-text-container--padding-inline-end`, `--sf-button-text-container--padding-inline-start`, `--sf-disable`, `--sf-font-weight-medium`, `--sf-icon--color`, `--sf-icon--font-size`, `--sf-icon--height`, `--sf-icon--width`, `--sf-icon-button--border-bottom-width`, `--sf-icon-button--border-inline-end-width`, `--sf-icon-button--border-inline-start-width`, `--sf-icon-button--border-top-width`, `--sf-icon-size-3`, `--sf-on-disable`, `--sf-on-primary`, `--sf-on-secondary-container`, `--sf-on-surface`, `--sf-on-surface-active`, `--sf-on-surface-hover`, `--sf-on-surface-inverse`, `--sf-on-surface-variant`, `--sf-outline`, `--sf-outline-disable`, `--sf-outline-variant`, `--sf-primary`, `--sf-primary-active`, `--sf-primary-container-active`, `--sf-primary-container-hover`, `--sf-primary-hover`, `--sf-radius-default`, `--sf-radius-rounded`, `--sf-radius-square`, `--sf-secondary-container`, `--sf-secondary-container-active`, `--sf-secondary-container-hover`.

## Проверенный пример

- `simai/ui-play@0a393e85f0c6a137ae024f442dd52cc34d5f0508:examples/components/buttons/all/index.html`

## Доступность

Проверяйте семантику конкретной разметки, видимый `:focus`, управление клавиатурой и объявление состояния assistive technology. Наличие CSS/JS ассета само по себе не подтверждает доступность пользовательского сценария.

## Источник

- `simai/ui@2742ed22730b3f37cd26ab72c03621637a464ee0:distr/rule/rule.json#name=buttons`
