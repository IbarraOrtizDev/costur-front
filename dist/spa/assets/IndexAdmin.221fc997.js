import{r as x,a5 as De,o as A,m as F,q as U,n as we,k as ee,h as k,g as W,ab as ge,a0 as Ce,ac as P,f as m,w as C,ad as ot,ae,c as it,a as j,l as lt,b as J,p as ce,a6 as Le,aa as de,d as pe,e as fe,s as rt,af as ut,t as $e,j as Qe,E as Ve,ag as st,ah as ct,ai as dt,aj as ft,ak as ve,N as X,al as vt,v as mt,am as He,_ as Re,y as Y,an as te,B as _,A as z,a7 as ht,V as gt,Y as ye,ao as Ae,L as pt,ap as yt,M as bt,x as ze,Q as Te,W as wt,z as Ct,aq as St,ar as qt,as as kt}from"./index.1eab7e9b.js";import{u as xt,a as Lt,b as $t,c as zt,d as Tt,e as Z,f as _t,Q as _e,g as Fe,h as Et,i as Bt,j as Ot,k as Pt}from"./QItem.48e4e860.js";import{u as Mt,a as Dt}from"./use-dark.880fe43f.js";import{g as Ee,s as Be}from"./touch.3df10340.js";import{c as Qt}from"./selection.c7499c32.js";function Vt(){const e=x(!De.value);return e.value===!1&&A(()=>{e.value=!0}),e}const We=typeof ResizeObserver!="undefined",Oe=We===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var be=F({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:c}){let o=null,l,t={width:-1,height:-1};function a(s){s===!0||e.debounce===0||e.debounce==="0"?u():o===null&&(o=setTimeout(u,e.debounce))}function u(){if(o!==null&&(clearTimeout(o),o=null),l){const{offsetWidth:s,offsetHeight:r}=l;(s!==t.width||r!==t.height)&&(t={width:s,height:r},c("resize",t))}}const{proxy:v}=W();if(We===!0){let s;const r=i=>{l=v.$el.parentNode,l?(s=new ResizeObserver(a),s.observe(l),u()):i!==!0&&ee(()=>{r(!0)})};return A(()=>{r()}),U(()=>{o!==null&&clearTimeout(o),s!==void 0&&(s.disconnect!==void 0?s.disconnect():l&&s.unobserve(l))}),we}else{let i=function(){o!==null&&(clearTimeout(o),o=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",a,ge.passive),r=void 0)},w=function(){i(),l&&l.contentDocument&&(r=l.contentDocument.defaultView,r.addEventListener("resize",a,ge.passive),u())};const s=Vt();let r;return A(()=>{ee(()=>{l=v.$el,l&&w()})}),U(i),v.trigger=a,()=>{if(s.value===!0)return k("object",{style:Oe.style,tabindex:-1,type:"text/html",data:Oe.url,"aria-hidden":"true",onLoad:w})}}}}),Ht=F({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:c,emit:o}){const{proxy:{$q:l}}=W(),t=Ce(ae,P);if(t===P)return console.error("QHeader needs to be child of QLayout"),P;const a=x(parseInt(e.heightHint,10)),u=x(!0),v=m(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),s=m(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return u.value===!0?a.value:0;const d=a.value-t.scroll.value.position;return d>0?d:0}),r=m(()=>e.modelValue!==!0||v.value===!0&&u.value!==!0),i=m(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),w=m(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),b=m(()=>{const d=t.rows.value.top,L={};return d[0]==="l"&&t.left.space===!0&&(L[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(L[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),L});function f(d,L){t.update("header",d,L)}function h(d,L){d.value!==L&&(d.value=L)}function E({height:d}){h(a,d),f("size",d)}function q(d){i.value===!0&&h(u,!0),o("focusin",d)}C(()=>e.modelValue,d=>{f("space",d),h(u,!0),t.animate()}),C(s,d=>{f("offset",d)}),C(()=>e.reveal,d=>{d===!1&&h(u,e.modelValue)}),C(u,d=>{t.animate(),o("reveal",d)}),C(t.scroll,d=>{e.reveal===!0&&h(u,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const y={};return t.instances.header=y,e.modelValue===!0&&f("size",a.value),f("space",e.modelValue),f("offset",s.value),U(()=>{t.instances.header===y&&(t.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const d=ot(c.default,[]);return e.elevated===!0&&d.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(k(be,{debounce:0,onResize:E})),k("header",{class:w.value,style:b.value,onFocusin:q},d)}}});function me(e,c,o){const l=pe(e);let t,a=l.left-c.event.x,u=l.top-c.event.y,v=Math.abs(a),s=Math.abs(u);const r=c.direction;r.horizontal===!0&&r.vertical!==!0?t=a<0?"left":"right":r.horizontal!==!0&&r.vertical===!0?t=u<0?"up":"down":r.up===!0&&u<0?(t="up",v>s&&(r.left===!0&&a<0?t="left":r.right===!0&&a>0&&(t="right"))):r.down===!0&&u>0?(t="down",v>s&&(r.left===!0&&a<0?t="left":r.right===!0&&a>0&&(t="right"))):r.left===!0&&a<0?(t="left",v<s&&(r.up===!0&&u<0?t="up":r.down===!0&&u>0&&(t="down"))):r.right===!0&&a>0&&(t="right",v<s&&(r.up===!0&&u<0?t="up":r.down===!0&&u>0&&(t="down")));let i=!1;if(t===void 0&&o===!1){if(c.event.isFirst===!0||c.event.lastDir===void 0)return{};t=c.event.lastDir,i=!0,t==="left"||t==="right"?(l.left-=a,v=0,a=0):(l.top-=u,s=0,u=0)}return{synthetic:i,payload:{evt:e,touch:c.event.mouse!==!0,mouse:c.event.mouse===!0,position:l,direction:t,isFirst:c.event.isFirst,isFinal:o===!0,duration:Date.now()-c.event.time,distance:{x:v,y:s},offset:{x:a,y:u},delta:{x:l.left-c.event.lastX,y:l.top-c.event.lastY}}}}let Rt=0;var he=it({name:"touch-pan",beforeMount(e,{value:c,modifiers:o}){if(o.mouse!==!0&&j.has.touch!==!0)return;function l(a,u){o.mouse===!0&&u===!0?rt(a):(o.stop===!0&&de(a),o.prevent===!0&&Le(a))}const t={uid:"qvtp_"+Rt++,handler:c,modifiers:o,direction:Ee(o),noop:we,mouseStart(a){Be(a,t)&&lt(a)&&(J(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Be(a,t)){const u=a.target;J(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,u){if(j.is.firefox===!0&&ce(e,!0),t.lastEvt=a,u===!0||o.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const r=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Le(r),a.cancelBubble===!0&&de(r),Object.assign(r,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:r}}de(a)}const{left:v,top:s}=pe(a);t.event={x:v,y:s,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:s}},move(a){if(t.event===void 0)return;const u=pe(a),v=u.left-t.event.x,s=u.top-t.event.y;if(v===0&&s===0)return;t.lastEvt=a;const r=t.event.mouse===!0,i=()=>{l(a,r);let f;o.preserveCursor!==!0&&o.preservecursor!==!0&&(f=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),r===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Qt(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,f!==void 0&&(document.documentElement.style.cursor=f),document.body.classList.remove("non-selectable"),r===!0){const E=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{E(),h()},50):E()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(a,t.event.mouse);const{payload:f,synthetic:h}=me(a,t,!1);f!==void 0&&(t.handler(f)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=f.position.left,t.event.lastY=f.position.top,t.event.lastDir=h===!0?void 0:f.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||r===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(a);return}const w=Math.abs(v),b=Math.abs(s);w!==b&&(t.direction.horizontal===!0&&w>b||t.direction.vertical===!0&&w<b||t.direction.up===!0&&w<b&&s<0||t.direction.down===!0&&w<b&&s>0||t.direction.left===!0&&w>b&&v<0||t.direction.right===!0&&w>b&&v>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,u){if(t.event!==void 0){if(fe(t,"temp"),j.is.firefox===!0&&ce(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(me(a===void 0?t.lastEvt:a,t).payload);const{payload:v}=me(a===void 0?t.lastEvt:a,t,!0),s=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(s):s()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const a=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";J(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}j.has.touch===!0&&J(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,c){const o=e.__qtouchpan;o!==void 0&&(c.oldValue!==c.value&&(typeof value!="function"&&o.end(),o.handler=c.value),o.direction=Ee(c.modifiers))},beforeUnmount(e){const c=e.__qtouchpan;c!==void 0&&(c.event!==void 0&&c.end(),fe(c,"main"),fe(c,"temp"),j.is.firefox===!0&&ce(e,!1),c.styleCleanup!==void 0&&c.styleCleanup(),delete e.__qtouchpan)}});const Pe=150;var At=F({name:"QDrawer",inheritAttrs:!1,props:{...xt,...Mt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Lt,"onLayout","miniState"],setup(e,{slots:c,emit:o,attrs:l}){const t=W(),{proxy:{$q:a}}=t,u=Dt(e,a),{preventBodyScroll:v}=_t(),{registerTimeout:s,removeTimeout:r}=$t(),i=Ce(ae,P);if(i===P)return console.error("QDrawer needs to be child of QLayout"),P;let w,b=null,f;const h=x(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),E=m(()=>e.mini===!0&&h.value!==!0),q=m(()=>E.value===!0?e.miniWidth:e.width),y=x(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),d=m(()=>e.persistent!==!0&&(h.value===!0||Ie.value===!0));function L(n,g){if(Q(),n!==!1&&i.animate(),B(0),h.value===!0){const $=i.instances[K.value];$!==void 0&&$.belowBreakpoint===!0&&$.hide(!1),M(1),i.isContainer.value!==!0&&v(!0)}else M(0),n!==!1&&re(!1);s(()=>{n!==!1&&re(!0),g!==!0&&o("show",n)},Pe)}function p(n,g){I(),n!==!1&&i.animate(),M(0),B(H.value*q.value),ue(),g!==!0?s(()=>{o("hide",n)},Pe):r()}const{show:S,hide:T}=zt({showing:y,hideOnRouteChange:d,handleShow:L,handleHide:p}),{addToHistory:Q,removeFromHistory:I}=Tt(y,T,d),V={belowBreakpoint:h,hide:T},O=m(()=>e.side==="right"),H=m(()=>(a.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),Se=x(0),R=x(!1),ne=x(!1),qe=x(q.value*H.value),K=m(()=>O.value===!0?"left":"right"),oe=m(()=>y.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:q.value:0),ie=m(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(O.value?"R":"L")>-1||a.platform.is.ios===!0&&i.isContainer.value===!0),N=m(()=>e.overlay===!1&&y.value===!0&&h.value===!1),Ie=m(()=>e.overlay===!0&&y.value===!0&&h.value===!1),Ne=m(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&R.value===!1?" hidden":"")),je=m(()=>({backgroundColor:`rgba(0,0,0,${Se.value*.4})`})),ke=m(()=>O.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Xe=m(()=>O.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),Ye=m(()=>{const n={};return i.header.space===!0&&ke.value===!1&&(ie.value===!0?n.top=`${i.header.offset}px`:i.header.space===!0&&(n.top=`${i.header.size}px`)),i.footer.space===!0&&Xe.value===!1&&(ie.value===!0?n.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(n.bottom=`${i.footer.size}px`)),n}),Ue=m(()=>{const n={width:`${q.value}px`,transform:`translateX(${qe.value}px)`};return h.value===!0?n:Object.assign(n,Ye.value)}),Ke=m(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Ge=m(()=>`q-drawer q-drawer--${e.side}`+(ne.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(R.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${E.value===!0?"mini":"standard"}`+(ie.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ke.value===!0?" q-drawer--top-padding":""))),Je=m(()=>{const n=a.lang.rtl===!0?e.side:K.value;return[[he,at,void 0,{[n]:!0,mouse:!0}]]}),Ze=m(()=>{const n=a.lang.rtl===!0?K.value:e.side;return[[he,xe,void 0,{[n]:!0,mouse:!0}]]}),et=m(()=>{const n=a.lang.rtl===!0?K.value:e.side;return[[he,xe,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function le(){nt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}C(h,n=>{n===!0?(w=y.value,y.value===!0&&T(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(y.value===!0?(B(0),M(0),ue()):S(!1))}),C(()=>e.side,(n,g)=>{i.instances[g]===V&&(i.instances[g]=void 0,i[g].space=!1,i[g].offset=0),i.instances[n]=V,i[n].size=q.value,i[n].space=N.value,i[n].offset=oe.value}),C(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&le()}),C(()=>e.behavior+e.breakpoint,le),C(i.isContainer,n=>{y.value===!0&&v(n!==!0),n===!0&&le()}),C(i.scrollbarWidth,()=>{B(y.value===!0?0:void 0)}),C(oe,n=>{D("offset",n)}),C(N,n=>{o("onLayout",n),D("space",n)}),C(O,()=>{B()}),C(q,n=>{B(),se(e.miniToOverlay,n)}),C(()=>e.miniToOverlay,n=>{se(n,q.value)}),C(()=>a.lang.rtl,()=>{B()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(tt(),i.animate())}),C(E,n=>{o("miniState",n)});function B(n){n===void 0?ee(()=>{n=y.value===!0?0:q.value,B(H.value*n)}):(i.isContainer.value===!0&&O.value===!0&&(h.value===!0||Math.abs(n)===q.value)&&(n+=H.value*i.scrollbarWidth.value),qe.value=n)}function M(n){Se.value=n}function re(n){const g=n===!0?"remove":i.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function tt(){b!==null&&clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ne.value=!0,b=setTimeout(()=>{b=null,ne.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function at(n){if(y.value!==!1)return;const g=q.value,$=Z(n.distance.x,0,g);if(n.isFinal===!0){$>=Math.min(75,g)===!0?S():(i.animate(),M(0),B(H.value*g)),R.value=!1;return}B((a.lang.rtl===!0?O.value!==!0:O.value)?Math.max(g-$,0):Math.min(0,$-g)),M(Z($/g,0,1)),n.isFirst===!0&&(R.value=!0)}function xe(n){if(y.value!==!0)return;const g=q.value,$=n.direction===e.side,G=(a.lang.rtl===!0?$!==!0:$)?Z(n.distance.x,0,g):0;if(n.isFinal===!0){Math.abs(G)<Math.min(75,g)===!0?(i.animate(),M(1),B(0)):T(),R.value=!1;return}B(H.value*G),M(Z(1-G/g,0,1)),n.isFirst===!0&&(R.value=!0)}function ue(){v(!1),re(!0)}function D(n,g){i.update(e.side,n,g)}function nt(n,g){n.value!==g&&(n.value=g)}function se(n,g){D("size",n===!0?e.miniWidth:g)}return i.instances[e.side]=V,se(e.miniToOverlay,q.value),D("space",N.value),D("offset",oe.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),A(()=>{o("onLayout",N.value),o("miniState",E.value),w=e.showIfAbove===!0;const n=()=>{(y.value===!0?L:p)(!1,!0)};if(i.totalWidth.value!==0){ee(n);return}f=C(i.totalWidth,()=>{f(),f=void 0,y.value===!1&&e.showIfAbove===!0&&h.value===!1?S(!1):n()})}),U(()=>{f!==void 0&&f(),b!==null&&(clearTimeout(b),b=null),y.value===!0&&ue(),i.instances[e.side]===V&&(i.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const n=[];h.value===!0&&(e.noSwipeOpen===!1&&n.push(ut(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Je.value)),n.push($e("div",{ref:"backdrop",class:Ne.value,style:je.value,"aria-hidden":"true",onClick:T},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>et.value)));const g=E.value===!0&&c.mini!==void 0,$=[k("div",{...l,key:""+g,class:[Ke.value,l.class]},g===!0?c.mini():Qe(c.default))];return e.elevated===!0&&y.value===!0&&$.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push($e("aside",{ref:"content",class:Ge.value,style:Ue.value},$,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>Ze.value)),k("div",{class:"q-drawer-container"},n)}}}),Ft=F({name:"QPageContainer",setup(e,{slots:c}){const{proxy:{$q:o}}=W(),l=Ce(ae,P);if(l===P)return console.error("QPageContainer needs to be child of QLayout"),P;Ve(st,!0);const t=m(()=>{const a={};return l.header.space===!0&&(a.paddingTop=`${l.header.size}px`),l.right.space===!0&&(a[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(a.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(a[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),a});return()=>k("div",{class:"q-page-container",style:t.value},Qe(c.default))}});const{passive:Me}=ge,Wt=["both","horizontal","vertical"];var It=F({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Wt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:c}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,a;C(()=>e.scrollTarget,()=>{s(),v()});function u(){l!==null&&l();const w=Math.max(0,dt(t)),b=ft(t),f={top:w-o.position.top,left:b-o.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const h=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";o.position={top:w,left:b},o.directionChanged=o.direction!==h,o.delta=f,o.directionChanged===!0&&(o.direction=h,o.inflectionPoint=o.position),c("scroll",{...o})}function v(){t=ct(a,e.scrollTarget),t.addEventListener("scroll",r,Me),r(!0)}function s(){t!==void 0&&(t.removeEventListener("scroll",r,Me),t=void 0)}function r(w){if(w===!0||e.debounce===0||e.debounce==="0")u();else if(l===null){const[b,f]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];l=()=>{f(b),l=null}}}const{proxy:i}=W();return C(()=>i.$q.lang.rtl,u),A(()=>{a=i.$el.parentNode,v()}),U(()=>{l!==null&&l(),s()}),Object.assign(i,{trigger:r,getPosition:()=>o}),we}}),Nt=F({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:c,emit:o}){const{proxy:{$q:l}}=W(),t=x(null),a=x(l.screen.height),u=x(e.container===!0?0:l.screen.width),v=x({position:0,direction:"down",inflectionPoint:0}),s=x(0),r=x(De.value===!0?0:ve()),i=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=m(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),b=m(()=>r.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),f=m(()=>r.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function h(p){if(e.container===!0||document.qScrollPrevented!==!0){const S={position:p.position.top,direction:p.direction,directionChanged:p.directionChanged,inflectionPoint:p.inflectionPoint.top,delta:p.delta.top};v.value=S,e.onScroll!==void 0&&o("scroll",S)}}function E(p){const{height:S,width:T}=p;let Q=!1;a.value!==S&&(Q=!0,a.value=S,e.onScrollHeight!==void 0&&o("scrollHeight",S),y()),u.value!==T&&(Q=!0,u.value=T),Q===!0&&e.onResize!==void 0&&o("resize",p)}function q({height:p}){s.value!==p&&(s.value=p,y())}function y(){if(e.container===!0){const p=a.value>s.value?ve():0;r.value!==p&&(r.value=p)}}let d=null;const L={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:t,height:a,containerHeight:s,scrollbarWidth:r,totalWidth:m(()=>u.value+r.value),rows:m(()=>{const p=e.view.toLowerCase().split(" ");return{top:p[0].split(""),middle:p[1].split(""),bottom:p[2].split("")}}),header:X({size:0,offset:0,space:!1}),right:X({size:300,offset:0,space:!1}),footer:X({size:0,offset:0,space:!1}),left:X({size:300,offset:0,space:!1}),scroll:v,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(p,S,T){L[p][S]=T}};if(Ve(ae,L),ve()>0){let T=function(){p=null,S.classList.remove("hide-scrollbar")},Q=function(){if(p===null){if(S.scrollHeight>l.screen.height)return;S.classList.add("hide-scrollbar")}else clearTimeout(p);p=setTimeout(T,300)},I=function(V){p!==null&&V==="remove"&&(clearTimeout(p),T()),window[`${V}EventListener`]("resize",Q)},p=null;const S=document.body;C(()=>e.container!==!0?"add":"remove",I),e.container!==!0&&I("add"),vt(()=>{I("remove")})}return()=>{const p=mt(c.default,[k(It,{onScroll:h}),k(be,{onResize:E})]),S=k("div",{class:i.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},p);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:t},[k(be,{onResize:q}),k("div",{class:"absolute-full",style:b.value},[k("div",{class:"scroll",style:f.value},[S])])]):S}}});const jt=He({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Xt(e,c,o,l,t,a){return Y(),te(Et,{clickable:"",to:e.link,exact:""},{default:_(()=>[e.icon?(Y(),te(_e,{key:0,avatar:""},{default:_(()=>[z(ht,{name:e.icon},null,8,["name"])]),_:1})):gt("",!0),z(_e,null,{default:_(()=>[z(Fe,null,{default:_(()=>[ye(Ae(e.title),1)]),_:1})]),_:1})]),_:1},8,["to"])}var Yt=Re(jt,[["render",Xt]]);const Ut=[{title:"Clientes",caption:"",icon:"store",link:"clients"}],Kt=pt(),Gt=He({name:"MainLayout",components:{EssentialLink:Yt},methods:{closeSesion(){localStorage.removeItem("token"),this.$router.push("/login")}},setup(){const e=x(!1),c=X(Kt.company);return A(()=>{yt().path=="/home"&&bt().push("/home/projects")}),{essentialLinks:Ut,leftDrawerOpen:e,infoCompany:c,toggleLeftDrawer(){e.value=!e.value}}}});function Jt(e,c,o,l,t,a){const u=ze("EssentialLink"),v=ze("router-view");return Y(),te(Nt,{view:"lHh Lpr lFf"},{default:_(()=>[z(Ht,{elevated:""},{default:_(()=>[z(Bt,null,{default:_(()=>[z(Te,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),z(Ot,null,{default:_(()=>[ye(Ae(e.infoCompany.NameCompany),1)]),_:1}),z(Te,{round:"",flat:"",title:"Cerrar Sesion",onClick:c[0]||(c[0]=s=>e.closeSesion())},{default:_(()=>[z(wt,{size:"30px","font-size":"15px","text-color":"white",icon:"logout"})]),_:1})]),_:1})]),_:1}),z(At,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":c[1]||(c[1]=s=>e.leftDrawerOpen=s),"show-if-above":"",bordered:""},{default:_(()=>[z(Pt,null,{default:_(()=>[z(Fe,{header:""},{default:_(()=>[ye(" Menu ")]),_:1}),(Y(!0),Ct(kt,null,St(e.essentialLinks,s=>(Y(),te(u,qt({key:s.title},s),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),z(Ft,{class:"q-ma-md"},{default:_(()=>[z(v)]),_:1})]),_:1})}var ia=Re(Gt,[["render",Jt]]);export{ia as default};
