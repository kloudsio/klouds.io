#
# Environment.
#

NODE := iojs
NODE_ENV ?= development
DUO := duo -u client/plugins.js -o build --development


#
# Commands
#

all: setup bundle serve

setup: server/node_modules client/node_modules vendor
vendor: build/browser-polyfill.min.js
bundle: entries build/index.html
clean: clean-build clean-duo

#
# Setup
#


%/node_modules: %/package.json
	@cd $* && npm install

build/browser-polyfill.min.js: client/node_modules/duo-babel/node_modules/babel-core/browser-polyfill.min.js
	@ [ -d build ] || mkdir build
	@cp $< $@

#
# App
#


entries:
	@$(DUO) client/app.css
	@$(DUO) client/app.js
	
build/index.html: client/index.html
	cp $< $@

serve:
	node server/index.js

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

.PHONY: all setup vendor bundle serve
.PHONY: clean clean-build clean-npm clean-duo