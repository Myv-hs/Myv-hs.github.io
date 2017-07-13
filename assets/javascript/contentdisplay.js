'use strict';
$('.content').hide();
$(function() {
	$('.content-icon').on('click', function() {
		var chosencontent = $(this).attr('data-title');
		if (!$('.'+chosencontent).is(":visible")) {
			$('.content').slideUp();			
			$('.'+chosencontent).slideDown(1000, function() {
				$('html, body').animate({scrollTop: 400}, 200);
			});
		} else {
			$('.content').slideUp(1000, function() {
				$('html, body').animate({scrollTop: 0}, 200);
			});
		}
	});
});