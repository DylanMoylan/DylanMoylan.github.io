const _ = require('lodash')
const generateJSP = require('./jsp-generator.js')
export default (ticket) => {
    return {
        ticket,
        get title() {
            let title = _.get(ticket, ['clinicalAdvancesPageDetails', 'clinicalAdvancesTitle', 'fields', '1', 'text'], 'INVALID TITLE')
            if(title === null || title === ''){
                return 'NO TITLE'
            }else{
                return title
            }
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
        get bucketComment() {
            let buckets = _.get(ticket, ['activities', 'additionalBuckets', 'fields'], {})
            let comment = ''
            Object.values(buckets).forEach(field => {
                comment += `${field.bucketID && field.bucketID.length ? field.bucketID: '####'}: ${field.title && field.title.length ? field.title : 'TITLE'}, BucketID="#####", RenderingID="#####"\n`
            })
            return comment
        },
        get activitiesList() {
            let buckets = _.get(ticket, ['activities', 'additionalBuckets', 'fields'], {})
            let html = ''
            Object.values(buckets).forEach(field => {
                html += `
                <div class="cag-activity-header">${field.title && field.title.length ? field.title : 'TITLE'}</div>
                <ul class="card-list">
                <bucketgen:include-bucket-cf bucketId="12190" renderingId="19607"/>

                `
                Object.keys(field.activities).forEach(key => {
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
                                <span data-src="https://img.medscapestatic.com/thumbnail_library/842629.jpg" data-alt="${item.activityTitle}" class="featimgVar"></span></a>
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
            <li><a href="#ca-section-2">CME Activities</a></li>
            `
            if(this.hasMedChallenge) {
                nav += `<li><a href="#ca-section-3">Med Challenge</a></li>`
            }
            if(this.hasPoll) {
                nav += `<li><a href="#ca-section-6">Poll</a></li>`
            }
            nav += `<li><a href="#ca-section-4">Resources</a></li>
                    <li><a href="#ca-section-5">Committee</a></li>`
            return nav
        },
        get slideKits() {
            let slideKits = _.get(ticket, ['relatedResources', 'slideKits', 'fields'], {})
            let output = ''
            let slideKeys = Object.keys(slideKits)
            if(slideKeys.length){
                output += `
                    <div class="cag-resources-card">
                        <div class="cag-resources-card-top cag-resources-card-top-1"></div>
                        <div class="cag-resources-card-content">
                        <div class="cag-content-title">Downloadable Slide Kit</div>
                        <ul class="cag-content-lists">
                `
            }
            slideKeys.forEach(key => {
                let slide = slideKits[key]
                output += `
                    <li class="cag-dl"><a href="/px/trk.svr/adv-${this.url}?exturl=https://img.medscape.com/pi/adv-handouts/${this.url}/32977-sk-ca-${key.substring(0,1)}-1.pptx">${slide.title}</a>
                    <p>${slide.teaser}</p></li>
                `
            })
            if(slideKeys.length) {
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
                let article = articles[key]
                output += `
                    <li class="cag-link"><a href="/px/trk.svr/adv-${this.url}?exturl=https://dx.doi.org/${article.url}">${article.title}</a></li>
                `
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
                let link = links[key]
                output += `
                    <li class="cag-link"><a href="/px/trk.svr/adv-${this.url}?exturl=${this.urlPrefix(link.url)}">${link.title}</a></li>
                `
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
                let medChallenge = medChallenges[key]
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
                        typeSection = `<p class="text-uppercase font-blue">  <img src="//<medscape:domain type='imageServer'/>/pi/cme/advances/icons/icon-case_review.svg" alt=""><span class="text-category">Case Review</span></p>`
                        break
                }
                output += `
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
            let contributorKeys = Object.keys(contributors)
            contributorKeys.forEach(key => {
                let contributor = contributors[key]
                output += `
                    <div class="committee-member">

                            <div class="cag-member-avatar">
                                <img src="//img.medscapestatic.com/person/REPLACE.jpg" alt="${contributor.name}">
                            </div>
                        
                            <div class="cag-person-info">
                                <img class="cag-committee-expand-button" src="//img.medscapestatic.com/pi/cme/advances/icons/committee-up-btn.png" /> 
                                <h5 class="cag-person-name">${contributor.name}</h5>
                                <p class="cag-person-title">${contributor.contributorGroup}</p>
                                <p class="cag-person-details">${contributor.affiliations}<p>
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
                                    data-poster="https://img.medscapestatic.com/thumbnail_library/mobile_start/org/2018/894089_4_start.png" 
                                    data-source="http://webmd-a.akamaihd.net/delivery/delivery/6c/ed/6ced42a3-34df-491e-befe-8e51a61991be/894089_4v2_1000k.mp4">
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
                let advisorConsultant = '', grants = '', ownsStock = '', speaker = '', other = '', 
                statement = '<p>Has disclosed no relevant financial relationships.</p>'
                if(contributor.other && contributor.other.length) {
                    other = `<p>Other: ${contributor.other}</p>`
                }
                if(contributor.advisorConsultant && contributor.advisorConsultant.length) {
                    advisorConsultant = `<p>Served as an advisor or consultant for: ${
                        contributor.advisorConsultant.join('; ')
                    }</p>`
                }
                if(contributor.grants && contributor.grants.length) {
                    grants = `<p>Received grants for clinical research from: ${
                        contributor.grants.join('; ')
                    }</p>`
                }
                if(contributor.ownsStock && contributor.ownsStock.length) {
                    ownsStock = `<p>Owns stock, stock options, or bonds from: ${
                        contributor.ownsStock.join('; ')
                    }</p>`
                }
                if(contributor.speaker && contributor.speaker.length) {
                    speaker = `<p>Served as a speaker or a member of a speakers bureau for: ${
                        contributor.speaker.join('; ')
                    }</p>`
                }
                if([other, advisorConsultant, grants, ownsStock, speaker].join('').length){
                    statement = `<p>Has disclosed the following relevant financial relationships:</p>`
                }
                output += `
                    <div class="disclosures-person">
                        <div class="disclosures-person-header">
                            <div class="disclosures-person-avatar">
                                <img src="//img.medscapestatic.com/person/REPLACE.jpg" alt="${contributor.name}">
                            </div>
                            <div class="disclosures-person-info">
                                <h5 class="disclosures-person-name">${contributor.name}</h5>
                                <p class="disclosures-person-title">${contributor.contributorGroup}</p>
                            </div>
                        </div>

                        <div class="disclosures-person-content">
                            ${statement}
                            ${advisorConsultant}
                            ${speaker}
                            ${grants}
                            ${ownsStock}
                            ${other}


                        </div>
                    </div>




                `
            })
            return output

        },
        urlPrefix: (url) => {
            if(!/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(url)){
                return 'REPLACE URL: ' + url
            }else if (!/^https?:\/\//i.test(url)) {
                return 'https://' + url
            }
            return url
        },
        output: () => {
            return generateJSP(this)
        }
    }
}

// module.exports = generators