#
# Environment.
#

NODE := iojs
NODE_ENV ?= development


DUO := duo -u client/plugins.js -o build --development


.PHONY: all setup bundle app serve



#
# Commands
#

all: setup bundle serve


#
# Setup
#

setup: server/node_modules client/node_modules build/browser-polyfill.js build/js-csp.js

%/node_modules: %/package.json
	@cd $* && npm install


build/%.js: client/libraries/%.js
	@ [ -d build ] || mkdir build
	@cp $< $@


#
# Bundle app
#

bundle: entries build/index.html

entries:
	@$(DUO) client/app.css
	@$(DUO) client/app.js
	


build/index.html: client/index.html
	cp $< $@



#
# Serve
#

serve:
	node server/index.js


#
# Cleaning Up
#


clean: clean-build clean-duo

clean-build:
	@rm -rf build
	@mkdir build

clean-npm:
	@ rm -rf client/node_modules
	@ rm -rf server/node_modules
	npm cache clean

clean-duo:
	@rm -rf ./components

.PHONY: clean clean-build clean-npm clean-duo
