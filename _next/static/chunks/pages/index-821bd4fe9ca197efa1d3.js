(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,r){"use strict";var t=r(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,l=(o=r(7294))&&o.__esModule?o:{default:o},i=r(1063),a=r(4651),s=r(7426);var c={};function u(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;c[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=a.useRouter(),f=l.default.useMemo((function(){var n=i.resolveHref(o,e.href,!0),r=t(n,2),l=r[0],a=r[1];return{href:l,as:e.as?i.resolveHref(o,e.as):a||l}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,x=e.shallow,j=e.scroll,y=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var g=(n=l.default.Children.only(h))&&"object"===typeof n&&n.ref,m=s.useIntersection({rootMargin:"200px"}),_=t(m,2),w=_[0],b=_[1],C=l.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);l.default.useEffect((function(){var e=b&&r&&i.isLocalURL(d),n="undefined"!==typeof y?y:o&&o.locale,t=c[d+"%"+p+(n?"%"+n:"")];e&&!t&&u(o,d,p,{locale:n})}),[p,d,b,y,r,o]);var M={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,l,a,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==a&&t.indexOf("#")>=0&&(a=!1),n[o?"replace":"push"](r,t,{shallow:l,locale:s,scroll:a}))}(e,o,d,p,v,x,j,y)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof y?y:o&&o.locale,E=o&&o.isLocaleDomain&&i.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);M.href=E||i.addBasePath(i.addLocale(p,k,o&&o.defaultLocale))}return l.default.cloneElement(n,M)};n.default=f},7426:function(e,n,r){"use strict";var t=r(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,s=o.useRef(),c=o.useState(!1),u=t(c,2),f=u[0],d=u[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=a.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return a.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,l=t.observer,i=t.elements;return i.set(e,n),l.observe(e),function(){i.delete(e),l.unobserve(e),0===i.size&&(l.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return o.useEffect((function(){if(!i&&!f){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=r(7294),l=r(3447),i="undefined"!==typeof IntersectionObserver;var a=new Map},2562:function(e,n,r){"use strict";r.r(n);var t=r(5893),o=(r(7294),r(1664));function l(){return(0,t.jsxs)("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34 26h-2v-1c0-6.627-5.373-12-12-12S8 18.374 8 25v1H6a1 1 0 01-1-1c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15a1 1 0 01-1 1z",fill:"url(#paint0_linear)"}),(0,t.jsx)("path",{d:"M27 25a7 7 0 00-14 0v1h2a1 1 0 001-1 4 4 0 018 0 1 1 0 001 1h2v-1z",fill:"url(#paint1_linear)"}),(0,t.jsx)("path",{d:"M30.999 25C30.999 18.925 26.075 14 20 14S9.001 18.926 9.001 25H9v1h3v-1a8 8 0 0116 0v1h3v-1h-.001z",fill:"url(#paint2_linear)"}),(0,t.jsxs)("defs",{children:[(0,t.jsxs)("linearGradient",{id:"paint0_linear",x1:5,y1:26,x2:35,y2:26,gradientUnits:"userSpaceOnUse",children:[(0,t.jsx)("stop",{stopColor:"#1877F2"}),(0,t.jsx)("stop",{offset:1,stopColor:"#04A4F4"})]}),(0,t.jsxs)("linearGradient",{id:"paint1_linear",x1:13,y1:26,x2:27,y2:26,gradientUnits:"userSpaceOnUse",children:[(0,t.jsx)("stop",{stopColor:"#F02849"}),(0,t.jsx)("stop",{offset:1,stopColor:"#F5533D"})]}),(0,t.jsxs)("linearGradient",{id:"paint2_linear",x1:9,y1:26,x2:31,y2:26,gradientUnits:"userSpaceOnUse",children:[(0,t.jsx)("stop",{stopColor:"#45BD62"}),(0,t.jsx)("stop",{offset:1,stopColor:"#2ABBA7"})]})]})]})}n.default=function(){return(0,t.jsx)("div",{style:{width:"100%",padding:"100px",alignContent:"center"},children:(0,t.jsxs)("header",{children:[(0,t.jsx)(l,{}),(0,t.jsx)("h1",{style:{margin:0},children:"Welcome to Plasmic!"}),(0,t.jsx)("h4",{children:(0,t.jsx)("a",{style:{color:"blue"},href:"https://www.plasmic.app/learn/",target:"_blank",rel:"noopener noreferrer",children:"Learn Plasmic"})}),(0,t.jsx)("h3",{children:"Your pages:"}),(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:(0,t.jsx)(o.default,{href:"/collections/summer-jewelry-picks-poc",children:(0,t.jsx)("a",{style:{color:"blue"},children:"SummerJewelryPicks - /collections/summer-jewelry-picks-poc"})})})}),(0,t.jsx)("p",{children:(0,t.jsx)("i",{children:"Note: Remember to remove this file if you introduce a Page component at the '/' path."})})]})})}},5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2562)}])},1664:function(e,n,r){e.exports=r(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);