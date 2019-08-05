$(function () {
    $('.tagBall a.tag[href^="#"]').on('click', function (e) {
        e.preventDefault();
        let hash = this.hash
        if ($('.output:odd').hasClass('active')) {
            window.setTimeout(gotoSec,500, hash)
        } else if($('.output:even').hasClass('active')){
            window.setTimeout(gotoSec,500, hash)
        } else {
            return
        }

    });

    function gotoSec(hash) {

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function () {
            window.location.hash = hash;
        });
    }

})



