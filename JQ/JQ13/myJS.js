
$(function () {
    $('#menu').hover(function () {
        $(this).stop(true,false).animate({left:0},500,"easeOutBounce")
    },
    function () {
        $(this).stop(true, false).animate({ left: -158 }, 500, "easeOutBounce")
    })
})