$(document).ready(function() {

	$('#liveblog-story-list').css({
		'width': '60%',
		'float': 'right'
	});

	$('#liveblog-load-more').css({
		'float': 'right'
	});

	$('#liveblog-permalink').after('<div class="supplement-key" style="position:relative;width:35%;height:200px;float:left;background-color:#666;"></div>')

	var $supp_key = $('.supplement-key');

	$(window).scroll(function(e) {
		e.preventDefault();

		var story_list_offset = $('#liveblog-story-list').offset().top - $(window).scrollTop();
		console.log(story_list_offset);

		if (story_list_offset < 20) {
			$supp_key.css({
				'position': 'fixed',
				'width': $('.pb-f-liveblog-story-list').width() / 3 + 'px'
				'top': '50px'
			})
		} else if (story_list_offset > 21) {
			$supp_key.css({
				'position': 'relative',
				'top': 'auto'
			})
		}
	});

});