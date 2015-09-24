$(document).ready(function() {
	$('.headline-kicker').children('a').css('display','none');
	// $('<span style="background-color:#DCA48D;padding:5px 10px 5px 10px;margin-bottom:15px;">Supplement explorer</span>').appendTo('.headline-kicker');
	$('.headline-kicker').css({
		'margin-top': '25px',
		'margin-bottom': '17px'
	});
	$('#article-topper').children('h1').css('display','none');
	$('<h1 class="new-title">The attack in Sousse, Tunisia (what would this look like after a line break?)</h1>').appendTo('#article-topper');
	$('<div class="supplement-tag" style="pointer:cursor;margin-bottom:20px;"><span style="display:inline-block;background-color:#DCA48D;border-radius:1em;padding:6px;margin-right:8px;"></span><span class="index-title" style="font-family:FranklinITCProBold;font-size:16px;color:#333;">Topic Index</span> <span class="index-text" style="font-family:FranklinITCProBold;font-size:16px;color:#b2b2b2;">Basics and background on the news</span></span></div>').insertAfter('.headline-kicker');
	$('.supplement-tag').hover(
		function() {
			$('.index-title').css({
				'text-decoration':'underline',
				'cursor':'pointer'
			});
			$('.index-text').css({
				'cursor':'pointer'
			});
		}, function() {
			$('.index-title').css('text-decoration','none');
			$('.index-text').css('color','#b2b2b2');
		}
	);
	
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
	// $("<span class='pb-timestamp'>September 24 at 10:29 AM</span>").appendTo('article');
	$("<div style='height:300px;background-color:#E7E7E7;'></div><div style='font-family:FranklinITCProLight;line-height:1.1rem;font-size:15px;color:#999;margin-top:5px;margin-bottom:10px;'>Police officers control the crowd (rear) while surrounding a man (front center) suspected to be involved the attack on a beach in Sousse, Tunisia. (Amine Ben Aziza/Reuters)</div><div class='inline-content' style='padding:0px;border-top:none;'></div><p style='font-size:20px;'>A gunman opened fire on beachgoers at a resort frequented by Europeans in what is widely seen as a campaign to devastate Tunisia's tourism industry.</p><p style='font-size:20px;'>Many of the dead and injured were from Britain.</p><p style='font-family:FranklinITCProBold;font-weight:bold;margin-bottom:10px;'>Read:</p><p style='font-family:FranklinITCProLight;line-height:20px;color:#2e6d9d;'>Tunisia, after igniting the Arab Spring, sends the most fighters to Islamic State in Syria</p><p style='font-family:FranklinITCProLight;line-height:20px;color:#2e6d9d;'>Sousse: The beautiful Tunisian city that became a scene of terror</p>").appendTo('article');
});