(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{9618:function(t,e,n){"use strict";n.r(e);var o=n(5893),r=n(5301),i=n.n(r);e.default=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i(),{smooth:!0,component:"HEllo"}),(0,o.jsx)("h1",{children:"Hello!"}),(0,o.jsx)("h2",{children:"Scroll down for the button to appear"}),(0,o.jsx)("p",{style:{marginTop:"150vh"},children:"bottom"})]})}},369:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test2",function(){return n(9618)}])},5301:function(t,e,n){"use strict";var o,r=n(7294),i=(o=r)&&"object"===typeof o&&"default"in o?o.default:o,c=function(){return(c=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};var l="styles_scroll-to-top__2A70v";!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!==typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}(".styles_scroll-to-top__2A70v {\n  background-color: white;\n  right: 40px;\n  bottom: 40px;\n  position: fixed;\n  z-index: 2;\n  cursor: pointer;\n  border-radius: 7px;\n  width: 40px;\n  height: 40px;\n  transition: opacity 1s ease-in-out;\n  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);\n  border: none;\n  outline: none;\n}\n\n.styles_scroll-to-top__2A70v:active {\n  transform: matrix(0.95, 0, 0, 0.95, 0, 0);\n}\n");t.exports=function(t){var e=t.top,n=void 0===e?20:e,o=t.className,s=void 0===o?l:o,a=t.color,u=void 0===a?"black":a,d=t.smooth,p=void 0!==d&&d,h=t.component,f=void 0===h?"":h,m=t.viewBox,v=void 0===m?"0 0 256 256":m,x=t.svgPath,y=void 0===x?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":x,b=t.width,w=void 0===b?"28":b,_=t.height,g=void 0===_?"28":_,E=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n}(t,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),O=r.useState(!1),j=O[0],N=O[1],T=function(){N(document.documentElement.scrollTop>n)};return r.useEffect((function(){return document.addEventListener("scroll",T),function(){return document.removeEventListener("scroll",T)}}),[]),i.createElement(i.Fragment,null,j&&i.createElement("button",c({className:s,onClick:function(){return function(t){void 0===t&&(t=!1),t?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}(p)}},E),f||i.createElement("svg",{width:w,height:g,fill:u,viewBox:v},i.createElement("path",{d:y}))))}}},function(t){t.O(0,[774,888,179],(function(){return e=369,t(t.s=e);var e}));var e=t.O();_N_E=e}]);