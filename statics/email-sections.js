const _ = require('lodash')
const generateEmail = require('./jsp-generator.js')

export default (ticket, geoTarget) => {
    return {
        ticket,
        geoTarget,
        get geoTarget() {
            return geoTarget || 'us'
        },
        get title() {
            let title = _.get(ticket, ['clinicalAdvancesPageDetails', 'clinicalAdvancesTitle', 'fields', '1', 'text'], 'INVALID TITLE')
            if(title === null || title === ''){
                return 'NO TITLE'
            }else{
                return title.replace(/Clinical Advances In\s?/i, '')
            }
        },
        get hasCAInTitle() {
            let title = _.get(ticket, ['clinicalAdvancesPageDetails', 'clinicalAdvancesTitle', 'fields', '1', 'text'], 'INVALID TITLE')
            return /Clinical Advances In\s?/i.test(title)
        },
        get fullTitle() {
          return _.get(ticket, ['clinicalAdvancesPageDetails', 'clinicalAdvancesTitle', 'fields', '1', 'text'], 'INVALID TITLE')
        },
        get relativeURL() {
            return _.get(ticket, ['clinicalAdvancesPageDetails', 'clinicalAdvancesURL', 'fields', '1', 'url'], 'INVALID URL')
        },
        get supporterStatement() {
            let statement = _.get(ticket, ['generalInformation', 'selectSupporterAttribution', 'fields', '1', 'supporterStatement'], `Supported by educational grants from <strong style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold';">(Supporter)</strong> and <strong style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold';">(Supporter)</strong> in collaboration with <strong style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold';">(Supporter)</strong>`)
            if(!statement.length){
                statement = `Supported by educational grants from <strong style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold';">(Supporter)</strong> and <strong style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold';">(Supporter)</strong> in collaboration with <strong style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold';">(Supporter)</strong>`
            }
            return this.supporters.reduce((prev, curr) => {
              return prev.replace(curr, `<strong style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold';">${curr}</strong>`)
            }, statement)
        },
        get hasMedChallenge() {
            return _.get(ticket, ['medChallenges', 'medChallenge', 'fields', '1', 'selection'], false)
        },
        get medChallenge() {
            return `
            <tr>
            <td valign="top" style="background-image: url(https://img.medscapestatic.com/pi/features/newsletters/cme/cmereview/template/edu-template_background_medchallenge_logo-trophy_1200x796.png?interpolation=lanczos-none&resize=600:*);background-position:top center; background-repeat:no-repeat; background-color:#19062e"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td valign="top" height="32" class="padding2" colspan="3" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                </tr>
                <tr>
                  <td valign="top" width="32" class="padding-v28px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                  <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td valign="top"><table width="152" class="table2" border="0" cellspacing="0" cellpadding="0" style="padding:0; margin:0" align="left">
                            <tr>
                              <td valign="top" class="element-align"><a style="color:#56728a; text-decoration:none" href="https://www.medscape.org/sites/advances/${this.plainURL}?src=mkmcmr_clinad_update_mscpedu&uac=%%UAC%%#ca-section-4" target="_blank"><img width="185" src="https://img.medscapestatic.com/pi/features/newsletters/cme/cmereview/template/edu-template_logo_medchallenge_white_395x61.png" style="padding:0; margin:0; display:inline-block;" border="0"></a></td>
                            </tr>
                          </table></td>
                      </tr>
                      <tr>
                        <td valign="top" height="22" style="line-height:22px;"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                      </tr>
                      <tr>
                        <td class="primary" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Lt'; font-size:18px; color:#ffffff; line-height:26px">Apply what you know about ${this.title}</td>
                      </tr>
                      <tr>
                        <td align="left" valign="top" height="9" style="font-size:1px; line-height:9px;"><img style="display:block; margin:0; padding:0" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0" alt=""></td>
                      </tr>
                      <tr>
                        <td class="element-align" align="left" style="font-family:'Arial Narrow', Arial, Helvetica, sans-serif, 'Roboto Condensed'; font-size:12px; color:#ffffff; line-height:20px; text-align:left"><a style="color:#ffffff; text-decoration:none" href="https://www.medscape.org/sites/advances/${this.plainURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%" target="_blank">Test your knowledge against your colleagues in an exciting series of 2-3 min medical questions.</a></td>
                      </tr>
                    </table></td>
                  <td valign="top" width="32" class="padding-v28px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                </tr>
                <tr>
                  <td valign="top" height="48" class="padding2" colspan="3" style="line-height:48px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                </tr>
              </table></td>
          </tr>
          <tr>
            <td valign="top" height="1" style="font-size:1px; line-height:1px;" bgcolor="#e0e0e0"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
          </tr>
            `
        },
        get supporters() {
          let supporters = _.get(ticket, ['generalInformation','selectSupporterAttribution','fields','1','supporters'], [])
          return supporters.map(supporter => supporter.name)
        },
        get supporter() {
            let supporter = _.get(ticket, ['generalInformation', 'selectSupporterAttribution', 'fields', '1', 'supporters'], [{name: 'REPLACE SUPPORTER'}])
            if(!supporter.length) {
                supporter = [{name: 'REPLACE SUPPORTER'}]
            }
            return supporter[0].name
        },
        get partnerStatement() {
          return _.get(ticket, ['partnerDetails', 'partnerStatement', 'fields', '1', 'text'], 'NO PARTNER STATEMENT')
        },
        get hasPartnerStatement() {
          return this.partnerStatement.length > 0
        },
        get partnerStatementHTML() {
          let partners = _.get(ticket, ['partnerDetails', 'partners', 'fields', '1', 'multiSelect'], [])
          return partners.reduce((prev, curr) => {
            prev = prev.replace(curr, `<strong style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold';">${curr}</strong>`)
            return prev
          }, this.partnerStatement.replace('Medscape', `<strong style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold';">Medscape</strong>`))
        },
        get committeeChairName() {
          let contributors = _.get(ticket, ['steeringCommittee', 'contributor', 'fields'], {1: {contributorGroup: 'Steering Committee Chair', name: 'Faculty Name'}})
          contributors = Object.keys(contributors).map(key => contributors[key])
          let chair = contributors.find(contributor => contributor.contributorGroup && contributor.contributorGroup == 'Steering Committee Chair')
          return chair ? chair.name : 'Faculty Name'
        },
        get steeringCommittee() {
          let contributors = _.get(ticket, ['steeringCommittee', 'contributor', 'fields'], {1: {contributorGroup: 'Steering Committee Chair', name: 'Faculty Name'}})
          contributors = Object.keys(contributors).map(key => contributors[key])
          let chair = contributors.find(contributor => contributor.contributorGroup == 'Steering Committee Chair')
          if(chair) {
            contributors = contributors.filter(contributor => contributor.contributorGroup != 'Steering Committee Chair')
            contributors.unshift(chair)
          }
          return contributors.reduce((prev,curr)=> {
            prev += `
            <tr>
              <td class="faculty-align" align="left" height="25" valign="top">
                <table class="table3" align="right" width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td valign="top" height="22" style="line-height:22px;"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                  </tr>
                  <tr>
                    <td class="primary" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold'; font-weight:bold; font-size:16px; color:#020202; line-height:24px;" valign="top">${ curr.name || 'Faculty Name' }</td>
                  </tr>
                  <tr>
                    <td valign="top" height="5" style="line-height:5px;"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                  </tr>
                  <tr>
                    <td class="secondary" style="font-family:'Arial Narrow', Arial, Helvetica, sans-serif, 'Roboto Condensed'; font-size:12px; line-height:12px; color:#020202; font-weight:normal; text-transform:uppercase" valign="top">
                      ${curr.contributorGroup || 'Faculty Role'}
                    </td>
                  </tr>
                  <tr>
                    <td valign="top" height="5" style="line-height:5px;"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                  </tr>
                  <tr>
                    <td class="secondary" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:14px; color:#585858; line-height:22px" valign="top">${curr.affiliations || 'Faculty details lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}</td>
                  </tr>
                </table>
              </td>
            </tr>
            `
            return prev
          }, '')
        },
        get activities() {
          let buckets = _.get(ticket, ['activities', 'additionalBuckets', 'fields'], {})
          return Object.keys(buckets)
          .map(key => buckets[key].activities)
          .reduce((prev, curr) => {
            Object.keys(curr).forEach(key => {
              prev.push(curr[key])
            })
            return prev
          }, [])
          .filter((activity, index) => index < 3)
          .reduce((prev, curr, index) => {
            prev += `
            <!-- CLAD ACTIVITY 0${index + 1} [START] -->
            <tr>
              <td valign="top" height="32" class="padding2" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
            </tr>
            <tr>
              <td><table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#ffffff; border-top:#d8dee3 1px solid; border-right:#d8dee3 1px solid; border-bottom:#d8dee3 1px solid; border-left:#d8dee3 1px solid; border-radius:3px">
                  <tr>
                    <td valign="top"><table width="192" class="table2" border="0" cellspacing="0" cellpadding="0" style="padding:0; margin:0" align="left">
                        <tr>
                          <td valign="top" class="element-align"><a style="color:#020202; text-decoration:none" href="https://www.medscape.org/sites/advances/${this.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%" target="_blank"><img src="https://img.medscapestatic.com/pi/features/newsletters/cme/Clinical_Advances/2020/20201022_clad-thumbnail_mock-us.jpg" alt="Enable images to view" name="img" width="192" height="192" id="img" style="display:inline-block; font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:10px; line-height:16px; white-space:pre" border="0"></a></td>
                        </tr>
                      </table>
                      <table width="238" class="table2" cellspacing="0" cellpadding="0" border="0" align="right">
                        <tr>
                          <td align="left" valign="top" height="13" class="padding-h32px" style="font-size:1px; line-height:13px;" colspan="3"><img style="display:block; margin:0; padding:0" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0" alt=""></td>
                        </tr>
                        <tr>
                          <td width="13" valign="top" align="left" class="padding-v24px"><img style="display:block; margin:0; padding:0" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0" alt=""></td>
                          <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" align="right" style="padding:0;margin:0">
                              <tr>
                                <td style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:12px; color:#bd0d0c; line-height:22px">NEW</td>
                              </tr>
                              <tr>
                                <td class="primary" align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold'; font-size:12px; color:#007cb0; line-height:18px; font-weight:bold"><a href="https://www.medscape.org/sites/advances/${this.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%" style="text-decoration:none; color:#020202;" target="_blank">${curr.activityTitle || 'Activity Title Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing'}</a></td>
                              </tr>
                              <tr>
                                <td valign="top" height="6" style="line-height:6px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                              </tr>
                              <tr>
                                <td class="secondary" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:10px; color:#020202; line-height:16px">${curr.teaser || 'Activity teaser goes here lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</td>
                              </tr>
                            </table></td>
                          <td width="13" valign="top" align="left" class="padding-v24px"><img style="display:block; margin:0; padding:0" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0" alt=""></td>
                        </tr>
                        <tr>
                          <td align="left" valign="top" height="13" class="padding-h32px" style="font-size:1px; line-height:13px;" colspan="3"><img style="display:block; margin:0; padding:0" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0" alt=""></td>
                        </tr>
                      </table></td>
                  </tr>
                </table></td>
            </tr>
            <!-- CLAD ACTIVITY 0${index + 1} [END] --> 
            `
            return prev
          }, '')
        },
        get specialty() {
          let specialty = _.get(ticket, ['generalInformation','therapeuticAreaLeadSpecialty','fields','1','specialtiesSelect'],['(specialty)'])
          return specialty[0]
        },
        output: () => {
            return generateEmail(this)
        }
    }
}

// module.exports = generators