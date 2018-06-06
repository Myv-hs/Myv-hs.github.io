$(function() {
			var lang = "EN";
			var chosenfilter = "hidable";
			$(document).ready(function(){
				$('.hidable').hide();
				$('.'+lang+'.'+chosenfilter).show();
			});
			$('.lang-filter').on('click', function(){
				lang = $(this).attr('data-lang');
				$('.hidable').hide();
				$('.'+lang+'.'+chosenfilter).show();
			});
			$('.filter').on('click', function() {
				chosenfilter = $(this).attr('data-filter');
				$('.hidable').hide();
				$('.'+lang+'.'+chosenfilter).show();
			});
		});