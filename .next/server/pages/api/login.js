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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/login.js");
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

/***/ "./models/UserIn.js":
/*!**************************!*\
  !*** ./models/UserIn.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    default: "user",
    enum: ["user", "admin", "root"]
  }
}, {
  timestamps: true
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.UserIn || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("UserIn", userSchema));

/***/ }),

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_initDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/initDb */ "./helpers/initDb.js");
/* harmony import */ var _models_UserIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/UserIn */ "./models/UserIn.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);




Object(_helpers_initDb__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    email,
    pass
  } = req.body;

  try {
    if (!email || !pass) {
      return res.status(422).json({
        error: "Pls add all the fields"
      });
    }

    const user = await _models_UserIn__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      email
    });

    if (!user) {
      return res.status(404).json({
        error: "User not found"
      });
    }

    const match = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default.a.compare(pass, user.password);

    if (match) {
      const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.sign({
        userid: user._id
      }, "fxfgcgvhgvh", {
        expiresIn: "7d"
      });
      const {
        name,
        role,
        email
      } = user;
      res.status(201).json({
        token: token,
        user: {
          name,
          role,
          email
        }
      });
    } else {
      return res.status(401).json({
        error: "emial pr password dont match"
      });
    }
  } catch (err) {
    console.log(err);
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9pbml0RGIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1VzZXJJbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbImluaXREQiIsIm1vbmdvb3NlIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidGhlbiIsInJlc3VsdCIsImNhdGNoIiwiZXJyIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJlbnVtIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIlVzZXJJbiIsIm1vZGVsIiwicmVxIiwicmVzIiwicGFzcyIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ1c2VyIiwiZmluZE9uZSIsIm1hdGNoIiwiYmNyeXB0IiwiY29tcGFyZSIsInRva2VuIiwiand0Iiwic2lnbiIsInVzZXJpZCIsIl9pZCIsImV4cGlyZXNJbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QUFoQixDQUFxQjtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFyQixDQUFQO0FBQ0Q7O0FBQ0QsVUFBTUcsS0FBSyxHQUFHLE1BQU1DLCtDQUFNLENBQUNDLE9BQVAsQ0FBZVQsSUFBZixFQUFxQkssSUFBSSxDQUFDZixRQUExQixDQUFwQjs7QUFDQSxRQUFJaUIsS0FBSixFQUFXO0FBQ1QsWUFBTUcsS0FBSyxHQUFHQyxtREFBRyxDQUFDQyxJQUFKLENBQVM7QUFBRUMsY0FBTSxFQUFFUixJQUFJLENBQUNTO0FBQWYsT0FBVCxFQUErQixhQUEvQixFQUE4QztBQUMxREMsaUJBQVMsRUFBRTtBQUQrQyxPQUE5QyxDQUFkO0FBR0EsWUFBTTtBQUFFOUIsWUFBRjtBQUFRTSxZQUFSO0FBQWNGO0FBQWQsVUFBd0JnQixJQUE5QjtBQUNBTixTQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFTyxhQUFLLEVBQUVBLEtBQVQ7QUFBZ0JMLFlBQUksRUFBRTtBQUFFcEIsY0FBRjtBQUFRTSxjQUFSO0FBQWNGO0FBQWQ7QUFBdEIsT0FBckI7QUFDRCxLQU5ELE1BTU87QUFDTCxhQUFPVSxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFyQixDQUFQO0FBQ0Q7QUFDRixHQWxCRCxDQWtCRSxPQUFPdEIsR0FBUCxFQUFZO0FBQ1pULFdBQU8sQ0FBQ0MsR0FBUixDQUFZUSxHQUFaO0FBQ0Q7QUFDRixDQXhCRCxFOzs7Ozs7Ozs7OztBQ05BLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2FwaS9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2xvZ2luLmpzXCIpO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG4vLyBqZ2hhT1Q5YnFDbDl3UzBJO1xyXG5mdW5jdGlvbiBpbml0REIoKSB7XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYWxyZWR5IGNvbm5lY3RkZFwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgbW9uZ29vc2VcclxuICAgIC5jb25uZWN0KFxyXG4gICAgICBcIm1vbmdvZGIrc3J2Oi8vdmlzaHdhdmlqYXk6amdoYU9UOWJxQ2w5d1MwSUBjbHVzdGVyMC5meTl3Yi5tb25nb2RiLm5ldC9teXN0b3JlREI/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXHJcbiAgICAgIHtcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGRcIik7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0REI7XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblxyXG4gICAgcm9sZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0OiBcInVzZXJcIixcclxuICAgICAgZW51bTogW1widXNlclwiLCBcImFkbWluXCIsIFwicm9vdFwiXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuVXNlckluIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlckluXCIsIHVzZXJTY2hlbWEpO1xyXG4iLCJpbXBvcnQgaW5pdERCIGZyb20gXCIuLi8uLi9oZWxwZXJzL2luaXREYlwiO1xyXG5pbXBvcnQgVXNlckluIGZyb20gXCIuLi8uLi9tb2RlbHMvVXNlckluXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5cclxuaW5pdERCKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHsgZW1haWwsIHBhc3MgfSA9IHJlcS5ib2R5O1xyXG5cclxuICB0cnkge1xyXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzcykge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBlcnJvcjogXCJQbHMgYWRkIGFsbCB0aGUgZmllbGRzXCIgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlckluLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogXCJVc2VyIG5vdCBmb3VuZFwiIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgIGlmIChtYXRjaCkge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHsgdXNlcmlkOiB1c2VyLl9pZCB9LCBcImZ4ZmdjZ3ZoZ3ZoXCIsIHtcclxuICAgICAgICBleHBpcmVzSW46IFwiN2RcIixcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgcm9sZSwgZW1haWwgfSA9IHVzZXI7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgdG9rZW46IHRva2VuLCB1c2VyOiB7IG5hbWUsIHJvbGUsIGVtYWlsIH0gfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogXCJlbWlhbCBwciBwYXNzd29yZCBkb250IG1hdGNoXCIgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=