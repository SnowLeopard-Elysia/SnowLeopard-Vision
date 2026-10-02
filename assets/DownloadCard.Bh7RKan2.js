import{r as d}from"./index.DBy5LfQW.js";var p={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function E(){if(x)return h;x=1;var c=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function l(u,r,o){var e=null;if(o!==void 0&&(e=""+o),r.key!==void 0&&(e=""+r.key),"key"in r){o={};for(var n in r)n!=="key"&&(o[n]=r[n])}else o=r;return r=o.ref,{$$typeof:c,type:u,key:e,ref:r!==void 0?r:null,props:o}}return h.Fragment=a,h.jsx=l,h.jsxs=l,h}var w;function g(){return w||(w=1,p.exports=E()),p.exports}var t=g();/**
 * @license @tabler/icons-react v3.48.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var R={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.48.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(c,a,l,u)=>{const r=d.forwardRef(({color:o="currentColor",size:e=24,stroke:n=2,title:s,className:i,children:m,...k},v)=>d.createElement("svg",{ref:v,...R[c],width:e,height:e,className:["tabler-icon",`tabler-icon-${a}`,i].filter(Boolean).join(" "),strokeWidth:n,stroke:o,...k},[s&&d.createElement("title",{key:"svg-title"},s),...u.map(([j,y])=>d.createElement(j,y)),...Array.isArray(m)?m:[m]]));return r.displayName=`${l}`,r};/**
 * @license @tabler/icons-react v3.48.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]],b=f("outline","chevron-down","ChevronDown",_);/**
 * @license @tabler/icons-react v3.48.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]],A=f("outline","download","Download",N),C={release:{title:"V2.2 正式版",description:"国内用户建议使用迅雷、夸克、百度网盘下载。安装包与免安装压缩包根据需求选择一个即可。使用 VPN 的用户也可以通过 GitHub 下载。",button:"前往下载",sources:[{name:"夸克网盘",note:"推荐",url:"https://pan.quark.cn/s/fc3c5a92736e"},{name:"迅雷网盘",note:"",url:"https://pan.xunlei.com/s/VP2yty88OmHtTQK1hs7LufLEA1?pwd=rahf"},{name:"百度网盘",note:"",url:"https://pan.baidu.com/s/1-dinNzs8QYUK_eWudD8xTw?pwd=i92w"},{name:"GitHub Releases",note:"备用下载",url:"https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases/tag/V2.2"}]},history:{title:"历史版本",description:"如需旧版兼容或回退，可在这里获取 SnowLeopard Vision 以前发布的版本。",button:"查看历史版本",sources:[{name:"夸克网盘",note:"",url:"https://pan.quark.cn/s/081ef5247aca"}]}};function L({type:c}){const a=C[c],[l,u]=d.useState(0),r=a.sources[l],o=d.useRef(null);return d.useEffect(()=>{const e=n=>{o.current?.contains(n.target)||o.current?.removeAttribute("open")};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[]),t.jsxs("article",{className:`download-card download-card--${c}`,"data-download-card":!0,children:[t.jsxs("div",{className:"download-card__head",children:[t.jsx("h3",{children:a.title}),t.jsx("p",{children:a.description})]}),t.jsxs("div",{className:"download-select",children:[t.jsx("span",{children:"下载来源"}),t.jsxs("details",{className:"source-picker",ref:o,onKeyDown:e=>{e.key==="Escape"&&(o.current.removeAttribute("open"),o.current.querySelector("summary").focus())},children:[t.jsxs("summary",{"aria-label":`${a.title} 下载来源：${r.name}`,children:[t.jsx("span",{children:r.name}),r.note&&t.jsx("small",{children:r.note}),t.jsx(b,{size:18,"aria-hidden":"true"})]}),t.jsx("div",{className:"source-options",role:"group","aria-label":"选择下载来源",onKeyDown:e=>{const n=[...e.currentTarget.querySelectorAll("a")],s=n.indexOf(document.activeElement);let i;e.key==="ArrowDown"&&(i=(s+1)%n.length),e.key==="ArrowUp"&&(i=(s-1+n.length)%n.length),e.key==="Home"&&(i=0),e.key==="End"&&(i=n.length-1),i!==void 0&&(e.preventDefault(),n[i].focus())},children:a.sources.map((e,n)=>t.jsxs("a",{href:e.url,target:"_blank",rel:"noreferrer","aria-current":n===l?"true":void 0,onClick:s=>{s.ctrlKey||s.metaKey||s.shiftKey||s.altKey||(s.preventDefault(),u(n),o.current.removeAttribute("open"),o.current.querySelector("summary").focus())},children:[t.jsx("span",{children:e.name}),e.note&&t.jsx("small",{children:e.note}),t.jsx("span",{className:"source-check","aria-hidden":"true","data-selected":n===l})]},e.name))})]})]}),t.jsxs("a",{className:"download-button",href:r.url,target:"_blank",rel:"noreferrer","data-download-link":!0,children:[t.jsxs("span",{className:"download-button__label",children:[t.jsx("span",{children:a.button}),t.jsx("small",{"data-source-name":!0,children:r.name})]}),t.jsx(A,{size:20,"aria-hidden":"true"})]})]})}export{L as default};
