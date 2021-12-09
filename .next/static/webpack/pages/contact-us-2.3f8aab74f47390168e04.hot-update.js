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
                      name: "dzPhone",
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
                      name: "dzService]",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZWxlbWVudC9xdW90ZS0yLmpzIl0sIm5hbWVzIjpbImluaXQiLCJvbkNoYW5nZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIlJlc3VsdCIsIlF1b3RlMiIsIm9wdGlvbnMiLCJ1c2VTdGF0ZSIsInJlc3VsdCIsInNob3dSZXN1bHQiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsanMiLCJzZW5kRm9ybSIsInRhcmdldCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInRleHQiLCJlcnIiLCJyZXNldCIsInBsYW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBQSx3REFBSSxDQUFDLDRCQUFELENBQUo7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDeEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRixLQUE5QjtBQUNFOztBQUVELElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDcEIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNBLENBRkQ7O0tBQU1BLE07O0FBS1IsU0FBU0MsTUFBVCxDQUFnQkosS0FBaEIsRUFBdUJLLE9BQXZCLEVBQWdDO0FBQUE7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUMsS0FBRCxDQUROO0FBQUEsTUFDeEJDLE1BRHdCO0FBQUEsTUFDaEJDLFVBRGdCOztBQUk3QixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFFeEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUdEQyx1REFBTyxDQUFDQyxRQUFSLENBQWlCLGlCQUFqQixFQUFvQyxrQkFBcEMsRUFBdURILENBQUMsQ0FBQ0ksTUFBekQsRUFBaUUsNEJBQWpFLEVBQ0VDLElBREYsQ0FDTyxVQUFDQyxRQUFELEVBQWM7QUFDbEJmLGFB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akI7QUFBdUMsMkJBQUssRUFBRTtBQUFDLG1DQUFVO0FBQVgsdUJBQTlDO0FBQWtFLHdDQUFlLE1BQWpGO0FBQXdGLDhCQUFRLE1BQWhHO0FBQWlHLG9DQUFXO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkEzRUQsZUFpRkMscUVBQUMsOERBQUQ7QUFDRSx5QkFBTyxFQUFDLDBDQURWO0FBRUUsMEJBQVEsRUFBRXRCO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFqRkQsZUFxRkM7QUFBSywyQkFBUyxFQUFDLGdCQUFmO0FBQUEseUNBQ0M7QUFBUSx3QkFBSSxFQUFDLFFBQWI7QUFBc0Isd0JBQUksRUFBQyxRQUEzQjtBQUFvQyx5QkFBSyxFQUFDLFFBQTFDO0FBQW1ELDZCQUFTLEVBQUMsOENBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFyRkQsZUF3RkM7QUFBQSw0QkFDRVEsTUFBTSxnQkFBRyxxRUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUgsR0FBZTtBQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXhGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUREO0FBdUhBOztHQWxKUUgsTTs7TUFBQUEsTTtBQW9KTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC11cy0yLjNmOGFhYjc0ZjQ3MzkwMTY4ZTA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVDQVBUQ0hBIGZyb20gXCJyZWFjdC1nb29nbGUtcmVjYXB0Y2hhXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcblxyXG5pbXBvcnQgIGVtYWlsanMgIGZyb20gJ2VtYWlsanMtY29tJztcclxuaW1wb3J0eyBpbml0IH0gZnJvbSAnZW1haWxqcy1jb20nO1xyXG5pbml0KFwidXNlcl9GajFaSWFhVlRwM2tmM1M5a0hYV0RcIik7XHJcblxyXG5mdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xyXG5cdGNvbnNvbGUubG9nKFwiQ2FwdGNoYSB2YWx1ZTpcIiwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgUmVzdWx0ID0gKCkgPT4ge1xyXG5cdCAgcmV0dXJuIDxwPllvdXIgTWVzc2FnZSBoYXMgYmVlbiBTZW50LiBXZSB3aWxsIGNvbnRhY3QgeW91IHdpdGhpbiAxIHRvIDMgYnVzaW5lc3MgZGF5cy48L3A+XHJcbiAgfVxyXG4gXHJcblxyXG5mdW5jdGlvbiBRdW90ZTIodmFsdWUsIG9wdGlvbnMpIHtcclxuXHRjb25zdCBbcmVzdWx0LCBzaG93UmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRcclxuXHQgXHJcblx0ICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRcclxuXHRcdCBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0ICAgXHJcblx0ICAgXHJcblx0XHRlbWFpbGpzLnNlbmRGb3JtKCdzZXJ2aWNlX2oyYjZpb2UnLCAndGVtcGxhdGVfY3QwZ3B1ZScsZS50YXJnZXQsICd1c2VyX0ZqMVpJYWFWVHAza2YzUzlrSFhXRCcpXHJcblx0XHQgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHQgICBjb25zb2xlLmxvZygnU1VDQ0VTUyEnLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnRleHQpO1xyXG5cdFx0ICAgXHJcblx0XHQgfSlcclxuXHRcdCAuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0ICAgY29uc29sZS5sb2coJ0ZBSUxFRC4uLicsIGVycik7XHJcblx0XHQgfSk7XHJcblx0XHRlLnRhcmdldC5yZXNldCgpO1xyXG5cdFx0c2hvd1Jlc3VsdCh0cnVlKVxyXG5cdFx0ICBcclxuXHQgfTtcclxuXHQgIFxyXG5cdFxyXG5cdCAgY29uc3QgcGxhbnMgPSBbXCJXZWIgRGV2ZWxvcG1lbnRcIiwgXCJXZWIgRGVzaWduXCIsIFwiU0VPXCIsIFwiTm90IFN1cmUgWWV0XCJdXHJcblx0XHJcblx0ICBcclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWlubmVyXCIgc3R5bGU9e3tcImJhY2tncm91bmRJbWFnZVwiOlwidXJsKGltYWdlcy9iYWNrZ3JvdW5kL2JnMi5wbmcpXCIsXCJiYWNrZ3JvdW5kUmVwZWF0XCI6XCJuby1yZXBlYXRcIn19PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBtLWIzMCBxdW90ZS1tZWRpYVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRsYWItbWVkaWEgc3R5bGUtMSBtb3ZlLTFcIj5cdFxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1hZ2VzL3RlYW0vbGFyZ2UvcGljMS5qcGdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRsYWItbWVkaWEgc3R5bGUtMiBtb3ZlLTRcIj5cdFxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1hZ2VzL3RlYW0vbGFyZ2UvcGljMi5qcGdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRsYWItbWVkaWEgc3R5bGUtMyBtb3ZlLTJcIj5cdFxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1hZ2VzL3RlYW0vbGFyZ2UvcGljMy5qcGdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IG0tYjMwIHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjJzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+XHJcblx0XHRcdFx0XHRcdDxmb3JtIG5vVmFsaWRhdGUgaWQ9XCIjY29udGFjdC1mb3JtXCIgY2xhc3NOYW1lPVwiZGxhYi1mb3JtIGR6Rm9ybVwiIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHpGb3JtTXNnXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZHpUb0RvXCIgdmFsdWU9XCJDb250YWN0XCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJkek5hbWVcIiByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJkekxuYW1lXCIgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6RW1haWxcIiAgcmVxdWlyZWQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6UGhvbmVcIiAgIHJlcXVpcmVkIHR5cGU9XCJ0ZWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlBob25lIE5vLlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiZHpPdGhlcltwcm9qZWN0X3RpdGxlXVwiIHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IFRpdGxlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0ICBuYW1lPVwiZHpTZXJ2aWNlXVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gc2VsZWN0ZWQ+Q2hvb3NlIFNlcnZpY2U8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9e3BsYW5zWzBdfT5XZWIgRGV2ZWxvcG1lbnQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9e3BsYW5zWzFdfT5XZWIgRGVzaWduPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPXtwbGFuc1szXX0+U0VPPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPXtwbGFuc1s0XX0+RG9udCBLbm93IFlldDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBuYW1lPVwiZHpNZXNzYWdlXCIgcmVxdWlyZWQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCI+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJkek90aGVyW2Nob29zZV9maWxlXVwiIHR5cGU9XCJmaWxlXCIgcmVxdWlyZWQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGN1c3RvbS1maWxlLWlucHV0XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS1sYWJlbFwiPkNob29zZSBmaWxlPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6T3RoZXJbZXN0aW1hdGVkX2J1Z2V0XVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFc3RpbWF0ZWQgQnVnZXRcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBuYW1lPVwiZHpPdGhlcltwcmlvcml0eV1cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gc2VsZWN0ZWQ+UHJpb3JpdHk8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxXCI+T25lPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMlwiPlR3bzwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjNcIj5UaHJlZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6T3RoZXJbY291bnRyeV1cIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ291bnRyeVwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnLXJlY2FwdGNoYVwiIGRhdGEtc2l0ZWtleT1cIjZMZWZzVlVVQUFBQUFEQlBzTFp6c05uRVRDaGVhbHY2UFlHenYzWk5cIiBkYXRhLWNhbGxiYWNrPVwidmVyaWZ5UmVjYXB0Y2hhQ2FsbGJhY2tcIiBkYXRhLWV4cGlyZWQtY2FsbGJhY2s9XCJleHBpcmVkUmVjYXB0Y2hhQ2FsbGJhY2tcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGQtbm9uZVwiIHN0eWxlPXt7XCJkaXNwbGF5XCI6XCJub25lXCJ9fSBkYXRhLXJlY2FwdGNoYT1cInRydWVcIiByZXF1aXJlZCBkYXRhLWVycm9yPVwiUGxlYXNlIGNvbXBsZXRlIHRoZSBDYXB0Y2hhXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFJlQ0FQVENIQVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNpdGVrZXk9XCI2TGVmc1ZVVUFBQUFBREJQc0xaenNObkVUQ2hlYWx2NlBZR3p2M1pOXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBtdC0yXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gbmFtZT1cInN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBncmFkaWVudCBib3JkZXItMCByb3VuZGVkLXhsXCIgPlN1Ym1pdCBOb3c8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc3VsdCA/IDxSZXN1bHQvPiA6IG51bGx9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1b3RlMjsiXSwic291cmNlUm9vdCI6IiJ9