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

    $(".thumbnails-4 .thumb-4").each(function() {

        var thumbIndex = $(this).index();

        if( thumbIndex%3 == 0 && thumbIndex != 0) {

            $(this).addClass("big");

        }

    });

});