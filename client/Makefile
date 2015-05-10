#
# Environment.
#

NODE := iojs
NODE_ENV ?= development

#
# Binaries
#

BIN := ./node_modules/.bin
DUO := duo

#
# Command Flags
#

DUO_FLAGS := --use ./lib/plugins.js

ifeq ($(NODE_ENV),development)
	DUO_FLAGS += --development
else
	DUO_FLAGS += --external-source-maps
endif

#
# Wildcards.
#

JS := $(wildcard app.js)
CSS := $(wildcard app.css)
PUBLIC := $(wildcard public/*)
PUBLIC_BUILD := $(patsubst public/%, %,$(wildcard public/*))
POLYFILL := node_modules/duo-babel/node_modules/babel-core/browser-polyfill.js
# JS += $(shell find ../ -path '*/client/index.js')
# CSS := $(shell find -path 'index.css')
# PUBLIC := $(shell find -path 'public/*')

#
# Build.
#


build: node_modules polyfill $(addprefix build/, $(PUBLIC_BUILD) $(CSS) $(JS))
	@[ -d build ] || mkdir build
.PHONY: build

#
# Target for `build/*.js` files.
#


build/%.js: %.js
	$(DUO) $(DUO_FLAGS) $<

#
# Target for `build/*.css` files.
#

build/%.css: %.css
	(DUO) $(DUO_FLAGS) $<

build/%: $(PUBLIC)
	cp $< $@

polyfill: node_modules
	@[ -f build/browser-polyfill ] || cp $(POLYFILL) build


#
# Target for `node_modules` folder.
#

node_modules: package.json
	npm install

#
# Clean.
#

clean: clean-build
.PHONY: clean

#
# Clean generated build.
#

clean-build:
	@rm -rf build
	@$(DUO) clean-cache --quiet
.PHONY: clean-build

#
# Clean downloaded dependencies
#

clean-deps:
	@rm -rf node_modules components
	@npm cache clean
.PHONY: clean-deps
