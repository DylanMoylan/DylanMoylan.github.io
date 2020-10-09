(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"120c":function(e,t,i){"use strict";var n=i("a79c"),a=i.n(n);a.a},"130c":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.projectIsInStaging?i("q-page",{staticClass:"flex full-height"},[i("q-scroll-area",{staticClass:"q-pa-md",staticStyle:{height:"70vh","text-align":"center","background-color":"#f5f5f5",width:"100%"},attrs:{visible:""}},[i("div",{staticClass:"q-mx-auto q-pa-lg",staticStyle:{height:"inherit"}},[i("div",{staticClass:"text-h4 text-center q-mb-md"},[e._v("Current Staging Round ("+e._s(e.getStagingRoundNumber)+")")]),i("staging-round-notes"),i("staging-round-summary")],1)])],1):e._e()},a=[],s=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("9523")),o=i.n(s),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("q-table",{attrs:{data:e.rowData,columns:e.columns,"row-key":"name",filter:e.filter,pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[i("div",{staticClass:"row justify-between items-center full-width"},[i("div",{staticClass:"text-h6"},[e._v("Staging Edits")]),i("div",{staticClass:"row items-center"},[i("q-input",{attrs:{filled:"",borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1)])]},proxy:!0},{key:"body",fn:function(t){return[i("q-tr",{attrs:{props:t}},e._l(t.cols,(function(n){return i("q-td",{key:n.name,attrs:{props:t}},["fieldName"==n.name?i("q-item",{staticStyle:{"flex-direction":"column"}},[i("q-item-section",[e._v(e._s(e.abbreviate(n.field(t.row),35)))]),i("q-item-section",{staticClass:"text-grey-6",attrs:{caption:""}},[e._v(e._s(t.row.segmentLabel))]),t.row.questionGroup?i("q-item-section",{staticClass:"text-grey-6",attrs:{caption:""}},[e._v(e._s(e._f("questionGroup")(t.row.questionGroup)))]):e._e()],1):"roundName"==n.name||"segmentLabel"==n.name?i("div",{staticStyle:{display:"none"}}):t.row[n.name]&&"None"!=t.row[n.name].label?i("div",[i("div",[e._v(e._s(t.row[n.name].questionAbbreviation))]),e.isChosen({fieldName:t.row.fieldName,segmentName:t.row.segmentName,stagingEditKey:n.name,fieldDataIndex:t.row.fieldDataIndex})?i("q-icon",{staticClass:"text-positive text-bold text-h6",attrs:{name:"done"}},[i("q-tooltip",{attrs:{"content-class":"bg-primary text-body2"}},[e._v("This value will be used when the staging round is dropped.")])],1):e._e(),i("q-btn",{class:{"text-caption":!0,"is-chosen":e.isChosen({fieldName:t.row.fieldName,segmentName:t.row.segmentName,stagingEditKey:n.name,fieldDataIndex:t.row.fieldDataIndex}),"has-conflict":e.hasConflicts(t.row.fieldName)},attrs:{flat:"","no-caps":""},on:{click:function(i){return e.toggleFieldDetails({index:n.name,fieldName:t.row.fieldName,segmentName:t.row.segmentName,fieldDataIndex:t.row.fieldDataIndex,fieldData:t.row[n.name].value})}}},[e._v("\n              "+e._s(e.abbreviate(t.row[n.name].label))+"\n              "),i("q-icon",{staticClass:"q-ml-md",attrs:{name:"open_in_new"}}),i("q-tooltip",{attrs:{"content-class":"bg-primary text-body2"}},[e._v("Click to view details and choose or delete selection")])],1)],1):i("div",{staticClass:"text-italic text-secondary"},[e._v("None")])],1)})),1)]}}])}),i("div",{staticClass:"row full-width justify-end"},[e.hasPermission("drop")?i("q-btn",{staticClass:"bg-negative text-white q-mt-md",attrs:{label:"Consolidate Edits & Drop Staging Round",disable:!Object.keys(e.stagingEditFields).length},on:{click:e.consolidateAndDrop}}):e._e()],1),i("q-dialog",{attrs:{value:e.viewFieldDetails},on:{input:e.toggleFieldDetails}},[i("staging-round-field-details",{attrs:{field:e.fieldDetails,fieldFile:e.fieldFile,segmentFolder:e.segmentFolder,hasConflicts:e.viewChooseable,chosenFields:e.chosenFields,canDrop:e.hasPermission("drop")},on:{setRoundValue:e.chooseRoundFieldValue,deleteEdit:e.preDeleteStagingEditField}})],1)],1)},r=[],d=(i("28a5"),i("7f7f"),i("f751"),i("6762"),i("2fdb"),i("4917"),i("a481"),i("20d6"),i("7514"),i("6165")),c=i("2f62"),u=i("2ef0"),f=i.n(u),g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-card",{staticStyle:{width:"700px"}},[i("q-card-section",[i("div",{staticClass:"text-h6 text-center"},[i("span",{staticClass:"text-bold text-primary"},[e._v(e._s(e.getLabel(e.field.segmentName,e.field.fieldName)+" "))]),e._v("\n        "+e._s("Updates from "+("dropped"==e.field.index?"drop":"Staging Round "+e.field.index.replace("_",".")))+"\n      ")])]),i("q-card-section",[i(e.componentFile,{tag:"component",attrs:{stagingFieldData:e.field.fieldData,segmentName:e.field.segmentName,fieldDataIndex:e.field.fieldDataIndex,s0:!0}})],1),e.canDrop?i("q-card-section",[i("div",{staticClass:"row justify-end"},[i("div",{staticClass:"col-grow text-center"},[e.hasConflicts&&"dropped"!=e.field.index?i("q-checkbox",{staticClass:"q-ml-md text-bold",staticStyle:{"max-width":"50%"},attrs:{label:"Use this value when submitting round.",value:e.isChosen},on:{input:function(t){return e.chooseForRound(t)}}}):e._e()],1),e.field.index.includes("_")?i("q-btn",{staticClass:"bg-negative text-white",attrs:{label:"Delete this change"},on:{click:e.deleteEdit}}):e._e()],1)]):e._e()],1)},m=[];function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function v(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){o()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var b={mixins:[d["a"]],props:{field:{type:Object},fieldFile:{type:String,required:!0},segmentFolder:{type:String,required:!0},hasConflicts:{type:Boolean,required:!0},chosenFields:{type:Array,required:!0},canDrop:{type:Boolean,required:!0}},data:function(){return{checkboxValue:!1}},methods:{importComponent:function(){var e=this;return"question"==this.field.fieldName?function(){return i.e(0).then(i.bind(null,"0264"))}:"learningObjective"==this.field.fieldName?function(){return i.e(14).then(i.bind(null,"1896"))}:function(){return i("8528")("./".concat(e.segmentFolder,"/fields/").concat(e.fieldFile))}},chooseForRound:function(e){if(this.checkboxValue=e,this.checkboxValue){var t={fieldName:this.field.fieldName,segmentName:this.field.segmentName,stagingEditKey:this.field.index,fieldDataIndex:this.field.fieldDataIndex};if("question"==this.field.fieldName){var i=Object.keys(this.field.fieldData.fields)[0];t.questionGroup=this.field.fieldData.fields[i].questionGroup}this.$emit("setRoundValue",t)}},deleteEdit:function(){var e=this;this.$q.dialog({cancel:!0,title:"Delete Staging Edit",message:"Permanently Delete this change?"}).onOk((function(){e.$emit("deleteEdit",{fieldName:e.field.fieldName,segmentName:e.field.segmentName,stagingEditKey:e.field.index})}))}},computed:v(v({},Object(c["c"])("tickets",["getTargetFieldData"])),{},{componentFile:function(){return this.importComponent()},isChosen:function(){var e=this,t=this.field.fieldDataIndex;return"question"==this.field.fieldName&&(t=t.substring(0,1)),!!this.chosenFields.find((function(i){return i.fieldName===e.field.fieldName&&i.stagingEditKey==e.field.index&&Object.keys(i.fields)[0]==t}))}})},h=b,C=i("2877"),y=Object(C["a"])(h,g,m,!1,null,null,null),P=y.exports,w=i("24e8"),O=i("7167"),D=i("f262");function S(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function E(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?S(Object(i),!0).forEach((function(t){o()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):S(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var N={mixins:[d["a"],D["a"]],data:function(){return{computeCounter:0,viewFieldDetails:!1,viewChooseable:!1,fieldDetails:{},fieldFile:"",segmentFolder:"",filter:"",pagination:{sortBy:"fieldName",rowsPerPage:10}}},components:{"staging-round-field-details":P,"q-dialog":w["a"]},methods:E(E({},Object(c["b"])("tickets",["setChosenStagingFields","pushChosenStagingField","spliceChosenStagingFields","stagingConsolidateAndDrop","deleteStagingEditField"])),{},{inputLabels:function(e){var t=this,i="",n=Object.keys(e);return n.forEach((function(a,s){i+="".concat(t.getInputBindingLabel(a),": ").concat(e[a]),s+1<n.length&&(i+=", ")})),i},forceStagingEditFields:function(){this.computeCounter++},preDeleteStagingEditField:function(e){var t=this;this.deleteStagingEditField(e).then((function(){t.viewFieldDetails=!1,t.forceStagingEditFields()}))},consolidateAndDrop:function(){var e=this;this.$q.dialog({title:"Drop this staging round?",message:"This will drop the current staging round with the changes selected from the table. Continue?",cancel:!0}).onOk((function(){e.stagingConsolidateAndDrop({roundKey:e.getStagingRoundNumber,user:e.username,chosenStagingFields:e.chosenFields}).then((function(t){t.ok?(e.trNotify("Staging Round Successfully Dropped."),e.$router.push({name:"edit"})):e.trNotify(t.message,"negative")}))}))},toggleFieldDetails:function(e){e&&(this.fieldDetails=e,this.fieldFile=e.fieldName.charAt(0).toUpperCase()+e.fieldName.slice(1)+".vue",this.segmentFolder=e.segmentName.charAt(0).toUpperCase()+e.segmentName.slice(1),this.viewChooseable=!!this.hasConflicts(e.fieldName),this.fieldDetails.fieldData={fields:e.fieldData}),this.viewFieldDetails=!this.viewFieldDetails},isChosen:function(e){var t=e.fieldDataIndex;"question"==e.fieldName&&(t=t.substring(0,1));var i=this.chosenFields.find((function(i){return i.fieldName==e.fieldName&&e.stagingEditKey==i.stagingEditKey&&Object.keys(i.fields)[0]==t}));return!!i},hasConflicts:function(e){var t=O["b"].getStagingEditConflicts(this.getStagingEdits);return t[e]},chooseRoundFieldValue:function(e){var t=e.fieldDataIndex;"question"==e.fieldName&&(t=t.substring(0,1));var i={stagingEditKey:e.stagingEditKey,fieldName:e.fieldName,segmentName:e.segmentName,fields:o()({},t,"dropped"==e.stagingEditKey?this.droppedTicket[e.segmentName][e.fieldName][t]:this.getStagingEdits[e.stagingEditKey].changes[e.segmentName][e.fieldName].fields[t])};if(this.chosenFields.length>0){var n=this.chosenFields.findIndex((function(t){return e.questionGroup?Object.keys(t.fields)[0].substring(0,1)==e.fieldDataIndex.substring(0,1)&&e.questionGroup==t.fields[Object.keys(t.fields)[0]].questionGroup:t.fieldName===e.fieldName&&Object.keys(t.fields)[0].substring(0,1)==e.fieldDataIndex.substring(0,1)}));n>=0?this.spliceChosenStagingFields({index:n,removeAmount:1,newItem:i}):this.chosenFields=i}else this.chosenFields=i}}),filters:{questionGroup:function(e){switch(e){case"lla":return"LLA";case"pre":return"Pre assessment";case"post":return"Post assessment";case"cme":return"CME Posttest";case"caPolling":return"Clinical Advances Polling";case"evalIME":return"IME Evaluation";case"tykPatEd":return"Patient Education";case"tykIME":return"IME Test Yor Knowledge";case"surveyPatEd":return"Patient Education Survey";case"demoPatEd":return"Patient Education Demographic";default:return e}},stagingEditKeyFilter:function(e){return e.replace("_",".")}},computed:E(E(E({},Object(c["c"])("tickets",["getStagingEdits","droppedTicket","getWorkingProject","getChosenStagingFields","getStagingRoundNumber","getTargetFieldData"])),Object(c["c"])("auth",["username"])),{},{chosenFields:{get:function(){return this.getChosenStagingFields},set:function(e){Array.isArray(e)?this.setChosenStagingFields(e):this.pushChosenStagingField(e)}},stagingEditFields:function(){var e=this;this.computeCounter;var t={},i=Object.keys(this.getStagingEdits).filter((function(t){return!t.match("_")||t.includes(e.getStagingRoundNumber)}));i.forEach((function(i){Object.keys(e.getStagingEdits[i].changes).forEach((function(n){Object.keys(e.getStagingEdits[i].changes[n]).forEach((function(a){t[a]?t[a][i]=Object.assign({segmentName:n,fieldName:a,roundName:i},e.getStagingEdits[i].changes[n][a]):t[a]=o()({},i,Object.assign({segmentName:n,fieldName:a,roundName:i},e.getStagingEdits[i].changes[n][a]))}))}))})),Object.keys(t).forEach((function(e){t[e]=f.a.filter(t[e],(function(e){return Object.keys(e).find((function(e){return"fields"===e}))}))}));var n=f.a.pickBy(t,(function(t){return t.length>0&&t.find((function(t){return t.roundName.includes(e.getStagingRoundNumber)}))}));return n},columns:function(){var e=this,t=[{name:"fieldName",label:"Field Name",align:"left",field:function(e){return e.name}},{name:"dropped",align:"center",label:"Value At Last Drop",field:function(t){var i=[];return"string"!=typeof t.dropped?Object.keys(t.dropped).forEach((function(n){i.push("".concat(e.getInputBindingLabel(n),": ").concat(t.dropped[n]))})):i=t.dropped,i}}];return Object.keys(this.getStagingEdits).filter((function(t){return!t.match("_")||t.includes(e.getStagingRoundNumber)})).sort((function(e,t){return parseFloat(e.replace(/[A-Za-z]/g,""))>t.replace(/[A-Za-z]/g,"")})).forEach((function(i){t.push({name:i,align:"center",label:i.includes("_")?i.replace("_","."):"".concat(i," (Final Value)"),field:function(t){var n=i.replace(".","_"),a=[];return t[n]?"string"!=typeof t[n]?Object.keys(t[n]).forEach((function(i){a.push("".concat(e.getInputBindingLabel(i),": ").concat(t[n][i]))})):a=t[n]:a="None",a}})})),t.push({name:"roundName",field:"roundName"}),t.push({name:"segmentLabel",field:"segmentLabel"}),t},rowData:function(){var e=this,t=f.a.flattenDeep(Object.keys(this.getStagingEdits).map((function(t){return Object.keys(e.getStagingEdits[t].changes).filter((function(e){return"version"!=e})).map((function(i){return"deletedFields"==i?e.getStagingEdits[t].changes[i].map((function(i){var n,a=i.pointer.split("."),s=a[0],l=a[1],r=a[2].match(/\[([1-9])\]/)[1],d=(n={fieldName:l,segmentName:s,fieldDataIndex:r},o()(n,t,{label:"Field Deleted",value:i.field}),o()(n,"name","".concat(e.getLabel(s,l)," ").concat(r.substring(0,1))),o()(n,"segmentLabel",e.getLabel(s,null)),o()(n,"dropped","None"),n),c=e.droppedTicket[s][l];return c&&c.fields&&c.fields[r]&&Object.keys(c.fields[r]).length&&c&&c.fields&&c.fields[r]&&Object.keys(c.fields[r]).find((function(e){return"boolean"==typeof c.fields[r][e]||Object.keys(c.fields[r][e]).length||c.fields[r][e].length}))?(d.dropped={value:c.fields[r],label:"learningObjective"==l?"View Details":e.inputLabels(c.fields[r])},"question"==l&&(d.dropped.label="New Question",d.dropped.questionAbbreviation=e.abbreviate(c.fields[r].question))):d.dropped={label:"None",value:null},d})):Object.keys(e.getStagingEdits[t].changes[i]).filter((function(n){return e.getStagingEdits[t].changes[i][n].fields})).map((function(n){return Object.keys(e.getStagingEdits[t].changes[i][n].fields).map((function(a){var s,l=e.droppedTicket[i][n],r=(s={fieldName:n,segmentName:i,fieldDataIndex:"question"==n?e.getStagingEdits[t].changes[i][n].fields[a].id:a},o()(s,t,{value:e.getStagingEdits[t].changes[i][n].fields[a],label:"learningObjective"==n?"View Details":e.inputLabels(e.getStagingEdits[t].changes[i][n].fields[a])}),o()(s,"name","".concat(e.getLabel(i,n)," ").concat(a.substring(0,1))),o()(s,"segmentLabel",e.getLabel(i,null)),s);if(l&&l.fields&&l.fields[a]&&Object.keys(l.fields[a]).length&&l&&l.fields&&l.fields[a]&&Object.keys(l.fields[a]).find((function(e){return"boolean"==typeof l.fields[a][e]||Object.keys(l.fields[a][e]).length||l.fields[a][e].length}))?(r.dropped={value:l.fields[a],label:"learningObjective"==n?"View Details":e.inputLabels(l.fields[a])},r[t]={value:Object.assign(f.a.cloneDeep(l.fields[a]),r[t].value),label:"learningObjective"==n?"View Details":e.inputLabels(f.a.pickBy(e.getStagingEdits[t].changes[i][n].fields[a],(function(e,t){return"id"!=t})))},"question"==n&&(r.dropped.label="New Question",r.dropped.questionAbbreviation=e.abbreviate(l.fields[a].question))):r.dropped={label:"None",value:null},"question"==n){var d,c=e.getStagingEdits[t].changes[i][n].fields[a];r.questionGroup=c.questionGroup?c.questionGroup:l.fields[a].questionGroup,d=c.question?e.abbreviate(c.question):e.abbreviate(l.fields[a].question);var u=e.getStagingEdits[t].changes[i][n].fields[a],g=e.inputLabels(f.a.pickBy(u,(function(e,t){return"id"!=t})));Object.keys(u).filter((function(e){return"id"!=e})).length?r[t].value=Object.assign(f.a.cloneDeep(l.fields[a]),u):(r[t].value=r.dropped.value,g="No Changes"),r[t].label=g,r[t].questionAbbreviation=d}return r}))}))}))}))),i=[];return t.forEach((function(e){var t=i.find((function(t){return t.fieldName==e.fieldName&&t.fieldDataIndex==e.fieldDataIndex}));t?t=Object.assign(t,e):i.push(e)})),i=i.filter((function(t){return Object.keys(t).find((function(t){return t.includes(e.getStagingRoundNumber)}))})),i}}),mounted:function(){var e=this;Object.keys(this.getStagingEdits).filter((function(t){return t.includes(e.getStagingRoundNumber)})).forEach((function(t){Object.keys(e.getStagingEdits[t].changes).forEach((function(i){"deletedFields"==i?e.getStagingEdits[t].changes[i].forEach((function(i){var n=i.pointer.split("."),a=n[0],s=n[1],l=n[2].match(/\[([0-9]+)\]/)[1];e.hasConflicts(s)||(e.chosenFields={stagingEditKey:t,fieldName:s,segmentName:a,fields:o()({},l,"deleted")})})):Object.keys(e.getStagingEdits[t].changes[i]).forEach((function(n){f.a.hasIn(e.getStagingEdits[t].changes[i][n],"fields")&&!e.hasConflicts(n)&&Object.keys(e.getStagingEdits[t].changes[i][n].fields).forEach((function(a){e.chosenFields={stagingEditKey:t,fieldName:n,segmentName:i,fields:o()({},a,e.getStagingEdits[t].changes[i][n].fields[a])}}))}))}))}))},beforeDestroy:function(){this.chosenFields=[]}},k=N,j=(i("120c"),Object(C["a"])(k,l,r,!1,null,null,null)),A=j.exports,I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"q-mb-lg"},[e.hasNotes>-1?[i("q-table",{attrs:{data:e.rowData,columns:e.columns,title:"Staging Submission Info"},scopedSlots:e._u([{key:"body-cell-notesToOP",fn:function(t){return[t.row.notesToOP.length?[i("td",{staticClass:"cursor-pointer",on:{click:function(i){return e.showFullText("OP",t.row.notesToOP)}}},[i("span",{staticClass:"text-primary"},[i("q-icon",{staticClass:"q-mr-sm text-body2",attrs:{name:"launch"}}),i("span",[e._v(e._s(e.abbreviate(t.row.notesToOP)))])],1)])]:[i("td",[i("span",{staticClass:"text-italic"},[e._v("None")])])]]}},{key:"body-cell-notesToVPP",fn:function(t){return[t.row.notesToVPP.length?[i("td",{staticClass:"cursor-pointer",on:{click:function(i){return e.showFullText("VPP",t.row.notesToVPP)}}},[i("span",{staticClass:"text-primary"},[i("q-icon",{staticClass:"q-mr-sm text-body2",attrs:{name:"launch"}}),i("span",[e._v(e._s(e.abbreviate(t.row.notesToVPP)))])],1)])]:[i("td",[i("span",{staticClass:"text-italic"},[e._v("None")])])]]}}],null,!1,969110560)})]:e._e()],2)},T=[];function x(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function F(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?x(Object(i),!0).forEach((function(t){o()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var q={mixins:[d["a"]],data:function(){var e=this;return{columns:[{name:"roundName",label:"Staging Round Number",align:"left",field:function(e){return e.roundName.replace("_",".")}},{name:"notesToOP",label:"Notes to OP",align:"center",field:function(e){return e.notesToOP},format:function(e){return e.length?e:"None"}},{name:"notesToVPP",label:"Notes to VPP",align:"center",field:function(e){return e.notesToVPP},format:function(e){return e.length?e:"None"}},{name:"author",label:"Submitted By",align:"center",field:function(e){return e.author}},{name:"submissionDate",label:"Date of Submission",align:"right",field:function(e){return e.submissionDate},format:function(t){return e.displayDate(t)}}]}},computed:F(F({},Object(c["c"])("tickets",["getStagingEdits"])),{},{hasNotes:function(){var e=this;return Object.keys(this.getStagingEdits).findIndex((function(t){return t.includes("_")&&e.getStagingEdits[t].notesToOP&&e.getStagingEdits[t].notesToOP.length||e.getStagingEdits[t].notesToVPP&&e.getStagingEdits[t].notesToVPP.length}))},rowData:function(){var e=this;return Object.keys(this.getStagingEdits).filter((function(e){return e.includes("_")})).map((function(t){return{roundName:t,notesToOP:e.getStagingEdits[t].notesToOP,notesToVPP:e.getStagingEdits[t].notesToVPP,author:e.getStagingEdits[t].user,submissionDate:e.getStagingEdits[t].submissionDate}}))}}),methods:{showFullText:function(e,t){this.$q.dialog({title:"Notes To ".concat(e),message:t})}}},R=q,V=Object(C["a"])(R,I,T,!1,null,null,null),_=V.exports;function L(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function G(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?L(Object(i),!0).forEach((function(t){o()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):L(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var M={components:{"staging-round-summary":A,"staging-round-notes":_},computed:G({},Object(c["c"])("tickets",["getStagingRoundNumber","projectIsInStaging"])),beforeRouteEnter:function(e,t,i){i((function(e){e.projectIsInStaging||i({name:"edit"})}))}},H=M,K=Object(C["a"])(H,n,a,!1,null,null,null);t["default"]=K.exports},8528:function(e,t,i){var n={"./Activities/Activities":["7e30",0],"./Activities/Activities.vue":["7e30",0],"./Activities/fields/ActivityContent":["67ea",0],"./Activities/fields/ActivityContent.vue":["67ea",0],"./Activities/fields/AdditionalBuckets":["a8d0",0],"./Activities/fields/AdditionalBuckets.vue":["a8d0",0],"./AudienceEngagement/AudienceEngagement":["5421",0],"./AudienceEngagement/AudienceEngagement.vue":["5421",0],"./AudienceEngagement/fields/CAUpdateEmail":["3c3c",0],"./AudienceEngagement/fields/CAUpdateEmail.vue":["3c3c",0],"./AudienceEngagement/fields/EmailTemplates":["3780"],"./AudienceEngagement/fields/EmailTemplates.js":["3780"],"./CAPreview/CmeActivities":["3561",0],"./CAPreview/CmeActivities.vue":["3561",0],"./CAPreview/Header":["933e",0],"./CAPreview/Header.vue":["933e",0],"./CAPreview/MedChallenge":["7abb",0],"./CAPreview/MedChallenge.vue":["7abb",0],"./CAPreview/Nav":["c3c5",0],"./CAPreview/Nav.vue":["c3c5",0],"./CAPreview/Resources":["8383",0],"./CAPreview/Resources.vue":["8383",0],"./CAPreview/SteeringCommittee":["8188",0],"./CAPreview/SteeringCommittee.vue":["8188",0],"./CAPreview/Video":["6d75",2],"./CAPreview/Video.vue":["6d75",2],"./ClinicalAdvancesPageDetails/ClinicalAdvancesPageDetails":["fc5f",0],"./ClinicalAdvancesPageDetails/ClinicalAdvancesPageDetails.vue":["fc5f",0],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesIntroduction":["e700",0],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesIntroduction.vue":["e700",0],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesTeaser":["db40",0],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesTeaser.vue":["db40",0],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesTitle":["ac78",0],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesTitle.vue":["ac78",0],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesURL":["2477",0],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesURL.vue":["2477",0],"./Compliance/ComplianceReviewForm":["ea05",1,0],"./Compliance/ComplianceReviewForm.vue":["ea05",1,0],"./Compliance/fields/Activities":["da81",0],"./Compliance/fields/Activities.vue":["da81",0],"./Compliance/fields/ActivityPlanning":["1c29",1,0],"./Compliance/fields/ActivityPlanning.vue":["1c29",1,0],"./Compliance/fields/ActivityTitle":["71ca",0],"./Compliance/fields/ActivityTitle.vue":["71ca",0],"./Compliance/fields/ActivityType":["17e4",0],"./Compliance/fields/ActivityType.vue":["17e4",0],"./Compliance/fields/CmeReviewDate":["26fa",0],"./Compliance/fields/CmeReviewDate.vue":["26fa",0],"./Compliance/fields/Format":["85ee",0],"./Compliance/fields/Format.vue":["85ee",0],"./Compliance/fields/MipsActivities":["5387",0],"./Compliance/fields/MipsActivities.vue":["5387",0],"./Compliance/fields/Objectives":["abce",0],"./Compliance/fields/Objectives.vue":["abce",0],"./Compliance/fields/ReviewQuestions":["2460",0],"./Compliance/fields/ReviewQuestions.vue":["2460",0],"./Compliance/fields/Reviewers":["c992",0],"./Compliance/fields/Reviewers.vue":["c992",0],"./Compliance/fields/TargetAudience":["f9f3",0],"./Compliance/fields/TargetAudience.vue":["f9f3",0],"./Compliance/fields/WorkfrontLink":["baf8",0],"./Compliance/fields/WorkfrontLink.vue":["baf8",0],"./DesignInformation/DesignInformation":["6d1a",0],"./DesignInformation/DesignInformation.vue":["6d1a",0],"./DesignInformation/fields/ImageRecommendations":["51be",0],"./DesignInformation/fields/ImageRecommendations.vue":["51be",0],"./DesignInformation/fields/RelatedImages":["82d6",0],"./DesignInformation/fields/RelatedImages.vue":["82d6",0],"./EditDefault":["9625",0],"./EditDefault.vue":["9625",0],"./GeneralInformation/GeneralInformation":["ff6a",0],"./GeneralInformation/GeneralInformation.vue":["ff6a",0],"./GeneralInformation/fields/ClinicalAdvances":["8f0a",0],"./GeneralInformation/fields/ClinicalAdvances.vue":["8f0a",0],"./GeneralInformation/fields/DeliverableSFNumbers":["7fd3",0],"./GeneralInformation/fields/DeliverableSFNumbers.vue":["7fd3",0],"./GeneralInformation/fields/PreviousSFBoxLink":["1700",0],"./GeneralInformation/fields/PreviousSFBoxLink.vue":["1700",0],"./GeneralInformation/fields/PreviousSFNumbers":["d708",0],"./GeneralInformation/fields/PreviousSFNumbers.vue":["d708",0],"./GeneralInformation/fields/ProductType":["ea69",0],"./GeneralInformation/fields/ProductType.vue":["ea69",0],"./GeneralInformation/fields/ProjectNumber":["3d56",0],"./GeneralInformation/fields/ProjectNumber.vue":["3d56",0],"./GeneralInformation/fields/RelatedTherapeuticAreaLeadSpecialty":["c2cb",0],"./GeneralInformation/fields/RelatedTherapeuticAreaLeadSpecialty.vue":["c2cb",0],"./GeneralInformation/fields/SelectSupporterAttribution":["0150",0],"./GeneralInformation/fields/SelectSupporterAttribution.vue":["0150",0],"./GeneralInformation/fields/Supporters":["dfee",0],"./GeneralInformation/fields/Supporters.vue":["dfee",0],"./GeneralInformation/fields/TherapeuticAreaLeadSpecialty":["d395",0],"./GeneralInformation/fields/TherapeuticAreaLeadSpecialty.vue":["d395",0],"./GeneralInformation/fields/WorkfrontLink":["1c42",0],"./GeneralInformation/fields/WorkfrontLink.vue":["1c42",0],"./GeneralInformation/fields/leadSpecialties":["16e4",0],"./GeneralInformation/fields/leadSpecialties.js":["16e4",0],"./HandoffNotes/HandoffNotes":["2c1d",0],"./HandoffNotes/HandoffNotes.vue":["2c1d",0],"./HandoffNotes/fields/AccreditationCompliance":["8159",0],"./HandoffNotes/fields/AccreditationCompliance.vue":["8159",0],"./HandoffNotes/fields/AudienceEngagement":["e748",0],"./HandoffNotes/fields/AudienceEngagement.vue":["e748",0],"./HandoffNotes/fields/CopyEditors":["8d77",0],"./HandoffNotes/fields/CopyEditors.vue":["8d77",0],"./HandoffNotes/fields/MedicalEducationDirectors":["167d",0],"./HandoffNotes/fields/MedicalEducationDirectors.vue":["167d",0],"./HandoffNotes/fields/ProductionStudio":["9dfe",0],"./HandoffNotes/fields/ProductionStudio.vue":["9dfe",0],"./Icd9Codes/Icd9Codes":["73dc",0],"./Icd9Codes/Icd9Codes.vue":["73dc",0],"./Icd9Codes/fields/Icd9Code":["fd25",0],"./Icd9Codes/fields/Icd9Code.vue":["fd25",0],"./LearningObjectives/LearningObjectives":["092d",0],"./LearningObjectives/LearningObjectives.vue":["092d",0],"./LearningObjectives/fields/EditObjective":["b53d",0],"./LearningObjectives/fields/EditObjective.vue":["b53d",0],"./LearningObjectives/fields/LearningObjective":["3406",0],"./LearningObjectives/fields/LearningObjective.vue":["3406",0],"./LocalPerspectives/LocalPerspectives":["bb85",0],"./LocalPerspectives/LocalPerspectives.vue":["bb85",0],"./LocalPerspectives/fields/ActivityAddons":["ba33",0],"./LocalPerspectives/fields/ActivityAddons.vue":["ba33",0],"./MedChallenges/MedChallenges":["532f",0],"./MedChallenges/MedChallenges.vue":["532f",0],"./MedChallenges/fields/MedChallenge":["3daa",0],"./MedChallenges/fields/MedChallenge.vue":["3daa",0],"./PartnerDetails/PartnerDetails":["cbc0",0],"./PartnerDetails/PartnerDetails.vue":["cbc0",0],"./PartnerDetails/fields/CopyrightStatement":["01e8",0],"./PartnerDetails/fields/CopyrightStatement.vue":["01e8",0],"./PartnerDetails/fields/PartnerLogoRequired":["6b61",0],"./PartnerDetails/fields/PartnerLogoRequired.vue":["6b61",0],"./PartnerDetails/fields/PartnerStatement":["c828",0],"./PartnerDetails/fields/PartnerStatement.vue":["c828",0],"./PartnerDetails/fields/Partners":["c084",0],"./PartnerDetails/fields/Partners.vue":["c084",0],"./PollingQuestions/PollingQuestions":["7b47",0],"./PollingQuestions/PollingQuestions.vue":["7b47",0],"./Postcards/Postcards":["cde3",0],"./Postcards/Postcards.vue":["cde3",0],"./Postcards/fields/AdditionalComments":["2893",0],"./Postcards/fields/AdditionalComments.vue":["2893",0],"./Postcards/fields/Dimensions":["bbd0",0],"./Postcards/fields/Dimensions.vue":["bbd0",0],"./Postcards/fields/Quantity":["d6b8",0],"./Postcards/fields/Quantity.vue":["d6b8",0],"./Questions/Questions":["01f4",0],"./Questions/Questions.vue":["01f4",0],"./RelatedResources/RelatedResources":["3bce",0],"./RelatedResources/RelatedResources.vue":["3bce",0],"./RelatedResources/fields/ClinicalReferenceArticles":["3c2b",0],"./RelatedResources/fields/ClinicalReferenceArticles.vue":["3c2b",0],"./RelatedResources/fields/RelatedLinks":["ddba",0],"./RelatedResources/fields/RelatedLinks.vue":["ddba",0],"./RelatedResources/fields/SlideKits":["f2a7",0],"./RelatedResources/fields/SlideKits.vue":["f2a7",0],"./RenewalInformation/RenewalInformation":["e125",0],"./RenewalInformation/RenewalInformation.vue":["e125",0],"./RenewalInformation/fields/RenewalInformationField":["be2c",0],"./RenewalInformation/fields/RenewalInformationField.vue":["be2c",0],"./StagingEdits":["e44f",1,0,3],"./StagingEdits.vue":["e44f",1,0,3],"./SteeringCommittee/SteeringCommittee":["8bbe",1,0],"./SteeringCommittee/SteeringCommittee.vue":["8bbe",1,0],"./SteeringCommittee/fields/Contributor":["e92d",1,0],"./SteeringCommittee/fields/Contributor.vue":["e92d",1,0],"./TicketView/Activities":["a98e",0],"./TicketView/Activities.vue":["a98e",0],"./TicketView/AudienceEngagement":["ddcc",0],"./TicketView/AudienceEngagement.vue":["ddcc",0],"./TicketView/DesignInformation":["1e94",0],"./TicketView/DesignInformation.vue":["1e94",0],"./TicketView/EditBtn":["357c",0],"./TicketView/EditBtn.vue":["357c",0],"./TicketView/GeneralInformation":["1e7f",0],"./TicketView/GeneralInformation.vue":["1e7f",0],"./TicketView/HandoffNotes":["5db8",0],"./TicketView/HandoffNotes.vue":["5db8",0],"./TicketView/Icd9Codes":["a674",0],"./TicketView/Icd9Codes.vue":["a674",0],"./TicketView/LocalPerspectives":["578b",0],"./TicketView/LocalPerspectives.vue":["578b",0],"./TicketView/MedChallenges":["0cb7",0],"./TicketView/MedChallenges.vue":["0cb7",0],"./TicketView/PageDetails":["9932",0],"./TicketView/PageDetails.vue":["9932",0],"./TicketView/PartnerDetails":["6a14",0],"./TicketView/PartnerDetails.vue":["6a14",0],"./TicketView/PollQuestions":["4c99",0],"./TicketView/PollQuestions.vue":["4c99",0],"./TicketView/PostcardsHandouts":["2531",0],"./TicketView/PostcardsHandouts.vue":["2531",0],"./TicketView/RelatedResources":["227b",0],"./TicketView/RelatedResources.vue":["227b",0],"./TicketView/SteeringCommittee":["9203",0],"./TicketView/SteeringCommittee.vue":["9203",0],"./TicketView/SubmissionMeta":["d15c",1,0],"./TicketView/SubmissionMeta.vue":["d15c",1,0],"./TicketView/Video":["9d32",0],"./TicketView/Video.vue":["9d32",0],"./Video/Videos":["b8c7",0],"./Video/Videos.vue":["b8c7",0],"./Video/fields/Video":["475e",0],"./Video/fields/Video.vue":["475e",0]};function a(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return Promise.all(t.slice(1).map(i.e)).then((function(){return i(a)}))}a.keys=function(){return Object.keys(n)},a.id="8528",e.exports=a},a79c:function(e,t,i){}}]);