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
  setTimeout(function () {
    showResult(false);
  }, 3000);
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
                lineNumber: 54,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dlab-media style-2 move-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "images/team/large/pic2.jpg",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dlab-media style-3 move-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "images/team/large/pic3.jpg",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
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
                lineNumber: 65,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                className: "form-control",
                name: "dzToDo",
                value: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
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
                      lineNumber: 70,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
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
                      lineNumber: 76,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
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
                      lineNumber: 81,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      name: "dzPhone",
                      required: true,
                      type: "tel",
                      className: "form-control",
                      placeholder: "Phone No."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                      name: "dzService",
                      className: "form-control",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        selected: true,
                        children: "Choose Service"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 12
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: plans[0],
                        children: "Web Development"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 103,
                        columnNumber: 12
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: plans[1],
                        children: "Web Design"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 12
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: plans[3],
                        children: "SEO"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 105,
                        columnNumber: 12
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: plans[4],
                        children: "Dont Know Yet"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                        columnNumber: 12
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
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
                      lineNumber: 113,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
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
                      lineNumber: 144,
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
                      lineNumber: 145,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  sitekey: "6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN",
                  onChange: onChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
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
                    lineNumber: 153,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: result ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Result, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 156,
                    columnNumber: 20
                  }, this) : null
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZWxlbWVudC9xdW90ZS0yLmpzIl0sIm5hbWVzIjpbImluaXQiLCJvbkNoYW5nZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIlJlc3VsdCIsIlF1b3RlMiIsIm9wdGlvbnMiLCJ1c2VTdGF0ZSIsInJlc3VsdCIsInNob3dSZXN1bHQiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsanMiLCJzZW5kRm9ybSIsInRhcmdldCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInRleHQiLCJlcnIiLCJyZXNldCIsInBsYW5zIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQUEsd0RBQUksQ0FBQyw0QkFBRCxDQUFKOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3hCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkYsS0FBOUI7QUFDRTs7QUFFRCxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ3BCLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDQSxDQUZEOztLQUFNQSxNOztBQUtSLFNBQVNDLE1BQVQsQ0FBZ0JKLEtBQWhCLEVBQXVCSyxPQUF2QixFQUFnQztBQUFBOztBQUFBLGtCQUNGQyxzREFBUSxDQUFDLEtBQUQsQ0FETjtBQUFBLE1BQ3hCQyxNQUR3QjtBQUFBLE1BQ2hCQyxVQURnQjs7QUFJN0IsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFPO0FBRXhCQSxLQUFDLENBQUNDLGNBQUY7QUFHREMsdURBQU8sQ0FBQ0MsUUFBUixDQUFpQixpQkFBakIsRUFBb0Msa0JBQXBDLEVBQXVESCxDQUFDLENBQUNJLE1BQXpELEVBQWlFLDRCQUFqRSxFQUNFQyxJQURGLENBQ08sVUFBQ0MsUUFBRCxF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O0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBM0VELGVBaUZDLHFFQUFDLDhEQUFEO0FBQ0UseUJBQU8sRUFBQywwQ0FEVjtBQUVFLDBCQUFRLEVBQUV0QjtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBakZELGVBcUZDO0FBQUssMkJBQVMsRUFBQyxnQkFBZjtBQUFBLHlDQUNDO0FBQVEsd0JBQUksRUFBQyxRQUFiO0FBQXNCLHdCQUFJLEVBQUMsUUFBM0I7QUFBb0MseUJBQUssRUFBQyxRQUExQztBQUFtRCw2QkFBUyxFQUFDLDhDQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBckZELGVBd0ZDO0FBQUEsNEJBQ0VRLE1BQU0sZ0JBQUcscUVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFILEdBQWU7QUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkF4RkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxtQkFERDtBQXVIQTs7R0FwSlFILE07O01BQUFBLE07QUFzSk1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhY3QtdXMtMi5hNDMxYjJiZTA1ODc3NzU2YzIyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlQ0FQVENIQSBmcm9tIFwicmVhY3QtZ29vZ2xlLXJlY2FwdGNoYVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuaW1wb3J0ICBlbWFpbGpzICBmcm9tICdlbWFpbGpzLWNvbSc7XHJcbmltcG9ydHsgaW5pdCB9IGZyb20gJ2VtYWlsanMtY29tJztcclxuaW5pdChcInVzZXJfRmoxWklhYVZUcDNrZjNTOWtIWFdEXCIpO1xyXG5cclxuZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcclxuXHRjb25zb2xlLmxvZyhcIkNhcHRjaGEgdmFsdWU6XCIsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFJlc3VsdCA9ICgpID0+IHtcclxuXHQgIHJldHVybiA8cD5Zb3VyIE1lc3NhZ2UgaGFzIGJlZW4gU2VudC4gV2Ugd2lsbCBjb250YWN0IHlvdSB3aXRoaW4gMSB0byAzIGJ1c2luZXNzIGRheXMuPC9wPlxyXG4gIH1cclxuIFxyXG5cclxuZnVuY3Rpb24gUXVvdGUyKHZhbHVlLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgW3Jlc3VsdCwgc2hvd1Jlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0XHJcblx0IFxyXG5cdCAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0XHJcblx0XHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCAgIFxyXG5cdCAgIFxyXG5cdFx0ZW1haWxqcy5zZW5kRm9ybSgnc2VydmljZV9qMmI2aW9lJywgJ3RlbXBsYXRlX2N0MGdwdWUnLGUudGFyZ2V0LCAndXNlcl9GajFaSWFhVlRwM2tmM1M5a0hYV0QnKVxyXG5cdFx0IC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0ICAgY29uc29sZS5sb2coJ1NVQ0NFU1MhJywgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcclxuXHRcdCAgIFxyXG5cdFx0IH0pXHJcblx0XHQgLmNhdGNoKChlcnIpID0+IHtcclxuXHRcdCAgIGNvbnNvbGUubG9nKCdGQUlMRUQuLi4nLCBlcnIpO1xyXG5cdFx0IH0pO1xyXG5cdFx0ZS50YXJnZXQucmVzZXQoKTtcclxuXHRcdHNob3dSZXN1bHQodHJ1ZSlcclxuXHRcdCAgXHJcblx0IH07XHJcblx0ICBcclxuXHRcclxuXHQgIGNvbnN0IHBsYW5zID0gW1wiV2ViIERldmVsb3BtZW50XCIsIFwiV2ViIERlc2lnblwiLCBcIlNFT1wiLCBcIk5vdCBTdXJlIFlldFwiXVxyXG5cdFxyXG5cdCAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHQgIHNob3dSZXN1bHQoZmFsc2UpXHJcblx0ICB9LCAzMDAwKTtcclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWlubmVyXCIgc3R5bGU9e3tcImJhY2tncm91bmRJbWFnZVwiOlwidXJsKGltYWdlcy9iYWNrZ3JvdW5kL2JnMi5wbmcpXCIsXCJiYWNrZ3JvdW5kUmVwZWF0XCI6XCJuby1yZXBlYXRcIn19PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBtLWIzMCBxdW90ZS1tZWRpYVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRsYWItbWVkaWEgc3R5bGUtMSBtb3ZlLTFcIj5cdFxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1hZ2VzL3RlYW0vbGFyZ2UvcGljMS5qcGdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRsYWItbWVkaWEgc3R5bGUtMiBtb3ZlLTRcIj5cdFxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1hZ2VzL3RlYW0vbGFyZ2UvcGljMi5qcGdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRsYWItbWVkaWEgc3R5bGUtMyBtb3ZlLTJcIj5cdFxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1hZ2VzL3RlYW0vbGFyZ2UvcGljMy5qcGdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IG0tYjMwIHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjJzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+XHJcblx0XHRcdFx0XHRcdDxmb3JtIG5vVmFsaWRhdGUgaWQ9XCIjY29udGFjdC1mb3JtXCIgY2xhc3NOYW1lPVwiZGxhYi1mb3JtIGR6Rm9ybVwiIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHpGb3JtTXNnXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZHpUb0RvXCIgdmFsdWU9XCJDb250YWN0XCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJkek5hbWVcIiByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJkekxuYW1lXCIgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6RW1haWxcIiAgcmVxdWlyZWQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6UGhvbmVcIiAgIHJlcXVpcmVkIHR5cGU9XCJ0ZWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlBob25lIE5vLlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiZHpPdGhlcltwcm9qZWN0X3RpdGxlXVwiIHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IFRpdGxlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0ICBuYW1lPVwiZHpTZXJ2aWNlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBzZWxlY3RlZD5DaG9vc2UgU2VydmljZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT17cGxhbnNbMF19PldlYiBEZXZlbG9wbWVudDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT17cGxhbnNbMV19PldlYiBEZXNpZ248L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9e3BsYW5zWzNdfT5TRU88L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9e3BsYW5zWzRdfT5Eb250IEtub3cgWWV0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIG5hbWU9XCJkek1lc3NhZ2VcIiByZXF1aXJlZCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6T3RoZXJbY2hvb3NlX2ZpbGVdXCIgdHlwZT1cImZpbGVcIiByZXF1aXJlZCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY3VzdG9tLWZpbGUtaW5wdXRcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlLWxhYmVsXCI+Q2hvb3NlIGZpbGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6QnVkZ2V0XCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVzdGltYXRlZCBCdWdldFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBuYW1lPVwiZHpPdGhlcltwcmlvcml0eV1cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gc2VsZWN0ZWQ+UHJpb3JpdHk8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxXCI+T25lPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMlwiPlR3bzwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjNcIj5UaHJlZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6T3RoZXJbY291bnRyeV1cIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ291bnRyeVwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnLXJlY2FwdGNoYVwiIGRhdGEtc2l0ZWtleT1cIjZMZWZzVlVVQUFBQUFEQlBzTFp6c05uRVRDaGVhbHY2UFlHenYzWk5cIiBkYXRhLWNhbGxiYWNrPVwidmVyaWZ5UmVjYXB0Y2hhQ2FsbGJhY2tcIiBkYXRhLWV4cGlyZWQtY2FsbGJhY2s9XCJleHBpcmVkUmVjYXB0Y2hhQ2FsbGJhY2tcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGQtbm9uZVwiIHN0eWxlPXt7XCJkaXNwbGF5XCI6XCJub25lXCJ9fSBkYXRhLXJlY2FwdGNoYT1cInRydWVcIiByZXF1aXJlZCBkYXRhLWVycm9yPVwiUGxlYXNlIGNvbXBsZXRlIHRoZSBDYXB0Y2hhXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFJlQ0FQVENIQVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNpdGVrZXk9XCI2TGVmc1ZVVUFBQUFBREJQc0xaenNObkVUQ2hlYWx2NlBZR3p2M1pOXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBtdC0yXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gbmFtZT1cInN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBncmFkaWVudCBib3JkZXItMCByb3VuZGVkLXhsXCIgPlN1Ym1pdCBOb3c8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc3VsdCA/IDxSZXN1bHQvPiA6IG51bGx9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1b3RlMjsiXSwic291cmNlUm9vdCI6IiJ9