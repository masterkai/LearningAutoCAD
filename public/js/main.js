$(function () {
    renderEven()
    console.log(`It's OK!!!`);
    const outputOdd = $('.output:odd'),
        outputEven = $('.output:even'),
        output = $('.output')


    if ($(window).width() < 700) {
        $('.tagBall').cloudTag({ballSize: 120});
    } else if ($(window).width() < 500) {
        $('.tagBall').cloudTag({ballSize: 50});
    } else {
        $('.tagBall').cloudTag({ballSize: 170});
    }


    let odd = $('.tag:odd')

    odd.on('click', () => {
        if (outputOdd.hasClass('active')) {
            return
        } else {
            output.removeClass('active')
            outputOdd.addClass('active')
            renderOdd()
        }
    })

    let even = $('.tag:even')

    even.on('click', () => {
        if (outputEven.hasClass('active')) {
            return
        } else {
            output.removeClass('active')
            outputEven.addClass('active')
            renderEven()
        }


    })

    function renderOdd() {
        $('.output:odd .bar').animate({
            flexBasis: '0'
        }, 0)
        $('.output:odd .bar:eq(0)').animate({
            flexBasis: '40%'
        }, 2500)
        $('.output:odd .bar:eq(1)').animate({
            flexBasis: '58%'
        }, 2500)
        $('.output:odd .bar:eq(2)').animate({
            flexBasis: '50%'
        }, 2500)
        $('.output:odd .bar:eq(3)').animate({
            flexBasis: '55%'
        }, 2500)
        $('.output:odd .bar:eq(4)').animate({
            flexBasis: '50%'
        }, 2500)
        $('.output:odd .bar:eq(5)').animate({
            flexBasis: '43%'
        }, 2500)


    }

    function renderEven() {
        $('.output:even .bar').animate({
            flexBasis: '0'
        }, 0)
        $('.output:even .bar:eq(0)').animate({
            flexBasis: '76%'
        }, 2500)
        $('.output:even .bar:eq(1)').animate({
            flexBasis: '43%'
        }, 2500)
        $('.output:even .bar:eq(2)').animate({
            flexBasis: '48%'
        }, 2500)
        $('.output:even .bar:eq(3)').animate({
            flexBasis: '55%'
        }, 2500)
        $('.output:even .bar:eq(4)').animate({
            flexBasis: '50%'
        }, 2500)
        $('.output:even .bar:eq(5)').animate({
            flexBasis: '42%'
        }, 2500)


    }
})
