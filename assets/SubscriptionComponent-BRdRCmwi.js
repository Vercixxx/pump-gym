import{u as L,c as f,a as O,z as Y,r as i,b as a,o as c,l as r,f as l,g as t,w as e,h as v,F as C,m as P,y,K as j,n as U,I as q,J as G,M as Q}from"./index-DIL-cHOt.js";const W={class:"min-h-screen"},X={key:0},Z={key:1},tt=l("h3",{class:"my-3"},"History of payments",-1),et=l("span",{class:"text-3xl font-weight-black"},"Cancel Subscription",-1),ot={__name:"SubscriptionComponent",setup(at){const x=L(),_=f(()=>x.userData.subscription),V=f(()=>x.userUid),B=O(),k=f(()=>B.name.value==="dark"),I=Y(),z=s=>{I.push(s)},h=i([{text:"Plan",value:"plan"},{text:"Status",value:"status"},{text:"Start Date",value:"startDate"},{text:"End Date",value:"endDate"},{text:"Period",value:"period"}]),b=i(!1),S=i(10),H=i(0),D=i([]),T=i([{title:"Date",align:"start",key:"date"},{title:"Cost",align:"start",key:"cost"},{title:"Plan",align:"start",key:"plan"},{title:"Status",align:"start",key:"status"}]),$=async()=>{b.value=!0;try{const s=q(G,"Payments",V.value,"History"),g=(await Q(s)).docs.map(u=>{const d=u.data().paymentDate.toDate().toISOString().split("T")[0];return{...u.data(),date:d}});console.log(g),D.value=g}catch(s){console.log(s)}b.value=!1},m=i(!1);return(s,o)=>{const g=a("v-card-title"),u=a("v-btn"),d=a("v-card-text"),p=a("v-col"),w=a("v-row"),N=a("v-table"),E=a("v-icon"),F=a("v-expansion-panel-title"),M=a("v-data-table-server"),R=a("v-expansion-panel-text"),A=a("v-expansion-panel"),J=a("v-expansion-panels"),K=a("v-dialog");return c(),r("div",W,[l("div",{class:U(["mt-3 rounded backdrop-blur-xl",k.value?" bg-black/70":" bg-white/30"])},[_.value?(c(),r("span",Z,[t(w,null,{default:e(()=>[t(p,{cols:"0",sm:"3"}),t(p,{align:"center",class:"font-weight-black text-3xl"},{default:e(()=>[v(" Subscription ")]),_:1}),t(p,{cols:"12",sm:"3",align:s.$vuetify.display.smAndDown?"center":"end"},{default:e(()=>[t(u,{size:"large",text:"Cancel subscription",onClick:o[1]||(o[1]=n=>m.value=!0),class:"font-weight-black hover:bg-red-500 me-2",variant:"tonal","append-icon":"mdi-cancel"})]),_:1},8,["align"])]),_:1}),t(d,null,{default:e(()=>[t(d,null,{default:e(()=>[t(N,{style:{"background-color":"rgba(250, 250, 250, 0)"}},{default:e(()=>[l("thead",null,[l("tr",null,[(c(!0),r(C,null,P(h.value,n=>(c(),r("th",{class:"text-left",key:n.value},y(n.text),1))),128))])]),l("tbody",null,[l("tr",{style:j(_.value.status=="active"?"background-color: rgba(20, 250, 20, 0.2);":"background-color: rgba(250, 20, 20, 0.2);")},[(c(!0),r(C,null,P(h.value,n=>(c(),r("td",{key:n.value},y(_.value[n.value]),1))),128))],4)])]),_:1}),t(J,{class:"mt-5"},{default:e(()=>[t(A,{onClick:$},{default:e(()=>[t(F,{"disable-icon-rotate":""},{actions:e(()=>[t(E,{color:"info",icon:"mdi-invoice-text-multiple"})]),default:e(()=>[tt]),_:1}),t(R,null,{default:e(()=>[t(M,{"items-per-page":S.value,"onUpdate:itemsPerPage":o[2]||(o[2]=n=>S.value=n),headers:T.value,items:D.value,"items-length":H.value,loading:b.value,"item-value":"name","onUpdate:options":s.loadItems},null,8,["items-per-page","headers","items","items-length","loading","onUpdate:options"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])):(c(),r("span",X,[t(g,{class:"font-weight-black text-h6"},{default:e(()=>[v("Subscription")]),_:1}),t(d,null,{default:e(()=>[v(" You don't have a subscription yet. Buy one to access all the features. "),t(u,{color:"success",onClick:o[0]||(o[0]=n=>z("/subscriptions")),variant:"pain",class:"font-weight-black"},{default:e(()=>[v("Buy subscription now!")]),_:1})]),_:1})])),t(K,{modelValue:m.value,"onUpdate:modelValue":o[4]||(o[4]=n=>m.value=n),persistent:"",transition:"dialog-top-transition"},{default:e(()=>[l("div",{class:U(["rounded-xl pa-4",k.value?"bg-slate-800":"bg-slate-200"])},[t(w,null,{default:e(()=>[t(p,{cols:"2"}),t(p,{cols:"8",align:"center"},{default:e(()=>[et]),_:1}),t(p,{cols:"2",align:"end"},{default:e(()=>[t(u,{icon:"mdi-close",variant:"plain",class:"text-xl",onClick:o[3]||(o[3]=n=>m.value=!1)})]),_:1})]),_:1}),t(d,null,{default:e(()=>[v(y(_.value),1)]),_:1})],2)]),_:1},8,["modelValue"])],2)])}}};export{ot as default};
