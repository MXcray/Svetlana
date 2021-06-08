$( document ).ready(function() {
    $(".slider__content").slick({
    	slidesToShow: 3,
    	dots: true,
    	dotsClass: 'slider__dots',
    	arrows: false,
		responsive: [
			{ 
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
			}
		],
    })
	
});