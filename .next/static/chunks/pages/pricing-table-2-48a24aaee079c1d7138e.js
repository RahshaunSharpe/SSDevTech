(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{6071:function(e,i,n){"use strict";var r=n(3848),a=n(9448);i.default=void 0;var l=a(n(7294)),s=n(1689),c=n(2441),t=n(5749),o={};function d(e,i,n,r){if(e&&(0,s.isLocalURL)(i)){e.prefetch(i,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;o[i+"%"+n+(a?"%"+a:"")]=!0}}var u=function(e){var i=!1!==e.prefetch,n=(0,c.useRouter)(),a=n&&n.asPath||"/",u=l.default.useMemo((function(){var i=(0,s.resolveHref)(a,e.href,!0),n=r(i,2),l=n[0],c=n[1];return{href:l,as:e.as?(0,s.resolveHref)(a,e.as):c||l}}),[a,e.href,e.as]),h=u.href,p=u.as,f=e.children,m=e.replace,x=e.shallow,j=e.scroll,b=e.locale;"string"===typeof f&&(f=l.default.createElement("a",null,f));var g=l.Children.only(f),v=g&&"object"===typeof g&&g.ref,N=(0,t.useIntersection)({rootMargin:"200px"}),y=r(N,2),w=y[0],S=y[1],k=l.default.useCallback((function(e){w(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,w]);(0,l.useEffect)((function(){var e=S&&i&&(0,s.isLocalURL)(h),r="undefined"!==typeof b?b:n&&n.locale,a=o[h+"%"+p+(r?"%"+r:"")];e&&!a&&d(n,h,p,{locale:r})}),[p,h,S,b,i,n]);var M={ref:k,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,i,n,r,a,l,c,t){("A"!==e.currentTarget.nodeName||!function(e){var i=e.currentTarget.target;return i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),i[a?"replace":"push"](n,r,{shallow:l,locale:t,scroll:c}))}(e,n,h,p,m,x,j,b)},onMouseEnter:function(e){(0,s.isLocalURL)(h)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),d(n,h,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var E="undefined"!==typeof b?b:n&&n.locale,O=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(p,E,n&&n.locales,n&&n.domainLocales);M.href=O||(0,s.addBasePath)((0,s.addLocale)(p,E,n&&n.defaultLocale))}return l.default.cloneElement(g,M)};i.default=u},5749:function(e,i,n){"use strict";var r=n(3848);i.__esModule=!0,i.useIntersection=function(e){var i=e.rootMargin,n=e.disabled||!s,t=(0,a.useRef)(),o=(0,a.useState)(!1),d=r(o,2),u=d[0],h=d[1],p=(0,a.useCallback)((function(e){t.current&&(t.current(),t.current=void 0),n||u||e&&e.tagName&&(t.current=function(e,i,n){var r=function(e){var i=e.rootMargin||"",n=c.get(i);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var i=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;i&&n&&i(n)}))}),e);return c.set(i,n={id:i,observer:a,elements:r}),n}(n),a=r.id,l=r.observer,s=r.elements;return s.set(e,i),l.observe(e),function(){s.delete(e),l.unobserve(e),0===s.size&&(l.disconnect(),c.delete(a))}}(e,(function(e){return e&&h(e)}),{rootMargin:i}))}),[n,i,u]);return(0,a.useEffect)((function(){if(!s&&!u){var e=(0,l.requestIdleCallback)((function(){return h(!0)}));return function(){return(0,l.cancelIdleCallback)(e)}}}),[u]),[p,u]};var a=n(7294),l=n(8391),s="undefined"!==typeof IntersectionObserver;var c=new Map},8507:function(e,i,n){"use strict";n.r(i);var r=n(5893),a=n(7294),l=n(366),s=n(6463),c=n(1664);i.default=function(){var e=(0,a.useState)("p2"),i=e[0],n=e[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsxs)("div",{className:"page-content bg-white",children:[(0,r.jsx)("div",{className:"dlab-bnr-inr style-2 overlay-gradient-dark",style:{backgroundImage:"url(images/banner/bnr1.jpg)"},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"dlab-bnr-inr-entry",children:[(0,r.jsx)("h1",{children:"San Diego Web Design, Web Development, & SEO Strategist "}),(0,r.jsx)("nav",{"aria-label":"breadcrumb",className:"breadcrumb-row",children:(0,r.jsxs)("ul",{className:"breadcrumb",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(c.default,{href:"/",children:(0,r.jsx)("a",{children:"Home"})})}),(0,r.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Pricing Table"})]})})]})})}),(0,r.jsx)("section",{className:"content-inner",style:{backgroundImage:"url(images/background/bg2.png)"},children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h1",{style:{paddingBottom:"2rem"},children:"Web Development & Web Design Basline Pricing"}),(0,r.jsx)("div",{className:"pricingtable-row",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-4 col-md-6 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.2s",children:(0,r.jsx)("div",{className:"".concat("p1"===i?"pricingtable-wrapper style-2 m-b30 active":"pricingtable-wrapper style-2 m-b30"),onMouseOver:function(){return n("p1")},children:(0,r.jsxs)("div",{className:"pricingtable-inner",children:[(0,r.jsx)("div",{className:"pricingtable-title",children:(0,r.jsx)("h3",{children:"Basic Plan"})}),(0,r.jsx)("div",{className:"icon-bx-sm radius bgl-primary",children:(0,r.jsx)("div",{className:"icon-cell",children:(0,r.jsx)("i",{className:"flaticon-paper-plane"})})}),(0,r.jsxs)("div",{className:"pricingtable-price",children:[(0,r.jsx)("h1",{style:{color:"lightgreen",fontSize:"45px"},children:"$428"}),(0,r.jsxs)("h2",{style:{fontSize:"20px",fontWeight:"600"},className:"pricingtable-bx",children:["$49",(0,r.jsx)("small",{className:"pricingtable-type",children:"/Month"})]})]}),(0,r.jsxs)("ul",{className:"pricingtable-features",children:[(0,r.jsx)("li",{children:"Domain Name"}),(0,r.jsx)("li",{children:"2 Staff accounts"}),(0,r.jsx)("li",{children:"Appointment Booking"}),(0,r.jsx)("li",{children:"Order Pickup & Shipping"}),(0,r.jsx)("li",{children:"Web Application /  CMS Website"}),(0,r.jsx)("li",{children:"Free maintenance / Site Support"}),(0,r.jsx)("li",{children:"1 Year Hosting (add a year for $100)"})]}),(0,r.jsx)("div",{className:"pricingtable-footer",children:(0,r.jsx)(c.default,{href:"/contact-us-2",children:(0,r.jsx)("a",{className:"btn btn-primary gradient shadow rounded-xl",children:"Start Now"})})})]})})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-6 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.4s",children:(0,r.jsx)("div",{className:"".concat("p2"===i?"pricingtable-wrapper style-2 m-b30 active":"pricingtable-wrapper style-2 m-b30"),onMouseOver:function(){return n("p2")},children:(0,r.jsxs)("div",{className:"pricingtable-inner",children:[(0,r.jsx)("div",{className:"pricingtable-title",children:(0,r.jsx)("h3",{children:"Standart Plan"})}),(0,r.jsx)("div",{className:"icon-bx-sm radius bgl-primary",children:(0,r.jsx)("div",{className:"icon-cell",children:(0,r.jsx)("i",{className:"flaticon-air-mail"})})}),(0,r.jsxs)("div",{className:"pricingtable-price",children:[(0,r.jsx)("h1",{style:{color:"lightgreen",fontSize:"45px"},children:"$728"}),(0,r.jsxs)("h2",{style:{fontSize:"20px",fontWeight:"600"},className:"pricingtable-bx",children:["$99",(0,r.jsx)("small",{className:"pricingtable-type",children:"/Month"})]})]}),(0,r.jsxs)("ul",{className:"pricingtable-features",children:[(0,r.jsx)("li",{children:"Domain Name"}),(0,r.jsx)("li",{children:"5 Staff Accounts"}),(0,r.jsx)("li",{children:"Appointment Booking"}),(0,r.jsx)("li",{children:"Web Application"}),(0,r.jsx)("li",{children:"SEO Optimization"}),(0,r.jsx)("li",{children:"Custom from scratch Design"}),(0,r.jsx)("li",{children:"Order Pickup & Shipping "}),(0,r.jsx)("li",{children:"Advertisment & Marketing"}),(0,r.jsx)("li",{children:"Free maintenance / Site Support"}),(0,r.jsx)("li",{children:"Food Order Pickup & Delivery + Tracking"}),(0,r.jsx)("li",{children:"1 year Hosting (add another year $150)"})]}),(0,r.jsx)("div",{className:"pricingtable-footer",children:(0,r.jsx)(c.default,{href:"/contact-us-2",children:(0,r.jsx)("a",{className:"btn btn-primary gradient shadow rounded-xl",children:"Start Now"})})})]})})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-6 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.6s",children:(0,r.jsx)("div",{className:"".concat("p3"===i?"pricingtable-wrapper style-2 m-b30 active":"pricingtable-wrapper style-2 m-b30"),onMouseOver:function(){return n("p3")},children:(0,r.jsxs)("div",{className:"pricingtable-inner",children:[(0,r.jsx)("div",{className:"pricingtable-title",children:(0,r.jsx)("h3",{children:"Premium Plan"})}),(0,r.jsx)("div",{className:"icon-bx-sm radius bgl-primary",children:(0,r.jsx)("div",{className:"icon-cell",children:(0,r.jsx)("i",{className:"flaticon-startup"})})}),(0,r.jsxs)("div",{className:"pricingtable-price",children:[(0,r.jsx)("h1",{style:{color:"lightgreen",fontSize:"45px"},children:"$1500"}),(0,r.jsxs)("h2",{style:{fontSize:"20px",fontWeight:"600"},className:"pricingtable-bx",children:["$83",(0,r.jsx)("small",{className:"pricingtable-type",children:"/Month"})]})]}),(0,r.jsxs)("ul",{className:"pricingtable-features",children:[(0,r.jsx)("li",{children:"Domain Name"}),(0,r.jsx)("li",{children:" Up to 15 Staff Accounts"}),(0,r.jsx)("li",{children:"Unlimited Users"}),(0,r.jsx)("li",{children:"Web Application"}),(0,r.jsx)("li",{children:"Custom Database"}),(0,r.jsx)("li",{children:"Custom from scratch Design"}),(0,r.jsx)("li",{children:"Logo Creation"}),(0,r.jsx)("li",{children:"SEO Optimization"}),(0,r.jsx)("li",{children:"Professional Phtography"}),(0,r.jsx)("li",{children:"Advertisment & Marketing"}),(0,r.jsx)("li",{children:"Full Stack Mobile Applications"}),(0,r.jsx)("li",{children:"Free maintenance / Site Support"}),(0,r.jsx)("li",{children:"1 year Hosting (add another year $150)"})]}),(0,r.jsx)("div",{className:"pricingtable-footer",children:(0,r.jsx)(c.default,{href:"/contact-us-2",children:(0,r.jsx)("a",{className:"btn btn-primary gradient shadow rounded-xl",children:"Start Now"})})})]})})})]})})]})})]}),(0,r.jsx)(l.Z,{})]})}},8037:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing-table-2",function(){return n(8507)}])},1664:function(e,i,n){e.exports=n(6071)}},function(e){e.O(0,[695,774,888,179],(function(){return i=8037,e(e.s=i);var i}));var i=e.O();_N_E=i}]);