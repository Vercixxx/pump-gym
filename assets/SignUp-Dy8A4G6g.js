import{d as Q,r as u,u as X,c as V,a as Y,b as o,o as i,e as c,w as t,f as _,n as x,g as Z,h as l,m as P,F as $,q as E,i as A,j as B,t as ee,v as ae,x as le}from"./index-BysUrTCk.js";const te=_("span",{class:"text-3xl font-weight-black"},"Sign up",-1),ne={key:1},ie=Q({__name:"SignUp",setup(oe){const I=u(!1),p=u(!1),r=u(0),U=u([{id:1,text:"Tell us about yourself",active:!1},{id:2,text:"Create your account",active:!1}]),d=u([!1,!1]),L=[e=>!!e||"Field required"],m=u([{name:"first_name",label:"First name",icon:"mdi-account",value:"",rules:[e=>!!e||"First name is required",e=>e.length>=2||"First name must containt at least 2 characters",e=>e.length<=70||"First name too large"]},{name:"last_name",label:"Last name",icon:"mdi-account",value:"",rules:[e=>!!e||"Last name is required",e=>e.length>=2||"Last name must containt at least 2 characters",e=>e.length<=70||"Last name too large"]},{name:"email",label:"Email",icon:"mdi-email",value:"",rules:[e=>!!e||"Email",e=>e.length>=6||"Email must containt at least 6 characters",e=>e.length<=70||"Email too large",e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)||"Invalid email format"]},{name:"phone",label:"Phone",icon:"mdi-phone",value:"",rules:[e=>!!e||"Phone is required",e=>e.length>=6||"Phone must containt at least 6 characters",e=>e.length<=70||"Phone too large"]}]),g=u(""),N=u(["Rather not say","Men","Woman"]),f=u([{name:"password",label:"Password",icon:"mdi-key",visible:!1,value:"",rules:[e=>!!e||"Password is required",e=>e.length>=4||"Password must containt at least 4 characters",e=>e.length<=70||"Password too large"]},{name:"password2",label:"Repeat password",icon:"mdi-key",visible:!1,value:"",rules:[e=>!!e||"Password is required",e=>e.length>=4||"Password must containt at least 4 characters",e=>e.length<=70||"Password too large",e=>e===f.value[0].value||"Passwords do not match"]}]),C=X();var b=V(()=>C.signUpDialog);function h(){m.value.forEach(e=>e.value=""),f.value.forEach(e=>e.value=""),g.value="",C.closeSignUpDialog()}const R=V(()=>d.value.every(e=>e)),z=async()=>{p.value=!0;const e={first_name:m.value[0].value,last_name:m.value[1].value,email:m.value[2].value,phone:m.value[3].value,gender:g.value,password:f.value[0].value};await le(e.first_name,e.last_name,e.email,e.phone,e.gender,"Member",!0,e.password)&&h(),p.value=!1},M=Y(),y=V(()=>M.name.value==="dark");return(e,n)=>{const s=o("v-col"),v=o("v-btn"),w=o("v-row"),F=o("v-stepper-item"),T=o("v-divider"),j=o("v-stepper-header"),q=o("v-text-field"),G=o("v-select"),S=o("v-form"),D=o("v-window-item"),O=o("v-stepper-window"),W=o("v-tooltip"),H=o("v-stepper-actions"),J=o("v-stepper"),K=o("v-dialog");return i(),c(K,{modelValue:ee(b),"onUpdate:modelValue":n[7]||(n[7]=a=>ae(b)?b.value=a:b=a),persistent:"",width:"600",transition:"dialog-top-transition",fullscreen:!!e.$vuetify.display.smAndDown},{default:t(()=>[_("div",{class:x(["pa-4",[y.value?"bg-slate-800":"bg-slate-200",e.$vuetify.display.smAndDown?"h-100":"rounded-xl"]])},[_("div",{class:"absolute inset-0",style:Z({backgroundImage:"url(https://firebasestorage.googleapis.com/v0/b/pump-gym-f72c7.appspot.com/o/Images%2Flogo.png?alt=media&token=8504510e-a373-4235-9811-da7abd576c0d)",backgroundSize:"cover",backgroundPosition:"center",opacity:.03})},null,4),e.$vuetify.display.smAndDown?(i(),c(w,{key:1},{default:t(()=>[l(s,{cols:"2",align:"start"},{default:t(()=>[l(v,{text:"Back",onClick:h,"prepend-icon":"mdi-arrow-left",variant:"plain"})]),_:1}),l(s,{cols:"8",align:"center"},{default:t(()=>[te]),_:1}),l(s,{cols:"2"})]),_:1})):(i(),c(w,{key:0},{default:t(()=>[l(s,{cols:"2"}),l(s,{cols:"8",align:"center"},{default:t(()=>[_("span",{class:x(["text-3xl font-weight-black",y.value?"text-white":""])},"Sign up",2)]),_:1}),l(s,{cols:"2",align:"end"},{default:t(()=>[l(v,{icon:"mdi-close",variant:"plain",class:"text-xl",onClick:h})]),_:1})]),_:1})),l(J,{modelValue:r.value,"onUpdate:modelValue":n[6]||(n[6]=a=>r.value=a),mobile:e.$vuetify.display.smAndDown,elevation:"0",class:x(["bg-transparent",y.value?"text-white":""])},{default:t(()=>[l(j,null,{default:t(()=>[l(F,{complete:d.value[0],title:U.value[0].text,value:"1"},null,8,["complete","title"]),l(T),l(F,{complete:d.value[1],title:U.value[1].text,value:"2"},null,8,["complete","title"])]),_:1}),l(O,null,{default:t(()=>[l(D,{value:"1"},{default:t(()=>[l(S,{modelValue:d.value[0],"onUpdate:modelValue":n[1]||(n[1]=a=>d.value[0]=a)},{default:t(()=>[l(w,null,{default:t(()=>[(i(!0),P($,null,E(m.value,a=>(i(),c(s,{cols:"12",md:"6",key:e.name},{default:t(()=>[l(q,{modelValue:a.value,"onUpdate:modelValue":k=>a.value=k,label:a.label,rules:a.rules,"prepend-inner-icon":a.icon,variant:"underlined"},null,8,["modelValue","onUpdate:modelValue","label","rules","prepend-inner-icon"])]),_:2},1024))),128)),l(s,{cols:"12",md:"6"},{default:t(()=>[l(G,{modelValue:g.value,"onUpdate:modelValue":n[0]||(n[0]=a=>g.value=a),label:"Gender",items:N.value,"prepend-inner-icon":"mdi-family-tree",rules:L,variant:"underlined"},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(D,{value:"2"},{default:t(()=>[l(S,{modelValue:d.value[1],"onUpdate:modelValue":n[2]||(n[2]=a=>d.value[1]=a)},{default:t(()=>[l(w,null,{default:t(()=>[(i(!0),P($,null,E(f.value,a=>(i(),c(s,{cols:"12",md:"6",key:e.name},{default:t(()=>[l(q,{modelValue:a.value,"onUpdate:modelValue":k=>a.value=k,label:a.label,rules:a.rules,"prepend-inner-icon":a.icon,type:a.visible?"text":"password","append-inner-icon":a.visible?"mdi-eye":" mdi-eye-off","onClick:appendInner":k=>a.visible=!a.visible,autocomplete:"current-password",disabled:p.value,variant:"underlined"},null,8,["modelValue","onUpdate:modelValue","label","rules","prepend-inner-icon","type","append-inner-icon","onClick:appendInner","disabled"])]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(H,null,{next:t(()=>[l(s,{cols:r.value==0?"12":"6",sm:r.value==0?"12":"6"},{default:t(()=>[r.value==0?(i(),c(v,{key:0,block:"",onClick:n[3]||(n[3]=a=>r.value++),disabled:!d.value[r.value],text:"Next","append-icon":"mdi-arrow-right",class:"text-h5",color:"success"},null,8,["disabled"])):(i(),P("span",ne,[I.value?B("",!0):(i(),c(W,{key:0,activator:"parent",location:"top","no-overflow":""},{default:t(()=>[A(" Fill required fields ")]),_:1})),_("span",null,[l(v,{block:"",color:"green-darken-2",onClick:n[4]||(n[4]=a=>z()),loading:p.value,disabled:!R.value},{default:t(()=>[A("Sign up")]),_:1},8,["loading","disabled"])])]))]),_:1},8,["cols","sm"])]),prev:t(()=>[r.value==1?(i(),c(s,{key:0,cols:"6",sm:"6"},{default:t(()=>[l(v,{block:"",disabled:p.value,onClick:n[5]||(n[5]=a=>r.value--),text:"Previous","prepend-icon":"mdi-arrow-left",class:""},null,8,["disabled"])]),_:1})):B("",!0)]),_:1})]),_:1},8,["modelValue","mobile","class"])],2)]),_:1},8,["modelValue","fullscreen"])}}});export{ie as default};