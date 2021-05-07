(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8bbe":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"text-h4 text-center"},[e._v(e._s(e.title))]),"facultyInformation"==e.segmentName?[i("field-options",{attrs:{segmentName:e.segmentName,fieldName:"byline"}},[i("default-text",{ref:"byline",attrs:{fieldName:"byline",label:"Faculty/Author(s) Byline(s)",hint:"Provide names and degrees only as run-on text with each name separated by semicolon; the order is at the discretion of the MED"}})],1),i("field-options",{attrs:{segmentName:e.segmentName,fieldName:"peerReviewer"}},[i("peer-reviewer",{ref:"peerReviewer"})],1)]:e._e(),i("field-options",{attrs:{repeatable:"",segmentName:e.segmentName,fieldName:"contributor"},scopedSlots:e._u([{key:"default",fn:function(e){return[i("contributor",{ref:"contributor",attrs:{fieldDataIndex:e.dataIndex}})]}}])})],2)},n=[],r=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("6762"),i("2fdb"),i("9523")),s=i.n(r),l=i("4525"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._m(0),i("q-separator"),i("div",[i("q-input",{ref:"name",staticClass:"q-my-sm",attrs:{filled:"","stack-label":"",label:"Name and Degrees (ie. Sean P. Gaine, MD, PhD, FRCPI)",value:e.fieldData[e.fieldDataIndex].name,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired"),autocomplete:"nope"},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"name"})}}}),i("q-select",{ref:"contributorGroup",attrs:{filled:"","stack-label":"",label:"Contributor Group (Type and press enter to add custom group).",value:e.fieldData[e.fieldDataIndex].contributorGroup,"use-input":"","fill-input":"","hide-selected":"",clearable:"",rules:e.addValidation("ignoreRequired"),options:e.filteredContributorOptions,disable:e.fieldDisabled},on:{keyup:e.checkValue,"new-value":e.createValue,filter:e.filterContributorGroup,input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"contributorGroup"},!0)}}}),i("q-input",{ref:"headshot",staticClass:"q-my-sm",attrs:{filled:"","stack-label":"",label:"Headshot Resource Link",rules:e.addValidation("ignoreRequired-urlOptional"),hint:"Please Note: "+e.sizeRequirements,"lazy-rules":"",value:e.fieldData[e.fieldDataIndex].headshot,disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"headshot"})},blur:e.setHeadshotPreview},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-icon",{attrs:{name:"link"}})]},proxy:!0}])}),i("div",{staticClass:"row"},[i("img",{directives:[{name:"show",rawName:"v-show",value:e.renderImage,expression:"renderImage"}],ref:"headshotImg",staticStyle:{"max-width":"200px"},attrs:{src:e.headshotPreview,alt:"Headshot"},on:{load:function(t){e.renderImage=!0}}}),i("a",{staticClass:"col q-ml-sm",staticStyle:{"overflow-wrap":"break-word",display:"flex","align-items":"center"},attrs:{href:e.headshotFix,target:"blank"}},[e._v(e._s(e.headshot))])]),i("q-expansion-item",{staticClass:"q-mb-sm",attrs:{label:"Affiliations:",duration:0,"header-class":"bg-secondary text-white text-bold text-left","expand-icon-class":"text-white"}},[i("custom-editor",{ref:"affiliations",attrs:{disable:e.fieldDisabled,rules:e.addValidation(),value:e.fieldData[e.fieldDataIndex].affiliations||""},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"affiliations"},!0)},blur:e.setPlainText}})],1),i("q-expansion-item",{attrs:{label:"Disclosures:",duration:0,"header-class":"bg-secondary text-white text-bold text-left","expand-icon-class":"text-white"}},[i("div",{staticClass:"text-left"},[i("div",{staticClass:"q-ma-sm",staticStyle:{"font-size":"larger"}},[e._v("\n            Disclosures:\n            "),i("span",{staticClass:"text-grey"},[e._v("\n              If the partner/supporter you are looking for isn't suggested, please add it to the\n              "),i("router-link",{attrs:{to:{path:"/settings",query:{view:"supporterList"}}}},[e._v("supporters and partners list")])],1)]),i("div",{staticClass:"row items-center q-mb-md"},[i("disclosure",{ref:"advisorConsultant",attrs:{label:"Served as an advisor or consultant for:",fieldData:e.fieldData[e.fieldDataIndex].advisorConsultant,options:e.stringOptions,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{value:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"advisorConsultant"})}}})],1),i("div",{staticClass:"row q-mb-md"},[i("disclosure",{ref:"speaker",attrs:{label:"Served as a speaker or a member of a speakers bureau for:",fieldData:e.fieldData[e.fieldDataIndex].speaker,options:e.stringOptions,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{value:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"speaker"})}}})],1),i("div",{staticClass:"row q-mb-md"},[i("disclosure",{ref:"grants",attrs:{label:"Received grants for clinical research from:",fieldData:e.fieldData[e.fieldDataIndex].grants,options:e.stringOptions,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{value:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"grants"})}}})],1),i("div",{staticClass:"row q-mb-md"},[i("disclosure",{ref:"ownsStock",attrs:{label:"Owns stock, stock options, or bonds from",fieldData:e.fieldData[e.fieldDataIndex].ownsStock,options:e.stringOptions,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{value:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"ownsStock"})}}})],1),i("div",{staticClass:"row q-mb-md"},[i("disclosure",{ref:"royalties",attrs:{label:"Royalties or patient beneficiary",fieldData:e.fieldData[e.fieldDataIndex].royalties,options:e.stringOptions,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{value:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"royalties"})}}})],1),i("div",{staticClass:"row q-mb-md"},[i("disclosure",{ref:"employed",attrs:{label:"Formerly employed by an ineligible company",fieldData:e.fieldData[e.fieldDataIndex].employed,options:e.stringOptions,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{value:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"employed"})}}})],1),i("div",{staticClass:"row q-mb-md"},[i("disclosure",{ref:"ownership",attrs:{label:"Ownership of an ineligible company",fieldData:e.fieldData[e.fieldDataIndex].ownership,options:e.stringOptions,disable:e.fieldDisabled,rules:e.addValidation("ignoreRequired")},on:{value:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"ownership"})}}})],1),i("div",{staticClass:"row items-center q-mb-md justify-between"},[i("div",{staticClass:"text-primary text-bold q-mr-md"},[e._v("Other:")]),i("q-input",{ref:"other",staticClass:"col-grow",attrs:{filled:"","stack-label":"",value:e.fieldData[e.fieldDataIndex].other,rules:e.addValidation("ignoreRequired"),label:"Custom Disclosure Statement",disable:e.fieldDisabled,autocomplete:"nope"},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"other"})}}})],1)])])],1)],1)},d=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"text-h6"},[e._v("Contributor")])])}],u=(i("0d6d"),i("3544")),c=i("2f62"),f=i("eed6"),p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-input",{ref:"input",staticClass:"full-width",attrs:{disable:e.disable,label:e.label,rules:e.rules,autogrow:"",filled:"","stack-label":""},on:{click:function(t){return t.stopPropagation(),e.setFocus(t)},keydown:e.keydownHandler,keyup:e.keyupHandler,focus:e.setFocus,blur:e.emitValue},scopedSlots:e._u([{key:"label",fn:function(){return[i("div",{staticClass:"all-pointer-events",on:{click:e.setFocus}},[e._v(e._s(e.label))])]},proxy:!0}]),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e.filteredOptions.length?i("q-menu",{ref:"menu",attrs:{value:e.showMenu,"no-focus":"","no-refocus":"",anchor:"bottom middle",self:"top middle",fit:""}},[i("q-virtual-scroll",{ref:"suggestionMenu",staticStyle:{"max-height":"300px"},attrs:{items:e.filteredOptions,separator:""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.item,n=t.index;return[i("q-item",{key:"ps"+n,class:e.autoSelected||e.selected==n?"bg-warning supp-selected":"",attrs:{id:"ps"+n,clickable:"",dense:""},on:{click:function(t){return e.selectSupporter(a,n)}}},[e._v("\n                    "+e._s(a)+"\n                ")])]}}],null,!1,563951992)})],1):e._e()],1)},h=[],b=i("448a"),m=i.n(b),g=(i("28a5"),i("a481"),{props:["label","options","disable","fieldData","rules"],data:function(){return{value:"",selected:null,caretPosition:0,focus:!1}},methods:{setFocus:function(e){e.stopPropagation(),this.focus=!0,this.caretPosition=this.$refs.input.selectionEnd},keydownHandler:function(e){9===e.which&&this.focus&&e.preventDefault(),13==e.which&&e.preventDefault(),27==e.which&&(e.stopPropagation(),this.focus=!1)},keyupHandler:function(e){switch(e.which){case 13:e.stopPropagation(),this.autoSelected?this.selectSupporter(this.filteredOptions[0],0):null!=this.selected?this.selectSupporter(this.filteredOptions[this.selected],this.selected):this.emitValue();break;case 9:this.autoSelected?this.selectSupporter(this.filteredOptions[0],0):null!=this.selected&&this.selectSupporter(this.filteredOptions[this.selected],this.selected);break;case 40:null!=this.selected&&this.selected<this.filteredOptions.length-1?this.selected++:this.selected=0,this.$refs.suggestionMenu.scrollTo(this.selected);break;case 38:null!=this.selected&&this.selected>0?this.selected--:this.selected=this.filteredOptions.length-1,this.$refs.suggestionMenu.scrollTo(this.selected);break;default:this.caretPosition=e.target.selectionEnd,this.filteredOptions.length<10&&this.$refs.menu&&this.$refs.menu.updatePosition();break}},selectSupporter:function(e,t){var i=this.valueArray;i[this.caretIndex]=e,this.value=i.join("; ")+(/[;][ ]?/.test(i[i.length-1])?"":"; "),this.selected=null},emitValue:function(){this.focus=!1,this.$emit("value",this.value)}},computed:{menuStyle:function(){return this.filteredOptions.length?"height: auto":"display: none!important"},hasError:function(){},replacedPosition:function(){return this.value.slice(0,this.caretPosition).replace(/[;] /g,"").length},caretIndex:function(){if(!this.focus)return this.valueArray.length-1;for(var e=0,t=0;t<this.valueArray.length;t++)if(0==this.valueArray[t].length?e++:e+=this.valueArray[t].length,this.replacedPosition+1<e)return t;return this.valueArray.length-1},valueArray:function(){return this.value.split("; ")},filteredOptions:function(){var e=this,t=this.options.filter((function(t,i){var a=t.toLowerCase(),n=e.valueArray[e.caretIndex].toLowerCase();return!n.length||!e.value.includes(t)&&a.indexOf(n)>-1})),i=[],a=[];return t.forEach((function(t){t.charAt(0).toLowerCase()==e.valueArray[e.caretIndex].charAt(0).toLowerCase()?i.push(t):a.push(t)})),[].concat(m()(i.sort()),m()(a.sort()))},showMenu:function(){return this.focus},autoSelected:function(){return 1==this.filteredOptions.length&&this.showMenu}},watch:{fieldData:function(e){this.value=e}},mounted:function(){this.fieldData&&("string"==typeof this.fieldData?this.value=this.fieldData:this.value=this.fieldData.length?this.fieldData.join("; "):"")}}),v=g,D=i("2877"),x=Object(D["a"])(v,p,h,!1,null,null,null),w=x.exports;function y(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function O(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?y(Object(i),!0).forEach((function(t){s()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var I=["Faculty","Moderator","Panelist","CME Reviewer/Nurse Planner","CE Reviewer","Editor","Steering Committee Chair","Steering Committee Member"],C={props:["fieldDataIndex"],mixins:[u["a"]],components:{"custom-editor":f["a"],disclosure:w},data:function(){return{toolbar:[["bold","italic","underline","strike"],["undo","redo"]],advisorConsultant:[],affiliations:"",disclosures:"",contributorGroup:"",grants:[],headshot:"",headshotPreview:"",name:"",filterOptions:this.stringOptions,filteredContributorOptions:I,other:"",ownsStock:[],renderImage:!1,speaker:[],fieldName:"contributor",defaultField:{advisorConsultant:[],affiliations:"",contributorGroup:"",disclosures:"",grants:[],headshot:"",name:"",other:"",ownsStock:[],speaker:[]},affiliationsEl:null}},computed:O(O(O({},Object(c["c"])("settings",["partnerAndSupporterNames"])),Object(c["c"])("tickets",["getProductType"])),{},{sizeRequirements:function(){var e;switch(this.getProductType){case"advances":e="550 x 750";break;default:e="200 x 200 or larger";break}return"Image Dimensions must be ".concat(e," - Faculty Images 11:15 ratio")},headshotFix:function(){this.headshot;return this.headshot.includes("http")?this.headshot:"http://"+this.headshot},stringOptions:function(){return Object.freeze(this.partnerAndSupporterNames)}}),methods:{setPlainText:function(){this.updateFieldData(this.$refs.affiliations.$el.querySelector(".q-editor__content").innerText,{fieldDataIndex:this.fieldDataIndex,inputBinding:"affiliationsPlaintext",ignoreValidations:!0},!0)},selectInput:function(e,t,i){this.updateFieldData(e,{fieldDataIndex:this.fieldDataIndex,inputBinding:t},!0),this.$refs[i].updateInputValue("")},pasteCapture:function(e){var t,i;e.preventDefault(),e.originalEvent&&e.originalEvent.clipboardData.getData?(t=e.originalEvent.clipboardData.getData("text/plain"),this.$refs.editor_ref.runCmd("insertText",t)):e.clipboardData&&e.clipboardData.getData?(t=e.clipboardData.getData("text/plain"),this.$refs.editor_ref.runCmd("insertText",t)):window.clipboardData&&window.clipboardData.getData&&(i||(i=!0,this.$refs.editor_ref.runCmd("ms-pasteTextOnly",t)),i=!1)},setHeadshotPreview:function(){this.renderImage=!1,this.headshotPreview=this.headshot},filterFn:function(e,t){var i=this;t((function(){if(""===e)i.filterOptions=i.stringOptions;else{var t=e.toLowerCase();i.filterOptions=i.stringOptions.filter((function(e){return e.toLowerCase().indexOf(t)>-1}))}}))},createValue:function(e,t){if(e.length>0){var i=I.map((function(e){return e.toLowerCase()})).indexOf(e.toLowerCase());if(i>=0)return void(this.contributorGroup=I[i]);I.push(e),t(e,"toggle")}},filterContributorGroup:function(e,t){var i=this;t((function(){if(""===e)i.filteredContributorOptions=I;else{var t=e.toLowerCase();i.filteredContributorOptions=I.filter((function(e){return e.toLowerCase().indexOf(t)>-1}))}}))},checkValue:function(e){8==e.keyCode&&""==e.target.value&&(this.contributorGroup=null)}},mounted:function(){this.headshot&&(this.headshotPreview=this.headshot,this.renderImage=!0)}},k=C,P=Object(D["a"])(k,o,d,!1,null,null,null),q=P.exports,S=i("dbcc"),_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"text-left"},[i("q-checkbox",{ref:"peerReviewed",attrs:{label:"Peer Reviewer",value:e.fieldData[1].peerReviewed,disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"peerReviewed"},!0)}}}),e.fieldData[1].peerReviewed?i("custom-editor",{ref:"statement",attrs:{disable:e.fieldDisabled,value:e.fieldData[1].statement},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"statement"},!0)}}}):e._e()],1)},j=[],F={mixins:[u["a"]],components:{CustomEditor:f["a"]},data:function(){return{fieldName:"peerReviewer"}}},R=F,E=Object(D["a"])(R,_,j,!1,null,null,null),N=E.exports,V=i("d11a");function B(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function $(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?B(Object(i),!0).forEach((function(t){s()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):B(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var A={mixins:[l["a"]],components:{"field-options":S["a"],contributor:q,"peer-reviewer":N,DefaultText:V["a"]},computed:$($({},Object(c["c"])("tickets",["getProductType"])),{},{segmentName:function(){return this.getProductType.includes("advances")||this.getProductType.includes("demo")?"steeringCommittee":"facultyInformation"},title:function(){return"steeringCommittee"==this.segmentName?"Steering Committee":"Faculty Information and Disclosure Statements"}})},T=A,L=Object(D["a"])(T,a,n,!1,null,null,null);t["default"]=L.exports}}]);