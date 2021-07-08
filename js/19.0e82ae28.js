(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"3f7b":function(e,t,i){},"9cfa":function(e,t,i){"use strict";var n=i("3f7b"),r=i.n(n);r.a},a9c3:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-header",[i("q-toolbar",{staticClass:"justify-between q-pa-sm"},[i("div",{staticClass:"row items-center"},[e.notAuth?i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:e.leftDrawerOpen?"menu_open":"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}):e._e(),i("q-toolbar-title",{staticClass:"tr-mobile-hide"},[i("div",[i("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/"}},[e._v("Ticket Runner")]),i("q-tooltip",{attrs:{delay:800,"content-class":"bg-positive text-body2 row items-center",anchor:"bottom left"}},[i("q-icon",{attrs:{name:"info",size:"md"}}),i("q-separator",{staticClass:"q-mx-sm",attrs:{vertical:"",color:"white"}}),i("span",[e._v("Last Updated: 10:57am 2021-07-08")])],1)],1)]),i("q-separator",{staticClass:"q-mr-sm",attrs:{vertical:"",color:"white"}}),i("q-breadcrumbs",{attrs:{"active-color":"white"},scopedSlots:e._u([{key:"separator",fn:function(){return[i("div",{staticClass:"tr-mobile-hide"},[e._v("/")])]},proxy:!0}])},[e.getProjectID&&e.pageIsEdit?i("q-breadcrumbs-el",{scopedSlots:e._u([{key:"default",fn:function(){return[i("q-btn-dropdown",{staticClass:"bg-secondary",attrs:{label:e.projectLabel,flat:""}},[i("q-item",{staticClass:"text-primary text-bold",attrs:{clickable:""},on:{click:function(t){return e.checkInTicket(e.getProjectID)}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"logout"}})],1),i("q-item-section",[e._v("\n                    Check in ticket\n                  ")])],1),1!=e.getTicketID?i("floating-meta"):e._e()],1)]},proxy:!0}],null,!1,2898580792)}):e._e(),e._l(e.breadcrumbs,(function(e){return i("q-breadcrumbs-el",{key:e.routerLink,staticClass:"tr-mobile-hide",attrs:{icon:e.icon,label:e.label,to:e.routerLink}})}))],2)],1),i("alerts-menu",{on:{"log-out":e.logout}})],1)],1),i("q-drawer",{attrs:{value:e.drawerState,"show-if-above":"",bordered:"","content-class":"bg-grey-2",width:350},on:{input:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[i("div",{staticClass:"row justify-between items-center"},[i("q-btn",{staticClass:"mobile-drawer-btn",attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),i("q-btn",{staticClass:"close-btn",attrs:{icon:"clear",round:"",flat:""},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}})],1),"preview"==e.$route.name?i("q-list",[i("q-item",{attrs:{clickable:"",exact:"",to:"/edit"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"home"}})],1),i("q-item-section",[i("q-item-label",[e._v("Back")]),i("q-item-label",{attrs:{caption:""}},[e._v("Return to project list")])],1)],1),i("q-item",[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"filter"}})],1),i("q-item-section",[i("q-item-label",[e._v("Configure Preview")]),i("q-item-label",[i("q-input",{attrs:{label:"Background Image URL","bottom-slots":""},on:{input:e.emitURL},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n                Enter the URL of an image to preview in the header.\n              ")]},proxy:!0}],null,!1,3268828451),model:{value:e.headerURL,callback:function(t){e.headerURL=t},expression:"headerURL"}})],1)],1)],1)],1):i("q-list",[i("q-item",{attrs:{clickable:"",exact:"",to:"/edit"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"home"}})],1),i("q-item-section",[i("q-item-label",[e._v("Projects")]),i("q-item-label",{attrs:{caption:""}},[e._v("Search Projects/Edit ProdTicket Fields")])],1)],1),e.hasPermission("create")?i("q-item",{attrs:{clickable:"",exact:"",to:"/new"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"description"}})],1),i("q-item-section",[i("q-item-label",[e._v("New Project")]),i("q-item-label",{attrs:{caption:""}},[e._v("Create a New Project")])],1)],1):e._e(),e.getProjectID.length?i("q-item",{attrs:{clickable:"",exact:"",to:{path:"/viewTicket",query:{projectId:e.getProjectID}}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"visibility"}})],1),i("q-item-section",[i("q-item-label",[e._v("View ProdTicket")]),i("q-item-label",{attrs:{caption:""}},[e._v("View an Existing ProdTicket")])],1)],1):e._e(),e.$route.path.includes("viewTicket")?i("viewTicket-nav"):e._e(),i("q-item",{attrs:{clickable:"",exact:"",to:"/settings"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"settings"}})],1),i("q-item-section",[i("q-item-label",[e._v("Settings and Tools")]),i("q-item-label",{attrs:{caption:""}},[e._v("Add Partners/Supporters,\n            "+e._s(e.hasPermission("addUser")?"Add Team Members,":"")+" Change\n            App Settings.")])],1)],1),e.getProjectID.length&&e.projectHasStagingRound?i("q-item",{attrs:{clickable:"",exact:"",to:"/"+e.getProjectID+"/staginground"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"list"}})],1),i("q-item-section",[i("q-item-label",[e._v("Staging Round")]),i("q-item-label",{attrs:{caption:""}},[e._v("Review and Drop changes from the current staging\n            round.")])],1)],1):e._e(),e.showProduction?i("q-item",{attrs:{clickable:"",exact:"",to:"/prodfix"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"construction"}})],1),i("q-item-section",[i("q-item-label",[e._v("Review Current Prodfix")]),i("q-item-label",{attrs:{caption:""}},[e._v("\n            Review Changes to submit in the current ProdFix.\n          ")])],1)],1):e._e(),e.$route.path.includes("edit")&&e.getProjectID.length?i("q-item",{staticStyle:{"padding-left":"0"}},[i("q-item-section",{staticStyle:{"justify-content":"start!important"},attrs:{avatar:""}},[i("q-icon",{staticClass:"q-ml-md",staticStyle:{"margin-top":"20px"},attrs:{color:e.$route.path.includes("edit")?"primary":"",name:"search"}})],1),i("q-item-section",[i("tree-nav",{on:{"mobile-close-drawer":e.closeDrawer}})],1)],1):e._e()],1)],1),i("q-page-container",[i("router-view")],1)],1)},r=[],a=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("456d"),i("28a5"),i("6762"),i("2fdb"),i("6b54"),i("06db"),i("a481"),i("7f7f"),i("9523")),o=i.n(a),s=i("2f62"),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.username?i("q-btn-dropdown",{staticClass:"alert-dropdown",attrs:{flat:"","no-caps":""},scopedSlots:e._u([{key:"label",fn:function(){return[i("div",{staticClass:"q-mr-sm user-label"},[e._v("\n            "+e._s(e.user.profile.displayName)+"\n          ")]),i("q-avatar",[e.avatar?[i("img",{attrs:{src:e.user.profile.avatar},on:{error:function(){return e.avatar=null}}})]:[i("div",{staticClass:"bg-pink text-white",staticStyle:{width:"50px",height:"50px"}},[i("div",{staticStyle:{"margin-top":"38%"}},[e._v(e._s(e.username.substring(0,1).toUpperCase()))])])]],2),e.flagsCount>0?i("q-badge",{staticStyle:{top:"2px","margin-right":"25px"},attrs:{color:"red",floating:""}},[e._v(e._s(e.flagsCount))]):e._e()]},proxy:!0}],null,!1,458564804)},[i("q-list",{attrs:{bordered:"",separator:""}},[i("q-item",{staticClass:"bg-primary text-white",attrs:{clickable:""},on:{click:e.logout}},[i("q-item-section",[i("q-item-label",[e._v("\n                Logout\n              ")]),i("q-item-label",{staticClass:"text-grey-3",attrs:{caption:""}},[e._v("\n                Log out "+e._s(e.username)+"\n              ")])],1),i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"exit_to_app"}})],1)],1),e.workingProjectAlerts.length?[i("div",{staticClass:"bg-secondary text-white q-pa-sm q-mt-sm"},[e._v("\n                  Active Project Alerts: (SF# "+e._s(e.getProjectID)+")\n              ")]),e._l(e.workingProjectAlerts,(function(t){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:t.activityID,attrs:{clickable:""},on:{click:function(i){return e.onAlertClick(t,!0,!0)}}},[i("q-item-section",[i("q-item-label",[e._v(e._s(e.getLabel(t.activityData.segmentName,null)+" / "+e.getLabel(t.activityData.segmentName,t.activityData.fieldName)))]),i("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.displayDate(t.time)))]),t.activityData.comment?[i("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.abbreviate(t.activityData.comment)))]),i("q-item-label",{attrs:{caption:""}},[e._v("\n                              From: "+e._s(e.getFullName(t.activityData.author))+"\n                          ")])]:[""!=t.activityData.flagDescription?i("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.abbreviate(t.activityData.flagDescription)))]):e._e(),i("q-item-label",{attrs:{caption:""}},[e._v("\n                              "+e._s("assignUser"==t.activityData.urgency?"Assigned":"Initiated")+" by: "+e._s(t.activityData.author.firstName+" "+t.activityData.author.lastName)+"\n                          ")])]],2),i("q-item-section",{staticStyle:{"align-items":"center!important"},attrs:{side:""}},[i("q-icon",{attrs:{name:t.activityData.comment?"comment":"flag",color:t.activityData.urgency&&"high"==t.activityData.urgency?"negative":"amber"}},[t.activityData.urgency&&"assignUser"!=t.activityData.urgency?i("q-tooltip",{attrs:{"content-class":"bg-primary text-body2"}},[e._v("This has been marked as a "+e._s(t.activityData.urgency)+" priority alert.")]):e._e()],1),t.activityData.flagID?i("q-checkbox",{attrs:{value:e.bin,"keep-color":"",color:"primary"},on:{input:function(i){return e.setCompleted(t.activityID)}}},[i("q-tooltip",{attrs:{"content-class":"bg-primary text-body2"}},[e._v("Mark As "+e._s(t.activityData.comment?"Read":"Completed"))])],1):e._e()],1)],1)}))]:e._e(),e.nonWorkingProjectAlerts.length?i("div",{staticClass:"bg-secondary text-white q-pa-sm"},[e._v("\n              Project Alerts:\n          ")]):e._e(),e._l(e.nonWorkingProjectAlerts,(function(t){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:t.activityID,staticClass:"bg-grey-3",attrs:{clickable:""},on:{click:function(i){return e.onAlertClick(t,!1,t.isValid)}}},[i("q-item-section",[i("q-item-label",[e._v(e._s(e.getLabel(t.activityData.segmentName,null)+" / "+e.getLabel(t.activityData.segmentName,t.activityData.fieldName)))]),i("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.displayDate(t.time)))]),t.activityData.comment?[i("q-item-label",{attrs:{caption:""}},[e._v("\n                          "+e._s(e.abbreviate(t.activityData.comment))+"\n                      ")]),i("q-item-label",{attrs:{caption:""}},[e._v("\n                          "+e._s("From: "+e.getFullName(t.activityData.author))+"\n                      ")])]:[""!=t.activityData.flagDescription?i("q-item-label",{attrs:{caption:""}},[e._v("\n                          "+e._s(e.abbreviate(t.activityData.flagDescription))+"\n                      ")]):e._e(),i("q-item-label",{attrs:{caption:""}},[e._v("\n                          "+e._s("assignUser"==t.activityData.urgency?"Assigned":"Initiated")+" by: "+e._s(t.activityData.author.firstName+" "+t.activityData.author.lastName)+"\n                      ")])],i("q-item-label",{staticClass:"text-negative",attrs:{caption:""}},[e._v("\n                      SF# "+e._s(t.projectID)+"\n                  ")])],2),i("q-item-section",{staticStyle:{"align-items":"center!important"},attrs:{side:""}},[i("q-icon",{attrs:{name:t.activityData.comment?"comment":"flag",color:t.activityData.urgency&&"high"==t.activityData.urgency?"negative":"amber"}},[t.activityData.urgency&&"assignUser"!=t.activityData.urgency?i("q-tooltip",{attrs:{"content-class":"bg-primary text-body2"}},[e._v("This has been marked as a "+e._s(t.activityData.urgency)+" priority alert.")]):e._e()],1)],1)],1)}))],2)],1):e._e(),i("q-dialog",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down"},model:{value:e.viewFlagInfo,callback:function(t){e.viewFlagInfo=t},expression:"viewFlagInfo"}},[i(e.currentFlag&&e.currentFlag[0]&&e.currentFlag[0].flagID?"flag-info":"activityFeedDetails",{tag:"component",attrs:{flag:e.currentFlag,username:e.username,flagID:e.flagID,isValid:e.isValid,activityItem:e.currentFlag},on:{closeModal:function(t){e.viewFlagInfo=!1}}})],1)],1)},l=[],u=(i("f751"),i("6165")),d=i("df71"),m=i("122a"),p=i("24e8"),f=i("8e89");function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(Object(i),!0).forEach((function(t){o()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var h={mixins:[u["a"],d["a"],m["a"]],data:function(){return{bin:!1,currentFlag:null,viewFlagInfo:!1,flagID:"",isValid:!0,avatar:!0}},components:{"q-dialog":p["a"],"flag-info":f["a"],activityFeedDetails:m["a"]},computed:b(b({},Object(s["c"])("tickets",["activeTicket","getProjectID"])),{},{nonWorkingProjectAlerts:function(){var e=this;return this.alerts.filter((function(t){var i=t.activityData;return i.comment?(i=Object.assign(i,i.pointers),i.projectID!=e.getProjectID):t.projectID!=e.getProjectID}))},workingProjectAlerts:function(){var e=this;return this.alerts.filter((function(t){return t.projectID==e.getProjectID})).map((function(t){var i=t.activityData;i.pointers&&(i=Object.assign(i,i.pointers));var n=!1;return e.activeTicket[i.segmentName][i.fieldName].fields.hasOwnProperty(i.fieldKey)&&(n=!0),t.isValid=n,t}))},flagsCount:function(){return this.unViewedAlerts.length}}),methods:b(b({},Object(s["b"])("flags",["markAsCompleted"])),{},{logout:function(){var e=this;this.$q.dialog({title:"Confirm logout",message:"Log out?",persistent:!0,transitionHide:"jump-down",transitionShow:"jump-up",cancel:!0}).onOk((function(){e.$emit("log-out")}))},setCompleted:function(e){this.markAsCompleted({flagID:e,username:this.username}),this.trNotify("Marked flag as complete")},onAlertClick:function(e,t,i){var n,r=this;if(this.markActivityItem(e.activityID),this.viewedActivities.push(e.activityID),this.isValid=i,n=e.activityData.flagID?[e.activityData]:e.activityData,this.flagID=e.activityID,t){this.$route.name!==e.activityData.segmentName&&this.$router.push({name:e.activityData.segmentName});var a=this.flagID,o=e.activityData.comment?"comment":"flag",s=e.activityData.fieldKey?e.activityData.fieldKey:e.activityData.commentIndex;setTimeout((function(){r.$root.$emit("showFlag",{fieldName:e.activityData.fieldName,flagType:o,fieldKey:s,isValid:i,id:a})}),500)}else this.currentFlag=n,this.viewFlagInfo=!0}})},v=h,y=i("2877"),j=Object(y["a"])(v,c,l,!1,null,null,null),D=j.exports,k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("q-input",{ref:"filter",attrs:{borderless:"","stack-label":!1,label:"Search for ticket fields or sections"},scopedSlots:e._u([{key:"append",fn:function(){return[""!==e.filter?i("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:e.resetFilter}}):e._e()]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),i("q-checkbox",{class:e.showRequired?"text-grey-8":"text-grey-6",attrs:{value:e.showRequired,size:"lg",label:"Show recommended fields only"},on:{input:e.setShowRequired}}),i("progress-bar"),i("q-tree",{ref:"trTree",attrs:{nodes:e.editRoutes,"tick-strategy":"strict",ticked:e.ticked,accordion:"",expanded:e.expanded,filter:e.filter,"filter-method":e.filterMethod,"node-key":"label"},on:{"update:ticked":function(t){e.ticked=t},"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"default-header",fn:function(t){var n;return["compliance"===t.node.segmentName?[i("span",{staticClass:"cursor-pointer"},[e._v(e._s(t.node.label))])]:t.node.fieldName?[i("span",{class:[{"text-primary":t.node.hasUnSubmitted&&!t.node.fieldName},{"text-positive":t.node.hasUnSubmitted&&"complete"==e.renderFieldComplete({fieldName:t.node.fieldName,segmentName:t.node.segmentName,tickable:t.node.tickable})},{"text-warning":t.node.hasUnSubmitted&&"incomplete"==e.renderFieldComplete({fieldName:t.node.fieldName,segmentName:t.node.segmentName,tickable:t.node.tickable})},(n={},n[t.node.labelStyle]=!0,n)],staticStyle:{cursor:"pointer"}},[t.node.hasUnSubmitted&&"incomplete"==e.renderFieldComplete({fieldName:t.node.fieldName,segmentName:t.node.segmentName,tickable:t.node.tickable})?i("span",[i("q-icon",{attrs:{name:"info"}},[i("q-tooltip",{attrs:{"content-class":"bg-warning text-white text-body2 no-scroll"}},[e._v("\n                Unsubmitted changes - \n              ("+e._s("field"==t.node.dataType?"FIELD":"SECTION")+"\n                NOT COMPLETE.)\n              ")])],1)],1):t.node.hasUnSubmitted&&"complete"==e.renderFieldComplete({fieldName:t.node.fieldName,segmentName:t.node.segmentName,tickable:t.node.tickable})?i("span",[i("q-icon",{attrs:{name:"info"}},[i("q-tooltip",{attrs:{"content-class":"bg-positive text-white text-body2 no-scroll"}},[e._v("\n                Unsubmitted changes - \n                ("+e._s("field"==t.node.dataType?"FIELD":"SECTION")+"\n                COMPLETE.)\n              ")])],1)],1):e._e(),e._v("\n          "+e._s(t.node.label)+"\n        ")])]:[i("span",{class:[{"text-primary":t.node.hasUnSubmitted&&!t.node.fieldName}],staticStyle:{cursor:"pointer"},attrs:{id:t.node.fieldName?null:"tn"+t.node.segmentName}},[e._v("\n          "+e._s(t.node.label)+"\n        ")])]]}},{key:"body-hasContent",fn:function(t){return[i("span",{domProps:{innerHTML:e._s(t.node.content)}})]}}])})],1)},q=[],w=i("448a"),O=i.n(w),P=(i("20d6"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"q-pa-xs"},[e.getWorkingProject&&e.totalFieldsLeft>0?i("q-linear-progress",{attrs:{size:"20px",value:e.percentCompleted,color:"primary",stripe:""}},[i("div",{staticClass:"absolute-full flex flex-center"},[i("q-badge",{staticClass:"cursor-pointer",attrs:{color:"white","text-color":"primary",label:e.displayUserProgress(e.currentUserRequiredFields.length,e.numberOfUserCompletedFields)}})],1)]):e._e(),i("q-tooltip",{attrs:{"content-class":"bg-primary text-body2",delay:800}},[e._v("\n      % of fields completed for your role.\n  ")])],1)}),x=[];function I(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function S(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?I(Object(i),!0).forEach((function(t){o()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):I(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var N={mixins:[u["a"]],methods:{displayUserProgress:function(e,t){return 0==e?"0%":Math.round(t/e*100)+"%"}},computed:S(S({},Object(s["c"])("tickets",["getCompletedFields","getWorkingProject","getDisabledFields"])),{},{percentCompleted:function(){return this.numberOfUserCompletedFields/this.currentUserRequiredFields.length},currentUserRequiredFields:function(){var e=this,t=[];return Object.keys(this.navigationSegments).forEach((function(i){Object.keys(e.navigationSegments[i].fields).forEach((function(n){e.fieldIsRequired({segmentName:i,fieldName:n})&&t.push(n)}))})),t},numberOfUserCompletedFields:function(){var e=this,t=[],i=Object.keys(this.getDisabledFields).filter((function(t){return"compliance"!=e.getDisabledFields[t].segmentName})),n=Object.keys(this.getCompletedFields).filter((function(t){return"compliance"!=e.getCompletedFields[t].segmentName}));return this.currentUserRequiredFields.forEach((function(e){(_.includes(i,e)||_.includes(n,e))&&t.push(e)})),t.length||0},displayTotalFieldsLeft:function(){var e=this,t=[],i=Object.keys(this.getDisabledFields).filter((function(t){return"compliance"!=e.getDisabledFields[t].segmentName})),n=Object.keys(this.getCompletedFields).filter((function(t){return"compliance"!=e.getCompletedFields[t].segmentName}));return this.currentUserRequiredFields.forEach((function(e){_.includes(i,e)||_.includes(n,e)||t.push(e)})),t},totalFieldsLeft:function(){return this.displayTotalFieldsLeft.length}})},C=N,F=Object(y["a"])(C,P,x,!1,null,null,null),T=F.exports;function $(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function R(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?$(Object(i),!0).forEach((function(t){o()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):$(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var L={components:{ProgressBar:T},mixins:[u["a"]],data:function(){return{expanded:["ProdTicket Fields"],filter:""}},methods:R(R({},Object(s["b"])("tickets",["setShowRequired","toggleFieldEnable"])),{},{filterMethod:function(e,t){var i=t.toLowerCase(),n=e.children&&e.children.findIndex((function(e){return e.label.toLowerCase().indexOf(i)>-1}))>-1;if(e.label.toLowerCase().indexOf(i)>-1||n)return n&&!this.expanded.includes(e.label)&&this.expanded.push(e.label),!0;if("ProdTicket Fields"!=e.label&&e.label!=this.getLabel(this.$route.name)){var r=this.expanded.indexOf(e.label);r>-1&&this.expanded.splice(r,1)}return!1},renderFieldComplete:function(e){var t=["projectNumber","ignore"];return t.includes(e.fieldName)||!e.tickable?null:this.getFieldComplete({fieldName:e.fieldName,segmentName:e.segmentName})?"complete":"incomplete"},resetFilter:function(){this.filter="",this.$refs.filter.focus()},sendRoute:function(e){this.$route.name!==e&&this.$router.push({name:e,params:{project:this.getProjectID}})},closeDrawer:function(){this.$emit("mobile-close-drawer")}}),computed:R(R(R(R(R({},Object(s["e"])("auth",["currentUser"])),Object(s["e"])("tickets",["showRequired"])),Object(s["c"])("tickets",["getUnSubmitted","getFieldComplete","getEnabledFields","getProjectID"])),Object(s["c"])("auth",["currentUserRole"])),{},{editRoutes:function(){var e=this;return[{label:"ProdTicket Fields",content:'Click a section to view its fields. <span class="text-primary">Uncheck a field to ignore any issues with it when submitting.</span>',icon:"none",noTick:!0,header:"main",body:"hasContent",expanded:!0,children:Object.keys(this.navigationSegments).filter((function(t){return!e.showRequired||Object.keys(e.segments[t].fields).findIndex((function(i){return e.isRequired({segmentName:t,fieldName:i})}))>-1})).map((function(t){var i=e.navigationSegments[t],n={label:i.label,handler:function(i){e.sendRoute(t),setTimeout((function(){e.closeDrawer()}),500)},segmentName:t,fieldName:null,hasUnSubmitted:e.getUnSubmitted.hasOwnProperty(t),dataType:"segment",content:"Click on a field to navigate to it.",body:"hasContent",noTick:!0,children:Object.keys(i.fields).filter((function(i){return e.showRequired?e.isRequired({fieldName:i,segmentName:t})&&e.isRendered(t,i):e.isRendered(t,i)})).map((function(i){var n=e.navigationSegments[t].fields[i];return{label:n.label,tickable:"projectNumber"!=i,hasUnSubmitted:e.getUnSubmitted.hasOwnProperty(t)&&e.getUnSubmitted[t].hasOwnProperty(i),fieldName:i,segmentName:t,dataType:"field",labelStyle:"projectNumber"==i?"text-grey-5":null,ticked:!0,handler:function(n){e.sendRoute(t),setTimeout((function(){var t=document.querySelector("#".concat(i,"1"));e.$root.$emit("setScroll",t.offsetTop),e.closeDrawer()}),400)}}}))};return"generalInformation"==t&&n.children.unshift({label:"Project Information",tickable:!1,ticked:!0,hasUnSubmitted:!1,dataType:"field",labelStyle:"text-grey-5",fieldName:"ignore",segmentName:"ignore",handler:function(t){e.sendRoute("generalInformation"),setTimeout((function(){var t=document.querySelector("#project-details");e.$root.$emit("setScroll",t.offsetTop),e.closeDrawer()}),400)}}),n}))}]},ticked:{get:function(){var e=this;return this.getEnabledFields?["Project Information"].concat(O()(Object.keys(this.getEnabledFields).map((function(t){return e.getLabel(e.getEnabledFields[t].segmentName,t)})))):[]},set:function(e){var t="",i="",n="";n=e.length>this.ticked.length?_.difference(e,this.ticked):_.difference(this.ticked,e),_.forEach(this.segments,(function(e,r){_.forEach(e.fields,(function(e,a){e.label==n&&(t=e.realSegment?e.realSegment:r,i=a)}))})),this.toggleFieldEnable({fieldName:i,segmentName:t})}}}),watch:{$route:function(){if(this.$route.name&&"edit"!=this.$route.name)try{this.expanded.push(this.getLabel(this.$route.name))}catch(e){console.log("error: ",e)}},showRequired:function(e){e?this.$refs.trTree.expandAll():this.expanded=["ProdTicket Fields",this.getLabel(this.$route.name)],this.$root.$emit("updateKey")}},beforeMount:function(){var e=this;this.$root.$on("scrollArea",(function(t){e.scrollAreaRef=t}))},mounted:function(){var e=this;this.$root.$on("collapseTree",(function(t){e.expanded=["ProdTicket Fields",e.getLabel(t)]}))},beforeDestroy:function(){this.$root.$off("collapseTree"),this.$root.$off("scrollArea")}},U=L,E=Object(y["a"])(U,k,q,!1,null,null,null),A=E.exports,M=i("01ea"),V=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"margin-left":"80px"}},[e.projectID&&e.projectID.length?i("ul",{staticClass:"pointer-nav"},e._l(e.targetNavigationSegments,(function(t,n){return i("li",{key:"le"+n,staticClass:"list",on:{click:function(t){return e.handleRoute(n)}}},[e._v("\n        "+e._s(t.label)+"\n      ")])})),0):e._e()])},W=[],H=i("1cfb");function K(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function z(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?K(Object(i),!0).forEach((function(t){o()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):K(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var B={mixins:[u["a"]],methods:{handleRoute:function(e){var t=e;"content"==e&&(t="ticketContent"),this.$root.$emit("scroll",t)}},computed:z(z({},Object(s["c"])("tickets",["targetTicketSegmentNames","getTargetProductType"])),{},{targetSegmentNames:function(){return this.targetTicketSegmentNames(this.projectID)},targetNavigationSegments:function(){var e=this,t=_.pick(this.allSegments,this.targetSegmentNames);return t=Object.keys(t).filter((function(e){return"onlineProduction"!=e})).sort((function(t,i){return H["a"][e.productType].segments.indexOf(t)-H["a"][e.productType].segments.indexOf(i)})).reduce((function(e,i){return e[i]=t[i],e}),{}),t},productType:function(){return this.getTargetProductType(this.projectID)},projectID:function(){return this.$route.query.projectId}})},J=B,G=(i("9cfa"),Object(y["a"])(J,V,W,!1,null,"9b919366",null)),Q=G.exports,X=i("f262"),Y={computed:{isMobile:function(){return screen.width<760}}},Z=i("2b0a"),ee=i("fc1b"),te=i("7774");function ie(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function ne(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(i),!0).forEach((function(t){o()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ie(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var re={name:"MyLayout",mixins:[X["a"],Y,Z["a"],te["a"]],data:function(){return{leftDrawerOpen:!1,headerURL:""}},components:{"alerts-menu":D,"tree-nav":A,"floating-meta":M["a"],"viewTicket-nav":Q},watch:{forceReroute:function(e){e&&this.$router.push({name:e})},workingProjectLocked:function(e){var t=this;if(!e){var i=this.getProjectID;setTimeout((function(){t.getProjectID.length&&t.getProjectID==i&&(t.$router.push({name:"edit"}),t.$q.dialog({title:"Project Checked In",transitionHide:"jump-down",transitionShow:"jump-up",message:"This project was unlocked by an administrator to make it available to other users."}),t.setWorkingProject({bypass:""}))}),500)}}},methods:ne(ne({},Object(s["b"])("tickets",["createStagingRound","setFetchedProject","setWorkingProject"])),{},{closeDrawer:function(){this.isMobile&&(this.leftDrawerOpen=!1)},logout:function(){ee["a"].logout()},emitURL:function(e){this.$root.$emit("headerURL",e)}}),computed:ne(ne(ne({},Object(s["c"])("auth",["username","user"])),Object(s["c"])("tickets",["projectHasStagingRound","getProjectID","getTicketID","getStagingEdits","forceReroute","workingProjectLocked","projectIsLive","getProductType"])),{},{notAuth:function(){return"auth"!=this.$route.name},showProduction:function(){return this.getProjectID.length&&this.projectIsLive&&this.hasPermission("drop")},drawerState:function(){return this.leftDrawerOpen&&this.username&&this.username.length>0&&!this.$route.query.hideDrawer},projectLabel:function(){var e=this.getProjectID&&this.getProjectID.length?"SF# ".concat(this.getProjectID.replace("_",".")):"";if(e.length){var t=this.getTicketID&&(this.getTicketID.length||this.getTicketID>0)?"S0"==this.getTicketID?this.projectIsLive?" (Live)":" (Dropped)":" Ver ".concat(this.getTicketID.toString().replace("_","."),".0"):"";return e+t}return""},pageIsEdit:function(){return this.$route.path.includes("edit")||this.$route.path.includes("staginground")||"prodFix"==this.$route.name},breadcrumbs:function(){var e=this,t=this.$route.path.split("/");t=t.filter((function(e){return/[a-z]+/i.test(e)}));var i=[];this.getProjectID&&this.getProjectID.length&&i.push({label:this.productTypeLabel(this.getProductType),icon:"topic"});var n=t.reduce((function(t,i,n){return"edit"!=i&&t.push({path:i,routerLink:t[n-1]?"/"+t[n-1].path+"/"+i:"/"+i,label:e.$route.matched[n+1].meta.breadCrumb,icon:e.$route.matched[n+1].meta.icon}),t}),i);return n}}),mounted:function(){var e=this;this.$root.$on("closeDrawer",(function(t){e.leftDrawerOpen=t||!1}))},beforeDestroy:function(){this.$root.$off("closeDrawer")}},ae=re,oe=Object(y["a"])(ae,n,r,!1,null,"57e4f678",null);t["default"]=oe.exports}}]);