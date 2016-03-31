// loading screen
$(window).load(function() {
	var $body = $('body');

	// added loading class
	$body.addClass('loading');

	// remove loading screen
	setTimeout(function(){
		$body.removeClass('loading init-screen');
	}, 2700);

});

$(document).ready(function () {
	// slider initialization
	if ($('.slider-list').length) {
		$(window).on('load', function () {
			slider.init({speed: 4000}); // speed
		});
	}
});