(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"0435":function(t,e,s){"use strict";var a=s("61b1"),i=s.n(a);i.a},"08e8":function(t,e,s){},"1e15":function(t,e,s){},"2ae8":function(t,e,s){},"581c":function(t,e,s){"use strict";var a=s("2ae8"),i=s.n(a);i.a},5986:function(t,e,s){"use strict";var a=s("c987"),i=s.n(a);i.a},"61b1":function(t,e,s){},"6fb1":function(t,e,s){},9439:function(t,e,s){"use strict";var a=s("08e8"),i=s.n(a);i.a},"9de2":function(t,e,s){"use strict";var a=s("6fb1"),i=s.n(a);i.a},b9e6:function(t,e,s){"use strict";var a=s("fe64"),i=s.n(a);i.a},c987:function(t,e,s){},d8a1:function(t,e,s){"use strict";var a=s("1e15"),i=s.n(a);i.a},faca:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex q-pa-md"},[s("q-scroll-area",{ref:"caScroll",staticStyle:{height:"80vh",width:"100%"},attrs:{visible:""}},[this.previewObj?s("div",{staticClass:"my-card q-pa-md q-ma-xs q-mr-md",attrs:{id:"ca-preview"}},[s("header-section",{attrs:{pageDetails:t.previewObj.clinicalAdvancesPageDetails,supporter:t.previewObj.generalInformation,videos:t.previewObj.videos}}),s("nav-section"),s("cme-activities",{attrs:{activities:t.previewObj.activities.additionalBuckets.fields}}),s("med-challenge",{attrs:{challenges:t.previewObj.medChallenges}}),s("resources-section",{attrs:{resources:t.previewObj.relatedResources}}),s("steering-committee-section",{attrs:{committee:t.previewObj.steeringCommittee}})],1):t._e()])],1)},i=[],c=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("9523")),n=s.n(c),r=s("2f62"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ca-section ca-section--hero",style:"background-image: url("+t.parseURL(t.realHeaderURL)+")",attrs:{id:"ca-section-1"}},[t.showHeader?a("div",{staticClass:"container"},[t.titleContainsCA?a("p",{staticClass:"above-heading"},[t._v("\n      Clinical Advances in\n    ")]):t._e(),a("h1",{domProps:{innerHTML:t._s(t.caTitle)}}),a("div",{staticClass:"hero-content cag-wrapper row justify-between"},[a("div",{staticClass:"cag-left"},[a("p",{staticClass:"cag-hero-overview js-open-modal",on:{click:function(e){t.showOverview=!0}}},[t._v("Read Overview")]),t._m(0),a("div",{staticClass:"hero-sponsor cag-hero-sponsor"},[[a("span",{staticClass:"cag-hero-indent"}),a("div",{staticClass:"hero-sponsor cag-hero-sponsor"},[t._l(t.supporter.selectSupporterAttribution.fields[1].supporters,(function(e,s){return[a("div",{key:"supp"+s,style:t.activeIndex===s?"position:absolute;top:0;left:0;":"position:absolute;top:0;left:0;display:none;"},[a("p",{staticClass:"hero-sponsor-text",staticStyle:{width:"500px"}},[a("span",[t._v(t._s(t.supporterStatement)+" ")]),a("strong",[t._v(t._s(e.name))])]),a("p",[a("q-img",{staticStyle:{height:"81px",width:"185px"},attrs:{src:t.getSrc(e.url),alt:e.name}})],1)])]}))],2)]],2)]),a("div",{staticClass:"cag-right"},[a("div",{staticClass:"cag-hero-video"},[a("video",{attrs:{controls:"",preload:"metadata",controlslist:"nodownload",poster:"https://img.medscapestatic.com/pi/cme/uat/vid-poster-image.png",width:"540px",height:"302px",src:this.videos.videoSection.fields["1"].url}})])])])]):a("div",{staticClass:"text-center q-ma-xl"},[a("h4",{staticClass:"text-white"},[t._v("Clinical Advance Info Needs to be filled out from the Edit Menu to diplay here.")])]),a("QDialog",{model:{value:t.showOverview,callback:function(e){t.showOverview=e},expression:"showOverview"}},[a("div",{staticStyle:{"border-radius":"0"}},[a("div",{staticClass:"tr-modal-title row justify-between items-center"},[a("h4",[t._v("Overview")]),a("img",{staticStyle:{width:"30px",height:"30px",cursor:"pointer"},attrs:{src:s("fbaa"),alt:"X"},on:{click:function(e){t.showOverview=!1}}})]),a("div",{staticClass:"tr-modal-content"},[a("div",{domProps:{innerHTML:t._s(t.pageDetails.clinicalAdvancesIntroduction.fields[1].text)}})])])])],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cag-hero-support"},[s("span",{staticClass:"cag-hero-indent"}),s("span",{staticClass:"cag-hero-copy"})])}],d=(s("a481"),s("24e8")),v=s("b4d7"),u={mixins:[v["a"]],name:"Header",props:["pageDetails","supporter","videos"],data:function(){return{showOverview:!1,activeIndex:0,headerURL:"https://img.medscapestatic.com/pi/cme/uat/temp-bg.png"}},methods:{getSrc:function(t){return t&&t.length?this.parseURL(t):"../../statics/noImage.png"}},computed:{supporterStatement:function(){return this.supporter.selectSupporterAttribution.fields[1].supporterStatement.length?this.supporter.selectSupporterAttribution.fields[1].supporterStatement:"Supported by independent funding from"},badgeSource:function(){return this.supporter.selectSupporterAttribution.fields[1].supporters[0].url?this.supporter.selectSupporterAttribution.fields[1].supporters[0].url:"../../statics/noImage.png"},caTitle:function(){return this.pageDetails.clinicalAdvancesTitle.fields[1].text.replace(/Clinical Advances In[ ]?/gi,"")},titleContainsCA:function(){return/Clinical Advances In/gi.test(this.pageDetails.clinicalAdvancesTitle.fields[1].text)},showHeader:function(){return""!==this.caTitle},realHeaderURL:function(){return this.headerURL.length?this.headerURL:"https://img.medscapestatic.com/pi/cme/uat/temp-bg.png"}},components:{QDialog:d["a"]},mounted:function(){var t=this;setInterval((function(){t.activeIndex<t.supporter.selectSupporterAttribution.fields[1].supporters.length-1?t.activeIndex++:t.activeIndex=0}),3e3),this.$root.$on("headerURL",(function(e){return t.headerURL=e}))},beforeDestroy:function(){this.$root.$off("headerURL")}},p=u,g=(s("d8a1"),s("5986"),s("2877")),m=Object(g["a"])(p,l,o,!1,null,"294e1e18",null),h=m.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ca-section-secondary-nav js-sticky-nav cag-nav-wrapper"},[s("nav",{staticClass:"container"},[s("ul",{staticClass:"secondary-nav cag-nav"},[s("li",[s("a",{staticClass:"current-section",attrs:{href:"/#ca-section-2"},on:{click:function(e){return e.preventDefault(),t.handler(e)}}},[t._v("CME Activities")])]),s("li",[s("a",{attrs:{href:"#ca-section-3"},on:{click:function(e){return e.preventDefault(),t.handler(e)}}},[t._v("Med Challenge")])]),s("li",[s("a",{attrs:{href:"#ca-section-4"},on:{click:function(e){return e.preventDefault(),t.handler(e)}}},[t._v("Resources")])]),s("li",[s("a",{attrs:{href:"#ca-section-5"},on:{click:function(e){return e.preventDefault(),t.handler(e)}}},[t._v("Committee")])])]),t._m(0)])])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"right-side"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:"//img.medscapestatic.com/pi/cme/uat/MedChallenge2.png",alt:"",id:"medchallenge-logo"}}),s("span",{staticClass:"play-tag",attrs:{id:"play-now-menu"}},[t._v("PLAY NOW")])])])}],_=(s("4917"),{name:"navSection",methods:{handler:function(t){var e=t.target.href;if(e){var s=e.match(/#(.*)/);this.$root.$emit("scroll",s[1])}}}}),w=_,y=(s("9439"),Object(g["a"])(w,f,C,!1,null,"1e9f6303",null)),b=y.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ca-section ca-section--medChallenge",attrs:{id:"ca-section-3"}},[s("div",{staticClass:"container"},[t._m(0),s("h2",{staticClass:"font-white"},[t._v("\n      "+t._s(this.challenges.medChallenge.fields["1"].sectionHeader)+"\n    ")]),s("p",{staticClass:"font-white med-challenge-intro-teaser"},[t._v("\n      "+t._s(this.challenges.medChallenge.fields["1"].sectionDescription)+"\n    ")]),s("ul",{staticClass:"card-list"},[t.challenges.medChallenge.fields[1].selection&&t.challenges.medChallenge.fields[1].title.length?t._l(this.challenges.medChallenge.fields,(function(e,a){return s("li",{key:a,staticClass:"med-challenge-rounded-edges"},[s("a",{attrs:{href:t.parseURL(e.url),target:"_blank"}},[s("div",{staticClass:"activityTitle med-challenge-card-title"},[s("p",{staticClass:"text-uppercase font-orange"},[s("img",{attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/icon-rapid_fire.svg",alt:""}}),s("span",{staticClass:"text-category"},[t._v(t._s(e.type))])]),s("p",{staticClass:"title"},[t._v(t._s(e.title))])]),s("div",{staticClass:"teaser"},[t._v("\n           "+t._s(e.subtitle)+"\n          ")]),t._m(1,!0)])])})):t._e(),t._l(parseInt(t.notAvail),(function(e){return s("li",{key:"na"+e,staticClass:"med-challenge-rounded-edges not-available"},[t._m(2,!0),s("div",{staticClass:"teaser text-center font-white"},[t._v("Coming Soon")]),s("div",{staticClass:"activityData"})])}))],2)])])},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",[s("img",{attrs:{src:"http://img.medscapestatic.com/pi/cme/logos/logo-MedChallenge.svg",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"activityData"},[s("span",{staticClass:"play-tag"},[t._v("Play Now")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"activityTitle"},[s("p",{staticClass:"text-uppercase "},[s("img",{staticClass:"img-center",attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/icon-locked.svg",alt:""}}),s("span",{staticClass:"text-category"},[t._v(" ")])]),s("p",{staticClass:"title font-white text-center"},[t._v(" Available ")])])}],S={name:"medChallenge",props:["challenges"],mixins:[v["a"]],computed:{notAvail:function(){return this.challenges.medChallenge.fields[1].selection&&this.challenges.medChallenge.fields[1].title.length?4-Object.keys(this.challenges.medChallenge.fields).length:4}}},x=S,O=(s("9de2"),Object(g["a"])(x,k,A,!1,null,"28aa7ef7",null)),E=O.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ca-section ca-section--activities cag-activities loading",attrs:{id:"ca-section-2"}},[t._m(0),t._l(t.activities,(function(e,a){return s("div",{key:a,staticClass:"container"},[s("div",{staticClass:"cag-activity-header"},[t._v(t._s(e.title))]),s("ul",{staticClass:"card-list"},[s("span",{staticClass:"cag-card-nav-left active off"}),t._l(e.activities,(function(e,a){return s("li",{key:a,staticClass:"active"},[s("div",{staticClass:"activityTitle"},[s("a",{staticClass:"title",attrs:{href:t.parseURL(e.url)}},[t._v(t._s(e.activityTitle))])]),t._m(1,!0),s("div",{staticClass:"teaser"},[t._v(t._s(e.teaser))]),s("div",{staticClass:"activityImage"},[s("a",{attrs:{href:t.parseURL(e.url)}},[s("img",{staticClass:"featimgVar",attrs:{src:"https://img.medscapestatic.com/thumbnail_library/842629.jpg",alt:e.teaser}})])]),t._m(2,!0)])})),s("span",{staticClass:"cag-card-nav-right active off"})],2),t._m(3,!0),s("div",{staticClass:"cag-activity-header"},[t._v("PRE-CONFERENCE")]),t._m(4,!0),s("div",{staticClass:"cag-activity-header"},[t._v("POST-CONFERENCE")]),t._m(5,!0)])}))],2)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h2",[t._v("CME Activities")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"byline"},[s("i",[t._v("Medscape Education Radiology")]),t._v(", Reviewed and Renewed May 2017")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"activityData"},[s("div",{staticClass:"credit_type_1"},[s("span",{staticClass:"credit-amount"},[t._v("1.5")]),s("span",{staticClass:"credit-type"},[t._v("CME")])]),s("div",{staticClass:"length"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h2",[t._v("Conference 360")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"card-list"},[s("li",{staticClass:"live-event active"},[s("div",{staticClass:"live-event-banner"},[s("span",{staticClass:"live-event-banner-title"},[t._v("LIVE EVENT")])]),s("div",{staticClass:"event-card-data-wrapper"},[s("div",{staticClass:"activityTitle"},[t._v("The Immunotherapies Congress")]),s("div",{staticClass:"live-date"},[t._v("August 13 - 21, 2020")]),s("div",{staticClass:"live-location"},[t._v("Boston, Massachusetts")]),s("div",{staticClass:"live-register"},[s("a",{attrs:{href:"http://www.medscape.org/viewarticle/886024"}},[t._v("REGISTER NOW")])])])]),s("li",{staticClass:"survey-card active"},[s("div",{staticClass:"survey-banner"},[s("span",{staticClass:"survey-banner-title"},[t._v("SURVEY")])]),s("div",{staticClass:"event-card-data-wrapper"},[s("div",{staticClass:"activityTitle"},[t._v("Planning to attend the Immunotherapies Congress?")]),s("div",{staticClass:"teaser"},[t._v("We want to hear from you!")]),s("div",{staticClass:"take-survey"},[s("a",{attrs:{href:"http://www.medscape.org/viewarticle/886024"}},[t._v("TAKE THE SURVEY NOW")])])])]),s("li",{staticClass:"active"},[s("div",{staticClass:"activityTitle"},[s("a",{staticClass:"title",attrs:{href:"http://www.medscape.org/viewarticle/842629"}},[t._v("Understanding GBCAs to\n            Optimize Outcomes")])]),s("div",{staticClass:"byline"},[s("i",[t._v("Medscape Education Radiology")]),t._v(", Reviewed and Renewed May 2017")]),s("div",{staticClass:"teaser"},[t._v("Read these columns for a better understanding of GBCAs, including their\n          properties, safety, and how they may be applied during MRI.")]),s("div",{staticClass:"activityImage"},[s("a",{attrs:{href:"http://www.medscape.org/viewarticle/842629"}},[s("img",{staticClass:"featimgVar",attrs:{src:"https://img.medscapestatic.com/thumbnail_library/842629.jpg","data-alt":"Understanding GBCAs to Optimize Outcomes"}})])]),s("div",{staticClass:"activityData"},[s("div",{staticClass:"credit_type_1"},[s("span",{staticClass:"credit-amount"},[t._v("1.5")]),s("span",{staticClass:"credit-type"},[t._v("CME")])]),s("div",{staticClass:"length"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"card-list"},[s("li",{staticClass:"survey-card active"},[s("div",{staticClass:"survey-banner"},[s("span",{staticClass:"survey-banner-title"},[t._v("SURVEY")])]),s("div",{staticClass:"event-card-data-wrapper"},[s("div",{staticClass:"activityTitle"},[t._v("Did you attend the Immunotherapies Congress?")]),s("div",{staticClass:"teaser"},[t._v("We want to hear from you!")]),s("div",{staticClass:"take-survey"},[s("a",{attrs:{href:"http://www.medscape.org/viewarticle/886024"}},[t._v("TAKE THE SURVEY NOW")])])])]),s("li",{staticClass:"active"},[s("div",{staticClass:"activityTitle"},[s("a",{staticClass:"title",attrs:{href:"http://www.medscape.org/viewarticle/842629"}},[t._v("Understanding GBCAs to\n            Optimize Outcomes")])]),s("div",{staticClass:"byline"},[s("i",[t._v("Medscape Education Radiology")]),t._v(", Reviewed and Renewed May 2017")]),s("div",{staticClass:"teaser"},[t._v("Read these columns for a better understanding of GBCAs, including their\n          properties, safety, and how they may be applied during MRI.")]),s("div",{staticClass:"activityImage"},[s("a",{attrs:{href:"http://www.medscape.org/viewarticle/842629"}},[s("img",{staticClass:"featimgVar",attrs:{src:"https://img.medscapestatic.com/thumbnail_library/842629.jpg","data-alt":"Understanding GBCAs to Optimize Outcomes"}})])]),s("div",{staticClass:"activityData"},[s("div",{staticClass:"credit_type_1"},[s("span",{staticClass:"credit-amount"},[t._v("1.5")]),s("span",{staticClass:"credit-type"},[t._v("CME")])]),s("div",{staticClass:"length"})])]),s("li",{staticClass:"coming-soon-card active"},[s("div",{staticClass:"coming-soon-banner"}),s("div",{staticClass:"event-card-data-wrapper"},[s("div",{staticClass:"activityTitle"},[t._v("Coming Soon")]),s("div",{staticClass:"teaser"},[t._v("Join pharmacy experts in a discussion of emerging treatment options and\n            pain management of patients with melanoma.")])])])])}],D={name:"CmeActivities",props:["activities"],mixins:[v["a"]]},I=D,L=(s("0435"),Object(g["a"])(I,R,j,!1,null,"32a2e55f",null)),U=L.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ca-section ca-section--resources cag-resources",staticStyle:{"background-color":"#ecf0f0"},attrs:{id:"ca-section-4"}},[s("section",[t._m(0),s("div",{staticClass:"container"},[s("div",{staticClass:"cag-resources-wrapper"},[s("div",{staticClass:"cag-resources-card"},[s("div",{staticClass:"cag-resources-card-top cag-resources-card-top-1"}),s("div",{staticClass:"cag-resources-card-content"},[s("div",{staticClass:"cag-content-title"},[t._v("Downloadable Slide Kit")]),t._l(this.resources.slideKits.fields,(function(e,a){return s("ul",{key:a,staticClass:"cag-content-lists"},[s("li",{staticClass:"cag-dl"},[s("a",{attrs:{href:t.parseURL(e.url)}},[t._v(" "+t._s(e.title)+" "),s("img",{attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/cag-dl.png"}})])])])}))],2)]),s("div",{staticClass:"cag-resources-card"},[s("div",{staticClass:"cag-resources-card-top cag-resources-card-top-2"}),s("div",{staticClass:"cag-resources-card-content"},[s("div",{staticClass:"cag-content-title"},[t._v("Clinical Articles")]),t._l(this.resources.clinicalReferenceArticles.fields,(function(e,a){return s("ul",{key:a,staticClass:"cag-content-lists"},[s("li",{staticClass:"cag-link"},[t._v("\n                  "+t._s(e.title)+"\n                  "),s("a",{staticClass:"offsite resource-link js-link-read-article",attrs:{target:"_blank",href:" https://dx.doi.org/"+e.url}},[t._v("  "),s("img",{attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/cag-link.png"}})])])])}))],2)]),s("div",{staticClass:"cag-resources-card"},[s("div",{staticClass:"cag-resources-card-top cag-resources-card-top-5"}),s("div",{staticClass:"cag-resources-card-content"},[s("div",{staticClass:"cag-content-title"},[t._v("Related Links")]),t._l(this.resources.relatedLinks.fields,(function(e,a){return s("ul",{key:a,staticClass:"cag-content-lists"},[s("li",{staticClass:"cag-link"},[t._v("\n                "+t._s(e.title)+"\n                "),s("a",{staticClass:"offsite resource-link js-link-read-article",attrs:{target:"_blank",href:t.parseURL(e.url)}},[t._v("  "),s("img",{attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/cag-link.png"}})])])])}))],2)]),t.resources.customSections&&t.resources.customSections.fields[1].title.length?t._l(t.resources.customSections.fields,(function(e,a){return s("div",{key:"cusSec"+a,staticClass:"cag-resources-card"},[s("div",{staticClass:"cag-resources-card-top cag-resources-card-top-5"}),s("div",{staticClass:"cag-resources-card-content"},[s("div",{staticClass:"cag-content-title"},[t._v(t._s(e.title))]),t._l(e.links,(function(e,a){return s("ul",{key:"csLink"+a,staticClass:"cag-content-lists"},[s("li",{staticClass:"cag-link"},[s("a",{staticClass:"offsite resource-link js-link-read-article",attrs:{target:"_blank",href:t.parseURL(e.url)}},[t._v("\n                      \n                    "+t._s(e.linkTitle)+"\n                    "),s("img",{attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/cag-link.png"}})])]),e.linkTeaser&&e.linkTeaser.length?s("li",[t._v("\n                  "+t._s(e.linkTeaser)+"\n                ")]):t._e()])}))],2)])})):t._e()],2)])])])},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"section-title"},[s("h2",[t._v("Resources")])])])}],P={name:"resources",props:["resources"],mixins:[v["a"]]},N=P,M=(s("b9e6"),Object(g["a"])(N,T,$,!1,null,"18f802ce",null)),q=M.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ca-section ca-section--committee cag-committee",staticStyle:{"background-color":"#ecf0f0"},attrs:{id:"ca-section-5"}},[""!==this.committee.contributor.fields["1"].name?a("div",{staticClass:"container"},[a("div",{staticClass:"section-title"},[a("span",{staticClass:"cag-flex-placeholder"}),a("h2",[t._v("Steering Committee")]),a("button",{staticClass:"js-open-modal",on:{click:function(e){t.showDisclosures=!0}}},[t._v("\n        Disclosures\n      ")])]),t._l(this.committee.contributor.fields,(function(e,s){return a("div",{key:s,staticClass:"committee-members-wrapper"},[a("div",{staticClass:"committee-member",class:t.active.includes(s)?"active":""},[a("div",{staticClass:"cag-member-avatar"},[e.headshot?a("q-img",{staticClass:"q-my-md",staticStyle:{height:"275px",width:"271px"},attrs:{src:t.parseURL(e.headshot)},scopedSlots:t._u([{key:"error",fn:function(){return[a("div",{staticClass:"absolute-full flex flex-center"},[t._v("Cannot load image")])]},proxy:!0}],null,!0)}):t._e()],1),a("div",{staticClass:"cag-person-info"},[a("img",{staticClass:"cag-committee-expand-button",attrs:{src:"http://img.medscapestatic.com/pi/cme/advances/icons/committee-up-btn.png"},on:{click:function(e){return t.toggleActive(s)}}}),a("h5",{staticClass:"cag-person-name"},[t._v(t._s(e.name))]),a("p",{staticClass:"cag-person-title"},[t._v(t._s(e.contributorGroup))]),a("p",{staticClass:"cag-person-details",domProps:{innerHTML:t._s(e.affiliations)}}),t._m(0,!0)])])])}))],2):a("div",{staticClass:"text-center q-ma-xl"},[a("h4",[t._v("Steering Committee Info Needs to be filled out from the Edit Menu to diplay here.")])]),a("QDialog",{model:{value:t.showDisclosures,callback:function(e){t.showDisclosures=e},expression:"showDisclosures"}},[a("div",{staticStyle:{"border-radius":"0"}},[a("div",{staticClass:"tr-modal-title row justify-between items-center"},[a("h4",[t._v("Disclosures")]),a("img",{staticStyle:{width:"30px",height:"30px",cursor:"pointer"},attrs:{src:s("fbaa"),alt:"X"},on:{click:function(e){t.showDisclosures=!1}}})]),a("div",{staticClass:"tr-modal-content"},[a("h3",[t._v("Steering Committee")]),t._l(t.committee.contributor.fields,(function(e,s){return a("div",{key:s,staticClass:"disclosures-person"},[a("div",{staticClass:"row justify-start items-center"},[a("div",{staticStyle:{width:"40px",height:"40px","border-radius":"100%","background-color":"grey","margin-right":"10px"}}),a("div",[a("div",{staticClass:"tr-discosure-person-name"},[t._v(t._s(e.name))]),a("div",{staticStyle:{"font-size":"16px"}},[t._v(t._s(e.contributorGroup))])])]),a("div",{staticClass:"q-my-md",staticStyle:{"font-size":"13px"}},[t.hasNoDisclosures(e)?[a("div",{staticClass:"text-bold"},[t._v("Has disclosed no relevant financial relationships.")])]:[a("div",{staticClass:"text-bold text-body2"},[t._v("\n                Has disclosed the following relevant financial relationships:\n              ")]),e.advisorConsultant&&e.advisorConsultant.length?a("div",[a("span",[t._v("Served as an advisor or consultant for: ")]),a("span",[t._v(t._s(e.advisorConsultant))])]):t._e(),e.speaker&&e.speaker.length?a("div",[a("span",[t._v("Served as a speaker or member of a speakers bureau for: ")]),a("span",[t._v(t._s(e.speaker))])]):t._e(),e.grants&&e.grants.length?a("div",[a("span",[t._v("Received grants for clinical research from: ")]),a("span",[t._v(t._s(e.grants))])]):t._e(),e.ownsStock&&e.ownsStock.length?a("div",[a("span",[t._v("Received grants for clinical research from: ")]),a("span",[t._v(t._s(e.ownsStock))])]):t._e(),e.other&&e.other.length?a("div",[a("span",[t._v(t._s(e.other))])]):t._e()]],2)])}))],2)])])],1)},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cag-person-links"},[s("span",{staticClass:"cag-bio-vid-button"},[t._v("Bio Video")]),s("span",{staticClass:"social-link linkedin-social-link",attrs:{"data-src":"http://www.linkedin.com"}},[t._v("LinkedIn")]),s("span",{staticClass:"social-link twitter-social-link",attrs:{"data-src":"http://www.twitter.com"}},[t._v("Twitter")])])}],V={mixins:[v["a"]],name:"steeringCommittee",props:["committee"],components:{QDialog:d["a"]},data:function(){return{showDisclosures:!1,active:[]}},methods:{toggleActive:function(t){console.log("key: ",t);var e=this.active.indexOf(t);e>-1?this.active.splice(e,1):this.active.push(t)},hasNoDisclosures:function(t){return(!t.advisorConsultant||!t.advisorConsultant.length)&&(!t.speaker||!t.speaker.length)&&(!t.grants||!t.grants.length)&&(!t.ownsStock||!t.ownsStock.length)&&(!t.other||!t.other.length)}}},B=V,G=(s("581c"),Object(g["a"])(B,H,Q,!1,null,"5624f2c8",null)),Y=G.exports;function F(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function K(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?F(Object(s),!0).forEach((function(e){n()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):F(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var J={name:"CAPreview",data:function(){return{}},components:{"header-section":h,"nav-section":b,"med-challenge":E,"cme-activities":U,"resources-section":q,"steering-committee-section":Y},computed:K(K({},Object(r["c"])("tickets",["getProjects","getWorkingProject"])),{},{previewObj:{get:function(){if(this.getProjects&&Object.keys(this.getProjects).length){if(this.$route.query.projectId&&this.$route.query.projectId.length){var t=this.getProjects[this.$route.query.projectId].activeTicket;return this.getProjects[this.$route.query.projectId].tickets[t]}return null}},set:function(t){return t}}}),mounted:function(){var t=this;this.$root.$on("scroll",(function(e){var s=document.querySelector("#".concat(e));s=s.offsetTop,t.$refs.caScroll.setScrollPosition(s)}))},beforeDestroy:function(){this.$root.$off("scroll")}},W=J,X=Object(g["a"])(W,a,i,!1,null,"510c731b",null);e["default"]=X.exports},fbaa:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAQAAACQ9RH5AAAAAXNSR0IArs4c6QAAAQtJREFUeNrFmdkNhDAMRNMEW8P2XwsSLWwXXoVlJSKuHPY8vuAj8ySUOONxSsneNiXhY5PNNmfsx2YdesVaBr9+Lxr0H7vSig8dNsnQp5R49CUhFn2rHod+VI5BV6n6o6sVfdFNan7oZiUfdJfKOLpbYQw9tLp/8fD/6hNw2SHtIm5nok3ItQrUi7nXvTrBkEr/LBp2t90Lh97m1+Lh/uUcIHFsR4jMo5YgnTUuYFLsDr3YIsVu6AzNcGnDR4GhXw1tLug4QQUEKpnQJQFdi5ARgKwPZPYgewsZeqiFgZo2qE2FGnMoioDCFyhuggI2KFKEQlQoNoaCcmg0AA1DtB3fjiYfeG1zrkSN+L7fAoDg2vid9AAAAABJRU5ErkJggg=="},fe64:function(t,e,s){}}]);