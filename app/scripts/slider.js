var slider = (function(){

	var
		run,
		$sliderList = $('.slider-list'),

		settings = {
			speed: 5000
		};

	var init = function (newSettings) {
			if (newSettings) {
				settings = $.extend(settings, newSettings);
			}

			// run slider
			run = setInterval('slider.move()', settings.speed);

			// stop on hover
			slider.stop();
		},

		move = function () {
			var
				$slides = $('.slider-list-item'),
				slideWidth = $slides.outerWidth(true),
				leftIndent = parseInt($sliderList.css('left')) - slideWidth,
				leftValue = slideWidth * (-1);

			$sliderList.not(':animated').animate({'left': leftIndent}, 'slow', function () {
				$sliderList.find($slides).last().after($sliderList.find($slides).first());
				$sliderList.css({'left': leftValue});
			});
			return false;
		},

		stop = function () {
			var enterEvent = 'touchstart',
				leaveEvent = 'touchend';

			if (!('ontouchstart' in window)) {
				// if no touch
				enterEvent = 'mouseenter';
				leaveEvent = 'mouseleave';
			}

			$sliderList.on(enterEvent, function () {
				clearInterval(run);
			});
			$sliderList.on(leaveEvent, function () {
				run = setInterval('slider.move()', settings.speed);
			});
		};

	return {
		init: init,
		move: move,
		stop: stop
	};
})();