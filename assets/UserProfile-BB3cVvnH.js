import{_ as V}from"./PageContainer-I8IiUcI9.js";import{a as E,r as s,o as k,c as x,b as l,d as e,f as U,bJ as w,E as y}from"./index-C1WUM8Jt.js";import{E as B,a as I}from"./el-form-item-DdzK9npo.js";import{_ as z,E as A,a as F}from"./_plugin-vue_export-helper-CSHEANhK.js";import{E as N}from"./el-overlay-BBXLKL9-.js";import"./el-message-CKx2G1nz.js";import"./castArray-CqmUnHIH.js";const S={__name:"UserProfile",setup(T){const{user:{id:u,username:i,nickname:p,email:_},getUser:c}=E(),m=s(),a=s({username:i,nickname:p,email:_,id:u}),d=s({nickname:[{required:!0,message:"请输入昵称",trigger:"blur"},{pattern:/^\S{2,10}$/,message:"昵称长度应为2到10个字符, 且只能包含字母、数字、下划线、中划线",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{pattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,type:"email",message:"请输入有效的邮箱地址",trigger:["blur","change"]}]}),f=async()=>{await m.value.validate(),await w(a.value),await N.confirm("是否提交修改？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),c(),y.success("修改成功")};return(Z,t)=>{const n=A,r=B,g=F,b=I,v=V;return k(),x(v,{title:"基本资料"},{default:l(()=>[e(b,{model:a.value,rules:d.value,ref_key:"formRef",ref:m,"label-width":"120px",class:"form"},{default:l(()=>[e(r,{label:"登录名称",prop:"loginName"},{default:l(()=>[e(n,{modelValue:a.value.username,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value.username=o),disabled:""},null,8,["modelValue"])]),_:1}),e(r,{label:"用户昵称",prop:"nickname"},{default:l(()=>[e(n,{modelValue:a.value.nickname,"onUpdate:modelValue":t[1]||(t[1]=o=>a.value.nickname=o)},null,8,["modelValue"])]),_:1}),e(r,{label:"用户邮箱",prop:"email"},{default:l(()=>[e(n,{modelValue:a.value.email,"onUpdate:modelValue":t[2]||(t[2]=o=>a.value.email=o)},null,8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(g,{type:"primary",onClick:f},{default:l(()=>[U("提交修改")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}}},j=z(S,[["__scopeId","data-v-c697143b"]]);export{j as default};
