(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["0a1de8b1"],{3092:function(e,t,s){"use strict";var n=s("fc4f"),a=s.n(n);a.a},"44d3":function(e,t,s){},ca67:function(e,t,s){"use strict";var n=s("44d3"),a=s.n(n);a.a},d61c:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"flex"},[s("div",{staticClass:"col"},[s("div",{staticClass:"q-mx-auto",staticStyle:{"max-width":"90%"}},[s("q-form",{ref:"myform",on:{submit:e.handleForm}},[s("q-scroll-area",{ref:"scrollArea",staticClass:"q-pa-md",staticStyle:{height:"40rem","text-align":"center"},attrs:{"content-style":"height:100%!important"}},[s("router-view")],1),e.segmentParams?s("div",{staticClass:"q-mt-lg row justify-center"},[s("q-btn",{attrs:{type:"submit",label:"Submit"}}),s("q-btn",{attrs:{label:"Save"},on:{click:e.saveProject}})],1):e._e()],1)],1)]),s("q-dialog",{attrs:{value:e.viewComments},on:{input:e.toggleComments}},[s("comments-page",{attrs:{comments:e.getFieldComments}})],1),s("q-dialog",{attrs:{value:e.viewFlags},on:{input:e.toggleFlags}},[s("flag-page")],1)],1)},a=[],i=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("7f7f"),s("c47a")),o=s.n(i),r=s("24e8"),c=s("2f62"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-card",[s("q-card-section",{staticClass:"row justify-center items-center"},[s("div",{staticClass:"text-h6"},[s("span",{staticClass:"text-weight-bold text-primary"},[e._v('"'+e._s(e.getLabel("field",this.activeComment.fieldName))+'"')]),e._v(" Comments\n        ")]),s("div",{staticClass:"col-auto"},[s("autocomplete-input",{ref:"commentInput",staticClass:"q-mr-sm",staticStyle:{"min-width":"350px"},attrs:{error:e.commentsUnacknowledged,autofocus:"","bottom-slots":"",label:"create"==e.submissionState?"Add New Comment":"Edit Comment",hint:"@username to message a specific user associated with this project",disable:e.commentsUnacknowledged,type:"text",keyupHandler:e.keyupHandler,keydownHandler:e.keydownHandler,inputHandler:e.checkAutocompleteMenu,clickHandler:function(e){e.stopPropagation()},menuItems:e.associatedUsers,menuModel:e.newCommentUser.state,itemClickHandler:function(t){e.targetUser(t,e.key)},menuContentStyle:"width: 350px",found:e.found}})],1),s("div",{staticClass:"col-auto"},[s("q-btn",{attrs:{disable:e.commentsUnacknowledged,label:"submit"},on:{click:e.submitComment}})],1)]),e.comments.length>0?s("q-card-section",{staticClass:"q-mt-md",staticStyle:{"max-height":"400px"}},[e.commentsUnacknowledged?s("div",{staticClass:"row justify-end q-my-md"},[s("q-btn",{attrs:{icon:"markunread_mailbox",label:"Mark All As Read",size:"sm",color:"negative"},on:{click:e.markAllComments}})],1):e._e(),s("q-list",{attrs:{separator:""}},e._l(e.sortedComments,(function(t,n){return s("q-item",{key:n,staticClass:"comment wrap"},[s("q-item-section",[s("q-item-label",[e._v(e._s(t.username))]),s("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.text))])],1),s("q-item-section",{attrs:{side:"",top:""}},[s("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.displayDate(t.dateCreated)))]),t.associatedUsers[e.username].acknowledged||t.username==e.username?e._e():s("q-btn",{staticClass:"q-mt-sm",attrs:{size:"sm",icon:"check",color:"primary",label:"Mark as Read"},on:{click:function(t){return e.setCommentStatus({index:n,username:e.username})}}})],1),s("div",{staticClass:"row"},[t.username===e.username?s("q-item-label",{attrs:{caption:""}},[s("q-btn",{attrs:{icon:"more_vert",dense:"",flat:""}},[s("q-menu",[s("q-list",[s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(s){return e.setEditState(t.dateCreated,t.text)}}},[s("q-item-section",[e._v("Edit Comment")])],1),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(s){return e.findDeleteComment(t.dateCreated)}}},[s("q-item-section",[e._v("Delete Comment")])],1)],1)],1)],1)],1):e._e()],1)],1)})),1)],1):s("q-card-section",{staticClass:"row justify-center items-center q-mb-md"},[s("span",{staticClass:"text-italic"},[e._v("No comments to display")])])],1)},u=[],m=(s("6762"),s("2fdb"),s("20d6"),s("55dd"),s("4db1")),d=s.n(m),f=(s("7514"),s("bd4c"),s("6165")),p=(s("2ef0"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-input",e._b({attrs:{value:e.model},on:{keyup:e.keyupHandler,keydown:e.keydownHandler,click:function(t){return t.preventDefault(),e.clickHandler(t)},input:e.handleInput},scopedSlots:e._u([{key:"error",fn:function(){return[e._v("\n        Please acknowledge unread issues before leaving a comment. \n    ")]},proxy:!0}])},"q-input",e.parentProps,!1),[s("q-menu",{attrs:{"content-style":e.menuContentStyle,"no-focus":"","no-refocus":"",value:e.menuModel}},[s("q-list",e._l(e.menuItems,(function(t,n){return s("q-item",{key:n,class:e.found===n?"bg-amber row items-center justify-between":"row items-center justify-between",attrs:{clickable:""},on:{click:e.itemClickHandler}},[s("div",[e._v(e._s(t))]),e.found===n?s("q-icon",{staticClass:"text-white",attrs:{name:"keyboard_tab"}}):e._e()],1)})),1)],1)],1)}),g=[],h={data:function(){return{model:""}},props:["error","autofocus","bottom-slots","label","hint","disable","type","menuItems","menuModel","itemClickHandler","menuContentStyle","found","keyupHandler","keydownHandler","inputHandler","clickHandler"],computed:{parentProps:function(){return this.$props}},methods:{handleInput:function(e){this.model=e,this.inputHandler(),this.$emit("input",e)}}},b=h,v=s("2877"),y=Object(v["a"])(b,p,g,!1,null,null,null),w=y.exports;function k(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function C(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?k(Object(s),!0).forEach((function(t){o()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):k(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var O={props:["comments"],mixins:[f["a"]],data:function(){return{newCommentUser:{state:!1,completed:!1},found:null,submissionState:"create"}},components:{"autocomplete-input":w},computed:C({},Object(c["c"])("tickets",["activeTicket","fieldLabel","associatedUsers"]),{},Object(c["c"])("auth",["username"]),{},Object(c["e"])("tickets",["activeComment"]),{commentsUnacknowledged:function(){var e=this,t=this.comments||[];return!!t.find((function(t){return!1===t.associatedUsers[e.username].acknowledged}))},sortedComments:function(){var e=d()(this.comments);return e.sort((function(e,t){return t.dateCreated-e.dateCreated}))}}),methods:C({},Object(c["b"])("tickets",["setCommentStatus","addComment","deleteComment","updateComment"]),{findDeleteComment:function(e){var t=this.comments.findIndex((function(t){return t.dateCreated===e}));this.deleteComment(t)},setEditState:function(e,t){var s=this;console.log("comment: ",t),this.submissionState=e,this.$refs.commentInput.model=t,setTimeout((function(){s.$refs.commentInput.$el.querySelector("input").focus()}),700)},targetUser:function(e,t){this.$refs.commentInput.model="@".concat(this.associatedUsers[t]," "),this.newCommentUser.state=!1,this.newCommentUser.completed=!0},checkAutocompleteMenu:function(){var e=this,t=!1;"@"===this.$refs.commentInput.model[0]&&!1===this.newCommentUser.completed?(this.newCommentUser.state=!0,this.$refs.commentInput.model.length>1&&Object.keys(this.associatedUsers).forEach((function(s){var n=e.associatedUsers[s].toLowerCase(),a=e.$refs.commentInput.model.substring(1).toLowerCase();n.includes(a)&&(console.log("found"),e.found=s,t=!0)}))):this.newCommentUser.state&&(this.newCommentUser.state=!1),t||(this.found=null)},markAllComments:function(){var e=this;this.comments.filter((function(t,s){return t.associatedUsers[e.username].acknowledged||e.setCommentStatus({index:s,username:e.username}),!t.associatedUsers[e.username].acknowledged}))},submitComment:function(){var e=this;if(this.newCommentUser.state=!1,this.$refs.commentInput.model.length>0){if("create"!=this.submissionState){var t=this.comments.findIndex((function(t){return t.dateCreated===e.submissionState}));this.updateComment({index:t,comment:this.$refs.commentInput.model}),this.trNotify("Comment Updated"),this.submissionState="create"}else{var s={};Object.keys(this.associatedUsers).forEach((function(t){e.associatedUsers[t]===e.username?s[e.associatedUsers[t]]={acknowledged:!0,seen:!0,dateRead:Date.now(),dateSeen:Date.now()}:s[e.associatedUsers[t]]={acknowledged:!1,seen:!1,dateRead:0,dateSeen:0}}));var n={username:this.username,text:this.$refs.commentInput.model,dateCreated:Date.now(),associatedUsers:s};this.addComment(n);var a=this.getLabel("field",this.activeComment.fieldName);this.trNotify("New comment added to ".concat(a))}this.$refs.commentInput.model="",this.newCommentUser.completed=!1}},keydownHandler:function(e){9===e.which&&e.preventDefault()},keyupHandler:function(e){""!==this.$refs.commentInput.model&&"@"!==this.$refs.commentInput.model||(this.newCommentUser.completed=!1),13===e.which&&(e.stopPropagation(),this.submitComment(),this.newCommentUser.state=!1),27===e.which&&(this.$refs.commentInput.model=""),9===e.which&&this.found&&this.targetUser(e,this.found)}})},j=O,q=Object(v["a"])(j,l,u,!1,null,null,null),U=q.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-card",[s("q-card-section",{staticClass:"q-ma-md",staticStyle:{"text-align":"center"}},[e.findFlag?s("div",{staticClass:"text-h6"},[e._v("Edit/Remove "),s("span",{staticClass:"text-weight bold text-primary"},[e._v(e._s(e.getLabel("field",this.activeFlag.fieldName)))]),e._v(" Flag\n          ")]):s("div",{staticClass:"text-h6"},[e._v("Mark "),s("span",{staticClass:"text-weight-bold text-primary"},[e._v(e._s(e.getLabel("field",this.activeFlag.fieldName)))]),e._v(" For Review")]),s("div",{staticClass:"col-auto"},[s("q-input",{staticClass:"q-mr-sm q-mb-md",staticStyle:{"min-width":"350px"},attrs:{label:"Add a description for this flag (optional)",type:"text"},on:{keyup:function(t){return t.stopPropagation(),function(t){return e.keyupHandler(t)}(t)}},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),s("div",{staticClass:"col-auto"},[s("q-select",{attrs:{options:e.urgencyOptions,label:"Urgency"},model:{value:e.urgency,callback:function(t){e.urgency=t},expression:"urgency"}})],1),s("q-card-section",{staticClass:"row justify-center items-center"},[s("q-btn-toggle",{staticClass:"my-custom-toggle",attrs:{"no-caps":"",unelevated:"","toggle-color":"primary",color:"white","text-color":"primary",options:[{label:"For all users",value:!0},{label:"Choose which users to flag",value:!1}]},model:{value:e.flagAll,callback:function(t){e.flagAll=t},expression:"flagAll"}})],1),e.flagAll?e._e():s("q-card-section",{staticClass:"row justify-center items-center q-pa-none q-mt-md"},[s("q-card",{staticClass:"col-grow",staticStyle:{"min-width":"100px"}},[s("q-card-actions",{staticClass:"bg-primary text-white"},[s("q-item-label",[e._v("Add users to this issue")])],1),s("q-separator"),s("q-card-section",{staticClass:"bg-grey-2 text-left"},[e._l(e.flaggedUsers,(function(t){return s("q-chip",{key:t},[e._v("\n                          "+e._s(t)+"\n                          "),s("q-btn",{attrs:{round:"",flat:"",size:"xs",icon:"close"},on:{click:function(s){return e.removeFlaggedUser(t)}}})],1)})),s("q-select",{attrs:{multiple:"","use-chips":"",options:e.roles,label:"Add by Role"},model:{value:e.roleSelect,callback:function(t){e.roleSelect=t},expression:"roleSelect"}})],2),s("q-card-actions",[s("q-input",{staticClass:"col-grow",attrs:{label:"Add user"},on:{keyup:function(t){return e.usersKeyupHandler(t)}},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"},on:{click:e.addUserToFlag}})]},proxy:!0}],null,!1,2791620148),model:{value:e.userInput,callback:function(t){e.userInput=t},expression:"userInput"}})],1)],1)],1)],1),s("q-card-section",{staticClass:"float-right"},[s("q-btn",{staticClass:"q-mr-sm",attrs:{label:"Cancel"},on:{click:e.toggleFlags}}),s("q-btn",{staticClass:"q-mr-sm",attrs:{label:e.findFlag?"Update":"Submit"},on:{click:e.preSubmitFlag}}),e.findFlag?s("q-btn",{staticClass:"bg-negative text-white",attrs:{label:"Remove Flag"},on:{click:e.submitRemoveFlag}}):e._e()],1)],1)},S=[];s("3846");function P(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function F(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?P(Object(s),!0).forEach((function(t){o()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):P(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var I={mixins:[f["a"]],data:function(){return{flagAll:!0,roleSelect:null,description:"",urgency:"low",urgencyOptions:["low","medium","high"],flaggedUsers:[],userInput:"",flagID:null,roles:[]}},computed:F({},Object(c["c"])("flags",["activeFlag","flags"]),{},Object(c["c"])("tickets",["associatedUsers","ticketNumber"]),{},Object(c["c"])("auth",["user","username"]),{},Object(c["e"])("tickets",["workingProject"]),{findFlag:function(){var e=this,t=_.filter(this.flags,(function(t,s){if(t.fieldKey===e.activeFlag.fieldKey&&t.fieldName===e.activeFlag.fieldName&&"none"!=t.urgency)return e.flagID=s,t}));return t.length>0&&t[0]}}),methods:F({},Object(c["b"])("flags",["toggleFlags","submitFlag","updateFlag","removeFlag"]),{submitRemoveFlag:function(){this.removeFlag(this.flagID),this.trNotify("Flag disabled"),this.toggleFlags()},keyupHandler:function(e){27===e.which&&(this.description="")},usersKeyupHandler:function(e){13===e.which&&this.addUserToFlag()},addUserToFlag:function(){var e=this;if(this.flaggedUsers.find((function(t){return t===e.userInput})))return this.trNotify("User already listed","negative"),!1;this.userInput.length>0&&(this.flaggedUsers.push(this.userInput),this.userInput="")},removeFlaggedUser:function(e){var t=this.flaggedUsers.indexOf(e);this.flaggedUsers.splice(t,1)},preSubmitFlag:function(){var e={},t={};this.flagAll?t={all:"all"}:(this.roleSelect&&this.roleSelect.length>0&&this.roleSelect.forEach((function(e){t[e.value]=e.value})),this.flaggedUsers&&this.flaggedUsers.length>0&&this.flaggedUsers.forEach((function(t){e[t]={seen:!1,dateSeen:"",completed:!1,dateCompleted:""}})));var s={author:{firstName:this.user.profile.firstName,lastName:this.user.profile.lastName,userName:this.username},flagDescription:this.description,urgency:this.urgency,associatedUsers:e,associatedRoles:t,flagDate:Date.now(),projectID:this.workingProject,ticketID:this.ticketNumber,flagType:"field"},n=this.getLabel("field",this.activeFlag.fieldName);if(this.findFlag){s.flagDate=this.findFlag.flagDate;var a={id:this.flagID,flag:s};this.updateFlag(a),this.trNotify("".concat(n," flag updated."))}else this.submitFlag(s),this.trNotify("New flag added to ".concat(n));this.toggleFlags()}}),mounted:function(){var e=this;this.roles=Object.keys(this.labels.role).map((function(t){return{label:e.labels.role[t],value:t}}));var t=this.findFlag;if(t){if(this.description=t.flagDescription,t.associatedRoles.hasOwnProperty("all")||!Object.keys(t.associatedRoles).length&&!Object.keys(t.associatedUsers).length)this.flagAll=!0;else{this.flagAll=!1;var s=Object.keys(t.associatedUsers);s.forEach((function(t){e.flaggedUsers.push(t)}));var n=Object.keys(t.associatedRoles);if(n.length>0){var a=[];n.forEach((function(t){a.push(e.roles.find((function(e){return e.value===t})))})),a.length>0&&(this.roleSelect=a)}}this.urgency=t.urgency}}},D=I,N=(s("ca67"),Object(v["a"])(D,x,S,!1,null,"bab8a838",null)),$=N.exports;function H(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function A(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?H(Object(s),!0).forEach((function(t){o()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):H(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var E={data:function(){return{ticket:{},segmentParams:null}},methods:A({},Object(c["b"])("tickets",["saveWorkingProject","submitWorkingProject","toggleComments"]),{},Object(c["b"])("flags",["toggleFlags"]),{handleForm:function(){this.submit()},saveProject:function(){var e=this;this.$q.dialog({title:"Save working project?",message:"If you delete cache/cookies saved changes will be lost."}).onOk((function(){e.saveWorkingProject()})).onCancel((function(){}))},submit:function(){var e=this;this.$refs.myform.validate().then((function(t){t?(console.log("Validation Success"),e.$q.dialog({title:"Submit Prodticket?",message:"Prodticket version will be incremented and stored in database. Continue?"}).onOk((function(){e.submitWorkingProject()})).onCancel((function(){}))):console.log("Validation failed")}))},reset:function(){this.$refs.form.resetValidation()}}),computed:A({},Object(c["c"])("tickets",["getWorkingProject","activeTicket","viewComments","getFieldComments"]),{},Object(c["e"])("tickets",["workingProject","projects"]),{},Object(c["e"])("flags",["viewFlags"])),components:{"comments-page":U,"flag-page":$,"q-dialog":r["a"]},mounted:function(){this.ticket=this.activeTicket},watch:{$route:function(e,t){this.$refs.scrollArea.setScrollPosition(0,200),"edit"!=e.name?this.segmentParams=!0:this.segmentParams=!1}}},R=E,L=(s("3092"),Object(v["a"])(R,n,a,!1,null,null,null));t["default"]=L.exports},fc4f:function(e,t,s){}}]);