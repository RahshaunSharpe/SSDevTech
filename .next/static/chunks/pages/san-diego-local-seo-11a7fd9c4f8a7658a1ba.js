(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[868],{8344:function(e,a,i){"use strict";var s=i(5893),n=i(7294);a.Z=function(){var e=(0,n.useState)(0),a=e[0],i=e[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"dlab-accordion accordion-sm",id:"accordionFaq",defaultActiveKey:"0",children:[{title:"Why is SEO important?",text:"Search engine optimization brings organic traffic to your site. Users trust search engines, and achieving a top spot in search engine rankings signals to searchers that your site is a credible source. The higher you rank in results pages, the more clicks and traffic your site will generate. SEO also improves user experience, making it more likely for customers to become repeat buyers.",bg:"primary"},{title:"How Search Engines Work ?",text:"The fundamental aim of search engines is to satisfy their users. They want to provide the best results when a user searches for something.  SEO is Google\u2019s way of determining which sites deserve to rank highly for each query entered into its search engine. Without modern SEO, it would be extremely simple to manipulate the search results so that the site with the most links or the most pages\u2014all easily generated by software\u2014consistently ranked #1.",bg:"info"},{title:"What can our SEO services do ?",text:"Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",bg:"success"}].map((function(e,n){return(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("div",{eventKey:"".concat(n),className:"card-header",onClick:function(){return i(a===n?-1:n)},children:(0,s.jsx)("h5",{className:"dlab-title",children:(0,s.jsxs)("a",{href:"#",className:"".concat(a===n?"":"collapsed"),onClick:function(){return i(a===n?-1:n)},children:[" ",e.title]})})}),(0,s.jsx)("div",{className:"".concat(a===n?"collapsed show":"collapsed"),eventKey:"".concat(n),onClick:function(){return i(a===n?-1:n)},children:(0,s.jsx)("div",{className:"card-body",children:(0,s.jsx)("p",{className:"m-b0",children:e.text})})})]},n)}))})})}},6071:function(e,a,i){"use strict";var s=i(3848),n=i(9448);a.default=void 0;var r=n(i(7294)),t=i(1689),c=i(2441),l=i(5749),o={};function d(e,a,i,s){if(e&&(0,t.isLocalURL)(a)){e.prefetch(a,i,s).catch((function(e){0}));var n=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;o[a+"%"+i+(n?"%"+n:"")]=!0}}var u=function(e){var a=!1!==e.prefetch,i=(0,c.useRouter)(),n=i&&i.asPath||"/",u=r.default.useMemo((function(){var a=(0,t.resolveHref)(n,e.href,!0),i=s(a,2),r=i[0],c=i[1];return{href:r,as:e.as?(0,t.resolveHref)(n,e.as):c||r}}),[n,e.href,e.as]),h=u.href,m=u.as,f=e.children,p=e.replace,x=e.shallow,g=e.scroll,b=e.locale;"string"===typeof f&&(f=r.default.createElement("a",null,f));var v=r.Children.only(f),j=v&&"object"===typeof v&&v.ref,w=(0,l.useIntersection)({rootMargin:"200px"}),N=s(w,2),y=N[0],S=N[1],k=r.default.useCallback((function(e){y(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,y]);(0,r.useEffect)((function(){var e=S&&a&&(0,t.isLocalURL)(h),s="undefined"!==typeof b?b:i&&i.locale,n=o[h+"%"+m+(s?"%"+s:"")];e&&!n&&d(i,h,m,{locale:s})}),[m,h,S,b,a,i]);var O={ref:k,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,a,i,s,n,r,c,l){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,t.isLocalURL)(i))&&(e.preventDefault(),null==c&&(c=s.indexOf("#")<0),a[n?"replace":"push"](i,s,{shallow:r,locale:l,scroll:c}))}(e,i,h,m,p,x,g,b)},onMouseEnter:function(e){(0,t.isLocalURL)(h)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),d(i,h,m,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var E="undefined"!==typeof b?b:i&&i.locale,I=i&&i.isLocaleDomain&&(0,t.getDomainLocale)(m,E,i&&i.locales,i&&i.domainLocales);O.href=I||(0,t.addBasePath)((0,t.addLocale)(m,E,i&&i.defaultLocale))}return r.default.cloneElement(v,O)};a.default=u},5749:function(e,a,i){"use strict";var s=i(3848);a.__esModule=!0,a.useIntersection=function(e){var a=e.rootMargin,i=e.disabled||!t,l=(0,n.useRef)(),o=(0,n.useState)(!1),d=s(o,2),u=d[0],h=d[1],m=(0,n.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),i||u||e&&e.tagName&&(l.current=function(e,a,i){var s=function(e){var a=e.rootMargin||"",i=c.get(a);if(i)return i;var s=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var a=s.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;a&&i&&a(i)}))}),e);return c.set(a,i={id:a,observer:n,elements:s}),i}(i),n=s.id,r=s.observer,t=s.elements;return t.set(e,a),r.observe(e),function(){t.delete(e),r.unobserve(e),0===t.size&&(r.disconnect(),c.delete(n))}}(e,(function(e){return e&&h(e)}),{rootMargin:a}))}),[i,a,u]);return(0,n.useEffect)((function(){if(!t&&!u){var e=(0,r.requestIdleCallback)((function(){return h(!0)}));return function(){return(0,r.cancelIdleCallback)(e)}}}),[u]),[m,u]};var n=i(7294),r=i(8391),t="undefined"!==typeof IntersectionObserver;var c=new Map},7906:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return u}});var s=i(5893),n=i(7294),r=i(366),t=i(6463),c=i(1664),l=i(8344);var o=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:" text-center page-content bg-white",children:(0,s.jsx)("section",{className:"content-inner",style:{backgroundImage:"url(images/background/bg2.png)"},children:(0,s.jsx)("div",{className:" d-flex align-items-center justify-content-center container",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:" wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.2s",children:(0,s.jsx)(l.Z,{})})})})})})})};var d=function(){var e=(0,n.useState)("p2"),a=e[0],i=e[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"content-inner-2",style:{backgroundImage:"url(images/background/bg2.png)",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-lg-5 wow fadeInLeft","data-wow-duration":"2s","data-wow-delay":"0.2s",children:[(0,s.jsxs)("div",{className:"section-head style-3 mb-4",children:[(0,s.jsx)("h6",{className:"sub-title text-primary bgl-primary m-b15",children:"OUR SERVICES"}),(0,s.jsx)("h2",{className:"title",children:"San Diego Local Seo"})]}),(0,s.jsx)("p",{children:"Building your business into a powerhouse in the San Diego Area is no easy task, but with the right approach to your digital marketing, you can guarantee a steady stream of relevant web traffic to your front door."}),(0,s.jsx)("p",{children:"SSDevTech is a leading San Diego SEO agency, offering full service search engine optimization (SEO) marketing that will boost your rankings with a guaranteed increase in organic traffic. "}),(0,s.jsx)("p",{className:"m-b30",children:"If your goal is to get placement at the top of the world's most popular search engines, Proleadsoft will get you there with our 360 approach to SEO."})]}),(0,s.jsxs)("div",{className:"col-lg-7",children:[(0,s.jsxs)("div",{className:"".concat("p1"===a?"icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active":"icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"),onMouseOver:function(){return i("p1")},children:[(0,s.jsx)("div",{className:"icon-bx-sm radius",children:(0,s.jsx)("a",{href:"#",className:"icon-cell",children:(0,s.jsx)("i",{className:"flaticon-idea"})})}),(0,s.jsx)("div",{className:"wraper-effect"}),(0,s.jsxs)("div",{className:"icon-content",children:[(0,s.jsx)("h4",{className:"dlab-title m-b15",children:"Idea & Analysis Gathering"}),(0,s.jsx)("p",{children:"Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue mattis varius. Suspendisse rhoncus nisl."})]})]}),(0,s.jsxs)("div",{className:"".concat("p2"===a?"icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight active":"icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight"),onMouseOver:function(){return i("p2")},children:[(0,s.jsx)("div",{className:"icon-bx-sm radius",children:(0,s.jsx)("a",{href:"#",className:"icon-cell",children:(0,s.jsx)("i",{className:"flaticon-coding"})})}),(0,s.jsx)("div",{className:"wraper-effect"}),(0,s.jsxs)("div",{className:"icon-content",children:[(0,s.jsx)("h4",{className:"dlab-title m-b15",children:"Design & Developing"}),(0,s.jsx)("p",{children:"Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue mattis varius. Suspendisse rhoncus nisl."})]})]}),(0,s.jsxs)("div",{className:"".concat("p3"===a?"icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active":"icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"),onMouseOver:function(){return i("p3")},children:[(0,s.jsx)("div",{className:"icon-bx-sm radius",children:(0,s.jsx)("a",{href:"#",className:"icon-cell",children:(0,s.jsx)("i",{className:"flaticon-rocket"})})}),(0,s.jsx)("div",{className:"wraper-effect"}),(0,s.jsxs)("div",{className:"icon-content",children:[(0,s.jsx)("h4",{className:"dlab-title m-b15",children:"Testing & Lunching"}),(0,s.jsx)("p",{children:"Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue mattis varius. Suspendisse rhoncus nisl."})]})]})]})]})})})})};var u=function(){var e=(0,n.useState)("p2"),a=e[0],i=e[1];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.Z,{}),(0,s.jsxs)("div",{className:"page-content bg-white",children:[(0,s.jsx)("div",{className:"dlab-bnr-inr style-2 overlay-gradient-dark",style:{backgroundImage:"url(images/banner/bnr2.jpg)"},children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"dlab-bnr-inr-entry",children:[(0,s.jsx)("h1",{children:"San Diego Web Design, Web Development, & SEO Strategist "}),(0,s.jsx)("nav",{"aria-label":"breadcrumb",className:"breadcrumb-row",children:(0,s.jsxs)("ul",{className:"breadcrumb",children:[(0,s.jsx)("li",{className:"breadcrumb-item",children:(0,s.jsx)(c.default,{href:"/",children:(0,s.jsx)("a",{children:"Home"})})}),(0,s.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"SEO Packages"})]})})]})})}),(0,s.jsx)(o,{}),(0,s.jsx)(d,{}),(0,s.jsx)("section",{className:"content-inner",style:{backgroundImage:"url(images/background/bg2.png)",marginTop:"-5rem"},children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("h1",{style:{paddingBottom:"2rem"},children:"Seo Price Plans"}),(0,s.jsx)("div",{className:"pricingtable-row",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-lg-4 col-md-6 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.2s",children:(0,s.jsx)("div",{className:"".concat("p1"===a?"pricingtable-wrapper style-2 m-b30 active":"pricingtable-wrapper style-2 m-b30"),onMouseOver:function(){return i("p1")},children:(0,s.jsxs)("div",{className:"pricingtable-inner",children:[(0,s.jsx)("div",{className:"pricingtable-title",children:(0,s.jsx)("h3",{children:"Gold Plan"})}),(0,s.jsx)("div",{className:"icon-bx-sm radius bgl-primary",children:(0,s.jsx)("div",{className:"icon-cell",children:(0,s.jsx)("i",{className:"flaticon-paper-plane"})})}),(0,s.jsx)("div",{className:"pricingtable-price",children:(0,s.jsxs)("h2",{style:{color:"#fd6b3e",fontSize:"35px"},className:"pricingtable-bx",children:["$650",(0,s.jsx)("small",{className:"pricingtable-type",children:"/Month"})]})}),(0,s.jsxs)("ul",{className:"pricingtable-features",children:[(0,s.jsx)("li",{children:"Link Building "}),(0,s.jsx)("li",{children:"On-Page SEO"}),(0,s.jsx)("li",{children:"Off-Page SEO"}),(0,s.jsx)("li",{children:"Keyword Research"}),(0,s.jsx)("li",{children:"Competitor Analysis"}),(0,s.jsx)("li",{children:"Custom SEO Strategy"}),(0,s.jsx)("li",{children:"Speed Optimization"})]}),(0,s.jsx)("div",{className:"pricingtable-footer",children:(0,s.jsx)(c.default,{href:"#",children:(0,s.jsx)("a",{className:"btn btn-primary gradient shadow rounded-xl",children:"Contact to Begin "})})})]})})}),(0,s.jsx)("div",{className:"col-lg-4 col-md-6 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.4s",children:(0,s.jsx)("div",{className:"".concat("p2"===a?"pricingtable-wrapper style-2 m-b30 active":"pricingtable-wrapper style-2 m-b30"),onMouseOver:function(){return i("p2")},children:(0,s.jsxs)("div",{className:"pricingtable-inner",children:[(0,s.jsx)("div",{className:"pricingtable-title",children:(0,s.jsx)("h3",{children:"Platinum Plan"})}),(0,s.jsx)("div",{className:"icon-bx-sm radius bgl-primary",children:(0,s.jsx)("div",{className:"icon-cell",children:(0,s.jsx)("i",{className:"flaticon-air-mail"})})}),(0,s.jsx)("div",{className:"pricingtable-price",children:(0,s.jsxs)("h2",{style:{color:"#fd6b3e",fontSize:"35px"},className:"pricingtable-bx",children:["$850",(0,s.jsx)("small",{className:"pricingtable-type",children:"/Month"})]})}),(0,s.jsxs)("ul",{className:"pricingtable-features",children:[(0,s.jsx)("li",{children:"Link Building "}),(0,s.jsx)("li",{children:"On-Page SEO"}),(0,s.jsx)("li",{children:"Off-Page SEO"}),(0,s.jsx)("li",{children:"Keyword Research"}),(0,s.jsx)("li",{children:"Competitor Analysis"}),(0,s.jsx)("li",{children:"Custom SEO Strategy"}),(0,s.jsx)("li",{children:"Speed Optimization"})]}),(0,s.jsx)("div",{className:"pricingtable-footer",children:(0,s.jsx)(c.default,{href:"#",children:(0,s.jsx)("a",{className:"btn btn-primary gradient shadow rounded-xl",children:"Start Now"})})})]})})}),(0,s.jsx)("div",{className:"col-lg-4 col-md-6 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.6s",children:(0,s.jsx)("div",{className:"".concat("p3"===a?"pricingtable-wrapper style-2 m-b30 active":"pricingtable-wrapper style-2 m-b30"),onMouseOver:function(){return i("p3")},children:(0,s.jsxs)("div",{className:"pricingtable-inner",children:[(0,s.jsx)("div",{className:"pricingtable-title",children:(0,s.jsx)("h3",{children:"Elite Plan"})}),(0,s.jsx)("div",{className:"icon-bx-sm radius bgl-primary",children:(0,s.jsx)("div",{className:"icon-cell",children:(0,s.jsx)("i",{className:"flaticon-startup"})})}),(0,s.jsx)("div",{className:"pricingtable-price",children:(0,s.jsxs)("h2",{style:{color:"#fd6b3e",fontSize:"35px"},className:"pricingtable-bx",children:["$1050",(0,s.jsx)("small",{className:"pricingtable-type",children:"/Month"})]})}),(0,s.jsxs)("ul",{className:"pricingtable-features",children:[(0,s.jsx)("li",{children:"Link Building "}),(0,s.jsx)("li",{children:"On-Page SEO"}),(0,s.jsx)("li",{children:"Off-Page SEO"}),(0,s.jsx)("li",{children:"Keyword Research"}),(0,s.jsx)("li",{children:"Competitor Analysis"}),(0,s.jsx)("li",{children:"Custom SEO Strategy"}),(0,s.jsx)("li",{children:"Speed Optimization"})]}),(0,s.jsx)("div",{className:"pricingtable-footer",children:(0,s.jsx)(c.default,{href:"#",children:(0,s.jsx)("a",{className:"btn btn-primary gradient shadow rounded-xl",children:"Start Now"})})})]})})})]})})]})})]}),(0,s.jsx)(r.Z,{})]})}},1867:function(e,a,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/san-diego-local-seo",function(){return i(7906)}])},1664:function(e,a,i){e.exports=i(6071)}},function(e){e.O(0,[695,774,888,179],(function(){return a=1867,e(e.s=a);var a}));var a=e.O();_N_E=a}]);