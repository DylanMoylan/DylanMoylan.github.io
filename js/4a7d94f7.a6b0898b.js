(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["4a7d94f7"],{"130c":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.projectIsInStaging?t("q-page",{staticClass:"flex"},[t("div",{staticClass:"col"},[t("div",{staticClass:"q-mx-auto q-pa-lg"},[t("div",{staticClass:"text-h4 text-center q-mb-md"},[e._v("Current Staging Round ("+e._s(e.getStagingRoundNumber)+")")]),t("staging-round-summary")],1)])]):e._e()},i=[],c=(t("8e6e"),t("8a81"),t("ac6a"),t("cadf"),t("06db"),t("456d"),t("c47a")),a=t.n(c),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("q-table",{attrs:{data:e.rowData,columns:e.columns,"row-key":"name",filter:e.filter},scopedSlots:e._u([{key:"top",fn:function(){return[t("div",{staticClass:"row justify-between items-center full-width"},[t("div",[e._v("Staging Edits")]),t("div",{staticClass:"row items-center"},[t("q-input",{attrs:{filled:"",borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(n){e.filter=n},expression:"filter"}})],1)])]},proxy:!0},{key:"body",fn:function(n){return[t("q-tr",{attrs:{props:n}},e._l(n.cols,(function(o){return t("q-td",{key:o.name,attrs:{props:n}},["fieldName"==o.name?t("q-item",[t("q-item-section",[e._v("\n                        "+e._s(e.abbreviate(o.field(n.row)))+"\n                        ")]),t("q-item-section",{attrs:{caption:""}},[e._v("\n                            "+e._s(n.row.segmentLabel)+"\n                        ")])],1):"roundName"==o.name||"segmentLabel"==o.name?t("div",{staticStyle:{display:"none"}}):o.field(n.row)?t("q-btn",{staticClass:"text-caption",attrs:{flat:"","no-caps":""},on:{click:function(t){e.toggleFieldDetails({index:o.name,fieldName:n.row.fieldName,segmentName:n.row.segmentName,fieldFile:n.row.fieldName.charAt(0).toUpperCase()+n.row.fieldName.slice(1)+".vue",segmentFolder:n.row.segmentName.charAt(0).toUpperCase()+n.row.segmentName.slice(1)})}}},[e._v("\n                        "+e._s(e.abbreviate(o.field(n.row)))+"\n                        "),t("q-icon",{staticClass:"q-ml-md",attrs:{name:"open_in_new"}}),t("q-tooltip",{attrs:{"content-class":"bg-primary"}},[e._v("\n                            Click to view details and choose or delete selection\n                        ")])],1):t("div",{staticClass:"text-italic text-secondary"},[e._v("\n                        None\n                    ")])],1)})),1)]}}])}),t("q-dialog",{attrs:{value:e.viewFieldDetails},on:{input:e.toggleFieldDetails}},[t("staging-round-field-details",{attrs:{field:e.fieldDetails,fieldFile:e.fieldFile,segmentFolder:e.segmentFolder}})],1)],1)},s=[],l=(t("a481"),t("55dd"),t("7f7f"),t("7514"),t("8993")),m=t.n(l),d=(t("f751"),t("6165")),u=t("2f62"),f=t("2ef0"),h=t.n(f),g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-card",[t("q-card-section",[e._v(" Round Field Details")]),t("q-card-section",[t(e.componentFile,{tag:"component",attrs:{stagingFieldData:e.fieldInfo,segmentName:e.field.segmentName,s0:!0}})],1),t("q-card-actions",[t("q-checkbox",{attrs:{label:"Use this value when submitting round.",value:e.checkboxValue},on:{input:e.chooseForRound}})],1)],1)},p=[];function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b={props:{field:{type:Object},fieldFile:{type:String,required:!0},segmentFolder:{type:String,required:!0}},data:function(){return{fieldInfo:{},checkboxValue:!1}},methods:{importComponent:function(){var e=this;return function(){return t("8528")("./".concat(e.segmentFolder,"/fields/").concat(e.fieldFile))}},chooseForRound:function(){this.checkboxValue&&this.$emit("setRoundValue",this.field.index)}},computed:k({},Object(u["c"])("tickets",["getTargetFieldData"]),{componentFile:function(){return this.importComponent()}}),mounted:function(){console.log("this.field: ",this.field),this.fieldInfo={fields:this.getTargetFieldData(this.field)}}},P=b,y=t("2877"),D=Object(y["a"])(P,g,p,!1,null,null,null),C=D.exports,O=t("24e8");function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w={mixins:[d["a"]],data:function(){return{viewFieldDetails:!1,fieldDetails:{},fieldFile:"",segmentFolder:"",filter:""}},components:{"staging-round-field-details":C,"q-dialog":O["a"]},methods:{toggleFieldDetails:function(e){e&&(this.fieldDetails=e,this.fieldFile=e.fieldFile,this.segmentFolder=e.segmentFolder),this.viewFieldDetails=!this.viewFieldDetails}},computed:A({},Object(u["c"])("tickets",["getStagingRound","droppedTicket"]),{stagingEditFields:function(){var e=this,n={};function t(e,n){for(var o in e)if(e.hasOwnProperty(o))switch(m()(e[o])){case"object":n.indexOf(o)>-1?delete e[o]:t(e[o],n);break;default:n.indexOf(o)>-1&&delete e[o];break}}return Object.keys(this.getStagingRound).forEach((function(t){Object.keys(e.getStagingRound[t].changes).forEach((function(o){Object.keys(e.getStagingRound[t].changes[o]).forEach((function(i){n[i]=Object.assign({segmentName:o,fieldName:i,roundName:t},e.getStagingRound[t].changes[o][i])}))}))})),t(n,["enabled"]),h.a.filter(n,(function(e){return Object.keys(e).find((function(e){return"fields"===e}))}))},columns:function(){var e=[{name:"fieldName",label:"Field Name",align:"left",field:function(e){return e.name}},{name:"dropped",align:"center",label:"Value At Drop",field:function(e){return e.dropped.length>0?e.dropped:null}}];return Object.keys(this.getStagingRound).sort((function(e,n){return parseFloat(e.replace(/[A-Za-z]/g,""))>n.replace(/[A-Za-z]/g,"")})).forEach((function(n){e.push({name:n,align:"center",label:n,field:function(e){return e[n]}})})),e.push({name:"roundName",field:"roundName"}),e.push({name:"segmentLabel",field:"segmentLabel"}),e},rowData:function(){var e=this,n=[];return this.stagingEditFields.forEach((function(t){n.push({fieldName:t.fieldName,segmentName:t.segmentName,name:e.getLabel(t.segmentName,t.fieldName),dropped:e.droppedTicket[t.segmentName][t.fieldName].fields[1][Object.keys(t.fields[1])[0]]}),n[n.length-1][t.roundName]=t.fields[1][Object.keys(t.fields[1])[0]],n[n.length-1].roundName=t.roundName,n[n.length-1].segmentLabel=e.getLabel(t.segmentName)})),n}})},S=w,j=Object(y["a"])(S,r,s,!1,null,null,null),N=j.exports;function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var E={components:{"staging-round-summary":N},computed:F({},Object(u["c"])("tickets",["getStagingRoundNumber","projectIsInStaging"])),beforeRouteEnter:function(e,n,t){t((function(e){e.projectIsInStaging||t({name:"edit"})}))}},G=E,q=Object(y["a"])(G,o,i,!1,null,null,null);n["default"]=q.exports},8528:function(e,n,t){var o={"./Activities/Activities":["7e30","chunk-common"],"./Activities/Activities.vue":["7e30","chunk-common"],"./Activities/fields/ActivityContent":["67ea","chunk-common"],"./Activities/fields/ActivityContent.vue":["67ea","chunk-common"],"./Activities/fields/AdditionalBuckets":["a8d0","chunk-common"],"./Activities/fields/AdditionalBuckets.vue":["a8d0","chunk-common"],"./AudienceEngagement/AudienceEngagement":["5421","chunk-common"],"./AudienceEngagement/AudienceEngagement.vue":["5421","chunk-common"],"./AudienceEngagement/fields/CAUpdateEmail":["3c3c","chunk-common"],"./AudienceEngagement/fields/CAUpdateEmail.vue":["3c3c","chunk-common"],"./ClinicalAdvancesPageDetails/ClinicalAdvancesPageDetails":["fc5f","chunk-common"],"./ClinicalAdvancesPageDetails/ClinicalAdvancesPageDetails.vue":["fc5f","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesIntroduction":["e700","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesIntroduction.vue":["e700","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesTeaser":["db40","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesTeaser.vue":["db40","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesTitle":["ac78","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesTitle.vue":["ac78","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesURL":["2477","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesURL.vue":["2477","chunk-common"],"./DesignInformation/DesignInformation":["6d1a","chunk-common"],"./DesignInformation/DesignInformation.vue":["6d1a","chunk-common"],"./DesignInformation/fields/ImageRecommendations":["51be","chunk-common"],"./DesignInformation/fields/ImageRecommendations.vue":["51be","chunk-common"],"./DesignInformation/fields/RelatedImages":["82d6","chunk-common"],"./DesignInformation/fields/RelatedImages.vue":["82d6","chunk-common"],"./EditDefault":["9625","chunk-common"],"./EditDefault.vue":["9625","chunk-common"],"./GeneralInformation/GeneralInformation":["ff6a","chunk-common"],"./GeneralInformation/GeneralInformation.vue":["ff6a","chunk-common"],"./GeneralInformation/fields/ClinicalAdvances":["8f0a","chunk-common"],"./GeneralInformation/fields/ClinicalAdvances.vue":["8f0a","chunk-common"],"./GeneralInformation/fields/DeliverableSFNumbers":["7fd3","chunk-common"],"./GeneralInformation/fields/DeliverableSFNumbers.vue":["7fd3","chunk-common"],"./GeneralInformation/fields/Partners":["a852","chunk-common"],"./GeneralInformation/fields/Partners.vue":["a852","chunk-common"],"./GeneralInformation/fields/PreviousSFBoxLink":["1700","chunk-common"],"./GeneralInformation/fields/PreviousSFBoxLink.vue":["1700","chunk-common"],"./GeneralInformation/fields/PreviousSFNumbers":["d708","chunk-common"],"./GeneralInformation/fields/PreviousSFNumbers.vue":["d708","chunk-common"],"./GeneralInformation/fields/ProductType":["ea69","chunk-common"],"./GeneralInformation/fields/ProductType.vue":["ea69","chunk-common"],"./GeneralInformation/fields/ProjectNumber":["3d56","chunk-common"],"./GeneralInformation/fields/ProjectNumber.vue":["3d56","chunk-common"],"./GeneralInformation/fields/RelatedTherapeuticAreaLeadSpecialty":["c2cb","chunk-common"],"./GeneralInformation/fields/RelatedTherapeuticAreaLeadSpecialty.vue":["c2cb","chunk-common"],"./GeneralInformation/fields/SelectSupporterAttribution":["0150","chunk-common"],"./GeneralInformation/fields/SelectSupporterAttribution.vue":["0150","chunk-common"],"./GeneralInformation/fields/Supporters":["dfee","chunk-common"],"./GeneralInformation/fields/Supporters.vue":["dfee","chunk-common"],"./GeneralInformation/fields/TherapeuticAreaLeadSpecialty":["d395","chunk-common"],"./GeneralInformation/fields/TherapeuticAreaLeadSpecialty.vue":["d395","chunk-common"],"./GeneralInformation/fields/leadSpecialties":["16e4","chunk-common"],"./GeneralInformation/fields/leadSpecialties.js":["16e4","chunk-common"],"./HandoffNotes/HandoffNotes":["2c1d","chunk-common"],"./HandoffNotes/HandoffNotes.vue":["2c1d","chunk-common"],"./HandoffNotes/fields/AccreditationCompliance":["8159","chunk-common"],"./HandoffNotes/fields/AccreditationCompliance.vue":["8159","chunk-common"],"./HandoffNotes/fields/AudienceEngagement":["e748","chunk-common"],"./HandoffNotes/fields/AudienceEngagement.vue":["e748","chunk-common"],"./HandoffNotes/fields/CopyEditors":["8d77","chunk-common"],"./HandoffNotes/fields/CopyEditors.vue":["8d77","chunk-common"],"./HandoffNotes/fields/MedicalEducationDirectors":["167d","chunk-common"],"./HandoffNotes/fields/MedicalEducationDirectors.vue":["167d","chunk-common"],"./HandoffNotes/fields/ProductionStudio":["9dfe","chunk-common"],"./HandoffNotes/fields/ProductionStudio.vue":["9dfe","chunk-common"],"./ICD9Codes/ICD9Codes":["5faa","chunk-common"],"./ICD9Codes/ICD9Codes.vue":["5faa","chunk-common"],"./ICD9Codes/fields/ICD9Code":["f2f6","chunk-common"],"./ICD9Codes/fields/ICD9Code.vue":["f2f6","chunk-common"],"./LocalPerspectives/LocalPerspectives":["bb85","chunk-common"],"./LocalPerspectives/LocalPerspectives.vue":["bb85","chunk-common"],"./LocalPerspectives/fields/ActivityAddons":["ba33","chunk-common"],"./LocalPerspectives/fields/ActivityAddons.vue":["ba33","chunk-common"],"./PartnerDetails/PartnerDetails":["cbc0","chunk-common"],"./PartnerDetails/PartnerDetails.vue":["cbc0","chunk-common"],"./PartnerDetails/fields/CopyrightStatement":["01e8","chunk-common"],"./PartnerDetails/fields/CopyrightStatement.vue":["01e8","chunk-common"],"./PartnerDetails/fields/PartnerLogoRequired":["6b61","chunk-common"],"./PartnerDetails/fields/PartnerLogoRequired.vue":["6b61","chunk-common"],"./PartnerDetails/fields/PartnerStatement":["c828","chunk-common"],"./PartnerDetails/fields/PartnerStatement.vue":["c828","chunk-common"],"./PollingQuestions/PollingQuestions":["7b47","chunk-common"],"./PollingQuestions/PollingQuestions.vue":["7b47","chunk-common"],"./Postcards/Postcards":["cde3","chunk-common"],"./Postcards/Postcards.vue":["cde3","chunk-common"],"./Postcards/fields/AdditionalComments":["2893","chunk-common"],"./Postcards/fields/AdditionalComments.vue":["2893","chunk-common"],"./Postcards/fields/Dimensions":["bbd0","chunk-common"],"./Postcards/fields/Dimensions.vue":["bbd0","chunk-common"],"./Postcards/fields/Quantity":["d6b8","chunk-common"],"./Postcards/fields/Quantity.vue":["d6b8","chunk-common"],"./Questions/Questions":["01f4","chunk-common"],"./Questions/Questions.vue":["01f4","chunk-common"],"./RelatedResources/RelatedResources":["3bce","chunk-common"],"./RelatedResources/RelatedResources.vue":["3bce","chunk-common"],"./RelatedResources/fields/ClinicalReferenceArticles":["3c2b","chunk-common"],"./RelatedResources/fields/ClinicalReferenceArticles.vue":["3c2b","chunk-common"],"./RelatedResources/fields/RelatedLinks":["ddba","chunk-common"],"./RelatedResources/fields/RelatedLinks.vue":["ddba","chunk-common"],"./RelatedResources/fields/SlideKits":["f2a7","chunk-common"],"./RelatedResources/fields/SlideKits.vue":["f2a7","chunk-common"],"./RenewalInformation/RenewalInformation":["e125","chunk-common"],"./RenewalInformation/RenewalInformation.vue":["e125","chunk-common"],"./RenewalInformation/fields/RenewalInformationField":["be2c","chunk-common"],"./RenewalInformation/fields/RenewalInformationField.vue":["be2c","chunk-common"],"./StagingEdits":["e44f","chunk-common"],"./StagingEdits.vue":["e44f","chunk-common"],"./SteeringCommittee/SteeringCommittee":["8bbe","chunk-common"],"./SteeringCommittee/SteeringCommittee.vue":["8bbe","chunk-common"],"./SteeringCommittee/fields/Contributor":["e92d","chunk-common"],"./SteeringCommittee/fields/Contributor.vue":["e92d","chunk-common"]};function i(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],i=n[0];return t.e(n[1]).then((function(){return t(i)}))}i.keys=function(){return Object.keys(o)},i.id="8528",e.exports=i}}]);