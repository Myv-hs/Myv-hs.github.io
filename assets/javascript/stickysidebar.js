$(window).scroll(function(){
	var windowTop = $(window).scrollTop();
	var stayAtTop = $('#sidebar');

	stayAtTop.css('top', $(this).scrollTop());
});