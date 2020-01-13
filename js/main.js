"use strict"

$(document).ready(function(){
	$('.slick-slider').slick({
		dots: true,
		arrows: false,
	});
	$('.slick-slider--small').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 2
	});
});
