$(window).on("scroll", function() {
    if ($(window).scrollTop() > 0) {
        $("#head").addClass("fixed-header");
    } else {
        $("#head").removeClass("fixed-header");
    }

});

$(document).ready(function() {
    $(".initial-v-fade").each(function() {
        $('.initial-v-fade').delay(200).queue(function () {
            $(this).addClass("fadein");
        });
    });
    $(".initial-fade").each(function() {
        $('.initial-fade').delay(500).queue(function () {
            $(this).addClass("fadein");
        });
    });
});