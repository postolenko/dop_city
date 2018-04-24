$(window).on("load",function(){

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
