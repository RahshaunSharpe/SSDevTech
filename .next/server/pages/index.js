(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8312:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./element/aboutUs-2.js
var aboutUs_2 = __webpack_require__(8118);
// EXTERNAL MODULE: ./element/blog-2.js + 1 modules
var blog_2 = __webpack_require__(3773);
// EXTERNAL MODULE: ./element/clients-2.js
var clients_2 = __webpack_require__(8926);
// EXTERNAL MODULE: ./element/counter2.js + 1 modules
var counter2 = __webpack_require__(828);
// EXTERNAL MODULE: ./element/our-services-2.js
var our_services_2 = __webpack_require__(8322);
;// CONCATENATED MODULE: ./component/pricingToggle.js


function Toggle(props) {
  const {
    0: toggleState,
    1: setToggleState
  } = (0,external_react_.useState)("");

  function toggle() {
    setToggleState(toggleState === "" ? "active" : "");
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `tabs-toggle-switch ${toggleState}`,
    onClick: toggle
  });
}
;// CONCATENATED MODULE: ./component/pricingTable-2.js






function PricingTable2() {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)("p2");
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "pricingtable-row",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row justify-content-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6 wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.2s",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${open === "p1" ? "pricingtable-wrapper style-2 m-b30 active" : "pricingtable-wrapper style-2 m-b30"}`,
            onMouseOver: () => setOpen("p1"),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "pricingtable-inner",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "pricingtable-title",
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "Basic Plan"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-bx-sm radius bgl-primary",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "icon-cell",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-paper-plane"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "pricingtable-price",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                  className: "pricingtable-bx",
                  children: ["$49", /*#__PURE__*/jsx_runtime_.jsx("small", {
                    className: "pricingtable-type",
                    children: "/Month"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "pricingtable-features",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Graphic Design "
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Web Design"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "UI/UX"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "HTML/CSS"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "SEO Marketing"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Business Analysis"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "pricingtable-footer",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/pricing-table-2",
                  className: "btn btn-primary gradient shadow rounded-xl",
                  children: "Start Now"
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6 wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.4s",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${open === "p2" ? "pricingtable-wrapper style-2 m-b30 active" : "pricingtable-wrapper style-2 m-b30"}`,
            onMouseOver: () => setOpen("p2"),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "pricingtable-inner",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "pricingtable-title",
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "Standart Plan"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-bx-sm radius bgl-primary",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "icon-cell",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-air-mail"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "pricingtable-price",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                  className: "pricingtable-bx",
                  children: ["$99", /*#__PURE__*/jsx_runtime_.jsx("small", {
                    className: "pricingtable-type",
                    children: "/Month"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "pricingtable-features",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Graphic Design "
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Web Design"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "UI/UX"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "HTML/CSS"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "SEO Marketing"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Business Analysis"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "pricingtable-footer",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/pricing-table-2",
                  className: "btn btn-primary gradient shadow rounded-xl",
                  children: "Start Now"
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6 wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.6s",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${open === "p3" ? "pricingtable-wrapper style-2 m-b30 active" : "pricingtable-wrapper style-2 m-b30"}`,
            onMouseOver: () => setOpen("p3"),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "pricingtable-inner",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "pricingtable-title",
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "Premium Plan"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-bx-sm radius bgl-primary",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "icon-cell",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-startup"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "pricingtable-price",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                  className: "pricingtable-bx",
                  children: ["$149", /*#__PURE__*/jsx_runtime_.jsx("small", {
                    className: "pricingtable-type",
                    children: "/Month"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "pricingtable-features",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Graphic Design "
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Web Design"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "UI/UX"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "HTML/CSS"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "SEO Marketing"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Business Analysis"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "pricingtable-footer",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/pricing-table-2",
                  className: "btn btn-primary gradient shadow rounded-xl",
                  children: "Start Now"
                })
              })]
            })
          })
        })]
      })
    })
  });
}

/* harmony default export */ var pricingTable_2 = (PricingTable2);
;// CONCATENATED MODULE: ./element/pricing-2.js







function Pricing2() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "content-inner-2",
      style: {
        "backgroundImage": "url(images/background/bg16.png)",
        "backgroundSize": "cover",
        "backgroundPosition": "top center",
        "backgroundRepeat": "no-repeat"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "section-head style-3 text-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: "sub-title bgl-primary m-b15 text-primary",
            children: "San Diego Website Design & Development"
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "title",
            children: "Choose A Plan That\u2019s right For You"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "toggle-tabs",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "monthly",
            children: "Monthly"
          }), /*#__PURE__*/jsx_runtime_.jsx(Toggle, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "yearly",
            children: "Yearly"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(pricingTable_2, {})]
      })
    })
  });
}

/* harmony default export */ var pricing_2 = (Pricing2);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "simple-react-lightbox"
var external_simple_react_lightbox_namespaceObject = require("simple-react-lightbox");;
var external_simple_react_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_simple_react_lightbox_namespaceObject);
;// CONCATENATED MODULE: ./component/portfolio-2.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import Image1 from "images/projects/grid/pic1";





function Portfolio2() {
  const portfolio = [{
    title: "Software Landing Page Design",
    category: ["all", "web_design", "eCommerce", "web_development"],
    link: "https://monche.net",
    img: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: "/images/projects/monche.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Jhone Doe"
  }, {
    title: "Software Landing Page Design",
    category: ["all", "web_development", "ecommerce"],
    img: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: "/images/projects/shoes.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Jhone Doe"
  }, {
    title: "Software Landing Page Design",
    category: ["all", "web_design", "seo"],
    img: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: "/images/projects/pic3.jpg",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Jhone Doe"
  }, {
    title: "Software Landing Page Design",
    category: ["all", "web_design", "branding"],
    img: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: "/images/projects/pic4.jpg",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Jhone Doe"
  }, {
    title: "Software Landing Page Design",
    category: ["all", "mobile_app", "seo"],
    img: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: "/images/projects/pic5.jpg",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Jhone Doe"
  }, {
    title: "Software Landing Page Design",
    category: ["all", "web_design", "branding"],
    img: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: "/images/projects/pic6.jpg",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Jhone Doe"
  }];
  const {
    0: filter,
    1: setFilter
  } = (0,external_react_.useState)("all");
  const {
    0: projects,
    1: setProjects
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    setProjects(portfolio);
  }, []);
  (0,external_react_.useEffect)(() => {
    setProjects([]);
    const filtered = portfolio.map(p => _objectSpread(_objectSpread({}, p), {}, {
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "site-filters style-2 clearfix center m-b40",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "filters",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: `btn ${filter === "all" ? "active" : ""}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            active: "all",
            onClick: () => setFilter("all"),
            children: "All"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: `btn ${filter === "web_design" ? "active" : ""}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            active: "web_design",
            onClick: () => setFilter("web_design"),
            children: "Web Design"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: `btn ${filter === "web_development" ? "active" : ""}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            active: "web_development",
            onClick: () => setFilter("web_development"),
            children: "Web Development"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: `btn ${filter === "eCommerce" ? "active" : ""}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            active: "eCommerce",
            onClick: () => setFilter("eCommerce"),
            children: "Ecommerce"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: `btn ${filter === "mobile_app" ? "active" : ""}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            active: "mobile_app",
            onClick: () => setFilter("mobile_app"),
            children: "Mobile App"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: `btn ${filter === "seo" ? "active" : ""}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            active: "seo",
            onClick: () => setFilter("seo"),
            children: "SEO"
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((external_simple_react_lightbox_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_simple_react_lightbox_namespaceObject.SRLWrapper, {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "clearfix",
          children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
            id: "masonry",
            className: "row",
            "data-column-width": "3",
            children: projects.map(item => item.filtered === true ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp",
                "data-wow-duration": "2s",
                "data-wow-delay": "0.1s",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  style: {
                    cursor: "pointer"
                  },
                  className: "dlab-box  style-2 m-b30",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "dlab-media ",
                    children: item.img
                  })
                }), item.link ? /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "btn btn-primary align-items-center justify-content-center d-flex gradient shadow rounded-xl mb-5",
                  href: item.link,
                  children: "Live Site"
                }) : null]
              })
            }) : "")
          })
        })
      })
    })]
  });
}

/* harmony default export */ var portfolio_2 = (Portfolio2);
;// CONCATENATED MODULE: ./element/Projects-2.js





function Projects2() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "content-inner-2",
      style: {
        "backgroundImage": "url(images/background/bg17.png)",
        "backgroundSize": "cover",
        "backgroundPosition": "top center",
        "backgroundRepeat": "no-repeat"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "section-head style-3 text-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: "sub-title text-primary bgl-primary m-b15",
            children: "PORTFOLIO"
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "title",
            children: "Take A Look At Our Latest Work"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(portfolio_2, {})]
      })
    })
  });
}

/* harmony default export */ var Projects_2 = (Projects2);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./element/service-2.js






function Service2() {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)("p2");
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "content-inner-2",
      style: {
        "backgroundImage": "url(images/background/bg2.png)"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row icon-wraper-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "section-head style-3 wow fadeInUp",
              "data-wow-duration": "2s",
              "data-wow-delay": "0.2s",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                className: "sub-title text-primary bgl-primary m-b15",
                children: "OUR SERVICES"
              }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "title m-t10",
                children: "We Are Providing Digital Services"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `${open === "p1" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`,
              onMouseOver: () => setOpen("p1"),
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-bx-sm radius bgl-primary",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "icon-cell",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "flaticon-office"
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "wraper-effect"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                  className: "dlab-title m-b15",
                  children: "Content creation"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Great content is likely to be shared, which can help with link building. But for purely SEO purposes, content is what search engines need to determine how relevant your website is to a specific keyword or keyphrase."
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `${open === "p2" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`,
              onMouseOver: () => setOpen("p2"),
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-bx-sm radius bgl-primary",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "icon-cell",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "flaticon-pie-charts"
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "wraper-effect"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                  className: "dlab-title m-b15",
                  children: "Web Development"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis."
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `${open === "p3" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`,
              onMouseOver: () => setOpen("p3"),
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-bx-sm radius bgl-primary",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "icon-cell",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "flaticon-dollar"
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "wraper-effect"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                  className: "dlab-title m-b15",
                  children: "Web Solution"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis."
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `${open === "p4" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`,
              onMouseOver: () => setOpen("p4"),
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-bx-sm radius bgl-primary",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "icon-cell",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "flaticon-line-graph"
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "wraper-effect"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                  className: "dlab-title m-b15",
                  children: "SEO & Marketing"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Get ranked on search engines, improve your rankings, optimize your website to perform better, assist you with creating content, and much more. Every SEO expert and company is a little different in what they offer, how much they charge, and what results they guarantee for their clients."
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `${open === "p5" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`,
              onMouseOver: () => setOpen("p5"),
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-bx-sm radius bgl-primary",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "icon-cell",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "flaticon-help"
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "wraper-effect"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                  className: "dlab-title m-b15",
                  children: "Growth Tracking"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis."
                })]
              })]
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ var service_2 = (Service2);
;// CONCATENATED MODULE: ./element/slider-2.js



function Slider2() {
  return (
    /*#__PURE__*/
    // <!-- Slider -->
    (0,jsx_runtime_.jsxs)("div", {
      className: "banner-two gradient",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "banner-inner",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "img1 move-2",
            src: "images/main-slider/slider2/pic3.png",
            alt: ""
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row align-items-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-6",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "banner-content text-white",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  className: "wow fadeInUp sub-title bgl-light text-white",
                  "data-wow-delay": "0.2s",
                  style: {
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp"
                  },
                  children: "We are The Best"
                }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
                  className: "wow fadeInUp m-b20",
                  "data-wow-delay": "1s",
                  style: {
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp"
                  },
                  children: "San Diego Web Development Company & Local Seo Experts"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  className: "wow fadeInUp m-b30",
                  "data-wow-delay": "1.5s",
                  style: {
                    visibility: "visible",
                    animationDelay: "1.5s",
                    animationName: "fadeInUp"
                  },
                  children: ["Extrordinary web development company with a team of unique talents. From Logo Design to Digital Marketing.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Based out of San Diego, California"]
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/about-us-2",
                  className: "wow fadeInUp btn btn-light text-primary shadow rounded-xl",
                  "data-wow-delay": "2s",
                  style: {
                    visibility: "visible",
                    animationDelay: "2s",
                    animationName: "fadeInUp"
                  },
                  children: "Learn More"
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "img2 move-2 ",
            src: "images/pattern/pattern5.png",
            alt: ""
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "img2 move-2",
            src: "images/pattern/icon-bx/orange.png",
            alt: ""
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "img3 move-2",
            src: "images/pattern/pattern6.png",
            alt: ""
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "dz-media",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          style: {
            opacity: ".78"
          },
          src: "images/adi.jpg",
          alt: ""
        })
      })]
    })
  );
}

/* harmony default export */ var slider_2 = (Slider2);
// EXTERNAL MODULE: ./element/testimonial-2.js + 1 modules
var testimonial_2 = __webpack_require__(6187);
// EXTERNAL MODULE: ./layout/footer-2.js
var footer_2 = __webpack_require__(366);
// EXTERNAL MODULE: ./layout/header-2.js
var header_2 = __webpack_require__(6463);
;// CONCATENATED MODULE: ./pages/index.js















 // import "../css/skin/skin-1.css";

function Index2() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(header_2/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "page-content bg-white",
      children: [/*#__PURE__*/jsx_runtime_.jsx(slider_2, {}), /*#__PURE__*/jsx_runtime_.jsx(service_2, {}), /*#__PURE__*/jsx_runtime_.jsx(aboutUs_2/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(counter2/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(our_services_2/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Projects_2, {}), /*#__PURE__*/jsx_runtime_.jsx(pricing_2, {}), /*#__PURE__*/jsx_runtime_.jsx(testimonial_2/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(blog_2/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(clients_2/* default */.Z, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(footer_2/* default */.Z, {})]
  });
}

/* harmony default export */ var pages = (Index2);

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 1577:
/***/ (function(module) {

"use strict";
module.exports = require("react-countup");;

/***/ }),

/***/ 9080:
/***/ (function(module) {

"use strict";
module.exports = require("react-slick");;

/***/ }),

/***/ 4253:
/***/ (function(module) {

"use strict";
module.exports = require("react-visibility-sensor");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,675,140,366,496,2,190], function() { return __webpack_exec__(8312); });
module.exports = __webpack_exports__;

})();