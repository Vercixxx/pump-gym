import{d as N,r as u,u as j,c as D,a as F,b as n,o as S,e as C,w as l,f as s,n as p,g as q,h as o,i,j as T,S as M,p as O,k as G,_ as H}from"./index-DK3hN-5E.js";const I=m=>(O("data-v-9ff11007"),m=m(),G(),m),J={class:"grid grid-flow-col justify-stretch",align:"center"},K={class:"text-subtitle-1 text-medium-emphasis d-flex align-end justify-space-between"},Q=I(()=>s("span",null,null,-1)),W=I(()=>s("div",{class:"w-100 border-y border-indigo-600 my-4 mt-5"},null,-1)),X=N({__name:"LoginComponent",setup(m){const g=u(!1),c=u(!1),_=u(""),w=u(""),v=u(!1),P=u({emailRules:[e=>!!e||"Email",e=>e.length>=6||"Email must containt at least 6 characters",e=>e.length<=70||"Email too large",e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)||"Invalid email format (example@ex.ex)"],passwordRules:[e=>!!e||"Password is required",e=>e.length>=4||"Password must containt at least 4 characters",e=>e.length<=70||"Password too large"]}),r=j(),y=D(()=>r.loginDialog);function h(){r.closeLoginDialog()}const $=()=>{r.openSignUpDialog(),r.closeLoginDialog()},L=async()=>{c.value=!0;const e=_.value.trim(),a=w.value.trim();await M(e,a)&&h(),c.value=!1},U=()=>{r.openPasswordResetDialog(),r.closeLoginDialog()},B=F(),k=D(()=>B.name.value==="dark");return(e,a)=>{const d=n("v-col"),b=n("v-btn"),f=n("v-row"),R=n("v-card-title"),x=n("v-text-field"),z=n("v-form"),A=n("v-tooltip"),V=n("v-icon"),E=n("v-dialog");return S(),C(E,{modelValue:y.value,"onUpdate:modelValue":a[5]||(a[5]=t=>y.value=t),persistent:"",width:"500",style:{"background-color":"rgba(50, 50, 50, 0.8)"}},{default:l(()=>[s("div",{class:p(["rounded-xl pa-4 border-4 border-indigo-900",k.value?"bg-slate-900 text-white":"bg-slate-200"])},[s("div",{class:"absolute inset-0",style:q({backgroundImage:"url(https://firebasestorage.googleapis.com/v0/b/pump-gym-f72c7.appspot.com/o/Images%2Flogo.png?alt=media&token=8504510e-a373-4235-9811-da7abd576c0d)",backgroundSize:"cover",backgroundPosition:"center",opacity:.03})},null,4),o(R,null,{default:l(()=>[o(f,null,{default:l(()=>[o(d,{cols:"2"}),o(d,{cols:"8",class:"font-weight-black text-4xl mb-5",align:"center"},{default:l(()=>[i(" Sign in ")]),_:1}),o(d,{cols:"2",align:"end"},{default:l(()=>[o(b,{icon:"mdi-close",variant:"plain",onClick:h})]),_:1})]),_:1})]),_:1}),s("div",J,[o(z,{modelValue:g.value,"onUpdate:modelValue":a[3]||(a[3]=t=>g.value=t)},{default:l(()=>[o(x,{modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=t=>_.value=t),label:"Email",class:p(["mb-7",e.$vuetify.display.smAndDown?"w-100":" w-75"]),variant:"outlined","prepend-icon":"mdi-email",autocomplete:"username",rules:P.value.emailRules,disabled:c.value},null,8,["modelValue","class","rules","disabled"]),o(x,{modelValue:w.value,"onUpdate:modelValue":a[1]||(a[1]=t=>w.value=t),class:p(["w-75",e.$vuetify.display.smAndDown?"w-100":" w-75"]),label:"Password",variant:"outlined",type:v.value?"text":"password","prepend-icon":"mdi-key","append-inner-icon":v.value?"mdi-eye":" mdi-eye-off","onClick:appendInner":a[2]||(a[2]=t=>v.value=!v.value),autocomplete:"current-password",disabled:c.value},null,8,["modelValue","class","type","append-inner-icon","disabled"]),s("div",K,[Q,o(b,{variant:"plain",size:"small",onClick:U,class:"text-cyan-darken-4 font-weight-bold","prepend-icon":"mdi-restore",disabled:c.value},{default:l(()=>[i(" Forgot password? ")]),_:1},8,["disabled"])])]),_:1},8,["modelValue"])]),o(f,{class:"my-5"},{default:l(()=>[o(d,{cols:"12",align:"center"},{default:l(()=>[s("span",null,[g.value?T("",!0):(S(),C(A,{key:0,activator:"parent",location:"top","no-overflow":""},{default:l(()=>[i(" Fill required fields ")]),_:1})),s("span",null,[o(b,{class:p([[k.value?"":"text-black","loginButton","hover:text-white",e.$vuetify.display.smAndDown?"w-75":"w-50"],"loginButton hover:text-white"]),disabled:!g.value,onClick:a[4]||(a[4]=t=>L())},{default:l(()=>[i(" Sign in "),o(V,{right:""},{default:l(()=>[i("mdi-login")]),_:1})]),_:1},8,["class","disabled"])])])]),_:1})]),_:1}),W,o(f,null,{default:l(()=>[o(d,{cols:"12",align:"center",class:"font-weight-black"},{default:l(()=>[i(" Or ")]),_:1})]),_:1}),o(f,{class:"mb-4 mt-4"},{default:l(()=>[o(d,{cols:"12",align:"center"},{default:l(()=>[s("button",{class:p(["cursor-pointer text-white font-bold shadow-md hover:scale-[1.2] shadow-purple-400 rounded-full px-5 py-2 bg-gradient-to-bl from-purple-500 to-purple-800",e.$vuetify.display.smAndDown?"w-75":"w-50"]),onClick:$},[i(" Sign up now "),o(V,{right:""},{default:l(()=>[i("mdi-account-plus")]),_:1})],2)]),_:1})]),_:1})],2)]),_:1},8,["modelValue"])}}}),Z=H(X,[["__scopeId","data-v-9ff11007"]]);export{Z as default};