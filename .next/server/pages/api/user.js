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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/api/user.js":
/*!***************************!*\
  !*** ./pages/api/user.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_UserIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/UserIn */ "./models/UserIn.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "GET":
      await fetchUsers(req, res);
      break;

    case "PUT":
      await ChangeRole(req, res);
      break;
  }
});

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
      } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(authorization, "fxfgcgvhgvh");
      req.userid = userid;
      return icomponenet(req, res);
    } catch (err) {
      return res.status(401).json({
        error: "you must be login"
      });
    }
  };
}

const fetchUsers = Authinicated(async (req, res) => {
  try {
    console.log("fetcehds");
    const users = await _models_UserIn__WEBPACK_IMPORTED_MODULE_0__["default"].find({
      _id: {
        $ne: req.userid
      }
    });
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
});
const ChangeRole = Authinicated(async (req, res) => {
  console.log("change roles");
  const {
    _id,
    role
  } = req.body;
  const newRole = role == "user" ? "admin" : "user";
  const users = await _models_UserIn__WEBPACK_IMPORTED_MODULE_0__["default"].findOneAndUpdate({
    _id
  }, {
    role: newRole
  }, {
    new: true
  }).select("-password");
  res.status(200).json(users);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1VzZXJJbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbInVzZXJTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJlbnVtIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIlVzZXJJbiIsIm1vZGVsIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZmV0Y2hVc2VycyIsIkNoYW5nZVJvbGUiLCJBdXRoaW5pY2F0ZWQiLCJpY29tcG9uZW5ldCIsImF1dGhvcml6YXRpb24iLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInVzZXJpZCIsImp3dCIsInZlcmlmeSIsImVyciIsInVzZXJzIiwiVXNlciIsImZpbmQiLCJfaWQiLCIkbmUiLCJib2R5IiwibmV3Um9sZSIsImZpbmRPbmVBbmRVcGRhdGUiLCJuZXciLCJzZWxlY3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFD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QUFFdEIsR0FBRyxDQUFDYztBQUFYO0FBQVAsS0FBVixDQUFwQjtBQUVBTCxXQUFPLENBQUNDLEdBQVIsQ0FBWVEsS0FBWjtBQUNBakIsT0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJNLEtBQXJCO0FBQ0QsR0FORCxDQU1FLE9BQU9ELEdBQVAsRUFBWTtBQUNaUixXQUFPLENBQUNDLEdBQVIsQ0FBWU8sR0FBWjtBQUNEO0FBQ0YsQ0FWOEIsQ0FBL0I7QUFZQSxNQUFNYixVQUFVLEdBQUdDLFlBQVksQ0FBQyxPQUFPTCxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDbERRLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQSxRQUFNO0FBQUVXLE9BQUY7QUFBTzVCO0FBQVAsTUFBZ0JPLEdBQUcsQ0FBQ3VCLElBQTFCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHL0IsSUFBSSxJQUFJLE1BQVIsR0FBaUIsT0FBakIsR0FBMkIsTUFBM0M7QUFDQSxRQUFNeUIsS0FBSyxHQUFHLE1BQU1DLHNEQUFJLENBQUNNLGdCQUFMLENBQ2xCO0FBQUVKO0FBQUYsR0FEa0IsRUFFbEI7QUFBRTVCLFFBQUksRUFBRStCO0FBQVIsR0FGa0IsRUFHbEI7QUFBRUUsT0FBRyxFQUFFO0FBQVAsR0FIa0IsRUFJbEJDLE1BSmtCLENBSVgsV0FKVyxDQUFwQjtBQUtBMUIsS0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJNLEtBQXJCO0FBQ0QsQ0FWOEIsQ0FBL0IsQzs7Ozs7Ozs7Ozs7QUM1Q0EseUM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvYXBpL3VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS91c2VyLmpzXCIpO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHJcbiAgICByb2xlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIGRlZmF1bHQ6IFwidXNlclwiLFxyXG4gICAgICBlbnVtOiBbXCJ1c2VyXCIsIFwiYWRtaW5cIiwgXCJyb290XCJdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VySW4gfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VySW5cIiwgdXNlclNjaGVtYSk7XHJcbiIsImltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi9tb2RlbHMvVXNlckluXCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgIGF3YWl0IGZldGNoVXNlcnMocmVxLCByZXMpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJQVVRcIjpcclxuICAgICAgYXdhaXQgQ2hhbmdlUm9sZShyZXEsIHJlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIEF1dGhpbmljYXRlZChpY29tcG9uZW5ldCkge1xyXG4gIHJldHVybiAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYXV0aG9yaXphdGlvbiB9ID0gcmVxLmhlYWRlcnM7XHJcbiAgICBjb25zb2xlLmxvZyhhdXRob3JpemF0aW9uKTtcclxuXHJcbiAgICBpZiAoIWF1dGhvcml6YXRpb24pIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6IFwieW91IG11c3QgYmUgbG9naW5cIiB9KTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgdXNlcmlkIH0gPSBqd3QudmVyaWZ5KGF1dGhvcml6YXRpb24sIFwiZnhmZ2NndmhndmhcIik7XHJcbiAgICAgIHJlcS51c2VyaWQgPSB1c2VyaWQ7XHJcblxyXG4gICAgICByZXR1cm4gaWNvbXBvbmVuZXQocmVxLCByZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBcInlvdSBtdXN0IGJlIGxvZ2luXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5jb25zdCBmZXRjaFVzZXJzID0gQXV0aGluaWNhdGVkKGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImZldGNlaGRzXCIpO1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyLmZpbmQoeyBfaWQ6IHsgJG5lOiByZXEudXNlcmlkIH0gfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codXNlcnMpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcnMpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgQ2hhbmdlUm9sZSA9IEF1dGhpbmljYXRlZChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zb2xlLmxvZyhcImNoYW5nZSByb2xlc1wiKTtcclxuICBjb25zdCB7IF9pZCwgcm9sZSB9ID0gcmVxLmJvZHk7XHJcbiAgY29uc3QgbmV3Um9sZSA9IHJvbGUgPT0gXCJ1c2VyXCIgPyBcImFkbWluXCIgOiBcInVzZXJcIjtcclxuICBjb25zdCB1c2VycyA9IGF3YWl0IFVzZXIuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgIHsgX2lkIH0sXHJcbiAgICB7IHJvbGU6IG5ld1JvbGUgfSxcclxuICAgIHsgbmV3OiB0cnVlIH1cclxuICApLnNlbGVjdChcIi1wYXNzd29yZFwiKTtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2Vycyk7XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==