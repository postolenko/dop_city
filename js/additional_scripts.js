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

	$("select").each(function() {

		$(this).select2({
			minimumResultsForSearch: Infinity
		});

	});

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

    var range1 = document.getElementById('range_1');
    var range2 = document.getElementById('range_2');

    noUiSlider.create(range1, {
		start: 1350,
		connect: true,
		tooltips: true,
		format: wNumb({
	        decimals: 0
	    }),
		orientation: 'vertical',
		range: {
			'min': 0,
			'max': 10000
		}
	});

	 noUiSlider.create(range2, {
		start: 0,
		connect: true,
		tooltips: true,
		format: wNumb({
	        decimals: 0
	    }),
		range: {
			'min': 0,
			'max': 10000
		}
	});

	range1.noUiSlider.on('update', function( values, handle ){
		$("#range1_val").val(parseInt( values[handle] ) );
	});

	range2.noUiSlider.on('update', function( values, handle ){
		$("#range2_val").val(parseInt( values[handle] ) );
	});

	// --------------------

	var inputRange;

	var range1Val = document.getElementById('range1_val');

	range1Val.addEventListener('change', function(){
		inputRange = parseInt( $(this).val() );
        range1.noUiSlider.set([inputRange, null]);
	});

	var range2Val = document.getElementById('range2_val');

	range2Val.addEventListener('change', function(){
		inputRange = parseInt( $(this).val() );
        range2.noUiSlider.set([inputRange, null]);
	});


});

