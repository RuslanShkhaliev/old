var A=Object.defineProperty,x=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var d=(a,t,s)=>t in a?A(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,_=(a,t)=>{for(var s in t||(t={}))b.call(t,s)&&d(a,s,t[s]);if(i)for(var s of i(t))y.call(t,s)&&d(a,s,t[s]);return a},p=(a,t)=>x(a,Q(t));import{U as v,H as r,Y as S,Z as C,a2 as B,a3 as E,d as F,o as q,c as w,a as e,w as u,Q as f,t as o,y as m,u as g,A as h,i as z,z as D,F as I,a0 as $,a1 as P}from"./vendor.830b21af.js";import{_ as k}from"./FormActions.f7381a5a.js";import{_ as L,u as M}from"./index.d2ad512f.js";var N=v({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:t}){const s=r(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>S(a.tag,{class:s.value},C(t.default))}}),V=v({name:"QCardActions",props:p(_({},B),{vertical:Boolean}),setup(a,{slots:t}){const s=E(a),n=r(()=>`q-card__actions ${s.value} q-card__actions--${a.vertical===!0?"vert column":"horiz row"}`);return()=>S("div",{class:n.value},C(t.default))}});const c=a=>($("data-v-340061b5"),a=a(),P(),a),j=c(()=>o("span",{class:"title"},"\u041A\u043E\u043D\u0442\u0430\u043A\u0442",-1)),H={class:"text"},U=c(()=>o("span",{class:"title"},"\u0410\u0434\u0440\u0435\u0441",-1)),Y={class:"text"},Z=c(()=>o("div",{class:"information-title"},"\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438",-1)),G=F({setup(a){const t=M(),s=r(()=>t.shippingModel),n=l=>{console.log(l)};return(l,J)=>(q(),w(I,null,[e(D,{flat:"",bordered:"",class:"q-mt-lg no-padding"},{default:u(()=>[e(N,{class:"no-padding"},{default:u(()=>[e(f,{class:"flex items-center"},{default:u(()=>[j,o("span",H,m(g(s).contact),1)]),_:1}),e(h),e(f,{class:"flex items-center"},{default:u(()=>[U,o("span",Y,m(g(s).fullAddress),1)]),_:1})]),_:1}),e(h),e(V,{class:"justify-end"},{default:u(()=>[e(z,{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",flat:"","no-caps":"","text-color":"primary",to:"/information"})]),_:1})]),_:1}),Z,e(k,{class:"q-mt-lg",to:"/information",leftLabel:"\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438",rightLabel:"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043E\u043F\u043B\u0430\u0442\u0435",onSubmit:n})],64))}});var W=L(G,[["__scopeId","data-v-340061b5"]]);export{W as default};
