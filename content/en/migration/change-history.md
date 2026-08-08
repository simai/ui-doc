````markdown
---
extends: _core._layouts.documentation
section: content
title: "Change history"
description: "Change history"
---

# Changes in version 5.4.0

This section reflects the changes that appeared in version 5.4.0.

These changes need to be added to the framework and the documentation.

## Color

* Success and Warning roles removed
* Code role added

### Code

A new `code` role has been added. This role will be used for styling the `code` tag.

Variables for the Mark role:

| Variable  | Value (light)           | Value (dark)            |
|:----------|:------------------------|:------------------------|
| --sf-mark | --sf-warning-50--alfa-24 | --sf-warning-90--alfa-24 |
{.table}

## Shadow

* Default shadow added

Variable for the default shadow:

| Variable  | Value (light)           | Value (dark)            |
|:----------|:------------------------|:------------------------|
| --sf-mark | --sf-warning-50--alfa-24 | --sf-warning-90--alfa-24 |
{.table}

## Border radius

Add a default border radius to the core.

| Variable          | Value                   | Description                                                                                     |
|:------------------|:------------------------|:------------------------------------------------------------------------------------------------|
| `--sf-radius--ui` | `var(--sf-radius-1/3)` | Default border radius for UI elements (buttons, inputs, dropdowns, etc.) |
{.table}

This variable should be used to set the default radius for all small UI elements (buttons, inputs, dropdowns, etc.).

For example, buttons will have their own variable `--sf-button--radius` equal to `var(--sf-radius--ui)`, and
components will use their "own" variable in styles:

```css
// core
:root {
  --sf-radius--ui: var(--sf-radius-1/3);
}
// Button component
button {
  --sf-button--radius: var(--sf-radius--ui);
  // other button variables
  border-radius: var(--sf-button--radius);
}
```

````
