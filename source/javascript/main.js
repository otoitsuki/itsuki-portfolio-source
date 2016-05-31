
// Article
(function() {
  var rssUrl = 'http://feeds.feedburner.com/otoitsuki',
    	rssNum = 5,
    	rssJson = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + rssNum + '&q=' + rssUrl;

  $.ajax({
      url: rssJson,
      type: 'GET',
      dataType: 'jsonp'
    })
    .done(function(data) {

      // 定義要做的事情的func //
      // 把 loader 取代掉
      $('.loader').remove();

      // 為了方便先重新命名
      var article = data.responseData.feed.entries;

      // for each entry... *
      $.each(article, function() {

        // 管理各項資料 //

        // 時間
        var date = new Date(this.publishedDate);
        // * parse month, day and year
        var month = date.getMonth();
        var day = date.getDate();
        var year = date.getFullYear();

        var time = year + '.' + month + '.' + day;
        // 標題
        var title = this.title;
        // 內容
        var content = this.content;

        // 連結
        var link = this.link;

        var entry =
          '<div class="article">' +
          '<div class="article-metadata">' +
          '<span class="metadata-date">' + time + '</span>' +
          '</div>' +
          '<div class="article-info">' +
          '<h3 class="article-title"><a href="' + link + '" target="_blank">' + title + '</a></h3>' +
          // '<div class="article-content">' + content + '</div>' +
          '</div>' +
          '</div>';
        
        $('.article-list').append(entry);
      })

    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
})();

var menuBtn = function(){
    $('#menuButton').click(function(event) {
        event.defaultPrevented;
        $('.main-nav').toggle();
    });
};

$(function() {
    menuBtn();
});