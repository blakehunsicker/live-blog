$(document).ready(function() {
	$('.headline-kicker').children('a').css('display','none');
	// $('<span style="background-color:#DCA48D;padding:5px 10px 5px 10px;margin-bottom:15px;">Supplement explorer</span>').appendTo('.headline-kicker');
	$('<span style="display:inline-block;background-color:#DCA48D;border-radius:1em;padding:6px;margin-right:8px;"></span><span style="font-family:FranklinITCProBold;font-size:16px;">Supplement explorer</span>').appendTo('.headline-kicker');
	$('.headline-kicker').css({
		'margin-top': '25px',
		'margin-bottom': '17px'
	});
	$('#article-topper').children('h1').css('display','none');
	$('<h1>Who are the Syrian activists fighting the Islamic State online?</h1>').appendTo('#article-topper');
	// $('.pb-f-sharebars-utilities-tool-bar').css('display','none');
	$('.pb-f-graphic-graphic-main .graphic-main').css({
		'padding-top': '30px',
		'padding-right': '30px'
	});
	$('.graphic-main-wide').css({
		'padding-right': '40%'
	});
	$('.pb-f-gallery-gallery').css('display','none');
	$('.pb-f-article-article-body .article-body').css('margin-top','0px');
	$('.inline-content').css('display','none');
	$('.pb-sig-line').css('display','none');
	$('#pb-root .pb-feature').css({
		'padding': '30px 30px 10px 10px',
		// 'border-right': 'none'
	});
	$('.flex-embed').css('display','none');
	$('article').children().css('display','none');
	$('#defaultImage').css('display','none');
	$('.wp-inline-bb.pb-centered-bb').css('display','none');
	$('#google_image_div').css('display','none');
	$('.post-body-sig-line').css('display','none');
	$("<div style='height:300px;background-color:#E7E7E7;'></div><div style='font-family:FranklinITCProLight;line-height:1.1rem;font-size:15px;color:#999;margin-top:5px;margin-bottom:10px;'>Activists from the group Raqqa is Being Slaughtered Silently work at their office in Gaziantep, Turkey. (Alice Martins/for The Washington Post)</div><div class='inline-content' style='padding:0px;border-top:none;'></div><p style='font-size:20px;'>Raqqa is Being Slaughtered Silently is an activist group based in Gaziantep, Turkey.</p><p style='font-size:20px;'>Comprised of a dozen 20-something Syrians, it is a leading source of news about life inside the Islamic State.</p><p style='font-size:20px;'>Besides recording the Islamic State’s abuse of Raqqa locals, the group also broke news of a U.S. mission inside Syria last year.</p><p style='font-family:FranklinITCProBold;font-weight:bold;margin-bottom:10px;'>Read:</p><p style='font-family:FranklinITCProLight;line-height:20px;color:#2e6d9d;'>Tunisia, after igniting the Arab Spring, sends the most fighters to Islamic State in Syria</p><p style='font-family:FranklinITCProLight;line-height:20px;color:#2e6d9d;'>Sousse: The beautiful Tunisian city that became a scene of terror</p>").appendTo('article');
});