var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var bgLeft;
var leftCoord;

var parentBlock;

$(window).load(function() {

    getWrapperParams();
    getImgPath();
    getBgPath();
    getAtcile2Bg();
    getAtcile2BgPosition();
    getTHumbsHeight();
    getMapSize();
    getSelectWidth();

});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    getWrapperParams();
    getImgPath();
    getBgPath();
    getAtcile2Bg();
    getAtcile2BgPosition();
    getTHumbsHeight();
    getMapSize();
    getSelectWidth();

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

        $(".close-popup").click(function(e) {

            e.preventDefault();

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

    $(".window_miniatures .wind_type").click(function(e) {

        e.preventDefault();
        
        if( !$(this).hasClass("active") ) {

            parentBlock = $(this).closest(".window_miniatures");

            parentBlock.find(".wind_type").removeClass("active");

            $(this).addClass("active");

        }        

    });

    $( "input[type='file']" ).change(function() {

      fileValArr = $(this).val().split("\\");

      fileName = fileValArr[fileValArr.length - 1];

      parentBlock = $(this).closest(".upload");

      fileNameWrapp = parentBlock.find("label span");

      fileNameWrapp.text(fileName);

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

function getWrapperParams() {

    if(bodyWidth <= 768 ) {

        $(".wrapper").css({
            "padding-top" : $(".header-site").height() + "px"
        });

    } else {

        $(".wrapper").css({
            "padding-top" : 0
        });

    }    

}

function getMapSize() {

    var map;
    var contactsText;

    $(".contacts-sect").each(function() {

        map = $(this).find("#map");
        contactsText = $(this).find(".contacts_wrapp");

        if( bodyWidth >= 1024 ) {                

            map.css({
                "min-height" : contactsText.outerHeight() + "px"
            });

        } else {

            map.css({
                "min-height" : "auto"
            });

        }

    });

}


function getSelectWidth() {

    $("select").each(function() {

        parentBlock = $(this).closest(".select-block");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

}