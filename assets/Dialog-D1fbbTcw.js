import{d as f,u as k,c as r,a as b,b as o,o as w,e as h,w as a,h as t,g as i,f as C,z as d,i as y}from"./index-DodVMhY3.js";const V={class:"ms-5 mt-5 font-weight-black text-wrap text-2xl text-center"},S=f({__name:"Dialog",setup(T){const u=k(),e=r(()=>u.dialog),_=b(),n=r(()=>_.name.value==="dark");return(B,l)=>{const m=o("v-card-text"),c=o("v-btn"),s=o("v-col"),v=o("v-row"),g=o("v-card"),p=o("v-dialog");return w(),h(p,{modelValue:e.value.show,"onUpdate:modelValue":l[0]||(l[0]=x=>e.value.show=x),persistent:"",transition:"dialog-top-transition","max-width":"850 ",style:i(n.value?"background-color: rgba(0, 0, 0, 0.9);":"background-color: rgba(0, 0, 0, 0.2);")},{default:a(()=>[t(g,{style:i(n.value?"background-color:rgba(30, 46, 84, 0.9)":"background-color:rgba(226, 232, 240, 0.9)")},{default:a(()=>[C("div",V,d(e.value.title),1),t(m,{align:"center"},{default:a(()=>[y(d(e.value.message),1)]),_:1}),t(v,{class:"ma-3"},{default:a(()=>[t(s,{cols:"12",sm:"6",align:"center"},{default:a(()=>[t(c,{class:"w-75",onClick:e.value.cancelAction,text:e.value.cancelText,variant:"tonal",color:"red"},null,8,["onClick","text"])]),_:1}),t(s,{cols:"12",sm:"6",align:"center"},{default:a(()=>[t(c,{class:"w-75",onClick:e.value.confirmAction,text:e.value.confirmText,variant:"tonal",color:"success"},null,8,["onClick","text"])]),_:1})]),_:1})]),_:1},8,["style"])]),_:1},8,["modelValue","style"])}}});export{S as default};