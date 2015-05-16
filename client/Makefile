#
# Environment.
#

NODE := iojs
NODE_ENV ?= development

#
# Duo
#

DUO := duo --use ./lib/plugins.js --use duo-yaml

ifeq ($(NODE_ENV),development)
	DUO += --development
else
	DUO += --external-source-maps
endif

#
# Wildcards. (Not so wild)
#

PUBLIC := $(wildcard public/*)
PUBLIC_TARGET := $(patsubst public/%, build/%, $(wildcard public/*))



.PHONY: all


all: install build watch



.PHONY: build watch


build: app.js app.css
	@$(DUO) -C $^

watch: app.js app.css
	@$(DUO) --watch -C $^



.PHONY: install


install: node_modules $(PUBLIC_TARGET) build/browser-polyfill.js

node_modules: package.json
	npm install

build/%: $(PUBLIC)
	@mkdir build
	cp $^ $@

build/browser-polyfill.js: node_modules/duo-babel/node_modules/babel-core/browser-polyfill.js
	cp $< $@



.PHONY: clean


clean: clean
	@rm -rf build

.PHONY: clean-deps
clean-deps:
	@rm -rf node_modules components
	@npm cache clean
