import{f,m as $,r as c,w as E,q as M,h as s,T as O,j as D,a8 as F,ax as L,N as V,o as H,y as _,z as j,as as A,aq as U,an as W,B as y,A as b,O as Y,ao as N,Y as G,Q as J}from"./index.1eab7e9b.js";import{u as K,a as X,Q as Z}from"./use-quasar.30792f97.js";import"./use-dark.880fe43f.js";const p={ratio:[String,Number]};function ee(e,l){return f(()=>{const n=Number(e.ratio||(l!==void 0?l.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const te=16/9;var ae=$({name:"QImg",props:{...p,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:te},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:l,emit:n}){const m=c(e.initialRatio),u=ee(e,m);let a=null,i=!1;const r=[c(null),c(S())],o=c(0),d=c(!1),g=c(!1),P=f(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),k=f(()=>({width:e.width,height:e.height})),T=f(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),z=f(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));E(()=>C(),q);function C(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function S(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function q(t){a!==null&&(clearTimeout(a),a=null),g.value=!1,t===null?(d.value=!1,r[o.value^1].value=S()):d.value=!0,r[o.value].value=t}function Q({target:t}){i!==!0&&(a!==null&&(clearTimeout(a),a=null),m.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,w(t,1))}function w(t,v){i===!0||v===1e3||(t.complete===!0?x(t):a=setTimeout(()=>{a=null,w(t,v+1)},50))}function x(t){i!==!0&&(o.value=o.value^1,r[o.value].value=null,d.value=!1,g.value=!1,n("load",t.currentSrc||t.src))}function I(t){a!==null&&(clearTimeout(a),a=null),d.value=!1,g.value=!0,r[o.value].value=null,r[o.value^1].value=S(),n("error",t)}function B(t){const v=r[t].value,h={key:"img_"+t,class:T.value,style:z.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...v};return o.value===t?(h.class+=" q-img__image--waiting",Object.assign(h,{onLoad:Q,onError:I})):h.class+=" q-img__image--loaded",s("div",{class:"q-img__container absolute-full",key:"img"+t},s("img",h))}function R(){return d.value!==!0?s("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},D(l[g.value===!0?"error":"default"])):s("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},l.loading!==void 0?l.loading():e.noSpinner===!0?void 0:[s(F,{color:e.spinnerColor,size:e.spinnerSize})])}return q(C()),M(()=>{i=!0,a!==null&&(clearTimeout(a),a=null)}),()=>{const t=[];return u.value!==null&&t.push(s("div",{key:"filler",style:u.value})),g.value!==!0&&(r[0].value!==null&&t.push(B(0)),r[1].value!==null&&t.push(B(1))),t.push(s(O,{name:"q-transition--fade"},R)),s("div",{class:P.value,style:k.value,role:"img","aria-label":e.alt},t)}}});async function ne(){const e=await L.get("/ProjectCompany");if(e.data.Ok)return e.data.Body.$values;throw new Error(e.data.Message)}const ie={class:"q-ma-md"},le={class:"absolute-bottom text-h6"},ue={__name:"ProjectsCompany",setup(e){const l=K(),n=V([]);H(()=>{m()});async function m(){try{const u=await ne();n.push(...u)}catch(u){l.notify({type:"negative",message:u})}}return(u,a)=>(_(),j("div",ie,[(_(!0),j(A,null,U(n,i=>(_(),W(J,{flat:"",key:i.Id},{default:y(()=>[b(Z,{class:"my-card"},{default:y(()=>[b(ae,{src:i.Project.IconProject,"spinner-color":"primary","spinner-size":"82px"},{default:y(()=>[Y("div",le,N(i.Project.NameProject),1)]),_:2},1032,["src"]),b(X,null,{default:y(()=>[G(N(i.Project.DescriptionProject),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]))}};export{ue as default};