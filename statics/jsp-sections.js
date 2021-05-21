const _ = require('lodash')
const generateJSP = require('./jsp-generator.js')
export default (ticket,  options = {geoTarget: 'US'}) => {
    return {
        ticket,
        get title() {
            let title = _.get(ticket, ['clinicalAdvancesPageDetails', 'clinicalAdvancesTitle', 'fields', '1', 'text'], 'INVALID TITLE')
            if(title === null || title === ''){
                return 'NO TITLE'
            }else{
                return title.replace(/Clinical Advances In\s?/i, '')
            }
        },
        get originalTitle() {
            let title = _.get(ticket, ['clinicalAdvancesPageDetails', 'clinicalAdvancesTitle', 'fields', '1', 'text'], 'INVALID TITLE')
            if(title === null || title === ''){
                return 'NO TITLE'
            }else{
                return title
            }
        },
        get hasCAInTitle() {
            let title = _.get(ticket, ['clinicalAdvancesPageDetails', 'clinicalAdvancesTitle', 'fields', '1', 'text'], 'INVALID TITLE')
            return /Clinical Advances In\s?/i.test(title)
        },
        get titlePlainText() {
            let title = document.createElement('div')
            title.innerHTML = this.originalTitle
            return title.textContent
        },
        get bucketIDList() {
            let activities = _.get(ticket, ['activities', 'additionalBuckets', 'fields'], {})
            return Object.values(activities)
                .reduce((prev, curr)=> {
                    prev.push(curr.bucketID)
                    return prev
                }, [])
                .join(',')
        },
        get firstBucketID() {
            let activities = _.get(ticket, ['activities', 'additionalBuckets', 'fields'], {})
            return activities[Object.keys(activities)[0]].bucketID
        },
        get introduction() {
            let introduction = _.get(ticket, ['clinicalAdvancesPageDetails', 'clinicalAdvancesIntroduction', 'fields', '1', 'text'], 'INVALID INTRODUCTION')
            if(introduction === null || introduction === ''){
                return 'NO TITLE'
            }else{
                return introduction
            }
        },
        get teaser() {
            let teaser = _.get(ticket, ['clinicalAdvancesPageDetails', 'clinicalAdvancesTeaser', 'fields', '1', 'text'], 'INVALID TEASER')
            if(teaser === null || teaser === ''){
                return 'NO TEASER'
            }else{
                return teaser
            }
        },
        get url() {
            let url = _.get(ticket, ['clinicalAdvancesPageDetails', 'clinicalAdvancesURL', 'fields', '1', 'url'], '')
            if(!url) {
                return 'NO URL'
            }else{
                return `https://www.medscape.org/sites/advances/${url}`
            }
        },
        get supporterStatement() {
            let statement = _.get(ticket, ['generalInformation', 'selectSupporterAttribution', 'fields', '1', 'supporterStatement'], 'Supported by an independent educational grant from')
            if(!statement.length){
                statement = 'Supported by an independent educational grant from'
            }
            return statement
        },
        get supporter() {
            let supporter = _.get(ticket, ['generalInformation', 'selectSupporterAttribution', 'fields', '1', 'supporters'], [{name: 'REPLACE SUPPORTER'}])
            if(!supporter.length) {
                supporter = [{name: 'REPLACE SUPPORTER'}]
            }
            return supporter[0].name
        },
        get supporters() {
            let supporters = _.get(ticket, ['generalInformation', 'selectSupporterAttribution', 'fields', '1', 'supporters'], [{name: 'REPLACE SUPPORTER'}])
            if(!supporters.length) {
                supporters = [{name: 'REPLACE SUPPORTER'}]
            }
            let html = ''
            supporters.forEach(supporter => {
                html += `<p class="hero-sponsor-text">${this.supporterStatement} <strong>${supporter.name}</strong></p>`
            })
            return html
        },
        get bucketComment() {
            let buckets = _.get(ticket, ['activities', 'additionalBuckets', 'fields'], {})
            let comment = ''
            Object.values(buckets).forEach(field => {
                comment += `${field.bucketID && field.bucketID.length ? field.bucketID: '####'}: ${field.title && field.title.length ? field.title : 'TITLE'}, BucketID="#####", RenderingID="#####"\n`
            })
            return comment
        },
        get activitiesList() {
            const buckets = _.get(ticket, ['activities', 'additionalBuckets', 'fields'], {})
            const thumbnails = _.get(ticket, ['onlineProduction', 'thumbnailURL', 'fields', '1'], {})
            let thumbnail, html = ''
            const getThumbnail = (key, url) => {
                if(thumbnails.hasOwnProperty(key) && thumbnails[key].length){
                    return this.urlPrefix(thumbnails[key])
                }else {
                    if(url && url.length) {
                        let activityID = url.match(/[0-9]+$/) 
                        if(activityID && activityID.length) {
                            return `//img.medscapestatic.com/thumbnail_library/${activityID}.jpg`
                        }else{
                            return 'https://img.medscapestatic.com/thumbnail_library/842629.jpg'
                        }
                    }else{
                        return 'https://img.medscapestatic.com/thumbnail_library/842629.jpg'
                    }
                }
            }
            Object.values(buckets).forEach(field => {
                html += `
                <div class="cag-activity-header">${field.title && field.title.length ? field.title : 'TITLE'}</div>
                <ul class="card-list">
                <bucketgen:include-bucket-cf bucketId="12190" renderingId="19607"/>

                `
                Object.keys(field.activities).forEach(key => {
                    thumbnail = getThumbnail(key)
                    let item = field.activities[key]
                    html += `
                        <li>
                            <div class="activityTitle"> 
                                <a href="${this.urlPrefix(item.url)}" class="title">${item.activityTitle}</a>
                            </div> 
                            <div class="byline"><i>Medscape Education Radiology</i>, Reviewed and Renewed May 2017</div> 
                            <div class="teaser">${item.teaser}</div>
                            <div class="activityImage">
                                <a href="${this.urlPrefix(item.url)}">        
                                <span data-src="${getThumbnail(key, item.url)}" data-alt="${item.activityTitle}" class="featimgVar"></span></a>
                            </div>
                            <div class="activityData">
                                <div class="credit_type_1"><span class="credit-amount">1.5</span> <span class="credit-type">CME</span></div>
                                <div class="length"> </div>
                            </div>
                        </li>
                    `
                })
                html += `</ul>`
            })
            return html
        },
        get hasPoll() {
            let questions = _.get(ticket, ['pollingQuestions', 'question', 'fields'])
            let questionKeys = Object.keys(questions)
            return questionKeys.length > 0 && questions[questionKeys[0]].question && questions[questionKeys[0]].question.length
        },
        get hasMedChallenge() {
            return _.get(ticket, ['medChallenges', 'medChallenge', 'fields', '1', 'selection'], false)
        },
        get activitiesNav() {
            let nav = `
            <ul class="secondary-nav cag-nav">
					
			<li><a href="#ca-section-2">CME Activities</a></li>
            `
            if(this.hasPoll) {
                nav += `
                    <li><a href="#ca-section-6">Poll</a></li>
                `
            }
            nav += `
                <li><a href="#ca-section-4">Resources</a></li>
                <li><a href="#ca-section-5">Committee</a></li>

                </ul>
            `
            if(this.hasMedChallenge) {
                nav += `
                    <div class="right-side">
                        <a href="#ca-section-3">
                            <img src="//img.medscapestatic.com/pi/cme/uat/MedChallenge2.png" alt="" id="medchallenge-logo">
                                <span id="play-now-menu" class="play-tag">PLAY NOW</span>
                        </a>
					</div>
                `
            }
            return nav
        },
        get slideKits() {
            let slideKits = _.get(ticket, ['relatedResources', 'slideKits', 'fields'], {})
            let output = ''
            let slideKeys = Object.keys(slideKits)
            if(slideKeys.length > 1 || slideKits[1].download && slideKits[1].download.length > 0){
                output += `
                    <div class="cag-resources-card">
                        <div class="cag-resources-card-top cag-resources-card-top-1"></div>
                        <div class="cag-resources-card-content">
                        <div class="cag-content-title">Downloadable Slide Kit</div>
                        <ul class="cag-content-lists">
                `
                slideKeys.forEach(key => {
                    output += this.slideKitSnippet(key)
                })
                output += `
                            </ul>
                        </div>
                    </div> <!-- end card -->
                `
            }
            return output
        },
        get referenceArticles() {
            let articles = _.get(ticket, ['relatedResources', 'clinicalReferenceArticles', 'fields'], {})
            let output = ''
            let articleKeys = Object.keys(articles)
            if(articleKeys.length){
                output += `
                    <div class="cag-resources-card">
                    <div class="cag-resources-card-top cag-resources-card-top-2"></div>
                    <div class="cag-resources-card-content">
                        <div class="cag-content-title">Clinical Articles</div>
                        <ul class="cag-content-lists">
                `
            }
            articleKeys.forEach(key => {
                output += this.referenceSnippet(key)
            })
            if(articleKeys.length){
                output += `
                            </ul>
                        </div>
                    </div> <!-- end card -->
                `
            }
            return output
        },
        get relatedLinks() {
            let links = _.get(ticket, ['relatedResources', 'relatedLinks', 'fields'], {})
            let output = ''
            let linkKeys = Object.keys(links)
            if(linkKeys.length){
                output += `
                    <div class="cag-resources-card">
                    <div class="cag-resources-card-top cag-resources-card-top-5"></div>
                    <div class="cag-resources-card-content">
                        <div class="cag-content-title">Related Links</div>
                        <ul class="cag-content-lists">
                `
            }
            linkKeys.forEach(key => {
                output += this.linkSnippet(key)
            })
            if(linkKeys.length){
                output += `
                            </ul>
                        </div>
                    </div> <!-- end card -->
                `
            }
            return output
        },
        get medChallenges() {
            let medChallenges = _.get(ticket, ['medChallenges', 'medChallenge', 'fields'], {})
            let output = ''
            let medChallengeKeys = Object.keys(medChallenges)
            medChallengeKeys.forEach(key => {
                output += this.medChallengeSnippet(key)
            })
            if(medChallengeKeys.length < 4){
                for(let i = medChallengeKeys.length + 1; i <= 4; i++){
                    let numbers = ['first', 'second', 'third', 'fourth']
                    output += `
                        <!-- ${numbers[i - 1]} box -->
                        <li class="med-challenge-rounded-edges not-available">
                            
                            <div class="activityTitle"> 
                                <p class="text-uppercase ">  <img src="https://img.medscapestatic.com/pi/cme/advances/icons/icon-locked.svg" class="img-center" alt=""><span class="text-category">&nbsp;</span></p>
                            <p class="title font-white text-center"> Available </p>
                            </div>
                            <div class="teaser text-center font-white">Coming Soon</div>
                            
                                <div class="activityData">
                            <!-- <span class="play-tag" id="play-now-card">&nbsp;</span> -->
                            </div>
                            </li>
                                
                    `
                }
            }
            return output
        },
        get medChallengeHeader() {
            return _.get(ticket, ['medChallenges', 'medChallenge', 'fields', '1', 'sectionHeader'], 'Medchallenge Section Header')
        },
        get medChallengeDescription() {
            return _.get(ticket, ['medChallenges', 'medChallenge', 'fields', '1', 'sectionDescription'], 'Medchallenge Section Description')
        },
        get contributors() {
            let contributors = _.get(ticket, ['steeringCommittee', 'contributor', 'fields'], {})
            let output = ''
            let headshotURL, bioVideo
            let contributorKeys = Object.keys(contributors)
            // let affiliation
            function remove_tags(html) {
                return html
                .replace(/<[^>]+>/g, '<br>')
                .replace(/(<br>){2,}/g, '<br>')
                .replace(/^<br[/]?>/, '')
                .replace(/<br>$/, '')
            }
            contributorKeys.forEach(key => {
                headshotURL = this.getHeadshots(key)
                bioVideo = this.getBioVideo(key)
                let contributor = Object.assign({
                    name: '',
                    contributorGroup: '',
                    affiliations: ''
                }, contributors[key])
                output += `
                    <div class="committee-member">

                            <div class="cag-member-avatar">
                                <img src="${headshotURL}" alt="${contributor.name}">
                            </div>
                        
                            <div class="cag-person-info">
                                <img class="cag-committee-expand-button" src="//img.medscapestatic.com/pi/cme/advances/icons/committee-up-btn.png" /> 
                                <h5 class="cag-person-name">${contributor.name}</h5>
                                <p class="cag-person-title">${contributor.contributorGroup}</p>
                                <p class="cag-person-details">${remove_tags(contributor.affiliations)}<p>
                                <div class="cag-person-links">
                                    <span class="cag-bio-vid-button">Bio Video</span>
                                    <span class="social-link twitter-social-link" data-src="http://www.twitter.com">Twitter</span>
                                </div>
                            </div>


                            <div class="bio-vid">
                                <video 
                                    class="committee-bio-video" controls="" 
                                    preload="metadata" 
                                    controlslist="nodownload" 
                                    data-poster="${bioVideo.posterURL}" 
                                    data-source="${bioVideo.videoURL}">
                                </video>
                            </div>
                            
                    </div>


                `
            })
            return output
        },
        get disclosures() {
            let contributors = _.get(ticket, ['steeringCommittee', 'contributor', 'fields'], {})
            let output = ''
            Object.keys(contributors).forEach(key => {
                let contributor = contributors[key]
                let statement = '<p>Has disclosed no relevant financial relationships.</p>'
                let statements = {
                    advisorConsultant: 'Served as an advisor or consultant for:',
                    speaker: 'Served as a speaker or a member of a speakers bureau for:',
                    grants: "Received grants for clinical research from:",
                    ownsStock: "Owns stock, stock options, or bonds from:",
                    royalties: "Royalties or patient beneficiary:",
                    employed: "Formerly employed by an ineligible company:",
                    ownership: "Ownership of an ineligible company:",
                    other: "Other:"
                }
                let parsedDisclosures = Object.keys(statements).reduce((acc, key) => {
                    if(Object.keys(contributor).includes(key) && contributor[key].length){
                        acc += `<p>${statements[key]} ${Array.isArray(contributor[key]) ? contributor[key].join('; ') : contributor[key]}</p>\n`
                    }
                    return acc
                }, '')
                if(parsedDisclosures.length) {
                    statement = `<p>Has disclosed the following relevant financial relationships:</p>`
                }
                output += `
                    <div class="disclosures-person">
                        <div class="disclosures-person-header">
                            <div class="disclosures-person-avatar">
                                <img src="${this.getHeadshots(key)}" alt="${contributor.name}">
                            </div>
                            <div class="disclosures-person-info">
                                <h5 class="disclosures-person-name">${contributor.name}</h5>
                                <p class="disclosures-person-title">${contributor.contributorGroup}</p>
                            </div>
                        </div>

                        <div class="disclosures-person-content">
                            ${statement}
                            ${parsedDisclosures}


                        </div>
                    </div>




                `
            })
            return output

        },
        get qnaID() {
            let qna = _.get(ticket, ['onlineProduction', 'qnaID', 'fields', '1', 'text'], 'REPLACE')
            return qna.length ? qna : 'REPLACE'
        },
        get bannerURL() {
            let url = _.get(ticket, ['onlineProduction', 'bannerURL', 'fields', '1', 'url'], 'https://img.medscapestatic.com/pi/cme/uat/temp-bg.png')
            return url.length ? url : 'https://img.medscapestatic.com/pi/cme/uat/temp-bg.png'
        },
        get videoPreviewImg() {
            let img = _.get(ticket, ['onlineProduction', 'videoInfo', 'fields', '1', 'img'], 'https://img.medscapestatic.com/pi/cme/uat/vid-poster-image.png')
            return img.length ? img : 'https://img.medscapestatic.com/pi/cme/uat/vid-poster-image.png'
        },
        get videoSrc() {
            let url = _.get(ticket, ['onlineProduction', 'videoInfo', 'fields', '1', 'src'], 'http://webmd-a.akamaihd.net/delivery/delivery/aws/52/42/524280c1-234c-3680-a4cd-c7641c10b301/pated-intro-2020_1000k.mp4')
            return url.length ? url : 'http://webmd-a.akamaihd.net/delivery/delivery/aws/52/42/524280c1-234c-3680-a4cd-c7641c10b301/pated-intro-2020_1000k.mp4'
        },
        medChallengeSnippet: function(key) {
            let medChallenge, output = ''
            if(key == 'empty'){
                medChallenge = {
                    type: 'all',
                    title: 'REPLACE_TITLE',
                    subtitle: 'REPLACE_SUBTITLE',
                    url: 'REPLACE_URL'
                }
            }else{
                medChallenge = _.get(ticket, ['medChallenges', 'medChallenge','fields', key], {})
            }
            let typeSection = ''
            switch(medChallenge.type) {
                case 'Case Review':
                    typeSection = `<p class="text-uppercase font-blue">  <img src="//<medscape:domain type='imageServer'/>/pi/cme/advances/icons/icon-case_review.svg" alt=""><span class="text-category">Case Review</span></p>`
                    break
                case 'Rapid Type':
                    typeSection = `<p class="text-uppercase font-orange">  <img src="https://img.medscapestatic.com/pi/cme/advances/icons/icon-rapid_fire.svg" alt=""><span class="text-category">Rapid Fire</span></p>`
                    break
                case 'Image Review':
                    typeSection = `<p class="text-uppercase font-blue">  <img src="https://img.medscapestatic.com/pi/cme/advances/icons/icon-image_review.svg" alt=""><span class="text-category">Image Review</span></p>`
                    break
                default:
                    typeSection = `
                        <%-- CHOOSE 1: --%>
                        <%-- CASE REVIEW: 
                        <p class="text-uppercase font-blue">  <img src="//<medscape:domain type='imageServer'/>/pi/cme/advances/icons/icon-case_review.svg" alt=""><span class="text-category">Case Review</span></p>
                            /CASE REVIEW --%>

                        <%-- RAPID FIRE: 
                        <p class="text-uppercase font-orange">  <img src="https://img.medscapestatic.com/pi/cme/advances/icons/icon-rapid_fire.svg" alt=""><span class="text-category">Rapid Fire</span></p>
                            /RAPID FIRE --%>
                        
                        <%-- IMAGE REVIEW: 
                        <p class="text-uppercase font-blue">  <img src="https://img.medscapestatic.com/pi/cme/advances/icons/icon-image_review.svg" alt=""><span class="text-category">Image Review</span></p>
                            /IMAGE REVIEW --%>
                    `
                    break
            }
            output = `
                <li class="med-challenge-rounded-edges">
                    <a href="${this.urlPrefix(medChallenge.url)}" target="_blank">  
                    <div class="activityTitle med-challenge-card-title"> 
                        ${typeSection}
                        <p class="title">${medChallenge.title}</p>
                    </div>
                    <div class="teaser">${medChallenge.subtitle}</div>
                    <div class="activityData">
                            <span class="play-tag">Play Now</span>
                    </div>
                    </a>
                </li>
            `
            return output
        },
        getHeadshots: function(key) {
            let headshotURL = _.get(ticket, ['onlineProduction', 'facultyResources', 'fields', '1', 'faculty', key, 'img'], '//img.medscapestatic.com/person/REPLACE.jpg')
            if(!headshotURL.length) {
                headshotURL = '//img.medscapestatic.com/person/REPLACE.jpg'
            }
            return headshotURL.replace(/^https?:/, '')
        },
        getBioVideo: function(key) {
            let videoURL = _.get(ticket, ['onlineProduction', 'facultyResources', 'fields', '1', 'faculty', key, 'videoURL'], 'http://webmd-a.akamaihd.net/delivery/delivery/6c/ed/6ced42a3-34df-491e-befe-8e51a61991be/894089_4v2_1000k.mp4')
            if(!videoURL.length) {
                videoURL = 'http://webmd-a.akamaihd.net/delivery/delivery/6c/ed/6ced42a3-34df-491e-befe-8e51a61991be/894089_4v2_1000k.mp4'
            }
            let posterURL = _.get(ticket, ['onlineProduction', 'facultyResources', 'fields', '1', 'faculty', key, 'videoImg'], 'https://img.medscapestatic.com/thumbnail_library/mobile_start/org/2018/894089_4_start.png')
            if(!posterURL.length) {
                posterURL = 'http://webmd-a.akamaihd.net/delivery/delivery/6c/ed/6ced42a3-34df-491e-befe-8e51a61991be/894089_4v2_1000k.mp4'
            }
            return {
                videoURL,
                posterURL
            }
        },
        slideKitSnippet: function(key) {
            let slide, output = '', title = 'REPLACE_TITLE', download = 'REPLACE_URL'
            if(key == 'empty'){
                output += `
                <div class="cag-resources-card">
                    <div class="cag-resources-card-top cag-resources-card-top-1"></div>
                    <div class="cag-resources-card-content">
                    <div class="cag-content-title">Downloadable Slide Kit</div>
                    <ul class="cag-content-lists">
                `
                slide = {
                    title,
                    teaser: '',
                    download
                }
            }else{
                slide = _.get(ticket, ['relatedResources', 'slideKits','fields', key], {})
            }
            output += `
                <li class="cag-dl">
                    <a href="${slide.download && slide.download.length ? slide.download : download}">${slide.title && slide.title.length ? slide.title : title}</a>
                    ${slide.teaser && slide.teaser.length ? `<p>${slide.teaser}</p>` : ''}
                </li>
            `
            if(key == 'empty'){
                output += `
                            </ul>
                        </div>
                    </div> <!-- end card -->
                `
            }
            return output
        },
        referenceSnippet: function(key) {
            let article, output = ''
            if(key == 'empty'){
                output += `
                <div class="cag-resources-card">
                <div class="cag-resources-card-top cag-resources-card-top-2"></div>
                <div class="cag-resources-card-content">
                    <div class="cag-content-title">Clinical Articles</div>
                    <ul class="cag-content-lists">
            `
                article = {
                    title: 'REPLACE_TITLE',
                    url: 'REPLACE_URL'
                }
            }else{
                article = _.get(ticket, ['relatedResources', 'clinicalReferenceArticles','fields', key], {})
            }
            output += `
                <li class="cag-link"><a href="/px/trk.svr/adv-${this.url}?exturl=https://dx.doi.org/${article.url}">${article.title}</a></li>
            `
            if(key == 'empty'){
                output += `
                            </ul>
                        </div>
                    </div> <!-- end card -->
                `
            }
            return output
        },
        linkSnippet: function(key) {
            let link, output = ''
            if(key == 'empty'){
                output += `
                    <div class="cag-resources-card">
                    <div class="cag-resources-card-top cag-resources-card-top-5"></div>
                    <div class="cag-resources-card-content">
                        <div class="cag-content-title">Related Links</div>
                        <ul class="cag-content-lists">
                `
                link = {
                    title: 'REPLACE_TITLE',
                    url: 'REPLACE_URL'
                }
            }else{
                link = _.get(ticket, ['relatedResources', 'relatedLinks','fields', key], {})
            }
            output += `
                <li class="cag-link"><a href="/px/trk.svr/adv-${this.url}?exturl=${this.urlPrefix(link.url)}">${link.title}</a></li>
            `
            if(key == 'empty'){
                output += `
                            </ul>
                        </div>
                    </div> <!-- end card -->
                `
            }
            return output
        },
        urlPrefix: (url) => {
            if(!/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(url)){
                return 'REPLACE URL: ' + url
            }else if (!/^(https?:)?\/\//i.test(url)) {
                return '//' + url
            }
            return url
        },
        output: () => {
            return generateJSP(this)
        }
    }
}

// module.exports = generators