$(document).ready(function() {
	// $('#article-topper').css('padding-left','20%');
	// $('.pb-f-gallery-gallery').css('padding-left','20%');
	$('#article-topper').children('h1').css('display','none');
	$('<h1>The attack in Sousse, Tunisia</h1>').appendTo('#article-topper');
	$('.wp-volt-gal').css('display','none');
	$('.pb-f-sharebars-utilities-tool-bar').css('display','none');
	$("<div style='width:60%;height:300px;background-color:#E7E7E7;margin-left:10px;'></div><div style='width:60%;font-family:FranklinITCProLight;line-height:20px;font-size:15px;color:#6e6e6e;padding-left:10px;margin-top:5px;margin-bottom:10px;'>Police officers control the crowd (rear) while surrounding a man (front center) suspected to be involved the attack on a beach in Sousse, Tunisia. (Amine Ben Aziza/Reuters)</div><p style='font-size:18px;width:60%;padding-left:10px;'>A gunman opened fire on beachgoers at a resort frequented by Europeans in what is widely seen as a campaign to devastate Tunisia's tourism industry.</p><p style='font-size:18px;width:60%;padding-left:10px;'>Many of the dead and injured were from Britain.</p><p style='font-family:FranklinITCProBold;font-weight:bold;padding-left:10px;'>Read:</p><p style='width:60%;font-family:FranklinITCProLight;color:#2e6d9d;padding-left:10px;'>Tunisia, after igniting the Arab Spring, sends the most fighters to Islamic State in Syria</p><p style='width:60%;font-family:FranklinITCProLight;color:#2e6d9d;padding-left:10px;'>Sousse: The beautiful Tunisian city that became a scene of terror</p>").appendTo('.pb-f-gallery-gallery');
});