(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{fc5f:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"text-h4 text-center"},[e._v("Clinical Advances Page Details")]),n("field-options",{attrs:{segmentName:e.segmentName,fieldName:"clinicalAdvancesTitle"}},[n("clinical-advances-title",{ref:"clinicalAdvancesTitle"})],1),n("field-options",{attrs:{segmentName:e.segmentName,fieldName:"clinicalAdvancesTeaser"}},[n("clinical-advances-teaser",{ref:"clinicalAdvancesTeaser"})],1),n("field-options",{attrs:{resources:"",resourcesPrefix:"https://www.medscape.org/sites/advances/",segmentName:e.segmentName,fieldName:"clinicalAdvancesURL"},scopedSlots:e._u([{key:"resourcesPre",fn:function(){return[n("span",[e._v("Link: ")])]},proxy:!0}])},[n("clinical-advances-url",{ref:"clinicalAdvancesURL"})],1),n("field-options",{attrs:{segmentName:e.segmentName,fieldName:"clinicalAdvancesIntroduction"}},[n("clinical-advances-introduction",{ref:"clinicalAdvancesIntroduction"})],1)],1)},i=[],l=n("cbfa"),s=n("db40"),c=n("ac78"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-input",{ref:"url",attrs:{filled:"","stack-label":"",prefix:"https://www.medscape.org/sites/advances/",value:e.fieldData["1"].url,disable:e.fieldDisabled,label:"Clinical Advances URL","bottom-slots":"","hide-hint":"",rules:e.addValidation("urlSnippet")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"url"})}},scopedSlots:e._u([{key:"hint",fn:function(){return[n("div",{staticClass:"text-negative"},[e._v("For new pages or updates only")])]},proxy:!0},{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"link"}})]},proxy:!0}])})],1)},r=[],o=n("3544"),u={mixins:[o["a"]],data:function(){return{url:"",fieldName:"clinicalAdvancesURL"}}},f=u,p=n("2877"),m=Object(p["a"])(f,d,r,!1,null,null,null),v=m.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"text-bold text-left q-pa-sm"},[e._v("Introduction")]),n("custom-editor",{ref:"text",attrs:{disable:e.fieldDisabled,value:e.fieldData[1].text},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"text"},!0)}}}),n("div",{staticClass:"text-left q-pa-sm"},[e._v("Please use 80 words or less.")])],1)},g=[],b=(n("28a5"),n("eed6")),w={mixins:[o["a"]],components:{"custom-editor":b["a"]},data:function(){return{text:"",fieldName:"clinicalAdvancesIntroduction"}},computed:{wordCount:function(){return this.fieldData[1].text.length?this.fieldData[1].text.trim().split(" ").length:0}}},N=w,h=Object(p["a"])(N,x,g,!1,null,null,null),A=h.exports,_=n("4525"),D={mixins:[_["a"]],data:function(){return{segmentName:"clinicalAdvancesPageDetails"}},components:{"field-options":l["a"],"clinical-advances-teaser":s["a"],"clinical-advances-title":c["a"],"clinical-advances-url":v,"clinical-advances-introduction":A}},k=D,y=Object(p["a"])(k,a,i,!1,null,null,null);t["default"]=y.exports}}]);