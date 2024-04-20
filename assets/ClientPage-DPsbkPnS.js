function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SubscriptionComponent-BVkAoGAI.js","assets/index-D1Aaj6Hj.js","assets/index-CFfBDPMF.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as q,u as M,c as C,a as $,r as f,bM as z,R as O,b as n,o as c,e as i,w as t,g as a,f as G,h as b,C as r,A as N,i as E,D as K,B as A,F as B,n as F,m as W,p as Y,bN as H,q as J,P as Q,I as X,bO as Z,Y as ee,_ as te}from"./index-D1Aaj6Hj.js";const ae={key:0},S=q({__name:"ProfileComponent",setup(R){const d=M();let w=C(()=>d.userData),g=C(()=>d.userUid).value;const y=$(),V=C(()=>y.name.value==="dark");let m=f(!1),_=z([{name:"first_name",label:"First Name",value:"",rules:[e=>!!e||"First Name is required"]},{name:"last_name",label:"Last Name",value:"",rules:[e=>!!e||"Last Name is required"]},{name:"email",label:"Email",value:"",rules:[e=>!!e||"Email is required",e=>e.length>=6||"Email must containt at least 6 characters",e=>e.length<=70||"Email too large",e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)||"Invalid email format"]},{name:"phone",label:"Phone",value:"",rules:[e=>!!e||"Phone is required",e=>e.length>=6||"Phone must containt at least 6 characters",e=>e.length<=70||"Phone too large"]}]);const v=f();function p(){_.forEach(e=>{e.value=w.value[e.name]}),v.value=w.value.gender}function D(){p(),o.value=!1}O(()=>{p()});let o=f(!1);async function h(){m.value=!0;try{const e=await W(Y,"users",g);let l={};_.forEach(s=>{l[s.name]=s.value}),l={...l,gender:v.value},await H(e,l);let k={...(await J(e)).data(),user:{uid:g}};d.setUserData(k,g),p(),o.value=!1,d.showAlert("success","User data updated successfully")}catch(e){console.error(e),d.showAlert("error",e.message)}m.value=!1}return(e,l)=>{const U=n("v-icon"),k=n("v-card-title"),s=n("v-btn"),x=n("v-col"),P=n("v-row"),T=n("v-text-field"),L=n("v-select"),j=n("v-card-text");return c(),i(P,null,{default:t(()=>[a(x,{cols:"12",align:"center",justify:"center"},{default:t(()=>[G("div",{elevation:"0",class:F(["mt-3 pa-5 rounded backdrop-blur-xl",V.value?" bg-black/75":" bg-white/75"])},[a(k,{class:"font-weight-black text-h6"},{default:t(()=>[b(" Profile "),r(o)?(c(),N("span",ae,[b(" - Editing mode "),a(U,{color:"error",class:"text-h4"},{default:t(()=>[b("mdi-pencil")]),_:1})])):E("",!0)]),_:1}),a(j,null,{default:t(()=>[a(P,null,{default:t(()=>[a(x,{cols:"12",align:"end"},{default:t(()=>[r(o)?E("",!0):(c(),i(s,{key:0,"prepend-icon":"mdi-pencil",variant:"text",color:"error",onClick:l[0]||(l[0]=u=>K(o)?o.value=!0:o=!0),text:"Edit"})),r(o)?(c(),i(s,{key:1,"prepend-icon":"mdi-content-save",variant:"text",color:"success",onClick:l[1]||(l[1]=u=>h()),text:"Save",disabled:r(m)},null,8,["disabled"])):E("",!0),r(o)?(c(),i(s,{key:2,"prepend-icon":"mdi-close",variant:"text",color:"error",onClick:l[2]||(l[2]=u=>D()),text:"Cancel"})):E("",!0)]),_:1})]),_:1}),a(P,null,{default:t(()=>[(c(!0),N(B,null,A(r(_),u=>(c(),i(x,{cols:"12",sm:"6"},{default:t(()=>[a(T,{variant:"outlined",label:u.label,modelValue:u.value,"onUpdate:modelValue":I=>u.value=I,readonly:!r(o),disabled:r(m),"base-color":r(o)?"error":""},null,8,["label","modelValue","onUpdate:modelValue","readonly","disabled","base-color"])]),_:2},1024))),256)),a(x,{cols:"12",sm:"6"},{default:t(()=>[a(L,{variant:"outlined",label:"Gender",items:["Men","Woman","Rather not say"],modelValue:v.value,"onUpdate:modelValue":l[3]||(l[3]=u=>v.value=u),readonly:!r(o),disabled:r(m),"base-color":r(o)?"error":""},null,8,["modelValue","readonly","disabled","base-color"])]),_:1})]),_:1})]),_:1})],2)]),_:1})]),_:1})}}}),le=q({__name:"ClientPage",setup(R){const d=ee(()=>te(()=>import("./SubscriptionComponent-BVkAoGAI.js"),__vite__mapDeps([0,1,2]))),w=M();C(()=>w.userData);const g=$(),y=C(()=>g.name.value==="dark"),V=f("option-1"),m=f([{title:"Profile",component:S,icon:"mdi-account"},{title:"Subscription",component:d,icon:"mdi-cash-sync"}]),_=f(S);function v(p){_.value=p}return(p,D)=>{const o=n("v-icon"),h=n("v-col"),e=n("v-row"),l=n("v-tab"),U=n("v-tabs"),k=n("v-parallax");return c(),i(k,{src:"https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K",class:"ma-0 pa-0"},{default:t(()=>[a(e,{class:"py-2 text-2xl ps-3",style:Q(y.value?"background-color:rgb(30 46 84)":"background-color:rgb(226 232 240)")},{default:t(()=>[a(h,{cols:"auto"},{default:t(()=>[a(o,null,{default:t(()=>[b(" mdi-menu ")]),_:1})]),_:1}),a(h,null,{default:t(()=>[b(" My profile ")]),_:1})]),_:1},8,["style"]),a(U,{modelValue:V.value,"onUpdate:modelValue":D[0]||(D[0]=s=>V.value=s),"bg-color":y.value?"rgb(30 46 84)":"rgb(226 232 240)",class:F(y.value?"text-white":""),color:"basil",grow:""},{default:t(()=>[(c(!0),N(B,null,A(m.value,s=>(c(),i(l,{key:s,value:s,onClick:x=>v(s.component)},{default:t(()=>[b(X(s.title),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["modelValue","bg-color","class"]),a(h,{align:"center",justify:"center"},{default:t(()=>[(c(),i(Z(_.value)))]),_:1})]),_:1})}}});export{le as default};
