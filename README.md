# MicroGrid



## Back End Controller

The design is extremely modular, built upon Koa.

Modules are mounted on configurable endpoints: e.x. http://localhost:8080/**modules/ftw**
Directory structure
/lib/
/modules/

```bash
├── index.js      # Entry point
├── lib               # Controller Core
│   ├── api-spec.js     # aggregates the apis from each app-module
│   ├── main.js         # The Core -- initializes and composes each module
│   └── util.js         # miscellaneous functions│
├── admin-interface   # Admin Module
├── dev-interface     # Dev Module
│   ├── index.js        # module entry.
│   └── routes.js       # a simple web api explorer based on koa-joi-router
├── package.json
├── payment          # Payment Module
│   ├── co-stripe.js    # Wrapped Stripe API: convert fn -> promises
│   ├── index.js        # module entry.
│   ├── plans.js        # creates stripe 'plans' for each of our apps
│   └── routes.js       # handles api calls
├── README.md
└── user              # User Module; Signup, Login, Profiles & Social Auth
    ├── index.js        # module entry.
    ├── routes.js       # handles api calls
    └── users.js        # user registration and authentication
                         # Social Auth: https://github.com/simov/grant
├── front-end           # Client Serving Module
│   └── index.js        # module entry.
```

## Front End

Modular Single-Page Web App, as usual. I lost hope with current component frameworks (polymer/react/components). I have all I need with iojs/babel/duo/d3. But, I think duo will save the day, it has some component powers.

```bash
│   ├── client          # Front End Project
│   │   ├── build           # compiled
│   │   │   ├── app.js
│   │   │   └── index.html
│   │   ├── components      # duo components
│   │   │   └── duo.json
│   │   ├── index.js        # build script
│   │   ├── package.json
│   │   ├── README.md
│   │   └── src
│   │       ├── app.js          # JS Main
│   │       ├── components      # Web Components
│   │       │   ├── layout.js       # fundamental design
│   │       │   └── login.js        # login form
│   │       │   ├── apps.js         # buy app buttons
│   │       ├── descriptive.yaml    # YAML pre-configure components
│   │       ├── lib
│   │       │   ├── api.js          # BackEnd API Adapter
│   │       │   ├── layer.js        # Web Components Class.
│   │       │   ├── state.js        # Application State
│   │       │   └── transforms.js   # State Changing Functions.
│   │       ├── styles
│   │       │   ├── layout.css
│   │       │   └── typography.css
│   │       └── templates
│   │           ├── apps.ejs
│   │           ├── layout.ejs
│   │           └── login.ejs
```

**Today (Friday, May 1) I was sharpening my tools & refactoring**

So **webpack** is a giant configuration nightmare. Browser auto-refresh config makes it worse. Oh god.
When I started this project, I was using **gulp**, **webpack**, **bower** and **webpack-****loaders**.
It took probably 10 hours to get it configured to work, and the configuration problems persisted;
Well: **babeljs**, **duo**, just took me 1-2 hours today, and much more powerful.
plus I accomplished toggle components via **d3js**.
this goes to show why being framework agnostic wins. If I had been using something like React..
that would be a dirty job, if I even knew how (frameworks might keep people noob)
babeljs gives me ES6. io.js, and koa are cool because of ---> Generators.
This gives me an excellent tool to cut down dev time and complexity


# What is next?


 1. Test if duo compiled my front-end correctly.
 2. User Registration Button
 3. App Purchase Notifies Us
 4. Activate the Payment Buttons (manual deployment)
 5. Rancher Integration ??

      misc: blockchainery, pricing, app dashboard, app config, dockerizing, marketplace, subscriptions,
        user profiles, ux/ui/design, and much much more :)
