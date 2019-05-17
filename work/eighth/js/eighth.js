$(function() {
  $(window).scroll(function() {
    var scrollpoint = $(window).scrollTop();
    // console.log(scrollpoint)
    if (scrollpoint > 100) {
      $('.scrollTopBtn').fadeIn();
    } else {
      $('.scrollTopBtn').fadeOut();
    }
  });

  $('.scrollTopBtn').on('click',function() {
    $("html,body").animate({
      scrollTop:0
    });
  });

  $('.menu__btn').on('click',function() {
    var clickPlaceType = $(this).data('scroll-place-type');
    // console.log(clickPlaceType);
    $('.title').each(function() {
      if($(this).data('scroll-place-type') == clickPlaceType) {
        var scrollPlace = $(this).offset().top;
        // console.log(scrollPlace);
        $("html,body").animate({
          scrollTop:scrollPlace
        });
      }
    });
  });
});
