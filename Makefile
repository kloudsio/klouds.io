#
# Environment.
#

NODE := iojs
NODE_ENV ?= development
DUO := duo -u ../client/plugins.js -o build --development


#
# Commands
#

all: install build nodemon


develop:
	@cd server && iojs develop.js


install: server/node_modules client/node_modules build/browser-polyfill.min.js

build: build/index.html bundle

clean: clean-build clean-duo


#
# install
#

%/node_modules: %/package.json
	@cd $* && npm install

build/browser-polyfill.min.js: client/node_modules/duo-babel/node_modules/babel-core/browser-polyfill.min.js
	@ [ -d build ] || mkdir build
	@cp $< $@


#
# Duo Bundle
#

bundle:
	@$(DUO) client/styles/app.css client/lib/app.js

watch:
	@ [ -f "client/config.js" ] || { echo "ERROR: Missing client/config.js"; exit 1; }
	@sane \
		' cp -u client/index.html build/index.html; \
		  $(DUO) client/styles/app.css --stdout > build/app.css; \
		  $(DUO) client/lib/app.js --stdout  > build/app.js;' \
		  client --glob='**/*'


#
# Static
#

build/index.html: client/index.html
	@cp $< $@


#
# Dev Server
#

nodemon:
	@sane 'iojs server/index.js' server --glob='**/*'


#
# Cleaning Up
#

clean-build:
	@rm -rf build
	@mkdir build

clean-npm:
	@ rm -rf client/node_modules
	@ rm -rf server/node_modules
	npm cache clean

clean-duo:
	@rm -rf ./components

.PHONY: all install bundle
.PHONY: watch nodemon develop seed
.PHONY: clean clean-build clean-npm clean-duo
