(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{5421:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"text-h4 text-center"},[e._v("Audience Engagement")]),i("field-options",{attrs:{resources:"",repeatable:"",segmentName:e.segmentName,fieldName:"cAUpdateEmail"},scopedSlots:e._u([{key:"default",fn:function(e){return[i("ca-update-email",{ref:"cAUpdateEmail",attrs:{fieldDataIndex:e.dataIndex}})]}},{key:"resourcesPre",fn:function(){return[i("span",[e._v("Link: ")])]},proxy:!0}])})],1)},l=[],n=i("dbcc"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._m(0),i("q-separator"),i("div",[i("q-input",{staticClass:"q-my-sm",attrs:{label:"Clinical Advances URL",value:e.cAURL,readonly:"",hint:"Edit in Clinical Advances Page Details"},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-icon",{attrs:{name:"link"}})]},proxy:!0}])}),i("q-input",{ref:"subjectLine",staticClass:"q-my-sm",attrs:{label:"Subject Line",value:e.subjectLineValue,hint:"Pre-filled from Clinical Advances Page Details/CA Title, where applicable.",disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired"),"bottom-slots":""},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"subjectLine"})}}}),i("q-select",{ref:"region",staticClass:"q-my-sm",attrs:{clearable:"",label:"Region",value:e.fieldData[e.fieldDataIndex].region,options:e.regions,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"region"},!0)}}}),i("q-input",{ref:"specialityTargeting",staticClass:"q-my-sm",attrs:{label:"Specialty Targeting",value:e.fieldData[e.fieldDataIndex].specialityTargeting,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"specialityTargeting"})}}}),i("q-input",{ref:"eSignature",staticClass:"q-my-sm",attrs:{label:"E-signature",value:e.eSignatureValue,hint:"Pre-filled from Steering Committee Chair, if one exists.","bottom-slots":"",disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"eSignature"})}}}),i("q-input",{ref:"dropFolderLocation",staticClass:"q-my-sm",attrs:{label:"Folder Location",rules:e.addValidation("ignoreRequired-urlOptional"),value:e.fieldData[e.fieldDataIndex].dropFolderLocation,disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"dropFolderLocation"})}},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-icon",{attrs:{name:"link"}})]},proxy:!0}])}),i("span",{staticClass:"text-bold"},[e._v("Email Template")]),i("div",{staticClass:"row justify-end q-my-md"},[i("q-btn-dropdown",{staticClass:"bg-positive text-white",attrs:{icon:"add",label:"Generate Email Template","no-caps":""},model:{value:e.templateMenu,callback:function(t){e.templateMenu=t},expression:"templateMenu"}},[i("div",{staticClass:"text-bold q-pa-md"},[e._v("Select options for populating the template:")]),i("q-list",[i("q-item",[i("q-item-section",[i("span",[e._v("Type: ")]),i("q-option-group",{attrs:{dense:"",type:"radio",options:e.templateOptions},model:{value:e.selectedTemplate,callback:function(t){e.selectedTemplate=t},expression:"selectedTemplate"}})],1)],1),i("q-item",[i("q-item-section",[i("q-select",{attrs:{label:"Select activity to include",options:e.activityOptions,"emit-value":"","map-options":"","bottom-slots":!0},scopedSlots:e._u([e.activityOptions.length?null:{key:"hint",fn:function(){return[i("div",{staticClass:"text-negative"},[e._v("No completed activities available for this ticket.")])]},proxy:!0}],null,!0),model:{value:e.selectedActivity,callback:function(t){e.selectedActivity=t},expression:"selectedActivity"}})],1)],1),i("q-item",[i("q-checkbox",{attrs:{label:"Fill available info from the prodticket"},model:{value:e.prefill,callback:function(t){e.prefill=t},expression:"prefill"}})],1),i("q-item",[i("q-item-section",[i("q-btn",{staticClass:"text-white",class:e.selectedTemplate.length?"bg-positive":"bg-grey-4",attrs:{label:"Generate",disable:e.selectedTemplate.length<1},on:{click:e.selectTemplate}})],1)],1)],1)],1)],1),i("custom-editor",{ref:"emailTemplate",attrs:{value:e.fieldData[e.fieldDataIndex].emailTemplate,disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"emailTemplate",ignoreValidations:!0},!0)}}})],1)],1)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"text-h6"},[e._v("Clinical Advances Update Email")])])}],c=(i("8e6e"),i("8a81"),i("7f7f"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("7514"),i("9523")),d=i.n(c),o=i("3544"),u=i("65d6"),p=i("3780"),f=i("2f62"),m=i("2ef0"),g=i.n(m);function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){d()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var h={props:["fieldDataIndex"],mixins:[o["a"]],components:{"custom-editor":u["a"]},data:function(){return{fieldName:"cAUpdateEmail",subjectLine:"",url:"",dropFolderLocation:"",region:"",specialityTargeting:"",eSignature:"",emailTemplate:"",defaultField:{subjectLine:"",url:"",dropFolderLocation:"",region:"",specialityTargeting:"",eSignature:"",emailTemplate:""},regions:["US audience","OUS","FRANCE","EUROPE","EU5- France, Germany, Italy, Spain, UK","APAC (Asia Australia and New Zealand) + MENA (Middle East North Africa)","LATAM","LATAM & Europe","EUROPE + MENA","EUROPE + MENA + LATAM","EUROPE + CANADA","CHINA","JAPAN","ASIA","ASIA + New Zealand + Australia (APAC)","LATAM + Spain + Portugal","EUROPE + CANADA","Austria + Germany + Liechtenstein + Switzerland"],selectedTemplate:"",selectedActivity:"",templateMenu:!1,templateOptions:[{label:"New",value:"New"},{label:"Renewal",value:"Renewal"},{label:"Update",value:"Update"}],prefill:!0}},methods:{selectTemplate:function(){var e=Object(p["a"])({type:this.selectedTemplate,title:this.prefill?this.cATitle:null,url:this.prefill?this.cAURL:null,geoTarget:this.prefill?this.programGeoTarget:null,committeeChair:this.prefill?this.committeeChair:null,leadSpecialty:this.prefill?this.leadSpecialty:null,activity:this.selectedActivity?this.activities[this.selectedActivity.fieldDataIndex].activities[this.selectedActivity.activityKey]:null});this.updateFieldData(e,{fieldDataIndex:this.fieldDataIndex,inputBinding:"emailTemplate"},!0),this.templateMenu=!1}},computed:b(b({},Object(f["c"])("tickets",["getFieldData","programGeoTarget"])),{},{cATitle:function(){var e=this.getFieldData({fieldName:"clinicalAdvancesTitle",segmentName:"clinicalAdvancesPageDetails"});return e&&e[1].text&&e[1].text.length?e[1].text:null},subjectLineValue:function(){var e=g.a.get(this.fieldData,[this.fieldDataIndex,"subjectLine"],"");return e.length?this.fieldData[this.fieldDataIndex].subjectLine:this.cATitle},eSignatureValue:function(){var e=g.a.get(this.fieldData,[this.fieldDataIndex,"eSignature"],"");return e.length?this.fieldData[this.fieldDataIndex].eSignature:this.committeeChair},cAURL:function(){var e=this.getFieldData({fieldName:"clinicalAdvancesURL",segmentName:"clinicalAdvancesPageDetails"});return e&&e[1].url&&e[1].url.length?"https://www.medscape.org/sites/advances/"+e[1].url:null},committeeChair:function(){var e,t=this.getFieldData({fieldName:"contributor",segmentName:"steeringCommittee"});if(t)return e=Object.keys(t).find((function(e){return"Steering Committee Chair"==t[e].contributorGroup})),e&&t[e].name.length?t[e].name:null},leadSpecialty:function(){var e=this.getFieldData({fieldName:"therapeuticAreaLeadSpecialty",segmentName:"generalInformation"});return e&&e[1].specialtiesSelect.length?e[1].specialtiesSelect[0]:null},activities:function(){return this.getFieldData({fieldName:"additionalBuckets",segmentName:"activities"})},activityOptions:function(){var e=this,t=[];return Object.keys(this.activities).forEach((function(i){e.activities[i].activities&&Object.keys(e.activities[i].activities).forEach((function(a){e.activities[i].activities[a].activityTitle&&e.activities[i].activities[a].activityTitle.length&&t.push({label:e.activities[i].activities[a].activityTitle,value:{activityKey:a,fieldDataIndex:i}})}))})),t}})},y=h,D=i("2877"),A=Object(D["a"])(y,s,r,!1,null,null,null),x=A.exports,T=i("4525"),O={mixins:[T["a"]],data:function(){return{segmentName:"audienceEngagement"}},components:{"field-options":n["a"],"ca-update-email":x}},q=O,C=Object(D["a"])(q,a,l,!1,null,null,null);t["default"]=C.exports}}]);