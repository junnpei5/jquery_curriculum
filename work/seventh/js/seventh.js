$(function() {
  var point = [0];
  var sliderNum = 0;
  var sliderLength = $('.slider-list').find('li').length;
  for(var i = 0; i < sliderLength-1; i++) {
    var sliderWidth = $('.slider-list').find('li').eq(i).width();
    sliderNum += sliderWidth;
    point.push(sliderNum);
    console.log(point)
  }
  var list = 0;
  $('.slider-ctrl-btn').on('click', function() {
    if($(this).data('ctrl') == 'prev') {
      list--;
      if(list < 0) {
        list = sliderLength - 1;
      }
    }else{
      list++;
      if(list > sliderLength - 1) {
        list = 0
      }
    }
    $('.slider-list').animate({
      'left': (-point[list])
    }, 500);
  });

  // var point = ['0','-600','-1200','-1800']
  // var list = 0;
  // $('.is-next').on('click', function() {
  //   list++;
  //   if(list > 3) {
  //     list = 0
  //   }
  //   console.log(list);
  //   $('.slider-list').animate({
  //     'left': (point[list])
  //   }, 800);
  // });
  // $('.is-prev').on('click', function() {
  //   list--;
  //   if(list < 0) {
  //     list = 3
  //   }
  //   console.log(list);
  //   $('.slider-list').animate({
  //     'left': (point[list])
  //   }, 800);
  // });
});