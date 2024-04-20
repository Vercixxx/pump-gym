import{d as O,r,u as j,c as h,a as H,b as n,o as i,e as c,w as t,g as a,n as K,A as D,F as A,B as C,h as N,I as Q,i as X,f as w,L as Y,M as Z,N as ee,O as le,G as ae,m as oe,t as te,p as ne}from"./index-BuOyHiCi.js";const se=w("span",{class:"text-3xl font-weight-black"},"Join out team!",-1),ie=w("span",{class:"text-3xl font-weight-black"},"Join out team!",-1),de=O({__name:"WorkWithUsDialog",setup(ue){const m=r(!1),u=r(!1),_=r(null),g=r(""),v=r([]),k=r(null),p=j(),U=h(()=>p.workWithUsDialog),W=h(()=>p.facilities),b=()=>{p.closeWorkWithUsDialog()},x=e=>{p.triggerAlert(e)},d=r([{name:"name",label:"Name",value:"",rules:[e=>!!e||"Name is required"]},{name:"email",label:"Email",value:"",rules:[e=>!!e||"Email is required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"]},{name:"phone",label:"Phone",value:"",rules:[e=>!!e||"Phone is required",e=>e&&e.length>=9&&e.length<=15||"Phone must be valid"]}]),B=H(),E=h(()=>B.name.value==="dark"),q=async()=>{u.value=!0;try{if(v.value.length>0){const l=Y(Z,"Applications/"+d.value.find(s=>s.name==="email").value+"/"+v.value[0].name);await ee(l,v.value[0]),k.value=await le(l)}const e={name:d.value.find(l=>l.name==="name").value,email:d.value.find(l=>l.name==="email").value,phone:d.value.find(l=>l.name==="phone").value,facility:_.value,message:g.value,fileUrl:k.value};await ae(oe(te(ne,"Applications"),e.email),e),x({message:"Application sent successfully!",type:"success"})}catch(e){console.error("Error occurred while sending application",e),x({message:"Error occurred while sending application, please try again later",type:"error"})}u.value=!1,b()},F=()=>{d.value.forEach(e=>e.value=""),b()};return(e,l)=>{const s=n("v-col"),y=n("v-btn"),V=n("v-row"),P=n("v-text-field"),R=n("v-select"),$=n("v-textarea"),z=n("v-chip"),J=n("v-file-input"),L=n("v-form"),T=n("v-card-text"),M=n("v-tooltip"),S=n("v-card-actions"),G=n("v-card"),I=n("v-dialog");return i(),c(I,{modelValue:U.value,"onUpdate:modelValue":l[4]||(l[4]=o=>U.value=o),persistent:"",width:"600",transition:"dialog-top-transition",fullscreen:!!e.$vuetify.display.smAndDown},{default:t(()=>[a(G,{class:K(["pa-4",[E.value?"bg-slate-800":"bg-slate-200",e.$vuetify.display.smAndDown?"":"rounded-xl"]])},{default:t(()=>[e.$vuetify.display.smAndDown?(i(),c(V,{key:1},{default:t(()=>[a(s,{cols:"2",align:"start"},{default:t(()=>[a(y,{text:"Back",onClick:F,"prepend-icon":"mdi-arrow-left",variant:"plain"})]),_:1}),a(s,{cols:"8",align:"center"},{default:t(()=>[ie]),_:1}),a(s,{cols:"2"})]),_:1})):(i(),c(V,{key:0},{default:t(()=>[a(s,{cols:"2"}),a(s,{cols:"8",align:"center"},{default:t(()=>[se]),_:1}),a(s,{cols:"2",align:"end"},{default:t(()=>[a(y,{icon:"mdi-close",variant:"plain",class:"text-xl",onClick:b})]),_:1})]),_:1})),a(T,null,{default:t(()=>[a(L,{modelValue:m.value,"onUpdate:modelValue":l[3]||(l[3]=o=>m.value=o)},{default:t(()=>[(i(!0),D(A,null,C(d.value,o=>(i(),c(P,{modelValue:o.value,"onUpdate:modelValue":f=>o.value=f,variant:"outlined",label:o.label,rules:o.rules,class:"mb-5",disabled:u.value},null,8,["modelValue","onUpdate:modelValue","label","rules","disabled"]))),256)),a(R,{modelValue:_.value,"onUpdate:modelValue":l[0]||(l[0]=o=>_.value=o),items:W.value,"item-title":"Name","item-value":"Name",label:"Choose facility",variant:"outlined",rules:e.requiredRule,disabled:u.value,class:"mb-5"},null,8,["modelValue","items","rules","disabled"]),a($,{modelValue:g.value,"onUpdate:modelValue":l[1]||(l[1]=o=>g.value=o),label:"Tell us about yourself",variant:"outlined",class:"mb-5",disabled:u.value,"auto-grow":"",clearable:"",counter:""},null,8,["modelValue","disabled"]),a(J,{modelValue:v.value,"onUpdate:modelValue":l[2]||(l[2]=o=>v.value=o),label:"Upload CV",placeholder:"Upload your documents","prepend-icon":"mdi-paperclip","show-size":"",variant:"outlined",disabled:u.value,accept:"application/pdf",rules:e.fileRules},{selection:t(({fileNames:o})=>[(i(!0),D(A,null,C(o,f=>(i(),c(z,{key:f,class:"me-2",color:"primary",size:"small",label:""},{default:t(()=>[N(Q(f),1)]),_:2},1024))),128))]),_:1},8,["modelValue","disabled","rules"])]),_:1},8,["modelValue"])]),_:1}),a(S,null,{default:t(()=>[a(V,null,{default:t(()=>[a(s,{cols:"12"},{default:t(()=>[m.value?X("",!0):(i(),c(M,{key:0,activator:"parent",location:"top","no-overflow":""},{default:t(()=>[N(" Fill required fields ")]),_:1})),w("span",null,[a(y,{block:"",text:"Join",color:m.value?"success":"error",disabled:!m.value,variant:"elevated",loading:u.value,onClick:q},null,8,["color","disabled","loading"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])]),_:1},8,["modelValue","fullscreen"])}}});export{de as default};