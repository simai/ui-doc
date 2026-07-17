---
extends: _core._layouts.documentation
section: content
title: Подготовка проекта
description: Организуйте assets SIMAI Framework так, чтобы версия и проверка были повторяемыми.
---

# Подготовка проекта

SIMAI Framework не навязывает сборщик или backend-платформу. В любом проекте
сохраните одни и те же инварианты:

1. Храните Core и Smart Components как одну зафиксированную compatibility
   pair.
2. Настройте единственный URL для `distr`, который соответствует этой pair.
3. Не допускайте fallback на ветку или плавающий tag в production-конфигурации.
4. Добавьте smoke-проверку: загрузка assets, один approved example и отсутствие
   ошибок Console.
5. При обновлении меняйте lock, assets и browser smoke одним batch, а не по
   отдельности.

Конкретные Vite, Laravel, Larena и Bitrix adapter-рецепты появятся только с
проверяемыми owner contracts. До этого не нужно добавлять Composer, NPM,
Blade или server-loader зависимости лишь потому, что они были в старом тексте.
