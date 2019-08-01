$(function () {
    $('.tagBall a.tag[href^="#"]').on('click', function (e) {
        e.preventDefault();
        let hash = this.hash;
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500, function () {
            window.location.hash = hash;
        });
    });

})



