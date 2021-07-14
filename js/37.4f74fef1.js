(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"7c33":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"text-h4 text-center"},[e._v("Product-Specific Information and Add-ons")]),s("field-options",{attrs:{segmentName:e.segmentName,fieldName:"addOns"}},[s("add-ons",{ref:"addOns"})],1),s("field-options",{attrs:{segmentName:e.segmentName,fieldName:"podcast"}},[s("podcast",{ref:"podcast"})],1)],1)},i=[],n=s("dbcc"),d=s("4525"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("q-input",{ref:"podcastName",staticClass:"q-mb-md",attrs:{label:"If a Podcast Series, list name of show",value:e.fieldData[1].podcastName,rules:e.addValidation(),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"podcastName"})}}}),s("q-input",{ref:"googleLink",attrs:{label:"Podcast show Google Play link",value:e.fieldData[1].googleLink,rules:e.addValidation("urlOptional"),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"googleLink"})}}}),s("q-input",{ref:"appleLink",attrs:{label:"Podcast show Apple Podcast link",value:e.fieldData[1].appleLink,rules:e.addValidation("urlOptional"),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"appleLink"})}}})],1)},o=[],r=s("3544"),u={mixins:[r["a"]],data:function(){return{fieldName:"podcast"}}},p=u,c=s("2877"),m=Object(c["a"])(p,l,o,!1,null,null,null),f=m.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row justify-start items-center q-mb-md"},[s("span",{staticClass:"q-mr-md text-bold"},[e._v("Is there an Outcomes study?")]),s("q-select",{ref:"outcomesStudy",staticClass:"col-grow",attrs:{label:"Outcomes Study",options:e.outcomesOptions,value:e.fieldData[1].outcomesStudy,disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"outcomesStudy"},!0)}}})],1),s("div",{staticClass:"row justify-start items-center q-mb-md"},[s("span",{staticClass:"q-mr-md text-bold"},[e._v("\n            If polling questions are included, are they pre/post pairs?\n        ")]),s("q-option-group",{ref:"pollingQuestions",attrs:{type:"radio",options:e.pollingOptions,value:e.fieldData[1].pollingQuestions,inline:"",disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"pollingQuestions"},!0)}}})],1),s("div",{staticClass:"row justify-start items-center q-mb-md"},[s("span",{staticClass:"q-mr-md text-bold"},[e._v("\n            Is there a Medscape Discuss or Discuss Lite?\n        ")]),s("q-option-group",{ref:"medscapeDiscuss",attrs:{type:"radio",options:e.discussOptions,value:e.fieldData[1].medscapeDiscuss,inline:"",disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"medscapeDiscuss"},!0)}}})],1),s("div",{staticClass:"row justify-start items-center q-mb-md"},[s("span",{staticClass:"q-mr-md text-bold"},[e._v("\n            Is there an associated HCP Perspective?\n        ")]),s("q-option-group",{ref:"hCPPerspective",attrs:{type:"radio",options:e.yesNoOptions,value:e.fieldData[1].hCPPerspective,inline:"",disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"hCPPerspective"},!0)}}})],1),s("div",{staticClass:"row justify-start items-center q-mb-md"},[s("span",{staticClass:"q-mr-md text-bold"},[e._v("\n            Does this program have an associated PTL?\n        ")]),s("q-option-group",{ref:"ptl",attrs:{type:"radio",options:e.yesNoOptions,value:e.fieldData[1].ptl,inline:"",disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"ptl"},!0)}}})],1)])},v=[],D={mixins:[r["a"]],data:function(){return{fieldName:"addOns",outcomesOptions:["No","Linked Learning Assessment (Medscape)","LLA 2.0","Extended Linked Learning Assessment (ELLA)","LATAM LLA","Performance Linked Learning Assessment (Medscape)","Tailored Linked Learning Assessment (TLLA)","Advanced Medscape Micro Outcomes","Level 5 Performance Assessment","MIPS","Planned Change Assessment (HPC)","1-Question Pre-/Post-Assessment (Medscape)","2 Performance Case-Based Assessment","Chart-Stimulated Recall","Corp Acct Pre-/Post-Assessment-LLA report (Medscape)","Corp Acct Pre-/Post-Assessment-No LLA report (Medscape)","Custom Outcomes Product","Series-Based Planned Change Assessment (HPC)"],pollingOptions:[{label:"No",value:!1},{label:"Yes",value:!0},{label:"N/A",value:null}],discussOptions:[{label:"No",value:"No"},{label:"Medscape Discuss",value:"Medscape Discuss"},{label:"Medscape Discuss Lite",value:"Medscape Discuss Lite"}],yesNoOptions:[{label:"No",value:!1},{label:"Yes",value:!0}]}}},g=D,L=Object(c["a"])(g,b,v,!1,null,null,null),P=L.exports,C={mixins:[d["a"]],data:function(){return{segmentName:"productSpecific"}},components:{"field-options":n["a"],"add-ons":P,podcast:f}},A=C,x=Object(c["a"])(A,a,i,!1,null,null,null);t["default"]=x.exports}}]);