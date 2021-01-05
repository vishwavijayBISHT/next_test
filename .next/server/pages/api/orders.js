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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/orders.js");
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

/***/ "./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  ObjectId
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;
const orderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  user: {
    type: ObjectId,
    ref: "UserIn"
  },
  products: [{
    quantity: {
      type: Number,
      default: 1
    },
    prod: {
      type: ObjectId,
      ref: "product"
    }
  }],
  email: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Order || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Order", orderSchema));

/***/ }),

/***/ "./pages/api/orders.js":
/*!*****************************!*\
  !*** ./pages/api/orders.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_initDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/initDb */ "./helpers/initDb.js");
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Order */ "./models/Order.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);





Object(_helpers_initDb__WEBPACK_IMPORTED_MODULE_0__["default"])();

function Authinicated(icomponenet) {
  return (req, res) => {
    const {
      authorization
    } = req.headers;
    console.log(authorization);

    if (!authorization) {
      return res.status(401).json({
        error: "you must be login"
      });
    }

    try {
      const {
        userid
      } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.verify(authorization, "fxfgcgvhgvh");
      req.userid = userid;
      return icomponenet(req, res);
    } catch (err) {
      return res.status(401).json({
        error: "you must be login"
      });
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Authinicated(async (req, res) => {
  const orders = await _models_Order__WEBPACK_IMPORTED_MODULE_1__["default"].findOneAndUpdate({
    user: req.userid
  }).populate("products.prod"); //   const a = orders.products

  console.log("asdasdasdsd=>>>>>>" + orders);
  console.log("asdasdasdsd=>>>>>>" + orders.products);
  res.status(200).json(orders.products);
}));

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9pbml0RGIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL09yZGVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9vcmRlcnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbImluaXREQiIsIm1vbmdvb3NlIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidGhlbiIsInJlc3VsdCIsImNhdGNoIiwiZXJyIiwiT2JqZWN0SWQiLCJTY2hlbWEiLCJUeXBlcyIsIm9yZGVyU2NoZW1hIiwidXNlciIsInR5cGUiLCJyZWYiLCJwcm9kdWN0cyIsInF1YW50aXR5IiwiTnVtYmVyIiwiZGVmYXVsdCIsInByb2QiLCJlbWFpbCIsIlN0cmluZyIsInJlcXVpcmVkIiwidG90YWwiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiT3JkZXIiLCJtb2RlbCIsIkF1dGhpbmljYXRlZCIsImljb21wb25lbmV0IiwicmVxIiwicmVzIiwiYXV0aG9yaXphdGlvbiIsImhlYWRlcnMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ1c2VyaWQiLCJqd3QiLCJ2ZXJpZnkiLCJvcmRlcnMiLCJmaW5kT25lQW5kVXBkYXRlIiwicG9wdWxhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7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QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBckIsQ0FBUDtBQUNEOztBQUNELFFBQUk7QUFDRixZQUFNO0FBQUVDO0FBQUYsVUFBYUMsbURBQUcsQ0FBQ0MsTUFBSixDQUFXUCxhQUFYLEVBQTBCLGFBQTFCLENBQW5CO0FBQ0FGLFNBQUcsQ0FBQ08sTUFBSixHQUFhQSxNQUFiO0FBRUEsYUFBT1IsV0FBVyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sQ0FBbEI7QUFDRCxLQUxELENBS0UsT0FBT3hCLEdBQVAsRUFBWTtBQUNaLGFBQU93QixHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFyQixDQUFQO0FBQ0Q7QUFDRixHQWZEO0FBZ0JEOztBQUNjUiwyRUFBWSxDQUFDLE9BQU9FLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUM5QyxRQUFNUyxNQUFNLEdBQUcsTUFBTWQscURBQUssQ0FBQ2UsZ0JBQU4sQ0FBdUI7QUFDMUM3QixRQUFJLEVBQUVrQixHQUFHLENBQUNPO0FBRGdDLEdBQXZCLEVBRWxCSyxRQUZrQixDQUVULGVBRlMsQ0FBckIsQ0FEOEMsQ0FLOUM7O0FBQ0E1QyxTQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBdUJ5QyxNQUFuQztBQUNBMUMsU0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQXVCeUMsTUFBTSxDQUFDekIsUUFBMUM7QUFDQWdCLEtBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSyxNQUFNLENBQUN6QixRQUE1QjtBQUNELENBVDBCLENBQTNCLEU7Ozs7Ozs7Ozs7O0FDeEJBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2FwaS9vcmRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9vcmRlcnMuanNcIik7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbi8vIGpnaGFPVDlicUNsOXdTMEk7XHJcbmZ1bmN0aW9uIGluaXREQigpIHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJhbHJlZHkgY29ubmVjdGRkXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBtb25nb29zZVxyXG4gICAgLmNvbm5lY3QoXHJcbiAgICAgIFwibW9uZ29kYitzcnY6Ly92aXNod2F2aWpheTpqZ2hhT1Q5YnFDbDl3UzBJQGNsdXN0ZXIwLmZ5OXdiLm1vbmdvZGIubmV0L215c3RvcmVEQj9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIixcclxuICAgICAge1xyXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIClcclxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjb25uZWN0ZFwiKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXREQjtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgeyBPYmplY3RJZCB9ID0gbW9uZ29vc2UuU2NoZW1hLlR5cGVzO1xyXG5cclxuY29uc3Qgb3JkZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIHVzZXI6IHtcclxuICAgICAgdHlwZTogT2JqZWN0SWQsXHJcbiAgICAgIHJlZjogXCJVc2VySW5cIixcclxuICAgIH0sXHJcbiAgICBwcm9kdWN0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcXVhbnRpdHk6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAxIH0sXHJcbiAgICAgICAgcHJvZDogeyB0eXBlOiBPYmplY3RJZCwgcmVmOiBcInByb2R1Y3RcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdG90YWw6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5PcmRlciB8fCBtb25nb29zZS5tb2RlbChcIk9yZGVyXCIsIG9yZGVyU2NoZW1hKTtcclxuIiwiaW1wb3J0IGluaXREYiBmcm9tIFwiLi4vLi4vaGVscGVycy9pbml0RGJcIjtcclxuaW1wb3J0IE9yZGVyIGZyb20gXCIuLi8uLi9tb2RlbHMvT3JkZXJcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCBpbml0REIgZnJvbSBcIi4uLy4uL2hlbHBlcnMvaW5pdERiXCI7XHJcbmluaXREQigpO1xyXG5mdW5jdGlvbiBBdXRoaW5pY2F0ZWQoaWNvbXBvbmVuZXQpIHtcclxuICByZXR1cm4gKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGF1dGhvcml6YXRpb24gfSA9IHJlcS5oZWFkZXJzO1xyXG4gICAgY29uc29sZS5sb2coYXV0aG9yaXphdGlvbik7XHJcblxyXG4gICAgaWYgKCFhdXRob3JpemF0aW9uKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBcInlvdSBtdXN0IGJlIGxvZ2luXCIgfSk7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHVzZXJpZCB9ID0gand0LnZlcmlmeShhdXRob3JpemF0aW9uLCBcImZ4ZmdjZ3ZoZ3ZoXCIpO1xyXG4gICAgICByZXEudXNlcmlkID0gdXNlcmlkO1xyXG5cclxuICAgICAgcmV0dXJuIGljb21wb25lbmV0KHJlcSwgcmVzKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogXCJ5b3UgbXVzdCBiZSBsb2dpblwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXV0aGluaWNhdGVkKGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IG9yZGVycyA9IGF3YWl0IE9yZGVyLmZpbmRPbmVBbmRVcGRhdGUoe1xyXG4gICAgdXNlcjogcmVxLnVzZXJpZCxcclxuICB9KS5wb3B1bGF0ZShcInByb2R1Y3RzLnByb2RcIik7XHJcblxyXG4gIC8vICAgY29uc3QgYSA9IG9yZGVycy5wcm9kdWN0c1xyXG4gIGNvbnNvbGUubG9nKFwiYXNkYXNkYXNkc2Q9Pj4+Pj4+XCIgKyBvcmRlcnMpO1xyXG4gIGNvbnNvbGUubG9nKFwiYXNkYXNkYXNkc2Q9Pj4+Pj4+XCIgKyBvcmRlcnMucHJvZHVjdHMpO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKG9yZGVycy5wcm9kdWN0cyk7XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==