import{d as D,e as O,f as S,g as I,h as x,i as E,j as T}from"./chunk-4JCQ7QFX.js";import{$a as l,Aa as F,Da as b,N as g,O as y,R as C,Ra as c,Sa as h,Ta as R,U as p,W as s,Z as A,Za as u,ib as N,ja as v,qa as M,rb as w,ya as _,za as P}from"./chunk-R53I6P5H.js";var d=class r{static \u0275fac=function(e){return new(e||r)};static \u0275cmp=s({type:r,selectors:[["app-menu"]],standalone:!0,features:[l],decls:6,vars:0,consts:[[1,"frame"],[1,"frame-element"],["mat-raised-button","","color","primary","routerLink","memory"]],template:function(e,n){e&1&&(c(0,"div",0)(1,"h2",1),u(2,"Korina's Solitaire Card Games"),h(),c(3,"div",1)(4,"a",2),u(5,"New Memory Game"),h()()())},dependencies:[x,T],styles:[".frame[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-flow:column;align-items:center;justify-content:start}.frame[_ngcontent-%COMP%]   .frame-element[_ngcontent-%COMP%]{margin-bottom:1em}.frame[_ngcontent-%COMP%]   .frame-element[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .frame[_ngcontent-%COMP%]   .frame-element[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{min-width:20em}"]})};var j=[{path:"",component:d},{path:"memory",loadChildren:()=>import("./chunk-FDT2FPQR.js")}];var V="@",z=(()=>{class r{constructor(e,n,o,i,a){this.doc=e,this.delegate=n,this.zone=o,this.animationType=i,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=p(P,{optional:!0}),this.loadingSchedulerFn=p(H,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-JC6XVEDZ.js").then(o=>o),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(o=>{throw new g(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:i})=>{this._engine=o(this.animationType,this.doc);let a=new i(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,n){let o=this.delegate.createRenderer(e,n);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let i=new f(o);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let G=a.createRenderer(e,n);i.use(G),this.scheduler?.notify(10)}).catch(a=>{i.use(o)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(n){_()}}static{this.\u0275prov=y({token:r,factory:r.\u0275fac})}}return r})(),f=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,n,o){this.delegate.insertBefore(t,e,n,o)}removeChild(t,e,n){this.delegate.removeChild(t,e,n)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,o){this.delegate.setAttribute(t,e,n,o)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,o){this.delegate.setStyle(t,e,n,o)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){this.shouldReplay(e)&&this.replay.push(o=>o.setProperty(t,e,n)),this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(t,e,n)),this.delegate.listen(t,e,n)}shouldReplay(t){return this.replay!==null&&t.startsWith(V)}},H=new C("");function L(r="animations"){return b("NgAsyncAnimations"),A([{provide:F,useFactory:(t,e,n)=>new z(t,e,n,r),deps:[w,D,v]},{provide:M,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var B={providers:[N({eventCoalescing:!0}),E(j),S(),L()]};var m=class r{title="angular-cards";static \u0275fac=function(e){return new(e||r)};static \u0275cmp=s({type:r,selectors:[["app-root"]],standalone:!0,features:[l],decls:1,vars:0,template:function(e,n){e&1&&R(0,"router-outlet")},dependencies:[I]})};O(m,B).catch(r=>console.error(r));
