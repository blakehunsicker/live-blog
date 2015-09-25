$(document).ready(function() {

	$('.pb-f-article-article-topper').css('padding-left','40%');
	$('.headline-kicker').children('a').css('display','none');
	$('#article-topper').children('h1').css('display','none');
	$('<h1 class="new-title">The attack in Sousse, Tunisia (what would this look like after a line break?)</h1>').appendTo('#article-topper');

	$('.pb-f-sharebars-top-share-bar').css({
		'width':'60%',
		'padding-left':'40%!important',
		'padding-right':'30px'
	});

	$('.graphic-main-wide').css({
		'margin-left': '40%'
	});
})