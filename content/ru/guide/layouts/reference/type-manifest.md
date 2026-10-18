---
title: "Манифест типа"
description: "Манифест типа (`simai.composition.type-manifest`) — общий контракт для проверки, рендерера, редактора, документации и ИИ."
---

# Манифест типа

Манифест типа (`simai.composition.type-manifest`) — общий контракт для
проверки, рендерера, редактора, документации и ИИ.

```json
{
  "schema": "simai.composition.type-manifest",
  "schema_version": 1,
  "type": "project.product-grid",
  "version": "1.0.0",
  "category": "component",
  "mode": "composite",
  "profiles": ["ui-layout"],
  "data_schema": {"type": "object"},
  "props_schema": {"type": "object"},
  "presentation": {"views": ["default"], "presets": ["cards"], "modifiers": []},
  "slots": {"items": {"min": 0, "max": 100}},
  "renderer": {"kind": "registered", "name": "project.product-grid"},
  "assets": ["project/product-grid"],
  "capabilities": []
}
```

- `schema` — `simai.composition.type-manifest` с `"schema_version": 1`; реестр
  типов принимает и прежнюю метку `simai.composition.type-manifest.v1`.
- `category` — `layout`, `content`, `component` или `smart`; по ней слоты
  разрешают детей.
- `mode` — `leaf` или `composite`.
- `profiles` — в каких профилях документа тип допустим.
- `data_schema` и `props_schema` — закрытые схемы данных и настроек.
- `presentation` — закрытые списки видов, пресетов и модификаторов.
- `renderer.kind` — `builtin` (встроенный в Framework), `registered`
  (зарегистрирован в реестре) или `custom-element` (тег Smart-компонента).
- `assets` — ресурсы, которые нужно подключить вместе с типом.

Это учебный пример; настоящий манифест задаёт полные схемы данных и
настроек и ограничения дочерних типов.
