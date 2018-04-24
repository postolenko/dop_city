var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var bgLeft;
var leftCoord;

$(window).load(function() {

    // $("select").each(function() {

    //     var parentBlock = $(this).closest(".select-block");

    //     parentBlock.find(".select2-container").css({
    //         "width" : parentBlock.width() + "px"
    //     });

    // });

    getImgPath();
    getBgPath();
    getAtcile2Bg();
    getAtcile2BgPosition();
    getTHumbsHeight();

});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    getImgPath();
    getBgPath();
    getAtcile2Bg();
    getAtcile2BgPosition();
    getTHumbsHeight();

});

$(document).scroll(function() {

    getImgPath();
    getBgPath();

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

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                if ( $(".popup_wrapp").is(":visible") ) {

                    $(".popup_wrapp").fadeOut(300);

                }

            }

        });

        $(".close-popup").click(function() {

            popupBlock = $(this).closest(".popup_wrapp");

            popupBlock.fadeOut(300);

        });

        $(document).mouseup(function (e){

            hide_element = $('.popup');

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                hide_element.closest(".popup_wrapp").fadeOut(300);
            }

        });

    });

    var cityName;

    $(".cities_list a").click(function(e) {

        e.preventDefault();

        cityName = $(this).text();

        $("#city_ch").val(cityName);

        $(".cities_list a").removeClass("active");

        $(this).addClass("active");

    });

    $(".close_city").click(function(e) {

        e.preventDefault();

        $("#city_title").text(cityName);

        popupBlock = $(this).closest(".popup_wrapp");

        popupBlock.fadeOut(300);

    });

    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".main-nav_wrapp").is(":hidden") ) {

                $(".main-nav_wrapp").fadeIn(300);

                $(this).addClass("active");

            } else {

                $(".main-nav_wrapp").fadeOut(300);

                $(this).removeClass("active");

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27 &&
                $(".main-nav_wrapp").is(":visible") ) {

                    $(".main-nav_wrapp").fadeOut(300);

                    $(".respmenubtn").removeClass("active");

            }

        });

    });


});

function getAtcile2Bg() {

    $(".article_2").each(function() {

        bgLeft = $(this).find(".bg_left");

        leftCoord = $(this).find(".article_2-content").offset().left;

        bgLeft.css({
            "min-width" : leftCoord + ( bgLeft.width() * 0.14 )  + "px"
        });

    });

}

function getAtcile2BgPosition() {

    $(".article_2").each(function() {

        bgLeft = $(this).find(".bg_left");

        bgLeft.css({
            "margin-right" : -( bgLeft.width() * 0.1 ) + "px"
        });

    });

}

function getImgPath() {

    $("img").each(function() {
        if($(this).offset().top <= $(document).scrollTop() + $(window).height()
            && $(this).attr("src") == "" && $(this).attr("data-src") != "") {
            var imgPath = $(this).attr("data-src");
            $(this).addClass("opacity-img");
            $(this).attr("src", imgPath);
            $(this).animate({
                "opacity" : 1
            }, 600);
        }
    });

}

function getBgPath() {

    var bgImgPath;

    $(".bgjs").each(function() {
        if($(this).offset().top <= ( $(document).scrollTop() + $(window).height() + 200 )) {

            if( bodyWidth < parseInt( $(this).attr("data-respbgwidth") ) ) {

                bgImgPath = $(this).attr("data-bgresp");
                $(this).css({
                    "background-image" : "url(" + bgImgPath + ")"
                });

            } else {
                bgImgPath = $(this).attr("data-bg");
                $(this).css({
                    "background-image" : "url(" + bgImgPath + ")"
                });

            }

        }
    });

}

function getTHumbsHeight() {

    if( bodyWidth <= 1124  && bodyWidth > 768 ) {

        $(".thumbnails-4").each(function() {

            thumbsHeightArr = [];

            thumb = $(this).find(".thumb");

            thumb.find(".inner").css({
                "height" : "auto"
            });

            thumb.each(function() {

                thumbHeight = $(this).find(".inner").height();

                thumbsHeightArr.push(thumbHeight);

            });

            maxThumbHeight = Math.max.apply(null, thumbsHeightArr);

            thumb.find(".inner").height(maxThumbHeight);

        });

    } else {

        $(".thumbnails-4").find(".inner").attr("style", "");

    }

}