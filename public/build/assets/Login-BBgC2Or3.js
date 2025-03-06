import{h as v,i as x,v as _,f as k,o as n,T as h,c,w as d,a as o,g as p,b as r,u as t,Z as V,t as B,d as C,j as $,e as f,n as P}from"./app-HfhJK-Yd.js";import{_ as q}from"./GuestLayout-C55mAbIO.js";import{_ as g,a as w,b}from"./TextInput-DAGkN3d1.js";import{P as N}from"./PrimaryButton-D49whSOu.js";import"./ApplicationLogo-DMy2eQrV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const U=["value"],L={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(l,{emit:s}){const i=s,m=l,e=v({get(){return m.checked},set(a){i("update:checked",a)}});return(a,u)=>x((n(),k("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":u[0]||(u[0]=y=>e.value=y),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,U)),[[_,e.value]])}},R={key:0,class:"mb-4 font-medium text-sm text-green-600"},S={class:"mt-4"},j={class:"block mt-4"},D={class:"flex items-center"},E={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const s=h({email:"",password:"",remember:!1}),i=()=>{s.post(route("login"),{onFinish:()=>s.reset("password")})};return(m,e)=>(n(),c(q,null,{default:d(()=>[o(t(V),{title:"Log in"}),l.status?(n(),k("div",R,B(l.status),1)):p("",!0),r("form",{onSubmit:C(i,["prevent"])},[r("div",null,[o(g,{for:"email",value:"Email"}),o(w,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(s).email,"onUpdate:modelValue":e[0]||(e[0]=a=>t(s).email=a),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(b,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),r("div",S,[o(g,{for:"password",value:"Password"}),o(w,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:t(s).password,"onUpdate:modelValue":e[1]||(e[1]=a=>t(s).password=a),required:"",autocomplete:"current-password"},null,8,["modelValue"]),o(b,{class:"mt-2",message:t(s).errors.password},null,8,["message"])]),r("div",j,[r("label",D,[o(L,{name:"remember",checked:t(s).remember,"onUpdate:checked":e[2]||(e[2]=a=>t(s).remember=a)},null,8,["checked"]),e[3]||(e[3]=r("span",{class:"ms-2 text-sm text-gray-600"},"Remember me",-1))])]),r("div",E,[l.canResetPassword?(n(),c(t($),{key:0,href:m.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:d(()=>e[4]||(e[4]=[f(" Forgot your password? ")])),_:1},8,["href"])):p("",!0),o(N,{class:P(["ms-4",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:d(()=>e[5]||(e[5]=[f(" Log in ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{G as default};
