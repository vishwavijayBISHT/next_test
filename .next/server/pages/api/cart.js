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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/cart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/Cart.js":
/*!************************!*\
  !*** ./models/Cart.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const cartSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  user: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,
    ref: "UserIn"
  },
  products: [{
    quantity: {
      type: Number,
      default: 1
    },
    prod: {
      type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,
      ref: "product"
    }
  }]
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.cart || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("cart", cartSchema));

/***/ }),

/***/ "./pages/api/cart.js":
/*!***************************!*\
  !*** ./pages/api/cart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Cart */ "./models/Cart.js");


/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "GET":
      await fetchuser(req, res);
      break;

    case "PUT":
      await updateProducts(req, res);
      break;

    case "DELETE":
      await deleteProducts(req, res);
  }
});

function Authinicated(icomponenet) {
  return (req, res) => {
    const {
      authorization
    } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        error: "you must be login"
      });
    }

    try {
      const {
        userid
      } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(authorization, "fxfgcgvhgvh");
      req.userid = userid;
      return icomponenet(req, res);
    } catch (err) {
      return res.status(401).json({
        error: "you must be login"
      });
    }
  };
}

const fetchuser = Authinicated(async (req, res) => {
  const cart = await _models_Cart__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    user: req.userid
  }).populate("products.prod");
  console.log(cart.products.prod);
  return res.status(200).json(cart);
});
const updateProducts = Authinicated(async (req, res) => {
  try {
    const {
      quantity,
      productId
    } = req.body;
    const cart = await _models_Cart__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      user: req.userid
    });
    console.log(cart.products);
    const exixt = cart.products.some(pdoc => productId == pdoc.prod);
    console.log(exixt);

    if (exixt) {
      const c = await _models_Cart__WEBPACK_IMPORTED_MODULE_1__["default"].findOneAndUpdate({
        _id: cart._id,
        "products.prod": productId
      }, {
        $inc: {
          "products.$.quantity": quantity
        }
      });
    } else {
      const newp = {
        quantity,
        prod: productId
      };
      console.log("newp  " + newp.prod);
      const a = await _models_Cart__WEBPACK_IMPORTED_MODULE_1__["default"].findOneAndUpdate({
        _id: cart._id
      }, {
        $push: {
          products: {
            quantity: newp.quantity,
            prod: newp.prod
          }
        }
      });
      console.log(" xasxasxcas    " + a.products.prod);
    }

    return res.status(200).json({
      message: "Product added to cart"
    });
  } catch (err) {
    return res.status(401).json({
      error: "Cant add server error"
    });
  }
});
const deleteProducts = Authinicated(async (req, res) => {
  const {
    productid
  } = req.body;
  const cart = await _models_Cart__WEBPACK_IMPORTED_MODULE_1__["default"].findOneAndUpdate({
    user: req.userid
  }, {
    $pull: {
      products: {
        prod: productid
      }
    }
  }, {
    new: true
  }).populate("products.prod");
  res.status(200).json(cart.products);
});

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NhcnQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJuYW1lcyI6WyJjYXJ0U2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJ1c2VyIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJwcm9kdWN0cyIsInF1YW50aXR5IiwiTnVtYmVyIiwiZGVmYXVsdCIsInByb2QiLCJtb2RlbHMiLCJjYXJ0IiwibW9kZWwiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJmZXRjaHVzZXIiLCJ1cGRhdGVQcm9kdWN0cyIsImRlbGV0ZVByb2R1Y3RzIiwiQXV0aGluaWNhdGVkIiwiaWNvbXBvbmVuZXQiLCJhdXRob3JpemF0aW9uIiwiaGVhZGVycyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInVzZXJpZCIsImp3dCIsInZlcmlmeSIsImVyciIsIkNhcnQiLCJmaW5kT25lIiwicG9wdWxhdGUiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdElkIiwiYm9keSIsImV4aXh0Iiwic29tZSIsInBkb2MiLCJjIiwiZmluZE9uZUFuZFVwZGF0ZSIsIl9pZCIsIiRpbmMiLCJuZXdwIiwiYSIsIiRwdXNoIiwibWVzc2FnZSIsInByb2R1Y3RpZCIsIiRwdWxsIiwibmV3Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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T0FsQixLQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQmIsSUFBSSxDQUFDTixRQUExQjtBQUNELENBVmtDLENBQW5DLEM7Ozs7Ozs7Ozs7O0FDeEVBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2FwaS9jYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvY2FydC5qc1wiKTtcbiIsImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuY29uc3QgY2FydFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIHVzZXI6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiVXNlckluXCIgfSxcclxuICBwcm9kdWN0czogW1xyXG4gICAge1xyXG4gICAgICBxdWFudGl0eTogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDEgfSxcclxuICAgICAgcHJvZDogeyB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogXCJwcm9kdWN0XCIgfSxcclxuICAgIH0sXHJcbiAgXSxcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5jYXJ0IHx8IG1vbmdvb3NlLm1vZGVsKFwiY2FydFwiLCBjYXJ0U2NoZW1hKTtcclxuIiwiaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi8uLi9tb2RlbHMvQ2FydFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgIGF3YWl0IGZldGNodXNlcihyZXEsIHJlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICBhd2FpdCB1cGRhdGVQcm9kdWN0cyhyZXEsIHJlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIkRFTEVURVwiOlxyXG4gICAgICBhd2FpdCBkZWxldGVQcm9kdWN0cyhyZXEsIHJlcyk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gQXV0aGluaWNhdGVkKGljb21wb25lbmV0KSB7XHJcbiAgcmV0dXJuIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBhdXRob3JpemF0aW9uIH0gPSByZXEuaGVhZGVycztcclxuXHJcbiAgICBpZiAoIWF1dGhvcml6YXRpb24pIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6IFwieW91IG11c3QgYmUgbG9naW5cIiB9KTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgdXNlcmlkIH0gPSBqd3QudmVyaWZ5KGF1dGhvcml6YXRpb24sIFwiZnhmZ2NndmhndmhcIik7XHJcbiAgICAgIHJlcS51c2VyaWQgPSB1c2VyaWQ7XHJcblxyXG4gICAgICByZXR1cm4gaWNvbXBvbmVuZXQocmVxLCByZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBcInlvdSBtdXN0IGJlIGxvZ2luXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgZmV0Y2h1c2VyID0gQXV0aGluaWNhdGVkKGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IGNhcnQgPSBhd2FpdCBDYXJ0LmZpbmRPbmUoeyB1c2VyOiByZXEudXNlcmlkIH0pLnBvcHVsYXRlKFxyXG4gICAgXCJwcm9kdWN0cy5wcm9kXCJcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKGNhcnQucHJvZHVjdHMucHJvZCk7XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNhcnQpO1xyXG59KTtcclxuY29uc3QgdXBkYXRlUHJvZHVjdHMgPSBBdXRoaW5pY2F0ZWQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgcXVhbnRpdHksIHByb2R1Y3RJZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc3QgY2FydCA9IGF3YWl0IENhcnQuZmluZE9uZSh7IHVzZXI6IHJlcS51c2VyaWQgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhjYXJ0LnByb2R1Y3RzKTtcclxuXHJcbiAgICBjb25zdCBleGl4dCA9IGNhcnQucHJvZHVjdHMuc29tZSgocGRvYykgPT4gcHJvZHVjdElkID09IHBkb2MucHJvZCk7XHJcbiAgICBjb25zb2xlLmxvZyhleGl4dCk7XHJcbiAgICBpZiAoZXhpeHQpIHtcclxuICAgICAgY29uc3QgYyA9IGF3YWl0IENhcnQuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAgICB7IF9pZDogY2FydC5faWQsIFwicHJvZHVjdHMucHJvZFwiOiBwcm9kdWN0SWQgfSxcclxuICAgICAgICB7ICRpbmM6IHsgXCJwcm9kdWN0cy4kLnF1YW50aXR5XCI6IHF1YW50aXR5IH0gfVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbmV3cCA9IHsgcXVhbnRpdHksIHByb2Q6IHByb2R1Y3RJZCB9O1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5ld3AgIFwiICsgbmV3cC5wcm9kKTtcclxuICAgICAgY29uc3QgYSA9IGF3YWl0IENhcnQuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBfaWQ6IGNhcnQuX2lkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyAkcHVzaDogeyBwcm9kdWN0czogeyBxdWFudGl0eTogbmV3cC5xdWFudGl0eSwgcHJvZDogbmV3cC5wcm9kIH0gfSB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiIHhhc3hhc3hjYXMgICAgXCIgKyBhLnByb2R1Y3RzLnByb2QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiUHJvZHVjdCBhZGRlZCB0byBjYXJ0XCIgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogXCJDYW50IGFkZCBzZXJ2ZXIgZXJyb3JcIiB9KTtcclxuICB9XHJcbn0pO1xyXG5jb25zdCBkZWxldGVQcm9kdWN0cyA9IEF1dGhpbmljYXRlZChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCB7IHByb2R1Y3RpZCB9ID0gcmVxLmJvZHk7XHJcbiAgY29uc3QgY2FydCA9IGF3YWl0IENhcnQuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgIHtcclxuICAgICAgdXNlcjogcmVxLnVzZXJpZCxcclxuICAgIH0sXHJcbiAgICB7ICRwdWxsOiB7IHByb2R1Y3RzOiB7IHByb2Q6IHByb2R1Y3RpZCB9IH0gfSxcclxuICAgIHsgbmV3OiB0cnVlIH1cclxuICApLnBvcHVsYXRlKFwicHJvZHVjdHMucHJvZFwiKTtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbihjYXJ0LnByb2R1Y3RzKTtcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9