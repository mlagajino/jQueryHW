$(document).ready(function() {

	console.log($("h1"));
	$("h1").hide(1000);
	$("h1").show(2000);

	$("h2").fadeOut(2000);
	$("h2").fadeIn(3000);

	$(".intro").fadeOut(3000);
	$(".intro").fadeIn(4000);

	$(".copy").slideUp();
	$(".end").slideUp(2000);


	//Red box will animate once its clicked on.
	$(".box, .bluebox").click(function() {

		$(".box").animate({
		width: 300,		
		height: 300
		});

		$(".bluebox").animate({
		width: 400,
		height: 400
		});

	});
});