---
extends: _core._layouts.documentation
section: content
title: Light and dark theme
description: Light and dark theme
---

# Light and dark theme

In the current version of the SIMAI framework, two themes are used: light and dark. The light theme is active by
default. To switch to the dark theme, you can use the `theme-dark` modifier. This modifier changes the shades of
colors, so it is recommended to use it carefully, paying attention to which elements are inside the container with the
switched theme.

The optimal solution is to apply the theme switching modifier only to the `html` or `body` tags. If you need a local
dark theme for individual elements, it is better to use a fixed inverted background and text color so that colored
elements match the light theme and are correctly adapted when switching to the dark theme. This is described in more
detail in the Surface role description.

