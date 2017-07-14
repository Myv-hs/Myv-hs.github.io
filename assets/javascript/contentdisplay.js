'use strict';
$('.content').hide();

var urlSelector = window.location.hash;
var urlSelector = urlSelector.split("#")[1];
console.log(urlSelector);
if (urlSelector) {
	$('.'+urlSelector).slideDown(1000, function() {
		$('html, body').animate({scrollTop: 400}, 200);
	});
}

$(function() {
	$('.content-icon').on('click', function() {
		var chosencontent = $(this).attr('data-title');
		if (!$('.'+chosencontent).is(":visible")) {
			window.location.hash = chosencontent;
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