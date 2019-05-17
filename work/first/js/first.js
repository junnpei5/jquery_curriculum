$('#q1').css('color', 'red');

$('#q2').click(function() {
  $(this).css('background-color', 'cadetblue');
});

$('#q3').click(fadeOut);
function fadeOut() {
  $(this).fadeOut(2000);
};

$('#q4').click(function() {
  $(this).prepend('DOMの中の前')
         .append('DOMの中の後')
         .before('DOMの前')
         .after('DOMの後');
});

$('#q5').click(function() {
  $(this).addClass('large');
});

$('#q6').click(function() {
  $(this).animate({
    'marginLeft': 100,
    'marginTop': 100
  },2000);
});

$('#q7').find('li').click(function() {
  var targetNum = $(this).index();
  console.log(targetNum);
  alert(targetNum);
});

$('#q8').hover(function() {
  $(this).addClass('large')
}, function() {
  $(this).removeClass('large')
});

$('#q9').click(function() {
  var text = $(this).data('text');
  console.log(text);
});

$('#q10').find('li').click(function() {
  var num = $(this).index();
  $('#q11').find('li').eq(num).addClass('large')
});