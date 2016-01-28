/* (c) 2015 Itsuki. http://otoitsuki.info  */


// ---------------------------------
// 漢堡選單
// ---------------------------------

// var hamburgerMenu = function() {

//  // 設定選單出現消失速度
//  var duration = 300;
    
//  // 簡化jQ物件名稱
//  var $button = $('.js-hamburger-menu'),
//  $menu = $('.menu'),
//  $menuFilter = $('.menu-nav-filter');

//  // 點選按鈕後進行開關設定，並判斷開關狀態
//  $button.click(function(event) {
//      event.preventDefault();


//      // 用增加/移除class的方式，把按鈕做成開關，呼叫MENU打開
//      $button.toggleClass('open');

//      if($button.hasClass('open')){

//          // 芝麻開門
//          $menu.animate({left:'+=250px'}, duration);
//          // 固定完左邊後就可以綁定fixed
//          $menu.css('position', 'fixed');
//          // tks for http://stackoverflow.com/questions/3656592/how-to-programmatically-disable-page-scrolling-with-jquery
//          $menuFilter.show();
//          $('html, body').css({
//              'overflow': 'auto',
//              'height': 'auto'
//          });
//      }else{
//          $menu.animate({left:'-=250px'}, duration);
//          $menu.css('position', 'absolute');
//          $menuFilter.hide();
//          $('html, body').css({
//              'overflow': '100%',
//              'height': '100%'
//          });
//      }

//  });

//  // 點選filter就會移除開關，並關閉MENU
//  $menuFilter.on('click', function(event) {
//      event.preventDefault();
//      $button.removeClass('open');
//      $menu.css('position', 'absolute');
//      $menu.animate({left:'-=250px'}, duration);
//      $menuFilter.hide();
//      $('html, body').css({
//          'overflow': '100%',
//          'height': '100%'
//      });
//  });

// };



// ---------------------------------
// img src svg
// tks from http://stackoverflow.com/questions/24933430/img-src-svg-changing-the-fill-color
// 帶 svg class 底下的 path 就可以直接修改
// ---------------------------------

var svgFill = function() {
    $('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
}


// ---------------------------------
// 啟動所有js
// ---------------------------------

$(document).ready(function(){
    svgFill();
});
