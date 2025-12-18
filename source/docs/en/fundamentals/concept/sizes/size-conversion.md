---
extends: _core._layouts.documentation
section: content
title: "Size conversion"
description: "Size conversion"
---

# Size conversion

To make it easy to convert values between pixels and the framework’s sizing system, a special alphanumeric scheme is used.
Assuming `1rem = 16px`:

* **A** – range from 0 to 9 pixels. Each digit after `a` is the number of pixels. For example:  
  `a0 = 0px`, `a1 = 1px`, `a4 = 4px`, etc.
* **B** – starts at 10px. Each following digit is multiplied by 1 and added to 10.  
  Example: `b3` = 10 + (1 × 3) = 13px.
* **C** – starts at 20px. Each digit after `c` is multiplied by 2 and added to 20.  
  Example: `c8` = 20 + (2 × 8) = 36px.
* **D** – starts at 40px. Each digit is multiplied by 4 and added to 40.  
  Example: `d2` = 40 + (4 × 2) = 48px.

By analogy:

* **E** – starting from 80px, each digit ×8 + 80.
* **F** – starting from 160px, each digit ×16 + 160.
* **G** – starting from 320px, each digit ×32 + 320.
* **H** – starting from 640px, each digit ×64 + 640.
* **I** – starting from 1280px, each digit ×128 + 1280.
