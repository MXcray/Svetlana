// $( document ).ready(function() {
// 	$(".menu__link").click(function() {
// 		$(".menu__link").addClass(".menu__link_active");
// 	})
// });
$('a[href="' + document.location.href.split('/').pop() +  '"]').addClass('selected');