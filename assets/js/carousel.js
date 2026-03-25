$(document).ready(function() {
  function showSlide(index) {
    var slide = $('.carousel-slide').eq(index);
    $('.carousel-slide').removeClass('active');
    slide.addClass('active');
    $('.carousel-title').text(slide.data('title'));
    $('.carousel-desc').text(slide.data('desc'));
  }

  var current = 0;
  var total = $('.carousel-slide').length;
  showSlide(0);

  $('.carousel-btn.right').click(function() {
    current = (current + 1) % total;
    showSlide(current);
  });

  $('.carousel-btn.left').click(function() {
    current = (current - 1 + total) % total;
    showSlide(current);
  });
});
