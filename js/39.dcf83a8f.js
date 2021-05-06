(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{8579:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-scroll-area",{staticStyle:{height:"80vh",width:"100%"},attrs:{visible:""}},[r("q-page",{staticClass:"flex justify-center row"},[r("div",{staticClass:"col-md-6 col-xs-12"},[r("div",{staticClass:"text-h4 q-my-lg"},[e._v("Start a New Project")]),r("q-stepper",{attrs:{vertical:"",color:"primary",animated:"","header-nav":""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[r("q-step",{attrs:{name:1,title:"Select Product Type",caption:"Required",icon:"settings",done:e.step>1,"header-nav":e.step>1}},[r("div",{staticClass:"q-mt-lg"},[r("q-select",{attrs:{options:e.productTypes,filled:"",label:"Select Product Type","map-options":"","emit-value":"","stack-label":""},model:{value:e.productType,callback:function(t){e.productType=t},expression:"productType"}}),"advancesRenewal"==e.productType?r("q-select",{staticClass:"q-mt-md",attrs:{options:e.projectFilter,"use-chips":"",clearable:"",filled:"","stack-label":"","emit-value":"","map-options":"",label:"Import ProdTicket from another project (Optional)","use-input":"",hint:"Type to search. Click an option from the menu or press enter to select."},on:{filter:e.filterProjects},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!1,4009527860),model:{value:e.projectToImport,callback:function(t){e.projectToImport=t},expression:"projectToImport"}}):e._e()],1),r("q-stepper-navigation",[r("q-btn",{attrs:{color:"primary",label:"Continue",disable:e.productType.length<1},on:{click:function(t){e.step=2}}})],1)],1),r("q-step",{attrs:{name:2,title:"Enter SF Number",caption:"Required",icon:"settings",done:e.step>2,"header-nav":e.step>2}},[r("q-input",{attrs:{filled:"","stack-label":"",rules:[function(e){return""==e||/^\d+\.?\d+$/.test(e)||"SF Numbers may only contain numeric characters or a period followed by at least one number ex. 1234.2"},function(t){return!e.exists(t)||"A project with that SF Number already exists."},function(e){return e.length||"Required"}],label:"SF Number"},model:{value:e.sfNumber,callback:function(t){e.sfNumber=t},expression:"sfNumber"}}),r("q-stepper-navigation",[r("q-btn",{attrs:{color:"primary",label:"Continue",disable:!e.sfNumberValid},on:{click:function(t){e.step=3}}}),r("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=1}}})],1)],1),r("q-step",{attrs:{name:3,title:"Choose Program GeoTarget",caption:"Required",icon:"settings",done:e.step>3,"header-nav":e.step>4}},[r("q-option-group",{attrs:{options:e.geoTarget,label:"Program GeoTarget",type:"radio"},model:{value:e.programGeotarget,callback:function(t){e.programGeotarget=t},expression:"programGeotarget"}}),r("q-stepper-navigation",[r("q-btn",{attrs:{color:"primary",label:"Continue",disable:""==e.programGeotarget},on:{click:function(t){e.step=4}}}),r("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=2}}})],1)],1),r("q-step",{attrs:{name:4,title:"Choose Associated Users",caption:"Optional",icon:"settings",done:e.step>4,"header-nav":e.step>4}},[r("p",{staticClass:"text-bold text-grey"},[e._v("\n            Users have to be added to the system before they can be\n            assigned."),e.hasPermission("addUser")?r("span",[e._v("\n              To add a user, click "),r("router-link",{attrs:{to:{path:"/settings",query:{view:"userList"}}}},[e._v("here.\n              ")])],1):r("span",[e._v("Only team leads / managers can add new users. Please contact\n              your manager if the user you are looking for is not\n              available.")])]),r("user-select",{attrs:{userOptions:e.newProjectUsers,userRoles:e.newProjectRoles,selectedUsers:e.selectedUsers,selectedRoles:e.selectedRoles},on:{input:e.updateSelected}}),r("q-stepper-navigation",[r("q-btn",{attrs:{color:"primary",label:"Finish"},on:{click:e.triggerCreate}}),r("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=1}}})],1)],1)],1)],1)])],1)},o=[],a=(r("8e6e"),r("8a81"),r("a481"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("448a")),n=r.n(a),i=(r("6762"),r("2fdb"),r("9523")),c=r.n(i),l=r("2f62"),p=r("6165"),u=r("f262"),d=r("81d4");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={mixins:[p["a"],u["a"]],data:function(){return{step:1,productType:"advances",sfNumber:"",programGeotarget:"",selectedUsers:[],selectedRoles:[],productTypes:[{value:"advances",label:"New Clinical Advances",disable:!1},{value:"curbside",label:"Curbside Consult",disable:!1},{value:"spotlight",label:"Spotlight",disable:!1},{value:"advancesRenewal",label:"Clinical Advances Renewal",disable:!1},{value:"demo",label:"Ticket Runner Demonstration",disable:!1},{value:"videoLecture",label:"Video Lecture",disable:!1}],geoTarget:[{label:"OUS",value:"ous"},{label:"US",value:"us"}],newProjectRoles:[],projectToImport:null,projectFilter:this.projectOptions}},components:{"user-select":d["a"]},methods:b(b({},Object(l["b"])("tickets",["createNewProject","setNewProject","setFetchedProject"])),{},{filterProjects:function(e,t){var r=this;t((function(){if(""==e)r.projectFilter=r.projectOptions;else{var t=e;r.projectFilter=r.projectOptions.filter((function(e){return e.value.indexOf(t)>-1}))}}))},exists:function(e){return this.projectKeys.includes(e)},updateSelected:function(e){this.selectedRoles=e.selectedRolesLocal,this.selectedUsers=e.selectedUsersLocal},triggerCreate:function(){var e=this;this.projectToImport?this.setFetchedProject(this.projectToImport).then((function(t){e.createNewProject({projectNumber:e.sfNumber,productType:e.productType,selectedUsers:[].concat(n()(e.selectedUsers),[e.username]),username:e.username,programGeotarget:e.programGeotarget,import:e.projectToImport}).then((function(t){e.step=1,e.productType="",e.selectedUsers=[],e.selectedRoles=[],e.sfNumber="",e.projectToImport=null,t.ok?(e.$q.dialog({title:"Project Created!",message:'New project added and saved to the database. To begin working, click on a field from the navigation bar on the left. To pass it on to another user, make sure to "check in" the project by clicking on the SF number in the header.'}),e.$router.push({name:"edit"})):e.trNotify(t.message,"negative")})).catch((function(t){e.trNotify("There was an issue with your request. please try again later or submit a bug report about this issue.","negative"),console.log("error: ",t)}))})):this.createNewProject({projectNumber:this.sfNumber,productType:this.productType,selectedUsers:[].concat(n()(this.selectedUsers),[this.username]),username:this.username,programGeotarget:this.programGeotarget,import:this.projectToImport}).then((function(t){e.step=1,e.productType="",e.selectedUsers=[],e.selectedRoles=[],e.sfNumber="",e.projectToImport=null,t.ok?(e.$q.dialog({title:"Project Created!",message:'New project added and saved to the database. To begin working, click on a field from the navigation bar on the left. To pass it on to another user, make sure to "check in" the project by clicking on the SF number in the header.'}),e.$router.push({name:"edit"})):e.trNotify(t.message,"negative")})).catch((function(t){e.trNotify("There was an issue with your request. please try again later or submit a bug report about this issue.","negative"),console.log("error: ",t)}))}}),computed:b(b(b({},Object(l["c"])("auth",["roles","orgUsers","username"])),Object(l["c"])("tickets",["projectKeys","getProjects"])),{},{sfNumberValid:function(){return/^\d+\.?\d+$/.test(this.sfNumber)&&this.sfNumber.length&&!this.exists(this.sfNumber)},newProjectUsers:function(){var e=this;return Object.keys(this.orgUsers).map((function(t){return{email:t,fullName:e.orgUsers[t].profile.fullName?e.orgUsers[t].profile.fullName:null}}))},projectOptions:function(){var e=this;return this.projectKeys.filter((function(t){return"advances"==e.getProjects[t].productType})).map((function(e){return{label:e.replace("_","."),value:e}}))}}),mounted:function(){var e=this;this.newProjectRoles=Object.keys(this.roles).map((function(t){return{label:e.labels.role[t],value:t}}))}},h=f,g=r("2877"),v=Object(g["a"])(h,s,o,!1,null,null,null);t["default"]=v.exports}}]);