(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{cda3:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-h4 text-center"},[e._v("Course/CME Details")]),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"courseTitle"}},[a("default-editor",{ref:"courseTitle",attrs:{fieldName:"courseTitle",label:"Title",charCount:"100"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"teaser"}},[a("default-editor",{ref:"teaser",attrs:{fieldName:"teaser",label:"Teaser",charCount:"140"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"spotlightTargetAudience"}},[a("default-text",{ref:"spotlightTargetAudience",attrs:{fieldName:"spotlightTargetAudience",type:"textarea",label:"Target Audience"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"goalStatement"}},[a("default-text",{ref:"goalStatement",attrs:{fieldName:"goalStatement",type:"textarea"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"gap"}},[a("default-text",{ref:"gap",attrs:{fieldName:"gap",type:"textarea"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"educationalDesign"}},[a("default-option-group",{ref:"educationalDesign",attrs:{fieldName:"educationalDesign",label:"Educational Design:",type:"checkbox",options:e.options.educationalDesign,inputBinding:"checkbox"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"aBMSCoreCompetencies"}},[a("default-option-group",{ref:"aBMSCoreCompetencies",attrs:{fieldName:"aBMSCoreCompetencies",label:"ABMS/ACGME Core Competencies",type:"checkbox",options:e.options.ABMS_ACGME,inputBinding:"checkbox"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"iPCECompetencies"}},[a("default-option-group",{ref:"iPCECompetencies",attrs:{fieldName:"iPCECompetencies",label:"IPCE Competencies",type:"checkbox",options:e.options.IPCE,inputBinding:"checkbox"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"cAPECompetencies"}},[a("default-option-group",{ref:"cAPECompetencies",attrs:{fieldName:"cAPECompetencies",label:"Cape Competencies (Pharmacists)",type:"checkbox",options:e.options.CAPE,inputBinding:"checkbox"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"activityLength"}},[a("activity-length",{ref:"activityLength"})],1)],1)},n=[],o=a("dbcc"),s=a("4525"),l=a("bb17"),m=a("40e0"),r=a("d11a"),c=a("149f"),p=a("0edb"),d={mixins:[s["a"]],data:function(){return{segmentName:"courseCmeDetails"}},components:{"field-options":o["a"],"activity-length":m["a"],DefaultText:r["a"],DefaultOptionGroup:p["a"],DefaultEditor:c["a"]},computed:{options:function(){return{CAPE:l["a"].CAPE.map((function(e){return{label:e,value:e}})),educationalDesign:l["a"].educationalDesign.map((function(e){return{label:e,value:e}})),IPCE:l["a"].IPCE.map((function(e){return{label:e,value:e}})),ABMS_ACGME:l["a"].ABMS_ACGME.map((function(e){return{label:e,value:e}}))}}}},u=d,f=a("2877"),g=Object(f["a"])(u,i,n,!1,null,null,null);t["default"]=g.exports}}]);