(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[635],{83072:(e,t,a)=>{Promise.resolve().then(a.bind(a,98392))},98392:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var n=a(95155),s=a(12115),r=a(94215);a(89092),a(47764),a(31285),a(90910),a(7876).A.getState();let o={defaultProps:{rowHeaders:!0,columnSorting:!1,manualColumnResize:!0,comments:!0,autoWrapRow:!0,autoWrapCol:!0,height:"500px",width:"100%",licenseKey:"non-commercial-and-evaluation"},commonColumnNames:["mode"],commonColumns:[{data:"mode",type:"text",width:1,readOnly:!0,hidden:!0}],auditColumnNames:["등록자","등록일시","수정자","수정일시"],auditColumns:[{data:"creator",type:"text",width:100,readOnly:!0,editor:!1},{data:"createDt",type:"text",width:170,readOnly:!0,editor:!1},{data:"updater",type:"text",width:100,readOnly:!0,editor:!1},{data:"updateDt",type:"text",width:170,readOnly:!0,editor:!1}],hiddenColumns:e=>({columns:e,indicators:!0})};var i=a(2001);class l{async getDictionaryList(e){return(await (0,i.D)("/cr/get-dictionary-list",e||{})).data}async setDictionaryList(e){return(await (0,i.D)("/cr/set-dictionary-list",e||{})).data}}let d=new l,c=e=>{let{currentPage:t,lastPage:a,onPageChange:r}=e,o=(0,s.useMemo)(()=>{let e=10*Math.floor((t-1)/10)+1;return Array.from({length:Math.min(e+10-1,a)-e+1},(t,a)=>e+a)},[t,a]),i=e=>{e<1||e>a||r(e)};return(0,n.jsxs)("div",{className:"pagination",children:[(0,n.jsx)("span",{className:"icon first",onClick:()=>1!==t&&i(1),children:""}),(0,n.jsx)("span",{className:"icon pre",onClick:()=>1!==t&&i(t-1),children:""}),o.map(e=>(0,n.jsx)("span",{className:"page ".concat(e===t?"active":""),onClick:()=>i(e),children:e},e)),(0,n.jsx)("span",{className:"icon next",onClick:()=>t!==a&&i(t+1),children:""}),(0,n.jsx)("span",{className:"icon last",onClick:()=>t!==a&&i(a),children:""})]})};function u(){let[e,t]=(0,s.useState)({abb:"",updater:"",creator:"",startUpdateDt:null,endUpdateDt:null,createDt:null}),[a,i]=(0,s.useState)({list:[],audit:!1,totalCount:0,currentPage:1,lastPage:1}),l=(0,s.useRef)(null),u=(0,s.useRef)(null);(0,s.useEffect)(()=>{if(l.current){let e=new r.Ay(l.current,{data:a.list,colHeaders:[...o.commonColumnNames,"약어","한국어","영어","설명",...o.auditColumnNames],hiddenColumns:o.hiddenColumns([]),columns:[...o.commonColumns,{data:"abb",type:"text",readOnly:!0},{data:"korean",type:"text",width:150},{data:"english",type:"text",width:150},{data:"memo",type:"text",width:200},...o.auditColumns],afterSelectionEnd:function(e,t,a,n){u.current=e},...o.defaultProps});return()=>e.destroy()}},[]);let m=async()=>{try{let t=await d.getDictionaryList({...e,page:a.currentPage});i(e=>({...e,...t.data}))}catch(e){console.error(e)}};return(0,n.jsxs)("div",{children:[(0,n.jsxs)("form",{className:"search",onSubmit:e=>{e.preventDefault(),m()},children:[(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("legend",{children:"검색"}),(0,n.jsx)("input",{type:"text",value:e.abb,onChange:a=>t({...e,abb:a.target.value})})]}),(0,n.jsx)("button",{type:"submit",children:"검색"})]}),(0,n.jsx)("div",{ref:l,className:"grid-container"}),0===a.list.length&&(0,n.jsx)("div",{className:"no-list",children:"조회 내역이 없습니다."}),(0,n.jsx)(c,{currentPage:a.currentPage,lastPage:a.lastPage,onPageChange:e=>{i(t=>({...t,currentPage:e})),m()}})]})}},2001:(e,t,a)=>{"use strict";a.d(t,{D:()=>l});var n=a(82651);let{startLoading:s,stopLoading:r}=a(19742).A.getState(),o=n.A.create({timeout:1e4,baseURL:"https://ohnae8.mycafe24.com/api"});o.interceptors.request.use(e=>(s(),e),e=>(r(),console.log(e),Promise.reject())),o.interceptors.response.use(e=>{if(r(),200===e.status)return e;Promise.reject()},e=>{var t,a,n;r();let s=null===(t=e.response)||void 0===t?void 0:t.data;return((null===(a=e.response)||void 0===a?void 0:a.status)===401||(null===(n=e.response)||void 0===n?void 0:n.status)===403)&&(window.location.href="/login"),s&&s.message,Promise.reject()});var i=a(7876);let l=(e,t)=>{let a=i.A.getState();return o({url:e,data:JSON.stringify(t),method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+(a.token||"not-token")},withCredentials:!1})}},7876:(e,t,a)=>{"use strict";a.d(t,{A:()=>o,n:()=>r});var n=a(99827),s=a(60709);let r=(0,n.v)((0,s.Zr)((e,t)=>({active:!1,userInfo:[],codeList:[],menuList:[],token:null,loginSuccess:async t=>{try{e({userInfo:t.userInfo,codeList:t.codeList,menuList:t.menuList,token:t.token})}catch(e){console.error("Error fetching data from database:",e)}},loginFail:async()=>{},logout:async()=>{window.location.href="/login"},getUserInfo:()=>t().userInfo}),{name:"auth-storage"})),o=r},19742:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});let n=(0,a(99827).v)((e,t)=>({loading:!1,target:"",startLoading:t=>{e(()=>({loading:!0,target:t&&t.target?t.target:""}))},stopLoading:()=>{e(()=>({loading:!1,initLoading:!1,target:""}))}}))}},e=>{var t=t=>e(e.s=t);e.O(0,[21,4,49,98,784,586,774,613,921,441,517,358],()=>t(83072)),_N_E=e.O()}]);