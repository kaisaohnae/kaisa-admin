(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{5098:(e,t,r)=>{Promise.resolve().then(r.bind(r,301)),Promise.resolve().then(r.t.bind(r,6918,23)),Promise.resolve().then(r.t.bind(r,7599,23)),Promise.resolve().then(r.bind(r,6571)),Promise.resolve().then(r.bind(r,4717)),Promise.resolve().then(r.bind(r,901))},6046:(e,t,r)=>{"use strict";var s=r(6658);r.o(s,"usePathname")&&r.d(t,{usePathname:function(){return s.usePathname}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}}),r.o(s,"useSearchParams")&&r.d(t,{useSearchParams:function(){return s.useSearchParams}})},301:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var s=r(5155),n=r(2115),a=r(7631),l=r(6046);function i(e){let{onReady:t}=e,r=(0,a.r)(),s=(0,l.usePathname)(),i=async()=>{try{t()}catch(e){console.error("Error fetching data:",e),r.push({pathname:"/error",query:{cd:"fetch-error"}})}};return(0,n.useEffect)(()=>{document.cookie.split("; ").find(e=>e.startsWith("auth_token="))||"/login"===s||r.replace("/login")},[s]),(0,n.useEffect)(()=>{(async()=>{await i()})().then()},[]),null}function o(e){let{children:t}=e,[r,a]=(0,n.useState)(!1);return(0,s.jsxs)(n.Suspense,{children:[(0,s.jsx)(s.Fragment,{children:r&&t}),(0,s.jsx)(i,{onReady:()=>{a(!0)}})]})}},6571:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(5155),n=r(2115),a=r(4492);function l(){let e=(0,a.A)((0,n.useCallback)(e=>e.alert,[])),{hideAlert:t}=a.A.getState();return e?(0,s.jsx)("div",{id:"alert",children:(0,s.jsxs)("div",{className:"box",children:[(0,s.jsx)("div",{className:"message",children:e.message}),(0,s.jsx)("div",{className:"buttons",children:e.button&&e.button.length>0?e.button.map((e,t)=>(0,s.jsx)("button",{className:"on"===e.type?"on":"off",style:e.rate?{flex:e.rate}:{flex:1},onClick:e.callback,children:e.text},t)):(0,s.jsx)("button",{className:"on",onClick:t,children:"확인"})})]})}):null}},7631:(e,t,r)=>{"use strict";r.d(t,{r:()=>n});var s=r(6046);let n=()=>{let{push:e,...t}=(0,s.useRouter)(),r=(0,s.useSearchParams)();return{...t,push:t=>{let{pathname:s,query:n}=t;n||(n={});let a=r.get("o");a&&(n.o=a);let l=r.get("r");l&&(n.r=l);let i=new URLSearchParams(n).toString();e("".concat(s,"?").concat(i))}}}},4717:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var s=r(5155);r(2115);let n=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("footer",{id:"footer",children:["Copyright \xa9 2005 Kaisa. All Rights Reserved. v1.0.0",(0,s.jsx)("br",{}),"Email : 7083620@hanmail.net"]})})},901:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(5155),n=r(2115),a=r(9742);function l(){return(0,a.A)((0,n.useCallback)(e=>e.loading,[]))?(0,s.jsx)("div",{id:"loading",children:(0,s.jsx)("div",{className:"icon"})}):null}},4492:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(9827).v)(e=>({alert:null,error:!1,showAlert:t=>{e(()=>({alert:t}))},hideAlert:()=>{e(()=>({alert:null}))},showError:()=>{e(()=>({error:!0}))},hideError:()=>{e(()=>({error:!1}))}}))},9742:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(9827).v)((e,t)=>({loading:!1,target:"",startLoading:t=>{e(()=>({loading:!0,target:t&&t.target?t.target:""}))},stopLoading:()=>{e(()=>({loading:!1,initLoading:!1,target:""}))}}))},6918:()=>{},7599:()=>{},9827:(e,t,r)=>{"use strict";r.d(t,{v:()=>o});var s=r(2115);let n=e=>{let t;let r=new Set,s=(e,s)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=s?s:"object"!=typeof n||null===n)?n:Object.assign({},t,n),r.forEach(r=>r(t,e))}},n=()=>t,a={setState:s,getState:n,getInitialState:()=>l,subscribe:e=>(r.add(e),()=>r.delete(e))},l=t=e(s,n,a);return a},a=e=>e?n(e):n,l=e=>e,i=e=>{let t=a(e),r=e=>(function(e,t=l){let r=s.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return s.useDebugValue(r),r})(t,e);return Object.assign(r,t),r},o=e=>e?i(e):i}},e=>{var t=t=>e(e.s=t);e.O(0,[208,441,517,358],()=>t(5098)),_N_E=e.O()}]);