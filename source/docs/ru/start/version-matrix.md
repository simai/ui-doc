---
extends: _core._layouts.documentation
section: content
title: Матрица версий sizing contract
description: Идентичность source contract и статус поверхностей.
---

# Матрица версий sizing contract

Текущий documentation candidate связан с
`simai.vertical-sizing@1.1.0`, source commit
`97b3df993a3250661a2d9e9db6500fad16b5b5cb` и SHA-256
`333d78f0f3abe6f47c9caa1fc3c53c4d2894e122a922a400804383266cbd72f5`.

Это candidate identity, а не release.

| Поверхность | Требуемая связь | Статус |
| --- | --- | --- |
| Source | exact commit + contract hash | принято |
| Figma | exact diff + отдельное подтверждение записи | diff подготовлен |
| Documentation | generated table + parity check | этот candidate |
| IDE registry | contract version + source hash | принимается отдельно |
| Core/Smart | automatic exact pair | принимается отдельно |
| ui-play/ui-admin | browser matrix на exact pair | принимается отдельно |

Release или deploy возможен только после полной cross-surface приёмки и
отдельного подтверждения.
