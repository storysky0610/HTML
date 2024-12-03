$(function () {
    $('.main').hover(
        function () {
            $(this).stop(true.false).animate({ top: -280 }, 500, 'easeOutBounce');
        }, function () {
            $(this).stop(true.false).animate({ top: -280 }, 500, 'easeOutBounce')
        })
})