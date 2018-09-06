var sliderName;
var objSlider;
var objMiniaturesSlider;

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
    });

    if( $("#range_1").length > 0 && $("#range_2").length > 0 ) {

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

	}

	$( ".object-slider" ).each(function() {

		sliderName = $(this).attr("data-object-slider");

		objSlider = $(".object-slider[data-object-slider = '"+ sliderName +"']");
		objMiniaturesSlider = $(".object-slider_miniatures[data-object-slider = '"+ sliderName +"']");

		objSlider.not(".slick-initialized").slick({
	        dots: false,
	        arrows: false,
	        autoplay: true,
	        autoplaySpeed: 10000,
	        speed: 1200,
	        fade: true,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        asNavFor: objMiniaturesSlider
	    });

	    objMiniaturesSlider.not(".slick-initialized").slick({
	        dots: false,
	        arrows: false,
	        autoplay: true,
	        autoplaySpeed: 10000,
	        speed: 1200,
	        slidesToShow: 4,
	        slidesToScroll: 1,
	    	focusOnSelect: true,
	    	asNavFor: objSlider,
	        responsive: [
	        {
	          breakpoint: 1200,
	          settings: {
	            slidesToShow: 3,
	            slidesToScroll: 3,
	          }
	        },
	        {
	          breakpoint: 950,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	          }
	        },
	        {
	          breakpoint: 550,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	          }
	        }
	      ]
	    });

	});


});

