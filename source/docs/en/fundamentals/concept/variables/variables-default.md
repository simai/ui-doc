---
extends: _core._layouts.documentation
section: content
title: "Default variables"
description: "Default variables"
---

# Default variables

Below is a list of some SIMAI Framework variables defined in the core and used by default. Color primitive variables
(for example, `--sf-primary-10`, `--sf-black`, `--sf-white`, `--sf-transparent`, `--sf-neutral-...`) and size
primitives (for example, `--sf-a0`, `--sf-b1`, `--sf-c2`, etc.) are omitted.

| Variable                     | Default value                        | Description                                                                      |
|:----------------------------|:-------------------------------------|:---------------------------------------------------------------------------------|
| `--sf-empty`                | *(not set)*                          | Empty placeholder variable                                                       |
| `--sf-alfa`                 | 1                                    | Default opacity                                                                  |
| `--sf-focus--offset`        | var(--sf-a0)                         | Focus offset (references a size variable but is not a primitive itself)         |
| `--sf-focus--style`         | solid                                | Outline style on focus                                                           |
| `--sf-focus--width`         | var(--sf-a4)                         | Outline width on focus (references a size variable)                             |
| `--sf-animation`            | cubic-bezier(.25,.8,.25,1)           | Default animation curve                                                          |
| `--sf-duration-fast`        | 100ms                                | Fast animation                                                                   |
| `--sf-duration-normal`      | 300ms                                | Normal animation                                                                 |
| `--sf-duration-slow`        | 500ms                                | Slow animation                                                                   |
| `--sf-shadow--alfa-fill`    | 24%                                  | Fill layer shadow opacity                                                        |
| `--sf-shadow--alfa-outline` | 12%                                  | Outline layer shadow opacity                                                     |
| `--sf-shadow--alfa-shade`   | 8%                                   | Shade layer shadow opacity                                                       |
| `--sf-shadow--level-ratio`  | 1                                    | Shadow level ratio                                                               |
| `--sf-code--color`          | var(--sf-tertiary)                   | Text color in code blocks (refers to a color role, not a primitive)             |
| `--sf-code--background`     | var(--sf-tertiary-container)         | Code block background color (also a role)                                       |
| `--sf-code--font-family`    | var(--sf-mono)                       | Font for code (system variable, not a size or color primitive)                  |
| `--sf-code--radius`         | var(--sf-radius-1/3)                 | Border radius for code blocks                                                   |
| `--sf-mark--color`          | var(--sf-warning-transparent-overlay) | Text highlight color (role, not a primitive)                                    |
| `--sf-body-text--family`    | "Inter", sans-serif                  | Body text font                                                                   |
| `--sf-text--family`         | "Inter", sans-serif                  | Text font                                                                        |
| `--sf-heading--family`      | "Inter", sans-serif                  | Heading font                                                                     |
| `--sf-display--family`      | "Inter", sans-serif                  | Display font                                                                     |
| `--sf-text--weight`         | 400                                  | Font weight for body text                                                       |
| `--sf-heading--weight`      | 700                                  | Font weight for headings                                                        |
| `--sf-display--weight`      | 300                                  | Font weight for display headings                                                |
| `--sf-text--style`          | inherit                              | Text style                                                                       |
| `--sf-text--tracking`       | inherit                              | Text tracking (letter spacing)                                                  |
{.table}

These variables allow you to flexibly configure the interface without directly changing size and color primitives.

You can use these values as initial settings or override them as needed for a project.

Using global and local variables in the SIMAI Framework provides convenience and flexibility when configuring styles.
Variables simplify making changes, making the interface code more scalable, adaptable, and easier to maintain.
