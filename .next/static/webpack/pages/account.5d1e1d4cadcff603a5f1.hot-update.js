webpackHotUpdate_N_E("pages/account",{

/***/ "./components/UserRoles.js":
/*!*********************************!*\
  !*** ./components/UserRoles.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);





var _jsxFileName = "C:\\Users\\TCZ-NISHU\\Desktop\\myprojects\\next-p\\components\\UserRoles.js",
    _s = $RefreshSig$();


 // import baseUrl from "../helpers/baseUrl";

function UserRoles() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      users = _useState[0],
      setUsers = _useState[1];

  var _parseCookies = Object(nookies__WEBPACK_IMPORTED_MODULE_4__["parseCookies"])(),
      token = _parseCookies.token;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchUser();
  }, []);

  var fetchUser = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, res2;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("fetchuse");
              _context.next = 3;
              return fetch("http://localhost:3000/api/ord", {
                method: "GET",
                headers: {
                  Authorization: token
                }
              });

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              res2 = _context.sent;
              console.log(res2);
              setUsers(res2);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchUser() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleRole = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_id, role) {
      var res, res2, updatedUsers;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("http://localhost:3000/api/orders", {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: token
                },
                body: JSON.stringify({
                  _id: _id,
                  role: role
                })
              });

            case 2:
              res = _context2.sent;
              _context2.next = 5;
              return res.json();

            case 5:
              res2 = _context2.sent;
              console.log(res2); // setUsers(res2)

              updatedUsers = users.map(function (user) {
                if (user.role != res2.role && user.email == res2.email) {
                  return res2;
                } else {
                  return user;
                }
              });
              setUsers(updatedUsers);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleRole(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      children: "User roles"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Role"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
        children: users.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: item.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: item.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              onClick: function onClick() {
                return handleRole(item._id, item.role);
              },
              children: item.role
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(UserRoles, "JadZszbqna06PpJs9hMo7Hl/LOY=");

_c = UserRoles;
/* harmony default export */ __webpack_exports__["default"] = (UserRoles);

var _c;

$RefreshReg$(_c, "UserRoles");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUm9sZXMuanMiXSwibmFtZXMiOlsiVXNlclJvbGVzIiwidXNlU3RhdGUiLCJ1c2VycyIsInNldFVzZXJzIiwicGFyc2VDb29raWVzIiwidG9rZW4iLCJ1c2VFZmZlY3QiLCJmZXRjaFVzZXIiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlcyIsImpzb24iLCJyZXMyIiwiaGFuZGxlUm9sZSIsIl9pZCIsInJvbGUiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVwZGF0ZWRVc2VycyIsIm1hcCIsInVzZXIiLCJlbWFpbCIsIml0ZW0iLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUMsRUFBRCxDQURmO0FBQUEsTUFDWkMsS0FEWTtBQUFBLE1BQ0xDLFFBREs7O0FBQUEsc0JBRURDLDREQUFZLEVBRlg7QUFBQSxNQUVYQyxLQUZXLGlCQUVYQSxLQUZXOztBQUduQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGFBQVM7QUFDVixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUdBLE1BQU1BLFNBQVM7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBRGdCO0FBQUEscUJBRUVDLEtBQUssa0NBQWtDO0FBQ3ZEQyxzQkFBTSxFQUFFLEtBRCtDO0FBRXZEQyx1QkFBTyxFQUFFO0FBQ1BDLCtCQUFhLEVBQUVSO0FBRFI7QUFGOEMsZUFBbEMsQ0FGUDs7QUFBQTtBQUVWUyxpQkFGVTtBQUFBO0FBQUEscUJBUUdBLEdBQUcsQ0FBQ0MsSUFBSixFQVJIOztBQUFBO0FBUVZDLGtCQVJVO0FBU2hCUixxQkFBTyxDQUFDQyxHQUFSLENBQVlPLElBQVo7QUFDQWIsc0JBQVEsQ0FBQ2EsSUFBRCxDQUFSOztBQVZnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFUVCxTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBYUEsTUFBTVUsVUFBVTtBQUFBLGlNQUFHLGtCQUFPQyxHQUFQLEVBQVlDLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQ1QsS0FBSyxxQ0FBcUM7QUFDMURDLHNCQUFNLEVBQUUsS0FEa0Q7QUFFMURDLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0Isa0JBRFQ7QUFFUEMsK0JBQWEsRUFBRVI7QUFGUixpQkFGaUQ7QUFNMURlLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CSixxQkFBRyxFQUFIQSxHQURtQjtBQUVuQkMsc0JBQUksRUFBSkE7QUFGbUIsaUJBQWY7QUFOb0QsZUFBckMsQ0FETjs7QUFBQTtBQUNYTCxpQkFEVztBQUFBO0FBQUEscUJBWUVBLEdBQUcsQ0FBQ0MsSUFBSixFQVpGOztBQUFBO0FBWVhDLGtCQVpXO0FBYWpCUixxQkFBTyxDQUFDQyxHQUFSLENBQVlPLElBQVosRUFiaUIsQ0FjakI7O0FBQ01PLDBCQWZXLEdBZUlyQixLQUFLLENBQUNzQixHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZDLG9CQUFJQSxJQUFJLENBQUNOLElBQUwsSUFBYUgsSUFBSSxDQUFDRyxJQUFsQixJQUEwQk0sSUFBSSxDQUFDQyxLQUFMLElBQWNWLElBQUksQ0FBQ1UsS0FBakQsRUFBd0Q7QUFDdEQseUJBQU9WLElBQVA7QUFDRCxpQkFGRCxNQUVPO0FBQ0wseUJBQU9TLElBQVA7QUFDRDtBQUNGLGVBTm9CLENBZko7QUFzQmpCdEIsc0JBQVEsQ0FBQ29CLFlBQUQsQ0FBUjs7QUF0QmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZOLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBeUJBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRTtBQUFBLGtCQUNHZixLQUFLLENBQUNzQixHQUFOLENBQVUsVUFBQ0csSUFBRCxFQUFVO0FBQ25CLDhCQUNFO0FBQUEsb0NBQ0U7QUFBQSx3QkFBS0EsSUFBSSxDQUFDQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLHdCQUFLRCxJQUFJLENBQUNEO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQUkscUJBQU8sRUFBRTtBQUFBLHVCQUFNVCxVQUFVLENBQUNVLElBQUksQ0FBQ1QsR0FBTixFQUFXUyxJQUFJLENBQUNSLElBQWhCLENBQWhCO0FBQUEsZUFBYjtBQUFBLHdCQUNHUSxJQUFJLENBQUNSO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFTRCxTQVZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUEyQkQ7O0dBdkVRbkIsUzs7S0FBQUEsUztBQXlFTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC41ZDFlMWQ0Y2FkY2ZmNjAzYTVmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG4vLyBpbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vaGVscGVycy9iYXNlVXJsXCI7XHJcblxyXG5mdW5jdGlvbiBVc2VyUm9sZXMoKSB7XHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoVXNlcigpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImZldGNodXNlXCIpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvb3JkYCwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMyKTtcclxuICAgIHNldFVzZXJzKHJlczIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJvbGUgPSBhc3luYyAoX2lkLCByb2xlKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9vcmRlcnNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgX2lkLFxyXG4gICAgICAgIHJvbGUsXHJcbiAgICAgIH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXMyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHJlczIpO1xyXG4gICAgLy8gc2V0VXNlcnMocmVzMilcclxuICAgIGNvbnN0IHVwZGF0ZWRVc2VycyA9IHVzZXJzLm1hcCgodXNlcikgPT4ge1xyXG4gICAgICBpZiAodXNlci5yb2xlICE9IHJlczIucm9sZSAmJiB1c2VyLmVtYWlsID09IHJlczIuZW1haWwpIHtcclxuICAgICAgICByZXR1cm4gcmVzMjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzZXRVc2Vycyh1cGRhdGVkVXNlcnMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+VXNlciByb2xlczwvaDE+XHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgPHRoPlJvbGU8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHt1c2Vycy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntpdGVtLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgb25DbGljaz17KCkgPT4gaGFuZGxlUm9sZShpdGVtLl9pZCwgaXRlbS5yb2xlKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnJvbGV9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclJvbGVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9