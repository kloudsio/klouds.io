#
# Environment.
#

NODE := iojs
NODE_ENV ?= development
OUTPUT := build


DUO := duo
DUO += --development
DUO += --root ./client
DUO += --output ../$(OUTPUT)
DUO += --use lib/plugins.js

# production: DUO += --external-source-maps

.PHONY: all setup bundle app serve



#
# Commands
#

all: setup bundle




#
# Setup
#
setup: server/node_modules client/node_modules $(OUTPUT)/browser-polyfill.js

%/node_modules: %/package.json
	@cd $* && npm install


$(OUTPUT)/browser-polyfill.js: client/node_modules/duo-babel/node_modules/babel-core/browser-polyfill.js
	@mkdir $(OUTPUT)
	@cp $< $@



#
# Bundle app
#
bundle: compile $(OUTPUT)/index.html

compile:
	$(DUO) -C app.js app.css


$(OUTPUT)/index.html: client/index.html
	cp $< $@



#
# Serve
#

serve:
	node server/index.js


#
# Cleaning Up
#
.PHONY: clean clean-build clean-npm clean-duo
clean: clean-build clean-npm clean-duo

clean-build:
	@rm -rf $(OUTPUT)
	@mkdir $(OUTPUT)

clean-npm:
	@rm -rf client/node_modules
	@npm cache clean

clean-duo:
	@rm -rf client/components
