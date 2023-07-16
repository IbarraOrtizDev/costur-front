import{c as ee,a as D,n as te,l as ne,b as Q,p as j,d as Y,s as K,e as O,r as F,f as d,w as W,g as Z,h as m,T as oe,i as ae,j as z,k as ie,K as re,m as X,o as le,q as ue,t as se,u as ce,Q as T,v as ve,_ as de,x as fe,y as me,z as pe,A as h,B as E}from"./index.d7090378.js";import{g as R,s as G}from"./touch.3df10340.js";import{c as ge}from"./selection.7adb8dfa.js";import{u as he,a as ye}from"./use-dark.2381d787.js";import{u as _e,a as be,b as xe}from"./use-fullscreen.e3a89931.js";function Ce(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,s)=>{const i=parseFloat(r);i&&(n[s]=i)}),n}var Pe=ee({name:"touch-swipe",beforeMount(e,{value:n,arg:r,modifiers:s}){if(s.mouse!==!0&&D.has.touch!==!0)return;const i=s.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Ce(r),direction:R(s),noop:te,mouseStart(a){G(a,t)&&ne(a)&&(Q(t,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(G(a,t)){const u=a.target;Q(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","notPassiveCapture"],[u,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,u){D.is.firefox===!0&&j(e,!0);const y=Y(a);t.event={x:y.left,y:y.top,time:Date.now(),mouse:u===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){K(a);return}const u=Date.now()-t.event.time;if(u===0)return;const y=Y(a),_=y.left-t.event.x,c=Math.abs(_),b=y.top-t.event.y,v=Math.abs(b);if(t.event.mouse!==!0){if(c<t.sensitivity[1]&&v<t.sensitivity[1]){t.end(a);return}}else if(window.getSelection().toString()!==""){t.end(a);return}else if(c<t.sensitivity[2]&&v<t.sensitivity[2])return;const p=c/u,x=v/u;t.direction.vertical===!0&&c<v&&c<100&&x>t.sensitivity[0]&&(t.event.dir=b<0?"up":"down"),t.direction.horizontal===!0&&c>v&&v<100&&p>t.sensitivity[0]&&(t.event.dir=_<0?"left":"right"),t.direction.up===!0&&c<v&&b<0&&c<100&&x>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&c<v&&b>0&&c<100&&x>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&c>v&&_<0&&v<100&&p>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&c>v&&_>0&&v<100&&p>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(K(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ge(),t.styleCleanup=k=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};k===!0?setTimeout(C,50):C()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:u,distance:{x:c,y:v}})):t.end(a)},end(a){t.event!==void 0&&(O(t,"temp"),D.is.firefox===!0&&j(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&K(a),t.event=void 0)}};if(e.__qtouchswipe=t,s.mouse===!0){const a=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";Q(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}D.has.touch===!0&&Q(t,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const r=e.__qtouchswipe;r!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&r.end(),r.handler=n.value),r.direction=R(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(O(n,"main"),O(n,"temp"),D.is.firefox===!0&&j(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function qe(){const e=new Map;return{getCache:function(n,r){return e[n]===void 0?e[n]=r:e[n]},getCacheWithFn:function(n,r){return e[n]===void 0?e[n]=r():e[n]}}}const Se={name:{required:!0},disable:Boolean},H={setup(e,{slots:n}){return()=>m("div",{class:"q-panel scroll",role:"tabpanel"},z(n.default))}},we={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},ke=["update:modelValue","beforeTransition","transition"];function $e(){const{props:e,emit:n,proxy:r}=Z(),{getCacheWithFn:s}=qe();let i,t;const a=F(null),u=F(null);function y(o){const l=e.vertical===!0?"up":"left";P((r.$q.lang.rtl===!0?-1:1)*(o.direction===l?1:-1))}const _=d(()=>[[Pe,y,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),c=d(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),b=d(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),v=d(()=>`--q-transition-duration: ${e.transitionDuration}ms`),p=d(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),x=d(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),k=d(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);W(()=>e.modelValue,(o,l)=>{const g=q(o)===!0?I(o):-1;t!==!0&&$(g===-1?0:g<I(l)?-1:1),a.value!==g&&(a.value=g,n("beforeTransition",o,l),ie(()=>{n("transition",o,l)}))});function C(){P(1)}function N(){P(-1)}function A(o){n("update:modelValue",o)}function q(o){return o!=null&&o!==""}function I(o){return i.findIndex(l=>l.props.name===o&&l.props.disable!==""&&l.props.disable!==!0)}function M(){return i.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function $(o){const l=o!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(o===-1?c.value:b.value):null;u.value!==l&&(u.value=l)}function P(o,l=a.value){let g=l+o;for(;g>-1&&g<i.length;){const w=i[g];if(w!==void 0&&w.props.disable!==""&&w.props.disable!==!0){$(o),t=!0,n("update:modelValue",w.props.name),setTimeout(()=>{t=!1});return}g+=o}e.infinite===!0&&i.length!==0&&l!==-1&&l!==i.length&&P(o,o===-1?i.length:-1)}function B(){const o=I(e.modelValue);return a.value!==o&&(a.value=o),!0}function L(){const o=q(e.modelValue)===!0&&B()&&i[a.value];return e.keepAlive===!0?[m(re,x.value,[m(k.value===!0?s(p.value,()=>({...H,name:p.value})):H,{key:p.value,style:v.value},()=>o)])]:[m("div",{class:"q-panel scroll",style:v.value,key:p.value,role:"tabpanel"},[o])]}function f(){if(i.length!==0)return e.animated===!0?[m(oe,{name:u.value},L)]:L()}function S(o){return i=ae(z(o.default,[])).filter(l=>l.props!==null&&l.props.slot===void 0&&q(l.props.name)===!0),i.length}function V(){return i}return Object.assign(r,{next:C,previous:N,goTo:A}),{panelIndex:a,panelDirectives:_,updatePanelsList:S,updatePanelIndex:B,getPanelContent:f,getEnabledPanels:M,getPanels:V,isValidPanelName:q,keepAliveProps:x,needsUniqueKeepAliveWrapper:k,goToPanelByOffset:P,goToPanel:A,nextPanel:C,previousPanel:N}}var U=X({name:"QCarouselSlide",props:{...Se,imgSrc:String},setup(e,{slots:n}){const r=d(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>m("div",{class:"q-carousel__slide",style:r.value},z(n.default))}}),J=X({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:n}){const r=d(()=>`q-carousel__control absolute absolute-${e.position}`),s=d(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>m("div",{class:r.value,style:s.value},z(n.default))}});const Te=["top","right","bottom","left"],Ae=["regular","flat","outline","push","unelevated"];var Ie=X({name:"QCarousel",props:{...he,...we,..._e,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Ae.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Te.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...be,...ke],setup(e,{slots:n}){const{proxy:{$q:r}}=Z(),s=ye(e,r);let i=null,t;const{updatePanelsList:a,getPanelContent:u,panelDirectives:y,goToPanel:_,previousPanel:c,nextPanel:b,getEnabledPanels:v,panelIndex:p}=$e(),{inFullscreen:x}=xe(),k=d(()=>x.value!==!0&&e.height!==void 0?{height:e.height}:{}),C=d(()=>e.vertical===!0?"vertical":"horizontal"),N=d(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(x.value===!0?" fullscreen":"")+(s.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${C.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${M.value}`:"")),A=d(()=>{const f=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?f.reverse():f}),q=d(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),I=d(()=>e.navigationActiveIcon||q.value),M=d(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),$=d(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));W(()=>e.modelValue,()=>{e.autoplay&&P()}),W(()=>e.autoplay,f=>{f?P():i!==null&&(clearTimeout(i),i=null)});function P(){const f=ce(e.autoplay)===!0?Math.abs(e.autoplay):5e3;i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,f>=0?b():c()},f)}le(()=>{e.autoplay&&P()}),ue(()=>{i!==null&&clearTimeout(i)});function B(f,S){return m("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${f} q-carousel__navigation--${M.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[m("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},v().map(S))])}function L(){const f=[];if(e.navigation===!0){const S=n["navigation-icon"]!==void 0?n["navigation-icon"]:o=>m(T,{key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`,...o.btnProps,onClick:o.onClick}),V=t-1;f.push(B("buttons",(o,l)=>{const g=o.props.name,w=p.value===l;return S({index:l,maxIndex:V,name:g,active:w,btnProps:{icon:w===!0?I.value:q.value,size:"sm",...$.value},onClick:()=>{_(g)}})}))}else if(e.thumbnails===!0){const S=e.controlColor!==void 0?` text-${e.controlColor}`:"";f.push(B("thumbnails",V=>{const o=V.props;return m("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+S,src:o.imgSrc||o["img-src"],onClick:()=>{_(o.name)}})}))}return e.arrows===!0&&p.value>=0&&((e.infinite===!0||p.value>0)&&f.push(m("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${C.value} absolute flex flex-center`},[m(T,{icon:A.value[0],...$.value,onClick:c})])),(e.infinite===!0||p.value<t-1)&&f.push(m("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${C.value} absolute flex flex-center`},[m(T,{icon:A.value[1],...$.value,onClick:b})]))),ve(n.control,f)}return()=>(t=a(n),m("div",{class:N.value,style:k.value},[se("div",{class:"q-carousel__slides-container"},u(),"sl-cont",e.swipeable,()=>y.value)].concat(L())))}});const Be={setup(){return{slide:F(1),autoplay:F(!0)}}},Ve={class:""};function De(e,n,r,s,i,t){const a=fe("router-link");return me(),pe("div",Ve,[h(Ie,{swipeable:"",animated:"",modelValue:s.slide,"onUpdate:modelValue":n[2]||(n[2]=u=>s.slide=u),autoplay:s.autoplay,ref:"carousel",infinite:""},{control:E(()=>[h(J,{position:"top-right",offset:[18,18]},{default:E(()=>[h(a,{to:"/login"},{default:E(()=>[h(T,{flat:"",color:"light-blue",label:"Inicia sesion"})]),_:1})]),_:1}),h(J,{position:"bottom-right",offset:[18,18],class:"q-gutter-xs"},{default:E(()=>[h(T,{push:"",round:"",dense:"",color:"light-blue","text-color":"white",icon:"arrow_left",onClick:n[0]||(n[0]=u=>e.$refs.carousel.previous())}),h(T,{push:"",round:"",dense:"",color:"light-blue","text-color":"white",icon:"arrow_right",onClick:n[1]||(n[1]=u=>e.$refs.carousel.next())})]),_:1})]),default:E(()=>[h(U,{name:1,"img-src":"/images/plato_a.jpg"}),h(U,{name:2,"img-src":"/images/plato_b.jpg"}),h(U,{name:3,"img-src":"/images/plato_c.jpg"})]),_:1},8,["modelValue","autoplay"])])}var Fe=de(Be,[["render",De]]);export{Fe as default};
