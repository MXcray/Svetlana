$( document ).ready(function() {
    $(".slider__content").slick({
    	slidesToShow: 3,
    	dots: true,
    	dotsClass: 'slider__dots',
    	arrows: false
    })

	$("menu__link").click(function() {
		$(this).addClass('.menu__link_active');
	})
});