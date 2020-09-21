// Animation carousel taken from https://www.codeply.com/go/UBE4KZIeSJ, original from https://stackoverflow.com/questions/20007610/bootstrap-carousel-multiple-frames-at-once

// $('#carousel').carousel({
//     interval: 10000
//   })
  
$('.carousel-immunity .carousel-immunity-item').each(function () {
  var minPerSlide = 3;
  var next = $(this).next();

  if (!next.length) {
    next = $(this).siblings(':first');
  }

  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();

    if (!next.length) {
      next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));
  }
});


$('.carousel-balanced .carousel-balanced-item').each(function () {
  var minPerSlide = 3;
  var next = $(this).next();

  if (!next.length) {
    next = $(this).siblings(':first');
  }

  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();

    if (!next.length) {
      next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));
  }
});
  