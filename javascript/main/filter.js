'use strict';

$(function() {
	$('.filter').on('click', function() {
		var chosenfilter = $(this).attr('data-filter');
		$('.hidable').hide();
		$('.'+chosenfilter).show();
	});
});