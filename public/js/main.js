$(function () {
  console.log(`It's OK!!!`);

  let outputOdd = $('.output:odd'),
    outputEven = $('.output:even'),
    output = $('.output')

  $('.tagBall').cloudTag({ballSize: 150});

  let odd = $('.tag:odd')
  console.log(odd);
  let i = 0
  odd.on('click', () => {
    i++
    output.removeClass('active')
    outputOdd.addClass('active')
    console.log(`it's odd~~!${i} times~~`);
  })

  let even = $('.tag:even')
  console.log(even);
  let x = 0
  even.on('click', () => {
    x++
    output.removeClass('active')
    outputEven.addClass('active')
    console.log(`it's even~~!${x} times~~`);
  })
})