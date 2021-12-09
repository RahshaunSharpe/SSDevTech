(function() {
var exports = {};
exports.id = 866;
exports.ids = [866];
exports.modules = {

/***/ 8997:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ contact_us_2; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "react-google-recaptcha"
var external_react_google_recaptcha_namespaceObject = require("react-google-recaptcha");;
var external_react_google_recaptcha_default = /*#__PURE__*/__webpack_require__.n(external_react_google_recaptcha_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "react-hook-form"
var external_react_hook_form_namespaceObject = require("react-hook-form");;
;// CONCATENATED MODULE: external "emailjs-com"
var external_emailjs_com_namespaceObject = require("emailjs-com");;
var external_emailjs_com_default = /*#__PURE__*/__webpack_require__.n(external_emailjs_com_namespaceObject);
;// CONCATENATED MODULE: ./element/quote-2.js








(0,external_emailjs_com_namespaceObject.init)("user_Fj1ZIaaVTp3kf3S9kHXWD");

function onChange(value) {
  console.log("Captcha value:", value);
}

const Result = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: "Your Message has been Sent. We will contact you within 1 to 3 business days."
  });
};

function Quote2(value, options) {
  const {
    0: result,
    1: showResult
  } = (0,external_react_.useState)(false);

  const onSubmit = e => {
    e.preventDefault();
    external_emailjs_com_default().sendForm('service_j2b6ioe', 'template_ct0gpue', e.target, 'user_Fj1ZIaaVTp3kf3S9kHXWD').then(response => {
      console.log('SUCCESS!', response.status, response.text);
    }).catch(err => {
      console.log('FAILED...', err);
    });
    e.target.reset();
    showResult(true);
  };

  const plans = ["Web Development", "Web Design", "SEO", "Not Sure Yet"];
  setTimeout(() => {
    showResult(false);
  }, 3000);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "content-inner",
      style: {
        "backgroundImage": "url(images/background/bg2.png)",
        "backgroundRepeat": "no-repeat"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-lg-6 m-b30 quote-media",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "dlab-media style-1 move-1",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "images/team/large/pic1.jpg",
                alt: ""
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "dlab-media style-2 move-4",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "images/team/large/pic2.jpg",
                alt: ""
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "dlab-media style-3 move-2",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "images/team/large/pic3.jpg",
                alt: ""
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-6 m-b30 wow fadeIn",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
              noValidate: true,
              id: "#contact-form",
              className: "dlab-form dzForm",
              method: "POST",
              onSubmit: onSubmit,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "dzFormMsg"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "hidden",
                className: "form-control",
                name: "dzToDo",
                value: "Contact"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "input-group",
                    children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                      name: "dzName",
                      required: true,
                      type: "text",
                      className: "form-control",
                      placeholder: "First Name"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "input-group",
                    children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                      name: "dzLname",
                      required: true,
                      type: "text",
                      className: "form-control",
                      placeholder: "Last Name"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "input-group",
                    children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                      name: "dzEmail",
                      required: true,
                      type: "email",
                      className: "form-control",
                      placeholder: "Email"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "input-group",
                    children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                      name: "dzPhone",
                      required: true,
                      type: "tel",
                      className: "form-control",
                      placeholder: "Phone No."
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "input-group",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                      name: "dzService",
                      className: "form-control",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                        selected: true,
                        children: "Choose Service"
                      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: plans[0],
                        children: "Web Development"
                      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: plans[1],
                        children: "Web Design"
                      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: plans[3],
                        children: "SEO"
                      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: plans[4],
                        children: "Dont Know Yet"
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-sm-12",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "input-group",
                    children: /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                      name: "dzMessage",
                      required: true,
                      className: "form-control",
                      placeholder: "Message"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-sm-12",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "input-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "g-recaptcha",
                      "data-sitekey": "6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN",
                      "data-callback": "verifyRecaptchaCallback",
                      "data-expired-callback": "expiredRecaptchaCallback"
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      className: "form-control d-none",
                      style: {
                        "display": "none"
                      },
                      "data-recaptcha": "true",
                      required: true,
                      "data-error": "Please complete the Captcha"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((external_react_google_recaptcha_default()), {
                  sitekey: "6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN",
                  onChange: onChange
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-sm-12 mt-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                    name: "submit",
                    type: "submit",
                    value: "submit",
                    className: "btn btn-primary gradient border-0 rounded-xl",
                    children: "Submit Now"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: result ? /*#__PURE__*/jsx_runtime_.jsx(Result, {}) : null
                })]
              })]
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ var quote_2 = (Quote2);
// EXTERNAL MODULE: ./layout/footer-2.js
var footer_2 = __webpack_require__(366);
// EXTERNAL MODULE: ./layout/header-2.js
var header_2 = __webpack_require__(6463);
;// CONCATENATED MODULE: ./pages/contact-us-2.js








function ContactUs2() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(header_2/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "page-content bg-white",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "dlab-bnr-inr style-2 overlay-gradient-dark",
        style: {
          "backgroundImage": "url(images/banner/bnr1.jpg)"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dlab-bnr-inr-entry",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: "Contact Us"
            }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
              "aria-label": "breadcrumb",
              className: "breadcrumb-row",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "breadcrumb",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "breadcrumb-item",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Home"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "breadcrumb-item active",
                  "aria-current": "page",
                  children: "Contact Us"
                })]
              })
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(quote_2, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(footer_2/* default */.Z, {})]
  });
}

/* harmony default export */ var contact_us_2 = (ContactUs2);

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,140,366], function() { return __webpack_exec__(8997); });
module.exports = __webpack_exports__;

})();