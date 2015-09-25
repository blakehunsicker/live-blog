$(document).ready(function() {

	$('.pb-f-article-article-topper').css('padding-left','40%');
	$('.headline-kicker').children('a').css('display','none');
	$('#article-topper').children('h1').css('display','none');
	$('<h1 class="new-title">The attack in Sousse, Tunisia (what would this look like after a line break?)</h1>').appendTo('#article-topper');

	// $('#fcdXyf2KeQ3nop').css({
	// 	'width':'60%',
	// 	'margin-right':'0px !important'
	// });

	$('.graphic-main-wide').css({
		'margin-left': '40%'
	});

	$('article').children().css('display','none');

	$("<div style='height:300px;background-color:#E7E7E7;'></div><div style='font-family:FranklinITCProLight;line-height:1.1rem;font-size:15px;color:#999;margin-top:5px;margin-bottom:10px;'>Police officers control the crowd (rear) while surrounding a man (front center) suspected to be involved the attack on a beach in Sousse, Tunisia. (Amine Ben Aziza/Reuters)</div><div class='inline-content' style='padding:0px;border-top:none;'></div><p style='font-size:20px;'>A gunman opened fire on beachgoers at a resort frequented by Europeans in what is widely seen as a campaign to devastate Tunisia's tourism industry.</p><p style='font-size:20px;'>Many of the dead and injured were from Britain.</p><p style='font-family:FranklinITCProBold;font-weight:bold;margin-bottom:10px;'>Read:</p><p style='font-family:FranklinITCProLight;line-height:20px;color:#2e6d9d;'>Tunisia, after igniting the Arab Spring, sends the most fighters to Islamic State in Syria</p><p style='font-family:FranklinITCProLight;line-height:20px;color:#2e6d9d;'>Sousse: The beautiful Tunisian city that became a scene of terror</p>").appendTo('article');
})