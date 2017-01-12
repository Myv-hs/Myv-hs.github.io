$(window).scroll(function(){
			var windowTop = $(window).scrollTop();
			var headTop = $('#DoNotStayAtTop').offset().top;
			var headBottom = headTop + $('#DoNotStayAtTop').height();
			var stayAtTop = $('#stayAtTop');
			if (headBottom < windowTop) {
    			stayAtTop.css('top', $(this).scrollTop()-225);
			} else {
				$('#stayAtTop').css('top', 0);
			}
		});