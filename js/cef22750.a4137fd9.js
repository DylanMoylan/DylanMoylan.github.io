(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cef22750"],{"09a3":function(t,e,n){"use strict";var a=n("1102"),i=n.n(a);i.a},1102:function(t,e,n){},cbc0:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-h4 text-center"},[t._v("Partner Details")]),n("field-options",{attrs:{segmentName:t.segmentName,fieldName:"partnerLogoRequired"}},[n("partner-logo-required")],1),n("field-options",{attrs:{segmentName:t.segmentName,fieldName:"copyrightStatement"}},[n("copyright-statement")],1),n("field-options",{attrs:{segmentName:t.segmentName,fieldName:"partnerStatement"}},[n("partner-statement")],1)],1)},i=[],o=n("cbfa"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-select",{attrs:{filled:"","stack-label":"",options:t.options,label:"Copyright Statement"},on:{input:function(e){return t.updateFieldStatus(e)}},model:{value:t.option,callback:function(e){t.option=e},expression:"option"}}),n("q-input",{directives:[{name:"show",rawName:"v-show",value:"Other"===t.option,expression:"option === 'Other'"}],ref:"other",attrs:{filled:"","stack-label":"",label:"Enter Copyright Statement"},on:{input:function(e){return t.updateFieldData(e,{fieldDataIndex:"1",inputBinding:"option"})}},model:{value:t.other,callback:function(e){t.other=e},expression:"other"}})],1)},r=[],s=n("3544"),u={mixins:[s["a"]],data:function(){return{fieldName:"copyrightStatement",option:null,options:["Medscape LLC","WebMD Global","LLC","Other"],other:""}},methods:{updateFieldStatus:function(t){var e=this;"Other"===this.option?(this.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"other"}),setTimeout((function(){e.$refs.other.focus()}),500)):this.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"option"})}}},d=u,c=n("2877"),p=Object(c["a"])(d,l,r,!1,null,null,null),f=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"q-gutter-sm"},[n("q-checkbox",{staticStyle:{"min-width":"350px"},attrs:{"right-label":"",label:"Partner Logo Required"},on:{input:function(e){return t.updateStatus(e)}},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1),t.checkbox?n("div",[n("q-input",{attrs:{label:"Partner Logo URL",filled:"","stack-label":"",rules:t.addValidation("urlOptional")},on:{input:function(e){return t.updateFieldData(e,{fieldDataIndex:"1",inputBinding:"logoUrl"})}},model:{value:t.logoUrl,callback:function(e){t.logoUrl=e},expression:"logoUrl"}})],1):t._e()])},h=[],x={mixins:[s["a"]],data:function(){return{fieldName:"partnerLogoRequired",checkbox:!1,logoUrl:""}},methods:{updateStatus:function(t){this.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"checkbox"}),!1===this.checkbox&&(this.logoUrl="",this.updateFieldData("",{fieldDataIndex:"1",inputBinding:"logoUrl"}))}}},g=x,b=Object(c["a"])(g,m,h,!1,null,null,null),v=b.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-input",{attrs:{label:"Partner Statement",type:"textarea","stack-label":"",filled:""},on:{input:function(e){return t.updateFieldData(e,{fieldDataIndex:"1",inputBinding:"text"})}},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)},D=[],N={mixins:[s["a"]],data:function(){return{fieldName:"partnerStatement",text:"Developed through a partnership between Medscape and "}}},S=N,q=(n("09a3"),Object(c["a"])(S,k,D,!1,null,null,null)),w=q.exports,_=n("4525"),F={mixins:[_["a"]],data:function(){return{segmentName:"partnerDetails"}},components:{"field-options":o["a"],"copyright-statement":f,"partner-logo-required":v,"partner-statement":w}},L=F,O=Object(c["a"])(L,a,i,!1,null,null,null);e["default"]=O.exports}}]);