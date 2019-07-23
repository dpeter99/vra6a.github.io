$(window).on('scroll', function(){
	if($(window).scrollTop() > 400) {
		$('nav').addClass('sticky');
	}
	else {
		$('nav').removeClass('sticky');
	}
})