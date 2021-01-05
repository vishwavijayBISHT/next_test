webpackHotUpdate_N_E("pages/account",{

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UserRoles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UserRoles */ "./components/UserRoles.js");


var _jsxFileName = "C:\\Users\\TCZ-NISHU\\Desktop\\myprojects\\next-p\\pages\\account.js",
    _this = undefined,
    _s = $RefreshSig$();





var Account = function Account(_ref) {
  _s();

  var orders = _ref.orders;
  var orderCard = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var cookie = Object(nookies__WEBPACK_IMPORTED_MODULE_1__["parseCookies"])();
  var user = cookie.user ? JSON.parse(cookie.user) : "";
  console.log(orders);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    M.Collapsible.init(orderCard.current);
  }, []);

  var OrderHistory = function OrderHistory() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "collapsible",
      ref: orderCard,
      children: orders.map(function (item) {
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
            }, _this), item.createdAt]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "collapsible-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: ["Total \u20B9 ", item.total]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              children: [item.prod.name, " === X ", item.quantity]
            }, item._id, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, _this)]
        }, item._id, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this);
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: user.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "Order History"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), orders.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        children: "Your have no order History"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OrderHistory, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, _this), user.role == "root" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UserRoles__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 31
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this);
};

_s(Account, "M0Ku/NuuyOChghSnsHFwTwkCSfM=");

_c = Account;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Account);

var _c;

$RefreshReg$(_c, "Account");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjb3VudC5qcyJdLCJuYW1lcyI6WyJBY2NvdW50Iiwib3JkZXJzIiwib3JkZXJDYXJkIiwidXNlUmVmIiwiY29va2llIiwicGFyc2VDb29raWVzIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJNIiwiQ29sbGFwc2libGUiLCJpbml0IiwiY3VycmVudCIsIk9yZGVySGlzdG9yeSIsIm1hcCIsIml0ZW0iLCJjcmVhdGVkQXQiLCJ0b3RhbCIsInByb2QiLCJuYW1lIiwicXVhbnRpdHkiLCJfaWQiLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiZW1haWwiLCJsZW5ndGgiLCJyb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQzlCLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw0REFBWSxFQUEzQjtBQUNBLE1BQU1DLElBQUksR0FBR0YsTUFBTSxDQUFDRSxJQUFQLEdBQWNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixNQUFNLENBQUNFLElBQWxCLENBQWQsR0FBd0MsRUFBckQ7QUFDQUcsU0FBTyxDQUFDQyxHQUFSLENBQVlULE1BQVo7QUFFQVUseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLEtBQUMsQ0FBQ0MsV0FBRixDQUFjQyxJQUFkLENBQW1CWixTQUFTLENBQUNhLE9BQTdCO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFHQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLHdCQUNFO0FBQUksZUFBUyxFQUFDLGFBQWQ7QUFBNEIsU0FBRyxFQUFFZCxTQUFqQztBQUFBLGdCQUNHRCxNQUFNLENBQUNnQixHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFVO0FBQ3BCVCxlQUFPLENBQUNDLEdBQVIsQ0FBWVEsSUFBWjtBQUNBLDRCQUNFO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLG9CQUFmO0FBQUEsb0NBQ0U7QUFBRyx1QkFBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUdBLElBQUksQ0FBQ0MsU0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRTtBQUFLLHFCQUFTLEVBQUMsa0JBQWY7QUFBQSxvQ0FDRTtBQUFBLDBDQUFhRCxJQUFJLENBQUNFLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEseUJBQ0dGLElBQUksQ0FBQ0csSUFBTCxDQUFVQyxJQURiLGFBQzBCSixJQUFJLENBQUNLLFFBRC9CO0FBQUEsZUFBU0wsSUFBSSxDQUFDTSxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUEsV0FBU04sSUFBSSxDQUFDTSxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFjRCxPQWhCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQXFCRCxHQXRCRDs7QUF1QkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFDLHlCQURaO0FBRUUsV0FBSyxFQUFFO0FBQ0xDLGlCQUFTLEVBQUUsTUFETjtBQUVMQyx1QkFBZSxFQUFFLFNBRlo7QUFHTEMsZUFBTyxFQUFFO0FBSEosT0FGVDtBQUFBLDhCQVFFO0FBQUEsa0JBQUtyQixJQUFJLENBQUNnQjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQVNFO0FBQUEsa0JBQUtoQixJQUFJLENBQUNzQjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkYsRUFhRzNCLE1BQU0sQ0FBQzRCLE1BQVAsSUFBaUIsQ0FBakIsZ0JBQ0M7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGdCQUtDLHFFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCSixFQXFCR3ZCLElBQUksQ0FBQ3dCLElBQUwsSUFBYSxNQUFiLGlCQUF1QixxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckIxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQXpERDs7R0FBTTlCLE87O0tBQUFBLE87O0FBZ0ZTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hY2NvdW50LmJmZTJmMDQ1MDA2MTM1ODkyZGZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlclJvbGVzIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJSb2xlc1wiO1xyXG5jb25zdCBBY2NvdW50ID0gKHsgb3JkZXJzIH0pID0+IHtcclxuICBjb25zdCBvcmRlckNhcmQgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgY29va2llID0gcGFyc2VDb29raWVzKCk7XHJcbiAgY29uc3QgdXNlciA9IGNvb2tpZS51c2VyID8gSlNPTi5wYXJzZShjb29raWUudXNlcikgOiBcIlwiO1xyXG4gIGNvbnNvbGUubG9nKG9yZGVycyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBNLkNvbGxhcHNpYmxlLmluaXQob3JkZXJDYXJkLmN1cnJlbnQpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBPcmRlckhpc3RvcnkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiY29sbGFwc2libGVcIiByZWY9e29yZGVyQ2FyZH0+XHJcbiAgICAgICAge29yZGVycy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2libGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmZvbGRlcjwvaT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNpYmxlLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoNT5Ub3RhbCDigrkge2l0ZW0udG90YWx9PC9oNT5cclxuICAgICAgICAgICAgICAgIDxoNiBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ucHJvZC5uYW1lfSA9PT0gWCB7aXRlbS5xdWFudGl0eX1cclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY2VudGVyLWFsaWduIHdoaXRlLXRleHRcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMxNTY1YzBcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiM3B4XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoND57dXNlci5uYW1lfTwvaDQ+XHJcbiAgICAgICAgPGg0Pnt1c2VyLmVtYWlsfTwvaDQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aDM+T3JkZXIgSGlzdG9yeTwvaDM+XHJcbiAgICAgIHtvcmRlcnMubGVuZ3RoID09IDAgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxoNT5Zb3VyIGhhdmUgbm8gb3JkZXIgSGlzdG9yeTwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPE9yZGVySGlzdG9yeSAvPlxyXG4gICAgICApfVxyXG4gICAgICB7LyogPFVzZXJSb2xlcyAvPiAqL31cclxuICAgICAge3VzZXIucm9sZSA9PSBcInJvb3RcIiAmJiA8VXNlclJvbGVzIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcbiAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgY29uc3QgeyByZXMgfSA9IGN0eDtcclxuICAgIHJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiBcIi9sb2dpblwiIH0pO1xyXG4gICAgcmVzLmVuZCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvb3JkZXJzYCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgcmVzMiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coXCJjc2Rjc2RzZD09PT4+Pj5cIiArIHJlczIpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgb3JkZXJzOiByZXMyIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==