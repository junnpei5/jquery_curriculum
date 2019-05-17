$(function() {
  $('.input').on('keyup', function() {
    var textCount = $('.input').val().replace(/\s+/g,'').length;
    var maxCount = 30;
    var countDown = maxCount - textCount;
    $('.rest-count').text(countDown);
    if(countDown < 0) {
      $('.rest-count').addClass('red');
    }else{
      $('.rest-count').removeClass('red')
    }
  });
});