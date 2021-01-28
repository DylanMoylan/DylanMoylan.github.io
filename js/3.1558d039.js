(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"3bce":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-h4 text-center"},[e._v(e._s(e.title))]),"additionalResources"==e.segmentName?a("div",{staticClass:"text-italic text-left q-ma-lg q-pa-lg"},[e._v("\n      Add additional resources below. NOTE: if a "),a("strong",[e._v("custom downloadable slide kit or custom downloadble PDF")]),e._v(" was slod above the "),a("strong",[e._v("standard decks")]),e._v(" and resources that come with certain activities, it should be noted in the "),a("router-link",{attrs:{to:"/edit/handoffnotes"}},[e._v("HANDOFF NOTES AND REMINDERS")]),e._v(" section above (include the custom label for document as well). "),a("strong",[e._v("Do not indicate here.")])],1):e._e(),a("field-options",{attrs:{resources:"",repeatable:"",segmentName:e.segmentName,fieldName:"slideKits"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("slide-kits",{ref:"slideKits",attrs:{fieldDataIndex:e.dataIndex}})]}},{key:"resourcesPre",fn:function(){return[a("span",[e._v("Link: ")])]},proxy:!0}])}),a("field-options",{attrs:{resources:"",repeatable:"",resourcesPrefix:"https://dx.doi.org/",segmentName:e.segmentName,fieldName:"clinicalReferenceArticles"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("clinical-reference-articles",{ref:"clinicalReferenceArticles",attrs:{fieldDataIndex:e.dataIndex}})]}},{key:"resourcesPre",fn:function(){return[a("span",[e._v("Link: ")])]},proxy:!0}])}),a("field-options",{attrs:{repeatable:"",resources:"",segmentName:e.segmentName,fieldName:"relatedLinks"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("related-links",{ref:"relatedLinks",attrs:{fieldDataIndex:e.dataIndex}})]}},{key:"resourcesPre",fn:function(){return[a("span",[e._v("Link: ")])]},proxy:!0}])})],1)},n=[],l=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("6762"),a("2fdb"),a("9523")),r=a.n(l),d=a("cbfa"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("q-separator"),a("div",[a("q-input",{ref:"title",staticClass:"q-mb-sm",attrs:{filled:"","stack-label":"",label:"Title",value:e.fieldData[e.fieldDataIndex].title,disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"title"})}}}),a("q-input",{ref:"teaser",staticClass:"q-mb-sm",attrs:{filled:"","stack-label":"",label:"Teaser",value:e.fieldData[e.fieldDataIndex].teaser,disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"teaser"})}}}),a("q-input",{ref:"url",attrs:{filled:"","stack-label":"",label:"Folder Link",value:e.fieldData[e.fieldDataIndex].url,rules:e.addValidation("urlOptional"),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"url"})}},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"link"}})]},proxy:!0}])})],1)],1)},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-h6"},[e._v("Slide Kit")])])}],o=a("3544"),c={props:["fieldDataIndex"],mixins:[o["a"]],data:function(){return{fieldName:"slideKits",defaultField:{title:"",teaser:"",url:""},title:"",teaser:"",url:""}}},f=c,p=a("2877"),b=Object(p["a"])(f,s,u,!1,null,null,null),m=b.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("q-separator"),a("div",[a("q-input",{ref:"title",staticClass:"q-mb-sm",attrs:{filled:"","stack-label":"",label:"Title",value:e.fieldData[e.fieldDataIndex].title,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"title"})}}}),a("q-input",{ref:"url",attrs:{filled:"","stack-label":"",label:"URL",value:e.fieldData[e.fieldDataIndex].url,prefix:"https://dx.doi.org/",disable:e.fieldDisabled,rules:e.addValidation()},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"url"})}},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"link"}})]},proxy:!0}])})],1)],1)},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-h6"},[e._v("Clinical Reference Article")])])}],v=(a("6165"),{props:["fieldDataIndex"],mixins:[o["a"]],data:function(){return{fieldName:"clinicalReferenceArticles",defaultField:{title:"",url:""},title:"",url:""}},methods:{parseUrl:function(){var e=this;this.renderURL(this.url).then((function(t){e.url=t,e.updateFieldData(e.url,{fieldDataIndex:e.fieldDataIndex,inputBinding:"url"})}))}}}),_=v,k=Object(p["a"])(_,D,x,!1,null,null,null),g=k.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("q-separator"),a("div",[a("q-input",{ref:"title",staticClass:"q-mb-sm",attrs:{filled:"","stack-label":"",label:"Title",value:e.fieldData[e.fieldDataIndex].title,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"title"})}}}),a("q-input",{ref:"url",attrs:{filled:"","stack-label":"",label:"URL",value:e.fieldData[e.fieldDataIndex].url,disable:e.fieldDisabled,rules:e.addValidation("urlOptional")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"url"})}},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"link"}})]},proxy:!0}])})],1)],1)},I=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-h6"},[e._v("Related Links")])])}],y={props:["fieldDataIndex"],mixins:[o["a"]],data:function(){return{fieldName:"relatedLinks",defaultField:{title:"",url:""},title:"",url:""}}},O=y,q=Object(p["a"])(O,h,I,!1,null,null,null),N=q.exports,R=a("4525"),w=a("2f62");function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P={mixins:[R["a"]],components:{"field-options":d["a"],"slide-kits":m,"clinical-reference-articles":g,"related-links":N},computed:F(F({},Object(w["c"])("tickets",["getProductType"])),{},{segmentName:function(){return this.getProductType.includes("advances")?"relatedResources":"additionalResources"},title:function(){return"relatedResources"==this.segmentName?"Related Resources":"Additional Resources"}})},E=P,L=Object(p["a"])(E,i,n,!1,null,null,null);t["default"]=L.exports}}]);