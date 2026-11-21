import{r as u}from"./index.DBy5LfQW.js";var x={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w;function E(){if(w)return p;w=1;var h=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function c(m,t,s){var o=null;if(s!==void 0&&(o=""+s),t.key!==void 0&&(o=""+t.key),"key"in t){s={};for(var e in t)e!=="key"&&(s[e]=t[e])}else s=t;return t=s.ref,{$$typeof:h,type:m,key:o,ref:t!==void 0?t:null,props:s}}return p.Fragment=a,p.jsx=c,p.jsxs=c,p}var f;function b(){return f||(f=1,x.exports=E()),x.exports}var r=b();/**
 * @license @tabler/icons-react v3.48.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var R={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.48.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(h,a,c,m)=>{const t=u.forwardRef(({color:s="currentColor",size:o=24,stroke:e=2,title:n,className:l,children:i,...k},j)=>u.createElement("svg",{ref:j,...R[h],width:o,height:o,className:["tabler-icon",`tabler-icon-${a}`,l].filter(Boolean).join(" "),strokeWidth:e,stroke:s,...k},[n&&u.createElement("title",{key:"svg-title"},n),...m.map(([y,g])=>u.createElement(y,g)),...Array.isArray(i)?i:[i]]));return t.displayName=`${c}`,t};/**
 * @license @tabler/icons-react v3.48.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]],A=v("outline","chevron-down","ChevronDown",_);/**
 * @license @tabler/icons-react v3.48.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]],N=v("outline","download","Download",C),q={version:"V2.5"},d={version:q.version,channel:"正式版",github:"https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases/tag/V2.5",history:"https://pan.quark.cn/s/a221d02a4c99",clouds:{quark:"https://pan.quark.cn/s/389f95c11e67",baidu:"https://pan.baidu.com/s/1hTTkcV3mN-8Pm-y_2ci9Yw?pwd=v4ua",xunlei:"https://pan.xunlei.com/s/VP6xmKaEeBoEGwjevMpCgG4xA1?pwd=4ksn"}},D={release:{title:`${d.version} ${d.channel}`,description:"安装版与免安装版，按需选择一种下载。",button:`下载 ${d.version}`,sources:[{name:"夸克网盘",note:"",url:d.clouds.quark},{name:"迅雷网盘",note:"",url:d.clouds.xunlei},{name:"百度网盘",note:"",url:d.clouds.baidu},{name:"GitHub Releases",note:"",url:d.github}]},history:{title:"历史版本",description:"如需兼容旧环境或回退，可在这里下载历史版本。",button:"查看历史版本",sources:[{name:"夸克网盘",note:"",url:d.history}]}};function S({type:h}){const a=D[h],[c,m]=u.useState(0),t=a.sources[c],s=a.sources.length>1,o=u.useRef(null);return u.useEffect(()=>{if(!s)return;const e=n=>{o.current?.contains(n.target)||o.current?.removeAttribute("open")};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[s]),r.jsxs("article",{className:`download-card download-card--${h}`,"data-download-card":!0,children:[r.jsxs("div",{className:"download-card__head",children:[r.jsx("h3",{children:a.title}),r.jsx("p",{children:a.description})]}),s&&r.jsxs("div",{className:"download-select",children:[r.jsx("span",{children:"下载来源"}),r.jsxs("details",{className:"source-picker",ref:o,onKeyDown:e=>{e.key==="Escape"&&(o.current.removeAttribute("open"),o.current.querySelector("summary").focus())},children:[r.jsxs("summary",{"aria-label":`${a.title} 下载来源：${t.name}`,children:[r.jsx("span",{children:t.name}),t.note&&r.jsx("small",{children:t.note}),r.jsx(A,{size:18,"aria-hidden":"true"})]}),r.jsx("div",{className:"source-options",role:"group","aria-label":"选择下载来源",onKeyDown:e=>{const n=[...e.currentTarget.querySelectorAll("a")],l=n.indexOf(document.activeElement);let i;e.key==="ArrowDown"&&(i=(l+1)%n.length),e.key==="ArrowUp"&&(i=(l-1+n.length)%n.length),e.key==="Home"&&(i=0),e.key==="End"&&(i=n.length-1),i!==void 0&&(e.preventDefault(),n[i].focus())},children:a.sources.map((e,n)=>r.jsxs("a",{href:e.url,target:"_blank",rel:"noreferrer","aria-current":n===c?"true":void 0,onClick:l=>{l.ctrlKey||l.metaKey||l.shiftKey||l.altKey||(l.preventDefault(),m(n),o.current.removeAttribute("open"),o.current.querySelector("summary").focus())},children:[r.jsx("span",{children:e.name}),e.note&&r.jsx("small",{children:e.note}),r.jsx("span",{className:"source-check","aria-hidden":"true","data-selected":n===c})]},e.name))})]})]}),r.jsxs("a",{className:"download-button",href:t.url,target:"_blank",rel:"noreferrer","data-download-link":!0,children:[r.jsxs("span",{className:"download-button__label",children:[r.jsx("span",{children:a.button}),r.jsx("small",{"data-source-name":!0,children:t.name})]}),r.jsx(N,{size:20,"aria-hidden":"true"})]})]})}export{S as default};
