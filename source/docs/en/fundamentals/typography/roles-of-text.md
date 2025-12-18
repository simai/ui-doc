---
extends: _core._layouts.documentation
section: content
title: Text roles
description: Text roles
---

# Text roles

Typography has two role groups: **base text** and **titles**.

1. **Base text (text)**  
   For all copy except titles. Two roles:

   * **Label** — text in components, notes, badges.
   * **Body Text** — main paragraph text.  
     Base text has three sizes: **small**, **medium**, **large** for clarity:

   * No numeric labels to avoid confusion with headings.
   * No abbreviations like `sm` to avoid breakpoint overlap.  
     You may omit "medium" for the default size (`body-text` instead of `body-text-medium`).

2. **Titles (title)**  
   Includes:

   * **Heading** — page/section headings.
   * **Display** — short, standout text or numbers.
