---
extends: _core._layouts.documentation
section: content
title: Playground
description: Используйте интерактивные примеры для исследования, но сверяйте их с release lock.
---

# Playground

[play.simai.io](https://play.simai.io) помогает исследовать разметку и
варианты утилит. Он не заменяет release catalog: preview может использовать
другой commit или staging-пару assets.

Перед переносом примера в проект:

1. найдите соответствующий contract ID и status в approved release lock;
2. проверьте, что пример использует ту же Core/Smart pair;
3. перенесите минимальную разметку, а не внутренние пути preview;
4. выполните Network/Console smoke в целевом проекте.

Если пример не связан с approved lock, считайте его редакционным input, а не
подтверждённым API.
