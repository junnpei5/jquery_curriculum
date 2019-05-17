$('.nav').find('li').click(function() {
  var num = $(this).index();
  $('.contents').find('li').addClass('is-hidden');
  $('.contents').find('li').eq(num).removeClass('is-hidden');
});