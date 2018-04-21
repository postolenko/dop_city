var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

    $("select").each(function() {

        var parentBlock = $(this).closest(".select-block");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

});

$(window).resize(function() {



});

$(document).ready(function() {

    $("input[type='tel']").mask("+7 (999) 999-99-99");

    $(".thumbnails-4 .thumb-4").each(function() {

        var thumbIndex = $(this).index();

        if( thumbIndex%3 == 0 && thumbIndex != 0) {

            $(this).addClass("big");

        }

    });

    $(function() {

        $(".show_popup").click(function(e) {

            e.preventDefault();

            popupName = $(this).attr("data-popup-name");
            popupBlock = $("[data-popup = '"+ popupName +"']");

            popupBlock.fadeIn(400);

        });

        // $(this).keydown(function(eventObject){

        //     if (eventObject.which == 27) {

        //         if ( $(".popup_wrapp").is(":visible") ) {

        //             $(".popup_wrapp").fadeOut(300);

        //         }

        //     }

        // });

        $(".close-popup").click(function() {

            popupBlock = $(this).closest(".popup_wrapp");

            popupBlock.fadeOut(300);

        });

        // $(document).mouseup(function (e){

        //     hide_element = $('.popup');

        //     if (!hide_element.is(e.target)

        //         && hide_element.has(e.target).length === 0) {

        //         hide_element.closest(".popup_wrapp").fadeOut(300);
        //     }

        // });

    });

    $(".cities_list a").click(function(e) {

        e.preventDefault();

        var linkTxt = $(this).text();

        $("#city_ch").val(linkTxt);

        // parentBlock = $(this).closest(".cities_list");

        $(".cities_list a").removeClass("active");

        $(this).addClass("active");

    });

});

function getAtcile2Bg() {

    $(".article_2").each(function() {

        var bgLeft = $(this).find(".bg_left");

    });

}