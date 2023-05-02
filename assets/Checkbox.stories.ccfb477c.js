var z=Object.defineProperty;var i=(e,t)=>z(e,"name",{value:t,configurable:!0});import{r}from"./index.37ce327a.js";import{a as w,$ as B,c as A}from"./clsx.m.6a1bc4a7.js";import{r as W}from"./index.86049763.js";import{T as q}from"./Text.f6e0be52.js";import{j as p,F as g,a as F}from"./jsx-runtime.57e6f9ee.js";import{I as K,r as V}from"./IconBase.esm.2f7a1d4a.js";import"./iframe.4155de86.js";function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},y.apply(this,arguments)}i(y,"_extends$1");function X(e,t=[]){let n=[];function o(c,l){const u=r.exports.createContext(l),d=n.length;n=[...n,l];function a(f){const{scope:b,children:m,...x}=f,N=(b==null?void 0:b[e][d])||u,$=r.exports.useMemo(()=>x,Object.values(x));return r.exports.createElement(N.Provider,{value:$},m)}i(a,"Provider");function h(f,b){const m=(b==null?void 0:b[e][d])||u,x=r.exports.useContext(m);if(x)return x;if(l!==void 0)return l;throw new Error(`\`${f}\` must be used within \`${c}\``)}return i(h,"useContext"),a.displayName=c+"Provider",[a,h]}i(o,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const s=i(()=>{const c=n.map(l=>r.exports.createContext(l));return i(function(u){const d=(u==null?void 0:u[e])||c;return r.exports.useMemo(()=>({[`__scope${e}`]:{...u,[e]:d}}),[u,d])},"useScope")},"createScope");return s.scopeName=e,[o,Y(s,...t)]}i(X,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function Y(...e){const t=e[0];if(e.length===1)return t;const n=i(()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return i(function(c){const l=o.reduce((u,{useScope:d,scopeName:a})=>{const f=d(c)[`__scope${a}`];return{...u,...f}},{});return r.exports.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}i(Y,"$c512c27ab02ef895$var$composeContextScopes");function R(e,t,{checkForDefaultPrevented:n=!0}={}){return i(function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)},"handleEvent")}i(R,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function M(e){const t=r.exports.useRef(e);return r.exports.useEffect(()=>{t.current=e}),r.exports.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}i(M,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function H({prop:e,defaultProp:t,onChange:n=i(()=>{},"onChange")}){const[o,s]=Z({defaultProp:t,onChange:n}),c=e!==void 0,l=c?e:o,u=M(n),d=r.exports.useCallback(a=>{if(c){const f=typeof a=="function"?a(e):a;f!==e&&u(f)}else s(a)},[c,e,s,u]);return[l,d]}i(H,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Z({defaultProp:e,onChange:t}){const n=r.exports.useState(e),[o]=n,s=r.exports.useRef(o),c=M(t);return r.exports.useEffect(()=>{s.current!==o&&(c(o),s.current=o)},[o,s,c]),n}i(Z,"$71cd76cc60e0454e$var$useUncontrolledState");function G(e){const t=r.exports.useRef({value:e,previous:e});return r.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}i(G,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const P=Boolean(globalThis==null?void 0:globalThis.document)?r.exports.useLayoutEffect:()=>{};function J(e){const[t,n]=r.exports.useState(void 0);return P(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let l,u;if("borderBoxSize"in c){const d=c.borderBoxSize,a=Array.isArray(d)?d[0]:d;l=a.inlineSize,u=a.blockSize}else l=e.offsetWidth,u=e.offsetHeight;n({width:l,height:u})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}i(J,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function Q(e,t){return r.exports.useReducer((n,o)=>{const s=t[n][o];return s!=null?s:n},e)}i(Q,"$fe963b355347cc68$export$3e6543de14f8614f");const T=i(e=>{const{present:t,children:n}=e,o=ee(t),s=typeof n=="function"?n({present:o.isPresent}):r.exports.Children.only(n),c=w(o.ref,s.ref);return typeof n=="function"||o.isPresent?r.exports.cloneElement(s,{ref:c}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");T.displayName="Presence";function ee(e){const[t,n]=r.exports.useState(),o=r.exports.useRef({}),s=r.exports.useRef(e),c=r.exports.useRef("none"),l=e?"mounted":"unmounted",[u,d]=Q(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.exports.useEffect(()=>{const a=S(o.current);c.current=u==="mounted"?a:"none"},[u]),P(()=>{const a=o.current,h=s.current;if(h!==e){const b=c.current,m=S(a);e?d("MOUNT"):m==="none"||(a==null?void 0:a.display)==="none"?d("UNMOUNT"):d(h&&b!==m?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,d]),P(()=>{if(t){const a=i(f=>{const m=S(o.current).includes(f.animationName);f.target===t&&m&&W.exports.flushSync(()=>d("ANIMATION_END"))},"handleAnimationEnd"),h=i(f=>{f.target===t&&(c.current=S(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",a),t.addEventListener("animationend",a),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",a),t.removeEventListener("animationend",a)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:r.exports.useCallback(a=>{a&&(o.current=getComputedStyle(a)),n(a)},[])}}i(ee,"$921a889cee6df7e8$var$usePresence");function S(e){return(e==null?void 0:e.animationName)||"none"}i(S,"$921a889cee6df7e8$var$getAnimationName");function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},E.apply(this,arguments)}i(E,"_extends");const te=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],I=te.reduce((e,t)=>{const n=r.exports.forwardRef((o,s)=>{const{asChild:c,...l}=o,u=c?B:t;return r.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.exports.createElement(u,E({},l,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),L="Checkbox",[ne,Ce]=X(L),[oe,re]=ne(L),se=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:o,checked:s,defaultChecked:c,required:l,disabled:u,value:d="on",onCheckedChange:a,...h}=e,[f,b]=r.exports.useState(null),m=w(t,v=>b(v)),x=r.exports.useRef(!1),N=f?Boolean(f.closest("form")):!0,[$=!1,U]=H({prop:s,defaultProp:c,onChange:a});return r.exports.createElement(oe,{scope:n,state:$,disabled:u},r.exports.createElement(I.button,y({type:"button",role:"checkbox","aria-checked":k($)?"mixed":$,"aria-required":l,"data-state":j($),"data-disabled":u?"":void 0,disabled:u,value:d},h,{ref:m,onKeyDown:R(e.onKeyDown,v=>{v.key==="Enter"&&v.preventDefault()}),onClick:R(e.onClick,v=>{U(O=>k(O)?!0:!O),N&&(x.current=v.isPropagationStopped(),x.current||v.stopPropagation())})})),N&&r.exports.createElement(ie,{control:f,bubbles:!x.current,name:o,value:d,checked:$,required:l,disabled:u,style:{transform:"translateX(-100%)"}}))}),ce="CheckboxIndicator",ae=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:o,...s}=e,c=re(ce,n);return r.exports.createElement(T,{present:o||k(c.state)||c.state===!0},r.exports.createElement(I.span,y({"data-state":j(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),ie=i(e=>{const{control:t,checked:n,bubbles:o=!0,...s}=e,c=r.exports.useRef(null),l=G(n),u=J(t);return r.exports.useEffect(()=>{const d=c.current,a=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(a,"checked").set;if(l!==n&&f){const b=new Event("click",{bubbles:o});d.indeterminate=k(n),f.call(d,k(n)?!1:n),d.dispatchEvent(b)}},[l,n,o]),r.exports.createElement("input",y({type:"checkbox","aria-hidden":!0,defaultChecked:k(n)?!1:n},s,{tabIndex:-1,ref:c,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function k(e){return e==="indeterminate"}i(k,"$e698a72e93240346$var$isIndeterminate");function j(e){return k(e)?"indeterminate":e?"checked":"unchecked"}i(j,"$e698a72e93240346$var$getState");const ue=se,de=ae;var C=new Map;C.set("bold",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});C.set("duotone",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});C.set("fill",function(){return p(g,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});C.set("light",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});C.set("thin",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});C.set("regular",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var le=i(function(t,n){return V(t,n,C)},"renderPath"),D=r.exports.forwardRef(function(e,t){return p(K,{...Object.assign({ref:t},e,{renderPath:le})})});D.displayName="Check";const fe=D;function _(e){return F("div",{className:A("flex align-center gap-2",{"text-gray-200":e.disabled===!1,"text-gray-600":e.disabled===!0}),children:[p(ue,{"aria-label":"checkbox",className:"w-6 h-6 p-[2px] bg-gray-700 rounded",disabled:e.disabled,defaultChecked:e.checked,children:p(de,{asChild:!0,children:p(fe,{weight:"bold",className:A("h-5 w-5",{"text-green-500":e.disabled===!1,"text-gray-600":e.disabled===!0})})})}),p(q,{size:"sm",className:e.disabled?"text-gray-400":"text-gray-100",children:e.label})]})}i(_,"Checkbox");try{_.displayName="Checkbox",_.__docgenInfo={description:"",displayName:"Checkbox",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox.tsx#Checkbox"]={docgenInfo:_.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox.tsx#Checkbox"})}catch{}const ge={title:"Components/Checkbox",component:_,args:{disabled:!1,checked:!1,label:"label"},argTypes:{checked:{table:{disable:!0}}}},ye={},Ne={args:{disabled:!0,checked:!0}},Se=["Default","Disabled"];export{ye as Default,Ne as Disabled,Se as __namedExportsOrder,ge as default};
//# sourceMappingURL=Checkbox.stories.ccfb477c.js.map
