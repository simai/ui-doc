---
extends: _core._layouts.documentation
section: content
title: Glossary
description: Glossary
---

# Glossary

**SIMAI Framework (SF)** — software designed to speed up the development of information systems on the web. It includes
tools for both frontend and backend development. The backend provides a data architecture, APIs, and ready-made
components to implement application functionality. The frontend includes UI utilities and components for quickly
creating and modifying the interface.

**SF5** — the 5th version of SIMAI Framework.

**Modifiers (utilities)** — CSS classes intended to set specific parameters of an HTML element (e.g., spacing, borders,
colors).

**Responsive modifiers (utilities)** — modifiers that set values depending on screen resolution (e.g., to create
responsive designs).

**CSS (Cascading Style Sheets)** — a formal language for describing the appearance of a document written with a markup
language. CSS controls styles and layout of elements on a web page.

**UI (User Interface)** — a set of technologies and components used to build the visual part of an information system.
In SIMAI Framework, UI is a visual framework containing styles and scripts for interface elements.

**Visual framework** — same as UI; a set of tools and styles for creating interfaces.

**HTML (HyperText Markup Language)** — the standard markup language used to create and structure documents on the web.
Browsers interpret it and display formatted text on devices.

**JavaScript (JS)** — a multi-paradigm programming language widely used to create interactive and dynamic elements on
web pages. JavaScript manipulates HTML and CSS, adds animations, and handles events.

**API (Application Programming Interface)** — an interface that provides methods and protocols for interaction between
components or systems. In SIMAI Framework, APIs are used for data exchange between frontend and backend and for
integrations with external services.

**Flexbox (Flexible Box Layout)** — a CSS technology for laying out elements on a page. Flexbox makes it easy to align
items horizontally and vertically, change direction and order, and adapt their size.

**Grid Layout** — a CSS layout system for creating complex page structures. Unlike Flexbox, Grid Layout manages
placement across both rows and columns.

**Mobile First** — an approach where development starts from the mobile version, then adds functionality and styles for
tablets and desktops. This often yields a more optimized, faster interface for mobile users.

**Component** — an independent, reusable block of code or interface that performs a specific function (e.g., a button,
form, or modal). Components simplify and accelerate development through reuse.

**Backend** — the server side of an application responsible for business logic, databases, request handling, and data
exchange with the client (frontend). In SIMAI Framework, the backend provides APIs and ready components to build system
functionality.

**Frontend** — the client side of an application, including all visual elements and interaction logic. The SIMAI
Framework frontend is built on UI components and utilities, simplifying creation of responsive and interactive
interfaces.

**Bootstrap** — a popular CSS framework for rapid prototyping and building responsive web applications. It is used in
some SIMAI Framework projects to speed up frontend development.

**REST API** — an architectural style for web services based on standard HTTP methods (GET, POST, PUT, DELETE) for data
exchange. SIMAI Framework supports building and using REST APIs for integration with external systems and services.

**SOAP (Simple Object Access Protocol)** — a protocol for exchanging structured messages between applications over a
network. SIMAI Framework supports integration with SOAP services for flexible interoperability.

**Primitives** — base variables describing design atoms. In our case these are color primitives (palette) and size
primitives (size grid).

**Tokens** — variables built on primitives and used to define appearance or behavior of interface objects. For example,
a color scheme is created from color primitives and described by tokens. Interfaces mostly use tokens, not primitives
directly.

**Color scheme** — a set of tokens describing the colors in use. Interfaces rely on color tokens without exposing the
underlying color primitives.
