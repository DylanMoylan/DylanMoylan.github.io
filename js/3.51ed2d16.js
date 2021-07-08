(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"3bce":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"text-h4 text-center"},[e._v(e._s(e.title))]),n("field-options",{attrs:{resources:"",repeatable:"",segmentName:e.segmentName,fieldName:"slideKits"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("slide-kits",{ref:"slideKits",attrs:{fieldDataIndex:e.dataIndex}})]}},{key:"resourcesPre",fn:function(){return[n("span",[e._v("Link: ")])]},proxy:!0}])}),n("field-options",{attrs:{resources:"",repeatable:"",resourcesPrefix:"https://dx.doi.org/",segmentName:e.segmentName,fieldName:"clinicalReferenceArticles"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("clinical-reference-articles",{ref:"clinicalReferenceArticles",attrs:{fieldDataIndex:e.dataIndex}})]}},{key:"resourcesPre",fn:function(){return[n("span",[e._v("Link: ")])]},proxy:!0}])}),n("field-options",{attrs:{repeatable:"",resources:"",segmentName:e.segmentName,fieldName:"relatedLinks"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("related-links",{ref:"relatedLinks",attrs:{fieldDataIndex:e.dataIndex}})]}},{key:"resourcesPre",fn:function(){return[n("span",[e._v("Link: ")])]},proxy:!0}])}),n("field-options",{attrs:{repeatable:"",segmentName:e.segmentName,fieldName:"customSections"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("custom-sections",{ref:"customSections",attrs:{fieldDataIndex:e.dataIndex}})]}}])})],1)},a=[],r=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("6762"),n("2fdb"),n("9523")),l=n.n(r),s=n("dbcc"),d=n("f2a7"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("q-separator"),n("div",[n("q-input",{ref:"title",staticClass:"q-mb-sm",attrs:{label:"Title",value:e.fieldData[e.fieldDataIndex].title,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"title"})}}}),n("q-input",{ref:"url",attrs:{label:"URL",value:e.fieldData[e.fieldDataIndex].url,prefix:"https://dx.doi.org/",disable:e.fieldDisabled,rules:e.addValidation()},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"url"})}},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"link"}})]},proxy:!0}])})],1)],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"text-h6"},[e._v("Clinical Reference Article")])])}],c=n("3544"),f={props:["fieldDataIndex"],mixins:[c["a"]],data:function(){return{fieldName:"clinicalReferenceArticles",defaultField:{title:"",url:""},title:"",url:""}},methods:{parseUrl:function(){var e=this;this.renderURL(this.url).then((function(t){e.url=t,e.updateFieldData(e.url,{fieldDataIndex:e.fieldDataIndex,inputBinding:"url"})}))}}},p=f,b=n("2877"),m=Object(b["a"])(p,u,o,!1,null,null,null),x=m.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("q-separator"),n("div",[n("q-input",{ref:"title",staticClass:"q-mb-sm",attrs:{label:"Title",value:e.fieldData[e.fieldDataIndex].title,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"title"})}}}),n("q-input",{ref:"url",attrs:{label:"URL",value:e.fieldData[e.fieldDataIndex].url,disable:e.fieldDisabled,rules:e.addValidation("urlOptional")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"url"})}},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"link"}})]},proxy:!0}])})],1)],1)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"text-h6"},[e._v("Related Links")])])}],k={props:["fieldDataIndex"],mixins:[c["a"]],data:function(){return{fieldName:"relatedLinks",defaultField:{title:"",url:""},title:"",url:""}}},g=k,y=Object(b["a"])(g,D,v,!1,null,null,null),O=y.exports,I=n("4525"),h=n("2f62"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("div",{staticClass:"text-h6"},[e._v("Custom Section(s)")]),n("q-separator"),n("div",[n("q-input",{ref:"title",staticClass:"q-mb-md",attrs:{label:"Section Title",value:e.fieldData[e.fieldDataIndex].title,disable:e.fieldDisabled,rules:e.addValidation()},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"title"})}}}),e._l(e.fieldData[e.fieldDataIndex].links,(function(t,i){return n("div",{key:i,staticClass:"q-mb-md"},[n("div",{staticClass:"row justify-between items-center text-bold"},[n("span",[e._v("Link # "+e._s(i.substring(0,1)))]),n("q-btn",{staticClass:"bg-negative text-white",attrs:{label:"Remove link","no-caps":""},on:{click:function(t){return e.preRemoveLink(i)}}})],1),n("q-input",{ref:"linkTitle",refInFor:!0,staticClass:"q-my-sm",attrs:{label:"Title",value:t.linkTitle,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"linkTitle",subsection:{name:"links",index:i}})}}}),n("q-input",{ref:"linkTeaser",refInFor:!0,staticClass:"q-my-sm",attrs:{label:"Teaser/Description (optional)",value:t.linkTeaser,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"linkTeaser",subsection:{name:"links",index:i}})}}}),n("q-input",{ref:"url",refInFor:!0,staticClass:"q-my-sm",attrs:{label:"URL",value:t.url,disable:e.fieldDisabled,rules:e.addValidation("urlOptional")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"url",subsection:{name:"links",index:i}})}}})],1)}))],2),n("div",{staticClass:"text-left q-mb-md"},[n("q-btn",{staticClass:"bg-positive text-white",attrs:{"no-caps":"",label:"Add Link"},on:{click:function(t){return e.addSectionLink(e.fieldDataIndex)}}})],1)],1)])},_=[];function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={mixins:[c["a"]],props:["fieldDataIndex"],data:function(){return{fieldName:"customSections"}},methods:w(w({},Object(h["b"])("tickets",["addSectionLink","removeSectionLink"])),{},{preRemoveLink:function(e){var t=this,n=this.fieldDataIndex;this.$q.dialog({title:"Confirm",transitionHide:"jump-down",transitionShow:"jump-up",message:"Remove this link? Once submitted, this action cannot be undone.",cancel:!0}).onOk((function(){t.removeSectionLink({fieldDataIndex:n,index:e}).then((function(e){t.trNotify("Link Removed","negative")}))}))}})},L=P,R=Object(b["a"])(L,j,_,!1,null,null,null),S=R.exports;function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F={mixins:[I["a"]],components:{"field-options":s["a"],"slide-kits":d["a"],"clinical-reference-articles":x,"related-links":O,"custom-sections":S},computed:N(N({},Object(h["c"])("tickets",["getProductType"])),{},{segmentName:function(){return this.getProductType.includes("advances")?"relatedResources":"additionalResources"},title:function(){return"Related Links"}})},T=F,E=Object(b["a"])(T,i,a,!1,null,null,null);t["default"]=E.exports}}]);