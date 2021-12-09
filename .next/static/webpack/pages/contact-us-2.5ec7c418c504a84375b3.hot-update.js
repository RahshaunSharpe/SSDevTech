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
/* harmony import */ var C_Users_sharp_OneDrive_Documents_themeforest_React_Samar_v1_0_29_October_2021_samar_2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/es/index.js");




var _jsxFileName = "C:\\Users\\sharp\\OneDrive\\Documents\\themeforest\\React-Samar-v1.0-29_October-2021\\samar-2\\element\\quote-2.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_sharp_OneDrive_Documents_themeforest_React_Samar_v1_0_29_October_2021_samar_2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function onChange(value) {
  console.log("Captcha value:", value);
}

var Result = function Result() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: "Your Message has been Sent. We will contact you within 1 to 3 business days."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 11
  }, _this);
};

_c = Result;

function Quote2(value, options) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      result = _useState[0],
      showResult = _useState[1];

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      reset = _useForm.reset,
      errors = _useForm.formState.errors;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: "",
    email: "",
    number: "",
    plan: "",
    message: ""
  }),
      toSend = _useState2[0],
      setToSend = _useState2[1];

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_5__["default"].sendForm('service_j2b6ioe', 'template_ct0gpue', '#contact-form', 'user_Fj1ZIaaVTp3kf3S9kHXWD').then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
    })["catch"](function (err) {
      console.log('FAILED...', err);
    });
    e.target.reset();
    showResult(true);
  };

  var plans = ["Web Development", "Web Design", "SEO", "Not Sure Yet"];

  var handleChange = function handleChange(e) {
    setToSend(_objectSpread(_objectSpread({}, toSend), {}, Object(C_Users_sharp_OneDrive_Documents_themeforest_React_Samar_v1_0_29_October_2021_samar_2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.name, e.target.value)));
  };

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
                lineNumber: 66,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dlab-media style-2 move-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "images/team/large/pic2.jpg",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dlab-media style-3 move-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "images/team/large/pic3.jpg",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-6 m-b30 wow fadeIn",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              id: "#contact-form",
              className: "dlab-form dzForm",
              method: "POST",
              onSubmit: onSubmit,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "dzFormMsg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                className: "form-control",
                name: "dzToDo",
                value: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({
                      name: "dzName",
                      required: true,
                      type: "text",
                      className: "form-control",
                      onChange: handleChange
                    }, register('dzname', {
                      required: {
                        value: true,
                        message: 'Please enter your name'
                      },
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less'
                      }
                    })), {}, {
                      placeholder: "First Name"
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      name: "last_name",
                      required: true,
                      type: "text",
                      className: "form-control",
                      placeholder: "Last Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({
                      name: "dzEmail",
                      onChange: handleChange
                    }, register('dzEmail', {
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    })), {}, {
                      required: true,
                      type: "text",
                      className: "form-control",
                      placeholder: "Email Address"
                    }), void 0, false, {
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
                  className: "col-sm-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
                      name: "dzOther[phone]",
                      onChange: handleChange,
                      required: true,
                      type: "text",
                      className: "form-control",
                      placeholder: "Phone No."
                    }, register('dzOther[phone]', {
                      required: {
                        value: true,
                        number: '/[0-9]{3}-[0-9]{3}-[0-9]{4}/'
                      },
                      maxLength: {
                        value: 10,
                        message: 'Please enter valid phone #'
                      }
                    })), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                      name: "dzOther[choose_service]",
                      className: "form-control",
                      required: true,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        selected: true,
                        children: "Choose Service"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 129,
                        columnNumber: 12
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: plans[0],
                        children: "Web Development"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 130,
                        columnNumber: 12
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: plans[1],
                        children: "Web Design"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 131,
                        columnNumber: 12
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: plans[3],
                        children: "SEO"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 132,
                        columnNumber: 12
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: plans[4],
                        children: "Dont Know Yet"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 133,
                        columnNumber: 12
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
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
                      lineNumber: 140,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      name: "dzOther[estimated_buget]",
                      type: "text",
                      required: true,
                      className: "form-control",
                      placeholder: "Estimated Buget"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
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
                      lineNumber: 171,
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
                      lineNumber: 172,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  sitekey: "6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN",
                  onChange: onChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-12 mt-2",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    name: "submit",
                    type: "submit",
                    value: "Submit",
                    className: "btn btn-primary gradient border-0 rounded-xl",
                    children: "Submit Now"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: result ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Result, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 20
                  }, this) : null
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, this)
  }, void 0, false);
}

_s(Quote2, "p4/5x8OC9VjHPRuGdCnTonEUiHo=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZWxlbWVudC9xdW90ZS0yLmpzIl0sIm5hbWVzIjpbIm9uQ2hhbmdlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiUmVzdWx0IiwiUXVvdGUyIiwib3B0aW9ucyIsInVzZVN0YXRlIiwicmVzdWx0Iiwic2hvd1Jlc3VsdCIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlc2V0IiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwibmFtZSIsImVtYWlsIiwibnVtYmVyIiwicGxhbiIsIm1lc3NhZ2UiLCJ0b1NlbmQiLCJzZXRUb1NlbmQiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsanMiLCJzZW5kRm9ybSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInRleHQiLCJlcnIiLCJ0YXJnZXQiLCJwbGFucyIsImhhbmRsZUNoYW5nZSIsInJlcXVpcmVkIiwibWF4TGVuZ3RoIiwicGF0dGVybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDeEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRixLQUE5QjtBQUNFOztBQUVELElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDcEIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNBLENBRkQ7O0tBQU1BLE07O0FBS1IsU0FBU0MsTUFBVCxDQUFnQkosS0FBaEIsRUFBdUJLLE9BQXZCLEVBQWdDO0FBQUE7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUMsS0FBRCxDQUROO0FBQUEsTUFDeEJDLE1BRHdCO0FBQUEsTUFDaEJDLFVBRGdCOztBQUFBLGlCQU8xQkMsK0RBQU8sRUFQbUI7QUFBQSxNQUc5QkMsUUFIOEIsWUFHOUJBLFFBSDhCO0FBQUEs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QUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUFzSUE7O0dBakxRSCxNO1VBT0hLLHVEOzs7TUFQR0wsTTtBQW1MTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC11cy0yLjVlYzdjNDE4YzUwNGE4NDM3NWIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVDQVBUQ0hBIGZyb20gXCJyZWFjdC1nb29nbGUtcmVjYXB0Y2hhXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcblxyXG5pbXBvcnQgIGVtYWlsanMgIGZyb20gJ2VtYWlsanMtY29tJztcclxuaW1wb3J0eyBpbml0IH0gZnJvbSAnZW1haWxqcy1jb20nO1xyXG5mdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xyXG5cdGNvbnNvbGUubG9nKFwiQ2FwdGNoYSB2YWx1ZTpcIiwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgUmVzdWx0ID0gKCkgPT4ge1xyXG5cdCAgcmV0dXJuIDxwPllvdXIgTWVzc2FnZSBoYXMgYmVlbiBTZW50LiBXZSB3aWxsIGNvbnRhY3QgeW91IHdpdGhpbiAxIHRvIDMgYnVzaW5lc3MgZGF5cy48L3A+XHJcbiAgfVxyXG4gXHJcblxyXG5mdW5jdGlvbiBRdW90ZTIodmFsdWUsIG9wdGlvbnMpIHtcclxuXHRjb25zdCBbcmVzdWx0LCBzaG93UmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCB7XHJcblx0XHRyZWdpc3RlcixcclxuXHRcdGhhbmRsZVN1Ym1pdCxcclxuXHRcdHJlc2V0LFxyXG5cdFx0Zm9ybVN0YXRlOiB7IGVycm9ycyB9XHJcblx0IH0gPSB1c2VGb3JtKCk7XHJcblx0ICBcclxuXHQgY29uc3QgW3RvU2VuZCwgc2V0VG9TZW5kXSA9IHVzZVN0YXRlKHtcclxuXHQgICBuYW1lOiBcIlwiLFxyXG5cdCAgIGVtYWlsOiBcIlwiLFxyXG5cdCAgIG51bWJlcjpcIlwiLFxyXG5cdCAgIHBsYW46XCJcIixcclxuXHQgICBtZXNzYWdlOlwiXCIsXHJcblx0ICAgXHJcblx0ICAgXHJcblx0IH0pXHJcblx0ICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRcclxuXHRcdCBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0ICAgXHJcblx0ICAgXHJcblx0XHRlbWFpbGpzLnNlbmRGb3JtKCdzZXJ2aWNlX2oyYjZpb2UnLCAndGVtcGxhdGVfY3QwZ3B1ZScsJyNjb250YWN0LWZvcm0nLCAndXNlcl9GajFaSWFhVlRwM2tmM1M5a0hYV0QnKVxyXG5cdFx0IC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0ICAgY29uc29sZS5sb2coJ1NVQ0NFU1MhJywgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcclxuXHRcdCAgIFxyXG5cdFx0IH0pXHJcblx0XHQgLmNhdGNoKChlcnIpID0+IHtcclxuXHRcdCAgIGNvbnNvbGUubG9nKCdGQUlMRUQuLi4nLCBlcnIpO1xyXG5cdFx0IH0pO1xyXG5cdFx0ZS50YXJnZXQucmVzZXQoKTtcclxuXHRcdHNob3dSZXN1bHQodHJ1ZSlcclxuXHRcdCAgXHJcblx0IH07XHJcblx0ICBcclxuXHRcclxuXHQgIGNvbnN0IHBsYW5zID0gW1wiV2ViIERldmVsb3BtZW50XCIsIFwiV2ViIERlc2lnblwiLCBcIlNFT1wiLCBcIk5vdCBTdXJlIFlldFwiXVxyXG5cdFxyXG5cdCAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdHNldFRvU2VuZCh7IC4uLnRvU2VuZCwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHQgIH1cclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWlubmVyXCIgc3R5bGU9e3tcImJhY2tncm91bmRJbWFnZVwiOlwidXJsKGltYWdlcy9iYWNrZ3JvdW5kL2JnMi5wbmcpXCIsXCJiYWNrZ3JvdW5kUmVwZWF0XCI6XCJuby1yZXBlYXRcIn19PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBtLWIzMCBxdW90ZS1tZWRpYVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRsYWItbWVkaWEgc3R5bGUtMSBtb3ZlLTFcIj5cdFxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1hZ2VzL3RlYW0vbGFyZ2UvcGljMS5qcGdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRsYWItbWVkaWEgc3R5bGUtMiBtb3ZlLTRcIj5cdFxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1hZ2VzL3RlYW0vbGFyZ2UvcGljMi5qcGdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRsYWItbWVkaWEgc3R5bGUtMyBtb3ZlLTJcIj5cdFxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1hZ2VzL3RlYW0vbGFyZ2UvcGljMy5qcGdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IG0tYjMwIHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjJzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+XHJcblx0XHRcdFx0XHRcdDxmb3JtIGlkPVwiI2NvbnRhY3QtZm9ybVwiIGNsYXNzTmFtZT1cImRsYWItZm9ybSBkekZvcm1cIiBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR6Rm9ybU1zZ1wiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImR6VG9Eb1wiIHZhbHVlPVwiQ29udGFjdFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiZHpOYW1lXCIgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZHpuYW1lJywge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgeW91ciBuYW1lJyB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4TGVuZ3RoOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAzMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1BsZWFzZSB1c2UgMzAgY2hhcmFjdGVycyBvciBsZXNzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9IHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImxhc3RfbmFtZVwiIHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJkekVtYWlsXCIgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdkekVtYWlsJywge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXlthLXpBLVowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX0gcmVxdWlyZWQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJkek90aGVyW3Bob25lXVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9ICByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUGhvbmUgTm8uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZHpPdGhlcltwaG9uZV0nLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbnVtYmVyOiAnL1swLTldezN9LVswLTldezN9LVswLTldezR9LycgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1heExlbmd0aDoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogMTAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgdmFsaWQgcGhvbmUgIydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJkek90aGVyW3Byb2plY3RfdGl0bGVdXCIgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgVGl0bGVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgIG5hbWU9XCJkek90aGVyW2Nob29zZV9zZXJ2aWNlXVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBzZWxlY3RlZD5DaG9vc2UgU2VydmljZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT17cGxhbnNbMF19PldlYiBEZXZlbG9wbWVudDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT17cGxhbnNbMV19PldlYiBEZXNpZ248L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9e3BsYW5zWzNdfT5TRU88L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9e3BsYW5zWzRdfT5Eb250IEtub3cgWWV0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIG5hbWU9XCJkek1lc3NhZ2VcIiByZXF1aXJlZCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6T3RoZXJbY2hvb3NlX2ZpbGVdXCIgdHlwZT1cImZpbGVcIiByZXF1aXJlZCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY3VzdG9tLWZpbGUtaW5wdXRcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlLWxhYmVsXCI+Q2hvb3NlIGZpbGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiZHpPdGhlcltlc3RpbWF0ZWRfYnVnZXRdXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVzdGltYXRlZCBCdWdldFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IG5hbWU9XCJkek90aGVyW3ByaW9yaXR5XVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBzZWxlY3RlZD5Qcmlvcml0eTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjFcIj5PbmU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyXCI+VHdvPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiM1wiPlRocmVlPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiZHpPdGhlcltjb3VudHJ5XVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImctcmVjYXB0Y2hhXCIgZGF0YS1zaXRla2V5PVwiNkxlZnNWVVVBQUFBQURCUHNMWnpzTm5FVENoZWFsdjZQWUd6djNaTlwiIGRhdGEtY2FsbGJhY2s9XCJ2ZXJpZnlSZWNhcHRjaGFDYWxsYmFja1wiIGRhdGEtZXhwaXJlZC1jYWxsYmFjaz1cImV4cGlyZWRSZWNhcHRjaGFDYWxsYmFja1wiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZC1ub25lXCIgc3R5bGU9e3tcImRpc3BsYXlcIjpcIm5vbmVcIn19IGRhdGEtcmVjYXB0Y2hhPVwidHJ1ZVwiIHJlcXVpcmVkIGRhdGEtZXJyb3I9XCJQbGVhc2UgY29tcGxldGUgdGhlIENhcHRjaGFcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8UmVDQVBUQ0hBXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2l0ZWtleT1cIjZMZWZzVlVVQUFBQUFEQlBzTFp6c05uRVRDaGVhbHY2UFlHenYzWk5cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIG10LTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBuYW1lPVwic3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGdyYWRpZW50IGJvcmRlci0wIHJvdW5kZWQteGxcIj5TdWJtaXQgTm93PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtyZXN1bHQgPyA8UmVzdWx0Lz4gOiBudWxsfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdW90ZTI7Il0sInNvdXJjZVJvb3QiOiIifQ==