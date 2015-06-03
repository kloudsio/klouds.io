[![Stories in Ready](https://badge.waffle.io/metadevfoundation/klouds.io.svg?label=ready&title=Ready)](http://waffle.io/metadevfoundation/klouds.io)


# Klouds.io
Application Deployage as a Service... as a Service!?


Install Steps

1. iojs

2. mongodb


```bash
git clone https://github.com/metadevfoundation/klouds.io
npm install -g duo sane
```

4. create a file: server/secrets.js

```javascript
var secrets = {
  // Stripe Secret Key
  stripe: '##key-to-$$$-shh##',
  
  // JSON Web Token Secret
  jwt: '#-secrets r us-#'
}

module.exports = secrets;
```

5. make things.

```bash
# installs dependencies
make install

# builds & bundles things
make build

# development mode, watches file changes, awesomes your terminal
make develop

# DEing some BUGs?
DEBUG=duo* make develop
DEBUG=koa* make develop

```

Sub-Documents
[Client](docs/client.md)
[Server](docs/server.md)
[History](docs/history.md)
