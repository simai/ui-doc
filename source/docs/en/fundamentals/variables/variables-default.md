---
extends: _core._layouts.documentation
section: content
title: Default variables
description: Default variables
---

# Default variables

Some SIMAI Framework variables defined in the core and used by default. Color and size primitives are excluded (e.g.,
`--sf-primary-10`, `--sf-black`, `--sf-white`, `--sf-transparent`, `--sf-neutral-...`, and `--sf-a0`, `--sf-b1`,
`--sf-c2`, etc.).

| Variable                    | Default value                         | Description                                                                        |
|:----------------------------|:--------------------------------------|:-----------------------------------------------------------------------------------|
| `--sf-empty`                | *(unset)*                             | Placeholder variable                                                               |
| `--sf-alfa`                 | 1                                     | Default opacity                                                                    |
| `--sf-focus--offset`        | var(--sf-a0)                          | Focus offset (references a size variable; not a primitive itself)                  |
| `--sf-focus--style`         | solid                                 | Outline style on focus                                                             |
| `--sf-focus--width`         | var(--sf-a4)                          | Outline width on focus (references a size variable)                                |
| `--sf-animation`            | cubic-bezier(.25,.8,.25,1)            | Default animation curve                                                            |
| `--sf-duration-fast`        | 100ms                                 | Fast animation duration                                                            |
| `--sf-duration-normal`      | 300ms                                 | Normal animation duration                                                          |
| `--sf-duration-slow`        | 500ms                                 | Slow animation duration                                                            |
| `--sf-shadow--alfa-fill`    | 24%                                   | Shadow fill layer alpha                                                            |
| `--sf-shadow--alfa-outline` | 12%                                   | Shadow outline layer alpha                                                         |
| `--sf-shadow--alfa-shade`   | 8%                                    | Shadow shade layer alpha                                                           |
| `--sf-shadow--level-ratio`  | 1                                     | Shadow level ratio                                                                 |
| `--sf-code--color`          | var(--sf-tertiary)                    | Text color in code blocks (color role, not primitive)                              |
| `--sf-code--background`     | var(--sf-tertiary-container)          | Code block background (role)                                                       |
| `--sf-code--font-family`    | var(--sf-mono)                        | Code font (system variable, not a size/color primitive)                            |
| `--sf-code--radius`         | var(--sf-radius-1/3)                  | Border radius for code blocks                                                      |
| `--sf-mark--color`          | var(--sf-warning-transparent-overlay) | Text highlight color (role, not primitive)                                         |
| `--sf-body-text--family`    | "Inter", sans-serif                   | Body text font                                                                     |
| `--sf-text--family`         | "Inter", sans-serif                   | Text font                                                                          |
| `--sf-heading--family`      | "Inter", sans-serif                   | Heading font                                                                       |
| `--sf-display--family`      | "Inter", sans-serif                   | Display heading font                                                               |
| `--sf-text--weight`         | 400                                   | Body text weight                                                                   |
| `--sf-heading--weight`      | 700                                   | Heading weight                                                                     |
| `--sf-display--weight`      | 300                                   | Display heading weight                                                             |
| `--sf-text--style`          | inherit                               | Text style                                                                         |
| `--sf-text--tracking`       | inherit                               | Text tracking                                                                      |
{.table}

These variables let you tune the interface without touching size/color primitives directly.

Use them as defaults or override as needed for your project.

Global and local variables in SIMAI Framework keep styling flexible and make the codebase more scalable, adaptive, and
maintainable.
