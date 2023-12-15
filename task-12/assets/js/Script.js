$(document).ready(function () {
// light box 
	var $overlay = $('<div class="overlay"></div>');
	var $image = $('<img>');

	$overlay.append($image);
	$("body").append($overlay);

	$(".pics a").click(function (event) {
		event.preventDefault();
		var href = $(this).attr("href");

		$image.attr("src", href);

		console.log("img: " + href);
		$overlay.fadeIn("slow");
	});

	$(".overlay").click(function () {
		$(this).fadeOut("slow");
	});

});