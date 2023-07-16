import{m,f as s,h as f,j as k,g as T,q as V,H as S,w,C as E,o as H,k as Q,at as $,F as P,I as j,au as D,av as F,r as I,aw as K,s as U,ad as A}from"./index.1eab7e9b.js";import{u as C,a as M}from"./use-dark.880fe43f.js";var N=m({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const a=s(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>f("div",{class:a.value},k(t.default))}}),O=m({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const a=s(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>f("div",{class:a.value,role:"toolbar"},k(t.default))}}),W=m({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const a=s(()=>parseInt(e.lines,10)),u=s(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),o=s(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>f("div",{style:o.value,class:u.value},k(t.default))}}),G=m({name:"QList",props:{...C,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const a=T(),u=M(e,a.proxy.$q),o=s(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(u.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>f(e.tag,{class:o.value},k(t.default))}});function J(e,t,a){let u;function o(){u!==void 0&&(S.remove(u),u=void 0)}return V(()=>{e.value===!0&&o()}),{removeFromHistory:o,addToHistory(){u={condition:()=>a.value===!0,handler:t},S.add(u)}}}const X={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Y=["beforeShow","show","beforeHide","hide"];function Z({showing:e,canShow:t,hideOnRouteChange:a,handleShow:u,handleHide:o,processOnMount:h}){const y=T(),{props:i,emit:c,proxy:g}=y;let r;function v(l){e.value===!0?q(l):b(l)}function b(l){if(i.disable===!0||l!==void 0&&l.qAnchorHandled===!0||t!==void 0&&t(l)!==!0)return;const n=i["onUpdate:modelValue"]!==void 0;n===!0&&(c("update:modelValue",!0),r=l,Q(()=>{r===l&&(r=void 0)})),(i.modelValue===null||n===!1)&&d(l)}function d(l){e.value!==!0&&(e.value=!0,c("beforeShow",l),u!==void 0?u(l):c("show",l))}function q(l){if(i.disable===!0)return;const n=i["onUpdate:modelValue"]!==void 0;n===!0&&(c("update:modelValue",!1),r=l,Q(()=>{r===l&&(r=void 0)})),(i.modelValue===null||n===!1)&&B(l)}function B(l){e.value!==!1&&(e.value=!1,c("beforeHide",l),o!==void 0?o(l):c("hide",l))}function p(l){i.disable===!0&&l===!0?i["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):l===!0!==e.value&&(l===!0?d:B)(r)}w(()=>i.modelValue,p),a!==void 0&&E(y)===!0&&w(()=>g.$route.fullPath,()=>{a.value===!0&&e.value===!0&&q()}),h===!0&&H(()=>{p(i.modelValue)});const _={show:b,hide:q,toggle:v};return Object.assign(g,_),_}function ee(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,$(t))}}}function te(){let e=null;const t=T();function a(){e!==null&&(clearTimeout(e),e=null)}return P(a),V(a),{removeTimeout:a,registerTimeout(u,o){a(),j(t)===!1&&(e=setTimeout(u,o))}}}const L=["B","KB","MB","GB","TB","PB"];function ae(e){let t=0;for(;parseInt(e,10)>=1024&&t<L.length-1;)e/=1024,++t;return`${e.toFixed(1)}${L[t]}`}function le(e,t,a){return a<=t?t:Math.min(a,Math.max(t,e))}function ne(e,t,a){if(a<=t)return t;const u=a-t+1;let o=t+(e-t)%u;return o<t&&(o=u+o),o===0?0:o}var ue=m({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const a=s(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>f("div",{class:a.value},k(t.default))}}),oe=m({name:"QItem",props:{...C,...D,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:a}){const{proxy:{$q:u}}=T(),o=M(e,u),{hasLink:h,linkAttrs:y,linkClass:i,linkTag:c,navigateOnClick:g}=F(),r=I(null),v=I(null),b=s(()=>e.clickable===!0||h.value===!0||e.tag==="label"),d=s(()=>e.disable!==!0&&b.value===!0),q=s(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(h.value===!0&&e.active===null?i.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(d.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),B=s(()=>{if(e.insetLevel===void 0)return null;const n=u.lang.rtl===!0?"Right":"Left";return{["padding"+n]:16+e.insetLevel*56+"px"}});function p(n){d.value===!0&&(v.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===r.value?v.value.focus():document.activeElement===v.value&&r.value.focus()),g(n))}function _(n){if(d.value===!0&&K(n,13)===!0){U(n),n.qKeyEvent=!0;const x=new MouseEvent("click",n);x.qKeyEvent=!0,r.value.dispatchEvent(x)}a("keyup",n)}function l(){const n=A(t.default,[]);return d.value===!0&&n.unshift(f("div",{class:"q-focus-helper",tabindex:-1,ref:v})),n}return()=>{const n={ref:r,class:q.value,style:B.value,role:"listitem",onClick:p,onKeyup:_};return d.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,y.value)):b.value===!0&&(n["aria-disabled"]="true"),f(c.value,n,l())}}});export{ue as Q,Y as a,te as b,Z as c,J as d,le as e,ee as f,W as g,oe as h,O as i,N as j,G as k,ae as l,ne as n,X as u};