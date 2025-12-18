```markdown
---
extends: _core._layouts.documentation
section: content
title: Text roles
description: Text roles
---

# Text roles

In typography there are two main role groups: **base text** (text) and **headings** (title).

1. **Base text (text)**  
   Used to style all text except headings. Includes two roles:

   * **Label** — text used in components, notes, and labels.
   * **Body Text** — the main paragraph text.  
     For base text, there are three sizes: **small**, **medium**, **large**. This system simplifies understanding and
     usage:

   * Numeric labels are not used to avoid confusion with headings.
   * Abbreviations (such as `sm`) are not used to avoid confusion with breakpoints.  
     For the default size, the word “medium” can be omitted (for example, `body-text` instead of `body-text-medium`).

2. **Headings (title)**  
   This group includes the following roles:

   * **Heading** — for headings of body text.
   * **Display** — for short important text or numbers that need extra emphasis.

```