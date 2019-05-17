$(function() {
  var beforeKey = '';
  var viewPage = 1;
  $('.lists').before('<div class="message"></div>');
  $('#js-search-button').on('click',function() {
    buttonClick();
  });
  function buttonClick() {
    var key = $('.search__text__input').val();
    if (key == beforeKey) {
      viewPage++;
    }else{
      viewPage = 1;
      beforeKey = key;
    }
    $.ajax({
      url: 'https://app.rakuten.co.jp/services/api/BooksTotal/Search/20130522',
      type: 'GET',
      datatype: 'json',
      data: {
        keyword: key,
        hits: '20',
        page: viewPage,
        applicationId: '1019399324990976605',
        booksGenreId: '001'
      },
    }).done(function(data) {
      doneBlock(data);
    }).fail(function(data) {
      failBlock(data);
    });
    function doneBlock(data) {
      $('.message').empty();
      if (data.Items.length === 0) {
        $('.message').html('<div>検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
      }else{
      // console.log(data);
      var temp = '';
      $.each(data.Items,function(index,value) {
        temp += '<li class="lists__item">'+
        '<div class="lists__item__inner">'+
        '<a href="'+value.Item.itemUrl+'" class="lists__item__link" target="_blank">'+
        '<img src="'+value.Item.largeImageUrl+'" class="lists__item__img" alt="">'+'<p class="lists__item__detail">作品名： '+value.Item.author+'</p>'+
        '<p class="lists__item__detail">作者　： '+value.Item.title+'</p>'+'<p class="lists__item__detail">出版社： '+value.Item.publisherName+'</p>'+'</a>'+
        '</div>'+
        '</li>'
      })
      if (viewPage == 1) {
        $('.lists').html(temp);
      }else{
        $('.lists').prepend(temp);
      }
    };
    };
    function failBlock(data) {
      if (data.responseJSON.error_description === 'keyword must be set') {
        $('.message').html('<div>検索したいワードを入力してください。</div>');
      }
      if (data.responseJSON.error_description === 'keyword length must be over 2 characters') {
        $('.message').html('<div>半角英数字1文字では検索できません。<br>検索ワードを増やしてください。</div>');
      }
      if (data.status === 429) {
        $('.message').html('<div>連続して検索ボタンを押すと処理が適切に行われません。<br>時間を開けてから検索ボタンを押してください。</div>');
      }
      if (data.statusText === 'error') {
        $('.message').html('<div>ネットに繋がっていません。<br>ネットに接続してください。</div>');
      }
    };
  };
});