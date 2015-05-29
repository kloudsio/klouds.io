# Front-End Client


The Front-End Client is a **Single-Page Application**. written in awesome ES6 Javascript with Babeljs. Written with the spiffiest of web components, using Deku.

### Technology Crash Course

1. Babeljs: Learn the ES6 Javascript Syntax. [ES6 Playground](https://babeljs.io/repl/)

2. Deku: Front End Components. [Add a component to Klouds](https://github.com/metadevfoundation/microgrid/tree/master/client/elements) - [Docs](https://github.com/dekujs/deku)


### A Legend of Syntax wtfx

``<Page>...</Page>`` inside JS
https://github.com/dekujs/deku

``(x) => x * 5``
https://babeljs.io/docs/learn-es2015/#arrows

``'let' is the same as 'var'``

``let { state, props } = component;``
https://babeljs.io/docs/learn-es2015/#destructuring



``import`` and ``export``
https://babeljs.io/docs/learn-es2015/#modules

``yield`` and ``function* ()``
https://github.com/tj/co -- cleaner than [promises](https://babeljs.io/docs/learn-es2015/#promises)


### Single-Page Application

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
