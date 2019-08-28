$(window).on('scroll', function(){
	if($(window).scrollTop() > 30) {
		$('nav').addClass('sticky');
		$('nav li').addClass('sticky2');
	}
	else {
		$('nav').removeClass('sticky');
		$('a').removeClass('sticky2');
	}
})

const navSlide = () => {
	const lineBurger = document.querySelector('.line-burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	lineBurger.addEventListener('click', () => {

		nav.classList.toggle('nav-active');

		navLinks.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = ''
			}else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 }s`;
			}
		});

		lineBurger.classList.toggle('toggle');

	});

}

navSlide();

var number = 0;

$(document).ready(function(){

	var cartDisplay = document.getElementById("cart");
	var cartnumber = document.getElementsByClassName('button');

	for (var i=0; i < 26; i++) {
		var buttons = cartnumber[i];
		buttons.addEventListener('click', function() {
			number += 1;
			console.log('clicked');
			console.log(number);
			cartDisplay.textContent = number;
		})
	}

});