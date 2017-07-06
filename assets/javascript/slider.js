'use strict';

$(function() {

	//Cache DOM
	var $slider = $('#slider');
	var $slidecontainer = $slider.find('.slides');
	var $slides = $slidecontainer.find('.slide');
	var $viewwidth = $slider.width();

	//configuration
	var width = $viewwidth;
	var animationspeed = 1000;
	var pause = 4000;
	var currentslide = 1;

	function reset (bool) {
		if (bool) {
			var newmargin = (currentslide-1)*width*-1;
			$slidecontainer.css('margin-left', newmargin);
			console.log("resting margine size");
		} else {
			currentslide = 1;
			$slidecontainer.css('margin-left', 0);
			console.log("resting Slides");
		}
	}

	setInterval(function() {
		$slidecontainer.animate({'margin-left': "-="+width}, animationspeed, function() {
			currentslide++;
			if (currentslide === $slides.length) {
				console.log("last Slide");
				reset(false);
			}
		});
	}, pause);

	$(window).resize(function(){
		console.log("Resize");
		width = $slider.width();
		console.log(width);
		reset(true);
	});
});