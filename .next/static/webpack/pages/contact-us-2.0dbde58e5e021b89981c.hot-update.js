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
                    }, register('name', {
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
                    }, register('email', {
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
                    }, register('number', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZWxlbWVudC9xdW90ZS0yLmpzIl0sIm5hbWVzIjpbIm9uQ2hhbmdlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiUmVzdWx0IiwiUXVvdGUyIiwib3B0aW9ucyIsInVzZVN0YXRlIiwicmVzdWx0Iiwic2hvd1Jlc3VsdCIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlc2V0IiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwibmFtZSIsImVtYWlsIiwibnVtYmVyIiwicGxhbiIsIm1lc3NhZ2UiLCJ0b1NlbmQiLCJzZXRUb1NlbmQiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsanMiLCJzZW5kRm9ybSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInRleHQiLCJlcnIiLCJ0YXJnZXQiLCJwbGFucyIsImhhbmRsZUNoYW5nZSIsInJlcXVpcmVkIiwibWF4TGVuZ3RoIiwicGF0dGVybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDeEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRixLQUE5QjtBQUNFOztBQUVELElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDcEIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNBLENBRkQ7O0tBQU1BLE07O0FBS1IsU0FBU0MsTUFBVCxDQUFnQkosS0FBaEIsRUFBdUJLLE9BQXZCLEVBQWdDO0FBQUE7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUMsS0FBRCxDQUROO0FBQUEsTUFDeEJDLE1BRHdCO0FBQUEsTUFDaEJDLFVBRGdCOztBQUFBLGlCQU8xQkMsK0RBQU8sRUFQbUI7QUFBQSxNQUc5QkMsUUFIOEIsWUFHOUJBLFFBSDhCO0FBQUEs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REQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUREO0FBc0lBOztHQWpMUUgsTTtVQU9ISyx1RDs7O01BUEdMLE07QUFtTE1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhY3QtdXMtMi4wZGJkZTU4ZTVlMDIxYjg5OTgxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlQ0FQVENIQSBmcm9tIFwicmVhY3QtZ29vZ2xlLXJlY2FwdGNoYVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuaW1wb3J0ICBlbWFpbGpzICBmcm9tICdlbWFpbGpzLWNvbSc7XHJcbmltcG9ydHsgaW5pdCB9IGZyb20gJ2VtYWlsanMtY29tJztcclxuZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcclxuXHRjb25zb2xlLmxvZyhcIkNhcHRjaGEgdmFsdWU6XCIsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFJlc3VsdCA9ICgpID0+IHtcclxuXHQgIHJldHVybiA8cD5Zb3VyIE1lc3NhZ2UgaGFzIGJlZW4gU2VudC4gV2Ugd2lsbCBjb250YWN0IHlvdSB3aXRoaW4gMSB0byAzIGJ1c2luZXNzIGRheXMuPC9wPlxyXG4gIH1cclxuIFxyXG5cclxuZnVuY3Rpb24gUXVvdGUyKHZhbHVlLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgW3Jlc3VsdCwgc2hvd1Jlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3Qge1xyXG5cdFx0cmVnaXN0ZXIsXHJcblx0XHRoYW5kbGVTdWJtaXQsXHJcblx0XHRyZXNldCxcclxuXHRcdGZvcm1TdGF0ZTogeyBlcnJvcnMgfVxyXG5cdCB9ID0gdXNlRm9ybSgpO1xyXG5cdCAgXHJcblx0IGNvbnN0IFt0b1NlbmQsIHNldFRvU2VuZF0gPSB1c2VTdGF0ZSh7XHJcblx0ICAgbmFtZTogXCJcIixcclxuXHQgICBlbWFpbDogXCJcIixcclxuXHQgICBudW1iZXI6XCJcIixcclxuXHQgICBwbGFuOlwiXCIsXHJcblx0ICAgbWVzc2FnZTpcIlwiLFxyXG5cdCAgIFxyXG5cdCAgIFxyXG5cdCB9KVxyXG5cdCAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0XHJcblx0XHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCAgIFxyXG5cdCAgIFxyXG5cdFx0ZW1haWxqcy5zZW5kRm9ybSgnc2VydmljZV9qMmI2aW9lJywgJ3RlbXBsYXRlX2N0MGdwdWUnLCcjY29udGFjdC1mb3JtJywgJ3VzZXJfRmoxWklhYVZUcDNrZjNTOWtIWFdEJylcclxuXHRcdCAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdCAgIGNvbnNvbGUubG9nKCdTVUNDRVNTIScsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UudGV4dCk7XHJcblx0XHQgICBcclxuXHRcdCB9KVxyXG5cdFx0IC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHQgICBjb25zb2xlLmxvZygnRkFJTEVELi4uJywgZXJyKTtcclxuXHRcdCB9KTtcclxuXHRcdGUudGFyZ2V0LnJlc2V0KCk7XHJcblx0XHRzaG93UmVzdWx0KHRydWUpXHJcblx0XHQgIFxyXG5cdCB9O1xyXG5cdCAgXHJcblx0XHJcblx0ICBjb25zdCBwbGFucyA9IFtcIldlYiBEZXZlbG9wbWVudFwiLCBcIldlYiBEZXNpZ25cIiwgXCJTRU9cIiwgXCJOb3QgU3VyZSBZZXRcIl1cclxuXHRcclxuXHQgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRzZXRUb1NlbmQoeyAuLi50b1NlbmQsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcblx0ICB9XHJcblx0XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pbm5lclwiIHN0eWxlPXt7XCJiYWNrZ3JvdW5kSW1hZ2VcIjpcInVybChpbWFnZXMvYmFja2dyb3VuZC9iZzIucG5nKVwiLFwiYmFja2dyb3VuZFJlcGVhdFwiOlwibm8tcmVwZWF0XCJ9fT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgbS1iMzAgcXVvdGUtbWVkaWFcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkbGFiLW1lZGlhIHN0eWxlLTEgbW92ZS0xXCI+XHRcclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImltYWdlcy90ZWFtL2xhcmdlL3BpYzEuanBnXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkbGFiLW1lZGlhIHN0eWxlLTIgbW92ZS00XCI+XHRcclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImltYWdlcy90ZWFtL2xhcmdlL3BpYzIuanBnXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkbGFiLW1lZGlhIHN0eWxlLTMgbW92ZS0yXCI+XHRcclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImltYWdlcy90ZWFtL2xhcmdlL3BpYzMuanBnXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBtLWIzMCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIyc1wiIGRhdGEtd293LWRlbGF5PVwiMC4yc1wiPlxyXG5cdFx0XHRcdFx0XHQ8Zm9ybSBpZD1cIiNjb250YWN0LWZvcm1cIiBjbGFzc05hbWU9XCJkbGFiLWZvcm0gZHpGb3JtXCIgbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkekZvcm1Nc2dcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJkelRvRG9cIiB2YWx1ZT1cIkNvbnRhY3RcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6TmFtZVwiIHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciB5b3VyIG5hbWUnIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhMZW5ndGg6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDMwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIHVzZSAzMCBjaGFyYWN0ZXJzIG9yIGxlc3MnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX0gcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwibGFzdF9uYW1lXCIgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6RW1haWxcIiAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ2VtYWlsJywge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXlthLXpBLVowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX0gcmVxdWlyZWQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJkek90aGVyW3Bob25lXVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9ICByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUGhvbmUgTm8uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignbnVtYmVyJywge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG51bWJlcjogJy9bMC05XXszfS1bMC05XXszfS1bMC05XXs0fS8nIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhMZW5ndGg6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDEwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIHZhbGlkIHBob25lICMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiZHpPdGhlcltwcm9qZWN0X3RpdGxlXVwiIHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IFRpdGxlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0ICBuYW1lPVwiZHpPdGhlcltjaG9vc2Vfc2VydmljZV1cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gc2VsZWN0ZWQ+Q2hvb3NlIFNlcnZpY2U8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9e3BsYW5zWzBdfT5XZWIgRGV2ZWxvcG1lbnQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9e3BsYW5zWzFdfT5XZWIgRGVzaWduPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPXtwbGFuc1szXX0+U0VPPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPXtwbGFuc1s0XX0+RG9udCBLbm93IFlldDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBuYW1lPVwiZHpNZXNzYWdlXCIgcmVxdWlyZWQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCI+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJkek90aGVyW2Nob29zZV9maWxlXVwiIHR5cGU9XCJmaWxlXCIgcmVxdWlyZWQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGN1c3RvbS1maWxlLWlucHV0XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS1sYWJlbFwiPkNob29zZSBmaWxlPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6T3RoZXJbZXN0aW1hdGVkX2J1Z2V0XVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFc3RpbWF0ZWQgQnVnZXRcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBuYW1lPVwiZHpPdGhlcltwcmlvcml0eV1cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gc2VsZWN0ZWQ+UHJpb3JpdHk8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxXCI+T25lPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMlwiPlR3bzwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjNcIj5UaHJlZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6T3RoZXJbY291bnRyeV1cIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ291bnRyeVwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnLXJlY2FwdGNoYVwiIGRhdGEtc2l0ZWtleT1cIjZMZWZzVlVVQUFBQUFEQlBzTFp6c05uRVRDaGVhbHY2UFlHenYzWk5cIiBkYXRhLWNhbGxiYWNrPVwidmVyaWZ5UmVjYXB0Y2hhQ2FsbGJhY2tcIiBkYXRhLWV4cGlyZWQtY2FsbGJhY2s9XCJleHBpcmVkUmVjYXB0Y2hhQ2FsbGJhY2tcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGQtbm9uZVwiIHN0eWxlPXt7XCJkaXNwbGF5XCI6XCJub25lXCJ9fSBkYXRhLXJlY2FwdGNoYT1cInRydWVcIiByZXF1aXJlZCBkYXRhLWVycm9yPVwiUGxlYXNlIGNvbXBsZXRlIHRoZSBDYXB0Y2hhXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFJlQ0FQVENIQVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNpdGVrZXk9XCI2TGVmc1ZVVUFBQUFBREJQc0xaenNObkVUQ2hlYWx2NlBZR3p2M1pOXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBtdC0yXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gbmFtZT1cInN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBncmFkaWVudCBib3JkZXItMCByb3VuZGVkLXhsXCI+U3VibWl0IE5vdzwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzdWx0ID8gPFJlc3VsdC8+IDogbnVsbH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVvdGUyOyJdLCJzb3VyY2VSb290IjoiIn0=