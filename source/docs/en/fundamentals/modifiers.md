---
extends: _core._layouts.documentation
section: content
title: "Modifiers"
description: "Modifiers"
---

# Modifiers

Modifiers in SIMAI Framework are CSS classes designed to set values for the properties of interface elements. They
provide flexible control over the appearance and styles of elements, including adaptation to different viewport sizes
and different states.

**Using modifiers**

Modifiers allow you to quickly change the appearance and behavior of elements, configuring them according to different
conditions. This makes the system flexible and convenient for building responsive interfaces that work correctly on all
devices.

**Modifier syntax**

The syntax of modifiers includes the following parts:

1. **Condition of application** — defines when and in which cases the modifier is applied.
2. **Constraint** — specifies for which context or state the modifier is valid (for example, screen size or element
   state).
3. **Property** — the CSS property whose value will be changed.
4. **Parameter** — a specific parameter related to the condition of application (for example, active state of an
   element).
5. **Value** — sets the new value of the CSS property.

If the CSS property value is unique and does not overlap with other properties, a short form can be used that omits the
property name. This simplifies the syntax and makes the code more compact. For example:

* **Element positioning method**: static, relative, absolute.
* **Font family**: sans, serif, mono.

Thus, modifiers help optimize and standardize element styling, providing flexibility and ease of use.

## Conditions of application and breakpoints

SIMAI Framework implements a system of modifiers and breakpoints that provides flexible configuration of interfaces for
different devices and states. Modifiers can act without conditions or be limited by conditions so that they are applied
only in specific situations.
