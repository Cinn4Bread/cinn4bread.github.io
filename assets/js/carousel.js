$(document).ready(function() {
  var titles = [];
  $('.carousel-slide').each(function() {
    titles.push($(this).find('img').attr('alt'));
  });

  function showSlide(index) {
    $('.carousel-slide').removeClass('active');
    $('.carousel-slide').eq(index).addClass('active');
    $('.carousel-title').text(titles[index]);
  }

  var current = 0;
  var total = $('.carousel-slide').length;

  $('.carousel-btn.right').click(function() {
    current = (current + 1) % total;
    showSlide(current);
  });

  $('.carousel-btn.left').click(function() {
    current = (current - 1 + total) % total;
    showSlide(current);
  });
});
