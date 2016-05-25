
var menuBtn = function(){
    $('#menuButton').click(function(event) {
        event.defaultPrevented;
        $('.main-nav').toggle();
    });
};
$(function() {
    menuBtn();
});