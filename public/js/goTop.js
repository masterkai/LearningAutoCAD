$(function() {
    $("#GOTOP").click(function() {
        jQuery("html,body").animate({
            scrollTop: $('.form').offset().top
        }, 400);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 120) {
            $("#GOTOP").fadeIn(300).addClass("active");
        } else {
            $("#GOTOP").stop().fadeOut(300).removeClass("active");
        }
    });
});