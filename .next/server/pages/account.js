module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/account.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/UserRoles.js":
/*!*********************************!*\
  !*** ./components/UserRoles.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\TCZ-NISHU\\Desktop\\myprojects\\next-p\\components\\UserRoles.js";

 // import baseUrl from "../helpers/baseUrl";

function UserRoles() {
  const {
    0: users,
    1: setUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    token
  } = Object(nookies__WEBPACK_IMPORTED_MODULE_2__["parseCookies"])();
  console.log("fetchuse");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log("fetchuse");
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const res = await fetch(`http://localhost:3000/api/user`, {
      method: "GET",
      headers: {
        Authorization: token
      }
    });
    const res2 = await res.json();
    console.log(res2);
    setUsers(res2);
  };

  const handleRole = async (_id, role) => {
    const res = await fetch(`http://localhost:3000/api/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        _id,
        role
      })
    });
    const res2 = await res.json();
    console.log(res2); // setUsers(res2)

    const updatedUsers = users.map(user => {
      if (user.role != res2.role && user.email == res2.email) {
        return res2;
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "User roles"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Role"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: users.map(item => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: item.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: item.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              onClick: () => handleRole(item._id, item.role),
              children: item.role
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (UserRoles);

/***/ }),

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UserRoles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UserRoles */ "./components/UserRoles.js");

var _jsxFileName = "C:\\Users\\TCZ-NISHU\\Desktop\\myprojects\\next-p\\pages\\account.js";




const Account = ({
  orders
}) => {
  const orderCard = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const cookie = Object(nookies__WEBPACK_IMPORTED_MODULE_1__["parseCookies"])();
  const user = cookie.user ? JSON.parse(cookie.user) : "";
  console.log(orders);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    M.Collapsible.init(orderCard.current);
  }, []);

  const OrderHistory = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "collapsible",
      ref: orderCard,
      children: orders.map(item => {
        console.log(item);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "collapsible-header",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "material-icons",
              children: "folder"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 17
            }, undefined), item.createdAt]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "collapsible-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: ["Total \u20B9 ", item.total]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              children: [item.prod.name, " === X ", item.quantity]
            }, item._id, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, undefined)]
        }, item._id, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "center-align white-text",
      style: {
        marginTop: "10px",
        backgroundColor: "#1565c0",
        padding: "3px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: user.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "Order History"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), orders.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        children: "Your have no order History"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OrderHistory, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, undefined), user.role == "root" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UserRoles__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 31
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};

async function getServerSideProps(ctx) {
  const {
    token
  } = Object(nookies__WEBPACK_IMPORTED_MODULE_1__["parseCookies"])(ctx);

  if (!token) {
    const {
      res
    } = ctx;
    res.writeHead(302, {
      Location: "/login"
    });
    res.end();
  }

  const res = await fetch(`http://localhost:3000/api/orders`, {
    headers: {
      Authorization: token
    }
  });
  const res2 = await res.json();
  console.log("csdcsdsd===>>>>" + res2);
  return {
    props: {
      orders: res2
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyUm9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJVc2VyUm9sZXMiLCJ1c2VycyIsInNldFVzZXJzIiwidXNlU3RhdGUiLCJ0b2tlbiIsInBhcnNlQ29va2llcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJmZXRjaFVzZXIiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzMiIsImpzb24iLCJoYW5kbGVSb2xlIiwiX2lkIiwicm9sZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlZFVzZXJzIiwibWFwIiwidXNlciIsImVtYWlsIiwiaXRlbSIsIm5hbWUiLCJBY2NvdW50Iiwib3JkZXJzIiwib3JkZXJDYXJkIiwidXNlUmVmIiwiY29va2llIiwicGFyc2UiLCJNIiwiQ29sbGFwc2libGUiLCJpbml0IiwiY3VycmVudCIsIk9yZGVySGlzdG9yeSIsImNyZWF0ZWRBdCIsInRvdGFsIiwicHJvZCIsInF1YW50aXR5IiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImxlbmd0aCIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJ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QU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFvQlEsSUFBaEM7QUFFQSxTQUFPO0FBQ0xzQyxTQUFLLEVBQUU7QUFBRXZCLFlBQU0sRUFBRWY7QUFBVjtBQURGLEdBQVA7QUFHRDtBQUVjYyxzRUFBZixFOzs7Ozs7Ozs7OztBQ25GQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9hY2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hY2NvdW50LmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG4vLyBpbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vaGVscGVycy9iYXNlVXJsXCI7XHJcblxyXG5mdW5jdGlvbiBVc2VyUm9sZXMoKSB7XHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKCk7XHJcbiAgY29uc29sZS5sb2coXCJmZXRjaHVzZVwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJmZXRjaHVzZVwiKTtcclxuICAgIGZldGNoVXNlcigpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyYCwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMyKTtcclxuICAgIHNldFVzZXJzKHJlczIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJvbGUgPSBhc3luYyAoX2lkLCByb2xlKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIF9pZCxcclxuICAgICAgICByb2xlLFxyXG4gICAgICB9KSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMyKTtcclxuICAgIC8vIHNldFVzZXJzKHJlczIpXHJcbiAgICBjb25zdCB1cGRhdGVkVXNlcnMgPSB1c2Vycy5tYXAoKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIucm9sZSAhPSByZXMyLnJvbGUgJiYgdXNlci5lbWFpbCA9PSByZXMyLmVtYWlsKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlczI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgc2V0VXNlcnModXBkYXRlZFVzZXJzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxPlVzZXIgcm9sZXM8L2gxPlxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5Sb2xlPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7dXNlcnMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPntpdGVtLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJvbGUoaXRlbS5faWQsIGl0ZW0ucm9sZSl9PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5yb2xlfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJSb2xlcztcclxuIiwiaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVzZXJSb2xlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyUm9sZXNcIjtcclxuY29uc3QgQWNjb3VudCA9ICh7IG9yZGVycyB9KSA9PiB7XHJcbiAgY29uc3Qgb3JkZXJDYXJkID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGNvb2tpZSA9IHBhcnNlQ29va2llcygpO1xyXG4gIGNvbnN0IHVzZXIgPSBjb29raWUudXNlciA/IEpTT04ucGFyc2UoY29va2llLnVzZXIpIDogXCJcIjtcclxuICBjb25zb2xlLmxvZyhvcmRlcnMpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgTS5Db2xsYXBzaWJsZS5pbml0KG9yZGVyQ2FyZC5jdXJyZW50KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgT3JkZXJIaXN0b3J5ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbGxhcHNpYmxlXCIgcmVmPXtvcmRlckNhcmR9PlxyXG4gICAgICAgIHtvcmRlcnMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNpYmxlLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5mb2xkZXI8L2k+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzaWJsZS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDU+VG90YWwg4oK5IHtpdGVtLnRvdGFsfTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDYga2V5PXtpdGVtLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnByb2QubmFtZX0gPT09IFgge2l0ZW0ucXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNlbnRlci1hbGlnbiB3aGl0ZS10ZXh0XCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMTU2NWMwXCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjNweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aDQ+e3VzZXIubmFtZX08L2g0PlxyXG4gICAgICAgIDxoND57dXNlci5lbWFpbH08L2g0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGgzPk9yZGVyIEhpc3Rvcnk8L2gzPlxyXG4gICAgICB7b3JkZXJzLmxlbmd0aCA9PSAwID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDU+WW91ciBoYXZlIG5vIG9yZGVyIEhpc3Rvcnk8L2g1PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxPcmRlckhpc3RvcnkgLz5cclxuICAgICAgKX1cclxuICAgICAgey8qIDxVc2VyUm9sZXMgLz4gKi99XHJcbiAgICAgIHt1c2VyLnJvbGUgPT0gXCJyb290XCIgJiYgPFVzZXJSb2xlcyAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xyXG4gIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIGNvbnN0IHsgcmVzIH0gPSBjdHg7XHJcbiAgICByZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogXCIvbG9naW5cIiB9KTtcclxuICAgIHJlcy5lbmQoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29yZGVyc2AsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHJlczIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnNvbGUubG9nKFwiY3NkY3Nkc2Q9PT0+Pj4+XCIgKyByZXMyKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IG9yZGVyczogcmVzMiB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=