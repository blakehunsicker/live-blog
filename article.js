$(document).ready(function() {
	$('.headline-kicker').children('a').css('display','none');
	// $('<span style="background-color:#DCA48D;padding:5px 10px 5px 10px;margin-bottom:15px;">Supplement explorer</span>').appendTo('.headline-kicker');
	$('<h2><span style="display:inline-block;background-color:#DCA48D;border-radius:1em;padding:6px;margin-right:8px;"></span><span style="font-family:FranklinITCProBold;font-size:16px;">Supplement explorer</span></h2>').appendTo('.headline-kicker');
	$('.headline-kicker').css({
		'margin-top': '25px',
		'margin-bottom': '17px'
	});
	$('#article-topper').children('h1').css('display','none');
	$('<h1>The attack in Sousse, Tunisia (what would this look like after a line break?)</h1>').appendTo('#article-topper');
	// $('.pb-f-sharebars-utilities-tool-bar').css('display','none');
	$('.pb-f-gallery-gallery').css('display','none');
	$('.pb-f-article-article-body .article-body').css('margin-top','0px');
	$('.inline-content').css('display','none');
	$('.pb-sig-line').css('display','none');
	$('#pb-root .pb-feature').css({
		'padding': '10px 30px 10px 10px',
		// 'border-right': 'none'
	});
	$('.flex-embed').css('display','none');
	$('article').children().css('display','none');
	$('#defaultImage').css('display','none');
	$('.wp-inline-bb.pb-centered-bb').css('display','none');
	$('#google_image_div').css('display','none');
	$('.post-body-sig-line').css('display','none');
	$("<div style='height:300px;background-color:#E7E7E7;'></div><div style='font-family:FranklinITCProLight;line-height:1.1rem;font-size:15px;color:#999;margin-top:5px;margin-bottom:10px;'>Police officers control the crowd (rear) while surrounding a man (front center) suspected to be involved the attack on a beach in Sousse, Tunisia. (Amine Ben Aziza/Reuters)</div><p style='font-size:18px;'>A gunman opened fire on beachgoers at a resort frequented by Europeans in what is widely seen as a campaign to devastate Tunisia's tourism industry.</p><p style='font-size:18px;'>Many of the dead and injured were from Britain.</p><p style='font-family:FranklinITCProBold;font-weight:bold;margin-bottom:10px;'>Read:</p><p style='font-family:FranklinITCProLight;line-height:20px;color:#2e6d9d;'>Tunisia, after igniting the Arab Spring, sends the most fighters to Islamic State in Syria</p><p style='font-family:FranklinITCProLight;line-height:20px;color:#2e6d9d;'>Sousse: The beautiful Tunisian city that became a scene of terror</p>").appendTo('article');
});