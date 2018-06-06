function KeepAspectRatio () {
	$('#Video').height($('#Video').width()*0.5625)
	console.log($('#Video').width());
	console.log($('#Video').height());
}

$(KeepAspectRatio);

$(window).resize(KeepAspectRatio);