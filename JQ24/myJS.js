$(function () {
    $(".BANNER").click(function () {
        $(this).find(".BOX").stop(true, false).slideToggle().end().siblings().find('.BOX').stop(true, false).slideUp()
    },)

})