$(function () {
    console.log(`It's OK!!!`);

    let outputOdd = $('.output:odd'),
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
    console.log(odd);
    let i = 0
    odd.on('click', () => {
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
        i++
        output.removeClass('active')
        outputOdd.addClass('active')
        console.log(`it's odd~~!${i} times~~`);
    })

    let even = $('.tag:even')
    console.log(even);
    let x = 0
    even.on('click', () => {
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

        x++
        output.removeClass('active')
        outputEven.addClass('active')
        console.log(`it's even~~!${x} times~~`);
    })


})