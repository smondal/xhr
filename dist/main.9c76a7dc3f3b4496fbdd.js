(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default, XhrRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_rjxhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/rjxhr */ "./src/rjxhr.js");
/* harmony import */ var _src_xhr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/xhr */ "./src/xhr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XhrRequest", function() { return _src_xhr__WEBPACK_IMPORTED_MODULE_1__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_src_rjxhr__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Body = function Body(options) {
  var body = options.data;

  if (options.data === undefined) {
    var body = null;
  }

  if (options.csrf == false && (this.method == 'POST' || this.method == 'PUT' || this.method == 'DELETE')) {
    var csrfParam = document.querySelector('meta[name="csrf-param"]').content;
    var csrfToken = document.querySelector('meta[name="csrf-token"]').content;
    body[csrfParam] = csrfToken;
  }

  if (body == null) this.data = body;else if (body instanceof FormData) this.data = body;else this.data = JSON.stringify(body);
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./src/headers.js":
/*!************************!*\
  !*** ./src/headers.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Headers = function Headers(headers) {
  this.requestHeader = {
    'Content-Type': 'application/json'
  };
  this.responseHeader = {};

  if (Array.isArray(headers)) {
    headers.forEach(function (header) {
      this.push(this.requestHeader, header[0], header[1]);
    }, this);
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function (name) {
      this.push(this.requestHeader, name, headers[name]);
    }, this);
  }
};

Headers.prototype.push = function (header, key, value) {
  header[key] = value;
};

/* harmony default export */ __webpack_exports__["default"] = (Headers);

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headers */ "./src/headers.js");
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_2__);




var Request = function Request(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  this.url = url;
  this.method = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["normalize_method"])(options.method);
  this.headers = new _headers__WEBPACK_IMPORTED_MODULE_0__["default"](options.headers);
  this.body = new _body__WEBPACK_IMPORTED_MODULE_1__["default"](options); //  The default value is 0, which means there is no timeout.

  this.timeout = options.timeout || 0;
  this.auth = options.auth;
  this.cancel = options.cancel; //the default value for withCredentials is false

  this.withCredentials = options.withCredentials || false;
};

/* harmony default export */ __webpack_exports__["default"] = (Request);

/***/ }),

/***/ "./src/response.js":
/*!*************************!*\
  !*** ./src/response.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headers */ "./src/headers.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_1__);



var Response = function Response(bodyInit, response, options) {
  var status = new _utils__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"](response.status);
  this.type = 'default';
  this.status = response.status === undefined ? 200 : response.status;
  this.ok = status.success;
  this.statusText = 'statusText' in response ? response.statusText : 'OK';
  this.headers = response.headers;
  this.url = options.url || '';
  if (this.ok || status.client_error) this.data = JSON.parse(bodyInit);
};

/* harmony default export */ __webpack_exports__["default"] = (Response);

/***/ }),

/***/ "./src/rjxhr.js":
/*!**********************!*\
  !*** ./src/rjxhr.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _xhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xhr */ "./src/xhr.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var RjXhr =
/*#__PURE__*/
function () {
  function RjXhr() {
    _classCallCheck(this, RjXhr);
  }

  _createClass(RjXhr, [{
    key: "get",
    value: function get(url, options) {
      var new_options = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["merge_options"])(options, {
        method: 'GET'
      });
      return Object(_xhr__WEBPACK_IMPORTED_MODULE_0__["default"])(url, new_options);
    }
  }, {
    key: "post",
    value: function post(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var new_options = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["merge_options"])(options, {
        method: 'POST'
      });
      return Object(_xhr__WEBPACK_IMPORTED_MODULE_0__["default"])(url, new_options);
    }
  }, {
    key: "put",
    value: function put(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var new_options = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["merge_options"])(options, {
        method: 'PUT'
      });
      return Object(_xhr__WEBPACK_IMPORTED_MODULE_0__["default"])(url, new_options);
    }
  }, {
    key: "delete",
    value: function _delete(url) {
      var new_options = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["merge_options"])(options, {
        method: 'DELETE'
      });
      Object(_xhr__WEBPACK_IMPORTED_MODULE_0__["default"])(url, new_options);
    }
  }]);

  return RjXhr;
}();

/* harmony default export */ __webpack_exports__["default"] = (new RjXhr());

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var merge_options = function merge_options(options, extra) {
  return Object.assign({}, options, extra);
};

var normalize_method = function normalize_method(method) {
  var supported_methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
  var upcase_method = method != undefined ? method.toUpperCase() : 'GET';
  if (supported_methods.indexOf(upcase_method) > -1) return upcase_method;else return '';
};

var HttpStatus = function HttpStatus(status) {
  this.success = status >= 200 && status < 300;
  this.redirection = status >= 300 && status < 400;
  this.client_error = status >= 400 && status < 500;
  this.server_error = status >= 500 && status < 600;
};

module.exports = {
  merge_options: merge_options,
  normalize_method: normalize_method,
  HttpStatus: HttpStatus
};

/***/ }),

/***/ "./src/xhr.js":
/*!********************!*\
  !*** ./src/xhr.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/request.js");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response */ "./src/response.js");
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./headers */ "./src/headers.js");





function parseHeaders(rawHeaders) {
  var headers = new _headers__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
  preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
    var parts = line.split(':');
    var key = parts.shift().trim();

    if (key) {
      var value = parts.join(':').trim();
      headers.push(headers.responseHeader, key, value);
    }
  });
  return headers;
}

var XhrRequest = function XhrRequest(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    var request = new _request__WEBPACK_IMPORTED_MODULE_0__["default"](url, options);
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
      var response = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      };
      options.url = url;
      var body = 'response' in xhr ? xhr.response : xhr.responseText;

      if (this.status >= 200 & this.status < 300) {
        resolve(new _response__WEBPACK_IMPORTED_MODULE_1__["default"](body, response, options));
      } else {
        reject(new _response__WEBPACK_IMPORTED_MODULE_1__["default"](body, response, options));
      }
    };

    xhr.onerror = function () {
      reject(new TypeError('Network request failed'));
    };

    xhr.ontimeout = function () {
      reject(new TypeError('Network request failed'));
    };

    xhr.onabort = function () {
      reject(new TypeError('Network request failed'));
    };

    function abortRequest() {
      xhr.abort();
    }

    xhr.open(request.method, request.url, true); //setting timeout attribute

    xhr.timeout = request.timeout;
    if (request.withCredentials == true) xhr.withCredentials = request.withCredentials; //seeting for basic authorization

    if (request.auth) {
      var username = request.auth.username || '';
      var password = request.auth.password || '';
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    if (request.cancel) {
      xhr.addEventListener('abort', abortRequest);
    } // xhr.setRequestHeader("Content-Type", "application/json")


    Object.keys(request.headers.requestHeader).forEach(function (key) {
      xhr.setRequestHeader(key, request.headers.requestHeader[key]);
    });
    xhr.send(request.body.data);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (XhrRequest);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JqeGhyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMveGhyLmpzIl0sIm5hbWVzIjpbIlJqWGhyIiwiQm9keSIsIm9wdGlvbnMiLCJib2R5IiwiZGF0YSIsInVuZGVmaW5lZCIsImNzcmYiLCJtZXRob2QiLCJjc3JmUGFyYW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY3NyZlRva2VuIiwiRm9ybURhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiSGVhZGVycyIsImhlYWRlcnMiLCJyZXF1ZXN0SGVhZGVyIiwicmVzcG9uc2VIZWFkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiaGVhZGVyIiwicHVzaCIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJuYW1lIiwicHJvdG90eXBlIiwia2V5IiwidmFsdWUiLCJSZXF1ZXN0IiwidXJsIiwibm9ybWFsaXplX21ldGhvZCIsInRpbWVvdXQiLCJhdXRoIiwiY2FuY2VsIiwid2l0aENyZWRlbnRpYWxzIiwiUmVzcG9uc2UiLCJib2R5SW5pdCIsInJlc3BvbnNlIiwic3RhdHVzIiwiSHR0cFN0YXR1cyIsInR5cGUiLCJvayIsInN1Y2Nlc3MiLCJzdGF0dXNUZXh0IiwiY2xpZW50X2Vycm9yIiwicGFyc2UiLCJuZXdfb3B0aW9ucyIsIm1lcmdlX29wdGlvbnMiLCJYaHJSZXF1ZXN0IiwiZXh0cmEiLCJhc3NpZ24iLCJzdXBwb3J0ZWRfbWV0aG9kcyIsInVwY2FzZV9tZXRob2QiLCJ0b1VwcGVyQ2FzZSIsImluZGV4T2YiLCJyZWRpcmVjdGlvbiIsInNlcnZlcl9lcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJwYXJzZUhlYWRlcnMiLCJyYXdIZWFkZXJzIiwicHJlUHJvY2Vzc2VkSGVhZGVycyIsInJlcGxhY2UiLCJzcGxpdCIsImxpbmUiLCJwYXJ0cyIsInNoaWZ0IiwidHJpbSIsImpvaW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ubG9hZCIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInJlc3BvbnNlVGV4dCIsIm9uZXJyb3IiLCJUeXBlRXJyb3IiLCJvbnRpbWVvdXQiLCJvbmFib3J0IiwiYWJvcnRSZXF1ZXN0IiwiYWJvcnQiLCJvcGVuIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFJlcXVlc3RIZWFkZXIiLCJidG9hIiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleXMiLCJzZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVB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TyxDQUFDekMsT0FBdEI7QUFFQSxRQUFJeUMsT0FBTyxDQUFDdEMsZUFBUixJQUEyQixJQUEvQixFQUNFdUMsR0FBRyxDQUFDdkMsZUFBSixHQUFzQnNDLE9BQU8sQ0FBQ3RDLGVBQTlCLENBMUN5QyxDQTRDM0M7O0FBQ0EsUUFBSXNDLE9BQU8sQ0FBQ3hDLElBQVosRUFBa0I7QUFDaEIsVUFBSXFELFFBQVEsR0FBR2IsT0FBTyxDQUFDeEMsSUFBUixDQUFhcUQsUUFBYixJQUF5QixFQUF4QztBQUNBLFVBQUlDLFFBQVEsR0FBR2QsT0FBTyxDQUFDeEMsSUFBUixDQUFhc0QsUUFBYixJQUF5QixFQUF4QztBQUNBYixTQUFHLENBQUNjLGdCQUFKLENBQ0UsZUFERixFQUVFLFdBQVdDLElBQUksQ0FBQ0gsUUFBUSxHQUFHLEdBQVgsR0FBaUJDLFFBQWxCLENBRmpCO0FBSUQ7O0FBRUQsUUFBSWQsT0FBTyxDQUFDdkMsTUFBWixFQUFvQjtBQUNsQndDLFNBQUcsQ0FBQ2dCLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCUCxZQUE5QjtBQUNELEtBeEQwQyxDQXlEM0M7OztBQUNBNUQsVUFBTSxDQUFDb0UsSUFBUCxDQUFZbEIsT0FBTyxDQUFDMUQsT0FBUixDQUFnQkMsYUFBNUIsRUFBMkNJLE9BQTNDLENBQW1ELFVBQVNPLEdBQVQsRUFBYztBQUMvRCtDLFNBQUcsQ0FBQ2MsZ0JBQUosQ0FBcUI3RCxHQUFyQixFQUEwQjhDLE9BQU8sQ0FBQzFELE9BQVIsQ0FBZ0JDLGFBQWhCLENBQThCVyxHQUE5QixDQUExQjtBQUNELEtBRkQ7QUFJQStDLE9BQUcsQ0FBQ2tCLElBQUosQ0FBU25CLE9BQU8sQ0FBQ3hFLElBQVIsQ0FBYUMsSUFBdEI7QUFDRCxHQS9ETSxDQUFQO0FBZ0VELENBakVEOztBQW1FZStDLHlFQUFmLEUiLCJmaWxlIjoibWFpbi45Yzc2YTdkYzNmM2I0NDk2ZmJkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJqWGhyIGZyb20gJy4vc3JjL3JqeGhyJ1xuaW1wb3J0IFhoclJlcXVlc3QgZnJvbSAnLi9zcmMveGhyJ1xuXG5leHBvcnQgZGVmYXVsdCBSalhocjtcbmV4cG9ydCB7WGhyUmVxdWVzdH07XG4iLCJjb25zdCBCb2R5ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgYm9keSA9IG9wdGlvbnMuZGF0YTtcbiAgaWYgKG9wdGlvbnMuZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGJvZHkgPSBudWxsO1xuICB9XG4gIGlmIChcbiAgICBvcHRpb25zLmNzcmYgPT0gZmFsc2UgJiZcbiAgICAodGhpcy5tZXRob2QgPT0gJ1BPU1QnIHx8IHRoaXMubWV0aG9kID09ICdQVVQnIHx8IHRoaXMubWV0aG9kID09ICdERUxFVEUnKVxuICApIHtcbiAgICBsZXQgY3NyZlBhcmFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi1wYXJhbVwiXScpLmNvbnRlbnQ7XG4gICAgbGV0IGNzcmZUb2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5jb250ZW50O1xuICAgIGJvZHlbY3NyZlBhcmFtXSA9IGNzcmZUb2tlbjtcbiAgfVxuICBpZihib2R5ID09IG51bGwpXG4gICAgdGhpcy5kYXRhID0gYm9keVxuICBlbHNlIGlmIChib2R5IGluc3RhbmNlb2YgRm9ybURhdGEpXG4gICAgdGhpcy5kYXRhID0gYm9keVxuICBlbHNlXG4gICAgdGhpcy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQm9keTtcbiIsImNvbnN0IEhlYWRlcnMgPSBmdW5jdGlvbihoZWFkZXJzKSB7XG4gIHRoaXMucmVxdWVzdEhlYWRlciA9IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9O1xuICB0aGlzLnJlc3BvbnNlSGVhZGVyID0ge307XG4gIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgdGhpcy5wdXNoKHRoaXMucmVxdWVzdEhlYWRlciwgaGVhZGVyWzBdLCBoZWFkZXJbMV0pO1xuICAgIH0sIHRoaXMpO1xuICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHRoaXMucHVzaCh0aGlzLnJlcXVlc3RIZWFkZXIsIG5hbWUsIGhlYWRlcnNbbmFtZV0pO1xuICAgIH0sIHRoaXMpO1xuICB9XG59O1xuXG5IZWFkZXJzLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24oaGVhZGVyLCBrZXksIHZhbHVlKSB7XG4gIGhlYWRlcltrZXldID0gdmFsdWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJzO1xuIiwiaW1wb3J0IEhlYWRlcnMgZnJvbSAnLi9oZWFkZXJzJztcbmltcG9ydCBCb2R5IGZyb20gJy4vYm9keSc7XG5pbXBvcnQgeyBub3JtYWxpemVfbWV0aG9kIH0gZnJvbSAnLi91dGlscyc7XG5jb25zdCBSZXF1ZXN0ID0gZnVuY3Rpb24odXJsLCBvcHRpb25zID0ge30pIHtcbiAgdGhpcy51cmwgPSB1cmw7XG4gIHRoaXMubWV0aG9kID0gbm9ybWFsaXplX21ldGhvZChvcHRpb25zLm1ldGhvZCk7XG4gIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gIHRoaXMuYm9keSA9IG5ldyBCb2R5KG9wdGlvbnMpO1xuICAvLyAgVGhlIGRlZmF1bHQgdmFsdWUgaXMgMCwgd2hpY2ggbWVhbnMgdGhlcmUgaXMgbm8gdGltZW91dC5cbiAgdGhpcy50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0IHx8IDA7XG4gIHRoaXMuYXV0aCA9IG9wdGlvbnMuYXV0aDtcblxuICB0aGlzLmNhbmNlbCA9IG9wdGlvbnMuY2FuY2VsO1xuXG4gIC8vdGhlIGRlZmF1bHQgdmFsdWUgZm9yIHdpdGhDcmVkZW50aWFscyBpcyBmYWxzZVxuICB0aGlzLndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzIHx8IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdDtcbiIsImltcG9ydCBIZWFkZXJzIGZyb20gJy4vaGVhZGVycyc7XG5pbXBvcnQgeyBIdHRwU3RhdHVzIH0gZnJvbSAnLi91dGlscyc7XG5jb25zdCBSZXNwb25zZSA9IGZ1bmN0aW9uKGJvZHlJbml0LCByZXNwb25zZSwgb3B0aW9ucykge1xuICB2YXIgc3RhdHVzID0gbmV3IEh0dHBTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKTtcbiAgdGhpcy50eXBlID0gJ2RlZmF1bHQnO1xuICB0aGlzLnN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cyA9PT0gdW5kZWZpbmVkID8gMjAwIDogcmVzcG9uc2Uuc3RhdHVzO1xuICB0aGlzLm9rID0gc3RhdHVzLnN1Y2Nlc3M7XG4gIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiByZXNwb25zZSA/IHJlc3BvbnNlLnN0YXR1c1RleHQgOiAnT0snO1xuICB0aGlzLmhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xuICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnO1xuICBpZiAodGhpcy5vayB8fCBzdGF0dXMuY2xpZW50X2Vycm9yKSB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKGJvZHlJbml0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlO1xuIiwiaW1wb3J0IFhoclJlcXVlc3QgZnJvbSAnLi94aHInO1xuaW1wb3J0IHsgbWVyZ2Vfb3B0aW9ucyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBSalhociB7XG4gIGdldCh1cmwsIG9wdGlvbnMpIHtcbiAgICBsZXQgbmV3X29wdGlvbnMgPSBtZXJnZV9vcHRpb25zKG9wdGlvbnMsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICByZXR1cm4gWGhyUmVxdWVzdCh1cmwsIG5ld19vcHRpb25zKTtcbiAgfVxuICBwb3N0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IG5ld19vcHRpb25zID0gbWVyZ2Vfb3B0aW9ucyhvcHRpb25zLCB7IG1ldGhvZDogJ1BPU1QnIH0pO1xuICAgIHJldHVybiBYaHJSZXF1ZXN0KHVybCwgbmV3X29wdGlvbnMpO1xuICB9XG4gIHB1dCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBuZXdfb3B0aW9ucyA9IG1lcmdlX29wdGlvbnMob3B0aW9ucywgeyBtZXRob2Q6ICdQVVQnIH0pO1xuICAgIHJldHVybiBYaHJSZXF1ZXN0KHVybCwgbmV3X29wdGlvbnMpO1xuICB9XG4gIGRlbGV0ZSh1cmwpIHtcbiAgICBsZXQgbmV3X29wdGlvbnMgPSBtZXJnZV9vcHRpb25zKG9wdGlvbnMsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcbiAgICBYaHJSZXF1ZXN0KHVybCwgbmV3X29wdGlvbnMpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgUmpYaHIoKTtcbiIsImxldCBtZXJnZV9vcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucywgZXh0cmEpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIGV4dHJhKTtcbn07XG5cbmxldCBub3JtYWxpemVfbWV0aG9kID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gIHZhciBzdXBwb3J0ZWRfbWV0aG9kcyA9IFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ0RFTEVURScsICdQQVRDSCddO1xuICB2YXIgdXBjYXNlX21ldGhvZCA9IG1ldGhvZCAhPSB1bmRlZmluZWQgPyBtZXRob2QudG9VcHBlckNhc2UoKSA6ICdHRVQnO1xuICBpZiAoc3VwcG9ydGVkX21ldGhvZHMuaW5kZXhPZih1cGNhc2VfbWV0aG9kKSA+IC0xKSByZXR1cm4gdXBjYXNlX21ldGhvZDtcbiAgZWxzZSByZXR1cm4gJyc7XG59O1xuXG5jb25zdCBIdHRwU3RhdHVzID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gIHRoaXMuc3VjY2VzcyA9IHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB0aGlzLnJlZGlyZWN0aW9uID0gc3RhdHVzID49IDMwMCAmJiBzdGF0dXMgPCA0MDA7XG4gIHRoaXMuY2xpZW50X2Vycm9yID0gc3RhdHVzID49IDQwMCAmJiBzdGF0dXMgPCA1MDA7XG4gIHRoaXMuc2VydmVyX2Vycm9yID0gc3RhdHVzID49IDUwMCAmJiBzdGF0dXMgPCA2MDA7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWVyZ2Vfb3B0aW9uczogbWVyZ2Vfb3B0aW9ucyxcbiAgbm9ybWFsaXplX21ldGhvZDogbm9ybWFsaXplX21ldGhvZCxcbiAgSHR0cFN0YXR1czogSHR0cFN0YXR1cyxcbn07XG4iLCJpbXBvcnQgUmVxdWVzdCBmcm9tICcuL3JlcXVlc3QnO1xuaW1wb3J0IFJlc3BvbnNlIGZyb20gJy4vcmVzcG9uc2UnO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi9ib2R5JztcbmltcG9ydCBIZWFkZXJzIGZyb20gJy4vaGVhZGVycyc7XG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgdmFyIHByZVByb2Nlc3NlZEhlYWRlcnMgPSByYXdIZWFkZXJzLnJlcGxhY2UoL1xccj9cXG5bXFx0IF0rL2csICcgJyk7XG4gIHByZVByb2Nlc3NlZEhlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6Jyk7XG4gICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKCk7XG4gICAgICBoZWFkZXJzLnB1c2goaGVhZGVycy5yZXNwb25zZUhlYWRlciwga2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGhlYWRlcnM7XG59XG5cbmNvbnN0IFhoclJlcXVlc3QgPSBmdW5jdGlvbih1cmwsIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwsIG9wdGlvbnMpO1xuXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKSxcbiAgICAgIH07XG4gICAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgaWYgKCh0aGlzLnN0YXR1cyA+PSAyMDApICYgKHRoaXMuc3RhdHVzIDwgMzAwKSkge1xuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZSwgb3B0aW9ucykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSk7XG4gICAgfTtcblxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpO1xuICAgIH07XG5cbiAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGFib3J0UmVxdWVzdCgpIHtcbiAgICAgIHhoci5hYm9ydCgpO1xuICAgIH1cblxuICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSk7XG5cbiAgICAvL3NldHRpbmcgdGltZW91dCBhdHRyaWJ1dGVcbiAgICB4aHIudGltZW91dCA9IHJlcXVlc3QudGltZW91dDtcblxuICAgIGlmIChyZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9PSB0cnVlKVxuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzO1xuXG4gICAgLy9zZWV0aW5nIGZvciBiYXNpYyBhdXRob3JpemF0aW9uXG4gICAgaWYgKHJlcXVlc3QuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gcmVxdWVzdC5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gcmVxdWVzdC5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXG4gICAgICAgICdBdXRob3JpemF0aW9uJyxcbiAgICAgICAgJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0LmNhbmNlbCkge1xuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRSZXF1ZXN0KTtcbiAgICB9XG4gICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpXG4gICAgT2JqZWN0LmtleXMocmVxdWVzdC5oZWFkZXJzLnJlcXVlc3RIZWFkZXIpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHJlcXVlc3QuaGVhZGVycy5yZXF1ZXN0SGVhZGVyW2tleV0pO1xuICAgIH0pO1xuXG4gICAgeGhyLnNlbmQocmVxdWVzdC5ib2R5LmRhdGEpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFhoclJlcXVlc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9