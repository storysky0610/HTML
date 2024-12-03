
$(function () {
    $(window).scroll(function () {
        var HH = $(window).scrollTop() + 150;
        $('#MENU').stop(true,false).animate({top:HH},500,"easeOutBack")
     })
 })