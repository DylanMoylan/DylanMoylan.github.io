// const generators = require("./jsp-sections")

export default (generator) => {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>

		<%-- Page Title for tab bar, bookmarks, etc --%>
		<title>${generator.title}</title>

		<%-- Meta information for content scrapers, social media and search engines --%>
		<meta name="description" content="${generator.introduction}" />
		<meta name="keywords" content="" />
		<meta name="ArticleType" content="Advances" />
		<meta name="metasegvar" content="artid=${generator.bucketIDList}"/>


      	<!-- 
		${generator.bucketComment}
        -->


		<%-- include jsp tag libraries for use on the page --%>
		<%@ taglib uri="/WEB-INF/tld/prof-cobrand.tld" prefix="framework" %>
		<%@ taglib uri="/WEB-INF/tld/bucketgen.tld" prefix="bucketgen" %>
		<%@ taglib uri="/WEB-INF/tld/prof-ads.tld" prefix="ads" %>
		<%@ taglib uri="/WEB-INF/tld/questionnaire.tld" prefix="q" %>

		<%-- Include global style --%>
		<%@ include file="/files/common/css/global-responsive.jsp" %>

		<%-- Include Clinical Advances styles --%>
		<link rel="stylesheet" href="//<medscape:domain type=" imageServer "/>/medscape-core/cme/css/clinical-advances/clinical-advances-redesign.css" type="text/css" media="all" />
		<link rel="stylesheet" href="//<medscape:domain type=" imageServer "/>/medscape-core/cme/css/clinical-advances/clinical-advances-global-addon.css" type="text/css" media="all" />
		
		<%-- Ad Tags --%>
		<!-- DFP req segvar -->
		   <%    java.util.Map<String, String> dfpSegvarMap = new java.util.HashMap<String, String>();
		  dfpSegvarMap.put("adSuppress", "101,141");
		  request.setAttribute("dfpSegvarMap", dfpSegvarMap);  %>
		<!-- /DFP req segvar -->

		<%-- Site Header Include --%>
		<framework:include fragment="header" styleheader="header-global"  adsuppress="true" globalstylesuppress="true" noticesuppress="true"/>


		<style>

			.ca-section--hero {
				  background-image: url("https://img.medscapestatic.com/pi/cme/uat/temp-bg.png"); 
				  -webkit-background-size: cover;
				  -moz-background-size: cover;
				  -o-background-size: cover;
				  background-size: cover;	
				  background-color: #027778;
				  background-position: center;			
			}


			
		</style>


		
		
		
		
		
		
		
		
		<div id="ca-section-1" class="ca-section ca-section--hero">
			<div class="container">
				<p class="above-heading">Clinical Advances in</p>
				<h1>${generator.title}</h1>
				<div class="hero-content cag-wrapper">
					<div class="cag-left">
						<p class="cag-hero-overview js-open-modal" data-modal="ca-section--hero">Read Overview</p>
						<div class="cag-hero-support">
							<span class="cag-hero-indent"></span>
							<span class="cag-hero-copy">
								<p>${generator.teaser}</p>
								<p>${generator.supporterStatement} <strong>${generator.supporter}</strong> </p>
								
								<p>Developed through a partnership between <strong>Medscape</strong> and <strong>University of California, San Diego School of Medicine</strong>
							</span>
							<div class="hero-sponsor cag-hero-sponsor" data-rotatespeed="3">
								<p class="hero-sponsor-text">${generator.supporterStatement} <strong>${generator.supporter}</strong></p>
								<p><img src="//img.medscapestatic.com/pi/cvn/clinical-advances/supporter-badge/REPLACE.png"></p>
							</div>
						</div>
					</div>
					<div class="cag-right">
						<div class="cag-hero-video">
							<video 
								controls="" 
								preload="metadata" 
								controlslist="nodownload" 
								poster="https://img.medscapestatic.com/pi/cme/uat/vid-poster-image.png" 
								src="http://webmd-a.akamaihd.net/delivery/delivery/aws/52/42/524280c1-234c-3680-a4cd-c7641c10b301/pated-intro-2020_1000k.mp4">
							</video>
						</div>
					</div>
				</div>
			</div>
		</div>

		<%--    ------------------ Hero Overview Modal ---------------------
						Modal shown only when button is clicked. Contains a header
						with a title &amp; close button
				        -------------------- ------------- -----------------------    --%>

				<%-- "js-modal" class adds functionality and an overlay on top of the page --%>
				<div class="ca-section--hero js-modal cag-disclosures">

					<%-- Renders the containing content inside a modal, centered on screen --%>
					<div class="modal-inside">

						<%-- Header bar inside modal --%>
						<header class="modal-header">
							<h4>Overview</h4>

							<%-- Close Button for modal --%>
							<button class="close-modal js-close-modal">
								<img src="//<medscape:domain type='imageServer'/>/pi/cme/advances/icons/close-btn--2x.png" alt="">
							</button>
						</header>

						<%--<div class="modal-content">
							<h3>Hero section overview header</h3>
								Hero Overview Content goes here
						</div>--%>
					</div>
				</div>


		
			<div class="ca-section-secondary-nav js-sticky-nav cag-nav-wrapper">
			<nav class="container">

					${generator.activitiesNav}

            </nav>
		</div>




		
		
		
		
		

		
		
		
			<div id="ca-section-2" class="ca-section ca-section--activities cag-activities loading">
					<div class="container">
						<h2>CME Activities</h2>
					</div>
				<div class="container">
				
					${generator.activitiesList}
					
					
					
					
				
					<%--
					<div class="container">
						<h2>Conference 360</h2>
					</div>
					<div class="cag-activity-header">PRE-CONFERENCE</div>
					<ul class="card-list">
						<li class="live-event">
							<div class="live-event-banner"><span class="live-event-banner-title">LIVE EVENT</span></div>
							<div class="event-card-data-wrapper">
								<div class="activityTitle">Event Title</div> 
								<div class="live-date">Month 3, Year</div> 
								<div class="live-location">City, State</div>
								<div class="live-register"><a href="/viewarticle/886024">REGISTER NOW</a></div>
							</div>
						</li>
					<li class="survey-card">
						<div class="survey-banner"><span class="survey-banner-title">SURVEY</span></div>
						<div class="event-card-data-wrapper">
							<div class="activityTitle">Planning to attend the Immunotherapies Congress?</div> 
							<div class="teaser">We want to hear from you!</div> 
							<div class="take-survey"><a href="/viewarticle/886024">TAKE THE SURVEY NOW</a></div>
						</div>
					</li>
						<li>
							<div class="activityTitle"> 
								<a href="http://www.medscape.org/viewarticle/842629" class="title">Understanding GBCAs to Optimize Outcomes</a>
							</div> 
							<div class="byline"><i>Medscape Education Radiology</i>, Reviewed and Renewed May 2017</div> 
							<div class="teaser">Read these columns for a better understanding of GBCAs, including their properties, safety, and how they may be applied during MRI.</div>
							<div class="activityImage">
								<a href="/viewarticle/842629">        
								<span data-src="https://img.medscapestatic.com/thumbnail_library/842629.jpg" data-alt="Understanding GBCAs to Optimize Outcomes" class="featimgVar"></span></a>
							</div>
							<div class="activityData">
								<div class="credit_type_1"><span class="credit-amount">1.5</span> <span class="credit-type">CME</span></div>
								<div class="length"> </div>
							</div>
						</li>
					</ul>
					
					<div class="cag-activity-header">POST-CONFERENCE</div>
					<ul class="card-list">
						<li class="survey-card">
							<div class="survey-banner"><span class="survey-banner-title">SURVEY</span></div>
							<div class="event-card-data-wrapper">
								<div class="activityTitle">Did you attend the Immunotherapies Congress?</div> 
								<div class="teaser">We want to hear from you!</div> 
								<div class="take-survey"><a href="/viewarticle/886024">TAKE THE SURVEY NOW</a></div>
							</div>
						</li>
						
						<li>						
							<div class="activityTitle"> 
								<a href="http://www.medscape.org/viewarticle/842629" class="title">Understanding GBCAs to Optimize Outcomes</a>
							</div> 
							<div class="byline"><i>Medscape Education Radiology</i>, Reviewed and Renewed May 2017</div> 
							<div class="teaser">Read these columns for a better understanding of GBCAs, including their properties, safety, and how they may be applied during MRI.</div>
							<div class="activityImage">
								<a href="/viewarticle/842629">        
								<span data-src="https://img.medscapestatic.com/thumbnail_library/842629.jpg" data-alt="Understanding GBCAs to Optimize Outcomes" class="featimgVar"></span></a>
							</div>
							<div class="activityData">
								<div class="credit_type_1"><span class="credit-amount">1.5</span> <span class="credit-type">CME</span></div>
								<div class="length"> </div>
							</div>
						</li>
						
						<li class="coming-soon-card">
							<div class="coming-soon-banner"></div>
							<div class="event-card-data-wrapper">
								<div class="activityTitle">Coming Soon</div> 
								<div class="teaser">Join pharmacy experts in a discussion of emerging treatment options and pain management of patients with melanoma.</div> 
							</div>
						</li>
						
					</ul>
					--%>
				</div>
			</div>
			
			

		<div id="ca-section-3" class="ca-section ca-section--medChallenge">
			<%-- https://confluence.internetbrands.com/display/PPDE/MedChallenge%3A+Coders --%>
			<div class="container">
				<h2>
					<img src="https://img.medscapestatic.com/pi/cme/logos/logo-MedChallenge.svg" alt="">
                </h2>
				<h2 class="font-white">${generator.medChallengeHeader}</h2>
                <p class="font-white med-challenge-intro-teaser">${generator.medChallengeDescription}</p>
                
                <ul class="card-list">
                    ${generator.medChallenges}
                </ul>
			</div>
		</div>


		<%--    -------------------- Poll Section -----------------------
		        Renders a Poll for users to interact with. Has to include
		        a <q:getQuestionTag /> tag with the following attributes:
		        questionnaireID, pageID, templateType,
		        responseType="samepage", and nextPage="null".
				-------------------- ------------- -----------------------    --%>
		${!generator.hasPoll ? `<!--` : ''}
		<div id="ca-section-6" class="ca-section ca-section--poll">
			<div class="container">
				<h2>Polling Question</h2>

				<%-- Polling Question Tag - Must have all arguments --%>
				<div class="qna-render" data-formid="1" data-render="1" data-curpage="1" data-totalpages="1" data-questionnaireid="50016"></div>
  
			</div>
		</div>
		${!generator.hasPoll ? `-->` : ''}
		
		<div id="ca-section-4" class="ca-section ca-section--resources cag-resources" style="background-color:#ecf0f0">
			<div class="container">
				<div class="section-title">
					<h2>Resources</h2>
				</div>
			</div>
			<div class="container">
				<div class="cag-resources-wrapper">	

					${generator.slideKits}
					
					${generator.referenceArticles}
					
					${generator.relatedLinks}
					
					<%--
					<div class="cag-resources-card">
						<div class="cag-resources-card-top cag-resources-card-top-3"></div>
						<div class="cag-resources-card-content">
							<div class="cag-content-title">Guidelines</div>
							<ul class="cag-content-lists">
								<li class="cag-link"><a href="https://www.medscape.org/">ASCO</a></li>
								<li class="cag-link"><a href="https://www.medscape.org/">FDA</a></li>
								<li class="cag-link"><a href="https://www.medscape.org/">ESMO</a></li>
							</ul>
						</div>
					</div> <!-- end card -->
					--%>
					<%--
					<div class="cag-resources-card">
						<div class="cag-resources-card-top cag-resources-card-top-4"></div>
						<div class="cag-resources-card-content">
							<div class="cag-content-title">Patient Education</div>
							<ul class="cag-content-lists">
								<li class="cag-link"><a href="https://www.medscape.org/">Torquem detraxit hosti en quidem faciunt, ut de commodis suis.</a></li>
								<li class="cag-link"><a href="https://www.medscape.org/">In quo enim ipsam per se texit, ne ad minima.</a></li>
								<li class="cag-link"><a href="https://www.medscape.org/">In quo enim ipsam per se texit, ne ad minima.</a></li>
								<!--<li class="cag-view-more">VIEW MORE</li>-->
							</ul>
						</div>
					</div> <!-- end card -->
					--%>
					
					
					
				</div>

			</div>
		</div>







		<%--    ------------------ Committee Section ---------------------
				Gridwork of 3 columns and X rows showing Committee members
				with an image, name, title, and some text for each. The
				"section-title" class is actually the first item in the
				grid, containing the section title and a link to open a
				modal window.
		        -------------------- ------------- -----------------------    --%>

		
				
		<div id="ca-section-5" class="ca-section ca-section--committee cag-committee" style="background-color:#ecf0f0;">
			<div class="container">

				<%-- Section Title -- First element in grid --%>
				<div class="section-title">
					<span class="cag-flex-placeholder"></span>
				
					<h2>Steering Committee</h2>

					<button data-modal="ca-section--disclosures" class="js-open-modal">Disclosures</button>
				</div>

				
				<div class="committee-members-wrapper">
					${generator.contributors}


				</div>
				
				

			
			</div>
		</div>




		
		
		
		
		
		<%--    ------------------ Disclosures Modal ---------------------
				Modal shown only when button is clicked. Contains a header
				with a title &amp; close button, as well as Committee member
				information.
		        -------------------- ------------- -----------------------    --%>

		<%-- "js-modal" class adds functionality and an overlay on top of the page --%>
		<div class="ca-section--disclosures js-modal cag-disclosures">

			<%-- Renders the containing content inside a modal, centered on screen --%>
			<div class="modal-inside">

				<%-- Header bar inside modal --%>
				<header class="modal-header">
					<h4>Disclosures</h4>

					<%-- Close Button for modal --%>
					<button class="close-modal js-close-modal">
						<img src="//<medscape:domain type='imageServer'/>/pi/cme/advances/icons/close-btn--2x.png" alt="">
					</button>
				</header>

				<div class="modal-content">
					<h3>Steering Committee</h3>

					${generator.disclosures}
			
				</div>
			</div>
		</div>

		<%--    ------------------ Discussion Modal ---------------------
				Modal shown only when button is clicked. Contains a header
				with a title &amp; close button, as well as Committee member
				information.
		        -------------------- ------------- -----------------------    --%>

		<%-- "js-modal" class adds functionality and an overlay on top of the page --%>
		<div class="ca-section--discussion-modal js-modal">

			<%-- Renders the containing content inside a modal, centered on screen --%>
			<div class="modal-inside">

				<%-- Header bar inside modal --%>
				<header class="modal-header">
					<h4>Discussion</h4>
					<%-- Close Button for modal --%>
					<button class="close-modal js-close-modal">
						<img src="//<medscape:domain type='imageServer'/>/pi/cme/advances/icons/close-btn--2x.png" alt="">
					</button>
				</header>

				<div class="modal-content">
					<iframe class="js-iframe" data-url="//boards.medscape.com/forums/.2a7f8b40" frameborder="0" src=""></iframe>
				</div>
			</div>
		</div>
		
		

		<%-- Clinical Advances JavaScript file --%>
		<script type="text/javascript" src="//<medscape:domain type="imageServer"/>/medscape-core/cme/js/clinical-advances/clinical-advances-v2.js"></script>
		<script type="text/javascript" src="//<medscape:domain type="imageServer"/>/medscape-core/cme/js/clinical-advances/clinical-advances-global-addon.js"></script>

		<%-- QNA JavaScript file --%>
		<script src="//img.medscapestatic.com/medscape-core/qna-lib/js/qna.min.js"></script>
		<script type="text/javascript">  
		    qna.init();
		</script>

		<%-- Site Footer Include --%>
		<framework:include fragment="footer" adsuppress="true" nocache="true" />

	</body>
</html>
    `
}

// module.exports = jsp