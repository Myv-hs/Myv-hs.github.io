'use strict';

$(function() {
	$('.filter').on('click', function() {
		chosenfilter = $(this).attr('data-filter');
		$('.hidable').hide();
		$('.'+chosenfilter).show();
	});
});