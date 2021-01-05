module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers/initDb.js":
/*!***************************!*\
  !*** ./helpers/initDb.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
 // jghaOT9bqCl9wS0I;

function initDB() {
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) {
    console.log("alredy connectdd");
    return;
  }

  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://vishwavijay:jghaOT9bqCl9wS0I@cluster0.fy9wb.mongodb.net/mystoreDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }).then(result => {
    console.log("connectd");
  }).catch(err => {
    console.log(err);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (initDB);

/***/ }),

/***/ "./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const productsSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    required: true
  }
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.product || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("product", productsSchema));

/***/ }),

/***/ "./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_initDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/initDb */ "./helpers/initDb.js");
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Product */ "./models/Product.js");


Object(_helpers_initDb__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "GET":
      await getall(req, res);
      break;

    case "POST":
      await addprd(req, res);
      break;
  }
});

const getall = async (req, res) => {
  _models_Product__WEBPACK_IMPORTED_MODULE_1__["default"].find().then(products => {
    res.status(200).json(products);
  }).catch(err => {
    console.log(err);
  });
};

const addprd = async (req, res) => {
  const {
    name,
    price,
    des,
    media
  } = req.body;

  if (!name || !price || !des || !media) {
    return res.status(422).json({
      error: "Please add all the fields"
    });
  }

  const product = await new _models_Product__WEBPACK_IMPORTED_MODULE_1__["default"]({
    name: name,
    price: price,
    description: des,
    mediaUrl: media
  }).save();
  res.status(201).json(product);
};

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9pbml0RGIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsiaW5pdERCIiwibW9uZ29vc2UiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUZpbmRBbmRNb2RpZnkiLCJ0aGVuIiwicmVzdWx0IiwiY2F0Y2giLCJlcnIiLCJwcm9kdWN0c1NjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwcmljZSIsIk51bWJlciIsImRlc2NyaXB0aW9uIiwibWVkaWFVcmwiLCJtb2RlbHMiLCJwcm9kdWN0IiwibW9kZWwiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJnZXRhbGwiLCJhZGRwcmQiLCJQcm9kdWN0IiwiZmluZCIsInByb2R1Y3RzIiwic3RhdHVzIiwianNvbiIsImRlcyIsIm1lZGlhIiwiYm9keSIsImVycm9yIiwic2F2ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztR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LENBQUNJLEtBQVYsSUFBbUIsQ0FBQ2lCLEdBQXBCLElBQTJCLENBQUNDLEtBQWhDLEVBQXVDO0FBQ3JDLFdBQU9WLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVJLFdBQUssRUFBRTtBQUFULEtBQXJCLENBQVA7QUFDRDs7QUFDRCxRQUFNZixPQUFPLEdBQUcsTUFBTSxJQUFJTyx1REFBSixDQUFZO0FBQ2hDaEIsUUFBSSxFQUFFQSxJQUQwQjtBQUVoQ0ksU0FBSyxFQUFFQSxLQUZ5QjtBQUdoQ0UsZUFBVyxFQUFFZSxHQUhtQjtBQUloQ2QsWUFBUSxFQUFFZTtBQUpzQixHQUFaLEVBS25CRyxJQUxtQixFQUF0QjtBQU1BYixLQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQlgsT0FBckI7QUFDRCxDQVpELEM7Ozs7Ozs7Ozs7O0FDdEJBLHFDIiwiZmlsZSI6InBhZ2VzL2FwaS9wcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3Byb2R1Y3RzLmpzXCIpO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG4vLyBqZ2hhT1Q5YnFDbDl3UzBJO1xyXG5mdW5jdGlvbiBpbml0REIoKSB7XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYWxyZWR5IGNvbm5lY3RkZFwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgbW9uZ29vc2VcclxuICAgIC5jb25uZWN0KFxyXG4gICAgICBcIm1vbmdvZGIrc3J2Oi8vdmlzaHdhdmlqYXk6amdoYU9UOWJxQ2w5d1MwSUBjbHVzdGVyMC5meTl3Yi5tb25nb2RiLm5ldC9teXN0b3JlREI/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXHJcbiAgICAgIHtcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGRcIik7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0REI7XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuY29uc3QgcHJvZHVjdHNTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICBwcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIG1lZGlhVXJsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5wcm9kdWN0IHx8XHJcbiAgbW9uZ29vc2UubW9kZWwoXCJwcm9kdWN0XCIsIHByb2R1Y3RzU2NoZW1hKTtcclxuIiwiaW1wb3J0IGluaXREQiBmcm9tIFwiLi4vLi4vaGVscGVycy9pbml0RGJcIjtcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uLy4uL21vZGVscy9Qcm9kdWN0XCI7XHJcbmluaXREQigpO1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcclxuICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgYXdhaXQgZ2V0YWxsKHJlcSwgcmVzKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICBhd2FpdCBhZGRwcmQocmVxLCByZXMpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn07XHJcbmNvbnN0IGdldGFsbCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIFByb2R1Y3QuZmluZCgpXHJcbiAgICAudGhlbigocHJvZHVjdHMpID0+IHtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocHJvZHVjdHMpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgYWRkcHJkID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCBwcmljZSwgZGVzLCBtZWRpYSB9ID0gcmVxLmJvZHk7XHJcbiAgaWYgKCFuYW1lIHx8ICFwcmljZSB8fCAhZGVzIHx8ICFtZWRpYSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgZXJyb3I6IFwiUGxlYXNlIGFkZCBhbGwgdGhlIGZpZWxkc1wiIH0pO1xyXG4gIH1cclxuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgbmV3IFByb2R1Y3Qoe1xyXG4gICAgbmFtZTogbmFtZSxcclxuICAgIHByaWNlOiBwcmljZSxcclxuICAgIGRlc2NyaXB0aW9uOiBkZXMsXHJcbiAgICBtZWRpYVVybDogbWVkaWEsXHJcbiAgfSkuc2F2ZSgpO1xyXG4gIHJlcy5zdGF0dXMoMjAxKS5qc29uKHByb2R1Y3QpO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9