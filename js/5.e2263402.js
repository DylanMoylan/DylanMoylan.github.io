(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"071f":function(e,t,s){},1516:function(e,t,s){"use strict";var i=s("071f"),n=s.n(i);n.a},2052:function(e,t,s){},"74af":function(e,t,s){},b124:function(e,t,s){"use strict";var i=s("2052"),n=s.n(i);n.a},d0f5:function(e,t,s){"use strict";var i=s("74af"),n=s.n(i);n.a},d61c:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"q-pb-md",staticStyle:{"background-color":"#f5f5f5"}},[s("div",{staticClass:"q-mx-auto",style:e.segmentParams?"height: 75vh":"height: 100vh"},[s("q-form",{ref:"myform",staticStyle:{height:"inherit",position:"relative"},attrs:{greedy:""}},[s("q-scroll-area",{ref:"scrollArea",staticClass:"q-pa-md q-mb-sm main-scroll-area",style:e.segmentParams?"":"height: 100vh",attrs:{visible:""}},[s("router-view",{ref:"routerView"})],1)],1),e.segmentParams?s("div",{staticClass:"q-py-sm fixed-bottom",staticStyle:{"background-color":"white"}},[s("div",{staticClass:"row justify-around",style:{"margin-left":e.buttonLeftMargin+"px"}},[s("q-btn",{attrs:{disable:!e.canPrev,label:"Prev"},on:{click:function(t){return e.goingToAnotherSection("prev")}}}),s("div",{staticStyle:{display:"inline"}},[s("q-btn",{class:e.hasUnSubmitted?"bg-warning":"",attrs:{type:"submit",disable:e.editDisabled},on:{click:e.submit}},[s("div",{staticClass:"row items-center no-wrap"},[e.hasUnSubmitted?s("q-icon",{attrs:{left:"",name:"info"}}):e._e(),s("div",[e._v("Submit")])],1)]),!e.hasPermission("drop")&&e.projectIsLive?s("q-tooltip",{attrs:{"content-class":"bg-negative text-white text-body2",delay:500}},[e._v("You do not have permission submit ProdFixes. Please speak to your supervisor to be granted edit access.")]):e.hasPermission("edit")?e.hasUnSubmitted?s("q-tooltip",{attrs:{"content-class":"bg-warning text-white text-body2"}},[e._v("You have made changes to this ticket which haven't been submitted yet.")]):e._e():s("q-tooltip",{attrs:{"content-class":"bg-negative text-white text-body2"}},[e._v("You do not have permission to edit. Please speak to your supervisor to be granted edit access.")])],1),s("q-btn",{attrs:{disable:!e.canNext,label:"Next"},on:{click:function(t){return e.goingToAnotherSection("next")}}})],1)]):e._e()],1),s("q-dialog",{attrs:{value:e.viewComments,"transition-show":"jump-up","transition-hide":"jump-down"},on:{input:e.toggleComments}},[s("comment-modal",{attrs:{comments:e.getFieldComments}})],1),s("q-dialog",{attrs:{value:e.viewFlags,"transition-show":"jump-up","transition-hide":"jump-down"},on:{input:e.toggleFlags}},[s("flags-modal")],1)],1)},n=[],a=(s("8e6e"),s("8a81"),s("6762"),s("2fdb"),s("7f7f"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("9523")),o=s.n(a),r=s("24e8"),l=s("2f62"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-card",[s("q-card-section",{staticClass:"row justify-center items-center"},[s("div",{staticClass:"text-h6"},[s("span",{staticClass:"text-weight-bold text-primary"},[e._v('"'+e._s(e.getLabel(this.activeComment.segmentName,this.activeComment.fieldName))+'"')]),e._v(" Comments\n        ")]),s("div",{staticClass:"text-h8"},[e.projectIsInStaging&&e.activeComment.commentIndex>1?s("span",{staticClass:"text-weight-bold text-negative"},[e._v("\n                  Warning: This is a duplicate field - any comments will not be visible after staging submission. You can leave comments on original field instead.\n              ")]):e._e()]),s("comment-autocomplete",{attrs:{options:e.userOptions,disable:e.commentsUnacknowledged||!e.projectIsActive,error:e.commentsUnacknowledged,label:"create"==e.submissionState?"Add New Comment":"Edit Comment",editComment:e.editComment},on:{value:e.submitComment}})],1),e.comments.length>0?s("q-card-section",{staticClass:"q-mt-md",staticStyle:{"max-height":"400px"}},[e.commentsUnacknowledged?s("div",{staticClass:"row justify-end q-my-md"},[s("q-btn",{attrs:{icon:"markunread_mailbox",label:"Mark All As Read",size:"sm",color:"negative"},on:{click:e.markAllComments}})],1):e._e(),s("q-list",{attrs:{separator:""}},e._l(e.sortedComments,(function(t,i){return s("q-item",{key:i,staticClass:"comment wrap",class:e.hasUsername(t.text)?"text-black q-pa-sm":"",style:e.hasUsername(t.text)?"background-color:#ffe79d":""},[s("q-item-section",[e.hasUsername(t.text)?s("q-item-label",{domProps:{innerHTML:e._s(e.hasUsernameText(t.text))}}):s("q-item-label",{domProps:{innerHTML:e._s(e.convertLink(t.text))}}),s("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.getFullName(t.username)))])],1),s("q-item-section",{attrs:{side:"",top:""}},[s("q-item-label",{attrs:{caption:""}},[e._v("\n              "+e._s(t.dateEdited?"Last edited: "+e.displayDate(t.dateEdited):e.displayDate(t.dateCreated))+"\n          ")]),t.associatedUsers&&t.associatedUsers[e.username]&&!t.associatedUsers[e.username].acknowledged&&t.username!=e.username?s("q-btn",{staticClass:"q-mt-sm",attrs:{size:"sm",icon:"check",color:"primary",label:"Mark as Read"},on:{click:function(s){return e.preSetCommentStatus(t.text)}}}):e._e()],1),s("div",{staticClass:"row"},[t.username===e.username?s("q-item-label",{attrs:{caption:""}},[s("q-btn",{attrs:{icon:"more_vert",dense:"",flat:"",disable:!e.projectIsActive}},[s("q-menu",[s("q-list",[s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(s){return e.setEditState(t.dateCreated,t.text)}}},[s("q-item-section",[e._v("Edit Comment")])],1),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(s){return e.findDeleteComment(t.dateCreated)}}},[s("q-item-section",[e._v("Delete Comment")])],1)],1)],1)],1)],1):e._e()],1)],1)})),1)],1):s("q-card-section",{staticClass:"row justify-center items-center q-mb-md"},[s("span",{staticClass:"text-italic"},[e._v("No comments to display")])])],1)},u=[],m=(s("4917"),s("20d6"),s("a481"),s("448a")),d=s.n(m),h=(s("7514"),s("6165")),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row items-center"},[s("div",{staticClass:"col-auto"},[s("q-input",{ref:"commentInput",staticStyle:{"min-width":"350px"},attrs:{disable:e.disable,autofocus:"",error:e.error,"bottom-slots":!0,label:e.label,autogrow:""},on:{click:function(e){return e.preventDefault(),function(e){e.stopPropagation()}(e)},keydown:e.keydownHandler,keyup:e.keyupHandler},scopedSlots:e._u([{key:"hint",fn:function(){return[s("div",[e._v("@username to message a specific user associated with this project")])]},proxy:!0},{key:"error",fn:function(){return[e._v("\n                Please acknowledge unread issues before leaving a comment. \n            ")]},proxy:!0}]),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),s("q-menu",{attrs:{"no-focus":"","no-refocus":"",value:e.showModal,anchor:"bottom middle",self:"top middle",fit:""}},[s("q-scroll-area",{ref:"suggestionMenu",style:e.scrollStyle,attrs:{visible:!1}},[s("q-list",e._l(e.filteredUsers,(function(t,i){return s("q-item",{key:"mi"+i,class:e.autoSelected||e.selected==i?"bg-warning":"",attrs:{clickable:"",id:"mi"+i},on:{click:function(s){return e.selectUser(t,i)}}},[s("q-item-section",[s("q-item-label",[e._v("\n                                "+e._s(t.email)+"\n                            ")]),t.fullName?s("q-item-label",{attrs:{caption:""}},[e._v("\n                                "+e._s(t.fullName)+"\n                            ")]):e._e()],1),e.autoSelected||e.selected==i?s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"keyboard_tab"}})],1):e._e()],1)})),1)],1)],1)],1),s("div",{staticClass:"col-auto"},[s("q-btn",{attrs:{disable:e.disable,label:"submit"},on:{click:e.emitValue}})],1)])},f=[],p=(s("28a5"),{props:["options","disable","error","label","editComment"],data:function(){return{value:"",selected:null}},computed:{scrollStyle:function(){return this.filteredUsers.length?"height:300px":""},valueArray:function(){return this.value.split(" ")},showModal:function(){return"@"==this.valueArray[this.valueArray.length-1][0]},filteredUsers:function(){var e=this;return this.options.filter((function(t,s){var i=t.email.toLowerCase(),n=t.fullName?t.fullName.toLowerCase():"",a=e.valueArray[e.valueArray.length-1].toLowerCase().replace("@","");return!e.value.includes(t.email)&&(i.indexOf(a)>-1||n.indexOf(a)>-1)}))},autoSelected:function(){return 1==this.filteredUsers.length&&this.showModal}},methods:{selectUser:function(e,t){var s=this.valueArray;s[s.length-1]="@"+e+" ",this.value=s.join(" "),this.selected=null},emitValue:function(){""!=this.value&&(this.$emit("value",this.value),this.value="")},keyupHandler:function(e){var t;switch(e.which){case 13:e.stopPropagation(),this.autoSelected?this.selectUser(this.filteredUsers[0].email,0):null!=this.selected?this.selectUser(this.filteredUsers[this.selected].email,this.selected):this.emitValue();break;case 9:this.autoSelected?this.selectUser(this.filteredUsers[0].email,0):null!=this.selected&&this.selectUser(this.filteredUsers[this.selected].email,this.selected);break;case 40:null!=this.selected&&this.selected<this.filteredUsers.length-1?this.selected++:this.selected=0,t=document.querySelector("#mi".concat(this.selected)).offsetTop,this.$refs.suggestionMenu.setScrollPosition(t);break;case 38:null!=this.selected&&this.selected>0?this.selected--:this.selected=this.filteredUsers.length-1,t=document.querySelector("#mi".concat(this.selected)).offsetTop,this.$refs.suggestionMenu.setScrollPosition(t);break;case 27:this.value="";break;default:break}},keydownHandler:function(e){9===e.which&&e.preventDefault(),13==e.which&&e.preventDefault()}},watch:{editComment:function(e){var t=this;e.length&&(this.value=e,setTimeout((function(){t.$refs.commentInput.focus()}),200))}}}),b=p,v=s("2877"),y=Object(v["a"])(b,g,f,!1,null,null,null),k=y.exports;function w(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function C(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?w(Object(s),!0).forEach((function(t){o()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):w(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var j={props:["comments"],mixins:[h["a"]],data:function(){return{submissionState:"create",recalc:0,editComment:""}},components:{"comment-autocomplete":k},computed:C(C(C(C({},Object(l["c"])("tickets",["activeTicket","fieldLabel","associatedUsers","projectIsActive","projectIsInStaging"])),Object(l["c"])("auth",["username","user","orgUsers"])),Object(l["e"])("tickets",["activeComment"])),{},{userOptions:function(){var e=this;return Object.keys(this.orgUsers).map((function(t){return{email:t,fullName:e.orgUsers[t].profile.fullName?e.orgUsers[t].profile.fullName:null}}))},commentsUnacknowledged:function(){var e=this,t=this.comments||[];return!!t.find((function(t){return t.associatedUsers&&t.associatedUsers[e.username]&&!1===t.associatedUsers[e.username].acknowledged}))},sortedComments:function(){this.recalc;var e=d()(this.comments);return e.sort((function(e,t){return t.dateCreated-e.dateCreated}))}}),methods:C(C(C({},Object(l["b"])("tickets",["setCommentStatus","addComment","deleteComment","updateComment"])),Object(l["b"])("flags",["markAsCompleted"])),{},{convertLink:function(e){var t=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,s=/.*@.*/;return e.replace(t,(function(e){return s.test(e)?e:'<a href="'+e+'">'+e+"</a>"}))},preSetCommentStatus:function(e){if(this.hasUsername(e)){var t=this.comments.findIndex((function(t){return t.text==e}));this.setCommentStatus({index:t,username:this.username})}},hasUsername:function(e){return e.includes(this.username)},hasUsernameText:function(e){var t=e.match("@"+this.username)[0],s=e.replace(t,'<span class="text-negative">'.concat(t,"</span>"));return s=this.convertLink(s),this.hasUsername(e)?s:e},findDeleteComment:function(e){var t=this.comments.findIndex((function(t){return t.dateCreated===e}));this.deleteComment(t)},setEditState:function(e,t){this.submissionState=e,this.editComment=t},markAllComments:function(){var e=this;this.comments.filter((function(t,s){t.associatedUsers&&t.associatedUsers[e.username]&&!t.associatedUsers[e.username].acknowledged&&e.hasUsername(t.text)&&e.setCommentStatus({index:s,username:e.username})}))},submitComment:function(e){var t=this;if("create"!=this.submissionState){var s=this.comments.findIndex((function(e){return e.dateCreated===t.submissionState}));this.updateComment({index:s,dateEdited:Date.now(),comment:e}),this.trNotify("Comment Updated"),this.submissionState="create"}else{var i={user:this.user,username:this.username,text:e,dateCreated:Date.now(),orgUsers:this.orgUsers};this.addComment(i);var n=this.getLabel(this.activeComment.segmentName,this.activeComment.fieldName);this.trNotify("New comment added to ".concat(n)),this.recalc++}},keyupHandler:function(e){""!==this.$refs.commentInput.model&&"@"!==this.$refs.commentInput.model||(this.newUser.completed=!1),13===e.which&&(e.stopPropagation(),this.found&&this.found>=0?this.targetUser(e,this.found):this.submitComment(),this.newUser.state=!1),40===e.which&&(this.found<this.userOptions.length?this.found++:this.found=0),38===e.which&&(this.found>0?this.found--:this.found=this.userOptions.length),27===e.which&&(this.$refs.commentInput.model=""),9===e.which&&null!=this.found&&this.found>=0&&this.targetUser(e,this.found),32==e.which&&(this.newUser.state=!1,this.newUser.completed=!0)}})},O=j,P=Object(v["a"])(O,c,u,!1,null,null,null),S=P.exports,q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-card",[s("q-card-section",{staticClass:"q-ma-md",staticStyle:{"text-align":"center"}},[e.findFlag?s("div",{staticClass:"text-h6"},[e._v("Edit/Remove "),s("span",{staticClass:"text-weight bold text-primary"},[e._v(e._s(e.getLabel(this.activeFlag.segmentName,this.activeFlag.fieldName)))]),e._v(" Flag\n          ")]):s("div",{staticClass:"text-h6"},[e._v("Mark "),s("span",{staticClass:"text-weight-bold text-primary"},[e._v(e._s(e.getLabel(this.activeFlag.segmentName,this.activeFlag.fieldName)))]),e._v(" For Review")]),s("div",{staticClass:"col-auto"},[s("q-select",{attrs:{options:e.urgencyOptions,value:e.urgency,"display-value":e.urgencyLabel,label:"Urgency / Actions"},on:{input:e.setUrgency}})],1),"assignMyself"!=e.urgency&&""!=e.urgency?s("div",{staticClass:"col-auto"},[s("q-input",{staticClass:"q-mr-sm q-mb-md",staticStyle:{"min-width":"350px"},attrs:{label:"Add a description for this flag (optional)",type:"text"},on:{keyup:function(t){return t.stopPropagation(),function(t){return e.descriptionKeyupHandler(t)}(t)}},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1):e._e(),"assignMyself"!=e.urgency&&""!=e.urgency?[s("q-card-section",{staticClass:"row justify-center items-center"},["assignUser"!=e.urgency.value?s("q-btn-toggle",{staticClass:"my-custom-toggle",attrs:{"no-caps":"",unelevated:"","toggle-color":"primary",color:"white","text-color":"primary",options:[{label:"For all users",value:!0},{label:"Choose which users to flag",value:!1}]},model:{value:e.flagAll,callback:function(t){e.flagAll=t},expression:"flagAll"}}):e._e()],1),e.flagAll?e._e():s("q-card-section",{staticClass:"row justify-center items-center q-pa-none q-mt-md"},[s("user-select",{attrs:{userOptions:e.userOptions,userRoles:e.flagRoles,selectedUsers:e.flaggedUsers,selectedRoles:e.assocRoles,showRoles:"assignUser"!=e.urgency},on:{input:e.updateFlaggedUsers}})],1)]:e._e()],2),s("q-card-section",{staticClass:"float-right"},[s("q-btn",{staticClass:"q-mr-sm",attrs:{label:"Cancel"},on:{click:e.toggleFlags}}),s("q-btn",{staticClass:"q-mr-sm",attrs:{label:e.findFlag?"Update":"Submit",disable:!e.projectIsActive},on:{click:e.preSubmitFlag}}),e.findFlag?s("q-btn",{staticClass:"bg-negative text-white",attrs:{label:"Remove Flag",disable:!e.projectIsActive},on:{click:e.submitRemoveFlag}}):e._e()],1)],1)},x=[],U=(s("3846"),s("81d4"));function $(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function F(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?$(Object(s),!0).forEach((function(t){o()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):$(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var N={mixins:[h["a"]],components:{"user-select":U["a"]},data:function(){return{flagAll:!0,roleSelect:null,assocRoles:[],description:"",urgencyLabel:"",urgency:"",urgencyOptions:[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"},{label:"Assign User To This Field",value:"assignUser"},{label:"Assign Myself To This Field",value:"assignMyself"}],flaggedUsers:[],userInput:"",flagID:null,newUser:{state:!1,completed:!1},found:null}},watch:{urgency:function(e){"undefined"==typeof e||"assignUser"!=e&&"assignMyself"!=e||(this.flagAll=!1)}},computed:F(F(F(F(F({},Object(l["c"])("flags",["activeFlag","flags"])),Object(l["c"])("tickets",["associatedUsers","ticketNumber","projectIsActive"])),Object(l["c"])("auth",["user","username","orgUsers"])),Object(l["e"])("tickets",["workingProject"])),{},{findFlag:function(){var e=this,t=_.filter(this.flags,(function(t,s){if(t.fieldKey==e.activeFlag.fieldKey&&t.fieldName===e.activeFlag.fieldName&&"none"!=t.urgency&&t.author.userName==e.username&&t.projectID==e.workingProject)return e.flagID=s,t}));return t.length>0&&t[0]},userOptions:function(){var e=this;return Object.keys(this.orgUsers).filter((function(t){return t!=e.username})).map((function(t){return{email:t,fullName:e.orgUsers[t].profile.fullName?e.orgUsers[t].profile.fullName:null}}))},flagRoles:function(){var e=this;return Object.keys(this.labels.role).map((function(t){return{label:e.labels.role[t],value:t}}))}}),methods:F(F({},Object(l["b"])("flags",["toggleFlags","submitFlag","updateFlag","removeFlag"])),{},{updateFlaggedUsers:function(e){this.flaggedUsers=e.selectedUsersLocal,this.roleSelect=e.selectedRolesLocal},submitRemoveFlag:function(){var e=this;this.removeFlag(this.flagID).then((function(t){e.trNotify(t.message),t.ok&&e.toggleFlags()}))},setUrgency:function(e){this.urgency=e.value,this.urgencyLabel=e.label},descriptionKeyupHandler:function(e){27===e.which&&(this.description="")},preSubmitFlag:function(){var e=this,t=[],s=[];this.flagAll?s=["all"]:(this.roleSelect&&this.roleSelect.length>0&&this.roleSelect.forEach((function(e){s.push(e.value)})),"assignMyself"==this.urgency&&(t.push({seen:!0,dateSeen:Date.now(),completed:!1,dateCompleted:"",email:this.username}),this.urgency="assignUser"),this.flaggedUsers&&this.flaggedUsers.length>0&&this.flaggedUsers.forEach((function(e){t.push({seen:!1,dateSeen:"",completed:!1,dateCompleted:"",email:e})})));var i={flag:{author:{firstName:this.user.profile.firstName,lastName:this.user.profile.lastName,userName:this.username},flagDescription:this.description,urgency:this.urgency||"low",associatedUsers:t,associatedRoles:s,flagDate:Date.now(),projectID:this.workingProject,ticketID:this.ticketNumber,flagType:"field"}},n=this.getLabel(this.activeFlag.segmentName,this.activeFlag.fieldName);this.findFlag&&(i.flagDate=this.findFlag.flagDate,i.update=this.flagID),this.submitFlag(i).then((function(t){t.ok?(e.trNotify(e.findFlag?"Flag Updated":"New flag added to ".concat(n)),e.toggleFlags()):e.trNotify(t.message)}))}}),mounted:function(){var e=this,t=this.findFlag;if(t){if(this.description=t.flagDescription,t.associatedRoles&&t.associatedRoles.includes("all")||!t.associatedRoles&&!t.associatedUsers)this.flagAll=!0;else if(this.flagAll=!1,t.associatedUsers&&t.associatedUsers.forEach((function(t){e.flaggedUsers.push(t.email)})),t.associatedRoles){var s=[];t.associatedRoles.forEach((function(t){s.push(e.flagRoles.find((function(e){return e.value===t})))})),s.length>0&&(this.roleSelect=s)}this.urgency=t.urgency,this.urgencyLabel=this.urgencyOptions.find((function(t){return t.value==e.urgency})).label}}},D=N,T=(s("b124"),Object(v["a"])(D,q,x,!1,null,"6e1a9c82",null)),I=T.exports,A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-dialog",{ref:"dialog",staticStyle:{position:"relative"},on:{hide:e.onDialogHide}},[s("q-card",{staticClass:"q-dialog-plugin"},[s("q-card-section",[s("div",{staticClass:"text-h6"},[e._v(e._s(e.title))]),s("div",{staticClass:"text-subtitle",domProps:{innerHTML:e._s(e.message)}})]),e.isValidated?e._e():s("q-card-section",e._l(e.validationFilter,(function(t,i){return s("div",{key:i,staticClass:"q-my-sm"},[s("div",{staticClass:"text-bold"},[e._v(e._s(e.getLabel(i,null)))]),e._l(t,(function(t,n){return s("q-btn",{key:n,staticClass:"q-my-sm",staticStyle:{display:"block"},attrs:{color:"negative",dense:"",flat:"","no-caps":"",label:e.getLabel(i,n)},on:{click:function(t){return e.sendRoute(i,n)}}})}))],2)})),0),e.isValidated?[e.projectIsInStaging?[s("q-card-section",[s("div",{staticClass:"text-bold"},[e._v("\n            Please Enter any special notes to Video Post Production about this\n            staging edit:\n          ")]),s("q-input",{attrs:{filled:"",type:"textarea"},model:{value:e.notesToVPP,callback:function(t){e.notesToVPP=t},expression:"notesToVPP"}})],1),s("q-card-section",[s("div",{staticClass:"text-bold"},[e._v("\n            Please Enter any special notes to Online Production about this\n            staging edit:\n          ")]),s("q-input",{attrs:{filled:"",type:"textarea"},model:{value:e.notesToOP,callback:function(t){e.notesToOP=t},expression:"notesToOP"}})],1)]:[s("q-card-section",[s("div",{staticClass:"text-bold"},[e._v("\n            Please Enter a comment to describe your changes or as a note to\n            other contributors:\n          ")]),s("q-input",{attrs:{filled:"",type:"textarea"},model:{value:e.submissionComment,callback:function(t){e.submissionComment=t},expression:"submissionComment"}})],1)]]:e._e(),s("q-card-actions",{staticClass:"row justify-end"},[s("div",{staticClass:"row"},[e.isValidated?s("q-checkbox",{staticClass:"q-mb-sm q-mr-sm",attrs:{label:"I am done working (unlock project)"},model:{value:e.doneWorking,callback:function(t){e.doneWorking=t},expression:"doneWorking"}}):e._e()],1),s("div",{staticClass:"row"},[s("q-btn",{staticClass:"q-mr-sm",attrs:{color:"primary",label:"Cancel"},on:{click:e.onCancelClick}}),s("div",[s("q-btn",{staticClass:"q-mr-sm",attrs:{color:"primary",label:"Submit",disable:!e.isValidated||!e.hasPermission("edit")},on:{click:function(t){return e.onOKClick({submissionType:"submit",submissionComment:e.submissionComment,doneWorking:e.doneWorking})}}}),e.isValidated?e._e():s("q-tooltip",{attrs:{"content-class":"bg-primary"}},[e._v("Please address all problems to enable submission.")])],1),s("div",[e.canDrop?s("q-btn",{staticClass:"q-mr-sm",attrs:{color:"negative",label:"Drop",disable:!e.isComplianceComplete},on:{click:function(t){return e.onOKClick({submissionType:"drop",submissionComment:e.submissionComment,doneWorking:e.doneWorking})}}}):e._e(),e.isComplianceComplete?e._e():s("q-tooltip",{attrs:{"content-class":"text-white bg-primary text-body1"}},[e._v("\n              The compliance review form for this project hasn't been completed yet.\n            ")])],1)],1)])],2)],1)},L=[],E=s("f262");function R(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function V(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?R(Object(s),!0).forEach((function(t){o()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):R(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var M={props:["validated","currentUser","projectRoles"],mixins:[h["a"],E["a"]],components:{"q-dialog":r["a"]},data:function(){return{submissionComment:"",notesToVPP:"",notesToOP:"",doneWorking:!1}},methods:{sendRoute:function(e,t){var s=this;this.$route.name===e?this.onCancelClick():this.$router.push({name:e}),setTimeout((function(){var e=document.querySelector("#".concat(t,"1"));s.$root.$emit("setScroll",e.offsetTop)}),400)},show:function(){this.$refs.dialog.show()},hide:function(){this.$refs.dialog.hide()},onDialogHide:function(){this.$emit("hide")},onOKClick:function(e){this.projectIsInStaging&&(e={submissionType:"stagingEdit",notesToOP:this.notesToOP,notesToVPP:this.notesToVPP,doneWorking:this.doneWorking}),"drop"==e.submissionType&&(e.validated=this.isValidated),this.$emit("ok",e),this.hide()},onCancelClick:function(){this.hide()}},computed:V(V({},Object(l["c"])("tickets",["projectIsInStaging","getFieldEnabled","isComplianceComplete","projectIsLive"])),{},{canDrop:function(){return this.hasPermission("drop")&&!this.projectIsInStaging&&!this.projectIsLive},isValidated:function(){return!(Object.keys(this.validationFilter).length>0)},validationFilter:function(){var e=this,t={};return Object.keys(this.validated).forEach((function(s){var i=_.pickBy(e.validated[s],(function(t,i){return!1===t&&e.getFieldEnabled({fieldName:i,segmentName:s})}));Object.keys(i).length&&(t[s]=i)})),t},validationFilterList:function(){return Object.keys(this.validationFilter)},message:function(){return this.isValidated?"Prodticket version will be incremented and stored in database.":'There were problems found in the following sections of the ProdTicket. Please correct any issues or mark the field as incomplete to continue. <br /><br /><span class="text-bold">(To mark a field as "not required", uncheck the field in the tree navigator in the menu.)</span>'},title:function(){return this.isValidated?this.projectIsInStaging?"Submit Staging Edit?":this.projectIsLive?"Submit ProdFix?":"Submit Prodticket?":"Submission Error:"}})},W=M,H=(s("d0f5"),Object(v["a"])(W,A,L,!1,null,"4820d6b6",null)),K=H.exports;function z(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function Y(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?z(Object(s),!0).forEach((function(t){o()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):z(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var J={mixins:[E["a"],h["a"]],data:function(){return{ticket:{},segmentParams:null,validated:{},buttonLeftMargin:400,awaitingPromise:!1}},methods:Y(Y(Y(Y(Y({},Object(l["b"])("tickets",["saveWorkingProject","submitWorkingProject","toggleComments","createStagingEdit","setWorkingProject","clearLocalStorage","clearUnSubmitted","fetchConfig"])),Object(l["b"])("flags",["toggleFlags","fetchFlags"])),Object(l["b"])("settings",["fetchPartners"])),Object(l["d"])("tickets",["setConfig"])),{},{submit:function(){var e=this;this.projectIsLive?this.$router.push({name:"prodFix"}):this.$root.$emit("triggerValidate",(function(){e.$q.dialog({component:K,parent:e,validated:e.validated,currentUser:e.user,projectRoles:e.roles}).onOk((function(t){"drop"===t.submissionType?t.validated?e.$q.dialog({title:"Confirm",message:"Continue with drop? This will submit any changes you made this session and disable edits to the ticket until a staging round is started.",cancel:!0}).onOk((function(){e.awaitingPromise=!0,e.submitWorkingProject({submissionComment:t.submissionComment,user:e.username,submitType:"drop"}).then((function(t){e.awaitingPromise=!1,t.ok?(e.trNotify("Project Successfully Dropped."),e.$router.push({name:"edit"})):e.trNotify(t.message)}))})):e.$q.dialog({title:"Warning",message:"There may be issues with the current ticket. Continue with drop anyway?",cancel:!0,persistent:!0}).onOk((function(){e.awaitingPromise=!0,e.submitWorkingProject({submissionComment:t.submissionComment,user:e.username,submitType:"drop"}).then((function(t){e.awaitingPromise=!1,t.ok?(e.clearUnSubmitted(),e.hasLocal&&e.clearLocalStorage(),e.trNotify("Project Successfully Dropped.")):e.trNotify(t.message)}))})):e.projectIsInStaging?(e.awaitingPromise=!0,e.createStagingEdit({notesToVPP:t.notesToVPP,notesToOP:t.notesToOP,user:e.username}).then((function(t){e.awaitingPromise=!1,t.ok?(e.clearUnSubmitted(),e.hasLocal&&e.clearLocalStorage(),e.trNotify("Edit Submitted"),e.$q.dialog({title:"Project Submitted",message:"Changes saved to database. Ticket version incremented."}),setTimeout((function(){e.$root.$emit("stagingSubmission"),e.$router.push({name:"stagingRound"})}),200)):(e.trNotify("Submission failed: No changes found.","negative"),e.$q.dialog({title:"Submission failed",message:"There was an issue submitting your changes. Verify that you have a working internet connection and that valid changes have been made to the project."}))}))):(e.awaitingPromise=!0,e.submitWorkingProject({submissionComment:t.submissionComment,user:e.username,submitType:"edit"}).then((function(s){e.awaitingPromise=!1,s.ok?(e.clearUnSubmitted(),e.trNotify("Project Submitted"),e.$q.dialog({title:"Project Submitted",message:s.message}),t.doneWorking?(e.$router.push({name:"edit"}),e.setWorkingProject({oldID:e.getProjectID})):e.hasLocal&&e.clearLocalStorage()):(e.trNotify(s.message,"negative"),e.$q.dialog({title:"Submission failed",message:s.message}))})).catch((function(e){return console.log("error: ",e)})))}))}))},reset:function(){this.$refs.form.resetValidation()},goingToAnotherSection:function(e){if("next"==e){var t=Object.keys(this.navigationSegments).indexOf(this.$route.name);this.$router.push({name:Object.keys(this.navigationSegments)[t+1]}),this.$root.$emit("collapseTree",Object.keys(this.navigationSegments)[t+1]),this.$refs.scrollArea.setScrollPosition(0)}else{var s=Object.keys(this.navigationSegments).indexOf(this.$route.name);this.$router.push({name:Object.keys(this.navigationSegments)[s-1]}),this.$root.$emit("collapseTree",Object.keys(this.navigationSegments)[s-1]),this.$refs.scrollArea.setScrollPosition(0)}}}),computed:Y(Y(Y(Y(Y({},Object(l["c"])("tickets",["viewComments","getFieldComments","projectIsInStaging","getProjectID","hasLocal","getUnSubmitted","projectIsActive","projectIsLive"])),Object(l["e"])("flags",["viewFlags","flagsFetched"])),Object(l["e"])("settings",["partnersFetched"])),Object(l["c"])("auth",["user","roles","username"])),{},{editDisabled:function(){return this.awaitingPromise||!this.hasPermission("edit")||!this.projectIsActive||!this.hasPermission("drop")&&this.projectIsLive},hasUnSubmitted:function(){return Object.keys(this.getUnSubmitted).filter((function(e){return"submissionMeta"!=e})).length},canNext:function(){var e=Object.keys(this.navigationSegments).length,t=Object.keys(this.navigationSegments).indexOf(this.$route.name);return t+1<e},canPrev:function(){var e=Object.keys(this.navigationSegments).indexOf(this.$route.name);return e>0}}),components:{"comment-modal":S,"flags-modal":I,"q-dialog":r["a"],"submit-dialogue":K},mounted:function(){var e=this;this.$root.$on("segmentName",(function(t){e.segmentName=t})),this.$root.$on("validate",(function(t){Object.keys(t.segmentData.validations).length&&(e.validated[t.segmentData.segmentName]=t.segmentData.validations),t.callback&&t.callback()})),this.flagsFetched||this.fetchFlags(),this.partnersFetched||this.fetchPartners(),this.$root.$emit("scrollArea",this.$refs.scrollArea),this.$root.$on("drawerChange",(function(t){e.buttonLeftMargin=t?400:0}));var t=this;this.$root.$on("setScroll",(function(e){try{t.$refs.scrollArea.setScrollPosition(e,300)}catch(s){}})),this.$route.path.includes("edit")&&"edit"!=this.$route.name?this.segmentParams=!0:this.segmentParams=!1},beforeDestroy:function(){this.$root.$off("drawerChange"),this.$root.$off("setScroll"),this.$root.$off("validate"),this.$root.$off("segmentName")},watch:{$route:function(e,t){"edit"!=e.name?this.segmentParams=!0:this.segmentParams=!1}}},Z=J,B=(s("1516"),Object(v["a"])(Z,i,n,!1,null,"218023d1",null));t["default"]=B.exports}}]);