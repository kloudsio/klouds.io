# Front-End Client

This is the web application section of MicroGrid


## Understanding the Design

The client is a **Single-Page Application**, it changes document.location and never reloads. It only sends AJAX requests to the server API. All page rendering occurs in the browser.

The app embraces a modular philosophy. It comprises mostly of web components. This requires some build tools.

An overview of the files.

```bash
# Builds with make
├── Makefile  

# Build Target
├── build
│   ├── app.css
│   ├── app.js
│   ├── browser-polyfill.js
│   └── index.html

# Static Files
├── public
│   └── index.html


# Application Entry Points
├── app.css
├── app.js

# App Logic.
├── lib
│   ├── api.js
│   ├── element.js
│   ├── plugins.js
│   ├── state.js
│   └── transforms.js

# Web Components
├── elements
│   ├── deku  # ---- deku components ----
│   │   ├── layout.js
│   │   └── list.js
│   ├── styles  # ---- component styles ----
│   │   ├── layout.css
│   │   ├── paint.css
│   │   └── typography.css
│   └── templates  # ---- handlebars templates ----
│       ├── apps.hbs
│       ├── layout.hbs
│       └── login.hbs

```
