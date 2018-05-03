$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

	if( bodyWidth <= 768 ) {

		$(".main-nav").mCustomScrollbar();

	} else {

		$(".main-nav").mCustomScrollbar("destroy");

	}

});

$(window).resize(function() {

	if( bodyWidth <= 768 ) {

		$(".main-nav").mCustomScrollbar();

	} else {

		$(".main-nav").mCustomScrollbar("destroy");

	}

});

$(document).ready(function() {		

	// $("select").each(function() {

	// 	$(this).select2({
	// 		minimumResultsForSearch: Infinity
	// 	});

	// });

	$(".type_build_sl").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1
        // fade: true
    });

});

