(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{5919:(e,t,r)=>{Promise.resolve().then(r.bind(r,1330)),Promise.resolve().then(r.t.bind(r,6918,23)),Promise.resolve().then(r.t.bind(r,7599,23)),Promise.resolve().then(r.bind(r,6571)),Promise.resolve().then(r.bind(r,4717)),Promise.resolve().then(r.bind(r,3272)),Promise.resolve().then(r.bind(r,901))},6046:(e,t,r)=>{"use strict";var n=r(6658);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},8173:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(306),o=r(5155),u=n._(r(2115)),l=r(180),a=r(1394),s=r(4116),i=r(4445),c=r(5353),f=r(2170),d=r(9544);function p(e,t,r){"undefined"!=typeof window&&(async()=>e.prefetch(t,r))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}r(2363);let g=u.default.forwardRef(function(e,t){let r,n;let{href:l,as:g,children:m,prefetch:b=null,passHref:y,replace:v,shallow:j,scroll:P,onClick:x,onMouseEnter:E,onTouchStart:_,legacyBehavior:w=!1,...O}=e;r=m,w&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let S=u.default.useContext(a.AppRouterContext),k=!1!==b,C=null===b?i.PrefetchKind.AUTO:i.PrefetchKind.FULL,{href:M,as:N}=u.default.useMemo(()=>{let e=h(l);return{href:e,as:g?h(g):e}},[l,g]),I=u.default.useRef(M),A=u.default.useRef(N);w&&(n=u.default.Children.only(r));let R=w?n&&"object"==typeof n&&n.ref:t,[T,L,U]=(0,s.useIntersection)({rootMargin:"200px"}),F=u.default.useCallback(e=>{(A.current!==N||I.current!==M)&&(U(),A.current=N,I.current=M),T(e)},[N,M,U,T]),K=(0,c.useMergedRef)(F,R);u.default.useEffect(()=>{S&&L&&k&&p(S,M,{kind:C})},[N,M,L,k,S,C]);let q={ref:K,onClick(e){w||"function"!=typeof x||x(e),w&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,o,l,a){let{nodeName:s}=e.currentTarget;"A"===s.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),u.default.startTransition(()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,S,M,N,v,j,P)},onMouseEnter(e){w||"function"!=typeof E||E(e),w&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&k&&p(S,M,{kind:C})},onTouchStart:function(e){w||"function"!=typeof _||_(e),w&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&k&&p(S,M,{kind:C})}};return(0,f.isAbsoluteUrl)(N)?q.href=N:w&&!y&&("a"!==n.type||"href"in n.props)||(q.href=(0,d.addBasePath)(N)),w?u.default.cloneElement(n,q):(0,o.jsx)("a",{...O,...q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(2115),o=r(8571),u="function"==typeof IntersectionObserver,l=new Map,a=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,i=s||!u,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(u){if(i||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},a.push(r),l.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2115);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=u(e,n),o.current=u(t,n))}:e||t,[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},180:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return a},urlObjectKeys:function(){return l}});let n=r(9955)._(r(4156)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:r}=e,u=e.protocol||"",l=e.pathname||"",a=e.hash||"",s=e.query||"",i=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?i=t+e.host:r&&(i=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(i+=":"+e.port)),s&&"object"==typeof s&&(s=String(n.urlQueryToSearchParams(s)));let c=e.search||s&&"?"+s||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==i?(i="//"+(i||""),l&&"/"!==l[0]&&(l="/"+l)):i||(i=""),a&&"#"!==a[0]&&(a="#"+a),c&&"?"!==c[0]&&(c="?"+c),""+u+i+(l=l.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+a}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function a(e){return u(e)}},4156:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return u},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},2170:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return y},MissingStaticPage:function(){return b},NormalizeError:function(){return g},PageNotFoundError:function(){return m},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return s},getLocationOrigin:function(){return l},getURL:function(){return a},isAbsoluteUrl:function(){return u},isResSent:function(){return i},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function a(){let{href:e}=window.location,t=l();return e.substring(t.length)}function s(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function i(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&i(r))return n;if(!n)throw Error('"'+s(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class g extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class b extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class y extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},1330:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var n=r(5155),o=r(2115),u=r(6046);let l=()=>{let{push:e,...t}=(0,u.useRouter)(),r=(0,u.useSearchParams)();return{...t,push:t=>{let{pathname:n,query:o}=t;o||(o={});let u=r.get("o");u&&(o.o=u);let l=r.get("r");l&&(o.r=l);let a=new URLSearchParams(o).toString();e("".concat(n,"?").concat(a))}}};function a(e){let{onReady:t}=e,r=l(),n=(0,u.usePathname)(),a=async()=>{try{t()}catch(e){console.error("Error fetching data:",e),r.push({pathname:"/error",query:{cd:"fetch-error"}})}};return(0,o.useEffect)(()=>{document.cookie.split("; ").find(e=>e.startsWith("auth_token="))||"/login"===n||r.replace("/login")},[n]),(0,o.useEffect)(()=>{(async()=>{await a()})().then()},[]),null}function s(e){let{children:t}=e,[r,u]=(0,o.useState)(!1);return(0,n.jsxs)(o.Suspense,{children:[(0,n.jsx)(n.Fragment,{children:r&&t}),(0,n.jsx)(a,{onReady:()=>{u(!0)}})]})}},6571:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var n=r(5155),o=r(2115),u=r(4492);function l(){let e=(0,u.A)((0,o.useCallback)(e=>e.alert,[])),{hideAlert:t}=u.A.getState();return e?(0,n.jsx)("div",{id:"alert",children:(0,n.jsxs)("div",{className:"box",children:[(0,n.jsx)("div",{className:"message",children:e.message}),(0,n.jsx)("div",{className:"buttons",children:e.button&&e.button.length>0?e.button.map((e,t)=>(0,n.jsx)("button",{className:"on"===e.type?"on":"off",style:e.rate?{flex:e.rate}:{flex:1},onClick:e.callback,children:e.text},t)):(0,n.jsx)("button",{className:"on",onClick:t,children:"확인"})})]})}):null}},4717:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var n=r(5155);r(2115);let o=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("footer",{id:"footer",children:["Copyright \xa9 2005 Kaisa. All Rights Reserved. v1.0.0",(0,n.jsx)("br",{}),"Email : 7083620@hanmail.net"]})})},3272:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var n=r(5155),o=r(2115),u=r(8173),l=r.n(u),a=r(6046);function s(){let e=(0,a.usePathname)();e&&e.match("/blog")&&(e="/blog");let[t,r]=(0,o.useState)(!1),[u,s]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{r(!0);let e=()=>{window.scrollY>=109?s(!0):s(!1)};return window.addEventListener("scroll",e,!0),window.removeEventListener("scroll",e)},[]),t&&(0,n.jsx)("div",{id:"menu",className:u?"fixed":"",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{className:"/works/"===e?"on":"",children:(0,n.jsx)(l(),{href:"/works/",children:"Works"})}),(0,n.jsx)("li",{className:"/illustrator/"===e?"on":"",children:(0,n.jsx)(l(),{href:"/illustrator/",children:"Illustrator"})})]})})}function i(){return(0,n.jsxs)("header",{id:"header",children:[(0,n.jsx)("h1",{children:(0,n.jsx)(l(),{href:"/",children:"111"})}),(0,n.jsx)(s,{})]})}},901:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var n=r(5155),o=r(2115),u=r(9742);function l(){return(0,u.A)((0,o.useCallback)(e=>e.loading,[]))?(0,n.jsx)("div",{id:"loading",children:(0,n.jsx)("div",{className:"icon"})}):null}},4492:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(9827).v)(e=>({alert:null,error:!1,showAlert:t=>{e(()=>({alert:t}))},hideAlert:()=>{e(()=>({alert:null}))},showError:()=>{e(()=>({error:!0}))},hideError:()=>{e(()=>({error:!1}))}}))},9742:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(9827).v)((e,t)=>({loading:!1,target:"",startLoading:t=>{e(()=>({loading:!0,target:t&&t.target?t.target:""}))},stopLoading:()=>{e(()=>({loading:!1,initLoading:!1,target:""}))}}))},6918:()=>{},7599:()=>{},9827:(e,t,r)=>{"use strict";r.d(t,{v:()=>s});var n=r(2115);let o=e=>{let t;let r=new Set,n=(e,n)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=n?n:"object"!=typeof o||null===o)?o:Object.assign({},t,o),r.forEach(r=>r(t,e))}},o=()=>t,u={setState:n,getState:o,getInitialState:()=>l,subscribe:e=>(r.add(e),()=>r.delete(e))},l=t=e(n,o,u);return u},u=e=>e?o(e):o,l=e=>e,a=e=>{let t=u(e),r=e=>(function(e,t=l){let r=n.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return n.useDebugValue(r),r})(t,e);return Object.assign(r,t),r},s=e=>e?a(e):a}},e=>{var t=t=>e(e.s=t);e.O(0,[208,441,517,358],()=>t(5919)),_N_E=e.O()}]);