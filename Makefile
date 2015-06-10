
NODE := iojs
NODE_ENV ?= development
DUO := duo \
	--output build \
	--external-source-maps \
	--development


DIR := [ -d build ] || mkdir build
CSS := $(DUO) --use client/node_modules/duo-myth client/styles/app.css --stdout > build/app.css
JS := $(DUO) --use client/node_modules/duo-babel client/lib/app.js --stdout > build/app.js
HTML := cp -u client/index.html build/index.html
SERVE := iojs server/index.js


#
# Commands
#
.PHONY: all
all: install build
	

#
# install
#

.PHONY: install
install: server/node_modules client/node_modules build/browser-polyfill.min.js

%/node_modules: %/package.json
	@cd $* && npm install

build/browser-polyfill.min.js: client/node_modules/duo-babel/node_modules/babel-core/browser-polyfill.min.js
	@cp $< $@



#
# client build & server run
#
.PHONY: build js css html
build: css js assets

css:
	$(CSS)

js:
	@$(JS)

assets:
	$(HTML)

serve:
	$(SERVE)



#
# watch: client build & server run
#
.PHONY: watch-css watch-js watch-server

watch-css:
	@ sane "make css" ./client --glob='**/*.css'

watch-js:
	@ sane "make js" ./client --glob='**/*.js'


watch-assets:
	@ sane "make assets" ./client --glob='[^node_modules]**/*.[^js|css|json]'
	
watch-server:
	@ sane "make serve" ./server --glob='**/*'



#
# Cleaning Up
#

clean: clean-build clean-duo
.PHONY: clean clean-build clean-npm clean-duo

clean-build:
	@rm -rf build

clean-npm:
	@ rm -rf client/node_modules
	@ rm -rf server/node_modules
	npm cache clean

clean-duo:
	@rm -rf ./components
