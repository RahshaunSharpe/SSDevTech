(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{8594:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,r=function(e){var t={};return function(i){return void 0===t[i]&&(t[i]=e(i)),t[i]}}((function(e){return n.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}))},6255:function(e,t,i){"use strict";var n=i(3848),r=i(3115),o=i(2426);t.default=function(e){var t=e.src,i=e.sizes,r=e.unoptimized,o=void 0!==r&&r,u=e.priority,p=void 0!==u&&u,h=e.loading,m=e.className,g=e.quality,y=e.width,v=e.height,w=e.objectFit,S=e.objectPosition,z=e.loader,T=void 0===z?A:z,E=e.placeholder,L=void 0===E?"empty":E,C=e.blurDataURL,R=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),P=i?"responsive":"intrinsic",I=!1;"unsized"in R?(I=Boolean(R.unsized),delete R.unsized):"layout"in R&&(R.layout&&(P=R.layout),delete R.layout);b||(L="empty");0;var O=!p&&("lazy"===h||"undefined"===typeof h);t&&t.startsWith("data:")&&(o=!0,O=!1);var D,M,q,_=(0,f.useIntersection)({rootMargin:"200px",disabled:!O}),j=n(_,2),B=j[0],U=j[1],H=!O||U,N=x(y),W=x(v),F=x(g),V=N&&W&&N*W<5e3,X="blur"===L&&!V,Y=(0,l.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:w,objectPosition:S},X?{backgroundSize:"cover",backgroundImage:'url("'.concat(C,'")')}:void 0);if("undefined"!==typeof N&&"undefined"!==typeof W&&"fill"!==P){var G=W/N,Z=isNaN(G)?"100%":"".concat(100*G,"%");"responsive"===P?(D={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},M={display:"block",boxSizing:"border-box",paddingTop:Z}):"intrinsic"===P?(D={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},M={boxSizing:"border-box",display:"block",maxWidth:"100%"},q='<svg width="'.concat(N,'" height="').concat(W,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===P&&(D={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:N,height:W})}else"undefined"===typeof N&&"undefined"===typeof W&&"fill"===P&&(D={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var K={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};H&&(K=k({src:t,unoptimized:o,layout:P,width:N,quality:F,sizes:i,loader:T}));I&&(D=void 0,M=void 0,Y=void 0);return s.default.createElement("div",{style:D},M?s.default.createElement("div",{style:M},q?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,d.toBase64)(q))}):null):null,!H&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},R,k({src:t,unoptimized:o,layout:P,width:N,quality:F,sizes:i,loader:T}),{src:t,decoding:"async",sizes:i,style:Y,className:m}))),s.default.createElement("img",Object.assign({},R,K,{decoding:"async",className:m,ref:function(e){B(e),function(e,t){"blur"===t&&e&&(e.complete?e.style.backgroundImage="none":e.onload=function(){e.style.backgroundImage="none"})}(e,L)},style:Y})),p?s.default.createElement(c.default,null,s.default.createElement("link",{key:"__nimg-"+K.src+K.srcSet+K.sizes,rel:"preload",as:"image",href:K.srcSet?void 0:K.src,imagesrcset:K.srcSet,imagesizes:K.sizes})):null)};var a=o(i(6169)),l=o(i(9566)),s=o(i(7294)),c=o(i(7947)),d=i(7239),u=i(5655),f=i(5749);var p=new Map([["imgix",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,o=["auto=format","fit=max","w="+n],a="";r&&o.push("q="+r);o.length&&(a="?"+o.join("&"));return"".concat(t).concat(S(i)).concat(a)}],["cloudinary",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(S(i))}],["akamai",function(e){var t=e.root,i=e.src,n=e.width;return"".concat(t).concat(S(i),"?imwidth=").concat(n)}],["default",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}]]),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",enableBlurryPlaceholder:!1}||u.imageConfigDefault,m=h.deviceSizes,g=h.imageSizes,y=h.loader,v=h.path,b=(h.domains,h.enableBlurryPlaceholder),w=[].concat(r(m),r(g));function k(e){var t=e.src,i=e.unoptimized,n=e.layout,o=e.width,a=e.quality,l=e.sizes,s=e.loader;if(i)return{src:t,srcSet:void 0,sizes:void 0};var c=function(e,t,i){if(i&&("fill"===t||"responsive"===t)){for(var n,o=/(^|\s)(1?\d?\d)vw/g,a=[];n=o.exec(i);n)a.push(parseInt(n[2]));if(a.length){var l=.01*Math.min.apply(Math,a);return{widths:w.filter((function(e){return e>=m[0]*l})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:m,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return w.find((function(t){return t>=e}))||w[w.length-1]})))),kind:"x"}}(o,n,l),d=c.widths,u=c.kind,f=d.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:d.map((function(e,i){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===u?e:i+1).concat(u)})).join(", "),src:s({src:t,quality:a,width:d[f]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t=p.get(y);if(t)return t((0,l.default)({root:v},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(y))}function S(e){return"/"===e[0]?e.slice(1):e}m.sort((function(e,t){return e-t})),w.sort((function(e,t){return e-t}))},7239:function(e,t){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},5655:function(e,t){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],enableBlurryPlaceholder:!1}},5675:function(e,t,i){e.exports=i(6255)},6169:function(e){e.exports=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}},4155:function(e){var t,i,n=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(i){try{return t.call(null,e,0)}catch(i){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:r}catch(e){t=r}try{i="function"===typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,s=[],c=!1,d=-1;function u(){c&&l&&(c=!1,l.length?s=l.concat(s):d=-1,s.length&&f())}function f(){if(!c){var e=a(u);c=!0;for(var t=s.length;t;){for(l=s,s=[];++d<t;)l&&l[d].run();d=-1,t=s.length}l=null,c=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];s.push(new p(e,t)),1!==s.length||c||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}}]);