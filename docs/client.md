# Front-End Client


The Front-End Client is a **Single-Page Application**.

A Single-Page Application should...

- manage it's own state
- not reload
- handle routing via URL
- handle page transitions
- fetch data with XHR & WebSockets
- do rendering client-side
- authenticate using JWT tokens.

The app embraces a modular philosophy. It comprises mostly of web components. This requires some build tools.

**Make:** runs the builds, installs, cleaning.

**Duo:** package manager & file bundler with great plugins and loaders for different formats (like markdown, handlebars, or yaml).

**Babel:** ES6 features via browser polyfills. Better code.

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
