$(document).ready(function() {

	var key_width = $('.pb-f-liveblog-story-list').width() / 3 + 'px';

	$('#liveblog-story-list').css({
		'width': '60%',
		'float': 'right'
	});

	$('#liveblog-load-more').css({
		'float': 'right'
	});

	$('#liveblog-permalink').after('<div class="supplement-key" style="position:relative;width:' + key_width + ';height:200px;float:left;"><i class="fa fa-map" style="color:#2a2a2a;"></i><span style="font-family:FranklinITCProBold;color:#777;">    RELATED SUPPLEMENTS</span></div>')

	var $supp_key = $('.supplement-key');

	$(window).scroll(function(e) {
		e.preventDefault();

		var story_list_offset = $('#liveblog-story-list').offset().top - $(window).scrollTop();

		console.log(story_list_offset);

		if (story_list_offset < 50) {
			$supp_key.css({
				'position': 'fixed',
				'width': key_width,
				'top': '50px'
			})
		} else if (story_list_offset > 51) {
			$supp_key.css({
				'position': 'relative',
				'top': 'auto'
			})
		}
	});

});