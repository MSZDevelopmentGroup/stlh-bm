import{o as u,e as m,f as e,p as x,q as F,b as w,d as L,s as $,v as C,w as k,_ as A,x as I,y as R,c as M,a as E,z as N,A as j,B as q,C as O,D as U,E as W,G,H as J,I as K,J as Q,K as X,L as Y,M as ee,N as te,g as t,O as se,l as i,t as oe,n as f,i as T,P as V,S as H,m as g,Q as ne,R as B,T as P,U as le,j as ae,V as b,W as ie,X as re,F as ce,Y as ue,Z as de,$ as _e,a0 as me,a1 as ve,a2 as pe,a3 as he}from"./index-013b2849.js";import{N as fe}from"./NoteDisplay-b08046cb.js";const ge={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xe=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),we=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),ye=[xe,we];function Se(s,n){return u(),m("svg",ge,[...ye])}const be={name:"carbon-zoom-out",render:Se},$e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ce=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ke=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),ze=[Ce,ke];function Me(s,n){return u(),m("svg",$e,[...ze])}const Ne={name:"carbon-zoom-in",render:Me},Te={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ve=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),He=[Ve];function Be(s,n){return u(),m("svg",Te,[...He])}const Pe={name:"carbon-renew",render:Be},Le={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ae=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Ze=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),De=[Ae,Ze];function Fe(s,n){return u(),m("svg",Le,[...De])}const Ie={name:"carbon-time",render:Fe},Re="/assets/logo-title-horizontal-96c3c915.png";function Ee(){const s=x(Date.now()),n=F({interval:1e3}),v=w(()=>{const l=(n.value-s.value)/1e3,r=Math.floor(l%60).toString().padStart(2,"0");return`${Math.floor(l/60).toString().padStart(2,"0")}:${r}`});function p(){s.value=n.value}return{timer:v,resetTimer:p}}const je=L({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(s){const n=s,v=w(()=>{var l,r,a;return(a=(r=(l=$.value)==null?void 0:l.meta)==null?void 0:r.slide)==null?void 0:a.note}),p=w(()=>{var l,r,a;return(a=(r=(l=$.value)==null?void 0:l.meta)==null?void 0:r.slide)==null?void 0:a.noteHTML});return(l,r)=>(u(),C(fe,{class:k(n.class),note:v.value,"note-html":p.value},null,8,["class","note","note-html"]))}}),qe=A(je,[["__file","/home/easonjan/pagesbuild/student/node_modules/@slidev/client/internals/NoteStatic.vue"]]),y=s=>(me("data-v-574fd206"),s=s(),ve(),s),Oe={class:"bg-main h-full slidev-presenter"},Ue={class:"grid-section top flex"},We=y(()=>e("img",{src:Re,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),Ge=y(()=>e("div",{class:"flex-auto"},null,-1)),Je={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Ke=y(()=>e("div",{class:"context"}," current ",-1)),Qe=y(()=>e("div",{class:"context"}," next ",-1)),Xe={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ye={class:"border-t border-main py-1 px-2 text-sm"},et={class:"grid-section bottom"},tt={class:"progress-bar"},st=L({__name:"Presenter",setup(s){const n=x();I(),R(n);const v=M.titleTemplate.replace("%s",M.title||"Slidev");E({title:`Presenter - ${v}`}),x(!1);const{timer:p,resetTimer:l}=Ee(),r=x([]),a=w(()=>N.value<j.value?{route:$.value,clicks:N.value+1}:q.value?{route:O.value,clicks:0}:null);return U(),W(()=>{const z=n.value.querySelector("#slide-content"),o=G(J()),S=K();Q(()=>{if(!S.value||Y.value||!ee.value)return;const d=z.getBoundingClientRect(),_=(o.x-d.left)/d.width*100,h=(o.y-d.top)/d.height*100;if(!(_<0||_>100||h<0||h>100))return{x:_,y:h}},d=>{X.cursor=d})}),(z,o)=>{const S=Ie,d=Pe,_=te("HiddenText"),h=Ne,Z=be;return u(),m(ce,null,[e("div",Oe,[e("div",{class:k(["grid-container",`layout${t(se)}`])},[e("div",Ue,[We,Ge,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:o[0]||(o[0]=(...c)=>t(l)&&t(l)(...c))},[i(S,{class:"absolute"}),i(d,{class:"absolute opacity-0"})]),e("div",Je,oe(t(p)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:f(t(T))},[i(H,{key:"main",class:"h-full w-full"},{default:V(()=>[i(ue,{"render-context":"presenter"})]),_:1}),Ke],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:f(t(T))},[a.value?(u(),C(H,{key:"next",class:"h-full w-full"},{default:V(()=>{var c;return[i(t(_e),{is:(c=a.value.route)==null?void 0:c.component,"clicks-elements":r.value,"onUpdate:clicksElements":o[1]||(o[1]=D=>r.value=D),clicks:a.value.clicks,"clicks-disabled":!1,class:k(t(de)(a.value.route)),route:a.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):g("v-if",!0),Qe],4),g(" Notes "),(u(),m("div",Xe,[(u(),C(qe,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:f({fontSize:`${t(ne)}em`})},null,8,["style"])),e("div",Ye,[e("button",{class:"slidev-icon-btn",onClick:o[2]||(o[2]=(...c)=>t(B)&&t(B)(...c))},[i(_,{text:"Increase font size"}),i(h)]),e("button",{class:"slidev-icon-btn",onClick:o[3]||(o[3]=(...c)=>t(P)&&t(P)(...c))},[i(_,{text:"Decrease font size"}),i(Z)]),g("v-if",!0)])])),e("div",et,[i(pe,{persist:!0})]),g("v-if",!0)],2),e("div",tt,[e("div",{class:"progress h-2px bg-primary transition-all",style:f({width:`${(t(le)-1)/(t(ae)-1)*100}%`})},null,4)])]),i(he),i(re,{modelValue:t(b),"onUpdate:modelValue":o[5]||(o[5]=c=>ie(b)?b.value=c:null)},null,8,["modelValue"])],64)}}});const lt=A(st,[["__scopeId","data-v-574fd206"],["__file","/home/easonjan/pagesbuild/student/node_modules/@slidev/client/internals/Presenter.vue"]]);export{lt as default};