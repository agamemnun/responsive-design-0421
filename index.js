$(function () {
  $('.main-carousel').on('touchstart', function (event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function (event) {
      var xMove = event.originalEvent.touches[0].pageX;
      if (Math.floor(xClick - xMove) > 5) {
        nextSlide(this);
      } else if (Math.floor(xClick - xMove) < -5) {
        prevSlide(this);
      }
    });
    $('.main-carousel').on('touchend', function () {
      $(this).off('touchmove');
    });
  });

  $('.product-carousel').on('touchstart', function (event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function (event) {
      var xMove = event.originalEvent.touches[0].pageX;
      if (Math.floor(xClick - xMove) > 5) {
        nextSlide(this);
      } else if (Math.floor(xClick - xMove) < -5) {
        prevSlide(this);
      }
    });
    $('.product-carousel').on('touchend', function () {
      $(this).off('touchmove');
    });
  });
});

function nextSlide(carousel) {
  var nextSlide =
    $(carousel).find('.carousel-open:checked').nextAll('.carousel-open')[0] ||
    $(carousel).find('.carousel-open:not(:checked)')[0];
  if (nextSlide) {
    nextSlide.click();
  }
}

function prevSlide(carousel) {
  var prevSlide =
    $(carousel).find('.carousel-open:checked').prevAll('.carousel-open')[0] ||
    $(carousel).find('.carousel-open:not(:checked):last-of-type')[0];
  if (prevSlide) {
    prevSlide.click();
  }
}
