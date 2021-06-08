// $( document ).ready(function() {
// 	$(".menu__link").click(function() {
// 		$(".menu__link").addClass(".menu__link_active");
// 	})
// });


//запоминание страницы 
$('a[href="' + document.location.href.split('/').pop() +  '"]').addClass('selected');

//бургер
(function () {
    const burger = document.querySelector('.menu');
    burger.addEventListener('click', () => {
        burger.classList.toggle('responsive');
    });
}());