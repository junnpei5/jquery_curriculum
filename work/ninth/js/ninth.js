$(function() {
  $.ajax({
    url: './data.json'
    })
    .done(function(data) {
      var temp = '';
      // console.log(data.colorsArray);
      $.each(data.colorsArray,function(index,value) {
        temp += '<li class="colorList__item">'+
        '<p class="colorList__title" style="background-color: '+value.hexValue+';">'+
        value.colorName+'</p>'+
        '</li>'
      $('.colorList').html(temp);
      // console.log(temp)
      })
  });
});