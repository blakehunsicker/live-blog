$(document).ready(function() {

	var key_width = $('.pb-f-liveblog-story-list').width() / 3 + 'px';

	$('#liveblog-story-list').css({
		'width': '60%',
		'float': 'right'
	});

	$('#liveblog-load-more').css({
		'float': 'right'
	});

	$('#liveblog-permalink').after('<div class="supplement-key" style="position:relative;float:left;"><i class="fa fa-map" style="color:#6B6B6B;"></i><span class="supp-header" style="font-family:FranklinITCProBold;color:#6B6B6B;">    RELATED SUPPLEMENTS</span></div>')

	var $supp_key = $('.supplement-key');

	$supp_key.hover(
		function() {
			$('.supp-header').css({
				'color': '#2a2a2a',
				'cursor': 'pointer'
			});
			$('.fa-map').css('color','#2a2a2a');
		}, function() {
			$('.supp-header').css({
				'color': '#2a2a2a',
				'cursor': 'pointer'
			});
			$('.fa-map').css('color','#6B6B6B');
		}
	)

	$(window).scroll(function(e) {
		e.preventDefault();

		var story_list_offset = $('#liveblog-story-list').offset().top - $(window).scrollTop();

		console.log(story_list_offset);

		if (story_list_offset < 60) {
			$supp_key.css({
				'position': 'fixed',
				'width': key_width,
				'top': '60px'
			})
		} else if (story_list_offset > 61) {
			$supp_key.css({
				'position': 'relative',
				'top': 'auto'
			})
		}
	});

});