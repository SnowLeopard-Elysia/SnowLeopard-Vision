import{r as i}from"./index.DBy5LfQW.js";var h={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function y(){if(x)return p;x=1;var d=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function a(c,r,o){var e=null;if(o!==void 0&&(e=""+o),r.key!==void 0&&(e=""+r.key),"key"in r){o={};for(var n in r)n!=="key"&&(o[n]=r[n])}else o=r;return r=o.ref,{$$typeof:d,type:c,key:e,ref:r!==void 0?r:null,props:o}}return p.Fragment=s,p.jsx=a,p.jsxs=a,p}var w;function E(){return w||(w=1,h.exports=y()),h.exports}var t=E();/**
 * @license @tabler/icons-react v3.48.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var g={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.48.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(d,s,a,c)=>{const r=i.forwardRef(({color:o="currentColor",size:e=24,stroke:n=2,title:u,className:l,children:m,...v},k)=>i.createElement("svg",{ref:k,...g[d],width:e,height:e,className:["tabler-icon",`tabler-icon-${s}`,l].filter(Boolean).join(" "),strokeWidth:n,stroke:o,...v},[u&&i.createElement("title",{key:"svg-title"},u),...c.map(([j,b])=>i.createElement(j,b)),...Array.isArray(m)?m:[m]]));return r.displayName=`${a}`,r};/**
 * @license @tabler/icons-react v3.48.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]],_=f("outline","chevron-down","ChevronDown",R);/**
 * @license @tabler/icons-react v3.48.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]],N=f("outline","download","Download",A),C={release:{title:"V2.2 正式版",description:"国内用户建议使用迅雷、夸克、百度网盘下载。安装包与免安装压缩包根据需求选择一个即可。使用 VPN 的用户也可以通过 GitHub 下载。",button:"前往下载",sources:[{name:"夸克网盘",note:"推荐",url:"https://pan.quark.cn/s/b8e5c1927103"},{name:"迅雷网盘",note:"",url:"https://pan.xunlei.com/s/VP2ksOp7GTrAlEVfHLVV9nYJA1?pwd=6ib2"},{name:"百度网盘",note:"",url:"https://pan.baidu.com/s/13zT_MN7KdZKcjDZe3gMGeg?pwd=stbj"},{name:"GitHub Releases",note:"备用下载",url:"https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases/tag/V2.2"}]},history:{title:"历史版本",description:"如需旧版兼容或回退，可在这里获取 SnowLeopard Vision 以前发布的版本。",button:"查看历史版本",sources:[{name:"夸克网盘",note:"",url:"https://pan.quark.cn/s/081ef5247aca"}]}};function S({type:d}){const s=C[d],[a,c]=i.useState(0),r=s.sources[a],o=i.useRef(null);return i.useEffect(()=>{const e=n=>{o.current?.contains(n.target)||o.current?.removeAttribute("open")};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[]),t.jsxs("article",{className:`download-card download-card--${d}`,"data-download-card":!0,children:[t.jsxs("div",{className:"download-card__head",children:[t.jsx("h3",{children:s.title}),t.jsx("p",{children:s.description})]}),t.jsxs("div",{className:"download-select",children:[t.jsx("span",{children:"下载来源"}),t.jsxs("details",{className:"source-picker",ref:o,onKeyDown:e=>{e.key==="Escape"&&(o.current.removeAttribute("open"),o.current.querySelector("summary").focus())},children:[t.jsxs("summary",{"aria-label":`${s.title} 下载来源：${r.name}`,children:[t.jsx("span",{children:r.name}),r.note&&t.jsx("small",{children:r.note}),t.jsx(_,{size:18,"aria-hidden":"true"})]}),t.jsx("div",{className:"source-options",role:"group","aria-label":"选择下载来源",onKeyDown:e=>{const n=[...e.currentTarget.querySelectorAll("button")],u=n.indexOf(document.activeElement);let l;e.key==="ArrowDown"&&(l=(u+1)%n.length),e.key==="ArrowUp"&&(l=(u-1+n.length)%n.length),e.key==="Home"&&(l=0),e.key==="End"&&(l=n.length-1),l!==void 0&&(e.preventDefault(),n[l].focus())},children:s.sources.map((e,n)=>t.jsxs("button",{type:"button","aria-pressed":n===a,onClick:()=>{c(n),o.current.removeAttribute("open"),o.current.querySelector("summary").focus()},children:[t.jsx("span",{children:e.name}),e.note&&t.jsx("small",{children:e.note}),t.jsx("span",{className:"source-check","aria-hidden":"true","data-selected":n===a})]},e.name))})]})]}),t.jsxs("a",{className:"download-button",href:r.url,target:"_blank",rel:"noreferrer","data-download-link":!0,children:[t.jsxs("span",{className:"download-button__label",children:[t.jsx("span",{children:s.button}),t.jsx("small",{"data-source-name":!0,children:r.name})]}),t.jsx(N,{size:20,"aria-hidden":"true"})]})]})}export{S as default};
