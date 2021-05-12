export default (generator) => {
  let hexCode = generator.geoTarget.toLowerCase() == 'us' ? '3da9bc' : '005b81'
  if(generator.emailType == 'new'){
    return `
      <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
      <html>
      %%=ContentBlockByID('25666')=%%
      <body id="body" topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" style="-webkit-font-smoothing: antialiased; width:100%; -webkit-text-size-adjust:none; margin:0; padding:0;background-color:#fafafa">
      <span class="preheader"></span>
      <table id="table-wrapper" width="100%" border="0" cellspacing="0" cellpadding="0" align="center" style="margin:0; padding:0; text-align:center; background-image: url(https://img.medscapestatic.com/pi/features/newsletters/cme/cmereview/template/edu-template_background_medchallenge_gradient_D2D3D5_1x247.png); background-repeat: repeat-x; background-position: top;">
        <tr>
          <td valign="top" align="center"><table class="hide" width="550" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td class="hide" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td valign="top" height="11" style="line-height:11px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                    </tr>
                  </table></td>
              </tr>
            </table>
            <table class="table" width="550" border="0" cellspacing="0" cellpadding="0" style="border-left:1px solid #e0e0e0; border-right:1px solid #e0e0e0">
              <!-- HEADER - MEDSCAPE EDU [START] -->
              <tr>
                <td width="550" valign="top" style="border-top:1px solid #e0e0e0; background-color:#fcfcfc"><table width="152" class="table2" border="0" cellspacing="0" cellpadding="0" style="padding:0; margin:0" align="left">
                    <tr>
                      <td valign="top" class="element-align"><a style="color:#020202; text-decoration:none" href="https://www.medscape.org/?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%" target="_blank">%%=ContentBlockByID('26425')=%%</a></td>
                    </tr>
                  </table></td>
              </tr>
              <tr>
                <td valign="top" height="5" style="font-size:1px; line-height:5px;" bgcolor="#${hexCode}"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
              </tr>
              <!-- HEADER - MEDSCAPE EDU [END] --> 
              <!-- HEADER - CLINICAL ADVANCES [START] -->
              <tr>
                <td class="bg-img" valign="top" bgcolor="#${hexCode}" style="background-image: url(https://img.medscapestatic.com/pi/cme/advances/hero-images/ca-gene-therapy-hemophilia-hero.jpg?interpolation=lanczos-none&resize=*:400); background-position: top center; background-repeat: none; background-size: cover;"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td valign="top" height="32" class="padding2" colspan="3" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                    </tr>
                    <tr>
                      <td valign="top" width="32" class="padding-v28px padding-reset" height="226" style="line-height:226px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                      <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        ${generator.hasCAInTitle ? `
                        <tr>
                          <td align="left" style="font-family:'Arial Narrow', Arial, Helvetica, sans-serif, 'Roboto Condensed'; font-size:14px; color:#ffffff; line-height:22px; text-align:left; text-transform:uppercase"><a style="color:#ffffff; text-decoration:none" href="https://www.medscape.org/sites/advances/page-url?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%" target="_blank">CLINICAL ADVANCES IN</a></td>
                        </tr>
                        ` : ''}
                          <tr>
                            <td align="left" style="font-family:'Arial Narrow', Arial, Helvetica, sans-serif, 'Roboto Condensed'; font-size:32px; color:#ffffff; line-height:36px"><a style="color:#ffffff; text-decoration:none" href="https://www.medscape.org/sites/advances/page-url?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%" target="_blank">${generator.title}</a></td>
                          </tr>
                          <tr>
                            <td valign="top" height="44" style="line-height:44px;"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                          </tr>
                          <tr>
                            <td class="element-align" align="left" valign="top"><table width="100%" class="table2" border="0" cellspacing="0" cellpadding="0" style="padding:0; margin:0">
                                <tr>
                                  <td width="2" align="left" bgcolor="#ffffff"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                                  <td width="12"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                                  <td class="primary" align="left" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Lt'; font-size:14px; color:#fcfcfc; line-height:22px">${generator.supporterStatement}<br>
                                    ${generator.hasPartnerStatement ? `<br>${generator.partnerStatementHTML}` : ''}
                                   </td>
                                </tr>
                              </table></td>
                          </tr>
                        </table></td>
                      <td valign="top" width="32" class="padding-v28px padding-reset" height="226" style="line-height:226px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                    </tr>
                    <tr>
                      <td valign="top" height="48" class="padding2" colspan="3" style="line-height:48px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                    </tr>
                  </table></td>
              </tr>
              <!-- HEADER - CLINICAL ADVANCES [END] --> 
              <!-- BODY - CLINICAL ADVANCES [START] --> 
              <!-- SECTION - INTRO [START] -->
              <tr>
                <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff">
                    <tr>
                      <td valign="top" height="32" class="padding2" colspan="3" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                    </tr>
                    <tr>
                      <td valign="top" width="32" class="padding-v28px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                      <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td class="primary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:16px; color:#020202; line-height:26px"><font style="color:#${hexCode}; font-weight:bold;font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold'">%%=IIF(PROFESSION=="10","Dr. ","")=%%%%=ProperCase(FIRST_NAME)=%% %%=ProperCase(LAST_NAME)=%%,</font><br>
                              <br>
                              On  behalf of the steering committee, I'm pleased to announce the launch of <a style="color:#${hexCode}; text-decoration:none; font-weight:bold; font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold'" href="https://www.medscape.org/sites/advances/${generator.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%">${generator.title}</a>, a resource dedicated to (Description). This thematic ${generator.specialty} curriculum for physicians will include ongoing CME activities, as well as provide access to the latest guidelines, publications, and other important resources. Using the following links, I invite you to view both an <a style="color:#${hexCode}; text-decoration:none; font-weight:bold; font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold'" href="https://www.medscape.org/sites/advances/page-url?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%">introduction video</a> and our first <a style="color:#${hexCode}; text-decoration:none; font-weight:bold; font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold'" href="https://www.medscape.org/sites/advances/${generator.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%">educational activity</a> of the series:</td>
                          </tr>
                          <!-- CLAD VIDEO THUMBNAIL [START] -->
                          <tr>
                            <td valign="top" height="32" class="padding2" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                          </tr>
                          <tr>
                            <td valign="top" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:16px; color:#020202; text-align:center" align="center"><a style="color:#020202; text-decoration:none" href="https://www.medscape.org/sites/advances/${generator.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%" target="_blank"><img class="img" src="https://img.medscapestatic.com/pi/features/newsletters/cme/Clinical_Advances/2020/20201022_clad-video_mock-us.jpg" width="416" style="padding:0; margin:auto; line-height:26px; text-align:center; background-color:#f4f5f8" alt="Play Introduction Video &rarr;"></a></td>
                          </tr>
                          <!-- CLAD VIDEO THUMBNAIL [END] --> 
                          ${generator.activities}
                          <!-- CLAD MEDCHALLENGE CALLOUT [START] -->
                          ${generator.hasMedChallenge ? `
                          <tr>
                            <td valign="top" height="32" class="padding2" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                          </tr>
                          <tr>
                            <td class="primary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:16px; color:#020202; line-height:26px">I'm also excited to announce that a new <font style="color:#${hexCode}; font-weight:bold;font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold'">MedChallenge</font> will be added quarterly to the curriculum. Test your knowledge about ${generator.title} and put your skills to the test as you compete against your peers &ndash; and the clock &ndash; for the number 1 spot on the leaderboard!</td>
                          </tr>
                          ` : ''}
                          <!-- CLAD MEDCHALLENGE CALLOUT [END] -->
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
              <!-- SECTION - INTRO [END] --> 
              <!-- SECTION - MEDCHALLENGE [START] -->
              ${generator.hasMedChallenge ? generator.medChallenge : ''}
              <!-- SECTION - MEDCHALLENGE [END] --> 
              <!-- SECTION - PODCAST [START] -->
              ${generator.hasPodcast ? generator.podcast : ''}
              <!-- SECTION - PODCAST [END] --> 
              <!-- SECTION - POLLING QUESTION [START] -->
              ${generator.hasPollingQuestion ? `
                <tr>
                <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff">
                    <tr>
                      <td valign="top" height="32" class="padding2" colspan="3" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                    </tr>
                    <tr>
                      <td valign="top" width="32" class="padding-v28px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                      <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td class="primary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Lt'; font-size:18px; color:#${hexCode}; line-height:26px"><a style="color:#${hexCode}; text-decoration:none" href="https://www.medscape.org/sites/advances/${generator.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%#ca-section-3" target="_blank">Polling Question</a></td>
                          </tr>
                          <tr>
                            <td align="left" valign="top" height="9" style="font-size:1px; line-height:9px;"><img style="display:block; margin:0; padding:0" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0" alt=""></td>
                          </tr>
                          <tr>
                            <td class="primary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:16px; color:#020202; line-height:26px"><a style="color:#020202; text-decoration:none" href="https://www.medscape.org/sites/advances/${generator.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%#ca-section-3" target="_blank">Participate and see what your peers have to say about (Blank).</a></td>
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
              ` : ''}
              <!-- SECTION - POLLING QUESTION [END] --> 
              <!-- SECTION - RESOURCES [START] -->
              ${generator.hasResources ? `<tr>
              <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff">
                  <tr>
                    <td valign="top" height="32" class="padding2" colspan="3" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                  </tr>
                  <tr>
                    <td valign="top" width="32" class="padding-v28px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                    <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td class="primary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Lt'; font-size:18px; color:#${hexCode}; line-height:26px"><a style="color:#${hexCode}; text-decoration:none" href="https://www.medscape.org/sites/advances/${generator.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%#ca-section-4" target="_blank">Related Resources</a></td>
                        </tr>
                        <tr>
                          <td align="left" valign="top" height="9" style="font-size:1px; line-height:9px;"><img style="display:block; margin:0; padding:0" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0" alt=""></td>
                        </tr>
                        <tr>
                          <td class="primary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:16px; color:#020202; line-height:26px"><a style="color:#020202; text-decoration:none" href="https://www.medscape.org/sites/advances/${generator.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%#ca-section-4" target="_blank">Access relevant clinical articles, guidelines, and downloadable slides.</a></td>
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
            </tr>` : ''}
              <!-- SECTION - RESOURCES [END] --> 
              <!-- SECTION - CONCLUSION [START] -->
              <tr>
                <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff">
                    <tr>
                      <td valign="top" height="32" class="padding2" colspan="3" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                    </tr>
                    <tr>
                      <td valign="top" width="32" class="padding-v28px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                      <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td class="primary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:16px; color:#020202; line-height:26px">These resources will be valuable for managing (Disease), and I hope that you become a regular visitor to <a style="color:#${hexCode}; text-decoration:none; font-weight:bold; font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold'" href="https://www.medscape.org/sites/advances/${generator.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%">${generator.fullTitle}</a>.</td>
                          </tr>
                          <tr>
                            <td class="faculty-align" valign="top"><table class="table3" align="left" width="128" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td valign="top" height="32" style="line-height:32px;"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                                </tr>
                                <tr>
                                  <td valign="top" align="center"><img width="128" height="175" src="${generator.committeeChairHeadShot}" style="display:block; margin:0; padding:0" border="0"></td>
                                </tr>
                                <tr>
                                  <td valign="top" class="mobile-spacer" style="display:none; overflow:hidden; line-height:0"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                                </tr>
                              </table>
                              <table class="table3" align="right" width="334" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td valign="top" height="32" style="line-height:32px;"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                                </tr>
                                <tr>
                                  <td class="secondary" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:14px; color:#585858; line-height:22px" valign="top">Regards,</td>
                                </tr>
                                <tr>
                                  <td valign="top" height="11" style="line-height:11px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                                </tr>
                                <tr>
                                  <td class="primary" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold'; font-weight:bold; font-size:16px; color:#020202; line-height:24px;" valign="top">${generator.committeeChairName}</td>
                                </tr>
                                <tr>
                                  <td valign="top" height="5" style="line-height:5px;"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                                </tr>
                                <tr>
                                  <td class="secondary" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:12px; color:#020202; line-height:18px">Steering Committee Chair</td>
                                </tr>
                                <tr>
                                  <td valign="top" height="11" style="line-height:11px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                                </tr>
                              </table></td>
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
              <!-- SECTION - CONCLUSION [END] --> 
              <!-- SECTION - DESCRIPTION [START] -->
              <tr>
                <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff">
                    <tr>
                      <td valign="top" height="32" class="padding2" colspan="3" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                    </tr>
                    <tr>
                      <td valign="top" width="32" class="padding-v28px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                      <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td class="secondary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:14px; color:#020202; line-height:22px"><strong>${generator.fullTitle}</strong> is a thematic (description). <a style="color:#${hexCode}; text-decoration:none; font-weight:bold; font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold'" href="https://www.medscape.org/sites/advances/${generator.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%">Learn More</a></td>
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
              <!-- SECTION - DESCRIPTION [END] --> 
              <!-- SECTION - STEERING COMMITTEE [START] -->
              <tr>
                <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#e7eff2">
                    <tr>
                      <td valign="top" height="32" class="padding2" colspan="3" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                    </tr>
                    <tr>
                      <td valign="top" width="32" class="padding-v28px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                      <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td class="primary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Lt'; font-size:18px; color:#020202; line-height:26px">Steering Committee</td>
                          </tr>
                          ${generator.steeringCommittee}
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
              <!-- SECTION - STEERING COMMITTEE [END] --> 
              <!-- BODY - CLINICAL ADVANCES [END] --> 
              %%=ContentBlockByID('420516')=%%
            </table></td>
        </tr>
      </table>
      <custom name="opencounter" type="tracking">
      </body>
      </html>
    `
  }else{
    return `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
    <html>
    %%=ContentBlockByID('25666')=%%
    <body id="body" topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" style="-webkit-font-smoothing: antialiased; width:100%; -webkit-text-size-adjust:none; margin:0; padding:0;background-color:#fafafa">
    <span class="preheader"></span>
    <table id="table-wrapper" width="100%" border="0" cellspacing="0" cellpadding="0" align="center" style="margin:0; padding:0; text-align:center; background-image: url(https://img.medscapestatic.com/pi/features/newsletters/cme/cmereview/template/edu-template_background_medchallenge_gradient_D2D3D5_1x247.png); background-repeat: repeat-x; background-position: top;">
      <tr>
        <td valign="top" align="center"><table class="hide" width="550" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td class="hide" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td valign="top" height="11" style="line-height:11px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                  </tr>
                </table></td>
            </tr>
          </table>
          <table class="table" width="550" border="0" cellspacing="0" cellpadding="0" style="border-left:1px solid #e0e0e0; border-right:1px solid #e0e0e0">
            <!-- HEADER - MEDSCAPE EDU [START] -->
            <tr>
              <td width="550" valign="top" style="border-top:1px solid #e0e0e0; background-color:#fcfcfc"><table width="152" class="table2" border="0" cellspacing="0" cellpadding="0" style="padding:0; margin:0" align="left">
                  <tr>
                    <td valign="top" class="element-align"><a style="color:#020202; text-decoration:none" href="https://www.medscape.org/?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%" target="_blank">%%=ContentBlockByID('26425')=%%</a></td>
                  </tr>
                </table></td>
            </tr>
            <tr>
              <td valign="top" height="5" style="font-size:1px; line-height:5px;" bgcolor="#${hexCode}"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
            </tr>
            <!-- HEADER - MEDSCAPE EDU [END] --> 
            <!-- HEADER - CLINICAL ADVANCES [START] -->
            <tr>
              <td class="bg-img" valign="top" bgcolor="#${hexCode}" style="background-image: url(https://img.medscapestatic.com/pi/cme/advances/hero-images/ca-gene-therapy-hemophilia-hero.jpg?interpolation=lanczos-none&resize=*:400); background-position: top center; background-repeat: none; background-size: cover;"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td valign="top" height="32" class="padding2" colspan="3" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                  </tr>
                  <tr>
                    <td valign="top" width="32" class="padding-v28px padding-reset" height="226" style="line-height:226px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                    <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        ${generator.hasCAInTitle ? `
                        <tr>
                          <td align="left" style="font-family:'Arial Narrow', Arial, Helvetica, sans-serif, 'Roboto Condensed'; font-size:14px; color:#ffffff; line-height:22px; text-align:left; text-transform:uppercase"><a style="color:#ffffff; text-decoration:none" href="https://www.medscape.org/sites/advances/page-url?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%" target="_blank">CLINICAL ADVANCES IN</a></td>
                        </tr>
                        `: ''}
                        <tr>
                          <td align="left" style="font-family:'Arial Narrow', Arial, Helvetica, sans-serif, 'Roboto Condensed'; font-size:32px; color:#ffffff; line-height:36px"><a style="color:#ffffff; text-decoration:none" href="https://www.medscape.org/sites/advances/page-url?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%" target="_blank">${generator.title}</a></td>
                        </tr>
                        <tr>
                          <td valign="top" height="44" style="line-height:44px;"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                        </tr>
                        <tr>
                          <td class="element-align" align="left" valign="top"><table width="100%" class="table2" border="0" cellspacing="0" cellpadding="0" style="padding:0; margin:0">
                              <tr>
                                <td width="2" align="left" bgcolor="#ffffff"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                                <td width="12"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                                <td class="primary" align="left" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Lt'; font-size:14px; color:#fcfcfc; line-height:22px">${generator.supporterStatement}<br>
                                ${generator.hasPartnerStatement ? `<br>${generator.partnerStatementHTML}` : ''}
                                  </td>
                              </tr>
                            </table></td>
                        </tr>
                      </table></td>
                    <td valign="top" width="32" class="padding-v28px padding-reset" height="226" style="line-height:226px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                  </tr>
                  <tr>
                    <td valign="top" height="48" class="padding2" colspan="3" style="line-height:48px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                  </tr>
                </table></td>
            </tr>
            <!-- HEADER - CLINICAL ADVANCES [END] --> 
            <!-- BODY - CLINICAL ADVANCES [START] --> 
            <!-- SECTION - INTRO [START] -->
            <tr>
              <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff">
                  <tr>
                    <td valign="top" height="32" class="padding2" colspan="3" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                  </tr>
                  <tr>
                    <td valign="top" width="32" class="padding-v28px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                    <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td class="primary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Lt'; font-size:18px; color:#${hexCode}; line-height:26px">New Resources Are Now Available</td>
                        </tr>
                        ${generator.activities}
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
            <!-- SECTION - INTRO [END] --> 
            <!-- SECTION - MEDCHALLENGE [START] -->
            ${generator.hasMedChallenge ? generator.medChallenge : ''}
            <!-- SECTION - MEDCHALLENGE [END] --> 
            <!-- SECTION - PODCAST [START] -->
            ${generator.hasPodcast ? generator.podcast : ''}
            <!-- SECTION - PODCAST [END] --> 
            <!-- SECTION - POLLING QUESTION [START] -->
            ${generator.hasPollingQuestion ? `
              <tr>
              <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff">
                  <tr>
                    <td valign="top" height="32" class="padding2" colspan="3" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                  </tr>
                  <tr>
                    <td valign="top" width="32" class="padding-v28px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                    <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td class="primary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Lt'; font-size:18px; color:#${hexCode}; line-height:26px"><a style="color:#${hexCode}; text-decoration:none" href="https://www.medscape.org/sites/advances/${generator.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%#ca-section-3" target="_blank">Polling Question</a></td>
                        </tr>
                        <tr>
                          <td align="left" valign="top" height="9" style="font-size:1px; line-height:9px;"><img style="display:block; margin:0; padding:0" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0" alt=""></td>
                        </tr>
                        <tr>
                          <td class="primary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:16px; color:#020202; line-height:26px"><a style="color:#020202; text-decoration:none" href="https://www.medscape.org/sites/advances/${generator.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%#ca-section-3" target="_blank">Participate and see what your peers have to say about (Blank).</a></td>
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
            ` : ''}
            <!-- SECTION - POLLING QUESTION [END] --> 
            <!-- SECTION - RESOURCES [START] -->
            ${generator.hasResources ? `
              <tr>
              <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff">
                  <tr>
                    <td valign="top" height="32" class="padding2" colspan="3" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                  </tr>
                  <tr>
                    <td valign="top" width="32" class="padding-v28px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                    <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td class="primary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Lt'; font-size:18px; color:#${hexCode}; line-height:26px"><a style="color:#${hexCode}; text-decoration:none" href="https://www.medscape.org/sites/advances/${generator.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%#ca-section-4" target="_blank">Related Resources</a></td>
                        </tr>
                        <tr>
                          <td align="left" valign="top" height="9" style="font-size:1px; line-height:9px;"><img style="display:block; margin:0; padding:0" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0" alt=""></td>
                        </tr>
                        <tr>
                          <td class="primary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:16px; color:#020202; line-height:26px"><a style="color:#020202; text-decoration:none" href="https://www.medscape.org/sites/advances/${generator.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%#ca-section-4" target="_blank">Access relevant clinical articles, guidelines, and downloadable slides.</a></td>
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
            ` : ''}
            <!-- SECTION - RESOURCES [END] --> 
            <!-- SECTION - DESCRIPTION [START] -->
            <tr>
              <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff">
                  <tr>
                    <td valign="top" height="32" class="padding2" colspan="3" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                  </tr>
                  <tr>
                    <td valign="top" width="32" class="padding-v28px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                    <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td class="secondary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg'; font-size:14px; color:#020202; line-height:22px"><strong>${generator.fullTitle}</strong> is a thematic (description). <a style="color:#${hexCode}; text-decoration:none; font-weight:bold; font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Bold'" href="https://www.medscape.org/sites/advances/${generator.relativeURL}?src=mkmcmr_driv_clinad_mscpedu_%%=FormatDate(NOW(1),'YYMMDD')=%%&uac=%%UAC%%">Learn More</a></td>
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
            <!-- SECTION - DESCRIPTION [END] --> 
            <!-- SECTION - STEERING COMMITTEE [START] -->
            <tr>
              <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#e7eff2">
                  <tr>
                    <td valign="top" height="32" class="padding2" colspan="3" style="line-height:32px"><img style="display:block;" height="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" width="1" border="0"></td>
                  </tr>
                  <tr>
                    <td valign="top" width="32" class="padding-v28px"><img style="display:block;" height="1" width="1" src="https://img.medscapestatic.com/pi/global/ornaments/spacer.gif" border="0"></td>
                    <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td class="primary element-align" style="font-family:Arial, Helvetica, sans-serif, 'Proxima Nova Rg Lt'; font-size:18px; color:#020202; line-height:26px">Steering Committee</td>
                        </tr>
                        ${generator.steeringCommittee}
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
            <!-- SECTION - STEERING COMMITTEE [END] --> 
            <!-- BODY - CLINICAL ADVANCES [END] --> 
            %%=ContentBlockByID('420516')=%%
          </table></td>
      </tr>
    </table>
    <custom name="opencounter" type="tracking">
    </body>
    </html>
    `
  }
}
