(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["182a5a50"],{"0445":function(e,t,n){"use strict";var a=n("bc82"),i=n.n(a);i.a},bc82:function(e,t,n){},cde3:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("field-options",{attrs:{segmentName:e.segmentName,fieldName:"additionalComments"}},[n("additional-comments")],1),n("field-options",{attrs:{segmentName:e.segmentName,fieldName:"dimensions"}},[n("dimensions")],1),n("field-options",{attrs:{segmentName:e.segmentName,fieldName:"quantity"}},[n("quantity")],1)],1)},i=[],l=n("cbfa"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-input",{attrs:{label:"Additional Comments","stack-label":"",filled:"",type:"textarea"},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"text"})}},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)},u=[],o={data:function(){return{fieldName:"additionalComments",text:""}}},d=o,c=(n("0445"),n("2877")),r=Object(c["a"])(d,s,u,!1,null,null,null),m=r.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-select",{attrs:{options:e.options,filled:"","stack-label":"",label:"Dimensions"},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:1,inputBinding:"text"})}},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}})],1)},p=[],x=n("3544"),b={mixins:[x["a"]],data:function(){return{fieldName:"dimensions",selectValue:"",options:["6x9","A4","A5","OTHER"]}}},v=b,N=Object(c["a"])(v,f,p,!1,null,null,null),g=N.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-input",{attrs:{label:"Quantity",hint:"20,000 cards are standard in the Clinical Advances package","stack-label":"",filled:"",rules:e.addValidation("numeric")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"text"})}},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)},_=[],h={mixins:[x["a"]],data:function(){return{fieldName:"quantity",text:""}}},q=h,D=Object(c["a"])(q,k,_,!1,null,null,null),w=D.exports,y=n("4525"),E={mixins:[y["a"]],data:function(){return{segmentName:"postcards"}},components:{"field-options":l["a"],"additional-comments":m,dimensions:g,quantity:w}},O=E,V=Object(c["a"])(O,a,i,!1,null,null,null);t["default"]=V.exports}}]);