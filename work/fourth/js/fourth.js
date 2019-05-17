$(function() {
  // $('.menu__list__title').hover(function() {
  //   $(this).next().stop().slideDown(500);
  //   $(this).next().hover(function() {
  //     $(this).stop();
  //   }, function() {
  //     $(this).stop().slideUp(500);
  //   });
  // }, function() {
  //   $(this).next().stop().slideUp(500);
  // });

  $('.menu__list').find('li').hover(function() {
    $(this).children('ul').stop().slideDown(500);
  },function() {
    $(this).children('ul').stop().slideUp(500);
  });
});