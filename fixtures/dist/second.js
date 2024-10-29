(() => { // webpackBootstrap
var __webpack_modules__ = ({
"83": (function () {
function render(){
    console.log('xx');
    return `h1 class="text-8xl">
    Hello world!
  </h1>`
}
render();

}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = function (module) {
	var getter = module && module.__esModule ?
		function () { return module['default']; } :
		function () { return module; };
	__webpack_require__.d(getter, { a: getter });
	return getter;
};




})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/get css chunk filename
(() => {
// This function allow to reference chunks
        __webpack_require__.k = function (chunkId) {
          // return url for filenames not based on template
          
          // return url for filenames based on template
          return "" + chunkId + ".css";
        };
      
})();
// webpack/runtime/global
(() => {
__webpack_require__.g = (function () {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();

})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = function () {
	return "1.0.15-canary-f6208b08-20241024061655";
};

})();
// webpack/runtime/auto_public_path
(() => {

    var scriptUrl;
    if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
    var document = __webpack_require__.g.document;
    if (!scriptUrl && document) {
      // Technically we could use `document.currentScript instanceof window.HTMLScriptElement`,
      // but an attacker could try to inject `<script>HTMLScriptElement = HTMLImageElement</script>`
      // and use `<img name="currentScript" src="https://attacker.controlled.server/"></img>`
      if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT') scriptUrl = document.currentScript.src;
      if (!scriptUrl) {
        var scripts = document.getElementsByTagName("script");
            if (scripts.length) {
              var i = scripts.length - 1;
              while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
            }
      }
      }
    
    // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration",
    // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.',
    if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
    scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
    __webpack_require__.p = scriptUrl
    
})();
// webpack/runtime/css_loading
(() => {
var installedChunks = {};
var uniqueName = "";
function handleCssComposes(exports, composes) {
  for (var i = 0; i < composes.length; i += 3) {
    var moduleId = composes[i];
    var composeFrom = composes[i + 1];
    var composeVar = composes[i + 2];
    var composedId = __webpack_require__(composeFrom)[composeVar];
    exports[moduleId] = exports[moduleId] + " " + composedId
  }
}
var loadCssChunkData = (target, link, chunkId) => {
var data, token = "", token2 = "", token3 = "", exports = {}, composes = [], name = "--webpack-" + uniqueName + "-" + chunkId, i, cc = 1, composes = {};
try {
  if(!link) link = loadStylesheet(chunkId);
  var cssRules = link.sheet.cssRules || link.sheet.rules;
  var j = cssRules.length - 1;
  while(j > -1 && !data) {
    var style = cssRules[j--].style;
    if(!style) continue;
    data = style.getPropertyValue(name);
  }
} catch(_) {}
if(!data) {
  data = getComputedStyle(document.head).getPropertyValue(name);
}
if(!data) return [];
var map = {}, char = data[0], oldPhrase = char, decoded = char, code = 256, maxCode = "\uffff".charCodeAt(0), phrase;
              for (i = 1; i < data.length; i++) {
                cc = data[i].charCodeAt(0);
                if (cc < 256) phrase = data[i]; else phrase = map[cc] ? map[cc] : (oldPhrase + char);
                decoded += phrase;
                char = phrase.charAt(0);
                map[code] = oldPhrase + char;
                if (++code > maxCode) { code = 256; map = {}; }
                oldPhrase = phrase;
              }
              data = decoded;
for(i = 0; cc; i++) {
  cc = data.charCodeAt(i);
  if(cc == 58) { token2 = token; token = ""; }
  else if(cc == 47) { token = token.replace(/^_/, ""); token2 = token2.replace(/^_/, ""); if (token3) { composes.push(token2, token3, token) } else { exports[token2] = exports[token2] === undefined ? token : exports[token2] + " " + token } token = ""; token2 = ""; token3 = "" }
  else if(cc == 38) { __webpack_require__.r(exports); }
  else if(!cc || cc == 44) { token = token.replace(/^_/, ""); target[token] = ((exports, composes, module) => {
handleCssComposes(exports, composes)
module.exports = exports;
}).bind(null, exports, composes); token = ""; token2 = ""; exports = {}; composes = [] }
  else if(cc == 92) { token += data[++i] }
  else if(cc == 64) { token3 = token; token = ""; }
  else { token += data[i]; }
}
installedChunks[chunkId] = 0;


}
var loadingAttribute = "data-webpack-loading";
var loadStylesheet = function (chunkId, url, done, hmr, fetchPriority) {
	var link,
		needAttach,
		key = "chunk-" + chunkId;
	if (!hmr) {
		var links = document.getElementsByTagName("link");
		for (var i = 0; i < links.length; i++) {
			var l = links[i];
			var href = l.getAttribute("href") || l.href;
			if (href && !href.startsWith(__webpack_require__.p)) {
				href =
					__webpack_require__.p + (href.startsWith("/") ? href.slice(1) : href);
			}
			if (
				l.rel == "stylesheet" &&
				((href && href.startsWith(url)) ||
					l.getAttribute("data-webpack") == uniqueName + ":" + key)
			) {
				link = l;
				break;
			}
		}
		if (!done) return link;
	}
	if (!link) {
		needAttach = true;
		link = document.createElement("link");
		if (__webpack_require__.nc) {
			link.setAttribute("nonce", __webpack_require__.nc);
		}
		link.setAttribute("data-webpack", uniqueName + ":" + key);
		if (fetchPriority) {
			link.setAttribute("fetchpriority", fetchPriority);
		}
		link.setAttribute(loadingAttribute, 1);
		link.rel = "stylesheet";
		link.href = url;

		
	}
	var onLinkComplete = function (prev, event) {
		link.onerror = link.onload = null;
		link.removeAttribute(loadingAttribute);
		clearTimeout(timeout);
		if (event && event.type != "load") link.parentNode.removeChild(link);
		done(event);
		if (prev) return prev(event);
	};
	if (link.getAttribute(loadingAttribute)) {
		var timeout = setTimeout(
			onLinkComplete.bind(null, undefined, { type: "timeout", target: link }),
			120000
		);
		link.onerror = onLinkComplete.bind(null, link.onerror);
		link.onload = onLinkComplete.bind(null, link.onload);
	} else onLinkComplete(undefined, { type: "load", target: link });
	hmr ? document.head.insertBefore(link, hmr) : needAttach && document.head.appendChild(link);
	return link;
};
loadCssChunkData(__webpack_require__.m, 0, "707");

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.0.15-canary-f6208b08-20241024061655";

})();
/************************************************************************/
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* ESM import */var _share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* ESM import */var _share__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_share__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _second_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(526);


})();

})()
;
//# sourceMappingURL=second.js.map