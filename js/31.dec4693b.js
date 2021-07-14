(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{ff6a:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col"},[a("div",{staticClass:"text-h4 text-center"},[e._v("General Information")]),a("project-details"),a("field-options",{attrs:{resources:"",segmentName:e.segmentName,fieldName:"workfrontLink"},scopedSlots:e._u([{key:"resourcesPre",fn:function(){return[a("span",[e._v("Link: ")])]},proxy:!0}])},[a("default-url",{ref:"workfrontLink",attrs:{fieldName:"workfrontLink",label:"Workfront Link"}})],1),a("field-options",{attrs:{repeatable:"",segmentName:e.segmentName,fieldName:"deliverableSFNumbers"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("deliverable-s-f-numbers",{ref:"deliverableSFNumbers",attrs:{fieldDataIndex:e.dataIndex}})]}}])}),a("field-options",{attrs:{repeatable:"",segmentName:e.segmentName,fieldName:"previousSFNumbers"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("previous-s-f-numbers",{ref:"previousSFNumbers",attrs:{fieldDataIndex:e.dataIndex}})]}}])}),a("field-options",{attrs:{resources:"",segmentName:e.segmentName,fieldName:"previousSFBoxLink"},scopedSlots:e._u([{key:"resourcesPre",fn:function(){return[a("span",[e._v("Link: ")])]},proxy:!0}])},[a("default-url",{ref:"previousSFBoxLink",attrs:{fieldName:"previousSFBoxLink",label:"Folder Link for Previous SF #'s"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"clinicalAdvances"}},[a("clinical-advances",{ref:"clinicalAdvances"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"productType"}},[a("product-type",{ref:"productType"})],1),a("field-options",{attrs:{resources:"",segmentName:e.segmentName,fieldName:"supporters"},scopedSlots:e._u([{key:"resourcesPost",fn:function(){return[a("span",{staticClass:"text-grey"},[e._v("If the supporter you are looking for isn't available, it must be added to the "),a("router-link",{attrs:{to:{path:"/settings",query:{view:"supporterList"}}}},[e._v("supporter/partner list")])],1)]},proxy:!0}])},[a("supporters",{ref:"supporters"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"therapeuticAreaLeadSpecialty"}},[a("therapeutic-area-lead-specialty",{ref:"therapeuticAreaLeadSpecialty"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"relatedTherapeuticAreaLeadSpecialty"}},[a("related-therapeutic-area-lead-specialty",{ref:"relatedTherapeuticAreaLeadSpecialty"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"liveEvent"}},[a("live-event",{ref:"liveEvent"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"tHFormat"}},[a("th-format",{ref:"tHFormat"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"imeProgram"}},[a("default-option-group",{ref:"imeProgram",attrs:{fieldName:"imeProgram",label:"IME Program?"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"outcomesStudyIncluded"}},[a("outcomes-study-included",{ref:"outcomesStudyIncluded"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"cmeGlobalProgram"}},[a("default-option-group",{ref:"cmeGlobalProgram",attrs:{fieldName:"cmeGlobalProgram",label:"CME Global Program?"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"brandingLogos"}},[a("default-option-group",{ref:"brandingLogos",attrs:{fieldName:"brandingLogos",label:"Branding Logos:",options:e.brandingOptions,inputBinding:"logo"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"selectSupporterAttribution"}},[a("select-supporter-attribution",{ref:"selectSupporterAttribution"})],1)],1)},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-select",{ref:"cASelect",attrs:{clearable:"",value:e.fieldData["1"].cASelect,options:e.options,label:"Clinical Advances",disable:e.fieldDisabled,rules:e.addValidation()},on:{input:e.updateValues}})],1)},l=[],s=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("9523")),o=a.n(s),u=a("3544"),c=a("2f62");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={mixins:[u["a"]],data:function(){return{fieldName:"clinicalAdvances",cASelect:"",options:["New","Renewal","Update"]}},methods:p(p({},Object(c["b"])("tickets",["presetEmailTemplate"])),{},{updateValues:function(e){this.updateFieldData(e,{fieldDataIndex:1,inputBinding:"cASelect"},!0),this.presetEmailTemplate(e)}})},m=f,b=a("2877"),g=Object(b["a"])(m,n,l,!1,null,null,null),v=g.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-select",{ref:"selectvalue",attrs:{value:e.fieldData["1"].selectValue,options:e.options,label:"Product Type",rules:e.addValidation("ignoreRequired"),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:1,inputBinding:"selectValue"})}}})],1)},h=[],O={mixins:[u["a"]],data:function(){return{fieldName:"productType",selectValue:"",options:["CA New Launch","CA Renewal to CA","CA Lite New Launch","CA Renewal to CA Lite","CA Lite Renewal to CA","Collection Page Upgrade"]}}},D=O,N=Object(b["a"])(D,y,h,!1,null,null,null),x=N.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-input",{ref:"sFNumber",attrs:{value:e.fieldData[e.fieldDataIndex].sFNumber,label:"Deliverable SF#'s",disable:e.fieldDisabled,rules:e.addValidation("sfNumber")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"sFNumber"})}}})],1)},j=[],P={props:["fieldDataIndex"],mixins:[u["a"]],data:function(){return{fieldName:"deliverableSFNumbers",sFNumber:"",defaultField:{sFNumber:""}}}},w=P,_=Object(b["a"])(w,S,j,!1,null,null,null),q=_.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-input",{ref:"text",attrs:{value:e.fieldData[e.fieldDataIndex].text,label:"Previous SF#'s",rules:e.addValidation("sfNumber"),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"text"})}}})],1)},I=[],F={props:["fieldDataIndex"],mixins:[u["a"]],data:function(){return{fieldName:"previousSFNumbers",text:"",defaultField:{text:""}}}},k=F,A=Object(b["a"])(k,C,I,!1,null,null,null),E=A.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-sm"},[a("q-select",{ref:"multiSelect",attrs:{value:e.fieldData["1"].multiSelect,"use-input":"","use-chips":"",multiple:"","input-debounce":"0",options:e.filterOptions,disable:e.fieldDisabled,rules:e.addValidation(),label:"Supporters"},on:{"new-value":e.createValue,input:e.setValue,filter:e.filterFn},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}])})],1)},B=[];a("6762"),a("2fdb");function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T=[],$={mixins:[u["a"]],data:function(){return{fieldName:"supporters",multiSelect:null,filterOptions:T}},methods:{setValue:function(e){this.updateFieldData(e,{fieldDataIndex:1,inputBinding:"multiSelect"},!0),this.$refs.multiSelect.updateInputValue("")},createValue:function(e,t){e.length>0&&(T.includes(e)||T.push(e),t(e,"toggle"))},filterFn:function(e,t){var a=this;t((function(){if(""===e)a.filterOptions=T;else{var t=e.toLowerCase();a.filterOptions=T.filter((function(e){return e.toLowerCase().indexOf(t)>-1}))}}))}},computed:M({},Object(c["c"])("settings",["supporterNames"])),mounted:function(){T=this.supporterNames}},G=$,H=Object(b["a"])(G,L,B,!1,null,null,null),R=H.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-select",{ref:"specialtiesSelect",attrs:{clearable:"",multiple:"","use-chips":"",value:e.fieldData["1"].specialtiesSelect,options:e.specialtyOptions,label:"Related Therapeutic Areas/Specialties","emit-value":"",disable:e.fieldDisabled,rules:e.addValidation(),"map-options":""},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:1,inputBinding:"specialtiesSelect"},!0)}}})],1)},Y=[],J=["Allergy & Clinical Immunology","Anesthesiology","Business of Medicine","Cardiology","Clinical Nutrition and Obesity","Critical Care","Dermatology","Diabetes & Endocrinology","Emergency Medicine","Family Medicine/Primary Care","Gastroenterology","General Surgery","Genomic Medicine","Hematology-Oncology","HIV/AIDS","Hospital Medicine","Infectious Diseases","Internal Medicine","Medical Geneticists","Medical Students","Nephrology","Neurology","None","Nurses","OB/GYN & Women's Health","Ophthalmology","Optometry","Orthopaedics","Other","Pathology & Lab Medicine","Pediatrics","Pharmacists","Physician's Assistants","Plastic Surgery & Aesthetic Medicine","Psychiatry","Public Health","Pulmonary Medicine","Radiology","Rheumatology","Surgery","Transplantation","Urology"];function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var z={mixins:[u["a"]],data:function(){return{specialtiesSelect:null,specialties:J,fieldName:"relatedTherapeuticAreaLeadSpecialty"}},computed:W(W({},Object(c["c"])("tickets",["getFieldData"])),{},{therapeuticSpecialties:function(){var e=this.getFieldData({fieldName:"therapeuticAreaLeadSpecialty",segmentName:"generalInformation"});return e[1].specialtiesSelect},specialtyOptions:function(){var e=this;return this.specialties.map((function(t){return{label:t,value:t,disable:null!=e.therapeuticSpecialties&&e.therapeuticSpecialties.includes(t)}}))}})},K=z,X=Object(b["a"])(K,U,Y,!1,null,null,null),Z=X.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-select",{ref:"specialtiesSelect",attrs:{clearable:"",multiple:"","use-chips":"",value:e.fieldData["1"].specialtiesSelect,options:e.specialties,label:"Therapeutic Areas/Specialties",disable:e.fieldDisabled,rules:e.addValidation()},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:1,inputBinding:"specialtiesSelect"},!0)}}})],1)},te=[],ae={mixins:[u["a"]],data:function(){return{specialtiesSelect:null,specialties:null,fieldName:"therapeuticAreaLeadSpecialty"}},mounted:function(){this.specialties=J}},ie=ae,re=Object(b["a"])(ie,ee,te,!1,null,null,null),ne=re.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("q-input",{ref:"supporterStatement",staticClass:"q-mb-md",attrs:{value:e.supporterStatement,rules:e.addValidation(),disable:e.fieldDisabled,label:"Supporter Statement","bottom-slots":!0},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"supporterStatement"})}},scopedSlots:e._u([{key:"hint",fn:function(){return[a("div",[e._v("Exclude supporter names, they will be added automatically.")])]},proxy:!0}])}),a("q-item",{staticClass:"text-left q-mb-sm"},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"text-primary",attrs:{name:"info"}})],1),a("q-item-section",[a("q-item-label",{staticClass:"text-primary"},[e._v("Preview:")]),a("q-item-label",[a("span",[e._v(e._s(e.supporterStatement)+" ")]),a("span",{staticClass:"text-bold"},[e._v(e._s(e.supportersMap?e.supportersMap.join(", "):""))])])],1)],1),a("q-select",{ref:"supporters",staticClass:"q-mb-md",attrs:{"use-input":"",clearable:"",options:e.filterOptions,value:e.supportersMap,multiple:"","use-chips":"",disable:e.fieldDisabled,rules:e.addValidation(),label:"Select Supporter(s)","bottom-slots":""},on:{filter:e.filterFn,input:e.updateSupporters},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0},{key:"hint",fn:function(){return[e._v("\n        If the supporter you are looking for is missing from the list, it must be added through the "),a("router-link",{attrs:{to:{path:"/settings",query:{view:"supporterList"}}}},[e._v("supporter/partner tool.")])]},proxy:!0}])})],1),a("q-separator"),e._l(e.fieldData[1].supporters,(function(t,i){return a("div",{key:"ss0"+t.name,staticClass:"row justify-between items-center q-py-sm"},[a("span",{staticClass:"text-bold col-5 text-left"},[e._v("Select supporter logo for "+e._s(t.name)+":")]),e.getBadgeOptions(t.name).length>1?a("q-select",{staticStyle:{"min-width":"45%"},attrs:{options:e.getBadgeOptions(t.name),value:t.url,disable:e.fieldDisabled,"map-options":"","emit-value":"",clearable:""},on:{input:function(a){return e.updateSupporterUrl(a,i,t.name)},clear:function(a){return e.updateSupporterUrl("",i,t.name)}},scopedSlots:e._u([{key:"option",fn:function(t){return[a("q-item",e._g(e._b({},"q-item",t.itemProps,!1),t.itemEvents),[a("q-item-section",[a("q-item-label",[t.opt.image&&t.opt.image.length?a("img",{attrs:{src:t.opt.image}}):a("div",[e._v(e._s(t.opt.label))])])],1)],1)]}},{key:"selected",fn:function(){return[t.url&&t.url.includes("data:app")?a("img",{attrs:{src:t.url}}):a("span",[e._v(e._s(t.url.length?t.url:""))])]},proxy:!0}],null,!0)}):a("div",[e._v("No badges/logos are available for this supporter. They can be added through the "),a("router-link",{attrs:{to:{path:"/settings",query:{view:"supporterList",supporter:t.name}}}},[a("span",{staticClass:"text-bold"},[e._v("supporter/partner list")])])],1)],1)}))],2)},se=[];a("7f7f"),a("7514");function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ce={mixins:[u["a"]],data:function(){return{fieldName:"selectSupporterAttribution",filterOptions:this.stringOptions}},methods:ue(ue({},Object(c["b"])("tickets",["selectSupporterAttributionUrl"])),{},{getBadgeOptions:function(e){var t=this,a=Object.keys(this.partners).find((function(a){return t.partners[a].primaryName==e})),i=this.partners[a].partnerLogos;i=i?i.map((function(e){if(e)return{label:e,value:e,image:null}})):[];var r=this.partners[a].badges;r=r?r.map((function(e){if(e)return{label:null,value:e.imageString,image:e.imageString}})):[];var n=[];return i.length&&(n=n.concat(i)),r.length&&(n=n.concat(r)),n.push({label:"Add New",image:null,value:"Add New"}),n},updateSupporters:function(e){var t=this,a=e;a=a?e.map((function(e){var a={name:e,url:""},i=t.fieldData[1].supporters.find((function(t){return t.name==e}));return i&&(a.url=i.url),a})):[],this.updateFieldData(a,{fieldDataIndex:"1",inputBinding:"supporters"},!0)},updateSupporterUrl:function(e,t,a){"Add New"==e?this.$router.push({path:"/settings",query:{view:"supporterList",supporter:a}}):this.selectSupporterAttributionUrl({url:e,index:t})},filterFn:function(e,t){var a=this;t((function(){if(""===e)a.filterOptions=a.supporterNames;else{var t=e.toLowerCase();a.filterOptions=a.supporterNames.filter((function(e){return e.toLowerCase().indexOf(t)>-1}))}}))}}),computed:ue(ue(ue({},Object(c["c"])("settings",["supporterNames","partners"])),Object(c["c"])("tickets",["programGeoTarget"])),{},{supportersMap:function(){var e=this.fieldData[1].supporters.map((function(e){return e.name}));return e.length?e:null},supporterStatement:function(){return this.fieldData[1].supporterStatement.length?this.fieldData[1].supporterStatement:this.multi?"Supported by independent educational grants from":"Supported by an independent educational grant from"}})},de=ce,pe=Object(b["a"])(de,le,se,!1,null,null,null),fe=pe.exports,me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row justify-left items-center q-mx-md"},[a("span",{staticClass:"text-bold"},[e._v("Outcomes Study Included? ")]),a("q-option-group",{ref:"included",attrs:{type:"radio",inline:"",options:[{value:!1,label:"No"},{value:!0,label:"Yes"}],value:e.fieldData[1].included,rules:e.addValidation(),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"included"},!0)}}})],1),e.fieldData[1].included?a("div",{staticClass:"row justify-left items-center q-mx-md"},[a("span",{staticClass:"text-bold"},[e._v("Measurement Focus: ")]),a("q-option-group",{ref:"measurementFocus",attrs:{type:"radio",inline:"",options:[{value:"Competence",label:"Competence"},{value:"Performance",label:"Performance"},{value:"Patient Outcomes",label:"Patient Outcomes"}],value:e.fieldData[1].measurementFocus,rules:e.addValidation(),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"measurementFocus"},!0)}}})],1):e._e()])},be=[],ge={mixins:[u["a"]],data:function(){return{fieldName:"outcomesStudyIncluded"}}},ve=ge,ye=Object(b["a"])(ve,me,be,!1,null,null,null),he=ye.exports,Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row justify-left items-center q-mx-md"},[a("span",{staticClass:"text-bold"},[e._v("Live Event? ")]),a("q-option-group",{ref:"radio",attrs:{type:"radio",inline:"",options:[{value:!1,label:"No"},{value:!0,label:"Yes"}],value:e.fieldData[1].radio,rules:e.addValidation(),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"radio"},!0)}}})],1),e.fieldData[1].radio?a("div",[a("q-input",{ref:"date",staticClass:"q-mb-md",attrs:{label:"Date",type:"date",rules:e.addValidation(),disable:e.fieldDisabled,value:e.fieldData[1].date},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"date"},!0)}}}),a("q-input",{ref:"time",attrs:{label:"Time",type:"time",rules:["time"],disable:e.fieldDisabled,value:e.fieldData[1].time},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"time"},!0)}}})],1):e._e()])},De=[],Ne={mixins:[u["a"]],data:function(){return{fieldName:"liveEvent"}}},xe=Ne,Se=Object(b["a"])(xe,Oe,De,!1,null,null,null),je=Se.exports,Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row justify-left items-center q-mx-md"},[a("span",{staticClass:"text-bold"},[e._v("Townhall Event? ")]),a("q-option-group",{attrs:{type:"radio",inline:"",options:[{value:!0,label:"Yes"},{value:!1,label:"No"}],value:e.fieldData[1].radio,disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"radio"},!0)}}})],1),e.fieldData[1].radio?a("div",[a("div",{staticClass:"row justify-start items-center"},[a("q-radio",{attrs:{label:"Audio summary + full event audio",value:e.fieldData[1].format,val:"Audio summary + full event audio",disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"format"},!0)}}})],1),a("div",{staticClass:"row justify-start items-center"},[a("q-radio",{staticClass:"q-mr-md col-shrink",attrs:{label:"Other, please specify",value:e.fieldData[1].format,val:e.other},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"format"},!0)}}}),e.hasOther?a("q-input",{staticClass:"col-grow",attrs:{label:"Other",disable:e.fieldDisabled,value:e.fieldData[1].format},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"format"})}}}):e._e()],1)]):e._e(),a("q-input",{ref:"format",staticStyle:{display:"none"},attrs:{rules:e.addValidation()},model:{value:e.hidden,callback:function(t){e.hidden=t},expression:"hidden"}})],1)},we=[],_e={mixins:[u["a"]],data:function(){return{fieldName:"tHFormat",hidden:""}},computed:{other:function(){return this.hasOther?this.fieldData[1].format:""},hasOther:function(){return"Audio summary + full event audio"!=this.fieldData[1].format}}},qe=_e,Ce=Object(b["a"])(qe,Pe,we,!1,null,null,null),Ie=Ce.exports,Fe=a("c643"),ke=a("dbcc"),Ae=a("4525"),Ee=a("0edb"),Le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justify-center"},[a("q-card",{staticClass:"col-grow col-xl-6 col-lg-8 col-sm-10 col-xs-12 justify-center items-center q-ma-md field-group",attrs:{id:"project-details"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Project Details")]),a("div",{staticClass:"text-caption row items-center q-mt-sm text-grey-7"},[a("q-icon",{attrs:{name:"info",size:"sm"}}),a("span",{staticClass:"q-ml-sm"},[e._v("QNA, Article, and Activity ID (where applicable) to be added by Online Production.")])],1)]),a("q-card-section",{staticClass:"row"},[a("div",{staticClass:"col"},e._l(e.values,(function(e,t){return a("q-input",{key:"pi"+t,staticClass:"q-mb-sm",attrs:{value:e.value,label:e.label,readonly:""}})})),1)])],1)],1)},Be=[];a("a481");function Ve(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function Me(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ve(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Te={computed:Me(Me({},Object(c["c"])("tickets",["getProjectID","getFieldData","getProductType"])),{},{projectNumber:function(){return{label:"Project Number",value:this.getProjectID.replace("_",".")}},qnaID:function(){var e=this.getFieldData({fieldName:"qnaID",segmentName:"onlineProduction"});return e&&e[1]?{label:"QNA ID",value:e[1].text||""}:""},articleID:function(){if(this.getProductType.includes("advances"))return null;var e=this.getFieldData({fieldName:"articleID",segmentName:"onlineProduction"});return{label:"Article ID",value:e[1].text}},activityID:function(){if(!this.getProductType.includes("advances")){var e=this.getFieldData({fieldName:"activityID",segmentName:"onlineProduction"});return{label:"Activity ID",value:e[1].text}}},values:function(){return[this.projectNumber,this.qnaID,this.articleID,this.activityID].filter((function(e){return!!e}))}})},$e=Te,Ge=Object(b["a"])($e,Le,Be,!1,null,null,null),He=Ge.exports,Re={mixins:[Ae["a"]],data:function(){return{segmentName:"generalInformation"}},components:{"field-options":ke["a"],"default-url":Fe["a"],"clinical-advances":v,"product-type":x,"deliverable-s-f-numbers":q,"previous-s-f-numbers":E,supporters:R,"therapeutic-area-lead-specialty":ne,"related-therapeutic-area-lead-specialty":Z,"select-supporter-attribution":fe,"outcomes-study-included":he,"live-event":je,"th-format":Ie,DefaultOptionGroup:Ee["a"],ProjectDetails:He},computed:{brandingOptions:function(){return["Medscape Education","Medscape Education Global","Medscape Oncology","Medscape Oncology Global","Medscape Education + theheart.org","MECC; None"].map((function(e){return{label:e,value:e}}))}}},Ue=Re,Ye=Object(b["a"])(Ue,i,r,!1,null,null,null);t["default"]=Ye.exports}}]);