'use strict';

$(document).ready(function () {
	var urlSelector = window.location.hash;
	if (urlSelector) {
		urlSelector = urlSelector.split("#")[1];
		if (urlSelector.indexOf('_') > -1) {
			console.log("filter.js :: Otherfilter");
			return;
			/*urlSelector = urlSelector.split("_")[0];*/
		}
		console.log("filter.js :: "+window.location.href);
		console.log("filter.js :: "+urlSelector);
		$('.hidable').hide();
		$('.'+urlSelector).show();
	}
});

$(function() {
	$('.filter').on('click', function() {
		var chosenfilter = $(this).attr('data-filter');
		if(chosenfilter != "hidable"){
			window.location.hash = chosenfilter;
		}
		$('.hidable').hide();
		$('.'+chosenfilter).show();
	});
});