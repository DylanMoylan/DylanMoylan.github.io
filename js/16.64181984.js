(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{1639:function(e,t,i){"use strict";var a=i("7639"),n=i.n(a);n.a},7639:function(e,t,i){},a9c3:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-header",[i("q-toolbar",{staticClass:"justify-between"},[i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),i("q-toolbar-title",{staticClass:"tr-mobile-hide"},[i("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/"}},[e._v("Ticket Runner")])],1),i("div",{staticClass:"tr-desktop-hide"},[i("q-breadcrumbs",{attrs:{"active-color":"white"}},e._l(e.breadcrumbs,(function(e){return i("q-breadcrumbs-el",{key:e.routerLink,staticClass:"tr-mobile-hide",attrs:{icon:e.icon,label:e.label,to:e.routerLink}})})),1)],1),i("alerts-menu",{on:{"log-out":e.logout}})],1),i("q-toolbar",{staticClass:"tr-mobile-hide",attrs:{inset:""}},[i("q-breadcrumbs",{attrs:{"active-color":"white"},scopedSlots:e._u([{key:"separator",fn:function(){return[i("div",{staticClass:"tr-mobile-hide"},[e._v("/")])]},proxy:!0}])},[e.getProjectID&&e.pageIsEdit?i("q-breadcrumbs-el",{scopedSlots:e._u([{key:"default",fn:function(){return[i("q-btn-dropdown",{attrs:{dense:"",flat:"",label:e.projectLabel}},[i("q-item",{attrs:{clickable:""},on:{click:function(t){return e.checkInTicket(e.getProjectID)}}},[i("q-item-section",[e._v("\n                  Check in ticket\n                ")])],1),"1"!=e.getTicketID?i("floating-meta"):e._e()],1)]},proxy:!0}],null,!1,901231220)}):e._e(),e._l(e.breadcrumbs,(function(e){return i("q-breadcrumbs-el",{key:e.routerLink,staticClass:"tr-mobile-hide",attrs:{icon:e.icon,label:e.label,to:e.routerLink}})}))],2)],1),e.showProgress?i("progress-bar",{staticClass:"tr-mobile-hide"}):e._e()],1),i("q-drawer",{attrs:{value:e.drawerState,"show-if-above":"",bordered:"","content-class":"bg-grey-2",width:350},on:{input:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[i("div",{staticClass:"row justify-between items-center"},[i("q-btn",{staticClass:"mobile-drawer-btn",attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),i("q-btn",{staticClass:"close-btn",attrs:{icon:"clear",round:"",flat:""},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}})],1),i("q-list",[e.hasPermission("create")?i("q-item",{attrs:{clickable:"",exact:"",to:"/new"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"description"}})],1),i("q-item-section",[i("q-item-label",[e._v("New Project")]),i("q-item-label",{attrs:{caption:""}},[e._v("Create a New Project")])],1)],1):e._e(),e.getProjectID.length?i("q-item",{attrs:{clickable:"",exact:"",to:{path:"/viewTicket",query:{projectId:e.getProjectID}}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"visibility"}})],1),i("q-item-section",[i("q-item-label",[e._v("View ProdTicket")]),i("q-item-label",{attrs:{caption:""}},[e._v("View an Existing ProdTicket")])],1)],1):e._e(),e.$route.path.includes("viewTicket")?i("viewTicket-nav"):e._e(),i("q-item",{attrs:{clickable:"",exact:"",to:"/settings"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"settings"}})],1),i("q-item-section",[i("q-item-label",[e._v("Settings and Tools")]),i("q-item-label",{attrs:{caption:""}},[e._v("Add Partners/Supporters,\n            "+e._s(e.hasPermission("addUser")?"Add Team Members,":"")+" Change\n            App Settings.")])],1)],1),i("q-item",{attrs:{clickable:"",exact:"",to:"/edit"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"home"}})],1),i("q-item-section",[i("q-item-label",[e._v("Projects")]),i("q-item-label",{attrs:{caption:""}},[e._v("Search Projects/Edit ProdTicket Fields")])],1)],1),e.$route.path.includes("edit")&&e.getProjectID.length&&e.treeEnabled?i("q-item",{staticStyle:{"padding-left":"0"}},[i("q-item-section",{staticStyle:{"justify-content":"start!important"},attrs:{avatar:""}},[i("q-icon",{staticClass:"q-ml-md",staticStyle:{"margin-top":"20px"},attrs:{color:e.$route.path.includes("edit")?"primary":"",name:"search"}})],1),i("q-item-section",[i("tree-nav",{on:{"mobile-close-drawer":e.closeDrawer}})],1)],1):e._e(),e.getProjectID.length&&e.projectHasStagingRound?i("q-item",{attrs:{clickable:"",exact:"",to:"/staginground"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"list"}})],1),i("q-item-section",[i("q-item-label",[e._v("Staging Round")]),i("q-item-label",{attrs:{caption:""}},[e._v("Review and Drop changes from the current staging\n            round.")])],1)],1):e._e(),e.showProduction?i("q-item",{attrs:{clickable:"",exact:"",to:"/prodfix"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"construction"}})],1),i("q-item-section",[i("q-item-label",[e._v("Review Current Prodfix")]),i("q-item-label",{attrs:{caption:""}},[e._v("\n            Review Changes to submit in the current ProdFix.\n          ")])],1)],1):e._e()],1)],1),i("q-page-container",[i("router-view")],1)],1)},n=[],r=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("456d"),i("28a5"),i("7f7f"),i("6762"),i("2fdb"),i("6b54"),i("06db"),i("a481"),i("9523")),s=i.n(r),o=i("24e8"),c=i("2f62"),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"desktop-icon-offset"},[e.username?i("q-btn-dropdown",{staticClass:"alert-dropdown",attrs:{flat:"","no-caps":""},scopedSlots:e._u([{key:"label",fn:function(){return[i("div",{staticClass:"q-mr-sm user-label"},[e._v("\n            "+e._s(e.user.profile.displayName)+"\n          ")]),i("q-avatar",[e.avatar?[i("img",{attrs:{src:e.user.profile.avatar},on:{error:function(){return e.avatar=null}}})]:[i("div",{staticClass:"bg-pink text-white",staticStyle:{"border-radius":"50%",width:"50px",height:"50px"}},[i("div",{staticStyle:{"margin-top":"38%"}},[e._v(e._s(e.username.substring(0,1).toUpperCase()))])])]],2),e.flagsCount>0?i("q-badge",{staticStyle:{top:"2px","margin-right":"25px"},attrs:{color:"red",floating:""}},[e._v(e._s(e.flagsCount))]):e._e()]},proxy:!0}],null,!1,567501611)},[i("q-list",{attrs:{bordered:"",separator:""}},[i("q-item",{staticClass:"bg-primary text-white",attrs:{clickable:""},on:{click:e.logout}},[i("q-item-section",[i("q-item-label",[e._v("\n                Logout\n              ")]),i("q-item-label",{staticClass:"text-grey-3",attrs:{caption:""}},[e._v("\n                Log out "+e._s(e.username)+"\n              ")])],1),i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"exit_to_app"}})],1)],1),e.workingProjectAlerts.length?[i("div",{staticClass:"bg-secondary text-white q-pa-sm q-mt-sm"},[e._v("\n                  Active Project Alerts: (SF# "+e._s(e.getProjectID)+")\n              ")]),e._l(e.workingProjectAlerts,(function(t){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:t.activityID,attrs:{clickable:""},on:{click:function(i){return e.onAlertClick(t,!0,!0)}}},[i("q-item-section",[i("q-item-label",[e._v(e._s(e.getLabel(t.activityData.segmentName,null)+" / "+e.getLabel(t.activityData.segmentName,t.activityData.fieldName)))]),i("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.displayDate(t.time)))]),t.activityData.comment?[i("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.abbreviate(t.activityData.comment)))]),i("q-item-label",{attrs:{caption:""}},[e._v("\n                              From: "+e._s(e.getFullName(t.activityData.author))+"\n                          ")])]:[""!=t.activityData.flagDescription?i("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.abbreviate(t.activityData.flagDescription)))]):e._e(),i("q-item-label",{attrs:{caption:""}},[e._v("\n                              "+e._s("assignUser"==t.activityData.urgency?"Assigned":"Initiated")+" by: "+e._s(t.activityData.author.firstName+" "+t.activityData.author.lastName)+"\n                          ")])]],2),i("q-item-section",{staticStyle:{"align-items":"center!important"},attrs:{side:""}},[i("q-icon",{attrs:{name:t.activityData.comment?"comment":"flag",color:t.activityData.urgency&&"high"==t.activityData.urgency?"negative":"amber"}},[t.activityData.urgency&&"assignUser"!=t.activityData.urgency?i("q-tooltip",{attrs:{"content-class":"bg-primary text-body2"}},[e._v("This has been marked as a "+e._s(t.activityData.urgency)+" priority alert.")]):e._e()],1),t.activityData.flagID?i("q-checkbox",{attrs:{value:e.bin,"keep-color":"",color:"primary"},on:{input:function(i){return e.setCompleted(t.activityID)}}},[i("q-tooltip",{attrs:{"content-class":"bg-primary text-body2"}},[e._v("Mark As "+e._s(t.activityData.comment?"Read":"Completed"))])],1):e._e()],1)],1)}))]:e._e(),e.nonWorkingProjectAlerts.length?i("div",{staticClass:"bg-secondary text-white q-pa-sm"},[e._v("\n              Project Alerts:\n          ")]):e._e(),e._l(e.nonWorkingProjectAlerts,(function(t){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:t.activityID,staticClass:"bg-grey-3",attrs:{clickable:""},on:{click:function(i){return e.onAlertClick(t,!1,t.isValid)}}},[i("q-item-section",[i("q-item-label",[e._v(e._s(e.getLabel(t.activityData.segmentName,null)+" / "+e.getLabel(t.activityData.segmentName,t.activityData.fieldName)))]),i("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.displayDate(t.time)))]),t.activityData.comment?[i("q-item-label",{attrs:{caption:""}},[e._v("\n                          "+e._s(e.abbreviate(t.activityData.comment))+"\n                      ")]),i("q-item-label",{attrs:{caption:""}},[e._v("\n                          "+e._s("From: "+e.getFullName(t.activityData.author))+"\n                      ")])]:[""!=t.activityData.flagDescription?i("q-item-label",{attrs:{caption:""}},[e._v("\n                          "+e._s(e.abbreviate(t.activityData.flagDescription))+"\n                      ")]):e._e(),i("q-item-label",{attrs:{caption:""}},[e._v("\n                          "+e._s("assignUser"==t.activityData.urgency?"Assigned":"Initiated")+" by: "+e._s(t.activityData.author.firstName+" "+t.activityData.author.lastName)+"\n                      ")])],i("q-item-label",{staticClass:"text-negative",attrs:{caption:""}},[e._v("\n                      SF# "+e._s(t.projectID)+"\n                  ")])],2),i("q-item-section",{staticStyle:{"align-items":"center!important"},attrs:{side:""}},[i("q-icon",{attrs:{name:t.activityData.comment?"comment":"flag",color:t.activityData.urgency&&"high"==t.activityData.urgency?"negative":"amber"}},[t.activityData.urgency&&"assignUser"!=t.activityData.urgency?i("q-tooltip",{attrs:{"content-class":"bg-primary text-body2"}},[e._v("This has been marked as a "+e._s(t.activityData.urgency)+" priority alert.")]):e._e()],1)],1)],1)}))],2)],1):e._e(),i("q-dialog",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down"},model:{value:e.viewFlagInfo,callback:function(t){e.viewFlagInfo=t},expression:"viewFlagInfo"}},[i(e.currentFlag&&e.currentFlag[0]&&e.currentFlag[0].flagID?"flag-info":"activityFeedDetails",{tag:"component",attrs:{flag:e.currentFlag,username:e.username,flagID:e.flagID,isValid:e.isValid,activityItem:e.currentFlag},on:{closeModal:function(t){e.viewFlagInfo=!1}}})],1)],1)},u=[],d=(i("f751"),i("6165")),m=i("df71"),f=i("122a"),p=i("8e89");function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(Object(i),!0).forEach((function(t){s()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var h={mixins:[d["a"],m["a"],f["a"]],data:function(){return{bin:!1,currentFlag:null,viewFlagInfo:!1,flagID:"",isValid:!0,avatar:!0}},components:{"q-dialog":o["a"],"flag-info":p["a"],activityFeedDetails:f["a"]},computed:b(b({},Object(c["c"])("tickets",["activeTicket","getProjectID"])),{},{nonWorkingProjectAlerts:function(){var e=this;return this.alerts.filter((function(t){var i=t.activityData;return i.comment?(i=Object.assign(i,i.pointers),i.projectID!=e.getProjectID):t.projectID!=e.getProjectID}))},workingProjectAlerts:function(){var e=this;return this.alerts.filter((function(t){return t.projectID==e.getProjectID})).map((function(t){var i=t.activityData;i.pointers&&(i=Object.assign(i,i.pointers));var a=!1;return e.activeTicket[i.segmentName][i.fieldName].fields.hasOwnProperty(i.fieldKey)&&(a=!0),t.isValid=a,t}))},flagsCount:function(){return this.unViewedAlerts.length}}),methods:b(b({},Object(c["b"])("flags",["markAsCompleted"])),{},{logout:function(){var e=this;this.$q.dialog({title:"Confirm logout",message:"Log out?",persistent:!0,cancel:!0}).onOk((function(){e.$emit("log-out")}))},setCompleted:function(e){this.markAsCompleted({flagID:e,username:this.username}),this.trNotify("Marked flag as complete")},onAlertClick:function(e,t,i){var a,n=this;if(this.markActivityItem(e.activityID),this.viewedActivities.push(e.activityID),this.isValid=i,a=e.activityData.flagID?[e.activityData]:e.activityData,this.flagID=e.activityID,t){this.$route.name!==e.activityData.segmentName&&this.$router.push({name:e.activityData.segmentName});var r=this.flagID,s=e.activityData.comment?"comment":"flag",o=e.activityData.fieldKey?e.activityData.fieldKey:e.activityData.commentIndex;setTimeout((function(){n.$root.$emit("showFlag",{fieldName:e.activityData.fieldName,flagType:s,fieldKey:o,isValid:i,id:r})}),500)}else this.currentFlag=a,this.viewFlagInfo=!0}})},v=h,y=i("2877"),k=Object(y["a"])(v,l,u,!1,null,null,null),D=k.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("q-input",{ref:"filter",attrs:{borderless:"",filled:"",label:"Search for ticket fields or sections"},scopedSlots:e._u([{key:"append",fn:function(){return[""!==e.filter?i("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:e.resetFilter}}):e._e()]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),i("q-checkbox",{class:e.showRequired?"text-grey-8":"text-grey-6",attrs:{value:e.showRequired,size:"lg",label:"Show recommended fields only"},on:{input:e.setShowRequired}}),i("q-tree",{ref:"trTree",attrs:{nodes:e.editRoutes,"tick-strategy":"strict",ticked:e.ticked,accordion:"",expanded:e.expanded,filter:e.filter,"node-key":"label"},on:{"update:ticked":function(t){e.ticked=t},"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"default-header",fn:function(t){var a;return["compliance"===t.node.segmentName?[i("span",{staticClass:"cursor-pointer"},[e._v(e._s(t.node.label))])]:t.node.fieldName?[i("span",{class:[{"text-primary":t.node.hasUnSubmitted&&!t.node.fieldName},{"text-positive":t.node.hasUnSubmitted&&"complete"==e.renderFieldComplete({fieldName:t.node.fieldName,segmentName:t.node.segmentName,tickable:t.node.tickable})},{"text-warning":t.node.hasUnSubmitted&&"incomplete"==e.renderFieldComplete({fieldName:t.node.fieldName,segmentName:t.node.segmentName,tickable:t.node.tickable})},(a={},a[t.node.labelStyle]=!0,a)],staticStyle:{cursor:"pointer"}},[t.node.hasUnSubmitted&&"incomplete"==e.renderFieldComplete({fieldName:t.node.fieldName,segmentName:t.node.segmentName,tickable:t.node.tickable})?i("span",[i("q-icon",{attrs:{name:"info"}},[i("q-tooltip",{attrs:{"content-class":"bg-warning text-white text-body2 no-scroll"}},[e._v("\n                Unsubmitted changes - \n              ("+e._s("field"==t.node.dataType?"FIELD":"SECTION")+"\n                NOT COMPLETE.)\n              ")])],1)],1):t.node.hasUnSubmitted&&"complete"==e.renderFieldComplete({fieldName:t.node.fieldName,segmentName:t.node.segmentName,tickable:t.node.tickable})?i("span",[i("q-icon",{attrs:{name:"info"}},[i("q-tooltip",{attrs:{"content-class":"bg-positive text-white text-body2 no-scroll"}},[e._v("\n                Unsubmitted changes - \n                ("+e._s("field"==t.node.dataType?"FIELD":"SECTION")+"\n                COMPLETE.)\n              ")])],1)],1):e._e(),e._v("\n          "+e._s(t.node.label)+"\n        ")])]:[i("span",{class:[{"text-primary":t.node.hasUnSubmitted&&!t.node.fieldName}],staticStyle:{cursor:"pointer"},attrs:{id:t.node.fieldName?null:"tn"+t.node.segmentName}},[e._v("\n          "+e._s(t.node.label)+"\n        ")])]]}},{key:"body-hasContent",fn:function(t){return[i("span",{domProps:{innerHTML:e._s(t.node.content)}})]}}])})],1)},q=[];function j(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function O(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?j(Object(i),!0).forEach((function(t){s()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):j(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var P={mixins:[d["a"]],data:function(){return{expanded:["ProdTicket Fields"],filter:""}},methods:O(O({},Object(c["b"])("tickets",["setShowRequired","toggleFieldEnable"])),{},{renderFieldComplete:function(e){var t=["projectNumber"];return t.includes(e.fieldName)||!e.tickable?null:this.getFieldComplete({fieldName:e.fieldName,segmentName:e.segmentName})?"complete":"incomplete"},resetFilter:function(){this.filter="",this.$refs.filter.focus()},sendRoute:function(e){this.$route.name!==e&&this.$router.push({name:e})},closeDrawer:function(){this.$emit("mobile-close-drawer")}}),computed:O(O(O(O(O({},Object(c["e"])("auth",["currentUser"])),Object(c["e"])("tickets",["showRequired"])),Object(c["c"])("tickets",["getUnSubmitted","getFieldComplete","getEnabledFields"])),Object(c["c"])("auth",["currentUserRole"])),{},{editRoutes:function(){var e=this;return[{label:"ProdTicket Fields",content:'Click a section to view its fields. <span class="text-primary">Uncheck a field to ignore any issues with it when submitting.</span>',icon:"none",noTick:!0,header:"main",body:"hasContent",expanded:!0,children:Object.keys(this.navigationSegments).map((function(t){var i=e.navigationSegments[t];return{label:i.label,handler:function(t){e.sendRoute(i.name),setTimeout((function(){e.closeDrawer()}),500)},segmentName:i.name,fieldName:null,hasUnSubmitted:e.getUnSubmitted.hasOwnProperty(i.name),dataType:"segment",content:"Click on a field to navigate to it.",body:"hasContent",noTick:!0,children:Object.keys(i.fields).filter((function(i){return e.showRequired?e.isRequired({fieldName:i,segmentName:t})&&e.isRendered(t,i):e.isRendered(t,i)})).map((function(i){var a=e.navigationSegments[t].fields[i];return{label:a.label,tickable:"projectNumber"!=i,hasUnSubmitted:e.getUnSubmitted.hasOwnProperty(t)&&e.getUnSubmitted[t].hasOwnProperty(i),fieldName:i,segmentName:t,dataType:"field",labelStyle:"projectNumber"==i?"text-grey-5":null,ticked:!0,handler:function(a){e.sendRoute(t),setTimeout((function(){var t=document.querySelector("#".concat(i,"1"));e.$root.$emit("setScroll",t.offsetTop),e.closeDrawer()}),400)}}}))}}))}]},ticked:{get:function(){var e=this;return this.getEnabledFields?Object.keys(this.getEnabledFields).map((function(t){return e.getLabel(e.getEnabledFields[t].segmentName,t)})):[]},set:function(e){var t="",i="",a="";a=e.length>this.ticked.length?_.difference(e,this.ticked):_.difference(this.ticked,e),_.forEach(this.segments,(function(e,n){_.forEach(e.fields,(function(n,r){n.label==a&&(t=e.name,i=n.name)}))})),this.toggleFieldEnable({fieldName:i,segmentName:t})}}}),watch:{$route:function(){if(this.$route.name&&"edit"!=this.$route.name)try{this.expanded.push(this.getLabel(this.$route.name))}catch(e){console.log("error: ",e)}},showRequired:function(){this.showRequired?this.$refs.trTree.expandAll():(this.$refs.trTree.collapseAll(),this.expanded.push("Prodticket Fields"),this.expanded.push(this.getLabel(this.$route.name))),this.$root.$emit("updateKey")}},beforeMount:function(){var e=this;this.$root.$on("scrollArea",(function(t){e.scrollAreaRef=t}))},mounted:function(){var e=this;this.$root.$on("collapseTree",(function(t){e.expanded=["ProdTicket Fields",e.getLabel(t)]}))},beforeDestroy:function(){this.$root.$off("collapseTree"),this.$root.$off("scrollArea")}},C=P,x=Object(y["a"])(C,w,q,!1,null,null,null),N=x.exports,I=i("01ea"),F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"q-pa-xs"},[e.getWorkingProject&&e.totalFieldsLeft>0?i("q-linear-progress",{attrs:{size:"20px",value:e.percentCompleted,color:"primary",stripe:""}},[i("div",{staticClass:"absolute-full flex flex-center"},[i("q-badge",{attrs:{color:"white","text-color":"primary",label:e.displayUserProgress(e.currentUserRequiredFields.length,e.numberOfUserCompletedFields)}})],1)]):e._e()],1)},S=[];function $(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function R(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?$(Object(i),!0).forEach((function(t){s()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):$(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var T={mixins:[d["a"]],methods:{displayUserProgress:function(e,t){return 0==e?"0%":Math.round(t/e*100)+"%"}},computed:R(R({},Object(c["c"])("tickets",["getCompletedFields","getWorkingProject","getDisabledFields"])),{},{percentCompleted:function(){return this.numberOfUserCompletedFields/this.currentUserRequiredFields.length},currentUserRequiredFields:function(){var e=this,t=[];return Object.keys(this.navigationSegments).forEach((function(i){Object.keys(e.navigationSegments[i].fields).forEach((function(a){e.fieldIsRequired({segmentName:i,fieldName:a})&&t.push(a)}))})),t},numberOfUserCompletedFields:function(){var e=this,t=[],i=Object.keys(this.getDisabledFields).filter((function(t){return"compliance"!=e.getDisabledFields[t].segmentName})),a=Object.keys(this.getCompletedFields).filter((function(t){return"compliance"!=e.getCompletedFields[t].segmentName}));return this.currentUserRequiredFields.forEach((function(e){(_.includes(i,e)||_.includes(a,e))&&t.push(e)})),t.length||0},displayTotalFieldsLeft:function(){var e=this,t=[],i=Object.keys(this.getDisabledFields).filter((function(t){return"compliance"!=e.getDisabledFields[t].segmentName})),a=Object.keys(this.getCompletedFields).filter((function(t){return"compliance"!=e.getCompletedFields[t].segmentName}));return this.currentUserRequiredFields.forEach((function(e){_.includes(i,e)||_.includes(a,e)||t.push(e)})),t},totalFieldsLeft:function(){return this.displayTotalFieldsLeft.length}})},E=T,L=Object(y["a"])(E,F,S,!1,null,null,null),U=L.exports,A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"margin-left":"80px"}},[i("ul",{staticClass:"pointer-nav"},[i("li",{staticClass:"list",on:{click:function(t){return e.handleRoute("handoffNotes")}}},[e._v("Handoff Notes")]),i("li",{staticClass:"list",on:{click:function(t){return e.handleRoute("generalInformation")}}},[e._v("General Information")]),i("li",{staticClass:"list",on:{click:function(t){return e.handleRoute("partnerDetails")}}},[e._v("Partner Details")]),i("li",{staticClass:"list",on:{click:function(t){return e.handleRoute("clinicalAdvancesPageDetails")}}},[e._v("Clinical Advances Page Details")]),i("li",{staticClass:"list",on:{click:function(t){return e.handleRoute("designInformation")}}},[e._v("Design Information")]),i("li",{staticClass:"list",on:{click:function(t){return e.handleRoute("postcards")}}},[e._v("Postcards/Handouts")]),i("li",{staticClass:"list",on:{click:function(t){return e.handleRoute("medChallenges")}}},[e._v("MedChallenges")]),i("li",{staticClass:"list",on:{click:function(t){return e.handleRoute("pollingQuestions")}}},[e._v("Poll Questions")]),i("li",{staticClass:"list",on:{click:function(t){return e.handleRoute("relatedResources")}}},[e._v("Related Resources")]),i("li",{staticClass:"list",on:{click:function(t){return e.handleRoute("steeringCommittee")}}},[e._v("Steering Committee")]),i("li",{staticClass:"list",on:{click:function(t){return e.handleRoute("activities")}}},[e._v("Activities")]),i("li",{staticClass:"list",on:{click:function(t){return e.handleRoute("localPerspectives")}}},[e._v("Local Perspectives")]),i("li",{staticClass:"list",on:{click:function(t){return e.handleRoute("audienceEngagement")}}},[e._v("Audience Engagement")]),i("li",{staticClass:"list",on:{click:function(t){return e.handleRoute("videos")}}},[e._v("Video")])])])},M=[],V={methods:{handleRoute:function(e){this.$root.$emit("scroll",e)}}},W=V,H=(i("1639"),Object(y["a"])(W,A,M,!1,null,"76b3d3c4",null)),K=H.exports,z=i("f262"),J={computed:{isMobile:function(){return screen.width<760}}},Q=i("2b0a"),G=i("fc1b");function B(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function X(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?B(Object(i),!0).forEach((function(t){s()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):B(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var Y={name:"MyLayout",mixins:[z["a"],J,Q["a"]],data:function(){return{leftDrawerOpen:!1}},components:{"alerts-menu":D,"tree-nav":N,"floating-meta":I["a"],"progress-bar":U,"viewTicket-nav":K},watch:{leftDrawerOpen:function(e){this.$root.$emit("drawerChange",e)},forceReroute:function(e){e&&this.$router.push({name:e})},workingProjectLocked:function(e){var t=this;if(!e){var i=this.getProjectID;setTimeout((function(){t.getProjectID.length&&t.getProjectID==i&&(t.$router.push({name:"edit"}),t.$q.dialog({title:"Project Checked In",message:"This project was unlocked by an administrator to make it available to other users."}),t.setWorkingProject({bypass:""}))}),500)}}},methods:X(X({},Object(c["b"])("tickets",["createStagingRound","setFetchedProject","setWorkingProject"])),{},{closeDrawer:function(){this.isMobile&&(this.leftDrawerOpen=!1)},logout:function(){G["a"].logout()}}),computed:X(X(X({},Object(c["c"])("auth",["username","user"])),Object(c["c"])("tickets",["projectHasStagingRound","getProjectID","getTicketID","treeEnabled","getStagingEdits","forceReroute","workingProjectLocked","projectIsLive"])),{},{showProduction:function(){return this.getProjectID.length&&this.projectIsLive&&this.hasPermission("drop")},drawerState:function(){return this.leftDrawerOpen&&this.username&&this.username.length>0&&!this.$route.query.hideDrawer},projectLabel:function(){var e=this.getProjectID&&this.getProjectID.length?"SF# ".concat(this.getProjectID.replace("_",".")):"";if(e.length){var t=this.getTicketID&&(this.getTicketID.length||this.getTicketID>0)?"S0"==this.getTicketID?this.projectIsLive?" (Live)":" (Dropped)":" Version ".concat(this.getTicketID.toString().replace("_",".")):"";return e+t}return""},pageIsEdit:function(){return this.$route.path.includes("edit")||this.$route.path.includes("staginground")||"prodFix"==this.$route.name},breadcrumbs:function(){var e=this,t=this.$route.path.split("/");t.shift();var i=t.reduce((function(t,i,a){return t.push({path:i,routerLink:t[a-1]?"/"+t[a-1].path+"/"+i:"/"+i,label:e.$route.matched[a+1].meta.breadCrumb,icon:e.$route.matched[a+1].meta.icon}),t}),[]);if("edit"==i[0].path)return i.shift(),i},showProgress:function(){var e=this.$route;if("Default"!==e.meta.breadCrumb&&this.user&&"guest"!==this.user.role)return this.$route.meta.breadCrumb}}),beforeMount:function(){var e=this;this.$root.$on("breadcrumb",(function(t){e.breadcrumbs=t})),this.$root.$on("closeDrawer",(function(){e.leftDrawerOpen=!1}))},mounted:function(){this.showProgress},beforeDestroy:function(){this.$root.$off("breadcrumb"),this.$root.$off("closeDrawer")}},Z=Y,ee=Object(y["a"])(Z,a,n,!1,null,"7571ae93",null);t["default"]=ee.exports}}]);