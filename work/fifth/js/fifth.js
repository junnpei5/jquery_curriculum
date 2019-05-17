$(function() {
  $('.select').on('change', function() {
    var type = $(this).val();
    // $('.list').find('li').each(function() {
    //   var categoryType = $(this).data('category-type');
    //   $(this).hide();
    //   if (type === 'all') {
    //     $(this).show();
    //   }else if (type === categoryType) {
    //     $(this).show();
    //   }
    $('.list').find('li').hide();
    if (type === 'all') {
      $('.list').find('li').show();
    } else {
      $('.list').find('li').each(function() {
        var categoryType = $(this).data('category-type');
        if (type === categoryType) {
          $(this).show();
        };
      });
    }
  });
});