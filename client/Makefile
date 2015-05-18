#
# Environment.
#

NODE := iojs
NODE_ENV ?= development

#
# Duo
#

DUO := duo --use ./lib/plugins.js

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

#
# Main Command.
#

all: install build watch

#
# Install targets
#
install: node_modules $(PUBLIC_TARGET) build/browser-polyfill.js

#
# Build Command
#
build: app.js app.css
	@$(DUO) -C $^

#
# Watch Command
#
watch: app.js app.css
	@$(DUO) --watch -C $^

#
# NPM Command
#
node_modules: package.json
	npm install

#
# Install Public
#
build/%: $(PUBLIC)
	@mkdir build
	@cp $^ $@

# Install Polyfill
build/browser-polyfill.js: node_modules/duo-babel/node_modules/babel-core/browser-polyfill.js
	@cp $< $@

# Clean build/
clean-build:
	@rm -rf build
	@mkdir build

# Clean node_modules/ components/
clean-deps:
	@rm -rf node_modules components
	@npm cache clean

.PHONY: all install build watch clean-build clean-deps
