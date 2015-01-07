'use strict';

$(function() {

	//configuration
	var width = 720;
	var animationspeed = 1000;
	var pause = 4000;
	var currentslide = 1;

	//Cache DOM
	var $slider = $('#slider');
	var $slidecontainer = $slider.find('.slides');
	var $slides = $slidecontainer.find('.slide');

	setInterval(function() {
		$slidecontainer.animate({'margin-left': "-="+width}, animationspeed, function() {
			currentslide++;
			if (currentslide === $slides.length) {
				currentslide = 1;
				$slidecontainer.css('margin-left', 0);
			}
		});
	}, pause);

});