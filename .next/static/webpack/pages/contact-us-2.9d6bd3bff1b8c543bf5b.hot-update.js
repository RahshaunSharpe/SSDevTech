webpackHotUpdate_N_E("pages/contact-us-2",{

/***/ "./element/quote-2.js":
/*!****************************!*\
  !*** ./element/quote-2.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/es/index.js");



var _jsxFileName = "C:\\Users\\sharp\\OneDrive\\Documents\\themeforest\\React-Samar-v1.0-29_October-2021\\samar-2\\element\\quote-2.js",
    _this = undefined,
    _s = $RefreshSig$();






Object(emailjs_com__WEBPACK_IMPORTED_MODULE_4__["init"])("user_Fj1ZIaaVTp3kf3S9kHXWD");

function onChange(value) {
  console.log("Captcha value:", value);
}

var Result = function Result() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: "Your Message has been Sent. We will contact you within 1 to 3 business days."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 11
  }, _this);
};

_c = Result;

function Quote2(value, options) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      result = _useState[0],
      showResult = _useState[1];

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_4__["default"].sendForm('service_j2b6ioe', 'template_ct0gpue', e.target, 'user_Fj1ZIaaVTp3kf3S9kHXWD').then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
    })["catch"](function (err) {
      console.log('FAILED...', err);
    });
    e.target.reset();
    showResult(true);
  };

  var plans = ["Web Development", "Web Design", "SEO", "Not Sure Yet"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "content-inner",
      style: {
        "backgroundImage": "url(images/background/bg2.png)",
        "backgroundRepeat": "no-repeat"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-6 m-b30 quote-media",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dlab-media style-1 move-1",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "images/team/large/pic1.jpg",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dlab-media style-2 move-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "images/team/large/pic2.jpg",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dlab-media style-3 move-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "images/team/large/pic3.jpg",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-6 m-b30 wow fadeIn",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              noValidate: true,
              id: "#contact-form",
              className: "dlab-form dzForm",
              method: "POST",
              onSubmit: onSubmit,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "dzFormMsg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                className: "form-control",
                name: "dzToDo",
                value: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      name: "dzName",
                      required: true,
                      type: "text",
                      className: "form-control",
                      placeholder: "First Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      name: "dzLname",
                      required: true,
                      type: "text",
                      className: "form-control",
                      placeholder: "Last Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      name: "dzEmail",
                      required: true,
                      type: "email",
                      className: "form-control",
                      placeholder: "Email"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      name: "dzOther[phone]",
                      required: true,
                      type: "tel",
                      className: "form-control",
                      placeholder: "Phone No."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                      name: "dzOther[choose_service]",
                      className: "form-control",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        selected: true,
                        children: "Choose Service"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 100,
                        columnNumber: 12
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: plans[0],
                        children: "Web Development"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 12
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: plans[1],
                        children: "Web Design"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 12
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: plans[3],
                        children: "SEO"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 103,
                        columnNumber: 12
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: plans[4],
                        children: "Dont Know Yet"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 12
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-12",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                      name: "dzMessage",
                      required: true,
                      className: "form-control",
                      placeholder: "Message"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      name: "dzOther[estimated_buget]",
                      type: "text",
                      className: "form-control",
                      placeholder: "Estimated Buget"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-12",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "g-recaptcha",
                      "data-sitekey": "6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN",
                      "data-callback": "verifyRecaptchaCallback",
                      "data-expired-callback": "expiredRecaptchaCallback"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 142,
                      columnNumber: 11
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      className: "form-control d-none",
                      style: {
                        "display": "none"
                      },
                      "data-recaptcha": "true",
                      required: true,
                      "data-error": "Please complete the Captcha"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  sitekey: "6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN",
                  onChange: onChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-12 mt-2",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    name: "submit",
                    type: "submit",
                    value: "submit",
                    className: "btn btn-primary gradient border-0 rounded-xl",
                    children: "Submit Now"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: result ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Result, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 20
                  }, this) : null
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, this)
  }, void 0, false);
}

_s(Quote2, "Ljhu/6ZlMsr4Fojy4bmIYN4WLNQ=");

_c2 = Quote2;
/* harmony default export */ __webpack_exports__["default"] = (Quote2);

var _c, _c2;

$RefreshReg$(_c, "Result");
$RefreshReg$(_c2, "Quote2");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZWxlbWVudC9xdW90ZS0yLmpzIl0sIm5hbWVzIjpbImluaXQiLCJvbkNoYW5nZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIlJlc3VsdCIsIlF1b3RlMiIsIm9wdGlvbnMiLCJ1c2VTdGF0ZSIsInJlc3VsdCIsInNob3dSZXN1bHQiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsanMiLCJzZW5kRm9ybSIsInRhcmdldCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInRleHQiLCJlcnIiLCJyZXNldCIsInBsYW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBQSx3REFBSSxDQUFDLDRCQUFELENBQUo7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDeEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRixLQUE5QjtBQUNFOztBQUVELElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDcEIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNBLENBRkQ7O0tBQU1BLE07O0FBS1IsU0FBU0MsTUFBVCxDQUFnQkosS0FBaEIsRUFBdUJLLE9BQXZCLEVBQWdDO0FBQUE7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUMsS0FBRCxDQUROO0FBQUEsTUFDeEJDLE1BRHdCO0FBQUEsTUFDaEJDLFVBRGdCOztBQUk3QixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFFeEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUdEQyx1REFBTyxDQUFDQyxRQUFSLENBQWlCLGlCQUFqQixFQUFvQyxrQkFBcEMsRUFBdURILENBQUMsQ0FBQ0ksTUFBekQsRUFBaUUsNEJBQWpFLEVBQ0VDLElBREYsQ0FDTyxVQUFDQyxRQUFELEVBQWM7QUFDbEJmLGFB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QUFqQjtBQUF1QywyQkFBSyxFQUFFO0FBQUMsbUNBQVU7QUFBWCx1QkFBOUM7QUFBa0Usd0NBQWUsTUFBakY7QUFBd0YsOEJBQVEsTUFBaEc7QUFBaUcsb0NBQVc7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQTNFRCxlQWlGQyxxRUFBQyw4REFBRDtBQUNFLHlCQUFPLEVBQUMsMENBRFY7QUFFRSwwQkFBUSxFQUFFdEI7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWpGRCxlQXFGQztBQUFLLDJCQUFTLEVBQUMsZ0JBQWY7QUFBQSx5Q0FDQztBQUFRLHdCQUFJLEVBQUMsUUFBYjtBQUFzQix3QkFBSSxFQUFDLFFBQTNCO0FBQW9DLHlCQUFLLEVBQUMsUUFBMUM7QUFBbUQsNkJBQVMsRUFBQyw4Q0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXJGRCxlQXdGQztBQUFBLDRCQUNFUSxNQUFNLGdCQUFHLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBSCxHQUFlO0FBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBeEZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUF1SEE7O0dBbEpRSCxNOztNQUFBQSxNO0FBb0pNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0LXVzLTIuOWQ2YmQzYmZmMWI4YzU0M2JmNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZUNBUFRDSEEgZnJvbSBcInJlYWN0LWdvb2dsZS1yZWNhcHRjaGFcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbmltcG9ydCAgZW1haWxqcyAgZnJvbSAnZW1haWxqcy1jb20nO1xyXG5pbXBvcnR7IGluaXQgfSBmcm9tICdlbWFpbGpzLWNvbSc7XHJcbmluaXQoXCJ1c2VyX0ZqMVpJYWFWVHAza2YzUzlrSFhXRFwiKTtcclxuXHJcbmZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XHJcblx0Y29uc29sZS5sb2coXCJDYXB0Y2hhIHZhbHVlOlwiLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBSZXN1bHQgPSAoKSA9PiB7XHJcblx0ICByZXR1cm4gPHA+WW91ciBNZXNzYWdlIGhhcyBiZWVuIFNlbnQuIFdlIHdpbGwgY29udGFjdCB5b3Ugd2l0aGluIDEgdG8gMyBidXNpbmVzcyBkYXlzLjwvcD5cclxuICB9XHJcbiBcclxuXHJcbmZ1bmN0aW9uIFF1b3RlMih2YWx1ZSwgb3B0aW9ucykge1xyXG5cdGNvbnN0IFtyZXN1bHQsIHNob3dSZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdFxyXG5cdCBcclxuXHQgIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdFxyXG5cdFx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgICBcclxuXHQgICBcclxuXHRcdGVtYWlsanMuc2VuZEZvcm0oJ3NlcnZpY2VfajJiNmlvZScsICd0ZW1wbGF0ZV9jdDBncHVlJyxlLnRhcmdldCwgJ3VzZXJfRmoxWklhYVZUcDNrZjNTOWtIWFdEJylcclxuXHRcdCAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdCAgIGNvbnNvbGUubG9nKCdTVUNDRVNTIScsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UudGV4dCk7XHJcblx0XHQgICBcclxuXHRcdCB9KVxyXG5cdFx0IC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHQgICBjb25zb2xlLmxvZygnRkFJTEVELi4uJywgZXJyKTtcclxuXHRcdCB9KTtcclxuXHRcdGUudGFyZ2V0LnJlc2V0KCk7XHJcblx0XHRzaG93UmVzdWx0KHRydWUpXHJcblx0XHQgIFxyXG5cdCB9O1xyXG5cdCAgXHJcblx0XHJcblx0ICBjb25zdCBwbGFucyA9IFtcIldlYiBEZXZlbG9wbWVudFwiLCBcIldlYiBEZXNpZ25cIiwgXCJTRU9cIiwgXCJOb3QgU3VyZSBZZXRcIl1cclxuXHRcclxuXHQgIFxyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaW5uZXJcIiBzdHlsZT17e1wiYmFja2dyb3VuZEltYWdlXCI6XCJ1cmwoaW1hZ2VzL2JhY2tncm91bmQvYmcyLnBuZylcIixcImJhY2tncm91bmRSZXBlYXRcIjpcIm5vLXJlcGVhdFwifX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IG0tYjMwIHF1b3RlLW1lZGlhXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGxhYi1tZWRpYSBzdHlsZS0xIG1vdmUtMVwiPlx0XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJpbWFnZXMvdGVhbS9sYXJnZS9waWMxLmpwZ1wiIGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGxhYi1tZWRpYSBzdHlsZS0yIG1vdmUtNFwiPlx0XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJpbWFnZXMvdGVhbS9sYXJnZS9waWMyLmpwZ1wiIGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGxhYi1tZWRpYSBzdHlsZS0zIG1vdmUtMlwiPlx0XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJpbWFnZXMvdGVhbS9sYXJnZS9waWMzLmpwZ1wiIGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgbS1iMzAgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj5cclxuXHRcdFx0XHRcdFx0PGZvcm0gbm9WYWxpZGF0ZSBpZD1cIiNjb250YWN0LWZvcm1cIiBjbGFzc05hbWU9XCJkbGFiLWZvcm0gZHpGb3JtXCIgbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkekZvcm1Nc2dcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJkelRvRG9cIiB2YWx1ZT1cIkNvbnRhY3RcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6TmFtZVwiIHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6TG5hbWVcIiByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiZHpFbWFpbFwiICByZXF1aXJlZCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiZHpPdGhlcltwaG9uZV1cIiAgIHJlcXVpcmVkIHR5cGU9XCJ0ZWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlBob25lIE5vLlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiZHpPdGhlcltwcm9qZWN0X3RpdGxlXVwiIHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IFRpdGxlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0ICBuYW1lPVwiZHpPdGhlcltjaG9vc2Vfc2VydmljZV1cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHNlbGVjdGVkPkNob29zZSBTZXJ2aWNlPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPXtwbGFuc1swXX0+V2ViIERldmVsb3BtZW50PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPXtwbGFuc1sxXX0+V2ViIERlc2lnbjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT17cGxhbnNbM119PlNFTzwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT17cGxhbnNbNF19PkRvbnQgS25vdyBZZXQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgbmFtZT1cImR6TWVzc2FnZVwiIHJlcXVpcmVkIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiZHpPdGhlcltjaG9vc2VfZmlsZV1cIiB0eXBlPVwiZmlsZVwiIHJlcXVpcmVkIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjdXN0b20tZmlsZS1pbnB1dFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtbGFiZWxcIj5DaG9vc2UgZmlsZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJkek90aGVyW2VzdGltYXRlZF9idWdldF1cIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRXN0aW1hdGVkIEJ1Z2V0XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgbmFtZT1cImR6T3RoZXJbcHJpb3JpdHldXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHNlbGVjdGVkPlByaW9yaXR5PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMVwiPk9uZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjJcIj5Ud288L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIzXCI+VGhyZWU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJkek90aGVyW2NvdW50cnldXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNvdW50cnlcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZy1yZWNhcHRjaGFcIiBkYXRhLXNpdGVrZXk9XCI2TGVmc1ZVVUFBQUFBREJQc0xaenNObkVUQ2hlYWx2NlBZR3p2M1pOXCIgZGF0YS1jYWxsYmFjaz1cInZlcmlmeVJlY2FwdGNoYUNhbGxiYWNrXCIgZGF0YS1leHBpcmVkLWNhbGxiYWNrPVwiZXhwaXJlZFJlY2FwdGNoYUNhbGxiYWNrXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBkLW5vbmVcIiBzdHlsZT17e1wiZGlzcGxheVwiOlwibm9uZVwifX0gZGF0YS1yZWNhcHRjaGE9XCJ0cnVlXCIgcmVxdWlyZWQgZGF0YS1lcnJvcj1cIlBsZWFzZSBjb21wbGV0ZSB0aGUgQ2FwdGNoYVwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxSZUNBUFRDSEFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzaXRla2V5PVwiNkxlZnNWVVVBQUFBQURCUHNMWnpzTm5FVENoZWFsdjZQWUd6djNaTlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgbXQtMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG5hbWU9XCJzdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZ3JhZGllbnQgYm9yZGVyLTAgcm91bmRlZC14bFwiID5TdWJtaXQgTm93PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtyZXN1bHQgPyA8UmVzdWx0Lz4gOiBudWxsfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdW90ZTI7Il0sInNvdXJjZVJvb3QiOiIifQ==