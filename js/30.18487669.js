(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{b8c7:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"text-h4 text-center"},[e._v("Video")]),t("field-options",{attrs:{resources:"",segmentName:e.segmentName,fieldName:"videoSection"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("video-section",{ref:"videoSection",attrs:{fieldDataIndex:e.dataIndex}})]}},{key:"resourcesPre",fn:function(){return[t("span",[e._v("Link: ")])]},proxy:!0}])})],1)},n=[],l=t("4525"),d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("q-input",{ref:"name",staticClass:"q-my-sm",attrs:{filled:"","stack-label":"",label:"Faculty Name",rules:e.addValidation(),value:e.fieldData[e.fieldDataIndex].name,disable:e.fieldDisabled},on:{input:function(a){return e.updateFieldData(a,{fieldDataIndex:e.fieldDataIndex,inputBinding:"name"})}}}),t("q-input",{ref:"title",staticClass:"q-my-sm",attrs:{filled:"","stack-label":"",label:"Title",rules:e.addValidation(),value:e.fieldData[e.fieldDataIndex].title,disable:e.fieldDisabled},on:{input:function(a){return e.updateFieldData(a,{fieldDataIndex:e.fieldDataIndex,inputBinding:"title"})}}}),t("q-input",{ref:"heading",staticClass:"q-my-sm",attrs:{filled:"","stack-label":"",label:"Heading",rules:e.addValidation(),value:e.fieldData[e.fieldDataIndex].heading,disable:e.fieldDisabled},on:{input:function(a){return e.updateFieldData(a,{fieldDataIndex:e.fieldDataIndex,inputBinding:"heading"})}}}),t("q-input",{ref:"place",staticClass:"q-my-sm",attrs:{filled:"","stack-label":"",label:"Location",rules:e.addValidation(),value:e.fieldData[e.fieldDataIndex].place,disable:e.fieldDisabled},on:{input:function(a){return e.updateFieldData(a,{fieldDataIndex:e.fieldDataIndex,inputBinding:"place"})}}}),t("q-input",{ref:"url",staticClass:"q-my-sm",attrs:{filled:"","stack-label":"",label:"Video URL",rules:e.addValidation("urlOptional"),value:e.fieldData[e.fieldDataIndex].url,disable:e.fieldDisabled},on:{input:function(a){return e.updateFieldData(a,{fieldDataIndex:e.fieldDataIndex,inputBinding:"url"})}},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"link"}})]},proxy:!0}])}),t("q-input",{ref:"videoDescription",staticClass:"q-my-sm",attrs:{value:e.fieldData[e.fieldDataIndex].videoDescription,filled:"",autogrow:"","stack-label":"",label:"Video Description",rules:e.addValidation()},on:{input:function(a){return e.updateFieldData(a,{fieldDataIndex:e.fieldDataIndex,inputBinding:"videoDescription"})}}})],1)},s=[],u=t("3544"),r={props:["fieldDataIndex"],mixins:[u["a"]],data:function(){return{fieldName:"videoSection",url:"",name:"",title:"",place:"",heading:"",videoDescription:"",defaultField:{url:"",name:"",title:"",place:"",heading:"",videoDescription:""}}}},o=r,f=t("2877"),c=Object(f["a"])(o,d,s,!1,null,null,null),p=c.exports,D=t("cbfa"),m={mixins:[l["a"]],data:function(){return{segmentName:"videos"}},components:{"field-options":D["a"],"video-section":p}},x=m,b=Object(f["a"])(x,i,n,!1,null,null,null);a["default"]=b.exports}}]);