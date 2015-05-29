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

No reloading, No changing pages.

The app logic is separated as such.

``/app.js`` creates some ``/elements``

``/app.js`` sets some global states ``app.set(/* tree */)``

``/app.js`` imports some ``/events.js`` to react to ``/elements/*.js`` events.

``/events.js`` makes some calls to ``/lib/api.js``, the lib that talks to the server.

``/app.js`` renders it into the page.
