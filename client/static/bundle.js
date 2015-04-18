/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(1);

	var ga = __webpack_require__(2)(config.analytics);

	var page = __webpack_require__(4);

	document.addEventListener("DOMContentLoaded", function () {
		document.body.innerHTML = page({});
		ga('send', 'pageview');
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  analytics: 'UA-61322857-1'
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (trackingCode) {
	  (function (i, s, o, g, r, a, m) {
	    i['GoogleAnalyticsObject'] = r;
	    i[r] = i[r] || function () {
	      (i[r].q = i[r].q || []).push(arguments)
	    }, i[r].l = 1 * new Date();
	    a = s.createElement(o),
	      m = s.getElementsByTagName(o)[0];
	    a.async = 1;
	    a.src = g;
	    m.parentNode.insertBefore(a, m)
	  })(window, document, 'script', '//www.google-analytics.com/analytics.js',
	    'ga');

	  ga('create', trackingCode, 'auto');
	  return ga;
	}


/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function anonymous(locals, filters, escape, rethrow) {
	    escape = escape || function(html) {
	        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
	    };
	    var __stack = {
	        lineno: 1,
	        input: '<%\n\nvar styles = require(\'./index.css\');\n\nvar header = require(\'./components/header\');\nvar graphPaper = require(\'./components/graph-paper\');\nvar infographic = require(\'./components/infographic\');\nvar divider = require(\'./components/divider\');\nvar team = require(\'./components/team\');\n\nvar rows = [{\n  graphic: require(\'./content/graphic-1.html\'),\n  body: require(\'./content/body-1.md\'),\n}, {\n  graphic: require(\'./content/graphic-2.html\'),\n  body: require(\'./content/body-2.md\'),\n}, {\n  graphic: require(\'./content/graphic-3.html\'),\n  body: require(\'./content/body-3.md\'),\n}];\n%>\n\n<%- graphPaper() %>\n<div class="page">\n  <%- header() %>\n\n  <%- divider() %>\n  <%- infographic(rows[0]) %>\n  <%- divider() %>\n  <%- infographic(rows[1]) %>\n  <%- divider() %>\n  <%- infographic(rows[2]) %>\n</div>\n<div class="page" style="background: #346; border: 1px solid #DDD; color: white">\n  <div class="row center-xs middle-xs">\n    <div class="col-xs-3">\n      <h4>Collaborators</h4>\n    </div>\n    <div class="col-xs-9 start-xs">\n      <%- team() %>\n    </div>\n  </div>\n  <%- divider() %>\n  <div class="row middle-xs">\n    <div class="col-xs-3 center-xs ">\n      <h4>First Meets</h4>\n    </div>\n    <div class="col-xs-3">\n      <img style="max-width: 250px" src="/team-all.jpg" alt="" />\n    </div>\n    <div class="col-xs-3">\n      <img style="max-width: 250px" src="/team-all-2.png" alt="" />\n    </div>\n\n  </div>\n</div>\n',
	        filename: "."
	    };
	    function rethrow(err, str, filename, lineno) {
	        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
	        var context = lines.slice(start, end).map(function(line, i) {
	            var curr = i + start + 1;
	            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
	        }).join("\n");
	        err.path = filename;
	        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
	        throw err;
	    }
	    try {
	        var buf = [];
	        with (locals || {}) {
	            (function() {
	                buf.push("");
	                __stack.lineno = 1;
	                var styles = __webpack_require__(10);
	                var header = __webpack_require__(5);
	                var graphPaper = __webpack_require__(6);
	                var infographic = __webpack_require__(7);
	                var divider = __webpack_require__(8);
	                var team = __webpack_require__(9);
	                var rows = [ {
	                    graphic: __webpack_require__(12),
	                    body: __webpack_require__(15)
	                }, {
	                    graphic: __webpack_require__(13),
	                    body: __webpack_require__(16)
	                }, {
	                    graphic: __webpack_require__(14),
	                    body: __webpack_require__(17)
	                } ];
	                buf.push("\n\n", (__stack.lineno = 23, graphPaper()), '\n<div class="page">\n  ', (__stack.lineno = 25, header()), "\n\n  ", (__stack.lineno = 27, divider()), "\n  ", (__stack.lineno = 28, infographic(rows[0])), "\n  ", (__stack.lineno = 29, divider()), "\n  ", (__stack.lineno = 30, infographic(rows[1])), "\n  ", (__stack.lineno = 31, divider()), "\n  ", (__stack.lineno = 32, infographic(rows[2])), '\n</div>\n<div class="page" style="background: #346; border: 1px solid #DDD; color: white">\n  <div class="row center-xs middle-xs">\n    <div class="col-xs-3">\n      <h4>Collaborators</h4>\n    </div>\n    <div class="col-xs-9 start-xs">\n      ', (__stack.lineno = 40, team()), "\n    </div>\n  </div>\n  ", (__stack.lineno = 43, divider()), '\n  <div class="row middle-xs">\n    <div class="col-xs-3 center-xs ">\n      <h4>First Meets</h4>\n    </div>\n    <div class="col-xs-3">\n      <img style="max-width: 250px" src="/team-all.jpg" alt="" />\n    </div>\n    <div class="col-xs-3">\n      <img style="max-width: 250px" src="/team-all-2.png" alt="" />\n    </div>\n\n  </div>\n</div>\n');
	            })();
	        }
	        return buf.join("");
	    } catch (err) {
	        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
	    }
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var styles = __webpack_require__(19);
	var html = __webpack_require__(21);

	module.exports = function () {
	  return html;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var graphPaper = __webpack_require__(26)();

	module.exports = function () {
	  return graphPaper;
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var row = __webpack_require__(25);

	module.exports = function (config) {
		return row(config);
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var html = __webpack_require__(22);
	var styles = __webpack_require__(23);

	module.exports = function () {
	  return html;
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var thumbnailGrid = __webpack_require__(27);
	var style = __webpack_require__(28);
	var thumbnail = __webpack_require__(30);

	var thumbnails = [{
		caption: 'Dan',
		url: '/team-dan.jpg'
	}, {
		caption: 'Hai Bac',
		url: '/team-haibac.png'
	}, {
		caption: 'Tuan',
		url: '/team-tuan.png'
	}, {
		caption: 'Dung',
		url: '/team-minhha.png'
	}, {
		caption: 'Jake',
		url: '/team-jake.png'
	}, {
		caption: 'Dung',
		url: '/team-dung.png'
	}];

	var inner = '';
	for (var i = 0; i < thumbnails.length; i++) {
		inner += thumbnail(thumbnails[i]);
	}

	module.exports = function () {
		return thumbnailGrid({
			thumbnails: inner
		});
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/dsont/dev/metadev/client/node_modules/css-loader/index.js!/home/dsont/dev/metadev/client/src/index.css", function() {
			var newContent = require("!!/home/dsont/dev/metadev/client/node_modules/css-loader/index.js!/home/dsont/dev/metadev/client/src/index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	exports.push([module.id, "\nbody {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n\n\tfont-family: \"Lato\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n\tfont-size: 15px;\n\tline-height: 1.42857143;\n  background-color: #EEE;\n}\n\nbody, a {\n  color: #23232F;\n}\n\n.page {\n  color: #23232F;\n  background: white;\n  max-width: 1200px;\n  box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.12);\n  margin: 0 auto 0 auto;\n  box-sizing: border-box;\n  padding: 2rem;\n  padding-bottom: 4em;\n}\n\n.page-title {\n  padding-left: 2rem;\n  font-size: 24px;\n}\n\n\n.team {\n  /*box-shadow: 0 0 16px 1px rgba(0,0,0,0.52);*/\n  /*border-top: 1px solid #B32B2B;*/\n  margin: 5px auto 0 auto;\n}\n\n.contact-us {\n  background: #333;\n}\n\n.contact-us h2 {\n  color: #DDD;\n}\n.contact-col {\n  padding: 5px 80px;\n}\n\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #b4bcc2;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 21px;\n  margin-bottom: 10.5px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10.5px;\n  margin-bottom: 10.5px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 39px;\n}\nh2,\n.h2 {\n  font-size: 32px;\n}\nh3,\n.h3 {\n  font-size: 26px;\n}\nh4,\n.h4 {\n  font-size: 19px;\n}\nh5,\n.h5 {\n  font-size: 15px;\n}\nh6,\n.h6 {\n  font-size: 13px;\n}\np {\n  margin: 0 0 10.5px;\n}\n", ""]);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<i class=\"fa fa-bolt\" style=\"font-size: 181px\"></i>\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<i class=\"fa fa-institution\" style=\"font-size: 181px\"></i>\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<img src=\"/oshw-logo-outline.svg\"/>\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h4 id=\"the-action\">The Action</h4>\n<p>We design, co-design, and facilitate the manufacture and monetization of products which:</p>\n<ol>\n<li>Give their users new abilities (empowerment)</li>\n<li>Reduce the power of unearned influence</li>\n<li>Contribute to the global commons by open sourcing design</li>\n<li>Make the world a better, safer place.  </li>\n</ol>\n<p>We help open startups make it from vision to profitability through consultation, facilitation, and directly adding to their team through our pool of experts.  </p>\n<p>Additionally, our team of independent in-house experts teaches next-generation computing concepts and researches block-chains and e-commerce solutions.</p>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h4 id=\"the-platform\">The Platform</h4>\n<ul>\n<li><p>A Hybrid Organization: Workspace + learning + manufacturing + global sales</p>\n</li>\n<li><p>An infrastructure platform for startups with high monetization potential and an understanding of next generation business models and technologies.</p>\n</li>\n<li>A tangible gathering space for open source community leaders and beginners alike to exchange their views.</li>\n<li>A knowledge-sharing community aimed at helping people from all backgrounds do the work they are passionate about together.</li>\n</ul>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h4 id=\"the-strategy\">The Strategy</h4>\n<ol>\n<li>Build a multidisciplinary team and provide them with all of the resources needed to rapidly prototype and manufacture hardware, software, webware, and service-based solutions for the emergent &quot;internet of things,&quot; as well as traditional computing devices.</li>\n<li>Develop and <strong>commercialize</strong> open hardware products that span every price bracket using modular components.</li>\n<li>Develop open software with clear applications in today&#39;s world.</li>\n<li>Run a firmware repository containing firmware for both open and opened technology platforms.</li>\n<li>Leverage our 100% transparent, open business model to enhance our competitive advantage in: recruiting, customers&#39; and suppliers understanding of our strategies, and public awareness of our solutions</li>\n<li>In order to have an excellent product pipeline and top talent, support open technology projects of every type.</li>\n<li>Intentionally integrate our projects and corporate ownership as appropriate, while seeking further integration opportunities.</li>\n</ol>\n";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/dsont/dev/metadev/client/node_modules/css-loader/index.js!/home/dsont/dev/metadev/client/src/components/header/header.css", function() {
			var newContent = require("!!/home/dsont/dev/metadev/client/node_modules/css-loader/index.js!/home/dsont/dev/metadev/client/src/components/header/header.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	exports.push([module.id, ".page-nav {\n\tline-height: 60px;\n  padding: 0 60px;\n\tmax-width: 1200px;\n\tmargin: auto;\n}\n\n.page-nav .title {\n\tpadding: 0 15px;\n  font-size: 120%;\n}\n\n.page-nav a {\n\tpadding: 0 15px;\n\ttext-decoration: none;\n  font-size: 105%;\n}\n", ""]);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"row between-xs page-nav\">\n  <div>\n\t\t<span class=\"page-title\">MetaDev Foundation</span>\n  </div>\n\n\t<div class=\"box\">\n\t\t<a href=\"http://forum.metadevfoundation.org\">Forums</a>\n\t\t<a href=\"http://blog.metadevfoundation.org\">Blog</a>\n\t\t<a href=\"http://shop.metadevfoundation.org\">Shop</a>\n\t</div>\n</div>\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<hr class=\"soften\">\n";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/dsont/dev/metadev/client/node_modules/css-loader/index.js!/home/dsont/dev/metadev/client/src/components/divider/divider.css", function() {
			var newContent = require("!!/home/dsont/dev/metadev/client/node_modules/css-loader/index.js!/home/dsont/dev/metadev/client/src/components/divider/divider.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	exports.push([module.id, "hr.soften {\n  margin: 30px 10px;\n  height: 1px;\n  background-image: -webkit-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0));\n  background-image:    -moz-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0));\n  background-image:     -ms-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0));\n  background-image:      -o-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0));\n  border: 0;\n}\n", ""]);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function anonymous(locals, filters, escape, rethrow) {
	    escape = escape || function(html) {
	        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
	    };
	    var __stack = {
	        lineno: 1,
	        input: '<div class="row middle-xs">\n	<div class="col-xs-4 center-xs">\n		<%- graphic %>\n	</div>\n	<div class="col-xs-8">\n		<%- body %>\n	</div>\n</div>\n',
	        filename: "."
	    };
	    function rethrow(err, str, filename, lineno) {
	        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
	        var context = lines.slice(start, end).map(function(line, i) {
	            var curr = i + start + 1;
	            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
	        }).join("\n");
	        err.path = filename;
	        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
	        throw err;
	    }
	    try {
	        var buf = [];
	        with (locals || {}) {
	            (function() {
	                buf.push('<div class="row middle-xs">\n	<div class="col-xs-4 center-xs">\n		', (__stack.lineno = 3, graphic), '\n	</div>\n	<div class="col-xs-8">\n		', (__stack.lineno = 6, body), "\n	</div>\n</div>\n");
	            })();
	        }
	        return buf.join("");
	    } catch (err) {
	        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
	    }
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function anonymous(locals, filters, escape, rethrow) {
	    escape = escape || function(html) {
	        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
	    };
	    var __stack = {
	        lineno: 1,
	        input: '<style>\n\n	svg {\n		shape-rendering: geometricPrecision;\n		z-index: -1;\n	  position: absolute;\n\n		top: 0;\n		right: 0;\n		left: 0;\n		bottom: 0;\n		margin-top: 0px;\n	}\n\n	line {\n		/*stroke: url(#gradient);*/\n		stroke: #e9e8e3;\n		stroke-width: 0.5;\n	}\n</style>\n\n<%\n	var total = 75;\n\n	var width = 1000;\n	var height = 1000;\n%>\n\n<svg viewBox="0 0 1000 1000">\n  <defs>\n    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">\n			<stop offset="0%" stop-color="#5151c1">\n      <stop offset="100%" stop-color="#333"/>\n    </linearGradient>\n			<g id="rays">\n\n				<% for (var i = 0; i < total; i++) {\n					dx = i * width / total;\n					dy = i * height / total; %>\n					<!-- corner to side -->\n					<line	x1="0" x2="<%= width %>" y1="<%= dy %>" y2="<%= dy %>" />\n					<line	x1="<%= dx %>" x2="<%= dx %>" y1="0" y2="<%= height %>" />\n				<% } %>\n\n				<% for (var i = 0; i < total; i++) {\n					dx = i * width / total;\n					dy = i * height / total; %>\n					<!-- corner to bottom -->\n				<% } %>\n\n\n			</g>\n  </defs>\n\n		<g>\n			<use xlink:href="#rays" transform="translate(40, -180) rotate(15) translate(350, 10) scale(1.5, 1.5)" />\n		</g>\n\n</svg>\n',
	        filename: "."
	    };
	    function rethrow(err, str, filename, lineno) {
	        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
	        var context = lines.slice(start, end).map(function(line, i) {
	            var curr = i + start + 1;
	            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
	        }).join("\n");
	        err.path = filename;
	        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
	        throw err;
	    }
	    try {
	        var buf = [];
	        with (locals || {}) {
	            (function() {
	                buf.push("<style>\n\n	svg {\n		shape-rendering: geometricPrecision;\n		z-index: -1;\n	  position: absolute;\n\n		top: 0;\n		right: 0;\n		left: 0;\n		bottom: 0;\n		margin-top: 0px;\n	}\n\n	line {\n		/*stroke: url(#gradient);*/\n		stroke: #e9e8e3;\n		stroke-width: 0.5;\n	}\n</style>\n\n");
	                __stack.lineno = 22;
	                var total = 75;
	                var width = 1e3;
	                var height = 1e3;
	                buf.push('\n\n<svg viewBox="0 0 1000 1000">\n  <defs>\n    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">\n			<stop offset="0%" stop-color="#5151c1">\n      <stop offset="100%" stop-color="#333"/>\n    </linearGradient>\n			<g id="rays">\n\n				');
	                __stack.lineno = 37;
	                for (var i = 0; i < total; i++) {
	                    dx = i * width / total;
	                    dy = i * height / total;
	                    buf.push('\n					<!-- corner to side -->\n					<line	x1="0" x2="', escape((__stack.lineno = 41, width)), '" y1="', escape((__stack.lineno = 41, dy)), '" y2="', escape((__stack.lineno = 41, dy)), '" />\n					<line	x1="', escape((__stack.lineno = 42, dx)), '" x2="', escape((__stack.lineno = 42, dx)), '" y1="0" y2="', escape((__stack.lineno = 42, height)), '" />\n				');
	                    __stack.lineno = 43;
	                }
	                buf.push("\n\n				");
	                __stack.lineno = 45;
	                for (var i = 0; i < total; i++) {
	                    dx = i * width / total;
	                    dy = i * height / total;
	                    buf.push("\n					<!-- corner to bottom -->\n				");
	                    __stack.lineno = 49;
	                }
	                buf.push('\n\n\n			</g>\n  </defs>\n\n		<g>\n			<use xlink:href="#rays" transform="translate(40, -180) rotate(15) translate(350, 10) scale(1.5, 1.5)" />\n		</g>\n\n</svg>\n');
	            })();
	        }
	        return buf.join("");
	    } catch (err) {
	        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
	    }
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function anonymous(locals, filters, escape, rethrow) {
	    escape = escape || function(html) {
	        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
	    };
	    var __stack = {
	        lineno: 1,
	        input: '<div class="thumbnail-grid row center-xs">\n	<%- thumbnails %>\n</div>\n',
	        filename: "."
	    };
	    function rethrow(err, str, filename, lineno) {
	        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
	        var context = lines.slice(start, end).map(function(line, i) {
	            var curr = i + start + 1;
	            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
	        }).join("\n");
	        err.path = filename;
	        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
	        throw err;
	    }
	    try {
	        var buf = [];
	        with (locals || {}) {
	            (function() {
	                buf.push('<div class="thumbnail-grid row center-xs">\n	', (__stack.lineno = 2, thumbnails), "\n</div>\n");
	            })();
	        }
	        return buf.join("");
	    } catch (err) {
	        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
	    }
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/dsont/dev/metadev/client/node_modules/css-loader/index.js!/home/dsont/dev/metadev/client/src/components/team/thumbnail-grid.css", function() {
			var newContent = require("!!/home/dsont/dev/metadev/client/node_modules/css-loader/index.js!/home/dsont/dev/metadev/client/src/components/team/thumbnail-grid.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	exports.push([module.id, "\n.thumbnail-grid {\n\tuser-select: none\n}\n\n.thumbnail-grid figure {\n\tposition: relative;\n\tmargin: 5px;\n\tbackground: white;\n}\n\n.thumbnail-grid figure div {\n\twidth: 130px;\n\theight: 150px;\n}\n\n.thumbnail-grid figcaption {\n\tposition: absolute;\n\tcolor: white;\n\tbackground: rgba(0, 0, 0, 0.4);\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tpadding: 0 1em;\n\tfont-weight: 300;\n\tline-height: 2em;\n\tfont-size: 18px;\n}\n", ""]);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function anonymous(locals, filters, escape, rethrow) {
	    escape = escape || function(html) {
	        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
	    };
	    var __stack = {
	        lineno: 1,
	        input: '<figure>\n	<div style="background: url(<%- url %>) no-repeat center; background-size: cover"></div>\n	<figcaption><%- caption %></figcaption>\n</figure>\n',
	        filename: "."
	    };
	    function rethrow(err, str, filename, lineno) {
	        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
	        var context = lines.slice(start, end).map(function(line, i) {
	            var curr = i + start + 1;
	            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
	        }).join("\n");
	        err.path = filename;
	        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
	        throw err;
	    }
	    try {
	        var buf = [];
	        with (locals || {}) {
	            (function() {
	                buf.push('<figure>\n	<div style="background: url(', (__stack.lineno = 2, url), ') no-repeat center; background-size: cover"></div>\n	<figcaption>', (__stack.lineno = 3, caption), "</figcaption>\n</figure>\n");
	            })();
	        }
	        return buf.join("");
	    } catch (err) {
	        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
	    }
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ }
/******/ ]);